var express = require("express");
var IGAPVendor = require("../../models/igap/IGAPVendor");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let igapvendor = new IGAPVendor.IGAPVendor();
  igapvendor.id = body.data.id;
  igapvendor.name = body.data.name;
  igapvendor.email = body.data.email;
  igapvendor.mobileno = body.data.mobileno;
  igapvendor.address = body.data.address;
  igapvendor.cityid = body.data.cityid;
  igapvendor.pincode = body.data.pincode;
  igapvendor.save().then(
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
  let igapvendor = new IGAPVendor.IGAPVendor();

  igapvendor.list().then(
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
  let igapvendor = new IGAPVendor.IGAPVendor();
  igapvendor.id = body.data.id;
  igapvendor.delete().then(
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
  let igapvendor = new IGAPVendor.IGAPVendor();
  igapvendor.id = body.data.id;
  igapvendor.get().then(
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
