//server code

const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening on 3000."));
app.use(express.static("public")); //Folder public.
app.use(express.static("node_modules/jquery/dist")); //Use jQuery.
app.use(express.static("node_modules/bootstrap/dist")); //Use bootstrap.
