
var getBeerAPI = function getBeerAPI(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
          result += "<div class='col-lg-3'><b>Name:</b>" 
	  + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="100" height="180">' +"<br><b>Tagline:</b>" 
	  + response[i].srm+"<br><b>srm:</b>"
	  + response[i].volume+"<br><b>volume:</b>"
	  + response[i].tagline+"<br><b>First brewed:</b>"
	  + response[i].first_brewed+"<br><b>Yeast:</b>"
	  + response[i].ingredients.yeast+ "<hr></div>";
          document.getElementById("beers").innerHTML = result;
        }
        if(response.length == 0){
            document.getElementById("beers").innerHTML = "no found";
            document.getElementById("num").innerHTML = 0;
        }
        if(name == ""){
            document.getElementById("beers").innerHTML = "no found";
            document.getElementById("num").innerHTML = 0;
        }
  
    });
  };

  var getYeast = function getYeast(name) {
    return fetch('https://api.punkapi.com/v2/beers/?yeast=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
          result += "<div class='col-lg-3'><b>Name:</b>" 
	  + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="100" height="180">' +"<br><b>Tagline:</b>" 
	  + response[i].srm+"<br><b>srm:</b>"
	  + response[i].volume+"<br><b>volume:</b>"
	  + response[i].tagline+"<br><b>First brewed:</b>"
	  + response[i].first_brewed+"<br><b>Yeast:</b>"
	  + response[i].ingredients.yeast+ "<hr></div>";
          document.getElementById("beers").innerHTML = result;
        }

  
    });
  };

  var getBeerYeast = function getBeerYeast(name,yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
          result += "<div class='col-lg-3'><b>Name:</b>" 
	  + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="100" height="180">' +"<br><b>Tagline:</b>" 
	  + response[i].srm+"<br><b>srm:</b>"
	  + response[i].volume+"<br><b>volume:</b>"
	  + response[i].tagline+"<br><b>First brewed:</b>"
	  + response[i].first_brewed+"<br><b>Yeast:</b>"
	  + response[i].ingredients.yeast+ "<hr></div>";
          document.getElementById("beers").innerHTML = result;
        }

  
    });
  };

  var findBeer = function findBeer(name,yeast){
    if (yeast != "" && name != "") {
        getBeerYeast(name,yeast);
    } else if (yeast != "") {
        getYeast(yeast);
    } else if (name != "") {
        getBeerAPI(name);
    } else {
        document.getElementById("beers").innerHTML = "no found";
    }
  }