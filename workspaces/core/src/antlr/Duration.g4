grammar Duration;

// GRAMMAR
parseDuration
  : durationStatement EOF
  | durationExpression EOF;

durationExpression
  : durationTerm ((ADD | SUB) durationTerm)*;

durationTerm
  : durationFactor ((MUL | DIV) durationFactor)*;

durationFactor
  : durationStatement
  | LP durationExpression RP;

durationStatement
  : weeksStatement?
    daysStatement?
    hoursStatement?
    minutesStatement?
    secondsStatement?
    millisecondsStatement?;

weeksStatement
  : NUMBER WEEK;

daysStatement
  : NUMBER DAY;

hoursStatement
  : NUMBER HOUR;

minutesStatement
  : NUMBER MINUTE;

secondsStatement
  : NUMBER SECOND;

millisecondsStatement
  : NUMBER MILLISECONDS
  | NUMBER;

// LEXER
ADD:            '+';
SUB:            '-';
MUL:            '*';
DIV:            '/';
LP:             '(';
RP:             ')';
WEEK:           'w';
DAY:            'd';
HOUR:           'h';
MINUTE:         'm';
SECOND:         's';
MILLISECONDS:   'ms';
NUMBER:         [0-9]+;
WS:             [ \t\r\n]+ -> skip;
