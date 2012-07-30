function menuClickListener(menuObject){

    //gi infra (logger)
    var logger = jsx3.util.Logger.getLogger("menuClickListener :");

    

    logger.info("PROCESSANDO CLICK NO MENU "+menuObject.jsxtext);



      //  P R O C E S S A M E N T O    C O M U M    A    T O D O S   O S    M E N U S     
     //independente do nome do menu (grupo), nos interessa saber qual o seu indice    
     var opc = new Number(menuObject._jsxvalue);
     var server = minhaigreja.getServer();

     var mainBlock = server.getJSXByName("mainBlock");        
     mainBlock.removeChildren();                
          
     

    //A G O R A   O   P R O C E S S A M E N T O   D E P E N D E   D E  Q U A L   G R U P O  D E    M E N U   F O I   C L I C A D O    
    if(menuObject.jsxtext == "CADASTROS"){
        
        var componenteUrl = null;      
        var dados = null;
        
        logger.info(opc.valueOf()+"..");
        switch(opc.valueOf()) {
            case 2: //PESQUISAR
                  componenteUrl = "components/pesquisa.xml";
                  mainBlock.load(componenteUrl);                                                      
                  break;

            case 3: //INSERIR
                  componenteUrl = "components/inserir.xml";
                  mainBlock.load(componenteUrl);                                                      
                  break;
                              
            case 4: //EDITAR
                  componenteUrl = "components/editar.xml";
                  mainBlock.load(componenteUrl);                                                      
                  break;                        
                  
            case 5: //APAGAR
                  componenteUrl = "components/apagar.xml";
                  mainBlock.load(componenteUrl);                                                                  
                  break;            
                  
            case 6: //LISTAR
                  componenteUrl = "components/listar.xml";
                  
                  mainBlock.load(componenteUrl);                                                                  
                  break;
                  
//            default: alert("ocp invalida");

            }

    }//if que processa menu rastreamento
    
}//menuCLickListener fn