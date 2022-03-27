import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
// Create an Object that satifies the data reader interface
const csvFileReader = new CsvFileReader('football.csv');
// Creat an instance of Match Reader and pass in something satisfying the  'Datareader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Reference MatchReader.matches
let manUnitedWin = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWin++;
  }
}
console.log(`Man United won ${manUnitedWin} games`);
