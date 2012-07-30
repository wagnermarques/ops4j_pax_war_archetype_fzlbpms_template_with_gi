/* place JavaScript code here */


var Logger = jsx3.util.Logger;
var logger = Logger.getLogger("logic.js");
logger.info("CARREGADO COM SUCESSO!");

jsx3.lang.Package.definePackage(
  "br.edu.fzlbpms",
  function(bpms_pkg) {                  
  }
);
jsx3.require("br.edu.fzlbpms.Menus_EventHandler");


jsx3.lang.Package.definePackage(
  "br.edu.fzlbpms.interfaces",
  function(bpms_pkg) {                  
  }
);


jsx3.lang.Package.definePackage(
  "br.edu.fzlbpms.commands",
  function(bpms_commands_pkg) {                  
  }
);
jsx3.require("br.edu.fzlbpms.commands.MenuListenerCommand");






//
//###########################################
// -------- CONSULTANDO PACOTE br.edu.fzlbpms
var bpms_pkg = jsx3.lang.Package.forName("br.edu.fzlbpms");
var bpms_pkgClasses = bpms_pkg.getClasses();

logger.info("");
logger.info("***** br.edu.fzlbpms classes:");
logger.info(bpms_pkgClasses);




//
//###########################################
// -------- CONSULTANDO PACOTE br.edu.fzlbpms.interfaces
var bpms_interfaces_pkg = jsx3.lang.Package.forName("br.edu.fzlbpms.interfaces");
var bpms_interfaces_pkg = bpms_interfaces_pkg.getClasses();

logger.info("***** br.edu.fzlbpms.interfaces classes:");
logger.info(bpms_interfaces_pkg); 




// 
//###########################################
// CONSULTANDO PACOTE br.edu.fzlbpms.commands
//
var bpms_commands_pkg = jsx3.lang.Package.forName("br.edu.fzlbpms.commands");
var bpms_commands_pkg = bpms_commands_pkg.getClasses();

//jsx3.require("br.edu.fzlbpms.commands.MenuListenerCommand");
logger.info("***** br.edu.fzlbpms.commands classes:");
logger.info(bpms_commands_pkg);
//br.edu.fzlbpms.commands.MenuListenerCommand





//br.edu.fzlbpms.Menus_EventHandler.handleMyMenuEventPlease(null);



//var Menus_EventHandler_SINGLETON = new Menus_EventHandler();

//var bpms_pkg_classes = bpms_pkg.getClasses();
//alert(bpms_pkg_classes);



//var bpms_pkg_classes2 = bpms_pkg.getClasses();
//alert(bpms_pkg_classes2);


//var Menus_EventHandler_SINGLETON = new Menus_EventHandler();
//alert(Menus_EventHandler_SINGLETON);

//function menu_testGiOO_EventHandler(jsx3MenuObject){
//    var Logger = jsx3.util.Logger;
//    Var this.logger = Logger.getLogger("function menu_testGiOO_EventHandler(jsx3MenuObject){...");
//    
//    this.logger.info("function menu_testGiOO_EventHandler(jsx3MenuObject){... jsx3MenuObject="+jsx3MenuObject);
//}
