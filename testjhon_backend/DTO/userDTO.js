module.exports = class UserDTO {
  email;
  password;
  id = 1;

  constructor(credentials) {
    const name = credentials.name ? credentials.name : "Not John, i think";
    this.email = credentials.email;
    this.id
    this.password = credentials.password
    this.name = name;
  }
};
