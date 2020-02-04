var mongoose = require("mongoose");
var express = require("express");
var app = express();

mongoose.connect("mongodb://localhost:27017/launchpad", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

  var staff = [
    { image: "http://pngimg.com/uploads/mario/mario_PNG116.png",
      name: "Mario",
      bio: "Filter decaffeinated crema, wings affogato milk single shot robusta skinny bar pumpkin spice cinnamon, half and half and filter saucer shop. Cappuccino at to go, cup cortado sweet qui so medium ristretto pumpkin spice con panna, saucer mocha, galão pumpkin spice froth cup medium instant."
    },
    { image: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/d/de/Princess_Peach_%28Fortune_Street%29.png/revision/latest?cb=20140720001721",
      name: "Peach",
      bio: "Filter decaffeinated crema, wings affogato milk single shot robusta skinny bar pumpkin spice cinnamon, half and half and filter saucer shop. Grinder shop, and java skinny so rich organic spoon affogato, brewed blue mountain at seasonal milk. Black instant con panna strong, organic cream, turkish mocha flavour mocha cortado organic percolator. Aftertaste caffeine roast, aged café au lait chicory aromatic, so brewed black, a steamed, dark brewed, plunger pot fair trade galão viennese java. Cappuccino at to go, cup cortado sweet qui so medium ristretto pumpkin spice con panna, saucer mocha, galão pumpkin spice froth cup medium instant."
    },
    { image: "http://www.pngmart.com/files/2/Luigi-PNG-Pic.png",
      name: "Luigi",
      bio: "Filter decaffeinated crema, wings affogato milk single shot robusta skinny bar pumpkin spice cinnamon, half and half and filter saucer shop. Grinder shop, and java skinny so rich organic spoon affogato, brewed blue mountain at seasonal milk. Black instant con panna strong, organic cream, turkish mocha flavour mocha cortado organic percolator. Aftertaste caffeine roast, aged café au lait chicory aromatic, so brewed black, a steamed, dark brewed, plunger pot fair trade galão viennese java."
    }
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/video", function(req, res){
    res.render("video");
});

app.get("/audio", function(req, res){
    res.render("audio");
});

app.get("/photography", function(req, res){
    res.render("photography");
});

app.get("/webdesign", function(req, res){
    res.render("webdesign");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/whoweare", function(req, res){
    res.render("whoweare", {staff: staff});
});

app.get("/login", function(req, res){
    res.render("login");
});

app.listen(3000, process.env.IP, function(){
    console.log("3.. 2.. Ignition");
});
