let count = 10; // Starting count
let interval = setInterval(() => {
  if (count > 3) {
    count--;
    document.getElementById('counter').innerText = `Only ${count} left!`;
  }
  if (count === 3) {
    document.getElementById('counter').innerText = 'Only 3 left! Hurry up!';
    document.getElementById('message').innerText = 'Don\'t miss out! This offer is almost gone.';
    clearInterval(interval);
  }
}, 10000);

// Step 1: Bind the event listener to the "Next" button for step 1
document.getElementById('nextButton1').addEventListener('click', function() {
  // Validate step 1 before proceeding to the next step
  if (validateStep(1)) {
    nextStep(1); // Go to next step
  }
});

// Step 2: Bind the event listener to the "Next" button for step 2
document.getElementById('nextButton2').addEventListener('click', function() {
  // Validate step 2 before proceeding to the next step
  if (validateStep(2)) {
    nextStep(2); // Go to next step
  }
});

// Step 3: Bind the event listener to the "Next" button for step 3
document.getElementById('nextButton3').addEventListener('click', function() {
  // Validate step 3 before proceeding to the next step
  if (validateStep(3)) {
    nextStep(3); // Go to next step
  }
});

// Step 4: Bind the event listener to the "Next" button for step 4
document.getElementById('nextButton4').addEventListener('click', function() {
  // Validate step 4 before proceeding to the next step
  if (validateStep(4)) {
    nextStep(4); // Go to next step
  }
});

// This function moves to the next step after validation
function nextStep(step) {
  // Validate the current step
  if (!validateStep(step)) return; // Prevent going to next step if invalid

  // Hide the current step
  document.getElementById(`step${step}`).style.display = 'none';

  // Show the next step
  document.getElementById(`step${step + 1}`).style.display = 'block';

  // Optional: Disable current step button and enable next step button
  if (document.getElementById(`nextButton${step}`)) {
    document.getElementById(`nextButton${step}`).disabled = true;
  }
  if (document.getElementById(`nextButton${step + 1}`)) {
    document.getElementById(`nextButton${step + 1}`).disabled = false;
  }
}

// Validate the input fields for each step
function validateStep(step) {
  let valid = true;

  // Step 1 validation example
  if (step === 1) {
    let name = document.getElementById('exampleInputName').value.trim();
    let email = document.getElementById('exampleInputEmail1').value.trim();
    let password = document.getElementById('exampleInputPassword1').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (name === '') {
      document.getElementById('nameError').textContent = 'Come on, you have a name, right?';
      valid = false;
    }

    if (email === '') {
      document.getElementById('emailError').textContent = 'Really? You don\'t know your email?';
      valid = false;
    } else if (!email.includes('@')) {
      document.getElementById('emailError').textContent = 'Wow! No "@"? Impressive email skills.';
      valid = false;
    }

    if (password === '') {
      document.getElementById('passwordError').textContent = 'That’s the best you can do?';
      valid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Seriously? Weak passwords like that?';
      valid = false;
    }
  }

  // Step 2 validation
  if (step === 2) {
    let zodiac = document.getElementById('zodiac').value;
    let pizzaTopping = document.getElementById('pizzaTopping').value.trim();
    let bloodType = document.getElementById('bloodType').value;

    // Clear previous error messages
    document.getElementById('zodiacError').textContent = '';
    document.getElementById('pizzaToppingError').textContent = '';
    document.getElementById('bloodTypeError').textContent = '';

    if (zodiac === '') {
      document.getElementById('zodiacError').textContent = 'C\'mon, you have a zodiac sign, right?';
      valid = false;
    }

    if (pizzaTopping === '') {
      document.getElementById('pizzaToppingError').textContent = 'Pizza topping is mandatory. No topping, no subscription.';
      valid = false;
    }

    if (bloodType === '') {
      document.getElementById('bloodTypeError').textContent = 'I mean... we need your blood type. Just in case.';
      valid = false;
    }
  }

  // Step 3 validation
  if (step === 3) {
    let resolution = document.getElementById('resolution').value.trim();
    let incognito = document.getElementById('incognito').value.trim();

    // Clear previous error messages
    document.getElementById('resolutionError').textContent = '';
    document.getElementById('incognitoError').textContent = '';

    if (resolution === '') {
      document.getElementById('resolutionError').textContent = 'Really? You don\'t know your screen resolution?';
      valid = false;
    }

    if (incognito === '') {
      document.getElementById('incognitoError').textContent = 'Are you REALLY in incognito or just pretending?';
      valid = false;
    }
  }

  // Step 4 validation
  if (step === 4) {
    let exName = document.getElementById('exName').value.trim();
    let criedNetflix = document.getElementById('criedNetflix').value.trim();
    let relationshipStatus = document.getElementById('relationshipStatus').value.trim();

    // Clear previous error messages
    document.getElementById('exNameError').textContent = '';
    document.getElementById('criedNetflixError').textContent = '';
    document.getElementById('relationshipStatusError').textContent = '';

    if (exName === '') {
      document.getElementById('exNameError').textContent = 'You really don\'t want to say your ex\'s name?';
      valid = false;
    }

    if (criedNetflix === '') {
      document.getElementById('criedNetflixError').textContent = 'C\'mon! Everyone has cried watching Netflix.';
      valid = false;
    }

    if (relationshipStatus === '') {
      document.getElementById('relationshipStatusError').textContent = 'Are you single or taken? We promise not to judge.';
      valid = false;
    }
  }

  return valid;
}



