jsx3.lang.Package.definePackage("jsx3.amp",function(o){var
ub={a:"http://www.generalinterface.org/gi/amp",b:"amp",c:"plugins.xml",d:"plugin.xml",e:"plugins",f:"jsx3.amp",g:"string",h:"function",i:"",j:/\s/g};o.NS=ub.a;o.jw={"http://www.tibco.com/gi/amp":true,"http://www.generalinterface.org/gi/amp":true};o.isNS=function(c){return o.jw[c];};o.getXmlNS=function(h){var
Nb={};Nb[h.getNamespaceURI()]=ub.b;return Nb;};o.DESCRIPTOR=ub.c;o.METAFILE=ub.d;o.DIR=ub.e;o.LOG=jsx3.util.Logger.getLogger(ub.f);o.Pi=function(i){var
Q=i;if(typeof Q==ub.g)Q=jsx3.Class.forName(Q)||jsx3.lang.getVar(Q);if(Q instanceof jsx3.Class)Q=Q.getConstructor();if(typeof Q!=ub.h)Q=null;return Q;};o.kn=function(h,n){var
eb=(jsx3.$S(h||ub.i)).trim();if(eb.length>0){var
ia=jsx3.$A(eb.split(ub.j));var
Z=n.getSearchPath();var
ua=(jsx3.$A(Z)).find(function(i){return ia.contains(i.toString());});if(ua)return ua.toString();}return ub.i;};});jsx3.lang.Package.definePackage("jsx3.amp.util",function(e){});jsx3.lang.Class.defineInterface("jsx3.amp.Bindable",null,function(b,g){g.U6=function(){if(!this._bindings)this._bindings=jsx3.$H();return this._bindings;};g.addBindableProp=function(d,i){var
ub=this.U6();ub[d]={H0:d,LM:i};};g.getBindableProps=function(){return (this.U6()).keys();};g.updateBindableOn=function(p,o,c){o.subscribe(c,(jsx3.$F(this.updateBindable)).bind(this,[p]));};g.updateBindable=function(f){var
Q=(this.U6())[f];this.setBindableProp(f,this.eval(Q.LM));};g.setBindableProp=function(q,p){var
ab=this[q];if(ab!==p){this[q]=p;if(this.publish)this.publish({subject:q,oldValue:ab,value:p});}};});jsx3.lang.Class.defineClass("jsx3.amp.Ext",null,null,function(f,q){var
ub={a:".",b:"?",c:"id",d:"name",e:"point"};var
w=jsx3.amp;q.init=function(i,c){this._xml=new
w.XML(c);this.E0=i;};q.getId=function(){var
la=this.getLocalId();return this.getPlugIn()+ub.a+(la||ub.b);};q.getLocalId=function(){return this._xml.attr(ub.c);};q.getName=function(){return this._xml.attr(ub.d);};q.getPlugIn=function(){return this.E0;};q.getEngine=function(){return this.E0.getEngine();};q.getPointId=function(){return this._xml.attr(ub.e);};q.getPoint=function(){return (this.getEngine()).getExtPoint(this.getPointId());};q.getData=function(){return this._xml.children();};q.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.ExtPoint",null,[jsx3.util.EventDispatcher],function(c,f){var
ub={a:"extended",b:".",c:"id",d:"name",e:"processor",f:"type",g:"Parameter objProcessor must not be null."};var
w=jsx3.amp;c.EXTENDED=ub.a;f.init=function(s,m){this._xml=new
w.XML(m,true);this.E0=s;};f.getId=function(){return this.E0.getId()+ub.b+this.getLocalId();};f.getLocalId=function(){return this._xml.attr(ub.c);};f.getName=function(){return this._xml.attr(ub.d);};f.getPlugIn=function(){return this.E0;};f.getEngine=function(){return this.E0.getEngine();};f.getExts=function(){return (this.getEngine()).getExts(this.getId());};f.processExts=function(e,k){if(!e){var
Xa=this._xml.child(ub.e);if(Xa)e=w.ExtProc.getProcessor(Xa.attr(ub.f),Xa);if(!e)throw new
jsx3.Exception(ub.g);}if(!k)k=this.getExts();return w.ExtProc.process(k,e);};f.onExtension=function(m){this.publish({subject:c.EXTENDED,exts:m});};f.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.ExtProc",null,null,function(n,p){var
ub={a:"function",b:"instance-class",c:"ext-class",d:"amp.36",e:"load",f:"true"};var
ca=jsx3.amp;n.process=function(q,a){var
pb=jsx3.$A();for(var
C=0;C<q.length;C++){var
Gb=q[C];var
t=Gb.getData();for(var
Ga=0;Ga<t.length;Ga++){var
Ha=t[Ga];if(typeof a==ub.a){pb.push(a(Gb,Ha));}else pb.push(a.process(Gb,Ha));}}return pb;};n.Q8={eval:function(a){return n.EVAL;},"return":function(i){return n.RETURN;},"return-async":function(k){return n.RETURN_ASYNC;},instantiator:function(g){return n.newDescrProc(g.attr(ub.b));}};n.addProcessorFactory=function(l,c){n.Q8[l]=c;};n.getProcessor=function(e,i){var
ib=n.Q8[e];if(ib){return ib(i);}else return null;};n.iB=function(d){this._constructor=d;};n.iB.prototype.process=function(l,s){var
_=s.attr(ub.c);var
Ia=this._constructor;if(_){var
Hb=ca.Pi(_);if(Hb)Ia=Hb;else ca.LOG.error(jsx3._msg(ub.d,_));}return new
Ia(l,s);};n.EVAL={process:function(e,s){var
Q=s.attr(ub.e)==ub.f;var
Na=s.value();if(Q){((e.getPlugIn()).load()).when(function(){e.eval(Na);});}else e.eval(Na);}};n.RETURN={process:function(l,s){var
N=s.value();return l.eval(N);}};n.RETURN_ASYNC={process:jsx3.$Y(function(a){var
Wa=(a.args())[0];var
S=(a.args())[1];var
na=S.attr(ub.e)==ub.f;var
_a=S.value();if(na){((Wa.getPlugIn()).load()).when(function(){a.done(Wa.eval(_a));});}else a.done(Wa.eval(_a));})};n.newDescrProc=function(a){return new
n.iB(ca.Pi(a));};});jsx3.lang.Class.defineClass("jsx3.amp.PlugIn",null,[jsx3.util.EventDispatcher,jsx3.net.URIResolver,jsx3.amp.Bindable],function(i,o){var
ub={A:"amp.44",B:"{",C:"}",D:/[^\w\$]+/g,E:"with(this){",a:"ready",b:"extended",c:"id",d:"global",e:"true",f:"name",g:"version",h:"requires",i:"amp:plugin",j:"event",k:"extension-point",l:"class",m:"amp.38",n:"amp.39",o:"extension",p:"amp.40",q:"amp.41",r:"/",s:"vB",t:"amp.42",u:"jsxapp",v:"jsxplugin",w:"Parent container not specified for loading resource ",x:".",y:"No resource ",z:" in plug-in "};var
La=jsx3.amp;i.READY=ub.a;i.EXTENDED=ub.b;i.U1=0;i.CF=1;i.ls=2;o.init=function(){this.wP=i.U1;this.lw=jsx3.$A();this.KR=jsx3.$A();this.ry={};this.xt=jsx3.$A();this.TT={};this.DI=jsx3.$A();this.v3={};this.f3=jsx3.$A();};o.setData=function(p){this.H0=p.getAttribute(ub.c);this.pK=p.getAttribute(ub.d)==ub.e;this.JM=p.getAttribute(ub.f);this.I9=p.getAttribute(ub.g);var
ya=(p.getChildNodes()).toArray(true);for(var
E=0;E<ya.length;E++){var
qa=ya[E];var
Na=qa.getBaseName();if(Na==ub.h){for(var
ca=qa.selectNodeIterator(ub.i,La.getXmlNS(qa));ca.hasNext();)this.lw.push((ca.next()).getAttribute(ub.c));}else if(Na==ub.j){this.f3.push(qa.getAttribute(ub.c));}else if(Na==ub.k){var
Ja=null;var
N=qa.getAttribute(ub.l);if(N){Ja=La.Pi(N);if(!Ja)La.LOG.error(jsx3._msg(ub.m,N));}if(!Ja)Ja=La.ExtPoint;var
lb=new
Ja(this,qa);var
Q=lb.getLocalId();if(this.TT[Q]){La.LOG.error(jsx3._msg(ub.n,this,Q));}else{La.Engine.Sh(lb,qa);this.TT[Q]=lb;this.xt.push(lb);}}else if(Na==ub.o){var
Xa=null;var
V=qa.getAttribute(ub.l);if(V){Xa=La.Pi(V);if(!Ja)La.LOG.error(jsx3._msg(ub.p,V));}if(!Xa)Xa=La.Ext;var
F=new
Xa(this,qa);var
Q=F.getLocalId();if(Q!=null)if(this.v3[Q]){La.LOG.error(jsx3._msg(ub.q,this,Q));}else this.v3[Q]=F;La.Engine.Sh(F,qa);this.DI.push(F);}}};o.setEngine=function(a){this.tr=a;};o.setPath=function(a){this.nM=a;this.io=new
jsx3.net.URI(a+ub.r);this.Co=(jsx3.app.Browser.getLocation()).resolve(this.io);};o.setResources=function(p){this.KR=jsx3.$A(p);this.ry={};for(var
Fb=0;Fb<p.length;Fb++){var
Pa=p[Fb];Pa.ac(this);if(!Pa.isLoaded())Pa.subscribe(La.Resource.READY,this,ub.s);this.ry[Pa.getLocalId()]=Pa;}};o.getId=function(){return this.H0;};o.isGlobal=function(){return this.pK;};o.getName=function(){return this.JM;};o.getVersion=function(){return this.I9;};o.getResources=function(){return this.KR;};o.getEvents=function(){return this.f3;};o.getResource=function(a){return this.ry[a];};o.getRequires=function(){return this.lw;};o.load=jsx3.$Y(function(s){if(this.wP==i.U1){La.LOG.debug(jsx3._msg(ub.t,this));this.wP=i.CF;return this.tr.Kh(this);}else if(!this.isLoaded())this.subscribe(i.READY,(jsx3.$F(s.done)).bind(s));else s.done();});o.loaded=jsx3.$Y(function(c){if(this.isLoaded()){c.done();}else this.subscribe(i.READY,(jsx3.$F(c.done)).bind(c));});o.vB=function(k){};o.fd=function(){this.wP=i.ls;this.onLoaded();this.publish({subject:i.READY});};o.isLoaded=function(){return this.wP==i.ls;};o.getEngine=function(){return this.tr;};o.getServer=function(){return this.tr.getServer();};o.getExtPoints=function(){return this.xt;};o.getExtPoint=function(j){return this.TT[j];};o.addExtPoint=function(f){var
U=f.getLocalId();this.TT[U]=f;this.xt.push(f);this.tr.dg(f);};o.removeExtPoint=function(e){var
Fa=e.getLocalId();if(e===this.TT[Fa])delete this.TT[Fa];this.xt.remove(e);this.tr.Dc(e);};o.addExt=function(a){var
Ga=a.getLocalId();if(Ga!=null)if(this.v3[Ga]){La.LOG.error(jsx3._msg(ub.q,this,Ga));}else this.v3[Ga]=a;this.DI.push(a);this.tr.qn(a,true);};o.removeExt=function(r){var
X=r.getLocalId();if(r===this.v3[X])delete this.v3[X];this.DI.remove(r);this.tr.Hg(r);};o.getExts=function(){return this.DI;};o.getExt=function(n){return this.v3[n];};o.onRegister=function(){};o.onLoaded=function(){};o.onStartup=function(){};o.onExtension=function(f,b){this.publish({subject:i.EXTENDED,extpt:f,exts:b});};o.resolveURI=function(n){var
Ja=jsx3.net.URI.valueOf(n);if(Ja.getScheme()==ub.u&&!Ja.getHost())return (this.getServer()).resolveURI((Ja.getPath()).substring(1));if(!jsx3.net.URIResolver.isAbsoluteURI(Ja))Ja=this.io.resolve(Ja);return jsx3.net.URIResolver.DEFAULT.resolveURI(Ja);};o.getUriPrefix=function(){return this.io.toString();};o.relativizeURI=function(e,c){var
Za=jsx3.app.Browser.getLocation();var
Fb=this.Co.relativize(Za.resolve(e));if(Fb.isAbsolute()||c)return Fb;else return jsx3.net.URI.fromParts(ub.v,null,this.getId(),null,ub.r+Fb.getPath(),Fb.getQuery(),Fb.getFragment());};o.toString=function(){return this.H0;};o.getLog=function(){return jsx3.util.Logger.getLogger(this.getId());};o.loadRsrcComponent=function(f,a,q){if(!a)throw new
jsx3.Exception(ub.w+f+ub.x);var
xa=f instanceof La.Resource?f:this.getResource(f);if(!xa)throw new
jsx3.Exception(ub.y+f+ub.z+this+ub.x);var
P=a.loadXML(xa.getData(),false,this);P.getPlugIn=(jsx3.$F(function(){return this;})).bind(this);if(P.onRsrcLoad)try{P.onRsrcLoad();}catch(Kb){La.LOG.error(jsx3._msg(ub.A,f),jsx3.NativeError.wrap(Kb));}if(q!==false)a.paintChild(P);return P;};i.isBindExpr=function(k){return k.indexOf(ub.B)==0&&(jsx3.$S(k)).endsWith(ub.C);};o.regBindExpr=function(h,k){var
B=h.substring(1,h.length-1);var
za=jsx3.$H(B.split(ub.D));var
ba=(this.getBindableProps()).filter(function(b){return za[b];});var
P=(jsx3.$F(function(){var
t=this.eval(ub.E+B+ub.C);k(t);})).bind(this);if(ba.length>0)ba.each((jsx3.$F(function(s){this.subscribe(s,P);})).bind(this));P();};});jsx3.lang.Class.defineClass("jsx3.amp.ClassPlugIn",jsx3.amp.PlugIn,null,function(a,l){var
ub={a:"class",b:"jsx:/js/",c:/\./g,d:"/",e:".js",f:"script"};var
Nb=jsx3.amp;l.isLoaded=function(){return jsx3.Class.forName(this.getId())!=null;};l.setResource=function(o){};l.getResources=function(){if(!this.KR||this.KR.length==0){var
F=new
Nb.Resource(this,ub.a,{"@path":ub.b+(this.getId()).replace(ub.c,ub.d)+ub.e,"name()":ub.f});this.KR=jsx3.$A([F]);}return this.KR;};});jsx3.lang.Class.defineClass("jsx3.amp.XML",null,null,function(k,n){var
ub={a:"@",b:"name()",c:"/",d:"children()",e:"value()",f:""};n.init=function(b){if(b instanceof jsx3.xml.Entity)this._native=true;this._xml=b;};n.attr=function(q){return this._native?this._xml.getAttribute(q):this._xml[ub.a+q];};n.nname=function(){return this._native?this._xml.getBaseName():this._xml[ub.b];};n.child=function(a){if(this._native){for(var
L=this._xml.getChildIterator();L.hasNext();){var
Z=L.next();if(Z.getBaseName()==a)return new
k(Z);}return null;}else{var
bb=this._xml[ub.c+a];return bb?new
k(bb):null;}};n.children=function(){if(this._native)return (jsx3.$A((this._xml.getChildNodes()).toArray())).map(function(b){return new
k(b);});else return (jsx3.$A(this._xml[ub.d])).map(function(l){return new
k(l);});};n.value=function(){if(this._native)return this._xml.getValue();else return this._xml[ub.e];};n.toNative=function(){if(this._native)return this._xml;};n.toString=function(){if(this._native)return this._xml.toString();else return ub.f;};});jsx3.lang.Class.defineClass("jsx3.amp.Resource",null,[jsx3.util.EventDispatcher],function(s,i){var
ub={a:"ready",b:"script",c:"css",d:"xml",e:"xsl",f:"jss",g:"propsbundle",h:"early",i:"normal",j:"manual",k:"_j",l:"Po",m:"uT",n:".",o:"path",p:"",q:"locales",r:/\s+/g,s:"/",t:"load",u:"J6"};var
Aa=jsx3.amp;s.READY=ub.a;s.TYPE_SCRIPT=ub.b;s.TYPE_CSS=ub.c;s.TYPE_XML=ub.d;s.TYPE_XSL=ub.e;s.TYPE_JSS=ub.f;s.TYPE_BUNDLE=ub.g;s.LOAD_EARLY=ub.h;s.LOAD_NORMAL=ub.i;s.LOAD_MANUAL=ub.j;s.fQ={early:1,normal:1,manual:1};s.U1=0;s.CF=1;s.ls=2;s.wh=function(d,e,o,p,l){var
t=new
s(null,o,p);t._j=d;t.Po=e;t.uT=l;return t;};i.init=function(c,d,h){this.rO=new
Aa.XML(h||{});this.dV=h;this.E0=c;this.H0=d;this.dD=jsx3.$A();this.wP=s.U1;this.J6=null;};i.ac=function(p){this.E0=p;delete this[ub.k];delete this[ub.l];delete this[ub.m];};i.attr=function(j){return this.rO.attr(j);};i.xml=function(){return this.dV;};i.getPlugIn=function(){return this.E0;};i.getId=function(){return (this.E0?this.E0.getId():this._j)+ub.n+this.H0;};i.getLocalId=function(){return this.H0;};i.getPath=function(){return this.attr(ub.o);};i.getFullPath=function(d){var
Ea=d||this.getPath();return this.E0?ub.p+this.E0.resolveURI(Ea):this.Po+Ea;};i.getLocales=function(){var
ba=this.attr(ub.q);if(ba){ba=(jsx3.$S(ba)).trim();if(ba.length>0)return ba.split(ub.r);}return [];};i.getPathForLocale=function(d){var
Db=this.getPath();if(d){var
Ma=Aa.kn(this.attr(ub.q),d);if(Ma){var
pb=Db.lastIndexOf(ub.n);if(pb<0||pb<Db.lastIndexOf(ub.s))pb=Db.length;Db=Db.substring(0,pb)+ub.n+Ma+Db.substring(pb);}}return Db;};i.getType=function(){return this.rO.nname();};i.getLoadType=function(){var
Ib=this.attr(ub.t);return s.fQ[Ib]?Ib:s.LOAD_NORMAL;};i.bf=function(){return this.dD;};i.Bc=function(f,l){this.dD.push({id:f,type:l});};i.isLoaded=function(){return this.wP==s.ls;};i.loaded=jsx3.$Y(function(c){if(this.isLoaded()){c.done();}else this.subscribe(s.READY,(jsx3.$F(c.done)).bind(c));});i.load=jsx3.$Y(function(c){if(this.wP==s.U1){return (this.E0?this.E0.getEngine():this.uT).Rk(this);}else if(!this.isLoaded())this.subscribe(s.READY,(jsx3.$F(c.done)).bind(c));else c.done();});i.hc=function(h){this.wP=s.CF;};i.te=function(o){this.wP=s.ls;this.J6=o;this.publish({subject:s.READY});};i.getData=function(b){var
pb=this.J6;if(b)delete this[ub.u];return pb;};i.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.Engine",null,[jsx3.util.EventDispatcher],function(f,p){var
ub={A:"amp.07",Aa:"field",Ab:"amp.35",B:"locales",Ba:"amp.15",C:"/plugin.",Ca:"method",D:".xml",Da:"lazy",E:"amp.53",Ea:"true",F:"amp.54",Fa:"params",G:"extension-point",Ga:" = function(",H:"extension",Ha:") {",I:"amp:",Ia:"async",J:"[@id]",Ja:"amp.16",K:'[@id="',Ka:"Already loaded plug-in ",L:'"]',La:"amp.11",M:"amp.55",Ma:"amp.12",N:"amp:resources",Na:"plugin.load",O:"amp.26",Oa:"amp.18",P:"amp.08",Pa:"property",Q:"_assigned_",Qa:"amp.43",R:"_",Ra:"amp.20",S:"amp:prereq",Sa:"amp.21",T:"rsrc",Ta:"shared",U:"amp:requires/amp:plugin",Ua:"system",V:"global",Va:"r.",W:"amp.09",Wa:"cache",X:"function",Xa:"cachekey",Y:"amp.10",Ya:"amp.52",Z:"amp:bindable",Za:"amp.23",_:"value",_a:"css",a:"load",aa:"subscribe",ab:"jss",b:"error",ba:/\s+/g,bb:"propsbundle",c:"register",ca:"Mz",cb:"xml",d:"progress",da:"amp:subscribe",db:"xsl",e:"namespace",ea:"event",eb:"eval",f:"CK",fa:"handler",fb:"js.eval",g:"jsxplugin",ga:"when",gb:"amp.32",h:"jsx3.amp.Engine",ha:"this.",hb:"amp.33",i:"/",ia:"(evt);",ib:"amp.22",j:'<?xml version="1.0" encoding="UTF-8"?><plugins xmlns="http://www.generalinterface.org/gi/amp" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.generalinterface.org/gi/amp http://www.generalinterface.org/xsd/plugins.xsd">\n\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.HotKey"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Heavyweight"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Interactive">\n    <requires>\n      <plugin id="jsx3.gui.HotKey"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Painted"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Block">\n    <requires>\n      <plugin id="jsx3.gui.Interactive"/>\n      <plugin id="jsx3.gui.Painted"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Label">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.app.UserSettings"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.net.Form"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.xml.Cacheable"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Form"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Alerts"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.BlockX">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ToolbarButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.WindowBar">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Dialog">\n    <requires>\n      <plugin id="jsx3.gui.Alerts"/>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Button">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeFileUpload">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeHidden">\n    <requires>\n      <plugin id="jsx3.gui.Painted"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeForm">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TextBox">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NumberInput">\n    <requires>\n      <plugin id="jsx3.gui.TextBox"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.CheckBox">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.RadioButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Splitter">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.LayoutGrid">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Stack">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.StackGroup">\n    <requires>\n      <plugin id="jsx3.gui.LayoutGrid"/>\n      <plugin id="jsx3.gui.Stack"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Tab">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TabbedPane">\n    <requires>\n      <plugin id="jsx3.gui.Tab"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Select">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeSelect">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Menu">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Tree">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.DatePicker">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Slider">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Sound">\n    <requires>\n      <plugin id="jsx3.gui.Interactive"/>\n      <plugin id="jsx3.gui.Painted"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Window"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ImageButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ColorPicker">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TimePicker">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Matrix.Column">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Matrix">\n    <requires>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n      <plugin id="jsx3.gui.Matrix.Column"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Image">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.net.Service"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Table">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.html.DOM"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.html.Style"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Template">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.html.DOM"/>\n      <plugin id="jsx3.html.Style"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.util.Dojo"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.xml.DojoDataStore">\n    <requires>\n      <plugin id="jsx3.util.Dojo"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.DojoWidget">\n    <requires>\n      <plugin id="jsx3.util.Dojo"/>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n\n  <plugin id="jsx3.gui.Alerts.alert">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_alert.xml"/>\n    </resources>\n  </plugin>\n  <plugin id="jsx3.gui.Alerts.confirm">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_confirm.xml"/>\n    </resources>\n  </plugin>\n  <plugin id="jsx3.gui.Alerts.prompt">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_prompt.xml"/>\n    </resources>\n  </plugin>\n\n  <plugin class="jsx3.amp.Main" id="jsx3.amp.main" name="Controller Plug-In" version="0.1">\n\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n\n    <resources>\n      <script id="Main" load="early">\n        <data><![CDATA[jsx3.lang.Class.defineClass("jsx3.amp.Main",jsx3.amp.PlugIn,null,function(r,g){var\nub={a:"Main.onRegister",b:"vu",c:"Main.onExtension ",d:" [",e:"]",f:"progress",g:"init",h:"layout",i:"onComplete",j:"setProgress",k:"Main.onStartup"};var\nw=jsx3.amp;g.onRegister=function(){w.LOG.debug(ub.a);this._progress=jsx3.$A();this._pctdone=0;this._mainComp=null;(this.getEngine()).subscribe(w.Engine.PROGRESS,this,ub.b);this.load();};g.onExtension=function(k,e){this.jsxsuper(k,e);w.LOG.debug(ub.c+k+ub.d+e+ub.e);var\nu=k.getLocalId();if(u==ub.f){(k.processExts(null,e)).each((jsx3.$F(function(c){c.when((jsx3.$F(function(m){m.setProgress(this._pctdone);this._progress.push(m);})).bind(this));})).bind(this));}else if(u==ub.g){(jsx3.$A(e)).each(function(q){(q.getPlugIn()).load();});}else if(u==ub.h)(jsx3.$A(e)).each(function(h){(h.getPlugIn()).load();});};g.vu=function(i){this._pctdone=i.pct;var\nF=i.done?ub.i:ub.j;var\neb=this._pctdone;this._progress.each(function(a){a[F](eb);});};g.onStartup=function(){(this.loaded()).when((jsx3.$F(function(){w.LOG.debug(ub.k);(this.getExtPoint(ub.g)).processExts();var\nha=(this.getExtPoint(ub.h)).processExts();if(ha.length>0){var\nca=(this.getServer()).getBodyBlock();ha[0].when(function(j){j(ca);});}})).bind(this));};});]]></data>\n      </script>\n    </resources>\n\n    \n    <extension-point id="progress" name="Initialization Progress Extension Point">\n      \n      <processor type="return-async"/>\n    </extension-point>\n\n    \n    <extension-point id="init" name="Initialization Extension Point">\n      <processor type="eval"/>\n    </extension-point>\n\n    \n    <extension-point id="layout" name="Main Component Extension Point">\n      \n      <processor type="return-async"/>\n    </extension-point>\n\n  </plugin>\n\n  <plugin class="jsx3.amp.AutoReg" id="jsx3.amp.autoreg" name="Plug-In Auto-Registration Plug-In" version="0.1">\n\n    <resources>\n      <script id="js" load="early">\n        <data><![CDATA[jsx3.lang.Class.defineClass("jsx3.amp.AutoReg",jsx3.amp.PlugIn,null,function(l,q){var\nub={a:"plugins_auto",b:"/",c:"dirlist",d:/^([\\w\\-]+)(\\.[\\w\\-]+)*$/,e:"done"};var\nw=jsx3.amp;l.DIR=ub.a;q.hasProvider=function(){return this._hasProvider;};q.hasCompleted=function(){return this._done;};q.onRegister=function(){this._hasProvider=false;this._done=false;this._uri=(jsx3.app.Browser.getLocation()).resolve((this.getServer()).resolveURI(l.DIR+ub.b));};q.onExtension=function(d,s){this.jsxsuper(d,s);if(d.getLocalId()==ub.c)if(!this._hasProvider)for(var\nA=0;A<s.length;A++){var\nU=s[A];if(U.isAvailable(this._uri.getScheme())){this._hasProvider=true;this._loadWith(U);break;}}};q._loadWith=function(b){((b.getPlugIn()).load()).when((jsx3.$F(function(){var\nZ=b.getDirNames(this._uri);Z=Z.filter(function(r){return r.match(ub.d);});Z.each((jsx3.$F(function(a){(this.getEngine()).register(a,this._uri);})).bind(this));this._done=true;this.publish({subject:ub.e});})).bind(this));};});]]></data>\n      </script>\n    </resources>\n\n    \n    <event id="done"/>\n\n    <extension-point id="dirlist" name="Provide Directory Listing">\n      \n    </extension-point>\n  </plugin>\n\n  <plugin id="jsx3.amp.persist" name="Data Persistance Plug-In" version="0.1">\n\n    <method id="getFirstProvider">\n      return this.getExtPoint("provider").getExts().find(function(e) { return e.isAvailable(); });\n    </method>\n\n    <extension-point id="provider" name="Provide Persistance">\n      \n    </extension-point>\n\n    <extension id="cookie" point="jsx3.amp.persist.provider">\n      <method id="_getKey" params="k">\n        return "com_tibco_gi_amp_persist_" + k;\n      </method>\n\n      <method id="isAvailable">\n        var s = this.getPlugIn().getServer();\n        var k = this._getKey("__test"), v = "foobar";\n        s.setCookie(k, v);\n        var ok = s.getCookie(k) == v;\n        s.deleteCookie(k);\n        return ok;\n      </method>\n\n      <method id="get" params="k">\n        var s = this.getPlugIn().getServer();\n        return s.getCookie(this._getKey(k));\n      </method>\n\n      <method id="put" params="k, v">\n        var s = this.getPlugIn().getServer();\n        s.deleteCookie(this._getKey(k));\n        var now = new Date();\n        s.setCookie(this._getKey(k), v, new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()));\n      </method>\n\n      <method id="remove" params="k">\n        var s = this.getPlugIn().getServer();\n        s.deleteCookie(this._getKey(k));\n      </method>\n    </extension>\n  </plugin>\n\n  <plugin id="jsx3.amp.util.menumgr" name="MenuManager Plug-In" version="0.1">\n    <requires>\n      <plugin id="jsx3.gui.Menu"/>\n    </requires>\n    <resources>\n      <script id="js" path="MenuManager.js"/>\n    </resources>\n  </plugin>\n\n  <plugin id="jsx3.amp.util.toolbarmgr" name="ToolbarManager Plug-In" version="0.1">\n    <requires>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n    <resources>\n      <script id="js" path="ToolbarManager.js"/>\n    </resources>\n  </plugin>\n\n  <plugin global="true" id="jsx3.amp.util.prefspanel" name="PrefsPane Plug-In" property="jsx3.amp.util.PrefsPane.PLUGIN" version="0.1">\n    <resources>\n      <script id="js" path="PrefsController.js"/>\n      <xml id="controller" path="controller.xml"/>\n    </resources>\n  </plugin>\n\n  <plugin global="true" id="jsx3.amp.util.wizard" name="Wizard Plug-In" property="jsx3.amp.util.Wizard.PLUGIN" version="0.1">\n    <resources>\n      <script id="js" path="Wizard.js"/>\n      <xml id="controller" path="controller.xml"/>\n    </resources>\n  </plugin>\n\n</plugins>',ja:"this.load().when(jsx3.$F(function(){",jb:"amp.25",k:"engine.load",ka:"}).bind(this));",kb:"amp:data",l:"jsx3.amp.autoreg",la:"loaded",lb:"style",m:"done",ma:"if(this.isLoaded()){",mb:"type",n:"amp.02",na:"}",nb:"text/css",o:"plugins",oa:"_evt_",ob:"head",p:"",pa:/\./g,pb:"beforeEnd",q:"plugin",qa:"var ",qb:'<style type="text/css">\n',r:"amp.04",ra:" = function(evt){",rb:"\n</style>",s:"amp.03",sa:"}; ",sb:"amp.29",t:"id",ta:";",tb:"*",u:"class",ua:".",ub:"GET",v:"path",va:"amp.13",vb:"TG",w:"p.",wa:"amp.17",wb:"link",x:"amp.01",xa:"amp:script | amp:field | amp:method",xb:"stylesheet",y:"amp.05",ya:"script",yb:"rq",z:"amp.06",za:"amp.14",zb:"amp.34"};var
na=jsx3.amp;var
wa=jsx3.xml.Document;var
S=jsx3.util.Job;f.LOAD=ub.a;f.ERROR=ub.b;f.REGISTER=ub.c;f.PROGRESS=ub.d;f.BP={};f.rY={};f.getEngine=function(a){var
I=a.getEnv(ub.e);if(!f.BP[I])f.BP[I]=new
f(a);return f.BP[I];};f.zi=function(b){var
Ab=b.getAddins();for(var
Cb=0;Cb<Ab.length;Cb++)if(Ab[Cb]==na.ADDIN){f.getEngine(b);return;}};f.Cm=function(){var
Mb=jsx3.app.Server;var
ab=Mb.allServers();for(var
pb=0;pb<ab.length;pb++)f.zi(ab[pb]);Mb.subscribe(Mb.INITED,f,ub.f);};f.CK=function(s){f.zi(s.target);};jsx3.net.URIResolver.register(ub.g,function(q){var
Lb=q.getHost();for(var Wa in f.BP){var
ga=f.BP[Wa].getPlugIn(Lb);if(ga)return ga;}return null;});p.init=function(r){this.J2=r;this.j5=jsx3.$A();this.zp={};this.fw={__ct:0};this.TT={};this.v3={};this.jx=0;this.kC=jsx3.util.EventDispatcher.jsxclass.newInnerClass();this.sU=0;this.Lp={};this.mZ={};this.C3=new
db(this);this.qw=false;this.wB();};p.wB=jsx3.$Y(function(r){var
kb=new
jsx3.util.Timer(ub.h,(this.getServer()).getEnv(ub.e));var
da=na.DIR+ub.i+na.DESCRIPTOR;var
xa=na.ADDIN.resolveURI(da);var
lb=(new
jsx3.xml.Document()).loadXML(ub.j);var
Ga=this.uQ(lb,xa);Ga.when((jsx3.$F(function(){this.C3.yN();})).bind(this));var
A=f.nL(this.J2.resolveURI(da));var
Pa=this.uQ(A,Ga);var
T=this.dW(Pa);var
za=jsx3.$Z(this.ow,this)(T);za.when(function(){kb.log(ub.k);});return za;});p.dW=jsx3.$Y(function(r){var
Bb=this.getPlugIn(ub.l);(Bb.load()).when(function(){if(Bb.hasProvider()&&!Bb.hasCompleted())Bb.subscribe(ub.m,function(){r.done();});else r.done();});});p.uQ=jsx3.$Y(function(o){var
Mb=(o.args())[0];var
B=(o.args())[1]||Mb.getSourceURL();na.LOG.debug(jsx3._msg(ub.n,B));if(!Mb.hasError()){var
ra=Mb.getBaseName();var
ga=Mb.getNamespaceURI();if(ra==ub.o&&na.isNS(ga)){var
Bb=((new
jsx3.net.URI(B)).resolve(ub.p)).toString();Bb=Bb.substring(0,Bb.length-1);var
P=null;for(var
Y=(Mb.getChildNodes()).iterator();Y.hasNext();){var
Kb=Y.next();if(Kb.getBaseName()==ub.q&&na.isNS(Kb.getNamespaceURI())){var
X=this.sI(Kb,Bb);P=P?P.and(X):X;}}if(P)return P;o.done();}else{na.LOG.error(jsx3._msg(ub.r,ra,ga));this.publish({subject:f.ERROR,xml:Mb});o.done();}}else{na.LOG.error(jsx3._msg(ub.s,Mb.getError()));this.publish({subject:f.ERROR,xml:Mb});o.done();}});p.sI=jsx3.$Y(function(l){var
Eb=(l.args())[0],Ra=(l.args())[1];var
Ba=Eb.getAttribute(ub.t);this.fw[Ba]=this.fw.__ct++;var
_a=Eb.getFirstChild()==null&&Eb.getAttribute(ub.u)==null;var
O=Eb.getAttribute(ub.v);if(O)Ra=((jsx3.net.URI.valueOf(Ra)).resolve(O)).toString();return this.sL(Ra,Ba,_a?null:Eb);});p.sL=jsx3.$Y(function(s){var
D=s.args();var
ob=D[0],Wa=D[1],aa=D[2];this.C3.G3(ub.w+Wa);if(!aa){var
Ta=(ob?ob+ub.i:ub.p)+Wa+ub.i+na.METAFILE;na.LOG.debug(jsx3._msg(ub.x,Ta,Wa));aa=f.nL(Ta);}return this.Oo(ob,Wa,aa);});p.Oo=jsx3.$Y(function(i){var
Ka=i.args();var
B=Ka[0],Va=Ka[1],P=Ka[2];this.C3.AA(ub.w+Va);if(!P.hasError()){var
La=P.getBaseName();var
u=P.getNamespaceURI();if(La==ub.q&&na.isNS(u)){return this.w0(Va,B,P);}else{na.LOG.error(jsx3._msg(ub.y,Va,La,u));i.done();}}else{na.LOG.error(jsx3._msg(ub.z,Va,P.getError()));i.done();}});p.w0=jsx3.$Y(function(m){var
cb=m.args();var
Ga=cb[0],G=cb[1],Va=cb[2];var
M=Va.getAttribute(ub.t);if(!M||M!=Ga){na.LOG.error(jsx3._msg(ub.A,Ga,M));m.done();}else{var
Nb=na.kn(Va.getAttribute(ub.B),(this.getServer()).getLocale());if(Nb){(this.gZ(G+ub.i+Ga,Va,Nb)).when((jsx3.$F(function(){m.done(this.Q0(Ga,G,Va));})).bind(this));}else return this.Q0(Ga,G,Va);}});p.gZ=jsx3.$Y(function(r){var
ga=r.args();var
Ka=ga[0],ab=ga[1],lb=ga[2];Ka=Ka+(ub.C+lb+ub.D);(f.nL(Ka)).when((jsx3.$F(function(k){if(k&&!k.hasError())this.Rs(ab,k);else na.LOG.error(jsx3._msg(ub.E,Ka,k?k.getError():null));r.done();})).bind(this));});f.r7={script:1,method:1,field:1,processor:1};f.N1={script:1,method:1,field:1};p.Rs=function(e,g){if(g.getBaseName()!=ub.q||!na.isNS(g.getNamespaceURI())){na.LOG.error(jsx3._msg(ub.F,g.getSourceURL()));return;}(jsx3.$A(g.getAttributeNames())).each(function(l){e.setAttribute(l,g.getAttribute(l));});this.az(e,g,ub.G,f.r7);this.az(e,g,ub.H,f.N1);};p.az=function(m,r,d,b){for(var
ca=r.selectNodeIterator(ub.I+d+ub.J,na.getXmlNS(r));ca.hasNext();){var
_a=ca.next();var
ua=_a.getAttribute(ub.t);var
qa=m.selectSingleNode(ub.I+d+ub.K+ua+ub.L,na.getXmlNS(m));if(qa){(jsx3.$A(_a.getAttributeNames())).each(function(s){qa.setAttribute(s,_a.getAttribute(s));});var
nb=(_a.getChildNodes()).toArray();if(nb.length>0){(jsx3.$A(((qa.getChildNodes()).toArray()).reverse())).each(function(s){if(!na.isNS(s.getNamespaceURI())||!b[s.getBaseName()])qa.removeChild(s);});(jsx3.$A(nb)).each(function(g){qa.appendChild(g);});}}else na.LOG.error(jsx3._msg(ub.M,m.getAttribute(ub.t),d,ua));}};p.Q0=jsx3.$Y(function(d){var
ib=d.args();var
ea=ib[0],A=ib[1],R=ib[2];this.Lp[ea]=R;var
O=this.FW(R.selectSingleNode(ub.N,na.getXmlNS(R)),ea,A);var
Jb=this.OL(ea,R);var
tb=this.Mx(ea,O,Jb);return jsx3.$Z(this._F,this)(ea,A,R,O,tb);});p.OL=jsx3.$Y(function(s){var
Xa=s.args();var
t=Xa[0],ea=Xa[1];var
R=this.Q9(ea);R=R.filter((jsx3.$F(function(m){var
fb=this.getPlugIn(m);if(!fb&&!this.fw[m])na.LOG.warn(jsx3._msg(ub.O,t,m));return !fb;})).bind(this));if(R.length>0){var
Wa=(jsx3.$F(function(g){R.remove(g.plugin.getId());if(R.length==0){this.unsubscribe(f.REGISTER,Wa);s.done();}})).bind(this);this.subscribe(f.REGISTER,Wa);}else s.done();});p.Mx=jsx3.$Y(function(r){var
Ba=r.args();var
hb=Ba[0],va=Ba[1];var
wb={};va.each(function(e){wb[e.getLocalId()]=e;});this.mZ[hb]=wb;var
B=null;va.each((jsx3.$F(function(j){if(j.getLoadType()==na.Resource.LOAD_EARLY){var
ab=this.r5(j);B=B?B.and(ab):ab;}})).bind(this));if(B)return B;r.done();});p.FW=function(h,a,i){var
Hb={};var
ua=jsx3.$A();if(h)for(var
ja=(h.getChildNodes()).iterator();ja.hasNext();){var
Ka=ja.next();if(na.isNS(Ka.getNamespaceURI())){var
T=Ka.getAttribute(ub.t);if(Hb[T]){na.LOG.error(jsx3._msg(ub.P,T,a));T=null;}if(T==null||T==ub.p)T=ub.Q+a+ub.R+
++this.jx;var
Db=na.Resource.wh(a,i+ub.i+a+ub.i,T,Ka,this);for(var
la=Ka.selectNodeIterator(ub.S,na.getXmlNS(Ka));la.hasNext();){var
Ga=la.next();var
ca=Ga.getAttribute(ub.t);if(ca)Db.Bc(ca,ub.T);else Db.Bc(Ga.getAttribute(ub.q),ub.q);}ua.push(Db);Hb[T]=Db;}}return ua;};p.Q9=function(o){var
Va=jsx3.$A();for(var
Ba=o.selectNodeIterator(ub.U,na.getXmlNS(o));Ba.hasNext();)Va.push((Ba.next()).getAttribute(ub.t));return Va;};p.vu=function(){var
ca=this.C3.pct();var
ra={subject:f.PROGRESS,pct:100*ca};if(ca>=1)ra.done=true;this.publish(ra);};p._F=function(a,j,d,r){var
wb=d.getAttribute(ub.V);if(wb&&f.rY[a]){}var
Bb;var
Ea=d.getAttribute(ub.u);if(Ea){Bb=na.Pi(Ea);if(!Bb)na.LOG.error(jsx3._msg(ub.W,Ea,a));}if(!Bb)Bb=na.PlugIn;var
ka=new
Bb();if(typeof ka.setEngine==ub.X)ka.setEngine(this);if(typeof ka.setPath==ub.X)ka.setPath(j+ub.i+a);if(typeof ka.setData==ub.X)ka.setData(d);if(typeof ka.setResources==ub.X)ka.setResources(r);this.j5.push(ka);this.zp[a]=ka;na.LOG.debug(jsx3._msg(ub.Y,ka));var
Db=ka.getExtPoints();for(var
Sa=0;Sa<Db.length;Sa++)this.dg(Db[Sa]);var
mb={};var
ia=ka.getExts();for(var
Sa=0;Sa<ia.length;Sa++){var
P=ia[Sa];var
Ya=P.getPointId();this.qn(P);if(!mb[Ya])mb[Ya]=jsx3.$A();mb[Ya].push(P);}f.Sh(ka,d);for(var Ya in mb){var
Qa=this.TT[Ya];if(Qa){(Qa.getPlugIn()).onExtension(Qa,mb[Ya]);Qa.onExtension(mb[Ya]);}}for(var
Sa=d.selectNodeIterator(ub.Z,na.getXmlNS(d));Sa.hasNext();){var
Cb=Sa.next();var
Ha=Cb.getAttribute(ub.t);ka.addBindableProp(Ha,Cb.getAttribute(ub._));ka[Ha]=null;var
ea=((jsx3.$S(Cb.getAttribute(ub.aa)||ub.p)).trim()).split(ub.ba);(jsx3.$A(ea)).each((jsx3.$F(function(s){if(s)ka.updateBindableOn(Ha,this.kC,s);})).bind(this));ka.subscribe(Ha,this,ub.ca);}(jsx3.$A(ka.getEvents())).each((jsx3.$F(function(s){ka.subscribe(s,this,ub.ca);})).bind(this));this.Ix(ka,d);ka.onRegister();this.publish({subject:f.REGISTER,plugin:ka});};p.Ix=function(q,m){for(var
Cb=m.selectNodeIterator(ub.da,na.getXmlNS(m));Cb.hasNext();){var
P=Cb.next();var
ha=(P.getAttribute(ub.ea)).split(ub.ba);var
ya=P.getAttribute(ub.fa);var
M=P.getAttribute(ub.ga);var
ca=ya?ub.ha+ya+ub.ia:P.getValue();if(M==ub.a){ca=ub.ja+ca+ub.ka;}else if(M==ub.la)ca=ub.ma+ca+ub.na;for(var
wb=0;wb<ha.length;wb++){var
Oa=ub.oa+ha[wb].replace(ub.pa,ub.R)+ub.R+this.sU++;var
Ib=jsx3.eval(ub.qa+Oa+ub.ra+ca+ub.sa+Oa+ub.ta);q[Oa]=Ib;this.kC.subscribe(ha[wb],q,Oa);}}};p.Mz=function(s){var
Hb=(jsx3.$O(s)).clone();Hb.subject=s.target.getId()+ub.ua+s.subject;na.LOG.debug(jsx3._msg(ub.va,Hb.subject));this.kC.publish(Hb);if(window.OpenAjax&&OpenAjax.hub)try{OpenAjax.hub.publish(Hb.subject,Hb);}catch(Hb){na.LOG.error(jsx3._msg(ub.wa,Hb.subject),jsx3.NativeError.wrap(Hb));}};f.Sh=function(j,e){for(var
ma=e.selectNodeIterator(ub.xa,na.getXmlNS(e));ma.hasNext();){var
D=ma.next();var
cb=D.getBaseName();if(ub.ya==cb){try{j.eval(D.getValue());}catch(Kb){na.LOG.error(jsx3._msg(ub.za,j),jsx3.NativeError.wrap(Kb));}}else if(ub.Aa==cb){try{j[D.getAttribute(ub.t)]=j.eval(D.getValue());}catch(Kb){na.LOG.error(jsx3._msg(ub.Ba,D.getAttribute(ub.t),j),jsx3.NativeError.wrap(Kb));}}else if(ub.Ca==cb)try{var
sb=D.getAttribute(ub.t);if(D.getAttribute(ub.Da)==ub.Ea){ka=this.VL(sb);}else{var
Z=D.getAttribute(ub.Fa)||ub.p;var
ka=jsx3.eval(ub.qa+sb+ub.Ga+Z+ub.Ha+D.getValue()+ub.sa+sb+ub.ta);if(D.getAttribute(ub.Ia)==ub.Ea)ka=jsx3.$Y(ka);}j[sb]=ka;}catch(Kb){na.LOG.error(jsx3._msg(ub.Ja,D.getAttribute(ub.t),j),jsx3.NativeError.wrap(Kb));}(D.getParent()).removeChild(D);}};f.VL=function(e){return function(){(this.load()).when((jsx3.$F(function(d,q){this[d].apply(this,q);})).bind(this,[e,arguments]));};};p.isLoaded=function(){return this.qw;};p.getServer=function(){return this.J2;};p.getPlugIns=function(){return this.j5;};p.getPlugIn=function(d){return this.zp[d];};p.getExtPoint=function(j){return this.TT[j];};p.getExts=function(c){var
eb=this.v3[c];if(eb&&eb.eR){eb.sort((jsx3.$F(function(eb,r){var
Ya=this.fw[(eb.getPlugIn()).getId()]||0;var
ma=this.fw[(r.getPlugIn()).getId()]||0;return Ya>ma?1:Ya==ma?0:-1;})).bind(this));eb.eR=false;}return eb||jsx3.$A();};p.register=jsx3.$Y(function(r){var
Eb=r.args();var
fb=Eb[0];var
t=Eb[1];var
ob=Eb[2];if(this.zp[fb])throw new
jsx3.IllegalArgumentException(ub.Ka+fb+ub.ua);this.fw[fb]=this.fw.__ct++;return this.sL(t,fb,ob);});p.deregister=function(q){var
ka=this.getPlugIn(q);if(ka){this.j5.remove(ka);var
N=ka.getExtPoints();for(var
F=0;F<N.length;F++)this.Dc(N[F]);var
Mb=ka.getExts();for(var
F=0;F<Mb.length;F++)this.Hg(Mb[F]);delete this.zp[q];delete this.fw[q];delete this.Lp[q];delete this.mZ[q];}};p.dg=function(q){na.LOG.debug(jsx3._msg(ub.La,q));this.TT[q.getId()]=q;};p.Dc=function(o){var
Ba=o.getId();delete this.TT[Ba];};p.qn=function(i,k){var
Ta=i.getPointId();if(!this.v3[Ta])this.v3[Ta]=jsx3.$A();this.v3[Ta].push(i);this.v3[Ta].eR=true;na.LOG.debug(jsx3._msg(ub.Ma,i,Ta));if(k){var
U=this.TT[Ta];if(U){(U.getPlugIn()).onExtension(U,[i]);U.onExtension([i]);}}};p.Hg=function(m){var
T=this.v3[m.getPointId()];if(T)T.remove(m);};p.Kh=jsx3.$Y(function(h){var
fa=(h.args())[0];var
P=this.Ov(fa);var
Ea=new
jsx3.util.Timer(ub.h,fa.getId());var
jb=this.it(fa,P);var
ea=jsx3.$Z(this.cG,this)(fa,jb);ea.when(function(){Ea.log(ub.Na);});return ea;});p.Ov=jsx3.$Y(function(d){var
U=(d.args())[0];var
Y=null;var
zb=U.getRequires();zb.each((jsx3.$F(function(b){var
fa=this.getPlugIn(b);if(fa){if(!fa.isLoaded()){var
Bb=fa.load();Y=Y?Y.and(Bb):Bb;}}else na.LOG.error(jsx3._msg(ub.Oa,U,b));})).bind(this));if(Y)return Y;else d.done();});p.it=jsx3.$Y(function(a){var
za=(a.args())[0];var
sa=null;var
Ra=za.getResources();Ra.each(function(b){if(!b.isLoaded()&&b.getLoadType()==na.Resource.LOAD_NORMAL){var
Da=b.load();sa=sa?sa.and(Da):Da;}});if(sa)return sa;else a.done();});p.cG=function(j){var
Ta=this.Lp[j.getId()];if(Ta){delete this.Lp[j.getId()];delete this.mZ[j.getId()];(j.getBindableProps()).each(function(g){j.updateBindable(g);});var
Aa=Ta.getAttribute(ub.Pa);if(Aa)jsx3.lang.setVar(j.isGlobal()?Aa:(j.getServer()).getEnv(ub.e)+ub.ua+Aa,j);}j.fd();na.LOG.debug(jsx3._msg(ub.Qa,j));};p.Rk=jsx3.$Y(function(d){var
Ja=(d.args())[0];Ja.hc();var
O=this.yC(Ja,Ja.getPlugIn());(this.f9(Ja,O)).when(function(q){Ja.te(q);d.done();});});p.r5=jsx3.$Y(function(m){var
cb=m.args();var
ka=cb[0];(this.yC(ka)).when(function(){(ka.load()).when(m);});});p._getSiblingResource=function(e,m){var
_=e.getPlugIn();return _?_.getResource(m):this.mZ[e._j][m];};p.yC=jsx3.$Y(function(d){var
Ga=d.args();var
Fa=Ga[0];var
Oa=null;var
va=Fa.bf();va.each((jsx3.$F(function(r){var
I=null;if(r.type==ub.q){var
V=this.getPlugIn(r.id);if(V){if(!V.isLoaded())I=V.load();}else na.LOG.error(jsx3._msg(ub.Ra,r.id,Fa));}else{var
aa=this._getSiblingResource(Fa,r.id);if(aa){if(!aa.isLoaded())I=aa.load();}else na.LOG.error(jsx3._msg(ub.Sa,r.id,Fa));}if(I)Oa=Oa?Oa.and(I):I;})).bind(this));if(Oa)return Oa;else d.done();});p.ow=function(){this.qw=true;for(var
Ra=0;Ra<this.j5.length;Ra++)this.j5[Ra].onStartup();this.publish({subject:f.LOAD});};p.MN=function(j,n){if(ub.Ta==n)return jsx3.getSharedCache();else if(ub.Ua==n)return jsx3.getSystemCache();else return j.getCache();};p.f9=jsx3.$Y(function(r){var
jb=(r.args())[0];var
ca=this.getServer();var
B=jb.getPathForLocale(ca.getLocale());var
ya=jb.getType();var
Kb=ub.Va+jb.getId();this.C3.G3(Kb);var
pb=this.MN(ca,jb.attr(ub.Wa));var
tb=jb.attr(ub.Xa);if(!tb)if(B&&pb!=ca.getCache())tb=jsx3.resolveURI(jb.getFullPath(B));else tb=jb.getId();if(B){var
pa=jb.getFullPath(B);na.LOG.debug(jsx3._msg(ub.Ya,jb,pa));var
Wa=(jsx3.$F(function(i){na.LOG.debug(jsx3._msg(ub.Za,jb,pa));this.C3.AA(Kb);r.done(i);})).bind(this);switch(ya){case ub.ya:if(jb.attr(ub.eb)==ub.Ea)(f.aO(pa)).when((jsx3.$F(function(c){if(c!=null){var
Ba=jb.getPlugIn()||jsx3;try{var
zb=new
jsx3.util.Timer(ub.h,jb.getId());Ba.eval(c);zb.log(ub.fb);}catch(Nb){na.LOG.error(jsx3._msg(ub.gb,pa,Ba),jsx3.NativeError.wrap(Nb));}}else na.LOG.error(jsx3._msg(ub.hb,pa));Wa();})).bind(this));else (f.Ry(pa)).when(Wa);break;case ub._a:(f.SG(pa)).when(Wa);break;case ub.ab:(f.nL(pa)).when((jsx3.$F(function(e){if(pb)pb.setDocument(tb,e);ca.JSS.loadXML(e,tb);Wa(e);})).bind(this));break;case ub.bb:jsx3.app.PropsBundle.getPropsAsync(jb.getFullPath(),ca.getLocale(),function(bb){ca.LJSS.addParent(bb);Wa(bb);},ca.getCache());break;case ub.cb:(f.nL(pa,jsx3.xml.CDF.Document.jsxclass)).when((jsx3.$F(function(e){e.convertProperties((this.getServer()).getProperties());if(pb)pb.setDocument(tb,e);Wa(e);})).bind(this));break;case ub.db:(f.nL(pa,jsx3.xml.XslDocument.jsxclass)).when((jsx3.$F(function(l){if(pb)pb.setDocument(tb,l);Wa(l);})).bind(this));break;default:na.LOG.error(jsx3._msg(ub.ib,ya));Wa();}}else{na.LOG.debug(jsx3._msg(ub.jb,jb));var
Ea=jb.xml();var
Ka=Ea.selectSingleNode(ub.kb,na.getXmlNS(Ea));var
sb=null;switch(ya){case ub.ya:if(jb.attr(ub.eb)==ub.Ea){var
zb=new
jsx3.util.Timer(ub.h,jb.getId());(jb.getPlugIn()||jsx3).eval((Ka||Ea).getValue());zb.log(ub.fb);}else if(!f.DA[jb.getId()]){var
zb=new
jsx3.util.Timer(ub.h,jb.getId());f.DA[jb.getId()]=1;jsx3.eval((Ka||Ea).getValue());zb.log(ub.fb);}break;case ub._a:if(jsx3.CLASS_LOADER.IE){var
_=document.createElement(ub.lb);_.setAttribute(ub.mb,ub.nb);(document.getElementsByTagName(ub.ob))[0].appendChild(_);_.styleSheet.cssText=((Ka||Ea).getValue()).toString();}else jsx3.html.insertAdjacentHTML((document.getElementsByTagName(ub.ob))[0],ub.pb,ub.qb+(Ka||Ea).getValue()+ub.rb);break;case ub.ab:if(Ka){ca.JSS.loadXML(Ka.getFirstChild(),jb.getId());sb=ca.JSS;}else na.LOG.error(jsx3._msg(ub.sb,jb));break;case ub.bb:case ub.cb:if(Ka){sb=new
jsx3.xml.CDF.Document(Ka.getFirstChild());sb.convertProperties((this.getServer()).getProperties());if(pb)pb.setDocument(tb,sb);if(ya==ub.bb){var
Fb=jb.getFullPath(Ka.getAttribute(ub.v));if(pb)pb.setDocument(Fb,sb);var
bb=jsx3.app.PropsBundle.getProps(Fb,ca.getLocale(),pb);ca.LJSS.addParent(bb);}}else na.LOG.error(jsx3._msg(ub.sb,jb));break;case ub.db:if(Ka){sb=new
jsx3.xml.XslDocument(Ka.getFirstChild());if(pb)pb.setDocument(tb,sb);}else na.LOG.error(jsx3._msg(ub.sb,jb));break;default:na.LOG.error(jsx3._msg(ub.ib,ya));}this.C3.AA(Kb);r.done(sb);}});f.nL=jsx3.$Y(function(b){var
N=b.args();var
Ea=N[0],v=N[1];var
Sa=(v||jsx3.xml.Document.jsxclass).newInstance();Sa.setAsync(true);Sa.subscribe(ub.tb,function(){b.done(Sa);});Sa.load(Ea);});f.aO=jsx3.$Y(function(s){var
Nb=s.args();var
X=Nb[0];var
Ua=jsx3.net.Request.open(ub.ub,X,true);Ua.subscribe(ub.tb,function(){s.done(Ua.getResponseText());});Ua.send();});f.SG=jsx3.$Y(function(a){return this.LB((a.args())[0],ub.vb);});f.TG=jsx3.$Y(function(k){var
mb=(k.args())[0];var
G=document.createElement(ub.wb);G.href=mb;G.rel=ub.xb;G.type=ub.nb;(document.getElementsByTagName(ub.ob))[0].appendChild(G);k.done();});f.Ry=jsx3.$Y(function(b){return this.LB((b.args())[0],ub.yb);});f.rq=jsx3.$Y(function(c){var
Hb=(c.args())[0];jsx3.CLASS_LOADER.loadJSFile(Hb,function(){c.done();});});f.DA={};f.LB=jsx3.$Y(function(i){var
L=(i.args())[0];var
ha=f.DA[L];if(ha){if(ha instanceof jsx3.$AsyncRV)return ha;else i.done();}else{var
Mb=(i.args())[1];var
tb=f.DA[L]=this[Mb](L);tb.when(function(){f.DA[L]=1;});return tb;}});var
db=function(l){this._eng=l;this._ids={};this._total=0;this._donect=0;this._on=0;};(jsx3.$O(db.prototype)).extend({yN:function(){this._on=1;},G3:function(j){if(this._ids[j])na.LOG.warn(jsx3._msg(ub.zb,j));else if(this._on){this._ids[j]=1;this._total++;this._eng.vu();}else this._ids[j]=-1;},AA:function(j){var
ya=this._ids[j];if(ya){delete this._ids[j];if(ya>0){this._donect++;this._eng.vu();}}else na.LOG.warn(jsx3._msg(ub.Ab,j));},pct:function(){return this._total>0?this._donect/this._total:0;}});});jsx3.amp.Engine.Cm();