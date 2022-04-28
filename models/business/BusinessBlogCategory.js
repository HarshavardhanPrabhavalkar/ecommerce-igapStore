const database = require("../Database");
var fs = require("fs");

class BusinessBlogCategory {

    id = 0;
    businessid = 0;
    tittle = "";
    urltittle = "";
    query = "";
    srno = "";
    db = new database.Database();

    constructor() {
        this.id = 0;
        this.businessid = 0;
        this.tittle = "";
        this.urltittle = "";
        this.srno = "";
        this.query = "";
      }

      save = () => {
        if (this.id == 0) {
          this.query = "INSERT INTO business_blogcategories (businessid,  tittle, urltittle,srno) ";
          this.query += "VALUES(" + this.businessid + ", '" + this.tittle +  "', '" + this.urltittle + "', '" + this.srno + "') ";
           

        }
        else {
          this.query = "UPDATE business_blogcategories SET  businessid = " + this.businessid + ", ";
          this.query += "tittle ='" + this.tittle + "', ";
          this.query += "urltittle ='" + this.urltittle + "', ";
          this.query += "srno = '" + this.srno + "' ";
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
        this.query = "SELECT * FROM business_blogcategories ";
        return new Promise((resolve, reject) => {
          this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err) reject(err);
            resolve(result);
          });
        });
      };


      get=()=>{
        this.query = "SELECT * FROM business_blogcategories WHERE id = " + this.id;
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
        this.query = "SELECT * FROM business_blogcategories WHERE id = " + this.id;
        return new Promise((resolve, reject) => {     
              this.db.query(this.query, (err, result) => {
                if (err) {
                  this.db.close();        
                  reject(err);
                }
                  resolve(result);
              });
        });
    };
}

module.exports = {
    BusinessBlogCategory: BusinessBlogCategory
};
