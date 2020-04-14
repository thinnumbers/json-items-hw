var contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    "title" : "Xenoblade Chronicles 2",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/91QSt2qqzXL._SY445_.jpg",
    "bg_color" : "#f55d5d",
    "price" : "$60~$90",
    "reasons" : ["Great and well written story", "Fun characters", "Mythra", "Open world RPG"]
  },
  {
    "title" : "Fire Emblem: Three Houses",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/817KFp1wiOL._SY445_.jpg",
    "bg_color" : "#13c8e8",
    "price" : "$60~$90",
    "reasons" : ["Fun Strategy Game ", "Story that branches", "Ferdinand von Aegir", "Higly Replayable"]
  },
  {
    "title" : "Animal Crossing",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/81q1%2BP5JmkL._SY445_.jpg",
    "bg_color" : "#13c8e8",
    "price" : "$60",
    "reasons" : ["Isabelle", "Catching Bugs", "Fishing","Not Tom Nook"]
  },
  {
    "title" : "Breathe of the Wild",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/51bCN6wNhuL._SY445_.jpg",
    "bg_color" : "#f55d5d",
    "price" : "$60~$90",
    "reasons" : ["Immersive gameplay", "Beautiful to the eye", "Endless amount of fun","Link is cool"]
  },
  {
    "title" : "MarioKart 8 Deluxe",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SY445_.jpg",
    "bg_color" : "#f55d5d",
    "price" : "$60",
    "reasons" : ["Play with friends", "Getting mad at each other", "Blue Shell","Blue shells aren't cool actually"]
  },
  {
    "title" : "MarioMaker 2",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/81o4tWrwkpL._SY445_.jpg",
    "bg_color" : "#13c8e8",
    "price" : "$60",
    "reasons" : ["Create Mario Levels", "Play friend's levels", "Get mad","Endless Possibilities"]
  },
  {
    "title" : "Super Mario Odyssey",
    "image_url" : "https://images-na.ssl-images-amazon.com/images/I/91JZdTYcjFL._SY445_.jpg",
    "bg_color" : "#13c8e8",
    "price" : "$60",
    "reasons" : ["Open adventure", "Great movement", "It's Mario","Mario Galaxy vibes"]
  }
];
// #f55d5d  red
// #13c8e8 blue
  for (var i = 0; i < jsonDatabase.length; i++) {
   createElementJson(jsonDatabase[i]);
  }
  // <div id="contentGrid">
  //   <div class="contentItem" style="background-color: #000">
  //     <h2 class="contentTitle">My Title</h2>
  //      <img src = "" class = "contentImage">
  //  <h3>Price:</h3>
    //<div class = "priceTag">$60</div>
  //     <h3>reasons</h3>
  //     <ul class="reason">
  //       <li>reason 1</li>
  //       <li>reason 2</li>
  //       <li>reason 3</li>
  //       <li>reason 4</li>
  //     </ul>
function createElementJson(incomingJson){
  let contentElement = document.createElement("DIV");
  contentElement.style.backgroundColor = incomingJson['bg_color'];
  contentElement.classList.add('contentItem');

  let titleElement = document.createElement("H2");
  titleElement.classList.add('contentTitle');
  titleElement.innerHTML = incomingJson['title'];
  contentElement.appendChild(titleElement);

  let imageElement = document.createElement("IMG");
  imageElement.classList.add('contentImage');
  imageElement.src = incomingJson['image_url'];
  contentElement.appendChild(imageElement);

  let priceHeaderElement = document.createElement("H3");
  priceHeaderElement.innerHTML = "Price: ";
  contentElement.appendChild(priceHeaderElement);

  let priceElement = document.createElement("DIV");
  priceElement.innerHTML = incomingJson['price'];
  priceElement.classList.add('priceTag');
  contentElement.appendChild(priceElement);

  let listHeaderElement = document.createElement("H3");
  listHeaderElement.innerHTML = "Reasons to play: ";
  contentElement.appendChild(listHeaderElement);

  let reasonListElement = document.createElement("UL");
  contentElement.appendChild(reasonListElement);

  for(var i = 0; i < incomingJson['reasons'].length; i++){
    let reasonItem = document.createElement("LI");
    reasonItem.innerHTML = incomingJson['reasons'][i];
    reasonListElement.appendChild(reasonItem);
  }
   contentGridElement.appendChild(contentElement);
}
