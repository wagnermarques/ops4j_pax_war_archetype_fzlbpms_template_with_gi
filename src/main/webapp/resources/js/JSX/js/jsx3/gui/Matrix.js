/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block","jsx3.gui.Matrix.Column","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Matrix",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(m,q){var
ub={A:"Race condition with view...",Aa:"z-index:10;overflow:scroll;",Ab:"id",Ac:"jsxdrop",Ad:"//xsl:template[@name='row_template']//tr/xsl:choose/xsl:when",Ae:/^(on(?:mousedown|click|focus|blur|mouseup|mouseover|mouseout|dblclick|scroll|keydown|keypress))/i,B:"px",Ba:'src="',Bb:"url(",Bc:"jsxselected",Bd:"//xsl:choose/xsl:when/xsl:choose",Be:/(?:border:|border-top|border-left|border-bottom|border-right|padding|height|width|background-color)[^;]*;/gi,C:"table",Ca:'" alt=""',Cb:"jsxselect",Cc:"_body",Cd:' tabindex="-1"',Ce:"strId",D:"jsxcolspan",Da:"FS",Db:"jsxchange",Dc:"N",Dd:"focus",E:"jsxindent",Ea:"xD",Eb:"jsxautorow",Ec:"S",Ed:"tu",F:"0+",Fa:' class="jsx30matrix_scrollh"',Fb:"jsxbeforeedit",Fc:"W",Fd:"blur",G:"0",Ga:"z-index:10;overflow:auto;",Gb:"undefined",Gc:"lazy",Gd:"W3",H:"object",Ha:"overflow:hidden;background-color:#e8e8f5;z-index:11;",Hb:"tH",Hc:"E",Hd:' colspan="{$jsx_colspan}" jsxcolspan="{$jsx_colspan}" ',I:"",Ia:"_ebMouseOutDropIcon",Ib:"_jsxyP",Ic:"escape key ",Id:' jsxtype="cell" class="jsx30matrixcolumn_cell" id="{$jsx_id}_jsx_{$jsx_cdfkey}_jsx_',J:/\d*%/,Ja:"&#160;",Jb:"jsxbeforeappend",Jc:"focusPrevious",Jd:'"',K:"*",Ka:'<div class="jsx30matrix_scroll_info"><span class="jsx30matrix_scroll_info">&#160;</span></div>',Kb:"jsxroot",Kc:"focusNext",Kd:"{$jsx_selection_bg}{$jsx_rowbg}",L:"Matrix Width Recalc, Pass 1 (",La:'<div class="jsx30matrix_resize_bar">&#160;</div>',Lb:"jsxafterappend",Lc:"colgroup",Ld:'class="jsx30matrixcolumn_cell_value"',M:"): ",Ma:'<div class="jsx30matrix_drop_icon" ',Mb:"true",Mc:"U7",Md:"test",N:"Matrix Width Recalc, Pass 2a (",Na:">&#160;</div>",Nb:"_jsxOM",Nc:"_C",Nd:"$jsx_cell_value_template_id='",O:"Matrix Width Recalc, Pass 2b (",Oa:"Pp",Ob:"jsxafteredit",Oc:"visibility:hidden;",Od:"_value'",P:"Matrix Width Recalc, Pass 3 (",Pa:'<div id="',Pb:"jsxaftercommit",Pc:'<div class="jsx30matrix_resize_anchor" jsxindex="',Pd:"//xsl:call-template",Q:"Matrix Width Recalc, Pass 4 (",Qa:'_masks" class="jsx30matrix_masks">',Qb:"jsxtype",Qc:'" style="left:',Qd:"name",R:"100%",Ra:"</div>",Rb:"plusminus",Rc:"px;",Rd:"_value",S:"relativebox",Sa:"paint.masks",Sb:"paged",Sc:"width:",Sd:"ui_controller",T:"div",Ta:"_masks",Tb:"record",Tc:"px;background-image:url(",Td:"//xsl:template[@name='ui_controller']//xsl:call-template",U:"box",Ua:"repaint.data",Ub:"./",Uc:");height:",Ud:"Error with column ",V:"inline",Va:'_head" class="jsx30matrix_head"',Vb:"open",Vc:'px;" ',Vd:": ",W:"tr",Wa:'cellspacing="0" cellpadding="0" class="jsx30matrix_head_table"',Wb:"Fetch the content belonging to: ",Wc:"jsxindex",Wd:/width:\d*px;/,X:"If the header border and body border do not share the same pixel width, the columns in the matrix may not align as expected (",Xa:"_head",Xb:"position:relative;",Xc:"jsxbeforeresize",Xd:"{$jsx_first_row_width_style}",Y:")\nHeader Border (",Ya:'<table id="',Yb:"jsxcontextindex",Yc:"Xy",Yd:"default",Z:") != Body Border (",Za:'_ghost" cellspacing="0" cellpadding="0" class="jsx30matrix_ghost" style="width:',Zb:"jsxtoggle",Zc:"jsxafterresize",Zd:/\{0\}/g,_:")",_a:'px;"><tr>',_b:"pagedfocusdelay",_c:"-6px",_d:"@",a:"jsx:///images/matrix/select.gif",aa:"img",ab:"</tr></table>",ac:"<div id='JSX' class='jsx30matrix_dragicon' style='",ad:"Panel pool max (",ae:/<\/xsl:template>\s*$/,b:"jsx:///images/matrix/insert_before.gif",ba:"mouseover",bb:"BeforeEnd",bc:"'>",bd:") exceeded by: ",be:"</xsl:template>",c:"jsx:///images/matrix/append.gif",ca:"mouseout",cb:"Cw",cc:"<table class='",cd:"reaping panel: ",ce:"xsl",d:"font-weight:bold",da:"dblclick",db:"jsxmenu",dc:"class",dd:"structure",de:"jsx_use_categories",e:"jsx:///images/matrix/minus.gif",ea:"keydown",eb:"jsxbeforesort",ec:"' style='",ed:"jsx_",ee:"jsxabspath",f:"jsx:///images/matrix/plus.gif",fa:"mousedown",fb:"jsxaftersort",fc:"style",fd:"tbody",fe:"jsxhomepath",g:"jsx:///images/matrix/file.gif",ga:"click",gb:"_jsxDY",gc:"<tr class='",gd:"_jsx_",ge:"<tr",h:"ascending",ha:"mouseup",hb:"text",hc:"</tr></table></div>",hd:"-",he:"loading",i:"descending",ia:'id="',ib:"jsxafterreorder",ic:/input|textarea/i,id:"jsxscroll",ie:"kH",j:"jsx:///images/matrix/sort_desc.gif",ja:'" class="jsx30matrix',jb:"focusdelay",jc:"jsxbeforedrop",jd:"horizontal",je:"_jsxBF",k:"jsx:///images/matrix/sort_asc.gif",ka:" ",kb:"_jsxX6",kc:"7px",kd:"seek",ke:"sort",l:'<xsl:call-template xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="{0}">\n  <xsl:with-param name="jsx_is_first_panel_row" select="$jsx_is_first_panel_row"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_rowbg" select="$jsx_rowbg"/>\n  <xsl:with-param name="jsx_cdfkey" select="$jsx_cdfkey"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',la:'" ',lb:/(-\S)/gi,lc:"dropverb",ld:"Matrix_timeout",le:/<ids>([\s\S]*)\s*,\s*<\/ids>/,m:"<xsl:when xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" test=\"$jsx_cell_value_template_id=''{0}''\">\n  <xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_record_context]\">\n    <xsl:call-template name=\"{0}\">\n    </xsl:call-template>\n  </xsl:for-each>\n</xsl:when>\n",ma:"_onMouseUp",mb:";",mc:"insertbefore",md:"vertical",me:"[",n:"<xsl:template xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" name=\"{0}\">\n  <xsl:param name=\"jsx_is_first_panel_row\"/>\n  <xsl:param name=\"jsx_row_number\"/>\n  <xsl:param name=\"jsx_rowbg\"/>\n  <xsl:param name=\"jsx_cdfkey\"/>\n  <xsl:param name=\"jsx_descendant_index\"/>\n  <xsl:param name=\"jsx_selection_bg\"><xsl:choose>\n     <xsl:when test=\"@*[name() = $attrselected]=1\">background-image:url(<xsl:value-of select=\"$jsx_selection_bg_url\"/>);</xsl:when>\n   </xsl:choose></xsl:param>\n  <xsl:param name=\"jsx_cell_width\" select=\"''{2}''\"/>\n  <xsl:param name=\"jsx_true_width\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@*[name() = $attrcategory]=''0'') and (@*[name() = $attrcategory] or *[$attrchildren='*' or name()=$attrchildren])\">{3}</xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_cell_width\"/></xsl:otherwise></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_first_row_width_style\">\n    <xsl:choose><xsl:when test=\"$jsx_is_first_panel_row\">width:<xsl:value-of select=\"$jsx_true_width\"/>px;</xsl:when></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_colspan\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@*[name() = $attrcategory]=''0'') and (@*[name() = $attrcategory] or *[$attrchildren='*' or name()=$attrchildren])\"><xsl:value-of select=\"$jsx_column_count\"/></xsl:when><xsl:otherwise>1</xsl:otherwise></xsl:choose>\n  </xsl:param>\n  {1}\n</xsl:template>",na:"selectstart",nb:":",nc:"12px",nd:"X1",ne:"]",o:'<xsl:call-template name="{0}">\n  <xsl:with-param name="jsx_cell_width" select="$jsx_true_width"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',oa:"HZ",ob:"unselectable",oc:"append",od:"fetching panel: ",oe:"count",p:"Viewing rows {0} to {1} of {2}",pa:'_body" class="jsx30matrix_body" ',pb:"1",pc:"rowcontext",pd:"contextnodes",pe:"attr",q:"jsxpaintpage",qa:"mousewheel",qb:"execute",qc:"jsxspy",qd:"jsxrownumber",qe:/(\d+)/,r:"deep",ra:"ae",rb:"jsxexecute",rc:"_jsxMK",rd:"Matrix2pass",re:"Getting Record Count: ",s:"shallow",sa:"RI",sb:"jsxid",sc:"jsx30spyglassbuffer",sd:"format.sync",se:"The paging model was overridden (disabled) because the rendering mode is hierarchical and stepped paging was not explicitly set.",t:"hierarchical",ta:"aV",tb:"_jsxhU",tc:"jsxcanceldrop",td:"format.async",te:".//",u:"jsx:///xsl/jsxmatrix.xsl",ua:"gN",ub:"_jsxUY",uc:"body",ud:"position:absolute;left:0px;top:",ue:"JSXDRAGID",v:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attropen\">jsxopen</xsl:param><xsl:param name=\"attrgroupname\">jsxgroupname</xsl:param><xsl:param name=\"attrselected\">jsxselected</xsl:param><xsl:param name=\"attrcategory\">jsxcategory</xsl:param><xsl:param name=\"attrcellstyle\">jsxcellstyle</xsl:param><xsl:param name=\"jsx_id\"/><xsl:param name=\"jsx_1\"/><xsl:param name=\"jsx_2\"/><xsl:param name=\"jsx_3\"/><xsl:param name=\"jsx_4\"/><xsl:param name=\"jsx_5\"/><xsl:param name=\"jsx_6\"/><xsl:param name=\"jsx_7\"/><xsl:param name=\"jsx_8\"/><xsl:param name=\"jsx_9\"/><xsl:param name=\"jsx_10\"/><xsl:param name=\"jsx_use_categories\">0</xsl:param><xsl:param name=\"jsx_column_count\">1</xsl:param><xsl:param name=\"jsx_drag_type\">JSX_GENERIC</xsl:param><xsl:param name=\"jsx_panel_index\"/><xsl:param name=\"jsx_column_widths\"/><xsl:param name=\"jsx_panel_css\"/><xsl:param name=\"jsx_icon\"/><xsl:param name=\"jsx_icon_minus\"/><xsl:param name=\"jsx_icon_plus\"/><xsl:param name=\"jsx_transparent_image\"/><xsl:param name=\"jsx_paging_model\">0</xsl:param><xsl:param name=\"jsx_mode\">panel</xsl:param><xsl:param name=\"jsx_cell_value_template_id\">_jsx_{serverns}_{serial}_value</xsl:param><xsl:param name=\"jsx_record_context\">cdfkey</xsl:param><xsl:param name=\"jsx_min_exclusive\">-1</xsl:param><xsl:param name=\"jsx_max_exclusive\">1000000</xsl:param><xsl:param name=\"jsx_column_index\">-1</xsl:param><xsl:param name=\"jsx_sort_path\" select=\"$attrid\"/><xsl:param name=\"jsx_sort_direction\">ascending</xsl:param><xsl:param name=\"jsx_sort_type\">text</xsl:param><xsl:param name=\"jsx_selection_bg_url\">JSX/images/list/select.gif</xsl:param><xsl:param name=\"jsx_selection_model\">1</xsl:param><xsl:param name=\"jsx_rowbg1\"/><xsl:param name=\"jsx_rowbg2\"/><xsl:param name=\"jsx_treehead_bgcolor\"/><xsl:param name=\"jsx_treehead_fontweight\"/><xsl:param name=\"jsx_autorow_style\">background-color:#fbf89f;</xsl:param><xsl:param name=\"jsx_rendering_model\">hierarchical</xsl:param><xsl:param name=\"jsx_rendering_context\">jsxroot</xsl:param><xsl:param name=\"jsx_rendering_context_child\"/><xsl:param name=\"jsx_indent\">16</xsl:param><xsl:param name=\"jsx_context_index\">1</xsl:param><xsl:param name=\"jsx_no_tip\">0</xsl:param><xsl:param name=\"jsx_no_empty_indent\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}_asyncmsg\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><tr><td style=\"padding: 3px;\"><xsl:value-of select=\"$jsxasyncmessage\"/></td></tr></table></xsl:when><xsl:when test=\"$jsx_mode = 'cellvalue'\"><xsl:choose><xsl:when test=\"0\"/></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'shallow'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@*[name() = $attrid] = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'deep'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@*[name() = $attrid] = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'hierarchical'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren][@*[name() = $attrid]=$jsx_rendering_context_child]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"hierarchical_sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:otherwise></xsl:choose></xsl:when></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"node()\" mode=\"entry\"><xsl:param name=\"jsx_row_number\"/><xsl:choose><xsl:when test=\"$jsx_row_number = '-1' or ($jsx_row_number &gt; $jsx_min_exclusive and $jsx_row_number &lt; $jsx_max_exclusive)\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/></xsl:call-template></xsl:when></xsl:choose></xsl:template><xsl:template match=\"node()\" mode=\"sort\">\"<xsl:value-of select=\"@*[name() = $attrid]\"/>\",</xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_sort\">\"<xsl:value-of select=\"@*[name() = $attrid]\"/>\",<xsl:apply-templates mode=\"hierarchical_sort\" select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_entry\"><xsl:param name=\"jsx_row_number\"/><xsl:param name=\"jsx_adjusted_width\"/><xsl:param name=\"jsx_descendant_index\"/><div jsxtype=\"structure\" style=\"position:relative;\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_0\" style=\"{$jsx_panel_css}width:{$jsx_adjusted_width}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_min_exclusive + 1\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></table><div jsxcontextindex=\"{$jsx_descendant_index + 1}\" style=\"display:none;\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:choose><xsl:when test=\"@*[name() = $attropen]='1'\"><xsl:attribute name=\"style\">position:relative;display:block;</xsl:attribute></xsl:when></xsl:choose><xsl:choose><xsl:when test=\"@*[name() = $attropen]='1' or $jsx_paging_model != 4 \"><xsl:for-each select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_adjusted_width\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index + 1\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></div></div></xsl:template><xsl:template name=\"ui_controller\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_cell_width\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsx_style\" select=\"@*[name() = $attrstyle]\"/><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" jsxindent=\"{($jsx_descendant_index -1) * $jsx_indent}\"><xsl:attribute name=\"style\">width:<xsl:value-of select=\"$jsx_cell_width - (($jsx_descendant_index -1) * $jsx_indent)\"/>px;position:relative;margin-left:<xsl:value-of select=\"($jsx_descendant_index -1) * $jsx_indent\"/>px;height:16px;</xsl:attribute><tr style=\"{$jsx_style}\"><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><td jsxtype=\"plusminus\"><xsl:attribute name=\"jsxtype\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and $jsx_paging_model = 4 and not(@*[name() = $attropen]=1)\">paged</xsl:when><xsl:otherwise>plusminus</xsl:otherwise></xsl:choose></xsl:attribute><xsl:attribute name=\"style\">vertical-align:top;width:<xsl:choose><xsl:when test=\"$jsx_no_empty_indent='1' and not(../*[$attrchildren='*' or name()=$attrchildren]/*[$attrchildren='*' or name()=$attrchildren])\">0</xsl:when><xsl:otherwise>16</xsl:otherwise></xsl:choose>px;background-image:url(<xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and @*[name() = $attropen]=1\"><xsl:value-of select=\"$jsx_icon_minus\"/></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and $jsx_paging_model = 4\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_transparent_image\"/></xsl:otherwise></xsl:choose>);background-repeat:no-repeat;</xsl:attribute><xsl:text>&#160;</xsl:text></td><td jsxtype=\"icon\" unselectable=\"on\"><xsl:choose><xsl:when test=\"@*[name() = $attrimg] = ''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"/></xsl:when><xsl:when test=\"@*[name() = $attrimg]\"><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:when><xsl:when test=\"$jsx_icon=''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"><xsl:text>&#160;</xsl:text></span></xsl:when><xsl:otherwise><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$jsx_icon}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose><xsl:text>&#160;</xsl:text></td><td jsxtype=\"text\" style=\"vertical-align:top;\"><xsl:attribute name=\"jsxtreenode\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\">branch</xsl:when><xsl:otherwise>leaf</xsl:otherwise></xsl:choose></xsl:attribute><xsl:call-template name=\"ui_controller\"><xsl:with-param name=\"jsx_cell_width\" select=\"$jsx_cell_width\"/><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></td></tr></table></xsl:template><xsl:template name=\"row_template\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsxdragtype\" select=\"$jsx_drag_type\"/><xsl:param name=\"jsx_style\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\"><xsl:value-of select=\"$jsx_autorow_style\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_cdfkey\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\">jsxautorow</xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_groupname\"><xsl:choose><xsl:when test=\"@*[name() = $attrgroupname]\"><xsl:value-of select=\"@*[name() = $attrgroupname]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_id\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_rowbg\"><xsl:choose><xsl:when test=\"$jsx_rendering_model != 'hierarchical' and ($jsx_rowbg1 or $jsx_rowbg2) and $jsx_row_number != -1\"><xsl:text>background-color:</xsl:text><xsl:choose><xsl:when test=\"$jsx_row_number mod 2 = 0\"><xsl:value-of select=\"$jsx_rowbg1\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_rowbg2\"/></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and ($jsx_rendering_model = 'hierarchical') and $jsx_treehead_bgcolor\"><xsl:text>background-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;font-weight:</xsl:text><xsl:value-of select=\"$jsx_treehead_fontweight\"/><xsl:text>;border-right-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;</xsl:text></xsl:when></xsl:choose></xsl:param><xsl:param name=\"jsx_is_first_panel_row\" select=\"$jsx_row_number - 1 = $jsx_min_exclusive or $jsx_row_number = -1\"/><tr JSXDragId=\"{$jsx_cdfkey}\" JSXDragType=\"{$jsx_drag_type}\" id=\"{$jsx_id}_jsx_{$jsx_cdfkey}\" jsxid=\"{$jsx_cdfkey}\" jsxrownumber=\"{$jsx_row_number}\" jsxtype=\"record\" style=\"{$jsx_rowbg}{$jsx_style}\"><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrtip] and $jsx_no_tip != '1'\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if><xsl:choose><xsl:when test=\"$jsx_use_categories='0' or @*[name() = $attrcategory]='0' or (not(@*[name() = $attrcategory]='1') and not(*[$attrchildren='*' or name()=$attrchildren]))\"></xsl:when></xsl:choose></tr></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",va:"mousemove",vb:"//",vc:"hierachical",vd:"autorow",ve:"\\b(",w:"_jsxb6",wa:"Fq",wb:"children",wc:"jsx30matrix_drop_icon",wd:"panel",we:")\\b",x:"scroll",xa:"Jt",xb:"[@",xc:"JSX_GENERIC",xd:"Fetching records: ",xe:"BeforeBegin",y:"none",ya:' class="jsx30matrix_scrollv" tabindex="-1"',yb:"selected",yc:"jsxadopt",yd:" - to - ",ye:"td",z:"block",za:"display:none;",zb:"='1']",zc:"jsxctrldrop",zd:"//xsl:template[@name='row_template']//tr",ze:"*["};var
Qa=jsx3.util.Logger.getLogger(m.jsxclass.getName());var
gb=jsx3.gui.Event;var
La=jsx3.gui.Interactive;var
A=jsx3.xml.CDF;var
Ya=jsx3.gui.Block;var
Ca=jsx3.gui.Painted;var
Ha=Ca.Box;var
pa=jsx3.html;m.YJ=500;m.y6=1;m.O9=150;m.AUTO_SCROLL_INTERVAL=50;m.SELECTION_BG=ub.a;m.INSERT_BEFORE_IMG=jsx3.resolveURI(ub.b);m.APPEND_IMG=jsx3.resolveURI(ub.c);m.FOCUS_STYLE=ub.d;m.ICON_MINUS=ub.e;m.ICON_PLUS=ub.f;m.ICON=ub.g;m.SORT_ASCENDING=ub.h;m.SORT_DESCENDING=ub.i;m.SORT_DESCENDING_IMG=jsx3.resolveURI(ub.j);m.SORT_ASCENDING_IMG=jsx3.resolveURI(ub.k);m.MINIMUM_COLUMN_WIDTH=8;m.DEFAULT_HEADER_HEIGHT=20;m.AUTOROW_NONE=0;m.AUTOROW_LAST_ROW=1;m.AUTOROW_FIRST_ROW=2;m.tQ=(new
jsx3.xml.Document()).loadXML(ub.l);m.AV=(new
jsx3.xml.Document()).loadXML(ub.m);m.RB=new
jsx3.util.MessageFormat(ub.n);m.vV=new
jsx3.util.MessageFormat(ub.o);m.DEFAULT_INFO_LABEL=ub.p;m.ON_PAINT_PAGE=ub.q;m.PAGING_OFF=0;m.PAGING_2PASS=1;m.PAGING_CHUNKED=2;m.PAGING_PAGED=3;m.PAGING_STEPPED=4;m.SELECTION_UNSELECTABLE=0;m.SELECTION_ROW=1;m.SELECTION_MULTI_ROW=2;m.REND_DEEP=ub.r;m.REND_SHALLOW=ub.s;m.REND_HIER=ub.t;m.DEFAULT_ROW_HEIGHT=20;m.DEFAULT_PANEL_POOL_COUNT=5;m.DEFAULT_ROWS_PER_PANEL=50;m.DEFAULT_REAPER_INTERVAL=250;m.DEFAULT_PANEL_QUEUE_SIZE=3;m.DEFAULTXSLURL=jsx3.resolveURI(ub.u);m.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.v);m.DEFAULT_XSL_URL=m.DEFAULTXSLURL;m.SCROLL_INC=36;q._jsxTv=[];q.init=function(g){this.jsxsuper(g);};q.Hj=function(j,g,h){var
sb=this.Wl(true,j);delete this[ub.w];var
hb=Ha.getScrollSize()+1;var
qa=this.getScaleWidth()==1?j.parentwidth-hb:this.x8();var
Na=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);sb.recalculate(j,g,h);var
U=sb.lg(0);U.recalculate({parentwidth:this.a7(),parentheight:Na},g?g.childNodes[0]:null,h);var
Ra=(U.lg(0)).lg(0);Ra.recalculate({parentwidth:qa,parentheight:Na},g&&g.childNodes[0]?pa.selectSingleElm(g,0,0,0):null,h);var
Ab=sb.ld()-Na;var
eb=sb.lg(1);eb.recalculate({parentwidth:this.a7(),parentheight:Ab},g?g.childNodes[1]:null,h);var
u=eb.hj()+eb.ld();Ab=sb.ld()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
Ta={};Ta.left=eb.getOffsetWidth()-1;Ta.top=0;Ta.height=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(hb-Ha.getScrollSizeOffset(ub.x));var
G=sb.lg(2);G.recalculate(Ta,g?g.childNodes[2]:null,h);var
fa={};fa.top=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-hb;fa.width=eb.ee();var
ra=sb.lg(3);ra.recalculate(fa,g?g.childNodes[3]:null,h);var
va=ra.lg(0);var
Db=this.getScaleWidth()||qa-hb<=sb.ee()?0:qa;va.recalculate({width:Db},g&&g.childNodes[3]?g.childNodes[3].childNodes[0]:null,h);if(g&&g.childNodes[3])if(this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||va.ee()<=ra.ee()){g.childNodes[3].style.display=ub.y;this.setScrollLeft(0);}else g.childNodes[3].style.display=ub.z;var
lb={};lb.left=Ta.left+1;lb.top=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-hb;lb.height=sb.ld()-lb.top;var
Aa=sb.lg(4);Aa.recalculate(lb,g&&g.childNodes[4]?g.childNodes[4]:null,h);var
mb=this.sm();var
t=this.oC(eb.ee());var
ib=false;for(var
ab=0;ab<mb.length;ab++){var
ea=mb[ab].Hj({parentwidth:t[ab],parentheight:Na},g?mb[ab].getRendered():null,h);ib=ib||ea==null||ea.w;}if(!ib){}else if(g&&g.childNodes[0]){var
Gb=[];for(var
ab=0;ab<mb.length;ab++)Gb.push((mb[ab].Wl(true)).getPaintedWidth());this.oF(g.childNodes[0].childNodes[0],Gb);t=[];for(var
ab=0;ab<mb.length;ab++)t.push((mb[ab].Wl(true)).getOffsetWidth());this.sS(g.childNodes[0].childNodes[0],t);Gb=[];for(var
ab=0;ab<mb.length;ab++)Gb.push(((mb[ab].Wl(true)).lg(1)).getPaintedWidth());if(this.getRenderingModel()==m.REND_HIER){var
F=this.EH({contextnodes:g.childNodes[1].childNodes[0].childNodes});this.Qu(F,Gb);}else this.oF(g.childNodes[1].childNodes[0],Gb);}else{Qa.trace(ub.A);jsx3.sleep(function(){if(this.getParent())this.Mc((this.getParent()).Id(this),true);},null,this);}this._Z();};q.sS=function(a,g){var
Da=0;for(var
J=1;J<a.childNodes.length;J++){var
O=a.childNodes[J];Da=Da+g[J-1];O.style.left=Da-4+ub.B;}};q.oF=function(n,a){var
Lb=this.x8();for(var
oa=0;oa<n.childNodes.length;oa++){var
Q=n.childNodes[oa];if(Q.tagName.toLowerCase()==ub.C){Q.style.width=Lb+ub.B;var
sb=this.mI(Q);if(jsx3.CLASS_LOADER.FX3){while(sb){for(var
va=0;va<sb.childNodes.length;va++)sb.childNodes[va].style.width=a[va]+ub.B;sb=sb.nextSibling;}}else if(sb)for(var
va=0;va<sb.childNodes.length;va++)sb.childNodes[va].style.width=a[va]+ub.B;}}};q.Qu=function(p,e){var
fa=this.x8();var
Oa=fa-(this.oC())[0]+e[0];for(var
Ra=0;Ra<p.length;Ra++){var
na=p[Ra];if(!(na&&na.childNodes))continue;var
N=na.parentNode;if(N.tagName.toLowerCase()!=ub.C)N=N.parentNode;N.style.width=fa+ub.B;for(var
xa=0;xa<na.childNodes.length;xa++){var
S=xa==0&&na.childNodes[0].getAttribute(ub.D)>1?Oa:e[xa];na.childNodes[xa].style.width=S+ub.B;if(xa==0&&this.getRenderNavigators(1)!=0){N=na.childNodes[xa].childNodes[0].childNodes[0];var
G=S-N.getAttribute(ub.E);N.style.width=Math.max(0,G)+ub.B;}}}};q.x8=function(d){if(!d)d=this.oC();return eval(d.join(ub.F)+ub.G)/10;};q.oC=function(g){if(typeof this._jsxb6==ub.H){return this._jsxb6.truewidths;}else{if(!g){g=this.a7();var
I={width:1000,height:10};var
Oa=this.getBodyBorder();if(Oa!=null&&Oa!=ub.I)I.border=Oa;g=g-(I.width-(new
Ha(I)).ee());}var
Ka=[];var
G=0;var
Ga;var
K=0;var
u=this.sm();var
P={percent:[],wildcard:[],pixel:[]};for(var
fa=0;fa<u.length;fa++){var
V=u[fa].getWidth();if((jsx3.util.strTrim(String(V))).search(ub.J)==0){P.percent.unshift(fa);Ga=parseInt(parseInt(V)/100*g);}else if(!isNaN(V)){P.pixel.unshift(fa);Ga=Number(V);}else{P.wildcard.unshift(fa);if(this.getScaleWidth()){K++;Ga=ub.K;}else Ga=m.Column.DEFAULT_WIDTH;}if(!isNaN(Ga))G=G+Ga;Ka.push(Ga);}Qa.trace(ub.L+this.getName()+ub.M+Ka);if(this.getScaleWidth()){var
aa=g-G;var
ka;if(K&&aa>=0&&parseInt(aa/K)>8){var
T=K;var
Lb=aa/K;if(Lb>parseInt(Lb)){Lb=parseInt(Lb);ka=aa-(K-1)*Lb;}else ka=Lb;for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]==ub.K){Ka[fa]=K==1?ka:Lb;K--;}K=T;}else if(K)for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]==ub.K)Ka[fa]=8;Qa.trace(ub.N+this.getName()+ub.M+Ka);var
Fb=this.x8(Ka);var
Da=Fb-g;if(Da>0){var
S=Da;if(P.wildcard.length)S=this.yU(Ka,P.wildcard,Da);if(P.percent.length&&S>0)S=this.yU(Ka,P.percent,S);if(P.pixel.length&&S>0)S=this.yU(Ka,P.pixel,S);}Qa.trace(ub.O+this.getName()+ub.M+Ka);}for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]<8)Ka[fa]=8;Qa.trace(ub.P+this.getName()+ub.M+Ka);var
Fb=this.x8(Ka);var
aa=g-Fb;if(aa>0)Ka[Ka.length-1]+=aa;Qa.trace(ub.Q+this.getName()+ub.M+Ka);this._jsxb6={truewidths:Ka};return Ka;}};q.yU=function(o,s,f){var
ia=0;var
xa=parseInt(f/s.length);for(var
P=0;P<s.length;P++){var
fb=s[P];if(P==s.length-1)xa=f-(s.length-1)*xa;if(o[fb]-xa<8){ia=ia+(8-(o[fb]-xa));o[fb]=8;}else o[fb]-=xa;}return ia;};q.a7=function(){var
X=((this.getParent()).Id(this)).parentwidth;return this.getSuppressVScroller(0)==1?X:X-Ha.getScrollSize();};q.Id=function(i){var
Nb=i.getDisplayIndex();return {parentwidth:Nb!=null?(this.oC())[Nb]:null,parentheight:((this.Wl(true)).lg(0)).ld()};};q.zd=function(c){this.applyDynamicProperties();if(this.getParent()&&(c==null||isNaN(c.parentwidth)||isNaN(c.parentheight))){c=(this.getParent()).Id(this);this.Bk();}else if(c==null)c={};var
Za=Ha.getScrollSize()+1;c.left=0;c.top=0;c.width=ub.R;c.height=ub.R;c.boxtype=ub.S;c.tagname=ub.T;var
ba=new
Ha(c);var
sa=this.getScaleWidth()==1?this.a7():this.x8();var
wa={};wa.left=0;wa.top=0;wa.height=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);wa.width=ub.R;wa.parentwidth=this.a7();wa.boxtype=ub.U;wa.tagname=ub.T;var
u;if((u=this.getHeaderBorder())!=null&&u!=ub.I)wa.border=u;var
I=new
Ha(wa);ba.cl(I);var
ia={};ia.tagname=ub.T;ia.boxtype=ub.U;ia.top=0;ia.left=0;var
xa=new
Ha(ia);I.cl(xa);var
lb={};lb.left=0;lb.top=0;lb.width=ub.R;lb.parentwidth=I.ee();lb.boxtype=ub.U;lb.tagname=ub.C;var
Ua=new
Ha(lb);xa.cl(Ua);var
B={};B.boxtype=ub.V;B.tagname=ub.W;var
Ea=new
Ha(B);Ua.cl(Ea);var
Mb=ba.ld()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
fa={};fa.left=0;fa.top=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);fa.parentwidth=this.a7();fa.width=ub.R;fa.parentheight=Mb;fa.height=ub.R;fa.boxtype=ub.U;fa.tagname=ub.T;if((u=this.getBodyBorder())!=null&&u!=ub.I)fa.border=u;var
Na=new
Ha(fa);ba.cl(Na);if(this.getHeaderHeight()!=0&&I.getBorderWidth()!=Na.getBorderWidth())Qa.warn(ub.X+this.getName()+ub.Y+this.getHeaderBorder()+ub.Z+this.getBodyBorder()+ub._);var
S={};S.tagname=ub.T;S.boxtype=ub.U;S.top=0;S.left=0;var
ra=new
Ha(S);Na.cl(ra);var
fb=Na.hj()+Na.ld();var
Ab={};Ab.boxtype=ub.U;Ab.tagname=ub.T;Ab.left=Na.getOffsetWidth()-1;Ab.top=0;Ab.width=Za;Ab.height=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(Za-Ha.getScrollSizeOffset(ub.x));var
ma=new
Ha(Ab);ba.cl(ma);var
z={};z.boxtype=ub.V;z.tagname=ub.aa;z.empty=true;z.left=0;z.top=0;z.width=1;z.height=this.getPagingModel()!=3?0:this.LE()+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)+Za;var
Fa=new
Ha(z);ma.cl(Fa);var
w={};w.boxtype=ub.U;w.tagname=ub.T;w.left=Na.qk();w.top=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Za;w.height=Za;w.width=Na.ee();var
P=new
Ha(w);ba.cl(P);var
Cb={};Cb.boxtype=ub.V;Cb.tagname=ub.aa;Cb.empty=true;Cb.left=0;Cb.top=0;Cb.width=sa-Za<=ba.ee()?0:sa;Cb.height=1;var
G=new
Ha(Cb);P.cl(G);var
yb={};yb.boxtype=ub.U;yb.tagname=ub.T;yb.left=Ab.left+1;yb.top=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Za;yb.width=Za-1;yb.height=ba.ld()-yb.top;var
rb=new
Ha(yb);ba.cl(rb);return ba;};m.yg={};m.yg[ub.ba]=true;m.yg[ub.ca]=true;m.yg[ub.da]=true;m.yg[ub.ea]=true;m.yg[ub.fa]=true;m.yg[ub.ga]=true;m.yg[ub.ha]=true;q.paint=function(){this.applyDynamicProperties();var
x=this.getId();var
wb=this.getClassName();var
P=this.Wl(true);P.setAttributes(ub.ia+x+ub.ja+(wb?ub.ka+wb:ub.I)+ub.la+this.Ak()+this.Fg(ub.ha,ub.ma));var
_a=this.qj(m.yg,1);if(jsx3.CLASS_LOADER.IE)_a=_a+this.Fg(ub.na,ub.oa,1);var
Va=P.lg(1);Va.setAttributes(ub.ia+x+ub.pa+_a+this.Rl());var
fb=Va.lg(0);fb.setStyles(this.ch()+this.ke());fb.setAttributes(this.Fg(ub.qa,ub.ra,2));var
hb=P.lg(2);hb.setAttributes(this.Fg(ub.x,ub.sa)+this.Fg(ub.ba,ub.ta)+this.Fg(ub.ca,ub.ua)+this.Fg(ub.va,ub.wa)+this.Fg(ub.fa,ub.xa)+pa._d+ub.ya);var
Eb=this.getSuppressVScroller(0)==1?ub.za:ub.I;hb.setStyles(ub.Aa+Eb);var
za=hb.lg(0);za.setAttributes(ub.Ba+Ya.SPACE+ub.Ca);var
Hb=P.lg(3);Hb.setAttributes(this.Fg(ub.x,ub.Da)+this.Fg(ub.fa,ub.Ea)+pa._d+ub.Fa);Eb=this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||(Hb.lg(0)).ee()<=Hb.ee()?ub.za:ub.I;Hb.setStyles(ub.Ga+Eb);var
G=Hb.lg(0);G.setAttributes(ub.Ba+Ya.SPACE+ub.Ca);var
ab=P.lg(4);ab.setStyles(ub.Ha);var
la=ub.I;var
ma=this.getPagingModel(0);if(ma==0||ma==4){if(this.MQ()==2)la=la+this.S5(-1);la=la+this.S5(0);if(this.MQ()==1)la=la+this.S5(-1);}var
ia=this.qz(true);var
Xa=this.Fg(ub.ca,ub.Ia);var
rb=(P.paint()).join(this.h3()+(Va.paint()).join((fb.paint()).join(la+ia))+(hb.paint()).join((za.paint()).join(ub.I))+(Hb.paint()).join((G.paint()).join(ub.I))+(ab.paint()).join(ub.Ja)+ub.Ka+ub.La+ub.Ma+Xa+ub.Na);return rb;};q.onAfterPaint=function(j){var
la=this.getPagingModel(0);if(la==0||la==4){this.Pp();}else if(this.vR()||!this._jsxgU)jsx3.sleep(this.Pp,ub.Oa+this.getId(),this);};q.onAfterRestoreView=function(a){this.synchronizeVScroller();};q.qz=function(o){var
xa=this.getPagingModel(0);var
Kb=xa==0||xa==4;if(o&&Kb||!o&&!Kb){var
u=new
jsx3.util.Timer(m.jsxclass,this);var
z=this.sm();var
Z=[];for(var
ha=0;ha<z.length;ha++){var
Pa=z[ha];var
Sa=Pa.getEditMasks();for(var
I=0;I<Sa.length;I++){var
P=Sa[I];if(m.ZJ(P,Pa))if(P.emGetType()==m.EditMask.NORMAL||P.emGetType()==m.EditMask.DIALOG)Z.push(P);}}var
ua=ub.Pa+this.getId()+ub.Qa+this.paintChildren(Z)+ub.Ra;u.log(ub.Sa);return ua;}return ub.I;};q.resetMask=function(){this.endEditSession();};q.repaintData=function(){var
nb=new
jsx3.util.Timer(m.jsxclass,this);var
Za=this.vD();if(Za){var
fa=this.getScrollTop();var
Ga=this.getScrollLeft();var
C=ub.I;var
X=this.getPagingModel(0);if(X==0||X==4){this.XF();if(this.MQ()==2)C=C+this.S5(-1);C=C+this.S5(0);if(this.MQ()==1)C=C+this.S5(-1);}var
Ab=this.getDocument(Za);var
Ib=Ab.getElementById(this.getId()+ub.Ta);if(Ib){Ib.style.display=ub.y;Za.parentNode.appendChild(Ib);}Za.innerHTML=C;this.Pp(false,true);if(Ib){Ib.style.display=ub.I;Za.appendChild(Ib);}jsx3.sleep(function(){this.YO(fa,Ga);},null,this);}nb.log(ub.Ua);};q.YO=function(k,o){var
zb=this.vD();if(k==null)k=this.getScrollTop();var
qa=zb?zb.offsetHeight:0;if(qa<k){this.setScrollTop(qa);}else this.setScrollTop(k);this.setScrollLeft(o?o:0);this._Z(zb);};q.h3=function(){var
X=this.getId();var
mb=this.Wl(true);var
Da=((this.Wl(true)).lg(0)).ld();var
pb=mb.lg(0);pb.setAttributes(ub.ia+X+ub.Va);var
ia=pb.lg(0);var
z=ia.lg(0);z.setAttributes(ub.Wa);var
W=z.lg(0);var
cb=[];var
U=this.oC();var
da=this.sm();for(var
ca=0;ca<da.length;ca++){da[ca].pj({parentwidth:U[ca],parentheight:Da},null);cb.push(da[ca].paint());}var
Xa=(pb.paint()).join((ia.paint()).join((z.paint()).join((W.paint()).join(cb.join(ub.I)))+this.PV(da)));return Xa;};q.repaintHead=function(){var
ob=this.getDocument();var
Kb=ob.getElementById(this.getId()+ub.Xa);if(Kb){var
u=this.h3();pa.setOuterHTML(Kb,u);}};q.Sk=function(o,k){var
S=(this.getServer()).getJSXById(k.id);var
mb=S.getDisplayIndex();this.ip(mb);if(o.leftButton()&&mb>=this.getFixedColumnIndex(0)&&this.getCanReorder()!=0){gb.publish(o);var
db=ub.Ya+this.getId()+ub.Za+parseInt(k.offsetWidth)+ub._a+pa.getOuterHTML(k)+ub.ab;var
za=(this.getRendered(o)).childNodes[0].childNodes[0];pa.insertAdjacentHTML(za,ub.bb,db);var
lb=za.lastChild;var
ga=this.oC();var
O=0;for(var
Gb=0;Gb<this.LK();Gb++)O=O+ga[Gb];lb.style.left=O+ub.B;this._jsxYv=O;var
v=this.a7();var
x=this.x8();var
Ia=this;var
ab=(Ia.getRendered()).childNodes[3];var
hb=ab.style.display!=ub.y;var
pb=this.getScrollLeft();var
Y=ab.scrollWidth-ab.clientWidth;La._beginMoveConstrained(o,lb,function(a,n){if(x>0&&hb){var
Ba=parseInt((a-pb)/v*x);Ba=Ba>Y?Y:Ba;Ia.setScrollLeft(Ba);a=a+Ba-pb;}return [a,0];});gb.subscribe(ub.ha,this,ub.cb);}else if(o.rightButton()){var
zb=S.getMenu();if(zb){var
ca=S.ck(zb);if(ca!=null){var
Z={objEVENT:o,objMENU:ca};var
Nb=S.doEvent(ub.db,Z);if(Nb!==false){if(Nb instanceof Object&&Nb.objMENU instanceof jsx3.gui.Menu)ca=Nb.objMENU;ca.showContextMenu(o,S);}}}}};q.Cw=function(l){jsx3.EventHelp.reset();gb.unsubscribe(ub.ha,this,ub.cb);var
Ib=(this.getRendered(l.event)).childNodes[0].childNodes[0].lastChild;var
va=parseInt(Ib.style.left);pa.removeNode(Ib);var
da=this.sm();var
Jb=da[this.LK()];if(va==this._jsxYv){if(this.getCanSort()!=0)this.el(l.event);}else if(this.getCanReorder()!=0){var
ia=this.oC();var
F=0;for(var
eb=0;eb<da.length;eb++){if(F>=va){var
xa=da[eb];this.dy(l.event,Jb,xa);return;}F=F+ia[eb];}this.dy(l.event,Jb,da[da.length-1],true);}};q.LO=function(e){return e.getSortPath();};q.IC=function(i){return i.getSortDataType();};q.el=function(j){var
wb=this.sm();var
Fb=wb[this.LK()];if(Fb&&Fb.getCanSort()!=0&&this.getCanSort()!=0){this.vw();var
J=this.LO(Fb);var
vb=this.IC(Fb);var
V=this.doEvent(ub.eb,{objEVENT:j,objCOLUMN:Fb,strSORTPATH:J,strSORTTYPE:vb});if(V!==false){if(V!=null&&typeof V==ub.H)if(V.objCOLUMN!=null){Fb=V.objCOLUMN;J=this.LO(Fb);vb=this.IC(Fb);}this.setSortPath(J);this.setSortType(vb);this.doSort();this.doEvent(ub.fb,{objEVENT:j,objCOLUMN:Fb,strSORTPATH:J,strSORTTYPE:vb,strDIRECTION:this.getSortDirection(),_gipp:1});}}};q.doSort=function(s){if(s){this.setSortDirection(s);}else this.setSortDirection(this.getSortDirection()==ub.h?ub.i:ub.h);var
fa=this.getSortPath();var
Oa=this.sm();for(var
w=0;w<Oa.length;w++)Oa[w]._applySortIcon(Oa[w].getSortPath()==fa);delete this[ub.gb];this.repaintData();};q.getSortPath=function(){return this.jsxsortpath==null?ub.I:this.jsxsortpath;};q.setSortPath=function(b){this.jsxsortpath=b;};q.getSortType=function(){return this.jsxsorttype==null?ub.hb:this.jsxsorttype;};q.setSortType=function(g){this.jsxsorttype=g;};q.getSortDirection=function(){return this.jsxsortdirection==null?ub.h:this.jsxsortdirection;};q.setSortDirection=function(l){this.jsxsortdirection=l;};q.getCanSort=function(){return this.jsxsort;};q.setCanSort=function(j){this.jsxsort=j;};q.dy=function(j,p,s,b){var
Lb=this.sm();var
Wa=jsx3.util.arrIndexOf(Lb,p);var
Na=jsx3.util.arrIndexOf(Lb,s);var
ab=this.getFixedColumnIndex(-1);var
Ea=p.getChildIndex();if(Wa<=ab)return;if(Na<ab)s=(this.sm())[ab];if(!s)return;var
yb=this.getScrollTop();var
ba=this.getScrollLeft();var
Eb=b?this.adoptChild(p,true)||1:this.insertBefore(p,s,true);jsx3.sleep(function(){this.YO(yb,ba);},null,this);if(Eb){var
zb=p.getChildIndex();this.doEvent(ub.ib,{objEVENT:j,intOLDINDEX:Ea,intNEWINDEX:zb,_gipp:1});}};q.adoptChild=function(n,k,c){this.jsxsuper(n,false,c);this.Bk();if(k!==false)this.repaint();};q.insertBefore=function(k,e,f){var
J=this.jsxsuper(k,e,false);if(J){this.Bk();if(f!=false)this.repaint();}return J;};q.getCanReorder=function(){return this.jsxreorder;};q.setCanReorder=function(s){this.jsxreorder=s;};q.focusRowById=function(k){this.focusCellByIndex(k,0);};q.focusCellById=function(n,e){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(n);var
Db=this.v8(n,e);if(Db){pa.focus(Db);}else if(this.DJ(n))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellById(n,e);},ub.jb,this);},ub.jb,this);};q.focusCellByIndex=function(p,o){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(p);var
Kb=this.jO(p,o);if(Kb){pa.focus(Kb);}else if(this.DJ(p))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellByIndex(p,o);},ub.jb,this);},ub.jb,this);};q.DJ=function(i){if(this.getPagingModel()==3){var
P=this.getSortedIds();var
ab=P.length;for(var
Db=0;Db<ab;Db++)if(P[Db]==i){this.setScrollTop(this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*Db);this._jsxDY=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*Db;(this.S3()).unshift({index:this.Hx()});this.X1();return true;}}return false;};q.tu=function(f,g){this.z9(f,g,true);this._scrollIntoView(g);};q.W3=function(s,j){};q.getFocusStyle=function(g){return this.jsxfocusstyle?this.jsxfocusstyle:g?g:null;};q.setFocusStyle=function(f){delete this[ub.kb];this.jsxfocusstyle=f;};q.L0=function(h,k){if(typeof this._jsxX6!=ub.H)this._jsxX6=this.ks(this.getFocusStyle(m.FOCUS_STYLE));this.Ht(h,this._jsxX6,k);};q.ks=function(n){var
wb=ub.lb;var
Ma={};var
Eb=n.split(ub.mb);for(var
Y=0;Y<Eb.length;Y++){var
yb=Eb[Y]+ub.I;var
Da=yb.split(ub.nb);if(Da&&Da.length==2){var
qb=Da[0].replace(wb,function(k,j){return (j.substring(1)).toUpperCase();});Ma[qb]=Da[1];}}return Ma;};q.Ht=function(d,s,o){if(o){for(var qb in s)d.style[qb]=s[qb];}else for(var qb in s)d.style[qb]=ub.I;};q.W4=function(){return this._jsxcU;};q.Kt=function(g){if(this._jsxcU!=g){var
Y=this.hL();if(Y)this.L0(Y,false);}this._jsxcU=g;};q.resetFocusContext=function(n){this.Kt();};q.hL=function(){return (this.getDocument()).getElementById(this.W4());};q.z9=function(j,c,e){this.AF(j);var
Ga=true;var
Da=this.sm();var
Ua=Da[c.cellIndex];var
Fa=Ua.getEditMasks();for(var
sa=0;sa<Fa.length;sa++){var
fb=Fa[sa];if(m.ZJ(fb,Ua))if(fb.emGetType()!=m.EditMask.NORMAL){Ga=false;break;}}if(!e&&Ga)pa.focus(c);this.Kt(c.id);this.L0(c,true);this.Hr(j,c);};q.Xj=function(j,c){this.Jm(j);};q.Jm=function(n,s){if(s==null)s=this.getSelectedIds();for(var
Kb=0;Kb<s.length;Kb++){var
Wa=s[Kb];var
zb=this.getRecordNode(Wa);if(this.Sf(zb,ub.ob)==ub.pb)continue;this.eval(this.Sf(zb,ub.qb),this._getEvtContext({strRECORDID:Wa}));}if(s.length)this.doEvent(ub.rb,{objEVENT:n,strRECORDID:s[0],strRECORDIDS:s});};q.executeRecord=function(b){var
Fa=this.getRecordNode(b);if(Fa)this.eval(this.Sf(Fa,ub.qb),this._getEvtContext({strRECORDID:b}));};q.Hr=function(k,b){var
bb=this.getSelectionModel(1);var
Wa=this.sE(b);var
Ma=Wa.cell;var
Xa=Ma?Ma.cellIndex:null;var
Lb=Wa.row;var
wb=Lb.getAttribute(ub.sb);var
L=this.MQ()&&this.gJ(Lb);if(!L)if((this.I3()).ctrl){this.lW(wb);if(this.isRecordSelected(wb)){this.YH(k,wb,null);}else this.SV(k,wb,Lb,true,Xa);}else if((this.I3()).shift){var
db=this.uD();if(db){this.MW(k,Lb,Xa);}else{this.lW(wb);this.SV(k,wb,null,false,Xa);}}else{this.lW(wb);if(!this.isRecordSelected(wb))this.SV(k,wb,null,false,Xa);}this.WQ(k,Ma,(this.sm())[Xa],L);delete this[ub.tb];};q.YZ=function(){if(!this._jsxUY)this._jsxUY={bg:(this.getServer()).resolveURI(this.getSelectionBG(m.SELECTION_BG))};return this._jsxUY.bg;};q.getSelectionBG=function(i){return this.jsxselectionbg?this.jsxselectionbg:i?i:null;};q.setSelectionBG=function(s){delete this[ub.ub];this.jsxselectionbg=s;};q.lW=function(g){this._jsxfL=g;};q.uD=function(){return this._jsxfL;};q.Io=function(){return (this.getDocument()).getElementById(this.uD());};q.TA=function(a,p,e){e.push(a);var
O=a.getParent();return !O.equals(p)?this.TA(O,p,e):e;};q.getSelectedNodes=function(){return (this.getXML()).selectNodes(ub.vb+this.hn(ub.wb)+ub.xb+this.hn(ub.yb)+ub.zb);};q.getSelectedIds=function(){var
z=[];var
Sa=(this.getXML()).selectNodeIterator(ub.vb+this.hn(ub.wb)+ub.xb+this.hn(ub.yb)+ub.zb);while(Sa.hasNext()){var
Fb=Sa.next();z[z.length]=this.Sf(Fb,ub.Ab);}return z;};q.Ig=function(b){var
qa=this.getRecordNode(b);return qa&&this.Sf(qa,ub.ob)!=ub.pb;};q.isRecordSelected=function(k){var
ka=this.getRecordNode(k);return ka&&this.Sf(ka,ub.yb)==ub.pb;};q.selectRecord=function(l){if(this.getSelectionModel()==0)return;if(!this.Ig(l))return;this.SV(false,l,null,this.getSelectionModel()==2);};q.deselectRecord=function(b){this.YH(false,b,null);};q.deselectAllRecords=function(){var
W=this.getSelectedIds();var
C=W.length;for(var
M=0;M<C;M++)this.YH(false,W[M]);};q.SV=function(a,f,j,b,r){var
J=this.getSelectionModel(1);var
U=this.getRecordNode(f);var
z=b||a&&this.getCanDrag()==1;if(J==0||!U||this.Sf(U,ub.yb)==ub.pb&&z||this.Sf(U,ub.ob)==ub.pb)return false;var
ya=b&&J==2;if(!ya)this.deselectAllRecords();this.Sf(U,ub.yb,ub.pb);j=j||this.M1(f);if(j!=null){var
ha=ub.Bb+this.YZ()+ub._;for(var
Ua=0;Ua<j.childNodes.length;Ua++)j.childNodes[Ua].style.backgroundImage=ha;}this.L1(a,f,r);return true;};q.YH=function(n,l,d){var
Cb=this.getRecordNode(l);if(!Cb||this.Sf(Cb,ub.yb)!=ub.pb)return false;this.Sf(Cb,ub.yb,null);d=d||this.M1(l);if(d!=null&&d.childNodes){d.style.backgroundImage=ub.I;for(var
P=0;P<d.childNodes.length;P++)d.childNodes[P].style.backgroundImage=ub.I;}this.L1(n);return true;};q.MW=function(e,r,n){if(!r)return;var
rb=this.uD();var
ta=r.getAttribute(ub.sb);if(!this.Ig(rb)||!this.Ig(ta))return;var
fb=this.getSelectedIds();var
Db=fb.length;for(var
yb=0;yb<Db;yb++)this.YH(false,fb[yb],this.M1(fb[yb]));fb=this.getSortedIds();var
ja=new
jsx3.util.List(fb);var
Ea=ja.indexOf(rb);var
la=ja.indexOf(ta);var
z=Math.min(Ea,la);var
qa=Math.max(Ea,la);var
N=fb.length;var
ia=0;for(var
yb=z;yb<=qa;yb++)this.SV(false,fb[yb],this.M1(fb[yb]),true,n);this.L1(e,ta,n);};q.L1=function(e,k,f){if(e&&e instanceof gb){this.doEvent(ub.Cb,{objEVENT:e,strRECORDID:k,strRECORDIDS:this.getSelectedIds(),objCOLUMN:f!=null?(this.sm())[f]:null,_gipp:1});this.doEvent(ub.Db,{objEVENT:e});}};q.WQ=function(e,s,l,d){var
ga=l.getEditMask();if(ga!=null){var
pb,w;if(d){var
ob=this.a3();w=ob[l.getPath()];pb=ub.Eb;}else{pb=s.parentNode.getAttribute(ub.sb);w=l.getValueForRecord(pb);}var
B=this.getRendered(s);var
z=this.vD();var
ja=ga.emGetType()==m.EditMask.NORMAL||ga.emGetType()==m.EditMask.DIALOG;if(ja){var
G=this.doEvent(ub.Fb,{objEVENT:e,strRECORDID:pb,objCOLUMN:l});if(G===false)return;if(G!=null&&typeof G==ub.H)if(typeof G.objMASK!=ub.Gb)ga=G.objMASK;}var
Jb=pa.getRelativePosition(z,s);var
Ga=pa.getRelativePosition(B,B);Ga.W-=parseInt(z.style.left);Ga.H-=parseInt(z.style.top);var
Fa=this._jsxOM;if(Fa&&Fa.mask&&Fa.mask.emGetSession())this.endEditSession();if(ga.cB(w,Jb,Ga,this,l,pb,s)){this._jsxOM={mask:ga,column:l,recordId:pb,value:w};gb.subscribeLoseFocus(this,(this.getRendered(s)).childNodes[1],ub.Hb);}}};q.getAutoRowSession=function(){return this.a3();};q.a3=function(){if(!this._jsxyP){this._jsxyP={jsxid:jsx3.xml.CDF.getKey()};this._jsxg3={jsxid:this._jsxyP.jsxid};}return this._jsxyP;};q.Q4=function(){if(this._jsxyP)for(var ea in this._jsxyP)if(this._jsxg3[ea]!=this._jsxyP[ea]&&!(jsx3.util.strEmpty(this._jsxyP[ea])&&jsx3.util.strEmpty(this._jsxg3[ea])))return true;return false;};q.UT=function(l){var
E=this.a3();E[l.column.getPath()]=l.newvalue;};q.ZP=function(e,c){if(c!==false)this.AF(e);var
W=this.a3();if(W!=null&&!jsx3.util.strEmpty(W.jsxid)){delete this[ub.Ib];var
Ta;if(e)Ta=this.doEvent(ub.Jb,{objEVENT:e,objRECORD:W});if(Ta!==false){var
Xa=this.insertRecord(W,this.getRenderingContext(ub.Kb),true);if(e)this.doEvent(ub.Lb,{objEVENT:e,objRECORDNODE:Xa,_gipp:1});}var
xb={jsxid:ub.Eb};this.insertRecord(xb,null,false);this.redrawRecord(ub.Eb,2);this.deleteRecord(ub.Eb,false);}};q.commitAutoRowSession=function(a,b){this.ZP(a,false);if(!isNaN(b)){var
Ma=this.M1(ub.Eb);if(Ma&&Ma.childNodes[+b])pa.focus(Ma.childNodes[+b]);}};q.eX=function(){delete this[ub.Ib];};q.gJ=function(l){if(!l)return false;if(l.getAttribute(ub.sb)!=ub.Eb)return false;var
ib=l.parentNode;if(ib.tagName.toLowerCase()!=ub.C)ib=ib.parentNode;return ib.getAttribute(ub.Eb)==ub.Mb;};q.AF=function(p,a){var
ob=this._jsxOM;if(ob!=null){if(!a){delete this[ub.Nb];gb.unsubscribeLoseFocus(this);}var
Ta=a?ob.mask.emGetValue():ob.mask.DW();var
W=ob.recordId==ub.Eb&&this.MQ()&&this.gJ(this.M1(ub.Eb));var
Ra=true;if(p&&W){var
yb=this.M1(ub.Eb);Ra=pa.findElementUp(p.srcElement(),function(c){return c==yb;},true)==null;}if(!(Ra&&W&&this.Q4()))if(ob.value===Ta)return;var
rb=ob.mask.emGetType()==m.EditMask.NORMAL||ob.mask.emGetType()==m.EditMask.DIALOG;var
C=true;if(rb){if(p!=null)C=this.doEvent(ub.Ob,{objEVENT:p,strRECORDID:ob.recordId,objCOLUMN:ob.column,strNEWVALUE:Ta});if(C!=null&&typeof C==ub.H)if(typeof C.strNEWVALUE!=ub.Gb)Ta=C.strNEWVALUE;var
Mb=ob.column.getPath()==ub.sb;if(Mb&&this.getRecordNode(Ta))C=false;if(C!==false){if(a)ob.value=Ta;if(W){ob.newvalue=Ta;this.UT(ob);var
Wa=this.a3();var
wa={};for(var V in Wa)wa[V]=Wa[V];wa.jsxid=ub.Eb;this.insertRecord(wa,null,false);this.redrawCell(ub.Eb,ob.column);this.deleteRecord(ub.Eb,false);if(Ra&&!a&&this.Q4())this.ZP(p,false);}else if(Mb){this.insertRecordProperty(ob.recordId,ub.sb,Ta,false);this.redrawCell(Ta,ob.column);}else{ob.column.setValueForRecord(ob.recordId,Ta);this.redrawCell(ob.recordId,ob.column);}}}if(p!=null&&C!==false)this.doEvent(ub.Pb,{objEVENT:p,strRECORDID:ob.recordId,objCOLUMN:ob.column,strVALUE:Ta,_gipp:1});}};q.endEditSession=function(f){this.AF(f);};q.collapseEditSession=function(k,b){var
ra=this._jsxOM;if(ra!=null){ra.mask.emCollapseEdit(k);this.endEditSession(k);pa.focus(b);}};q.tH=function(f){var
ca=f.event.srcElement();var
Ka=this._jsxOM;if(Ka&&!Ka.f1&&!Ka.mask.containsHtmlElement(ca))this.AF(f.event);};m.ZJ=function(b,e){if(b._jsxkO)return true;if(b.instanceOf(jsx3.gui.Form)){m.EditMask.jsxclass.mixin(b,true);}else if(jsx3.gui.Dialog&&b instanceof jsx3.gui.Dialog){m.DialogMask.jsxclass.mixin(b,false);m.BlockMask.jsxclass.mixin(b,true);m.EditMask.jsxclass.mixin(b,true);}else if(b instanceof Ya){m.BlockMask.jsxclass.mixin(b,true);m.EditMask.jsxclass.mixin(b,true);}else return false;b.emInit(e);b._jsxkO=true;return true;};q.nj=function(e,h){e.cancelBubble();gb.publish(e);var
w=e.srcElement();var
Sa=this.sE(w);var
Ja=w.getAttribute(ub.Qb);if(Ja==ub.Rb||Ja==ub.Sb){this.jA(e,w);}else while(w&&w!=h){if(w.getAttribute(ub.Qb)==ub.Tb)if(!jsx3.gui.isMouseEventModKey(e)&&!e.shiftKey()){var
ba=Sa.row.getAttribute(ub.sb);var
ma=this.getSelectedIds();var
Va=ma.length==1&&ba==ma[0]?false:e;this.deselectAllRecords();this.SV(Va,ba,Sa.row,false,Sa.cell?Sa.cell.cellIndex:null);return;}w=w.parentNode;}};q.jA=function(h,e,o){var
wa=this.DC(e);var
Aa=(this.mI(wa.previousSibling)).getAttribute(ub.sb);var
u=this.getRecordNode(Aa);if(!u.selectSingleNode(ub.Ub+this.hn(ub.wb)))return;if(o==null)o=false;if(e.nodeType==3)e=e.parentNode;var
Pa=e.getAttribute(ub.Qb);if(wa.style.display==ub.y||o){o=true;this.Sf(u,ub.Vb,ub.pb);wa.style.display=ub.I;if(this.getRenderNavigators(1)!=0)e.style.backgroundImage=ub.Bb+(this.getUriResolver()).resolveURI(this.getIconMinus(m.ICON_MINUS))+ub._;if(this.GZ(wa)){Qa.trace(ub.Wb+Aa);var
F={};F.jsx_panel_css=ub.Xb;F.jsx_column_widths=this.x8();F.jsx_rendering_context=Aa;F.jsx_context_index=wa.getAttribute(ub.Yb);wa.innerHTML=this.doTransform(F);if(this.getRenderNavigators(1)!=0)e.setAttribute(ub.Qb,ub.Rb);var
na={painted:1,token:m.getToken(),contextnodes:wa.childNodes};(this.JX())[0]=na;this.WO(na);}}else{this.Sf(u,ub.Vb,null);wa.style.display=ub.y;if(this.getRenderNavigators(1)!=0)e.style.backgroundImage=ub.Bb+(this.getUriResolver()).resolveURI(this.getIconPlus(m.ICON_PLUS))+ub._;}this._Z();if(h)this.doEvent(ub.Zb,{objEVENT:h,strRECORDID:Aa,objRECORD:u,bOPEN:o,_gipp:1});};q.toggleItem=function(b,l){var
z=this.jO(b,0);if(z!=null){while(z&&z.getAttribute&&z.getAttribute(ub.Qb)!=ub.Rb&&z.getAttribute(ub.Qb)!=ub.Sb)z=z.childNodes[0];this.jA(false,z,l);}};q.revealRecord=function(l){var
Ta=this.getRecordNode(l);if(Ta){if(this.getRenderingModel()==m.REND_HIER){var
C=[];do
C.push(this.Sf(Ta,ub.Ab));while((Ta=Ta.getParent())!=null&&Ta.getParent());for(var
Db=C.length-1;Db>=0;Db--)this.toggleItem(C[Db],true);}this.synchronizeVScroller();var
B=this.jO(l,0);if(B){this._scrollIntoView(B);}else if(this.DJ(l))jsx3.sleep(function(){jsx3.sleep(function(){var
B=this.jO(l,0);if(B)this._scrollIntoView(B);},ub._b,this);},ub._b,this);}};q.DC=function(j){while(!j.tagName||j&&j.tagName&&j.tagName.toLowerCase()!=ub.C||j.id==ub.I)j=j.parentNode;return j.nextSibling;};q.getDragIcon=function(r,b,h,g){var
lb=jsx3.EventHelp.DRAGIDS;var
Q=ub.I;var
Oa=r.id;var
Ta=0.4;var
X=r.getAttribute(ub.sb);if(b.Ig(X)&&jsx3.util.arrIndexOf(lb,X)==-1)lb.push(X);for(var
C=0;C<lb.length&&C<4;C++){var
Ib=b.M1(lb[C]);if(Ib)Q=Q+b.EO(Ib,Ta);Ta=Ta-0.1;}return Q;};q.EO=function(h,k){var
R=h;while(R.tagName.toLowerCase()!=ub.C)R=R.parentNode;return ub.ac+pa.getCSSOpacity(k)+ub.bc+ub.cc+R.getAttribute(ub.dc)+ub.ec+R.getAttribute(ub.fc)+ub.bc+ub.gc+h.getAttribute(ub.dc)+ub.ec+h.getAttribute(ub.fc)+ub.bc+h.innerHTML+ub.hc;};if(jsx3.CLASS_LOADER.IE)q.HZ=function(k,b){var
sb=k.srcElement();var
ha=this.getSelectionModel()!=0;if(ha&&!(sb&&sb.tagName.search(ub.ic)==0))k.cancelAll();};q.Fo=function(l,a){var
ob=true;this.YG(l);if(l.leftButton()){var
z=l.srcElement();var
db=this.sE(z);if(db==null)return;if(db){a=db.cell;if(this.W4()!=a.id){pa.focus(a);}else{this.SB();this.z9(l,a);}if(this.getCanDrag()==1&&this.getSelectionModel(1)>0){var
M=this.getSelectedIds();var
Aa=db.row.getAttribute(ub.sb);var
va=jsx3.util.List.wrap(M);if(va.indexOf(Aa)==-1)M=[Aa];if(this.Ig(Aa)&&jsx3.util.arrIndexOf(M,Aa)==-1)M.push(Aa);this.doDrag(l,db.row,this.getDragIcon,{strDRAGIDS:M});ob=true;}else ob=this._jsxOM!=null;}}if(ob){gb.publish(l);l.cancelAll();}};q.Ri=function(k,b){var
ma=k.toElement();if(!ma)return;var
Na=ma.getAttribute(ub.Qb);var
Hb=this.sE(ma);if(!Hb)return;var
db=Hb.row.getAttribute(ub.sb);b=this.NV(Hb.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){if(Na==ub.Rb&&this.Sf(this.getRecordNode(db),ub.Vb)!=ub.pb||Na==ub.Sb){var
zb=this;k.yh();m.TOGGLETIMEOUT=window.setTimeout(function(){if(zb.getParent()!=null)zb.jA(k,ma);},m.YJ);}var
Va=this.doEvent(ub.jc,{objEVENT:k,strRECORDID:db,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:b});if(!(Va===false)){var
ya=this.getRendered(k);var
oa=this.getAbsolutePosition(ya,Hb.row);var
xb=this.yR(ya);var
Ia=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0?parseInt(Hb.row.childNodes[0].childNodes[0].childNodes[0].getAttribute(ub.E)):4;if(this.getRenderingModel()!=m.REND_HIER||oa.H/3>k.getOffsetY()){xb.style.top=oa.T-4+ub.B;xb.style.width=this.a7()-Ia-8+ub.B;xb.style.height=ub.kc;xb.style.backgroundImage=ub.Bb+m.INSERT_BEFORE_IMG+ub._;xb.setAttribute(ub.lc,ub.mc);}else{Ia=Ia+26;xb.style.width=ub.nc;xb.style.height=ub.nc;xb.style.top=oa.T-10+oa.H+ub.B;xb.style.backgroundImage=ub.Bb+m.APPEND_IMG+ub._;xb.setAttribute(ub.lc,ub.oc);}xb.style.left=Ia+ub.B;xb.setAttribute(ub.pc,db);xb.style.display=ub.z;}}else if(this.getEvent(ub.qc)){this.applySpyStyle(ma);var
Lb=k.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
y=k.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;k.yh();var
zb=this;var
W=(this.sm())[Hb.cell.cellIndex];if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);m.SPYTIMEOUT=window.setTimeout(function(){m.SPYTIMEOUT=null;if(zb.getParent()!=null)zb.m4(k,db,W,ma);},jsx3.EventHelp.SPYDELAY);}};q.m4=function(f,a,h,c){this.removeSpyStyle(c);var
ra=this.doEvent(ub.qc,{objEVENT:f,objCOLUMN:h,strRECORDID:a});if(ra)this.showSpy(ra,f);};q.aV=function(j,c){this.P3(c.parentNode);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){var
Q=this;this._jsxMK={offsety:j.getOffsetY(),offsetheight:c.offsetHeight,scrollheight:c.scrollHeight};this._jsxMK.interval=window.setInterval(function(){Q.t4();},m.AUTO_SCROLL_INTERVAL);}};q.t4=function(){if(this._jsxMK.offsety<this._jsxMK.offsetheight/2){if(this.getScrollTop()>0)this.setScrollTop(this.getScrollTop()-20);}else if(this.getScrollTop()<this._jsxMK.scrollheight)this.setScrollTop(this.getScrollTop()+20);};q.gN=function(b,k){if(this._jsxMK){window.clearInterval(this._jsxMK.interval);delete this[ub.rc];}};q.Fq=function(i,d){if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null&&this._jsxMK){this._jsxMK.offsety=i.getOffsetY();this._jsxMK.offsetheight=d.offsetHeight;this._jsxMK.scrollheight=d.scrollHeight;}};q._ebMouseOutDropIcon=function(i,d){if(!i.isFakeOut(d.parentNode.childNodes[1]))this.P3(d.parentNode);};q.Uc=function(l,a){var
Ra=l.fromElement();if(l.isFakeOut(a))this.P3(a.parentNode);if(!jsx3.EventHelp.isDragging()&&this.getEvent(ub.qc)){var
va=l.toElement();var
Pa=false;try{Pa=!va||va.className!=ub.sc;}catch(Kb){Pa=true;}if(Pa){jsx3.sleep(La.hideSpy);this.removeSpyStyle(Ra);if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);}}if(Ra==null||l.isFakeOut(a.parentNode)&&Ra.getAttribute(ub.Qb)!=ub.Rb)return;var
Cb=Ra.getAttribute(ub.Qb);var
x=this.sE(Ra);if(!x)return;var
na=x.row.getAttribute(ub.sb);a=this.NV(x.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1){if(Cb==ub.Rb)window.clearTimeout(m.TOGGLETIMEOUT);var
Fb=this.doEvent(ub.tc,{objEVENT:l,strRECORDID:na,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:a});this.P3(this.getRendered(l));}};q.sE=function(o){var
Za=o;var
wb=null;while(Za&&Za.getAttribute(ub.Qb)!=ub.Tb){wb=Za;Za=Za.parentNode;if(!Za||!Za.tagName||Za.tagName.toLowerCase()==ub.uc||Za.id==this.getId())return null;}return {row:Za,cell:wb};};q.NV=function(b){if(this.getRenderingModel()==ub.vc){b=(this.DC(b)).parentNode;}else if(this.getPagingModel(0)!=3)while(b.tagName.toLowerCase()!=ub.C)b=b.parentNode;return b;};q.yo=function(i,d){};q.ae=function(c,j){var
C=c.getWheelDelta();var
ta=this.vD();var
P=this.getScrollTop();P=Math.max(0,Math.min(P-C*m.SCROLL_INC,ta.offsetHeight));this.collapseEditSession(c,j);this.setScrollTop(P,j);c.cancelAll();};q._isDescendantOrSelf=function(n,d){while(n&&d){if(n.equals(d))return true;n=n.getParent();}return false;};q._onMouseUp=function(o,k){var
Ja=o.srcElement()&&(o.srcElement()).className==ub.wc?(this.M1((o.srcElement()).getAttribute(ub.pc))).childNodes[0]:o.srcElement();var
Za=this.sE(Ja);if(this.getCanDrop()==1&&jsx3.EventHelp.isDragging()){if(jsx3.EventHelp.getDragType()==ub.xc){jsx3.sleep(function(){this.P3();},null,this);var
zb=jsx3.EventHelp.getDragSource();if(zb&&zb.instanceOf(jsx3.xml.CDF)){var
Eb=jsx3.gui.isMouseEventModKey(o);var
yb=zb.doEvent(ub.yc,{objEVENT:o,strRECORDID:jsx3.EventHelp.getDragId(),strRECORDIDS:jsx3.EventHelp.getDragIds(),objTARGET:this,bCONTROL:Eb});var
I=this.yR(this.getRendered(o));var
Ta=I.getAttribute(ub.lc)==ub.mc;var
H=Za?Za.row.getAttribute(ub.sb):null;var
_a={objEVENT:o,objSOURCE:zb,strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),strDRAGID:jsx3.EventHelp.getDragId(),strRECORDID:H,bINSERTBEFORE:Ta,objCOLUMN:Za!=null?(this.sm())[Za.cell.cellIndex]:null,bALLOWADOPT:yb!==false};var
ra=this.doEvent(Eb?ub.zc:ub.Ac,_a);if(yb!==false&&ra!==false){var
Pa=jsx3.EventHelp.getDragIds();var
sa=Za?this.getRecordNode(Za.row.getAttribute(ub.sb)):null;for(var
z=0;z<Pa.length;z++){var
C=zb.getRecordNode(Pa[z]);if(sa&&sa.equals(C)&&Ta&&sa.getNextSibling()){sa=sa.getNextSibling();H=this.Sf(sa,ub.Ab);}if(!(this==zb&&Za&&this._isDescendantOrSelf(sa,C))){zb.deleteRecordProperty(Pa[z],ub.Bc,false);var
J;if(Ta){J=true;var
rb=this.adoptRecordBefore(zb,Pa[z],H);}else{J=Za!=null;var
M;if(this.getRenderingModel()==m.REND_HIER&&Za){M=Za.row.getAttribute(ub.sb);}else M=this.getRenderingContext();var
rb=this.adoptRecord(zb,Pa[z],M,Za!=null);}}}if(!J&&!Za)this.repaint();}}}jsx3.EventHelp.reset();}else if(o.rightButton()){var
aa=this.getMenu();if(aa){var
Da=this.ck(aa);if(Da!=null){var
Ma,T;if(Za){Ma=(this.sm())[Za.cell.cellIndex];T=Za.row.getAttribute(ub.sb);}var
tb={objEVENT:o,objMENU:Da,strRECORDID:T,objCOLUMN:Ma};var
jb=this.doEvent(ub.db,tb);if(jb!==false){if(jb instanceof Object&&jb.objMENU instanceof jsx3.gui.Menu)Da=jb.objMENU;Da.showContextMenu(o,this,T);}}}}};q.YG=function(k){this._jsxhU={ctrl:jsx3.gui.isMouseEventModKey(k),shift:k.shiftKey(),alt:k.altKey()};};q.I3=function(){return this._jsxhU!=null?this._jsxhU:{};};q._ebKeyDown=function(b,k){if(this.jsxsupermix(b,k))return;var
Ga=b.keyCode();var
Q=b.hasModifier(true);var
cb=Ga==9&&!Q;var
xa=this.getSelectionModel(1);this.YG(b);if(this.W4()==null){var
ra=this.qt();if(ra){this.Kt(ra.id);}else return;}var
Ja=this.hL();var
Wa=b.srcElement();var
da=Wa&&Wa.id==this.getId()+ub.Cc;var
ya=this.MQ()&&Ja&&this.gJ(Ja.parentNode);var
F=false;if(ya&&(Ga==13||Ga==40||Ga==38||Ja.parentNode.lastChild==Ja&&(cb&&!b.shiftKey()||Ga==39)||Ja.parentNode.firstChild==Ja&&(cb&&b.shiftKey()||Ga==37))){var
K=Ja.cellIndex;if(Ga==13){this.AF(b);var
Ib=Ja.parentNode;if(!Ib)Ib=this.M1(ub.Eb);if(Ib&&Ib.childNodes[K])pa.focus(Ib.childNodes[K]);}else if(this.MQ()==2&&Ga==40){var
w=this.nI();if(w){var
Jb=this.mI(w);if(Jb)pa.focus(Jb.childNodes[K]);}}else if(this.MQ()==1&&Ga==38){var
w=this.gS();if(w){var
Jb=this.uL(w);if(Jb)pa.focus(Jb.childNodes[K]);}}else if(Ja.parentNode.lastChild==Ja&&(cb&&!b.shiftKey()||Ga==39)){pa.focus(Ja.parentNode.firstChild);}else if(Ja.parentNode.firstChild==Ja&&(cb&&b.shiftKey()||Ga==37))pa.focus(Ja.parentNode.lastChild);F=true;}else if(Ja){var
K=Ja.cellIndex;var
S=Ja.parentNode.getAttribute(ub.sb);if(Ga==38||Ga==13&&b.shiftKey()){var
v=this.P2(ub.Dc,Ja,true,K);F=this.JS(v);}else if(Ga==40||Ga==13&&!b.shiftKey()&&xa==0){var
v=this.P2(ub.Ec,Ja,true,K);F=this.JS(v);}else if(Ga==37||cb&&b.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&K==0&&this.getSuppressVScroller()!=1){var
lb=Ja.parentNode.getAttribute(ub.sb);var
y=this.getRecordNode(lb);var
rb=this.Sf(y,ub.Vb);if(rb==1&&y.selectSingleNode(this.hn(ub.wb))){var
Da=this.tX(Ja);this.jA(b,Da,false);F=true;}else{var
v=this.P2(ub.Fc,Ja,true,K);F=this.JS(v);}}if(!F&&!da){var
v=this.P2(ub.Fc,Ja,true,K);if(v!=Ja)F=this.JS(v);}}else if(Ga==39||cb&&!b.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&K==0&&this.getSuppressVScroller()!=1){var
lb=Ja.parentNode.getAttribute(ub.sb);var
y=this.getRecordNode(lb);var
rb=this.Sf(y,ub.Vb);if(rb!=1&&(this.Sf(y,ub.Gc)==ub.pb||y.selectSingleNode(this.hn(ub.wb)))){var
Da=this.tX(Ja);this.jA(b,Da,true);F=true;}else{var
v=this.P2(ub.Hc,Ja,true,K);F=this.JS(v);}}if(!F&&!da){var
v=this.P2(ub.Hc,Ja,true,K);if(v!=Ja)F=this.JS(v);}}else if(Ga==13){this.Jm(b);F=true;}else if(Ga==27){jsx3.log(ub.Ic+this);this.collapseEditSession(b,k);this.focus();F=true;}}if(!F&&cb)pa[b.shiftKey()?ub.Jc:ub.Kc](this.getRendered(b),b);if(F)b.cancelAll();};q.focus=function(){var
nb=this.getRendered();if(nb)jsx3.html.focus(nb.ownerDocument.getElementById(this.getId()+ub.Cc));};q.JS=function(c){if(c){jsx3.sleep(function(){try{pa.focus(c);}catch(Kb){}});return true;}};q.tX=function(i){var
Ua=i.childNodes[0].childNodes[0];var
Ka=this.mI(Ua);if(Ka)return Ka.childNodes[0];};q.xr=function(){return this._jsxP9;};q.SB=function(g){this._jsxP9=g;};q.P2=function(j,s,c,d){var
vb=this.getSelectionModel(1);if(j==ub.Hc){this.SB();if(s.parentNode.lastChild!=s){return s.nextSibling;}else if(s.parentNode.lastChild==s&&vb>0){return s.parentNode.firstChild;}else{j=ub.Ec;s=s.parentNode.firstChild;d=0;}}else if(j==ub.Fc){this.SB();if(s.parentNode.firstChild!=s){return s.previousSibling;}else if(s.parentNode.firstChild==s&&vb>0){return s.parentNode.lastChild;}else{j=ub.Dc;s=s.parentNode.lastChild;d=s.cellIndex;}}var
C=this.AL(j,s.parentNode,c);if(C){if(this.xr()&&(j==ub.Dc||j==ub.Ec)&&C.childNodes.length>1){d=this.xr();this.SB();}var
P=C.childNodes[d];if(P){return P;}else{this.SB(d);return C.childNodes[0];}}else return null;};q.AL=function(n,o,g){if(n==ub.Fc)n=ub.Dc;else if(n==ub.Hc)n=ub.Ec;if(this.getRenderingModel()==m.REND_HIER)return this.XZ(n,o);if(n==ub.Dc&&o.previousSibling&&o.previousSibling.tagName.toLowerCase()!=ub.Lc){return o.previousSibling;}else if(n==ub.Ec&&o.nextSibling){return o.nextSibling;}else{var
G=this.F7(this.kw(o));var
U;var
Xa=this.getRenderingModel()==m.REND_HIER?this.vR():(this.JX()).length;if(n==ub.Dc&&G==0||n==ub.Ec&&G==Xa-1){if(n==ub.Dc&&this.MQ()==2||n==ub.Ec&&this.MQ()==1)return this.mI(this.IT());else return null;}else if(n==ub.Dc&&(U=this.lx(G-1))!=null){var
x=this.getRenderingModel()==m.REND_HIER?1:this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);return this.uL(U);}else if(n==ub.Ec&&(U=this.lx(G+1))!=null)return this.mI(U);}return null;};q.XZ=function(s,j){var
na=j;if(s==ub.Dc){while(na.tagName.toLowerCase()!=ub.C)na=na.parentNode;var
Ga=this.zu(na.parentNode.previousSibling);if(Ga)return Ga;var
va=na.parentNode.parentNode.previousSibling;return this.mI(va);}else if(s==ub.Ec){while(na.tagName.toLowerCase()!=ub.C)na=na.parentNode;var
qb=na.nextSibling;if(qb&&qb.style.display.toLowerCase()!=ub.y){var
F=qb.childNodes[0].childNodes[0];return this.mI(F);}qb=na.parentNode.nextSibling;if(qb){var
F=qb.childNodes[0];return this.mI(F);}return this.f4(na.parentNode);}return null;};q.zu=function(c){if(c){var
S=c.childNodes[1];if(S&&S.style.display.toLowerCase()!=ub.y&&S.childNodes.length){var
Sa=S.lastChild;S=Sa.childNodes[1];if(S&&S.style.display.toLowerCase()!=ub.y&&S.childNodes.length){return this.zu(Sa);}else return this.mI(Sa.childNodes[0]);}return this.mI(c.childNodes[0]);}return null;};q.f4=function(k){var
oa=k.parentNode.parentNode.nextSibling;if(oa){return this.mI(oa.childNodes[0]);}else{var
Za=k.parentNode.parentNode;if(Za)return this.f4(Za);}return null;};q._scrollIntoView=function(c){var
Nb=this.getRendered(c);if(Nb){var
Wa=pa.getRelativePosition(this.vD(Nb),c);var
pb=this.getScrollTop();var
ra=Wa.T;var
Ta=Ha.getScrollSize();var
R=Nb.childNodes[3].style.display==ub.y?0:Ta;var
ab=parseInt(((this.Wl(true)).lg(1)).ld()-R+1);if(!(ra>pb&&ra+Wa.H<pb+ab)){var
qb=Math.abs(ra-pb);var
qa=Math.abs(ra-(pb+ab)+Wa.H+1);if(qa<qb){if(qa==0)qa=Wa.H;this.setScrollTop(pb+qa);}else this.setScrollTop(ra-(Ta+1));}if(this.getScaleWidth()!=1){var
Ib=this.getScrollLeft();var
fa=Wa.L;var
oa=parseInt(((this.Wl(true)).lg(1)).ee()-Ta+1);if(!(fa>Ib&&fa+Wa.W<Ib+(oa-(Ta+1)))){var
Sa=Math.abs(fa-Ib);var
Ia=Math.abs(fa-(Ib+oa));if(Ia<Sa){this.setScrollLeft(fa);}else this.setScrollLeft(fa-(Ta+1));}}}};q.PV=function(p){var
Q=[];var
Wa=0;var
rb=(this.Wl()).lg(0);var
ba=rb.ld();var
ib=this.oC();for(var
X=0;X<p.length;X++){var
qa=p[X].Wl();Wa=Wa+qa.getOffsetWidth();var
xa=this.getResizable()!=0&&X<p.length-1&&p[X].getResizable()!=0;if(xa){var
Fa=this.Fg(ub.fa,ub.Mc,3)+this.Fg(ub.da,ub.Nc,3);var
ua=ub.I;}else{var
Fa=ub.I;var
ua=ub.Oc;}Q.push(ub.Pc+X+ub.Qc+(Wa-4)+ub.Rc+ua+ub.Sc+4+ub.Tc+Ya.SPACE+ub.Uc+ba+ub.Vc+Fa+ub.Na);}return Q.join(ub.I);};q.U7=function(a,o){if(!a.leftButton())return;gb.publish(a);this.collapseEditSession(a,o);var
ca=jsx3.util.arrIndexOf(this.getDescendantsOfType(Ca,true),(this.sm())[Number(o.getAttribute(ub.Wc))]);this.ip(ca);if(typeof this._jsxZ2==ub.H&&(new
Date()).valueOf()-this._jsxZ2.timestamp<200)return;var
D=this.doEvent(ub.Xc,{objEVENT:a,intCOLUMNINDEX:ca});if(!(D===false)){var
db=this.rU();var
ya=parseInt(o.style.left)-this.getScrollLeft();this._jsxresizeorigin={origin:ya};db.style.left=ya+ub.B;La._beginMoveConstrained(a,db,function(i,p){return [i,0];});gb.subscribe(ub.ha,this,ub.Yc);}this._jsxZ2={timestamp:(new
Date()).valueOf()};a.cancelAll();};q._C=function(p,s){if(!p.leftButton())return;gb.publish(p);var
Jb=this.LK(Jb);var
ya=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var
Mb=this.getChild(this.LK());var
tb=Mb.getPath();var
Kb=0;var
fb=this.getXML();var
D=fb.selectNodeIterator(ub.vb+this.hn(ub.wb));while(D.hasNext()){var
Wa=D.next();Kb=Math.max((Wa.getAttribute(tb)).length,Kb);}var
vb=ya*Kb;(this.getChild(this.LK())).setWidth(vb,true);this.YO();p.cancelAll();};q.LK=function(){return this._jsxp4;};q.ip=function(c){this._jsxp4=c;};q.rU=function(){return (this.getRendered()).childNodes[6];};q.yR=function(a){if(!a)a=this.getRendered();return a.childNodes[7];};q.P3=function(o){var
J=this.yR(o);J.style.display=ub.y;J.removeAttribute(ub.lc);J.removeAttribute(ub.pc);};q.Xy=function(f){jsx3.EventHelp.reset();gb.unsubscribe(ub.ha,this,ub.Yc);if(parseInt((this.rU()).style.left)!=this._jsxresizeorigin.origin){var
J=this.Rz();var
X=this.LK();var
oa=this.doEvent(ub.Zc,{objEVENT:f.event,vntWIDTH:J,intCOLUMNINDEX:X,_gipp:1});if(!(oa===false))(this.getChild(this.LK())).setWidth(J,true);this.YO();}(this.rU()).style.left=ub._c;};q.Rz=function(){var
fa=this.rU();var
u=parseInt(fa.style.left);var
Y=this.sm();var
B=this.oC();var
U=(this.getChild(this.LK())).getDisplayIndex();for(var
za=0;za<U;za++)u=u-B[za];u=u+this.getScrollLeft();return u<8?8:u;};q.getResizable=function(){return this.jsxresize;};q.setResizable=function(e){this.jsxresize=e;};q.XF=function(){this.vw();var
ra=Math.max(1,Math.ceil(this.vR(true)/this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)));this.P1(new
Array(ra));};q.Pp=function(a,s){if(this.getParent()==null)return;this.eX();this.endEditSession();this.SB();this.lW();this.Kt();this.XF();var
pb=(this.JX()).length;var
V=this.getPagingModel(0);if(V==0||V==4){var
Ab={painted:1,token:m.getToken(),index:0};if(this.getRenderingModel()==m.REND_HIER)Ab.contextnodes=(this.vD()).childNodes;(this.JX())[0]=Ab;this.WO(Ab,true);if(this.MQ()){var
ta={painted:1,token:m.getToken(),index:-1};this.WO(ta,true);}}else{(this.vD()).innerHTML=ub.I;if(V==3){(this.vD()).style.height=this.LE()+ub.B;var
sa=this.Hx()?this.Hx():0;var
ib;var
Ka=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
Ea=parseInt(Ka/2);var
G=Ka-Ea;for(var
va=sa+G;va>=sa-Ea;va--)if(va>=0&&this.xL(va))(this.S3()).unshift({index:va});this.X1();}else if(V==2){for(var
va=0;va<pb;va++)(this.S3()).push({index:va});if(this.MQ()==2){(this.S3()).unshift({index:-1});}else if(this.MQ()==1)(this.S3()).push({index:-1});this.X1();}else if(V==1){(this.S3()).unshift({index:0});if(this.MQ()==2){(this.S3()).unshift({index:-1});}else if(this.MQ()==1)(this.S3()).push({index:-1});this.X1();}if(!s){var
ca=this.qz(false);if(ca){var
J=this.vD();if(J.lastChild)pa.insertAdjacentHTML(J.lastChild,ub.bb,ca);else J.innerHTML=ca;}}}if(a!==false)this.YO();};q.MQ=function(){return this.getPagingModel()==3||this.getRenderingModel()==m.REND_HIER?0:this.getAutoRow();};q.getAutoRow=function(){return this.jsxautorow;};q.setAutoRow=function(j){this.jsxautorow=j;};q.L2=function(){if(this.getPagingModel()==3){var
Z=this.JX();var
G=(this.vD()).childNodes.length;var
ca=this.getPanelPoolSize(m.DEFAULT_PANEL_POOL_COUNT);var
sa=G-ca;if(sa>0){Qa.trace(ub.ad+ca+ub.bd+sa);var
wb=this.Hx();var
ja=Z.length;if(ja/2>wb){sa=this.dS(Z,ja-1,wb+1,sa,-1);if(sa<=0)return;sa=this.dS(Z,0,wb-1,sa,1);if(sa<=0)return;}else{sa=this.dS(Z,0,wb-1,sa,1);if(sa<=0)return;sa=this.dS(Z,ja-1,wb+1,sa,-1);if(sa<=0)return;}}}};q.dS=function(h,p,d,o,s){for(var
Hb=p;s==-1&&Hb>d||s==1&&Hb<d;Hb=Hb+s){if(h[Hb]!=null){if(this._jsxm4&&this._jsxm4.length){var
D=h[Hb].token;var
mb=new
jsx3.util.List(this._jsxm4);this._jsxm4=(mb.filter(function(e){return D!=e[5].token;})).toArray();}h[Hb]=null;o--;Qa.trace(ub.cd+Hb);var
Ua=this.lx(Hb);if(Ua)pa.removeNode(Ua);}if(o<=0)return 0;}return o;};q.nI=function(){var
ab=this.vD();var
xb=ab.childNodes;for(var
Ma=0;Ma<xb.length;Ma++)if(xb[Ma].tagName.toLowerCase()==ub.C&&xb[Ma].getAttribute(ub.Eb)!=ub.Mb||this.getRenderingModel()==m.REND_HIER&&xb[Ma].getAttribute(ub.Qb)==ub.dd)return this.getRenderingModel()==m.REND_HIER?xb[Ma].firstChild:xb[Ma];};q.gS=function(){var
Ib=this.vD();var
Da=Ib.childNodes;for(var
Cb=Da.length-1;Cb>=0;Cb--)if(Da[Cb].tagName.toLowerCase()==ub.C&&Da[Cb].getAttribute(ub.Eb)!=ub.Mb||this.getRenderingModel()==m.REND_HIER&&Da[Cb].getAttribute(ub.Qb)==ub.dd)return this.getRenderingModel()==m.REND_HIER?Da[Cb].firstChild:Da[Cb];};q.IT=function(){return this.lx(-1);};q.lx=function(o){var
Za=this.getDocument();return Za.getElementById(this.getId()+ub.ed+o);};q.F7=function(k){return parseInt((k.id+ub.I).replace(this.getId()+ub.ed,ub.I));};q.kw=function(p){if(p.parentNode.tagName.toLowerCase()==ub.C)return p.parentNode;return p.parentNode.parentNode;};q.bK=function(c,j){if(!isNaN(c))c=this.lx(c);if(c){var
F=0;for(var
Ea=0;Ea<c.childNodes.length;Ea++)if(c.childNodes[Ea].tagName.toLowerCase()==ub.fd){return c.childNodes[Ea].childNodes[j];}else if(c.childNodes[Ea].tagName.toLowerCase()==ub.W){return c.childNodes[j+F];}else F++;}return null;};q.M1=function(o){var
Q=this.getId()+ub.gd+o;var
B=this.getDocument();return B.getElementById(Q);};q.X2=function(n){var
Db=this.M1(n);return Db?(this.kw(this.M1(n))).parentNode:null;};q.v8=function(e,o){var
na=this.sm();for(var
_=0;_<na.length;_++)if(na[_].getPath()==o){var
K=this.getId()+ub.gd+e+ub.gd+_;var
Ja=this.getDocument();return Ja.getElementById(K);}return null;};q.jO=function(k,e){var
qb=this.M1(k);return qb?qb.childNodes[e]:null;};q.qt=function(){var
ea=this.bK(0,0);return ea?ea.childNodes[0]:null;};q.mI=function(f){return this.bK(f,0);};q.uL=function(l){var
xa=this.bK(l,0);return xa?xa.parentNode.lastChild:null;};q.xD=function(k,b){this.collapseEditSession(k,b);};q.Jt=function(j,o){this.collapseEditSession(j,o);};q.FS=function(c,j){var
ea=j.parentNode;var
oa=ea.childNodes[0].childNodes[0];var
W=ea.childNodes[1].childNodes[0];var
Ib=j.scrollLeft;ea.childNodes[1].scrollLeft=0;oa.style.left=ub.hd+Ib+ub.B;W.style.left=ub.hd+Ib+ub.B;if(c)this.doEvent(ub.id,{objEVENT:c,strDIRECTION:ub.jd,intPOSITION:Ib});};q.RI=function(c,j){var
Y=this.vD(j.parentNode);Y.parentNode.scrollTop=0;this._jsxDY=j.scrollTop;Y.style.top=ub.hd+this._jsxDY+ub.B;var
wb=this.Hx();if(this.getPagingModel(0)==3){var
B=this.getScrollInfoLabel(this.Nk(ub.kd,m));if(B!=ub.I){(this.eI(j.parentNode)).style.display=ub.z;window.clearTimeout(this._jsxKJ);var
Kb=this;this._jsxKJ=window.setTimeout(function(){if(j&&j.parentNode)(Kb.eI(j.parentNode)).style.display=ub.y;},1000);jsx3.sleep(function(){if(this.getParent()==null)return;if(j&&j.parentNode){var
W=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
da=parseInt(this._jsxDY/W)+1;var
Ka=(this.Wl(true)).ld();var
xb=this.vR();var
H=da+parseInt(Ka/W)-1;if(H>xb)H=xb;var
Ga=new
jsx3.util.MessageFormat(B);(this.eI(j.parentNode)).childNodes[0].innerHTML=Ga.format(da,H,xb);}},ub.ld+this.getId(),this);}var
Cb;var
Aa=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
yb=parseInt(Aa/2);var
V=Aa-yb;for(var
Q=wb+V;Q>=wb-yb;Q--)if(Q>=0&&this.xL(Q)){(this.S3()).unshift({index:Q});if((this.S3()).length>Aa)var
mb=(this.S3()).pop();Cb=true;}if(Cb)this.X1(Y);}this.doEvent(ub.id,{objEVENT:c,strDIRECTION:ub.md,intPOSITION:this._jsxDY});};q.eI=function(c){return c.childNodes[5];};q.Hx=function(){return parseInt(this._jsxDY/(this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)*this.getRowHeight(m.DEFAULT_ROW_HEIGHT)));};q.X1=function(k){jsx3.sleep(function(){if(this.getParent()==null)return;if((this.S3()).length){var
zb=(this.S3()).shift();if(this.xL(zb.index))this._3(this.S5(zb.index),k,zb.index);if((this.S3()).length)this.X1(k);}},ub.nd+this.getId(),this);};q.S3=function(){return this._jsxTv;};q.vw=function(){this._jsxTv=[];};q._3=function(r,j,l){if(!j)j=this.vD();if(j){var
da={index:l,painted:1,token:m.getToken()};(this.JX())[l]=da;Qa.trace(ub.od+l);pa.insertAdjacentHTML(j,ub.bb,r);this.WO(da);this._Z(j);var
tb=this;window.setTimeout(function(){if(tb.getParent()==null)return;tb.L2();},this.getReaperInterval(m.DEFAULT_REAPER_INTERVAL));}};q.getIterableRows=function(){var
ha,Ja;var
ya=[];Ja=this.getRendered();if(Ja)if(this.getRenderingModel()==m.REND_HIER){var
x=this.getRenderingContext(ub.Kb);var
L=this.getRecordNode(x);var
ib=[];for(var
z=L.selectNodeIterator(ub.Ub+this.hn(ub.wb));z.hasNext();){var
Lb=z.next();var
wb=this.Sf(Lb,ub.Ab);ib.push(this.X2(wb));}ya=this.EH({contextnodes:ib});}else{var
db=Ja.childNodes[1].childNodes[0].childNodes;var
Ga;for(var
z=0;z<db.length;z++){Ga=db[z];Ga=this.mI(Ga);if(Ga){Ga=Ga.parentNode;var
Ma=Ga.childNodes.length;for(var
_=0;_<Ma;_++){var
eb=Ga.childNodes[_];if(eb.tagName.toLowerCase()==ub.W)ya.push(eb);}}}}return ya;};q.EH=function(g){var
Ta=[];if(g.contextnodes){for(var
yb=0;yb<g.contextnodes.length;yb++)if(g.contextnodes[yb].getAttribute(ub.Qb)==ub.dd)Ta.push.apply(Ta,this.TF(g.contextnodes[yb]));}else{var
Ua=g.index;var
Db=this.lx(Ua);if(Db){Db=this.mI(Db);if(Db){Db=Db.parentNode;var
ka=Db.childNodes.length;for(var
wb=0;wb<ka;wb++){var
bb=Db.childNodes[wb];if(bb.tagName.toLowerCase()==ub.W)Ta.push(bb);}}}}return Ta;};q.TF=function(p,r){if(r==null)r=[];r.push(this.mI(p.firstChild));if(p.lastChild){var
Ka=p.lastChild.childNodes;for(var
Aa=0;Aa<Ka.length;Aa++)if(Ka[Aa].tagName)this.TF(Ka[Aa],r);}return r;};m.JU=0;m.getToken=function(){m.JU+=1;return m.JU;};q.getContentElement=function(o,f){var
ra=this.v8(o,f);if(ra)if(ra.cellIndex==0&&this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0){var
va=ra.childNodes[0].childNodes[0];while(va&&va.tagName.toLowerCase()!=ub.W)va=va.childNodes[0];if(va)return va.lastChild.firstChild;}else return ra.childNodes[0];};q.WO=function(d,f){var
Ab=new
jsx3.util.Timer(m.jsxclass,this);if(!jsx3.$A.is(this._jsxm4))this._jsxm4=[];var
L=this._jsxm4;if(this.vR()==0&&!this.MQ())return;var
Lb=this.getServer();var
K=this.sm();var
ab=new
Array(K.length);var
Ua=false;for(var
zb=0;zb<K.length;zb++){var
Ta=K[zb].Rm();if(Ta){ab[zb]=Ta;Ua=true;}}if(!Ua)return;var
G=this.EH(d);if(d.contextnodes){d.index=true;delete d[ub.pd];}var
Va=G.length;var
hb=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0;var
N=[];for(var
zb=0;zb<K.length;zb++){var
Ta=ab[zb];if(Ta)N.push([zb,Ta,K[zb]]);}for(var
oa=0;oa<Va;oa++){var
y=G[oa];var
la=y.getAttribute(ub.sb);var
wb=y.getAttribute(ub.qd);for(var
Ba=0;Ba<N.length;Ba++){var
aa=null;var
zb=N[Ba][0];var
Ta=N[Ba][1];var
U=N[Ba][2];if(hb&&zb==0){var
_=y.childNodes[0].childNodes[0].childNodes[0];while(_&&_.tagName.toLowerCase()!=ub.W)_=_.childNodes[0];if(_)aa=_.lastChild.firstChild;}else if(y.childNodes[zb])aa=y.childNodes[zb].childNodes[0];if(aa)if(f){Ta.format(aa,la,this,U,wb,Lb);}else L[L.length]=[Ta,aa,la,U,wb,d];}}if(N.length>0&&G.length>0)jsx3.sleep(this.cJ,ub.rd+this.getId(),this);Ab.log(ub.sd);};q.cJ=function(){if(this.getParent()==null){this._jsxm4=[];return;}var
hb=new
jsx3.util.Timer(m.jsxclass,this);var
Ka=this.getServer();var
ia=(new
Date()).getTime();var
Z=ia;while(this._jsxm4.length>0&&Z-ia<m.O9){var
P=this._jsxm4.shift();var
K=P[5];var
M=K.index;if(!M){var
ba=(this.JX())[K.index];M=ba!=null&&ba.token==K.token;}if(M){P[0].format(P[1],P[2],this,P[3],P[4],Ka);Z=(new
Date()).getTime();}}if(this._jsxm4.length>0)jsx3.sleep(this.cJ,ub.rd+this.getId(),this);hb.log(ub.td);};q.vD=function(d){if(!d)d=this.getRendered();return d?d.childNodes[1].childNodes[0]:null;};q.LE=function(){var
ea=this.getPagingModel(0);var
ja=null;if(ea==3){ja=this.vR()*this.getRowHeight(m.DEFAULT_ROW_HEIGHT);}else{var
Kb=this.vD();ja=Kb?parseInt(Kb.offsetHeight):0;}return ja;};q.xL=function(r){if(r==-1||r>=0&&r<(this.JX()).length&&(this.JX())[r]==null){var
qa=this.getDocument();var
Ba=qa.getElementById(this.getId()+ub.ed+r);return !Ba;}return false;};q.S5=function(l){var
Nb=this.Wl(true);var
xa=this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);var
Wa=this.getPagingModel(0);if(Wa==3){var
ya=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
hb=ub.ud+xa*ya*l+ub.Rc;var
Da=xa*l;var
C=Da+xa+1;}else{var
hb=ub.Xb;var
B=ub.I;if(Wa==2){var
Da=xa*l;var
C=Da+xa+1;}else{var
Ba=this.vR();var
Da=0;var
C=Ba+1;}}var
Bb={};Bb.jsx_min_exclusive=Da;Bb.jsx_max_exclusive=C;Bb.jsx_panel_index=l;Bb.jsx_panel_css=hb;Bb.jsx_column_widths=this.x8();Bb.jsx_rendering_context=this.getRenderingContext(ub.Kb);Bb.jsx_mode=l==-1?ub.vd:ub.wd;Qa.trace(ub.xd+Da+ub.yd+C);return this.doTransform(Bb);};q.resetXmlCacheData=function(n){if(this.getPagingModel()==3)this.setScrollTop(0);this.Bk(true);this.jsxsupermix(n);};q.resetCacheData=function(n){if(this.getPagingModel()==3)this.setScrollTop(0);this.Bk(true);this.jsxsupermix(n);};q.setXMLId=function(d){this.Bk(true);return this.jsxsupermix(d);};q.repaint=function(){this.Bk(true);return this.jsxsuper();};q.setXMLString=function(i){this.Bk(true);return this.jsxsupermix(i);};q.setXMLURL=function(g){this.Bk(true);return this.jsxsupermix(g);};q.getXSL=function(){return this.yk();};q.yk=function(k){var
ha=new
jsx3.util.Timer(m.jsxclass,this);var
S=m.Ip||(jsx3.getSharedCache()).getOrOpenDocument(m.DEFAULTXSLURL,null,jsx3.xml.XslDocument.jsxclass);if(k)return S;var
N=(this.getServer()).getCache();var
zb=N.getDocument(this.getXSLId());if(zb==null){zb=S.cloneDocument();N.setDocument(this.getXSLId(),zb);var
Q=this.getRenderingModel(m.REND_DEEP);var
Eb=this.sm();var
na=zb.selectSingleNode(ub.zd);var
tb=zb.selectSingleNode(ub.Ad);var
u=zb.selectSingleNode(ub.Bd);var
Sa=this.x8();var
Jb=ub.Cd+this.Fg(ub.Dd,ub.Ed)+this.Fg(ub.Fd,ub.Gd);for(var
la=0;la<Eb.length;la++){var
B=Eb[la];var
rb=B.getId();var
ka=(B.Wl(true)).lg(1);var
qa=ka.lg(0);var
aa=la==0&&Q==m.REND_HIER?ub.Hd:ub.I;ka.setAttributes(Jb+aa+ub.Id+la+ub.Jd);ka.setStyles(B.Tg()+B.bj()+B.Fm()+B.Ih()+B.ln()+B.Nm()+B.Wb()+ub.Kd);qa.setAttributes(ub.Ld);qa.setStyles(B.Zi()+B.Om());var
wb=m.AV.cloneDocument();wb.setAttribute(ub.Md,ub.Nd+rb+ub.Od);(wb.selectSingleNode(ub.Pd)).setAttribute(ub.Qd,rb+ub.Rd);u.appendChild(wb);if(Q==m.REND_HIER&&la==0&&this.getRenderNavigators(1)!=0){var
wa=m.vV.format(ub.Sd);var
ab=zb.selectSingleNode(ub.Td);ab.setAttribute(ub.Qd,rb+ub.Rd);var
Gb=(qa.paint()).join(ub.I);wb.loadXML(Gb);if(!wb.hasError()){(ab.getParent()).appendChild(wb);wb.appendChild(ab);}else Qa.error(ub.Ud+B+ub.Vd+wb.getError());}else var
wa=m.vV.format(rb+ub.Rd);var
wa=((ka.paint()).join((qa.paint()).join(wa))).replace(ub.Wd,ub.Xd);var
J=ka.getPaintedWidth();var
Aa=la==0?Sa-(this.oC())[0]+J:J;var
cb=m.RB.format(rb,wa,String(J),String(Aa));wb.loadXML(cb);if(!wb.hasError()){zb.appendChild(wb);}else Qa.error(ub.Ud+B+ub.Vd+wb.getError());var
ba=(B.getValueTemplate(m.Column.TEMPLATES[ub.Yd])).replace(ub.Zd,ub._d+B.getPath());var
oa=B.getEditMask();if(oa!=null&&m.ZJ(oa)&&oa.emGetType()==m.EditMask.FORMAT){var
C=new
jsx3.xml.Document();ba=ba.replace(ub.ae,(oa.emPaintTemplate()).replace(ub.Zd,ub._d+B.getPath())+ub.be);}wb.loadXML(ba);if(!wb.hasError()){wb.setAttribute(ub.Qd,rb+ub.Rd);zb.appendChild(wb);}wb=m.tQ.cloneNode(true);wb.setAttribute(ub.Qd,rb);if(la==0)na.insertBefore(wb,tb.getParent());else tb.appendChild(wb);}}ha.log(ub.ce);return zb;};m.gF=function(b){return b&&b.getDisplay()!=ub.y;};q.sm=function(){return (this.getDescendantsOfType(Ca,true)).filter(m.gF);};q.doTransform=function(e){if(!e)e={};e.jsx_id=this.getId();e.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);e.jsx_paging_model=this.getPagingModel(0);var
C=this.getUriResolver();if(e.jsx_rendering_model==ub.t){var
Hb=this.getIcon(m.ICON),U=this.getIconMinus(m.ICON_MINUS),V=this.getIconPlus(m.ICON_PLUS);if(e.jsx_icon==null)e.jsx_icon=Hb?C.resolveURI(Hb):ub.I;if(e.jsx_icon_minus==null)e.jsx_icon_minus=U?C.resolveURI(U):ub.I;if(e.jsx_icon_plus==null)e.jsx_icon_plus=V?C.resolveURI(V):ub.I;e.jsx_transparent_image=Ya.SPACE;}e.jsx_sort_path=this.getSortPath();e.jsx_sort_direction=this.getSortDirection();e.jsx_sort_type=this.getSortType();e.jsx_selection_model=this.getSelectionModel(1);e.jsx_selection_bg_url=this.YZ();var
ra=this.getXSLParams();for(var fa in ra)e[fa]=ra[fa];if(e.jsx_use_categories&&this.getRenderingModel()!=m.REND_HIER)delete e[ub.de];e.jsx_column_count=(this.sm()).length;e.jsxpath=jsx3.getEnv(ub.ee);e.jsxpathapps=jsx3.getEnv(ub.fe);e.jsxpathprefix=(this.getUriResolver()).getUriPrefix();e.jsxappprefix=(this.getServer()).getUriPrefix();var
y=this.jsxsupermix(e);y=this.vo(y);return !e.jsx_return_at_all_costs&&y.indexOf(ub.ge)==-1?ub.I:y;};q.onXmlBinding=function(j){this.jsxsupermix(j);this.repaintData();};q.getXML=function(){var
F=this.jsxsupermix();if(!this._jsxgU){var
P=!F.hasError()&&F.getNamespaceURI()==jsx3.app.Cache.XSDNS&&F.getNodeName()==ub.he;if(P){var
Ka=this.getServer();if(Ka){this._jsxgU=true;(Ka.getCache()).subscribe(this.getXMLId(),this,ub.ie);}}}return F;};q.kH=function(a){a.target.unsubscribe(a.subject,this);this._jsxgU=false;this.Bk(true);jsx3.sleep(this.Pp,ub.Oa+this.getId(),this);};q.Bk=function(f){if(!this.getServer())return;delete this[ub.je];if(!f){this.resetXslCacheData();this.clearBoxProfile(true);delete this[ub.w];}};q.getSortedIds=function(){var
Ja=this.doTransform({jsx_mode:ub.ke,jsx_rendering_context:this.getRenderingContext(ub.Kb),jsx_return_at_all_costs:true});return Ja.search(ub.le)>-1?window.eval(ub.me+RegExp.$1+ub.ne):[];};q.vR=function(r){if(r)delete this[ub.je];if(this._jsxBF){return this._jsxBF.maxlen;}else{if((this.getXML()).hasError())return 0;var
za={};za.jsx_mode=ub.oe;za.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);za.jsx_rendering_context=this.getRenderingContext(ub.Kb);(jsx3.$H((this.getSchema()).getProps())).each(function(n,c){za[ub.pe+n]=c;});var
S=this.yk(true);S.reset();S.setParams(za);var
oa=S.transform(this.getXML());var
ka=oa.search(ub.qe)>-1?parseInt(RegExp.$1):0;Qa.trace(ub.re+ka);this._jsxBF={maxlen:ka};if(this.getPagingModel()==3){var
aa=this.Wl();var
na=this.getRendered();if(aa&&na){aa=(aa.lg(2)).lg(0);var
sa=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*ka;aa.recalculate({height:sa+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},na.childNodes[2].childNodes[0],null);}}return ka;}};q.JX=function(){return this._jsxcN||[];};q.P1=function(b){this._jsxcN=b;};q.getSelectionModel=function(j){return this.jsxselectionmodel!=null?this.jsxselectionmodel>2?0:this.jsxselectionmodel:j!=null?j:null;};q.setSelectionModel=function(i){this.jsxselectionmodel=i;};q.getRowHeight=function(r){return this.jsxrowheight!=null?this.jsxrowheight:r!=null?r:null;};q.setRowHeight=function(n,s){this.jsxrowheight=n;this.Bk();if(!s)this.repaint();};q.getRowsPerPanel=function(g){return this.jsxrowsperpanel?this.jsxrowsperpanel:g?g:null;};q.setRowsPerPanel=function(p,c){this.jsxrowsperpanel=p;this.Bk(true);if(!c)this.repaint();};q.getPanelQueueSize=function(l){return this.jsxpaintqueuesize?this.jsxpaintqueuesize:l?l:null;};q.setPanelQueueSize=function(e){this.jsxpaintqueuesize=e;};q.getReaperInterval=function(l){return this.jsxreaperinterval?this.jsxreaperinterval:l?l:null;};q.setReaperInterval=function(h){this.jsxreaperinterval=h;};q.getPanelPoolSize=function(f){return this.jsxpanelpoolsize?this.jsxpanelpoolsize:f?f:null;};q.setPanelPoolSize=function(d){this.jsxpanelpoolsize=d;this.Bk(true);};q.getPagingModel=function(j){if(this.getRenderingModel()==m.REND_HIER&&this.jsxpagingmodel!=4){Qa.trace(ub.se);return 0;}return !isNaN(this.jsxpagingmodel)?this.jsxpagingmodel:!isNaN(j)?j:null;};q.setPagingModel=function(d){this.jsxpagingmodel=d;this.Bk();};q.getHeaderHeight=function(o){return this.jsxheaderheight!=null?Number(this.jsxheaderheight):o?o:null;};q.setHeaderHeight=function(e,i){this.jsxheaderheight=e;this.clearBoxProfile(true);if(!i)this.repaint();};q.getScrollInfoLabel=function(r){return this.jsxscrollinfolabel!=null?this.jsxscrollinfolabel:r?r:null;};q.setScrollInfoLabel=function(a){this.jsxscrollinfolabel=a;};q.getScrollLeft=function(){var
Jb=this.getRendered();return Jb?Jb.childNodes[3].scrollLeft:0;};q.setScrollLeft=function(l){var
ma=this.getRendered();if(ma&&ma.childNodes[3]){ma.childNodes[3].scrollLeft=l;if(ma.childNodes[3].style.display==ub.y)this.FS(false,ma.childNodes[3]);}};q.getScrollTop=function(){return this._jsxDY?this._jsxDY:0;};q.OS=function(){var
K=this.getRendered();return K&&K.childNodes[2]?K.childNodes[2].scrollTop:this.getScrollTop();};q.setScrollTop=function(l,d){if(l<0)l=0;d=this.getRendered(d);if(d&&d.childNodes[2]){if(d.childNodes[2].scrollTop==0&&l==0)d.childNodes[2].scrollTop=1;d.childNodes[2].scrollTop=l;}};q.synchronizeVScroller=function(){this._Z();};q._Z=function(r){if(!r)r=this.vD();if(!r)return;if(this.getPagingModel()!=3){var
vb=((this.Wl(true)).lg(2)).lg(0);vb.recalculate({height:r.offsetHeight+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},r.parentNode.parentNode.childNodes[2].childNodes[0],null);var
ha=this.OS();if(this.getScrollTop()!=ha){this.setScrollTop(ha);r.style.top=ub.hd+ha+ub.B;}}else if(this.getScrollTop()!=this.OS())this.setScrollTop(this.OS()-1);if(r.parentNode.parentNode.childNodes[3].style.display==ub.y){this.setScrollLeft(0);}else if(this.getScaleWidth()!=1){var
Db=this.getScrollLeft();var
jb=!r.offsetWidth?Db:r.offsetWidth-r.parentNode.parentNode.offsetWidth;if(Db>jb)this.setScrollLeft(jb);}this.zX();};q.zX=function(){var
pb=this.getRendered();if(pb)pb.childNodes[4].style.display=this.getSuppressVScroller(0)==1?ub.y:ub.I;};q.getScaleWidth=function(){return this.jsxscalewidth;};q.setScaleWidth=function(g){this.jsxscalewidth=g;this.Qf();return this;};q.onSetChild=function(b){if(b instanceof m.Column||!(b instanceof jsx3.gui.Painted)){this.Bk();return true;}return false;};q.paintChild=function(f,c){if(!c)this.repaint();};q.onRemoveChild=function(p,c){this.jsxsuper(p,c);this.Bk();this.repaint();};q.getHeaderBorder=function(){return this.jsxheaderborder;};q.setHeaderBorder=function(a){this.jsxheaderborder=a;this.clearBoxProfile(true);this.repaintHead();};q.getBodyBorder=function(){return this.jsxbodyborder;};q.setBodyBorder=function(p,b){this.jsxbodyborder=p;this.Bk();if(!b)this.repaint();};q.getValue=function(){var
O=this.getSelectionModel();if(O==2){return this.getSelectedIds();}else return (this.getSelectedIds())[0];};q.doValidate=function(){var
Ia=(this.getSelectedNodes()).size()>0||this.getRequired()==0;this.setValidationState(Ia?1:0);return this.getValidationState();};q.getRenderingModel=function(n){return this.jsxrenderingmodel?this.jsxrenderingmodel:n?n:null;};q.setRenderingModel=function(h,c){this.jsxrenderingmodel=h;this.Bk();if(!c)this.repaint();};q.getRenderingContext=function(h){return this.jsxrenderingcontext!=null&&this.jsxrenderingcontext!=ub.I?this.jsxrenderingcontext:h!=null?h:null;};q.setRenderingContext=function(l,s){this.jsxrenderingcontext=l;this.Bk(true);if(!s)this.repaint();};q.getSuppressHScroller=function(d){return this.jsxsuppresshscroll!=null?this.jsxsuppresshscroll:d!=null?d:null;};q.setSuppressHScroller=function(c){this.jsxsuppresshscroll=c;var
Fa=this.getRendered();if(Fa&&Fa.childNodes[3]){Fa.childNodes[3].style.display=c!=1?ub.z:ub.y;this.zX();}};q.getSuppressVScroller=function(j){return this.jsxsuppressvscroll!=null?this.jsxsuppressvscroll:j!=null?j:null;};q.setSuppressVScroller=function(k,c){this.jsxsuppressvscroll=k;this.Bk();if(c){var
O=this.getRendered();if(O&&O.childNodes[2]){O.childNodes[2].style.display=k!=1?ub.z:ub.y;this.zX();}}else this.repaint();};q.getFixedColumnIndex=function(d){return this.jsxfixedcolumnindex!=null?this.jsxfixedcolumnindex:d!=null?d:null;};q.setFixedColumnIndex=function(o){this.jsxfixedcolumnindex=o;};q.getRenderNavigators=function(a){return this.jsxrendernavigators!=null?this.jsxrendernavigators:a!=null?a:null;};q.setRenderNavigators=function(o,r){this.jsxrendernavigators=o;this.Bk();if(!r)this.repaint();};q.getIcon=function(b){return this.jsxicon!=null&&this.jsxicon!=ub.I?this.jsxicon:b?b:null;};q.setIcon=function(e){this.jsxicon=e;};q.getIconMinus=function(d){return this.jsxiconminus!=null&&this.jsxiconminus!=ub.I?this.jsxiconminus:d?d:null;};q.setIconMinus=function(d){this.jsxiconminus=d;};q.getIconPlus=function(s){return this.jsxiconplus!=null&&this.jsxiconplus!=ub.I?this.jsxiconplus:s?s:null;};q.setIconPlus=function(h){this.jsxiconplus=h;};q.deleteRecord=function(k,f){var
M=this.getXML();var
kb=M.selectSingleNode(this.Ee(k));if(kb!=null){kb=(kb.getParent()).removeChild(kb);if(f!==false){this.redrawRecord(k,0);if(this.getRenderingModel()!=m.REND_HIER){var
B=kb.selectNodes(ub.te+this.hn(ub.wb));for(var
ua=B.size()-1;ua>=0;ua--){var
la=B.get(ua);this.redrawRecord(this.Sf(la,ub.Ab),0);}}}return kb;}return null;};q.insertRecordProperty=function(i,c,j,d){if(c==ub.sb){var
G=this.jsxsupermix(i,c,j,false);var
ga=this.M1(i);if(ga){ga.setAttribute(ub.sb,j);ga.setAttribute(ub.ue,j);var
Y=this.getId()+ub.gd+j;ga.setAttribute(ub.Ab,Y);var
ka=ga.childNodes;Y=Y+ub.gd;for(var
Ka=0;Ka<ka.length;Ka++)ka[Ka].setAttribute(ub.Ab,Y+Ka);if(d!=false)this.redrawRecord(j,2);return G;}}else return this.jsxsupermix(i,c,j,d);};q.redrawCell=function(h,f,b,o){var
z=f.getDisplayIndex();var
bb=this.jO(h,z);if(bb){var
Va;if(this.getRenderingModel()==m.REND_HIER){var
y=this.X2(h);var
hb=y.parentNode;var
Jb=this.D5(h,hb.getAttribute(ub.Yb));var
la=new
jsx3.xml.Document();if(!o){o=la.loadXML(Jb);while(o&&o.getBaseName()!=ub.W)o=o.getFirstChild();if(!o)return;}if(f.getChildIndex()==0&&this.getRenderNavigators(1)!=0){var
ka=o.getFirstChild();while(ka&&ka.getBaseName()!=ub.W)ka=ka.getFirstChild();var
wb=bb.childNodes[0];while(wb&&wb.tagName.toLowerCase()!=ub.W)wb=wb.childNodes[0];if(!ka||!wb)return;Va=this.rG(ka,wb,2);}else Va=this.rG(o,bb.parentNode,z);}else{var
wb=bb.parentNode;if(!o)o=this.SY(h);if(this.getRenderingModel()==m.REND_HIER){while(o&&o.getBaseName()!=ub.W)o=o.getFirstChild();if(!o)return;}Va=this.rG(o,wb,z);}Va=Va.childNodes[0];var
Cb=f.Rm();if(Cb){var
_a=bb.parentNode;Cb.format(Va,_a.getAttribute(ub.sb),this,f,_a.getAttribute(ub.qd),this.getServer());}if(!b){var
ja=this.sm();var
Sa=new
RegExp(ub.ve+f.getPath()+ub.we);for(var
t=0;t<ja.length;t++){var
N=ja[t].getTriggers()+ub.I;if(ja[t]!=f&&(ja[t].getPath()==f.getPath()||N.search(Sa)>=0))this.redrawCell(h,ja[t],true,o);}}}};q.redrawMappedCells=function(k,c){var
R=this.sm();for(var
wa=0;wa<R.length;wa++)if(R[wa].getPath()==c){this.redrawCell(k,R[wa],false);return;}};q.D5=function(e,c){return this.doTransform({jsx_mode:ub.Tb,jsx_panel_css:ub.Xb,jsx_column_widths:this.x8(),jsx_context_index:c?c:1,jsx_rendering_context:this.Sf((this.getRecordNode(e)).getParent(),ub.Ab),jsx_rendering_context_child:e});};q.redrawRecord=function(j,b,c){var
Va=this.vD();if(j!=null&&b==2){if(this.getRenderingModel()==m.REND_HIER){var
Hb=this.X2(j);var
ea=Hb.parentNode;var
lb=this.D5(j,ea.getAttribute(ub.Yb));pa.setOuterHTML(Hb,lb);Hb=this.X2(j);var
kb={painted:1,token:m.getToken(),contextnodes:[Hb]};(this.JX())[0]=kb;this.WO(kb);}else{var
J=this.Ex(this.M1(j),j);this.Z0(J,j);}}else if(j!=null&&b==0){if(this.getRenderingModel()==m.REND_HIER){var
qb=this.X2(j);if(qb){var
O=qb.parentNode;pa.removeNode(qb);if(O.childNodes.length==0){var
P=O.previousSibling;var
ca=this.mI(P);if(ca){var
xb=ca.getAttribute(ub.sb);this.redrawRecord(xb,2);}}this._Z();}}else if(this.getPagingModel(0)!=3){var
qb=this.M1(j);if(qb){var
y=qb.parentNode;if(y.childNodes.length==1){if(y.tagName.toLowerCase()!=ub.C)y=y.parentNode;pa.removeNode(y);}else{var
C=qb.nextSibling;if(qb.parentNode.firstChild==qb&&C)for(var
wb=0;wb<qb.childNodes.length;wb++)C.childNodes[wb].style.width=qb.childNodes[wb].style.width;pa.removeNode(qb);this._Z();}}}else this.repaint();}else if(j!=null&&b==3){if(this.getPagingModel(0)!=3){var
_=this.getRecordNode(j);var
K=_.getNextSibling();var
zb=this.Sf(K,ub.Ab);if(this.getRenderingModel()==m.REND_HIER){var
ob=this.X2(zb);var
lb=this.D5(j,ob.parentNode.getAttribute(ub.Yb));pa.insertAdjacentHTML(ob,ub.xe,lb);var
kb={painted:1,token:m.getToken(),contextnodes:[ob.previousSibling]};(this.JX())[0]=kb;this.WO(kb);this._Z(Va);}else{var
D=this.M1(zb);var
ba=D.parentNode;var
J=this.TY(ba,j);ba.insertBefore(J,D);if(ba.firstChild==J)for(var
wb=0;wb<J.childNodes.length;wb++){J.childNodes[wb].style.width=D.childNodes[wb].style.width;D.childNodes[wb].style.width=ub.I;}this.Z0(J,j);this._Z(Va);if(c!==false)this.U5(_);}}else this.repaint();}else if(j!=null&&b==1)if(this.getPagingModel(0)!=3){if(this.getRenderingModel()==m.REND_HIER){var
Jb=this.Sf((this.getRecordNode(j)).getParent(),ub.Ab);var
Hb=this.X2(Jb);var
ea=Hb.lastChild;if(this.GZ(ea)){this.toggleItem(Jb,true);}else{var
lb=this.D5(j,ea.getAttribute(ub.Yb));pa.insertAdjacentHTML(ea,ub.bb,lb);var
kb={painted:1,token:m.getToken(),contextnodes:[ea.lastChild]};(this.JX())[0]=kb;this.WO(kb);this._Z(Va);}}else{var
ba=this.gS();if(ba==null||ba.firstChild==null){this.repaintData();}else{if(ba.firstChild.tagName.toLowerCase()==ub.fd)ba=ba.firstChild;var
J=this.TY(ba,j);ba.appendChild(J);this.Z0(J,j);this._Z(Va);if(c!==false)this.U5(this.getRecordNode(j));}}}else this.repaint();};q.U5=function(f){if(this.getRenderingModel(m.REND_DEEP)==m.REND_DEEP){var
Va=f.selectNodeIterator(ub.te+this.hn(ub.wb));while(Va.hasNext()){f=Va.next();this.redrawRecord(this.Sf(f,ub.Ab),1,false);}}};q.GZ=function(n){return n.childNodes.length==0||n.childNodes.length==1&&n.childNodes[0].nodeType!=1;};q.Z0=function(c,r){if(!c)return;var
u=this.sm();for(var
Fa=0;Fa<u.length;Fa++){var
Gb=u[Fa];var
Xa=Gb.Rm();if(Xa){var
Ea=c.childNodes[Fa].childNodes[0];Xa.format(Ea,r,this,Gb,c.getAttribute(ub.qd),this.getServer());}}};q.TY=function(p,j){var
ca=this.getDocument();var
va=this.SY(j);var
aa=ca.createElement(ub.W);m._H(va,aa,true);for(var
ob=va.getChildIterator();ob.hasNext();){va=ob.next();var
ma=ca.createElement(ub.ye);m._H(va,ma,true);aa.appendChild(ma);ma.innerHTML=(va.getFirstChild()).getXML();}return aa;};q.SY=function(n){var
ra={};ra.jsx_column_widths=this.x8();ra.jsx_rendering_context=this.Sf((this.getRecordNode(n)).getParent(),ub.Ab);ra.jsx_rendering_context_child=n;ra.jsx_mode=ub.Tb;var
Gb=this.doTransform(ra);var
L=new
jsx3.xml.Document();L.loadXML(Gb);return L.getRootNode();};q.Ex=function(j,f){if(!j)return;var
va=this.SY(f);m._H(va,j,false);var
_=0;for(var
ob=va.getChildIterator();ob.hasNext();){va=ob.next();var
ma=j.childNodes[_];m._H(va,ma,false);ma.innerHTML=(va.getFirstChild()).getXML();_++;}return j;};q.rG=function(r,i,a){var
tb=r.selectSingleNode(ub.ze+(a+1)+ub.ne);var
D=i.childNodes[a];m._H(tb,D,false);D.innerHTML=(tb.getFirstChild()).getXML();return D;};m._H=function(h,o,n){var
Oa=h.getAttributeNames();var
Va=ub.Ae;var
ta=ub.Be;for(var
w=0;w<Oa.length;w++){var
Q=Oa[w];var
sb=h.getAttribute(Q);if(Q.match(Va)){if(jsx3.CLASS_LOADER.IE){pa.addEventListener(o,Q.toLowerCase(),sb);}else o.setAttribute(Q.toLowerCase(),sb);}else if(Q==ub.dc){o.className=sb;}else if(Q==ub.fc){jsx3.gui.Painted.Ql(o,n?sb:sb.replace(ta,ub.I));}else o.setAttribute(Q,sb);}};q.setValue=function(b){this.deselectAllRecords();if(b){if(jsx3.$A.is(b)){if(this.getSelectionModel()!=2&&b.length>1)throw new
jsx3.IllegalArgumentException(ub.Ce,b);}else b=[b];for(var
Aa=0;Aa<b.length;Aa++)this.selectRecord(b[Aa]);this.revealRecord(b[0]);}else{this.synchronizeVScroller();this.setScrollTop(0);}return this;};q.getMaskProperties=function(){return Ya.MASK_NO_EDIT;};});jsx3.Class.defineClass("jsx3.gui.Matrix.ColumnFormat",null,null,function(o,e){var
ub={A:"",a:"short",b:"long",c:"oZ",d:"jE",e:"JE",f:"@",g:/^@(datetime|date|time|number)\b/,h:"{0,",i:"}",j:"@message",k:"objDiv",l:"strCDFKey",m:"objMatrix",n:"objMatrixColumn",o:"intRowNumber",p:"objServer",q:/&lt;/g,r:"<",s:/&gt;/g,t:">",u:/&quot;/g,v:'"',w:/&amp;/g,x:"&",y:"function",z:"text"};var
Va=jsx3.gui.Matrix;o.r8={medium:2,full:4};o.r8[ub.a]=1;o.r8[ub.b]=3;o.DG={integer:1,percent:1,currency:1};o.eq={unescape:ub.c,unescape_all:ub.d,lookup:ub.e};o.getInstance=function(h,i){var
Ba=null;var
Da=null;if(h.charAt(0)==ub.f&&(Da=o.eq[h.substring(1)])!=null){Ba=new
o();Ba.format=o[Da];}else if(h.match(ub.g)){Ba=new
Va.MessageFormat(i,ub.h+h.substring(1)+ub.i);}else if(h.indexOf(ub.j)==0)Ba=new
Va.MessageFormat(i,h.substring(9));return Ba;};e.init=function(){};e.validate=function(){return true;};e.format=jsx3.Method.newAbstract(ub.k,ub.l,ub.m,ub.n,ub.o,ub.p);o.oZ=function(c,k,r,n,p,g){o.jE(c,k,r,n,p,g,jsx3.xml.Template.supports(1));};o.jE=function(i,c,g,r,k,a,p){if(!p)i.innerHTML=(((i.innerHTML.replace(ub.q,ub.r)).replace(ub.s,ub.t)).replace(ub.u,ub.v)).replace(ub.w,ub.x);};o.JE=function(i,r,k,l,c,n){var
mb=l.getEditMask();if(mb&&mb.OK)mb=mb.OK();if(mb!=null&&typeof mb.getRecordNode==ub.y){var
Q=k.getRecordNode(r);if(Q){var
La=l.getValueForRecord(r);var
Lb=mb.getRecordNode(La);i.innerHTML=jsx3.util.strEscapeHTML(Lb?k.Sf(Lb,ub.z):La!=null?La:ub.A);}}};});jsx3.Class.defineClass("jsx3.gui.Matrix.MessageFormat",jsx3.gui.Matrix.ColumnFormat,null,function(s,b){b.init=function(l,k){this.t6=new
jsx3.util.MessageFormat(k,(l.getServer()).getLocale());};b.format=function(d,j,o,h,q,f){var
Z=h.getValueForRecord(j);if(Z)try{var
ma=f.getLocale();if(ma!=this.t6._locale)this.t6.setLocale(ma);try{Z=this.t6.format(Z);}catch(Kb){}d.innerHTML=Z;}catch(Kb){jsx3.util.Logger.GLOBAL.error(this.t6,jsx3.NativeError.wrap(Kb));}};});jsx3.Class.defineInterface("jsx3.gui.Matrix.EditMask",null,function(k,l){var
ub={a:"jsxbeginmask",b:"_jsxTy"};var
Ka=jsx3.gui.Matrix;k.NORMAL=1;k.FORMAT=2;k.DIALOG=3;l.emInit=function(s){};l.emGetType=function(){return k.NORMAL;};l.emPaintTemplate=function(){return this.paint();};l.cB=function(o,s,p,a,j,d,q){this._jsxTy={matrix:a,column:j,recordId:d,td:q,value:o};var
Ca=this.emBeginEdit(o,s,p,a,j,d,q)!==false;if(Ca)this.doEvent(ub.a,{objMATRIX:a,objCOLUMN:j,strRECORDID:d,strVALUE:o,_gipp:1});return Ca;};l.replayMask=function(p){this._jsxTy={matrix:p.objMATRIX,column:p.objCOLUMN,recordId:p.strRECORDID,td:null,value:p.strVALUE};};l.emBeginEdit=function(i,f,r,n,p,q,d){};l.DW=function(){var
ba=this.emEndEdit();delete this[ub.b];return ba;};l.emEndEdit=function(){return this.emGetValue();};l.emGetValue=function(){return null;};l.suspendEditSession=function(){(this.getAncestorOfType(Ka))._jsxOM.f1=true;};l.resumeEditSession=function(){(this.getAncestorOfType(Ka))._jsxOM.f1=false;};l.emGetSession=function(){return this._jsxTy;};l.commitEditMask=function(i,h){if(this._jsxTy)this._jsxTy.matrix.AF(i,h);};l.emCollapseEdit=function(f){};});jsx3.Class.defineInterface("jsx3.gui.Matrix.BlockMask",jsx3.gui.Matrix.EditMask,function(h,i){var
ub={a:"none",b:""};var
K=jsx3.gui.Matrix;var
Ua=jsx3.gui.Block;var
pb=jsx3.html;i.emInit=function(c){this.setDisplay(ub.a,true);this.setDimensions(0,0,null,null,true);this.setRelativePosition(0,true);this._jsxdl=this.getWidth();this._jsxvh=this.getHeight();var
Qa=this.OK();if(Qa){var
yb=Qa.getRelativePosition();var
ga=Qa.getDisplay();K.ZJ(Qa,c);Qa.setRelativePosition(yb,true);Qa.setDisplay(ga,true);}};i.emGetType=function(){return K.EditMask.NORMAL;};i.emBeginEdit=function(g,j,f,l,r,o,k){var
nb=isNaN(this._jsxdl)?j.W:parseInt(this._jsxdl);var
ga=isNaN(this._jsxvh)?j.H:parseInt(this._jsxvh);this.setMaskValue(g);this.setDimensions(j.L,j.T,nb,ga,true);this.setDisplay(ub.b,true);var
_=this.getMaskFirstResponder()||this;pb.focus(_);};i.emGetValue=function(){return this.getMaskValue();};i.getMaskFirstResponder=function(){return this.OK();};i.getMaskValue=function(){var
O=this.OK();return O!=null?O.getValue():null;};i.setMaskValue=function(f){var
Xa=this.OK();if(Xa!=null)Xa.setValue(f);};i.OK=function(){return (this.getDescendantsOfType(jsx3.gui.Form))[0];};i.emEndEdit=function(){var
H=this.getMaskValue();this.setDisplay(ub.a,true);return H;};});jsx3.Class.defineInterface("jsx3.gui.Matrix.DialogMask",jsx3.gui.Matrix.BlockMask,function(i,h){var
ub={a:"",b:"none"};var
wa=jsx3.gui.Matrix;var
R=jsx3.html;h.emInit=function(c){wa.BlockMask.prototype.emInit.call(this,c);var
qa=this.getParent();while(qa!=null){if(jsx3.gui.Window&&qa instanceof jsx3.gui.Window){qa=qa.getRootBlock();break;}else if(jsx3.gui.Dialog&&qa instanceof jsx3.gui.Dialog)break;qa=qa.getParent();}if(qa==null)qa=(this.getServer()).getRootBlock();qa.paintChild(this);};h.emGetType=function(){return wa.EditMask.DIALOG;};h.emBeginEdit=function(p,r,c,b,j,e,d){this._jsxTy={matrix:b,column:j,recordId:e,td:d};var
eb=(this.getRendered(d)).parentNode.parentNode;var
Lb=R.getRelativePosition(eb,eb);var
sb=R.getRelativePosition(eb,d);var
Jb=this._jsxdl;var
Ca=this._jsxvh;var
Hb=[Lb.W-sb.L-r.W,sb.L,r.W];var
J=-1;for(var
C=0;C<Hb.length&&J<0;C++)if(Jb<=Hb[C])J=C;if(J<0)L4:for(var
C=0;C<Hb.length&&J<0;C++){for(var
ma=0;ma<Hb.length;ma++)if(Hb[C]<Hb[ma])continue L4;J=C;}var
Nb=J==2;var
ta=[Lb.H-sb.T-(Nb?r.H:0),sb.T+(Nb?0:r.H)];var
ka=-1;for(var
C=0;C<ta.length&&ka<0;C++)if(Ca<=ta[C])ka=C;if(ka<0)L5:for(var
C=0;C<ta.length&&ka<0;C++){for(var
ma=0;ma<ta.length;ma++)if(ta[C]<ta[ma])continue L5;ka=C;}Jb=Math.min(Jb,Hb[J]);Ca=Math.min(Ca,ta[ka]);var
y=[sb.L+r.W,sb.L-Jb,sb.L][J];var
Aa=[sb.T+(Nb?r.H:0),sb.T-Ca+(Nb?0:r.H)][ka];this.setMaskValue(p);this.setDimensions(y,Aa,Jb,Ca,true);this.setDisplay(ub.a,true);R.updateCSSOpacity(this.getRendered(),0.9);var
oa=this.getMaskFirstResponder()||this;R.focus(oa);};h.OK=function(){var
_a=this.getChild(0)==this.getCaptionBar()?this.getChild(1):this.getChild(0);return _a!=null?(_a.getDescendantsOfType(jsx3.gui.Form))[0]:null;};h.emCollapseEdit=function(n){this.setDisplay(ub.b,true);};h.em=function(){};});
