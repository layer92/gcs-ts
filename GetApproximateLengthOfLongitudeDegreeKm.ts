import { DegreesToRadians } from "@layer92/core";
import { EarthAverageRadiusKm } from "./EarthAverageRadiusKm";

/**
 * Assumes a spherical earth using its average radius.
 * @returns The approximate length (in km) of 1 degree of longitude at the specified latitude.
*/
export function GetApproximateLengthOfLongitudeDegreeKm(
    latitudeDegrees:number,
){
    // https://en.wikipedia.org/wiki/Latitude#Length_of_a_degree_of_latitude
    const latitudeRadians = DegreesToRadians(latitudeDegrees);
    const arcAngle = DegreesToRadians(1);
    const radiusOfACircleAtLatitude = EarthAverageRadiusKm*Math.cos(latitudeRadians);
    const lengthOfArc = arcAngle*radiusOfACircleAtLatitude;
    return lengthOfArc;
}