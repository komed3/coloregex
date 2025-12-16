import { ColorMatch, ColorSpace } from './types';

export class ColorParser {

    private color: ColorMatch;

    private constructor () {
        this.color = {} as ColorMatch;
    }

    public static parse ( color: string ) : ColorParser | false {
        return false;
    }

    public static parseAs ( color: string, space: ColorSpace ) : ColorParser | false {
        return false;
    }

    public static valid ( color: string ) : boolean {
        return this.parse( color ) instanceof ColorParser;
    }

    public channel ( channel: string, value?: number ) : number | undefined {
        return;
    }

    public alpha ( value?: number ) : number | undefined {
        return;
    }

    public toRGB () : string | false {
        return false;
    }

    public toHEX () : string | false {
        return false;
    }

}
