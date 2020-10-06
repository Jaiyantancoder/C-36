class Form{
    constructor(){
    
      this.input = createInput("name");
      this.button = createButton("JOIN");
        
    }
    
display(){


this.input.position(150,150);
 
this.button.position(200,200);
this.button.mousePressed(()=> {
  this.input.hide();
  this.button.hide();
  playerCount++;
player.index = playerCount;
player.name =  this.input.value(); 
  player.update(playerCount);
  player.updateplayer();

});

}    
       
    
    
    }