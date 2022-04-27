let Database = require("../Database");

class Admin {
  id = 0;
  name = "";
  username = "";
  password = "";
  firebaseid = "";
  query = "";
  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.name = "";
    this.username = "";
    this.password = "";
    this.firebaseid = "";
  }

  save = () => {
    if (this.id == 0) {
      this.query =
        "INSERT INTO admins(name, username, password, firebaseid)  ";
      this.query +=
        "VALUES('" +
        this.name +
        "', '" +
        this.username +
        "', '" +
        this.password +
        "', '" +
        this.firebaseid +
        "')";
    } else {
      this.query = "UPDATE admins SET name = '" + this.name + "', ";
      this.query += "username = '" + this.username + "', ";
      this.query += "password = '" + this.password + "', ";
      this.query += "firebaseid = '" + this.firebaseid + "' ";
      this.query += "WHERE id = " + this.id;
    }
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) return reject(err);
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM admins WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) return reject(err);
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM admins ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM admins WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
    Admin: Admin
};
