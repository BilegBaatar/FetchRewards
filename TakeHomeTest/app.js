// Select drop down variable
let dropdown = document.getElementById('occupations')
let dropdownS = document.getElementById('states')

// fetch API to get JSON data from the url
fetch('https://frontend-take-home.fetchrewards.com/form')
    .then(function (response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj);

        obj.occupations.forEach(myFunction);

        // loop through 51 states and append to select
        for (let i = 0; i < 51; i++) {
            let option1;

            option1 = document.createElement('option');

            option1.text = obj.states[i].name;

            dropdownS.append(option1)

        }
    }).catch(function (error) {
        console.error(error);
    });

const myForm = document.getElementById("myForm");

// Post form on submit using Fetch API
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    fetch('https://frontend-take-home.fetchrewards.com/form', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,

    }).then(function (response) {
        return response.text();

    }).catch(function (error) {
        console.error(error);
    })
})




// function to get data of occupation and populate the select option
function myFunction(value) {


    let option;

    option = document.createElement('option');

    option.text = value;

    dropdown.appendChild(option)

}
//function to send alert on submit and reset form
function mySuccess(){
    alert("Successfully Submitted!!!");
    myForm.reset()

()}

