jsx3.Class.defineClass("jsx3.amp.util.Prefs",null,[jsx3.util.EventDispatcher],function(r,a){var
ub={A:"background-image:url(",B:");background-repeat:no-repeat;background-position:center 8px;",C:"0 0 0 0",D:"pointer",E:"1;",a:"prefsImage",b:"40 0 0 0",c:'<div style="position:relative;width:95px;text-align:center;">',d:"</div>",e:" before switching?",f:"unload",g:"switch",h:"save",i:"addPane ",j:"zK",k:"P8",l:"controller",m:"0,*",n:"",o:"Save Changes",p:"Save changes made to ",q:" before closing?",r:"Save",s:"Cancel",t:"Don't Save",u:"number",v:"objPane",w:"#FFFF99",x:"block",y:"100%",z:"div"};var
mb={A:ub.a,B:ub.b,C:ub.c,D:ub.d,E:ub.e,a:ub.f,b:ub.g,c:ub.h,d:ub.i,e:ub.j,f:ub.k,g:ub.l,h:ub.m,i:ub.n,j:ub.o,k:ub.p,l:ub.q,m:ub.r,n:ub.s,o:ub.t,p:ub.u,q:ub.v,r:ub.w,s:ub.x,t:ub.y,u:ub.z,v:ub.A,w:ub.B,x:ub.C,y:ub.D,z:ub.E};var
Xa=jsx3.amp.util;r.UNLOAD=mb.a;r.SWITCH=mb.b;r.SAVE=mb.c;a.init=function(){this.HU=[];this.dC=null;this.dc=null;this.F6=null;this.lQ=false;};a.getCollapse=function(){return this.lQ;};a.setCollapse=function(h){this.lQ=h;};a.addPane=function(k){(Xa.PrefsPane.PLUGIN.getLog()).debug(mb.d+k);this.HU.push(k);if(this.dC!=null)this.JJ(k);k.subscribe(Xa.PrefsPane.SAVED,this,mb.e);k.subscribe(Xa.PrefsPane.DIRTIED,this,mb.f);};a.loadController=function(p){return Xa.PrefsPane.PLUGIN.loadRsrcComponent(mb.g,p,false);};a.renderIn=function(e,f){this.dC=e;this.dc=this.loadController(e);this.dc.getController=(jsx3.$F(function(){return this;})).bind(this);if(this.getCollapse()&&this.HU.length<2){this.dc.setCols(mb.h);(this.dc.getChild(1)).setBorder(mb.i);}for(var
la=0;la<this.HU.length;la++)this.JJ(this.HU[la]);this.dC.paintChild(this.dc);if(this.HU.length>0)jsx3.sleep(function(){if(this.dc.getParent()!=null)this.showPane(f||Number(0));},null,this);};a.unload=jsx3.$Y(function(l){var
Ga=(l.args())[0];var
N=(jsx3.$F(function(){this.dC.removeChild(this.dc);this.publish({subject:r.UNLOAD});l.done(true);})).bind(this);if(!Ga&&this.F6!=null&&this.F6.isDirty()){var
ob=this.dc.getAncestorOfType(jsx3.gui.Dialog)||this.dc.getServer();ob.confirm(mb.j,mb.k+this.F6.getTitle()+mb.l,(jsx3.$F(function(b){b.doClose();(this.F6.save()).when(N);})).bind(this),function(s){s.doClose();l.done(false);},mb.m,mb.n,1,function(b){b.doClose();N();},mb.o);}else N();});a.apply=function(){this.F6.save();};a.save=function(){(this.F6.save()).when((jsx3.$F(this.unload)).bind(this));};a.zK=function(n){var
yb=n.target;if(this.F6==yb)this.dc.setButtonsEnabled(false);this.publish({subject:r.SAVE,pane:yb});};a.P8=function(p){var
rb=p.target;if(this.F6==rb)this.dc.setButtonsEnabled(p.dirty);};a.showPane=jsx3.$Y(function(q){var
la=(q.args())[0];var
U=(q.args())[1];if(typeof la==mb.p)la=this.HU[la];if(la==null)throw new
jsx3.IllegalArgumentException(mb.q,arguments[0]);if(U)(this._showPane2(la)).when(q,true);else (this.NJ()).when((jsx3.$F(function(b){if(b){(this._showPane2(la)).when(q,true);}else q.done(false);})).bind(this));});a._showPane2=jsx3.$Y(function(q){var
U=(q.args())[0];var
Fa=this.F6;var
Sa=this.dc.getContentPane();Sa.removeChildren();this.dc.setButtonsEnabled(false);if(Fa!=null)(this.Nv(Fa)).setBackgroundColor(mb.i,true);(this.Nv(U)).setBackgroundColor(mb.r,true);this.F6=U;(U.K1(Sa)).when((jsx3.$F(function(){var
Ha=U.getFirstResponder();if(Ha!=null)Ha.focus();this.publish({subject:r.SWITCH,from:Fa,to:U});q.done();})).bind(this));});a.Nv=function(b){return (this.dc.getListPane()).getDescendantOfName(mb.s+b.getTitle(),false,true);};a.JJ=function(h){var
la=this.dc.getListPane();var
ba=new
jsx3.gui.Block(mb.s+h.getTitle(),0,0,mb.t,60);ba.setTagName(mb.u);ba.setBackground(mb.v+h.getImage()+mb.w);ba.setOverflow(jsx3.gui.Block.OVERFLOWHIDDEN);ba.setTextAlign(jsx3.gui.Block.ALIGNCENTER);ba.setTip(h.getDescription());ba.setPadding(mb.x);ba.setCursor(mb.y);ba.setEvent(mb.z,jsx3.gui.Interactive.JSXCLICK);ba.subscribe(jsx3.gui.Interactive.JSXCLICK,this,function(){this.showPane(h);});la.setChild(ba);var
O=new
jsx3.gui.Block(mb.A,0,0,95,60);O.setTagName(mb.u);O.setPadding(mb.B);O.setText(mb.C+h.getTitle()+mb.D);O.setTextAlign(jsx3.gui.Block.ALIGNCENTER);ba.setChild(O);la.paintChild(ba);};a.NJ=jsx3.$Y(function(h){var
Z=(h.args())[0];if(this.F6!=null){if(this.F6==Z){h.done(false);}else if(this.F6.isDirty()){var
xb=this.dc.getAncestorOfType(jsx3.gui.Dialog)||this.dc.getServer();xb.confirm(mb.j,mb.k+this.F6.getTitle()+mb.E,(jsx3.$F(function(b){b.doClose();(this.F6.save()).when(h,true);})).bind(this),function(p){p.doClose();h.done(false);},mb.m,mb.n,1,function(n){n.doClose();h.done(true);},mb.o);}else h.done(true);}else h.done(true);});});jsx3.Class.defineClass("jsx3.amp.util.PrefsPane",null,[jsx3.util.EventDispatcher],function(h,p){var
ub={a:"save",b:"dirtied",c:"label",d:"tip",e:"img",f:"resource",g:"object"};var
la={a:ub.a,b:ub.b,c:ub.c,d:ub.d,e:ub.e,f:ub.f,g:ub.g};h.SAVED=la.a;h.DIRTIED=la.b;p.init=function(g,n){this.DI=g;this.J6=n;this.vJ=false;this.FG={};};p.getTitle=function(){return this.J6.attr(la.c);};p.getDescription=function(){return this.J6.attr(la.d);};p.getImage=function(){return (this.DI.getPlugIn()).resolveURI(this.J6.attr(la.e));};p.K1=jsx3.$Y(function(q){var
t=(q.args())[0];var
wa=(this.DI.getPlugIn()).getResource(this.J6.attr(la.f));(wa.load()).when((jsx3.$F(function(){this.dc=(this.DI.getPlugIn()).loadRsrcComponent(wa,t,false);this.dc.getPane=(jsx3.$F(function(){return this;})).bind(this);this.vJ=false;if(this.dc.loadPrefs)this.dc.loadPrefs();t.paintChild(this.dc);q.done();})).bind(this));});p.getUI=function(){return this.dc;};p.getFirstResponder=function(){if(this.dc.getFirstResponder)return this.dc.getFirstResponder();return null;};p.setDirty=function(e){if(this.vJ!=e)this.publish({subject:h.DIRTIED,dirty:e});this.vJ=e;};p.isDirty=function(){return this.vJ;};p.save=jsx3.$Y(function(d){var
Z=this.dc.savePrefs?this.dc.savePrefs():null;if(Z){this.vJ=false;this.publish({subject:h.SAVED});if(typeof Z==la.g){var
wb=this.dc.getAncestorOfType(jsx3.gui.Dialog)||this.dc.getServer();wb.alert(Z.title,Z.message,function(s){s.doClose();d.done();});}else d.done();}else d.done();});p.getProperty=function(f){return this.FG[f];};p.setProperty=function(k,c){this.FG[k]=c;};});
