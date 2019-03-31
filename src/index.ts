'use strict';

import * as marked from 'marked';
import * as getSlug from 'speakingurl';

import markedRendererXmlImpl from './marked-renderer-xml-impl';
import { parseLexeredDocument } from './parse-lexered-document';
import { makeUnConfiguredMapParsedDocument } from './map-parsed-document';
import { getReducerConf } from './get-reducer-conf';
import { reduceTargetDocumentList } from './reduce-target-document-list';

import {
    IImplPkgBasic,
    IImplPkgParser,
    IImplPkgMapper,
    IImplPkgReducer,
    ParseLexeredDocumentFnType,
    UnConfiguredMapParsedDocumentFnType,
    GetReducerParametersFnType,
    ReduceTargetDocumentListFnType
} from 'md-file-converter';

const targetDocumentFileExtension = '.xml';
const unConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument({ marked, getSlug });
const markedRenderer: marked.Renderer = Object.assign(
    new marked.Renderer(),
    { ...markedRendererXmlImpl }
);
const markedOptions: marked.MarkedOptions = {
    renderer: markedRenderer,
    smartypants: true,
    gfm: true,
    breaks: true
};

class MapReduceToXmlImplPkg implements IImplPkgBasic, IImplPkgParser, IImplPkgMapper, IImplPkgReducer {
    public markedOptions: marked.MarkedOptions = markedOptions;
    public targetDocumentFileExtension: string = targetDocumentFileExtension;
    public parseLexeredDocument: ParseLexeredDocumentFnType = parseLexeredDocument;
    public unConfiguredMapParsedDocument: UnConfiguredMapParsedDocumentFnType = unConfiguredMapParsedDocument;
    public getReducerConf: GetReducerParametersFnType = getReducerConf;
    public reduceTargetDocumentList: ReduceTargetDocumentListFnType = reduceTargetDocumentList;
}

export default new MapReduceToXmlImplPkg();
