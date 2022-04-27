let Database = require("../Database");

class IGAPVendorProductVariety{

    id = 0;
    productid = 0;
    color = "";
    size = "";
    weight = 0;
    mrp = 0;
    price = 0;
    instock = "";
    status = "";

    // query = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.productid = 0;
        this.color = "";
        this.size = "";
        this.weight = 0;
        this.mrp = 0;
        this.price = 0;
        this.instock = "";
        this.status = "";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO igap_vendorproductvarieties(productid, color, size, weight, mrp, price, instock, status)";
            this.query += "VALUES (" + this.productid + ", '" + this.color + "', '" + this.size + "', " + this.weight + ", " + this.mrp + ", '" + this.price + "', '" + this.instock + "', 'open')";
        }
        else
        {
            this.query = "UPDATE igap_vendorproductvarieties SET productid = " + this.productid + ", ";
            this.query += "color = '" + this.color +"', ";
            this.query += "size = '" + this.size +"', ";
            this.query += "weight = " + this.weight + ", ";
            this.query += "mrp= " + this.mrp + ", ";
            this.query += "price = " + this.price +", ";
            this.query += "instock = '" + this.instock +"' ";
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
        this.query = "SELECT * FROM igap_vendorproductvarieties WHERE id = " + this.id;
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
        this.query = "SELECT * FROM igap_vendorproductvarieties WHERE productid = " + this.productid;
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
        this.query = "DELETE FROM igap_vendorproductvarieties WHERE id =" + this.id;
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

    change = ()=>{
        this.query = "UPDATE igap_vendorproductvarieties SET status = '" + this.status + "' WHERE id =" + this.id;
        console.log(this.query);
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

    changestock = ()=>{
        this.query = "UPDATE igap_vendorproductvarieties SET instock='" + this.instock + "' WHERE id = " + this.id;
        console.log(this.query);
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
    IGAPVendorProductVariety:IGAPVendorProductVariety
}