let Database = require("../Database");
var fs = require("fs");

class IGAPVendorProductPicture {

    id = 0;
    productid = 0;
    title = "";
    picpath = "";
    imagecode = "";
    srno = 0;

    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.title = "";
        this.productid = 0;
        this.picpath = "";
        this.imagecode = "";
        this.srno = 0;
    }

    save=()=>{
        if (this.imagecode != "") {
            let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
            base64image = base64image.replace(/^data:image\/png;base64,/, "");
            this.picpath = "vendorproducts/" + Math.random().toString(36).substring(2, 7) + ".png";
            fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
                console.log("Error image saving-" + err);
            });
        }
        if(this.id==0){
            this.query = "INSERT INTO igap_vendorproductpictures(id, title, productid, picpath, srno )  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.title +"','"+ this.productid +"','"+ this.picpath+"','"+ this.srno +"')"; 
        }
        else {
            this.query = "UPDATE igap_vendorproductpictures SET title = '"+ this.title+"', ";
            this.query += "productid = " + this.productid + ", ";
            if(this.picpath != "")
                this.query += "picpath = '"+this.picpath + "', ";
            this.query += "srno = " + this.srno + " ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

    get=()=>{
        this.query = "SELECT * FROM igap_vendorproductpictures WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

    list=()=>{
        this.query =  "SELECT * FROM igap_vendorproductpictures WHERE productid = " + this.productid;
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
        this.query = "SELECT * FROM igap_vendorproductpictures WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
            this.picpath = result[0].picpath;
            this.query = "DELETE FROM igap_vendorproductpictures WHERE id = " + this.id;        
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
module.exports={
    IGAPVendorProductPicture:IGAPVendorProductPicture
}