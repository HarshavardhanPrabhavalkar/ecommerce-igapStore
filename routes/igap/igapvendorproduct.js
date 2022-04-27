var express = require("express");
var cookie_parser = require("cookie-parser");
var IGAPVendorProduct = require("../../models/igap/IGAPVendorProduct");

const router = express.Router(); 
 
 router.post("/save", async (req, res) => {
    let body = req.body;
    let igapvendorproduct = new IGAPVendorProduct.IGAPVendorProduct();
    igapvendorproduct.id = body.data.id;
    igapvendorproduct.igapvendorid = body.data.igapvendorid;
    igapvendorproduct.igaproductcategoryid = body.data.igaproductcategoryid;
    igapvendorproduct.name = body.data.name;
    igapvendorproduct.title = body.data.title;
    igapvendorproduct.description = body.data.description;
    igapvendorproduct.specification = body.data.specification;
    // igapvendorproduct.picpath = body.data.picpath;
    igapvendorproduct.mrp = body.data.mrp;
    igapvendorproduct.imagecode = body.data.imagecode;
    igapvendorproduct.price = body.data.price;
    igapvendorproduct.instock = body.data.instock;
    igapvendorproduct.save().then(
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
      let igapvendorproduct = new IGAPVendorProduct.IGAPVendorProduct();
      igapvendorproduct.igapvendorid = body.data.igapvendorid;
      igapvendorproduct.list().then(
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
      let igapvendorproduct = new IGAPVendorProduct.IGAPVendorProduct();
      igapvendorproduct.id = body.data.id;
      igapvendorproduct.delete().then(
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
        let igapvendorproduct = new IGAPVendorProduct.IGAPVendorProduct();
        igapvendorproduct.id = body.data.id;
        igapvendorproduct.status = body.data.status;
        igapvendorproduct.changestatus().then(
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
      let igapvendorproduct = new IGAPVendorProduct.IGAPVendorProduct();
      igapvendorproduct.id = body.data.id;
      igapvendorproduct.get().then(
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
    