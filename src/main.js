require.config({
  paths: {
      "Class": "../lib/inheritancejs/Class"
  },
});

require(
  
  ["Class"],
  
  function(Class) {

      var Mammal = Class.extend({
        init: function(name) {
          this.name = name;
        }
      }, "Mammal"); 


      var Snake = Mammal.extend({
        init: function(name) {
          this.parent.init.call(this, name);
        },
        slither: function() {
          return this.name + " says sssSSSSssss";
        }
      });

      mySnake = new Snake("Billybob");
      console.log(mySnake.slither());

      if (mySnake instanceof Mammal) {
        console.log("instanceof works")
      }  
    
  }
  
);