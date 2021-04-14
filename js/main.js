async function getCovidApi()
{
	const jsonFormatData = await fetch("https://api.covid19api.com/summary");
	const jsFormatData = await jsonFormatData.json();
	
	const TotalglobalCase = jsFormatData.Global.TotalConfirmed;
	console.log("Total Global Case :" + TotalglobalCase);
	
	const countryName = jsFormatData.Countries[0].Country;
	console.log("First Country Name :" + countryName);
	console.log(jsFormatData.Countries[13].Country);
	
	
	document.getElementById("G1").innerHTML = jsFormatData.Global.TotalConfirmed;
	document.getElementById("G2").innerHTML = jsFormatData.Global.TotalDeaths;
	document.getElementById("G3").innerHTML = jsFormatData.Global.TotalRecovered;
	document.getElementById("G4").innerHTML = jsFormatData.Global.NewConfirmed;
	document.getElementById("G5").innerHTML = jsFormatData.Global.NewDeaths;
	document.getElementById("G6").innerHTML = jsFormatData.Global.NewRecovered;
	
	
	document.getElementById("B1").innerHTML = jsFormatData.Countries[13].TotalConfirmed;
	document.getElementById("B2").innerHTML = jsFormatData.Countries[13].TotalDeaths;
	document.getElementById("B3").innerHTML = jsFormatData.Countries[13].TotalRecovered;
	document.getElementById("B4").innerHTML = jsFormatData.Countries[13].NewConfirmed;
	document.getElementById("B5").innerHTML = jsFormatData.Countries[13].NewDeaths;
	document.getElementById("B6").innerHTML = jsFormatData.Countries[13].NewRecovered;
	document.getElementById("Date").innerHTML = jsFormatData.Countries[13].Date;
}
getCovidApi();

/*---------------------
Authorized::Forhad Reza
-----------*/

//http://dashboard.dghs.gov.bd/webportal/pages/covid19.php