let names;
let name;
let input1;
let input2;
let sex;
let status;
let grammar;
let backgroundImage;
let nameGenerated = false;
let generatedName = '';
let myFont;

function preload() {
	myFont = loadFont("Inconsolata-Black.otf");

	// Load multiple background images
  backgroundImage = [
    loadImage('image1.jpg'),
    loadImage('image2.jpg'),
    loadImage('image3.jpg'),
		loadImage('image5.jpg'),
		loadImage('image6.jpg'),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let randomIndex = Math.floor(random(backgroundImage.length));
  let randomImage = backgroundImage[randomIndex];
  background(randomImage);

  names = {
    "MN": [
      "Alaric",
      "Archibald",
      "Bertram",
      "Clement",
      "Dante",
      "Humphrey",
      "Drustan",
      "Neville",
      "Osric",
      "Roland"
    ],
    "MP": [
      "William",
      "John",
      "Richard",
      "Robert",
      "Henry",
      "Thomas"
    ],

    "FN": [
      "Amira",
      "Euphemia",
      "Honora",
      "Lavinia",
      "Godiva",
      "Isabeau"
    ],

    "FP": [
      "Alice",
      "Matilda",
      "Agnes",
      "Margaret",
      "Emma",
      "Cecilia",
      "Beatrice"
    ]
  };

  grammar = tracery.createGrammar(names);
	
  input1 = createInput();
  input1.position(windowWidth / 2 - 200, 20);
  input1.attribute('placeholder', 'Male or Female? (M/F)');

  input2 = createInput();
  input2.position(windowWidth / 2 + 60, 20);
  input2.attribute('placeholder', 'Noble or Peasant? (N/P)');

  let button = createButton('Enter');
  button.position(windowWidth / 2 - 20, 50);
  button.mousePressed(getText);
}


function getText() {
  sex = input1.value().toUpperCase();
  status = input2.value().toUpperCase();

  if (sex === 'M' && status === 'N') {
    name = grammar.flatten('#MN#');
  } else if (sex === 'M' && status === 'P') {
    name = grammar.flatten('#MP#');
  } else if (sex === 'F' && status === 'N') {
    name = grammar.flatten('#FN#');
  } else if (sex === 'F' && status === 'P') {
    name = grammar.flatten('#FP#');
  }

  if (name) {
    nameGenerated = true;
    generatedName = name;
  }
}

function draw() {
  if (nameGenerated) {
    let randomIndex = Math.floor(random(backgroundImage.length));
    let randomImage = backgroundImage[randomIndex];
    background(randomImage);
		image(randomImage, 0, 0, width, height);
		filter(GRAY);

    // Display the generated name
    fill('white');
    textSize(38);
		textAlign(CENTER);
		textFont(myFont);
		text('Your ' + sex + status + ' medieval name is: ' + name, windowWidth/2, 130);

    // Reset the flag and generated name
    nameGenerated = false;
    generatedName = '';
  }
}
