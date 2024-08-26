document.getElementById('get-weather').addEventListener('click', function() {
    const state = document.getElementById('state-select').value;
    const apiKey = '77d556d80c1460ee7124f0040b12a1e3'; // Replace with your API key
    const weatherInfo = document.getElementById('weather-info');
    
    // State capital cities mapping
    const stateCapitals = {
        
        // Add other states and their capitals here
        AndhraPradesh:'Amaravati',
        ArunachalPradesh: 'Itanagar',
        Assam:  'Dispur',
        Bihar: 'Patna',
        Chhattisgarh:'Raipur',
        Goa: 'Panaji',
        Gujarat: 'Gandhinagar',
        Haryana: 'Chandigarh',
        HimachalPradesh: 'Shimla',
        Jharkhand: 'Ranchi',
        Karnataka: 'Bangalore',
        Kerala: 'Thiruvananthapuram',
        MadhyaPradesh: 'Bhopal',
        Maharashtra: 'Mumbai',
        Manipur: 'Imphal',
        Meghalaya: 'Shillong',
        Mizoram: 'Aizawl',
        Nagaland: 'Kohima',
        Odisha:'Bhubaneshwar',
        Punjab: 'Chandigarh',
        Rajasthan: 'Jaipur',
        Sikkim: 'Gangtok',
        TamilNadu: 'Chennai',
        Telangana: 'Hyderabad',
        Tripura: 'Agartala',
        Uttarakhand: 'Dehradun',
        UttarPradesh: 'Lucknow',
        WestBengal: 'Kolkata',
        Ladakh: 'Leh',
        Lakshadweep: 'Kavaratti',
        Puducherry: 'Puducherry',
    };

    const city = stateCapitals[state];
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML = `
                <h3>Weather in ${city}, ${state}:</h3>
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} mph</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
            console.error('Error:', error);
        });
});
