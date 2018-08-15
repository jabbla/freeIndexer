export function mixinKeys(instance: object, key: string, source: object[]){
    let duplicate: any = {};

    for(let i = 0; i < source.length; i++){
        let item: any = source[i];
        let keyValue = (item as any)[key];

        if((duplicate as any)[keyValue]){
            throw new Error('freeIndexer: duplicate key value');
        }
        (instance as any)[item[key]] = item;
        duplicate[item[key]] = true;
    }
};