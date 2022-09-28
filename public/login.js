const makeAcc = document.querySelector('#switchSignUp');
const login = document.querySelector('#switchLogIn')
const signUpGood = document.querySelector('#signUpGood');
const signUpBtn = document.querySelector('#signup');
const loginGood = document.querySelector('#loginGood');
const logInBtn = document.querySelector('#login');

function logInPg(event) {
  event.preventDefault();
  signUpGood.classList.add('silent');
  loginGood.classList.remove('silent');
};

function signUpPg(event) {
  event.preventDefault();
  signUpGood.classList.add('silent');
  loginGood.classList.remove('silent');
};

async function createNewUser(event) {
  event.preventDefault();
  const userName = document.querySelector('#usernameSignUp').value;
  const passWord = document.querySelector('#passwordSignUp').value;
  console.log(userName);
  if(userName && passWord && passWord.length >= 8){
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        passWord,
        isOnline: true,
        }),
        headers: {
          'Content-type': 'application/json'
    }
});
console.log(response);
window.location.replace('http://localhost:3001/api/users');
} else {
window.alert('Your password needs to be longer than 8 characters');
}};

const loginUser = async function(event) {
event.preventDefault();
const username = document.querySelector('#usernameLogIn').value;
const password = document.querySelector('#passwordLogIn').value;
if(username && password){
const data = fetch('/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username,
        password,
        isOnline: true,
    })
});
if(data.ok){
    document.location.replace('/');
} else {
    alert('Please try again');
};
}};

logInBtn.addEventListener('submit', loginUser);
signUpBtn.addEventListener('submit', createNewUser);
makeAcc.addEventListener('click', signUpPg);
login.addEventListener('click', logInPg);