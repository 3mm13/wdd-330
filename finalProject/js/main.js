var passwords = [];
const str = localStorage.getItem("passwords");
console.log("HELLO WORLD");
if(str) {
    passwords = JSON.parse(str);
    renderPasswords();
}

var button = document.getElementsByClassName('addButton')
var dropdown = document.getElementById("dropdown");
var generateButton = document.getElementById("generateString");

function deletePassword(id) {
    console.log("in the delete function");
    passwords = passwords.filter(password => password.id != id);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    renderPasswords();
}

function renderPasswords() {
    const ul = document.getElementById("passwordList");
    ul.innerHTML = "";

    passwords.forEach((password)=> {
        let li = document.createElement("li");
        li.innerHTML = `<span for="url">URL: ${password.url}</span><br/><br/>
        <span for="username">Username: ${password.username}</span><br/><br/>
        <span for="password">Password: ${password.password}</span>
        <button id="deleteButton" onclick="deletePassword('${password.id}')">&times;</button>`;
        ul.appendChild(li);
    })
    

}


generateButton.addEventListener("click", ()=> {
    const encodedParams = new URLSearchParams();
    encodedParams.append("length", "20");
    encodedParams.append("type", "alphanumeric");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '507eb637b8msh8e1e814fe552855p128ce1jsn4d944a235688',
            'X-RapidAPI-Host': 'random-string-generator.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://random-string-generator.p.rapidapi.com/randomstring?length=12&type=numeric', options)
        .then(response => response.json())
        .then(response => printResponse(response))
        .catch(err => console.error(err));
})

function printResponse(response) {
    console.log(response);
    response["data"]["formatted"];
    let div = document.getElementById("randomString");
    div.innerHTML = "";
    let span = document.createElement("span");
    span.innerHTML = `<input type='text' value='${response["data"]["formatted"]}' id='generated'>`;
    div.appendChild(span);
}

var buttton = document.getElementById('createPassword');
console.log(buttton);

document.getElementById("createPassword").addEventListener("click", () => {
    console.log("in the selector");
    addPassword();
})

function addPassword(){
    console.log("in the function");
    const urlValue = document.getElementById("addUrl").value;
    const usernameValue = document.getElementById("addUsername").value;
    const passwordValue = document.getElementById("addPassword").value;
    passwords.push({
        id: new Date().getTime(),
        url: urlValue,
        username: usernameValue,
        password: passwordValue
    });
    console.log(passwords);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    window.location.href = "index.html";
    renderPasswords();
    
}