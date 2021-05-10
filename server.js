const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
};

mongoose.connect(process.env.MONGO_URI || "mongo://localhost/googleIt", {
    useNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
