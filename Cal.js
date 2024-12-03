
const inputField = document.getElementById('inputfield');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputField.value === '') {
        alert("Please enter text");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = '';
    saveItem();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveItem();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveItem();
    }
}, false);

function saveItem() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getItem() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getItem();
