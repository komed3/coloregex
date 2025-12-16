export type ColorSpace =
    | 'hex' | 'rgb' | 'hsl' | 'hsv' | 'hwb' | 'cmyk'
    | 'lab' | 'lch' | 'oklab' | 'oklch' | 'p3';

export interface ColorChannels {
    [ key: string ]: number | undefined;
}

export interface ParsedColor extends ColorChannels {
    alpha?: number;
}

export interface ColorMatch {
    space: ColorSpace;
    match: RegExpMatchArray;
    channel: ParsedColor;
}
