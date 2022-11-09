/*HTML*/
/* An array of objects. */
const games = [
    {
        name: "Color Game",
        description: "Do you want to guess a color (rgb notation)?",
        popuptext: "Play Colorgame Now!",
        url: "https://jenith-jeyaranjan.github.io/colorgame"
    },
    {
        name: "PixelArt",
        description: "Do you want to draw with Pixels?",
        popuptext: "Play PixelArt Now!",
        url: "https://jeje0205.github.io/PixelArt/"
    },
    {
        name: "Memes Generator",
        description: "Do you want to play Spiel 4?",
        popuptext: "Play Spiel 4 Now!",
        url: "https://jeje0205.github.io/Memes/"
    },
    {
        name: "Snake Game",
        description: "Do you want to play Snake Game?",
        popuptext: "Play Snakegame now!",
        url: "https://jeje0205.github.io/snake/"
    },

    {
        name: "Flappybird",
        description: "Do you want to play Flappybird?",
        popuptext: "Play Flappybird Now!",
        url: " https://jeje0205.github.io/Flappybird/"
    },
    {
        name: "tictactoe",
        description: "Do you want to play tictactoe?",
        popuptext: "Play tictactoe now!",
        url: ""
    },
    {
        name: "Pong",
        description: "Do you want to play Pong?",
        popuptext: "Play Pong now!",
        url: "https://jeje0205.github.io/Pong/"
    },
    {
        name: "Spiel 8",
        description: "Do you want to play Spiel 8?",
        popuptext: "",
        url: ""
    },
    {
        name: "Spiel 9",
        description: "Do you want to play Spiel 9?",
        popuptext: "",
        url: ""
    },
    {
        name: "Spiel 10",
        description: "Do you want to play Spiel 10?",
        popuptext: "",
        url: ""
    },
    {
        name: "Spiel 11",
        description: "Do you want to play Spiel 11?",
        popuptext: "",
        url: ""
    },
    {
        name: "Spiel 12",
        description: "Do you want to play Spiel 12?",
        popuptext: "",
        url: ""
    },


]


/* Creating a new div element and appending it to the wrapper. */
window.addEventListener('load', () => {
    const wrapper = document.querySelector(".container");
    games.forEach(game => {
        const {name, description, thumbnail = "photo-1103595_640", popuptext, url = ""} = game;
        /* Creating a template literal. */
        const html = `
            <div class="card" id="colorgame_card">
                <img class="image" src="img/thumbnails/${thumbnail}.png">
                <div class="details">
                    <h1>${name}</h1>
                    <br>
                    <p>${description}</p>
                </div>
                <div class="middle">
                    <div>
                        <h1 class="article">${popuptext}</h1>
                    </div>
                </div>
            </div>
        `;


        /* Creating a new div element and appending it to the wrapper. */
        const card = document.createElement("div");
        card.innerHTML = html.trim();


        /* Adding an event listener to the middle div. */
        card.querySelector(".middle")?.addEventListener('click', () => {
            window.open(url)
            console.log(card.querySelector(".middle"));
        });
        /* Appending the card to the wrapper. */
        wrapper.appendChild(card);
    })
});

/*Search Cards*/
const searchCards = () => {
    const search = document.getElementById("myInput").value;
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const name = card.querySelector(".details h1").innerText;
        if (name.toUpperCase().indexOf(search.toUpperCase()) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
};


