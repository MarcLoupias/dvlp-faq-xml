'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class SectionListObject {
    constructor(sectionName, sectionTitle, qaList) {
        this.sectionName = sectionName;
        this.sectionTitle = sectionTitle;
        this.qaList = qaList;
    }
}
function initXmlDocument(reducedTargetDocumentList, targetDocumentToReduceCurrent, index, targetDocumentToReduceList) {
    const summaryFmMetaData = reducedTargetDocumentList[0].fmMetaData;
    reducedTargetDocumentList[0].xmlAuthorList = summaryFmMetaData.getAuteurs().reduce((xml, auteur) => {
        return xml + `<authorDescription name="${auteur.name}" role="${auteur.role}"><fullname>${auteur.fullname}</fullname><url>${auteur.url}</url></authorDescription>`;
    }, '');
    const sectionListObject = targetDocumentToReduceList
        .reduce((sections, qa) => {
        if (!sections[qa.getSectionName()]) {
            sections[qa.getSectionName()] = new SectionListObject(qa.getSectionName(), qa.sectionTitle, []);
            sections[qa.getSectionName()].qaList.push(qa.documentPaths.basename);
            return sections;
        }
        else {
            sections[qa.getSectionName()].qaList.push(qa.documentPaths.basename);
            return sections;
        }
    }, {});
    reducedTargetDocumentList[0].xmlSectionList = Object
        .entries(sectionListObject)
        .reduce((xml, section) => {
        const links = section[1].qaList.reduce((qaXml, basename) => {
            return qaXml + `<link href="${basename}"/>`;
        }, '');
        return xml + `<section id="${section[1].sectionName}"><title>${section[1].sectionTitle}</title>${links}</section>`;
    }, '');
    return addXmlQa(reducedTargetDocumentList, targetDocumentToReduceCurrent);
}
function finalizeXmlDocument(reducedTargetDocumentList, targetDocumentToReduce) {
    reducedTargetDocumentList = addXmlQa(reducedTargetDocumentList, targetDocumentToReduce);
    const fmMetaData = reducedTargetDocumentList[0].fmMetaData;
    reducedTargetDocumentList[0].transformedData = `<?xml version="1.0" encoding="UTF-8"?>
<document>
    <!-- en-tete de la FAQ -->
    <editeur>
        <edversion>${fmMetaData.getEditeur().edversion}</edversion>
        <edtypexml>${fmMetaData.getEditeur().edtypexml}</edtypexml>
    </editeur>
    <entete>
        <rubrique>${fmMetaData.getEntete().rubrique}</rubrique>
        <meta>
            <description>${fmMetaData.getEntete().getMeta().description}</description>
            <keywords>${fmMetaData.getEntete().getMeta().keywords}</keywords>
        </meta>
        <titre>
            <page>${fmMetaData.getEntete().getTitre().page}</page>
            <article>${fmMetaData.getEntete().getTitre().article}</article>
        </titre>
        <date>${fmMetaData.getEntete().getDate()}</date>
        <miseajour>${fmMetaData.getEntete().getMiseajour()}</miseajour>
        <google-analytics>${fmMetaData.getEntete().googleAnalytics}</google-analytics>
        <licauteur>${fmMetaData.getEntete().licauteur}</licauteur>
        <lictype>${fmMetaData.getEntete().lictype}</lictype>
        <licannee>${fmMetaData.getEntete().licannee}</licannee>
        <serveur>${fmMetaData.getEntete().serveur}</serveur>
        <chemin>${fmMetaData.getEntete().chemin}</chemin>
        <urlhttp>${fmMetaData.getEntete().urlhttp}</urlhttp>
        <nopdf/>
        <nozip/>
        <nodownload/>
        <noebook/>
        <nomfaq>${fmMetaData.getEntete().nomfaq}</nomfaq>
    </entete>
    <!-- description des auteurs -->
    <authorDescriptions>${reducedTargetDocumentList[0].xmlAuthorList}</authorDescriptions>
    <!-- Edito de la FAQ, il faut la placer dans des balises paragraph -->
    <edito>
        <paragraph>${fmMetaData.edito}</paragraph>
    </edito>
    <!-- Sommaire de la FAQ -->
    <!-- licence de reproduction affiché en bas de l'article -->
    <licence>${fmMetaData.licence}</licence>
    <summary>${reducedTargetDocumentList[0].xmlSectionList}</summary>
    <!-- Liste des questions de la FAQ -->
    <QAs>${reducedTargetDocumentList[0].xmlQaList}</QAs>
</document>
`;
    return reducedTargetDocumentList;
}
function addXmlQa(reducedTargetDocumentList, targetDocumentToReduce) {
    reducedTargetDocumentList[0].xmlQaList += targetDocumentToReduce.transformedData;
    return reducedTargetDocumentList;
}
function reduceTargetDocumentList(reducedTargetDocumentList, targetDocumentToReduce, index, targetDocumentToReduceList) {
    if (index === 0) {
        return initXmlDocument(reducedTargetDocumentList, targetDocumentToReduce, index, targetDocumentToReduceList);
    }
    if (index === targetDocumentToReduceList.length - 1) {
        return finalizeXmlDocument(reducedTargetDocumentList, targetDocumentToReduce);
    }
    return addXmlQa(reducedTargetDocumentList, targetDocumentToReduce);
}
exports.reduceTargetDocumentList = reduceTargetDocumentList;
