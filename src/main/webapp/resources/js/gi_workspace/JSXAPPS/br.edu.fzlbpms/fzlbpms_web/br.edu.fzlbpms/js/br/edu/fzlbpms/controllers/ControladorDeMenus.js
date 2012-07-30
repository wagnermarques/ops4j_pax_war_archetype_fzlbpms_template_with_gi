jsx3.lang.Class.defineClass(
  "br.edu.fzlbpms.controllers.ControladorDeMenus",
  null,  
  [],
  function(STATIC, instance) {            

        var Logger = jsx3.util.Logger;
        STATIC._LOG = Logger.getLogger(STATIC.jsxclass.getName());

        STATIC.staticExecute = function(menuObject){      
            STATIC._LOG.info("menuObject.getClass().getName() = " + menuObject.getClass().getName());
            STATIC._LOG.info("menuObject.jsxname = " + menuObject.jsxname);
            STATIC._LOG.info("menuObject.jsxtext = " + menuObject.jsxtext);
            STATIC._LOG.info("menuObject.getValue() = " + menuObject.getValue());
            STATIC._LOG.info();
            STATIC._LOG.info();
            STATIC._LOG.info();
            STATIC._LOG.info();
            STATIC._LOG.info();
            STATIC._LOG.info();
            
            var kindOfComponent = menuObject.getClass().getName();
            var nameOfCOmponent = menuObject.jsxname;
            var jsxidDoMenuAcionado = menuObject.getValue();
                    
            if(
                    kindOfComponent == "jsx3.gui.Menu" 
                &&  nameOfCOmponent == "Contextos_de_trabalho"
                &&  jsxidDoMenuAcionado == "perspectiva_bpms"){

                STATIC._LOG.info("tratando evento de "+ kindOfComponent + " " + nameOfCOmponent + " " + jsxidDoMenuAcionado);                                   
                
                jsx3.require("br.edu.fzlbpms.commands.jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand");

                var command = new br.edu.fzlbpms.commands.jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand(menuObject);
                command.execute();
            }
            
            
        };
    
});