export interface CityInfo {
  regionCode: string;
  regionName: string;
  cityList: CityInfoItem[];
}

export interface CityInfoItem {
  cityCode: string;
  cityName: string;
  image: string;
}
