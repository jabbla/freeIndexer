import * as _ from './util';

class FreeIndexer {
    private source: object[];
    private indexers: any;
    constructor(source: object[]){
        this.source = source;
        this.indexers = {};
    }
    Indexer(key: string){
        return this.indexers[key] || (this.indexers[key] = new Maper(this.source, key));
    }
    getSource(){
        return this.source;
    }
};

class Maper {
    private source: object[];
    constructor(source: object[], key: string){
        _.mixinKeys(this, key, source);
    }
    getSource(){
        return this.source;
    }
};

export default function freeIndexer(originArray: object[]){
    return new FreeIndexer(originArray);
};