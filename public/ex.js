const newBtn = document.querySelector('newButton');
const post = document.querySelector('newPost');
const subBtn = document.querySelector('submit');

async function block(event) {
  event.preventDefault();
  
};

async function formhandle(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const aw = await fetch('/api/posts', {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(aw.ok) {
    document.location.replace('/dashboard');
  } else {
    window.alert("Did not post");
  }
}

newBtn.addEventListener("click", block);
subBtn.addEventListener("submit", formhandle);