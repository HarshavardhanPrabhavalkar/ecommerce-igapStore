let Database = require("../Database");
let fs = require("fs");

class IGAPProductCategory {
    id = 0;
    name = "";
    picpath = "";
    srno = 0;
    imagecode = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.picpath = "";
        this.imagecode = "";
        this.srno = 0;
    }

    save = () => {
        if (this.imagecode != "") {
            let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
            base64image = base64image.replace(/^data:image\/png;base64,/, "");
            this.picpath = "productcategories/" + Math.random().toString(36).substring(2, 7) + ".png";
            fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
                console.log("Error image saving-" + err);
            });
        }
        if (this.id == 0) {
            this.query = "INSERT INTO igap_productcategories(name, picpath, srno) ";
            this.query += "VALUES('" + this.name + "','" + this.picpath + "', " + this.srno + ")";
        }
        else {
            this.query = "UPDATE igap_productcategories SET name = '" + this.name + "', ";
            if (this.picpath != "")
                this.query += "picpath = '" + this.picpath + "', ";
            this.query += "srno = " + this.srno + " ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    get = () => {
        this.query = "SELECT * FROM igap_productcategories WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM igap_productcategories ORDER BY srno";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    delete = () => {
        this.query = "DELETE FROM igap_productcategories  WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = {
    IGAPProductCategory: IGAPProductCategory
}