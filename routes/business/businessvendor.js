var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var Vendor = require("../../models/business/BusinessVendor");

router.post("/save", async (req, res) => {
  let body = req.body;
  let vendor = new Vendor.BusinessVendor();
  vendor.id = body.data.id;
  vendor.businessid = body.data.businessid;
  vendor.name = body.data.name;
  vendor.email = body.data.email;
  vendor.mobileno = body.data.mobileno;
  vendor.address = body.data.address;
  vendor.cityid = body.data.cityid;
  vendor.pincode = body.data.pincode;

  vendor.save().then(
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
  let vendor = new Vendor.BusinessVendor();
  vendor.id = body.data.id;

  vendor.get().then(
    (result) => {
      console.log(result);

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
  let vendor = new Vendor.BusinessVendor();
  vendor.list().then(
    (result) => {
      console.log(result);

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
  console.log(body);
  let vendor = new Vendor.BusinessVendor();
  vendor.id = body.data.id;
  vendor.delete().then(
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
