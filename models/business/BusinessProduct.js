const Database = require("../Database");
var fs = require("fs");

class BusinessProduct {
  id = 0;
  businessid = "";
  igapvendorid = "";
  businessvendorid = "";
  businessproductcategoryid = "";
  name = "";
  title = "";
  description = "";
  specification = "";
  mrp = 0;
  price = 0;
  imagecode = "";
  instock = "";
  status = "";
  picpath = "";

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.businessid = 0;
    this.igapvendorid = 0;
    this.businessvendorid = "";
    this.businessproductcategoryid = "";
    this.name = "";
    this.title = "";
    this.description = "";
    this.specification = "";
    this.mrp = "";
    this.price = "";
    this.picpath = "";
    this.imagecode = "";
    this.instock = "";
    this.status = "";
  }

  save = () => {
    if (this.imagecode != "") {
      let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
      base64image = base64image.replace(/^data:image\/png;base64,/, "");
      this.picpath = "businessproducts/" + Math.random().toString(36).substring(2, 7) + ".png";
      fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
          console.log("Error image saving-" + err);
      });
  }

    if (this.id == 0) {
      this.query = "INSERT INTO business_products(businessid, igapvendorid, businessvendorid, businessproductcategoryid, name, title, description, specification, mrp, price, instock, picpath, status) ";
      this.query += "VALUES (" + this.businessid + ", " + this.igapvendorid + ", " + this.businessvendorid + ", ";
      this.query += this.businessproductcategoryid + " , '" + this.name + "', '" + this.title + "', '" + this.description +"', ";
      this.query += "'" +this.specification +  "', " + this.mrp + ", " + this.price + ", '" + this.instock + "', '" + this.picpath + "', 'open')";
    } 
    else {
      this.query = "UPDATE business_products SET businessid = " + this.businessid + ", ";
      this.query += "igapvendorid = " + this.igapvendorid + ", ";
      this.query += "businessvendorid = " + this.businessvendorid + ", ";
      this.query += "businessproductcategoryid = " + this.businessproductcategoryid + ", ";
      this.query += "name = '" + this.name + "', ";
      this.query += "title = '" + this.title + "', ";
      this.query += "description = '" + this.description + "', ";
      this.query += "specification = '" + this.specification + "', ";
      this.query += "mrp = " + this.mrp + ", ";
      if(this.picpath != "")
         this.query += "picpath = " + this.picpath + ", ";
      this.query += "price = " + this.price + ", ";
      this.query += "instock = '" + this.instock + "' ";
      this.query += "WHERE id =" + this.id;
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
    this.query = "SELECT * FROM business_products WHERE businessid = " + this.businessid + " ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "SELECT * FROM business_products WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
        this.picpath = result[0].picpath;
        this.query = "DELETE FROM business_products WHERE id = " + this.id;        
          this.db.query(this.query, (err, result) => {
            if (err) {
              this.db.close();        
              reject(err);
            }
            fs.unlink("public/" + this.picpath, (err)=>{
              this.db.close();
              resolve(result);
            });
          });
        });
      });
  };

  changestatus = () => {
    this.query = "UPDATE business_products SET status = '" + this.status + "' WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM business_products WHERE id = " + this.id;
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
  BusinessProduct: BusinessProduct
};
