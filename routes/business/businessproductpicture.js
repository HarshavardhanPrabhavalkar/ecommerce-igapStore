var express = require("express");
var BusinessProductPicture = require("../../models/business/BusinessProductPicture");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessproductpicture = new BusinessProductPicture.BusinessProductPicture();
  businessproductpicture.id = body.data.id;
  businessproductpicture.productid = body.data.productid;
  businessproductpicture.title = body.data.title;
  businessproductpicture.imagecode = body.data.imagecode;
  businessproductpicture.srno = body.data.srno;
  
  businessproductpicture.save().then(
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
  let businessproductpicture = new BusinessProductPicture.BusinessProductPicture();
  businessproductpicture.productid = body.data.productid;

  businessproductpicture.list().then(
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
  let businessproductpicture = new BusinessProductPicture.BusinessProductPicture();
  businessproductpicture.id = body.data.id;
  businessproductpicture.delete().then(
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
  let businessproductpicture = new BusinessProductPicture.BusinessProductPicture();
  businessproductpicture.id = body.data.id;
  businessproductpicture.get().then(
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
