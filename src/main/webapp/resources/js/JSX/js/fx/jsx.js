/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
Array.prototype.indexOf=function(j,g){if(g==null)g=0;for(var
Ka=g;Ka<this.length;Ka++)if(this[Ka]==j)return Ka;return -1;};Array.prototype.lastIndexOf=function(f,n){if(n==null)n=this.length-1;for(var
rb=n;rb>=0;rb--)if(this[rb]==f)return rb;return -1;};Array.prototype.contains=function(o){return this.indexOf(o)>=0;};Array.prototype.remove=function(l){var
ba=this.indexOf(l);if(ba>=0)return (this.splice(ba,1))[0];return null;};Array.prototype.clone=function(){return this.concat();};Array.prototype.pushAll=function(s){this.push.apply(this,s);};Array.prototype.contentsEqual=function(f){if(f==null)return false;if(this.length!=f.length)return false;for(var
mb=0;mb<f.length;mb++)if(this[mb]!=f[mb])return false;return true;};Array.prototype.filter=function(g){var
K=[];for(var
B=0;B<this.length;B++)if(g(this[B]))K.push(this[B]);return K;};Array.prototype.map=function(f,i,d){var
Aa=null;if(i){if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ia=f(this[hb]);for(var
fa=0;fa<ia.length;fa=fa+2)Aa[ia[hb]]=ia[hb+1];}}else{Aa=[];for(var
hb=0;hb<this.length;hb++){var
C=f(this[hb]);if(C instanceof Array)Aa.pushAll(C);else Aa.push(C);}}}else if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ma=f(this[hb]);Aa[ma[0]]=ma[1];}}else{Aa=new
Array(this.length);for(var
hb=0;hb<this.length;hb++)Aa[hb]=f(this[hb]);}return Aa;};Math.modpos=function(n,i){return jsx3.util.numMod(n,i);};Math.isNaN=function(b){return jsx3.util.numIsNaN(b);};Number.prototype.roundTo=function(s){return jsx3.util.numRound(this,s);};Number.prototype.zeroPad=function(e){var
Ga=""+this;while(Ga.length<e)Ga="0"+Ga;return Ga;};Date.prototype.getLastDateOfMonth=function(){var
ja=this.getMonth();return Date.AH[ja]||((new
Date(this.getYear(),ja,29)).getMonth()==ja?29:28);};Date.prototype.equals=function(l){return l!=null&&l instanceof Date&&l.valueOf()==this.valueOf();};Date.prototype.compareTo=function(g){var
Jb=this.valueOf();var
eb=g.valueOf();return Jb==eb?0:Jb>eb?1:-1;};Date.AH=[31,null,31,30,31,30,31,31,30,31,30,31];String.prototype.trim=function(){return jsx3.util.strTrim(this);};String.prototype.doReplace=function(f,h){var
ba=new
RegExp(f,["g"]);return this.replace(ba,h);};String.prototype.escapeHTML=function(){return jsx3.util.strEscapeHTML(this);};String.prototype.doTruncate=function(q){return jsx3.util.strTruncate(this,q,"...",1);};String.prototype.toAbsolute=function(){var
ca;if(this.substring(0,1)=="/"||(this.substring(0,7)).toUpperCase()=="HTTP://"||(this.substring(0,8)).toUpperCase()=="HTTPS://"){ca=this.toString();}else if(this.substring(0,4)=="JSX/"){ca=jsx3.getEnv("jsxabspath")+this;}else ca=jsx3.getEnv("jsxhomepath")+this;return ca;};String.prototype.urlTo=function(r){var
B=null;var
Bb=this.lastIndexOf("/");if(Bb==this.length-1)B=this+r;else if(Bb<0)B=r;else B=this.substring(0,Bb+1)+r;B=B.replace(/\\/g,"/");var
wa=B.split("/");for(var
P=0;P<wa.length;P++){var
ka=wa[P];if(ka=="."){wa.splice(P--
,1);}else if(ka=="..")if(P>0&&wa[P-1]!=".."){wa.splice(P--
,1);wa.splice(P--
,1);}}return wa.join("/");};String.prototype.endsWith=function(r){return jsx3.util.strEndsWith(this,r);};String.prototype.constrainLength=function(i,q){return jsx3.util.strTruncate(this,i,q,0.6666666666666666);};String.prototype.toBase64=function(){return jsx3.util.strEncodeBase64(this);};String.prototype.fromBase64=function(){return jsx3.util.strDecodeBase64(this);};(function(c){var
ub={a:"undefined",b:"null",c:"[",d:",",e:"]",f:"object",g:":",h:"{",i:"}",j:"string",k:/(^\s*)|(\s*$)/g,l:"",m:"qE",n:"May not call $AsyncRV.rv() before the return value is set.",o:"function",p:"t3",q:"number"};var
R=function(l,n){for(var B in n)l[B]=n[B];return l;};var
fb=function(b,q){if(typeof q==ub.a)q=true;var
qa;if(b==null)qa=ub.b;else if(c.$A.is(b)){var
Ja=[];for(var
y=0;y<b.length;y++)Ja.push(q?fb(b[y]):b[y]);qa=ub.c+Ja.join(ub.d)+ub.e;}else if(typeof b==ub.f){var
Ja=[];for(var H in b)if(!b.hasOwnProperty||b.hasOwnProperty(H))Ja.push(H+ub.g+(q?fb(b[H]):b[H]));qa=ub.h+Ja.join(ub.d)+ub.i;}else if(typeof b==ub.j){qa=c.util.strEscapeJSON(b);}else qa=b.toString();return qa;};c.$Object={extend:function(j){return R(this,j);},clone:function(){var
gb=c.$O();gb.extend(this);return gb;}};c.$O=function(n){return R(n||{},c.$Object);};c.$O.json=fb;c.$Array={each:function(d){for(var
ja=0;ja<this.length;ja++)d(this[ja]);},map:function(k){var
Za=c.$A();for(var
wb=0;wb<this.length;wb++)Za[wb]=k(this[wb]);return Za;},filter:function(p){var
Ga=c.$A();for(var
_a=0;_a<this.length;_a++)if(p(this[_a]))Ga.push(this[_a]);return Ga;},indexOf:function(f){for(var
Qa=0;Qa<this.length;Qa++)if(this[Qa]===f)return Qa;return -1;},contains:function(p){return this.indexOf(p)>=0;},remove:function(s){var
Da=this.indexOf(s);if(Da>=0)return (this.splice(Da,1))[0];},find:function(e){for(var
M=0;M<this.length;M++)if(e(this[M]))return this[M];},unique:function(){var
sa=this.concat();for(var
x=sa.length-1;x>=1;x--)for(var
ua=x-1;ua>=0;ua--)if(sa[x]===sa[ua]){sa.splice(x,1);break;}return c.$A(sa);},addAll:function(p){this.push.apply(this,p);},eq:function(s){if(this.length!=s.length)return false;for(var
Qa=0;Qa<this.length;Qa++)if(this[Qa]!==s[Qa])return false;return true;},clone:function(){return c.$A(this.concat());}};c.$Hash=(c.$Object.clone()).extend({each:function(s){for(var lb in this)if(this[lb]!=this.constructor.prototype[lb]&&this[lb]!=c.$Hash[lb])s(lb,this[lb]);},keys:function(){var
Cb=[];for(var v in this)if(this[v]!=this.constructor.prototype[v]&&this[v]!=c.$Hash[v])Cb.push(v);return c.$A(Cb);},values:function(){var
da=[];for(var ib in this)if(this[ib]!=this.constructor.prototype[ib]&&this[ib]!=c.$Hash[ib])da.push(this[ib]);return c.$A(da);}});c.$Function={bind:function(g,o){var
sa=this;if(o==null||o.length==0){return c.$F(function(){return sa.apply(g,arguments);});}else return function(){var
ob;if(arguments.length>0){ob=[];for(var
Ka=0;Ka<o.length;Ka++)ob.push(o[Ka]);for(var
Ka=0;Ka<arguments.length;Ka++)ob.push(arguments[Ka]);}else ob=o;return sa.apply(g,ob);};},throttled:function(){var
nb=this;return c.$F(function(){if(nb._thlto)window.clearTimeout(nb._thlto);nb._thlto=window.setTimeout((c.$F(nb)).bind(this,arguments));});},slept:function(){var
P=this;return c.$F(function(){window.setTimeout(P.bind(this,arguments));});}};c.$String=(c.$Object.clone()).extend({endsWith:function(d){return this.lastIndexOf(d)==this.length-d.length;},trim:function(){return c.$S(this.replace(ub.k,ub.l));}});c.$F=function(j){return R(j,c.$Function);};var
K=c.$F(function(d,h,l){d[h]=l.rv();});var
tb=function(n){var
P=null;for(var
La=0;La<n.length;La++){var
mb=n[La];if(mb instanceof Ha)if(mb.AA){n[La]=mb.rv();}else{mb.when(K.bind(null,[n,La,mb]));P=P?P.and(mb):mb;}}return P;};c.$AsyncCB=function(m,l){this.aX=m;this.jT=l;this.PM=tb(l);};R(c.$AsyncCB.prototype,{IG:c.$F(function(s,d){this.jT[s]=d.rv();}),done:function(m){this.AA=true;this.nC=m;if(this.t3)this.t3(m);},args:function(){return this.jT;}});var
Ha=c.$AsyncRV=function(){};R(Ha.prototype,{CM:function(a){this.AA=true;this.nC=a;if(this.qE){this.qE.each(function(l){l(a);});delete this[ub.m];}},rv:function(){if(!this.AA)throw new
Error(ub.n);return this.nC;},when:function(s,i){var
Xa=null;if(typeof s==ub.o)Xa=s;else if(s instanceof c.$AsyncCB){if(arguments.length>1)Xa=(function(){s.done(i);});else Xa=(function(l){s.done(l);});}else throw new
Error();if(this.AA){Xa(this.nC);}else{if(!this.qE)this.qE=c.$A();this.qE.push(Xa);}},and:function(l){var
Lb=[this];for(var
Hb=0;Hb<arguments.length;Hb++)Lb.push(arguments[Hb]);return new
zb(Lb);},or:function(m){var
E=[this];for(var
z=0;z<arguments.length;z++)E.push(arguments[z]);return new
pb(E);}});var
ia=function(s){this.HW=s;s.t3=this.cE.bind(this);};ia.prototype=new
Ha();R(ia.prototype,{cE:c.$F(function(i){delete this.HW[ub.p];this.CM(i);})});var
zb=function(l){this.HA=l.length;this.Lz=0;(c.$A(l)).each((c.$F(function(e){if(e.AA)this.Lz++;else e.when(this.JK.bind(this));})).bind(this));if(this.HA==this.Lz)this.CM();};zb.prototype=new
Ha();R(zb.prototype,{JK:c.$F(function(){this.Lz++;if(this.Lz==this.HA)this.CM();})});var
pb=function(k){(c.$A(k)).each((c.$F(function(d){if(d.AA)this.JK();else d.when(this.JK.bind(this));})).bind(this));};pb.prototype=new
Ha();R(pb.prototype,{JK:c.$F(function(){if(!this.AA)this.CM();})});c.$A=function(k){if(k==null){k=[];}else if(k instanceof Array){}else if(c.$A.is(k)){var
H=[];for(var
eb=0;eb<k.length;eb++)H[eb]=k[eb];k=H;}else k=[k];return R(k,c.$Array);};c.$A.is=function(b){return b&&typeof b==ub.f&&(b instanceof Array||typeof b.length==ub.q);};c.$H=function(q){if(c.$A.is(q)){var
ja={};for(var
Ab=0;Ab<q.length;Ab++)ja[q[Ab]]=1;return R(ja,c.$Hash);}else return R(q||{},c.$Hash);};c.$S=function(r){if(r==null)return r;return R(new
String(r),c.$String);};c.$Y=function(g){return function(){var
Ma=new
c.$AsyncCB(this,arguments);var
_=new
ia(Ma);if(Ma.PM){var
Ga=this;Ma.PM.when(function(){var
Lb=g.apply(Ga,[Ma]);if(Lb instanceof Ha)Lb.when(Ma);});}else{var
Lb=g.apply(this,[Ma]);if(Lb instanceof Ha)Lb.when(Ma);}return _;};};c.$Z=function(j,m){if(m instanceof Ha)m.when(function(a){m=a;});return function(){var
Wa=new
Ha();var
Ta=c.Method.argsAsArray(arguments);if(m instanceof Ha){m.when(function(){Y(m,j,Ta,Wa);});}else Y(m||this,j,Ta,Wa);return Wa;};};var
Y=function(o,h,l,f){var
jb=typeof h==ub.o?h:o[h];var
Pa=tb(l);if(Pa){Pa.when(function(){f.CM(jb.apply(o,l));});}else f.CM(jb.apply(o,l));};})(jsx3);if(jsx3.lang==null)jsx3.lang={};(function(d){var
ub={a:"."};d.STACK_MAX=50;d.getCaller=function(q){var
ia=(q!=null?q:0)+1;var
gb=arguments;if(gb.callee){for(gb=gb.callee;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.caller;}}else for(gb=gb.caller;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.callee;}return null;};d.getStack=function(q){var
zb=[];var
Ya=(q!=null?q:0)+1;var
fa=arguments;if(fa.callee){for(fa=fa.callee;fa&&fa.caller&&zb.length<jsx3.lang.STACK_MAX;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.caller;}}else for(fa=fa.caller;fa&&fa.callee;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.callee;}return zb;};d.setVar=function(s,n){var
fa=s.split(ub.a);var
Ib=window;for(var
ca=0;ca<fa.length-1;ca++){var
hb=fa[ca];if(!Ib[hb])Ib[hb]={};Ib=Ib[hb];}Ib[fa[fa.length-1]]=n;};d.getVar=function(h){var
Cb=h.split(ub.a);var
pb=window;for(var
sa=0;sa<Cb.length;sa++){if(pb==null)return;pb=pb[Cb[sa]];}return pb;};})(jsx3.lang);if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Uj=new
window.Object();jsx3.lang.Jl=new
window.Object();jsx3.lang.qg=function(){var
ub={a:"obj.no_inst"};return function(){if(arguments[0]!=jsx3.lang.Uj){var
db=this.getClass?this.getClass():null;throw new
jsx3.Exception(jsx3._msg(ub.a,db||this));}};};jsx3.lang.Oj=function(){var
ub={a:"obj.no_init"};return function(){if(arguments[0]!==jsx3.lang.Jl)if(this.init){this.init.apply(this,arguments);}else{var
ha=jsx3.lang.getCaller(-1);throw new
jsx3.Exception(jsx3._msg(ub.a,ha.jsxclass));}};};jsx3.lang.Object=function(){this.init();};window._jsxZ0=function(r,j){var
ub={a:"function",b:"string",c:"objClass",d:"@",e:"obj.super_funct",f:"obj.super_static",g:"obj.super_none",h:"undefined",i:"obj.supmx_funct",j:"obj.supmx_static",k:"obj.supmx_none",l:"INTERFACES",m:/jsx3/g,n:"jsx3.gui",o:"SUPERS",p:"",q:"."};j.init=function(){};j.getClass=function(){return this.__jsxclass__.jsxclass;};j.equals=function(i){return this===i;};j.clone=function(){return (this.getClass()).bless(this);};j.instanceOf=function(o){if(o instanceof jsx3.lang.Class){return o.isInstance(this);}else if(typeof o==ub.a&&o.prototype!=null){return this instanceof o||o.jsxclass!=null&&o.jsxclass.isInstance(this);}else if(typeof o==ub.b){o=jsx3.lang.Class.forName(o);if(o!=null)return o.isInstance(this);}throw new
jsx3.IllegalArgumentException(ub.c,o);};j.toString=function(){return ub.d+(this.getClass()).getName();};j.jsxsuper=function(f){var
La=jsx3.Exception;var
gb=jsx3.lang.getCaller();var
la=gb!=null?gb.jsxmethod:null;if(la==null||!(la instanceof jsx3.lang.Method))throw new
La(jsx3._msg(ub.e,gb));if(la.isStatic())throw new
La(jsx3._msg(ub.f,la));var
sb=la.getDeclaringClass();var
Ua=sb.rn(la);if(Ua==null)throw new
La(jsx3._msg(ub.g,la));var
F=Ua.apply(this,arguments);if(typeof F!=ub.h)return F;};j.jsxsupermix=function(d){var
cb=jsx3.Exception;var
Oa=jsx3.lang.getCaller();var
z=Oa!=null?Oa.jsxmethod:null;if(z==null||!(z instanceof jsx3.lang.Method))throw new
cb(jsx3._msg(ub.i,Oa));if(z.isStatic())throw new
cb(jsx3._msg(ub.j,z));var
pb=z.getDeclaringClass();var
xb=pb.dn(z);if(xb==null)throw new
cb(jsx3._msg(ub.k,z));var
ta=xb.apply(this,arguments);if(typeof ta!=ub.h)return ta;};j.jsxmix=function(g){};j.isInstanceOf=function(d,q,h){if(this.getClass()&&(typeof d!=ub.b||jsx3.lang.Class.forName(d)!=null))return this.instanceOf(d);var
A=jsx3.getClass(this.getInstanceOf());if(A==null)A=this.constructor;if(typeof A==ub.a){var
Kb=A[q?q:ub.l];var
zb=Kb?Kb[d]:null;if(zb==1){return true;}else if(h){return false;}else return this.isInstanceOf(d.replace(ub.m,ub.n),q,true);}return false;};j.isSubclassOf=function(a){return this.isInstanceOf(a,ub.o);};j.getInstanceOf=function(){if(this.getClass())return (this.getClass()).getName();return this._jsxinstanceof?this._jsxinstanceof:this.constructor.className;};j.setInstanceOf=function(o){this._jsxinstanceof=o;return this;};j.getInstanceOfPackage=function(){if(this.getClass())return (this.getClass()).getPackageName();var
O=this.getInstanceOf();if(O==null)return ub.p;var
zb=O.lastIndexOf(ub.q);if(zb>=0)return O.substring(0,zb);else return ub.p;};j.getInstanceOfClass=function(){if(this.getClass()){var
L=(this.getClass()).getName();return L.substring(L.lastIndexOf(ub.q)+1);}var
ma=this.getInstanceOf();if(ma==null)return ub.p;var
X=ma.lastIndexOf(ub.q);if(X>=0)return ma.substring(X+1);else return ma;};j.eval=function(s,g){return jsx3.eval.call(this,s,g);};};window._jsxZ0(jsx3.lang.Object,jsx3.lang.Object.prototype);window._jsxZ0=null;jsx3.lang.Object.prototype.__noSuchMethod__=function(d,h){throw new
jsx3.Exception(jsx3._msg("class.nsm",(this.getClass()).getName()+"#"+d+"()"));};window.inheritance=jsx3.lang.Object;if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Method=jsx3.lang.qg();jsx3.lang.Method.prototype=new
jsx3.lang.Object();jsx3.lang.Method.prototype.constructor=jsx3.lang.Method;window._jsxZ0=function(d,f){var
ub={a:/^\s*function(\s+\w+)?\s*\(\s*([^\)]*?)\s*\)/,b:/\s*,\s*/,c:"method.call",d:".",e:"",f:/^[a-zA-Z_]\w*$/,g:"paramNames[",h:"]",i:"'",j:"', ",k:'var method = arguments.callee.jsxmethod;if (method instanceof jsx3.lang.Method) {  throw new jsx3.Exception("method " + method.getName() + " in class " + method.getDeclaringClass() +    " is abstract and may not be invoked");} else {  throw new jsx3.Exception("invoked abstract method improperly initialized");}',l:"new Function(",m:"');",n:"return this.",o:".apply(this.",p:", arguments);"};d.z0=ub.a;f.dB=function(){if(d.z0.exec((this.getFunction()).toString())){var
Z=RegExp.$2;this.X3=Z?Z.split(ub.b):[];}else this.X3=[];};f.getName=function(){return this.JM;};f.getArity=function(){if(this.X3==null)this.dB();return this.X3.length;};f.getParameterNames=function(){if(this.X3==null)this.dB();return this.X3.concat();};f.getParameterName=function(h){if(this.X3==null)this.dB();return this.X3[h];};f.getDeclaringClass=function(){return this.FR;};f.isPackageMethod=function(){return this.FR instanceof jsx3.lang.Package;};f.isStatic=function(){return this.oh;};f.isAbstract=function(){return this.pl;};f.getFunction=function(){if(this.isPackageMethod()){return (this.FR.getNamespace())[this.JM];}else if(this.oh){return (this.FR.getConstructor())[this.JM];}else return (this.FR.getConstructor()).prototype[this.JM];};f.apply=function(e,n){return (this.getFunction()).apply(e,n);};f.call=function(j){var
Hb=arguments;if(Hb.length>11)throw new
jsx3.Exception(jsx3._msg(ub.c,+Hb.length));return (this.getFunction()).call(Hb[0],Hb[1],Hb[2],Hb[3],Hb[4],Hb[5],Hb[6],Hb[7],Hb[8],Hb[9],Hb[10]);};f.toString=function(){return this.FR.getName()+ub.d+this.JM;};d.newAbstract=function(k){var
cb=ub.e;for(var
y=0;y<arguments.length;y++){if(!arguments[y].match(ub.f))throw new
jsx3.IllegalArgumentException(ub.g+y+ub.h,arguments[y]);cb=cb+(ub.i+arguments[y]+ub.j);}var
W=ub.k;var
Ma=jsx3.eval(ub.l+cb+ub.i+W+ub.m);Ma.pl=true;return Ma;};d.newDelegate=function(r,o){var
pa=ub.n+o+ub.d+r+ub.o+o+ub.p;return new
Function(pa);};d.argsAsArray=function(n,e,l){if(e==null)e=0;if(l==null)l=n.length;else l=Math.min(l,n.length);var
v=l-e;if(v<=0)return [];var
Db=new
Array(v);for(var
qb=0;qb<v;qb++)Db[qb]=n[qb+e];return Db;};};window._jsxZ0(jsx3.lang.Method,jsx3.lang.Method.prototype);window._jsxZ0=null;if(window["jsx3"]==null)window["jsx3"]=new
window.Object();if(jsx3.lang==null)jsx3.lang=new
window.Object();jsx3.lang.Class=jsx3.lang.qg();jsx3.lang.Class.prototype=new
jsx3.lang.Object();jsx3.lang.Class.prototype.__jsxclass__=jsx3.lang.Class;window._jsxZ0=function(a,e){var
ub={a:"toString",b:"valueOf",c:"jsx3.util.Logger.Manager",d:"jsx3.lang.Class",e:".",f:"jsx3.lang.Object",g:"function",h:"class.bad_super",i:"class.redefine",j:"class.int_ext_class",k:"class.class_ext_int",l:"object",m:"jsx3.lang",n:"class.def_error",o:"class.no_init",p:"loaded ",q:"class.bad_int",r:"class.class_imp_class",s:"class.redef_method"};a.lX={"jsx3.lang.Object":1,"jsx3.lang.Method":1,"jsx3.lang.ClassLoader":1,"jsx3.lang.Class":2};a.jU=[ub.a,ub.b];a.wx={prototype:1,constructor:1,jsxclass:1,__jsxclass__:1};a.dK=null;a.defineClass=function(c,l,q,o){this.E8(c,l,q,o,false);};a.defineInterface=function(p,f,b){this.E8(p,f,null,b,true);};a.E8=function(b,k,r,p,h){if(a.dK==null&&a.forName&&a.forName(ub.c)&&jsx3.util.Logger.Manager.getManager())a.dK=jsx3.util.Logger.getLogger(ub.d);var
xb=b.split(ub.e);var
Ra=xb.pop();var
_=this.gn(xb);var
ha=this.lX[b]!=null;var
Bb=null;if(k==null){Bb=h||b==ub.f?window.Object:jsx3.lang.Object;}else if(k instanceof a){Bb=k.getConstructor();}else if(typeof k==ub.g&&k.prototype!=null){Bb=k;}else a.R2(jsx3._msg(ub.h,k));if(_[Ra]&&_[Ra].jsxclass){a.R2(jsx3._msg(ub.i,b,_[Ra].jsxclass),null,2);}else{var
V=false;if(!ha){if(Bb.jsxclass!=null){if(h&&!Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.j,b,Bb.jsxclass));if(!h&&Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.k,b,Bb.jsxclass));}if(typeof _[Ra]==ub.g){V=true;}else if(h){_[Ra]=jsx3.lang.qg();}else if(typeof _[Ra]==ub.l){var
Nb=_[Ra];_[Ra]=jsx3.lang.Oj();for(var Na in Nb)_[Ra][Na]=Nb[Na];}else _[Ra]=jsx3.lang.Oj();_[Ra].prototype=this.Bz(Bb,h);}_[Ra].prototype.__jsxclass__=_[Ra];var
t=_[Ra];if(xb.join(ub.e)==ub.m)jsx3[Ra]=t;var
fb=a.gi(a);fb.JM=b;fb.h1=t;if(Bb!=null)fb.AE=Bb.jsxclass;fb.Wt=h;fb.FY=[];fb.VN=[];fb.E6=[];var
qb=fb.TH=[];var
Lb=fb.cF=[];fb.rE={};fb.VG={};t.jsxclass=fb;try{p(t,t.prototype);}catch(Kb){var
za=jsx3.NativeError?jsx3.NativeError.wrap(Kb):null;a.R2(jsx3._msg(ub.n,b,za||Kb.description),za);}for(var Na in t){if(a.wx[Na])continue;if(typeof t[Na]==ub.g){this.hv(t[Na],fb,Na,true);}else qb[qb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t[ua]!=null&&t[ua]!=window.Function.prototype[ua]&&t[ua].jsxmethod==null)this.hv(t[ua],fb,ua,true);}for(var Na in t.prototype){if(a.wx[Na])continue;var
ib=t.prototype[Na];if(typeof ib==ub.g){if(Bb==null||ib!=Bb.prototype[Na])this.hv(ib,fb,Na,false);}else Lb[Lb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t.prototype[ua]!=null&&t.prototype[ua]!=window.Object.prototype[ua]&&t.prototype[ua].jsxmethod==null)this.hv(t.prototype[ua],fb,ua,false);}if(!V&&!h&&!(typeof t.prototype.init==ub.g))a.R2(jsx3._msg(ub.o,b));if(jsx3.$A.is(r))for(var
R=r.length-1;R>=0;R--)a.YP(fb,t,r[R]);if(a.dK)a.dK.trace(ub.p+b);jsx3.CLASS_LOADER.Xi(fb);}};a.YP=function(b,s,o){if(typeof o==ub.g&&o.jsxclass!=null)o=o.jsxclass;else if(!(o instanceof a))a.R2(jsx3._msg(ub.q,b,o));if(!o.isInterface())a.R2(jsx3._msg(ub.r,b,o));var
t=(o.getConstructor()).prototype;for(var Ib in t){var
eb=t[Ib];var
ea=typeof eb==ub.g?eb.jsxmethod:null;if(ea==null)continue;var
W=s.prototype[Ib];if(W==null){s.prototype[Ib]=eb;}else if(!(W.jsxmethod.getDeclaringClass()).equals(b))s.prototype[Ib]=eb;}b.FY.unshift(o);};a.gn=function(g){var
Ia=window;for(var
Va=0;Va<g.length;Va++){var
Ea=g[Va];if(Ia[Ea]==null)Ia[Ea]=new
window.Object();Ia=Ia[Ea];}return Ia;};a.hv=function(o,c,h,d){if(o.jsxmethod instanceof jsx3.lang.Method)if((o.jsxmethod.getDeclaringClass()).equals(c))a.R2(jsx3._msg(ub.s,o.jsxmethod,c+ub.e+h));else return;var
jb=a.gi(jsx3.lang.Method);jb.FR=c;jb.JM=h;jb.oh=d;jb.pl=Boolean(o.pl);o.jsxmethod=jb;var
Qa=d?c.VN:c.E6;Qa[Qa.length]=jb;};a.Bz=function(g,f){if(g==Object)return {};return new
g(f?jsx3.lang.Uj:jsx3.lang.Jl);};a.gi=function(n){return new
n(jsx3.lang.Uj);};a.R2=function(n,d,b){if(a.dK){a.dK.log(b||1,n,d);}else if(jsx3.Exception){var
Oa=new
jsx3.Exception(n,d);window.alert(Oa.printStackTrace());}else window.alert(n);};};window._jsxZ0(jsx3.lang.Class,jsx3.lang.Class.prototype);window._jsxZ0=null;jsx3.lang.Class.defineClass("jsx3.lang.Class",null,null,function(f,s){var
ub={a:".",b:"",c:"class.new_inst",d:"class.bless_int",e:"function",f:"get",g:"is",h:"set",i:"class.int_imp_int",j:"class.class_imp_class",k:"class.already_imp",l:"xV",m:"class.mmix_bad",n:"class.no_aop",o:"m:",p:"undefined"};f.forName=function(l){var
Xa=jsx3.lang.getVar(l);return Xa?Xa.jsxclass:null;};s.getName=function(){return this.JM;};s.getPackage=function(){var
bb=this.JM;while(true){var
ob=bb.lastIndexOf(ub.a);if(ob<0)break;bb=bb.substring(0,ob);var
A=jsx3.lang.Package.forName(bb);if(A!=null)return A;if(f.forName(bb)==null)break;}return null;};s.getPackageName=function(){var
Va=this.getPackage();if(Va){return Va.getName();}else{var
S=this.JM.lastIndexOf(ub.a)+1;return S>=0?this.JM.substring(0,S-1):ub.b;}};s.getConstructor=function(){if(this.h1!=null)return this.h1;var
wb=jsx3.lang.getVar(this.JM);return wb||null;};s.getSuperClass=function(){return this.AE;};s.isInterface=function(){return this.Wt;};s.toString=function(){return this.JM;};s.newInstance=function(o){if(arguments.length>10)throw new
jsx3.Exception(jsx3._msg(ub.c));var
ob=arguments;var
Fb=this.getConstructor();return new
Fb(ob[0],ob[1],ob[2],ob[3],ob[4],ob[5],ob[6],ob[7],ob[8],ob[9]);};s.isInstance=function(n){var
Ga=n.__jsxclass__?n.__jsxclass__.jsxclass:null;return Ga!=null&&this.isAssignableFrom(Ga);};s.isAssignableFrom=function(k){if(this.equals(k))return true;if(k.xV==null)k.dF();return k.xV[this.getName()]==true;};s.dF=function(){this.xV={};for(var
Ja=0;Ja<this.FY.length;Ja++){var
Ra=this.FY[Ja];this.xV[Ra.getName()]=true;if(Ra.xV==null)Ra.dF();for(var I in Ra.xV)this.xV[I]=true;}if(this.AE!=null){this.xV[this.AE.getName()]=true;if(this.AE.xV==null)this.AE.dF();for(var I in this.AE.xV)this.xV[I]=true;}};s.mixin=function(l,r,b){if(b){for(var
Aa=0;Aa<b.length;Aa++){var
ka=this.getInstanceMethod(b[Aa]);if(ka&&l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}}else for(var
Aa=0;Aa<this.E6.length;Aa++){var
ka=this.E6[Aa];if(l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}};s.bless=function(e){if(this.isInterface())throw new
jsx3.Exception(jsx3._msg(ub.d,this));var
N=f.Bz(this.getConstructor());if(e!=null)for(var aa in e)if(!(typeof e[aa]==ub.e))N[aa]=e[aa];return N;};s.newInnerClass=function(c){if(this.isInterface()){return f.gi(this.getConstructor());}else return this.newInstance.apply(this,arguments);};s.getStaticMethods=function(){return this.VN.concat();};s.getInstanceMethods=function(){return this.E6.concat();};s.getStaticMethod=function(q){for(var
bb=0;bb<this.VN.length;bb++)if(q==this.VN[bb].getName())return this.VN[bb];return null;};s.getInstanceMethod=function(d){if(!this.dM){this.dM={};for(var
Da=0;Da<this.E6.length;Da++)this.dM[this.E6[Da].getName()]=this.E6[Da];}return this.dM[d]||null;};s.getGetter=function(p){p=(p.charAt(0)).toUpperCase()+p.substring(1);return this.mF(ub.f+p)||this.mF(ub.g+p);};s.getSetter=function(r){r=(r.charAt(0)).toUpperCase()+r.substring(1);return this.mF(ub.h+r);};s.getStaticFieldNames=function(){return this.TH.concat();};s.getInstanceFieldNames=function(){return this.cF.concat();};s.getInterfaces=function(){return this.FY.concat();};s.addInterface=function(p){var
Db=null;if(this.isInterface())Db=ub.i;else if(!p.isInterface())Db=ub.j;else if(p.isAssignableFrom(this))Db=ub.k;if(Db)throw new
jsx3.Exception(jsx3._msg(Db,this,p));f.YP(this,this.getConstructor(),p);delete this[ub.l];};s.getInheritance=function(){var
Lb=this.FY.concat();if(this.AE!=null){Lb[Lb.length]=this.AE;Lb.push.apply(Lb,this.AE.getInheritance());}return Lb;};s.getClasses=function(){var
G=this.getConstructor();var
y=[];for(var xb in G)if(typeof G[xb]==ub.e&&G[xb].jsxclass instanceof f){y[y.length]=G[xb].jsxclass;y.push.apply(y,G[xb].jsxclass.getClasses());}return y;};s.addMethodMixin=function(l,c,e){var
J=this.getInstanceMethod(l);if(!J)f.R2(jsx3._msg(ub.m,this,l));var
eb=jsx3.AOP;if(!eb)f.R2(jsx3._msg(ub.n,this,l));var
pb=this.getName()+ub.a+l+ub.a+c.getName();(eb.pc(pb,{classes:this,methods:l,type:c})).after(pb,function(){this[e].apply(this,jsx3.Method.argsAsArray(arguments,1));});};s.mF=function(m,c){var
Ba=null;if(!c)Ba=this.getInstanceMethod(m);var
W=this.getInheritance();for(var
bb=0;Ba==null&&bb<W.length;bb++)Ba=W[bb].getInstanceMethod(m);return Ba;};s.iQ=function(d,g){var
pa=null;if(!g)pa=this.getInstanceMethod(d);if(pa==null&&this.AE!=null)pa=this.AE.iQ(d);return pa;};s.Ey=function(o){var
ba=null;for(var
gb=0;gb<this.FY.length&&ba==null;gb++)ba=this.FY[gb].getInstanceMethod(o);if(ba==null&&this.AE!=null)ba=this.AE.Ey(o);return ba;};s.rn=function(j){var
Q=j.getName();var
L=this.rE[ub.o+Q];if(typeof L==ub.p)this.rE[ub.o+Q]=L=this.iQ(Q,true);return L;};s.dn=function(k){var
R=k.getName();var
Za=this.VG[ub.o+R];if(typeof Za==ub.p)this.VG[ub.o+R]=Za=this.Ey(R);return Za;};});jsx3.lang.Class.defineClass("jsx3.lang.Object",null,null,function(){});jsx3.lang.Class.defineClass("jsx3.lang.Method",null,null,function(){});jsx3.lang.Class.jsxclass.AE=jsx3.lang.Object.jsxclass;jsx3.Class.defineClass("jsx3.lang.AOP",null,null,function(o,q){var
ub={a:"$",b:"EI",c:"G3",d:"qW",e:"NO",f:"tK",g:/^\w+$/,h:"^",i:"*",j:"\\w*",k:"string",l:"function",m:"strClass"};var
yb=jsx3.IllegalArgumentException;o.Kz={};o.ZT={};o.pc=function(m,r){if(o.Kz[m])throw new
yb();var
Xa=o.Kz[m]={JM:m,qW:[],NO:[],tK:[],aF:r,nD:[]};var
sb=o.So(r);for(var
wb=0;wb<sb.length;wb++){var
Ma=sb[wb];var
Oa=o.UK(Ma);o.ZT[Oa].bG.push(Xa);Xa.nD.push(Oa);}return o;};o.pcrem=function(f){var
S=o.Kz[f];if(S){var
ya=S.nD;for(var
tb=0;tb<ya.length;tb++){var
ib=o.ZT[ya[tb]];ib.bG.splice(jsx3.util.arrIndexOf(ib.bG,S),1);if(ib.bG.length==0)o.fS(ya[tb]);}delete o.Kz[f];}};o.UK=function(b){var
lb=b[0],oa=b[1];var
Ta=lb.getName()+ub.a+oa;if(!o.ZT[Ta]){var
Ha=(lb.getConstructor()).prototype;if(!Ha[oa]._aoppc){o.ZT[Ta]={yT:Ha[oa],bG:[]};var
pa=Ha[oa].jsxmethod;Ha[oa]=o.xG(Ta);Ha[oa].jsxmethod=pa;}else o.ZT[Ta]={yT:o.ZT[Ha[oa]._aopkey].yT,bG:[]};}return Ta;};o.fS=function(k){var
ba=o.ZT[k];var
y=ba.yT;var
R=y.jsxmethod;((R.getDeclaringClass()).getConstructor()).prototype[R.getName()]=y;delete o.ZT[k];};o.before=function(f,i,n){o[n?ub.b:ub.c](f,i,ub.d);};o.after=function(i,k,d){o[d?ub.b:ub.c](i,k,ub.e);};o.around=function(b,e,j){o[j?ub.b:ub.c](b,e,ub.f);};o.G3=function(e,b,l){o.Kz[e][l].push(b);};o.EI=function(k,r,f){var
t=o.Kz[k][f];for(var
x=t.length-1;x>=0;x--)if(t[j]===r)t.splice(x,1);};o.xG=function(l){var
La=function(){return o.qX(l,this,arguments);};La._aoppc=1;La._aopkey=l;return La;};o.qX=function(f,d,c){var
pb=o.gx(d,o.ZT[f].bG);var
X=o.FJ(pb,ub.f);if(X.length>0){return (new
o.Vt(f,X,d,c)).yN();}else return o.jP(f,d,c,pb);};o.jP=function(e,n,d,a){if(!a)a=o.gx(n,o.ZT[e].bG);var
K=o.FJ(a,ub.d);for(var
B=0;B<K.length;B++)K[B].apply(n,d);var
F=o.ZT[e].yT.apply(n,d);var
T=o.FJ(a,ub.e);if(T.length>0){var
M=jsx3.Method.argsAsArray(d);M.unshift(F);for(var
B=0;B<T.length;B++)T[B].apply(n,M);}return F;};o.gx=function(j,m){var
M=[];for(var
kb=0;kb<m.length;kb++){var
db=m[kb];var
v=db.aF;if(!v||!v.type||j.instanceOf(v.type))M.push(db);}return M;};o.FJ=function(e,s){var
X=[];for(var
B=0;B<e.length;B++)X.push.apply(X,e[B][s]);return X;};o.So=function(d){var
wa=[];var
db=o.OT(d.classes);for(var
da=0;da<db.length;da++)wa.push.apply(wa,o.hX(db[da],d.methods));return wa;};o.OT=function(d){if(!jsx3.$A.is(d))d=[d];var
fb=[];for(var
bb=0;bb<d.length;bb++)fb[bb]=o.lZ(d[bb]);return fb;};o.hX=function(b,j){var
Ra=[];var
nb=(b.getConstructor()).prototype;if(!jsx3.$A.is(j))j=[j];for(var
eb=0;eb<j.length;eb++){var
P=j[eb];if(P.match(ub.g)){var
Pa=nb[P];if(Pa)Ra.push([b,P]);}else{var
qb=new
RegExp(ub.h+P.replace(ub.i,ub.j)+ub.a);for(var z in nb)if(z.match(qb))Ra.push([b,z]);}}return Ra;};o.lZ=function(s){if(typeof s==ub.k)return jsx3.Class.forName(s);else if(typeof s==ub.l)return s.jsxclass;else if(s instanceof jsx3.Class)return s;else throw new
yb(ub.m,s);};o.Vt=function(k,n,l,d){this.vc=k;this.GW=n;this.aX=l;this.jT=d;};o.Vt.prototype.yN=function(){return this.proceed.apply(this,this.jT);};o.Vt.prototype.proceed=function(){var
v=this.GW.shift();if(v){var
Pa=jsx3.Method.argsAsArray(arguments);Pa.unshift(this);return v.apply(this.aX,Pa);}else return o.jP(this.vc,this.aX,arguments);};});jsx3.Class.defineClass("jsx3.lang.Exception",null,null,function(n,o){var
ub={a:"jsxsuper",b:"jsxsupermix",c:"__noSuchMethod__",d:"",e:"\n",f:"    at ",g:"#",h:".",i:"()",j:"^function(\\s+\\w+)?\\s*\\(([^\\)]*)\\)\\s*{",k:"anonymous",l:/\s+/g,m:" ",n:"(",o:/\s*,\s*/,p:", ",q:")",r:" { ",s:"anonymous()",t:": ",u:"\nCaused By:\n"};var
xb=jsx3.lang.Method;n.N7=false;n.je=null;o.init=function(f,l){n.je=this;this.Q3=f;this.oV=l;this.eg=[];this.k4();if(n.N7&&window.onerror==null)window.alert(f+this.printStackTrace());var
Q=jsx3.util.Logger;if(Q){var
zb=Q.getLogger(n.jsxclass.getName());if(zb.isLoggable(6))zb.trace(f,this);}};o.toString=function(){return this.Q3;};o.getMessage=function(){return this.Q3;};o.getCause=function(){return this.oV;};o.getStack=function(){return this.eg;};n.gr=[jsx3.Object.jsxclass.getInstanceMethod(ub.a),jsx3.Object.jsxclass.getInstanceMethod(ub.b),jsx3.Object.jsxclass.getInstanceMethod(ub.c)];n.formatStack=function(c){var
S=ub.d;if(!jsx3.util||!jsx3.util.jsxpackage)return S;for(var
vb=0;vb<c.length;vb++){var
J=c[vb];if(J==null)continue;if(J.jsxmethod instanceof xb){var
Jb=c[vb+1];if(Jb!=null&&jsx3.util.arrIndexOf(n.gr,Jb.jsxmethod)>=0)if(J==xb.prototype.apply)continue;if(jsx3.util.arrIndexOf(n.gr,J.jsxmethod)>=0)continue;if(S.length>0)S=S+ub.e;S=S+ub.f;S=S+(J.jsxmethod.getDeclaringClass()).getName();S=S+(J.jsxmethod.isStatic()?ub.g:ub.h);S=S+(J.jsxmethod.getName()+ub.i);}else{if(S.length>0)S=S+ub.e;S=S+ub.f;if(J.jsxclass instanceof jsx3.lang.Class){S=S+(J.jsxclass.getName()+ub.i);}else{var
Gb=J.toString();if(Gb.match(new
RegExp(ub.j))){var
Q=RegExp.$1||ub.k;var
ia=RegExp.$2;var
ba=RegExp.rightContext;ba=jsx3.util.strTruncate((jsx3.util.strTrim(ba)).replace(ub.l,ub.m),70);S=S+(jsx3.util.strTrim(Q)+ub.n+((jsx3.util.strTrim(ia)).split(ub.o)).join(ub.p)+ub.q+(ba?ub.r+ba:ub.d));}else S=S+ub.s;}}}return S;};o.printStackTrace=function(){var
Ba=(this.getClass()).getName()+ub.t+this+ub.e+n.formatStack(this.eg);if(this.oV!=null)Ba=Ba+(ub.u+this.oV.printStackTrace());return Ba;};o.k4=function(){var
rb=jsx3.lang.getStack(1);var
N=-1;for(var
G=0;G<rb.length;G++)if(rb[G].jsxclass!=null){N=G;break;}if(N>=0)rb.splice(0,N+1);this.eg=rb;};});jsx3.Class.defineClass("jsx3.lang.IllegalArgumentException",jsx3.lang.Exception,null,function(d,o){var
ub={a:"exc.ill_arg"};o.init=function(g,n){this.jsxsuper(jsx3._msg(ub.a,g,n));};});jsx3.Class.defineClass("jsx3.lang.NativeError",jsx3.lang.Exception,null,function(d,g){var
ub={A:"line:",B:"file:",C:")",a:"",b:"uncaught exception:",c:"jsx3.util.Logger",d:"string",e:"error.trap",f:"error.uncaught",g:"\n",h:"error.trap_err",i:"objError",j:/\s*$/,k:"EvalError",l:"RangeError",m:"ReferenceError",n:"SyntaxError",o:"TypeError",p:"Error",q:": ",r:/\n/g,s:"\nCaused By:\n",t:/^([^\(]*)\((.*)\)@(.*):(\d+)$/,u:"    at ",v:"anonymous",w:"(), line:",x:", file:",y:" (type:",z:", "};var
mb=jsx3.Exception;d.b4=false;d.EW=true;d.wrap=function(s){if(s instanceof Error)return new
d(s);else if(s instanceof mb)return s;else return new
mb(ub.a+s);};d.initErrorCapture=function(l){window.onerror=arguments.length>0?l:d.CY;};d.stopErrorCapture=function(r){window.onerror=null;};d.Pr=ub.b;d.CY=function(b,p,h){try{if(!d.b4&&jsx3.Class.forName(ub.c)!=null&&jsx3.util.Logger.GLOBAL!=null){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.je!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.length<2||Ba.contentsEqual(mb.je.getStack())){if(Ba.length<2)jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.T9(h),p),1);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.f),mb.je);mb.je=true;return true;}}jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.T9(h),p),1);return true;}else if(d.EW){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.je!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.contentsEqual(mb.je.getStack())){window.alert(jsx3._msg(ub.f)+ub.g+mb.je.printStackTrace());return true;}}var
Ba=jsx3.lang.getStack(0);window.alert(jsx3._msg(ub.e,b,d.T9(h),p)+ub.g+mb.formatStack(Ba));return true;}else return false;}catch(Kb){window.alert(jsx3._msg(ub.h,d.wrap(Kb),b,d.T9(h),p));}};g.dN=null;g.init=function(h){if(!(h instanceof Error))throw new
jsx3.IllegalArgumentException(ub.i,h);this.dN=h;this.jsxsuper();};g.getMessage=function(){return (this.dN.message||this.dN.toString()).replace(ub.j,ub.a);};g.getFileName=function(){return this.dN.fileName;};g.getLineNumber=function(){return d.T9(this.dN.lineNumber);};d.T9=function(a){if(jsx3.util.numIsNaN(a))return null;return a;};g.getName=function(){return this.dN.name;};g.isStructural=function(){return false;};g.getType=function(){if(this.dN instanceof EvalError)return ub.k;if(this.dN instanceof RangeError)return ub.l;if(this.dN instanceof ReferenceError)return ub.m;if(this.dN instanceof SyntaxError)return ub.n;if(this.dN instanceof TypeError)return ub.o;return ub.p;};g.printStackTrace=function(){var
D=(this.getClass()).getName()+ub.q+this+ub.g+mb.formatStack(this.eg);if(this.dN.stack){var
pa=(String(this.dN.stack)).split(ub.r);D=D+ub.s;for(var
vb=0;vb<pa.length;vb++)if(ub.t.exec(pa[vb])){D=D+(ub.u+(RegExp.$1?RegExp.$1:ub.v)+ub.w+RegExp.$4+ub.x+RegExp.$3+ub.g);}else D=D+(pa[vb]+ub.g);}if(this._cause!=null)D=D+(ub.s+this._cause.printStackTrace());return D;};g.toString=function(){var
I=this.getLineNumber();var
V=this.getFileName();var
va=this.getMessage();if(I||V){va=va+(ub.y+this.getType()+ub.z);if(I)va=va+(ub.A+I);if(V){if(I)va=va+ub.z;va=va+(ub.B+V);}va=va+ub.C;}return va;};});jsx3.lang.Package=jsx3.lang.qg();jsx3.lang.Class.defineClass("jsx3.lang.Package",null,null,function(s,k){var
ub={a:".",b:"jsx3.util.Logger",c:"jsx3.lang",d:"pkg.redefine",e:"pkg.def_error",f:"jsxpackage",g:"function",h:"object",i:"class.nsm",j:"#",k:"()",l:"class.redef_method"};var
hb=jsx3.lang.Class;var
ea=jsx3.lang.Method;s.R8=[];s.definePackage=function(l,f){var
t=hb.gn(l.split(ub.a));var
aa=false;var
rb=null;if(t.jsxpackage!=null){if(jsx3.Class.forName(ub.b))(jsx3.util.Logger.getLogger(ub.c)).info(jsx3._msg(ub.d,l));rb=t.jsxpackage;aa=true;rb.TH=[];rb.VN=[];}else{rb=hb.gi(s);rb.Z4=l;rb.TH=[];rb.VN=[];t.jsxpackage=rb;}try{f(t);}catch(Kb){var
D=jsx3.NativeError.wrap(Kb);throw new
jsx3.Exception(jsx3._msg(ub.e,l,D),D);}for(var lb in t){if(lb==ub.f)continue;if(typeof t[lb]==ub.g){if(t[lb].jsxclass==null)this.hv(t[lb],rb,lb);}else if(t[lb]==null||typeof t[lb]!=ub.h||t[lb].jsxpackage==null)rb.TH.push(lb);}if(t.__noSuchMethod__==null)t.__noSuchMethod__=function(a,e){throw new
jsx3.Exception(jsx3._msg(ub.i,l+ub.j+a+ub.k));};s.R8.push(rb);jsx3.CLASS_LOADER.pk(rb);};s.hv=function(d,a,p){if(d.jsxmethod instanceof ea)if((d.jsxmethod.getDeclaringClass()).equals(a)&&d.jsxmethod.getName()!=p){throw new
jsx3.Exception(jsx3._msg(ub.l,d.jsxmethod,a+ub.a+p));}else{if((d.jsxmethod.getDeclaringClass()).equals(a)&&jsx3.util.arrIndexOf(a.VN,d.jsxmethod)<0)a.VN.push(d.jsxmethod);return;}var
t=hb.gi(ea);t.FR=a;t.JM=p;t.oh=true;d.jsxmethod=t;a.VN.push(t);};s.forName=function(l){var
E=jsx3.lang.getVar(l);return E?E.jsxpackage:null;};s.getPackages=function(){return s.R8.concat();};k.Z4=null;k.Ev=null;k.VN=null;k.TH=null;k.getName=function(){return this.Z4;};k.getNamespace=function(){if(this.Ev!=null)return this.Ev;var
Db=jsx3.lang.getVar(this.Z4);return Db||null;};k.getClasses=function(){var
Oa=[];var
z=this.getNamespace();for(var sa in z)if(typeof z[sa]==ub.g&&z[sa].jsxclass instanceof hb)if(z[sa].jsxclass.getPackage()==this&&this.getName()+ub.a+sa==z[sa].jsxclass.getName()){Oa[Oa.length]=z[sa].jsxclass;Oa.push.apply(Oa,z[sa].jsxclass.getClasses());}return Oa;};k.getStaticMethods=function(){return this.VN.concat();};k.getStaticMethod=function(g){for(var
gb=0;gb<this.VN.length;gb++)if(g==this.VN[gb].getName())return this.VN[gb];return null;};k.getStaticFieldNames=function(){return this.TH.concat();};k.toString=function(){return this.Z4;};});jsx3.Package.definePackage("jsx3",function(){var
ub={A:"INHR01",B:"Super class '",C:"' of '",D:"' not properly defined",E:"1",F:"jsx3.util.Logger",G:"GP",a:"JSX/addins/",b:"Msxml2.FreeThreadedDOMDocument.3.0",c:"Msxml2.XSLTemplate.3.0",d:"Msxml2.XMLHTTP.3.0",e:"JSX30DESERIALIZE",f:"JSX30INITIALIZE",g:"",h:"var ",i:" = _ec.",j:";",k:"string",l:"object",m:"jsx3.gui.MatrixColumn",n:"jsx3.gui.Matrix.Column",o:"queueDone",p:"jsx3.net.Request.INSYNC",q:"gi",r:"http://www.tibco.com/gi",s:"boot.oah",t:/\s+/,u:"script",v:"function",w:".prototype",x:".",y:")",z:"\n"};jsx3.ADDINSPATH=ub.a;jsx3.XMLREGKEY=ub.b;jsx3.XSLREGKEY=ub.c;jsx3.HTTPREGKEY=ub.d;jsx3.getXmlVersion=function(){return 6;};jsx3.DESERIALIZE=ub.e;jsx3.INITIALIZE=ub.f;jsx3.LOG10E=Math.LOG10E;jsx3.STARTUP_EVENT=null;jsx3.CACHE=null;jsx3.EVENT=null;jsx3.getSharedCache=function(){if(jsx3.CACHE==null)jsx3.CACHE=new
jsx3.app.Cache();return jsx3.CACHE;};jsx3.getSystemCache=function(){if(jsx3.kA==null)jsx3.kA=new
jsx3.app.Cache();return jsx3.kA;};jsx3.eval=function(q,i){if(q!=null&&q!==ub.g){var
Ba=ub.g;if(i){var
_ec=i;var
sa=[];for(var N in _ec)if(jsx3.util.isName(N))sa[sa.length]=ub.h+N+ub.i+N+ub.j;Ba=sa.join(ub.g);}return eval(Ba+q);}};jsx3.resolveURI=function(l){return (jsx3.net.URIResolver.DEFAULT.resolveURI(l)).toString();};jsx3.makeCallback=function(e,p,b){var
Ja=jsx3.Method.argsAsArray;var
t=Ja(arguments,2);if(typeof e==ub.k)e=p[e];return function(){var
ba=arguments;var
T=ba.length>0?t.concat(Ja(ba)):t;return e.apply(p,T);};};jsx3.clone=function(h){if(typeof h!=ub.l)return h;var
_={};for(var Ha in h)_[Ha]=h[Ha];return _;};jsx3.E7={};jsx3.E7[ub.m]=ub.n;jsx3.require=function(b){for(var
R=0;R<arguments.length;R++){var
Ma=arguments[R];Ma=jsx3.E7[Ma]||Ma;if(jsx3.Class.forName(Ma)==null)jsx3.CLASS_LOADER.loadClass(Ma);}};jsx3.requireAsync=jsx3.$Y(function(j){var
S=j.args();var
A=S[0];jsx3.CLASS_LOADER.loadClassAsync(A,function(){if(S.length>=2){(jsx3.requireAsync.apply(jsx3,jsx3.Method.argsAsArray(S,1))).when(function(){j.done();});}else j.done();});});jsx3.e8=[];jsx3.pW=[];jsx3.yv=null;jsx3.sleep=function(q,o,c,n){if(o&&jsx3.pW[o])if(n)jsx3.pW[o][0]=null;else return;var
tb=[q,o,c];var
Na=jsx3.e8;Na[Na.length]=tb;if(o!=null)jsx3.pW[o]=tb;if(!jsx3.yv)jsx3.yv=window.setTimeout(jsx3.DE,0);};jsx3.QUEUE_DONE=ub.o;jsx3.DE=function(){jsx3.util.WeakMap.expire();try{if(jsx3.lang.getVar(ub.p))return;var
Ca=jsx3.e8;jsx3.e8=[];for(var
Ga=0;Ga<Ca.length;Ga++){var
Lb=Ca[Ga];if(Lb&&Lb[0])try{if(Lb[1]!=null)delete jsx3.pW[Lb[1]];Lb[0].apply(Lb[2]);}catch(Kb){var
ha=jsx3.util.Logger;if(ha){var
qb=jsx3.NativeError.wrap(Kb);ha.GLOBAL.error(qb,qb);}}}}finally{if(jsx3.e8.length>0)jsx3.yv=window.setTimeout(jsx3.DE,0);else{jsx3.yv=null;jsx3.publish({subject:jsx3.QUEUE_DONE});}}};jsx3.startup=function(){if(window.OpenAjax)try{OpenAjax.hub.registerLibrary(ub.q,ub.r,jsx3.getVersion());}catch(Kb){var
J=jsx3.util.Logger;if(J)J.GLOBAL.error(jsx3._msg(ub.s),jsx3.NativeError.wrap(Kb));}};jsx3.destroy=function(){if(jsx3.app&&jsx3.app.Server){var
na=jsx3.app.Server.allServers();for(var
Va=0;Va<na.length;Va++)try{na[Va].destroy();}catch(Kb){}}if(jsx3.gui&&jsx3.gui.Event){var
oa="BEFOREUNLOAD BLUR CHANGE CLICK DOUBLECLICK ERROR FOCUS KEYDOWN KEYPRESS KEYUP LOAD MOUSEDOWN MOUSEMOVE MOUSEOUT MOUSEOVER MOUSEUP MOUSEWHEEL UNLOAD RESIZE".split(ub.t);for(var
Va=0;Va<oa.length;Va++)jsx3.gui.Event.unsubscribeAll(jsx3.gui.Event[oa[Va]]);}jsx3.NativeError.stopErrorCapture();var
Sa=document.getElementsByTagName(ub.u);for(var
Va=0;Va<Sa.length;Va++){var
A=Sa.item(Va);A.parentNode.removeChild(A);}jsx3.CLASS_LOADER.destroy();window.jsx3=null;};jsx3.getClass=function(b){try{var
Xa=eval(b);return typeof Xa==ub.v?Xa:null;}catch(Kb){return null;}};jsx3.rl=function(r){try{var
bb=eval(r+ub.w);return typeof bb==ub.l&&typeof bb.constructor==ub.v?bb:null;}catch(Kb){return null;}};jsx3.getClassConstants=function(n){var
fa=jsx3.getClass(n);if(fa!=null){var
mb=[];for(var sa in fa)if(sa.toUpperCase()==sa)mb[mb.length]=n+ub.x+sa;return mb;}};jsx3.getInstanceMethods=function(j){var
U=jsx3.rl(j);var
I=[];for(var J in U)if(typeof U[J]==ub.v){var
ha=U[J].toString();I[I.length]=ha.substring(9,ha.indexOf(ub.y)+1);}return I;};jsx3.getClassMethods=function(q){var
Va=jsx3.getClass(q);var
Jb=ub.g;for(var za in Va)if(typeof Va[za]==ub.v){var
na=Va[za].toString();Jb=Jb+(za+na.substring(8,na.indexOf(ub.y)+1)+ub.z);}return Jb;};jsx3.doInherit=function(f,n,d){var
wa=jsx3.getClass(f);var
Ra=jsx3.getClass(n);if(Ra==null){jsx3.util.Logger.doLog(ub.A,ub.B+n+ub.C+f+ub.D,1,false);return;}if(wa.isInherited==null||d!=null&&d){if(!d){wa.SUPER=n;wa.SUPERS={};for(var D in Ra.SUPERS){wa.SUPERS[D]=Ra.SUPERS[D];wa.SUPERS[f]=1;}}wa.className=f;if(wa.INHERITANCE==null)wa.INHERITANCE=[f];if(Ra.INHERITANCE)for(var
Ea=Ra.INHERITANCE.length-1;Ea>=0;Ea--)wa.INHERITANCE.splice(1,0,Ra.INHERITANCE[Ea]);else wa.INHERITANCE.splice(1,0,n);if(wa.INTERFACES==null)wa.INTERFACES={};if(Ra.INTERFACES){for(var D in Ra.INTERFACES)wa.INTERFACES[D]=Ra.INTERFACES[D];}else wa.INTERFACES[n]=ub.E;wa.INTERFACES[f]=ub.E;if(!(d!=null&&d))wa.isInherited=true;var
wb=jsx3.rl(n);var
ia=jsx3.rl(f);for(var D in wb)if(typeof ia[D]!=ub.v)ia[D]=wb[D];}};jsx3.doImplement=function(m,b){jsx3.doInherit(m,b,true);};jsx3.doMixin=function(a,q){var
ya=jsx3.rl(q);for(var Za in ya)if(typeof ya[Za]==ub.v)a[Za]=ya[Za];};jsx3.doDefine=function(c,r){var
fb=jsx3.getClass(c);if(fb.isDefined==null){fb.isDefined=true;r();}};jsx3.out=function(c,q,o,p){if(jsx3.Class.forName(ub.F))jsx3.util.Logger.doLog(c,q,o,p);};window.doInherit=jsx3.doInherit;window.doImplement=jsx3.doImplement;window.doMixin=jsx3.doMixin;window.doDefine=jsx3.doDefine;jsx3.log=function(j){if(jsx3.Class.forName(ub.F)&&jsx3.util.Logger.GLOBAL){if(jsx3.GP){for(var
V=0;V<jsx3.GP.length;V++)jsx3.util.Logger.GLOBAL.info(jsx3.GP[V]);delete jsx3[ub.G];}jsx3.util.Logger.GLOBAL.info(j);}else{var
Wa=jsx3.GP;if(!Wa)jsx3.GP=Wa=[];Wa[Wa.length]=j;}};});jsx3.Package.definePackage("jsx3.app",function(){});jsx3.Boolean={};jsx3.Boolean.TRUE=1;jsx3.Boolean.FALSE=0;jsx3.Boolean.valueOf=function(b){return b?1:0;};jsx3.Package.definePackage("jsx3.gui",function(i){var
ub={a:"className"};i.no=function(s,o){var
La=[];for(var
N=0;N<arguments.length-1;N=N+2){s=arguments[N];if(s._jsxRr)continue;s._jsxRr=true;o=arguments[N+1];var
ia={};for(var x in o)ia[x]=x==ub.a?s.className:s.style[x];La.push(s,ia,o);}i.GG(La,0,6);};i.GG=function(m,c,r){if(c==r){for(var
Bb=0;Bb<m.length-2;Bb=Bb+3){var
_a=m[Bb];_a._jsxRr=null;}return;}for(var
Bb=0;Bb<m.length-2;Bb=Bb+3){var
_a=m[Bb];var
ka=c%2==0?m[Bb+2]:m[Bb+1];for(var Nb in ka)if(Nb==ub.a)_a.className=ka[Nb];else _a.style[Nb]=ka[Nb];}window.setTimeout(function(){i.GG(m,c+1,r);},75);};i.isMouseEventModKey=function(s){if(jsx3.app.Browser.macosx)return s.metaKey();else return s.ctrlKey();};});jsx3.Package.definePackage("jsx3.lang",function(e){});jsx3.Package.definePackage("jsx3.net",function(j){});jsx3.Class.defineInterface("jsx3.net.URIResolver",null,function(a,r){var
ub={a:"jsxabspath",b:"jsxhomepath",c:"jsxscriptapppath",d:"JSXAPPS",e:"/",f:"..",g:"jsx",h:"JSX",i:"jsxuser",j:"GI_Builder/",k:"function",l:"jsxurirslv",m:"3.6",n:"strURI",o:"bRel"};a.BV={};a.register=function(p,k){a.BV[p]=k;};a.UR=function(){if(this.V0==null)this.V0=new
jsx3.net.URI(jsx3.getEnv(ub.a));return this.V0;};a.FV=function(){var
va=jsx3.getEnv(ub.b);if(va==null)return new
jsx3.net.URI(jsx3.getEnv(ub.c));if(this.my==null)this.my=new
jsx3.net.URI(va);return this.my;};a.DEFAULT=a.jsxclass.newInnerClass();a.DEFAULT.resolveURI=function(d){var
D=jsx3.net.URI.valueOf(d);var
qa=D.getScheme();var
ya=D.getPath();var
cb=a.getResolver(D);var
da=D;if(cb&&cb!=a.DEFAULT){if(D.isAbsolute())D=jsx3.net.URI.fromParts(null,null,null,null,ya.substring(1),D.getQuery(),D.getFragment());da=cb.resolveURI(D);}else if(cb){da=(a.UR()).resolve(D);}else if((D.toString()).indexOf(ub.d+ub.e)==0){da=a.USER.resolveURI(D);}else if(!qa&&ya.indexOf(ub.f)>=0){var
rb=jsx3.app.Browser.getLocation();da=rb.relativize(rb.resolve(D));}return da;};a.DEFAULT.getUriPrefix=function(){return (a.UR()).toString();};a.DEFAULT.relativizeURI=function(g,n){return jsx3.net.URI.valueOf(g);};a.JSX=a.jsxclass.newInnerClass();a.register(ub.g,a.JSX);a.JSX.getURI=function(){if(this._uri==null)this._uri=(a.UR()).resolve(ub.h+ub.e);return this._uri;};a.JSX.resolveURI=function(m){var
Fb=jsx3.net.URI.valueOf(m);if(!a.isAbsoluteURI(Fb))Fb=(this.getURI()).resolve(Fb);return a.DEFAULT.resolveURI(Fb);};a.JSX.getUriPrefix=function(){return a.UR()+ub.h+ub.e;};a.JSX.relativizeURI=function(n,b){var
da=(this.getURI()).relativize(n);if(da.isAbsolute()||b)return da;else return jsx3.net.URI.fromParts(ub.g,null,null,null,ub.e+da.getPath(),da.getQuery(),da.getFragment());};a.USER=a.jsxclass.newInnerClass();a.register(ub.i,a.USER);a.USER.resolveURI=function(p){var
I=jsx3.net.URI.valueOf(p);if((I.getPath()).indexOf(ub.d+ub.e)==0||!a.isAbsoluteURI(I))return (a.FV()).resolve(I);return a.DEFAULT.resolveURI(I);};a.USER.getUriPrefix=function(){return (a.FV()).toString();};a.USER.relativizeURI=function(k,g){var
fa=jsx3.app.Browser.getLocation();var
ha=(fa.resolve(jsx3.getEnv(ub.b))).relativize(fa.resolve(k));if(ha.isAbsolute()||g)return ha;else return jsx3.net.URI.fromParts(ub.i,null,null,null,ub.e+ha.getPath(),ha.getQuery(),ha.getFragment());};a.isAbsoluteURI=function(o){var
T=jsx3.net.URI.valueOf(o);if(T.getScheme()!=null)return true;var
Va=T.getPath();return Va.indexOf(ub.e)==0||Va.indexOf(ub.h+ub.e)==0||Va.indexOf(ub.d+ub.e)==0||Va.indexOf(ub.j)==0;};a.getResolver=function(e){var
ha=jsx3.net.URI.valueOf(e);var
C=ha.getScheme();var
Mb=null;if(C){Mb=a.BV[C];if(typeof Mb==ub.k)Mb=Mb(ha);}else{var
T=ha.getPath();if(T.indexOf(ub.h+ub.e)==0||T.indexOf(ub.j)==0)Mb=a.DEFAULT;else if(jsx3.getEnv(ub.l)==ub.m&&T.indexOf(ub.d+ub.e)==0)Mb=a.USER;}return Mb;};r.resolveURI=jsx3.Method.newAbstract(ub.n);r.getUriPrefix=jsx3.Method.newAbstract();r.relativizeURI=jsx3.Method.newAbstract(ub.n,ub.o);});jsx3.Package.definePackage("jsx3.xml",function(h){});jsx3.Package.definePackage("jsx3.util",function(c){var
ub={A:"&lt;",B:/>/g,C:"&gt;",D:/\"/g,E:"&quot;",F:/[^\x09\x0A\x0D\x20-\x7F]/g,G:"\\u",H:"...",I:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J:"=",a:",",b:/^[\\$_a-zA-Z][\w\\$]*$/,c:/^(\d+)?([a-zA-Z_]\w*)?$/,d:/[\._]/,e:"",f:"\b",g:"\\b",h:"\t",i:"\\t",j:"\n",k:"\\n",l:"\u000C",m:"\\f",n:"\r",o:"\\r",p:'"',q:'\\"',r:"\\",s:"\\\\",t:/[\"\\\x00-\x1f]/,u:/[\x00-\x1f\\\"]/g,v:"\\u00",w:/(^\s*)|(\s*$)/g,x:/&/g,y:"&amp;",z:/</g};c.RESERVED=jsx3.$H("abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,in,instanceof,int,interface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,void,volatile,while,with".split(ub.a));c.isName=function(l){return Boolean(!c.RESERVED[l]&&l.match(ub.b));};c.compareVersions=function(f,e){var
ca=ub.c;var
Jb=f.split(ub.d);var
kb=e.split(ub.d);var
db=Math.max(Jb.length,kb.length);var
zb,Kb,ha,Da;for(var
E=0;E<db;E++){if(Jb.length>E&&ca.test(Jb[E])){zb=parseInt(RegExp.$1)||Number(0);Kb=RegExp.$2;}else{zb=0;Kb=ub.e;}if(kb.length>E&&ca.test(kb[E])){ha=parseInt(RegExp.$1)||Number(0);Da=RegExp.$2;}else{ha=0;Da=ub.e;}if(zb>ha)return 1;if(zb<ha)return -1;if(Kb>Da)return 1;if(Kb<Da)return -1;}return 0;};c.numMod=function(n,i){var
ka=n%i;return ka<0?ka+i:ka;};c.numIsNaN=function(a){return a==null||a===ub.e||isNaN(a);};c.numRound=function(r,k){return Math.round(r/k)*k;};c.strEmpty=function(b){return b==null||b===ub.e;};c._jsxi9={};c._jsxi9[ub.f]=ub.g;c._jsxi9[ub.h]=ub.i;c._jsxi9[ub.j]=ub.k;c._jsxi9[ub.l]=ub.m;c._jsxi9[ub.n]=ub.o;c._jsxi9[ub.p]=ub.q;c._jsxi9[ub.r]=ub.s;c.strEscapeJSON=function(j){if(ub.t.test(j))return ub.p+j.replace(ub.u,function(g){var
ra=c._jsxi9[g];if(ra)return ra;ra=g.charCodeAt();return ub.v+(Math.floor(ra/16)).toString(16)+(ra%16).toString(16);})+ub.p;return ub.p+j+ub.p;};c.arrIndexOf=function(o,a){for(var
N=0;N<o.length;N++)if(o[N]===a)return N;return -1;};c.DH=ub.w;c.strTrim=function(h){return h.replace(c.DH,ub.e);};c.strEscapeHTML=function(g){return (((((String(g)).replace(ub.x,ub.y)).replace(ub.z,ub.A)).replace(ub.B,ub.C)).replace(ub.D,ub.E)).replace(ub.F,function(h){var
nb=h.charCodeAt(0);if(nb<32||nb>55295&&nb<57344||nb>65533&&nb<65536||nb>1114111)return ub.G+nb.toString(16);else return h;});};c.strTruncate=function(h,r,p,e){if(p==null)p=ub.H;if(e==null)e=1;if(h.length>r&&p.length<r){var
Ca=r-p.length;var
Ib=Math.round(Ca*e);var
H=h.substring(0,Ib);var
P=h.substring(h.length-(Ca-Ib));return H+p+P;}else return h;};c.strEndsWith=function(h,g){var
z=h.lastIndexOf(g);return z>=0&&z==h.length-g.length;};c.gA=ub.I;c.strEncodeBase64=function(k){var
Z=c.gA;var
u=new
Array(Math.ceil(k.length*4/3));var
Ha=0,Kb=0,db=k.length;for(;Ha<=db-3;Ha=Ha+3){var
N=(k.charCodeAt(Ha)&255)<<16|(k.charCodeAt(Ha+1)&255)<<8|k.charCodeAt(Ha+2)&255;u[Kb++
]=Z.charAt((N&16515072)>>18);u[Kb++
]=Z.charAt((N&258048)>>12);u[Kb++
]=Z.charAt((N&4032)>>6);u[Kb++
]=Z.charAt(N&63);}if(Ha<db){var
ha=Ha<db-1;var
N=(k.charCodeAt(Ha)&255)<<16;if(ha)N=N|(k.charCodeAt(Ha+1)&255)<<8;u[Kb++
]=Z.charAt((N&16515072)>>18);u[Kb++
]=Z.charAt((N&258048)>>12);if(ha)u[Kb++
]=Z.charAt((N&4032)>>6);else u[Kb++
]=ub.J;u[Kb++
]=ub.J;}return u.join(ub.e);};c.strDecodeBase64=function(e){var
jb=c.gA;var
lb=new
Array(Math.ceil(e.length/4));var
Oa=0,Aa=0,ja=e.length;for(;Oa<ja;Oa=Oa+4){var
Eb=(jb.indexOf(e.charAt(Oa))&255)<<18|(jb.indexOf(e.charAt(Oa+1))&255)<<12|(jb.indexOf(e.charAt(Oa+2))&255)<<6|jb.indexOf(e.charAt(Oa+3))&255;lb[Aa++
]=String.fromCharCode((Eb&16711680)>>16,(Eb&65280)>>8,Eb&255);}if(e.charCodeAt(Oa-2)==61)lb[Aa-1]=lb[Aa-1].substring(0,1);else if(e.charCodeAt(Oa-1)==61)lb[Aa-1]=lb[Aa-1].substring(0,2);return lb.join(ub.e);};});jsx3.Class.defineClass("jsx3.util.Timer",null,null,function(c,h){var
ub={a:"bench.",b:" : ",c:"",d:"ms"};c.ny=[];c.listen=function(){var
Ib=[];c.ny.push(Ib);return Ib;};c.ignore=function(g){var
R=jsx3.util.arrIndexOf(c.ny,g);c.ny.splice(R,1);};c.d6=function(s,b,q){var
Hb=c.ny;if(Hb.length>0){var
eb={topic:s.aU,subtopic:s.Q3,message:b,ms:q};for(var
Db=0;Db<Hb.length;Db++)Hb[Db].push(eb);}};h.init=function(q,r,o){this.aR=new
Date();this.aU=String(q);this.Q3=String(r);this.UA=o||4;};h.log=function(q){var
B=new
Date();if(!this.dI)if(jsx3.util.Logger)this.dI=jsx3.util.Logger.getLogger(ub.a+this.aU);var
pb=B-this.aR;if(this.dI&&this.dI.isLoggable(this.UA))this.dI.log(this.UA,(this.Q3?this.Q3+ub.b:ub.c)+(q?q+ub.b:ub.c)+pb+ub.d);c.d6(this,q,pb);this.aR=B;};});jsx3.Class.defineClass("jsx3.util.WeakMap",null,null,function(n,b){var
ub={a:"lv"};n.Zx=0;n.XT={};n.b1=null;n.expire=function(){window.clearTimeout(n.b1);n.b1=null;for(var ya in n.XT){var
Fb=n.XT[ya];if(Fb.vJ)Fb.lv={};}};b.init=function(){this.Kp=n.Zx++;this.lv={};this.vJ=false;n.XT[this.Kp]=this;};b.get=function(q){return this.lv[q];};b.set=function(r,g){this.lv[r]=g;this.vJ=true;if(!n.b1)n.b1=window.setTimeout(n.expire,0);};b.destroy=function(q,f){delete this[ub.a];delete n.XT[this.Kp];};});jsx3.Class.defineClass("jsx3.util.MemStats",null,null,function(k,r){var
ub={a:"namespace",b:"bench.",c:"sys-cache:",d:" shr-cache:",e:" sys-jss:",f:" [@",g:" dom:",h:" html:",i:" cache:",j:" jss:",k:"]",l:" time: ",m:"B",n:"K",o:"M",p:"G",q:"s"};k.INTERVAL=15000;k.NW=12;k.GA=60;k.Zx=0;k.gW=function(){var
ya=jsx3.util.Logger;if(ya){var
aa=k.Zx%k.GA==0?4:k.Zx%k.NW==0?5:6;k.Q2(aa);k.Zx++;}};k.log=function(){k.Q2(3);};k.getStats=function(){var
kb={};var
aa=new
Date();kb.systemcache=k.p9(jsx3.getSystemCache());kb.sharedcache=k.p9(jsx3.getSharedCache());kb.jss=k.N5(jsx3.System.JSS);kb.apps=[];var
Xa=jsx3.app.Server.allServers();(jsx3.$A(Xa)).each(function(l){var
S=(l.getRootBlock()).getRendered();kb.apps.push({ns:l.getEnv(ub.a),cache:k.p9(l.getCache()),html:S?S.parentNode.innerHTML.length:0,dom:k.XM(l.JSXROOT)+k.XM(l.INVISIBLE),jss:(l.JSS.getKeys()).length+k.N5(l.LJSS)});});kb.statstime=(new
Date()).getTime()-aa.getTime();return kb;};k.p9=function(e){var
da=0;var
Ca=0;var
xa=e.keys();(jsx3.$A(xa)).each(function(d){var
Wa=e.getDocument(d);if(Wa){Ca++;da=da+(Wa.toString()).length;}});return [Ca,da];};k.XM=function(a){if(!a)return 0;var
U=1;var
ma=a.getChildren();for(var
ib=0;ib<ma.length;ib++)U=U+k.XM(ma[ib]);return U;};k.N5=function(i){var
la=(i.getKeys()).length;var
vb=i.getParents();for(var
Jb=0;Jb<vb.length;Jb++)la=la+k.N5(vb[Jb]);return la;};k.Q2=function(n){var
_a=jsx3.util.Logger;if(_a){var
qb=_a.getLogger(ub.b+k.jsxclass.getName());if(qb.isLoggable(n)){var
Db=k.getStats();var
Va=ub.c+k.pV(Db.systemcache[1])+ub.d+k.pV(Db.sharedcache[1])+ub.e+Db.jss;(jsx3.$A(Db.apps)).each(function(a){Va=Va+(ub.f+a.ns+ub.g+a.dom+ub.h+k.pV(a.html)+ub.i+k.pV(a.cache[1])+ub.j+a.jss+ub.k);});Va=Va+(ub.l+k.cz(Db.statstime));qb.log(n,Va);}}};k.pV=function(l){if(l<1024)return l+ub.m;l=Math.ceil(l/1024);if(l<1024)return l+ub.n;l=l/1024;if(l<1024)return Math.round(l*10)/10+ub.o;l=Math.ceil(l/1024);return Math.round(l*10)/10+ub.p;};k.cz=function(n){return Math.round(n/100)/10+ub.q;};window.setInterval(k.gW,k.INTERVAL);});jsx3.Class.defineClass("jsx3.util.List",null,null,function(m,o){var
ub={a:"a",b:"number",c:"[",d:"]"};m.wrap=function(g){if(g instanceof m){return g;}else if(g instanceof Array){return new
m(g,true);}else throw new
jsx3.IllegalArgumentException(ub.a,g);};o.init=function(l,h){if(typeof l==ub.b){this.p6=new
Array(l);}else if(l instanceof m){this.p6=l.p6.concat();}else{l=m.wI(l);if(l instanceof Array){this.p6=h?l:l.concat();}else this.p6=[];}this.Y6=-1;};o.size=function(){return this.p6.length;};o.get=function(k){return this.p6[k];};o.set=function(i,k){this.p6[i]=k;};o.iterator=function(){return new
m.Iterator(this);};o.clear=function(){this.p6.splice(0,this.p6.length);};o.indexOf=function(p,r){if(r==null)r=0;var
Ta=this.size();for(var
sa=r;sa<Ta;sa++)if(this.get(sa)===p)return sa;return -1;};o.lastIndexOf=function(d,f){if(f==null)f=this.size()-1;for(var
ea=f;ea>=0;ea--)if(this.get(ea)===d)return ea;return -1;};o.contains=function(h){return this.indexOf(h)>=0;};o.remove=function(f){var
va=this.indexOf(f);if(va>=0)return (this.p6.splice(va,1))[0];return null;};o.removeAt=function(n,b){if(arguments.length==2){return m.wrap(this.p6.splice(n,b-n));}else return (this.p6.splice(n,1))[0];};o.clone=function(){return new
m(this);};o.add=function(q,n){var
bb=this.p6;if(n==null)bb[bb.length]=q;else bb.splice(n,0,q);};o.addAll=function(l,q){if(l instanceof m)l=l.toArray(true);else l=m.wI(l);if(jsx3.$A.is(l)){if(q==null)this.p6.push.apply(this.p6,l);else this.p6=(this.p6.slice(0,q)).concat(l,this.p6.slice(q));}else throw new
jsx3.IllegalArgumentException(ub.a,l);};m.wI=function(s){if(s==null||s instanceof Array){return s;}else if(typeof s.length==ub.b){var
H=new
Array(s.length);for(var
Z=0;Z<s.length;Z++)H[Z]=s[Z];return H;}else return s;};o.slice=function(i,a){return m.wrap(arguments.length>1?this.p6.slice(i,a):this.p6.slice(i));};o.sort=function(e){if(e)this.p6.sort(e);else this.p6.sort();};o.toArray=function(q){return q?this.p6:this.p6.concat();};o.equals=function(d){if(this===d)return true;if(!(d instanceof m))return false;var
mb=this.size();if(mb!=d.size())return false;for(var
ob=0;ob<mb;ob++)if(this.get(ob)!==d.get(ob))return false;return true;};o.filter=function(r){var
ua=[];var
wb=this.size();for(var
Fa=0;Fa<wb;Fa++){var
Ra=this.get(Fa);if(r(Ra))ua[ua.length]=Ra;}return m.wrap(ua);};o.map=function(e,j,c){var
xa=this.size();if(j){if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
Na=e(this.get(Za));for(var
B=0;B<Na.length;B=B+2)ca[Na[B]]=Na[B+1];}return ca;}else{var
ca=[];for(var
Za=0;Za<xa;Za++){var
Ia=e(this.get(Za));if(Ia instanceof Array)ca.push.apply(ca,Ia);else ca[ca.length]=Ia;}return m.wrap(ca);}}else if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
jb=e(this.get(Za));ca[jb[0]]=jb[1];}return ca;}else{var
ca=new
Array(xa);for(var
Za=0;Za<xa;Za++)ca[Za]=e(this.get(Za));return m.wrap(ca);}};o.toString=function(){return ub.c+this.p6+ub.d;};o.reset=function(){this.Y6=-1;return this;};o.next=function(){return this.get(
++this.Y6);};o.move=function(k){this.Y6=k;return this;};o.hasNext=function(){return this.Y6<this.size()-1;};o.getIndex=function(){return this.Y6;};o.getItem=function(i){return this.get(i);};o.getLength=function(){return this.size();};});jsx3.Class.defineInterface("jsx3.util.Iterator",null,function(n,r){r.next=jsx3.Method.newAbstract();r.hasNext=jsx3.Method.newAbstract();r.remove=jsx3.Method.newAbstract();});jsx3.Class.defineClass("jsx3.util.List.Iterator",null,[jsx3.util.Iterator],function(n,r){r.init=function(b){this.Hl=b;this.wm=b?b.size():0;this.ty=0;};r.next=function(){return this.Hl.get(this.ty++);};r.hasNext=function(){return this.ty<this.wm;};r.remove=function(){if(this.ty>0){this.Hl.removeAt(
--this.ty);this.wm--;}};});jsx3.Class.defineClass("jsx3.app.AddIn",null,[jsx3.net.URIResolver],function(d,j){var
ub={a:"prototypes/",b:"user:",c:"jsxuser:/addins/",d:"/",e:"id",f:"name",g:"description",h:"version",i:"jsxversion",j:"3.1",k:"config.xml",l:"JSX_SETTINGS::",m:"3.2",n:"jsxaddin",o:/:/,p:"!",q:":"};var
C=jsx3.net.URIResolver;d.PROTOTYPES_DIR=ub.a;j.init=function(p){this.vc=p;this.nM=p.indexOf(ub.b)==0?jsx3.resolveURI(ub.c+p.substring(5)+ub.d):jsx3.resolveURI(jsx3.ADDINSPATH+p+ub.d);this.io=new
jsx3.net.URI(this.nM);this.Co=(jsx3.app.Browser.getLocation()).resolve(this.io);this.hs=null;};j.getId=function(){return (this.getSettings()).get(ub.e);};j.getName=function(){return (this.getSettings()).get(ub.f);};j.getDescription=function(){return (this.getSettings()).get(ub.g);};j.getVersion=function(){return (this.getSettings()).get(ub.h);};j.getJsxVersion=function(){return (this.getSettings()).get(ub.i)||ub.j;};j.getKey=function(){return this.vc;};j.getPath=function(){return this.nM;};j.getSettings=function(){if(this.hs==null){var
ka=(jsx3.getSystemCache()).getOrOpenDocument(this.io.resolve(ub.k),ub.l+this.getKey());this.hs=new
jsx3.app.Settings(ka);}return this.hs;};j.setSettings=function(l){this.hs=l;};j.resolveURI=function(o){var
N=jsx3.net.URI.valueOf(o);if(jsx3.util.compareVersions(this.getJsxVersion(),ub.m)>=0&&!C.isAbsoluteURI(N))N=this.io.resolve(N);return C.DEFAULT.resolveURI(N);};j.getUriPrefix=function(){return this.io.toString();};j.relativizeURI=function(s,g){var
ob=jsx3.app.Browser.getLocation();var
Ga=this.Co.relativize(ob.resolve(s));if(Ga.isAbsolute()||g)return Ga;else return jsx3.net.URI.fromParts(ub.n,null,(this.getKey()).replace(ub.o,ub.p),null,ub.d+Ga.getPath(),Ga.getQuery(),Ga.getFragment());};j.toString=function(){return this.vc;};C.register(ub.n,function(h){var
B=((h.getHost()).split(ub.p,2)).join(ub.q);return jsx3.System.getAddin(B);});});jsx3.Class.defineInterface("jsx3.util.EventDispatcher",null,function(c,m){var
ub={a:"*",b:"object",c:"function",d:"string",e:"objHandler, objFunction",f:"{",g:"}, {",h:"}",i:"objEvent"};c.i4=1;c.VS=2;c.Ly=3;c.nW=4;c.IF=5;c.SUBJECT_ALL=ub.a;m.subscribe=function(l,q,d){var
P=typeof q;var
Aa=typeof d;var
La=null;if(P==ub.b||P==ub.c){if(Aa==ub.c){La=[c.i4,q,d];}else if(Aa==ub.d){La=[c.VS,q,d];}else if(P==ub.c)La=[c.IF,q];}else if(P==ub.d)if(Aa==ub.c){La=[c.Ly,q,d];}else if(Aa==ub.d)La=[c.nW,q,d];if(La==null&&P==ub.b&&q.call&&q.apply)La=[c.IF,q];if(La==null)throw new
jsx3.IllegalArgumentException(ub.e,ub.f+typeof q+ub.g+typeof d+ub.h);if(!jsx3.$A.is(l))l=[l];for(var
Fb=0;Fb<l.length;Fb++){var
wa=this.b0();var
da=l[Fb];if(!wa[da])wa[da]=[La];else wa[da].push(La);}};m.unsubscribe=function(q,l){if(!jsx3.$A.is(q))q=[q];for(var
lb=0;lb<q.length;lb++){var
A=(this.b0())[q[lb]];if(A)for(var
Na=0;Na<A.length;Na++)if(A[Na][1]===l)A.splice(Na--
,1);}};m.unsubscribeAll=function(k){if(this._jsxeventreg)delete this._jsxeventreg[k];};m.unsubscribeAllFromAll=function(){this._jsxeventreg={};};m.publish=function(a){if(a.target==null)a.target=this;var
rb=a.subject;if(rb==null)throw new
jsx3.IllegalArgumentException(ub.i,a);var
t=this._jsxeventreg;if(!t)return;var
ya=t[rb];var
ea=t[ub.a];if(!ya&&!ea)return;var
yb=[];if(ya)yb.push.apply(yb,ya);if(ea)yb.push.apply(yb,ea);for(var
db=0;db<yb.length;db++){var
Ua=yb[db];var
H=Ua[0];var
ta=Ua[1];var
sa=Ua[2];if(H==c.i4){sa.call(ta,a);}else if(H==c.VS){ta[sa](a);}else if(H==c.Ly){var
zb=(this.getServer()).getJSX(ta);if(zb)sa.call(zb,a);}else if(H==c.nW){var
zb=(this.getServer()).getJSX(ta);if(zb)zb[sa](a);}else if(H==c.IF){ta.call(null,a);}else{}}return yb.length;};m.getSubscriberCount=function(k){var
db=(this.b0())[k];return db?db.length:0;};m.b0=function(){if(this._jsxeventreg==null)this._jsxeventreg={};return this._jsxeventreg;};});jsx3.util.EventDispatcher.jsxclass.mixin(jsx3);jsx3.EventDispatcher=jsx3.util.EventDispatcher;jsx3.Class.defineClass("jsx3.net.URI",null,null,function(s,f){var
ub={A:"%0",B:/[^a-fA-F0-9]/,a:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",b:"0123456789",c:"_-!.~'()*",d:",;:$&+=",e:"?/[]@",f:"%",g:"^[",h:"][\\-\\.\\+",i:"]*\\:",j:"arguments",k:"@",l:":",m:"",n:"/@",o:"//",p:"?",q:"#",r:"string",s:"/",t:".",u:"..",v:"&",w:"=",x:/(\W)/g,y:"\\$1",z:"]*$"};s.i2=ub.a;s.TZ=ub.b;s.ou=s.i2+s.TZ;s.V5=s.ou+ub.c;s.bP=ub.d;s.eD=s.bP+ub.e;s.IH=ub.f;s.nt=new
RegExp(ub.g+s.i2+ub.h+s.i2+ub.i);f._5=null;f.RR=null;f.GH=null;f.fs=null;f.Bq=null;f.nM=null;f.dp=null;f.EC=null;f.v0=null;f.mB=null;s.fromParts=function(k,p,e,m,o,r,l){var
sb=s.jsxclass.bless();var
wa=arguments;var
B=null,N=null;if(wa.length==3){sb.RR=wa[0];N=s.encode(wa[1],s.V5+s.eD+s.IH);sb.GH=s.decode(wa[1]);sb.fs=s.decode(wa[2]);}else if(wa.length==7){sb.RR=wa[0];sb.EC=s.decode(wa[1]);sb.v0=wa[2];sb.mB=wa[3];sb.nM=s.decode(wa[4]);sb.dp=s.decode(wa[5]);sb.fs=s.decode(wa[6]);}else throw new
jsx3.IllegalArgumentException(ub.j,jsx3.Method.argsAsArray(wa));if(sb.Bq==null&&sb.v0!=null){sb.Bq=B=sb.v0;if(sb.EC){sb.Bq=sb.EC+ub.k+sb.Bq;B=s.encode(sb.EC,s.V5+s.bP+s.IH)+ub.k+B;}if(sb.mB){sb.Bq=sb.Bq+ub.l+sb.mB;B=B+ub.l+sb.mB;}}if(sb.GH==null){sb.GH=N=ub.m;if(sb.nM){sb.GH=sb.nM;N=s.encode(sb.nM,s.V5+s.bP+s.IH+ub.n);}if(sb.Bq!=null){sb.GH=ub.o+sb.Bq+sb.GH;N=ub.o+B+N;}if(sb.dp){sb.GH=sb.GH+ub.p+sb.dp;N=N+ub.p+s.encode(sb.dp,s.V5+s.bP+s.IH);}}if(sb._5==null){sb._5=N;if(sb.RR)sb._5=sb.RR+ub.l+sb._5;if(sb.fs!=null)sb._5=sb._5+ub.q+s.encode(sb.fs,s.V5+s.eD+s.IH);}return sb;};f.init=function(j){if(j==null)j=ub.m;if(typeof j!=ub.r)j=j.toString();this._5=j;var
Ja=j;var
Ua;if(s.nt.test(Ja)){var
Bb=RegExp.lastMatch;this.RR=Ja.substring(0,Bb.length-1);Ja=Ja.substring(Bb.length);}if((Ua=Ja.indexOf(ub.q))>=0){this.fs=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.GH=Ja;var
Z=this.RR!=null;var
Ea=Z&&Ja.indexOf(ub.s)!=0;if(!Ea){if(Ja.indexOf(ub.o)==0){Ua=Ja.indexOf(ub.s,2);this.Bq=Ja.substring(2,Ua>=0?Ua:Ja.length);Ja=Ua>=0?Ja.substring(Ua):ub.m;}if((Ua=Ja.indexOf(ub.p))>=0){this.dp=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.nM=s.decode(Ja);var
Ma=this.Bq;if(Ma){if((Ua=Ma.indexOf(ub.k))>=0){this.EC=s.decode(Ma.substring(0,Ua));Ma=Ma.substring(Ua+1);}if((Ua=Ma.indexOf(ub.l))>=0){this.mB=parseInt(Ma.substring(Ua+1));Ma=Ma.substring(0,Ua);}}this.v0=Ma;}};f.normalize=function(){if(jsx3.util.strEmpty(this.nM))return this;var
La=this.nM.split(ub.s);s.N0(La);var
u=La.join(ub.s);return u==this.nM?this:s.fromParts(this.RR,this.EC,this.v0,this.mB,u,this.dp,this.fs);};s.N0=function(g){var
Na=g[0]!==ub.m;for(var
Lb=g.length-1;Lb>=0;Lb--)if(g[Lb]==ub.t)g.splice(Lb,1);for(var
Lb=0;Lb<g.length;Lb++)if(Lb>0&&g[Lb]==ub.u&&g[Lb-1]!=ub.u){g.splice(Lb-1,2);Lb=Lb-2;}if(Na&&g[0]!=null&&g[0].indexOf(ub.l)>=0)g.unshift(ub.t);};f.resolve=function(e){e=s.valueOf(e);if(this._5==ub.m)return e;if(e.isAbsolute()||this.isOpaque())return e;if(e.fs&&!e.nM&&!e.RR&&!e.Bq&&!e.dp)return s.fromParts(this.RR,this.EC,this.v0,this.mB,this.nM,this.dp,e.fs);var
Va=this.RR;var
wb=e.dp;var
ob=e.fs;var
sa=null,Mb=null,ya=null,gb=null;if(e.Bq!=null){sa=e.EC;Mb=e.v0;ya=e.mB;gb=e.nM;}else{sa=this.EC;Mb=this.v0;ya=this.mB;if(e.nM.indexOf(ub.s)==0){gb=e.nM;}else{var
U=this.nM.split(ub.s);U.pop();U.push.apply(U,e.nM.split(ub.s));s.N0(U);gb=U.join(ub.s);}}return s.fromParts(Va,sa,Mb,ya,gb,wb,ob);};f.relativize=function(b){b=s.valueOf(b);if(this._5==ub.m)return b;if(this.isOpaque()||b.isOpaque())return b;if(this.RR!=b.RR)return b;var
Hb=this.Bq!=null?this.Bq:ub.m;var
Sa=b.Bq!=null?b.Bq:ub.m;if(Hb!=Sa)return b;var
D=this.nM||ub.m;var
wa=b.nM||ub.m;var
cb=D.split(ub.s);cb.pop();var
C=wa.split(ub.s);var
wb=[];var
X=0;while(X<cb.length&&X<C.length){if(cb[X]!=C[X])break;X++;}var
ea=null;if(X<2&&D.indexOf(ub.s)==0){ea=wa;}else{for(var
Db=X;Db<cb.length;Db++)wb[wb.length]=ub.u;for(var
Db=X;Db<C.length;Db++)wb[wb.length]=C[Db];ea=wb.join(ub.s);}return s.fromParts(null,null,null,null,ea,b.dp,b.fs);};f.getAuthority=function(){return this.Bq;};f.getFragment=function(){return this.fs;};f.getHost=function(){return this.v0;};f.getPath=function(){return this.nM;};f.getPort=function(){return this.mB;};f.getQuery=function(){return this.dp;};f.getQueryParam=function(g){var
u=this.dp;if(u){var
T=0;var
ba=g.length;var
mb=null;while((mb=u.indexOf(g,T))>=0){if(mb==0||u.charAt(mb-1)==ub.v){var
fa=u.charAt(mb+ba);if(fa==ub.v||jsx3.util.strEmpty(fa)){return true;}else if(fa==ub.w){var
Fb=u.indexOf(ub.v,mb+ba+1);return Fb>=0?u.substring(mb+ba+1,Fb):u.substring(mb+ba+1);}}T=mb+ba;}}return null;};f.getQueryParams=function(){var
da={};if(this.dp){var
Ma=this.dp.split(ub.v);for(var
K=0;K<Ma.length;K++){var
u=Ma[K];var
La=u.indexOf(ub.w);if(La>=0){da[u.substring(0,La)]=u.substring(La+1);}else da[u]=true;}}return da;};f.getScheme=function(){return this.RR;};f.getSchemeSpecificPart=function(){return this.GH;};f.getUserInfo=function(){return this.EC;};f.isAbsolute=function(){return this.RR!=null;};f.isOpaque=function(){return this.RR!=null&&this.GH.indexOf(ub.s)!=0;};f.equals=function(p){if(this===p)return true;if(!(p instanceof jsx3.net.URI))return false;var
Wa=this.RR;var
ga=p.RR;if(Wa==null&&ga!=null||Wa!=null&&ga==null)return false;if(Wa!=null&&Wa.toLowerCase()!=ga.toLowerCase())return false;if(this.fs!=p.fs)return false;if(this.isOpaque()){if(!p.isOpaque())return false;return this.GH==p.GH;}else return this.nM==p.nM&&this.dp==p.dp&&this.Bq==p.Bq;};f.toString=function(){return this._5;};s.encode=function(q,j){if(q==null)return null;if(j==null)j=s.V5;var
sa=new
RegExp(ub.g+j.replace(ub.x,ub.y)+ub.z);if(q.match(sa))return q;var
z=q.length;var
P=new
Array(z);for(var
C=0;C<z;C++){var
nb=q.charAt(C);if(j.indexOf(nb)<0){var
Ca=nb.charCodeAt(0);if(Ca<16){P[C]=ub.A+(Ca.toString(16)).toUpperCase();}else if(Ca<256){P[C]=ub.f+(Ca.toString(16)).toUpperCase();}else P[C]=nb;}else P[C]=nb;}return P.join(ub.m);};s.decode=function(k){if(k==null)return null;if(k.indexOf(ub.f)<0)return k;var
K=k.length;var
Oa=new
Array(K);var
P=0;for(var
ga=0;ga<k.length;ga++){var
aa=k.charAt(ga);if(aa==ub.f){var
Ua=k.substring(ga+1,ga+3);if(Ua.match(ub.B)){Oa[P++
]=aa;}else{Oa[P++
]=String.fromCharCode(parseInt(Ua,16));ga=ga+2;}}else Oa[P++
]=aa;}return Oa.join(ub.m);};s.valueOf=function(b){if(jsx3.util.strEmpty(b))return s.o5;return b instanceof s?b:new
s(b);};s.o5=new
s();});jsx3.Class.defineClass("jsx3.gui.Event",null,null,function(k,a){var
ub={A:": ",B:/\s+/g,C:" ",D:"attaching event listener ",E:" to ",F:".",G:"adding event listener ",H:"setting event handler ",I:" on ",J:"error subscribing to event ",K:"_focusHandler  lost focus:",L:" (",M:")",N:"function",O:"subscribeLoseFocus ",P:"... adding event listener to ",Q:"unsubscribeLoseFocus ",R:"... removing event listener from ",S:"Unsubscribing from event ",T:"Unsubscribing all from event ",U:"Publishing event: ",V:"Handling event: ",W:"detaching event listener ",X:" from ",Y:"removing event listener ",Z:"unsetting event handler ",_:"",a:"beforeunload",aa:"mouse",b:"blur",ba:"key",c:"change",ca:"KeyEvents",d:"click",da:"MouseEvent",e:"dblclick",ea:"KeyEvent",f:"error",fa:"DOMMouseScroll",g:"focus",ga:"onmousewheel",h:"keydown",ha:"@jsx3.gui.Event <empty>",i:"keypress",ia:"@jsx3.gui.Event ",j:"keyup",ja:":",k:"load",l:"mousedown",m:"mousemove",n:"mouseout",o:"mouseover",p:"mouseup",q:"mousewheel",r:"unload",s:"resize",t:"jsx3.util.Logger",u:"registering window ",v:"deregistering window ",w:"Window ",x:" not registered.",y:"on",z:"Subscribing to event "};k.BEFOREUNLOAD=ub.a;k.BLUR=ub.b;k.CHANGE=ub.c;k.CLICK=ub.d;k.DOUBLECLICK=ub.e;k.ERROR=ub.f;k.FOCUS=ub.g;k.KEYDOWN=ub.h;k.KEYPRESS=ub.i;k.KEYUP=ub.j;k.LOAD=ub.k;k.MOUSEDOWN=ub.l;k.MOUSEMOVE=ub.m;k.MOUSEOUT=ub.n;k.MOUSEOVER=ub.o;k.MOUSEUP=ub.p;k.MOUSEWHEEL=ub.q;k.UNLOAD=ub.r;k.RESIZE=ub.s;k.KEY_ALT=18;k.KEY_ARROW_DOWN=40;k.KEY_ARROW_LEFT=37;k.KEY_ARROW_RIGHT=39;k.KEY_ARROW_UP=38;k.KEY_BACKSPACE=8;k.KEY_CONTROL=17;k.KEY_DELETE=46;k.KEY_END=35;k.KEY_ENTER=13;k.KEY_ESCAPE=27;k.KEY_HOME=36;k.KEY_INSERT=45;k.KEY_META=224;k.KEY_PAGE_DOWN=34;k.KEY_PAGE_UP=33;k.KEY_SHIFT=16;k.KEY_SPACE=32;k.KEY_TAB=9;k.KEY_0=48;k.KEY_9=57;k.KEY_A=65;k.KEY_Z=90;k.KEY_NP0=96;k.KEY_NP9=105;k.KEY_NPDIV=111;k.KEY_NPMUL=106;k.KEY_NPSUB=109;k.KEY_NPADD=107;k.KEY_NPDEC=110;k.KEY_F1=112;k.KEY_F15=126;k.cx=[];k.NC=[];k.n9=jsx3.util.EventDispatcher.jsxclass.newInnerClass();k.LS=[];var
y=null;k.tZ=function(){if(k._LOG==null)if(jsx3.Class.forName(ub.t)!=null){y=jsx3.util.Logger;k._LOG=y.getLogger(k.jsxclass.getName());}return k._LOG;};k._registerWindow=function(h){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.u+h.name);k.cx.push(h);k.NC.push({});k.LS.push({});};k._isWindowRegistered=function(d){return jsx3.util.arrIndexOf(k.cx,d)>=0;};k._deregisterWindow=function(s){var
Ea=jsx3.util.arrIndexOf(k.cx,s);if(Ea>=0){var
Ba=k.tZ();if(Ba!=null&&Ba.isLoggable(5))Ba.debug(ub.v+s.name);k.cx.splice(Ea,1);k.NC.splice(Ea,1);k.LS.splice(Ea,1);}else throw new
jsx3.Exception(ub.w+s+ub.x);};k._registerWindow(window);k.subscribe=function(f,d,j){k.n9.subscribe(f,d,j);var
C=ub.y+f;var
pb=k.tZ();if(pb!=null&&pb.isLoggable(5))pb.debug(ub.z+f+ub.A+((d.toString()).substring(0,50)).replace(ub.B,ub.C));var
bb=k.cp(f)?[window]:k.cx;for(var
eb=0;eb<bb.length;eb++)try{var
sb=bb[eb];var
v=k.gG(sb,f);if(v.attachEvent&&k.cW(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.D+f+ub.E+v+ub.F);v.attachEvent(C,k.Ft);_a[f]=true;}}else if(v.addEventListener&&k.l1(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.G+f+ub.E+v+ub.F);v.addEventListener(f,k.Ft,false);_a[f]=true;}}else{var
u=k.NC[eb];if(v[C]!=k.Ft){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.H+C+ub.I+v+ub.F);if(v[C]!=null)u[C]=v[C];v[C]=k.Ft;}}}catch(Kb){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.J+f,jsx3.NativeError.wrap(Kb));k._deregisterWindow(sb);eb--;}};k.H8=[];k._q=function(g){var
ob=k.wrap(g);var
Q=ob.srcElement();var
x=k.H8.concat();var
Ya=k.tZ();L1:for(var
_a=0;_a<x.length;_a++){var
Z=x[_a];var
Bb=Z[0];var
eb=Z[1];var
z=Z[2];var
nb=Q;if(eb.containsHtmlElement){if(eb.containsHtmlElement(Q))continue;}else while(nb!=null){if(nb==eb)continue L1;nb=nb.parentNode;}if(Ya!=null&&Ya.isLoggable(5))Ya.debug(ub.K+eb+ub.L+Bb+ub.M);var
na={target:k,event:ob};if(typeof z==ub.N)z.call(Bb,na);else Bb[z](na);}};k.subscribeLoseFocus=function(q,e,d){var
Sa=k.tZ();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.O+q+ub.C+e);k.H8.push([q,e,d]);if(k.H8.length==1){var
ma=e.ownerDocument||e.getDocument();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.P+ma);ma.addEventListener(ub.g,k._q,true);}};k.unsubscribeLoseFocus=function(p){var
fb=k.tZ();if(fb!=null&&fb.isLoggable(5))fb.debug(ub.Q+p);var
wa=null;for(var
Xa=0;Xa<k.H8.length;Xa++)if(k.H8[Xa][0]==p){var
Ra=k.H8[Xa][1];wa=Ra.ownerDocument||Ra.getDocument();k.H8.splice(Xa--
,1);}if(k.H8.length==0&&wa!=null){if(fb!=null&&fb.isLoggable(5))fb.debug(ub.R+wa);wa.removeEventListener(ub.g,k._q,true);}};k.preventSelection=function(n){};k.unsubscribe=function(s,j){var
xa=k.tZ();if(xa!=null&&xa.isLoggable(5))xa.debug(ub.S+s+ub.A+((j.toString()).substring(0,50)).replace(ub.B,ub.C));k.n9.unsubscribe(s,j);if(k.n9.getSubscriberCount(s)==0)k.Fw(s);};k.unsubscribeAll=function(i){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.T+i+ub.F);k.n9.unsubscribeAll(i);k.Fw(i);};k.publish=function(m){var
z={subject:m.getType(),target:k,event:m};k.PA(z);};k.PA=function(c){var
K=ub.y+c.subject.toLowerCase();var
C=k.tZ();if(C!=null&&C.isLoggable(6))C.trace(ub.U+K+ub.F);var
Oa=k.NC[0];if(Oa[K]!=null)Oa[K]();k.n9.publish(c);};k.Ft=function(n){var
Db=new
k(n!=null?n:window.event);var
ja=k.tZ();if(ja!=null&&ja.isLoggable(6))ja.trace(ub.V+Db.getType()+ub.F);if(Db.getType()==ub.s){var
mb=document.body.offsetWidth,Fa=document.body.offsetHeight;if(mb===k.yP&&Fa===k._E)return;k.yP=mb;k._E=Fa;}var
za={subject:Db.getType(),target:k,event:Db};k.PA(za);if(za.returnValue)return za.returnValue;};k.Fw=function(o){var
ta=ub.y+o;var
pb=k.tZ();var
Na=k.cp(o)?[window]:k.cx;for(var
Ja=0;Ja<Na.length;Ja++)try{var
Bb=Na[Ja];var
wb=k.gG(Bb,o);if(wb.attachEvent&&k.cW(o)){var
xa=k.LS[Ja];if(xa[o]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.W+o+ub.X+wb);wb.detachEvent(ta,k.Ft);xa[o]=false;}}else if(wb.removeEventListener&&k.l1(o)){var
xa=k.LS[Ja];if(xa[o]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.Y+o+ub.X+wb+ub.F);wb.removeEventListener(o,k.Ft,false);xa[o]=false;}}else{var
Mb=k.NC[Ja];if(pb!=null&&pb.isLoggable(5))pb.debug(ub.Z+ta+ub.I+wb+ub.F);if(Mb[ta]!=null){wb[ta]=Mb[ta];delete Mb[ta];}else wb[ta]=null;}}catch(Kb){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.J+o,jsx3.NativeError.wrap(Kb));k._deregisterWindow(Bb);Ja--;}};k.gG=function(n,m){return m==ub.a||m==ub.r||m==ub.s?n:n.document;};k.cW=function(l){return l!=ub.a;};k.l1=function(l){return l!=ub.a;};k.cp=function(f){return f==ub.a||f==ub.r;};a.init=function(b,r){this.yq=b;if(r)this._clone=jsx3.clone(b);};a.yh=function(){if(this._clone==null)this._clone=jsx3.clone(this.yq);this._clone._jsxky=true;};k.wrap=function(l,j){return l instanceof k?l:new
k(l,j);};k.getCurrent=function(p){return window.event?new
k(window.event,p):null;};a.Vu=function(){try{if(this.yq==null)return this._clone;else if(this.yq.currentTarget!=null)return this.yq;}catch(Kb){}this.yq=null;return this._clone;};a.event=function(){return this.Vu();};a.getType=function(){return (this.Vu()).type;};a.srcElement=function(){var
Qa=this.Vu();return Qa.target||Qa.srcElement;};a.toElement=function(){var
hb=this.Vu();return hb.type==ub.n?hb.relatedTarget:hb.target;};a.fromElement=function(){var
xb=this.Vu();return xb.type==ub.o?xb.relatedTarget:xb.target;};a.isMouseEvent=function(){var
u=this.getType()||ub._;return u.indexOf(ub.aa)==0||u==ub.d||u==ub.e;};a.isKeyEvent=function(){return (this.getType()||ub._).indexOf(ub.ba)==0;};a.setCapture=function(e){};a.releaseCapture=function(o){};a.keyCode=function(){var
Ha=this.Vu();return Ha.keyCode;};a.clientX=function(){var
z=this.Vu();return z?z.clientX:Number.NaN;};a.clientY=function(){var
Kb=this.Vu();return Kb?Kb.clientY:Number.NaN;};a.getOffsetX=function(){var
Db=(this.Vu()).target;var
Fb=(this.Vu()).clientX;return Fb-(jsx3.html.getRelativePosition(Db.ownerDocument.body,Db)).L;};a.getOffsetY=function(){var
Bb=(this.Vu()).target;var
Xa=(this.Vu()).clientY;return Xa-(jsx3.html.getRelativePosition(Bb.ownerDocument.body,Bb)).T;};a.getScreenX=function(){return (this.Vu()).screenX;};a.getScreenY=function(){return (this.Vu()).screenY;};a.getTrueX=function(){return (this.Vu()).clientX;};a.getTrueY=function(){return (this.Vu()).clientY;};a.getWheelDelta=function(){var
Ra=-1*Math.ceil((this.Vu()).detail/3);return Ra;};a.shiftKey=function(){var
Z=this.Vu();return Z.shiftKey;};a.ctrlKey=function(){var
Va=this.Vu();return Va.ctrlKey;};a.altKey=function(){var
C=this.Vu();return C.altKey;};a.metaKey=function(){var
Kb=this.Vu();return Kb.metaKey;};a.enterKey=function(){return (this.Vu()).keyCode==13;};a.spaceKey=function(){return (this.Vu()).keyCode==32;};a.tabKey=function(){return (this.Vu()).keyCode==9;};a.rightArrow=function(){return (this.Vu()).keyCode==39;};a.leftArrow=function(){return (this.Vu()).keyCode==37;};a.upArrow=function(){return (this.Vu()).keyCode==38;};a.downArrow=function(){return (this.Vu()).keyCode==40;};a.deleteKey=function(){return (this.Vu()).keyCode==46;};a.backspaceKey=function(){return (this.Vu()).keyCode==8;};a.insertKey=function(){return (this.Vu()).keyCode==45;};a.homeKey=function(){return (this.Vu()).keyCode==36;};a.endKey=function(){return (this.Vu()).keyCode==35;};a.pageUpKey=function(){return (this.Vu()).keyCode==33;};a.pageDownKey=function(){return (this.Vu()).keyCode==34;};a.escapeKey=function(){return (this.Vu()).keyCode==27;};a.exists=function(){return this.Vu()!=null;};a.cancelBubble=function(){var
I=this.Vu();I._jsxAt=true;if(!I._jsxky)I.stopPropagation();};a.cancelReturn=function(){(this.Vu()).returnValue=false;};a.preventDefault=function(){var
Kb=this.Vu();if(!Kb._jsxky)Kb.preventDefault();};a.cancelKey=function(){var
w=this.Vu();if(!w._jsxky){w.stopPropagation();w.preventDefault();}};a.cancelAll=function(){this.cancelBubble();this.cancelKey();this.cancelReturn();};a.leftButton=function(){var
G=this.Vu();if(jsx3.app.Browser.macosx&&G.ctrlKey)return false;var
T=this.getType();if(T==ub.l||T==ub.p){return G.button==0;}else if(T==ub.d||T==ub.e)return G.button==0;return false;};a.rightButton=function(){var
Cb=this.Vu();var
H=this.getType();if(H==ub.l||H==ub.p)return Cb.button==2||jsx3.app.Browser.macosx&&Cb.ctrlKey;else return false;};a.button=function(){var
Ma=this.Vu();return Ma.button;};a.setReturn=function(i){(this.Vu()).returnValue=i;};a.setKeyCode=function(o){var
ja=this.Vu();if(ja.charCode==13){var
ua=(this.getDocument()).createEvent(ub.ca);ua.initKeyEvent(ub.i,true,true,(this.getDocument()).defaultView,ja.ctrlKey(),ja.altKey(),ja.shiftKey(),false,0,o);ja.preventDefault();ja.target.dispatchEvent(ua);}};a.isModifierKey=function(){var
Ab=this.Vu();return Ab.keyCode==16||Ab.keyCode==17||Ab.keyCode==18||Ab.keyCode==224;};a.hasModifier=function(h){return !h&&this.shiftKey()||this.ctrlKey()||this.altKey()||this.metaKey();};a.isArrowKey=function(){var
ab=this.keyCode();return ab>=37&&ab<=40;};a.isFunctionKey=function(){var
qb=this.keyCode();return qb>=112&&qb<=126;};a.getAttribute=function(e){return (this.Vu())[e];};a.setAttribute=function(n,h){(this.Vu())[n]=h;};a.removeAttribute=function(q){(this.Vu())[q]=null;};k.dispatchMouseEvent=function(j,g,i){var
ba=document.createEvent(ub.da);ba.initMouseEvent(g,true,true,window,0,0,0,0,0,false,false,false,false,0,j);if(i)for(var Hb in i)ba[Hb]=i[Hb];j.dispatchEvent(ba);};k.dispatchKeyEvent=function(e,h,j,g,d,p,b){var
bb=document.createEvent(ub.ea);bb.initMouseEvent(h,true,true,window,0,0,0,0,0,false,d,p,g,0,e);bb.keyCode=j;if(b)for(var Bb in b)bb[Bb]=b[Bb];e.dispatchEvent(bb);};window.addEventListener(ub.fa,function(g){var
Wa=g.target||g.srcElement;while(Wa!=null&&!g._jsxAt){if(Wa.getAttribute){var
B=Wa.getAttribute(ub.ga);if(B)jsx3.eval.call(Wa,B,{event:g});}Wa=Wa.parentNode;}},false);a.isFakeOut=function(q){if(this.getType()==ub.n){var
Mb=this.toElement();try{while(Mb!=null){if(Mb==q)return true;Mb=Mb.parentNode;}}catch(Kb){return false;}}return false;};a.isFakeOver=function(d){if(this.getType()==ub.o){var
Da=this.fromElement();try{while(Da!=null){if(Da==d)return true;Da=Da.parentNode;}}catch(Kb){return false;}}return false;};a.toString=function(){var
na=this.Vu();if(na==null)return ub.ha;var
ya=[];for(var L in na)if(typeof na[L]!=ub.N)ya[ya.length]=L;ya.sort();var
sb=[ub.ia];for(var
W=0;W<ya.length;W++)sb[sb.length]=ya[W]+ub.ja+na[ya[W]]+ub.C;return sb.join(ub._);};});jsx3.gui.Event.subscribe("unload",jsx3.destroy);jsx3.Class.defineClass("jsx3.app.Browser",null,null,function(a,s){var
ub={a:"win32",b:"linux",c:"macosx",d:"other",e:/[_-]/,f:"_",g:"Win",h:"Linux",i:"Mac OS X"};a.WIN32=ub.a;a.LINUX=ub.b;a.MACOSX=ub.c;a.OTHER=ub.d;a.getLocaleString=function(){var
Eb=window.navigator.language;var
Aa=Eb.split(ub.e);if(Aa.length>0){Aa[0]=Aa[0].toLowerCase();if(Aa.length>1)Aa[1]=Aa[1].toUpperCase();}return Aa.join(ub.f);};a.isTableMoveBroken=function(h){return true;};a.tP=null;a.getStyleClass=function(q){if(a.tP==null){var
wb={};for(var
za=0;za<document.styleSheets.length;za++){var
ba=document.styleSheets[za];try{for(var
gb=0;gb<ba.cssRules.length;gb++){var
fb=ba.cssRules[gb];wb[fb.selectorText]=fb.style;}}catch(Kb){}}a.tP=wb;}return a.tP[q];};a.getLocation=function(){if(a.VF==null)a.VF=new
jsx3.net.URI(window.location.href);return a.VF;};a.getSystem=function(){if(a.Rx==null){var
C=navigator.platform;var
mb=navigator.userAgent;var
R=ub.d;if(C.indexOf(ub.g)==0)R=ub.a;else if(C.indexOf(ub.h)==0)R=ub.b;else if(mb.indexOf(ub.i)!=-1)R=ub.c;a.Rx=R;}return a.Rx;};a[a.getSystem()]=true;});jsx3.Class.defineClass("jsx3.app.Settings",null,null,function(r,i){var
ub={a:"undefined",b:"/data",c:"/record[@jsxid='",d:"']",e:"vG",f:"./record",g:"type",h:"jsxid",i:"true",j:"data",k:"map",l:"./record[@jsxid='",m:"record",n:"null",o:"string",p:"number",q:"boolean",r:"false",s:"object",t:"array",u:"function",v:"idPR02",w:"Cannot persist object of type "};i.init=function(b){this.OM=b||jsx3.xml.CDF.newDocument();this.dc=this.OM.getRootNode();};i.get=function(q){var
Hb=this.yx(arguments);if(typeof Hb==ub.a){var
ka=this.getNode.apply(this,arguments);if(ka==null)return r.UNDEF;Hb=r.K0(ka);this.PR(Hb,arguments);}return Hb;};i.getNode=function(a){var
ab=this.dc;var
Ba=ub.b;for(var
bb=0;ab&&bb<arguments.length;bb++)Ba=Ba+(ub.c+arguments[bb]+ub.d);return ab.selectSingleNode(Ba);};i.PR=function(b,s){if(s.length==0){this.vG=b;}else{if(!this.vG)this.vG={_jsxa8:true};var
ia=this.vG;for(var
za=0;za<s.length-1;za++){var
Xa=s[za];if(ia[Xa]==null)ia[Xa]={_jsxa8:true};ia=ia[Xa];}ia[s[s.length-1]]=b;}};i.yx=function(h){var
Da=this.vG;for(var
Nb=0;Da&&Nb<h.length;Nb++)Da=Da[h[Nb]];return Da&&Da._jsxa8?r.UNDEF:Da;};i.z2=function(){delete this[ub.e];};r.HM={array:function(q){var
xb=q.selectNodeIterator(ub.f);var
T=[];while(xb.hasNext()){var
ea=xb.next();var
qa=r.HM[ea.getAttribute(ub.g)];T[T.length]=qa?qa(ea):ea.getValue();}return T;},map:function(e){var
gb=e.selectNodeIterator(ub.f);var
ha={};while(gb.hasNext()){var
Z=gb.next();var
Ga=r.HM[Z.getAttribute(ub.g)];ha[Z.getAttribute(ub.h)]=Ga?Ga(Z):Z.getValue();}return ha;},number:function(j){return Number(j.getValue());},"boolean":function(p){return p.getValue()===ub.i;},"null":function(s){return null;},string:function(a){return a.getValue();},eval:function(s){try{return jsx3.eval(s.getValue());}catch(Kb){return null;}}};r.K0=function(e){var
cb=e.getNodeName()==ub.j?ub.k:e.getAttribute(ub.g);var
Mb=r.HM[cb];return Mb?Mb(e):e.getValue();};i.set=function(p,o){var
ja=this.dc;for(var
Wa=0;Wa<arguments.length-2;Wa++){var
E=ja.selectSingleNode(ub.l+arguments[Wa]+ub.d);if(E&&E.getAttribute(ub.g)!=ub.k){ja.removeChild(E);E=null;}if(!E){E=ja.createNode(1,ub.m);E.setAttribute(ub.h,arguments[Wa]);E.setAttribute(ub.g,ub.k);ja.appendChild(E);}ja=E;}r.xp(ja,arguments[arguments.length-2],arguments[arguments.length-1]);this.z2();};i.remove=function(m){var
sb=null;var
H=this.dc;for(var
db=0;H&&db<arguments.length;db++){sb=H;H=H.selectSingleNode(ub.l+arguments[db]+ub.d);}if(H&&sb){sb.removeChild(H);this.z2();}};r.xp=function(c,a,k){var
ob=r.S7(a,c);ob.removeChildren();var
Pa=typeof k;if(k==null||Pa==ub.a){ob.setAttribute(ub.g,ub.n);ob.setValue(null);}else if(Pa==ub.o||Pa==ub.p){ob.setAttribute(ub.g,Pa);ob.setValue(k);}else if(Pa==ub.q){ob.setAttribute(ub.g,ub.q);ob.setValue(k?ub.i:ub.r);}else if(Pa==ub.s){if(jsx3.$A.is(k)){ob.setAttribute(ub.g,ub.t);for(var
M=0;M<k.length;M++)r.xp(ob,M.toString(),k[M]);}else{ob.setAttribute(ub.g,ub.k);for(var Db in k)r.xp(ob,Db,k[Db]);}}else if(Pa==ub.u){}else jsx3.ERROR.doLog(ub.v,ub.w+Pa,5);};r.S7=function(k,m){var
ma=m.selectSingleNode(ub.l+k+ub.d);if(!ma){ma=m.createNode(1,ub.m);ma.setAttribute(ub.h,k);m.appendChild(ma);}return ma;};});jsx3.Settings=jsx3.app.Settings;jsx3.Class.defineClass("jsx3.xml.Entity",null,null,function(m,a){var
ub={a:"xml.wrap_type",b:"",c:"xml.clone_tp",d:"xml.err_append",e:":",f:"@",g:'="',h:'"',i:"xml.str_err",j:"xml.str_empty",k:"object",l:"<foo ",m:"/>",n:"text/xml",o:"jsx3.xml.Template",p:"transformToObject",q:"transform",r:"[",s:"]",t:"undefined",u:" ",v:"3.0.0"};m.TYPEELEMENT=1;m.TYPEATTRIBUTE=2;m.TYPETEXT=3;m.TYPECDATA=4;m.TYPECOMMENT=8;m.HH={1:true,2:true,3:true,4:true,7:true,8:true};a.init=function(p){this.bW=p;this.fA=p.nodeType;if(!m.HH[this.fA]){this.Dk(300,jsx3._msg(ub.a,this.fA));}else if(this.dN)this.Dk(0);};a.createNode=function(d,k,n){var
qb=this.fx();var
C=null;if(n==null||n==ub.b)n=null;if(d==2){C=qb.createAttributeNS(n,k);}else if(d==3){C=qb.createTextNode(k);}else if(d==4){C=qb.createCDATASection(k);}else if(d==8){C=qb.createComment(k);}else C=qb.createElementNS(n,k);return new
m(C);};a.cloneNode=function(p){if(this.fA==1){var
K=this.bW.cloneNode(p);return new
m(K);}else this.Dk(301,jsx3._msg(ub.c,this.fA));};a.appendChild=function(l){var
Ga=l.bW;var
ra=Ga.ownerDocument!=this.bW.ownerDocument;if(ra)Ga=this.bW.ownerDocument.importNode(Ga,true);if(this.bW!=null&&Ga!=null&&this.fA==1){this.bW.appendChild(Ga);if(ra&&l.bW.parentNode)l.bW.parentNode.removeChild(l.bW);l.bW=Ga;}else this.Dk(302,jsx3._msg(ub.d,l));return this;};a.insertBefore=function(q,f){if(f==null){if(this.fA==1){this.appendChild(q);return q;}}else{var
Za=q.bW;var
yb=Za.ownerDocument!=this.bW.ownerDocument;if(yb)Za=this.bW.ownerDocument.importNode(Za,true);if(this.fA==1&&f.fA!=2&&q.fA!=2)if(f.getParent()!=null&&(f.getParent()).equals(this)){var
rb=new
m(this.bW.insertBefore(Za,f.bW));if(yb&&q.bW.parentNode)q.bW.parentNode.removeChild(q.bW);q.bW=Za;return rb;}return null;}};a.replaceNode=function(k,b){var
qa=k.bW;var
Ja=qa.ownerDocument!=this.bW.ownerDocument;if(Ja)qa=this.bW.ownerDocument.importNode(qa,true);if(this.fA==1&&b.fA==1&&k.fA==1&&this.equals(b.getParent())){var
Cb=new
m(this.bW.replaceChild(qa,b.bW));if(Ja&&k.bW.parentNode)k.bW.parentNode.removeChild(k.bW);k.bW=qa;return Cb;}return null;};a.setAttribute=function(c,l){if(l!=null)this.bW.setAttribute(c,String(l));else this.removeAttribute(c);return this;};a.getAttribute=function(s){return this.bW?this.bW.getAttribute(s):null;};a.getAttributeNode=function(f){if(this.bW!=null&&this.fA==1){var
za=this.bW.getAttributeNode(f);if(za!=null)return new
m(za);}};a.setAttributeNode=function(o){var
Fa=o.bW;var
B=Fa.ownerDocument!=this.bW.ownerDocument;if(B){Fa=this.bW.ownerDocument.createAttribute(Fa.nodeName);Fa.nodeValue=o.bW.nodeValue;o.bW=Fa;}this.bW.setAttributeNodeNS(Fa);return this;};a.getAttributes=function(){if(this.bW!=null&&this.fA==1)return new
m.List(this.bW.attributes);else return null;};a.getAttributeNames=function(){var
xb=this.bW.attributes;var
V=new
Array(xb.length);for(var
Kb=0;Kb<V.length;Kb++)V[Kb]=xb[Kb].nodeName;return V;};a.getRootNode=function(){return this.bW?new
m(this.fx(1)):null;};a.getParent=function(){return this.bW!=this.fx(1)?new
m(this.bW.parentNode):null;};a.getChildIterator=function(g){return new
m.ChildIterator(this.bW?this.bW.childNodes:[],g);};a.getChildNodes=function(k){if(!this.bW)return new
m.List([]);var
Ya=this.bW.childNodes;var
zb=[];for(var
K=0;K<Ya.length;K++){var
jb=Ya[K];if(jb.nodeType==1||k&&(jb.nodeType==3||jb.nodeType==4))zb[zb.length]=jb;}return new
m.List(zb);};a.removeChild=function(j){var
nb=j.getParent();return nb!=null&&nb.equals(this)?new
m(this.bW.removeChild(j.bW)):null;};a.removeChildren=function(){var
xa=this.bW.childNodes;for(var
Fa=xa.length-1;Fa>=0;Fa--)this.bW.removeChild(xa[Fa]);};a.removeAttribute=function(r){if(this.fA==1)this.bW.removeAttribute(r);};a.removeAttributeNode=function(p){this.bW.removeAttributeNode(p.bW);return this;};a.equals=function(q){return q!=null&&q.bW==this.bW;};a.getNodeType=function(){return this.fA;};a.getNodeName=function(){return this.bW.nodeName;};a.getNamespaceURI=function(){var
oa=this.bW.namespaceURI;if(oa==null)oa=ub.b;return oa;};a.selectSingleNode=function(c,i){if(!this.bW)return null;return this.rt(c,i,0);};a.selectNodes=function(d,h){if(!this.bW)return new
m.List([]);return this.rt(d,h,1);};a.selectNodeIterator=function(f,k){if(!this.bW)return new
m.SelectIterator();return this.rt(f,k,2);};a.getBaseName=function(){var
xb=this.getNodeName();var
Cb=xb.indexOf(ub.e);return Cb>=0?xb.substring(Cb+1):xb;};a.getPrefix=function(){var
P=this.getNodeName();var
ga=P.indexOf(ub.e);return ga>=0?P.substring(0,ga):ub.b;};a.getXML=function(){return this.toString();};a.toString=function(){var
Mb=ub.f+(this.getClass()).getName();if(this.bW!=null&&!this.hasError()){if(this.getNodeType()==2){return this.getNodeName()+ub.g+this.getValue()+ub.h;}else return (new
XMLSerializer()).serializeToString(this.bW);}else return this.hasError()?jsx3._msg(ub.i,Mb,this.getError()):jsx3._msg(ub.j,Mb);};a.getValue=function(){if(this.fA==1){var
fb=new
Array(this.bW.childNodes.length);for(var
X=0;X<this.bW.childNodes.length;X++){var
sa=this.bW.childNodes[X];if(sa.nodeType==3||sa.nodeType==4)fb[X]=sa.nodeValue;else fb[X]=sa.textContent;}return fb.join(ub.b);}else return this.bW.nodeValue;};a.setValue=function(i){if(i==null)i=ub.b;if(this.fA==1){this.removeChildren();this.appendChild(this.createNode(3,i));}else this.bW.nodeValue=i;return this;};m.eC=new
XPathEvaluator();m.RH=[XPathResult.FIRST_ORDERED_NODE_TYPE,XPathResult.ORDERED_NODE_ITERATOR_TYPE,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE];a.rt=function(l,s,i){if(typeof s==ub.k)s=jsx3.xml.Document.Qj(s);var
xb=this.bW.ownerDocument;var
pb=xb.documentElement;var
la=s?m.gs(s,pb):m.C7(xb)||m.eC.createNSResolver(pb);var
B=null;try{B=m.eC.evaluate(l,this.bW,la,m.RH[i],null);}catch(Kb){}if(i==1){var
Sa=null;var
Ja=[];if(B)while(Sa=B.iterateNext())Ja[Ja.length]=Sa;return new
m.List(Ja);}else if(i==2){return new
m.SelectIterator(B);}else return B&&B.singleNodeValue?new
m(B.singleNodeValue):null;};m.C7=function(f){if(!f._jsxDc)if(f._jsxxh)f._jsxDc=m.gs(f._jsxxh);return f._jsxDc;};m.IV={};m.gs=function(k){var
ua=m.IV[k];if(!ua){var
db=(new
DOMParser()).parseFromString(ub.l+k+ub.m,ub.n);ua=m.IV[k]=m.eC.createNSResolver(db.documentElement);}return ua;};a.fx=function(i){if(i==null){return this.bW.ownerDocument;}else if(i==1){var
xa=this.bW.ownerDocument;return xa!=null?xa.documentElement:null;}else if(i==2)return this.bW.documentElement;};a.getNative=function(){return this.bW;};a.getFirstChild=function(){if(this.fA==1){var
sb=this.bW.firstChild;while(sb!=null&&sb.nodeType!=1)sb=sb.nextSibling;if(sb!=null)return new
m(sb);}return null;};a.getLastChild=function(){if(this.fA==1){var
ra=this.bW.lastChild;while(ra!=null&&ra.nodeType!=1)ra=ra.previousSibling;if(ra!=null)return new
m(ra);}return null;};a.getPreviousSibling=function(){if(this.fA==1){var
Lb=this.bW.previousSibling;while(Lb!=null&&Lb.nodeType!=1)Lb=Lb.previousSibling;if(Lb!=null)return new
m(Lb);}return null;};a.getNextSibling=function(){if(this.fA==1){var
w=this.bW.nextSibling;while(w!=null&&w.nodeType!=1)w=w.nextSibling;if(w!=null)return new
m(w);}return null;};a.transformNode=function(q,c,s){jsx3.require(ub.o);var
pa=new
jsx3.xml.Template(q);if(c)pa.setParams(c);return pa[s?ub.p:ub.q](this);};m.EE=function(){};m.EE.prototype.toString=function(){return ub.r+this.code+ub.s+(typeof this.description!=ub.t?ub.u+this.description:ub.b);};a.Dk=function(k,d){if(this.dN==null)this.dN=new
m.EE();this.dN.code=k;this.dN.description=d;};a.getError=function(){if(!this.dN)this.Dk(0);return this.dN;};a.hasError=function(){return this.dN!=null&&this.dN.code!=0;};a.getOwnerDocument=function(){return this.bW?new
jsx3.xml.Document(this.fx()):null;};m.getVersion=function(){return ub.v;};});jsx3.Entity=jsx3.xml.Entity;jsx3.Class.defineClass("jsx3.xml.Entity.List",jsx3.util.List,null,function(b,g){var
ub={a:"Not implemented",b:"[",c:"]"};var
D=jsx3.Exception;g.init=function(n){this.jsxsuper(null,true);this.p6=n;};g.get=function(s){var
Ra=this.p6[s];return Ra!=null?new
jsx3.xml.Entity(Ra):Ra;};var
Za=ub.a;g.add=function(){throw new
D(Za);};g.addAll=function(){throw new
D(Za);};g.set=function(){throw new
D(Za);};g.remove=function(){throw new
D(Za);};g.removeAt=function(){throw new
D(Za);};g.sort=function(){throw new
D(Za);};g.slice=function(m,a){return new
b(arguments.length>1?this.p6.slice(m,a):this.p6.slice(m));};g.toString=function(){return ub.b+this.toArray()+ub.c;};g.clone=function(){return new
b(this.p6.concat());};g.toArray=function(){var
Ia=this.size();var
zb=new
Array(Ia);for(var
kb=0;kb<Ia;kb++)zb[kb]=this.get(kb);return zb;};});jsx3.Class.defineClass("jsx3.xml.Entity.ChildIterator",null,[jsx3.util.Iterator],function(d,h){h.init=function(e,a){this.WU=e;this.ty=0;this.Ny=a;this.i6();this.bW=null;};h.next=function(){if(!this._next)return null;if(this.bW){this.bW.init(this._next);}else this.bW=new
jsx3.xml.Entity(this._next);this.i6();return this.bW;};h.hasNext=function(){return this._next!=null;};h.i6=function(){this._next=null;var
X=this.WU;var
ub=X.length;while(this._next==null&&this.ty<ub){var
u=X[this.ty];if(u.nodeType==1||this.Ny&&(u.nodeType==3||u.nodeType==4))this._next=u;this.ty++;}};});jsx3.Class.defineClass("jsx3.xml.Entity.SelectIterator",null,[jsx3.util.Iterator],function(f,j){j.init=function(c){this.pw=c;this.x2=0;this.bW=null;};j.next=function(){var
ta=this.pw.snapshotItem(this.x2++);if(!ta)return null;if(this.bW){this.bW.init(ta);}else this.bW=new
jsx3.xml.Entity(ta);return this.bW;};j.hasNext=function(){return this.pw&&this.x2<this.pw.snapshotLength;};});jsx3.Collection=jsx3.xml.Entity.List;jsx3.util.Collection=jsx3.Collection;jsx3.Class.defineClass("jsx3.net.Request",null,[jsx3.util.EventDispatcher],function(g,f){var
ub={a:"response",b:"timeout",c:"req_inst",d:"_timeoutto",e:"getAllResponseHeaders",f:"getResponseHeader",g:"statusText",h:"status",i:"req.bad_xml",j:"UniversalBrowserRead",k:"req.netsc",l:"req.open",m:"req.err_open",n:"req.err_state",o:"hS",p:"req.err_send",q:"load.async",r:"load.sync",s:" ",t:"3.00.00"};g.STATUS_OK=200;g.STATUS_ERROR=400;g.EVENT_ON_RESPONSE=ub.a;g.EVENT_ON_TIMEOUT=ub.b;g.uV={};f.init=function(d){if(d!=null)g.uV[d]=this;try{this._request=new
XMLHttpRequest();}catch(Kb){throw new
jsx3.Exception(jsx3._msg(ub.c),jsx3.NativeError.wrap(Kb));}};f.abort=function(){if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this._request.abort();return this;};f.EP=function(j,m,c){try{return m==1?this._request[j]():m==2?this._request[j](c):this._request[j];}catch(Kb){this.hS=13030;return null;}};f.getAllResponseHeaders=function(){return this.EP(ub.e,1);};f.getResponseHeader=function(n){return this.EP(ub.f,2,n);};f.getStatusText=function(){return this.EP(ub.g);};f.getStatus=function(){var
ba=this.hS;if(ba==null)ba=this.EP(ub.h);return ba==0?200:ba;};f.getResponseText=function(){return this._request.responseText;};f.getResponseXML=function(){var
Ga=new
jsx3.xml.Document();Ga.po(this);if(!Ga.hasError()){return Ga;}else{g.Q2(2,jsx3._msg(ub.i,this.eE,Ga.getError()));return null;}};f.getNative=function(){return this._request;};f.setRequestHeader=function(m,b){this._request.setRequestHeader(m,String(b));return this;};f.getReadyState=function(){return this._request.readyState;};g.open=function(i,j,d,e,s){var
ka=jsx3.net.URI.valueOf(j);var
B=ka.getScheme();var
aa=g._HANDLERS[B]||g.jsxclass;return (aa.newInstance()).open(i,ka,d,e,s);};g._HANDLERS={};g.addSchemeHandler=function(a,m){g._HANDLERS[a]=m;};g.getSchemeHandler=function(m){return g._HANDLERS[m];};f.open=function(k,i,b,c,q){this.hS=0;this.OJ=Boolean(b);this.yT=k;this.eE=jsx3.net.URIResolver.DEFAULT.resolveURI(i);try{if(window.netscape&&netscape.security)netscape.security.PrivilegeManager.enablePrivilege(ub.j);}catch(Kb){g.Q2(5,jsx3._msg(ub.k,jsx3.NativeError.wrap(Kb)));}try{g.Q2(6,jsx3._msg(ub.l,this.eE));this._request.open(k,this.eE.toString(),this.OJ,c,q);}catch(Kb){this.hS=400;g.Q2(2,jsx3._msg(ub.m,i,jsx3.NativeError.wrap(Kb)));}return this;};g.cancelRequest=function(p){var
sb=g.uV[p];if(sb)sb.abort();};g.getRequest=function(h){return g.uV[h];};f.getURL=function(){return this.eE&&this.eE.toString();};f.setTimeouts=function(n,i,d,l){return this;};f.send=function(d,m){if(this.hS==400)throw new
jsx3.Exception(jsx3._msg(ub.n));var
Ma=new
jsx3.util.Timer(g.jsxclass,this.eE);var
B=false;try{if(!this.OJ)g.INSYNC=true;this._request.send(d);if(this.OJ)this.hS=0;else delete this[ub.o];}catch(Kb){this.hS=400;g.Q2(2,jsx3._msg(ub.p,this.eE,jsx3.NativeError.wrap(Kb)));B=this;}finally{g.INSYNC=false;}if(this.OJ){if(B||this._request.readyState==4){jsx3.sleep(function(){Ma.log(ub.q);this.publish({subject:ub.a});},null,this);}else{var
Qa=this;this._request.onreadystatechange=function(){if(Qa._request.readyState==4){Ma.log(ub.q);if(g.INSYNC){jsx3.sleep(function(){Qa.WH();});}else Qa.WH();}};if(!isNaN(m)&&m>0)this._timeoutto=window.setTimeout(function(){Ma.log(ub.b);Qa.Sv();},m);}}else Ma.log(ub.r);return this;};f.Sv=function(){delete this[ub.d];this.abort();this.hS=408;this.publish({subject:ub.b});};f.WH=function(){delete this[ub.o];if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this.getStatusText();this.publish({subject:ub.a});};f.toString=function(){return this.jsxsuper()+ub.s+this.yT+ub.s+this.getStatus()+ub.s+this.eE;};g.Q2=function(h,l){if(g.dK==null)if(jsx3.util.Logger){g.dK=jsx3.util.Logger.getLogger(g.jsxclass.getName());if(g.dK==null)return;}else return;g.dK.log(h,l);};g.getVersion=function(){return ub.t;};});jsx3.HttpRequest=jsx3.net.Request;jsx3.Class.defineClass("jsx3.xml.Document",jsx3.xml.Entity,[jsx3.util.EventDispatcher],function(e,m){var
ub={A:" ",B:"xml.unknown",C:"UniversalBrowserRead",D:"1.0",E:"<?xml",F:' version="',G:'"',H:' encoding="',I:' standalone="',J:"yes",K:"no",L:"?>\n",M:"xml",N:"<!-- ",O:" -->",P:"\n",Q:"XPath",R:"xmlns:",S:"='",T:"'",U:"object",V:"([^=]*)=['\"]([^\"^']*)['\"]",W:"g",X:":",Y:"http://www.w3.org/XML/1998/namespace",Z:"undefined",_:"jsx",a:"response",aa:"attribute::* | child::*",b:"error",ba:"3.0.0",c:"timeout",d:"http://xsd.tns.tibco.com/gi/cxf/2006",e:"jsx_xmlns",f:/xmlns:([^=]*)=['\"]([^\"^']*)['\"]/g,g:"",h:"xml.parser",i:"MV",j:"GET",k:"*",l:"pO",m:"lw",n:"content-type",o:/xml|xsl/i,p:"xml.doc_status",q:"xml.timeout",r:"text/xml",s:"parse",t:"0",u:"xml.err_fmt",v:"xml.doc_bad_ex",w:"xml.doc_bad",x:"parsererror",y:/^http:\/\/www\.mozilla\.org\/(.+\/)?parsererror.xml/i,z:/[\n\r]/g};var
Ma=jsx3.xml.Entity;e.ON_RESPONSE=ub.a;e.ON_ERROR=ub.b;e.ON_TIMEOUT=ub.c;e.SEARCHABLE_NAMESPACE=ub.d;e.SEARCHABLE_PREFIX=ub.e;e.lP=ub.f;m.init=function(n){var
C=n instanceof Ma;if(!n||C){try{this.MV=window.document.implementation.createDocument(ub.g,ub.g,null);}catch(Kb){this.Dk(101,jsx3._msg(ub.h,jsx3.NativeError.wrap(Kb)));delete this[ub.i];}if(n){this.MV.appendChild((n.getNative()).cloneNode(true));this.jsxsuper(this.MV.documentElement);}}else{this.MV=n;this.jsxsuper(n.documentElement);}};m.load=function(r,f){var
nb=jsx3.net;var
xa=nb.Request;this.eE=r.toString();this.abort();var
Mb=Boolean(this.getAsync());var
E=xa.open(ub.j,r,Mb);if(E.getStatus()!=400){if(Mb){this.lw=E;E.subscribe(ub.k,this,ub.l);}E.send(null,f);}else if(Mb)jsx3.sleep(function(){this.po(E);},null,this);if(!Mb)this.po(E);return this;};m.abort=function(){this.Dk(0);if(this.lw){this.lw.unsubscribe(ub.k,this);this.lw.abort();delete this[ub.m];}};m.po=function(j){var
ba=this.eE;this.Gs(j);this.eE=ba;if(this.hasError())this.publish({subject:ub.b});else this.publish({subject:ub.a});};m.Gs=function(l){var
B=l.getStatus();var
tb=B>=200&&B<400;var
P=ub.g;if(!tb)try{P=l.getResponseHeader(ub.n);}catch(Kb){}if(tb||jsx3.util.strEmpty(P)||ub.o.test(P)){this.loadXML(l.getResponseText());}else this.Dk(102,jsx3._msg(ub.p,this.eE,B));};m.pO=function(i){var
ib=jsx3.net.Request;var
T=i.target;var
Wa=i.subject;delete this[ub.m];T.unsubscribe(ub.k,this);if(Wa==ub.a){this.po(T);}else if(Wa==ub.c){this.Dk(111,jsx3._msg(ub.q));this.publish({subject:ub.c});}else e.Q2();};m.UX=function(n){Ma.prototype.init.call(this,n);};m.loadXML=function(r){this.eE=null;this.abort();try{var
Da=new
jsx3.util.Timer(e.jsxclass,r!=null?jsx3.util.strTruncate(r,30):ub.g,5);this.MV=(new
DOMParser()).parseFromString(r,ub.r);if(!this.X8(this.MV))this.UX(this.MV.documentElement);Da.log(ub.s);}catch(Kb){this.X8(this.MV,jsx3.NativeError.wrap(Kb));}return this;};m.getSourceURL=function(){return this.eE;};m.X8=function(g,i){if(g!=null){var
O=g.parseError;if(O!=null&&O.errorCode!=ub.t){var
hb=jsx3._msg(ub.u,O.errorCode,O.line,O.linepos,jsx3.util.strTrim(String(O.reason)),jsx3.util.strTruncate(O.srcText),O.url);this.Dk(O.errorCode,hb);return true;}var
lb=g.documentElement;if(lb==null){if(i)this.Dk(158,jsx3._msg(ub.v,i));else this.Dk(108,jsx3._msg(ub.w));return true;}else if(lb.tagName==ub.x&&lb.namespaceURI&&lb.namespaceURI.match(ub.y)){this.Dk(109,lb.textContent.replace(ub.z,ub.A));return true;}}if(i!=null){this.Dk(110,jsx3._msg(ub.B,jsx3.NativeError.wrap(i)));return true;}return false;};m.getValidateOnParse=function(){return this.MV.validateOnParse;};m.setValidateOnParse=function(n){this.MV.validateOnParse=n;};m.getResolveExternals=function(){return this.MV.resolveExternals;};m.setResolveExternals=function(k){this.MV.resolveExternals=k;};m.cloneDocument=function(){try{netscape.security.PrivilegeManager.enablePrivilege(ub.C);}catch(Kb){}try{var
wb=new
e(this.MV.cloneNode(true));}catch(Kb){var
wb=new
e();wb.loadXML(this.getXML());}return wb;};m.toString=function(){if(this.MV!=null&&!this.hasError()){return (new
XMLSerializer()).serializeToString(this.MV);}else return this.jsxsuper();};m.getXmlVersion=function(){return this.MV.xmlVersion;};m.getXmlEncoding=function(){return this.MV.xmlEncoding;};m.getXmlStandalone=function(){return this.MV.xmlStandalone;};m.serialize=function(r,l,i){if(r===true)r=this.getXmlVersion()||ub.D;if(l===true)l=this.getXmlEncoding();var
la=r||l||i;if(la){var
Ga=ub.E;if(r)Ga=Ga+(ub.F+r+ub.G);if(l)Ga=Ga+(ub.H+l+ub.G);if(i!=null)Ga=Ga+(ub.I+(i?ub.J:ub.K)+ub.G);Ga=Ga+ub.L;var
zb=new
Array(this.MV.childNodes.length+1);zb[0]=Ga;for(var
Lb=0;Lb<this.MV.childNodes.length;Lb++){var
Fa=this.MV.childNodes[Lb];if(Fa.nodeType!=7||Fa.nodeName!=ub.M){var
ja=new
Ma(Fa);zb[Lb+1]=ja.hasError()?ub.N+ja+ub.O:ja.toString();}}}else{var
zb=new
Array(this.MV.childNodes.length);for(var
Lb=0;Lb<this.MV.childNodes.length;Lb++){var
Fa=this.MV.childNodes[Lb];var
ja=new
Ma(Fa);zb[Lb]=ja.hasError()?ub.N+ja+ub.O:ja.toString();if(Fa.nodeType==7||Fa.nodeName==ub.M)zb[Lb]+=ub.P;}}return zb.join(ub.g);};m.createDocumentElement=function(r,i){if(i==null)i=null;var
Sa=this.MV.createElementNS(i,r);if(this.MV.documentElement!=null)this.MV.replaceChild(Sa,this.MV.documentElement);else this.MV.appendChild(Sa);this.UX(this.MV.documentElement);return new
jsx3.xml.Entity(Sa);};m.createProcessingInstruction=function(n,q){var
X=this.MV.createProcessingInstruction(n,q);this.MV.appendChild(X);};m.setAsync=function(f){this._jsxJF=f;return this;};m.getAsync=function(a){return Boolean(this._jsxJF);};m.setSelectionLanguage=function(g){return this;};m.getSelectionLanguage=function(){return ub.Q;};e.Qj=function(h){var
Oa=[];for(var W in h)Oa[Oa.length]=ub.R+h[W]+ub.S+W+ub.T;return Oa.join(ub.A);};m.setSelectionNamespaces=function(c){if(typeof c==ub.U)c=e.Qj(c);this.MV._jsxxh=c;this.MV._jsxDc=null;return this;};m.getSelectionNamespaces=function(g){return this.MV._jsxxh?this.MV._jsxxh:ub.g;};m.createNamespaceAxis=function(){var
Sa=this.getRootNode();var
S=Sa.toString();var
gb=ub.g;do{var
ua=new
RegExp(ub.R+ub.e+gb+ub.V,ub.W);var
yb=S.search(ua);if(yb>=0)gb=gb==ub.g?0:gb+1;}while(yb>=0);this.I7(Sa,ub.e+gb);this.loadXML(this.getXML());return ub.e+gb;};m.I7=function(c,p){var
t=(c.cloneNode(false)).getXML();var
Ta;while(Ta=e.lP.exec(t))if(RegExp.$1!=p&&RegExp.$1!=ub.M){var
Ab=c.createNode(2,p+ub.X+RegExp.$1,e.SEARCHABLE_NAMESPACE);Ab.setValue(RegExp.$2);c.setAttributeNode(Ab);}else if(RegExp.$1==ub.M)jsx3.log(t);for(var
Da=c.getChildIterator();Da.hasNext();)this.I7(Da.next(),p);};m.getDeclaredNamespaces=function(r){this._jsxl3={};var
ea=this.getRootNode();if(ea)this.J0(ea,{index:0},r);return this._jsxl3;};m.J0=function(b,j,r){var
bb=b.getNamespaceURI();if(bb!=ub.g&&bb!=ub.Y){var
M;if(!this._jsxl3[bb]||r&&(M=b.getPrefix())!=ub.g&&typeof r[M]!=ub.Z)if(M){this._jsxl3[bb]=M;}else{j.index+=1;this._jsxl3[bb]=ub._+j.index;}}if(b.getNodeType()==1)for(var
tb=b.selectNodeIterator(ub.aa);tb.hasNext();){var
N=tb.next();if(N.getNodeType()==1||N.getNodeType()==2)this.J0(N,j,r);}};m.getNativeDocument=function(){return this.MV;};e.Q2=function(l,d){if(e.dK==null)if(jsx3.util.Logger){e.dK=jsx3.util.Logger.getLogger(e.jsxclass.getName());if(e.dK==null)return;}else return;e.dK.log(l,d);};e.getVersion=function(){return ub.ba;};});jsx3.Document=jsx3.xml.Document;jsx3.Class.defineClass("jsx3.xml.Template",null,null,function(p,s){var
ub={a:"temp.init_err",b:"stylesheet",c:"temp.nat_err",d:"temp.root_elm",e:"",f:" => ",g:"temp.empty",h:"transform",i:"temp.temp_err",j:"temp.doc_err",k:"temp.err"};p.DISABLE_OUTPUT_ESCAPING=1;p.s6={};p.supports=function(n){return p.s6[n]||Boolean(0);};s.init=function(e){if(e.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,e.getError()));if(e.getBaseName()==ub.b){try{this.hM=new
XSLTProcessor();this.hM.importStylesheet(e.getNativeDocument());}catch(Kb){this.Dk(202,jsx3._msg(ub.c,jsx3.NativeError.wrap(Kb)));}}else this.Dk(201,jsx3._msg(ub.d));this._src=e.getSourceURL();};s.setParam=function(j,n){if(!this.X3)this.X3=new
jsx3.util.List();if(this.X3.indexOf(j)<0)this.X3.add(j);this.hM.setParameter(ub.e,j,n!=null?n.toString():ub.e);};s.c1=function(h,d){var
lb=new
jsx3.util.Timer(p.jsxclass,(h instanceof jsx3.xml.Document?h.getSourceURL():ub.e)+ub.f+this);var
H=h instanceof jsx3.xml.Document?h.getNativeDocument():h.getNative();var
ia=this.hM.transformToDocument(H);var
zb=null;if(ia&&ia.documentElement){zb=d?new
jsx3.xml.Document(ia):(new
XMLSerializer()).serializeToString(ia);}else this.Dk(203,jsx3._msg(ub.g));lb.log(ub.h);return zb;};s.reset=function(){if(this.X3){for(var
rb=this.X3.iterator();rb.hasNext();)this.hM.removeParameter(ub.e,rb.next());this.X3.clear();}};s.setParams=function(e){for(var va in e)this.setParam(va,e[va]);};s.transform=function(c,i){if(this.hasError())throw new
jsx3.Exception(jsx3._msg(ub.i,this.getError()));if(c.hasError())throw new
jsx3.Exception(jsx3._msg(ub.j,c.getError()));try{return this.c1(c,i);}catch(Kb){this.Dk(204,jsx3._msg(ub.k,jsx3.NativeError.wrap(Kb)));return null;}};s.transformToObject=function(r){return this.transform(r,true);};s.toString=function(){return this._src;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Template.prototype,true,["getError","hasError","Dk"]);jsx3.Class.defineClass("jsx3.xml.XslDocument",jsx3.xml.Document,null,function(f,s){var
ub={a:"temp.parse",b:"_M"};s.setParam=function(o,q){(this.Ks()).setParam(o,q);};s.setParams=function(b){(this.Ks()).setParams(b);};s.reset=function(){if(this._M)this._M.reset();};s.transform=function(d){return (this.Ks()).transform(d);};s.transformToObject=function(p){return (this.Ks()).transformToObject(p);};s.Ks=function(){if(this._M==null){this._M=new
jsx3.xml.Template(this);if(this._M.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,this.getSourceURL(),this._M.getError()));}return this._M;};s.load=function(p){delete this[ub.b];return this.jsxsuper(p);};s.loadXML=function(q){delete this[ub.b];return this.jsxsuper(q);};s.hasError=function(){return this.jsxsuper()||this._M!=null&&this._M.hasError();};s.getError=function(){var
ka=null;if(this._M)ka=this._M.getError();if(!ka)ka=this.jsxsuper();return ka;};f.wrap=function(c){return new
f(c.getNativeDocument());};s.cloneDocument=function(){return f.wrap(this.jsxsuper());};s.isMutable=function(){return true;};});jsx3.Class.defineClass("jsx3.xml.Processor",null,null,function(h,d){var
B=jsx3.xml.Template;h.DISABLE_OUTPUT_ESCAPING=1;h.supports=function(r){return B.supports(r);};d.init=function(s,g,n){this.rO=s;this.mY=g;this.X3=n;};d.setXML=function(p){this.rO=p;return this;};d.setXSL=function(s){this.mY=s;return this;};d.setParams=function(e){this.X3=e;return this;};d.transformToObject=function(){return this.transform(true);};d.transform=function(q){var
ca=new
B(this.mY);if(!ca.hasError()){if(this.X3)ca.setParams(this.X3);var
L=ca.transform(this.rO,q);if(!ca.hasError())return L;}var
qa=ca.getError();this.Dk(qa.code,qa.description);return null;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Processor.prototype,true,["getError","hasError","Dk"]);jsx3.Class.defineClass("jsx3.util.Logger",null,null,function(h,m){var
ub={a:"FATAL",b:"ERROR",c:"WARN",d:"INFO",e:"DEBUG",f:"TRACE",g:"",h:"logr.err_hand",i:" ",j:"(",k:") ",l:":",m:"ERRO01",n:"TIME: ",o:"\n",p:"CODE: ",q:"DESC: "};var
qa=jsx3.Method;var
Ua=jsx3.Exception;h.OFF=0;h.FATAL=1;h.ERROR=2;h.WARN=3;h.INFO=4;h.DEBUG=5;h.TRACE=6;h.qR=1;h.d0=6;h.GLOBAL=null;h.getLogger=function(n){var
Jb=h.Manager.getManager();if(Jb==null)return null;var
fb=Jb.getLogger(n);if(fb==null){fb=new
h(n);Jb.addLogger(fb);}return fb;};h.FL=[null,ub.a,ub.b,ub.c,ub.d,ub.e,ub.f];h.levelAsString=function(r){return h.FL[r]||ub.g;};m.JM=null;m.XJ=null;m.y5=null;m.UA=4;m.dC=null;m.fz=true;m.ys=null;m.init=function(k){this.JM=k;};m.getName=function(){return this.JM;};m.addHandler=function(n){if(!this.XJ)this.XJ=jsx3.$A();this.XJ.push(n);};m.removeHandler=function(i){if(this.XJ)this.XJ.remove(i);};m.getLevel=function(){return this.y5;};m.getEffectiveLevel=function(){return this.UA;};m.setLevel=function(q){q=Math.max(0,Math.min(h.d0,q));this.y5=q;this.CD();};m.CD=function(){var
pa=null;if(this.y5!=null){pa=this.y5;}else if(this.dC!=null){pa=this.dC.UA;}else pa=m.UA;if(pa!=this.UA){this.UA=pa;if(this.ys)for(var
db=0;db<this.ys.length;db++)this.ys[db].CD();}};m.getParent=function(){return this.dC;};m.setParent=function(j){if(this.dC!=null)this.dC.ys.remove(this);this.dC=j;if(this.dC!=null){if(!this.dC.ys)this.dC.ys=jsx3.$A();this.dC.ys.push(this);}this.CD();};m.getUseParentHandlers=function(){return this.fz;};m.setUseParentHandlers=function(j){this.fz=j;};m.yG=function(g){var
hb=this;var
Jb=g.getLevel();while(hb){var
Nb=hb.XJ;if(Nb)for(var
mb=0;mb<Nb.length;mb++){var
K=Nb[mb];if(K.isLoggable(Jb))try{K.handle(g);}catch(Kb){Kb=jsx3.NativeError.wrap(Kb);(h.getLogger(h.jsxclass.getName())).error(jsx3._msg(ub.h,K.getName(),Kb),Kb);}}if(!hb.getUseParentHandlers())break;hb=hb.getParent();}};m.log=function(b,n,j){b=Math.max(b,h.qR);if(this.UA<b)return;var
ia=jsx3.$A.is(j)?j:qa.argsAsArray(arguments,2);var
jb=new
h.Record(n,ia,b,this.getName(),jsx3.lang.getCaller(1),null);this.yG(jb);};m.logError=function(a,o,g){a=Math.max(a,h.qR);if(this.UA<a)return;var
ga=new
h.Record(o,null,a,this.getName(),jsx3.lang.getCaller(1),g);this.yG(ga);};m.logStack=function(s,p,k){s=Math.max(s,h.qR);if(this.UA<s)return;var
T=new
h.Record(p,null,s,this.getName(),jsx3.lang.getStack(k!=null?k:0),null);this.yG(T);};m.isLoggable=function(f){f=Math.max(f,h.qR);return this.UA>=f;};m.fatal=function(j,n){if(n==null||jsx3.$A.is(n))this.log(1,j,n);else if(n instanceof Ua)this.logError(1,j,n);else if(this.UA>=1)this.log(1,j,qa.argsAsArray(arguments,1));};m.error=function(n,j){if(j==null||jsx3.$A.is(j))this.log(2,n,j);else if(j instanceof Ua)this.logError(2,n,j);else if(this.UA>=2)this.log(2,n,qa.argsAsArray(arguments,1));};m.warn=function(p,b){if(b==null||jsx3.$A.is(b))this.log(3,p,b);else if(b instanceof Ua)this.logError(3,p,b);else if(this.UA>=3)this.log(3,p,qa.argsAsArray(arguments,1));};m.info=function(l,g){if(g==null||jsx3.$A.is(g))this.log(4,l,g);else if(g instanceof Ua)this.logError(4,l,g);else if(this.UA>=4)this.log(4,l,qa.argsAsArray(arguments,1));};m.debug=function(d,a){if(a==null||jsx3.$A.is(a))this.log(5,d,a);else if(a instanceof Ua)this.logError(5,d,a);else if(this.UA>=5)this.log(5,d,qa.argsAsArray(arguments,1));};m.trace=function(e,s){if(s==null||jsx3.$A.is(s))this.log(6,e,s);else if(s instanceof Ua)this.logError(6,e,s);else if(this.UA>=6)this.log(6,e,qa.argsAsArray(arguments,1));};m.toString=function(){return this.jsxsuper()+ub.i+this.getName();};h.reset=function(){};h.doLog=function(l,p,e,f){if(e==null)e=4;else if(e<4)e=4;else e=5;if(h.GLOBAL){var
Pa=p!=null?ub.j+l+ub.k+p:l;if(f||f==null)h.GLOBAL.logStack(e,Pa,1);else h.GLOBAL.log(e,Pa);}};h.logError=function(g,i){var
oa=ub.g;for(var fa in g){if(oa)oa=oa+ub.i;oa=oa+(fa+ub.l+g[fa]);}h.doLog(ub.m,oa,i,false);};h.getMinPriority=function(){return 3;};h.getLog=function(){return [];};h.errorToString=function(e){var
nb=ub.g;nb=nb+(ub.n+new
Date(e.timestamp)+ub.o);nb=nb+(ub.p+e.code+ub.o);nb=nb+(ub.q+e.description+ub.o);return nb;};h.toString=function(){return ub.g;};});jsx3.Class.defineClass("jsx3.util.Logger.Manager",null,null,function(o,l){var
ub={A:"logr.bn_setr",B:"/configuration/logger[@name='",C:"useParent",D:"false",E:"./handler-ref",F:"logr.no_hand",G:".",a:"jsx:/../logger.xml",b:"global",c:'<configuration><handler name="console" class="jsx3.util.Logger.ConsoleHandler"/><logger name="global" level="INFO"><handler-ref name="console"/></logger></configuration>',d:"jsx_logger_config",e:"logr.err_conf",f:"[@lazy='true' and @class='",g:"']",h:"/configuration/logger[handler-ref/@name='",i:"name",j:"/configuration/handler",k:"",l:"class",m:"lazy",n:"true",o:"require",p:"level",q:"number",r:"logr.no_class",s:"logger.require",t:"jsx.js",u:"hG",v:"[@require='true']",w:"./property",x:"value",y:"eval",z:"logr.bn_eval"};var
rb=jsx3.Exception;var
Jb=jsx3.util.Logger;o._N=ub.a;o.n6=ub.b;o.P7=null;o.bx=-1;o.Ew=ub.c;l.initialize=function(c){if(c===false){}else if(!c){var
ib=jsx3.getEnv(ub.d);if(ib==null)ib=o._N;if(ib)c=(new
jsx3.xml.Document()).load(ib);}if(c&&c.hasError()){window.alert(jsx3._msg(ub.e,c.getError(),jsx3.resolveURI(c.getSourceURL())));c=null;}if(!c)c=(new
jsx3.xml.Document()).loadXML(o.Ew);this._s=c;this.l4();for(var wa in this.Nx)this.addLogger(this.Nx[wa]);};o.getManager=function(){if(o.P7==null){o.P7=new
o();Jb.GLOBAL=new
Jb(o.n6);o.P7.addLogger(Jb.GLOBAL);}return o.P7;};l._s=null;l.Nx=null;l.XJ=null;l.init=function(s){this.Nx={};this.XJ={};};l.Ou=function(p){var
Da=this.l4(ub.f+p.getName()+ub.g);this.hF(Da);};l.hF=function(c){for(var
N=0;N<c.length;N++){var
yb=c[N];var
W=this.getHandler(yb);var
A=this._s.selectNodeIterator(ub.h+yb+ub.g);while(A.hasNext()){var
Kb=A.next();var
D=Kb.getAttribute(ub.i);var
J=this.getLogger(D);if(J!=null)J.addHandler(W);}}};l.l4=function(q){var
wb=[];if(!this._s)return wb;var
L=this._s.selectNodeIterator(ub.j+(q!=null?q:ub.k));var
G=this.hG==null;while(L.hasNext()){var
Za=L.next();var
y=Za.getAttribute(ub.i);if(this.getHandler(y)!=null)continue;var
Na=Za.getAttribute(ub.l);var
Qa=Za.getAttribute(ub.m)==ub.n;var
T=Za.getAttribute(ub.o)==ub.n;var
X=jsx3.Class.forName(Na);if(X==null&&T){if(this.hG==null)this.hG=[];this.hG.push(Na);this.XJ[y]=o.bx;continue;}if(X){var
Ha=X.newInstance(y);this.zZ(Ha,Za);Ha.onAfterInit();var
Hb=Za.getAttribute(ub.p);if(Hb&&typeof Jb[Hb]==ub.q)Ha.setLevel(Jb[Hb]);this.addHandler(Ha);wb[wb.length]=y;}else if(!Qa&&!T){window.alert(jsx3._msg(ub.r,Na));}else this.XJ[y]=o.bx;}if(G&&this.hG!=null){var
z=this;var
Ib=new
jsx3.util.Job(ub.s);Ib.run=function(){jsx3.sleep(function(){this.eH();},null,z);};jsx3.CLASS_LOADER.addJob(Ib,ub.t);}return wb;};l.eH=function(p){(jsx3.requireAsync.apply(jsx3,this.hG)).when((jsx3.$F(function(){delete this[ub.u];var
Oa=this.l4(ub.v);this.hF(Oa);})).bind(this));};l.zZ=function(d,r){var
lb=d.getClass();for(var
ma=r.selectNodeIterator(ub.w);ma.hasNext();){var
wa=ma.next();var
Y=wa.getAttribute(ub.i);var
w=wa.getAttribute(ub.x);var
Eb=wa.getAttribute(ub.y)==ub.n;var
Fb=lb.getSetter(Y);if(Fb!=null){if(Eb)try{w=isNaN(w)?d.eval(w):Number(w);}catch(Kb){throw new
rb(jsx3._msg(ub.z,Y,w,d),jsx3.NativeError.wrap(Kb));}Fb.apply(d,[w]);}else throw new
rb(jsx3._msg(ub.A,Y,lb));}};l.addLogger=function(q){var
za=q.getName();this.Nx[za]=q;if(this._s){var
U=this._s.selectSingleNode(ub.B+za+ub.g);if(U!=null){var
ib=U.getAttribute(ub.p);if(ib&&typeof Jb[ib]==ub.q)q.setLevel(Jb[ib]);var
kb=U.getAttribute(ub.C)!=ub.D;q.setUseParentHandlers(kb);var
F=U.selectNodeIterator(ub.E);while(F.hasNext()){var
Hb=F.next();var
W=Hb.getAttribute(ub.i);var
gb=this.getHandler(W);if(gb!=null){q.addHandler(gb);}else if(this.XJ[W]!=o.bx)throw new
rb(jsx3._msg(ub.F,za,W));}this.zZ(q,U);}}if(za!=o.n6){var
Da=za.lastIndexOf(ub.G);var
Ma=Da>=0?za.substring(0,Da):o.n6;q.setParent(Jb.getLogger(Ma));}};l.addHandler=function(i){this.XJ[i.getName()]=i;};l.getLogger=function(p){return this.Nx[p];};l.getHandler=function(g){var
ba=this.XJ[g];return ba==o.bx?null:ba;};l.getHandlerNames=function(){var
xa=[];for(var A in this.XJ)xa[xa.length]=A;return xa;};});jsx3.Class.defineClass("jsx3.util.Logger.Record",null,null,function(a,i){var
ub={a:"function"};a.lp=1;i.Kp=null;i.DM=null;i.Q3=null;i.X3=null;i.UA=null;i.dI=null;i.eg=null;i.dN=null;i.init=function(b,n,p,k,d,r){this.Kp=a.lp++;this.DM=new
Date();this.Q3=b;this.X3=n;this.UA=p;this.dI=k;this.eg=d;this.dN=r;};i.getSerial=function(){return this.Kp;};i.getDate=function(){return this.DM;};i.getMessage=function(){return this.Q3;};i.getParameters=function(){return this.X3;};i.getLevel=function(){return this.UA;};i.getLoggerName=function(){return this.dI;};i.getFunction=function(){return typeof this.eg==ub.a?this.eg:null;};i.getStack=function(){return jsx3.$A.is(this.eg)?this.eg:null;};i.getError=function(){return this.dN;};});jsx3.Class.defineClass("jsx3.util.Logger.Handler",null,null,function(j,s){var
ub={a:"",b:"objRecord"};var
Ta=jsx3.util.Logger;var
jb=jsx3.util.Logger.Manager;j.registerHandlerClass=function(f){(jb.getManager()).Ou(f);};s.JM=ub.a;s.UA=null;s.init=function(f){this.JM=f;};s.onAfterInit=function(){};s.getName=function(){return this.JM;};s.getLevel=function(){return this.UA;};s.setLevel=function(l){l=Math.max(0,Math.min(Ta.d0,l));this.UA=l;};s.isLoggable=function(o){return this.UA==null||this.UA>=o;};s.handle=jsx3.Method.newAbstract(ub.b);});jsx3.Class.defineClass("jsx3.util.Logger.MemoryHandler",jsx3.util.Logger.Handler,null,function(r,a){a.S9=null;a.hx=100;a.init=function(q){this.jsxsuper(q);this.S9=[];};a.handle=function(b){this.S9[this.S9.length]=b;if(this.S9.length>this.hx)this.S9.shift();};a.clearBuffer=function(){this.S9=[];};a.getBufferSize=function(){return this.hx;};a.setBufferSize=function(p){this.hx=Math.max(1,p);if(this.S9.length>this.hx)this.S9.splice(0,this.S9.length-this.hx);};a.getRecords=function(o){if(o==null)o=this.S9.length;return this.S9.slice(this.S9.length-o);};});jsx3.Class.defineClass("jsx3.util.Logger.FormatHandler",jsx3.util.Logger.Handler,null,function(c,d){var
ub={a:"%d %t %n (%l) - %M",b:"",c:" ",d:" (",e:") ",f:"\n",g:/\%s/g,h:"{0}",i:/\%n/g,j:"{1}",k:/\%l/g,l:"{2}",m:/\%M/g,n:"{3}",o:/\%f/g,p:"{4}",q:/\%d/g,r:"{5,date,yyyy-MM-dd}",s:/\%t/g,t:"{5,date,HH:mm:ss.SSS}"};d.t6=ub.a;d.Sq=ub.b;d.init=function(e){this.jsxsuper(e);};d.format=function(r){var
ab=r.getDate();var
T=r.getFunction();var
E=r.getMessage()||ub.b;var
Ta=this.os();var
Gb=jsx3.util.Logger.levelAsString(r.getLevel());var
ra=Ta?Ta.format(r.getSerial(),r.getLoggerName(),Gb,E,T!=null?T.jsxmethod!=null?T.jsxmethod.toString():T.toString():ub.b,ab):ab+ub.c+r.getLoggerName()+ub.d+Gb+ub.e+E;var
J=r.getError();var
ya=r.getStack();if(J!=null){ra=ra+(ub.f+J.printStackTrace());}else if(ya!=null)ra=ra+(ub.f+jsx3.Exception.formatStack(ya));return ra;};d.getFormat=function(){return this.t6;};d.setFormat=function(h){this.t6=h;this.yD=null;};d.os=function(){if(this.yD==null&&jsx3.util.MessageFormat){var
U=this.t6||ub.b;U=U.replace(ub.g,ub.h);U=U.replace(ub.i,ub.j);U=U.replace(ub.k,ub.l);U=U.replace(ub.m,ub.n);U=U.replace(ub.o,ub.p);U=U.replace(ub.q,ub.r);U=U.replace(ub.s,ub.t);this.yD=new
jsx3.util.MessageFormat(U);}return this.yD;};d.getResourceUrls=function(){return this.Sq;};d.setResourceUrls=function(l){this.Sq=l;};});jsx3.Class.defineClass("jsx3.util.Logger.ConsoleHandler",jsx3.util.Logger.FormatHandler,null,function(b,r){var
ub={a:"error",b:"warn",c:"info",d:"debug"};var
Gb=[null,ub.a,ub.a,ub.b,ub.c,ub.d,ub.d];r.handle=function(p){if(window.console){var
t=Gb[p.getLevel()];if(t)try{(console[t]||console.log)(this.format(p));}catch(Kb){}}};});jsx3.Class.defineClass("jsx3.util.Logger.AlertHandler",jsx3.util.Logger.FormatHandler,null,function(a,f){var
ub={a:"logr.alrt_ctd",b:"logr.alrt_err"};f.gW=5;f.hA=0;f.iW=false;f.handle=function(g){if(this.iW)return;this.hA++;try{if(this.gW>0&&this.hA%this.gW==0)if(!window.confirm(jsx3._msg(ub.a,this.getName()))){this.iW=true;return;}window.alert(this.format(g));}catch(Kb){window.alert(jsx3._msg(ub.b,jsx3.NativeError.wrap(Kb)));}};f.getConfirmInterval=function(){return this.gW;};f.setConfirmInterval=function(p){this.gW=p;};});jsx3.ERROR=jsx3.util.Logger;jsx3.Class.defineClass("jsx3.util.Locale",null,null,function(b,j){var
ub={a:"",b:"en",c:"US",d:"GB",e:"string.lang.",f:"string.terr.",g:"format.locale.displayname",h:"_",i:/[\-_]/};j.init=function(a,d){this.vt=a?a.toLowerCase():ub.a;this.AS=d?d.toUpperCase():ub.a;};b.ROOT=new
b(ub.a);b.ENGLISH=new
b(ub.b);b.US=new
b(ub.b,ub.c);b.UK=new
b(ub.b,ub.d);j.getLanguage=function(){return this.vt;};j.getCountry=function(){return this.AS;};j.getDisplayLanguage=function(d){return (jsx3.System.getLocaleProperties(d)).get(ub.e+this.vt)||ub.a;};j.getDisplayCountry=function(p){return (jsx3.System.getLocaleProperties(p)).get(ub.f+this.AS)||ub.a;};j.getDisplayName=function(n){var
Qa=this.getDisplayLanguage(n);var
Ga=this.getDisplayCountry(n);if(!Qa)return Ga;if(!Ga)return Qa;var
la=(jsx3.System.getLocaleProperties(n)).get(ub.g);return (new
jsx3.util.MessageFormat(la)).format(Qa,Ga);};j.getSearchPath=function(){var
V=[this];if(this.AS!=ub.a||this.vt!=ub.a){if(this.AS!=ub.a&&this.vt!=ub.a)V.push(new
b(this.vt));V.push(new
b(ub.a));}return V;};j.equals=function(o){return this===o||o instanceof b&&o.vt==this.vt&&o.AS==this.AS;};j.toString=function(){if(this.AS)return this.vt+ub.h+this.AS;else return this.vt;};b.valueOf=function(n){var
ta=n.split(ub.i);return new
b(ta[0],ta[1]);};});jsx3.Class.defineClass("jsx3.util.NumberFormat",null,null,function(h,o){var
ub={A:"'",B:"nmfmt.sq",C:";",D:"nmfmt.numpt",E:",",F:"nmfmt.gpdec",G:"#",H:"\u00A4",I:"%",J:"\u2030",K:"-",a:".integer",b:"",c:".currency",d:".percent",e:"format.number",f:"._instance",g:"number.NaN",h:"number",i:"number.minus",j:"number.infinity",k:"number.zero",l:/\-?(\d+(\.\d*)?|\d*\.\d+)([eE]\-?\d+)?/,m:"number.percent",n:"number.permille",o:"number.currency",p:/[\s\u00a0]/g,q:" ",r:".",s:"number.currency.grouping",t:"number.grouping",u:"number.currency.decimal",v:"number.decimal",w:"unshift",x:"push",y:"0",z:"0#,."};h.NUMBER=1;h.INTEGER=2;h.CURRENCY=3;h.getInstance=function(e,l){switch(e){case 2:return h.getIntegerInstance(l);case 3:return h.getCurrencyInstance(l);default:return h.getNumberInstance(l);}};h.getIntegerInstance=function(n){return h.DT(n,ub.a);};h.getNumberInstance=function(g){return h.DT(g,ub.b);};h.getCurrencyInstance=function(p){return h.DT(p,ub.c);};h.getPercentInstance=function(s){return h.DT(s,ub.d);};h.DT=function(a,r){var
Hb=h.K4(a);var
_=ub.e+r+ub.f;var
aa=Hb.get(_);if(!Hb.containsKey(_)||aa==null){var
H=Hb.get(ub.e+r);aa=new
h(H,a);Hb.set(_,aa);}return aa;};o.k5=0;o.vH=ub.b;o.vE=ub.b;o.y3=null;o.fB=null;o.ky=false;o.kG=Number.MAX_VALUE;o.YC=0;o.o2=0;o.G4=0;o.pM=1;o.XH=false;o.init=function(d,l){this.t6=d;this.ZX=l||jsx3.System.getLocale();this.xI();};o.getLocale=function(){return this.ZX;};o.setLocale=function(q){this.ZX=q;this.xI();};o.format=function(r){var
v=this.K4();if(isNaN(r)){return v.get(ub.g);}else{if(typeof r!=ub.h)r=Number(r);var
W=r>=0;var
wa=W?this.vH:this.y3!=null?this.y3:v.get(ub.i)+this.vH;var
Db=W?this.vE:this.fB!=null?this.fB:this.vE;var
x=null;if(!isFinite(r)){x=v.get(ub.j);}else{r=this.pM*Math.abs(r);var
Qa=h.cV(r);var
_a=Qa[0];var
Va=Qa[1];if(this.o2<_a.length-Va){var
Fa=_a.splice(Va+this.o2,_a.length-Va-this.o2);if(h.jy(_a,Fa))Va++;}var
E=Va>=0?_a.slice(0,Va):_a;var
La=Va>=0?_a.slice(Va):[];h.y2(E,this.kG,this.YC,true);h.y2(La,this.o2,this.G4,false);var
mb=v.get(ub.k);h.aK(E,mb);h.aK(La,mb);if(this.k5>0){var
Ga=this.LN(this.XH);for(var
gb=E.length-this.k5;gb>=1;gb=gb-this.k5)E.splice(gb,0,Ga);}x=E.join(ub.b);if(this.ky||La.length>0)x=x+(this.At(this.XH)+La.join(ub.b));}return wa+x+Db;}};h.VW=ub.l;o.parse=function(p){var
Ba=this.K4();if(p==Ba.get(ub.g))return NaN;var
ob=false;var
R=1;var
ta=false;var
tb=Ba.get(ub.i);var
W=this.y3,Ka=this.fB;if(W||Ka){W=this.Xw(W,Ba);Ka=this.Xw(Ka,Ba);if(p.indexOf(W)==0&&p.lastIndexOf(Ka)==p.length-Ka.length){ob=true;p=W.replace(tb,ub.b)+p.substring(W.length,p.length-Ka.length)+Ka.replace(tb,ub.b);}}var
xb=p.indexOf(tb);if(xb==0){ob=true;p=p.substring(0,xb)+p.substring(xb+tb.length);}var
u=Ba.get(ub.m);var
ua=p.indexOf(u);if(ua>=0){R=100;p=p.substring(0,ua)+p.substring(ua+u.length);}else{var
sb=Ba.get(ub.n);ua=p.indexOf(sb);if(ua>=0){R=1000;p=p.substring(0,ua)+p.substring(ua+sb.length);}}var
v=Ba.get(ub.o);var
F=p.indexOf(v);if(F>=0){ta=true;p=p.substring(0,F)+p.substring(F+v.length);}if(p==Ba.get(ub.j))return ob?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;var
Ab=ub.p;p=p.replace(Ab,ub.q);var
O=(this.LN(ta)).replace(Ab,ub.q);if(O){var
Jb=-1;while((Jb=p.indexOf(O))>=0)p=p.substring(0,Jb)+p.substring(Jb+O.length);}var
vb=(this.At(ta)).replace(Ab,ub.q);if(vb!=ub.r){var
aa=p.indexOf(vb);if(aa>=0)p=(p=p.substring(0,aa)+ub.r+p.substring(aa+O.length));}if(!h.VW.exec(p))return NaN;return (ob?-1:1)*Number(RegExp.lastMatch)/R;};o.LN=function(b){var
Ba=this.K4();return b&&Ba.get(ub.s)||Ba.get(ub.t)||ub.b;};o.At=function(g){var
Jb=this.K4();return g?Jb.get(ub.u)||Jb.get(ub.v):Jb.get(ub.v);};h.kY="0".charCodeAt(0);h.mE=".".charCodeAt(0);h.cV=function(g){if(g<0)throw new
jsx3.Exception();var
Da=Math.log(g)*jsx3.LOG10E;if(!isFinite(Da)){if(g==0)return [[0],1];throw new
jsx3.Exception();}var
Ga=g.toString();var
Na=[];var
V=null;for(var
yb=0;yb<Ga.length;yb++){var
oa=Ga.charCodeAt(yb);var
Hb=oa-h.kY;if(Hb>=0&&Hb<=9){Na[Na.length]=Hb;}else if(oa==h.mE){}else break;}if(Da>=0){var
M=Math.floor(Da+1);if(Na.length>M){V=M;}else{if(Na.length<M)for(var
yb=Na.length;yb<M;yb++)Na[Na.length]=0;V=Na.length;}}else{var
Oa=Math.ceil(-1-Da);var
ab=Na.indexOf(0);Na.splice(0,ab+1);for(var
yb=0;yb<Oa;yb++)if(Na[yb]!=0)Na.splice(yb,0,0);V=0;}return [Na,V];};h.y2=function(s,b,k,a){if(s.length>b){if(a){s.splice(0,s.length-b);}else s.splice(b,s.length-b);}else if(s.length<k){var
Ha=a?ub.w:ub.x;for(var
S=s.length;S<k;S++)s[Ha](ub.y);}};h.jy=function(a,s){if(s[0]>=5)for(var
x=a.length-1;x>=0;x--){var
Lb=a[x]+1;if(Lb>=10){a[x]=0;if(x==0){a.unshift(1);return true;}}else{a[x]=Lb;break;}}return false;};h.aK=function(a,p){var
F=p.charCodeAt(0);for(var
Ha=0;Ha<a.length;Ha++)a[Ha]=String.fromCharCode(a[Ha]+F);};h.TD=ub.z;o.xI=function(){var
zb=ub.A;var
N=this.K4();var
u=this.t6;var
Pa=0;var
ma=u.length;var
Fa=1;var
wb=null,pb=null;while(Pa<ma){var
Ia=u.charAt(Pa);if(Fa==1){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.vH+=zb;Pa=Pa+2;}else if(lb>=0){this.vH+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(h.TD.indexOf(Ia)>=0){wb=Pa;Fa++;}else{this.vH+=this.sG(Ia,N);Pa++;}}else if(Fa==2){if(h.TD.indexOf(Ia)>=0){Pa++;}else{pb=Pa;Fa++;}}else if(Fa==3){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.vE+=zb;Pa=Pa+2;}else if(lb>=0){this.vE+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(Ia==ub.C){this.y3=ub.b;this.fB=ub.b;Fa++;}else this.vE+=this.sG(Ia,N);Pa++;}else if(Fa==4){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.y3+=zb;Pa=Pa+2;}else if(lb>=0){this.y3+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(h.TD.indexOf(Ia)>=0){Fa++;}else{this.y3+=this.sG(Ia,N);Pa++;}}else if(Fa==5){if(h.TD.indexOf(Ia)>=0){Pa++;}else Fa++;}else if(Fa==6){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.fB+=zb;Pa=Pa+2;}else if(lb>=0){this.fB+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else this.fB+=this.sG(Ia,N);Pa++;}}if(pb==null)pb=ma;if(wb==null)throw new
jsx3.Exception(jsx3._msg(ub.D,u));this.V1(u.substring(wb,pb));};o.V1=function(j){var
Va=j.indexOf(ub.r);if(Va<0)Va=j.length;else if(Va==j.length-1)this.ky=true;var
H=j.lastIndexOf(ub.E);if(H>=0){var
Pa=Va-H-1;if(Pa<1)throw new
jsx3.Exception(jsx3._msg(ub.F,j));this.k5=Pa;}for(var
C=0;C<Va;C++)if(j.charAt(C)==ub.y)this.YC++;for(var
C=Va+1;C<j.length;C++)if(j.charAt(C)==ub.y){this.G4++;this.o2++;}else if(j.charAt(C)==ub.G)this.o2++;};h.K4=function(l){return jsx3.System.getLocaleProperties(l);};o.K4=function(){return h.K4(this.ZX);};o.Xw=function(d,i){var
x=d.split(ub.b);for(var
Ta=0;Ta<x.length;Ta++)x[Ta]=this.sG(x[Ta],i);return x.join(ub.b);};o.sG=function(b,l){if(b==ub.H){this.XH=true;return l.get(ub.o);}else if(b==ub.I){this.pM=100;return l.get(ub.m);}else if(b==ub.J){this.pM=1000;return l.get(ub.n);}else if(b==ub.K){return l.get(ub.i);}else return b;};o.toString=function(){return this.t6;};});jsx3.Class.defineClass("jsx3.util.DateFormat",null,null,function(r,e){var
ub={A:"m",B:"s",C:"S",D:"gmt",E:"string",F:"M",G:"E",H:"a",I:"x",J:"'",K:/[a-zA-Z']/g,L:"dtfmt.sq",M:"dtfmt.token",N:"objDate",O:"dtfmt.parse",P:"dtfmt.inv",a:"short",b:"medium",c:"long",d:"full",e:"format.date.",f:"intType",g:"format.time.",h:"intDateType",i:"intTimeType",j:"format.datetime",k:"date.era",l:"date.era.long",m:"date.day.narrow",n:"date.day.abbrev",o:"date.day",p:"time.ampm",q:"GMT",r:":",s:"",t:"date.month.abbrev",u:"date.month",v:"-",w:"+",x:"0",y:"y",z:"d"};r.SHORT=1;r.MEDIUM=2;r.LONG=3;r.FULL=4;r.LX=2;r.r3=[null,ub.a,ub.b,ub.c,ub.d];r.getDateInstance=function(k,f){var
w=(jsx3.System.getLocaleProperties(f)).get(ub.e+r.r3[k||r.LX]);if(w==null)throw new
jsx3.IllegalArgumentException(ub.f,k);return new
r(w,f);};r.getTimeInstance=function(s,q){var
lb=(jsx3.System.getLocaleProperties(q)).get(ub.g+r.r3[s||r.LX]);if(lb==null)throw new
jsx3.IllegalArgumentException(ub.f,s);return new
r(lb,q);};r.getDateTimeInstance=function(o,f,n){var
gb=jsx3.System.getLocaleProperties(n);var
Na=gb.get(ub.e+r.r3[o||r.LX]);var
qb=gb.get(ub.g+r.r3[f||r.LX]);if(Na==null)throw new
jsx3.IllegalArgumentException(ub.h,o);if(qb==null)throw new
jsx3.IllegalArgumentException(ub.i,f);var
cb=new
jsx3.util.MessageFormat(gb.get(ub.j));return new
r(cb.format(qb,Na),n);};r.tN={G:function(b,m,s){var
wa=b.getFullYear()<1;return r.eU((s.pu(m<4?ub.k:ub.l))[wa?0:1]);},y:function(l,d,j){return r.Ar(l.getFullYear(),d);},M:function(a,l,k){return r.k6(k,a.getMonth(),l);},d:function(q,i,o){return r.ZC(q.getDate(),i);},E:function(f,q,d){return r.eU((d.pu(q<3?ub.m:q<4?ub.n:ub.o))[f.getDay()]);},H:function(g,p,c){return r.ZC(g.getHours(),p);},h:function(d,o,b){return r.ZC(d.getHours()%12||Number(12),o);},m:function(l,d,j){return r.ZC(l.getMinutes(),d);},s:function(i,a,g){return r.ZC(i.getSeconds(),a);},S:function(h,s,f){return r.ZC(h.getMilliseconds(),s);},a:function(l,p,c){return r.eU((c.pu(ub.p))[Math.floor(l.getHours()/12)]);},z:function(m,n,k){var
Ia=r.m2(m,k);return ub.q+Ia[0]+ub.r+Ia[1];},Z:function(j,b,h){var
_=r.m2(j,h);return _[0]+_[1];}};r.Ar=function(q,p){if(p==2){var
Xa=ub.s+q;return Xa.substring(Xa.length-2);}else{if(q<1)q=1-q;return r.ZC(q,p);}};r.ZC=function(a,m){var
H=a.toString();while(H.length<m)H="0000000000".substring(0,m-H.length)+H;return H;};r.eU=function(d,j){if(j==null||j>=4||d.length<=j)return d;else return d.substring(0,j);};r.k6=function(q,d,i){if(i<=2)return r.ZC(d+1,i);else return r.eU((q.pu(i<4?ub.t:ub.u))[d],i);};r.m2=function(b,a){var
V=a.getTimeZoneOffset(b);var
fa=V<0?ub.v:ub.w;V=Math.abs(V);var
L=(Math.floor(V/60)).toString();var
tb=(Math.floor(V%60)).toString();if(L.length<2)L=ub.x+L;if(tb.length<2)tb=ub.x+tb;return [fa+L,tb];};r.UM={G:function(o,s,c,g,m,k,n){var
S=r.AZ(s,c,[o.pu(ub.k),o.pu(ub.l)],g,false,k);var
u=S[0],D=S[1];if(u>=0){n.bc=u==0;return D;}else return -1;},y:function(i,f,p,a,g,d,k){if(a<=2){var
Pa=r.Gp(f,p,a,null,d);var
Ra=Number(Pa);if(!isNaN(Ra)){if(Pa.length==2){var
eb=new
Date();var
Ib=eb.getFullYear();var
V=100*Math.floor(Ib/100)+Ra;if(V>=Ib+20){V=V-100;}else if(V<Ib-80)V=V+100;Ra=V;}k.y=Ra;return Pa.length;}else return -1;}else{var
aa=r.Gp(f,p,a,null,d);return r.KN(aa,ub.y,k);}},M:function(q,p,f,i,o,m,c){if(i<=2){var
V=r.Gp(p,f,i,2,m);var
bb=Number(V);if(!isNaN(bb)){c.M=bb-1;return V.length;}else return -1;}else{var
_a=r.AZ(p,f,[q.pu(ub.t),q.pu(ub.u)],i,false,m);var
Ib=_a[0],fa=_a[1];if(Ib>=0){c.M=Ib;return fa;}else return -1;}},d:function(n,a,b,f,l,j,o){var
aa=r.Gp(a,b,f,2,j);return r.KN(aa,ub.z,o);},E:function(q,p,f,i,o,m,c){var
Eb=r.AZ(p,f,[q.pu(ub.m),q.pu(ub.o),q.pu(ub.n)],i,false,m);var
w=Eb[0],ha=Eb[1];if(w>=0){return ha;}else return 0;},H:function(s,o,g,k,q,j,a){var
jb=r.Gp(o,g,k,2,j);var
Mb=Number(jb);if(!isNaN(Mb)){a.hours24=Mb;return jb.length;}else return -1;},h:function(h,g,o,s,f,d,l){var
Ua=r.Gp(g,o,s,2,d);var
ha=Number(Ua);if(!isNaN(ha)){l.hours12=ha;return Ua.length;}else return -1;},m:function(h,g,o,s,f,d,l){var
E=r.Gp(g,o,s,2,d);return r.KN(E,ub.A,l);},s:function(s,o,g,k,q,j,a){var
bb=r.Gp(o,g,k,2,j);return r.KN(bb,ub.B,a);},S:function(a,n,h,l,o,p,s){var
E=r.Gp(n,h,l,3,p);return r.KN(E,ub.C,s);},a:function(j,a,q,b,h,f,m){var
zb=r.OX(a,q,j.pu(ub.p),b,false,f);var
Ta=zb[0],Bb=zb[1];if(Ta>=0){m.pm=Ta==1;return Bb;}else return -1;},z:function(f,i,m,q,d,b,n){var
Ca=i.substring(m,m+3);var
sa=i.charAt(m+3);var
Lb=Number(i.substring(m+4,m+6));var
aa=Number(i.substring(m+7,m+9));if(Ca.toLowerCase()==ub.D&&(sa==ub.w||sa==ub.v)&&!isNaN(Lb)&&!isNaN(aa)){var
V=60*Lb+aa;if(sa==ub.v)V=V*-1;n.timezone=V;return 9;}else return -1;},Z:function(d,k,p,o,b,s,f){var
J=k.charAt(p);var
zb=Number(k.substring(p+1,p+3));var
xa=Number(k.substring(p+3,p+5));if((J==ub.w||J==ub.v)&&!isNaN(zb)&&!isNaN(xa)){var
ia=60*zb+xa;if(J==ub.v)ia=ia*-1;f.timezone=ia;return 5;}else return -1;}};r.PD=function(a,b,j){if(a.indexOf(j,b)==b)return j.length;else return -1;};r.Gp=function(g,o,b,p,m){var
O=m==null||typeof m==ub.E&&!r.EV(m,0);if(jsx3.$A.is(m))O=O||m[0]==ub.F&&m[1]>2||m[0]==ub.G||m[0]==ub.H;if(O){var
Qa=o;while(r.EV(g,Qa))Qa++;return g.substring(o,Qa);}else{for(var
D=0;D<b;D++)if(!r.EV(g,o+D))return ub.I;return g.substring(o,o+b);}};r.AZ=function(g,o,m,s,n,a){var
H=[];for(var
Ab=0;Ab<m.length;Ab++)H.push.apply(H,m[Ab]);var
hb=r.OX(g,o,H,s,n,a);hb[0]=hb[0]%m[0].length;return hb;};r.OX=function(l,j,k,n,s,h){var
ha=-1;var
Jb=0;if(!s)l=l.toLowerCase();for(var
hb=0;hb<k.length;hb++){var
U=0;var
gb=s?k[hb]:k[hb].toLowerCase();while(l.length>U&&gb.length>U&&l.charAt(j+U)==gb.charAt(U))U++;if(U>Jb){Jb=U;ha=hb;}}return [ha,Jb];};r.KN=function(g,p,n){var
rb=Number(g);if(!isNaN(rb)){n[p]=rb;return g.length;}else return -1;};r.EV=function(a,k){var
_a=a.charCodeAt(k);return _a>=48&&_a<=57;};e.init=function(k,o){this.t6=k;this.sC=null;this.ZX=o||jsx3.System.getLocale();this.Jy();};e.getLocale=function(){return this.ZX;};e.setLocale=function(q){this.ZX=q;};e.getTimeZoneOffset=function(b){return this.sC!=null?this.sC:-1*(b||new
Date()).getTimezoneOffset();};e.setTimeZoneOffset=function(n){this.sC=n;};e.pu=function(j){return (jsx3.System.getLocaleProperties(this.ZX)).get(j);};e.Jy=function(){var
ja=ub.J;var
Gb=[];this.jC=Gb;var
E=this.t6;var
ib=E.length;var
aa=0;var
t=[];var
O=ub.K;while(aa<ib){var
L=E.charAt(aa);if(L==ja){var
ea=E.indexOf(ja,aa+1);if(ea==aa+1){t[t.length]=ja;aa=aa+2;}else if(ea>=0){t[t.length]=E.substring(aa+1,ea);aa=ea+1;}else throw new
jsx3.Exception(jsx3._msg(ub.L,aa,this));}else if(r.tN[L]){var
Ib=1;while(E.charAt(aa+Ib)==L)Ib++;var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}Gb[Gb.length]=[L,Ib];aa=aa+Ib;}else if(L.match(O)){throw new
jsx3.Exception(jsx3._msg(ub.M,aa,E));}else{O.lastIndex=aa+1;if(O.exec(E)){t[t.length]=E.substring(aa,O.lastIndex-1);aa=O.lastIndex-1;}else{t[t.length]=E.substring(aa);break;}}}var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}};e.format=function(f){if(!(f instanceof Date)){if(!isNaN(f)){f=new
Date(Number(f));}else f=new
Date(f);if(isNaN(f))throw new
jsx3.IllegalArgumentException(ub.N,f);}var
da=new
Array(this.jC.length);var
pb=new
Date();pb.setTime(f.getTime()+(this.getTimeZoneOffset(f)+f.getTimezoneOffset())*1000*60);for(var
B=0;B<this.jC.length;B++){var
La=this.jC[B];if(jsx3.$A.is(La)){var
Ia=La[0];var
jb=La[1];da[B]=r.tN[Ia](pb,jb,this);}else da[B]=La;}return da.join(ub.s);};e.parse=function(q){var
ia=new
Date();ia.setTime(0);var
B=0;var
pa={};for(var
Lb=0;Lb<this.jC.length;Lb++){var
oa=this.jC[Lb];var
ab=-1;if(jsx3.$A.is(oa)){ab=r.UM[oa[0]](this,q,B,oa[1],ia,this.jC[Lb+1],pa);}else ab=r.PD(q,B,oa);if(ab<0)throw new
jsx3.Exception(jsx3._msg(ub.O,q,this));B=B+ab;}if(pa.y!=null)ia.setUTCFullYear(pa.y);if(pa.bc)ia.setUTCFullYear(1-ia.getUTCFullYear());if(pa.M!=null)ia.setUTCMonth(pa.M);if(pa.d!=null)ia.setUTCDate(pa.d);if(pa.hours24){ia.setUTCHours(pa.hours24);}else if(pa.hours12){var
E=pa.hours12;if(pa.pm)E=E+12;ia.setUTCHours(E);}if(pa.m!=null)ia.setUTCMinutes(pa.m);if(pa.s!=null)ia.setUTCSeconds(pa.s);if(pa.S!=null)ia.setUTCMilliseconds(pa.S);if(pa.timezone!=null){ia.setTime(ia.getTime()-pa.timezone*1000*60);}else ia.setTime(ia.getTime()-this.getTimeZoneOffset(ia)*1000*60);if(isNaN(ia.getTime()))throw new
jsx3.Exception(jsx3._msg(ub.P,q,this));return ia;};e.getFormat=function(){return this.t6;};e.toString=function(){return this.t6;};});jsx3.Class.defineClass("jsx3.util.MessageFormat",null,null,function(k,j){var
ub={a:"{",b:"}",c:"string",d:"number",e:"null",f:"",g:"'",h:"msfmt.sq",i:"msfmt.bracket",j:"getDateInstance",k:"getTimeInstance",l:"getDateTimeInstance",m:",",n:"msfmt.bad_ind",o:"short",p:"medium",q:"long",r:"full",s:"datetime",t:"integer",u:"percent",v:"currency",w:"msfmt.bad_type"};var
Ea=jsx3.util.NumberFormat;var
L=jsx3.util.DateFormat;j.init=function(d,l){this.t6=d;this.ZX=l||jsx3.System.getLocale();this.xI();};j.getLocale=function(){return this.ZX;};j.setLocale=function(f){this.ZX=f;this.xI();};j.format=function(b){var
t=new
Array(this.jC.length);var
Da=arguments[0] instanceof Array?arguments[0]:arguments;for(var
w=0;w<t.length;w++){var
Ta=this.jC[w];if(jsx3.$A.is(Ta)){var
Db=Ta[0];var
Ha=Ta[1];var
ya=Da[Db];if(Db>=Da.length){t[w]=ub.a+Db+ub.b;}else if(Ha!=null){t[w]=Ha.format(ya);}else if(typeof ya==ub.c){t[w]=ya;}else if(typeof ya==ub.d&&Ea){if(!this.qK)this.qK=Ea.getNumberInstance(this.ZX);t[w]=this.qK.format(ya);}else if(ya==null){t[w]=ub.e;}else if(ya instanceof Date&&L){t[w]=(L.getDateTimeInstance(1,1,this.ZX)).format(ya);}else t[w]=ya.toString();}else t[w]=this.jC[w];}return t.join(ub.f);};j.xI=function(){var
fb=ub.g;var
va=[];this.jC=va;var
Bb=this.t6;var
ya=Bb.length;var
sb=0;var
w=false;var
Ya=[];while(sb<ya){var
Ka=Bb.indexOf(fb,sb);var
Lb=Bb.indexOf(ub.a,sb);if(Ka>=0&&(Ka<Lb||Lb<0)){if(Ka>sb)Ya[Ya.length]=Bb.substring(sb,Ka);var
Ga=Bb.indexOf(fb,Ka+1);if(Ga==Ka+1){Ya[Ya.length]=fb;sb=Ga+1;}else if(Ga>=0){Ya[Ya.length]=Bb.substring(Ka+1,Ga);sb=Ga+1;}else throw new
jsx3.Exception(jsx3._msg(ub.h,Ka,this));}else if(Lb>=0){if(Lb>sb)Ya[Ya.length]=Bb.substring(sb,Lb);va[va.length]=Ya.join(ub.f);Ya.splice(0,Ya.length);sb=Lb+1;var
ua=[];while(true){var
Ib=Bb.charAt(sb);if(Ib==ub.f)throw new
jsx3.Exception(jsx3._msg(ub.i,ya-ua.length-1,this));if(Ib==fb){if(Bb.charAt(sb+1)==fb){ua[ua.length]=Ib;sb=sb+2;}else{w=!w;sb=sb+1;}}else if(w){ua[ua.length]=Ib;sb++;}else if(Ib==ub.b){sb++;break;}else{ua[ua.length]=Ib;sb++;}}va[va.length]=this.IS(ua.join(ub.f));}else{Ya[Ya.length]=Bb.substring(sb);break;}}var
la=Ya.join(ub.f);if(la.length>0)va[va.length]=la;};k.hR={date:ub.j,time:ub.k,datetime:ub.l};j.IS=function(s){var
nb=s.split(ub.m);var
xb=Number(nb[0]);if(isNaN(xb))throw new
jsx3.Exception(jsx3._msg(ub.n,s,this));if(nb.length>1){var
mb=nb[1];var
X=(nb.slice(2)).join(ub.m);if(k.hR[mb]){if(!L)return [xb,null];var
yb=k.hR[mb];var
Aa=null;if(X==ub.o)Aa=1;else if(X==ub.p)Aa=2;else if(X==ub.q)Aa=3;else if(X==ub.r)Aa=4;if(Aa!=null||jsx3.util.strEmpty(X))return [xb,mb==ub.s?L[yb](Aa,Aa,this.ZX):L[yb](Aa,this.ZX)];return [xb,new
L(X,this.ZX)];}else if(mb==ub.d){if(!Ea)return [xb,null];if(jsx3.util.strEmpty(X))return [xb,Ea.getNumberInstance(this.ZX)];else if(X==ub.t)return [xb,Ea.getIntegerInstance(this.ZX)];else if(X==ub.u)return [xb,Ea.getPercentInstance(this.ZX)];else if(X==ub.v)return [xb,Ea.getCurrencyInstance(this.ZX)];else return [xb,new
Ea(X,this.ZX)];}else throw new
jsx3.Exception(jsx3._msg(ub.w,s,this));}else return [xb,null];};j.toString=function(){return this.t6;};});jsx3.Package.definePackage("jsx3.html",function(r){var
ub={A:"media",B:"screen",C:"<",D:' xmlns="',E:'"',F:" ",G:'="',H:"/>",I:">",J:"</",K:"<![CDATA[",L:"]]>",M:"&",N:";",O:"<!--",P:"-->",Q:"html.set_outer",R:"beforeend",S:"beforebegin",T:"html.adj",U:"opacity:",V:"UniversalXPConnect",W:"@mozilla.org/widget/clipboard;1",X:"@mozilla.org/widget/transferable;1",Y:"text/unicode",Z:"@mozilla.org/supports-string;1",_:"jsx:///images/icons/h.png",a:"",aa:"jsx:///images/icons/v.png",b:"overflow:hidden;",ba:"background-image:url(",c:"body",ca:");",d:'<input type="text" id="_jsx3_html_b1" style="position:absolute;top:0px;left:-120px;width:100px;height:30px;padding:8px;margin:0px;"/>',da:"_jsx_",e:"beforeEnd",ea:"disable-output-escp",f:"_jsx3_html_b1",fa:/&lt;/g,g:'<div id="_jsx3_html_b2" style="position:absolute;top:0px;left:-116px;width:100px;height:24px;padding:8px;"></div>',ga:/&gt;/g,h:"_jsx3_html_b2",ha:/&quot;/g,i:"string",ia:/&amp;/g,j:/^<([^\s]*)([\s\S]*)\/>$/i,ja:/&([a-zA-Z_]+);/g,k:"<$1$2></$1>",ka:"class",l:"_scrollTop",la:/<span class=\"disable-output-escp\">([\s\S]*?)<\/span>/g,m:"_scrollLeft",ma:"&#",n:"span",na:"jsx_image_loader",o:"div",oa:"none",p:/^on/,pa:"_",q:"function",qa:"img",r:"event",ra:"alt",s:"head",sa:"id",t:"undefined",ta:"src",u:"http://www.w3.org/1999/xhtml",ua:"unshift",v:"style",va:"push",w:" {",wa:/\//g,x:"}",xa:/\s+/g,y:"type",z:"text/css"};var
kb=jsx3.gui.Event;r.MODE_IE_QUIRKS=0;r.MODE_FF_QUIRKS=1;r.MODE_IE_STRICT=2;r.MODE_FF_STRICT=3;r._d=ub.a;r.co=ub.b;r.getMode=function(g){if(r.XE==null){var
P=g!=null?g.ownerDocument:document;var
pa=g||(document.getElementsByTagName(ub.c))[0];r.XE=0;var
ua=ub.d;jsx3.html.insertAdjacentHTML(pa,ub.e,ua);var
wa=P.getElementById(ub.f);if(wa.offsetHeight!=30){r.XE=jsx3.CLASS_LOADER.IE?2:3;}else{var
db=ub.g;jsx3.html.insertAdjacentHTML(pa,ub.e,db);var
W=P.getElementById(ub.h);if(parseInt(W.offsetWidth)>100)r.XE=1;pa.removeChild(W);}pa.removeChild(wa);}return r.XE;};r.emptyToClosed=function(c){return typeof c==ub.i?c.replace(ub.j,ub.k):c;};r.restoreScrollPosition=function(i){jsx3.sleep(function(){if(i)jsx3.html.findElements(i,function(h){if(h&&h.nodeType==1){if(h._scrollTop){h.scrollTop=h._scrollTop;delete h[ub.l];}if(h._scrollLeft){h.scrollLeft=h._scrollLeft;delete h[ub.m];}}},true,true,false,true);});};r.persistScrollPosition=function(j){if(j)jsx3.html.findElements(j,function(h){if(h&&h.nodeType==1){if(h.scrollTop)h._scrollTop=h.scrollTop;if(h.scrollLeft)h._scrollLeft=h.scrollLeft;}},true,true,false,true);};r._tn=function(a){return (a.nodeName||a.tagName||ub.a).toLowerCase();};r.scrollIntoView=function(p,d,e,i){var
H=p.parentNode;if(e==null)e=0;if(i==null)i=0;while(H!=null){var
Bb=r._tn(H);if(Bb==ub.n||Bb==ub.o){var
ma=r.getRelativePosition(H,p);var
Mb=H.scrollLeft,ia=H.scrollTop;var
T=Mb,ba=ia;ma.L+=Mb;ma.T+=ia;if(H.clientWidth+T<=ma.L){T=ma.L+p.offsetWidth-H.clientWidth+e;}else if(e&&H.clientWidth+T<ma.L+p.offsetWidth)T=ma.L+p.offsetWidth-H.clientWidth+e;if(T>=ma.L+p.offsetWidth){T=ma.L-e;}else if(e&&T>ma.L)T=ma.L-e;if(H.clientHeight+ba<=ma.T){ba=ma.T+p.offsetHeight-H.clientHeight+i;}else if(i&&H.clientHeight+ba<ma.T+p.offsetHeight)ba=ma.T+p.offsetHeight-H.clientHeight+i;if(ba>=ma.T+p.offsetHeight){ba=ma.T-i;}else if(i&&ba>ma.T)ba=ma.T-i;if(T!=Mb)H.scrollLeft=T;if(ba!=ia)H.scrollTop=ba;}if(H==d)break;H=H.parentNode;}};r.getScrollSizeOffset=function(k,h){return 0;};r.addEventListener=function(j,f,k){f=f.replace(ub.p,ub.a);j.addEventListener(f,typeof k==ub.q?k:new
Function(ub.r,k),false);};r.removeEventListener=function(s,p,b){p=p.replace(ub.p,ub.a);s.removeEventListener(p,b,false);};r.removeStyle=function(c,m){c.style.removeProperty(m);};r._FOCUSABLE={input:true,textarea:true,select:true,body:true,a:true,img:true,button:true,frame:true,iframe:true,object:true};r.isFocusable=function(b){return b.focus!=null&&(parseInt(b.tabIndex)>=0||r._FOCUSABLE[r._tn(b)]);};r.createRule=function(g,d,o){if(!o)o=document;var
wb=(o.getElementsByTagName(ub.s))[0];var
I=typeof o.createElementNS!=ub.t?o.createElementNS(ub.u,ub.v):o.createElement(ub.v);var
ib=o.createTextNode(g+ub.w+d+ub.x);I.appendChild(ib);I.setAttribute(ub.y,ub.z);I.setAttribute(ub.A,ub.B);wb.appendChild(I);};r.getRuleByName=function(p){var
u=document.styleSheets;for(var
yb=0;yb<u.length;yb++){var
sb=u[yb];for(var
lb=0;lb<sb.cssRules.length;lb++)if(sb.cssRules[lb].selectorText==p)return sb.cssRules[lb];}return null;};r.getOuterHTML=function(e){if(window.SVGElement&&e instanceof SVGElement){return (new
XMLSerializer()).serializeToString(e);}else{var
Sa=[];switch(e.nodeType){case 1:Sa[Sa.length]=ub.C+r._tn(e);if(e.namespaceURI)Sa[Sa.length]=ub.D+e.namespaceURI+ub.E;for(var
bb=0;bb<e.attributes.length;bb++){var
X=e.attributes.item(bb);if(X.nodeValue!=null)Sa[Sa.length]=ub.F+X.nodeName+ub.G+X.nodeValue+ub.E;}if(e.childNodes.length==0)Sa[Sa.length]=ub.H;else Sa[Sa.length]=ub.I+e.innerHTML+ub.J+r._tn(e)+ub.I;break;case 3:Sa[Sa.length]=e.nodeValue;break;case 4:Sa[Sa.length]=ub.K+e.nodeValue+ub.L;break;case 5:Sa[Sa.length]=ub.M+e.nodeName+ub.N;break;case 8:Sa[Sa.length]=ub.O+e.nodeValue+ub.P;break;default:if(e.childNodes)for(var
ma=0;ma<e.childNodes.length;ma++)Sa.push(r.getOuterHTML(e.childNodes[ma]));break;}return Sa.join(ub.a);}};r.setOuterHTML=function(o,g){if(window.SVGElement&&o instanceof SVGElement){if(!g){o.parentNode.removeChild(o);}else{var
E=o.ownerDocument.createRange();E.setStartBefore(o);var
qa=E.createContextualFragment(g);o.parentNode.replaceChild(qa,o);}}else try{var
E=o.ownerDocument.createRange();E.setStartBefore(o);var
qa=E.createContextualFragment(g);o.parentNode.replaceChild(qa,o);}catch(Kb){var
ba=typeof g==ub.i?g.substring(0,50):g;throw new
jsx3.Exception(jsx3._msg(ub.Q,o,ba),jsx3.NativeError.wrap(Kb));}};r.removeNode=function(l){l.parentNode.removeChild(l);};r.setInnerText=function(h,i){for(var
lb=h.childNodes.length-1;lb>=0;lb--)h.removeChild(h.childNodes[lb]);h.appendChild(h.ownerDocument.createTextNode(i));};r.insertAdjacentHTML=function(a,g,l){if(g.toLowerCase()==ub.R){var
P=a.ownerDocument.createRange();P.setStartAfter(a);var
za=P.createContextualFragment(l);a.appendChild(za);return l;}else if(g.toLowerCase()==ub.S){var
P=a.ownerDocument.createRange();P.setStartBefore(a);var
za=P.createContextualFragment(l);a.parentNode.insertBefore(za,a);return l;}else throw new
jsx3.Exception(jsx3._msg(ub.T,g));};r.updateCSSOpacity=function(o,n){o.style.opacity=n.toString();};r.getCSSOpacity=function(d){return ub.U+d+ub.N;};r.getRelativePosition=function(a,l){a=a||(l.ownerDocument.getElementsByTagName(ub.c))[0];var
A=l.ownerDocument;var
Qa,jb,Fa,va;if(!l.getBoundingClientRect){Qa=A.getBoxObjectFor(l);jb=A.getBoxObjectFor(a);Fa=Qa.screenX-jb.screenX+a.scrollLeft;va=Qa.screenY-jb.screenY+a.scrollTop;}else{Qa=l.getBoundingClientRect();jb=a.getBoundingClientRect();Fa=Qa.left-jb.left+Math.max(A.documentElement.scrollLeft,A.body.scrollLeft)-window.scrollX+a.scrollLeft;va=Qa.top-jb.top+Math.max(A.documentElement.scrollTop,A.body.scrollTop)-window.scrollY+a.scrollTop;}return {L:Fa,T:va,W:l.offsetWidth,H:l.offsetHeight};};r.copy=function(o){netscape.security.PrivilegeManager.enablePrivilege(ub.V);var
V=Components.classes[ub.W].createInstance(Components.interfaces.nsIClipboard);if(V){var
Sa=Components.classes[ub.X].createInstance(Components.interfaces.nsITransferable);if(Sa){Sa.addDataFlavor(ub.Y);var
Db=Components.classes[ub.Z].createInstance(Components.interfaces.nsISupportsString);Db.data=o;Sa.setTransferData(ub.Y,Db,o.length*2);var
x=Components.interfaces.nsIClipboard;V.setData(Sa,null,x.kGlobalClipboard);}}};r.paste=function(){netscape.security.PrivilegeManager.enablePrivilege(ub.V);var
Ua=Components.classes[ub.W].getService(Components.interfaces.nsIClipboard);if(Ua){var
z=Components.classes[ub.X].createInstance(Components.interfaces.nsITransferable);if(z){z.addDataFlavor(ub.Y);Ua.getData(z,Ua.kGlobalClipboard);var
lb={};var
Sa={};z.getTransferData(ub.Y,lb,Sa);if(lb)lb=lb.value.QueryInterface(Components.interfaces.nsISupportsString);return lb?lb.data.substring(0,Sa.value/2):null;}}return null;};r.OG=jsx3.resolveURI(ub._);r.R1=jsx3.resolveURI(ub.aa);r.getCSSFade=function(d){return r.getCSSPNG(d?r.OG:r.R1);};r.getCSSPNG=function(l){return ub.ba+l+ub.ca;};r.getJSXParent=function(c,l){while(c!=null){if(c.id&&c.id.indexOf(ub.da)==0){var
fb=l?l.getJSXById(c.id):jsx3.GO(c.id);if(fb!=null)return fb;}if(!c.parentNode){var
Bb=c.parentWindow||c.defaultView;c=Bb?Bb.frameElement:null;}else c=c.parentNode;}return null;};r.removeOutputEscaping=function(n){var
ia=n?[n]:[];while(ia.length>0){var
Ja=ia.shift();if(Ja.nodeName&&r._tn(Ja)==ub.n&&Ja.className==ub.ea){Ja.innerHTML=((((Ja.innerHTML.replace(ub.fa,ub.C)).replace(ub.ga,ub.I)).replace(ub.ha,ub.E)).replace(ub.ia,ub.M)).replace(ub.ja,r.KQ);Ja.removeAttribute(ub.ka);}else if(Ja.childNodes)ia.push.apply(ia,this.nodesToArray(Ja.childNodes));}};r.removeOutputEscapingSpan=function(a){return a.replace(ub.la,function(h,n){return ((((n.replace(ub.fa,ub.C)).replace(ub.ga,ub.I)).replace(ub.ha,ub.E)).replace(ub.ia,ub.M)).replace(ub.ja,r.KQ);});};r.j1={nbsp:160,copy:169,reg:174,deg:176,middot:183,le:8804,ge:8805,lt:60,gt:62,euro:8364,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,ldquo:8220,rdquo:8221,permil:8240};r.KQ=function(e,h){var
yb=r.j1[h];return yb?ub.ma+yb+ub.N:e;};r.YN=ub.na;r.loadImages=function(q){var
V=document.getElementById(r.YN);if(V==null){var
Ua=(document.getElementsByTagName(ub.c))[0];if(Ua){V=document.createElement(ub.o);V.id=r.YN;V.style.display=ub.oa;Ua.insertBefore(V,Ua.firstChild);}else return;}var
x=jsx3.$A.is(q)?q:arguments;for(var
Ta=0;Ta<x.length;Ta++){if(!x[Ta])continue;var
ra=jsx3.resolveURI(x[Ta]);var
sb=r.YN+ub.pa+ra;if(document.getElementById(sb)==null){var
Ha=document.createElement(ub.qa);Ha.setAttribute(ub.ra,ub.a);Ha.setAttribute(ub.sa,sb);Ha.setAttribute(ub.ta,ub.a+ra);V.appendChild(Ha);}}};r.updateRule=function(c,i,o){var
Oa=jsx3.html.getRuleByName(c);if(Oa)Oa.style[i]=o;};r.getElementById=function(a,m,h){return this.findElements(a,function(f){return f.id==m;},h,false,false,true);};r.getElementByTagName=function(j,h,q){h=h.toLowerCase();return this.findElements(j,function(m){return r._tn(m)==h;},q,false,false,true);};r.getElementsByTagName=function(c,a,j){a=a.toLowerCase();return this.findElements(c,function(k){return r._tn(k)==a;},j,true,false,true);};r.findElements=function(c,i,j,o,m,e){var
ja=j?ub.ua:ub.va;var
ia=o?[]:null;var
Ia=e?[c]:this.nodesToArray(c.childNodes);while(Ia.length>0){var
nb=Ia.shift();if(i.call(null,nb))if(o)ia[ia.length]=nb;else return nb;if(!m)Ia[ja].apply(Ia,this.nodesToArray(nb.childNodes));}return ia;};r.getElmUpByTagName=function(k,s,d){return r.findElementUp(k,function(p){return r._tn(p)==s;},d);};r.findElementUp=function(b,s,n){var
V=b.ownerDocument.documentElement;var
R=n?b:b.parentNode;while(R!=null){if(s.call(null,R))return R;if(R==V)break;R=R.parentNode;}return null;};r.selectSingleElm=function(h,s){var
wb=1,ob=arguments;if(arguments.length==2)if(typeof s==ub.i){wb=0;ob=s.split(ub.wa);}else if(jsx3.$A.is(s)){wb=0;ob=s;}var
Ba=h;for(var
D=wb;Ba!=null&&D<ob.length;D++){var
Xa=ob[D];if(!isNaN(Xa)){var
yb=Number(Xa);var
Da=Ba.childNodes.length;var
E=0,Ma=0;for(;E<Da&&Ma<yb;E++)if(Ba.childNodes[E].nodeType==1)Ma++;Ba=Ba.childNodes[E];}else throw new
jsx3.Exception();}return Ba;};r.nodesToArray=function(p){var
t=new
Array(p.length);for(var
Ba=0;Ba<p.length;Ba++)t[Ba]=p[Ba];return t;};r.getSelection=function(n){return new
r.Selection(n);};r.focusNext=function(e,h){var
ua=e;while(ua.lastChild)ua=ua.lastChild;while(!r.isFocusable(ua)&&ua!=e)ua=ua.previousSibling||ua.parentNode;if(ua!=e||r.isFocusable(ua))if(ua.onfocus!=null){var
la=ua.onfocus;ua.onfocus=null;ua.focus();jsx3.sleep(function(){ua.onfocus=la;});}else ua.focus();};r.focusPrevious=function(q,o){var
jb=this.findElements(q,function(s){return r.isFocusable(s);},true,false,false,true);if(jb!=null)if(jb.onfocus!=null){var
bb=jb.onfocus;jb.onfocus=null;jb.focus();jsx3.sleep(function(){jb.onfocus=bb;});}else jb.focus();};r.focus=function(p){try{if(p.focus)p.focus();}catch(Kb){}};r.addClass=function(j,n){var
sb=j.className;if(sb){if(!(jsx3.$A(sb.split(ub.xa))).contains(n))j.className=sb+ub.F+n;}else j.className=n;};r.removeClass=function(b,f){var
W=b.className;if(W&&W.indexOf(f)>=0){var
Z=jsx3.$A(W.split(ub.xa));if(Z.remove(f))b.className=Z.join(ub.F);}};});jsx3.Class.defineClass("jsx3.html.Selection",null,null,function(i,c){var
ub={a:"end"};var
ka=jsx3.html;c.init=function(h){this.dw={elm:h,start:h.selectionStart,end:h.selectionEnd,scrollt:h.scrollTop,scrolll:h.scrollLeft};};c.getStartIndex=function(){return this.dw.start;};c.getEndIndex=function(){return this.dw.end;};c.setRange=function(n,b){this.dw.start=n;this.dw.end=b;this.dw.elm.setSelectionRange(n,b);};c.getOffsetLeft=function(){if(this.dw.pos==null)this.dw.pos=jsx3.html.getRelativePosition(null,this.dw.elm);return this.dw.pos.L;};c.getOffsetTop=function(){if(this.dw.pos==null)this.dw.pos=jsx3.html.getRelativePosition(null,this.dw.elm);return this.dw.pos.T;};c.getText=function(){return this.dw.elm.value.substring(this.dw.start,this.dw.end);};c.setText=function(k){this.dw.elm.value=this.dw.elm.value.substring(0,this.dw.start)+k+this.dw.elm.value.substring(this.dw.end);this.dw.elm.setSelectionRange(this.dw.start,this.dw.start+k.length);this.dw.elm.end=this.dw.elm.selectionEnd;};c.insertCaret=function(h){this.dw.elm.focus();if(h==ub.a){this.dw.elm.setSelectionRange(this.dw.elm.end,this.dw.elm.end);}else throw new
jsx3.Exception();this.dw.elm.scrollTop=this.dw.scrollt;this.dw.elm.scrollLeft=this.dw.scrolll;};});jsx3.Class.defineClass("jsx3.app.Cache",null,[jsx3.util.EventDispatcher],function(c,l){var
ub={a:"remove",b:"add",c:"change",d:"http://xsd.tns.tibco.com/gi/cache",e:'<loading xmlns="',f:'"/>',g:'<timeout xmlns="',h:'<error xmlns="',i:"*",j:"p1",k:"_jsxkt",l:"response",m:"timeout",n:"error",o:"load.",p:"load",q:"strId",r:"objDocument",s:"ty",t:"sJ"};var
yb=jsx3.xml.Document;c.REMOVE=ub.a;c.ADD=ub.b;c.CHANGE=ub.c;c.ASYNC_TIMEOUT=60000;c.XSDNS=ub.d;c.zt=(new
yb()).loadXML(ub.e+c.XSDNS+ub.f);c.Iw=(new
yb()).loadXML(ub.g+c.XSDNS+ub.f);c.OZ=(new
yb()).loadXML(ub.h+c.XSDNS+ub.f);l.init=function(){this.ty={};this.sJ=[];};l.addParent=function(d){this.sJ.push(d);};l.clearById=function(j){var
Db=this.ty[j];if(Db){delete this.ty[j];this.Er(Db);this.publish({subject:j,action:ub.a});this.publish({subject:ub.c,id:j,action:ub.a});return Db.kD;}};l.isSystem=function(d){return false;};l.clearByTimestamp=function(b){if(b instanceof Date)b=b.getTime();var
Nb=[];for(var Xa in this.ty){var
Cb=this.ty[Xa];if(Cb.PK<b){delete this.ty[Xa];this.Er(Cb);this.publish({subject:Xa,action:ub.a});Nb.push(Xa);}}if(Nb.length>0)this.publish({subject:ub.c,ids:Nb,action:ub.a});return Nb;};l.getDocument=function(o){if(this.ty[o]!=null)return this.ty[o].kD;for(var
F=0;F<this.sJ.length;F++){var
Qa=this.sJ[F].getDocument(o);if(Qa!=null)return Qa;}return null;};l.getOrOpenDocument=function(p,q,f){if(q==null)q=p.toString();return this.getDocument(q)||this.JD(p,q,f,false);};l.openDocument=function(k,r,b){return this.JD(k,r,b,false);};l.getOrOpenAsync=function(a,m,i){if(m==null)m=a.toString();return this.getDocument(m)||this.JD(a,m,i,true);};l.JD=function(j,d,e,a){if(e==null)e=yb.jsxclass;if(d==null)d=j.toString();var
rb=e.newInstance();rb.setAsync(a);if(a){var
Nb=rb;Nb.subscribe(ub.i,this,ub.j);Nb._jsxkt=d;Nb.load(j,c.ASYNC_TIMEOUT);rb=c.zt.cloneDocument();rb.Rr=Nb;}else rb.load(j);this.setDocument(d,rb);return rb;};l.ic=function(a,d){if(this.ty[a])this.ty[a].kD=d;else this.ty[a]={kD:d,PK:(new
Date()).getTime()};};l.Er=function(g){var
u=g.kD.Rr;if(u){u.unsubscribe(ub.i,this);u.abort();}};l.p1=function(s){var
Fa=s.target;var
db=s.subject;var
u=Fa._jsxkt;delete Fa[ub.k];Fa.unsubscribe(ub.i,this);if(this.ty){var
la;if(db==ub.l){la=Fa;}else if(db==ub.m){la=c.Iw.cloneDocument();}else if(db==ub.n){la=c.OZ.cloneDocument();la.setAttribute(ub.n,(Fa.getError()).toString());}else return;this.setDocument(u,la);this.publish({subject:ub.o+u,action:ub.p,response:db,id:u});}};l.setDocument=function(o,g){if(o==null)throw new
jsx3.IllegalArgumentException(ub.q,o);if(g==null)throw new
jsx3.IllegalArgumentException(ub.r,g);var
F={};F.PK=(new
Date()).getTime();F.kD=g;var
la=ub.b;var
Ga=this.ty[o];if(Ga){la=ub.c;this.Er(Ga);}this.ty[o]=F;this.publish({subject:o,action:la,id:o});this.publish({subject:ub.c,action:la,id:o});};l.getTimestamp=function(h){var
Q=this.ty[h];return Q!=null?Q.PK:null;};l.keys=function(){var
jb=[];for(var Ia in this.ty)jb[jb.length]=Ia;return jb;};l.destroy=function(){delete this[ub.s];delete this[ub.t];};});jsx3.Cache=jsx3.app.Cache;jsx3.Class.defineClass("jsx3.app.Properties",null,null,function(m,d){var
ub={a:"_global",b:"./record",c:"jsxid",d:"eval",e:"jsxtext",f:"1",g:"true",h:"props.eval",i:"load",j:"undefined",k:"strValue"};var
pb=jsx3.util.Logger.getLogger(m.jsxclass.getName());m.MC=ub.a;d.init=function(){this.sJ=[];this.ys=[];this.OE=[m.MC];this.nU={};this.nU[m.MC]={};this.AU={};this.sB=false;this.HO={};this.nR=false;};d.loadXML=function(e,b){var
F=new
jsx3.util.Timer(m.jsxclass,b||(e instanceof jsx3.xml.Document?e.getSourceURL():e.getNodeName()));if(b==null){b=m.MC;}else if(jsx3.util.arrIndexOf(this.OE,b)<0)this.OE.splice(1,0,b);var
sb=this.nU[b];if(sb==null)sb=this.nU[b]={};for(var
ea=e.selectNodeIterator(ub.b);ea.hasNext();){var
R=ea.next();var
pa=R.getAttribute(ub.c);var
eval=R.getAttribute(ub.d);var
Da=R.getAttribute(ub.e);if(eval==ub.f||eval==ub.g)try{Da=isNaN(Da)?jsx3.eval(Da):Number(Da);}catch(Kb){pb.warn(jsx3._msg(ub.h,pa,Da),jsx3.NativeError.wrap(Kb));}sb[pa]=Da;}this.sB=true;F.log(ub.i);};d.addParent=function(b){this.sJ.splice(0,0,b);b.ys.push(this);this.uR(true);};d.removeParent=function(a){var
oa=jsx3.util.arrIndexOf(this.sJ,a);if(oa>=0){this.sJ.splice(oa,1);a.RT(this);this.uR(true);}};d.RT=function(s){var
Ha=jsx3.util.arrIndexOf(this.ys,s);if(Ha>=0)this.ys.splice(Ha,1);};d.removeAllParents=function(){if(this.sJ.length>0){for(var
sa=0;sa<this.sJ.length;sa++)this.sJ[sa].RT(this);this.sJ=[];this.nR=false;this.HO={};}};d.getParents=function(){return this.sJ.concat();};d.containsKey=function(h){if(this.sB)this.mO();return typeof this.AU[h]!=ub.j;};d.getKeys=function(){if(this.sB)this.mO();var
x=[];for(var da in this.AU)x[x.length]=da;return x;};d.get=function(g){if(this.sB)this.mO();if(typeof this.AU[g]!=ub.j)return this.AU[g];if(this.nR)this.kp();return this.HO[g];};d.set=function(s,h){if(typeof h==ub.j)throw new
jsx3.IllegalArgumentException(ub.k,h);this.nU[m.MC][s]=h;this.AU[s]=h;this.uR();};d.remove=function(f){for(var aa in this.nU)delete this.nU[aa][f];delete this.AU[f];this.uR();};d.mO=function(){this.sB=false;var
xa=this.AU={};for(var
ca=this.OE.length-1;ca>=0;ca--){var
fa=this.nU[this.OE[ca]];for(var ab in fa)xa[ab]=fa[ab];}};d.kp=function(){this.nR=false;var
X=this.HO={};for(var
Oa=this.sJ.length-1;Oa>=0;Oa--){var
Bb=this.sJ[Oa];if(Bb.sB)Bb.mO();if(Bb.nR)Bb.kp();var
Ab=Bb.AU;var
rb=Bb.HO;for(var da in rb)X[da]=rb[da];for(var da in Ab)X[da]=Ab[da];}};d.uR=function(b){var
Ta=b?[this]:this.ys.concat();while(Ta.length>0){var
Ba=Ta.shift();if(!Ba.nR){Ba.nR=true;Ta.push.apply(Ta,Ba.ys);}}};});jsx3.Class.defineClass("jsx3.app.PropsBundle",jsx3.app.Properties,null,function(e,j){var
ub={a:".",b:"::",c:"propbn.err_key",d:"",e:"*",f:"propbn.err_file",g:"/data/locale",h:"key",i:"Parent of bundle ",j:" (",k:") is null.",l:"locales",m:/\s*,\s*/};var
Na=jsx3.util.Logger.getLogger(e.jsxclass.getName());var
Ja=jsx3.util.Job;e.w6=ub.a;e.xS=-1;e.uv={};e.q9={};e.Ky=new
jsx3.util.JobGraph();e.FZ=new
e();e.getProps=function(g,m,i){if(!m)m=jsx3.System.getLocale();var
G=g+ub.b+m;if(!e.q9[G]){var
La=e.Ky;if(La.node(g))return e.FZ;var
pb=new
Ja(g);e.K4(g,m,i,false,pb);}var
Aa=e.q9[G];if(Aa==e.xS)throw new
jsx3.Exception(jsx3._msg(ub.c,g,m));return Aa;};e.getPropsFT=function(r,p,f){try{return e.getProps(r,p,f);}catch(Kb){}var
C=jsx3.util.Locale.ROOT;if(!p||!p.equals(C))try{return e.getProps(r,C,f);}catch(Kb){}return new
e();};e.getPropsAsync=function(g,k,s,i){if(!k)k=jsx3.System.getLocale();var
H=g+ub.b+k;var
A=new
Ja(null,function(){var
ya=e.q9[H];s(ya!=e.xS?ya:null);});e.K4(g,k,i,true,A);};e.K4=function(b,h,n,k,o){var
La=e.Ky;b=b.toString();La.pause();La.add(o);var
Eb=o;var
L=h.getSearchPath();for(var
Ia=0;Ia<L.length;Ia++){var
la=L[Ia];var
kb=b+ub.b+la;if(e.q9[kb])break;var
_a=La.node(kb);if(!_a){_a=e.OH(kb,b,la,n,k);La.add(_a);_a.add(Eb);}else{_a.add(Eb);break;}Eb=_a;}La.start();};e.OH=function(b,f,r,c,g){return new
Ja(b,function(){var
va=this;e.TU(b,f,r,c,g,function(){va.finish();});return 0;});};e.TU=function(d,q,i,r,o,l){var
mb=e.q9,Qa=e.uv;var
db=false,Oa=false;if(mb[d]){Oa=true;}else if(i.toString()==ub.d){db=true;}else if(!Qa[q][i]){var
wb=i.getSearchPath();for(var
ya=1;!mb[d]&&ya<wb.length;ya++){var
O=wb[ya];var
_=q+ub.b+O;mb[d]=mb[_];}Oa=true;}if(Oa){l();return;}var
wa;if(db){Qa[q]={};wa=q;}else{var
Ua=q.lastIndexOf(ub.a);wa=q.substring(0,Ua)+e.w6+i+q.substring(Ua);}var
x=null,za=false;if(r)x=r.getDocument(wa);if(x){za=true;r=null;}else{x=new
jsx3.xml.Document();if(o){x.setAsync(true);x.subscribe(ub.e,e,function(n){e.wZ(d,q,i,r,n.target,l);});}else za=true;x.load(wa);}if(za)e.wZ(d,q,i,r,x,l);};e.wZ=function(g,d,a,l,i,r){var
V=i.getSourceURL();if(!i.hasError()){if(l&&V)l.setDocument(V,i);e.yB(d,i);e.jB(d,a,i);}else{Na.error(jsx3._msg(ub.f,V,i.getError()));e.q9[g]=e.xS;}r();};e.jB=function(c,i,m){for(var
La=m.selectNodeIterator(ub.g);La.hasNext();){var
la=La.next();var
xb=la.getAttribute(ub.h)||ub.d;e.ap(c,xb,la);e.uv[c][xb]=true;}if(!e.q9[c+ub.b+i])e.ap(c,i.toString(),m);};e.ap=function(h,c,r){var
Pa=e.q9;var
Ga=new
e();Ga.loadXML(r);Ga.nM=h;Ga.ZX=jsx3.util.Locale.valueOf(c);Pa[h+ub.b+c]=Ga;if(c){var
Va=Ga.ZX.getSearchPath();for(var
ab=1;ab<Va.length;ab++){var
Ca=Pa[h+ub.b+Va[ab]];if(Ca){Ga.addParent(Ca);return;}}Na.error(ub.i+h+ub.j+c+ub.k);}};e.yB=function(g,q){var
la=q.getAttribute(ub.l);if(e.uv[g]==null)e.uv[g]={};if(la!=null){var
Aa=la.split(ub.m);for(var
z=0;z<Aa.length;z++)if(Aa[z])e.uv[g][Aa[z]]=true;}};j.getLocale=function(){return this.ZX;};j.getPath=function(){return this.nM;};e.clearCache=function(a,g){if(a){delete e.uv[a];var
Ea=a+ub.b;for(var H in e.q9)if(H.indexOf(Ea)==0)delete e.q9[H];if(g){var
Q=g.keys();for(var
Ra=0;Ra<Q.length;Ra++)if(Q[Ra].indexOf(a)==0)g.clearById(Q[Ra]);}}else{e.uv={};e.q9={};}};});jsx3.Class.defineClass("jsx3.lang.System",null,null,function(g,o){var
ub={a:"_",b:"jsx:///locale/locale.xml",c:"",d:" ",e:"_jsx_",f:"namespace",g:"apppathrel",h:"apppath",i:"3.9.1_971db",j:/\d/,k:"3.9.1"};var
jb=jsx3.app.PropsBundle;g.LJSS=new
jsx3.app.Properties();g.JSS=new
jsx3.app.Properties();g.JSS.addParent(g.LJSS);g.m6={};g.getProperty=function(r){return g.JSS.get(r);};g.getLocale=function(){if(g.ZX==null&&jsx3.util.Locale){var
ba=jsx3.app.Browser.getLocaleString();if(ba){var
Eb=ba.split(ub.a);g.ZX=new
jsx3.util.Locale(Eb[0],Eb[1]);}else g.ZX=jsx3.util.Locale.US;}return g.ZX;};g.setLocale=function(l){if(l!=g.ZX){g.JSS.removeParent(g.getLocaleProperties());g.ZX=l;g.JSS.addParent(g.getLocaleProperties());}};g.reloadLocalizedResources=function(){if(jb){var
Nb=g.LJSS.getParents();g.LJSS.removeAllParents();for(var
Bb=0;Bb<Nb.length;Bb++)g.LJSS.addParent(jb.getPropsFT(Nb[Bb].getPath(),g.getLocale(),jsx3.getSystemCache()));}};g.uS=jsx3.resolveURI(ub.b);g.getLocaleProperties=function(j){return jb.getPropsFT(g.uS,j,jsx3.getSystemCache());};g.getMessage=function(r,i){var
Y=g.LJSS.get(r);var
x=ub.c;if(arguments.length>1){var
z=jsx3.Method.argsAsArray(arguments,1);if(Y!=null&&jsx3.util.MessageFormat){try{var
ka=new
jsx3.util.MessageFormat(Y);return ka.format(z);}catch(Kb){}}else x=ub.d+z.join(ub.d);}if(Y==null)Y=r;return Y+x;};g.GO=function(r,d){var
mb=null;if(r!=null)if(r.indexOf(ub.e)==0){var
eb=jsx3.app.DOM.getNamespaceForId(r);if(d&&d!=eb)return null;if(g.m6[eb])mb=g.m6[eb].getJSXById(r);}else if(d){if(g.m6[d])mb=g.m6[d].getJSXByName(r);}else for(var Ha in g.m6)if((mb=g.m6[Ha].getJSXByName(r))!=null)return mb;return mb;};g.getApp=function(s){return g.m6[s];};g.getAllApps=function(){var
Gb=[];for(var bb in g.m6)Gb.push(g.m6[bb]);return Gb;};g.registerApp=function(p){var
vb=p.getEnv(ub.f);jsx3.lang.setVar(vb,p);g.m6[vb]=p;};g.deregisterApp=function(p){var
ha=p.getEnv(ub.f);var
Lb=jsx3.lang.getVar(ha);if(p==Lb)jsx3.lang.setVar(p.getEnv(ub.f),null);if(g.m6[ha]==p)delete g.m6[ha];};g.activateApp=function(q){jsx3.registerApp(q);};g.getAppByPath=function(f){for(var H in g.m6){var
kb=g.m6[H];if(kb.getEnv(ub.g)==f||kb.getEnv(ub.h)==f)return kb;}return null;};g.B4=[];g.Wz={};g.registerAddin=function(b,a){jsx3.lang.setVar(b,a);g.B4.push(a);g.Wz[a.getKey()]=a;};g.getAddins=function(){return g.B4.concat();};g.getAddin=function(i){return g.Wz[i];};g.getVersion=function(){var
ca=ub.i;return ca.match(ub.j)?ca:ub.k;};});jsx3.GO=jsx3.lang.System.GO;jsx3.getApp=jsx3.lang.System.getApp;jsx3.registerApp=jsx3.lang.System.registerApp;jsx3.activateApp=jsx3.lang.System.activateApp;jsx3.deregisterApp=jsx3.lang.System.deregisterApp;jsx3.getVersion=jsx3.lang.System.getVersion;jsx3.Class.defineClass("jsx3.app.DOM",null,[jsx3.util.EventDispatcher],function(e,q){var
ub={a:"change",b:"_jsx_",c:"_",d:"mH",e:"QH",f:""};e.Xz={};e.U4={};e.j6={};e.Z8=0;e.TYPEADD=0;e.TYPEREMOVE=1;e.TYPEREARRANGE=2;e.EVENT_CHANGE=ub.a;e.newId=function(d){var
la=e.D9(d);return ub.b+la+ub.c+(e.NU(la)).toString(36);};e.D9=function(m){if(e.U4[m]==null){var
Eb=(e.Z8++
).toString(36);e.U4[m]=Eb;e.j6[Eb]=m;}return e.U4[m];};e.NU=function(m){if(e.Xz[m]==null)e.Xz[m]=0;return ++e.Xz[m];};e.getNamespaceForId=function(i){var
G=i.substring(5,i.indexOf(ub.c,5));return e.j6[G];};q.init=function(){this.mH={};this.QH={};};q.destroy=function(){delete this[ub.d];delete this[ub.e];};q.get=function(d){return this.mH[d]||this.getByName(d);};q.getByName=function(i){var
Jb=this.QH[i];return Jb!=null?Jb.get(0):null;};e.l9=[];q.getAllByName=function(j){var
W=this.QH[j];return W!=null?W.toArray():e.l9;};q.getById=function(f){return this.mH[f];};q.add=function(b){this.mH[b.getId()]=b;var
gb=b.getName();if(gb!=null&&gb!==ub.f)if(this.QH[gb]==null)this.QH[gb]=jsx3.util.List.wrap([b]);else this.QH[gb].add(b,0);};q.remove=function(i){delete this.mH[i.getId()];var
ka=this.QH[i.getName()];if(ka!=null)ka.remove(i);};q.onNameChange=function(d,s){var
O=this.QH[s];if(O!=null)O.remove(d);var
ta=d.getName();if(ta!=null&&ta!==ub.f)if(this.QH[ta]==null)this.QH[ta]=jsx3.util.List.wrap([d]);else this.QH[ta].add(d,0);};q.onChange=function(f,l,g){this.publish({subject:ub.a,type:f,parentId:l,jsxId:g});};});jsx3.DOM=jsx3.app.DOM;jsx3.Class.defineClass("jsx3.app.Server",null,[jsx3.util.EventDispatcher,jsx3.net.URIResolver],function(o,a){var
ub={A:"@Solid Light",Aa:"height:",B:"GUIREF",Ba:"HEIGHT",C:"NAMESPACE",Ca:'<div id="',D:"JSXINVISIBLE",Da:'" style="position:',E:'<div class="jsx30block jsx30env">',Ea:'"></div>',F:"<b>Version:</b> ",Fa:"serv.err_paint",G:"3.9.1; build 971db",Ga:"onload",H:"<br/>",Ha:"serv.err_onload",I:"<b>XML Version:</b> ",Ia:"jsx3.app.Server.help.",J:"<b>System Locale:</b> ",Ja:"jsx3.app.Server.help",K:"<b>Browser:</b> ",Ka:"R9",L:"<b>Operating System:</b> ",La:"objectseturl",M:" (",Ma:"px",N:")",Na:"?",O:"<hr/>",Oa:"&",P:"<b>",Pa:"css",Q:"namespace",Qa:"jss",R:"</b>",Ra:"ljss",S:"<div>",Sa:"serv.err_jss",T:"<b>Path:</b> ",Ta:"xml",U:"version",Ua:"xsl",V:"</div>",Va:"script",W:"config.xml",Wa:"services",X:"JSX_SETTINGS",Xa:"jsx3.net.Service",Y:"serv.err_set",Ya:"strType",Z:"apppath",Za:"serv.err_unload",_:"onunload",_a:"includes",a:"inited",aa:"serv.err_onun",ab:"serv.err_badid",b:"help",ba:"jsx3.gui.Painted",bb:"=",c:"JSX",ca:"LIQUID",cb:"; expires=",d:"jsxsettings",da:"_jsxje",db:"; path=",e:/\/*$/,ea:"change",eb:"; domain=",f:"",fa:"keydown",fb:"; secure",g:"undefined",ga:"checkHotKeys",gb:"; ",h:"object",ha:"jsx3.gui.Alerts",hb:"jsx3.gui.Window",i:"/",ia:"BODYHOTKEYS",ib:"JSXWINDOWS",j:"JSXAPPS",ja:"C2",jb:"strName",k:"liquid",ka:"jsx3.app.Server.",kb:"serv.win_err",l:"eventsvers",la:"();",lb:"serv.win_notwin",m:"jsxversion",ma:"if (jsx3.EventHelp.isDragging()) jsx3.EventHelp.reset();",mb:"serv.win_name",n:"3.1",na:"OVERFLOW",nb:"3.2",o:"jsxabspath",oa:"overflow:auto;",ob:"apppathuri",p:"serv.no_ns",pa:"overflow:hidden;",pb:"apppathabs",q:"caption",qa:"POSITION",qb:"apppathrel",r:"cancelrightclick",ra:"relative",rb:"jsxapp",s:"return false;",sa:"absolute",sb:/\//g,t:"cancelerror",ta:"left:",tb:"!",u:"jsx3.gui.Block",ua:"LEFT",ub:/!/g,v:"JSXROOT",va:";",vb:"default_locale",w:"jsxbgcolor",wa:"top:",wb:"addins",x:"@Solid DarkShadow",xa:"TOP",xb:" ",y:"JSXBODY",ya:"width:",yb:":",z:"100%",za:"WIDTH",zb:"3.00.00"};jsx3.util.EventDispatcher.jsxclass.mixin(o);var
Pa=jsx3.gui.Event;var
Qa=jsx3.net.URIResolver;var
Sa=jsx3.app.Browser;var
ea=null;var
na=jsx3.util.Logger.getLogger(o.jsxclass.getName());o.Z_DIALOG=2;o.Z_DRAG=3;o.Z_MENU=4;o.INITED=ub.a;o.HELP=ub.b;o.TV=ub.c;o.TL=new
jsx3.util.List();a.JSXROOT=null;a.JSXBODY=null;a.Cache=null;a.ENVIRONMENT=null;a.DOM=null;a.JSS=null;a.init=function(m,h,p,r){this.DOM=new
jsx3.app.DOM();this.Cache=new
jsx3.app.Cache();this.Cache.addParent(jsx3.getSharedCache());if(r){if(r.jsxsettings){this._jsxkX=r.jsxsettings;delete r[ub.d];}var
U={};for(var W in r)U[W.toLowerCase()]=r[W];r=U;}else r={};this.ENVIRONMENT=r;r.apppath=m.replace(ub.e,ub.f);var
Va=this.getSettings();var
ba=Va.get();for(var W in ba){var
fa=W.toLowerCase();if(typeof r[fa]==ub.g&&typeof ba[W]!=ub.h)r[fa]=ba[W];}r.apppathuri=new
jsx3.net.URI(r.apppath+ub.i);if(r.jsxappbase)r.apppathuri=r.apppathuri.resolve(r.jsxappbase);var
S=r.apppath.indexOf(ub.j);if(S>=0)r.apppathrel=r.apppath.substring(S+"JSXAPPS".length+1);r.apppathabs=(Sa.getLocation()).resolve(r.apppathuri);if(r[ub.k]==null)r[ub.k]=true;if(r[ub.l]==null)r[ub.l]=3;if(r[ub.m]==null)r[ub.m]=ub.n;r.abspath=jsx3.getEnv(ub.o);r.guiref=h;r.namespace=r.jsxappns||r.namespace;if(r.namespace==null)throw new
jsx3.Exception(jsx3._msg(ub.p,m));if(h&&this.getEnv(ub.q))h.ownerDocument.title=this.getEnv(ub.q);if(h&&this.getEnv(ub.r))h.ownerDocument.oncontextmenu=new
Function(ub.s);if(this.getEnv(ub.t))jsx3.NativeError.initErrorCapture();o.TL.add(this);jsx3.registerApp(this);this.JSS=new
jsx3.app.Properties();this.LJSS=new
jsx3.app.Properties();this.JSS.addParent(this.LJSS);this.JSS.addParent(jsx3.System.JSS);o.publish({subject:o.INITED,target:this});if(p)this.paint();};a.cP=function(){jsx3.require(ub.u);ea=jsx3.gui.Block;if(this.JSXROOT)return;var
xb=this.JSXROOT=this._r(ub.v);xb.setDynamicProperty(ub.w,ub.x);xb.setRelativePosition(0);xb.setOverflow(3);xb.setAlwaysCheckHotKeys(true);xb.setIndex(1);var
C=this.JSXBODY=new
ea(ub.y,0,0,ub.z,ub.z,ub.f);C.setDynamicProperty(ub.w,ub.A);C.setRelativePosition(0);C.setZIndex(1);(C.setOverflow(3)).setIndex(0);xb.setChild(C);};a.onResize=function(){if(jsx3.CLASS_LOADER.IE){window.clearTimeout(this.resize_timeout_id);var
I=this;this.resize_timeout_id=window.setTimeout(function(){I.vM();},250);}else this.vM();};a.vM=function(){var
vb=this.getEnv(ub.B);if(vb)(this.getRootBlock()).Mc({left:0,top:0,parentwidth:vb.clientWidth,parentheight:vb.clientHeight},true);};a.getNextZIndex=function(s){if(this.sY==null){this.sY=[];this.sY[0]=0;this.sY[1]=1000;this.sY[o.Z_DIALOG]=5000;this.sY[o.Z_DRAG]=7500;this.sY[o.Z_MENU]=10000;this.sY[5]=25000;}return this.sY[s]++;};o.allServers=function(){return o.TL.toArray();};a._r=function(g){if(this._jsxje==null)this._jsxje=[];var
ab=new
ea(g,0,0,ub.z,ub.z,ub.f);ab._jsxoo=this.getEnv(ub.C);ab._jsxid=jsx3.app.DOM.newId(this.getEnv(ub.C));ab._jsxYn=this;this.DOM.add(ab);this._jsxje.push(ab);return ab;};a.getInvisibleRoot=function(){if(this.INVISIBLE==null)this.INVISIBLE=this._r(ub.D);return this.INVISIBLE;};a.getEnv=function(q){var
Mb=this.ENVIRONMENT;return Mb[q]||Mb[q.toLowerCase()];};o.C2=function(r){var
G=[ub.E];G.push(ub.F,ub.G,ub.H);G.push(ub.I,jsx3.getXmlVersion(),ub.H);G.push(ub.J,(jsx3.System.getLocale()).getDisplayName(),ub.H);G.push(ub.K,jsx3.CLASS_LOADER+ub.H);G.push(ub.L,jsx3.app.Browser.getSystem()+ub.M+navigator.userAgent+ub.N);G.push(ub.O);var
ua=null;var
Lb=o.allServers();for(var
x=0;x<Lb.length;x++){var
Va=Lb[x];G.push(ub.P,Va.getEnv(ub.Q),ub.R,ub.S);G.push(ub.T,Va.getAppPath(),ub.H);G.push(ub.F,Va.getEnv(ub.U),ub.H);G.push(ub.V);if(ua==null){ua=Va.getRootBlock();if(ua.getRendered()==null)ua=null;}}G.push(ub.V);G=G.join(ub.f);if(ua)ua.showSpy(G,Math.round((ua.getRendered()).clientWidth/2),Math.round((ua.getRendered()).clientHeight/2-100));else window.alert(G);};a.getSettings=function(){if(this._jsxkX==null){var
wa=(this.getCache()).getOrOpenDocument(jsx3.resolveURI(this.getAppPath()+ub.i+ub.W),ub.X);if(wa.hasError()){na.error(jsx3._msg(ub.Y,this,wa.getError()));wa=null;}this._jsxkX=new
jsx3.app.Settings(wa);}return this._jsxkX;};a.getAppPath=function(){return this.getEnv(ub.Z);};o.wM=function(q){return q instanceof jsx3.gui.WindowBar&&q.getType()==3;};a.getTaskBar=function(f){if(!jsx3.gui.WindowBar)return null;if(f==null)f=this.JSXROOT;return f.findDescendants(o.wM,false,false,false,true);};a.destroy=function(){var
Kb=this.getEnv(ub._);if(Kb)try{this.eval(Kb);}catch(Nb){na.error(jsx3._msg(ub.aa,this),jsx3.NativeError.wrap(Nb));}if(jsx3.Class.forName(ub.ba))jsx3.gui.Painted.Box.unregisterServer(this,this.getEnv(ub.ca));if(this.JSXROOT){var
Fb=this.JSXROOT.getRendered();if(Fb){if(Fb.parentNode.id==o.TV)Fb=Fb.parentNode;jsx3.html.removeNode(Fb);}}if(this._jsxje)for(var
Ya=0;Ya<this._jsxje.length;Ya++){var
G=this._jsxje[Ya];G.removeChildren();}delete this[ub.da];this.DOM.unsubscribeAllFromAll();this.DOM.destroy();this.Cache.unsubscribeAll(ub.ea);this.Cache.destroy();jsx3.deregisterApp(this);o.TL.remove(this);Pa.unsubscribe(ub.fa,this,ub.ga);this.ENVIRONMENT={};};a.paint=function(m){jsx3.require(ub.ha,ub.u);ea=jsx3.gui.Block;if(!jsx3.gui.Alerts.jsxclass.isAssignableFrom(o.jsxclass))o.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.html.getMode(this.getEnv(ub.B));this.cP();jsx3.gui.Painted.Box.registerServer(this,this.getEnv(ub.ca));if(this.getEnv(ub.ia))Pa.subscribe(ub.fa,this,ub.ga);var
Aa=ub.ja;this.registerHotKey(new
Function(ub.ka+Aa+ub.la),74,true,true,true);this.registerHotKey(new
Function(ub.ma),27,false,false,false);this._regHelpKey();var
hb=this.getEnv(ub.B);if(hb){var
Ba=ub.f;var
ya=this.getEnv(ub.na);if(ya==1){Ba=ub.oa;}else if(ya==2)Ba=ub.pa;var
I,mb=ub.f,ga=ub.f;if(this.getEnv(ub.qa)==0){I=ub.ra;}else{I=ub.sa;mb=ub.ta+this.getEnv(ub.ua)+ub.va;ga=ub.wa+this.getEnv(ub.xa)+ub.va;}var
u=ub.ya+this.getEnv(ub.za)+ub.va;var
Db=ub.Aa+this.getEnv(ub.Ba)+ub.va;hb.innerHTML=ub.Ca+o.TV+ub.Da+I+ub.va+Ba+mb+ga+u+Db+ub.Ea;hb=hb.lastChild;hb.className=jsx3.CLASS_LOADER.getCssClass();this.JSXROOT.pj({left:0,top:0,parentwidth:hb.clientWidth,parentheight:hb.clientHeight});if(hb)hb.innerHTML=this.JSXROOT.paint();}try{this.Ji(m);}catch(Kb){na.fatal(jsx3._msg(ub.Fa,this),jsx3.NativeError.wrap(Kb));}try{this.eval(this.getEnv(ub.Ga));}catch(Kb){na.fatal(jsx3._msg(ub.Ha,this),jsx3.NativeError.wrap(Kb));}};a._regHelpKey=function(){var
Ka=this.getDynamicProperty(ub.Ia+jsx3.app.Browser.getSystem())||this.getDynamicProperty(ub.Ja);if(Ka)this.registerHotKey(jsx3.gui.HotKey.valueOf(Ka,jsx3.makeCallback(ub.Ka,this)));};a.Ji=function(s){var
da=null;if(s){da=this.JSXBODY.loadXML(s,true);}else{var
db=this.getEnv(ub.La);if(db)da=this.JSXBODY.load(db,true);}if(da)da.setPersistence(1);};a.setDimensions=function(f,i,n,j){if(jsx3.$A.is(f)){i=f[1];n=f[2];j=f[3];f=f[0];}var
da=this.JSXROOT.getRendered();if(da){if(f)da.parentNode.style.left=f+ub.Ma;if(i)da.parentNode.style.top=i+ub.Ma;if(n)da.parentNode.style.width=n+ub.Ma;if(j)da.parentNode.style.height=j+ub.Ma;}};a.loadInclude=function(d,e,r,l){if(e==null)e=ub.f;var
S=l?((d+ub.f).indexOf(ub.Na)==-1?ub.Na:ub.Oa)+(new
Date()).valueOf():ub.f;if(r==ub.Pa){jsx3.CLASS_LOADER.loadResource(d+S,e,r);}else if(r==ub.Qa||r==ub.Ra&&!jsx3.app.PropsBundle){var
Ha=this.Cache.openDocument(d,e);if(Ha.hasError()){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Sa,+d,Ha.getError()));}else (this.getProperties()).loadXML(Ha,e);}else if(r==ub.Ra){var
Z=this.getCache();if(l){var
Nb=this.LJSS.getParents();for(var
Bb=0;Bb<Nb.length;Bb++)if(Nb[Bb].getPath()==d)this.LJSS.removeParent(Nb[Bb]);jsx3.app.PropsBundle.clearCache(d,Z);}this.LJSS.addParent(jsx3.app.PropsBundle.getPropsFT(d,this.getLocale(),Z));}else if(r==ub.Ta||r==ub.Ua){return this.Cache.openDocument(d,e);}else if(r==ub.Va){this.unloadInclude(e);jsx3.CLASS_LOADER.loadResource(d+S,e,r);}else if(r==ub.Wa){jsx3.require(ub.Xa);return (new
jsx3.net.Service(d)).setNamespace(this);}else throw new
jsx3.IllegalArgumentException(ub.Ya,r);};a.unloadInclude=function(c){var
ab=(this.getRootDocument()).getElementById(c);try{if(ab)ab.parentNode.removeChild(ab);}catch(Kb){na.warn(jsx3._msg(ub.Za,c,this),jsx3.NativeError.wrap(Kb));}};a.loadResource=function(r){var
da=this.getSettings();var
jb=((jsx3.util.List.wrap(da.get(ub._a))).filter(function(i){return i.id==r;})).toArray(true);var
ob;for(var
ma=0;ma<jb.length;ma++){var
rb=jb[ma];ob=this.loadInclude(this.resolveURI(rb.src),rb.id,rb.type);}if(jb.length==0)na.warn(jsx3._msg(ub.ab,r));return ob;};a.setDynamicProperty=function(e,m){var
Va=this.getProperties();Va.set(e,m);};a.getDynamicProperty=function(h,s){var
X=(this.getProperties()).get(h);if(arguments.length>1&&jsx3.util.MessageFormat)try{var
Hb=new
jsx3.util.MessageFormat(X);var
N=new
Array(arguments.length-1);for(var
Ma=1;Ma<arguments.length;Ma++)N[Ma-1]=arguments[Ma];return Hb.format(N);}catch(Kb){}return X;};a.setCookie=function(l,g,r,c,m,j,f){(this.getRootDocument()).cookie=l+ub.bb+(f?g:escape(g))+(r?ub.cb+r.toGMTString():ub.f)+(c?ub.db+c:ub.f)+(m?ub.eb+m:ub.f)+(j?ub.fb:ub.f);};a.getCookie=function(d,q){var
wb=this.getRootDocument();var
Cb=wb.cookie;var
H=d+ub.bb;var
Kb=Cb.indexOf(ub.gb+H);if(Kb==-1){Kb=Cb.indexOf(H);if(Kb!=0)return null;}else Kb=Kb+2;var
Ka=wb.cookie.indexOf(ub.va,Kb);if(Ka==-1)Ka=Cb.length;var
Ya=Cb.substring(Kb+H.length,Ka);return q?Ya:unescape(Ya);};a.deleteCookie=function(d,n,b){this.setCookie(d,ub.f,new
Date(1970,0,1),n,b);};a.getRootBlock=function(){if(this.JSXROOT==null)this.cP();return this.JSXROOT;};a.getAlertsParent=function(){return this.getRootBlock();};a.getBodyBlock=function(){if(this.JSXROOT==null)this.cP();return this.JSXBODY;};a.getRootObjects=function(){return (this.JSXBODY.getChildren()).concat();};a.getCache=function(){return this.Cache;};a.getProperties=function(){return this.JSS;};a.getDOM=function(){return this.DOM;};a.getJSX=function(i){return this.DOM.get(i);};a.getJSXByName=function(p){return this.DOM.getByName(p);};a.getJSXById=function(m){return this.DOM.getById(m);};a.beep=function(){if(!jsx3.gui.WindowBar)return;var
Db=this.JSXROOT.findDescendants(function(s){return s instanceof jsx3.gui.WindowBar&&s.getType()==2;},false,false);if(Db!=null)Db.beep();};a.createAppWindow=function(m){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);if(this.WINDOWS.getChild(m)!=null)throw new
jsx3.IllegalArgumentException(ub.jb,m);var
ba=new
jsx3.gui.Window(m);this.WINDOWS.setChild(ba);return ba;};a.loadAppWindow=function(n,j){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);var
fa=null;if(n instanceof jsx3.xml.Entity)fa=this.WINDOWS.loadXML(n,false,j);else fa=this.WINDOWS.load(n,false,j);if(fa==null)throw new
jsx3.Exception(jsx3._msg(ub.kb,n));if(!(fa instanceof jsx3.gui.Window)){(fa.getParent()).removeChild(fa);throw new
jsx3.Exception(jsx3._msg(ub.lb,n,fa.getClass()));}if(this.WINDOWS.getChild(fa.getName())!=fa){(fa.getParent()).removeChild(fa);throw new
jsx3.Exception(jsx3._msg(ub.mb,n,fa.getName()));}return fa;};a.getAppWindow=function(f){if(this.WINDOWS!=null)return this.WINDOWS.getChild(f);return null;};a.getDocumentOf=function(e){var
Kb=e;while(Kb!=null){if(jsx3.gui.Window&&Kb instanceof jsx3.gui.Window)return Kb.getDocument();if(Kb._jsxYn!=null)return this.getRootDocument();Kb=Kb.getParent();}return this.getRootDocument();};a.getRootDocument=function(){var
ma=this.getEnv(ub.B);return ma!=null?ma.ownerDocument:null;};a.getRenderedOf=function(l){var
D=l.getId();var
Jb=this.getRootDocument();if(Jb==null)return null;var
lb=Jb.getElementById(D);if(lb==null&&this.WINDOWS!=null){var
Kb=this.WINDOWS.getChildren();for(var
U=0;lb==null&&U<Kb.length;U++){var
O=Kb[U].getDocument();if(O)lb=O.getElementById(D);}}return lb;};a.registerHotKey=function(b,m,p,f,s){return (this.getRootBlock()).registerHotKey(b,m,p,f,s);};a.checkHotKeys=function(j){return (this.getRootBlock()).checkHotKeys(j.event);};a.getServer=function(){return this;};a.isAtLeastVersion=function(r){return jsx3.util.compareVersions(this.getEnv(ub.m),r)>=0;};a.resolveURI=function(m){var
w=jsx3.net.URI.valueOf(m);if(this.isAtLeastVersion(ub.nb)&&!Qa.isAbsoluteURI(w)){var
qb=this.getEnv(ub.ob);w=qb.resolve(w);}return Qa.DEFAULT.resolveURI(w);};a.getUriPrefix=function(){return (this.getEnv(ub.ob)).toString();};a.relativizeURI=function(p,d){var
Jb=Sa.getLocation();var
Ib=this.getEnv(ub.pb);var
wb=Ib.relativize(Jb.resolve(p));if(wb.isAbsolute()||d){return wb;}else{var
Ta=this.getEnv(ub.qb);if(Ta){return jsx3.net.URI.fromParts(ub.rb,null,Ta.replace(ub.sb,ub.tb),null,ub.i+wb.getPath(),wb.getQuery(),wb.getFragment());}else return jsx3.net.URI.fromParts(null,null,null,null,this.getEnv(ub.Z)+ub.i+wb.getPath(),wb.getQuery(),wb.getFragment());}};Qa.register(ub.rb,function(k){var
B=k.getHost();if(B){var
y=B.replace(ub.ub,ub.i);var
ua=jsx3.System.getAppByPath(y);return ua||new
o.Resolver(y);}return Qa.DEFAULT;});a.getLocale=function(){if(this.ZX==null)this.ZX=this.getDefaultLocale();return this.ZX!=null?this.ZX:jsx3.System.getLocale();};a.setLocale=function(j){this.ZX=j;};a.getDefaultLocale=function(){var
_a=(this.getSettings()).get(ub.vb);if(_a==null)return null;_a=jsx3.util.strTrim(_a.toString());return _a.length>0&&jsx3.util.Locale?jsx3.util.Locale.valueOf(_a):null;};a.reloadLocalizedResources=function(){var
v=this.LJSS.getParents();this.LJSS.removeAllParents();for(var
Ab=0;Ab<v.length;Ab++){var
w=jsx3.app.PropsBundle.getPropsFT(v[Ab].getPath(),this.getLocale(),this.getCache());this.LJSS.addParent(w);}};a.R9=function(c){var
ra=jsx3.html.getJSXParent(c.srcElement(),this);if(!ra)ra=this.JSXROOT;return ra?this.invokeHelp(ra):false;};a.invokeHelp=function(p){var
Ea=null;while(p&&!Ea){Ea=p.getHelpId();p=p.getParent();}if(Ea)this.publish({subject:o.HELP,helpid:Ea,model:p});return Boolean(Ea);};a.getAddins=function(){var
Za=[];var
Db=(this.getSettings()).get(ub.wb);if(Db)for(var
Bb=0;Bb<Db.length;Bb++){var
X=jsx3.System.getAddin(Db[Bb]);if(X)Za.push(X);}return Za;};a.toString=function(){return this.jsxsuper()+ub.xb+this.getAppPath()+ub.yb+this.getEnv(ub.Q);};o.getVersion=function(){return ub.zb;};});if(jsx3.gui.Alerts)jsx3.app.Server.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.Server=jsx3.app.Server;jsx3.Class.defineClass("jsx3.app.Server.Resolver",null,[jsx3.net.URIResolver],function(d,b){var
ub={a:"jsxhomepath",b:"JSXAPPS",c:"/",d:/!/g,e:"jsxapp"};var
Ba=jsx3.net.URIResolver;b.init=function(m){this._host=m;this._uri=new
jsx3.net.URI(jsx3.getEnv(ub.a)+ub.b+ub.c+m.replace(ub.d,ub.c)+ub.c);};b.resolveURI=function(j){var
Ka=jsx3.net.URI.valueOf(j);if(!Ba.isAbsoluteURI(Ka))Ka=Ba.DEFAULT.resolveURI(this._uri.resolve(Ka));return Ba.DEFAULT.resolveURI(Ka);};b.getUriPrefix=function(){return this._uri.toString();};b.relativizeURI=function(f,m){var
sb=this._uri.relativize(f);if(sb.isAbsolute()||m)return sb;else return jsx3.net.URI.fromParts(ub.e,null,this._host,null,ub.c+sb.getPath(),sb.getQuery(),sb.getFragment());};b.toString=function(){return this._uri.toString();};});jsx3.Class.defineClass("jsx3.app.Model",null,[jsx3.util.EventDispatcher],function(g,j){var
ub={A:/^\[(\w+)(\(\))?(\*)?=\"?(.*?)\"?\]$/,Aa:"@{",B:"undefined",Ba:"}",C:"serialization",Ca:"jsx1:strings | jsx1:variants | jsx1:dynamics | jsx1:properties | jsx1:events | jsx1:xslparameters",D:"jsxversion",Da:"_jsxSi",E:"dynamics",Ea:"jsxcustom",F:"properties",Fa:"_jsxHj",G:"events",Ga:"jsxxslparams",H:"xslparameters",Ha:"onafter",I:"object",Ia:"model.onafter",J:"type",Ja:"response",K:"variants",Ka:"error",L:"strings",La:"timeout",M:"model.async_convt",Ma:"@",N:"include",Na:" ",O:"src",Oa:"/",P:"async",Pa:"3.00.00",Q:"true",R:"false",S:"model.child_notarr",T:"_jsx",U:"'",V:"[",W:",",X:"]",Y:"new Date(",Z:")",_:"model.bad_comp",a:"urn:tibco.com/v3.0",aa:"model.bad_compobj",b:"http://xsd.tns.tibco.com/gi/cif/2006",ba:"jsx3.xml.Template",c:"JSXFRAG",ca:"name",d:"jsx:///xsl/cif_resolver.xsl",da:"icon",e:"jsx3.app.Model",ea:"description",f:"string",fa:"onBeforeDeserialize",g:"url",ga:"onAfterDeserialize",h:"_jsxDW",ha:"objXML",i:"vntItem",ia:"model.bad_vers",j:"_jsxxK",ja:"xmlns",k:"intIndex",ka:"model.future_vers",l:"number",la:"/jsx1:serialization/",m:".",ma:"xmlns:jsx1='",n:"model.clone_frag",na:"jsx1:onBeforeDeserialize",o:"function",oa:"model.onbefore",p:"unshift",pa:"jsx1:object | ",q:"push",qa:"jsx1:objects/jsx1:object | /jsx1:object",r:/(\b\w+\b)|(\#[a-zA-Z_]\w*)|(\.[\w\-]+)|(\:[\w\-]+(?:\([^\)]*\))?)|(\[\w+(?:\(\))?\*?=[^\]]*\])|(\*)|( *> *)|( +)/g,ra:"jsx1:",s:"strExpr",sa:"load",t:/_/g,ta:"paint",u:"",ua:"strKey",v:/\s+/,va:"jsx1:variants/@jsxloadtype",w:":first",wa:"jsx3.gui.Painted",x:":last",xa:"model.load_cls",y:/:nth(?:\-child)?\( *(\d+) *\)/,ya:"model.bad_type",z:/:instanceof\( *(\S+?) *\)/,za:"jsx1:object | jsx1:include | jsx1:children/jsx1:object | jsx1:children/jsx1:include"};var
ka=jsx3.xml.Entity;var
Sa=jsx3.xml.Document;var
G=jsx3.IllegalArgumentException;g.PERSISTNONE=0;g.PERSISTEMBED=1;g.PERSISTREF=2;g.PERSISTREFASYNC=3;g.LT_NORMAL=0;g.LT_SLEEP_PAINT=1;g.LT_SLEEP_DESER=2;g.LT_SLEEP_PD=3;g.LT_SHOW_PAINT=4;g.LT_SHOW_DESER=5;g.CURRENT_VERSION=ub.a;g.CIF_VERSION=ub.b;g.FRAGMENTNS=ub.c;g.ASYNC_LOAD_TIMEOUT=60000;g.bI=jsx3.resolveURI(ub.d);j._jsxid=null;j._jsxxK=null;j._jsxSZ=null;j._jsxoo=null;j._jsxYn=null;j._jsxDW=null;j._jsxX2=null;j._jsxFY=null;j._jsxhq=true;j.init=function(c,f){this.jsxsuper();this._jsxinstanceof=f==null?ub.e:f;this.jsxname=c;};j.getChild=function(f){var
da=null;if(this._jsxSZ!=null){if(typeof f==ub.f||isNaN(f)){var
Za=-1;var
Na=this.getChildren();var
yb=Na.length;for(var
Ta=0;Ta<yb;Ta++)if(f==Na[Ta].getName()){da=Ta;break;}}else da=f;if(da>=0&&da<this._jsxSZ.length)return this._jsxSZ[da];}return null;};j.getFirstChild=function(){return this.getChild(0);};j.getLastChild=function(){return this.getChild((this.getChildren()).length-1);};j.getNextSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()+1);};j.getPreviousSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()-1);};j.getChildren=function(){if(this._jsxSZ==null)this._jsxSZ=[];return this._jsxSZ;};j.getPersistence=function(){return this._jsxX2;};j.getPersistenceUrl=function(){return this.getMetaValue(ub.g);};j.setPersistence=function(c){this._jsxX2=c;return this;};j.setChild=function(o,q,h,i){if(!this.onSetChild(o)||!o.onSetParent(this))return false;var
ia=false;if(i==null&&this._jsxoo==null){i=ub.c;}else if(i!=null){ia=true;}else i=this._jsxoo;var
Ib=this.getServer();if(i!=ub.c&&Ib&&this._jsxoo==i){this.Yp(o,i,o._jsxDW!=null,Ib);}else this._jsxDW=1;var
ta=this._jsxSZ;if(!ta)ta=this._jsxSZ=[];ta[ta.length]=o;o._jsxxK=this;if(q==null)q=0;o._jsxX2=q;if(h&&(q==2||q==3))o.setMetaValue(ub.g,h.toString());this.onChildAdded(o);if(!ia&&i!=ub.c)(Ib.getDOM()).onChange(0,this.getId(),o.getId());return this;};j.onSetChild=function(f){return true;};j.onSetParent=function(r){return true;};j.onRemoveChild=function(p,c){};j.onChildAdded=function(b){};j.Yp=function(n,h,d,l){n._jsxoo=h;n.Pe(h);(l.getDOM()).add(n);if(d){delete n[ub.h];var
Fb=n.getChildren();var
O=Fb.length;for(var
kb=0;kb<O;kb++)n.Yp(Fb[kb],h,true,l);}};j.Pe=function(o){this._jsxid=jsx3.app.DOM.newId(o);};j.removeChild=function(r){var
Db=-1;if(!isNaN(r)){Db=Number(r);}else if(r instanceof jsx3.app.Model){Db=r._jsxxK==this?r.getChildIndex():-1;}else throw new
G(ub.i,r);var
x=this.getChild(Db);if(x!=null){var
Za=this.getServer();this.uy(Db,Za);this.onRemoveChild(x,Db);if(Za)(Za.getDOM()).onChange(1,this.getId(),x.getId());}};j.uy=function(r,o,l){if(r>=0&&r<(this.getChildren()).length){var
R=this.getChild(r);if(!l)R.Kj(this);var
ca=(R.getChildren()).length;for(var
mb=ca-1;mb>=0;mb--)R.uy(mb,o,true);if(o)(o.getDOM()).remove(R);delete R[ub.j];if(!l)this._jsxSZ.splice(r,1);else if(r==0)this._jsxSZ.splice(0,this._jsxSZ.length);R.onDestroy(this);}else throw new
G(ub.k,r);};j.removeChildren=function(p){var
D=this.getServer();if(p==null){p=(this.getChildren()).concat();for(var
O=p.length-1;O>=0;O--){p[O].Kj(this);this.uy(O,D,true);}}else{var
aa=null;p=p.concat();for(var
O=p.length-1;O>=0;O--){var
bb=p[O];if(typeof bb==ub.l){aa=bb;p[O]=this.getChild(aa);}else aa=bb.getChildIndex();this.uy(aa,D,false);}}if(p.length>0)this.onRemoveChild(p,null);return this;};j.getServer=function(){var
Ma=this;while(Ma){if(Ma._jsxYn)return Ma._jsxYn;Ma=Ma._jsxxK;}return null;};j._getLocale=function(){var
Ia=this.getServer();return Ia!=null?Ia.getLocale():jsx3.System.getLocale();};j.Nk=function(p,e){if(e)p=e.jsxclass.getName()+ub.m+p;return (jsx3.System.getLocaleProperties(this._getLocale())).get(p);};j.adoptChild=function(n,k,c){this.kE(n.getChildIndex(),n,k,c,false);};j.adoptChildrenFrom=function(s,h,b,l){if(!h)h=(s.getChildren()).concat();if(h.length>0){for(var
A=0;A<h.length;A++)this.kE(h[A].getChildIndex(),h[A],b,l,true);s.onRemoveChild(h,null);for(var
A=0;A<h.length;A++)this.onChildAdded(h[A]);}};j.OV=function(q,b){if(q==b||q==b-1)return false;var
ba=this.getChildren();var
N=q<b?b-1:b;var
ob=ba.splice(q,1);var
Bb=ba.splice(0,N);this._jsxSZ=Bb.concat(ob,ba);this.onChildAdded(ob[0]);var
ya=this.getServer();if(ya)(ya.getDOM()).onChange(2,this.getId(),b);return true;};j.insertBefore=function(d,l,r){var
X=true;if(!d._jsxxK||!l){X=this.setChild(d);}else if(d._jsxxK!=this)X=this.kE(d.getChildIndex(),d,false,true,true);if(X){if(l)X=this.OV(d.getChildIndex(),l.getChildIndex());if(r!==false)this.repaint();}return X;};j.kE=function(b,o,i,d,r){if(d){this.onSetChild(o);o.onSetParent(this);}else if(!this.onSetChild(o)||!o.onSetParent(this))return false;var
Ra=o._jsxxK;delete o[ub.j];if(o.clearBoxProfile)o.clearBoxProfile(true);if(Ra._jsxSZ!=null)Ra._jsxSZ.splice(b,1);o.Kj(Ra);if(!r)Ra.onRemoveChild(o,b);var
T=Ra.getServer();var
Bb=this.getServer();var
ib=T!=Bb;if(ib)this.nX(o,Ra,T,Bb);if(T)(T.getDOM()).onChange(1,Ra.getId(),o.getId());var
t=this._jsxSZ;if(!t)t=this._jsxSZ=[];t[t.length]=o;o._jsxxK=this;if(!r)this.onChildAdded(o);if(i!==false)this.Im(o,r&&Ra._jsxSZ.length>0);if(Bb)(Bb.getDOM()).onChange(0,this.getId(),o.getId());return this;};j.Im=function(f,d){};j.Kj=function(c){};j.nX=function(e,k,a,p){(a.getDOM()).remove(e);e._jsxoo=this._jsxoo;(p.getDOM()).add(e);e.onChangeServer(p,a);var
Mb=e.getChildren();for(var
wa=0;wa<Mb.length;wa++)e.nX(Mb[wa],null,a,p);};j.onChangeServer=function(h,i){};j.doClone=function(f,m){var
wb=m==2?(this.getServer()).getRootBlock():this._jsxxK;if(wb){var
sa=wb.rx(this.toXMLDoc(),m<1,f,null,null,m==2?ub.c:null);return sa?sa[0]:null;}else throw new
jsx3.Exception(jsx3._msg(ub.n,this));};j.getDescendantOfName=function(q,h,b){return this.findDescendants(function(k){return k.getName()==q;},h,false,b,false);};j.getFirstChildOfType=function(h,p){if(p){var
H=null;if(typeof h==ub.f)H=jsx3.Class.forName(h);else if(typeof h==ub.o&&h.jsxclass instanceof jsx3.Class)H=h.jsxclass;else if(h instanceof jsx3.Class)H=h;return this.findDescendants(function(b){return (b.getClass()).equals(H);},false,false,true,false);}else return this.findDescendants(function(i){return i.instanceOf(h);},false,false,true,false);};j.getDescendantsOfType=function(p,f){return this.findDescendants(function(h){return h.instanceOf(p);},false,true,f,false);};j.findDescendants=function(d,o,e,h,a){var
Pa=o?ub.p:ub.q;var
pb=e?[]:null;var
ya=a?[this]:(this.getChildren()).concat();while(ya.length>0){var
xb=ya.shift();if(d.call(null,xb))if(e)pb[pb.length]=xb;else return xb;if(!h)ya[Pa].apply(ya,xb.getChildren());}return pb;};j.selectDescendants=function(q,s){var
ua=ub.r;var
Va=jsx3.$A([this]);var
Lb=null;var
Xa=true;var
I=true;var
B=(this.getServer()).getRootBlock()==this;var
A=false;ua.lastIndex=0;var
Eb=0,eb=null;while((eb=ua.exec(q))&&!A){if(Eb!=eb.index)throw new
G(ub.s,q);var
ja=null;if(eb[1]){if(Lb)throw new
G(ub.s,q);var
zb=eb[1].replace(ub.t,ub.m);ja=(function(m){return (m.getClass()).getName()==zb;});}else if(eb[2]){var
ga=eb[2].substring(1);if(B){Lb=jsx3.$A(((this.getServer()).getDOM()).getAllByName(ga));}else ja=(function(o){return o.getName()==ga;});}else if(eb[3]){var
zb=eb[3].substring(1);ja=(function(k){return typeof k.getClassName==ub.o&&(jsx3.$A((k.getClassName()||ub.u).split(ub.v))).contains(zb);});}else if(eb[4]){if(eb[4]==ub.w){ja=(function(k){return k.getChildIndex()==0;});}else if(eb[4]==ub.x){ja=(function(m){var
vb=(m.getParent()).getChildren();return m===vb[vb.length-1];});}else if(ub.y.test(eb[4])){var
Ua=parseInt(RegExp.$1);ja=(function(f){return f.getChildIndex()==Ua;});}else if(ub.z.test(eb[4])){var
vb=jsx3.Class.forName(RegExp.$1);ja=(function(a){return vb&&a.instanceOf(vb);});}else throw new
G(ub.s,q);}else if(eb[5]){ub.A.test(eb[5]);var
nb=RegExp.$1,C=RegExp.$2,bb=RegExp.$3,ba=RegExp.$4;ja=(function(b){var
sa=C?b[nb]():b[nb];sa=sa==null?ub.u:String(sa);return bb?ba.length>0&&sa.indexOf(ba)>=0:sa===ba;});}else if(eb[6]){ja=(function(d){return true;});}else if(!Lb)throw new
G(ub.s,q);else if(Lb.length==0)A=true;else{Va=Lb;Lb=null;Xa=Boolean(eb[8]);I=(B=false);}if(ja)if(Lb)Lb=Lb.filter(ja);else{Lb=jsx3.$A();Va.each(function(n){Lb.addAll(n.findDescendants(ja,false,true,!Xa,I));});Lb=Lb.unique();}Eb=ua.lastIndex;}if(!A&&Eb!=q.length)throw new
G(ub.s,q);return s?Lb[0]:Lb;};j.onDestroy=function(i){this.z1();};j.z1=function(){var
Gb=this.getName();var
t=this._jsxgd;if(t&&t.Md[Gb]==this)delete t.Md[Gb];};j.getId=function(){return this._jsxid;};j.getChildIndex=function(){var
O=this._jsxxK;if(O!=null)return jsx3.util.arrIndexOf(O.getChildren(),this);return -1;};j.getName=function(){return this.jsxname;};j.setName=function(q){if(q!=null){var
N=this.jsxname;this.jsxname=q;var
ya=this.getServer();if(ya)(ya.getDOM()).onNameChange(this,N);}return this;};j.getHelpId=function(){return this.jsxhelpid;};j.setHelpId=function(i){this.jsxhelpid=i;};j.getLoadType=function(){return this.jsxloadtype||0;};j.setLoadType=function(s){this.jsxloadtype=s;};j.getParent=function(){return this._jsxxK;};j.getAncestorOfType=function(q){return this.findAncestor(function(a){return a.instanceOf(q);},false);};j.getAncestorOfName=function(b){return this.findAncestor(function(m){return m.getName()==b;},false);};j.findAncestor=function(q,p){var
Cb=p?this:this._jsxxK;while(Cb!=null){if(q.call(null,Cb))return Cb;Cb=Cb._jsxxK;}return null;};j.toXML=function(n){return (this.toXMLDoc(n)).serialize(true,n!=null?n.charset:null);};j.toXMLDoc=function(o){if(o==null){o=this._jsxFY;if(o==null)o={};}else if(this._jsxFY!=null){o=jsx3.clone(o);for(var Ua in this._jsxFY)if(typeof o[Ua]==ub.B)o[Ua]=this._jsxFY[Ua];}var
Ga=g.CURRENT_VERSION;var
yb=new
jsx3.xml.Document();var
S=yb.createDocumentElement(ub.C,Ga);S.setAttribute(ub.D,g.Wr());for(var Ua in g.rp)if(typeof o[Ua]!=ub.B){var
J=g.rp[Ua];var
jb=yb.createNode(1,J,Ga);jb.appendChild(yb.createNode(4,o[Ua],Ga));S.appendChild(jb);}if(o.children){var
wa=(this.getChildren()).length;for(var
C=0;C<wa;C++)S.appendChild((this.getChild(C)).toXMLElm(yb,o));}else S.appendChild(this.toXMLElm(yb,o));return yb;};g.Wr=function(){var
Ga=(jsx3.System.getVersion()).split(ub.m);return Ga[0]+ub.m+Ga[1];};g.up={_jsxSi:ub.E,jsxcustom:ub.F,_jsxHj:ub.G,jsxxslparams:ub.H};g.uq={"boolean":1,number:1};j.toXMLElm=function(k,m){var
y=k.getNamespaceURI();var
ma=k.createNode(1,ub.I,y);var
F=this.getClass();var
v=F!=null?F.getName():null;if(v==null)v=this._jsxinstanceof;ma.setAttribute(ub.J,v);var
Ha=k.createNode(1,ub.K,y);var
S=k.createNode(1,ub.L,y);ma.appendChild(Ha);ma.appendChild(S);for(var Va in g.up){var
ra=this[Va];if(ra!=null&&typeof ra==ub.I){var
hb=g.c4(k,g.up[Va],ra);if(hb!=null){ma.appendChild(hb);if(g.up[Va]==ub.E&&this._jsxAo)for(var Eb in this._jsxAo)hb.removeAttribute(Eb);}}}var
ea=this._jsxSZ;if(ea)if(jsx3.$A.is(ea)){var
Db=ea.length;if(Db>0)for(var
Ma=0;Ma<Db;Ma++){var
Nb=ea[Ma];var
u=Nb._jsxX2;if(u==2||u==3){if(u==3&&Ma!=Db-1){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.M,this));u=Nb._jsxX2=2;}var
xb=k.createNode(1,ub.N,y);xb.setAttribute(ub.O,Nb.getPersistenceUrl());xb.setAttribute(ub.P,u==3?ub.Q:ub.R);ma.appendChild(xb);}else if(u==1||m.persistall)ma.appendChild(Nb.toXMLElm(k,m));}}else jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.S,this,this[Eb]));for(var Eb in this){var
Xa=this[Eb];var
N=typeof Xa;if(N==ub.o||Eb.indexOf(ub.T)==0||Xa==null){}else if(jsx3.$A.is(Xa)){var
Ca=new
Array(Xa.length);for(var
Ma=0;Ma<Xa.length;Ma++){var
C=Xa[Ma];Ca[Ma]=g.uq[typeof C]?C:ub.U+C+ub.U;}Ha.setAttribute(Eb,ub.V+Ca.join(ub.W)+ub.X);}else if(N==ub.I){if(Xa instanceof Date)Ha.setAttribute(Eb,ub.Y+Xa.getTime()+ub.Z);}else if(this._jsxSi==null||this._jsxSi[Eb]==null)if(g.uq[N]){Ha.setAttribute(Eb,String(Xa));}else S.setAttribute(Eb,Xa);}return ma;};g.c4=function(d,h,k){var
D=null;for(var z in k){if(D==null)D=d.createNode(1,h,g.CURRENT_VERSION);D.setAttribute(z,String(k[z]));}return D;};j.getNS=function(){return this._jsxoo;};j.getUriResolver=function(){var
Na=this;while(Na!=null){if(Na._jsxgd&&Na._jsxgd.resolver)return Na._jsxgd.resolver;if(Na._jsxYn!=null)return Na._jsxYn;Na=Na._jsxxK;}return null;};j.load=function(m,p,i){var
ob=(i||this.getUriResolver()).resolveURI(m);var
v=(new
Sa()).load(ob);if(v.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,ob,v.getError()));return (this.rx(v,p,null,ob,m,null,null,i,null))[0];};j.loadXML=function(n,f,l){var
M=n instanceof Sa?n:(new
Sa()).loadXML(n);if(M.hasError()){var
lb=M.getSourceURL();var
U=lb?ub._:ub.aa;throw new
jsx3.Exception(jsx3._msg(U,lb,M.getError()));}return (this.rx(M,f,null,M.getSourceURL(),M.getSourceURL(),null,null,l,null))[0];};j.loadAndCache=function(i,h,d,f){if(d==null)d=(this.getServer()).getCache();var
Oa=(f||this.getUriResolver()).resolveURI(i);var
Gb=d.getOrOpenDocument(Oa);if(Gb.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,Oa,Gb.getError()));return (this.rx(Gb,h,null,Oa,i,null,d,f,null))[0];};g.qp=function(h){jsx3.require(ub.ba);var
Va=(jsx3.getSystemCache()).getOrOpenDocument(g.bI,null,jsx3.xml.XslDocument.jsxclass);return Va.transformToObject(h);};g.rp={name:ub.ca,icon:ub.da,description:ub.ea,onbefore:ub.fa,onafter:ub.ga};j.rx=function(e,l,o,f,q,h,b,d,k){if(!k||o==3)var
ob=new
jsx3.util.Timer(g.jsxclass,f);if(e==null)throw new
G(ub.ha,e);if(((e.getRootNode()).getNamespaceURI()).indexOf(g.CIF_VERSION)==0){e=g.qp(e);if(e==null)throw new
G(ub.ha,e);}if(((e.getRootNode()).getNamespaceURI()).indexOf(g.CURRENT_VERSION)!=0){throw new
jsx3.Exception(jsx3._msg(ub.ia,f,(e.getRootNode()).getAttribute(ub.ja)));}else{var
z=(e.getRootNode()).getAttribute(ub.D);if(z&&jsx3.util.compareVersions(z,jsx3.System.getVersion())>0)throw new
jsx3.Exception(jsx3._msg(ub.ka,f,z));}var
P=h==ub.c;var
sb=ub.la;e.setSelectionNamespaces(ub.ma+g.CURRENT_VERSION+ub.U);var
eb=e.selectSingleNode(sb+ub.na);if(eb!=null){var
R=eb.getValue();if(R&&!e._jsxQm)try{jsx3.eval(R,{objPARENT:this,objXML:e});e._jsxQm=true;}catch(Kb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.oa,f),jsx3.NativeError.wrap(Kb));}}if(h==null)h=this._jsxoo;var
tb=this.getUriResolver()||k;if(d==null){d=jsx3.net.URIResolver.getResolver(q);}else if(q)if(d.getUriPrefix()!=tb.getUriPrefix()){q=jsx3.net.URI.valueOf(q);if(!jsx3.net.URIResolver.isAbsoluteURI(q))q=d.relativizeURI(q);}var
cb=this.getServer();if(k==null)k=cb;var
U=d||tb;var
Ab=e.selectNodeIterator(sb+ub.pa+sb+ub.qa);var
Ia=[];var
za={uri:f,resolver:d,Md:{}};while(Ab.hasNext()){var
Za=Ab.next();var
Ba=this.Ji(Za,f,h,k,b,U,za);if(Ba!=null){Ia[Ia.length]=Ba;if(!P)var
D=this.setChild(Ba,o,f,h);if(D===false)return false;if(Ia.length==1){if(q)Ba.setMetaValue(ub.g,q.toString());for(var fb in g.rp){var
lb=e.selectSingleNode(sb+ub.ra+g.rp[fb]);if(lb!=null)Ba.setMetaValue(fb,lb.getValue());}}if(cb!=null)Ba.onAfterAttach();}}if(!P&&Ia.length>0&&cb)(cb.getDOM()).onChange(0,this.getId(),Ia[0].getId());if(ob)ob.log(ub.sa,true);if(l!==false){for(var
K=0;K<Ia.length;K++)this.Im(Ia[K],K<Ia.length-1);if(ob)ob.log(ub.ta);}return Ia;};g.META_FIELDS={url:1,name:1,icon:1,description:1,onafter:1,onattach:1,onbefore:1,unicode:1};j.getMetaValue=function(p){if(g.META_FIELDS[p])return this._jsxFY?this._jsxFY[p]:ub.u;else throw new
G(ub.ua,p);};j.setMetaValue=function(s,h){if(g.META_FIELDS[s]){if(this._jsxFY==null)this._jsxFY={};this._jsxFY[s]=h;}else throw new
G(ub.ua,s);};j.Ji=function(b,i,p,n,e,m,d){if(b==null)return null;if(!b._jsxbm){var
Xa=b.selectSingleNode(ub.va);Xa=Xa?parseInt(Xa.getValue()):0;if(Xa==2||Xa==3||Xa==5){jsx3.require(ub.wa);var
Ra=new
g.Loading(b,Xa,[i,p,n,e,m,d]);Ra._jsxoo=p;return Ra;}}var
sb=b.getAttribute(ub.J);var
oa=jsx3.Class.forName(sb);if(oa==null)oa=jsx3.getClass(sb);if(oa==null)try{oa=jsx3.CLASS_LOADER.loadClass(sb);}catch(Kb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.xa,sb),jsx3.NativeError.wrap(Kb));}if(oa==null){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.ya,i,sb));return null;}var
Ra=null;if(oa instanceof jsx3.Class){Ra=oa.bless();}else{Ra=new
oa(jsx3.DESERIALIZE);Ra._jsxinstanceof=sb;}Ra._jsxgd=d;Ra._jsxoo=p;Ra.onBeforeAssemble(this,n);var
F=Ra.assembleFromXML(b);var
qa=Ra.getName();if(qa)if(jsx3.util.isName(qa))d.Md[qa]=Ra;if(F){var
_=b.selectNodeIterator(ub.za);while(_.hasNext()){var
lb=_.next();if(lb.getBaseName()==ub.I){var
ob=Ra.Ji(lb,i,p,n,e,m,d);if(ob)Ra.setChild(ob,1,null,p);}else if(lb.getBaseName()==ub.N){var
Ta=lb.getAttribute(ub.O);var
Ua=m.resolveURI(Ta);var
Ca=true;if(lb.getAttribute(ub.P)==ub.Q){Ca=false;if(_.hasNext()){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.M,Ra));Ca=true;}}if(Ca){var
P=e!=null?e.getOrOpenDocument(Ua):(new
Sa()).load(Ua);if(P.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,Ua,b.getError()));Ra.rx(P,false,2,Ua,Ta,p,e,null,n);}else Ra.WB(Ua,Ta,p,e,n);}else throw new
jsx3.Exception();}}Ra.onAfterAssemble(this,n);return Ra;};j.assembleFromXML=function(n){var
z=n.getAttributeNames();for(var
ga=0;ga<z.length;ga++){var
ib=z[ga];if(ib!=ub.J){var
Aa=n.getAttribute(ib);if(Aa.indexOf(ub.Aa)==0&&Aa.lastIndexOf(ub.Ba)==Aa.length-1)this.setDynamicProperty(ib,Aa.substring(2,Aa.length-1));else this[ib]=isNaN(Aa)?Aa:Number(Aa);}}for(var
ga=n.selectNodeIterator(ub.Ca);ga.hasNext();){var
Fa=ga.next();var
ib=Fa.getBaseName();if(ib==ub.L)g.qQ(this,Fa);else if(ib==ub.K)g.a2(this,Fa);else if(ib==ub.E)g.f7(this,Fa,ub.Da);else if(ib==ub.F)g.f7(this,Fa,ub.Ea);else if(ib==ub.G)g.f7(this,Fa,ub.Fa);else if(ib==ub.H)g.f7(this,Fa,ub.Ga);}return true;};j.onBeforeAssemble=function(h,o){};j.onAfterAssemble=function(n,p){};j.onAfterAttach=function(){var
yb=(this.getChildren()).concat();for(var
Ja=yb.length-1;Ja>=0;Ja--)if(yb[Ja]._jsxxK==this)yb[Ja].onAfterAttach();this.applyDynamicProperties();var
Bb=this.getMetaValue(ub.Ha);if(Bb)try{var
ga=this._jsxgd;var
M=ga?(jsx3.$O(ga.Md)).clone():{};M.objJSX=this;this.eval(Bb,M);}catch(Kb){var
Ma=this.getMetaValue(ub.g);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Ia,Ma),jsx3.NativeError.wrap(Kb));}};j.setDynamicProperty=function(l,c,e){if(this._jsxSi==null)this._jsxSi={};if(this._jsxAo==null)this._jsxAo={};if(c==null){delete this._jsxSi[l];delete this._jsxAo[l];}else{this._jsxSi[l]=c;if(e)this._jsxAo[l]=c;else delete this._jsxAo[l];}return this;};j.getDynamicProperty=function(s){if(this._jsxSi)return this._jsxSi[s];};j.applyDynamicProperties=function(){if(this._jsxSi!=null){var
wa=this.getServer();if(wa==null)return;var
ya=wa.getProperties();for(var ba in this._jsxSi)this[ba]=ya.get(this._jsxSi[ba]);}};j.WB=function(i,r,p,e,n){var
Fa=this;if(e!=null&&e.getDocument(i.toString())!=null){var
Ja=e.getDocument(i.toString());jsx3.sleep(function(){this.rx(Ja,true,3,i,r,p,e,null,n);},null,this);}else{var
Ja=new
Sa();Ja.setAsync(true);Ja.subscribe(ub.Ja,function(h){if(e!=null)e.setDocument(i,h.target);Fa.rx(h.target,true,3,i,r,p,e,null,n);});Ja.subscribe([ub.Ka,ub.La],function(q){throw new
jsx3.Exception(jsx3._msg(ub._,i,q.target.getError()));});Ja.load(i,g.ASYNC_LOAD_TIMEOUT);}};g.qQ=function(d,b){var
R=b.getAttributeNames();for(var
Kb=0;Kb<R.length;Kb++){var
yb=R[Kb];d[yb]=b.getAttribute(yb);}};g.a2=function(l,m){var
nb=m.getAttributeNames();for(var
tb=0;tb<nb.length;tb++){var
jb=nb[tb];var
Z=m.getAttribute(jb);l[jb]=isNaN(Z)?l.eval(Z):Number(Z);}};g.f7=function(m,l,e){var
aa=m[e]={};var
Kb=l.getAttributeNames();for(var
Eb=0;Eb<Kb.length;Eb++){var
Hb=Kb[Eb];aa[Hb]=l.getAttribute(Hb);}};j.ck=function(q){try{var
Ra=this.getServer();return Ra.getJSX(q)||(Ra.getRootBlock()).selectDescendants(q,true);}catch(Kb){return null;}};j.toString=function(){return ub.Ma+(this.getClass()).getName()+ub.Na+this.getId()+ub.Oa+this.getName();};g.getVersion=function(){return ub.Pa;};});jsx3.Model=jsx3.app.Model;jsx3.Class.defineClass("jsx3.xml.CDFSchema",jsx3.app.Model,null,function(h,a){var
ub={a:"type",b:"jsxname",c:"object",d:"a",e:"children",f:"record",g:"jsx"};a.init=function(e){if(e)for(var M in e)this.setProp(M,e[M]);};a.assembleFromXML=function(e){var
Ja=e.getAttributeNames();var
K=this.getProps();for(var
t=0;t<Ja.length;t++){var
ca=Ja[t];if(ca==ub.a)continue;else if(ca==ub.b)this.jsxname=e.getAttribute(ca);else K[ca.substring(1)]=e.getAttribute(ca);}};a.toXMLElm=function(m,p){var
O=m.createNode(1,ub.c,m.getNamespaceURI());var
S=this.getProps();O.setAttribute(ub.a,(this.getClass()).getName());if(this.getName())O.setAttribute(ub.b,this.getName());for(var B in S)if(S[B])O.setAttribute(ub.d+B,S[B]);return O;};a.getProps=function(){if(!this._jsxp)this._jsxp={};return this._jsxp;};a.getProp=function(n){return (this.getProps())[n]||(n==ub.e?ub.f:ub.g+n);};a.setProp=function(f,m){(this.getProps())[f]=m;};});jsx3.Class.defineInterface("jsx3.xml.CDF",null,function(e,b){var
ub={A:"string",B:"cdf.adopt_col",C:"cdf.adopt_dest",D:"cdf.adopt_src",E:"adoptRecord() no object with id: ",F:"cdf.before_col",G:"cdf.before_rec",H:"jsx",I:"//",J:"",K:"'",L:"//*[@",M:"='",N:"']",O:'="',P:'"]',Q:"[not(@",R:")]",S:/\[(\w+)\]$/,T:"name()='",U:" or ",V:"substring(.,1,1)='{' and substring(.,string-length(.),1)='}'",W:"//@*[(",X:") and (",Y:"undefined",Z:"//@",_:" | //@",a:"data",aa:"{",b:"record",ba:"}",c:"jsxid",ca:'<data jsxid="jsxroot"/>',d:"jsxtext",da:"jsx_",e:"jsxexecute",ea:"3.00.00",f:"jsxdisabled",g:"jsxselected",h:"jsxunselectable",i:"jsximg",j:"jsxtip",k:"jsxkeycode",l:"jsxstyle",m:"jsxclass",n:"onAfterAttach",o:"_onAfterAttach",p:"onChildAdded",q:"onRemoveChild",r:"id",s:"children",t:"*",u:"objRecord",v:"objRecordNode",w:"cdf.prop_ins",x:"cdf.prop_del",y:"strRecordId",z:"intAction"};e.dK=jsx3.util.Logger.getLogger(e.jsxclass.getName());e.DELETE=0;e.INSERT=1;e.UPDATE=2;e.INSERTBEFORE=3;e.ELEM_ROOT=ub.a;e.ELEM_RECORD=ub.b;e.ATTR_ID=ub.c;e.ATTR_TEXT=ub.d;e.ATTR_EXECUTE=ub.e;e.ATTR_DISABLED=ub.f;e.ATTR_SELECTED=ub.g;e.ATTR_UNSELECTABLE=ub.h;e.ATTR_IMG=ub.i;e.ATTR_TIP=ub.j;e.ATTR_KEYCODE=ub.k;e.bV=[ub.d,ub.j,ub.i,ub.k,ub.l,ub.m];e.Zx=1;e.DEFAULT_SCHEMA=new
jsx3.xml.CDFSchema();b.setSchema=function(d){this.XK=d;};b.getSchema=function(){return this.XK||this._jsxNS||e.DEFAULT_SCHEMA;};b.hn=function(d){return (this.getSchema()).getProp(d);};b.Sf=function(s,i,n){var
la=this.hn(i);if(arguments.length>=3){if(s.setAttribute)s.setAttribute(la,n);else s[la]=n;}else if(s)return s.getAttribute?s.getAttribute(la):s[la];};b._onAfterAttach=function(){this._jsxNS=(this.getDescendantsOfType(jsx3.xml.CDFSchema,true))[0];};jsx3.app.Model.jsxclass.addMethodMixin(ub.n,e.jsxclass,ub.o);jsx3.app.Model.jsxclass.addMethodMixin(ub.p,e.jsxclass,ub.o);jsx3.app.Model.jsxclass.addMethodMixin(ub.q,e.jsxclass,ub.o);b.insertRecord=function(g,s,r){if(g instanceof Object){var
Xa=this.getXML();var
Bb=1;var
gb=Xa.selectSingleNode(this.Ee(this.Sf(g,ub.r)));if(gb!=null){Bb=2;}else{var
fb=this.hn(ub.s);gb=Xa.createNode(1,fb==ub.t?ub.b:fb);var
pb=s!=null?Xa.selectSingleNode(this.Ee(s)):null;if(pb==null)pb=Xa.getRootNode();pb.appendChild(gb);}for(var S in g)if(g[S]!=null)gb.setAttribute(S,g[S].toString());if(r!==false)this.redrawRecord(this.Sf(g,ub.r),Bb);return gb;}else throw new
jsx3.IllegalArgumentException(ub.u,g);};b.insertRecordNode=function(j,l,f){if(j instanceof jsx3.xml.Entity){var
na=this.getXML();var
tb=1;var
ga=na.selectSingleNode(this.Ee(this.Sf(j,ub.r)));if(ga!=null){tb=2;(ga.getParent()).replaceNode(j,ga);}else{var
Da=l!=null?na.selectSingleNode(this.Ee(l)):null;if(Da==null)Da=na.getRootNode();Da.appendChild(j);}if(f!==false)this.redrawRecord(this.Sf(j,ub.r),tb);}else throw new
jsx3.IllegalArgumentException(ub.v,j);};b.insertRecordProperty=function(g,a,q,r){var
yb=this.getRecordNode(g);if(yb!=null){yb.setAttribute(a,q);if(r!==false)this.redrawRecord(g,2);}else e.dK.debug(jsx3._msg(ub.w,g));return this;};b.deleteRecordProperty=function(n,h,i){var
Nb=this.getXML();var
J=Nb.selectSingleNode(this.Ee(n));if(J!=null){J.removeAttribute(h);if(i!==false)this.redrawRecord(n,2);}else e.dK.debug(jsx3._msg(ub.x,n));};b.redrawRecord=jsx3.Method.newAbstract(ub.y,ub.z);b.adoptRecord=function(h,f,q,a){var
ka=h;if(typeof h==ub.A)ka=jsx3.GO(h);if(ka!=null){var
yb=ka.getRecordNode(f);if(yb!=null){var
ma=q==null?(this.getXML()).getRootNode():this.getRecordNode(q);if(ma!=null){var
H=ma;while(H!=null&&!H.equals(yb))H=H.getParent();if(H==null){if(ka!=this){var
nb=this.getRecordNode(f);if(nb!=null){e.dK.debug(jsx3._msg(ub.B,this,f));return;}}var
Ka=ka.deleteRecord(f);this.insertRecordNode(Ka,q,a);return this.getRecordNode(f);}else{}}else e.dK.debug(jsx3._msg(ub.C,this,f,q));}else e.dK.debug(jsx3._msg(ub.D,this,f,ka));}else e.dK.debug(ub.E+h);};b.insertRecordBefore=function(m,j,q){var
ea=this.getXML();var
ca=ea.selectSingleNode(this.Ee(this.Sf(m,ub.r)));if(ca){e.dK.debug(jsx3._msg(ub.F,this.Sf(m,ub.r),this));}else{var
zb=ea.selectSingleNode(this.Ee(j));if(zb!=null&&zb.getParent()!=null){var
G=this.insertRecord(m,this.Sf(zb.getParent(),ub.r),false);if(G){this.adoptRecordBefore(this,this.Sf(m,ub.r),j,q);return G;}}else e.dK.debug(jsx3._msg(ub.G,j,this));}};b.adoptRecordBefore=function(r,o,n,j){var
ja=r;if(typeof r==ub.A)ja=jsx3.GO(r);if(ja==this&&o==n){}else{var
Ua=(this.getRecordNode(n)).getParent();var
La=this.Sf(Ua,ub.H);var
Q=this.adoptRecord(r,o,La,false);if(Q){var
Mb=this.getRecordNode(n);Ua.insertBefore(Q,Mb);if(j!==false)this.redrawRecord(this.Sf(Q,ub.r),3);return Q;}}};b.deleteRecord=function(q,l){var
fa=this.getXML();var
da=fa.selectSingleNode(this.Ee(q));if(da!=null){da=(da.getParent()).removeChild(da);if(l!==false)this.redrawRecord(q,0);return da;}return null;};b.getRecord=function(h){var
Jb=this.getRecordNode(h);if(Jb!=null){var
E={};var
L=Jb.getAttributeNames();for(var
Fb=0;Fb<L.length;Fb++)E[L[Fb]]=Jb.getAttribute(L[Fb]);return E;}return null;};b.getRecordIds=function(){var
Oa=[];var
Hb=this.getXML();var
Ea=Hb.selectNodeIterator(ub.I+this.hn(ub.s));while(Ea.hasNext()){var
Kb=Ea.next();Oa.push(this.Sf(Kb,ub.r));}return Oa;};b.getRecordNode=function(c){var
aa=this.getXML();return aa.selectSingleNode(this.Ee(c));};b.Ee=function(o){return (o+ub.J).indexOf(ub.K)==-1?ub.L+this.hn(ub.r)+ub.M+o+ub.N:ub.L+this.hn(ub.r)+ub.O+o+ub.P;};b.resetData=function(i){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable)){this.clearXmlData();if(i)this.repaint();}};b.reloadFromSource=function(h){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable))this.resetXmlCacheData();};b.assignIds=function(){var
F=this.getXML();for(var
ba=F.selectNodeIterator(ub.I+this.hn(ub.s)+ub.Q+this.hn(ub.r)+ub.R);ba.hasNext();){var
nb=ba.next();nb.setAttribute(this.hn(ub.r),e.getKey());}};e.zw=ub.S;b.convertProperties=function(q,l,m){if(l==null)l=e.bV;else if(m)l.push.apply(l,e.bV);if(jsx3.getXmlVersion()>3&&!jsx3.CLASS_LOADER.SAF){var
xb=new
Array(l.length);for(var
w=0;w<l.length;w++)xb[w]=ub.T+l[w]+ub.K;var
Ga=xb.join(ub.U);var
O=ub.V;var
Va=ub.W+Ga+ub.X+O+ub.R;for(var
w=(this.getXML()).selectNodeIterator(Va);w.hasNext();){var
Cb=w.next();var
Za=Cb.getValue();var
D=Za.substring(1,Za.length-1);var
ca=null;if(D.match(e.zw)){D=RegExp.leftContext;ca=RegExp.$1;}var
db=q.get(D);if(typeof db!=ub.Y)if(ca!=null&&db instanceof Object)Cb.setValue(db[ca]);else Cb.setValue(db);}}else{var
Va=ub.Z+l.join(ub._);for(var
T=(this.getXML()).selectNodeIterator(Va);T.hasNext();){var
Cb=T.next();var
Za=Cb.getValue();if(Za.indexOf(ub.aa)==0&&jsx3.util.strEndsWith(Za,ub.ba)){var
D=Za.substring(1,Za.length-1);var
ca=null;if(D.match(e.zw)){D=RegExp.leftContext;ca=RegExp.$1;}var
db=q.get(D);if(typeof db!=ub.Y)if(ca!=null&&db instanceof Object)Cb.setValue(db[ca]);else Cb.setValue(db);}}}};e.newDocument=function(){var
eb=new
jsx3.xml.Document();eb.loadXML(ub.ca);return eb;};e.getKey=function(){return ub.da+(e.Zx++
).toString(36);};e.getVersion=function(){return ub.ea;};});jsx3.Class.defineClass("jsx3.xml.CDF.Document",jsx3.xml.Document,[jsx3.xml.CDF],function(f,n){var
ub={a:'<data jsxid="jsxroot"/>'};n.getXML=function(){return this;};n.redrawRecord=function(h,s){};n.cloneDocument=function(){return f.wrap(this.jsxsuper());};f.newDocument=function(){var
_=new
f();_.loadXML(ub.a);return _;};f.wrap=function(l){return new
f(l.getNativeDocument());};});jsx3.CDF=jsx3.xml.CDF;jsx3.Class.defineClass("jsx3.gui.HotKey",null,[jsx3.util.EventDispatcher],function(p,o){var
ub={A:"\u21A9",B:"\u238B",C:"\u21E5",D:"\u2326",E:"\u2423",F:"\u232B",G:"\u2191",H:"\u2193",I:"\u2190",J:"\u2192",K:"Insert",L:"\u2196",M:"\u2198",N:"\u21DE",O:"\u21DF",P:"Meta",Q:"Alt",R:"Ctrl",S:"Shift",T:"Enter",U:"Esc",V:"Tab",W:"Del",X:"Space",Y:"Backspace",Z:"Up",_:"Down",a:"invoked",aa:"Left",b:"+",ba:"Right",c:"ctrl",ca:"Home",d:"shift",da:"End",e:"alt",ea:"PgUp",f:"meta",fa:"PgDn",g:"string",ga:"@HotKey key:",h:/^\[(\d+)\]$/,ha:" shift:",i:"",ia:" ctrl:",j:"function",ja:" alt:",k:"callback",ka:" meta:",l:"number",la:/^[fF](\d\d?)$/,m:"key",ma:"F",n:"meta+",o:"alt+",p:"ctrl+",q:"shift+",r:"[",s:"]",t:"gui.hk.dest",u:"u4",v:"\u2318",w:"\u2325",x:"\u2303",y:"\u21EA",z:"\u21E7"};var
Ea=jsx3.gui.Event;p.WAS_INVOKED=ub.a;o.u4=null;o.hH=null;o.Up=false;o.Iy=false;o.fV=false;o._L=false;o.ZY=true;o.JQ=false;p.valueOf=function(k,s){var
wb=(k.toLowerCase()).split(ub.b);var
Aa=wb.pop();var
C=wb.indexOf(ub.c)>=0;var
ua=wb.indexOf(ub.d)>=0;var
wa=wb.indexOf(ub.e)>=0;var
fb=wb.indexOf(ub.f)>=0;if(typeof Aa==ub.g&&Aa.match(ub.h))Aa=parseInt(RegExp.$1);return new
p(s||new
Function(ub.i),Aa,ua,C,wa,fb);};o.init=function(h,i,a,j,b,n){if(!(typeof h==ub.j))throw new
jsx3.IllegalArgumentException(ub.k,h);this.u4=h;this.Up=a==null?null:Boolean(a);this.Iy=j==null?null:Boolean(j);this._L=b==null?null:Boolean(b);this.fV=n==null?null:Boolean(n);this.hH=typeof i==ub.l?i:p.keyDownCharToCode(i);if(this.hH==null)throw new
jsx3.IllegalArgumentException(ub.m,i);};o.getKey=function(){var
Z=ub.i;if(this.fV)Z=Z+ub.n;if(this._L)Z=Z+ub.o;if(this.Iy)Z=Z+ub.p;if(this.Up)Z=Z+ub.q;var
xa=p.keyDownCodeToChar(this.hH);Z=Z+(xa!=null?xa:ub.r+this.hH+ub.s);return Z;};o.getKeyCode=function(){return this.hH;};o.isMatch=function(h){var
mb=h.keyCode()==this.hH&&(this.Up==null||h.shiftKey()==this.Up)&&(this.Iy==null||h.ctrlKey()==this.Iy)&&(this.fV==null||h.metaKey()==this.fV)&&(this._L==null||h.altKey()==this._L);return mb;};o.invoke=function(e,d){if(this.JQ||!this.ZY)throw new
jsx3.Exception(jsx3._msg(ub.t,this));var
za=this.u4.apply(e,d);this.publish({subject:ub.a});return za;};o.isEnabled=function(){return this.ZY;};o.setEnabled=function(n){this.ZY=n;};o.isDestroyed=function(){return this.JQ;};o.destroy=function(){this.JQ=true;delete this[ub.u];};o.getFormatted=function(){var
Aa=null,Fb=null;if(jsx3.app.Browser.macosx){Aa=ub.i;Fb=p.eV;}else{Aa=ub.b;Fb=p.sF;}var
Lb=ub.i;if(this.Iy)Lb=Lb+(Fb.ctrl[0]+Aa);if(this._L)Lb=Lb+(Fb.alt[0]+Aa);if(this.Up)Lb=Lb+(Fb.shift[0]+Aa);if(this.fV)Lb=Lb+(Fb.meta[0]+Aa);var
bb=p.keyDownCodeToChar(this.hH,true);Lb=Lb+(bb!=null?bb.length==1?bb.toUpperCase():bb:ub.r+this.hH+ub.s);return Lb;};p.eV={meta:[ub.v,224],alt:[ub.w,18],ctrl:[ub.x,17],shift:[jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()<3?ub.y:ub.z,16],enter:[ub.A,13],esc:[ub.B,27],tab:[ub.C,9],del:[ub.D,46],space:[ub.E,32],backspace:[ub.F,8],up:[ub.G,38],down:[ub.H,40],left:[ub.I,37],right:[ub.J,39],insert:[ub.K,45],home:[ub.L,36],end:[ub.M,35],pgup:[ub.N,33],pgdn:[ub.O,34]};p.sF={meta:[ub.P,224],alt:[ub.Q,18],ctrl:[ub.R,17],shift:[ub.S,16],enter:[ub.T,13],esc:[ub.U,27],tab:[ub.V,9],del:[ub.W,46],space:[ub.X,32],backspace:[ub.Y,8],up:[ub.Z,38],down:[ub._,40],left:[ub.aa,37],right:[ub.ba,39],insert:[ub.K,45],home:[ub.ca,36],end:[ub.da,35],pgup:[ub.ea,33],pgdn:[ub.fa,34]};o.toString=function(){return ub.ga+this.hH+ub.ha+this.Up+ub.ia+this.Iy+ub.ja+this._L+ub.ka+this.fV;};p.rR={39:222,44:188,45:189,46:190,47:191,59:186,61:187,91:219,92:220,93:221,96:192};p.keyDownCharToCode=function(d){var
nb=null;if(d.length==1){var
La=d.charCodeAt(0);if(La>=65&&La<=90)nb=La;else if(La>=97&&La<=122)nb=La-32;else if(La>=48&&La<=57)nb=La;else nb=p.rR[La];}else if(p.sF[d.toLowerCase()]){nb=p.sF[d.toLowerCase()][1];}else if(d.match(ub.la))nb=parseInt(RegExp.$1)+112-1;return nb;};p.keyDownCodeToChar=function(a,l){var
t=null;if(a>=65&&a<=90)t=String.fromCharCode(a+97-65);else if(a>=48&&a<=57)t=String.fromCharCode(a);else if(a>=112&&a<=126)t=ub.ma+(a-112+1);else{for(var Da in p.rR)if(p.rR[Da]==a){t=String.fromCharCode(Da);break;}if(t==null){var
Cb=l&&jsx3.app.Browser.macosx?p.eV:p.sF;for(var Da in Cb)if(Cb[Da][1]==a){t=Cb[Da][0];break;}}}return t;};});jsx3.Class.defineClass("jsx3.gui.Painted",jsx3.app.Model,null,function(r,f){var
ub={A:"Left",B:"padding",C:"margin",D:"border",E:"jsxafterresizeview",F:"done",G:"box.async",H:"box.sync",I:" box updates of ",J:"jsxdomholder",K:"1",a:" ",b:'="',c:/\"/g,d:"&quot;",e:'"',f:"",g:"jsxcustom",h:"object",i:"bench.",j:" repaints of ",k:"repaint",l:'<span id="',m:'" style="display:none;" jsxdomholder="1"></span>',n:"jsx3.gui.Painted.domPaint",o:"beforeEnd",p:"paint.insert",q:"jsx3.gui.Painted.repaint",r:"_jsxHK",s:"_jsxFD",t:"_jsxxw",u:/\s*;\s*/g,v:/\s*:\s*/,w:/(-\S)/gi,x:"Top",y:"Right",z:"Bottom"};var
Fa=jsx3.html;r.MASK_NO_EDIT={NN:false,EE:false,SS:false,WW:false,MM:false};r.MASK_ALL_EDIT={NN:true,EE:true,SS:true,WW:true,MM:true};f.init=function(p){this.jsxsuper(p);};f.getAbsolutePosition=function(h,e){if(e==null)e=this.getRendered(h);if(e==null)return {L:0,T:0,W:0,H:0};if(h==null)h=(this.Jw()).getRendered(e);return Fa.getRelativePosition(h,e);};f.setAttribute=function(k,d){(this.getAttributes())[k]=d;return this;};f.getAttribute=function(k){return (this.getAttributes())[k];};f.getAttributes=function(){if(this.jsxcustom==null)this.jsxcustom={};return this.jsxcustom;};f.renderAttributes=function(b,s){var
w=[];if(this.jsxcustom!=null){var
ua=jsx3.gui.Interactive;var
ka=ua&&this.instanceOf(ua);for(var Qa in this.jsxcustom){var
oa=b!=null&&(jsx3.$A.is(b)&&jsx3.util.arrIndexOf(b,Qa)>=0||b[Qa])||s&&ka&&ua.isBridgeEventHandler(Qa);var
gb=this.jsxcustom[Qa];if(!oa&&gb!=null)w[w.length]=ub.a+Qa+ub.b+gb.replace(ub.c,ub.d)+ub.e;}}return w.join(ub.f);};f.removeAttribute=function(p){delete this.getAttributes()[p];return this;};f.removeAttributes=function(){delete this[ub.g];return this;};f.focus=function(){var
Qa=this.getRendered();if(Qa)Fa.focus(Qa);return Qa;};f.getMaskProperties=function(){return r.MASK_NO_EDIT;};f.getRendered=function(g){var
bb=null;if(g&&g instanceof jsx3.gui.Event){if(g.srcElement())bb=(g.srcElement()).ownerDocument;}else if(g&&typeof g==ub.h)bb=g.ownerDocument||(g.getElementById?g:null);if(bb==null)bb=this.getDocument();return bb!=null?bb.getElementById(this.getId()):null;};f.containsHtmlElement=function(d){var
_a=this.getRendered(d);if(_a)while(d!=null){if(_a==d)return true;d=d.parentNode;}return false;};f.getDocument=function(){var
Ib=this;while(Ib!=null){if(jsx3.gui.Window&&Ib instanceof jsx3.gui.Window)return Ib.getDocument();else if(Ib._jsxYn!=null)return Ib._jsxYn.getRootDocument();Ib=Ib.getParent();}return null;};f.Jw=function(){var
ha=this;while(ha!=null){if(jsx3.gui.Window&&ha instanceof jsx3.gui.Window)return ha.getRootBlock();else if(ha._jsxYn!=null)return ha._jsxYn.getRootBlock();ha=ha.getParent();}return null;};r.dJ=null;r.REPAINT_MAP=new
jsx3.util.WeakMap();f.repaint=function(){var
sb=[this];while(sb.length>0){var
Jb=sb.shift();var
Ib=Jb.getId();if(Ib==null)continue;var
Pa=1+(r.REPAINT_MAP.get(Ib)||Number(0));if(Pa>1){(jsx3.util.Logger.getLogger(ub.i+r.jsxclass)).warn(Pa+ub.j+Jb);}else{var
va=Jb.getChildren();if(va.length>0)sb.push.apply(sb,va);}r.REPAINT_MAP.set(Ib,Pa);}var
_=this.getRendered();if(this.isDomPaint()){if(_!=null){var
Ia=_.previousSibling;var
v=this.paintDom();if(v!=_)_.parentNode.replaceChild(v,_);else if(v.parentNode==null)Ia.parentNode.insertBefore(v,Ia);}return null;}else{var
O=null;if(_!=null){var
C=new
jsx3.util.Timer(r.jsxclass,this);O=this.paint();Fa.setOuterHTML(_,O);r.cf(this,_);C.log(ub.k);}return O;}};f.paint=jsx3.Method.newAbstract();f.onAfterPaint=function(b){};r.cf=function(c,j){var
cb=[c];while(cb.length>0){var
ob=cb.shift();if(ob.onAfterPaint!=f.onAfterPaint){var
K=ob.getRendered(j);if(K)ob.onAfterPaint(K);}var
ka=ob.getDescendantsOfType(r,true);if(ka.length>0)cb.unshift.apply(cb,ka);}};f.onAfterRestoreView=function(h){};r._onAfterRestoreViewCascade=function(j,c){var
fa=[j];while(fa.length>0){var
t=fa.shift();if(t.onAfterRestoreView!=f.onAfterRestoreView){var
Eb=t.getRendered(c);if(Eb)t.onAfterRestoreView(Eb);}var
E=t.getDescendantsOfType(r,true);if(E.length>0)fa.unshift.apply(fa,E);}};f.isDomPaint=function(){return false;};f.paintDom=function(){throw new
jsx3.Exception();};f.HT=function(){return ub.l+this.getId()+ub.m;};r.WX=[];r.CC=function(k){r.WX.push(k);jsx3.sleep(r.vO,ub.n);};r.vO=function(){for(var
V=0;V<r.WX.length;V++){var
zb=r.WX[V];var
wb=zb.getRendered();if(wb!=null){var
mb=zb.paintDom();wb.parentNode.replaceChild(mb,wb);}}r.WX.splice(0,r.WX.length);};f.paintChild=function(m,j,d,s){if(d==null)d=this.getRendered();if(d!=null&&m instanceof r){if(!s)if(m.isDomPaint()){d.appendChild(m.paintDom());}else{var
W=new
jsx3.util.Timer(r.jsxclass,this);Fa.insertAdjacentHTML(d,ub.o,m.paint());W.log(ub.p);}r.cf(m,d);}};f.Im=function(e,b){this.paintChild(e,b);};f.insertHTML=function(s){this.paintChild(s);return this;};f.paintChildren=function(k){if(k==null)k=this.getChildren();var
Mb=new
Array(k.length);for(var
ta=0;ta<k.length;ta++){var
xb=k[ta];if(!(xb instanceof r))continue;if(xb.isDomPaint()){Mb[ta]=xb.HT();r.CC(xb);}else{var
H=xb.getLoadType();if(H==1||H==2||H==3){Mb[ta]=xb.HT();jsx3.sleep(jsx3.makeCallback(ub.k,xb),ub.q+xb.getId());}else if((H==5||H==4)&&!xb.nf()){Mb[ta]=xb.HT();}else Mb[ta]=xb.paint();}}return Mb.join(ub.f);};f._conditionalPaint=function(){var
P;if(this.isDomPaint()){P=this.HT();r.CC(this);}else{var
w=this.getLoadType();if(w==1||w==2||w==3){P=this.HT();jsx3.sleep(jsx3.makeCallback(ub.k,this),ub.q+this.getId());}else if((w==5||w==4)&&!this.nf()){P=this.HT();}else P=this.paint();}return P;};f.Wl=function(h,o){if(this._jsxHK)this.clearBoxProfile();if(this._jsxxw==null&&h)this._jsxxw=this.zd(o);return this._jsxxw;};f.ng=function(h){this._jsxxw=h;};f.Qf=function(){this._jsxHK=true;};f.clearBoxProfile=function(k){var
J=[this];while(J.length>0){var
sa=J.shift();delete sa[ub.r];delete sa[ub.s];if(sa._jsxxw){delete sa[ub.t];if(k){var
Ma=sa.getChildren();if(Ma.length>0)J.push.apply(J,Ma);}}}};r.Ql=function(a,s,e){if(s){var
pb=(jsx3.util.strTrim(s)).split(ub.u);for(var
Bb=0;Bb<pb.length;Bb++){var
M=pb[Bb];if(M==ub.f)continue;var
W=M.split(ub.v);if(W&&W.length==2){var
Ab=W[0].replace(ub.w,function(g,d){return (d.substring(1)).toUpperCase();});a.style[Ab]=W[1];}}}else if(e){var
ga=[ub.x,ub.y,ub.z,ub.A];for(var
Bb=0;Bb<4;Bb++){var
Ab=e+ga[Bb];a.style[Ab]=ub.f;}}};f.recalcBox=function(s){this.findDescendants(function(j){j.clearBoxProfile(false);},true,true,false,true);this.pj(this.getParent()?(this.getParent()).Id(this):null,this.getRendered());if(s){var
pb=this.getRendered();if(pb!=null){var
D=this.Wl(true);for(var
ba=0;ba<s.length;ba++)if(s[ba]==ub.B){r.Ql(pb,D.Hi(),ub.B);}else if(s[ba]==ub.C){r.Ql(pb,D.ih(),ub.C);}else if(s[ba]==ub.D)r.Ql(pb,D.Yc(),ub.D);}}};f.Id=function(){var
hb=this._jsxxw;return hb!=null?{parentwidth:hb.ee(),parentheight:hb.ld()}:{};};f.Gi=function(o){var
J=this._jsxFD?this._jsxFD[o]:null;return J;};f.Ei=function(e,c){if(!this._jsxFD)this._jsxFD=[];this._jsxFD[e]=c;return c;};f.flushCachedClientDimensions=function(i){};f.zd=function(d){return new
r.Box({});};f.Hj=function(d,a,n){this.sk(d,a,n,1);};f.sk=function(o,l,c,h){if(h==1){this.Qf();if(l!=null)c.addRepaint(this);}else if(h==2||h==4){var
zb=this.Wl(true,o);var
Qa=zb.recalculate(o,l,c);if(Qa.w||Qa.h){if(!r._RESIZE_EVENT&&jsx3.gui.Interactive)r._RESIZE_EVENT={subject:ub.E};if(r._RESIZE_EVENT)this.publish(r._RESIZE_EVENT);var
rb=this.getChildren();var
ab=h==4&&l?Math.max(0,l.childNodes.length-rb.length):0;for(var
Q=rb.length-1;Q>=0;Q--){var
Ia=rb[Q];var
vb=Ia.Wl(false);if(vb&&vb.wF())continue;var
ma=Q+ab;var
ta=l?l.childNodes[ma]?l.childNodes[ma]:true:null;c.add(Ia,{parentwidth:zb.ee(),parentheight:zb.ld()},ta,true);}}else{}}else if(h==3){var
zb=this.Wl(true,o);if(l)zb.recalculate(o,l,c);}};f.Mc=function(a,q){var
sb=new
jsx3.util.Timer(r.jsxclass,this);var
nb=new
r.Queue();nb.add(this,a,q);nb.subscribe(ub.F,function(){sb.log(ub.G);});nb.start();};r.ev={};r.ev.add=function(e,d,c){var
Ea=new
jsx3.util.Timer(r.jsxclass,e);e.Pv(this,d,c);Ea.log(ub.H);};r.ev.addRepaint=function(l){l.repaint();};f.pj=function(m,j){r.ev.add(this,m,j);};r.UPDATE_MAP=new
jsx3.util.WeakMap();f.Pv=function(h,j,g){var
z=1+(r.UPDATE_MAP.get(this.getId())||Number(0));if(z>1)(jsx3.util.Logger.getLogger(ub.i+r.jsxclass)).warn(z+ub.I+this);r.UPDATE_MAP.set(this.getId(),z);this.applyDynamicProperties();delete this[ub.s];this.Hj(j,g,h);};f.nf=function(){return this._jsxshowstate;};f.nn=function(b){if(this._jsxshowstate!=b){this._jsxshowstate=b;if(b){var
xb=this.getRendered();if(xb&&(!xb.firstChild||xb.getAttribute(ub.J)==ub.K))this.repaint();}}};f.Kj=function(b){var
Ka=b.getServer();if(Ka){var
H=(b.getServer()).getRenderedOf(this);if(H)jsx3.html.removeNode(H);}};});jsx3.Class.defineClass("jsx3.gui.Painted.Queue",jsx3.lang.Object,[jsx3.util.EventDispatcher],function(o,n){var
ub={a:"jsx3.gui.Painted.queue",b:"unshift",c:"push",d:"done",e:"e7",f:"{Painted.Queue ",g:" ",h:"-",i:"}"};o.D1=250;o.Zx=0;o.u1=new
jsx3.util.List();o.q2=true;o.rT=false;o.enableChunking=function(q){o.q2=q;};o.yN=function(){o.doChunk();};o.doChunk=function(){if(o.q2){if(o.rT)return;o.rT=true;var
Ga=(new
Date()).getTime()+o.D1;var
tb=(new
Date()).getTime();var
ma=o.u1.removeAt(0);while(ma!=null&&tb<Ga)if(ma.e7.length>0){var
ob=ma.e7.shift();if(jsx3.$A.is(ob))ob[0].Pv(ma,ob[1],ob[2]);else ob.repaint();tb=(new
Date()).getTime();}else{ma.destroy();ma=o.u1.removeAt(0);}if(ma!=null){o.u1.add(ma,0);jsx3.sleep(o.doChunk,ub.a);}o.rT=false;}else while(o.u1.size()>0){var
ma=o.u1.removeAt(0);while(ma.e7.length>0){var
ob=ma.e7.shift();if(jsx3.$A.is(ob))ob[0].Pv(ma,ob[1],ob[2]);else ob.repaint();}}};n.init=function(){this.Kp=
++o.Zx;this.e7=[];o.u1.add(this);};n.add=function(e,m,j,l){if(j===true)j=e.getRendered();this.e7[l?ub.b:ub.c]([e,m,j]);};n.addRepaint=function(m,g){this.e7[g?ub.b:ub.c](m);};n.start=function(){o.yN();};n.destroy=function(){this.publish({subject:ub.d});delete this[ub.e];o.u1.remove(this);};n.toString=function(){return ub.f+this.Kp+ub.g+(this.e7!=null?this.e7.length:ub.h)+ub.i;};});jsx3.Class.defineClass("jsx3.gui.Painted.Box",jsx3.lang.Object,null,function(d,o){var
xb={A:"box",Aa:/-right/,B:"0px",Ba:/-bottom/,C:"string",Ca:/-left/,D:"number",Da:/border(?:(?:-top(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,E:"object",Ea:/border(?:(?:-top(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,F:"%",Fa:/border(?:(?:-top(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,G:";",Ga:/border(?:(?:-right(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,H:"px",Ha:/border(?:(?:-right(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,I:"px;",Ia:/border(?:(?:-right(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,J:"px ",Ja:/border(?:(?:-bottom(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,K:":",Ka:/border(?:(?:-bottom(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,L:"relativebox",La:/border(?:(?:-bottom(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,M:"<",Ma:/border(?:(?:-left(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,N:" ",Na:/border(?:(?:-left(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,O:"width:",Oa:/border(?:(?:-left(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,P:"height:",Pa:"IMPLICIT:\n",Q:'"/>',Qa:": ",R:'">',Ra:"\n",S:"left:0px",Sa:"\nEXPLICIT:\n",T:"left:",U:"top:0px",V:"top:",W:"position:absolute;",X:' style="',Y:"position:relative;",Z:"</",_:">",a:/[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)/,aa:"resize",b:/\b(\d*)px/g,ba:"onResize",c:"boxtype",ca:/input\[(\S*)\]/i,d:"tagname",da:"input",e:"margin",ea:/(^[;\s]*)|([;\s]*$)/g,f:"padding",fa:"pseudo",g:"border",ga:"border-top:",h:"left",ha:"border-right:",i:"top",ia:"border-bottom:",j:"width",ja:"border-left:",k:"height",ka:"text",l:"empty",la:"password",m:"container",ma:"textarea",n:"BW",na:"td",o:"m3",oa:"body",p:"lT",pa:'<div id="_jsx3_html_scr" class="jsx30block" style="padding:0px;margin:0px;border-width:0px;position:absolute;width:100px;height:100px;left:-100px;top:-100px;overflow:scroll;">&#160;</div>',q:"U0",qa:"beforeEnd",r:"Nt",ra:"_jsx3_html_scr",s:"yy",sa:"not matched",t:"E3",ta:"0",u:"_o",ua:/(\s*(padding|padding-top|padding-right|padding-bottom|padding-left)\s*:\s*(\d+)(px)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*;)+/ig,v:"right",va:/(\s*(margin|margin-top|margin-right|margin-bottom|margin-left)\s*:\s*(-*\d+)(px)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*;)+/ig,w:"bottom",wa:"Missing Semicolon",x:"",xa:/[^\s*]/i,y:"display:inline-block;",ya:"Mismatch Rule",z:"display:-moz-inline-box;",za:/-top/};var
Ea=jsx3.html;d.pR=xb.a;d.G9=xb.b;d.No=[xb.c,xb.d,xb.e,xb.f,xb.g,xb.h,xb.i,xb.j,xb.k,xb.l,xb.m];d.RZ=[xb.c,xb.h,xb.i,xb.j,xb.k];d.hz={width:xb.n,height:xb.o,top:xb.p,left:xb.q,padding:xb.r,border:xb.s,margin:xb.t,tagname:xb.u};d.Vq=[xb.i,xb.v,xb.w,xb.h];d._Y=null;if(jsx3.CLASS_LOADER.SAF){d.AT=[xb.x,xb.y,xb.x,xb.y];}else if(jsx3.CLASS_LOADER.IE){d.AT=[xb.x,xb.x,xb.y,xb.x];}else if(jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()>=3)d.AT=[xb.x,xb.y,xb.x,xb.y];else d.AT=[xb.x,xb.z,xb.x,xb.z];d.Uu={pad:xb.f,mar:xb.e,e:xb.x,box:xb.A,zpx:xb.B,str:xb.C,num:xb.D,obj:xb.E,pct:xb.F,semi:xb.G,px:xb.H,pxs:xb.I,pxc:xb.J,c:xb.K,rbox:xb.L,bor:xb.g};d.bM={hph:{height:1,parentheight:1},wpw:{width:1,parentwidth:1}};d.vL=[xb.M,xb.N,xb.O,xb.P,xb.Q,xb.R,xb.S,xb.T,xb.U,xb.V,xb.W,xb.X,xb.Y,xb.Z,xb._,xb.x];d.getCssFix=function(){return d.AT[Ea.getMode()];};o.np=xb.x;o.rL=xb.x;o.a4=xb.x;o.J7=true;o.styles=xb.x;o.attributes=xb.x;o.init=function(j){this.implicit=j||{};this.calculate();};o.reset=function(){this.J7=true;};o.paint=function(){this.J7=false;var
vb=new
Array(2);var
Wa=d.vL[0]+this.Ts.tagname+d.vL[1]+this.attributes;var
Da=this.getPaintedWidth();Da=Da!=null?d.vL[2]+Math.max(0,Da)+d.Uu.pxs:d.Uu.e;var
Ua=this.getPaintedHeight();Ua=Ua!=null?d.vL[3]+Math.max(0,Ua)+d.Uu.pxs:d.Uu.e;var
z=this.Ts.empty?d.vL[4]:d.vL[5];if(this.Ts.boxtype==d.Uu.box){var
P=this.Ts.left;P=P==null?d.vL[6]:d.vL[7]+P+d.Uu.pxs;var
ea=this.Ts.top;ea=ea==null?d.vL[8]:d.vL[9]+ea+d.Uu.pxs;var
ka=this.implicit.omitpos?d.Uu.e:d.vL[10];vb[0]=Wa+d.vL[11]+ka+Da+Ua+P+ea+this.Hi()+this.ih()+this.Yc()+this.styles+z;}else if(this.Ts.boxtype==d.Uu.rbox){var
ka=this.implicit.omitpos?d.Uu.e:d.vL[12];vb[0]=Wa+d.vL[11]+ka+this.qT()+Da+Ua+this.Hi()+this.ih()+this.Yc()+this.styles+z;}else{var
P=this.Ts.left;P=P==null?d.Uu.e:d.vL[7]+P+d.Uu.pxs;var
ea=this.Ts.top;ea=ea==null?d.Uu.e:d.vL[9]+ea+d.Uu.pxs;var
ka=this.implicit.omitpos?d.Uu.e:d.vL[12];vb[0]=Wa+d.vL[11]+ka+Da+Ua+P+ea+this.Hi()+this.ih()+this.Yc()+this.styles+z;}vb[1]=this.Ts.empty?d.vL[15]:d.vL[13]+this.Ts.tagname+d.vL[14];return vb;};o.setStyles=function(p){this.styles=p;return this;};o.setAttributes=function(i){this.attributes=i;return this;};o.qT=function(){return this.Ts.container&&(Ea.getMode()==3||Ea.getMode()==1)?d.Uu.e:d.getCssFix();};o.wF=function(){var
db=this.implicit;return (typeof db.width!=d.Uu.str||db.width.indexOf(d.Uu.pct)<0)&&(typeof db.height!=d.Uu.str||db.height.indexOf(d.Uu.pct)<0)&&(typeof db.left!=d.Uu.str||db.left.indexOf(d.Uu.pct)<0)&&(typeof db.top!=d.Uu.str||db.top.indexOf(d.Uu.pct)<0);};d._RECALC_VALS=[[[[{n:1},{h:1}],[{w:1},{w:1,h:1}]],[[{t:1},{t:1,h:1}],[{t:1,w:1},{t:1,w:1,h:1}]]],[[[{l:1},{l:1,h:1}],[{l:1,w:1},{l:1,w:1,h:1}]],[[{l:1,t:1},{l:1,t:1,h:1}],[{l:1,t:1,w:1},{l:1,t:1,w:1,h:1,a:1}]]]];o.recalculate=function(b,k){var
Ta=this.J7;var
V=0,E=0,Fa=0,Na=0;for(var Q in b)if(this.implicit[Q]!=b[Q]){this.implicit[Q]=b[Q];Ta=true;if(!Fa&&d.bM.wpw[Q])Fa=1;if(!Na&&d.bM.hph[Q])Na=1;}if(Ta){this.calculate(d.RZ);if(k&&k.style){var
Ka=k.style;if(this.Ts.boxtype==d.Uu.box&&this.Ts.left!=null&&this.Ts.top!=null){if(parseInt(Ka.left)!=this.Ts.left){Ka.left=this.Ts.left+d.Uu.px;V=1;}if(parseInt(Ka.top)!=this.Ts.top){Ka.top=this.Ts.top+d.Uu.px;E=1;}}if(b.parentheight!=null||b.parentwidth!=null||b.width!=null||b.height!=null){var
_=this.getPaintedWidth();var
Da=this.getPaintedHeight();if(_!=null&&parseInt(Ka.width)!=_){Ka.width=Math.max(0,_)+d.Uu.px;Fa=1;}else Fa=0;if(Da!=null&&parseInt(Ka.height)!=Da){Ka.height=Math.max(0,Da)+d.Uu.px;Na=1;}else Na=0;}}}this.J7=false;return d._RECALC_VALS[V][E][Fa][Na];};d.A6={left:1,top:1};d.oS=function(){};d.oS.prototype={padding:xb.x,margin:xb.x,border:xb.x,bwidth:0,bheight:0,btop:0,bleft:0,pwidth:0,pheight:0,ptop:0,pleft:0};o.calculate=function(j){if(!j)j=d.No;if(!this.Ts)this.Ts=new
d.oS();var
pa=this.Ts;for(var
D=0;D<j.length;D++){var
kb=j[D];var
fa=this.implicit[kb];if(d.A6[kb]&&(fa==null||fa==d.Uu.e)&&this.implicit.boxtype==d.Uu.box){pa[kb]=0;}else{var
K=d.hz[kb];if(K){if(fa===d.Uu.e)fa=null;this[K](fa);}else this.Ts[kb]=fa;}}};d.registerServer=function(n,j){if(j)jsx3.gui.Event.subscribe(xb.aa,n,xb.ba);};d.unregisterServer=function(k,m){if(m)jsx3.gui.Event.unsubscribe(xb.aa,k,xb.ba);};o.BW=function(e){if(e==null){this.Ts.width=this.Ts.clientwidth=null;}else{if(typeof e==d.Uu.str&&e.indexOf(d.Uu.pct)>=0)e=Math.round(this.implicit.parentwidth*parseInt(e)/100);else e=Number(e);this.Ts.width=e;this.Ts.clientwidth=Math.max(0,e-this.Ts.pwidth-this.Ts.bwidth);}};o.m3=function(e){if(e==null){this.Ts.height=this.Ts.clientheight=null;}else{if(typeof e==d.Uu.str&&e.indexOf(d.Uu.pct)>=0)e=Math.round(this.implicit.parentheight*parseInt(e)/100);else e=Number(e);this.Ts.height=e;this.Ts.clientheight=Math.max(0,e-this.Ts.pheight-this.Ts.bheight);}};o.U0=function(m){this.Ts.left=typeof m==d.Uu.str&&m.indexOf(d.Uu.pct)>=0?Math.round(this.implicit.parentwidth*parseInt(m)/100):m==null?m:Number(m);};o.lT=function(q){this.Ts.top=typeof q==d.Uu.str&&q.indexOf(d.Uu.pct)>=0?Math.round(this.implicit.parentheight*parseInt(q)/100):q==null?q:Number(q);};o._o=function(e){if(e==null){this.Ts.tagname=e;this.Ts.type=e;}else if(e.search(xb.ca)>-1){this.Ts.tagname=xb.da;this.Ts.type=RegExp.$1.toLowerCase();}else this.Ts.tagname=e;};o.yy=function(g){if(g==null)g=d.Uu.e;if(this.np===g)return;this.np=g;var
ja=null,Hb=null;if(typeof g==d.Uu.str&&g.indexOf(xb.K)>=0){var
ta=d.y4(g);if(typeof ta!=d.Uu.obj)ja=ta.split(d.Uu.semi);}else{g=g.replace(xb.ea,d.Uu.e);if(g!==d.Uu.e)ja=g.split(d.Uu.semi);}if(ja&&ja.length>1){var
K=true;for(var
Ra=0;K&&Ra<ja.length-1&&Ra<3;Ra++)if(ja[Ra]!=ja[Ra+1])K=false;if(K)ja.splice(1,ja.length);}if(!ja){Hb=[0,0,0,0];}else if(ja.length==1){var
rb=ja[0].match(d.G9);var
Aa=rb?parseInt(rb[0]):0;if(isNaN(Aa))Aa=0;Hb=[Aa,Aa,Aa,Aa];}else{Hb=[];for(var
Ra=0;Ra<4;Ra++){var
rb=ja[Ra].match(d.G9);var
Aa=rb?parseInt(rb[0]):0;if(isNaN(Aa))Aa=0;Hb[Ra]=Aa;}}this.Ts.bwidth=Hb[1]+Hb[3];this.Ts.bheight=Hb[0]+Hb[2];this.Ts.bleft=Hb[3];this.Ts.btop=Hb[0];if(ja)for(var
Ra=0;Ra<ja.length;Ra++)if(ja[Ra].indexOf(xb.fa)>=0)ja[Ra]=d.Uu.e;if(ja==null){this.Ts.border=d.Uu.e;}else if(ja.length==1){this.Ts.border=ja[0]?d.Uu.bor+d.Uu.c+(Hb[0]>0?ja[0]:d.Uu.zpx)+d.Uu.semi:d.Uu.e;}else if(ja.length==4)this.Ts.border=(ja[0]?xb.ga+(Hb[0]>0?ja[0]:d.Uu.zpx)+d.Uu.semi:d.Uu.e)+(ja[1]?xb.ha+(Hb[1]>0?ja[1]:d.Uu.zpx)+d.Uu.semi:d.Uu.e)+(ja[2]?xb.ia+(Hb[2]>0?ja[2]:d.Uu.zpx)+d.Uu.semi:d.Uu.e)+(ja[3]?xb.ja+(Hb[3]>0?ja[3]:d.Uu.zpx)+d.Uu.semi:d.Uu.e);};o.E3=function(g){if(g==null)g=d.Uu.e;if(this.rL===g)return;this.rL=g;var
v=null;if(typeof g==d.Uu.str&&g.indexOf(xb.K)>-1){var
Lb=d.gY(g,d.Uu.mar);if(typeof Lb!=d.Uu.obj)v=Lb.match(d.pR);}else if(typeof g==d.Uu.num){v=[g];}else{g=jsx3.util.strTrim(String(g));if(g!==d.Uu.e)if(isNaN(g))v=g.match(d.pR);else v=[Number(g)];}if(v==null)this.Ts.margin=d.Uu.e;else if(v.length==1)this.Ts.margin=d.Uu.mar+d.Uu.c+v[0]+d.Uu.pxs;else this.Ts.margin=d.Uu.mar+d.Uu.c+v[1]+d.Uu.pxc+v[2]+d.Uu.pxc+v[3]+d.Uu.pxc+v[4]+d.Uu.pxs;};o.Nt=function(e){if(e==null)e=d.Uu.e;if(this.a4===e)return;this.a4=e;var
Za=null;if(typeof e==d.Uu.str&&e.indexOf(xb.K)>-1){var
U=d.gY(e,d.Uu.pad);if(typeof U!=d.Uu.obj)Za=U.match(d.pR);}else if(typeof e==d.Uu.num){Za=[e];}else{e=jsx3.util.strTrim(String(e));if(e!==d.Uu.e)if(isNaN(e))Za=e.match(d.pR);else Za=[Number(e)];}var
mb=null;if(Za==null){mb=[0,0,0,0];this.Ts.padding=d.Uu.e;}else if(Za.length==1){var
ka=Za[0];mb=[ka,ka,ka,ka];this.Ts.padding=d.Uu.pad+d.Uu.c+ka+d.Uu.pxs;}else{mb=[];for(var
Wa=1;Wa<5;Wa++){var
ka=parseInt(Za[Wa]);if(isNaN(ka))ka=0;mb[Wa-1]=ka;}this.Ts.padding=d.Uu.pad+d.Uu.c+mb[0]+d.Uu.pxc+mb[1]+d.Uu.pxc+mb[2]+d.Uu.pxc+mb[3]+d.Uu.pxs;}this.Ts.pwidth=mb[1]+mb[3];this.Ts.pheight=mb[0]+mb[2];this.Ts.ptop=mb[0];this.Ts.pleft=mb[3];};o.cl=function(k){var
ga=this.ys;if(!ga)ga=this.ys=[];ga[ga.length]=k;};o.lg=function(j){return this.ys?this.ys[j]:null;};o.qk=function(){return this.Ts.bleft+this.Ts.pleft;};o.hj=function(){return this.Ts.btop+this.Ts.ptop;};o.ee=function(){return this.Ts.clientwidth;};o.ld=function(){return this.Ts.clientheight;};o.getOffsetWidth=function(){return this.Ts.width;};o.getOffsetHeight=function(){return this.Ts.height;};o.getBorderWidth=function(){return this.Ts.bwidth;};o.getBorderHeight=function(){return this.Ts.bheight;};o.getPaintedWidth=function(){var
Ua=this.Ts.type;var
y=Ea.getMode();if(jsx3.CLASS_LOADER.SAF){var
sb=(Ua==xb.ka||Ua==xb.la||this.Ts.tagname==xb.ma||this.Ts.tagname==xb.na)&&y==1?this.Ts.width:this.Ts.clientwidth;}else var
sb=y==0||(Ua==xb.ka||Ua==xb.la||this.Ts.tagname==xb.ma)&&y==1?this.Ts.width:this.Ts.clientwidth;return sb===d.Uu.e||isNaN(sb)?null:sb;};o.getPaintedHeight=function(){var
jb=this.Ts.type;var
T=Ea.getMode();var
F=T==0||(jb==xb.ka||jb==xb.la||this.Ts.tagname==xb.ma)&&T==1?this.Ts.height:this.Ts.clientheight;return F===d.Uu.e||isNaN(F)?null:F;};o.getPaintedLeft=function(){return this.Ts.left;};o.getPaintedTop=function(){return this.Ts.top;};o.getBoxType=function(){return this.Ts.boxtype;};o.ih=function(){return this.Ts.margin||d.Uu.e;};o.Hi=function(){return this.Ts.padding||d.Uu.e;};o.Yc=function(){return this.Ts.border||d.Uu.e;};d.getBody=function(){return (document.getElementsByTagName(xb.oa))[0];};d.getScrollSize=function(c){if(d._Y==null){var
Va=c||d.getBody();var
sb=xb.pa;Ea.insertAdjacentHTML(Va,xb.qa,sb);var
ea=document.getElementById(xb.ra);d._Y=100-parseInt(ea.clientWidth);Va.removeChild(ea);}return d._Y;};d.getScrollSizeOffset=function(f){var
ya=d.getScrollSize();return Ea.getScrollSizeOffset(ya,f);};d.gY=function(s,k){var
ia=xb.sa;var
X=xb.ta;var
Kb=xb.ta;var
F=xb.ta;var
na=xb.ta;var
ja=xb.ua;var
A=xb.va;var
Fa=k==d.Uu.pad?ja:A;var
y=s.split(d.Uu.semi);if(y)for(var
Jb=0;Jb<y.length;Jb++){var
ea=y[Jb]+d.Uu.semi;var
Lb=ea.search(Fa);if(Lb>0){return {desc:xb.wa,cause:y[Jb]};}else if(Lb==-1){if(y[Jb].search(xb.xa)>=0)return {desc:xb.ya,cause:y[Jb]};}else{ia=ea.replace(Fa,function(q,p,g,n,m,l,c,j,i,e,h,r,f){if(g.match(xb.za)){X=n==null?xb.ta:n;}else if(g.match(xb.Aa)){Kb=n==null?xb.ta:n;}else if(g.match(xb.Ba)){F=n==null?xb.ta:n;}else if(g.match(xb.Ca)){na=n==null?xb.ta:n;}else{X=jsx3.util.strEmpty(n)?xb.ta:n;Kb=jsx3.util.strEmpty(c)?X:c;F=jsx3.util.strEmpty(e)?X:e;na=jsx3.util.strEmpty(f)?Kb:f;}return X+xb.N+Kb+xb.N+F+xb.N+na;});ia=X+xb.N+Kb+xb.N+F+xb.N+na;}}return ia;};var
aa=xb.Da;var
eb=xb.Ea;var
Gb=xb.Fa;var
Ya=xb.Ga;var
S=xb.Ha;var
hb=xb.Ia;var
la=xb.Ja;var
Ha=xb.Ka;var
ra=xb.La;var
J=xb.Ma;var
L=xb.Na;var
ub=xb.Oa;d.y4=function(a){var
X={top:{width:0,color:xb.x,style:xb.x},right:{width:0,color:xb.x,style:xb.x},bottom:{width:0,color:xb.x,style:xb.x},left:{width:0,color:xb.x,style:xb.x}};while(aa.exec(a))X.top.width=RegExp.$1;while(eb.exec(a))X.top.color=RegExp.$1;while(Gb.exec(a))X.top.style=RegExp.$1;while(Ya.exec(a))X.right.width=RegExp.$1;while(S.exec(a))X.right.color=RegExp.$1;while(hb.exec(a))X.right.style=RegExp.$1;while(la.exec(a))X.bottom.width=RegExp.$1;while(Ha.exec(a))X.bottom.color=RegExp.$1;while(ra.exec(a))X.bottom.style=RegExp.$1;while(J.exec(a))X.left.width=RegExp.$1;while(L.exec(a))X.left.color=RegExp.$1;while(ub.exec(a))X.left.style=RegExp.$1;return X.top.width+d.Uu.pxc+X.top.style+xb.N+X.top.color+d.Uu.semi+X.right.width+d.Uu.pxc+X.right.style+xb.N+X.right.color+d.Uu.semi+X.bottom.width+d.Uu.pxc+X.bottom.style+xb.N+X.bottom.color+d.Uu.semi+X.left.width+d.Uu.pxc+X.left.style+xb.N+X.left.color;};o.toString=function(){var
pa=xb.Pa;for(var Ab in this.implicit)pa=pa+(Ab+xb.Qa+this.implicit[Ab]+xb.Ra);pa=pa+xb.Sa;for(var Ab in this.Ts)pa=pa+(Ab+xb.Qa+this.Ts[Ab]+xb.Ra);return pa;};});jsx3.Class.defineClass("jsx3.app.Model.Loading",jsx3.gui.Painted,null,function(b,n){var
ub={a:"undefined",b:"jsx1:strings/@jsxname"};n.init=function(e,m,p){this._jsxd3=e;e._jsxbm=true;this._jsxKz=m;this._jsxl6=p;if(m==2||m==3)jsx3.sleep(function(){var
P=this.A9();if(m==2)this.XB();else jsx3.sleep(function(){this.XB();},null,this);},null,this);};n.A9=function(){var
ta=this.getParent();var
aa=ta.Ji.apply(this,[this._jsxd3].concat(this._jsxl6));ta.setChild(aa,1,null,this._jsxl6[1]);ta.insertBefore(aa,this,false);var
P=ta.getDocument();if(P){var
Y=P.getElementById(this._jsxid);if(Y)Y.id=aa._jsxid;}ta.removeChild(this);this._jsxMQ=aa;if(this._jsxKz==5)this.XB();return aa;};n.getName=function(){if(typeof this._jsxE6==ub.a){var
U=this._jsxd3.selectSingleNode(ub.b);this._jsxE6=U?U.getValue():null;}return this._jsxE6;};n.getType=function(){return this._jsxKz;};n.bm=function(o,c){return this._jsxd3.cloneNode(true);};n.XB=function(){this._jsxMQ.repaint();};n.paint=function(){return this.HT();};n.getRendered=function(){return null;};n.nn=function(g){if(g&&this._jsxKz==5)this.A9();this.jsxsuper(g);return this._jsxMQ;};});jsx3.require("jsx3.gui.HotKey");jsx3.Class.defineInterface("jsx3.gui.Interactive",null,function(f,e){var
ub={A:"jsxbeforeedit",Aa:"dl",B:"jsxbeforemove",Ba:/\"/g,C:"jsxbeforeresize",Ca:"&quot;",D:"jsxbeforeselect",Da:";",E:"jsxbeforesort",Ea:"string",F:"jsxcanceldrop",Fa:"jsx3.",G:"jsxctrldrop",Ga:"(event,this,'",H:"jsxdestroy",Ha:"',",I:"jsxdata",Ia:");",J:"jsxdrag",Ja:"jsx3.GO('",K:"jsxdrop",Ka:"').",L:"jsxexecute",La:"');",M:"jsxhide",Ma:" ",N:"jsxincchange",Na:'="',O:"jsxinput",Oa:"",P:"jsxmenu",Pa:'"',Q:"jsxscroll",Qa:/;\s*$/,R:"jsxselect",Ra:"gui.int.br",S:"jsxshow",Sa:"id",T:"jsxspy",Ta:"body",U:"jsxtoggle",Ua:"gui.int.eb",V:/\S/,Va:"absolute",W:"function",Wa:"JSXDragId",X:"blur",Xa:"JSXDragType",Y:"change",Ya:"_jsxspy",Z:"click",Za:"jsx3.gui.Heavyweight",_:"dblclick",_a:'<span class="jsx30spyglassbuffer"><div class="jsx30spyglass">',a:"jsxblur",aa:"focus",ab:"</div></span>",b:"jsxchange",ba:"keydown",bb:"W",c:"jsxclick",ca:"keypress",cb:"E",d:"jsxdblclick",da:"keyup",db:"S",e:"jsxfocus",ea:"mousedown",eb:"N",f:"jsxkeydown",fa:"mousemove",fb:"X",g:"jsxkeypress",ga:"mouseout",gb:"Y",h:"jsxkeyup",ha:"mouseover",hb:"_jsxIu",i:"jsxload",ia:"mouseup",ib:"_jsxsP",j:"jsxmousedown",ja:"mousewheel",jb:"jsxspystylekeys",k:"jsxmouseout",ka:"ah",kb:"jsxspystylevalues",l:"jsxmouseover",la:"Ml",lb:/ *; */,m:"jsxmouseup",ma:"nj",mb:/(-\S)/gi,n:"jsxmousewheel",na:"Xj",nb:":",o:"text-decoration:underline",oa:"Vl",ob:"jsxmodal",p:"jsxadopt",pa:"_ebKeyDown",pb:"vntCallback",q:"jsxafterappend",qa:"Lh",qb:"3.00.00",r:"jsxaftercommit",ra:"mc",rb:"EVENTSVERS",s:"jsxafteredit",sa:"Fo",sb:"onDestroy",t:"jsxaftermove",ta:"_ebMouseMove",tb:"rB",u:"jsxafterreorder",ua:"Uc",v:"jsxafterresize",va:"Ri",w:"jsxafterresizeview",wa:"yo",x:"jsxaftersort",xa:"ae",y:"jsxbeforeappend",ya:"on",z:"jsxbeforedrop",za:"yp"};var
N=jsx3.gui.Event;f.JSXBLUR=ub.a;f.JSXCHANGE=ub.b;f.JSXCLICK=ub.c;f.JSXDOUBLECLICK=ub.d;f.JSXFOCUS=ub.e;f.JSXKEYDOWN=ub.f;f.JSXKEYPRESS=ub.g;f.JSXKEYUP=ub.h;f.JSXLOAD=ub.i;f.JSXMOUSEDOWN=ub.j;f.JSXMOUSEOUT=ub.k;f.JSXMOUSEOVER=ub.l;f.JSXMOUSEUP=ub.m;f.JSXMOUSEWHEEL=ub.n;f.FOCUS_STYLE=ub.o;f.ADOPT=ub.p;f.AFTER_APPEND=ub.q;f.AFTER_COMMIT=ub.r;f.AFTER_EDIT=ub.s;f.AFTER_MOVE=ub.t;f.AFTER_REORDER=ub.u;f.AFTER_RESIZE=ub.v;f.AFTER_RESIZE_VIEW=ub.w;f.AFTER_SORT=ub.x;f.BEFORE_APPEND=ub.y;f.BEFORE_DROP=ub.z;f.BEFORE_EDIT=ub.A;f.BEFORE_MOVE=ub.B;f.BEFORE_RESIZE=ub.C;f.BEFORE_SELECT=ub.D;f.BEFORE_SORT=ub.E;f.CANCEL_DROP=ub.F;f.CHANGE=ub.b;f.CTRL_DROP=ub.G;f.DESTROY=ub.H;f.DATA=ub.I;f.DRAG=ub.J;f.DROP=ub.K;f.EXECUTE=ub.L;f.HIDE=ub.M;f.INCR_CHANGE=ub.N;f.INPUT=ub.O;f.MENU=ub.P;f.SCROLL=ub.Q;f.SELECT=ub.R;f.SHOW=ub.S;f.SPYGLASS=ub.T;f.TOGGLE=ub.U;e.ah=function(q,o){this.doEvent(ub.a,{objEVENT:q});};e.Ml=function(a,l){this.doEvent(ub.b,{objEVENT:a});};e.nj=function(n,r){this.doEvent(ub.c,{objEVENT:n});};e.Xj=function(s,m){this.doEvent(ub.d,{objEVENT:s});};e.Vl=function(d,i){this.doEvent(ub.e,{objEVENT:d});};e._ebKeyDown=function(k,b){var
Eb=false;if(this.hasHotKey())Eb=this.checkHotKeys(k);if(!Eb)this.doEvent(ub.f,{objEVENT:k});return Eb;};e.Lh=function(l,a){this.doEvent(ub.g,{objEVENT:l});};e.mc=function(r,n){this.doEvent(ub.h,{objEVENT:r});};e.Fo=function(n,r){this.doEvent(ub.j,{objEVENT:n});};e.Uc=function(m,s){this.doEvent(ub.k,{objEVENT:m});};e.Ri=function(q,o){this.doEvent(ub.l,{objEVENT:q});};e.yo=function(n,r){var
ma=null;this.doEvent(ub.m,{objEVENT:n});if(n.rightButton()&&(ma=this.getMenu())!=null){var
Db=this.ck(ma);if(Db!=null){var
pb=this.doEvent(ub.P,{objEVENT:n,objMENU:Db,_gipp:1});if(pb!==false){if(pb instanceof Object&&pb.objMENU instanceof jsx3.gui.Menu)Db=pb.objMENU;Db.showContextMenu(n,this);}}}};e.ae=function(p,i){this.doEvent(ub.n,{objEVENT:p});};e.setEvent=function(g,d){(this.getEvents())[d]=g;return this;};e.getEvents=function(){if(this._jsxHj==null)this._jsxHj={};return this._jsxHj;};e.getEvent=function(r){if(this._jsxHj)return this._jsxHj[r];};e.hasEvent=function(q){return this._jsxHj!=null&&this._jsxHj[q]!=null&&this._jsxHj[q].match(ub.V);};e.doEvent=function(b,s){var
Z=this.getEvent(b);if(typeof this.publish==ub.W)this.publish({subject:b,context:s});return this.eval(Z,this._getEvtContext(s));};e._getEvtContext=function(s){var
I=this._jsxgd;if(I)s=((jsx3.$O(I.Md)).clone()).extend(s);return s;};e.removeEvent=function(c){if(this._jsxHj!=null)delete this._jsxHj[c];return this;};e.removeEvents=function(){this._jsxHj={};return this;};e.setCanMove=function(m){this.jsxmove=m;return this;};e.getCanMove=function(){return this.jsxmove||0;};e.setCanDrag=function(l){this.jsxdrag=l;return this;};e.getCanDrag=function(){return this.jsxdrag||0;};e.setCanDrop=function(l){this.jsxdrop=l;return this;};e.getCanDrop=function(){return this.jsxdrop||0;};e.setCanSpy=function(p){this.jsxspy=p;return this;};e.getCanSpy=function(){return this.jsxspy||0;};e.getMenu=function(){return this.jsxmenu;};e.setMenu=function(d){this.jsxmenu=d;return this;};f.yg=[ub.X,ub.Y,ub.Z,ub._,ub.aa,ub.ba,ub.ca,ub.da,ub.ea,ub.fa,ub.ga,ub.ha,ub.ia,ub.ja];f.mn={};f.mn[ub.X]=ub.ka;f.mn[ub.Y]=ub.la;f.mn[ub.Z]=ub.ma;f.mn[ub._]=ub.na;f.mn[ub.aa]=ub.oa;f.mn[ub.ba]=ub.pa;f.mn[ub.ca]=ub.qa;f.mn[ub.da]=ub.ra;f.mn[ub.ea]=ub.sa;f.mn[ub.fa]=ub.ta;f.mn[ub.ga]=ub.ua;f.mn[ub.ha]=ub.va;f.mn[ub.ia]=ub.wa;f.mn[ub.ja]=ub.xa;f.isBridgeEventHandler=function(i){if(f.wC==null){f.wC={};for(var
ja=0;ja<f.yg.length;ja++)f.wC[ub.ya+f.yg[ja]]=true;}return f.wC[i];};f._BRIDGE=ub.za;f._EB=ub.Aa;e.qj=function(i,s){var
na={};if((i==null||!i[ub.ba])&&(this.hasHotKey()||this.getAlwaysCheckHotKeys()))na[ub.ba]=true;if((i==null||!i[ub.ia])&&this.getMenu())na[ub.ia]=true;var
S=[];var
Va=this.instanceOf(jsx3.gui.Painted);var
ib=this.getId();for(var
Gb=0;Gb<f.yg.length;Gb++){var
G=f.yg[Gb];var
gb=ub.ya+G;var
ga=[];var
yb=Va?this.getAttribute(gb):null;if(yb)ga[ga.length]=yb.replace(ub.Ba,ub.Ca)+ub.Da;var
Sa=i&&i[G]||na[G];if(Sa){if(typeof Sa!=ub.Ea)Sa=f.mn[G];if(s!=null)ga[ga.length]=ub.Fa+f._EB+ub.Ga+Sa+ub.Ha+s+ub.Ia;else ga[ga.length]=ub.Ja+ib+ub.Ka+f._BRIDGE+ub.Ga+Sa+ub.La;}if(ga.length>0)S[S.length]=ub.Ma+gb+ub.Na+ga.join(ub.Oa)+ub.Pa;}return S.join(ub.Oa);};e.Fg=function(o,r,c){var
Ta=ub.ya+o;var
cb=ub.Oa;var
S=false;if(S){var
pb=this.getAttribute(Ta);if(pb){cb=cb+pb;if(!pb.match(ub.Qa))cb=cb+ub.Da;}}var
qb=c!=null?ub.Fa+f._EB+ub.Ga+r+ub.Ha+c+ub.Ia:ub.Ja+this.getId()+ub.Ka+f._BRIDGE+ub.Ga+r+ub.La;return ub.Ma+Ta+ub.Na+cb+qb+ub.Pa;};e.yp=function(l,c,k){var
nb;if(!l&&c&&(nb=c.ownerDocument.parentWindow))l=nb.event;if(l){var
qb=this[k];var
Va=jsx3.gui.Event.wrap(l);if(qb){qb.call(this,Va,c);}else throw new
jsx3.Exception(jsx3._msg(ub.Ra,k,Va.getType(),this));}};jsx3.dl=function(m,s,j,q){var
Eb=s;q=q||Number(0);for(var
Mb=0;Mb<q;Mb++)Eb=Eb.parentNode;var
gb=Eb.getAttribute(ub.Sa);var
Na=jsx3.GO(gb);if(Na!=null)Na.yp(m,s,j);else if(jsx3.html.getElmUpByTagName(s,ub.Ta)!=null)throw new
jsx3.Exception(jsx3._msg(ub.Ua,gb,q,s));};f._beginMove=function(c,j,k,l){var
Mb=j.ownerDocument;jsx3.gui.Event.preventSelection(Mb);var
ca=c.getTrueX();var
Ua=j.offsetLeft;jsx3.EventHelp.constrainY=l;jsx3.EventHelp.xOff=Ua-ca;var
Ta=c.getTrueY();var
ab=j.offsetTop;jsx3.EventHelp.constrainX=k;jsx3.EventHelp.yOff=ab-Ta;jsx3.EventHelp.Fr=j;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.beginTrackMouse(c);c.setCapture(j);c.cancelReturn();c.cancelBubble();};f._beginMoveConstrained=function(k,b,p){var
Db=b.ownerDocument;jsx3.gui.Event.preventSelection(Db);jsx3.EventHelp.startX=k.getTrueX();jsx3.EventHelp.startY=k.getTrueY();jsx3.EventHelp.xOff=b.offsetLeft;jsx3.EventHelp.yOff=b.offsetTop;jsx3.EventHelp.dragRounder=p;jsx3.EventHelp.Fr=b;jsx3.EventHelp.FLAG=3;jsx3.EventHelp.iL=false;jsx3.EventHelp.beginTrackMouse(k);k.setCapture(b);k.cancelReturn();k.cancelBubble();};e.doBeginMove=function(m,s){if(!m.leftButton())return;if(s==null)s=this.getRendered();var
Fa=s.ownerDocument;var
Ab=this.doEvent(ub.B,{objEVENT:m});var
wa=Ab===false;if(s!=null&&!wa){s.style.zIndex=(this.getServer()).getNextZIndex(jsx3.app.Server.Z_DRAG);jsx3.gui.Event.preventSelection(Fa);var
W=m.getTrueX();var
Ka=s.style.position==ub.Va?parseInt(s.style.left)||0:s.scrollLeft;if(Ab&&Ab.bCONSTRAINY)jsx3.EventHelp.constrainY=true;jsx3.EventHelp.xOff=Ka-W;var
lb=m.getTrueY();var
aa=s.style.position==ub.Va?parseInt(s.style.top)||0:s.scrollTop;if(Ab&&Ab.bCONSTRAINX)jsx3.EventHelp.constrainX=true;jsx3.EventHelp.yOff=aa-lb;jsx3.EventHelp.Fr=s;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.iL=false;jsx3.EventHelp.beginTrackMouse(m);m.setCapture(s);}};e.doEndMove=function(m,s){if(s==null)s=this.getRendered();if(s!=null){s.style.zIndex=this.getZIndex();m.releaseCapture(s);var
Va=parseInt(s.style.left);var
Lb=parseInt(s.style.top);this.setLeft(Va);this.setTop(Lb);this.doEvent(ub.t,{objEVENT:m,intL:Va,intT:Lb,_gipp:1});}};e.doDrag=function(n,r,j,c){n.cancelAll();if(r==null){r=n.srcElement();while(r!=null&&r.getAttribute(ub.Wa)==null){r=r.parentNode;if(r=(r.ownerDocument.getElementsByTagName(ub.Ta))[0])r=null;}if(r==null)return;}var
Z=r.getAttribute(ub.Wa);var
ja=r.getAttribute(ub.Xa);if(c==null)c={};c.strDRAGID=r.getAttribute(ub.Wa);c.strDRAGTYPE=r.getAttribute(ub.Xa);c.objGUI=r;c.objEVENT=n;if(this.doEvent(ub.J,c)===false)return;jsx3.EventHelp.DRAGTYPE=c.strDRAGTYPE;jsx3.EventHelp.DRAGID=c.strDRAGID;if(jsx3.$A.is(c.strDRAGIDS))jsx3.EventHelp.DRAGIDS=c.strDRAGIDS;jsx3.EventHelp.JSXID=this;if(j==null)j=jsx3.EventHelp.drag;var
C=j(r,this,jsx3.EventHelp.DRAGTYPE,jsx3.EventHelp.DRAGID);if(C==null){return false;}else{jsx3.EventHelp.dragItemHTML=C;jsx3.EventHelp.FLAG=2;jsx3.EventHelp.iL=true;jsx3.EventHelp.beginTrackMouse(n);}jsx3.EventHelp.constrainX=false;jsx3.EventHelp.constrainY=false;};e.doDrop=function(s,m,b){if(jsx3.EventHelp.DRAGID!=null){var
oa=jsx3.EventHelp.JSXID;var
ka=jsx3.EventHelp.DRAGID;var
qb=jsx3.EventHelp.DRAGTYPE;var
hb={objEVENT:s,objSOURCE:oa,strDRAGID:ka,strDRAGTYPE:qb};if(b==jsx3.EventHelp.ONDROP&&jsx3.gui.isMouseEventModKey(s)){hb.objGUI=s.srcElement();this.doEvent(ub.G,hb);jsx3.EventHelp.reset();}else if(b==jsx3.EventHelp.ONDROP){hb.objGUI=s.srcElement();this.doEvent(ub.K,hb);jsx3.EventHelp.reset();}else if(b==jsx3.EventHelp.ONBEFOREDROP){hb.objGUI=s.toElement();this.doEvent(ub.z,hb);}else if(b==jsx3.EventHelp.ONCANCELDROP){hb.objGUI=s.fromElement();this.doEvent(ub.F,hb);}}};e.doSpyOver=function(b,k,o){var
Da=b.getTrueX();var
Ja=b.getTrueY();if(this._jsxspytimeout)return;if(o==null)o={};b.yh();o.objEVENT=b;var
Jb=this;this._jsxspytimeout=window.setTimeout(function(){if(Jb.getParent()==null)return;Jb._jsxspytimeout=null;var
Aa=Jb.doEvent(ub.T,o);if(Aa)Jb.showSpy(Aa,b);},jsx3.EventHelp.SPYDELAY);};e.doSpyOut=function(m,s){if(m.isFakeOut(s))return;if(!jsx3.gui.Heavyweight)return;var
Ha=jsx3.gui.Heavyweight.GO(ub.Ya);if(Ha){var
Cb=Ha.getRendered();if(Cb&&m.isFakeOut(Cb))return;}window.clearTimeout(this._jsxspytimeout);this._jsxspytimeout=null;f.hideSpy();};e.showSpy=function(h,s,o){if(h!=null){jsx3.require(ub.Za);f.hideSpy();h=ub._a+h+ub.ab;var
_a=new
jsx3.gui.Heavyweight(ub.Ya,this);_a.setHTML(h);_a.setRatio(1.4);if(s instanceof N){_a.addXRule(s,ub.bb,ub.bb,12);_a.addXRule(s,ub.cb,ub.cb,-12);_a.addYRule(s,ub.db,ub.eb,6);_a.addYRule(s,ub.eb,ub.db,-6);}else{_a.addRule(s,ub.bb,-2,ub.fb);_a.addRule(s,ub.cb,12,ub.fb);_a.addRule(null,ub.bb,-24,ub.fb);_a.addRule(o,ub.eb,-2,ub.gb);_a.addRule(o,ub.db,-6,ub.gb);_a.setOverflow(3);}_a.show();var
ea=_a.getRendered();if(ea){var
Ca=(ea.ownerDocument.getElementsByTagName(ub.Ta))[0];if(parseInt(ea.style.width)+parseInt(ea.style.left)>Ca.offsetWidth)_a.applyRules(ub.fb);}N.subscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}};f.hideSpy=function(){if(jsx3.gui.Heavyweight){var
ab=jsx3.gui.Heavyweight.GO(ub.Ya);if(ab){ab.destroy();N.unsubscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}}};e.getSpyStyles=function(i){return this.jsxspystyle?this.jsxspystyle:i?i:null;};e.setSpyStyles=function(s){delete this[ub.hb];delete this[ub.ib];delete this[ub.jb];delete this[ub.kb];this.jsxspystyle=s;};e.qO=function(){var
ua={};if(jsx3.util.strEmpty(this.getSpyStyles())&&this.jsxspystylekeys!=null){var
aa=(this.jsxspystylekeys||ub.Oa).split(ub.lb);var
Pa=(this.jsxspystylevalues||ub.Oa).split(ub.lb);for(var
Na=0;Na<aa.length;Na++)ua[aa[Na]]=Pa[Na];}else{var
Ra=this.getSpyStyles(ub.o);var
E=ub.mb;var
ua={};var
W=Ra.split(ub.Da);for(var
Na=0;Na<W.length;Na++){var
pb=W[Na]+ub.Oa;var
Ia=pb.split(ub.nb);if(Ia&&Ia.length==2){var
za=Ia[0].replace(E,function(k,j){return (j.substring(1)).toUpperCase();});ua[za]=Ia[1];}}}return ua;};e.applySpyStyle=function(q){if(this._jsxIu==null)this._jsxIu=this.qO();if(this._jsxsP==null){this._jsxsP={};for(var Hb in this._jsxIu)this._jsxsP[Hb]=q.style[Hb];}try{for(var Hb in this._jsxIu)q.style[Hb]=this._jsxIu[Hb];}catch(Kb){}};e.removeSpyStyle=function(s){try{for(var ca in this._jsxsP)s.style[ca]=this._jsxsP[ca];}catch(Kb){}};e.checkHotKeys=function(h){if(this._jsxVY==null)return false;if(h.isModifierKey())return false;var
Gb=false;var
sb=h.getAttribute(ub.ob);for(var ya in this._jsxVY){var
Va=this._jsxVY[ya];if(Va instanceof jsx3.gui.HotKey){if(Va.isDestroyed()){delete this._jsxVY[ya];continue;}else if(!Va.isEnabled())continue;if(Va.isMatch(h)){var
va=true;if(!sb)va=Va.invoke(this,[h]);if(va!==false)Gb=true;}}}if(Gb)h.cancelAll();return Gb;};e.registerHotKey=function(p,r,k,a,b){var
I;if(p instanceof jsx3.gui.HotKey){I=p;}else{var
ga=typeof p==ub.W?p:this[p];if(!(typeof ga==ub.W))throw new
jsx3.IllegalArgumentException(ub.pb,p);I=new
jsx3.gui.HotKey(ga,r,k,a,b);}if(this._jsxVY==null)this._jsxVY={length:0};var
U=I.getKey();this._jsxVY.length+=(this._jsxVY[U]?0:1);this._jsxVY[U]=I;return I;};e.hasHotKey=function(){return this._jsxVY!=null&&this._jsxVY.length>0;};e.setAlwaysCheckHotKeys=function(i){this.jsxalwayscheckhk=i;return this;};e.getAlwaysCheckHotKeys=function(){return this.jsxalwayscheckhk;};e.clearHotKeys=function(){this._jsxVY=null;};f.getVersion=function(){return ub.qb;};e.isOldEventProtocol=function(){var
Db=this.getServer();return Db&&Db.getEnv(ub.rb)<3.1;};e.rB=function(l){this.doEvent(ub.H,{objPARENT:l});};jsx3.app.Model.jsxclass.addMethodMixin(ub.sb,f.jsxclass,ub.tb);});jsx3.Event=jsx3.gui.Interactive;jsx3.Class.defineClass("jsx3.EventHelp",null,null,function(j,q){var
ub={a:"mousemove",b:"mouseup",c:"",d:/<[^>]*>/gi,e:" ",f:"...",g:"... ... ...",h:"<span class='jsx30block_drag'>",i:"</span>",j:"px",k:"dragRounder",l:"_jsxdrag",m:"body",n:'<div id="_jsxdrag"',o:' style="position:absolute;left:',p:"px;top:",q:"px;min-width:10px;z-index:",r:';">',s:"</div>",t:"beforeEnd"};j.ONBEFOREDROP=0;j.ONDROP=1;j.ONCANCELDROP=2;j.DRAGICONINDEX=32000;j.DEFAULTSPYLEFTOFFSET=5;j.DEFAULTSPYTOPOFFSET=5;j.SPYDELAY=300;j.FLAG=0;j.iL=false;j.yOff=0;j.xOff=0;j.Fr=null;j.beginTrackMouse=function(e){jsx3.gui.Event.subscribe(ub.a,j.mouseTracker);jsx3.gui.Event.subscribe(ub.b,j.mouseUpTracker);};j.endTrackMouse=function(){jsx3.gui.Event.unsubscribe(ub.a,j.mouseTracker);jsx3.gui.Event.unsubscribe(ub.b,j.mouseUpTracker);};j.mouseTracker=function(f){j.doMouseMove(f.event);};j.mouseUpTracker=function(b){j.reset();};j.drag=function(n,s,l,c){var
Aa=n&&n.innerHTML?jsx3.util.strTruncate((n.innerHTML+ub.c).replace(ub.d,ub.e),25,ub.f,0.5):ub.g;return ub.h+Aa+ub.i;};j.doMouseMove=function(f){if(j.FLAG==1||j.FLAG==3){var
Xa=j.Fr.ownerDocument;if(j.FLAG==1){if(!j.constrainX)j.Fr.style.left=f.getTrueX()+j.xOff+ub.j;if(!j.constrainY)j.Fr.style.top=f.getTrueY()+j.yOff+ub.j;}else{var
_=f.getTrueX()-j.startX;var
Ka=f.getTrueY()-j.startY;var
ya=j[ub.k](j.xOff+_,j.yOff+Ka,f);if(ya[0]!=j.offsetLeft||ya[1]!=j.offsetTop){if(!isNaN(ya[0]))j.Fr.style.left=ya[0]+ub.j;if(!isNaN(ya[1]))j.Fr.style.top=ya[1]+ub.j;}}}else if(j.FLAG==2){var
Xa=j.JSXID.getDocument();var
pa=Xa.getElementById(ub.l);if(pa)jsx3.html.removeNode(pa);var
ua=(Xa.getElementsByTagName(ub.m))[0];j.xOff=10;j.yOff=10;jsx3.gui.Event.preventSelection(Xa);var
y=ub.n+jsx3.html._d+ub.o+(j.constrainX?parseInt(j.Fr.style.left):f.getTrueX()+j.xOff)+ub.p+(j.constrainY?parseInt(j.Fr.style.top):f.getTrueY()+j.yOff)+ub.q+j.DRAGICONINDEX+ub.r+j.dragItemHTML+ub.s;jsx3.html.insertAdjacentHTML(ua,ub.t,y);j.Fr=Xa.getElementById(ub.l);j.FLAG=1;}else j.endTrackMouse();};j.reset=function(){j.DRAGTYPE=null;j.DRAGID=null;j.DRAGIDS=null;j.FLAG=0;j.endTrackMouse();if(j.Fr){if(j.Fr.id==ub.l)jsx3.html.removeNode(j.Fr);if(jsx3.CLASS_LOADER.IE)j.Fr.releaseCapture();j.Fr=null;j.constrainX=false;j.constrainY=false;}};j.isDragging=function(){return j.Fr!=null&&j.iL;};j.getDragIcon=function(){return j.Fr;};j.getDragSource=function(){return j.JSXID;};j.getDragType=function(){return j.DRAGTYPE;};j.getDragId=function(){return j.DRAGID;};j.getDragIds=function(){return jsx3.$A.is(j.DRAGIDS)?j.DRAGIDS:[j.DRAGID];};});jsx3.Class.defineInterface("jsx3.gui.Alerts",null,function(j,g){var
ub={a:"jsxexecute",b:"xml/components/dialog_alert.xml",c:"ok",d:"title",e:"message",f:"y0",g:"this.",h:"(this.getAncestorOfType(jsx3.gui.Dialog));",i:"xml/components/dialog_prompt.xml",j:"cancel",k:"var d = this.getAncestorOfType(jsx3.gui.Dialog); this.",l:"(d, d.getDescendantOfName('value').getValue());",m:"value",n:"xml/components/dialog_confirm.xml",o:"no",p:"",q:"bold"};var
wa=ub.a;g.getAlertsParent=jsx3.Method.newAbstract();g.alert=function(c,r,d,o,s){var
ha=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.b,false,jsx3.getSharedCache(),ha);var
vb=Kb.getDescendantOfName(ub.c);if(c!=null)(Kb.getDescendantOfName(ub.d)).setText(c);if(r!=null)(Kb.getDescendantOfName(ub.e)).setText(r);if(o===false)Kb.hideButton();else if(o!=null)vb.setText(o);if(d!=null){var
ta=ub.f;vb.y0=d;vb.setEvent(ub.g+ta+ub.h,wa);}this.configureAlert(Kb,s);(this.getAlertsParent()).paintChild(Kb);Kb.focus();return Kb;};g.prompt=function(f,b,c,m,l,r,p){var
Ab=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.i,false,jsx3.getSharedCache(),Ab);var
Gb=Kb.getDescendantOfName(ub.c);var
pa=Kb.getDescendantOfName(ub.j);if(f!=null)(Kb.getDescendantOfName(ub.d)).setText(f);if(b!=null)(Kb.getDescendantOfName(ub.e)).setText(b);if(l!=null)Gb.setText(l);if(r!=null)pa.setText(r);if(c!=null){var
zb=ub.f;Gb.y0=c;Gb.setEvent(ub.k+zb+ub.l,wa);}if(m!=null){var
zb=ub.f;pa.y0=m;pa.setEvent(ub.g+zb+ub.h,wa);}this.configureAlert(Kb,p);(this.getAlertsParent()).paintChild(Kb);jsx3.sleep(function(){(Kb.getDescendantOfName(ub.m)).focus();});return Kb;};g.confirm=function(d,f,n,b,h,a,i,c,s,l){var
ab=jsx3.net.URIResolver.JSX;var
Ka=(this.getAlertsParent()).loadAndCache(ub.n,false,jsx3.getSharedCache(),ab);var
Z=Ka.getDescendantOfName(ub.c);var
Ab=Ka.getDescendantOfName(ub.j);var
ia=Ka.getDescendantOfName(ub.o);var
ba=[Z,Ab,ia];i=i!=null?i-1:0;if(d!=null)(Ka.getDescendantOfName(ub.d)).setText(d);if(f!=null)(Ka.getDescendantOfName(ub.e)).setText(f);if(h!=null)Z.setText(h);if(a!=null)Ab.setText(a);if(b!=null){var
Ca=ub.f;Ab.y0=b;Ab.setEvent(ub.g+Ca+ub.h,wa);}if(n!=null){var
Ca=ub.f;Z.y0=n;Z.setEvent(ub.g+Ca+ub.h,wa);}if(c!=null||s!=null||i==3){if(s)ia.setText(s);if(c){var
Ca=ub.f;ia.y0=c;ia.setEvent(ub.g+Ca+ub.h,wa);}ia.setDisplay(ub.p);}var
sa=ba[i];if(sa){sa.setFontWeight(ub.q);Ka.registerHotKey(function(o){if(o.enterKey()){(this.getDescendantOfName(sa.getName())).doExecute(o);o.cancelBubble();}},13,false,false,false);}this.configureAlert(Ka,l);(this.getAlertsParent()).paintChild(Ka);Ka.focus();return Ka;};g.configureAlert=function(p,h){if(h==null)return;if(h.width)p.setWidth(h.width,false);if(h.height)p.setHeight(h.height,false);if(h.noTitle)p.removeChild(p.getChild(ub.d));if(h.nonModal)p.setModal(0);};});jsx3.Alerts=jsx3.gui.Alerts;jsx3.require("jsx3.gui.Painted","jsx3.gui.Interactive");jsx3.Class.defineClass("jsx3.gui.Block",jsx3.gui.Painted,[jsx3.gui.Interactive],function(l,k){var
ub={A:/<[^>]*>/gi,Aa:"&quot;",B:" ",Ba:' title="',C:"...",Ca:"visibility:hidden;",D:"... ... ...",Da:"z-index:",E:"<span class='jsx30block_drag'>",Ea:"onfocus",F:"</span>",Fa:"_mask",G:"padding",Ga:"jsxbgcolor",H:"0px",Ha:"@Solid Shadow",I:"top",Ia:"jsxbg",J:"position",Ja:"@Mask 70%",K:"relative",Ka:"jsxcursor",L:"absolute",La:"@Wait",M:"visibility",Ma:"if (objEVENT.tabKey() && objEVENT.shiftKey()) { this.getParent().focus(); }",N:"zIndex",Na:"var objEVENT = jsx3.gui.Event.wrap(event); if (objEVENT.shiftKey()) { jsx3.GO(this.id).getParent().focus(); }",O:"box",Oa:"_jsxcQ",P:"100%",Pa:"tabIndex",Q:"div",Qa:"_jsxZs",R:"jsx3.gui.CDF",Ra:"3.00.00",S:"jsxdblclick",T:"dblclick",U:"jsxclick",V:"click",W:"jsxkeydown",X:"keydown",Y:"mouseover",Z:"mouseout",_:"mousedown",a:"Verdana",aa:"doBeginMove",b:"#000000",ba:"doBeginDrag",c:"&#160;",ca:' JSXDragId="',d:"jsx30block",da:'" JSXDragType="JSX_GENERIC"',e:"span",ea:' id="',f:"bold",fa:'"',g:"normal",ga:' class="',h:"",ha:'" ',i:"none",ia:' label="',j:"visible",ja:"background-color:",k:"hidden",ka:";",l:"left",la:"color:",m:"center",ma:"cursor:",n:"right",na:"block",o:"jsx:///images/spc.gif",oa:"display:block;",p:"backgroundColor",pa:"display:none;",q:"border",qa:"font-family:",r:"color",ra:"font-size:",s:"cursor",sa:"px;",t:"relativebox",ta:"font-weight:",u:/display:([^;]*);?/i,ua:' tabindex="',v:"$1",va:'" jsxtabindex="',w:"display",wa:"overflow:auto;",x:"margin",xa:"overflow:hidden;",y:"mouseup",ya:"text-align:",z:"doEndMove",za:/\"/g};var
ga=jsx3.gui.Event;var
F=jsx3.gui.Interactive;l.SCROLLSIZE=16;l.OVERFLOWSCROLL=1;l.OVERFLOWHIDDEN=2;l.OVERFLOWEXPAND=3;l.DEFAULTFONTNAME=ub.a;l.DEFAULTFONTSIZE=10;l.DEFAULTCOLOR=ub.b;l.DEFAULTTEXT=ub.c;l.DEFAULTCLASSNAME=ub.d;l.DEFAULTTAGNAME=ub.e;l.FONTBOLD=ub.f;l.FONTNORMAL=ub.g;l.DISPLAYBLOCK=ub.h;l.DISPLAYNONE=ub.i;l.VISIBILITYVISIBLE=ub.j;l.VISIBILITYHIDDEN=ub.k;l.NULLSTYLE=-1;l.ALIGNLEFT=ub.l;l.ALIGNCENTER=ub.m;l.ALIGNRIGHT=ub.n;l.ABSOLUTE=0;l.RELATIVE=1;l.MASK_NO_EDIT=jsx3.gui.Painted.MASK_NO_EDIT;l.MASK_ALL_EDIT=jsx3.gui.Painted.MASK_ALL_EDIT;l.MASK_MOVE_ONLY={MM:true};l.MASK_EAST_ONLY={NN:false,EE:true,SS:false,WW:false,MM:false};l.SPACE=jsx3.resolveURI(ub.o);if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(l.SPACE);k.init=function(n,r,f,e,i,s){this.jsxsuper(n);if(r!=null)this.setLeft(r);if(f!=null)this.setTop(f);if(e!=null)this.setWidth(e);if(i!=null)this.setHeight(i);if(s!=null)this.setText(s);};k.getBackgroundColor=function(){return this.jsxbgcolor;};k.setBackgroundColor=function(n,j){this.jsxbgcolor=n;if(j)this.updateGUI(ub.p,n==l.NULLSTYLE?ub.h:n);return this;};k.getBackground=function(){return this.jsxbg;};k.setBackground=function(p){this.jsxbg=p;return this;};k.getBorder=function(){return this.jsxborder;};k.setBorder=function(n,e){this.jsxborder=n;if(e)this.recalcBox([ub.q]);else this.Qf();return this;};k.getColor=function(){return this.jsxcolor;};k.setColor=function(m,e){this.jsxcolor=m;if(e)this.updateGUI(ub.r,m==l.NULLSTYLE?ub.h:m);return this;};k.getCursor=function(){return this.jsxcursor;};k.setCursor=function(c,e){this.jsxcursor=c;if(e)this.updateGUI(ub.s,c);return this;};k.getCSSOverride=function(){return this.jsxstyleoverride;};k.setCSSOverride=function(h){this.jsxstyleoverride=h;return this;};k.getClassName=function(){return this.jsxclassname;};k.setClassName=function(h){this.jsxclassname=h;return this;};k.getDisplay=function(){return this.jsxdisplay;};k.setDisplay=function(a,d){if(this.jsxdisplay!=a){this.jsxdisplay=a;if(d){if(a!=ub.i){var
W=this.Wl();if(!(this.getRelativePosition()==0||W&&W.getBoxType()!=ub.t)){var
Ka=(jsx3.gui.Painted.Box.getCssFix()).replace(ub.u,ub.v);if(!jsx3.util.strEmpty(Ka))a=Ka;}}if(a==ub.i)jsx3.html.persistScrollPosition(this.getRendered());this.updateGUI(ub.w,a);if(a!=ub.i){jsx3.gui.Painted._onAfterRestoreViewCascade(this,this.getRendered());jsx3.html.restoreScrollPosition(this.getRendered());}}}return this;};k.getFontName=function(){return this.jsxfontname;};k.setFontName=function(d){this.jsxfontname=d;return this;};k.getFontSize=function(){return this.jsxfontsize;};k.setFontSize=function(f){this.jsxfontsize=f;return this;};k.getFontWeight=function(){return this.jsxfontweight;};k.setFontWeight=function(f){this.jsxfontweight=f;return this;};k.getHeight=function(){return this.jsxheight;};k.setHeight=function(g,e){this.jsxheight=g;if(e){this.Mc({height:g},true);}else this.Qf();return this;};k.getIndex=function(){return this.jsxindex;};k.setIndex=function(c,b){this.jsxindex=c;if(b){var
ra=this.getRendered();if(ra!=null)ra.tabIndex=c;}return this;};l.getJSXParent=function(q){return jsx3.html.getJSXParent(q);};k.getLeft=function(){return this.jsxleft;};k.setLeft=function(s,r){this.jsxleft=s;if(r){if(isNaN(s))s=0;this.Mc({left:s},true);}else this.clearBoxProfile(false);return this;};k.setDimensions=function(c,f,q,g,h){if(jsx3.$A.is(c)){h=f;g=c[3];q=c[2];f=c[1];c=c[0];}if(c!=null)this.jsxleft=c;if(f!=null)this.jsxtop=f;if(q!=null)this.jsxwidth=q;if(g!=null)this.jsxheight=g;if(h){this.Mc({left:this.jsxleft,top:this.jsxtop,width:this.jsxwidth,height:this.jsxheight},true);}else this.Qf();};k.getDimensions=function(){return [this.getLeft(),this.getTop(),this.getWidth(),this.getHeight()];};k.getMargin=function(){return this.jsxmargin;};k.setMargin=function(g,j){this.jsxmargin=g;if(j)this.recalcBox([ub.x]);else this.Qf();return this;};k.getMaskProperties=function(){var
xa={};xa.NN=true;xa.SS=true;xa.EE=true;xa.WW=true;xa.MM=this.getRelativePosition()==0;return xa;};k.doBeginMove=function(r,n){if(r.leftButton()){this.jsxsupermix(r,n);ga.subscribe(ub.y,this,ub.z);r.cancelAll();}};k.doEndMove=function(o){o=o.event;var
za=this.getRendered(o);if(o.leftButton()){ga.unsubscribe(ub.y,this,ub.z);this.jsxsupermix(o,za);}else this.yo(o,za);};k.getDragIcon=function(p,s,j,e){var
Cb=p&&p.innerHTML?jsx3.util.strTruncate((p.innerHTML+ub.h).replace(ub.A,ub.B),25,ub.C,0.5):ub.D;return ub.E+Cb+ub.F;};k.doBeginDrag=function(m,s){if(m.leftButton())this.doDrag(m,s,this.getDragIcon);};k.getOverflow=function(){return this.jsxoverflow;};k.setOverflow=function(q){this.jsxoverflow=q;return this;};k.getPadding=function(){return this.jsxpadding;};k.setPadding=function(r,a){this.jsxpadding=r;if(a)this.recalcBox([ub.G]);else this.Qf();return this;};k.getPropertiesPath=function(){return null;};k.getModelEventsPath=function(){return null;};k.getRelativePosition=function(){return this.jsxrelativeposition;};k.setRelativePosition=function(c,b){if(this.jsxrelativeposition!=c){this.Qf();this.jsxrelativeposition=c;if(b){if(c==0){this.setDimensions(this.getLeft()||Number(0),this.getTop()||Number(0),null,null,true);this.updateGUI(ub.x,ub.H);}else{this.updateGUI(ub.l,ub.H);this.updateGUI(ub.I,ub.H);if(this.getMargin())this.setMargin(this.getMargin(),true);}this.updateGUI(ub.J,c==1?ub.K:ub.L);if(this.getDisplay()!=ub.i)this.setDisplay(ub.h,true);}}return this;};k.getTagName=function(){return this.jsxtagname;};k.setTagName=function(o){this.jsxtagname=o;this.Qf();return this;};k.getText=function(){return this.jsxtext;};k.setText=function(b,o){this.jsxtext=b;if(o)if(this.getChild(0)!=null||(this.Wl(true)).lg(0)!=null){this.repaint();}else{var
Qa=this.getRendered();if(Qa!=null)Qa.innerHTML=b;}return this;};k.getTextAlign=function(){return this.jsxtextalign;};k.setTextAlign=function(m){this.jsxtextalign=m;return this;};k.getTip=function(){return this.jsxtip;};k.setTip=function(b){this.jsxtip=b;var
va;if(va=this.getRendered())va.title=b;return this;};k.getTop=function(){return this.jsxtop;};k.setTop=function(e,b){this.jsxtop=e;if(b){if(isNaN(e))e=0;this.Mc({top:e},true);}else this.clearBoxProfile(false);return this;};k._findGUI=function(r){return this.getRendered();};k.updateGUI=function(j,m){var
Z=this._findGUI(j);if(Z!=null)try{Z.style[j]=m;}catch(Kb){}};k.getVisibility=function(){return this.jsxvisibility;};k.setVisibility=function(c,o){if(c!=ub.k)c=ub.j;this.jsxvisibility=c;if(o)this.updateGUI(ub.M,c);return this;};k.getWidth=function(){return this.jsxwidth;};k.setWidth=function(i,d){this.jsxwidth=i;if(d){this.Mc({width:i},true);}else this.Qf();return this;};k.getZIndex=function(){return this.jsxzindex;};k.setZIndex=function(a,q){this.jsxzindex=a;if(q)this.updateGUI(ub.N,a);return this;};k.Hj=function(d,a,n){this.sk(d,a,n,4);};k.zd=function(q){this.applyDynamicProperties();if(this.getParent()&&(q==null||isNaN(q.parentwidth)||isNaN(q.parentheight))){q=(this.getParent()).Id(this);}else if(q==null)q={};var
Ba=q.boxtype&&q.boxtype!=ub.O||this.getRelativePosition()!=0;var
Gb=Ba?null:q.left?q.left:this.getLeft();var
Xa=Ba?null:q.top?q.top:this.getTop();if(!Ba&&!Gb)Gb=0;if(!Ba&&!Xa)Xa=0;var
Ja,ra,sb,Z;if(!q.boxtype)q.boxtype=Ba?ub.t:ub.O;if(q.tagname==null)q.tagname=(Ja=this.getTagName())?Ja.toLowerCase():jsx3.gui.Block.DEFAULTTAGNAME;if(q.left==null&&q.boxtype==ub.O)q.left=Gb;if(q.top==null&&q.boxtype==ub.O)q.top=Xa;if(q.width==null)q.width=q.width?q.width:this.getWidth();if(q.height==null)q.height=q.height?q.height:this.getHeight();if(q.width==ub.P||q.tagname==ub.Q&&this.il()==ub.h){if(q.tagname==ub.e)q.tagname=ub.Q;q.container=true;}if((ra=this.getPadding())!=null&&ra!=ub.h)q.padding=ra;if(Ba&&(sb=this.getMargin())!=null&&sb!=ub.h)q.margin=sb;if((Z=this.getBorder())!=null&&Z!=ub.h)q.border=Z;return new
jsx3.gui.Painted.Box(q);};k.setCDFId=function(r){this.jsxcdfid=r;var
I=this.getAncestorOfType(ub.R);if(I)I.read();};k.getCDFId=function(){return this.jsxcdfid;};k.setCDFAttribute=function(s){this.jsxcdfattribute=s;var
Ja=this.getAncestorOfType(ub.R);if(Ja)Ja.read();};k.getCDFAttribute=function(){return this.jsxcdfattribute;};k.paint=function(h){this.applyDynamicProperties();h=h==null?this.il():h;var
yb=this.getId();var
tb={};if(this.hasEvent(ub.S))tb[ub.T]=true;if(this.hasEvent(ub.U))tb[ub.V]=true;if(this.hasEvent(ub.W))tb[ub.X]=true;var
Fb=ub.h;if(this.getCanSpy()==1){tb[ub.Y]=true;tb[ub.Z]=true;}if(this.getCanMove()==1){if(this.getCanMove()==1)tb[ub._]=ub.aa;}else if(this.getMenu()!=null){tb[ub.y]=true;}else if(this.getCanDrop()==1)tb[ub.y]=true;if(tb[ub._]==null&&this.getCanDrag()==1){tb[ub._]=ub.ba;Fb=Fb+(ub.ca+yb+ub.da);}var
B=this.qj(tb,0)+Fb;var
zb=this.renderAttributes(null,true);var
Oa=this.Wl(true);Oa.setAttributes(this.Rl()+this.nk()+B+ub.ea+yb+ub.fa+this.Ak()+ub.ga+this.dd()+ub.ha+zb);Oa.setStyles(this.cd()+this.ch()+this.ke()+this.jc()+this.Mm()+this._k()+this.Wi()+this.wk()+this.Pb()+this.mi()+this.ad()+this.paintBlockDisplay()+this.Bg());return (Oa.paint()).join(h+this.paintChildren());};k.Ri=function(j,c){if(this.getCanSpy()==1)this.doSpyOver(j,c);if(this.getCanDrop()==1)this.doDrop(j,c,jsx3.EventHelp.ONBEFOREDROP);};k.Uc=function(n,r){if(this.getCanSpy()==1)this.doSpyOut(n,r);if(this.getCanDrop()==1)this.doDrop(n,r,jsx3.EventHelp.ONCANCELDROP);};k.yo=function(j,c){if(this.getCanDrop()==1)this.doDrop(j,c,jsx3.EventHelp.ONDROP);else this.jsxsupermix(j,c);};k.Ak=function(){var
Ia=this.getName();return Ia!=null?ub.ia+Ia+ub.fa:ub.h;};k.ch=function(){var
Ea=this.getBackgroundColor();return Ea?ub.ja+Ea+ub.ka:ub.h;};k.ke=function(){return this.getBackground()?this.getBackground()+ub.ka:ub.h;};k.jc=function(){var
Xa=this.getColor();return Xa?ub.la+Xa+ub.ka:ub.h;};k.mi=function(){var
Ca=this.getCursor();return Ca?ub.ma+Ca+ub.ka:ub.h;};k.Bg=function(){return this.getCSSOverride()?this.getCSSOverride():ub.h;};k.dd=function(){var
X=this.getClassName();return l.DEFAULTCLASSNAME+(X?ub.B+X:ub.h);};k.paintBlockDisplay=function(){if(jsx3.util.strEmpty(this.getDisplay())||this.getDisplay()==ub.na){if(this.getWidth()==ub.P){return ub.oa;}else return ub.h;}else if(this.getDisplay()==ub.i)return ub.pa;return ub.h;};k.lc=function(){var
qa=this.getDisplay();return jsx3.util.strEmpty(qa)||qa==ub.h?ub.h:ub.pa;};k._k=function(){var
aa=this.getFontName();return aa?ub.qa+aa+ub.ka:ub.h;};k.cd=function(){var
Na=parseInt(this.getFontSize());return isNaN(Na)?ub.h:ub.ra+Na+ub.sa;};k.wk=function(){var
W=this.getFontWeight();return W?ub.ta+W+ub.ka:ub.h;};k.Rl=function(c){if(c==null)c=this.getIndex();return c!=null&&this.jsxenabled!=0?ub.ua+c+ub.va+c+ub.fa:ub.h;};k.Mm=function(){if(this.getOverflow()==1){return ub.wa;}else if(this.getOverflow()==2){return ub.xa;}else return ub.h;};k.il=function(){return this.getText()?this.getText():ub.h;};k.Pb=function(){var
Sa=this.getTextAlign();return Sa?ub.ya+Sa+ub.ka:ub.h;};k.nk=function(){var
wb=this.getTip();if(wb!=null){wb=wb.replace(ub.za,ub.Aa);return wb?ub.Ba+wb+ub.ha:ub.h;}else if(jsx3.gui.Form&&this.instanceOf(jsx3.gui.Form)){var
C=this.getKeyBinding();return C?ub.Ba+C.replace(ub.za,ub.Aa)+ub.ha:ub.h;}else return ub.h;};k.ad=function(){return this.getVisibility()==ub.k?ub.Ca:ub.h;};k.Wi=function(){var
Xa=this.getZIndex();return isNaN(Xa)?ub.h:ub.Da+Xa+ub.ka;};k.showMask=function(q){if(this._jsxcQ)this.hideMask();var
S;if(S=this.getRendered()){var
jb=(this.getAbsolutePosition()).H;if(S.onfocus)S._jsxZs=S.onfocus;jsx3.html.addEventListener(S,ub.Ea,l.Ww);if(S.tabIndex)S._jsxtabindex=S.tabIndex;S.tabIndex=0;this._jsxcQ=this.getId()+ub.Fa;var
Z=(((((((((new
l(this._jsxcQ,0,0,ub.P,ub.P,q)).setOverflow(2)).setFontWeight(ub.f)).setTextAlign(ub.m)).setIndex(0)).setRelativePosition(0)).setZIndex(32000)).setDynamicProperty(ub.Ga,ub.Ha)).setDynamicProperty(ub.Ia,ub.Ja)).setDynamicProperty(ub.Ka,ub.La);Z.setWidth(ub.P);Z.setHeight(ub.P);Z.setPadding(parseInt(jb/2));Z.setEvent(ub.Ma,ub.W);Z.setAttribute(ub.Ea,ub.Na);this.setChild(Z);this.paintChild(Z);Z.focus();}};l.Ww=function(p){var
tb=jsx3.GO(this.id);if(tb){var
ma=ga.wrap(p||window.event);if(!ma.shiftKey())if((tb.getChildren()).length)(tb.getLastChild()).focus();}};k.hideMask=function(){var
wb;if(wb=this.getChild(this._jsxcQ)){this.removeChild(wb);delete this[ub.Oa];var
O;if(O=this.getRendered()){if(O._jsxtabindex){O.tabIndex=O._jsxtabindex;}else O.removeAttribute(ub.Pa);jsx3.html.removeEventListener(O,ub.Ea,l.Ww);if(O._jsxZs){O.onfocus=O._jsxZs;delete O[ub.Qa];}else{}}}};l.getVersion=function(){return ub.Ra;};});jsx3.Block=jsx3.gui.Block;