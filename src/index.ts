import { ColorSpace } from './types';
import { ColorParser } from './parser';

export type { ColorChannels, ColorMatch, ColorSpace, ParsedColor } from './types';
export { ColorParser } from './parser';
export { ColorUtils } from './utils';

declare global {
    interface String {
        parseAsColor ( space?: ColorSpace ) : ColorParser | false;
        isValidColor () : boolean;
    }
}

String.prototype.parseAsColor = function ( space?: ColorSpace ) : ColorParser | false {
    if ( space ) return ColorParser.parseAs( this.valueOf(), space );
    else return ColorParser.parse( this.valueOf() );
}

String.prototype.isValidColor = function () : boolean {
    return ColorParser.valid( this.valueOf() );
}
