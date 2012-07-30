jsx3.lang.Class.defineClass(
  "br.edu.fzlbpms.gi.Abstract_MenuClickEventListener",
  function(AbstractMenuController) {
    
     
    var logger = jsx3.util.Logger.getLogger("br.edu.fzlbpms.gi.Abstract_MenuClickEventListener:");     
    
    // every class must define an init method since it is called automatically by the constructor
    AbstractMenuController.prototype.init = function(objSender) {    
        var logger = jsx3.util.Logger.getLogger("AbstractMenuController.prototype.init = function("+objSender+") {...");     
        AbstractMenuController..OBJ_SENDER = objSender;      
    };
    
    // define an abstract method like this:
    Example.processClickEvent = jsx3.Method.newAbstract();

    
    // define an instance field like this:
    //Example.prototype.instanceField = "...";
  }
);