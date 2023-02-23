import { MatchReader } from "./initial/MatchReader";
import { CsvFileReader } from "./initial/CsvFileReader";
import { ConsoleReports } from "./initial/ReportTargets/ConsoleReport";
import { WinsAnalysis } from "./initial/Analysers/WinsAnalysis";
import { Summary } from "./initial/Summary";
import { HTMLReport } from "./initial/ReportTargets/HTMLReport";
// Create an Object that satifies the data reader interface
const csvFileReader = new CsvFileReader("football.csv");
// Creat an instance of Match Reader and pass in something satisfying the  'Datareader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const summary = new Summary(new WinsAnalysis('Tottenham'), new HTMLReport());

summary.buildAndPrintReport(matchReader.matches)
