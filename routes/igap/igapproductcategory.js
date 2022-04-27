var express = require("express");
var IGAPProductCategory = require("../../models/igap/IGAPProductCategory");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let igapproductcategory = new IGAPProductCategory.IGAPProductCategory();
  igapproductcategory.id = body.data.id;
  igapproductcategory.name = body.data.name;
  igapproductcategory.srno = body.data.srno;
  igapproductcategory.imagecode = body.data.imagecode;
  igapproductcategory.save().then(
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
  let igapproductcategory = new IGAPProductCategory.IGAPProductCategory();

  igapproductcategory.list().then(
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
  let igapproductcategory = new IGAPProductCategory.IGAPProductCategory();
  igapproductcategory.id = body.data.id;
  igapproductcategory.delete().then(
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
  let igapproductcategory = new IGAPProductCategory.IGAPProductCategory();
  igapproductcategory.id = body.data.id;
  igapproductcategory.get().then(
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
