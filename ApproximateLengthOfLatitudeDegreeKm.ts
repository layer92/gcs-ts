import { EarthAverageRadiusKm } from "./EarthAverageRadiusKm";

/** The approximate length (in km) of 1 degree of latitude. Assumes a spherical earth with an average radius of 6371km */
export const ApproximateLengthOfLatitudeDegreeKm = EarthAverageRadiusKm * Math.PI / 180;
