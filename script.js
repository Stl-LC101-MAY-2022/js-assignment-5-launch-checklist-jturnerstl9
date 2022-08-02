// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

       let form = this.document.querySelector('form')
       form.addEventListener('submit', event => {
           let list = document.getElementById('FaultyItems')
           let pilotName = document.querySelector("input[name=pilotName]").value;
           let copilotName = document.querySelector("input[name=copilotName]").value;
           let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
           let cargoMass = document.querySelector("input[name=cargoMass]").value;
           let input = [pilotName, copilotName, fuelLevel, cargoMass]
           console.log('input', input)
           const fuelValidator = validateInput(fuelLevel);
           const cargoMassValidator = validateInput(cargoMass);
           if (pilotName == null || pilotName === "" || copilotName == null || copilotName === "" || fuelLevel == null || fuelLevel === "" || cargoMass == null || cargoMass === "") {
               alert('All Fields are Required')
               return false;
           } else if (fuelValidator !== 'Is a Number' || cargoMassValidator !== 'Is a Number') {
               alert("Make sure to enter valid information for each field!")
           } else {
               formSubmission(document, list, pilotName, copilotName, parseInt(fuelLevel), parseInt(cargoMass));

           }
           event.preventDefault();
       })
   })
});
   

   
