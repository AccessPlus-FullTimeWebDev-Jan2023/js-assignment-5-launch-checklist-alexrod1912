// Write your JavaScript code here!



window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
        let cargoMass = document.querySelector("input[name=cargoMass]")
        
        let pilotNameVal = validateInput(pilotNameInput.value)
        let copilotNameVal = validateInput(copilotNameInput.value)
        let fuelLevelVal = validateInput(fuelLevelInput.value)
        let cargoMassVal = validateInput(cargoMass.value)

        

        //if any === "", alert all required

        if (pilotNameVal === "Empty" || 
            copilotNameVal === "Empty" || 
            fuelLevelVal === "Empty"||
            cargoMassVal === "Empty") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();

        } 
         if(pilotNameVal !== "Not a Number" || 
            copilotNameVal !== "Not a Number" || 
            fuelLevelVal !== "Number" ||
            cargoMassVal !== "Number"){
                console.log(pilotNameVal, copilotNameVal, fuelLevelVal, cargoMassVal)
                alert("Please put in valid inputs ")
                event.preventDefault();

        } 
        console.log(fuelLevelInput.value)
        console.log(fuelLevelInput)
        
        // console.log(pilotNameVal)

        let pilotStatus = document.getElementById("pilotStatus")
        let faultyItems = document.getElementById("faultyItems")
        let launchStatus = document.getElementById("launchStatus")
        let fuelStatus = document.getElementById("fuelStatus")
        let cargoStatus = document.getElementById("cargoStatus")
        // faultyItems.style.visibility = "visible"
        console.log(pilotStatus)
        pilotStatus.innerHTML= `Pilot Name: ${pilotNameInput.value}`
        copilotStatus.innerHTML = `Copilot Name: ${copilotNameInput.value}`
        console.log(pilotStatus)

        if (fuelLevelInput.value < 10000){
            faultyItems.style.visibility = "visible"
            fuelStatus.innerHTML = `${fuelLevelInput.value} is not enough for launch`
            launchStatus.innerHTML = `Shuttle not ready for launch`
            launchStatus.style.color = 'red'

        }

        if (cargoMass.value > 10000){
            faultyItems.style.visibility = "visible"
            cargoStatus.innerHTML = `${fuelLevelInput.value} is too much to launch`
            launchStatus.innerHTML = `Shuttle not ready for launch`
            launchStatus.style.color = 'red'

        }
        if (fuelLevelInput.value > 10000 && cargoMass.value < 10000){
            faultyItems.style.visibility = "visible"
            launchStatus.innerHTML = `Shuttle ready for launch`
            launchStatus.style.color = 'green'

        }
    })
    


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    listedPlanetsResponse= myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
   })
   
});