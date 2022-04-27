var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var BusinessCoupon = require("../../models/business/BusinessCoupon");

router.post("/save", async (req, res) => {
    let body = req.body;
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.id = body.data.id;
    businesscoupon.businessid = body.data.businessid;
    businesscoupon.couponcode = body.data.couponcode.toString().toUpperCase().trim();
    businesscoupon.startdate = body.data.startdate;
    businesscoupon.enddate = body.data.enddate;
    businesscoupon.description = body.data.description;
    businesscoupon.save().then(result =>{
        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});


router.post("/addproduct", async (req, res) => {
    let body = req.body;
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.id = body.data.couponid;
    businesscoupon.addproduct(body.data.productid).then(result =>{
        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});


router.post("/removeproduct", async (req, res) => {
    let body = req.body;
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.id = body.data.couponid;
    businesscoupon.removeproduct(body.data.productid).then(result =>{
        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/get", async (req, res) => {
    let body = req.body;
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.id = body.data.id;            
    businesscoupon.get().then(coupon =>{
        businesscoupon.getproducts().then(result =>{
            let data = 
            {
                "data":{
                    "status":"success",
                    "data":{
                        "coupon":coupon,
                        "products":result
                    }
                }
            }
            res.end(JSON.stringify(data));
        }),
        err =>{
            let data = {
                "data":{
                    "status":"fail"
                }
            };
            res.end(JSON.stringify(data))
        }
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );

});

router.post("/list", async (req, res) => {
    let body = req.body;
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.businessid = body.data.businessid;            
    businesscoupon.list().then(result =>{
    let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/delete", async (req, res) => {
    let body = req.body;
    console.log(body);
    let businesscoupon = new BusinessCoupon.BusinessCoupon();
    businesscoupon.id = body.data.id;            
    businesscoupon.delete().then(result =>{
    let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});
module.exports = router;