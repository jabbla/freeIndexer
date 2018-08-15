"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mixinKeys(instance, key, source) {
    var duplicate = {};
    for (var i = 0; i < source.length; i++) {
        var item = source[i];
        var keyValue = item[key];
        if (duplicate[keyValue]) {
            throw new Error('freeIndexer: duplicate key value');
        }
        instance[item[key]] = item;
        duplicate[item[key]] = true;
    }
}
exports.mixinKeys = mixinKeys;
;
//# sourceMappingURL=util.js.map