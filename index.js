//server code
const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening on 3000."));
app.use(express.static("public")); //Folder public.