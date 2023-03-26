import { MatchData } from "./MatchData";

export interface Analyser {
    run (matches: MatchData[]):string;
}

export interface OutputTarget {
    print(report:string): void;
}

export class Summary {
constructor(public analyser: Analyser, public outputTarget: OutputTarget){}
}

// new Summary(new WinsAnalysis(), new ConsoleReport());