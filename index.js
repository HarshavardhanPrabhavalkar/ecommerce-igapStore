var express = require("express");
var body_parser = require("body-parser");

var app = express();

app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({limit: '50mb', extended: true}));  

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});
app.get("/",function(req,res){
    res.send("Welcome to iGAP-Ecommerce Store APIs")
    res.end();
});

// Shared APIs routing for Beginning
app.use("/shared/state", require("./routes/shared/state"));
app.use("/shared/district", require("./routes/shared/district"));
app.use("/shared/taluka", require("./routes/shared/taluka"));
app.use("/shared/city", require("./routes/shared/city"));
// Shared APIs routing for End

// IGAP APIs routing for Beginning
app.use("/igap/admin", require("./routes/igap/admin"))
app.use("/igap/business", require("./routes/igap/business"));
app.use("/igap/productcategory", require("./routes/igap/igapproductcategory"));
app.use("/igap/vendor", require("./routes/igap/igapvendor"));
app.use("/igap/vendorproduct", require("./routes/igap/igapvendorproduct"));
app.use("/igap/vendorproductpicture" , require("./routes/igap/igapvenderproductpicture"));
app.use("/igap/vendorproductvariety", require("./routes/igap/igapvendorproductvariety"));
// IGAP APIs routing for End

// Business APIs routing for Beginning
app.use("/business/vendor",require("./routes/business/businessvendor"));
app.use("/business/productcategory", require("./routes/business/businessproductcategory"));
app.use("/business/product", require("./routes/business/businessproduct"));
app.use("/business/productpicture" , require("./routes/business/businessproductpicture"));
app.use("/business/productvariety", require("./routes/business/businessproductvariety"));
app.use("/business/productreview", require("./routes/business/businessproductreview"));
app.use("/business/coupon",require("./routes/business/businesscoupon"));
app.use("/business/blogcategory",require("./routes/business/businessblogcategory"));
app.use("/business/blog", require("./routes/business/businessblog"));
// Business APIs routing for End

app.listen(8081, function() {
    console.log("website is  started");
});

