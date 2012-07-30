//API Classes for Localization
//General Interface provides the following classes for localizing applications:
//jsx3.util.Locale
//jsx3.util.DateFormat
//jsx3.util.MessageFormat
//jsx3.util.NumberFormat
//jsx3.app.PropsBundle
//Portuguese pt pt_BR, pt_PT/
//Internationalized GUI Classes
//Five GUI controls are internationalized in General Interface:
//DatePicker
//TimePicker
//Select
//Menu
//Matrix
//Setting the Application Locale
//The locale of an application is determined in the following order, with the first one taking
//precedence over the others:
//The last value passed to Server.setLocale().
//The default locale value specified in the Project Settings dialog and stored in the
//application configuration file (config.xml), if specified. See Deployment Panel.
//The current system locale, which is specified by:
//The last value passed to System.setLocale()
//The locale as determined from the host browser
//en_US if the locale could not be determined from the browser

/**
* Function is executed when user selects the language on the Tools menu.
* @param objMenu {jsx3.gui.Menu}
* @param strID {String} the CDF record ID of the execute menu record.

localization.doLoadLocalizeResource = function(ArrayOfobjMenus, strID) {
    var objServer = br.edu.fzlbpm.userdashboardAPP.getServer();
    var locale = strID != "-1" ? Locale.valueOf(strID) : null;
    LOG.info("Setting application locale to " + locale + ".");
    
    // Set the locale of the server to the selected locale
    objServer.setLocale(locale);

    // We need to tell the server to reload any localized properties
    objServer.reloadLocalizedResources();
    
    // Reset the CDF cache of the menu since dynamic properties are used
    // in the source XML file.
    var i = 0;
    for(i, i <= ArrayOfobjMenus.length, i++ ){
        ArrayOfobjMenus[i].resetXmlCacheData();
    
        // Menus cache their drop-down HTML content, so clear this.
        ArrayOfobjMenus[i].repaint();
    }    
    // Repaint the smallest region of the application that is localized.
    // Non-CDF control Stack with localized label text
    //we have none yet, but its stays here for future e for reference
    //objServer.getJSXByName('blkApp').repaint();
    
}
*/