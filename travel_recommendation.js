
function generateHtml (contentId) {
    const content = document.getElementById('display-element')
    if (contentId === 'Home'){
        content.innerHTML = `
        <div class="display-class">
        <h1>Your epic vacation begins here!</h1>
        <p>Check out all the destinations that interest you!</p>
        </div>`;
    } else if (contentId === 'About Us'){
        content.innerHTML = `
        <div class="display-class">
        <h1>About Us</h1>
        <p>Meet the team that makes all this happen!</p>
        <ul>
        <li>Mr.Man<br>
            Mr.Man is responsible for maintaining code <br>
            and debugging</li>
        <li>Ms.Woman <br>
            Ms.Woman is responsible for coordinating <br>
            teams and ensuring deadlines are reached.
        </li>
        <li>Mrs.Woman <br>
            Mrs.Woman is the CEO 
            </li>
        </ul>
        </div>`;
    } else if (contentId === 'Contact Us'){
        content.innerHTML = `
        <div class="display-class">
        <h1>Contact Us</h1>
        <p>Get in contact with a team member today!</p>
        <input type="name">Name</input>
        <input type="email">Email</input>
        <textarea type="text" placeholder="Message goes here"></textarea>
        </div>`;
    }
}

fetch('./travel_recommendation_api.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Check if data is logged correctly
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });