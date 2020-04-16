import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'distanceConversion'
})

export class DistanceConversion implements PipeTransform {
    transform(value: any, arg1: any, arg2: any): any {
        let temp;
        let decimalLimit;
        let tempFeet;
        // console.log(value.typeof);
        if (arg1 === 'M-MI') {
                const valueFeet = value / 0.3048;
                const rem = valueFeet % 5280;
                temp = value / 1609.344;
                decimalLimit = arg2;
                // console.log(value);
                if ( value ) {
                    return Math.floor(temp) + 'mi ' + rem.toFixed(decimalLimit) + 'ft';
                } else {
                    return '1 ft';
                }
            }
        }
    }
