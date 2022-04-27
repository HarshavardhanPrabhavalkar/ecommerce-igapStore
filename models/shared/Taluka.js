let Database = require("../Database");

class Taluka{

    id = 0;
    name = "";
    districtid = 0;

    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.districtid = 0;
        this.name = "";
    }

    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO talukas(name, districtid)  ";
           this.query+= "VALUES('"+ this.name +"', "+ this.districtid + ")"; 
        }
        else {
            this.query = "UPDATE talukas SET name = '"+ this.name + "', ";
            this.query += "districtid = " + this.districtid + " ";
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
        this.query = "SELECT * FROM talukas WHERE id = " + this.id;
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
        this.query =  "SELECT * FROM talukas ";
        if(this.districtid != 0)
            this.query += "WHERE districtid = " + this.districtid + " ";
        this.query += "ORDER BY name";
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
        this.query = "DELETE FROM talukas  WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
}

module.exports={
    Taluka:Taluka
}