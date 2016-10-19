export class User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  gender: number;
  phone_number: string;
  dob: string;
  occupation: string;
  company: string;
  about: string;
  location: string;
  avatar: string;
  country_id: number;
  country_name: string;
  last_login: string;
  status: string;
  created_at: string;
  updated_at: string;

  constructor(item: any) {
    this.id = item.id;
    this.email = item.email;
    this.username = item.username;
    this.first_name = item.first_name;
    this.last_name = item.last_name;
    this.gender = item.gender;
    this.phone_number = item.phone_number;
    this.dob = item.dob;
    this.avatar = item.facebook_avatar ? item.facebook_avatar : 'assets/img/theme/no-photo.png';
    this.occupation = item.occupation;
    this.company = item.company;
    this.about = item.about;
    this.country_id = item.country_id;
  }
}

