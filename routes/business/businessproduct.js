
var express = require("express");
var BusinessProduct = require("../../models/business/BusinessProduct");
const router = express.Router();



router.post("/save", async (req, res) => {
    let body = req.body;
    let businessproduct = new BusinessProduct.BusinessProduct();    
    businessproduct.id = body.data.id;
    businessproduct.businessid = body.data.businessid;
    businessproduct.igapvendorid = body.data.igapvendorid;
    businessproduct.businessvendorid = body.data.businessvendorid;
    businessproduct.businessproductcategoryid = body.data.businessproductcategoryid;
    businessproduct.name = body.data.name;
    businessproduct.title = body.data.title;
    businessproduct.description = body.data.description;
    businessproduct.specification = body.data.specification;
    businessproduct.mrp = body.data.mrp;
    businessproduct.price = body.data.price;
    businessproduct.imagecode = body.data.imagecode;
    businessproduct.instock = body.data.instock;
    businessproduct.save().then(
        (result) => {
          let data = {
            data: {
              status: "success",
              data: result,
            },
          };
          res.end(JSON.stringify(data));
        },
        (err) => {
          let data = {
            data: {
              status: "fail",
            },
          };
          res.end(JSON.stringify(data));
        }
      );
    });
    
    router.post("/list", async (req, res) => {
      let body = req.body;
      let businessproduct = new BusinessProduct.BusinessProduct();
      businessproduct.businessid = body.data.businessid;
      businessproduct.list().then(
        (result) => {
          let data = {
            data: {
              status: "success",
              data: result,
            },
          };
          res.end(JSON.stringify(data));
        },
        (err) => {
          let data = {
            data: {
              status: "fail",
            },
          };
          res.end(JSON.stringify(data));
        }
      );
    });
    
    router.post("/delete", async (req, res) => {
      let body = req.body;
      let businessproduct = new BusinessProduct.BusinessProduct();
      businessproduct.id = body.data.id;
      businessproduct.delete().then(
        (result) => {
          let data = {
            data: {
              status: "success",
              data: result,
            },
          };
          res.end(JSON.stringify(data));
        },
        (err) => {
          let data = {
            data: {
              status: "fail",
            },
          };
          res.end(JSON.stringify(data));
        }
      );
    });

    router.post("/changestatus", async (req, res) => {
        let body = req.body;
        let businessproduct = new BusinessProduct.BusinessProduct();
        businessproduct.id = body.data.id;
        businessproduct.status = body.data.status;
        businessproduct.changestatus().then(
          (result) => {
            let data = {
              data: {
                status: "success",
                data: result,
              },
            };
            res.end(JSON.stringify(data));
          },
          (err) => {
            let data = {
              data: {
                status: "fail",
              },
            };
            res.end(JSON.stringify(data));
          }
        );
      });
    
    router.post("/get", async (req, res) => {
      let body = req.body;
      let businessproduct = new BusinessProduct.BusinessProduct();
      businessproduct.id = body.data.id;
      businessproduct.get().then(
        (result) => {
          let data = {
            data: {
              status: "success",
              data: result,
            },
          };
          res.end(JSON.stringify(data));
        },
        (err) => {
          let data = {
            data: {
              status: "fail",
            },
          };
          res.end(JSON.stringify(data));
        }
      );
    });
    
    module.exports = router;
    