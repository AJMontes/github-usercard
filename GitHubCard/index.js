/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/ajmontes')
.then(
  response =>{
    console.log(response.data)
    console.log(makePersonalCard(response.data))
    cards.appendChild(makePersonalCard(response.data))

  }
)
.catch(
  error =>{ 
    console.log(error);

  }
)



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function makePersonalCard (user) {
  const card = document.createElement('div')
  card.classList.add('card')

  //we are creating the elements 
  const personImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userName = document.createElement('h1')
  const userCode = document.createElement('h2')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const userFollowers = document.createElement('p')
  const userFollowings = document.createElement('p')
  const userBio = document.createElement('p')

  //adding classes
  cardInfo.classList.add('cardInfo')
  userName.classList.add('name')
  userCode.classList.add('userName')

  // adding content
  personImage.src = user.avatar_url
  userName.textContent = `Name: ${user.name}`
  userCode.textContent = user.login
  userLocation.textContent = `Location: ${user.location}`
  userProfile.textContent = `Profile: ${user.url}`
  userFollowers.textContent = `Followers: ${user.followers_url.length}`
  userFollowings.textContent = `Following: ${user.following_url.length}`
  userBio.textContent = `Bio: ${user.bio}`

  // appeding it to the DOM
  card.appendChild(personImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userCode)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowings)
  cardInfo.appendChild(userBio)

  return card
}


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get('https://api.github.com/users/tetondan')
.then(
  response =>{
    cards.appendChild(makePersonalCard(response.data))
  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)

axios.get('https://api.github.com/users/dustinmyers')
.then(
  response =>{
    cards.appendChild(makePersonalCard(response.data))
  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)
axios.get('https://api.github.com/users/justsml')
.then(
  response =>{
    cards.appendChild(makePersonalCard(response.data))
  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)

axios.get('https://api.github.com/users/luishrd')
.then(
  response =>{
    cards.appendChild(makePersonalCard(response.data))
  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)

axios.get('https://api.github.com/users/bigknell')
.then(
  response =>{
    cards.appendChild(makePersonalCard(response.data))
  }
)
.catch(
  error =>{ 
    console.log(error);
  }
)

