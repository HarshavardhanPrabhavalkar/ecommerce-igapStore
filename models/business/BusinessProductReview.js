let Database = require("../Database");

class BusinessProductReview {

    id = 0;
    productid = 0;
    userid = 0;
    rating = 0;
    review = "";
    createdon = "";
    status = "";

    db = new Database.Database();

    constructor(){

        this.id = 0;
        this.productid = 0;
        this.userid = 0;
        this.rating = 0;
        this.review = "";
        this.createdon = "";        
        this.status = "";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO businessproductreviews(productid, userid, rating, review, createdon, status )";
            this.query += "VALUES (" + this.productid + ", " + this.userid + ", " + this.rating + ", '" + this.review + "', CURDATE(), 'close')";
        }
        else
        {
            this.query = "UPDATE businessproductreviews SET rating = " + this.rating +", ";
            this.query += "review = '" + this.review + "' ";
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
        this.query = "SELECT * FROM businessproductreviews WHERE id = " + this.id;
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
        this.query = "SELECT * FROM businessproductreviews WHERE productid = " + this.productid + " ORDER BY createdon";
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
        this.query = "DELETE FROM businessproductreviews WHERE id =" + this.id;
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

    changestatus = ()=>{
        this.query = "UPDATE businessproductreviews SET status='" + this.status + "' WHERE id = " + this.id;
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
    BusinessProductReview:BusinessProductReview
}