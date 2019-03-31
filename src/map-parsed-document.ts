'use strict';

import {
    UnConfiguredMapParsedDocumentFnType, MapParsedDocumentFnType, ITargetDocument, MdParsedDocument, TargetDocument
} from 'md-file-converter';
import { FmQa } from 'dvlp-commons';
import { MdParsedDocumentImpl, TargetDocumentImpl } from './model-impl';
import { MarkedOptions, Tokens } from 'marked';

export function makeUnConfiguredMapParsedDocument({ marked, getSlug }: any): UnConfiguredMapParsedDocumentFnType {
    return (conf: { markedOptions: MarkedOptions }): MapParsedDocumentFnType => {
        return (mdParsedDocument: MdParsedDocument): ITargetDocument => {
            function parseWithMarked(tokens: any) {
                tokens.links = Object.create(null); // pour fix erreur levée ici https://github.com/markedjs/marked/blob/master/lib/marked.js#L642
                return marked.parser(tokens, conf.markedOptions);
            }

            if (mdParsedDocument.documentPaths.basename === 'SUMMARY') {
                return TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions),
                    fmMetaData: mdParsedDocument.fmMetaData
                });

            } else {
                const mdParsedDocumentImpl: MdParsedDocumentImpl = mdParsedDocument as MdParsedDocumentImpl;
                const qaFmMetaData: FmQa = mdParsedDocumentImpl.fmMetaData as FmQa;
                const questionTitleToken: Tokens.Heading = mdParsedDocumentImpl.questionTitleToken[0] as Tokens.Heading;

                const qaContent: string = parseWithMarked(mdParsedDocumentImpl.parsedTokensList);
                const qaTitleText: string = questionTitleToken.text;
                const qaTitleTag: string = parseWithMarked(mdParsedDocumentImpl.questionTitleToken);
                const sectionTitle: string = parseWithMarked(mdParsedDocumentImpl.sectionTitleToken);

                const slugifiedQaName: string = getSlug(
                    qaTitleText
                        .replace('<i>', '')
                        .replace('</i>', ''),
                    { lang: 'fr' });
                const slugifiedSectionName: string = getSlug(
                    sectionTitle
                        .replace('<i>', '')
                        .replace('</i>', ''),
                    { lang: 'fr' });
                const transformedData: string = `<QA create_date="${qaFmMetaData.getCreateDate()}" last_update="${qaFmMetaData.getLastUpdateDate()}" name="${slugifiedQaName}">${qaTitleTag}<author name="${qaFmMetaData.author}"/><keywords>${qaFmMetaData.keywords}</keywords><answer>${qaContent}</answer></QA>`;

                return TargetDocumentImpl.createTargetDocumentImpl(
                    TargetDocument.createTargetDocument({
                        documentPaths: mdParsedDocumentImpl.documentPaths,
                        transformedData,
                        fmMetaData: qaFmMetaData
                    }),
                    slugifiedQaName,
                    slugifiedSectionName,
                    sectionTitle
                );
            }
        };
    };
}
