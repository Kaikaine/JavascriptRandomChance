

function game(coins) {

    var win = Math.floor(Math.random()*100);

    for(var i=coins;i>=0;i--) {
        var winner = Math.floor(Math.random()*100);
        

        if(win == winner){
            console.log('WINNER ' + win);

            i += coins + Math.floor(Math.random() *51) + 50;
            
        }

        else if(i==0) {
            console.log('LOSER! SHAME! SHAME! SHAME!');
        }

        else {
            console.log(winner);
        }
    }
}

game(10);