'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ReducedTargetDocumentImpl {
    static createReducedTargetDocumentImpl(targetDocument, xmlAuthorList, xmlSectionList, xmlQaList) {
        return new ReducedTargetDocumentImpl(targetDocument, xmlAuthorList, xmlSectionList, xmlQaList);
    }
    constructor(targetDocument, xmlAuthorList, xmlSectionList, xmlQaList) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.xmlAuthorList = xmlAuthorList || '';
        this.xmlSectionList = xmlSectionList || '';
        this.xmlQaList = xmlQaList || '';
    }
}
exports.ReducedTargetDocumentImpl = ReducedTargetDocumentImpl;
