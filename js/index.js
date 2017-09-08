import { getBeers } from './api.js'

getBeers()
  .then(response => response.json())
  .catch(e => console.error('Something went wrong', e))
  .then(function(response) {
    document.getElementById("num").innerHTML += response.length;
    var result = "";
    result
    for (var i = 0; i < 25; i++) {
      result += "<div class='col-lg-3'><b>Name:</b>" 
	  + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="100" height="180">' +"<br><b>Tagline:</b>" 
	  + response[i].srm+"<br><b>srm:</b>"
	  + response[i].volume+"<br><b>volume:</b>"
	  + response[i].tagline+"<br><b>First brewed:</b>"
	  + response[i].first_brewed+"<br><b>Yeast:</b>"
	  + response[i].ingredients.yeast+ "<hr></div>";
    }
    document.getElementById("beers").innerHTML = result;
  })

  