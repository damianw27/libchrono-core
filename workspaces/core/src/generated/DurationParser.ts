// Generated from ./src/antlr/Duration.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
// import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { DurationListener } from './DurationListener';

export class DurationParser extends Parser {
  public static readonly ADD = 1;
  public static readonly SUB = 2;
  public static readonly MUL = 3;
  public static readonly DIV = 4;
  public static readonly LP = 5;
  public static readonly RP = 6;
  public static readonly WEEK = 7;
  public static readonly DAY = 8;
  public static readonly HOUR = 9;
  public static readonly MINUTE = 10;
  public static readonly SECOND = 11;
  public static readonly MILLISECONDS = 12;
  public static readonly NUMBER = 13;
  public static readonly WS = 14;
  public static readonly RULE_parseDuration = 0;
  public static readonly RULE_durationExpression = 1;
  public static readonly RULE_durationTerm = 2;
  public static readonly RULE_durationFactor = 3;
  public static readonly RULE_duration = 4;
  public static readonly RULE_weeksStatement = 5;
  public static readonly RULE_daysStatement = 6;
  public static readonly RULE_hoursStatement = 7;
  public static readonly RULE_minutesStatement = 8;
  public static readonly RULE_secondsStatement = 9;
  public static readonly RULE_millisecondsStatement = 10;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'parseDuration',
    'durationExpression',
    'durationTerm',
    'durationFactor',
    'duration',
    'weeksStatement',
    'daysStatement',
    'hoursStatement',
    'minutesStatement',
    'secondsStatement',
    'millisecondsStatement',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'('",
    "')'",
    "'w'",
    "'d'",
    "'h'",
    "'m'",
    "'s'",
    "'ms'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'ADD',
    'SUB',
    'MUL',
    'DIV',
    'LP',
    'RP',
    'WEEK',
    'DAY',
    'HOUR',
    'MINUTE',
    'SECOND',
    'MILLISECONDS',
    'NUMBER',
    'WS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    DurationParser._LITERAL_NAMES,
    DurationParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return DurationParser.VOCABULARY;
  }

  // tslint:enable:no-trailing-whitespace

  // @Override
  public readonly grammarFileName = 'Duration.g4';

  // @Override
  public get ruleNames(): string[] {
    return DurationParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return DurationParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(DurationParser._ATN, this);
  }

  // @RuleVersion(0)
  public parseDuration(): ParseDurationContext {
    let _localctx: ParseDurationContext = new ParseDurationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 0, DurationParser.RULE_parseDuration);
    try {
      this.state = 28;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 22;
            this.duration();
            this.state = 23;
            this.match(DurationParser.EOF);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 25;
            this.durationExpression();
            this.state = 26;
            this.match(DurationParser.EOF);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public durationExpression(): DurationExpressionContext {
    let _localctx: DurationExpressionContext = new DurationExpressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, DurationParser.RULE_durationExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 30;
        this.durationTerm();
        this.state = 35;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === DurationParser.ADD || _la === DurationParser.SUB) {
          {
            {
              this.state = 31;
              _la = this._input.LA(1);
              if (!(_la === DurationParser.ADD || _la === DurationParser.SUB)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 32;
              this.durationTerm();
            }
          }
          this.state = 37;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public durationTerm(): DurationTermContext {
    let _localctx: DurationTermContext = new DurationTermContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, DurationParser.RULE_durationTerm);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 38;
        this.durationFactor();
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === DurationParser.MUL || _la === DurationParser.DIV) {
          {
            {
              this.state = 39;
              _la = this._input.LA(1);
              if (!(_la === DurationParser.MUL || _la === DurationParser.DIV)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 40;
              this.durationFactor();
            }
          }
          this.state = 45;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public durationFactor(): DurationFactorContext {
    let _localctx: DurationFactorContext = new DurationFactorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, DurationParser.RULE_durationFactor);
    try {
      this.state = 51;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case DurationParser.EOF:
        case DurationParser.ADD:
        case DurationParser.SUB:
        case DurationParser.MUL:
        case DurationParser.DIV:
        case DurationParser.RP:
        case DurationParser.NUMBER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 46;
            this.duration();
          }
          break;
        case DurationParser.LP:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 47;
            this.match(DurationParser.LP);
            this.state = 48;
            this.durationExpression();
            this.state = 49;
            this.match(DurationParser.RP);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public duration(): DurationContext {
    let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, DurationParser.RULE_duration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 54;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
          case 1:
            {
              this.state = 53;
              this.weeksStatement();
            }
            break;
        }
        this.state = 57;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
          case 1:
            {
              this.state = 56;
              this.daysStatement();
            }
            break;
        }
        this.state = 60;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
          case 1:
            {
              this.state = 59;
              this.hoursStatement();
            }
            break;
        }
        this.state = 63;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              this.state = 62;
              this.minutesStatement();
            }
            break;
        }
        this.state = 66;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1:
            {
              this.state = 65;
              this.secondsStatement();
            }
            break;
        }
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === DurationParser.NUMBER) {
          {
            this.state = 68;
            this.millisecondsStatement();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public weeksStatement(): WeeksStatementContext {
    let _localctx: WeeksStatementContext = new WeeksStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, DurationParser.RULE_weeksStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 71;
        this.match(DurationParser.NUMBER);
        this.state = 72;
        this.match(DurationParser.WEEK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public daysStatement(): DaysStatementContext {
    let _localctx: DaysStatementContext = new DaysStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 12, DurationParser.RULE_daysStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 74;
        this.match(DurationParser.NUMBER);
        this.state = 75;
        this.match(DurationParser.DAY);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public hoursStatement(): HoursStatementContext {
    let _localctx: HoursStatementContext = new HoursStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 14, DurationParser.RULE_hoursStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 77;
        this.match(DurationParser.NUMBER);
        this.state = 78;
        this.match(DurationParser.HOUR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public minutesStatement(): MinutesStatementContext {
    let _localctx: MinutesStatementContext = new MinutesStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, DurationParser.RULE_minutesStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 80;
        this.match(DurationParser.NUMBER);
        this.state = 81;
        this.match(DurationParser.MINUTE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public secondsStatement(): SecondsStatementContext {
    let _localctx: SecondsStatementContext = new SecondsStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, DurationParser.RULE_secondsStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 83;
        this.match(DurationParser.NUMBER);
        this.state = 84;
        this.match(DurationParser.SECOND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public millisecondsStatement(): MillisecondsStatementContext {
    let _localctx: MillisecondsStatementContext =
      new MillisecondsStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, DurationParser.RULE_millisecondsStatement);
    try {
      this.state = 89;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 86;
            this.match(DurationParser.NUMBER);
            this.state = 87;
            this.match(DurationParser.MILLISECONDS);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 88;
            this.match(DurationParser.NUMBER);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10^\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02' +
    '\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x1F\n\x02\x03\x03\x03\x03\x03' +
    "\x03\x07\x03$\n\x03\f\x03\x0E\x03'\v\x03\x03\x04\x03\x04\x03\x04\x07" +
    '\x04,\n\x04\f\x04\x0E\x04/\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x05\x056\n\x05\x03\x06\x05\x069\n\x06\x03\x06\x05\x06<\n\x06\x03\x06' +
    '\x05\x06?\n\x06\x03\x06\x05\x06B\n\x06\x03\x06\x05\x06E\n\x06\x03\x06' +
    '\x05\x06H\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t' +
    '\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\\\n' +
    '\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02' +
    '\x10\x02\x12\x02\x14\x02\x16\x02\x02\x04\x03\x02\x03\x04\x03\x02\x05\x06' +
    '\x02]\x02\x1E\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06(\x03\x02\x02\x02' +
    '\b5\x03\x02\x02\x02\n8\x03\x02\x02\x02\fI\x03\x02\x02\x02\x0EL\x03\x02' +
    '\x02\x02\x10O\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14U\x03\x02\x02\x02' +
    '\x16[\x03\x02\x02\x02\x18\x19\x05\n\x06\x02\x19\x1A\x07\x02\x02\x03\x1A' +
    '\x1F\x03\x02\x02\x02\x1B\x1C\x05\x04\x03\x02\x1C\x1D\x07\x02\x02\x03\x1D' +
    '\x1F\x03\x02\x02\x02\x1E\x18\x03\x02\x02\x02\x1E\x1B\x03\x02\x02\x02\x1F' +
    '\x03\x03\x02\x02\x02 %\x05\x06\x04\x02!"\t\x02\x02\x02"$\x05\x06\x04' +
    "\x02#!\x03\x02\x02\x02$'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02" +
    "\x02\x02&\x05\x03\x02\x02\x02'%\x03\x02\x02\x02(-\x05\b\x05\x02)*\t\x03" +
    '\x02\x02*,\x05\b\x05\x02+)\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02' +
    '\x02\x02-.\x03\x02\x02\x02.\x07\x03\x02\x02\x02/-\x03\x02\x02\x0206\x05' +
    '\n\x06\x0212\x07\x07\x02\x0223\x05\x04\x03\x0234\x07\b\x02\x0246\x03\x02' +
    '\x02\x0250\x03\x02\x02\x0251\x03\x02\x02\x026\t\x03\x02\x02\x0279\x05' +
    '\f\x07\x0287\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02\x02\x02:<\x05' +
    '\x0E\b\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=?\x05' +
    '\x10\t\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02@B\x05' +
    '\x12\n\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02\x02CE\x05' +
    '\x14\v\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02FH\x05' +
    '\x16\f\x02GF\x03\x02\x02\x02GH\x03\x02\x02\x02H\v\x03\x02\x02\x02IJ\x07' +
    '\x0F\x02\x02JK\x07\t\x02\x02K\r\x03\x02\x02\x02LM\x07\x0F\x02\x02MN\x07' +
    '\n\x02\x02N\x0F\x03\x02\x02\x02OP\x07\x0F\x02\x02PQ\x07\v\x02\x02Q\x11' +
    '\x03\x02\x02\x02RS\x07\x0F\x02\x02ST\x07\f\x02\x02T\x13\x03\x02\x02\x02' +
    'UV\x07\x0F\x02\x02VW\x07\r\x02\x02W\x15\x03\x02\x02\x02XY\x07\x0F\x02' +
    '\x02Y\\\x07\x0E\x02\x02Z\\\x07\x0F\x02\x02[X\x03\x02\x02\x02[Z\x03\x02' +
    '\x02\x02\\\x17\x03\x02\x02\x02\r\x1E%-58;>ADG[';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!DurationParser.__ATN) {
      DurationParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(DurationParser._serializedATN),
      );
    }

    return DurationParser.__ATN;
  }
}

export class ParseDurationContext extends ParserRuleContext {
  public duration(): DurationContext | undefined {
    return this.tryGetRuleContext(0, DurationContext);
  }

  public EOF(): TerminalNode {
    return this.getToken(DurationParser.EOF, 0);
  }

  public durationExpression(): DurationExpressionContext | undefined {
    return this.tryGetRuleContext(0, DurationExpressionContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_parseDuration;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterParseDuration) {
      listener.enterParseDuration(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitParseDuration) {
      listener.exitParseDuration(this);
    }
  }
}

export class DurationExpressionContext extends ParserRuleContext {
  public durationTerm(): DurationTermContext[];
  public durationTerm(i: number): DurationTermContext;
  public durationTerm(i?: number): DurationTermContext | DurationTermContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DurationTermContext);
    } else {
      return this.getRuleContext(i, DurationTermContext);
    }
  }

  public ADD(): TerminalNode[];
  public ADD(i: number): TerminalNode;
  public ADD(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(DurationParser.ADD);
    } else {
      return this.getToken(DurationParser.ADD, i);
    }
  }

  public SUB(): TerminalNode[];
  public SUB(i: number): TerminalNode;
  public SUB(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(DurationParser.SUB);
    } else {
      return this.getToken(DurationParser.SUB, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationExpression;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationExpression) {
      listener.enterDurationExpression(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationExpression) {
      listener.exitDurationExpression(this);
    }
  }
}

export class DurationTermContext extends ParserRuleContext {
  public durationFactor(): DurationFactorContext[];
  public durationFactor(i: number): DurationFactorContext;
  public durationFactor(
    i?: number,
  ): DurationFactorContext | DurationFactorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DurationFactorContext);
    } else {
      return this.getRuleContext(i, DurationFactorContext);
    }
  }

  public MUL(): TerminalNode[];
  public MUL(i: number): TerminalNode;
  public MUL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(DurationParser.MUL);
    } else {
      return this.getToken(DurationParser.MUL, i);
    }
  }

  public DIV(): TerminalNode[];
  public DIV(i: number): TerminalNode;
  public DIV(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(DurationParser.DIV);
    } else {
      return this.getToken(DurationParser.DIV, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationTerm;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationTerm) {
      listener.enterDurationTerm(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationTerm) {
      listener.exitDurationTerm(this);
    }
  }
}

export class DurationFactorContext extends ParserRuleContext {
  public duration(): DurationContext | undefined {
    return this.tryGetRuleContext(0, DurationContext);
  }

  public LP(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.LP, 0);
  }

  public durationExpression(): DurationExpressionContext | undefined {
    return this.tryGetRuleContext(0, DurationExpressionContext);
  }

  public RP(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.RP, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationFactor;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationFactor) {
      listener.enterDurationFactor(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationFactor) {
      listener.exitDurationFactor(this);
    }
  }
}

export class DurationContext extends ParserRuleContext {
  public weeksStatement(): WeeksStatementContext | undefined {
    return this.tryGetRuleContext(0, WeeksStatementContext);
  }

  public daysStatement(): DaysStatementContext | undefined {
    return this.tryGetRuleContext(0, DaysStatementContext);
  }

  public hoursStatement(): HoursStatementContext | undefined {
    return this.tryGetRuleContext(0, HoursStatementContext);
  }

  public minutesStatement(): MinutesStatementContext | undefined {
    return this.tryGetRuleContext(0, MinutesStatementContext);
  }

  public secondsStatement(): SecondsStatementContext | undefined {
    return this.tryGetRuleContext(0, SecondsStatementContext);
  }

  public millisecondsStatement(): MillisecondsStatementContext | undefined {
    return this.tryGetRuleContext(0, MillisecondsStatementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_duration;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDuration) {
      listener.enterDuration(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDuration) {
      listener.exitDuration(this);
    }
  }
}

export class WeeksStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public WEEK(): TerminalNode {
    return this.getToken(DurationParser.WEEK, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_weeksStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterWeeksStatement) {
      listener.enterWeeksStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitWeeksStatement) {
      listener.exitWeeksStatement(this);
    }
  }
}

export class DaysStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public DAY(): TerminalNode {
    return this.getToken(DurationParser.DAY, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_daysStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDaysStatement) {
      listener.enterDaysStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDaysStatement) {
      listener.exitDaysStatement(this);
    }
  }
}

export class HoursStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public HOUR(): TerminalNode {
    return this.getToken(DurationParser.HOUR, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_hoursStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterHoursStatement) {
      listener.enterHoursStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitHoursStatement) {
      listener.exitHoursStatement(this);
    }
  }
}

export class MinutesStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MINUTE(): TerminalNode {
    return this.getToken(DurationParser.MINUTE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_minutesStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterMinutesStatement) {
      listener.enterMinutesStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitMinutesStatement) {
      listener.exitMinutesStatement(this);
    }
  }
}

export class SecondsStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public SECOND(): TerminalNode {
    return this.getToken(DurationParser.SECOND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_secondsStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterSecondsStatement) {
      listener.enterSecondsStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitSecondsStatement) {
      listener.exitSecondsStatement(this);
    }
  }
}

export class MillisecondsStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MILLISECONDS(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.MILLISECONDS, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_millisecondsStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterMillisecondsStatement) {
      listener.enterMillisecondsStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitMillisecondsStatement) {
      listener.exitMillisecondsStatement(this);
    }
  }
}
