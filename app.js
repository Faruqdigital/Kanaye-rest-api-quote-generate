// function fetchApi() {
//     fetch("https://api.kanye.rest")
//         .then(res => res.json())
//         .then(data => showQuote(data.quote));
// }

// function showQuote(data) {
//     document.getElementById("quote").innerHTML = data;
// }

// document.getElementById("generate").addEventListener("click", () => {
//     fetchApi();
// })


// const userListEl = document.getElementById("userList")
// console.log(userListEl);

// fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((users) => showUser(users));

// function showUser(user) {
//     console.log("All user:", user);
//     for (i = 0; i < user.length; i++){
//         console.log(user[i].title);
//         userListEl.innerHTML += `<li>${user[i].title}, ${user[i].userId}</li>`
//     }
// }



fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((user) => {
        console.log(user.results[0]);
        let userOne = user.results[0];
        document.getElementById("user").innerHTML = `
        <div>
            <img src=${userOne.picture.large} class="card-img-top" alt=${userOne.name}>
            <div class="card-body">
                <h5 class="card-title">${userOne.name.first} ${userOne.name.last}</h5>
                <p class="card-text">
                ${userOne.cell}
                ${userOne.email}
                ${userOne.cell}
                </p>
                <a href="#" class="btn btn-primary">${userOne.registered.date}</a>
            </div>
        </div>
    `
    });
