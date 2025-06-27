const countryElement = document.querySelector("#country");
const stateElement = document.querySelector("#state");
const cityElement = document.querySelector("#city");

async function loadCountries(countryElement) {
    if (!countryElement) {
        console.error("Country element is missing in the DOM.");
        return;
    }

    try {
        let request = await fetch(domain+'assets/plugins/countries-states-cities/countries.json'); // Fetch JSON file
        let response = await request.json(); // Convert response to JSON
        let data = response[2].data; // Assuming it's an array of country objects

        // Clear previous options
        countryElement.innerHTML = '<option value="">Select Country</option>';

        // Populate dropdown with countries
        data.forEach(country => {
            let option = document.createElement("option");
            option.text = country.name;
            option.value = country.id;
            countryElement.appendChild(option);
        });

        console.log("Countries Loaded:", data);
    } catch (error) {
        console.error("Error fetching countries JSON:", error);
    }
}


async function loadStates(countryElement, stateElement) {
    if (!countryElement || !stateElement) {
        console.error("Country or state element is missing in the DOM.");
        return;
    }

    try {
        let request = await fetch(domain+'assets/plugins/countries-states-cities/states.json'); // Fetch JSON file
        let response = await request.json(); // Convert response to JSON
        let data = response[2].data; // Assuming it's an array of state objects

        let selectedCountryId = countryElement.value;

        // Filter states belonging to the selected country
        let filteredStates = data.filter(state => state.countryId === selectedCountryId);

        // Clear previous options
        stateElement.innerHTML = '<option value="">Select State</option>';

        // Populate dropdown with filtered states
        filteredStates.forEach(state => {
            let option = document.createElement("option");
            option.text = state.name;
            option.value = state.id;
            stateElement.appendChild(option);
        });

        console.log("Filtered States:", filteredStates);
    } catch (error) {
        console.error("Error fetching states JSON:", error);
    }
}


async function loadCities(stateElement, cityElement) {
    if (!stateElement || !cityElement) {
        console.error("State or city element is missing in the DOM.");
        return;
    }

    try {
        let request = await fetch(domain+'assets/plugins/countries-states-cities/cities.json'); // Fetch JSON file
        let response = await request.json(); // Convert response to JSON
        let data = response[2].data; // Assuming it's an array of city objects

        let selectedStateId = stateElement.value;

        // Filter cities belonging to the selected state
        let filteredCities = data.filter(city => city.stateId === selectedStateId);

        // Clear previous options
        cityElement.innerHTML = '<option value="">Select City</option>';

        // Populate dropdown with filtered cities
        filteredCities.forEach(city => {
            let option = document.createElement("option");
            option.text = city.name;
            option.value = city.id;
            cityElement.appendChild(option);
        });

        console.log("Filtered Cities:", filteredCities);
    } catch (error) {
        console.error("Error fetching cities JSON:", error);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let countrySelect = document.getElementById("country");
    let stateSelect = document.getElementById("state");
    let citySelect = document.getElementById("city");

    loadCountries(countrySelect);

    countrySelect.addEventListener("change", function () {
        loadStates(countrySelect, stateSelect);
        citySelect.innerHTML = '<option value="">Select City</option>'; // Reset cities
    });

    stateSelect.addEventListener("change", function () {
        loadCities(stateSelect, citySelect);
    });
});
