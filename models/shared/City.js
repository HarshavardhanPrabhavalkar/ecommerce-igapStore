let Database = require("../Database");

class City {
  id = 0;
  name = "";
  talukaid = 0;

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.name = "";
    this.talukaid = 0;
  }
  save = () => {
    if (this.id == 0) {
      this.query = "INSERT INTO cities(name, talukaid)  ";
      this.query += "VALUES ('" + this.name + "', " + this.talukaid + ")";
    } else {
      this.query = "UPDATE cities SET name = '" + this.name + "', ";
      this.query += "talukaid = " + this.talukaid + " ";
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
    this.query = "SELECT * FROM cities WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) return reject(err);
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM cities ";
    if(this.talukaid != 0)
            this.query += "WHERE talukaid = " + this.talukaid + " ";
    this.query += "ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) return reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM cities WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
  City: City,
};
