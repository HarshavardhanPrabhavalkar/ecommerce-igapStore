let Database = require("../Database");

class IGAPVendor {
    id = 0;
    name = "";
    email = "";
    mobileno = "";
    address = "";
    cityid = "";
    pincode = "";
    query = "";

    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.address = "";
        this.cityid = "";
        this.pincode = "";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO igap_vendors(name, email, mobileno, address, cityid, pincode) ";
            this.query += "VALUES ('" + this.name + "', '" + this.email + "', '" + this.mobileno + "', '" + this.address + "', " + this.cityid + ", '" + this.pincode + "')";
        }
        else
        {
            this.query = "UPDATE igap_vendors SET name = '" + this.name + "', ";
            this.query += "email = '" + this.email +"', ";
            this.query += "address = '" + this.address +"', ";
            this.query += "cityid= " + this.cityid + ", ";
            this.query += "pincode = '" + this.pincode +"' ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    get = () =>{
        this.query = "SELECT * FROM igap_vendors WHERE id = " + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    list = () =>{
        this.query = "SELECT * FROM igap_vendors ORDER BY name";
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM igap_vendors  WHERE id =" + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
}

module.exports = {
    IGAPVendor:IGAPVendor
}