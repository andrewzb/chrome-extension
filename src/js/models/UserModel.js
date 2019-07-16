export default class UserModel {
  constructor(email = undefined) {
    this.email = email;
  }

  getEmail = () => this.email;

  setEmail = email => {
    this.email = email;
  };
}
