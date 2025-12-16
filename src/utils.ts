import { ColorChannels } from './types';

export class ColorUtils {

    static clamp ( value: number, min: number, max: number ) : number {
        return Math.min( Math.max( value, min ), max );
    }

    static numeric ( value: any ) : number {
        if ( ! value || ! ( value = String( value ).trim() ).length ) return 0;
        if ( value.endsWith( '%' ) ) return Number( value.slice( 0, -1 ) ) / 100;
        return Number( value );
    }

    static angle2Deg ( value: number, unit?: string ) : number {
        switch ( unit?.toLowerCase() ) {
            case 'deg': case '°': return value;
            case 'grad': return value * 0.9;
            case 'rad': return value * ( 180 / Math.PI );
            case 'turn': return value * 360;
            default: return value;
        }
    }

    static hex2Dec ( hex: string ) : number {
        return parseInt( hex, 16 );
    }

    static expandShortHex ( hex: string ) : string {
        return hex.split( '' ).map( ch => ch + ch ).join( '' );
    }

    static normalize (
        vals: ColorChannels,
        cfg: { ranges: { [ k: string ]: [ number, number ] } },
        clmp: boolean = false
    ) : ColorChannels {
        return Object.fromEntries( Object.entries( vals ).map( ( [ ch, v ] ) => [
            ch, v !== undefined ? ( cfg.ranges[ ch ] ? (
                clmp ? this.clamp( v, ...cfg.ranges[ ch ] ) : v
            ) : v ) : undefined
        ] ) );
    }

}
