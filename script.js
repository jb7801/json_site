document.addEventListener('DOMContentLoaded', function() {
  let cowData = [
  {
    "name": "HOLSTEIN FRIESIAN",
    "image_url": "holstein.jpeg",
    "image2_url": "holstein2.png",
    "description": "Holstein Friesians are known for their distinctive black and white markings and high milk production. They are the most popular dairy cow breed in the U.S.",
    "origin": "Netherlands, Germany",
    "physical": "Large frame, black and white spotted, prominent udders.",
    "lifespan": "Around 5 years on average in production, with a lifespan of around 15 years."
  },
  {
    "name": "RED ANGUS",
    "image_url": "red_angus.png",
    "image2_url": "red_angus2.png",
    "description": "Red Angus cattle are known for their reddish-brown color and they are a polled (hornless) breed, making them easy to handle. They are known for being gentle and kind.",
    "origin": "Scotland",
    "physical": "Medium-sized with a solid red color, muscular body",
    "lifespan": "10 to 15 years."
  },
  {
    "name": "JERSEY",
    "image_url": "jersey.png",
    "image2_url": "jersey2.png",
    "description": "Jersey cattle are small dairy cows known for the high butterfat content of their milk. They are highly adaptable to various climates and management systems.",
    "origin": "Jersey, Channel Islands",
    "physical": "Small size, light brown color, with a gentle disposition.",
    "lifespan": "Can live on average between 12 to 15 years."
  },
  {
    "name": "HIGHLAND",
    "image_url": "highland.png",
    "image2_url": "highland2.png",
    "description": "Highland cattle are a Scottish breed known for their long horns and woolly coats, which make them well-suited to harsh weather conditions. They are often raised for their distinctive appearance.",
    "origin": "Scotland",
    "physical": "Long horns, shaggy coat, comes in black, brindle, red, and yellow.",
    "lifespan": "Up to 20 years."
  },
  {
    "name": "BELTED GALLOWAY",
    "image_url": "belted.png",
    "image2_url": "belted2.png",
    "description": "The Belted Galloway is easily recognized by its white belt around its middle on a black, red, or dun coat. This breed is known for its foraging efficiency.",
    "origin": "Scotland",
    "physical": "Medium size, distinctive white belt, generally black coat with variations.",
    "lifespan": "Around 15 to 20 years."
  },
  {
    "name": "GUERNSEY",
    "image_url": "guernsey.jpg",
    "image2_url": "guernsey2.png",
    "description": "Guernsey cows are another excellent dairy breed, producing milk with a high butterfat and protein content. They are known for their golden-brown coat and kind nature.",
    "origin": "Guernsey, Channel Islands",
    "physical": "Medium frame, golden-brown and white coat, docile temperament.",
    "lifespan": "6 to 8 years."
  },
  {
    "name": "AYRSHIRE",
    "image_url": "ayrshire.png",
    "image2_url": "ayrshire2.png",
    "description": "Ayrshire cattle are resilient and efficient grazers that are favored for their ability to convert grass into milk efficiently. Their milk is ideal for cheese-making due to its high protein content.",
    "origin": "Ayrshire, Scotland",
    "physical": "Medium size, red and white coat, with strong limbs.",
    "lifespan": "Around 12 to 15 years on average."
  },
  {
    "name": "CHAROLAIS",
    "image_url": "charolais.png",
    "image2_url": "charolais2.png",
    "description": "Charolais cattle are large with a white or cream-colored coat, known for their muscle and growth rate.",
    "origin": "France",
    "physical": "Large size, white to cream-colored coat, heavily muscled.",
    "lifespan": "Typically around 9 to 10 years."
  },
  {
    "name": "BROWN SWISS",
    "image_url": "swiss.png",
    "image2_url": "swiss2.png",
    "description": "Brown Swiss is a versatile dairy breed with a long history, appreciated for its milk, which is rich in protein and fat. The breed is also noted for its durability and docile temperament.",
    "origin": "Switzerland",
    "physical": "Large size, solid brown or grey coat, large ears, and strong constitution.",
    "lifespan": "Exceeding 15 years."
  }
];


  // Get the container elements
  let cowContainer = document.getElementById('cow-container');
  let cowDetailSection = document.getElementById('cow-detail-section');

  // Function to create each cow's DOM element and add it to the grid
  function createCowElement(cow, index) {
    let cowElement = document.createElement('div');
    cowElement.className = 'cow-item';
    cowElement.id = `cow-${index}`; // Assign a unique ID to each cow for the anchor link

    let cowAnchor = document.createElement('a');
    cowAnchor.href = `#cow-details-${index}`; // Anchor link pointing to the details section

    let cowImage = document.createElement('img');
    cowImage.src = cow.image_url;
    cowImage.alt = cow.name;
    cowAnchor.appendChild(cowImage);

    let cowName = document.createElement('h3');
    cowName.textContent = cow.name;
    cowAnchor.appendChild(cowName); // Name as part of the anchor

    cowElement.appendChild(cowAnchor); // Anchor inside the cow item

    return cowElement;
  }

  // Function to create and show cow details
 // Function to create and show cow details
function showCowDetails(cow, index) {
  let cowDetailsDiv = document.createElement('div');
  cowDetailsDiv.className = 'cow-details';
  cowDetailsDiv.id = `cow-details-${index}`; // Assign a unique ID for the details

  // Create flex container
  let flexContainer = document.createElement('div');
  flexContainer.className = 'flex-container';

  // Create div for image
  let imageDiv = document.createElement('div');
  let cowImage2 = document.createElement('img');
  cowImage2.src = cow.image2_url;
  cowImage2.alt = cow.name;
  cowImage2.className = 'cow-detail-image'; // Add a class for styling
  imageDiv.appendChild(cowImage2);

  // Create div for text info
  let textInfoDiv = document.createElement('div');

  let cowNameH2 = document.createElement('h2');
  cowNameH2.textContent = cow.name;
  textInfoDiv.appendChild(cowNameH2);

  let cowOriginP = document.createElement('p');
  cowOriginP.textContent = "Origin: " + cow.origin;
  textInfoDiv.appendChild(cowOriginP);

  let cowUseP = document.createElement('p');
  cowUseP.textContent = "Physical: " + cow.physical;
  textInfoDiv.appendChild(cowUseP);

  let cowLifespanP = document.createElement('p');
  cowLifespanP.textContent = "Lifespan: " + cow.lifespan;
  textInfoDiv.appendChild(cowLifespanP);

  let cowDescriptionP = document.createElement('p');
  cowDescriptionP.textContent = cow.description;
  textInfoDiv.appendChild(cowDescriptionP);

  // Append image and text info divs to flex container
  flexContainer.appendChild(imageDiv);
  flexContainer.appendChild(textInfoDiv);

  // Append flex container to main details div
  cowDetailsDiv.appendChild(flexContainer);

  return cowDetailsDiv;

  };

// Create and append cow grid elements
  cowData.forEach(function(cow, index) {
    let cowElement = createCowElement(cow, index);
    cowContainer.appendChild(cowElement);
  });

  // Create and append cow details sections
  cowData.forEach(function(cow, index) {
    let cowDetails = showCowDetails(cow, index);
    cowDetailSection.appendChild(cowDetails);
  });

  });

  new Glide('.glide').mount()






