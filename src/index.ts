import { MatchReader } from "./initial/MatchReader";
import { CsvFileReader } from "./initial/CsvFileReader";
import { MatchResult } from "./MatchResult";
// Create an Object that satifies the data reader interface
const csvFileReader = new CsvFileReader("football.csv");
// Creat an instance of Match Reader and pass in something satisfying the  'Datareader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Reference MatchReader.matches

console.log(`Man United won ${manUnitedWin} games`);
