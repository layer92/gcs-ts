import { DegreesToRadians } from "@layer92/core";
import { EarthAverageRadiusKm } from "./EarthAverageRadiusKm";

/** Assumes a spherical earth using its average radius. May have small errors due to floating precision rounding.
 * @param a global coordinate pair in the form [latitude, longitude]
 * @param b global coordinate pair in the form [latitude, longitude]
*/
export function GetApproximateDistanceKmBetweenGlobalEarthCoordinates(
    a:[number,number],
    b:[number,number],
){
    const aLatitude = DegreesToRadians(a[0]);
    const aLongitude = DegreesToRadians(a[1]);
    const bLatitude = DegreesToRadians(b[0]);
    const bLongitude = DegreesToRadians(b[1]);
    const latitudeAngle = bLatitude-aLatitude;
    const longitudeAngle = bLongitude-aLongitude;
    const haversineOfLatitudeAngle = Math.pow(Math.sin(latitudeAngle/2),2);
    const haversineOfLongitudeAngle = Math.pow(Math.sin(longitudeAngle),2);
    // https://en.wikipedia.org/wiki/Haversine_formula
    let haversineOfDistanceAngle = haversineOfLatitudeAngle+Math.cos(aLatitude)*Math.cos(bLatitude)*haversineOfLongitudeAngle;
    // according to wikipedia, it's possible for this value to exceed 1 due to floating point errors. In this case, the actual value would be 1.0 or something close to it. (https://en.wikipedia.org/wiki/Haversine_formula)
    if(haversineOfDistanceAngle>1.0){
        haversineOfDistanceAngle=1.0;
    }
    // distance = radius * archaversine(haversineOfDistanceAngle)
    return EarthAverageRadiusKm * 2*Math.asin(Math.sqrt(haversineOfDistanceAngle))
}