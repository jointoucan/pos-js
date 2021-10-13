class Lexer {
  lex: (sentence: string) => string[];
}

class Tagger {
  constructor(lexer: { [key: string]: string[] }): void;
  tag: (words: string[]) => [string, string][];
}

export = {
  Lexer,
  Tagger,
};
