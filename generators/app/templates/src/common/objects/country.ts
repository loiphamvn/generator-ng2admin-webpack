export class Country {
  id: number;
  english_name: string;
  local_name: string;
  region: string;
  alpha2_code: string;
  country_calling_code: string;
  created_at: string;
  updated_at: string;

  constructor(item: any) {
    this.id = item.id;
    this.english_name = item.english_name;
    this.local_name = item.local_name;
    this.region = item.region;
    this.alpha2_code = item.alpha2_code;
    this.country_calling_code = item.country_calling_code;
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;
  }
}