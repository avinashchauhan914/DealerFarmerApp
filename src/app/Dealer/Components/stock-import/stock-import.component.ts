import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;

import { DealerService } from '../../Services/dealer.service';
import { StockImport } from '../../Models/stockImport.model';

// type AOA = any[][];


@Component({
  selector: 'app-stock-import',
  templateUrl: './stock-import.component.html',
  styleUrls: ['./stock-import.component.css']
})
export class StockImportComponent implements OnInit {

  constructor(private dealerService: DealerService) { }

  ngOnInit() { 
  }
  excelRows: any;
  // data: StockImport[] = [];
  // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  // fileName: string = 'SheetJS.xlsx';

  // onFileChange(evt: any) {
  //   /* wire up file reader */
  //   const target: DataTransfer = <DataTransfer>(evt.target);
  //   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  //   const reader: FileReader = new FileReader();
  //   reader.onload = (e: any) => {
  //     /* read workbook */
  //     const bstr: string = e.target.result;
  //     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  //     /* grab first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     this.data = <StockImport[]>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
  //     console.log(this.data);
  //   };
  //   reader.readAsBinaryString(target.files[0]);
  // }


  // export(): void {
  //   /* generate worksheet */
  //   const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);
  // }
  onFileChange(event: any) {
  const target: DataTransfer = <DataTransfer>(event.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const bstr: string = e.target.result;
          this.ProcessExcel(bstr);
  };
//   //For Browsers other than IE.
//   if (event.target.files.length === 1) {
//     const reader: FileReader = new FileReader();
//       reader.onload =  (e: any) => {
//         const bstr: string = e.target.result;
//           this.ProcessExcel(bstr);
//       };
      reader.readAsBinaryString(event.target.files[0]);
//   } 
}

ProcessExcel(data) {
  //Read the Excel File data.
  var workbook = XLSX.read(data, {
      type: 'binary'
  });

  //Fetch the name of First Sheet.
  var firstSheet = workbook.SheetNames[0];

  //Read all rows from First Sheet into an JSON array.
  this.excelRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
}

  findValue(event){
   
  }

  saveStockData(event){
    // this.dealerService.SaveStockData(this);
  }

}
