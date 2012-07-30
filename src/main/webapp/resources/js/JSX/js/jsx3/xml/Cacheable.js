/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Template","jsx3.xml.CDF");jsx3.Class.defineInterface("jsx3.xml.Cacheable",null,function(b,e){var
xb={A:"load.",B:"string",C:"xml.err_load_xsl",D:"_XSL",E:/\s*,\s*/g,F:",",G:"xml.trans_bad",H:"xml.trans_err",I:"3.00.00",a:"jsx:///xsl/xml.xsl",b:"JSX_XML_XSL",c:"",d:"attr",e:"jsxasyncmessage",f:"jsx3.xml.Cacheable.",g:"jsx3.xml.Cacheable.data",h:"xml.err_trans",i:/\s*<\/?JSX_FF_WELLFORMED_WRAPPER( [^>]*)?\/?>\s*/g,j:"jsxxslparams",k:"xml.err_load",l:"data",m:"jsxassignids",n:"1",o:"_XML",p:"xmlbind",q:"load",r:"onChangeServer",s:"h7",t:"onAfterAttach",u:"TC",v:"_jsxbG",w:"onDestroy",x:"lV",y:"loading",z:"k1"};var
Db=jsx3.xml.Document;var
ub=jsx3.xml.CDF;var
Ib=jsx3.util.Logger.getLogger(b.jsxclass.getName());b.DEFAULTSTYLESHEET=jsx3.resolveURI(xb.a);b.DEFAULTXSLCACHEID=xb.b;b.CLEANUPRESOURCES=0;b.SHARERESOURCES=1;e.doTransform=function(q){var
ya=this.getXML();if(this.getNodeSet())ya=this.getNodeSet();var
Ea=this.getXSL();if(ya.hasError()||Ea.hasError())return xb.c;if(!q)q=this.jsxxslparams||{};if(this.getSchema)(jsx3.$H((this.getSchema()).getProps())).each(function(p,g){q[xb.d+p]=g;});var
Ja=xb.c;var
jb=null;if(Ea instanceof jsx3.xml.XslDocument){jb=Ea;jb.reset();}else jb=new
jsx3.xml.Template(Ea);if(!jb.hasError()){jb.setParams(q);if(ya.getNamespaceURI()==jsx3.app.Cache.XSDNS){var
x=this.getServer();jb.setParam(xb.e,x.getDynamicProperty(xb.f+ya.getNodeName(),q.jsxtitle||x.getDynamicProperty(xb.g)));}Ja=jb.transform(ya);if(jb.hasError()){Ib.error(jsx3._msg(xb.h,this,jb.getError()));Ja=xb.c;}}else Ib.error(jsx3._msg(xb.h,this,jb.getError()));return Ja;};e.vo=function(n){return n.replace(xb.i,xb.c);};e.getXSLParams=function(){if(this.jsxxslparams==null)this.jsxxslparams={};return this.jsxxslparams;};e.setXSLParam=function(l,c){if(c!=null)(this.getXSLParams())[l]=c;else delete this.getXSLParams()[l];return this;};e.removeXSLParam=function(k){delete this.getXSLParams()[k];return this;};e.removeXSLParams=function(){delete this[xb.j];return this;};e.getNodeSet=function(){return this._jsxbG;};e.setNodeSet=function(g){this._jsxbG=g;};e.resetCacheData=function(h){var
O=(h||this.getServer()).getCache();O.clearById(this.getXSLId());O.clearById(this.getXMLId());};e.resetXmlCacheData=function(g){var
Gb=(g||this.getServer()).getCache();Gb.clearById(this.getXMLId());};e.resetXslCacheData=function(p){var
I=(p||this.getServer()).getCache();I.clearById(this.getXSLId());};e.clearXmlData=function(){((this.getServer()).getCache()).setDocument(this.getXMLId(),ub.newDocument());};e.getShareResources=function(){return this.jsxshare==null?0:this.jsxshare;};e.setShareResources=function(h){this.jsxshare=h;return this;};e.getXML=function(){var
_a=this.getServer();if(_a==null)return ub.newDocument();var
ma=_a.getCache();var
Ha=this.getXMLId();var
F=ma.getDocument(Ha);var
gb=false;if(F==null){var
Hb=this.getXMLString();if(!jsx3.util.strEmpty(Hb)){F=new
Db();F.loadXML(Hb);}else{var
Cb=this.getXMLURL();if(!jsx3.util.strEmpty(Cb)){Cb=(this.getUriResolver()).resolveURI(Cb);if(this.jsxxmlasync){F=ma.getOrOpenAsync(Cb,Ha);gb=true;this.lz(0,F);}else F=(new
Db()).load(Cb);}else F=ub.newDocument();}if(F.hasError()){Ib.error(jsx3._msg(xb.k,this,F.getError()));return F;}F=this.setSourceXML(F,ma,gb);}return F;};e.setSourceXML=function(f,c,a){if(!c)c=(this.getServer()).getCache();var
F=this.XC(f);var
ea=this.getXMLId();if(!a)c.setDocument(ea,F);else if(F!=f)c.ic(ea,F);this.k0(F);return F;};e.k0=function(n){if(this.instanceOf(ub))if(!n._jsxEF){n._jsxEF=true;if(n.getNodeName()==xb.l&&n.getAttribute(xb.m)==xb.n)this.assignIds();this.convertProperties((this.getServer()).getProperties());}};e.getXMLId=function(){return this.jsxxmlid||this.getId()+xb.o;};e.setXMLId=function(o){this.jsxxmlid=o;return this;};e.getXMLString=function(){return this.jsxxml;};e.setXMLString=function(j){this.jsxxml=j;return this;};e.getXMLURL=function(){return this.jsxxmlurl;};e.setXMLURL=function(k){this.jsxxmlurl=k;return this;};e.getXmlAsync=function(){return this.jsxxmlasync;};e.setXmlAsync=function(d){this.jsxxmlasync=jsx3.Boolean.valueOf(d);return this;};e.getXmlBind=function(){return this.jsxxmlbind;};e.setXmlBind=function(k){this.jsxxmlbind=jsx3.Boolean.valueOf(k);this.lz(this.jsxxmlbind);return this;};e.onXmlBinding=function(n){var
Ab=n.target.getDocument(n.id);if(this.publish)this.publish({subject:xb.p,xml:Ab});};e.k1=function(i){var
tb=i.action==xb.q;if(this.jsxxmlbind&&!tb||!this.jsxxmlbind&&tb){var
Fb=i.target.getDocument(i.id);this.lz(0,Fb);if(tb)this.setSourceXML(Fb,null,true);this.onXmlBinding(i);}};e.h7=function(i,h){var
ga=h.getCache(),za=i.getCache();var
S=this.getXMLId(),Ra=this.getXSLId();var
Ua=ga.getDocument(S);var
ea=ga.getDocument(Ra);if(this.getShareResources()!=1)this.resetCacheData(h);if(Ua)za.setDocument(S,Ua);if(ea)za.setDocument(Ra,ea);this.lz(false,0,h);this.lz(this.jsxxmlbind,0,i);};jsx3.app.Model.jsxclass.addMethodMixin(xb.r,b.jsxclass,xb.s);e.TC=function(){this.lz(this.jsxxmlbind);};jsx3.app.Model.jsxclass.addMethodMixin(xb.t,b.jsxclass,xb.u);e.lV=function(s){var
ia=s.getServer();this.lz(false,0,ia);if(this.getShareResources()==0)this.resetCacheData(ia);delete this[xb.v];};jsx3.app.Model.jsxclass.addMethodMixin(xb.w,b.jsxclass,xb.x);e.lz=function(k,h,c){if(!c)c=this.getServer();if(c){var
Z=c.getCache();var
xa=this.getXMLId();var
Ja=null;if(h){if(!this.jsxxmlbind)Ja=!h.hasError()&&h.getNamespaceURI()==jsx3.app.Cache.XSDNS&&h.getNodeName()==xb.y;}else Ja=k;if(Ja!=null&&Boolean(this._jsxqs)!=Ja){if(Ja){Z.subscribe(xa,this,xb.z);Z.subscribe(xb.A+xa,this,xb.z);}else{Z.unsubscribe(xa,this);Z.unsubscribe(xb.A+xa,this);}this._jsxqs=Ja;}}};e.getXSL=function(){return this.nd(b.DEFAULTSTYLESHEET);};e.nd=function(m,a){var
R=jsx3.xml.XslDocument;var
ka=this.getXSLId();var
ib=(this.getServer()).getCache();var
Ea=ib.getDocument(ka);if(Ea==null){if(this.getXSLString()!=null){Ea=(new
R()).loadXML(this.getXSLString());}else if(this.getXSLURL()!=null){Ea=(new
R()).load((this.getUriResolver()).resolveURI(this.getXSLURL()));}else{var
vb=jsx3.getSharedCache();if(a){Ea=vb.getDocument(m);if(!Ea){Ea=typeof a==xb.B?(new
R()).loadXML(a):a;vb.setDocument(m,Ea);}}else Ea=vb.getOrOpenDocument(m,null,R.jsxclass);}if(Ea.hasError()){Ib.error(jsx3._msg(xb.C,this,Ea.getError()));return Ea;}ib.setDocument(ka,Ea);}return Ea;};e.getXSLId=function(){var
ha=null;ha=this.jsxxslid;return ha||this.getId()+xb.D;};e.setXSLId=function(d){this.jsxxslid=d;return this;};e.getXSLString=function(){return this.jsxxsl;};e.setXSLString=function(n){this.jsxxsl=n;return this;};e.getXSLURL=function(){return this.jsxxslurl;};e.setXSLURL=function(j){this.jsxxslurl=j;return this;};e.getXMLTransformers=function(){return this.jsxxmltrans!=null?this.jsxxmltrans.split(xb.E):[];};e.setXMLTransformers=function(r){this.jsxxmltrans=r!=null?jsx3.$A.is(r)?r.join(xb.F):r:null;};e.XC=function(a){var
ja=this.getXMLTransformers();if(ja.length>0){var
ea=this.getServer();var
Ea=ea.getCache();var
Da=a;for(var
Fb=0;Fb<ja.length;Fb++){var
F=ja[Fb];var
Bb=Ea.getDocument(F);if(Bb==null){F=(this.getUriResolver()).resolveURI(F);Bb=Ea.openDocument(F,F);}if(Bb==null||Bb.hasError()){Ib.warn(jsx3._msg(xb.G,F,this,Bb.getError()));Ea.clearById(F);continue;}var
Ab=new
jsx3.xml.Template(Bb);Ab.setParams(this.getXSLParams());Da=Ab.transformToObject(Da);if(Ab.hasError())throw new
jsx3.Exception(jsx3._msg(xb.H,F,this,Ab.getError()));if(Da.hasError())throw new
jsx3.Exception(jsx3._msg(xb.H,F,this,Da.getError()));}return Da;}else return a;};b.getVersion=function(){return xb.I;};});jsx3.xml.Cacheable.prototype.resetData=jsx3.xml.Cacheable.prototype.clearXmlData;
