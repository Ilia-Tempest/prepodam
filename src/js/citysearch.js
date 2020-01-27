
	 var token = "1248895506e1ffd92683d1b73ffc20d6d46facb4";
            var $city   = $("#city");
            var $street = $("#street");
           
            // город и населенный пункт
            $city.suggestions({
              token: token,
              type: "ADDRESS",
              hint: false,
              bounds: "city-settlement"
            });
            $street.suggestions({
              token: token,
              type: "ADDRESS",
              hint: false,
              bounds: "street",
              constraints: $city
            });
