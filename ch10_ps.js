//Purpose of response.json():
// response.json() allows you to take the response body from a network request (such as a fetch() request) and parse it into a JavaScript object if the response body is in JSON format.
// Since JSON parsing is an asynchronous operation (it might take some time), response.json() returns a Promise that resolves with the parsed data once the parsing is complete.

let p = fetch('https://jsonplaceholder.typicode.com/posts')

const abc = async () => {

    let v = document.body.getElementsByClassName("square")
    console.log(v)

    p.then((response) => response.json()
    )
        .then((user) => {
            console.log(user[0]);
            return user
            // document.body.innerHTML = JSON.stringify(json[0])
        })
        .then(
            // (a) =>
            //document.body.innerHTML = JSON.stringify(a[0])
            (a) => {
                console.log(a[1])
                let i = 0
                for (i; i < 12; i++) {
                    //console.log(i+" before")
                    v[i].innerHTML = JSON.stringify(a[i].title)
                    //console.log(i+" after")
                }
                //console.log(i)
            })
            //.catch((e)=>console.log(e.stack))

}

abc()
