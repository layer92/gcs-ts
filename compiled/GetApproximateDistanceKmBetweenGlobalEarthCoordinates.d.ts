/** Assumes a spherical earth using its average radius. May have small errors due to floating precision rounding.
 * @param a global coordinate pair in the form [latitude, longitude]
 * @param b global coordinate pair in the form [latitude, longitude]
*/
export declare function GetApproximateDistanceKmBetweenGlobalEarthCoordinates(a: [number, number], b: [number, number]): number;
