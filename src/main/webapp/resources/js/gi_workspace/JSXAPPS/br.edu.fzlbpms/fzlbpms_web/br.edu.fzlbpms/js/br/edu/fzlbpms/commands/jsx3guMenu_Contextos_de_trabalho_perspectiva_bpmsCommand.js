
/**
 * faz aparecer o menu de perspectiva bpms 
 */
 
jsx3.require("br.edu.fzlbpms.interfaces.Command");
 
jsx3.lang.Class.defineClass(
    "br.edu.fzlbpms.commands.jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand",
    null,
    [br.edu.fzlbpms.interfaces.Command],
    //[],
    function(STATIC, instance){
        
    instance.sourceComponent = null;
    
    instance.init = function(sourceJsxMenuObject){
        if(sourceJsxMenuObject){
            this.sourceComponent = sourceJsxMenuObject; 
        }else{
            throw new jsx3.Exception("PARA O jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand funcionar ele precisa receber um sourceJsxMenuObject em seu construtor");
        }
    };
    
    instance.execute = function(){
                 
        //br.edu.fzlbpms.interfaces.Command._getLog.info("br.edu.fzlbpms.commands.jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand instance.execute = function(){...");
        //br.edu.fzlbpms.interfaces.Command.info("br.edu.fzlbpms.commands.jsx3guMenu_Contextos_de_trabalho_perspectiva_bpmsCommand execute...");
                 
        jsx3.require("br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand");        
        
        var Comando_mostraMenuDeContextoBPMS = new br.edu.fzlbpms.commands.MostraMenuDeContextoBPMSCommand(this.sourceComponent);
        this.jsxsupermix();  
        Comando_mostraMenuDeContextoBPMS.execute();
     };//execute
    
           
    });