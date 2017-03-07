var express = require('express');
var router = express.Router();


//打开添加文章的页面
router.get('/add', function(req, res, next) {
    console.log("打开添加文章页面");
    res.render("articles/addArticle",{title:"发表文章"});

});

router.post("/add",function (req,res,next) {
   console.log("提交新博客的信息");
});

module.exports = router;
