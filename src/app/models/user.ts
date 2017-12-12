export class User {
  id: string;
  username: String;
  password: String;
  experienceLevel: String;
  description: String;
  email: String;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
