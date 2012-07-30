/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */

jsx3.lang.Package.definePackage(
  "eg.WorkItemInfo",                //the full package name
  function(WorkItemInfo) {          //short package name, good to use in this


   WorkItemInfo.getServer = function() {
     // should be the same as namespace in Project -> Deployment Options
     return WorkItemInfoNS; 
   };

   /**
    * Called by the onload event for this server. Registers this server with the 'dataHub',
    * so any selection changes to the data managed by this server, results in a broadcast.
    * Any subscribed servers/clients will then be notified of the selection change
    */
    WorkItemInfo.onLoad = function() {
      var xyz = window.PageBus.subscribe("eg.workItem.onSelect", WorkItemInfo, WorkItemInfo.onMessage, WorkItemInfo);     
    };

    WorkItemInfo.onMessage = function(subject, message, subscriberData) {

       var inp = WorkItemInfo.getServer().getJSXByName("caseidin");
       inp.setValue(message.caseid);

       inp = WorkItemInfo.getServer().getJSXByName("workitemin");
       inp.setValue(message.workitem);
       
       inp = WorkItemInfo.getServer().getJSXByName("summaryin");
       inp.setValue(message.summary);
    };

})