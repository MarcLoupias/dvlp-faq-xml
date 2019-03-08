'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_summary_entete_meta_1 = require("./fm-summary-entete-meta");
const fm_summary_entete_titre_1 = require("./fm-summary-entete-titre");
class FmSummaryEntete {
    constructor({ rubrique, meta, titre, date, miseajour, googleAnalytics, licauteur, lictype, licannee, serveur, chemin, urlhttp, nomfaq }) {
        this.rubrique = rubrique;
        this.setMeta(meta);
        this.setTitre(titre);
        this.setDate(date);
        this.setMiseajour(miseajour);
        this.googleAnalytics = googleAnalytics;
        this.licauteur = licauteur;
        this.lictype = lictype;
        this.licannee = licannee;
        this.serveur = serveur;
        this.chemin = chemin;
        this.urlhttp = urlhttp;
        this.nomfaq = nomfaq;
    }
    setMeta(meta) {
        this.meta = new fm_summary_entete_meta_1.FmSummaryEnteteMeta(meta);
    }
    getMeta() {
        return this.meta;
    }
    setTitre(titre) {
        this.titre = new fm_summary_entete_titre_1.FmSummaryEnteteTitre(titre);
    }
    getTitre() {
        return this.titre;
    }
    setDate(date) {
        this.date = date.toISOString().slice(0, 10);
    }
    getDate() {
        return this.date;
    }
    setMiseajour(miseajour) {
        this.miseajour = miseajour.toISOString().slice(0, 10);
    }
    getMiseajour() {
        return this.miseajour;
    }
}
exports.FmSummaryEntete = FmSummaryEntete;
