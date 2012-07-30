jsx3.require("br.edu.fzlbpms.interfaces.Command");

jsx3.lang.Class.defineClass(
    "br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand",
    null,
    [br.edu.fzlbpms.interfaces.Command],
    function(STATIC, instance){
        
    STATIC.NOME_DO_BLOCK_QUE_VAI_RECEBER_O_MENU = "panel_top2";
    STATIC.COMPONENT_URL = "br.edu.fzlbpms/components/menus/bpms_context_menubar.xml";
    STATIC.THIS_CLASSNAME = "br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand";
    STATIC._LOG = null;
    
                            
    instance.menuObject = null;
    
                    
    instance.init = function(jsxMenuObject){    
        STATIC._LOG = this._getLog(STATIC.THIS_CLASSNAME);
        STATIC._LOG.info("instance.init = function(jsxMenuObject){...");
        
        if(jsxMenuObject){    
            this.menuObject = jsxMenuObject;
        }else{
            throw new jsx3.Exception("para o comando MostraMenuDeContextoBPMSCommand funcionar, HE NECESSARIO que ele receba UM jsxMenuObject no seu construtor.");
        }
    };
    
    
    instance.execute = function(){        
        STATIC._LOG.info("instance.execute = function(){...");
        var server = this.menuObject.getServer();
        var blockReceiver = server.getJSXByName( STATIC.NOME_DO_BLOCK_QUE_VAI_RECEBER_O_MENU);       
        
        if(blockReceiver){
            blockReceiver.removeChildren();
            //var strURL = server.resolveURI(STATIC.COMPONENT_URL);   
                            
            blockReceiver.loadAndCache(STATIC.COMPONENT_URL, true);
            blockReceiver.paintChildren();
               STATIC._LOG.info("br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand PROCESSADO.");
            }else{
               STATIC._LOG.info("br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand FALHOU.");             
               throw new jsx3.Exception("br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand FALHOU");
            }
                    
    };//execute
        
});