export class User {
  id: string;
  username: String;
  password: String;
  experienceLevel: String;
  userDescription: String;
  email: String;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
