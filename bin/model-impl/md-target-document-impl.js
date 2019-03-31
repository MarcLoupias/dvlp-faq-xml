'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class TargetDocumentImpl {
    static createTargetDocumentImpl(targetDocument, slugifiedQaName, slugifiedSectionName, sectionTitle) {
        return new TargetDocumentImpl(targetDocument, slugifiedQaName, slugifiedSectionName, sectionTitle);
    }
    constructor(targetDocument, slugifiedQaName, slugifiedSectionName, sectionTitle) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.slugifiedQaName = slugifiedQaName;
        this.slugifiedSectionName = slugifiedSectionName;
        this.sectionTitle = sectionTitle;
    }
}
exports.TargetDocumentImpl = TargetDocumentImpl;
