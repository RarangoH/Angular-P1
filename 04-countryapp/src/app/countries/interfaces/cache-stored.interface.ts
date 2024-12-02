import { Country } from "./country"
import { Region } from "./region.type";


export interface CacheStored {
  byCapital:TermCountries,
  byCountry:TermCountries,
  byRegion: RegionCountries
}

export interface TermCountries {
  term:string,
  countries: Country[];
}

export interface RegionCountries {
  region?:Region | undefined,
  countries: Country[];
}
