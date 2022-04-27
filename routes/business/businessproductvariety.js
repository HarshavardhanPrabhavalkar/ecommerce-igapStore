var express = require("express");
var BusinessProductVariety = require("../../models/business/BusinessProductVariety");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.id = body.data.id;
  businessproductvariety.productid = body.data.productid;
  businessproductvariety.size = body.data.size;
  businessproductvariety.color = body.data.color;
  businessproductvariety.weight = body.data.weight;
  businessproductvariety.mrp  = body.data.mrp ;
  businessproductvariety.price  = body.data.price ;
  businessproductvariety.instock = body.data.instock;
  businessproductvariety.save().then(
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
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.productid = body.data.productid;
  businessproductvariety.list().then(
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
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.id = body.data.id;
  businessproductvariety.delete().then(
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
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.id = body.data.id;
  businessproductvariety.get().then(
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
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.id = body.data.id;
  businessproductvariety.status = body.data.status;
  businessproductvariety.changestatus().then(
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


router.post("/changestock", async (req, res) => {
  let body = req.body;
  let businessproductvariety = new BusinessProductVariety.BusinessProductVariety();
  businessproductvariety.id = body.data.id;
  businessproductvariety.instock = body.data.instock;
  businessproductvariety.changestock().then(
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
