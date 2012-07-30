jsx3.lang.Package.definePackage(
  "eg.WorkItemList",                //the full package name
  function(WorkItemList) {          //short package name, good to use in this

   WorkItemList.getServer = function() {
     // should be the same as namespace in Project -> Deployment Options
     return WorkItemList32; 
   };

   /**
    * This method will publish to the topic. Any clients subscribed
    * to the PageBus will receive the message.
    */
    onChangeSel = function(matrix, strId, guiEvent) {

      var selectedNodes = matrix.getSelectedNodes(); 
      if (selectedNodes == null) 
         return;
      var objRecord = selectedNodes.getItem(0);

      var cid = objRecord.getAttributeNode("jsxid").getValue();
      var wi = objRecord.getAttributeNode("jsxtext").getValue();
      var su = objRecord.getAttributeNode("summary").getValue();

      var ev = { jsSchema: "com.tibco.eg.WorkItemSummary", caseid:cid, workitem:wi, summary:su };

      window.PageBus.publish("eg.workItem.onSelect", ev);
    };
    
    onLoad = function(){
    }

})

