const Database = require("../Database");
var fs = require("fs");

class IGAPVendorProduct {

  id = 0;
  name = "";
  title = "";
  description = "";
  specification = "";
  picpath = "";
  imagecode = "";
  igapvendorid = 0;
  mrp = 0;
  price = 0;
  instock = "";
  status = "";
  igaproductcategoryid = 0;

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.igapvendorid = 0;
    this.igaproductcategoryid = 0;
    this.name = "";
    this.title = "";
    this.description = "";
    this.specification = "";
    this.picpath = "";
    this.imagecode = "";
    this.mrp = 0;
    this.price = 0;
    this.instock = "";
    this.status = "";    
  }

  save = () => {
    if(this.imagecode != ""){
      let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
      base64image = base64image.replace(/^data:image\/png;base64,/, "");
      this.picpath = "vendorproducts/" + Math.random().toString(36).substring(2, 7) + ".png";
      fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
          console.log("Error image saving-" + err);
      });
    }

    if (this.id == 0) {
        this.query = "INSERT INTO igap_vendorproducts(igapvendorid, igaproductcategoryid, name, title, description, specification, picpath, mrp, price, instock, status) ";
        this.query += "VALUES(" + this.igapvendorid + ", " + this.igaproductcategoryid + ", '" + this.name + "', '" + this.title + "', ";
        this.query += "'" + this.description + "', '" + this.specification + "', '" + this.picpath + "', " + this.mrp + ", " + this.price + ", '" + this.instock + "', 'open')";
    } 
    else {
      this.query = "UPDATE igap_vendorproducts SET igapvendorid = " + this.igapvendorid + ", ";
      this.query += "igaproductcategoryid = " + this.igaproductcategoryid + ", ";
      this.query += "name = '" + this.name + "', ";
      this.query += "title = '" + this.title + "', ";
      this.query += "description = '" +  this.description + "', ";
      this.query += "specification = '" + this.specification + "', ";
      if(this.picpath != "")
          this.query += "picpath = '" + this.picpath + "', ";
      this.query += "mrp = " + this.mrp + ", ";
      this.query += "price = " + this.price + ", ";
      this.query += "instock = '" + this.instock + "' ";
      this.query += " WHERE id =" + this.id;
    }
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM igap_vendorproducts ";
    if(this.igapvendorid != 0)
        this.query += "WHERE igapvendorid = " + this.igapvendorid + " ";
    this.query += "ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  
  changestatus = () => {
    this.query = "UPDATE igap_vendorproducts SET status = '" + this.status + "' WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM igap_vendorproducts WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM igap_vendorproducts WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };
}

module.exports = {
  IGAPVendorProduct: IGAPVendorProduct
};
