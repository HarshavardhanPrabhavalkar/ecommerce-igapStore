var express = require("express");
var IGAPVendorProductVariety = require("../../models/igap/IGAPVendorProductVariety")
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.id = body.data.id;
  igapvendorproductvariety.productid = body.data.productid;
  igapvendorproductvariety.color = body.data.color;
  igapvendorproductvariety.size = body.data.size;
  igapvendorproductvariety.weight = body.data.weight;
  igapvendorproductvariety.mrp = body.data.mrp;
  igapvendorproductvariety.price = body.data.price;
  igapvendorproductvariety.instock = body.data.instock;
  igapvendorproductvariety.save().then(
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
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.id = body.data.id;
  igapvendorproductvariety.get().then(
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
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.productid = body.data.productid;
  igapvendorproductvariety.list().then(
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
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.id = body.data.id;
  igapvendorproductvariety.delete().then(
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
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.id = body.data.id;
  igapvendorproductvariety.status = body.data.status;  
  igapvendorproductvariety.changestock().then(result => {
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

router.post("/changestock", async (req, res) => {
  let body = req.body;
  let igapvendorproductvariety = new IGAPVendorProductVariety.IGAPVendorProductVariety();
  igapvendorproductvariety.id = body.data.id;
  igapvendorproductvariety.instock = body.data.instock;  
  igapvendorproductvariety.changestock().then(result => {
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