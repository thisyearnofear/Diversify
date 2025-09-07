declare module 'papaparse' {
  export interface ParseResult<T = any> {
    data: T[];
    errors: any[];
    meta: any;
  }

  export interface ParseConfig {
    delimiter?: string;
    newline?: string;
    quoteChar?: string;
    escapeChar?: string;
    header?: boolean;
    transformHeader?: (header: string) => string;
    dynamicTyping?: boolean;
    preview?: number;
    encoding?: string;
    worker?: boolean;
    comments?: boolean | string;
    step?: (results: ParseResult, parser: any) => void;
    complete?: (results: ParseResult) => void;
    error?: (error: any) => void;
    download?: boolean;
    downloadRequestHeaders?: { [key: string]: string };
    skipEmptyLines?: boolean | 'greedy';
    chunk?: (results: ParseResult, parser: any) => void;
    fastMode?: boolean;
    beforeFirstChunk?: (chunk: string) => string | void;
    withCredentials?: boolean;
    transform?: (value: string, field: string | number) => any;
    delimitersToGuess?: string[];
  }

  export function parse<T = any>(input: string | File, config?: ParseConfig): ParseResult<T>;
  export function unparse(data: any[], config?: any): string;
}