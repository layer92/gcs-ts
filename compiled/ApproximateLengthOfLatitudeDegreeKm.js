"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproximateLengthOfLatitudeDegreeKm = void 0;
const EarthAverageRadiusKm_1 = require("./EarthAverageRadiusKm");
/** The approximate length (in km) of 1 degree of latitude. Assumes a spherical earth with an average radius of 6371km */
exports.ApproximateLengthOfLatitudeDegreeKm = EarthAverageRadiusKm_1.EarthAverageRadiusKm * Math.PI / 180;
