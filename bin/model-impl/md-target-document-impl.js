'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class TargetDocumentImpl {
    static createTargetDocumentImpl(targetDocument, sectionName, sectionTitle) {
        return new TargetDocumentImpl(targetDocument, sectionName, sectionTitle);
    }
    constructor(targetDocument, sectionName, sectionTitle) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.setSectionName(sectionName);
        this.sectionTitle = sectionTitle;
    }
    setSectionName(sectionName) {
        this.sectionName = 'section-' + sectionName.substring(0, 3);
    }
    getSectionName() {
        return this.sectionName;
    }
}
exports.TargetDocumentImpl = TargetDocumentImpl;
