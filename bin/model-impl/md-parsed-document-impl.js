'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class MdParsedDocumentImpl {
    static createMdParsedDocumentImpl(parsedDocument, questionTitleToken, sectionTitleToken) {
        return new MdParsedDocumentImpl(parsedDocument, questionTitleToken, sectionTitleToken);
    }
    constructor(parsedDocument, questionTitleToken, sectionTitleToken) {
        this.documentPaths = parsedDocument.documentPaths;
        this.parsedTokensList = parsedDocument.parsedTokensList;
        this.fmMetaData = parsedDocument.fmMetaData || null;
        this.questionTitleToken = questionTitleToken;
        this.sectionTitleToken = sectionTitleToken;
    }
}
exports.MdParsedDocumentImpl = MdParsedDocumentImpl;
