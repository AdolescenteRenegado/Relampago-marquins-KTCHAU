class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
    car1 = createSprite(width/2 -50,height -100)
    car1.addImage("car1",car1img)
    car1.scale = 0.07
    car2 = createSprite(width/2 +50,height -100)
    car2.addImage("car2",car2img)
    car2.scale = 0.07
    cars = [car1,car2]
  }
  play(){
    form.hide()
    Player.getPlayersInfo()
    if(allPlayers!==undefined) {
      image(track,0,-height*5,width,height*6)
      drawSprites()
      var index=0
      for (var plr in allPlayers){
        index = index+1
        var x= allPlayers [plr].posx
        var y= height-allPlayers [plr].posy
        cars[index-1].position.x = x
        cars[index-1].position.y = y
        if(index===player.index){
        camera.position.y=cars[index-1].position.y
        }
      }
       this.controls()
    }
  }
  getState(){
    var stateRef = database.ref("gameState")
    stateRef.on ("value",function(data){
      gameState = data.val()
    })
  }
  update(state){
    database.ref("/").update({
    gameState:state
    })
  }
 controls (){
  if(keyIsDown(UP_ARROW)){
    player.posy+=10
    player.update()
  }
 }
}
