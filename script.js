let count = 50; // Starting count
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

function nextStep(step) {
  if (!validateStep(step)) return; // Prevent going to next step if invalid

  // Hide the current step
  document.getElementById(`step${step}`).style.display = 'none';

  // Show the next step
  document.getElementById(`step${step + 1}`).style.display = 'block';

  // Optional: Disable current step button and enable next step button (if applicable)
  if (document.getElementById(`nextButton${step}`)) {
    document.getElementById(`nextButton${step}`).disabled = true;
  }
  if (document.getElementById(`nextButton${step + 1}`)) {
    document.getElementById(`nextButton${step + 1}`).disabled = false;
  }
}

function loadingScreen(step) {
  alert('Verifying your details...');
  setTimeout(() => {
    alert('Checking your viewing history...');
  }, 1000);
  setTimeout(() => {
    alert('Calculating your eligibility...');
    nextStep(step);
  }, 2000);
}

document.getElementById('step5').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Took you long enough, didn\'t it?');
  $('#exampleModal').modal('hide');
});

function validateStep(step) {
  let valid = true;

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

// Event listeners for step navigation buttons
document.getElementById('nextButton1').addEventListener('click', function () {
  nextStep(1); // Transition from step 1 to step 2
});

document.getElementById('nextButton2').addEventListener('click', function () {
  nextStep(2); // Transition from step 2 to step 3
});

document.getElementById('nextButton3').addEventListener('click', function () {
  nextStep(3); // Transition from step 3 to step 4
});

document.getElementById('nextButton4').addEventListener('click', function () {
  nextStep(4); // Transition from step 4 to step 5
});




// Start the bat animation
function startBatAnimation() {
  document.getElementById('bat-animation').style.display = 'block';
}

// Stop the bat animation
function stopBatAnimation() {
  document.getElementById('bat-animation').style.display = 'none';
}

// Start animation when the "Sign Up" button is clicked
document.getElementById('signUpButton').addEventListener('click', function () {
  startBatAnimation();
});

// Stop animation when the modal is closed
document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
  stopBatAnimation();
});