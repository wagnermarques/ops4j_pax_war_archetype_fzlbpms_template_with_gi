jsx3.lang.Class.defineClass(
  "br.edu.fzlbpms.Menus_EventHandler",
  null,
  [],
  function(Menus_EventHandler) {            
    

    // import jsx3.util.Logger
    var Logger = jsx3.util.Logger;

    // create Logger for this class
    Menus_EventHandler._LOG = Logger.getLogger(Menus_EventHandler.jsxclass.getName());
  

 
    //F I E L D S   D E F I N I T I O N S   
    // define a static field like this:
    Menus_EventHandler.STATIC_FIELD = "...";

    // define an instance field like this:
    Menus_EventHandler.prototype.instanceField = "...";  
    
    
    
    // C O N T R U C T O R
    // every class must define an init method since it is called automatically by the constructor
    Menus_EventHandler.prototype.init = function(arg1) {
      this.arg1 = arg1;
    };

    
    
    //  M E T H D O S 
    // define an instance method like this:
    Menus_EventHandler.prototype.instanceMethod = function() {
      //...
    };
    

    // define an abstract method like this:
    Menus_EventHandler.prototype.abstractMethod = jsx3.Method.newAbstract();
    
  
    // define a static method like this:
    Menus_EventHandler.handleMyMenuEventPlease = function(menuObjJSX) {
        Menus_EventHandler._LOG.info("Handling event for "+ menuObjJSX + " menu object");      
        var server = GLOBAL_PROPS.PROJECT_NAMESPACE;
            
      //  P R O C E S S A M E N T O    C O M U M    A    T O D O S   O S    M E N U S     
      //independente do nome do menu (grupo), nos interessa saber qual o seu indice    
      //var opc = new Number(menuObjJSX._jsxvalue);
              
    };

  });


