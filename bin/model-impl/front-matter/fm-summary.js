'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_summary_auteur_1 = require("./fm-summary-auteur");
const fm_summary_editeur_1 = require("./fm-summary-editeur");
const fm_summary_entete_1 = require("./fm-summary-entete");
class FmSummary {
    constructor({ auteurs, editeur, entete, edito, licence }) {
        this.setAuteurs(auteurs);
        this.setEditeur(editeur);
        this.setEntete(entete);
        this.edito = edito;
        this.licence = licence;
    }
    setAuteurs(auteurs) {
        this.auteurs = [...auteurs.map((auteur) => new fm_summary_auteur_1.FmSummaryAuteur(auteur))];
    }
    getAuteurs() {
        return this.auteurs;
    }
    setEditeur(editeur) {
        this.editeur = new fm_summary_editeur_1.FmSummaryEditeur(editeur);
    }
    getEditeur() {
        return this.editeur;
    }
    setEntete(entete) {
        this.entete = new fm_summary_entete_1.FmSummaryEntete(entete);
    }
    getEntete() {
        return this.entete;
    }
}
exports.FmSummary = FmSummary;
