/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Image",jsx3.gui.Block,[],function(s,h){var
ub={a:' width="',b:'"',c:"",d:' height="',e:"<img",f:' class="jsx30image" src="',g:"/>",h:' alt="',i:/\"/g,j:"&quot;",k:'" ',l:' alt=""'};h.paint=function(){this.applyDynamicProperties();var
V=this.Wl(true);var
Db=(this.getUriResolver()).resolveURI(this.jsxsrc);var
Na=this.getWidth()!=null?ub.a+V.ee()+ub.b:ub.c;var
F=this.getHeight()!=null?ub.d+V.ld()+ub.b:ub.c;return this.jsxsuper(ub.e+jsx3.html._d+ub.f+Db+ub.b+Na+F+this.nk()+this.il()+ub.g);};h.onSetChild=function(b){return false;};h.Hj=function(e,b,m){this.sk(e,b,m,1);};h.getRenderedWidth=function(){var
Ta=this.getRendered();return Ta&&Ta.childNodes[0]?Ta.childNodes[0].width:null;};h.getRenderedHeight=function(){var
W=this.getRendered();return W&&W.childNodes[0]?W.childNodes[0].height:null;};h.getSrc=function(){return this.jsxsrc;};h.setSrc=function(g){this.jsxsrc=g;return this;};h.il=function(){var
Jb=this.getText();return Jb?ub.h+Jb.replace(ub.i,ub.j)+ub.k:ub.l;};});
