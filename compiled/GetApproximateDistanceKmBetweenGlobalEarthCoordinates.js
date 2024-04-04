"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetApproximateDistanceKmBetweenGlobalEarthCoordinates = void 0;
const core_1 = require("@layer92/core");
const EarthAverageRadiusKm_1 = require("./EarthAverageRadiusKm");
/** Assumes a spherical earth using its average radius. May have small errors due to floating precision rounding.
 * @param a global coordinate pair in the form [latitude, longitude]
 * @param b global coordinate pair in the form [latitude, longitude]
*/
function GetApproximateDistanceKmBetweenGlobalEarthCoordinates(a, b) {
    const aLatitude = (0, core_1.DegreesToRadians)(a[0]);
    const aLongitude = (0, core_1.DegreesToRadians)(a[1]);
    const bLatitude = (0, core_1.DegreesToRadians)(b[0]);
    const bLongitude = (0, core_1.DegreesToRadians)(b[1]);
    const latitudeAngle = bLatitude - aLatitude;
    const longitudeAngle = bLongitude - aLongitude;
    const haversineOfLatitudeAngle = Math.pow(Math.sin(latitudeAngle / 2), 2);
    const haversineOfLongitudeAngle = Math.pow(Math.sin(longitudeAngle), 2);
    // https://en.wikipedia.org/wiki/Haversine_formula
    let haversineOfDistanceAngle = haversineOfLatitudeAngle + Math.cos(aLatitude) * Math.cos(bLatitude) * haversineOfLongitudeAngle;
    // according to wikipedia, it's possible for this value to exceed 1 due to floating point errors. In this case, the actual value would be 1.0 or something close to it. (https://en.wikipedia.org/wiki/Haversine_formula)
    if (haversineOfDistanceAngle > 1.0) {
        haversineOfDistanceAngle = 1.0;
    }
    // distance = radius * archaversine(haversineOfDistanceAngle)
    return EarthAverageRadiusKm_1.EarthAverageRadiusKm * 2 * Math.asin(Math.sqrt(haversineOfDistanceAngle));
}
exports.GetApproximateDistanceKmBetweenGlobalEarthCoordinates = GetApproximateDistanceKmBetweenGlobalEarthCoordinates;
