var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var BusinessBlogs = require("../../models/business/BusinessBlog");

router.post("/save", async (req, res) => {
    let body = req.body;
    let businessblog = new BusinessBlogs.BusinessBlogs();
    businessblog.id = body.data.id;
    businessblog.businessid = body.data.businessid;
    businessblog.categoryid = body.data.categoryid;
    businessblog.title = body.data.title;
    businessblog.urltitle = body.data.urltitle;
    businessblog.createdoneby = body.data.createdoneby;
    businessblog.author = body.data.author;
    // businessblog.picpath = body.data.picpath;
    businessblog.imagecode = body.data.imagecode;
    businessblog.body = body.data.body;

    businessblog.save().then(result =>{
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
    let businessblog = new BusinessBlogs.BusinessBlogs();            
    businessblog.list().then(result =>{
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
    let businessblog = new BusinessBlogs.BusinessBlogs();
    businessblog.id = body.data.id;
    businessblog.get().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        }
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
    let businessblog = new BusinessBlogs.BusinessBlogs();
    businessblog.id = body.data.id;
    businessblog.delete().then(
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
