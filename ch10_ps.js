//Purpose of response.json():
// response.json() allows you to take the response body from a network request (such as a fetch() request) and parse it into a JavaScript object if the response body is in JSON format.
// Since JSON parsing is an asynchronous operation (it might take some time), response.json() returns a Promise that resolves with the parsed data once the parsing is complete.

let p = fetch('freecarapi.json')

let v = document.body.getElementsByTagName("img")
// console.log(v)
let imgText = document.getElementsByClassName("image_Data_text");

const abc = async () => {
    await p.then((response) => response.json())
        .then((user) => {
            for (i = 0; i < v.length; i++) {
                console.log(user[i]);
            }
            for (let i = 0; i < imgText.length; i++) {
                    imgText[i].innerHTML = user[i].id + " " + user[i].make + " " + user[i].model
            }
        })
}

abc()
