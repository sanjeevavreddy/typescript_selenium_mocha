import * as XLSX from "xlsx"



// const workbook = XLSX.utils.book_new();

let workbook = XLSX.readFile("D:/sample.xlsx")

let sheetData: JSON[] = XLSX.utils.sheet_to_json(workbook.Sheets["sample"])

let newRow = JSON.parse("{}")
newRow.column1 = "column1Row11"
sheetData.push(newRow)

console.log(sheetData)

workbook.Sheets["sample"] = XLSX.utils.json_to_sheet(sheetData)

const worksheet = XLSX.utils.json_to_sheet(sheetData);

XLSX.utils.book_append_sheet(workbook, worksheet, 'sample1');

XLSX.writeFile(workbook, 'D:/sample.xlsx');