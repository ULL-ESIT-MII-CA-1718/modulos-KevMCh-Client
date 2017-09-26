## Example of using npm module

This is an example of how to run the [oop](https://github.com/ULL-ESIT-MII-CA-1718/modulos-KevMCh) module previously developed.

The first step is to **install the module**.

```javascript
~/modulos-KevMCh-Client $ npm install @kevmch/oop
```

Create the **input file** as in the example.

```javascript
~/modulos-KevMCh-Client $ cat input.json

[
  {"name": "Kilimanjaro\nMontaña mágica", "height": 5895, "country": "Tanzania"},
  {"name": "Everest", "height": 8848, "country": "Nepal\nPaís lejano"},
  {"name": "Mount Fuji", "height": 3776, "country": "Japan"},
  {"name": "Mont Blanc", "height": 4808, "country": "Italy/France"},
  {"name": "Vaalserberg", "height": 323, "country": "Netherlands"},
  {"name": "Denali", "height": 6168, "country": "United States"},
  {"name": "Popocatepetl", "height": 5465, "country": "Mexico"}
]
```

And to use the module we linked it, we created an **instance of the table class** and passed its function **_drawAllTable_** the data in json format.

```javascript
~/modulos-KevMCh-Client $ cat main.js

/**
 * Main program
 */
var input = require("./input.json");
var DTable = require("@kevmch/oop");

var table = new DTable();
console.log(table.drawAllTable(input));
```

**Final result**

```javascript
~/modulos-KevMCh-Client $ node main.js
name           height country      
-------------- ------ -------------
Kilimanjaro      5895 Tanzania     
Montaña mágica                     
Everest          8848 Nepal        
                      País lejano  
Mount Fuji       3776 Japan        
Mont Blanc       4808 Italy/France
Vaalserberg       323 Netherlands  
Denali           6168 United States
Popocatepetl     5465 Mexico   
```
