//Server code.
const express = require("express"); //Require express.
const app = express(); //Init app.
app.listen(3000, function () {
    console.log("Listening (3000).");
});
//Serving static content.
app.use(express.static("public")); //Use folder public.
app.use(express.static("node_modules")); //Use node modules.
