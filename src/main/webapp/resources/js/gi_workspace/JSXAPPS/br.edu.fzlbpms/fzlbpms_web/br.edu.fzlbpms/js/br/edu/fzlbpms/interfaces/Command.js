
jsx3.lang.Class.defineInterface(
    "br.edu.fzlbpms.interfaces.Command",
     null,
     function(Command, Command_prototype){


        Command._LOG = null;
   
        //Command.staticExecute = jsx3.Method.newAbstract();        
        //Command.staticExecute = function(){
        //    Command._LOG.info("Command.staticExecute = function(){...");
        //}
        
        //Command_prototype.execute = jsx3.Method.newAbstract();
        Command_prototype.execute = function(){
          //var logger =  Command._getLog();
          //logger.info("br.edu.fzlbpms.interfaces.Command : Command_prototype.execute = function(){...");
            //Command._getLog.info("Command_prototype.execute = function(){...");
        }
        
        
        
 

        /** @private @jsxobf-clobber */
      Command_prototype._getLog = function(especificCommandName) {
        if (Command._LOG == null) {
          if (jsx3.Class.forName("jsx3.util.Logger") != null) {
            Logger = jsx3.util.Logger;
            Command._LOG = Logger.getLogger(Command.jsxclass.getName() +" :: "+ especificCommandName);
          }
        }
        return Command._LOG;
      };
    
});
    