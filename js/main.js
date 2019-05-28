// alert("connected");

// selecting DOM elements
const author = document.getElementById("author");
const title = document.getElementById("title");
const message = document.getElementById("message");
const abody = document.getElementById("articleBody");

function displayFormValues(){
    // checking values from form inputs and textarea
    // console.log(author.value);
    // console.log(title.value);
    // console.log(desc.value);

    // updating article table
    const row = document.createElement("tr"); // creating empty row for columns needed

    const authorTd = document.createElement("td"); // creating column for author
    const authorText = document.createTextNode(author.value); //creating text node that will go in collumn for author value from form

    const titleTd = document.createElement("td");
    const titleText = document.createTextNode(title.value);

    const messTd = document.createElement("td");
    const messText = document.createTextNode(message.value);

    authorTd.appendChild(authorText);
    titleTd.appendChild(titleText);
    messTd.appendChild(messText);
    row.appendChild(authorTd);
    row.appendChild(titleTd);
    row.appendChild(messTd);
    abody.appendChild(row);
}