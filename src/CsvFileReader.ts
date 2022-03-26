import fs from 'fs';
import { dateStringTodate } from './utils';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((item: string): string[] => {
        return item.split(',');
      })
      .map((row: string[]): any => {
        return [
          dateStringTodate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
        ];
      });
  }
}
