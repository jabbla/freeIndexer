import freeIndexer from './dist/freeIndexer.js';

let array = [
    {name: 'BU类目', id: 'bu_id'},
    {name: '品牌', id: 'brand'},
    {name: '品牌', id: 'operation_type'},
    {name: '贸易方式', id: 'overseas_type'}
];

/**创建以name属性为索引的Maper */
const nameMaper = freeIndexer(array).Indexer('name');

console.log(nameMaper);