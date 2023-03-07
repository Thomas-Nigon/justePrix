function rightprice(){
    // On demande a joueur son nom
    let player = prompt("what's your name?")

    // creation d'un nombre aléatoire
    const rightPrice = Math.floor(Math.random() * 10) +1;
    console.log(rightPrice)

    // on demande au joueur de trouver le nombre aléatoire
    let playerPrice = prompt(`please ${player} try to guess the price` )
    /* let target = parseInt(playerPrice) */
    console.log(playerPrice )

    // creation d'une variable pour compter les tentatives
    let attempt = 0;
    console.log(attempt)

    // si le prix est bon  félicitation
    if (rightPrice === playerPrice ){
        console.log("congratulation you made it first try!!!")
    }
    //sinon 
    else {  
        //tant que le prix est faux ou qu'on arrive a 15 essais on continue
        while (playerPrice  != rightPrice || attempt===15){
            
            if (rightPrice>playerPrice ){
                alert("c'est plus !")
            }
            else {alert("c'est moins !")
            }
            // on incrémente le nombre de tentatives
            attempt++
            // on redemande un nombre a l'utilisateur
            playerPrice = prompt(`please ${player} try to guess the price` )
            
        }
        console.log(`congratulation you won in ${attempt+1} attempts`)
    }    
}
rightprice()

