var express = require("express");
var IGAPVendorProductPicture = require("../../models/igap/IGAPVendorProductPicture");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let igapvendorproductpicture = new IGAPVendorProductPicture.IGAPVendorProductPicture();
  igapvendorproductpicture.id = body.data.id;
  igapvendorproductpicture.productid = body.data.productid;
  igapvendorproductpicture.title = body.data.title;
  igapvendorproductpicture.imagecode = body.data.imagecode;
  igapvendorproductpicture.srno = body.data.srno;
  
  igapvendorproductpicture.save().then(
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
  let igapvendorproductpicture = new IGAPVendorProductPicture.IGAPVendorProductPicture();
  igapvendorproductpicture.productid = body.data.productid;
  igapvendorproductpicture.list().then(
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
  let igapvendorproductpicture = new IGAPVendorProductPicture.IGAPVendorProductPicture();
  igapvendorproductpicture.id = body.data.id;
  igapvendorproductpicture.delete().then(
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
  let igapvendorproductpicture = new IGAPVendorProductPicture.IGAPVendorProductPicture();
  igapvendorproductpicture.id = body.data.id;
  igapvendorproductpicture.get().then(
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
