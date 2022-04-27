var express = require("express");
var BusinessProductCategory = require("../../models/business/BusinessProductCategory");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessproductcategory = new BusinessProductCategory.BusinessProductCategory();
  businessproductcategory.id = body.data.id;
  businessproductcategory.businessid = body.data.businessid;
  businessproductcategory.name = body.data.name;
  businessproductcategory.imagecode = body.data.imagecode;
  businessproductcategory.srno = body.data.srno;
  console.log(body.data.imagecode);
  businessproductcategory.save().then(
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
  let businessproductcategory = new BusinessProductCategory.BusinessProductCategory();
  businessproductcategory.businessid = body.data.businessid;
  businessproductcategory.list().then(
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
  let businessproductcategory = new BusinessProductCategory.BusinessProductCategory();
  businessproductcategory.id = body.data.id;
  businessproductcategory.delete().then(
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
  let businessproductcategory = new BusinessProductCategory.BusinessProductCategory();
  businessproductcategory.id = body.data.id;
  businessproductcategory.get().then(
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
