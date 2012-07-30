function menuClickListener(menuObject){

            var logger = jsx3.util.Logger.getLogger("menuClickListener :");
            logger.info("PROCESSANDO CLICK NO MENU "+menuObject.jsxtext);

            if(menuObject.jsxname  == "menu_tarefas"){    
                logger.info(">>> if(menuObject.jsxname  == menu_tarefas....");        
                //br.edu.fzlbpms.gi.Menu_Tarefas_ClickEventListener.processClickEvent(menuObject);
            }
    
            if(menuObject.jsxname  == "menu_processos"){            
                logger.info(">>> if(menuObject.jsxname  == menu_processos....");
                //br.edu.fzlbpms.gi.Menu_Processos_ClickEventListener.processClickEvent(menuObject);
            }
    
            if(menuObject.jsxname  == "menu_ferramentas"){            
                  logger.info(">>> if(menuObject.jsxname  == menu_ferramentas ....");
                  br.edu.fzlbpms.gi.Menu_Ferramentas_ClickEventListener.processClickEvent(menuObject);
            }
  
};//function menuClickListener(menuObject){
