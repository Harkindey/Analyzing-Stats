import { MatchReader } from "./MatchReader";
import { Summary } from "../initial/Summary";


const matchReader = MatchReader.fromCSV('football.csv')
matchReader.load();


const summary = Summary.winAnylysisWithHtmlReport('Arsenal')
// const summary = new Summary(new WinsAnalysis('Tottenham'), new HTMLReport());

summary.buildAndPrintReport(matchReader.matches)