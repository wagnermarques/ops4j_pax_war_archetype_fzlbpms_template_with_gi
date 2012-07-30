/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineInterface("jsx3.gui.Form",null,function(p,c){var
ub={A:"</xsl:choose>",a:"#a8a8b5",b:"#d8d8e5",c:"Error binding key '",d:"' to ",e:": ",f:"background-color:",g:";",h:"",i:"color:",j:' disabled="disabled" ',k:"pointer",l:"default",m:"cursor:",n:' name="',o:'"',p:"3.00.00",q:"none",r:"Not implemented.",s:/\{/g,t:"{{",u:/\}/g,v:"}}",w:"<xsl:choose xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"><xsl:when test=\"@jsxnomask='1'\"></xsl:when><xsl:when test=\"@jsxdisabled='1'\">",x:"</xsl:when>",y:"<xsl:otherwise>",z:"</xsl:otherwise>"};var
kb=jsx3.gui.Event;p.DEFAULTDISABLEDCOLOR=ub.a;p.DEFAULTDISABLEDBACKGROUNDCOLOR=ub.b;p.STATEINVALID=0;p.STATEVALID=1;p.STATEDISABLED=0;p.STATEENABLED=1;p.OPTIONAL=0;p.REQUIRED=1;c.doKeyBinding=function(s,k){try{var
z=jsx3.gui.HotKey.valueOf(k,s);return (this.Qt()).registerHotKey(z);}catch(Kb){(jsx3.util.Logger.getLogger(p.jsxclass.getName())).error(ub.c+k+ub.d+this+ub.e+jsx3.NativeError.wrap(Kb));return null;}};c.Qt=function(){var
ba=jsx3.gui.Window!=null;var
Cb=jsx3.gui.Dialog!=null;var
Wa=this;while(Wa!=null){if(ba&&Wa instanceof jsx3.gui.Window)return Wa.getRootBlock();if(Cb&&Wa instanceof jsx3.gui.Dialog)return Wa;var
V=Wa.getParent();if(V==null)return Wa.getServer();Wa=V;}return null;};c.getKeyBinding=function(){return this.jsxkeycode==null?null:this.jsxkeycode;};c.setKeyBinding=function(i){this.jsxkeycode=i;return this;};c.getDisabledBackgroundColor=function(){return this.jsxdisabledbgcolor;};c.setDisabledBackgroundColor=function(g){this.jsxdisabledbgcolor=g;return this;};c.ch=function(){var
db=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor();return db?ub.f+db+ub.g:ub.h;};c.getDisabledColor=function(){return this.jsxdisabledcolor;};c.setDisabledColor=function(j){this.jsxdisabledcolor=j;return this;};c.getEnabled=function(){return this.jsxenabled==null?1:this.jsxenabled;};c.getValue=function(){return this.jsxvalue;};c.setValue=function(g){this.jsxvalue=g;return this;};c.setEnabled=function(a,g){if(this.jsxenabled!=a){this.jsxenabled=a;if(g)this.repaint();}return this;};c.jc=function(){if(this.getEnabled()!=0){var
Ea=this.getColor();return Ea?ub.i+Ea+ub.g:ub.h;}else return ub.i+(this.getDisabledColor()?this.getDisabledColor():p.DEFAULTDISABLEDCOLOR)+ub.g;};c.pc=function(){return this.getEnabled()==1?ub.h:ub.j;};c.Rl=function(){return jsx3.gui.Block.prototype.Rl.call(this,this.getIndex()||Number(0));};c.mi=function(j){var
P=this.getCursor();if(!P&&j)P=this.getEnabled()==1?ub.k:ub.l;return P?ub.m+P+ub.g:ub.h;};c.Lj=function(){var
Ra=this.getName();return Ra?ub.n+Ra+ub.o:ub.h;};c.getRequired=function(){return this.jsxrequired==null?0:this.jsxrequired;};c.setRequired=function(d){this.jsxrequired=d;return this;};c.getValidationState=function(){return this._jsxuV==null?1:this._jsxuV;};c.setValidationState=function(d){this._jsxuV=d;return this;};c.doValidate=jsx3.Method.newAbstract();c.doReset=function(){this.setValidationState(1);return this;};c.getInputId=function(){return this.getId();};p.validate=function(k,j){var
Qa=k.getDescendantsOfType(jsx3.gui.Form);if(k.instanceOf(jsx3.gui.Form))Qa.unshift(k);var
ab=1;for(var
t=0;t<Qa.length;t++){var
Ta=Qa[t].doValidate();if(j)j(Qa[t],Ta);if(Ta!=1)ab=Ta;}return ab;};p.reset=function(e){var
ya=e.getDescendantsOfType(jsx3.gui.Form);if(e.instanceOf(jsx3.gui.Form))ya.unshift(e);for(var
K=0;K<ya.length;K++)ya[K].doReset();};p.getVersion=function(){return ub.p;};c.emInit=function(k){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL){this.setRelativePosition(0,true);this.setDisplay(ub.q,true);}this._jsxdl=this.getWidth();this._jsxvh=this.getHeight();};c.emGetType=function(){return jsx3.gui.Matrix.EditMask.NORMAL;};c.emPaintTemplate=function(){throw new
jsx3.Exception(ub.r);};c.emGetTemplate=function(l,a){l=(l.replace(ub.s,ub.t)).replace(ub.u,ub.v);a=(a.replace(ub.s,ub.t)).replace(ub.u,ub.v);return ub.w+a+ub.x+ub.y+l+ub.z+ub.A;};c.emBeginEdit=function(a,n,h,f,e,i,l){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL){this.setRelativePosition(0,true);this.emUpdateDisplay(n,h);this.setDisplay(ub.h,true);this.setZIndex(10,true);this.focus();this.emFocus();}this.emSetValue(a);};c.emEndEdit=function(){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL)this.emRestoreDisplay();return this.emGetValue();};c.emSetValue=function(e){this.setValue(e);};c.emGetValue=function(){var
Ia=this.getValue();return Ia!=null?Ia.toString():null;};c.emUpdateDisplay=function(g,h){var
bb=isNaN(this._jsxdl)?g.W:Math.min(parseInt(this._jsxdl),g.W);var
T=isNaN(this._jsxvh)?g.H:Math.min(parseInt(this._jsxvh),g.H);this.setDimensions(g.L,g.T,bb,T,true);};c.emRestoreDisplay=function(){this.setDisplay(ub.q,true);};c.emFocus=function(){};});jsx3.Form=jsx3.gui.Form;
