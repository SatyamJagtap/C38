class Game{
    constructor(){

    }

    getGameState(){
        var refGS = database.ref("gameState")
        refGS.on("value",function(data){
            gameState = data.val()
        })
    }

     updateGameState(state){
         database.ref("/").update({
             gameState:state
         });
     } 

    wait(){
      if(gameState == 0){
         form = new Form();
         form.display();
      }

    }  
}