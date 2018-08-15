"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("./util");
var FreeIndexer = /** @class */ (function () {
    function FreeIndexer(source) {
        this.source = source;
        this.indexers = {};
    }
    FreeIndexer.prototype.Indexer = function (key) {
        return this.indexers[key] || (this.indexers[key] = new Maper(this.source, key));
    };
    FreeIndexer.prototype.getSource = function () {
        return this.source;
    };
    return FreeIndexer;
}());
;
var Maper = /** @class */ (function () {
    function Maper(source, key) {
        _.mixinKeys(this, key, source);
    }
    Maper.prototype.getSource = function () {
        return this.source;
    };
    return Maper;
}());
;
function freeIndexer(originArray) {
    return new FreeIndexer(originArray);
}
exports.default = freeIndexer;
;
//# sourceMappingURL=index.js.map