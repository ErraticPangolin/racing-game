class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
  var playerCountRef = await database.ref('playerCount').once("value");
     if(playerCountRef.exists()){
     playerCount = playerCountRef.val();
        player.getCount();
     }
      form = new Form()
      form.display();
      
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
     cars = [car1,car2,car3,car4];
  }
  play(){
   form.hide();
   Player.getPlayerInfo();
   if(allPlayer !== undefined){
     //index of the array cars 
     // cars=[cars[0],cars[1],cars[2],cars[3]]
     //     cars = [car1,car2,car3,car4];
     var index = 0;

     var x = 0 
     var y = 0;
     var displayPos = 120;
     for(var plr in allPlayer){
       //add 1 to the index for every loop
       index=index+1;
         //position the cars a little away from each other in x direction
       x = x + 200 ;
       //use data form the database to display the cars in y direction
       //why - ? coz it has to go upwards
       y = displayHeight-allPlayer[plr].distance;
       cars[index - 1].x=x;
       cars[index - 1].y=y;
       if(plr === "player" + player.index){
       cars[index-1].shapeColor= "red";
       //game camera
       camera.position.x=displayWidth/2;
       camera.position.y=cars[index-1].y;
      }
     

     displayPos += 20
    //  textSize(15);
    //  text(allPlayer[plr].name + ": " + allPlayer[plr].distance,150,displayPos);
  }
}
  if(keyIsDown(UP_ARROW) && player.index !== null){

     player.distance += 50;
     player.update();
     
  }
  drawSprites();
  };                
}
