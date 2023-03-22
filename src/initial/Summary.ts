import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analysers/WinsAnalysis";
import { HTMLReport } from "./ReportTargets/HTMLReport";

export interface Analyser {
    run (matches: MatchData[]):string;
}

export interface OutputTarget {
    print(report:string): void;
}

export class Summary {
    static winAnylysisWithHtmlReport (team:string){
        return new Summary(
            new WinsAnalysis(team),
            new HTMLReport(),
        )
    }
    
 constructor(public analyser: Analyser, public outputTarget: OutputTarget){}

 buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches)
    this.outputTarget.print(output);
 }
}

