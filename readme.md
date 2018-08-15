# freeIndexer

## Quick Start
```bash
npm i freeIndexer
```

### script import
```html
<script src="./node_modules/rwatcher/dist/freeIndexer.min.js"></script>
```

```js
var FreeIndexer = window.FreeIndexer;
```

### npm import
```js
var FreeIndexer = require('freeIndexer');
```

## API

### Create FreeIndexer Instance
```js
let source = [
    {name: 'jabbla', id: 0, score: 100},
    {name: 'qonzon', id: 1, score: 90},
    {name: 'gloria', id: 2, score: 80}
];

let usersInst = FreeIndexer(source);
```

### Get specific Maper
```js
let usersNameMaper = usersInst.Indexer('name');

console.log(usersNameMaper.jabbla); //{name: 'jabbla', id: 0, score: 100}
```

create a Map which indexed with the key 'name'.
But the value of 'name' must be unique.

### Get source of Indexer or Maper
```js
usersInst.getSource();
usersNameMaper.getSource();
```

it's useful, when you create a Indexer like the code below. 

you don't need to declear an additional variable for the source.

```js
let instance = FreeIndexer([
    {name: 'jabbla', id: 0, score: 100},
    {name: 'qonzon', id: 1, score: 90},
    {name: 'gloria', id: 2, score: 80}
]);
```