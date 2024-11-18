document.getElementById("home-link").addEventListener('click', function() {
    const displayHome = document.getElementById('display-element')
    .innerHTML = `<div class="display-class">
        <h1>Your epic vacation begins here!</h1>
        <p>Check out all the destinations that interest you!</p>
        </div>`;
  })
  
  document.getElementById("about-link").addEventListener('click', function() {
    const displayAbout = document.getElementById('display-element')
    .innerHTML = `
        <div class="display-class">
        <h1>About Us</h1>
        <p>Meet the team that makes all this happen!</p>
        <ul>
        <li>Mr.Man<br>
        <br>
            </li>
            <br>
        <li>Ms.Woman <br>
        <br>
            Ms.Woman is responsible for coordinating <br>
            teams and ensuring deadlines are reached.
        </li>
        <br>
        <li>Mrs.Woman <br>
        <br>
            Mrs.Woman is the CEO 
            </li>
        </ul>
        </div>`;
  })
  document.getElementById("contact-link").addEventListener('click', function() {
    const displayContact = document.getElementById('display-element')
    .innerHTML = `<div class="display-class">
        <h1>Contact a team Member today!!</h1>
        <input type="name">Name</input>
        <input type="email">Email</input>
        <textarea placeholder="Insert message here"></textarea>
        </div>`;
  })
  //Ensure the DOM is loaded before accessing JSON data
  document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('search-button').addEventListener('click', () => { 
        const query = document.getElementById('search-bar').value.toLowerCase(); 
        fetch('travel_recommendation_api.json') 
        .then(response => response.json()) 
        .then(data => { const results = []; 
            
            // Search in countries and their cities
            
            data.countries.forEach(country => { 
                country.cities.forEach(city => { 
                if (city.name.toLowerCase().includes(query)) { 
                    results.push({ 
                        type: 'City', 
                        name: city.name, 
                        imageUrl: city.imageUrl, 
                        description: city.description 
                    }); 
                } 
            }); 
        }); 
        
        // Search in temples
        
        data.temples.forEach(temple => { 
            if (temple.name.toLowerCase().includes(query)) { 
                results.push({ 
                    type: 'Temple', 
                    name: temple.name, 
                    imageUrl: temple.imageUrl, 
                    description: temple.description 
                }); 
            } 
        }); 
        
        // Search in beaches
         
        data.beaches.forEach(beach => { 
            if (beach.name.toLowerCase().includes(query)) { 
                results.push({ 
                    type: 'Beach', name: 
                    beach.name, 
                    imageUrl: beach.imageUrl, 
                    description: beach.description }); 
                } 
            }); 
            displayResults(results); 
        }) 
            .catch(error => console.error('Error fetching JSON data:', error)); 
        }); 
    }); 
    
    function displayResults(results) { 
        const resultsDiv = document.getElementById('display-element'); 
        resultsDiv.innerHTML = ''; 
        if (results.length > 0) { 
            results.forEach(result => { 
                const div = document.createElement('div'); 
                div.classList.add('result'); 
                div.innerHTML = ` 
                <h2>${result.name} (${result.type})</h2> 
                <img class="resized-image" src="${result.imageUrl}" alt="${result.name}"> 
                <p>${result.description}</p> `; 
                resultsDiv.appendChild(div); 
            }); 
            } else { 
                resultsDiv.textContent = 'No results found.'; 
            } }