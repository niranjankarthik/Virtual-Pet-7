class Player {
    constructor(){
      var foodStock, lastFed;
    }
  
    getFoodStock(){
      var foodCountRef = database.ref('Food');
      foodCountRef.on("value",(data)=>{
        foodStock = data.val();
      })
    }
  
    updateFoodStock(count){
      database.ref('/').update({
        foodStock: Food
      });
    }
  
    deductFood(){
      var foodIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  }
  