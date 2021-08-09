class Player{

    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;

    }



    updateCount(cc){
     database.ref('/').update({

        playerCount: cc
     });
    }

    updateNameAndDistance(){
      var playerIndex="players/player"+this.index;
      database.ref(playerIndex).set({
          name : this.name,
          distance : this.distance
      })
    }
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        });
    }

    static getPlayersInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on('value',(data)=>{
            playersData=data.val();
        })
    }
}


