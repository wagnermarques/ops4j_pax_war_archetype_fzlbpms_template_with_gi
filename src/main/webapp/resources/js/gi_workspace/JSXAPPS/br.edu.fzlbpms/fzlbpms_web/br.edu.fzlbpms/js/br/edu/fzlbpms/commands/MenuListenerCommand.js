
//jsx3.require("br.edu.fzlbpms.interfaces.Command");

jsx3.lang.Class.defineClass(
  "br.edu.fzlbpms.commands.MenuListenerCommand",
  null,
  //[br.edu.fzlbpms.interfaces.Command],  
  [],
  function(STATIC, instance) {            

        var Logger = jsx3.util.Logger;
        STATIC._LOG = Logger.getLogger(STATIC.jsxclass.getName());

        //var ICommand = br.edu.fzlbpms.interfaces.Command,    

        STATIC.staticExecute = function(menuObject){       
               //STATIC._LOG.info( "ICommand = "+ ICommand);
               STATIC._LOG.info("STATIC.staticExecute = function(){...");
               STATIC._LOG.info("SDFGSDFGSDFGSDFG");

        };
        
        //instance.instanceExecute = function(){    
        //       //this.super();        
        //       STATIC._LOG.info("instance.instanceExecute = function(){...");
        //};
    
});