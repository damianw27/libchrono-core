import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';
import * as Utils from 'antlr4ts/misc/Utils';
import { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import { HoursStatementContext } from '$generated/context/hours-statement-context';
import { DaysStatementContext } from '$generated/context/days-statement-context';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationTermContext } from '$generated/context/duration-term-context';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { ParseDurationContext } from '$generated/context/parse-duration-context';

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

  public static readonly RULE_durationExpressionTail = 2;

  public static readonly RULE_durationTerm = 3;

  public static readonly RULE_durationTermTail = 4;

  public static readonly RULE_durationFactor = 5;

  public static readonly RULE_durationStatement = 6;

  public static readonly RULE_weeksStatement = 7;

  public static readonly RULE_daysStatement = 8;

  public static readonly RULE_hoursStatement = 9;

  public static readonly RULE_minutesStatement = 10;

  public static readonly RULE_secondsStatement = 11;

  public static readonly RULE_millisecondsStatement = 12;

  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'parseDuration',
    'durationExpression',
    'durationExpressionTail',
    'durationTerm',
    'durationTermTail',
    'durationFactor',
    'durationStatement',
    'weeksStatement',
    'daysStatement',
    'hoursStatement',
    'minutesStatement',
    'secondsStatement',
    'millisecondsStatement',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    '\'+\'',
    '\'-\'',
    '\'*\'',
    '\'/\'',
    '\'(\'',
    '\')\'',
    '\'w\'',
    '\'d\'',
    '\'h\'',
    '\'m\'',
    '\'s\'',
    '\'ms\'',
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
  public get grammarFileName(): string {
    return 'Duration.g4';
  }

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
    const _localctx: ParseDurationContext = new ParseDurationContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, DurationParser.RULE_parseDuration);
    try {
      this.state = 32;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 26;
          this.durationStatement();
          this.state = 27;
          this.match(DurationParser.EOF);
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 29;
          this.durationExpression();
          this.state = 30;
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
    const _localctx: DurationExpressionContext = new DurationExpressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, DurationParser.RULE_durationExpression);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 34;
        this.durationTerm();
        this.state = 38;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 35;
                this.durationExpressionTail();
              }
            }
          }
          this.state = 40;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
  public durationExpressionTail(): DurationExpressionTailContext {
    const _localctx: DurationExpressionTailContext = new DurationExpressionTailContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, DurationParser.RULE_durationExpressionTail);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 41;
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
        this.state = 42;
        this.durationExpression();
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
    const _localctx: DurationTermContext = new DurationTermContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, DurationParser.RULE_durationTerm);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 44;
        this.durationFactor();
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === DurationParser.MUL || _la === DurationParser.DIV) {
          {
            {
              this.state = 45;
              this.durationTermTail();
            }
          }
          this.state = 50;
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
  public durationTermTail(): DurationTermTailContext {
    const _localctx: DurationTermTailContext = new DurationTermTailContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, DurationParser.RULE_durationTermTail);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 51;
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
        this.state = 52;
        this.match(DurationParser.NUMBER);
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
    const _localctx: DurationFactorContext = new DurationFactorContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, DurationParser.RULE_durationFactor);
    try {
      this.state = 59;
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
          this.state = 54;
          this.durationStatement();
        }
          break;
        case DurationParser.LP:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 55;
          this.match(DurationParser.LP);
          this.state = 56;
          this.durationExpression();
          this.state = 57;
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
  public durationStatement(): DurationStatementContext {
    const _localctx: DurationStatementContext = new DurationStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, DurationParser.RULE_durationStatement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 62;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
          case 1: {
            this.state = 61;
            this.weeksStatement();
          }
            break;
        }
        this.state = 65;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
          case 1: {
            this.state = 64;
            this.daysStatement();
          }
            break;
        }
        this.state = 68;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
          case 1: {
            this.state = 67;
            this.hoursStatement();
          }
            break;
        }
        this.state = 71;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1: {
            this.state = 70;
            this.minutesStatement();
          }
            break;
        }
        this.state = 74;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1: {
            this.state = 73;
            this.secondsStatement();
          }
            break;
        }
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === DurationParser.NUMBER) {
          {
            this.state = 76;
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
    const _localctx: WeeksStatementContext = new WeeksStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, DurationParser.RULE_weeksStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 79;
        this.match(DurationParser.NUMBER);
        this.state = 80;
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
    const _localctx: DaysStatementContext = new DaysStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, DurationParser.RULE_daysStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 82;
        this.match(DurationParser.NUMBER);
        this.state = 83;
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
    const _localctx: HoursStatementContext = new HoursStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, DurationParser.RULE_hoursStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 85;
        this.match(DurationParser.NUMBER);
        this.state = 86;
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
    const _localctx: MinutesStatementContext = new MinutesStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, DurationParser.RULE_minutesStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 88;
        this.match(DurationParser.NUMBER);
        this.state = 89;
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
    const _localctx: SecondsStatementContext = new SecondsStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, DurationParser.RULE_secondsStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 91;
        this.match(DurationParser.NUMBER);
        this.state = 92;
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
    const _localctx: MillisecondsStatementContext = new MillisecondsStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, DurationParser.RULE_millisecondsStatement);
    try {
      this.state = 97;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 94;
          this.match(DurationParser.NUMBER);
          this.state = 95;
          this.match(DurationParser.MILLISECONDS);
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 96;
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10f\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n' +
    '\x02\x03\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03\x04\x03' +
    '\x04\x03\x04\x03\x05\x03\x05\x07\x051\n\x05\f\x05\x0E\x054\v\x05\x03\x06' +
    '\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07>\n\x07' +
    '\x03\b\x05\bA\n\b\x03\b\x05\bD\n\b\x03\b\x05\bG\n\b\x03\b\x05\bJ\n\b\x03' +
    '\b\x05\bM\n\b\x03\b\x05\bP\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03' +
    '\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03' +
    '\x0E\x05\x0Ed\n\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b' +
    '\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02' +
    '\x02\x04\x03\x02\x03\x04\x03\x02\x05\x06\x02c\x02"\x03\x02\x02\x02\x04' +
    '$\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b.\x03\x02\x02\x02\n5\x03\x02\x02' +
    '\x02\f=\x03\x02\x02\x02\x0E@\x03\x02\x02\x02\x10Q\x03\x02\x02\x02\x12' +
    'T\x03\x02\x02\x02\x14W\x03\x02\x02\x02\x16Z\x03\x02\x02\x02\x18]\x03\x02' +
    '\x02\x02\x1Ac\x03\x02\x02\x02\x1C\x1D\x05\x0E\b\x02\x1D\x1E\x07\x02\x02' +
    '\x03\x1E#\x03\x02\x02\x02\x1F \x05\x04\x03\x02 !\x07\x02\x02\x03!#\x03' +
    '\x02\x02\x02"\x1C\x03\x02\x02\x02"\x1F\x03\x02\x02\x02#\x03\x03\x02' +
    '\x02\x02$(\x05\b\x05\x02%\'\x05\x06\x04\x02&%\x03\x02\x02\x02\'*\x03\x02' +
    '\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x05\x03\x02\x02\x02*(\x03' +
    '\x02\x02\x02+,\t\x02\x02\x02,-\x05\x04\x03\x02-\x07\x03\x02\x02\x02.2' +
    '\x05\f\x07\x02/1\x05\n\x06\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03' +
    '\x02\x02\x0223\x03\x02\x02\x023\t\x03\x02\x02\x0242\x03\x02\x02\x0256' +
    '\t\x03\x02\x0267\x07\x0F\x02\x027\v\x03\x02\x02\x028>\x05\x0E\b\x029:' +
    '\x07\x07\x02\x02:;\x05\x04\x03\x02;<\x07\b\x02\x02<>\x03\x02\x02\x02=' +
    '8\x03\x02\x02\x02=9\x03\x02\x02\x02>\r\x03\x02\x02\x02?A\x05\x10\t\x02' +
    '@?\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02BD\x05\x12\n\x02' +
    'CB\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02EG\x05\x14\v\x02' +
    'FE\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HJ\x05\x16\f\x02' +
    'IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KM\x05\x18\r\x02' +
    'LK\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NP\x05\x1A\x0E\x02' +
    'ON\x03\x02\x02\x02OP\x03\x02\x02\x02P\x0F\x03\x02\x02\x02QR\x07\x0F\x02' +
    '\x02RS\x07\t\x02\x02S\x11\x03\x02\x02\x02TU\x07\x0F\x02\x02UV\x07\n\x02' +
    '\x02V\x13\x03\x02\x02\x02WX\x07\x0F\x02\x02XY\x07\v\x02\x02Y\x15\x03\x02' +
    '\x02\x02Z[\x07\x0F\x02\x02[\\\x07\f\x02\x02\\\x17\x03\x02\x02\x02]^\x07' +
    '\x0F\x02\x02^_\x07\r\x02\x02_\x19\x03\x02\x02\x02`a\x07\x0F\x02\x02ad' +
    '\x07\x0E\x02\x02bd\x07\x0F\x02\x02c`\x03\x02\x02\x02cb\x03\x02\x02\x02' +
    'd\x1B\x03\x02\x02\x02\r"(2=@CFILOc';

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

