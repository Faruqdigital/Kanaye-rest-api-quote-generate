function fetchApi() {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => showQuote(data.quote));
}

function showQuote(data) {
    document.getElementById("quote").innerHTML = data;
}

document.getElementById("generate").addEventListener("click", () => {
    fetchApi();
})