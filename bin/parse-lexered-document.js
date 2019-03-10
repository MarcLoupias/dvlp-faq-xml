'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
const dvlp_commons_1 = require("dvlp-commons");
const model_impl_1 = require("./model-impl");
function parseLexeredDocument(mdLexeredDocument) {
    function getQuestionTitleToken(tokens) {
        for (const token of tokens) {
            if (token.type === 'heading' && token.depth === 3) {
                return [token];
            }
        }
    }
    function getSectionTitleToken(tokens) {
        for (const token of tokens) {
            if (token.type === 'heading' && token.depth === 2) {
                return [token];
            }
        }
    }
    function filterIrrelevantTitlesTokens(token) {
        return token.type !== 'heading';
    }
    if (mdLexeredDocument.documentPaths.basename === 'SUMMARY') {
        return md_file_converter_1.MdParsedDocument.createMdParsedDocument({
            documentPaths: mdLexeredDocument.documentPaths,
            parsedTokensList: mdLexeredDocument.tokensList,
            fmMetaData: new dvlp_commons_1.FmSummary(mdLexeredDocument.fmMetaData)
        });
    }
    else {
        return model_impl_1.MdParsedDocumentImpl.createMdParsedDocumentImpl(md_file_converter_1.MdParsedDocument.createMdParsedDocument({
            documentPaths: mdLexeredDocument.documentPaths,
            parsedTokensList: mdLexeredDocument.tokensList.filter(filterIrrelevantTitlesTokens),
            fmMetaData: new dvlp_commons_1.FmQa(mdLexeredDocument.fmMetaData)
        }), getQuestionTitleToken(mdLexeredDocument.tokensList), getSectionTitleToken(mdLexeredDocument.tokensList));
    }
}
exports.parseLexeredDocument = parseLexeredDocument;
