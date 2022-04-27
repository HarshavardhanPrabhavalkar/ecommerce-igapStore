const database = require("../Database");
var fs = require("fs");

class BusinessBlogs {

    id = 0;
    businessid = 0;
    categoryid = 0;
    tittle = "";
    urltittle = "";
    createdoneby = "";
    author = "";
    picpath = "";
    body = "";
    query = "";
    db = new database.Database();

    constructor() {
        this.id = 0;
        this.businessid = 0;
        this.categoryid = 0;
        this.tittle = "";
        this.urltittle = "";
        this.createdoneby = "";
        this.author = "";
        this.picpath = "";
        this.imagecode = "";
        this.body = "";
        this.query = "";
      }

      save = () => {

        if (this.imagecode != "") {
            let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
            base64image = base64image.replace(/^data:image\/png;base64,/, "");
            this.picpath = "businessblogs/" + Math.random().toString(36).substring(2, 7) + ".png";
            fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
                console.log("Error image saving-" + err);
            });
        }
        if (this.id == 0) {
          this.query = "INSERT INTO business_blogs (businessid, categoryid, tittle, urltittle, createdoneby, author,picpath,body) ";
          this.query += "VALUES(" + this.businessid + ", '" + this.categoryid +  "', '" + this.tittle +  "', '" + this.urltittle +  "', '" + this.createdoneby +  "', '" + this.author +  "', '" + this.picpath +  "', '" + this.body +  "') ";
           

        }
        else {
          this.query = "UPDATE business_blogs SET  businessid = " + this.businessid + ", ";
          this.query += "categoryid = '" + this.categoryid + "', ";
          this.query += "tittle ='" + this.tittle + "', ";
          this.query += "urltittle ='" + this.urltittle + "', ";
          this.query += "createdoneby = '" + this.createdoneby + "', ";
          this.query += "author = '" + this.author + "', ";
          if(this.picpath != "")
                this.query += "picpath = '" + this.picpath + "', ";
          this.query += "body = '" + this.body + "'";
          this.query += " WHERE id =" + this.id;
        }

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err)
                };
                resolve(result);
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM business_blogs ";
        return new Promise((resolve, reject) => {
          this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err) reject(err);
            resolve(result);
          });
        });
      };


      get=()=>{
        this.query = "SELECT * FROM business_blogs WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });          
    }

 
    delete=()=>{
        this.query = "SELECT * FROM business_blogs WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
            this.picpath = result[0].picpath;
            this.query = "DELETE FROM business_blogs WHERE id = " + this.id;        
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
}

module.exports = {
    BusinessBlogs: BusinessBlogs
};