function rightprice(){
    // On demande a joueur son nom
    let player = prompt("what's your name?")

    // creation d'un nombre aléatoire
    const rightPrice = Math.floor(Math.random() * 50) +1;
    console.log(rightPrice)

    // on demande au joueur de trouver le nombre aléatoire
    let playerPrice = prompt(`please ${player} try to guess the price between 0 and 50` )
    /* let target = parseInt(playerPrice) */
    console.log(playerPrice )

    // creation d'une variable pour compter les tentatives
    let attempt = 1;
    let maxAttempt = 4;
    console.log(attempt)

    // si le prix est bon  félicitation
    if (rightPrice == playerPrice ){
        console.log("congratulation you made it first try!!!")
    }
    //sinon 
    else {  
        //tant que le prix est faux ou qu'on arrive a 15 essais on continue
        for ( attempt; attempt<=maxAttempt ; attempt++) /* || playerPrice != rightPrice) */{
            console.log(attempt , maxAttempt)
            console.log(playerPrice , rightPrice)
            if (playerPrice == rightPrice){
               
                return  console.log("congratulation, you won !!")
            }else if (rightPrice>playerPrice ){
                alert(`attempt number ${attempt}: it's more !`)
            }else {alert(`attempt number ${attempt}: it's less !`)
            }
            // on incrémente le nombre de tentatives
            //attempt++
            // on redemande un nombre a l'utilisateur
            playerPrice = prompt(`please ${player} try to guess the price` )
            
        }
        /* if (playerPrice ===rightPrice){
            console.log("congratulation, you won !!")
        } else { console.log("you lost")} */
        
        /* if (attempt===maxAttempt){
            alert(`Oh no max attempts reached, you lost`)
        console.log(`Oh no max attempts reached, you lost`)
        }
        else {
            alert(`congratulation you won in ${attempt} attempts`)
            console.log(`congratulation you won in ${attempt} attempts`)
        }     */
        }
        
}
rightprice()

