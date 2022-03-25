import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

enum MacthResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

let manUnitedWin = 0;

for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] === MacthResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MacthResult.AwayWin)
  ) {
    manUnitedWin++;
  }
}
console.log(`Man United won ${manUnitedWin} games`);
