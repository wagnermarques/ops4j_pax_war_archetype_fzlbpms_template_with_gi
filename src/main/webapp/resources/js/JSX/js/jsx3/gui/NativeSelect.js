/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.NativeSelect",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(p,j){var
ub={A:"jS",a:"jsx3nativesel",b:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attrdisabled\">jsxdisabled</xsl:param><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxshallowfrom\"/><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"_value\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/*\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><option disabled=\"disabled\"><xsl:value-of select=\"$jsxasyncmessage\"/></option></xsl:when><xsl:when test=\"$jsxshallowfrom\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsxshallowfrom]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:apply-templates select=\".\"/></xsl:for-each></xsl:when><xsl:otherwise><xsl:for-each select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:apply-templates select=\".\"/></xsl:for-each></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\"><xsl:variable name=\"mytext\"><xsl:choose><xsl:when test=\"@*[name() = $attrtext]\"><xsl:value-of select=\"@*[name() = $attrtext]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:otherwise></xsl:choose></xsl:variable><xsl:variable name=\"bgimage\"><xsl:if test=\"@*[name() = $attrimg]\"><xsl:text>background-image:</xsl:text><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:if></xsl:variable><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><optgroup label=\"{$mytext}\"><xsl:if test=\"@*[name() = $attrstyle] or $bgimage != ''\"><xsl:attribute name=\"style\"><xsl:value-of select=\"$bgimage\"/><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrtip]\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrdisabled]='1'\"><xsl:attribute name=\"disabled\">disabled</xsl:attribute></xsl:if><xsl:apply-templates select=\"*\"/></optgroup></xsl:when><xsl:otherwise><option value=\"{@*[name() = $attrid]}\"><xsl:if test=\"@*[name() = $attrstyle] or $bgimage != ''\"><xsl:attribute name=\"style\"><xsl:value-of select=\"$bgimage\"/><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrtip]\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrdisabled]='1'\"><xsl:attribute name=\"disabled\">disabled</xsl:attribute></xsl:if><xsl:if test=\"$_value != '' and $_value = @*[name() = $attrid]\"><xsl:attribute name=\"selected\">selected</xsl:attribute></xsl:if><xsl:value-of select=\"$mytext\"/></option></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",c:"background-color:",d:";",e:"",f:"select",g:"inline",h:"box",i:"change",j:"jsxblur",k:"blur",l:"jsxfocus",m:"focus",n:"jsxkeydown",o:"keydown",p:' id="',q:'"',r:' class="',s:'" ',t:"jsxbeforeselect",u:"jsxselect",v:' multiple="multiple"',w:' size="',x:" ",y:"C0",z:"1;"};var
Za=jsx3.util.Logger.getLogger(p.jsxclass.getName());p.DEFAULTCLASSNAME=ub.a;p.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.b);var
ea=jsx3.gui.Event;var
aa=jsx3.gui.Interactive;var
_=jsx3.html;j.init=function(e,a,o,c,s,f){this.jsxsuper(e,a,o,c,s);this.jsxvalue=f;};j.getMultiple=function(){return this.jsxmultiple;};j.setMultiple=function(e){this.jsxmultiple=jsx3.Boolean.valueOf(e);};j.getSize=function(){return this.jsxsize||1;};j.setSize=function(h){this.jsxsize=Math.round(h);};j.getValue=function(){var
W=this.getRendered();if(W){if(this.getMultiple()){var
C=[];for(var
vb=0;vb<W.options.length;vb++)if(W.options[vb].selected)C.push(W.options[vb].value);return C;}else return W.value;}else return this.jsxvalue;};j.setValue=function(q){this.jsxvalue=q;var
K=this.getRendered();if(K)this.fR(K,q);};j.h5=function(s){if(this.getMultiple()){var
L=[];var
Z=s.options;for(var
Bb=0;Bb<Z.length;Bb++)if(Z[Bb].selected)L.push(Z[Bb].value);return L;}else return s.value;};j.fR=function(d,o){if(this.getMultiple()){var
Ma=jsx3.$H(jsx3.$A.is(o)?o:o!=null?[o]:null);var
qb=d.options;for(var
rb=0;rb<qb.length;rb++)qb[rb].selected=Ma[qb[rb].value]!=null;}else d.value=o;};j.getXSL=function(){return p.Ip;};j.doValidate=function(){var
db=jsx3.gui.Form;var
v=this.getRequired()==0||Boolean(this.jsxvalue);this.setValidationState(v?1:0);return this.getValidationState();};j.ch=function(){var
W=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return W?ub.c+W+ub.d:ub.e;};j.Hj=function(k,h,g){this.sk(k,h,g,3);};j.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};this.applyDynamicProperties();var
Ab=this.getRelativePosition()!=0;var
Z,qb,X;var
V=!Ab&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
Ra=!Ab&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.left==null)s.left=Ra;if(s.top==null)s.top=V;if(s.width==null)s.width=this.getWidth();if(s.height==null)s.height=this.getHeight();s.tagname=ub.f;if(!s.boxtype)s.boxtype=Ab?ub.g:ub.h;Z=this.getPadding();qb=this.getMargin();X=this.getBorder();if(Z!=null&&Z!=ub.e)s.padding=Z;if(Ab&&(qb=this.getMargin())!=null&&qb!=ub.e)s.margin=qb;if(X!=null&&X!=ub.e)s.border=X;return new
jsx3.gui.Painted.Box(s);};j.paint=function(){this.applyDynamicProperties();if(this.getXmlAsync())var
Va=this.getXML();var
zb=this.getId();var
t={};t[ub.i]=true;if(this.hasEvent(ub.j))t[ub.k]=true;if(this.hasEvent(ub.l))t[ub.m]=true;if(this.hasEvent(ub.n))t[ub.o]=true;var
hb=this.qj(t,0);var
y=this.renderAttributes(null,true);var
C=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
Ta=this.Wl(true);Ta.setAttributes(ub.p+zb+ub.q+this.Lj()+this.pc()+this.Rl()+this.wr()+this.tF()+this.nk()+hb+ub.r+this.dd()+ub.s+y);Ta.setStyles(C);return (Ta.paint()).join(this.GJ());};j.Ml=function(e,h){var
Ka=this.h5(h);if(!(jsx3.$A(this.jsxvalue)).eq(jsx3.$A(Ka))){var
ua=this.doEvent(ub.t,{objEVENT:e,strRECORDID:Ka});if(ua===false){this.fR(h,this.jsxvalue);}else{this.jsxvalue=Ka;this.doEvent(ub.u,{objEVENT:e,strRECORDID:Ka,_gipp:1});}}};j.onXmlBinding=function(o){this.jsxsupermix(o);this.Vz();};j.Vz=function(){var
G=this.getRendered();if(G)G.innerHTML=this.GJ();};j.GJ=function(){var
ja=this.doTransform({_value:this.jsxvalue});ja=this.vo(ja);return ja;};j.wr=function(){return this.getMultiple()?ub.v:ub.e;};j.tF=function(){var
oa=this.getSize();return oa>1?ub.w+oa+ub.q:ub.e;};j.redrawRecord=function(q,i){this.Vz();};j.dd=function(){var
Ha=this.getClassName();return p.DEFAULTCLASSNAME+(Ha?ub.x+Ha:ub.e);};j.onSetChild=function(a){return !(a instanceof jsx3.gui.Painted);};j.emInit=function(g){this.jsxsupermix(g);this.subscribe(ub.u,this,ub.y);var
Ya=ub.n;if(!this.hasEvent(Ya))this.setEvent(ub.z,Ya);this.subscribe(Ya,this,ub.A);};j.C0=function(r){this.commitEditMask(r.context.objEVENT,true);};j.jS=function(d){var
Ga=d.context.objEVENT;var
A=Ga.keyCode();if(A==40||A==38)if(!Ga.ctrlKey()){Ga.cancelBubble();}else this.commitEditMask(d.context.objEVENT);};});
