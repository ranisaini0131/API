const express = require("express");
const multer = require("multer");
// require("./config");
// const Products = require("./product");

const app = express();

app.use(express.json());//middleware for json data

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + "".jpg)
        }
    })
}).single("user_file");
app.post("/", upload, (req, res) => {
    res.send("file upload");
})
app.listen(5000);