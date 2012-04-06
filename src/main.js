
require.config({
  paths: {
      "Class": "../lib/inheritancejs/Class"
  },
});


require(
  
  ["Class", "utils"],
  
  function(Class, utils) {

    var exports = {};

    utils.mixin(exports, utils);
    
    exports.Class = Class;
    
    
    //Make it global.
    if (window.Play) {
      throw new Error("A instance of Play already exists.");
    } else {
      Play = window.Play = exports;
    }
    
  }
  
);