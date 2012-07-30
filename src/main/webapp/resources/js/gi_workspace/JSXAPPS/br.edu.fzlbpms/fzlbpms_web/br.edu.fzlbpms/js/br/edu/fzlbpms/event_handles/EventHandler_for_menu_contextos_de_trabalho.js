//contextos_de_trabalho controller
function EventHandler_for_menu_contextos_de_trabalho(menuObject){


    var logger = jsx3.util.Logger.getLogger("");
    var PROJECT_NAMESPACE = fzlbpmsweb;
    
    logger.info(" >>> EventHandler_for_menu_contextos_de_trabalho(");
    logger.info(" >>> PROCESSANDO CLICK NO MENU "+menuObject.jsxtext);

    //  P R O C E S S A M E N T O    C O M U M    A    T O D O S   O S    M E N U S     
    //independente do nome do menu (grupo), nos interessa saber qual o seu indice    
    var opc = new Number(menuObject._jsxvalue);
    var server =  PROJECT_NAMESPACE.getServer();

     //LOGICA GERAL DAS ITEMS DO MENU contextos_de_trabalho he a seguinte
     //todos, ate agora, so servem simplesmente para colocar o "submenu" 
     //em baixo
     //passo 1 (tira o bloco de baixo
     //passo 2 coloca o bloco com o menu 

     var panel_top2 = server.getJSXByName("panel_top2");      
     logger.debug(" >> Getting panel_top2...");
     logger.debug(" >> panel_top2 = "+panel_top2);
     panel_top2.removeChildren();                
     

    //A G O R A   O   P R O C E S S A M E N T O   D E P E N D E   D E  Q U A L   G R U P O  D E    M E N U   F O I   C L I C A D O    
    if(menuObject.jsxtext == "Contextos_de_trabalho"){
        
        var componenteUrl = null;      
        var dados = null;
        
        logger.info(opc.valueOf()+"..");
        switch(opc.valueOf()) {
            case 2: //BPMS
                  //logger.info(" >>> " + opc.valueOf()+" menu item = BPMS");
                  componenteUrl = "br.edu.fzlbpms/components/menus/bpms_context_menubar.xml";
                  logger.info(componenteUrl);
                  panel_top2.load(componenteUrl);                                                      
                  break;

//            case 3: //INSERIR
//                  componenteUrl = "components/inserir.xml";
//                  mainBlock.load(componenteUrl);                                                      
//                  break;
//                              
//            case 4: //EDITAR
//                  componenteUrl = "components/editar.xml";
//                  mainBlock.load(componenteUrl);                                                      
//                  break;                        
//                  
//            case 5: //APAGAR
//                  componenteUrl = "components/apagar.xml";
//                  mainBlock.load(componenteUrl);                                                                  
//                  break;            
//                  
//            case 6: //LISTAR
//                  componenteUrl = "components/listar.xml";//
//                  
//                  mainBlock.load(componenteUrl);                                                                  
//                  break;
//                  
            default: alert("ocp invalida");

            }

    }//if que processa menu rastreamento
    
}//menuCLickListener fn


