export type ColorSpace =
    | 'hex' | 'rgb' | 'hsl' | 'hsv' | 'hwb' | 'cmyk'
    | 'lab' | 'lch' | 'oklab' | 'oklch' | 'p3';

export interface ColorChannels {
    [ ch: string ]: number | undefined;
}

export interface ParsedColor extends ColorChannels {
    alpha?: number;
}

export interface ColorMatch< T extends ColorSpace = ColorSpace > {
    space: T;
    match: RegExpMatchArray;
    channel: ParsedColor;
}
