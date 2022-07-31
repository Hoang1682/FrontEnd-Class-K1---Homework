/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
document.getElementById('username')
    .insertAdjacentHTML('beforebegin', '<label for="username">Username: </label>');
document.getElementById('password')
    .insertAdjacentHTML('beforebegin', '<label for="password">Password: </label>');
document.getElementById('confirmPassword')
    .insertAdjacentHTML('beforebegin', '<label for="confirmPassword">Confirm Password:')
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
    if(event.target.value === '' && !errorElement.length) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
    }

    if(errorElement && event.target.value !== '') {
        errorElement.forEach(elem => elem.remove());
    }
};

document.getElementById('username')
    .addEventListener('blur', checkInput);
document.getElementById('password')
    .addEventListener('blur', checkInput);
document.getElementById('confirmPassword')
    .addEventListener('blur', checkInput);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
document.getElementById('confirmPassword')
    .addEventListener('blur', (event) => {
        if (event.target.value !== document.getElementById('password').value) {
            event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords Should Match</span>');
        }
    });


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
document.getElementById('registrationForm')
    .addEventListener('change', (event) => {
        const formIsFilled = Array.from(document.querySelectorAll('input'))
            .every(input => input.value);
        if (formIsFilled) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', 'disabled');
        }
    });
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const form = document.getElementById('registationForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.innerText = 'User registered successfully';
    form.prepend(alert);
});