const facts = [
  "Netflix was founded on August 29, 1997, in Scotts Valley, California, by Reed Hastings and Marc Randolph. Initially, it started as a DVD rental service where customers could rent DVDs online and have them mailed to their homes. Within a few years, they introduced the streaming service we know today.",
  "In 2000, Netflix approached Blockbuster (a giant in the movie rental business at the time) and offered to sell Netflix for $50 million. Blockbuster laughed at the offer and rejected it. Fast forward, Blockbuster went bankrupt in 2010, while Netflix became a billion-dollar company.",
  "The first Netflix original series was 'House of Cards,' which premiered in 2013. The show was a massive success and proved that Netflix could create high-quality original content, which changed the streaming industry forever.",
  "In 2016, Netflix achieved a major milestone by expanding its services to over 190 countries worldwide, excluding only a few countries like China, North Korea, and Syria. This made Netflix a global powerhouse in the streaming industry.",
  "Netflix spends billions of dollars each year creating original content. In 2022 alone, Netflix spent over $17 billion on original movies, shows, documentaries, and other content to maintain its dominance in the streaming world.",
  "One of Netflix's biggest sleeper hits was 'Squid Game' in 2021. The Korean drama became the most-watched show in Netflix history, with over 1.65 billion hours watched in the first 28 days of release.",
  "Netflix's user interface and algorithm are extremely powerful. It uses a complex recommendation algorithm that suggests shows and movies based on your viewing history, watch time, and even how long you hover over a title before clicking.",
  "Netflix introduced the 'Skip Intro' button in 2017. This feature became a massive hit and is now used by millions of people daily, saving them billions of minutes in watch time.",
  "The famous 'ta-dum' sound you hear when you start Netflix was created by Oscar-winning sound designer Lon Bender. The sound is now iconic and instantly recognizable.",
  "Netflix has more than 230 million subscribers worldwide, making it the largest streaming platform on the planet. Despite increasing competition from Disney+, HBO Max, and others, Netflix still holds a significant market share."
];

function showRandomFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact);
}

setInterval(showRandomFact, 15000);


let currentNumber = 0;
const phoneDisplay = document.getElementById('phone');

function incrementPhone() {
    // INCREMENT THE NUMBER
    currentNumber++;

    // CONVERT TO 10 DIGIT NUMBER
    let numberString = currentNumber.toString().padStart(10, '0');

    // SPLIT INTO 00000-00000
    let leftPart = numberString.substring(0, 5);
    let rightPart = numberString.substring(5);

    // UPDATE THE DISPLAY
    phoneDisplay.value = leftPart + '-' + rightPart;
}
function validateForm() {
  const phoneInput = document.getElementById('phone');
  const phoneValue = phoneInput.value;

 
  if (phoneInput.checkValidity()) {
      alert('vaild form!');
      
  } else {
      alert('Please enter a valid 10-digit phone number in the format 00000-00000.');
  }
}