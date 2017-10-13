var cards = ["ciri.png","geralt.png","jaskier.png","jaskier.png","iorweth.png","triss.png","geralt.png","yen.png","ciri.png","triss.png","yen.png","iorweth.png", ];

var c0 = document.getElementById('c0');

c0.addEventListener("click", function(){revealCard(0); });

function revealCard(nr) {
    alert(nr);
}