class Game{
constructor(){




}

readState(){

database.ref("gameState").on("value", (data)=>{
    gameState = data.val();
    console.log(gameState);
})

}
update(state){

database.ref('/').update({

    gameState : state
})
}
start (){
    console.log(gameState);
if(gameState === 0){
   
player = new Player();
player.readCount();
form = new Form();

form.display();

}

}

play(){

text ("GAME STARTED",200,200);
Player.fetchplayerinfo();
console.log(allplayerinfo);

if(allplayerinfo != undefined){

var y = 350;    
for(var plr in allplayerinfo){
y=y+20;    
text(allplayerinfo[plr].name,255,y);
}    



}
}

}
