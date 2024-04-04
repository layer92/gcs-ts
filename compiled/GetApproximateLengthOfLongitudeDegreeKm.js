"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetApproximateLengthOfLongitudeDegreeKm = void 0;
const core_1 = require("@layer92/core");
const EarthAverageRadiusKm_1 = require("./EarthAverageRadiusKm");
/**
 * Assumes a spherical earth using its average radius.
 * @returns The approximate length (in km) of 1 degree of longitude at the specified latitude.
*/
function GetApproximateLengthOfLongitudeDegreeKm(latitudeDegrees) {
    // https://en.wikipedia.org/wiki/Latitude#Length_of_a_degree_of_latitude
    const latitudeRadians = (0, core_1.DegreesToRadians)(latitudeDegrees);
    const arcAngle = (0, core_1.DegreesToRadians)(1);
    const radiusOfACircleAtLatitude = EarthAverageRadiusKm_1.EarthAverageRadiusKm * Math.cos(latitudeRadians);
    const lengthOfArc = arcAngle * radiusOfACircleAtLatitude;
    return lengthOfArc;
}
exports.GetApproximateLengthOfLongitudeDegreeKm = GetApproximateLengthOfLongitudeDegreeKm;
