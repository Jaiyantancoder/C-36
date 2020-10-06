class Player{
    constructor(){
    
  this.index = null;
  this.name = null;
  this.distance = 0;    
    
    
        
    }
    
readCount(){
  database.ref('playerCount').on("value",function(data){
    playerCount = data.val();
 })
    }

update(count){
  database.ref('/').update({
   playerCount : count 
 })
   }
  
updateplayer(){

 database.ref("players/player"+this.index).update({
    name : this.name,
    distance : this.distance
 })


}   
   
static fetchplayerinfo(){

database.ref('players').on("value",(data)=>{
  allplayerinfo = data.val();
})


}



    }