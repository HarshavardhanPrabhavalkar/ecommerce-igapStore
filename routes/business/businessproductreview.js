var express = require("express");
var BusinessProductReview = require("../../models/business/BusinessProductReview");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;

  let businessproductreview = new BusinessProductReview.BusinessProductReview();
  businessproductreview.id = body.data.id;
  businessproductreview.productid = body.data.productid;
  businessproductreview.userid = body.data.userid;  
  businessproductreview.rating = body.data.rating;
  businessproductreview.review = body.data.review;
  businessproductreview.save().then(
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
  let businessproductreview = new BusinessProductReview.BusinessProductReview();
  businessproductreview.id = body.data.id;
  businessproductreview.get().then(
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
  let businessproductreview = new BusinessProductReview.BusinessProductReview();
  businessproductreview.productid = body.data.productid;
  businessproductreview.list().then(
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
  let businessproductreview = new BusinessProductReview.BusinessProductReview();
  businessproductreview.id = body.data.id;
  businessproductreview.delete().then(
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
  let businessproductreview = new BusinessProductReview.BusinessProductReview();
  businessproductreview.id = body.data.id;
  businessproductreview.status = body.data.status;  
  businessproductreview.changestatus().then(result => {
      let data = {
          "status": "success",
          "data": result
      }
      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "failed"
          }
          res.end(JSON.stringify(data));
          console.log(err)
      });
});


module.exports = router;