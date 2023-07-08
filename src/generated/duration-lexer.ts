import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class DurationLexer extends Lexer {
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

  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
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
    DurationLexer._LITERAL_NAMES,
    DurationLexer._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return DurationLexer.VOCABULARY;
  }

  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(DurationLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return 'Duration.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return DurationLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return DurationLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return DurationLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return DurationLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10L\b\x01\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
    '\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03' +
    '\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t' +
    '\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x06' +
    '\x0E:\n\x0E\r\x0E\x0E\x0E;\x03\x0E\x03\x0E\x06\x0E@\n\x0E\r\x0E\x0E\x0E' +
    'A\x05\x0ED\n\x0E\x03\x0F\x06\x0FG\n\x0F\r\x0F\x0E\x0FH\x03\x0F\x03\x0F' +
    '\x02\x02\x02\x10\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07' +
    '\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E' +
    '\x1B\x02\x0F\x1D\x02\x10\x03\x02\x04\x03\x022;\x05\x02\v\f\x0F\x0F""' +
    '\x02O\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02' +
    '\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02' +
    '\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02' +
    '\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02' +
    '\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02' +
    "\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02\x02\t%\x03\x02\x02\x02\v'" +
    '\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F+\x03\x02\x02\x02\x11-\x03\x02' +
    '\x02\x02\x13/\x03\x02\x02\x02\x151\x03\x02\x02\x02\x173\x03\x02\x02\x02' +
    '\x195\x03\x02\x02\x02\x1B9\x03\x02\x02\x02\x1DF\x03\x02\x02\x02\x1F \x07' +
    '-\x02\x02 \x04\x03\x02\x02\x02!"\x07/\x02\x02"\x06\x03\x02\x02\x02#' +
    "$\x07,\x02\x02$\b\x03\x02\x02\x02%&\x071\x02\x02&\n\x03\x02\x02\x02'" +
    '(\x07*\x02\x02(\f\x03\x02\x02\x02)*\x07+\x02\x02*\x0E\x03\x02\x02\x02' +
    '+,\x07y\x02\x02,\x10\x03\x02\x02\x02-.\x07f\x02\x02.\x12\x03\x02\x02\x02' +
    '/0\x07j\x02\x020\x14\x03\x02\x02\x0212\x07o\x02\x022\x16\x03\x02\x02\x02' +
    '34\x07u\x02\x024\x18\x03\x02\x02\x0256\x07o\x02\x0267\x07u\x02\x027\x1A' +
    '\x03\x02\x02\x028:\t\x02\x02\x0298\x03\x02\x02\x02:;\x03\x02\x02\x02;' +
    '9\x03\x02\x02\x02;<\x03\x02\x02\x02<C\x03\x02\x02\x02=?\x070\x02\x02>' +
    '@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02\x02' +
    'AB\x03\x02\x02\x02BD\x03\x02\x02\x02C=\x03\x02\x02\x02CD\x03\x02\x02\x02' +
    'D\x1C\x03\x02\x02\x02EG\t\x03\x02\x02FE\x03\x02\x02\x02GH\x03\x02\x02' +
    '\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\b\x0F\x02' +
    '\x02K\x1E\x03\x02\x02\x02\x07\x02;ACH\x03\b\x02\x02';

  public static __ATN: ATN;

  public static get _ATN(): ATN {
    if (!DurationLexer.__ATN) {
      DurationLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(DurationLexer._serializedATN),
      );
    }

    return DurationLexer.__ATN;
  }
}
