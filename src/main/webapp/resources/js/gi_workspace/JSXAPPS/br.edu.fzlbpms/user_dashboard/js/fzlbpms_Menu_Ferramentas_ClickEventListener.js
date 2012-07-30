jsx3.lang.Package.definePackage(
  "br.edu.fzlbpms.gi.Menu_Ferramentas_ClickEventListener",
  function(mnuFerramentasClickListener) {
    
    // define a static method like this:
    //tests.staticMethod = function() {
    //  ...
    //};
    // define a static field like this:
    //tests.STATIC_FIELD = "...";
 
 
    var logger = jsx3.util.Logger.getLogger("br.edu.fzlbpms.gi.Menu_Ferramentas_ClickEventListener");
    
        
    mnuFerramentasClickListener.processClickEvent = function(objSender){
        logger.info(">>>> Menu_Ferramentas_ClickEventListener.prototype.processClickEvent function ....");
        logger.info(">>>> "+objSender);
    }
  
  
});
