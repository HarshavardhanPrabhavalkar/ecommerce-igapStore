var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var BusinessBlogCategory = require("../../models/business/BusinessBlogCategory");

router.post("/save", async (req, res) => {
    let body = req.body;
    console.log(body);
    let businessBCategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessBCategory.id = body.data.id;
    businessBCategory.businessid = body.data.businessid;
    businessBCategory.tittle = body.data.tittle;
    businessBCategory.urltittle = body.data.urltittle;
    businessBCategory.srno = body.data.srno;

    businessBCategory.save().then(result =>{
        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/list", async (req, res) => {
    let body = req.body;
    let businessBCategory = new BusinessBlogCategory.BusinessBlogCategory();            
    businessBCategory.list().then(result =>{
    let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );
});

router.post("/get", async (req, res) => {
    let body = req.body;
    let businessBCategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessBCategory.id = body.data.id;
    businessBCategory.get().then(
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
    let businessBCategory = new BusinessBlogCategory.BusinessBlogCategory();
    businessBCategory.id = body.data.id;
    businessBCategory.delete().then(
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