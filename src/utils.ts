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

}
