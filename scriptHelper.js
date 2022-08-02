// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML =

        `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`

}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput) === false) {
        return "Is a Number"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let fuelLevelStatus = document.getElementById('fuelStatus')
    let cargoMassStatus = document.getElementById('cargoStatus')
    let launchStatus = document.getElementById('launchStatus')

    document.getElementById("faultyItems").style.visibility = "visible";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`
    fuelLevelStatus.innerHTML = `Fuel levels are nominal`
    cargoMassStatus.innerHTML = `Cargo mass is nominal`
    launchStatus.style.color = 'rgb(0,204,0)'
    launchStatus.innerHTML = 'Shuttle Ready for Launch'

    if (fuelLevel < 10000 || cargoLevel > 10000) {

        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = 'rgb(255,102,178)'

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low"
        } 
        if (cargoLevel > 10000){
            cargoStatus.innerHTML = "Cargo mass too high"
        }

    } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = 'rgb(65, 159, 106)'
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length)
    return planets[randomPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;