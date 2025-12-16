export class ColorUtils {

    static clamp ( value: number, min: number, max: number ) : number {
        return Math.min( Math.max( value, min ), max );
    }

    static numeric ( value: any ) : number {
        if ( ! value ) return 0;
        value = String( value ).trim();
        if ( value.endsWith( '%' ) ) {
            const n = parseFloat( value.slice( 0, -1 ) );
            return isNaN( n ) ? 0 : n / 100;
        }
        const n = parseFloat( value );
        return isNaN( n ) ? 0 : n;
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

    static hex2Dec ( h: string ) : number {
        return parseInt( h, 16 );
    }

    static expandShortHex ( h: string ) : string {
        return h.split( '' ).map( c => c + c ).join( '' );
    }

}
