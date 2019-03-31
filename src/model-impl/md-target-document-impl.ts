'use strict';

import { IDocumentPaths, ITargetDocument } from 'md-file-converter';

export class TargetDocumentImpl implements ITargetDocument {
    public static createTargetDocumentImpl(targetDocument: ITargetDocument, slugifiedQaName: string, slugifiedSectionName: string, sectionTitle: string): TargetDocumentImpl {
        return new TargetDocumentImpl(targetDocument, slugifiedQaName, slugifiedSectionName, sectionTitle);
    }

    public documentPaths: IDocumentPaths;
    public transformedData: string;
    public fmMetaData?: object;
    public slugifiedQaName: string;
    public slugifiedSectionName: string;
    public sectionTitle: string;

    protected constructor(targetDocument: ITargetDocument, slugifiedQaName: string, slugifiedSectionName: string, sectionTitle: string) {
        this.documentPaths = targetDocument.documentPaths;
        this.transformedData = targetDocument.transformedData;
        this.fmMetaData = targetDocument.fmMetaData || null;
        this.slugifiedQaName = slugifiedQaName;
        this.slugifiedSectionName = slugifiedSectionName;
        this.sectionTitle = sectionTitle;
    }
}
