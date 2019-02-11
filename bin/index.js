'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const marked_renderer_xml_impl_1 = require("./marked-renderer-xml-impl");
const parse_lexered_document_1 = require("./parse-lexered-document");
const map_parsed_document_1 = require("./map-parsed-document");
const get_reducer_conf_1 = require("./get-reducer-conf");
const reduce_target_document_list_1 = require("./reduce-target-document-list");
const targetDocumentFileExtension = '.xml';
const unConfiguredMapParsedDocument = map_parsed_document_1.makeUnConfiguredMapParsedDocument({ marked });
const markedRenderer = Object.assign(new marked.Renderer(), { ...marked_renderer_xml_impl_1.default });
const markedOptions = {
    renderer: markedRenderer,
    smartypants: true,
    gfm: true,
    breaks: true
};
class MapReduceToXmlImplPkg {
    constructor() {
        this.markedOptions = markedOptions;
        this.targetDocumentFileExtension = targetDocumentFileExtension;
        this.parseLexeredDocument = parse_lexered_document_1.parseLexeredDocument;
        this.unConfiguredMapParsedDocument = unConfiguredMapParsedDocument;
        this.getReducerConf = get_reducer_conf_1.getReducerConf;
        this.reduceTargetDocumentList = reduce_target_document_list_1.reduceTargetDocumentList;
    }
}
exports.default = new MapReduceToXmlImplPkg();
