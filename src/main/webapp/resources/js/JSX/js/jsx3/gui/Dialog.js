/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Alerts","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Dialog",jsx3.gui.Block,[jsx3.gui.Alerts],function(b,r){var
ub={A:"mouseup",Aa:";",B:"doEndMove",Ba:"<span style='display:none;'>&#160;</span>",C:"BeforeMove model event error for the control, ",Ca:'class="jsx30dialog_content"',D:".\nDescription:\n",Da:'class="jsx30dialog_mask"',E:"hidden",Ea:"overflow:hidden;visibility:hidden;",F:"-1px",Fa:"overflow:hidden;cursor:se-resize;z-index:12;background-image:url(",G:"px",Ga:");",H:"body",Ha:"yF",I:"AfterMove model event error for the control, ",Ia:"overflow:hidden;z-index:1;background-image:url(",J:"jsxaftermove",Ja:"&#160;",K:"doEndMove: ",Ka:"jsxmodal",L:"_jsxAW",La:"var d = jsx3.GO('",M:"jsx3.gui.Dialog.restore",Ma:"'); d.doToggleState(d.isFront() ? jsx3.gui.Dialog.MINIMIZED : jsx3.gui.Dialog.MAXIMIZED); false;",N:"@Restore Icon",Na:"@Task Icon",O:"number",Oa:"repaint",P:"jsxbeforeresize",Pa:"overflow:hidden;",Q:"tG",Qa:"overflow:auto;",R:"_jsxEz",Ra:"jsx30dialog",S:"jsxafterresize",Sa:" ",T:"jsxleft",Ta:"#FFFFFF",U:"jsxtop",Ua:"3.0.00",V:"jsxwidth",W:"jsxheight",X:"1px pseudo",Y:"div",Z:"box",_:"100%",a:"#e8e8f5",aa:"0",b:"jsx:///images/dialog/resize.gif",ba:"display:none;",c:"JSXTBB_",ca:"jsxkeypress",d:"jsx3.gui.WindowBar",da:"keypress",e:"jsx3.gui.ToolbarButton",ea:"mousedown",f:"_cbar",fa:"wV",g:"JSXFRAG",ga:"height:",h:"_btn_min",ha:"px;",i:"this.getParent().getParent().doToggleState();",ia:'<div id="',j:"jsxexecute",ja:'" ',k:"jsximage",ka:"keydown",l:"@Min Icon",la:"jX",m:"jsxtip",ma:' style="width:100%;height:100%;position:absolute;left:0px;top:0px;z-index:',n:"jsx3.gui.Dialog.min",na:';"',o:"_btn_max",oa:">",p:"this.getParent().getParent().doMaximize(this);",pa:'<div class="jsx30dialog_modal"',q:"@Max Icon",qa:"xY",r:"jsx3.gui.Dialog.max",ra:"Qq",s:"_btn_close",sa:">&#160;</div>",t:"this.getParent().getParent().doClose();",ta:"<span ",u:"@Close Icon",ua:' style="position:absolute;left:-1px;top:0px;width:1px;height:1px;overflow:hidden;"></span></div>',v:"jsx3.gui.Dialog.close",va:' class="',w:"",wa:"z-index:1;",x:"none",xa:'id="',y:"display",ya:'"',z:"focus",za:"z-index:"};var
Ea=jsx3.gui.Event;var
Ja=jsx3.gui.Interactive;var
sb=jsx3.util.Logger.getLogger(b.jsxclass.getName());b.MINIMIZED=0;b.MAXIMIZED=1;b.DEFAULTBACKGROUNDCOLOR=ub.a;b.FIXED=0;b.RESIZEABLE=1;b.RESIZABLE=1;b.o7=jsx3.resolveURI(ub.b);b.MODAL=1;b.NONMODAL=0;b.XS=[null,32,32,32];b.OP=[10,10,10,10];b.uJ=10;b.kN=ub.c;r.init=function(h,f,c,k){this.jsxsuper(h,null,null,f,c);jsx3.require(ub.d,ub.e);var
Lb=new
jsx3.gui.WindowBar(h+ub.f);if(k!=null)Lb.setText(k);this.setChild(Lb,1,null,ub.g);var
vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.h,null);vb.setEvent(ub.i,ub.j);vb.setDynamicProperty(ub.k,ub.l);vb.setDynamicProperty(ub.m,ub.n);Lb.setChild(vb,1,null,ub.g);vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.o,null);vb.setEvent(ub.p,ub.j);vb.setDynamicProperty(ub.k,ub.q);vb.setDynamicProperty(ub.m,ub.r);Lb.setChild(vb,1,null,ub.g);vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.s,null);vb.setEvent(ub.t,ub.j);vb.setDynamicProperty(ub.k,ub.u);vb.setDynamicProperty(ub.m,ub.v);Lb.setChild(vb,1,null,ub.g);};r.onAfterAssemble=function(i,k){if(this.getWindowState()==1)this.setZIndex(k.getNextZIndex(jsx3.app.Server.Z_DIALOG));};r.getMaskProperties=function(){return this.getModal()==0?jsx3.gui.Block.MASK_ALL_EDIT:jsx3.gui.Block.MASK_NO_EDIT;};r.doToggleState=function(h){var
X=h!=null?h:this.getWindowState()==1?0:1;var
F;if((F=this.getTaskButton())!=null){this.setWindowState(X);var
ua=null;if(X==1){this.setDisplay(ub.w,true);this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier(),true);ua=this;}else{this.setDisplay(ub.x,true);ua=F;}F.setState(X==1?1:0);ua.focus();}else{var
rb=this.NK();if(X==1){rb.childNodes[1].style.display=ub.w;var
la=this.Wl(true);la.recalculate({height:this.getHeight()},rb);var
ja=la.lg(1);ja.recalculate({height:this.getHeight()},rb.childNodes[2]);if(this.getResize()){rb.childNodes[3].style.display=ub.w;rb.childNodes[4].style.display=ub.w;}this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier(),true);this.setWindowState(1);}else{jsx3.html.persistScrollPosition(rb.childNodes[1]);rb.childNodes[1].style.display=ub.x;var
la=this.Wl(true);myCaptionBar=this.getCaptionBar();var
Jb=la.getBorderHeight()+(myCaptionBar!=null?myCaptionBar.getHeight():0)+2*this.getBuffer(2);la.recalculate({height:Jb},rb);var
ja=la.lg(1);ja.recalculate({height:Jb},rb.childNodes[2]);if(this.getResize()){rb.childNodes[3].style.display=ub.x;rb.childNodes[4].style.display=ub.x;}this.setWindowState(0);}}if(this.getWindowState()==1){jsx3.gui.Painted._onAfterRestoreViewCascade(this,this.NK());jsx3.html.restoreScrollPosition(this.NK());}};r.setDisplay=function(i,s){this.jsxdisplay=i;if(s){if(i==ub.x)jsx3.html.persistScrollPosition(this.NK());this.updateGUI(ub.y,i);}return this;};r._findGUI=function(e){return this.NK();};r.focus=function(c){if(!c){jsx3.sleep(function(){this.focus(true);},ub.z+this.getId(),this);return;}var
X=this.NK();if(!X)return;if(this.getWindowState()==0){if(this.getTaskButton())this.doToggleState(1);else jsx3.html.focus(this.NK());}else{var
L=jsx3.app.Browser.isTableMoveBroken();if(L)X.childNodes[1].style.display=ub.x;this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);var
_=this.getCaptionBar();if(_!=null)_.focus();else jsx3.html.focus(this.NK());if(L)X.childNodes[1].style.display=ub.w;}};r.isFront=function(){if(this.getWindowState()==0)return false;var
C=this.getParent();var
fa=C.getDescendantsOfType(b,true);for(var
ra=0;ra<fa.length;ra++)if(fa[ra]!=this&&fa[ra].getWindowState()==1&&fa[ra].getZIndex()>this.getZIndex())return false;return true;};r.wV=function(i,d){if(!this.isFront()){var
Hb=this.fC();var
O=Hb.style.display;var
va=jsx3.app.Browser.isTableMoveBroken();if(O!=ub.x&&va)Hb.style.display=ub.x;this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);if(O!=ub.x&&va)Hb.style.display=O;}};r.fC=function(){var
Y=this.NK();return Y!=null?Y.childNodes[1]:null;};r.getTaskButton=function(k){if(k==null){var
Db=this.getServer();if(Db!=null)k=Db.getTaskBar();}if(k!=null)return k.getChild(b.kN+this.getId());return null;};r.paintChild=function(h,j){var
G=this.NK();if(G!=null)if(this.getCaptionBar()==h){this.repaint();}else this.jsxsuper(h,j,G.childNodes[1]);};r.doClose=function(){(this.getParent()).removeChild(this);};r.onSetParent=function(j){var
ia=this.getServer();if(ia!=null&&ia!=j.getServer())this.m7(ia);return true;};r.onSetChild=function(l){this.jsxsuper(l);if(!this.getCaptionBar()&&b.vP(l))this.clearBoxProfile(true);return true;};r.m7=function(h){if(h==null)h=this.getServer();var
xa=this.getTaskButton(h.getTaskBar());if(xa!=null)(xa.getParent()).removeChild(xa);};r.onDestroy=function(p){this.m7(p.getServer());this.jsxsuper(p);};r.getWindowState=function(){return this.jsxwindowstate!=null?this.jsxwindowstate:1;};r.setWindowState=function(i){this.jsxwindowstate=i;return this;};r.getZMultiplier=function(){return this.jsxzmultiplier!=null?this.jsxzmultiplier:1;};r.setZMultiplier=function(i){this.jsxzmultiplier=i;return this;};r.getModal=function(){return this.jsxmodal!=null?this.jsxmodal:0;};r.setModal=function(k){this.jsxmodal=k;return this;};r.doBeginMove=function(k,a){if(k.leftButton()){this._jsxK0=true;var
Va=this.NK();var
Pa=Va.childNodes[2];Pa.style.visibility=ub.w;jsx3.html.focus(Va.childNodes[0]);try{this.jsxsupermix(k,Pa);Ea.subscribe(ub.A,this,ub.B);this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);}catch(Kb){var
Na=jsx3.lang.NativeError.wrap(Kb);sb.error(ub.C+this.getName()+ub.D+Na);this.tx(Pa);}}};r.tx=function(a){a.style.visibility=ub.E;a.style.left=ub.F;a.style.top=ub.F;this._jsxK0=false;Ea.unsubscribe(ub.A,this,ub.B);};r.doEndMove=function(d){if(this._jsxK0){var
db=this.NK();var
ra=db.childNodes[2];db.style.left=parseInt(parseInt(db.style.left)+parseInt(ra.style.left)+1)+ub.G;db.style.top=parseInt(parseInt(db.style.top)+parseInt(ra.style.top)+1)+ub.G;this.tx(ra);d=d.event;if((db.ownerDocument.getElementsByTagName(ub.H))[0]){try{this.jsxsupermix(d,db);}catch(Kb){var
qb=jsx3.lang.NativeError.wrap(Kb);sb.error(ub.I+this.getName()+ub.D+qb);}if(!this.getEvent(ub.J))this.constrainPosition();}else sb.error(ub.K+jsx3.html.getOuterHTML(d.srcElement()));}this.focus(true);};r.NK=function(){var
ob=this.getRendered();if(ob!=null&&this.jsxmodal){return ob.childNodes[1];}else return ob;};r.getAbsolutePosition=function(s){return this.jsxsuper(s,this.NK());};r.setLeft=function(d,k){this.jsxleft=d;if(k){this.vX({left:d});}else this.Qf();return this;};r.setTop=function(m,q){this.jsxtop=m;if(q){this.vX({top:m});}else this.Qf();return this;};r.setWidth=function(c,j){this.jsxwidth=c;if(j){this.vX({width:this.jsxwidth});}else this.Qf();return this;};r.setHeight=function(p,l){this.jsxheight=p;if(l){this.vX({height:this.jsxheight});}else this.Qf();return this;};r.doMaximize=function(l){if(this.getWindowState()==0)this.doToggleState(1);if(this._jsxAW!=null){var
D=this.BK(this._jsxAW.jsxwidth,this._jsxAW.jsxheight);this.yS(this._jsxAW.jsxleft,this._jsxAW.jsxtop,D[0],D[1]);delete this[ub.L];var
fa={left:this.getLeft(),top:this.getTop(),width:this.getWidth(),height:this.getHeight()};this.vX(fa,true);if(l)((l.setDynamicProperty(ub.m,ub.r)).setDynamicProperty(ub.k,ub.q)).repaint();}else{this._jsxAW={};this._jsxAW.jsxwidth=this.getWidth();this._jsxAW.jsxheight=this.getHeight();this._jsxAW.jsxtop=this.getTop();this._jsxAW.jsxleft=this.getLeft();var
va=(this.getParent()).getAbsolutePosition();var
Xa=this.NK();var
D=this.BK(va.W-b.OP[1]-b.OP[3],va.H-b.OP[0]-b.OP[2]);this.yS(Math.min(parseInt(Xa.style.left),va.W-D[0]-b.OP[1]),Math.min(parseInt(Xa.style.top),va.H-D[1]-b.OP[2]),D[0],D[1]);var
fa={left:this.getLeft(),top:this.getTop(),width:this.getWidth(),height:this.getHeight()};this.vX(fa,true);if(l)((l.setDynamicProperty(ub.m,ub.M)).setDynamicProperty(ub.k,ub.N)).repaint();}};r.getResize=function(){return this.jsxresize==null?1:this.jsxresize;};r.setResize=function(g){this.jsxresize=g;this.Qf();return this;};r.setResizeParameters=function(m,k,l,e,f,h){this.jsxresize=m;this.jsxminx=k;this.jsxminy=l;this.jsxmaxx=e;this.jsxmaxy=f;};r.BK=function(s,q){s=Math.max(s,this.TO());q=Math.max(q,this.Vy());if(typeof this.jsxmaxx==ub.O)s=Math.min(s,this.jsxmaxx);if(typeof this.jsxmaxy==ub.O)q=Math.min(q,this.jsxmaxy);return [s,q];};r.getCaptionBar=function(){return this.findDescendants(b.vP,false,false,true);};b.vP=function(c){return jsx3.gui.WindowBar&&c instanceof jsx3.gui.WindowBar&&c.getType()==0;};r.yF=function(i,d){if(!i.leftButton())return;var
z=this.doEvent(ub.P,{objEVENT:i});if(z!==false){b._jsxEz=d.parentNode.childNodes[2];b._jsxEz.style.visibility=ub.w;b._jsxEz.style.zIndex=11;d.style.zIndex=12;var
Ma=(this.Wl(true)).lg(1);b._jsxoffx=b.uJ+2;b._jsxoffy=b.uJ+2;var
G=this;jsx3.gui.Interactive._beginMoveConstrained(i,d,function(k,c){return G.UH(k,c);});Ea.subscribe(ub.A,this,ub.Q);}};r.UH=function(o,n){if(b._jsxEz){this._jsxsT=o+b._jsxoffx;this._jsxjP=n+b._jsxoffy;this._jsxsT=Math.max(this._jsxsT,this.TO());this._jsxjP=Math.max(this._jsxjP,this.Vy());if(typeof this.jsxmaxx==ub.O)this._jsxsT=Math.min(this._jsxsT,this.jsxmaxx);if(typeof this.jsxmaxy==ub.O)this._jsxjP=Math.min(this._jsxjP,this.jsxmaxy);var
gb=(this.Wl()).lg(1);gb.recalculate({width:this._jsxsT,height:this._jsxjP},b._jsxEz);return [this._jsxsT-b._jsxoffx,this._jsxjP-b._jsxoffy];}return [o,n];};r.TO=function(){var
Fb=Number(this.jsxminx)||-1;return Math.max(25,Fb);};r.Vy=function(){var
Ta=Number(this.jsxminy)||-1;var
Y=15;if(this.getCaptionBar()!=null)Y=Y+30;return Math.max(Y,Ta);};r.tG=function(p){p=p.event;Ea.unsubscribe(ub.A,this,ub.Q);Ea.publish(p);if(!b._jsxEz)return;var
Sa=(this.Wl()).lg(1);var
H=Sa.getOffsetWidth();var
fa=Sa.getOffsetHeight();b._jsxEz.style.visibility=ub.E;b._jsxEz.style.zIndex=0;delete b[ub.R];this.yS(H,fa);this.vX({width:H,height:fa});this.doEvent(ub.S,{objEVENT:p,intW:this.getWidth(),intH:this.getHeight(),_gipp:1});};r.yS=function(o,g,d,s){if(arguments.length==4){this.setDynamicProperty(ub.T,null);this.jsxleft=o;this.setDynamicProperty(ub.U,null);this.jsxtop=g;}else{d=o;s=g;}this.setDynamicProperty(ub.V,null);this.jsxwidth=d;this.setDynamicProperty(ub.W,null);this.jsxheight=s;};r.recalcBox=function(){this.jsxsuper();this.vX();};r.Id=function(n){var
La=n==this.getCaptionBar()?this.Wl(true):(this.Wl(true)).lg(0);return {parentwidth:La.ee(),parentheight:La.ld()};};r.vX=function(d,s){if(s&&(d.left==null||d.top==null)){var
La=(this.getParent()).getAbsolutePosition();if(d.left==null)d.left=Math.max(0,parseInt((La.W-d.width)/2));if(d.top==null)d.top=Math.max(0,parseInt((La.H-d.height)/2));}this.Mc(d,true);};r.zd=function(n){var
Cb=this.getWindowState()==0&&(this.getServer()).getTaskBar()==null;var
v=this.getParent();if(v==null){v={H:this.getHeight(),W:this.getWidth()};}else{v=v.getAbsolutePosition();if(v==null||v.W==0)v={H:this.getHeight(),W:this.getWidth()};}var
gb=jsx3.util.strEmpty(this.getTop())?Math.max(0,parseInt((v.H-this.getHeight())/2)):this.getTop();var
x=jsx3.util.strEmpty(this.getLeft())?Math.max(0,parseInt((v.W-this.getWidth())/2)):this.getLeft();var
zb=this.getCaptionBar();if(n==null)n={};if(n.left==null)n.left=x;if(n.top==null)n.top=gb;if(n.width==null)n.width=this.getWidth();var
kb=this.getBorder(ub.X);if(n.height==null)if(Cb){n.height=(new
jsx3.gui.Painted.Box({border:kb})).getBorderHeight()+(zb!=null?zb.getHeight():0)+2*this.getBuffer(2);}else n.height=this.getHeight();n.tagname=ub.Y;n.boxtype=ub.Z;n.padding=this.getBuffer(2);n.border=kb;var
Ia=new
jsx3.gui.Painted.Box(n);var
Jb={};Jb.parentwidth=Ia.ee();Jb.parentheight=Ia.ld();Jb.width=ub._;Jb.height=Ia.ld()-(zb!=null?zb.getHeight()+this.getBuffer(2):0);Jb.top=zb!=null?zb.getHeight()+this.getBuffer(2)*2:this.getBuffer(2);Jb.left=this.getBuffer(2);Jb.tagname=ub.Y;Jb.boxtype=ub.Z;Jb.border=this.getContentBorder(ub.X);var
Kb=new
jsx3.gui.Painted.Box(Jb);Ia.cl(Kb);Jb={};Jb.left=-1;Jb.top=-1;Jb.width=this.getWidth();Jb.height=n.height;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;Jb.padding=ub.aa;Jb.border=ub.X;var
ua=new
jsx3.gui.Painted.Box(Jb);Ia.cl(ua);Jb={};Jb.left=this.getWidth()-(b.uJ+2);Jb.top=this.getHeight()-(b.uJ+2);Jb.width=b.uJ+1;Jb.height=b.uJ+1;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;var
P=new
jsx3.gui.Painted.Box(Jb);Ia.cl(P);Jb={};Jb.left=this.getWidth()-(b.uJ+2);Jb.top=this.getHeight()-(b.uJ+2);Jb.width=b.uJ;Jb.height=b.uJ;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;var
Eb=new
jsx3.gui.Painted.Box(Jb);Ia.cl(Eb);return Ia;};r.Hj=function(j,g,h){var
db=this.Wl(true,j);if(g!=null)g=this.NK();if(g!=null){var
C=this.getCaptionBar();var
Ab=db.recalculate(j,g,h);if(!Ab.w&&!Ab.h)return;var
Gb=db.lg(0);var
T=db.ld()-(C!=null?C.getHeight()+this.getBuffer(2):0);Gb.recalculate({parentwidth:db.ee(),parentheight:db.ld(),width:ub._,height:T},g.childNodes[1],h);var
Ra=db.lg(1);Ra.recalculate({width:this.getWidth(),height:this.getHeight()},g.childNodes[2],h);if(this.getResize()==1){var
xa=db.lg(2);xa.recalculate({top:this.getHeight()-(b.uJ+2),left:this.getWidth()-(b.uJ+2)},g.childNodes[3],h);var
fb=db.lg(3);fb.recalculate({top:this.getHeight()-(b.uJ+2),left:this.getWidth()-(b.uJ+2)},g.childNodes[4],h);}if(C)h.add(C,{width:ub._,parentwidth:db.ee(),height:C.getHeight()},g.childNodes[0],true);var
Jb=this.getChildren();var
D=0;var
hb=g.childNodes[C?1:0];if(hb){var
W=hb.childNodes;for(var
R=0;R<Jb.length;R++)if(Jb[R]!=C){h.add(Jb[R],{parentwidth:Gb.ee(),parentheight:Gb.ld()},true,true);}else D=1;}}};r.paint=function(){this.applyDynamicProperties();var
Ha=this.getId();var
J=this.getWindowState()==0&&(this.getServer()).getTaskBar()==null;var
db=J?ub.ba:ub.w;var
fb=this.getServer()!=null?(this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier():5000;var
wa={};if(this.getEvent(ub.ca)!=null)wa[ub.da]=true;if(this.getModal()!=1)wa[ub.ea]=ub.fa;var
pa=this.getModal()==1;var
bb=this.qj(wa,pa?1:0);var
Ga=this.renderAttributes(null,true);this.em();var
_=this.Wl(true);if(J){var
C=_.getOffsetHeight()-_.getPaintedHeight();var
Hb=ub.ga+(32-C)+ub.ha;}else var
Hb=ub.w;Hb=ub.w;if(pa){var
Pa=[ub.ia+Ha+ub.ja+this.Ak()+this.Rl()+this.Fg(ub.ka,ub.la,0)+ub.ma+fb+this.ad()+ub.na+ub.oa+ub.pa+this.Fg(ub.ea,ub.qa,1)+this.Fg(ub.A,ub.ra,1)+ub.sa,ub.ta+this.Rl()+this.Fg(ub.ka,ub.la,1)+ub.ua];_.setAttributes(bb+this.Rl()+ub.va+this.dd()+ub.ja+Ga);_.setStyles(ub.wa+this.ch()+this.ke()+this.lc()+this.Bg()+Hb);}else{var
Pa=[ub.w,ub.w];_.setAttributes(ub.xa+Ha+ub.ya+this.Ak()+bb+this.Rl()+ub.va+this.dd()+ub.ja+Ga);_.setStyles(ub.za+fb+ub.Aa+this.ch()+this.ke()+this.ad()+this.lc()+this.Bg()+Hb);}var
oa=this.getCaptionBar();var
xa=oa!=null?oa.paint():ub.Ba;var
Va=_.lg(0);Va.setAttributes(ub.Ca);Va.setStyles(this.Pb()+this.Mm()+db);var
va=(this.getChildren()).filter(function(p){return p!=oa;});var
Ua=this.paintChildren(va);var
Ba=_.lg(1);Ba.setAttributes(ub.Da);Ba.setStyles(ub.Ea+Hb);if(this.getResize()==1){var
La=_.lg(2);La.setStyles(ub.Fa+jsx3.gui.Block.SPACE+ub.Ga+db);La.setAttributes(this.Fg(ub.ea,ub.Ha,pa?2:1));var
U=_.lg(3);U.setStyles(ub.Ia+b.o7+ub.Ga+db);var
Ta=(La.paint()).join(ub.w)+(U.paint()).join(ub.w);}else var
Ta=ub.w;return Pa[0]+(_.paint()).join(xa+(Va.paint()).join(Ua)+(Ba.paint()).join(ub.Ja)+Ta)+Pa[1];};r.jX=function(q,o){if(q.srcElement()==o&&q.tabKey()){q.cancelReturn();(this.getCaptionBar()||this).focus();}else q.setAttribute(ub.Ka,1);};r.xY=function(a,l){(this.beep()).focus();a.cancelBubble();};r.Qq=function(d,i){this.focus();d.cancelBubble();};r.em=function(){var
Ma=this.getId();var
Aa;if(this.getServer()!=null&&(Aa=(this.getServer()).getTaskBar())!=null&&this.getModal()!=1){var
Lb=this.getCaptionBar();var
H=this.getTaskButton();if(Lb!=null){Lb.applyDynamicProperties();if(H==null){jsx3.require(ub.e);var
ta=new
jsx3.gui.ToolbarButton(b.kN+Ma,1,Lb.getText());Aa.setChild(ta);ta.setEvent(ub.La+Ma+ub.Ma,ub.j);ta.setState(this.getWindowState()==1?1:0);ta.setText(jsx3.util.strTruncate(Lb.getText()||ub.w,20));ta.setDynamicProperty(ub.k,ub.Na);if(Aa.getRendered()==null){jsx3.sleep(Aa.repaint,ub.Oa+Aa.getId(),Aa);}else Aa.paintChild(ta);}else{var
lb=Lb.getText();if(lb)((H.setText(jsx3.util.strTruncate(lb,20))).setTip(lb)).repaint();}}else if(H!=null)(H.getParent()).removeChild(H);}};r.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};r.Mm=function(){if(this.getOverflow()==2){return ub.Pa;}else return ub.Qa;};r.dd=function(){var
mb=this.getClassName();return ub.Ra+(mb?ub.Sa+mb:ub.w);};r.getAlertsParent=function(){return this;};r.constrainPosition=function(e){var
N=this.getRendered();var
La=N!=null;var
Za=null;if(N){Za=N.parentNode;}else if(this.getParent())Za=(this.getParent()).getRendered();if(Za==null)return;var
ib=parseInt(Za.style.width);var
U=parseInt(Za.style.height);if(e===true){var
db=ib-b.OP[1]-b.OP[3];var
w=U-b.OP[0]-b.OP[2];if(this.getWidth()>db)this.setWidth(db,La);if(this.getHeight()>w)this.setHeight(w,La);var
za=ib-this.getWidth()-b.OP[1];var
D=U-this.getHeight()-b.OP[2];if(this.getLeft()<b.OP[3])this.setLeft(b.OP[3],La);else if(this.getLeft()>za)this.setLeft(za,La);if(this.getTop()<b.OP[0])this.setTop(b.OP[0],La);else if(this.getTop()>D)this.setTop(D,La);}else{var
ca=this.getDimensions();if(!e)e=b.XS;e=e.concat();if(e[0]==null)e[0]=ca[3];else if(e[0]<0)e[0]=ca[3]+e[0];if(e[1]==null)e[1]=ca[2];else if(e[1]<0)e[1]=ca[2]+e[1];if(e[2]==null)e[2]=ca[3];else if(e[2]<0)e[2]=ca[3]+e[2];if(e[3]==null)e[3]=ca[2];else if(e[3]<0)e[3]=ca[2]+e[3];if(ca[0]<e[3]-ca[2])this.setLeft(e[3]-ca[2],La);else if(ca[0]>ib-e[1])this.setLeft(ib-e[1],La);if(ca[1]<e[0]-ca[3])this.setTop(e[0]-ca[3],La);else if(ca[1]>U-e[2])this.setTop(U-e[2],La);}};r.onRemoveChild=function(q,d){this.jsxsuper(q,d);if(jsx3.$A.is(q)){this.Qf();this.repaint();}else if(b.vP(q)){this.Qf();this.repaint();}};r.beep=function(){var
fa=this.getCaptionBar();if(fa!=null){fa.beep();}else{var
Za=this.NK();jsx3.gui.no(Za,{backgroundColor:ub.Ta});}return this;};r.getAlwaysCheckHotKeys=function(){return true;};r.getContentBorder=function(l){return jsx3.util.strEmpty(this.jsxcontentborder)&&l?l:this.jsxcontentborder;};r.setContentBorder=function(e){this.jsxcontentborder=e;this.clearBoxProfile(true);return this;};r.getBorder=function(j){return jsx3.util.strEmpty(this.jsxborder)&&j?j:this.jsxborder;};r.setBorder=function(q){this.jsxborder=q;this.clearBoxProfile(true);return this;};r.getBuffer=function(p){return jsx3.util.strEmpty(this.jsxbuffer)&&p!=null?p:+this.jsxbuffer;};r.setBuffer=function(d){this.jsxbuffer=!isNaN(d)?parseInt(d):d;this.clearBoxProfile(true);return this;};b.getVersion=function(){return ub.Ua;};});jsx3.Dialog=jsx3.gui.Dialog;
