const Database = require("../Database");

class Business {
    id = 0;
    name = "";
    email = "";
    password = "";
    mobileno = "";
    title = "";
    address = "";
    cityid = "";
    pincode = "";
    description = "";
    joiningdate = "";
    expirydate = "";
    status = ""
    query = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.mobileno = "";
        this.email = "";
        this.password = "";
        this.title = "";
        this.address = "";
        this.cityid = "";
        this.pincode = "";
        this.description = "";
        this.joiningdate = "";
        this.expirydate = "";
        this.status = "";
    }

    save = () => {
        
        if (this.id == 0) {
            this.query = "INSERT INTO businesses(name, title, address, cityid, pincode, description, joiningdate, expirydate, email, mobileno, password, status) ";
            this.query += "VALUES('" + this.name + "','" + this.title + "', '" + this.address + "', ";
            this.query += "'" + this.cityid + "', '" + this.pincode + "', '" + this.description + "', ";
            this.query += "STR_TO_DATE('" + this.joiningdate + "', '%d/%m/%Y'), STR_TO_DATE('" + this.expirydate + "', '%d/%m/%Y'), '" + this.email + "', ";
            this.query += "'" + this.mobileno + "','" + this.password + "', 'active')";
        }
        else {
            this.query = "UPDATE businesses SET  name = '" + this.name + "', ";
            this.query += "title = '" + this.title + "', ";
            this.query += "address = '" + this.address + "', ";
            this.query += "cityid = '" + this.cityid + "', ";
            this.query += "pincode = '" + this.pincode + "', ";
            this.query += "description = '" + this.description + "', ";
            this.query += "joiningdate = STR_TO_DATE('" + this.joiningdate + "', '%d/%m/%Y'), ";
            this.query += "expirydate = STR_TO_DATE('" + this.expirydate + "', '%d/%m/%Y'), ";
            this.query += "email = '" + this.email + "', ";
            this.query += "mobileno = '" + this.mobileno + "', ";
            this.query += "password = '" + this.password + "', ";
            this.query += "pincode = '" + this.status + "' ";
            this.query += "WHERE id =" + this.id;
        }

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err)
                }
                resolve(result);
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM businesses ORDER BY name";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM businesses WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }

    changestatus = ()=>{
        this.query = "UPDATE businesses SET status = '" + this.status + "' WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }


    get=()=>{
        this.query = "SELECT * FROM businesses WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });  
    }
}
module.exports = {
    Business: Business
}