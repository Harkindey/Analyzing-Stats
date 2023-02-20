import { MatchResult } from "../../MatchResult";
import { MatchData } from "../MatchData";
import { Analyser } from "../Sumarry";

export class  WinsAnalysis implements Analyser {
 constructor(public team:string){}
 
 run(matches:MatchData[]):string {
    let wins = 0;
    for (let match of matches) {
        if (
            (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
            (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
        ) {
            wins++;
        }
    }
    return `Team ${this.team} won ${wins} games`
 }    
}