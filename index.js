const reader = require('xlsx');
const fs = require('fs');

const file = reader.readFile(`./auxiliar.xlsx`);

let data = []
let texto="";

const sheets = file.SheetNames;

const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[0]])

    temp.forEach((res) => {

        data.push(res)
    
    })

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
    
        texto += `${String(element["__EMPTY"])}; ${element["__EMPTY_1"]};${String(element["__EMPTY_2"]).replace("undefined", "null")};\n`
    
    
    
    }
    
    fs.writeFile(`fontes.csv`, texto, (err) => {
    
    });

    console.log(data[0].__EMPTY)