let Database = require("../Database");

class State{
    id = 0;
    name = "";  
    db = new Database.Database();
    constructor(){
        this.id = 0;
        this.name = "";
    }
    save=()=>{
        if(this.id == 0){
            this.query = "INSERT INTO states(name)  VALUES('" + this.name + "')"; 
        }
        else {
            this.query = "UPDATE states SET name = '" + this.name +"' WHERE id = " + this.id;
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
        this.query = "SELECT * FROM states WHERE id = " + this.id;
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
        this.query =  "SELECT * FROM states ORDER BY name";
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
        this.query = "DELETE FROM states WHERE id = " + this.id;
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
    State:State
}