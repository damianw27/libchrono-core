// Generated from ./src/antlr/Duration.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseDurationContext } from "./DurationParser";
import { DurationExpressionContext } from "./DurationParser";
import { DurationTermContext } from "./DurationParser";
import { DurationFactorContext } from "./DurationParser";
import { DurationContext } from "./DurationParser";
import { WeeksStatementContext } from "./DurationParser";
import { DaysStatementContext } from "./DurationParser";
import { HoursStatementContext } from "./DurationParser";
import { MinutesStatementContext } from "./DurationParser";
import { SecondsStatementContext } from "./DurationParser";
import { MillisecondsStatementContext } from "./DurationParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DurationParser`.
 */
export interface DurationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DurationParser.parseDuration`.
	 * @param ctx the parse tree
	 */
	enterParseDuration?: (ctx: ParseDurationContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.parseDuration`.
	 * @param ctx the parse tree
	 */
	exitParseDuration?: (ctx: ParseDurationContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.durationExpression`.
	 * @param ctx the parse tree
	 */
	enterDurationExpression?: (ctx: DurationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationExpression`.
	 * @param ctx the parse tree
	 */
	exitDurationExpression?: (ctx: DurationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	enterDurationTerm?: (ctx: DurationTermContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	exitDurationTerm?: (ctx: DurationTermContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	enterDurationFactor?: (ctx: DurationFactorContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	exitDurationFactor?: (ctx: DurationFactorContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.weeksStatement`.
	 * @param ctx the parse tree
	 */
	enterWeeksStatement?: (ctx: WeeksStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.weeksStatement`.
	 * @param ctx the parse tree
	 */
	exitWeeksStatement?: (ctx: WeeksStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.daysStatement`.
	 * @param ctx the parse tree
	 */
	enterDaysStatement?: (ctx: DaysStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.daysStatement`.
	 * @param ctx the parse tree
	 */
	exitDaysStatement?: (ctx: DaysStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.hoursStatement`.
	 * @param ctx the parse tree
	 */
	enterHoursStatement?: (ctx: HoursStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.hoursStatement`.
	 * @param ctx the parse tree
	 */
	exitHoursStatement?: (ctx: HoursStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.minutesStatement`.
	 * @param ctx the parse tree
	 */
	enterMinutesStatement?: (ctx: MinutesStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.minutesStatement`.
	 * @param ctx the parse tree
	 */
	exitMinutesStatement?: (ctx: MinutesStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.secondsStatement`.
	 * @param ctx the parse tree
	 */
	enterSecondsStatement?: (ctx: SecondsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.secondsStatement`.
	 * @param ctx the parse tree
	 */
	exitSecondsStatement?: (ctx: SecondsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DurationParser.millisecondsStatement`.
	 * @param ctx the parse tree
	 */
	enterMillisecondsStatement?: (ctx: MillisecondsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.millisecondsStatement`.
	 * @param ctx the parse tree
	 */
	exitMillisecondsStatement?: (ctx: MillisecondsStatementContext) => void;
}

