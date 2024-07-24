const express = require("express")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.put("/test/:name", (req, res) => {
    console.log(req.params.name);
    const data = {
        nama : req.body.nama,
        pekerjaan : req.body.job
    }
    // console.log("Hello world");
    res.json(data)
  });

const PORT = process.env.PORT || 8000; // mengakses port dari setingan env pada laptop
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})
