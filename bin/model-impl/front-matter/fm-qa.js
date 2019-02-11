'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class FmQa {
    constructor({ createDate, lastUpdateDate, author, keywords }) {
        this.setCreateDate(createDate);
        this.setLastUpdateDate(lastUpdateDate);
        this.author = author;
        this.keywords = keywords;
    }
    setCreateDate(createDate) {
        this.createDate = createDate.toISOString().slice(0, 10);
    }
    getCreateDate() {
        return this.createDate;
    }
    setLastUpdateDate(lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate.toISOString().slice(0, 10);
    }
    getLastUpdateDate() {
        return this.lastUpdateDate;
    }
}
exports.FmQa = FmQa;
