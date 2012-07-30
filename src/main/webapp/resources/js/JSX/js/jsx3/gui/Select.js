/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Heavyweight","jsx3.gui.Block","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Select",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(i,q){var
ub={A:"url(",Aa:"S",B:")",Ba:"N",C:"children",Ca:"px",D:"text",Da:"div",E:"id",Ea:"_jsxopening",F:"'",Fa:"_",G:"//",Ga:"Error focusing first object: ",H:"[@",Ha:"uu",I:"='",Ia:"span",J:"' or (not(@",Ja:"solid 1px #a6a6af;solid 1px #e6e6e6;solid 1px #e6e6e6;solid 1px #a6a6af",K:") and @",Ka:"relativebox",L:"')]",La:"box",M:'="',Ma:"0 0 0 0",N:'" or (not(@',Na:"0 19 0 0",O:'")]',Oa:"100%",P:"_jsxo2",Pa:"2 0 0 3",Q:"jsxchange",Qa:"inline",R:"x",Ra:"input[text]",S:"body",Sa:"0 0 0 4",T:"sel",Ta:"solid 0px;solid 1px #c8c8d5;solid 0px;solid 0px",U:"jsx3.lc",Ua:"jsxkeyup",V:"jsx3.uc",Va:"keyup",W:"JSX_GENERIC",Wa:"JF",X:"null",Xa:"focus",Y:"jsxabspath",Ya:"NQ",Z:"jsxhomepath",Za:' id="',_:"jsxtext",_a:' class="',a:"#ffffff",aa:"combo",ab:'" jsxtype="Select" ',b:"- Select -",ba:/\<div/i,bb:"background-image:url(",c:"jsx:///xsl/jsxselect.xsl",ca:"dataUnavailable",cb:");background-repeat:no-repeat;background-position:right 0px;",d:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"lc\">abcdefghijklmnopqrstuvwxyz</xsl:param><xsl:param name=\"uc\">ABCDEFGHIJKLMNOPQRSTUVWXYZ</xsl:param><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxselectedimage\"/><xsl:param name=\"jsxselectedimagealt\"/><xsl:param name=\"jsxtransparentimage\"/><xsl:param name=\"jsxdragtype\">JSX_GENERIC</xsl:param><xsl:param name=\"jsxselectedid\">null</xsl:param><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxid\">_jsx</xsl:param><xsl:param name=\"jsxtext\"/><xsl:param name=\"jsxmode\">0</xsl:param><xsl:param name=\"jsxdisableescape\">no</xsl:param><xsl:param name=\"jsxshallowfrom\"/><xsl:param name=\"jsxcasesensitive\">0</xsl:param><xsl:param name=\"jsxnocheck\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsx_type\">select</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><div class=\"jsx30select_{$jsxmode}_option\"><span><xsl:value-of select=\"$jsxasyncmessage\"/></span></div></xsl:when><xsl:when test=\"$jsxshallowfrom\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsxshallowfrom]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:when><xsl:otherwise><xsl:for-each select=\"descendant::*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\" mode=\"select\"><xsl:param name=\"myjsxid\" select=\"@*[name() = $attrid]\"/><div class=\"jsx30select_{$jsxmode}_option {@*[name() = $attrclass]}\" id=\"{$jsxid}_{$myjsxid}\" jsxid=\"{$myjsxid}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@*[name() = $attrtip]}\"><xsl:if test=\"@*[name() = $attrstyle]\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=$myjsxid\"><img alt=\"{$jsxselectedimagealt}\" class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img alt=\"\" class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@*[name() = $attrimg] and @*[name() = $attrimg] != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"/></span></div></xsl:template><xsl:template match=\"*\" mode=\"combo\"><xsl:variable name=\"mytext\"><xsl:choose><xsl:when test=\"@*[name() = $attrtext]\"><xsl:value-of select=\"@*[name() = $attrtext]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:otherwise></xsl:choose></xsl:variable><xsl:if test=\"(not($jsxcasesensitive = 1) and starts-with(translate($mytext, $lc, $uc), translate($jsxtext, $lc, $uc)))         or ($jsxcasesensitive = 1 and starts-with($mytext, $jsxtext))\"><div class=\"jsx30select_{$jsxmode}_option {@*[name() = $attrclass]}\" id=\"{$jsxid}_{@*[name() = $attrid]}\" jsxid=\"{@*[name() = $attrid]}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@*[name() = $attrtip]}\"><xsl:if test=\"@*[name() = $attrstyle]\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=@*[name() = $attrid]\"><img alt=\"{$jsxselectedimagealt}\" class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img alt=\"\" class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@*[name() = $attrimg] and @*[name() = $attrimg] != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"><xsl:with-param name=\"value\" select=\"$mytext\"/></xsl:apply-templates></span></div></xsl:if></xsl:template><xsl:template match=\"*\" mode=\"jsxtext\"><xsl:param name=\"value\" select=\"@*[name() = $attrtext]\"/><xsl:choose><xsl:when test=\"$jsxdisableescape='yes'\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\"$value\"/></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select=\"$value\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",da:"noMatch",db:' class="jsx30select_display" jsxtype="Display" ',e:"JSX_SELECT_XSL",ea:"0px;1px;0px;1px",eb:' jsxtype="Text" class="jsx30select_text"',f:"JSX_COMBO_XSL",fa:'<div style="height:1px;width:',fb:'class="jsx30combo"',g:"jsx:///images/select/arrow.gif",ga:"px;position:relative;left:0px;top:0px;",gb:' class="jsx30combo_text" value="',h:"jsx:///images/select/selectover.gif",ha:'padding:0px;margin:0px 0px -1px 0px;overflow:hidden;">&#160;</div>',hb:'" jsxtype="Text" ',i:"jsx:///images/select/selected.gif",ia:'<div tabindex="0" jsxselid="',ib:"blur",j:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- data unavailable -</div>",ja:'"',jb:"KW",k:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- no match found -</div>",ka:"keydown",kb:"input",l:'<div tabIndex="0" class="jsx30select_option jsx30select_none" onmousedown="var e=jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();"><span style="left:0px;">{0}</span></div>',la:"gu",lb:"jsxbeforeselect",m:"jsx30curvisibleoptions",ma:"click",mb:"jsxselect",n:"jsx30select_select",na:"hO",nb:"3.0.00",o:"background-color:",oa:"mousedown",ob:' maxlength="',p:";",pa:"UC",pb:'" ',q:"",qa:"mouseover",qb:" ",r:"defaultText",ra:"j8",rb:/^(?:display|margin|left|top|position|backgroundColor|color|visibility|zIndex)$/,s:"jsxtype",sa:' jsxtype="Options" class="jsx30select_optionlist" style="',sb:/^(?:backgroundColor|color)$/,t:"jsxid",ta:"min-width:",tb:"C0",u:"Display",ua:"px;",v:"Text",va:'">',w:"Select",wa:"</div>",x:"focusPrevious",xa:"jsx30shadow",y:"focusNext",ya:"W",z:"jsxselid",za:"E"};var
ab=jsx3.util.Logger.getLogger(i.jsxclass.getName());var
M=jsx3.gui.Interactive;var
Qa=jsx3.gui.Event;var
ba=jsx3.html;i.DEFAULTBACKGROUNDCOLOR=ub.a;i.DEFAULTTEXT=ub.b;i.DEFAULTXSLURL=jsx3.resolveURI(ub.c);i.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.d);i.SELECTXSLURL=i.DEFAULTXSLURL;i.SELECTXSLID=ub.e;i.COMBOXSLURL=i.DEFAULTXSLURL;i.COMBOXSLID=ub.f;i.ARROWICON=jsx3.resolveURI(ub.g);i.OVERIMAGE=jsx3.resolveURI(ub.h);i.SELECTEDIMAGE=jsx3.resolveURI(ub.i);if(jsx3.CLASS_LOADER.IE6)ba.loadImages(i.ARROWICON,i.OVERIMAGE,i.SELECTEDIMAGE);i.NODATAMESSAGE=ub.j;i.NOMATCHMESSAGE=ub.k;i.QG=new
jsx3.util.MessageFormat(ub.l);i.TYPESELECT=0;i.TYPECOMBO=1;i.TYPEAHEADDELAY=250;i.u1=null;i.tO=null;i.fW=ub.m;i.DEFAULTCLASSNAME=ub.n;q.init=function(l,m,h,j,g,k){this.jsxsuper(l,m,h,j,g);this.jsxvalue=k;};q.getXSL=function(){return this.nd(i.DEFAULTXSLURL,i.Ip);};q.doValidate=function(){var
ha=jsx3.gui.Form;var
O=this.getRequired()==0;if(!O){var
rb=this.getValue();if(this.getType()==0){O=this.getRecordNode(rb)!=null;}else O=rb!=null&&rb.length>0;}this.setValidationState(O?1:0);return this.getValidationState();};q.ch=function(){var
ka=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return ka?ub.o+ka+ub.p:ub.q;};q.getType=function(){return this.jsxtype==null?0:this.jsxtype;};q.setType=function(d){this.jsxtype=d;this.Qf();return this;};q.getDefaultText=function(){return this.jsxdefaulttext!=null&&this.jsxdefaulttext!=null?this.jsxdefaulttext:this.Nk(ub.r,i);};q.setDefaultText=function(d){this.jsxdefaulttext=d;return this;};q.NQ=function(a,l){if(this._ebKeyDown(a,l))return;var
U=a.srcElement();var
ya=U.getAttribute(ub.s);var
A=U.getAttribute(ub.t);var
Wa=a.hasModifier();if((a.spaceKey()||a.enterKey())&&A!=null){this.Vp(a,U.getAttribute(ub.t));this.hide(true);}else if(ya==ub.u||ya==ub.v||ya==ub.w){if(a.downArrow()&&!Wa){this.Fy();}else return;}else if(a.leftArrow()||a.escapeKey()){this.hide(true);}else if(a.downArrow()){if(Wa)return;if(U==l.lastChild||A==null){this.h6(l.firstChild.nextSibling);}else this.h6(U.nextSibling);}else if(a.upArrow()){if(Wa)return;if(U==l.firstChild.nextSibling||A==null){this.h6(l.lastChild);}else this.h6(U.previousSibling);}else if(a.tabKey()){if(a.hasModifier(true))return;this.Vp(a,U.getAttribute(ub.t));ba[a.shiftKey()?ub.x:ub.y](this.getRendered(a),a);this.hide(false);return;}else return;a.cancelAll();};q.VE=function(s){var
L=jsx3.gui.Heavyweight.GO(i.fW);var
zb=L?(L.getRendered(s)).childNodes[0].childNodes[0]:null;var
Ba=zb&&zb.getAttribute(ub.z)==this.getId();return Ba?[Ba,zb.childNodes[1].getAttribute(ub.t),zb]:false;};q.JF=function(p,b){if(this._ebKeyDown(p,b))return;var
ca=p.hasModifier();if(!ca&&(p.downArrow()||p.enterKey())){var
La=this.VE(p);if(La){if(p.downArrow()){if(La[1])this.h6(La[2].childNodes[1]);}else{this.hide(false);this.KW(p,this.g4(b));}}else{var
zb=p.enterKey()?ub.q:this.getText();this.Fy(zb);}p.cancelAll();}else if(p.tabKey()&&p.shiftKey()&&!p.hasModifier(true)){ba.focusPrevious(this.getRendered(p),p);}else if(!ca&&(p.rightArrow()||p.leftArrow())){var
Cb=p.leftArrow();var
C=this.g4();var
ra=C.value;var
Wa=ba.getSelection(C);if(Cb&&(Wa.getStartIndex()>0||Wa.getEndIndex()>0)||!Cb&&(Wa.getStartIndex()<ra.length||Wa.getEndIndex()<ra.length))p.cancelBubble();}else{var
R=this.g4();var
bb=R.value;jsx3.sleep(function(){if(this.getParent()==null)return;var
ib=R.value;if(bb!=ib){if(i.tO)window.clearTimeout(i.tO);var
X=this;i.tO=window.setTimeout(function(){if(X.getParent()==null)return;i.tO=null;X.Fy(ib);},i.TYPEAHEADDELAY);}},null,this);}};q.gu=function(n,r){this.NQ(n,r);};q.g4=function(k){k=this.getRendered(k);return k?this.getType()==1?k.childNodes[0].childNodes[0].childNodes[0]:k.childNodes[0].childNodes[0]:null;};q.show=function(){var
v=this.getRendered();if(v)this.Fy();};q.hO=function(o,m){var
qb=o.srcElement();while(qb!=null&&(!qb.getAttribute||qb.getAttribute(ub.t)==null)){qb=qb.parentNode;if(qb==m)qb=null;}if(qb!=null)this.Vp(o,qb.getAttribute(ub.t));this.hide(true);};q.h6=function(d){if(this._jsxsW){try{this._jsxsW.style.backgroundImage=ub.A+jsx3.gui.Block.SPACE+ub.B;}catch(Kb){}this._jsxsW=null;}if(d){ba.focus(d);d.style.backgroundImage=ub.A+i.OVERIMAGE+ub.B;this._jsxsW=d;var
na=jsx3.gui.Heavyweight.GO(i.fW);na.scrollTo(d);}};q.KW=function(n,r){var
ua=r.value;var
Db=this.hn(ub.C);var
ka=this.hn(ub.D);var
zb=this.hn(ub.E);var
_a=ua.indexOf(ub.F)==-1?[ub.G+Db+ub.H+ka+ub.I,ua,ub.J+ka+ub.K+zb+ub.I,ua,ub.L].join(ub.q):[ub.G+Db+ub.H+ka+ub.M,ua,ub.N+ka+ub.K+zb+ub.M,ua,ub.O].join(ub.q);var
Gb=(this.getXML()).selectSingleNode(_a);var
u=this.VE(n);if(!u){delete this[ub.P];if(Gb!=null){this.Vp(n,this.Sf(Gb,ub.E));}else if(ua!=this.jsxvalue){var
ia=this.doEvent(ub.Q,{objEVENT:n,strVALUE:ua});if(ia!==false){this.jsxvalue=ua;}else this.redrawRecord(this.jsxvalue);}}else this._jsxo2=1;};q.hide=function(n){if(i.u1==this){var
Hb=jsx3.gui.Heavyweight.GO(i.fW);if(Hb)Hb.destroy();if(n)try{this.focus();}catch(Kb){}Qa.unsubscribeLoseFocus(this);i.u1=null;}if(i.tO){i.tO=null;window.clearTimeout(i.tO);}};i.hideOptions=function(){if(i.u1!=null)i.u1.hide();};i.n8=function(){var
Fb=ba.getMode();if(Fb==2&&jsx3.CLASS_LOADER.getVersion()>=7)Fb=Fb+ub.R;return Fb;};q.Fy=function(b){if(this._jsxopening)return;var
rb=this.getRendered();if(rb!=null){var
Ga=this.getType();var
Gb=rb.ownerDocument;if(i.u1!=null)i.u1.hide(false);i.u1=this;var
kb=this.getAbsolutePosition((Gb.getElementsByTagName(ub.S))[0]);var
I=kb.W;var
Za=this.getType()==1;var
Y={};Y.jsxtabindex=this.getIndex()?this.getIndex():0;Y.jsxselectedimage=i.SELECTEDIMAGE;Y.jsxselectedimagealt=this.Nk(ub.T,i);Y.lc=this.Nk(ub.U);Y.uc=this.Nk(ub.V);Y.jsxtransparentimage=jsx3.gui.Block.SPACE;Y.jsxdragtype=ub.W;Y.jsxid=this.getId();Y.jsxselectedid=this.getValue()==null?ub.X:this.getValue();Y.jsxpath=jsx3.getEnv(ub.Y);Y.jsxpathapps=jsx3.getEnv(ub.Z);Y.jsxpathprefix=(this.getUriResolver()).getUriPrefix();Y.jsxappprefix=(this.getServer()).getUriPrefix();Y.jsxmode=i.n8();if(Za){Y.jsxsortpath=ub._;Y.jsx_type=ub.aa;}if(b!=null)Y.jsxtext=b;var
Ha=this.getXSLParams();for(var na in Ha)Y[na]=Ha[na];var
xa=this.doTransform(Y);if(!jsx3.xml.Template.supports(1))xa=ba.removeOutputEscapingSpan(xa);xa=this.vo(xa);if(!xa.match(ub.ba))xa=i.QG.format(this.Nk(Ga==0?ub.ca:ub.da,i));var
tb=new
jsx3.gui.Painted.Box({width:I,height:1,border:ub.ea});tb.calculate();var
wa=tb.ee();var
X=ub.fa+wa+ub.ga+ub.ha;var
ua=ub.ia+this.getId()+ub.ja+this.Fg(ub.ka,ub.la)+this.Fg(ub.ma,ub.na)+this.Fg(ub.oa,ub.pa)+this.Fg(ub.qa,ub.ra)+ub.sa+this.ch()+ub.ta+wa+ub.ua+this._k()+this.cd()+this.wk()+this.Pb()+ub.va+X+xa+ub.wa;var
O=new
jsx3.gui.Heavyweight(i.fW,this);O.setHTML(ua);O.setScrolling(true);O.setClassName(ub.xa);O.addXRule(rb,ub.ya,ub.ya,0);O.addXRule(rb,ub.za,ub.za,0);O.addYRule(rb,ub.Aa,ub.Ba,0);O.addYRule(rb,ub.Ba,ub.Aa,0);O.show();var
G=O.getRendered();var
Jb=G.childNodes[0].childNodes[0];var
W=Math.max(Jb.offsetWidth-2,Jb.clientWidth)+ub.Ca;if(jsx3.CLASS_LOADER.IE)for(var
_a=0;_a<Jb.childNodes.length;_a++){var
t=Jb.childNodes[_a];if(t.nodeName&&t.nodeName.toLowerCase()==ub.Da&&t.getAttribute(ub.t))Jb.childNodes[_a].style.width=W;}if(Ga==0||b==null){this._jsxopening=true;jsx3.sleep(function(){if(this.getParent()==null)return;delete this[ub.Ea];var
Fa=this.getRecordNode(this.getValue());var
C=Fa?(this.getDocument()).getElementById(this.getId()+ub.Fa+this.getValue()):null;try{if(C)this.h6(C);else ba.focus(Jb);}catch(Kb){ab.info(ub.Ga+jsx3.NativeError.wrap(Kb));}},null,this);}else ba.focus(this.g4());Qa.subscribeLoseFocus(this,rb,ub.Ha);}};q.uu=function(d){var
D=d.event.srcElement();if(!this.containsHtmlElement(D)){this.hide(false);if(this._jsxo2||this._jsxsW&&this.getType()==1){var
lb=this.g4();if(lb)this.KW(d,lb);}}};q.Hj=function(f,c,l){var
sa=this.Wl(true,f);if(c){var
xb=sa.recalculate(f,c,l);if(!xb.w&&!xb.h)return;var
La=sa.lg(0);La.recalculate({parentwidth:sa.ee(),parentheight:sa.ld()},c?c.childNodes[0]:null,l);var
db=La.lg(0);if(this.getType()!=0){var
jb=db.lg(0);jb.recalculate({parentwidth:La.ee()-1,parentheight:La.ld()},c?ba.selectSingleElm(c,0,0,0):null,l);}else db.recalculate({parentwidth:La.ee(),parentheight:La.ld()},c?c.childNodes[0].childNodes[0]:null,l);}};q.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};var
ib=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
da,P,A,Mb,Ba;s.tagname=ub.Ia;s.border=(da=this.getBorder())!=null&&da!=ub.q?da:ub.Ja;s.margin=ib&&(P=this.getMargin())!=null&&P!=ub.q?P:null;if(!s.boxtype)s.boxtype=ib?ub.Ka:ub.La;if(s.left==null)s.left=!ib&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.top==null)s.top=!ib&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(s.width==null)s.width=(Mb=this.getWidth())!=null?Mb:100;if(s.height==null)s.height=(Ba=this.getHeight())!=null?Ba:18;s.padding=ub.Ma;var
kb=new
jsx3.gui.Painted.Box(s);var
Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Ka;if((A=this.getPadding())!=null&&A!=ub.q){Hb.padding=A;}else Hb.padding=ub.Na;Hb.parentwidth=kb.ee();Hb.parentheight=kb.ld();Hb.left=0;Hb.top=0;Hb.width=ub.Oa;Hb.height=ub.Oa;var
La=new
jsx3.gui.Painted.Box(Hb);kb.cl(La);if(this.getType()==0){Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Ka;Hb.padding=ub.Pa;Hb.parentwidth=La.ee();Hb.parentheight=La.ld();Hb.width=ub.Oa;Hb.height=ub.Oa;var
L=new
jsx3.gui.Painted.Box(Hb);La.cl(L);}else{Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Qa;var
L=new
jsx3.gui.Painted.Box(Hb);La.cl(L);Hb={};Hb.tagname=ub.Ra;Hb.boxtype=ub.Ka;Hb.parentwidth=La.ee()-1;Hb.parentheight=La.ld();Hb.width=ub.Oa;Hb.height=ub.Oa;Hb.padding=ub.Sa;Hb.empty=true;Hb.border=ub.Ta;var
Ia=new
jsx3.gui.Painted.Box(Hb);L.cl(Ia);}return kb;};q.paint=function(){this.applyDynamicProperties();if(this.getXmlAsync())var
Xa=this.getXML();var
_a=this.getId();var
ua=this.getEnabled()==1;var
pb={};if(ua){pb[ub.oa]=true;if(this.hasEvent(ub.Ua))pb[ub.Va]=true;if(this.getType()==1){pb[ub.ka]=ub.Wa;pb[ub.Xa]=true;}else pb[ub.ka]=ub.Ya;}var
ib=this.qj(pb,0);var
Ma=this.renderAttributes(null,true);var
X=this.Wl(true);X.setAttributes(ub.Za+_a+ub.ja+this.Ak()+ub._a+this.dd()+ub.ab+Ma+ib+this.Rl());X.setStyles(this.jc()+this.ch()+ub.bb+this.getIcon(i.ARROWICON)+ub.cb+this.Wi()+this.ad()+this.lc()+this.Bg()+this.mi(1));var
v=X.lg(0);v.setAttributes(ub.db+this.nk());v.setStyles(ub.q);if(this.getType()==0){var
wb=v.lg(0);wb.setAttributes(ub.eb+ba._d);wb.setStyles(this._k()+this.cd()+this.wk()+this.jc()+this.Pb());var
Wa=(X.paint()).join((v.paint()).join((wb.paint()).join(jsx3.util.strEscapeHTML(this.il()))));}else{var
wb=v.lg(0);wb.setAttributes(ub.fb);var
Z=wb.lg(0);Z.setAttributes(this.Rl()+this.paintMaxLength()+this.pc()+ub.gb+jsx3.util.strEscapeHTML(this.il())+ub.hb+this.Fg(ub.ib,ub.jb,3));Z.setStyles(this._k()+this.cd()+this.wk()+this.jc()+this.Pb()+this.ch());var
Wa=(X.paint()).join((v.paint()).join((wb.paint()).join((Z.paint()).join(ub.q))));}return Wa;};q.onXmlBinding=function(s){this.jsxsupermix(s);this.redrawRecord(this.getValue(),2);if(i.u1==this){this.hide();this.Fy(this.getValue());}};q.Fo=function(f,g){if(!f.leftButton())return;if((f.srcElement()).tagName.toLowerCase()!=ub.kb){if(i.u1==this){this.hide(true);}else this.Fy();}else this.h6();};q.Vl=function(r,n){ba.focus(this.g4(n));this.h6();};q.UC=function(s,d){s.cancelBubble();};q.j8=function(f,g){var
O=i.rH(f,g);if(O){if(f.isFakeOver(O))return;this.h6(O);}};i.rH=function(h,e){var
I=h.srcElement();while(I!=null&&I.getAttribute(ub.t)==null){I=I.parentNode;if(I==e||I==e.ownerDocument)I=null;}return I;};q.setText=function(m){this.Nq(m);return this;};q.Nq=function(c){var
ta=this.g4();if(ta)if(this.getType()==1)ta.value=c;else ta.innerHTML=jsx3.util.strEscapeHTML(c);};q.focus=function(){var
yb=this.getType()==1?this.g4():this.getRendered();if(yb)ba.focus(yb);return yb;};q.setValue=function(k){this.Vp(this.isOldEventProtocol(),k);return this;};q.Vp=function(o,k){if(k!=this.getValue()){var
K=true;if(o instanceof Qa)K=this.doEvent(ub.lb,{objEVENT:o,strRECORDID:k});if(K===false)return;this.jsxvalue=k;this.redrawRecord(k,2);if(o)this.doEvent(ub.mb,{objEVENT:o instanceof Qa?o:null,strRECORDID:k,_gipp:1});}};q.getIcon=function(n){return !jsx3.util.strEmpty(this.jsxicon)?(this.getServer()).resolveURI(this.jsxicon):n;};q.setIcon=function(j){this.jsxicon=j;};q.getValue=function(){return this.jsxvalue!=null?this.jsxvalue:null;};q.getText=function(){var
W=this.getType()==1;if(W){var
tb=this.g4();if(tb)return tb.value;}var
ha=this.getRecordNode(this.getValue());if(ha!=null){var
fa=this.Sf(ha,ub.D);return fa!=null?fa:this.Sf(ha,ub.E);}else return W||this.getValue()!=null?this.getValue():this.getDefaultText();};q.redrawRecord=function(b,m){if(this.getValue()==b){var
za=this.getRecordNode(b);if(za!=null){var
na=this.Sf(za,ub.D);this.Nq(na!=null?na:this.Sf(za,ub.E));}else this.Nq(this.getType()==0?this.getDefaultText():b!=null?b:ub.q);}return this;};i.getVersion=function(){return ub.nb;};q.containsHtmlElement=function(o){var
ja=jsx3.gui.Heavyweight.GO(i.fW);return this.jsxsuper(o)||ja!=null&&ja.containsHtmlElement(o);};q.getMaxLength=function(){return this.jsxmaxlength!=null?this.jsxmaxlength:null;};q.setMaxLength=function(f){f=parseInt(f);this.jsxmaxlength=f>0?f:null;return this;};q.paintMaxLength=function(h){return this.getMaxLength()!=null?ub.ob+this.getMaxLength()+ub.pb:ub.q;};q.dd=function(){var
ja=this.getClassName();return i.DEFAULTCLASSNAME+(ja?ub.qb+ja:ub.q);};q.updateGUI=function(h,k){if(h.search(ub.rb)==0)this.jsxsuper(h,k);if(h.search(ub.sb)==0){var
vb=this.g4();if(vb)try{vb.style[h]=k;}catch(Kb){}}};q.emInit=function(m){this.jsxsupermix(m);this.subscribe(ub.mb,this,ub.tb);};q.emCollapseEdit=function(o){this.hide(false);};q.C0=function(l){this.commitEditMask(l.context.objEVENT,true);};});jsx3.Select=jsx3.gui.Select;