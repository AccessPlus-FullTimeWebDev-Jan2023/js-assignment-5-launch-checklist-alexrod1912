// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotFormInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotFormInput.value;
        let copilotFormInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotFormInput.value;
 
        
        let fuelFormInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelFormInput.value);
 


        let cargoFormInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoFormInput.value);
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    })
    
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
   
 });



   
