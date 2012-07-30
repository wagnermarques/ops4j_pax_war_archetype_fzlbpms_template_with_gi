/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block","jsx3.gui.Tab");jsx3.Class.defineClass("jsx3.gui.TabbedPane",jsx3.gui.Block,null,function(s,k){var
ub={A:"mouseout",B:"D2",C:'class="jsx30tabbedpane_autoscroller_r" jsxscrolltype="right" ',D:"0px",E:"jsxscrolltype",F:"left",G:"px",H:"-",I:"_jsxxJ",J:"jsxexecute",K:"jsxshow",L:"3.0.00",a:"jsx:///images/tab/l.png",b:"jsx:///images/tab/r.png",c:"solid 1px #f6f6ff;solid 1px #a6a6af;solid 1px #a6a6af;solid 1px #f6f6ff",d:"beforeEnd",e:"visible",f:"",g:"none",h:"jsxhide",i:"jsxchange",j:"box",k:"div",l:"100%",m:"relativebox",n:"white-space:nowrap;",o:"jsxdrop",p:"jsxctrldrop",q:"mouseup",r:'id="',s:'" class="jsx30tabbedpane"',t:"&#160;",u:"visibility:hidden;",v:'class="jsx30tabbedpane_controlbox"',w:"display:none;",x:'class="jsx30tabbedpane_autoscroller_l" jsxscrolltype="left" ',y:"mouseover",z:"aq"};var
V=jsx3.gui.Tab;var
pb=jsx3.gui.Event;var
Bb=jsx3.gui.Block;var
Mb=jsx3.gui.Interactive;s.AUTO_SCROLL_INTERVAL=50;s.LSCROLLER=jsx3.html.getCSSPNG(jsx3.resolveURI(ub.a));s.RSCROLLER=jsx3.html.getCSSPNG(jsx3.resolveURI(ub.b));s.DEFAULTTABHEIGHT=20;s.CONTENTBORDER=ub.c;k.init=function(i){this.jsxsuper(i);};k.paintChild=function(l,c){var
ca=this.getRendered();if(ca!=null){if(this.getShowTabs())jsx3.html.insertAdjacentHTML(ca.childNodes[0].childNodes[0],ub.d,l.paint());var
lb=l.getContentChild();var
jb=(this.getChildren()).length==1;lb=this.yI(lb,jb);jsx3.html.insertAdjacentHTML(ca,ub.d,l.paintChildren([lb]));this.jsxsuper(lb,c,ca,true);if(jb)this.Vn(null,l);}this.Ec();};k.onSetChild=function(a){if(!(a instanceof V))return false;var
T=a.getContentChild();if(T&&T instanceof Bb)T.setVisibility(ub.e);if((this.getChildren()).length==0)this.jsxselectedindex=-1;return true;};k.yI=function(o,g){o=o.nn(g)||o;if(o instanceof Bb)o.setDisplay(g?ub.f:ub.g,true);return o;};k.onRemoveChild=function(o,b){this.jsxsuper(o,b);if(jsx3.$A.is(o)){var
Ma=o[this.getSelectedIndex()];if(Ma)Ma.doEvent(ub.h);this.doEvent(ub.i);this.setSelectedIndex(-1);this.Qf();this.repaint();}else{var
jb=this.getSelectedIndex();var
xa=Math.min((this.getChildren()).length-1,jb);if(jb==b)o.doEvent(ub.h);if(xa>=0)this.Vn(false,xa,true);else this.doEvent(ub.i);this.Ec();}};k.getSelectedIndex=function(){return this.jsxselectedindex==null?(this.getChildren()).length>0?0:-1:this.jsxselectedindex;};k.setSelectedIndex=function(r,m){if(m){this.Vn(false,r);}else this.jsxselectedindex=r instanceof V?r.getChildIndex():r;return this;};k.yo=function(r,n){this.doDrop(r,n,jsx3.EventHelp.ONDROP);};k.Id=function(j){if(this.getParent()){var
H=(this.getParent()).Id(this);var
la=H.width?H.width:H.parentwidth;var
Ca=this.getShowTabs()?this.paintTabSize()+1:0;return {parentwidth:la,parentheight:Ca};}else return {};};k.ve=function(){if(this.getParent()){var
oa=(this.getParent()).Id(this);var
xa=oa.width!=null&&!isNaN(oa.width)?oa.width:oa.parentwidth;var
wb=this.getShowTabs()?this.paintTabSize():0;var
ba=(oa.height!=null&&!isNaN(oa.height)?oa.height:oa.parentheight)-wb;var
Na={left:0,top:wb,width:xa,height:ba,parentwidth:xa,parentheight:ba,boxtype:ub.j,tagname:ub.k,border:this.getBorder()};if(this.getShowTabs()&&Na.border==null&&Na.border!=ub.f)Na.border=s.CONTENTBORDER;return Na;}return {};};k.Hj=function(j,g,h){var
Z=this.Wl(true,j);if(g){Z.recalculate(j,g,h);var
jb=Z.lg(0);jb.recalculate({parentwidth:Z.ee(),height:this.paintTabSize()+1},g!=null?g.childNodes[0]:null,h);var
A=jb.lg(0);A.recalculate({parentwidth:Z.ee(),height:this.paintTabSize()+1},g!=null?g.childNodes[0].childNodes[0]:null,h);var
H=jb.lg(2);H.recalculate({left:jb.ee()-22},g!=null?g.childNodes[0].childNodes[2]:null,h);var
t=this.getChildren();var
Ia=this.Id();for(var
u=0;u<t.length;u++){var
D=t[u];h.add(D,this.Id(),g!=null,true);var
F=D.getContentChild();if(F!=null){var
Ca=this.getSelectedIndex()==u;F=this.yI(F,Ca);if(Ca)h.add(F,this.ve(),F.getRendered(g),true);}}this.Ec();}};k.zd=function(b){if(this.getParent()&&(b==null||!isNaN(b.parentwidth)&&!isNaN(b.parentheight)||!isNaN(b.width)&&!isNaN(b.height))){b=(this.getParent()).Id(this);}else if(b==null)b={};if(b.left==null)b.left=0;if(b.top==null)b.top=0;if(b.width==null)b.width=ub.l;if(b.height==null)b.height=ub.l;if(b.tagname==null)b.tagname=ub.k;if(!b.boxtype)b.boxtype=ub.m;var
sb=new
jsx3.gui.Painted.Box(b);var
wa={};wa.parentwidth=b.parentwidth;wa.width=ub.l;wa.height=this.paintTabSize()+1;wa.left=0;wa.top=0;wa.tagname=ub.k;wa.boxtype=ub.j;var
ta=new
jsx3.gui.Painted.Box(wa);sb.cl(ta);wa={};wa.parentwidth=b.parentwidth;wa.width=ub.l;wa.height=this.paintTabSize()+1;wa.left=0;wa.top=0;wa.tagname=ub.k;wa.boxtype=ub.j;var
_=new
jsx3.gui.Painted.Box(wa);_.setStyles(ub.n);ta.cl(_);wa={};wa.width=14;wa.height=14;wa.left=2;wa.top=2;wa.tagname=ub.k;wa.boxtype=ub.j;var
xa=new
jsx3.gui.Painted.Box(wa);ta.cl(xa);wa={};wa.width=14;wa.height=14;wa.left=ta.ee()-16;wa.top=2;wa.tagname=ub.k;wa.boxtype=ub.j;var
ab=new
jsx3.gui.Painted.Box(wa);ta.cl(ab);return sb;};k.paint=function(){this.applyDynamicProperties();var
bb=this.getId();var
rb=this.getShowTabs();var
Wa=this.getSelectedIndex();if(Wa<0||Wa>=(this.getChildren()).length){Wa=0;this.setSelectedIndex(Wa);}var
sa={};if(this.hasEvent(ub.o)||this.hasEvent(ub.p))sa[ub.q]=true;var
ma=this.qj(sa,0);var
la=this.renderAttributes(null,true);var
Ta=this.Wl(true);Ta.setAttributes(ub.r+bb+ub.s+this.Ak()+this.Rl()+this.nk()+ma+la);Ta.setStyles(this.Wi()+this.ch()+this.ke()+this.ad()+this.lc()+this.Bg());var
ea=Ta.lg(0);if(rb){var
ab=this.getChild(Wa);ab=ab==null?this.getChild(0):ab;if(ab!=null)if(!ab.getEnabled()){var
U=(this.getChildren()).length-1;for(var
ya=0;ya<=U;ya++)if((this.getChild(ya)).getEnabled()){this.setSelectedIndex(ya);break;}}var
x=this.paintChildren();ea.setStyles(this.Pb());}else{var
x=ub.t;ea.setStyles(ub.u);}ea.setAttributes(ub.v);var
Ua=this.getChildren();var
Ba=[];for(var
ya=0;ya<Ua.length;ya++){var
da=this.getSelectedIndex()==ya;var
pa=Ua[ya].getContentChild();if(pa!=null){pa=this.yI(pa,da);pa.pj(this.ve());Ba.push(pa);}}jsx3.sleep(function(){this.Ec();},null,this);var
xa=ea.lg(0);var
K=ea.lg(1);K.setStyles(ub.w+s.LSCROLLER);K.setAttributes(ub.x+this.Fg(ub.y,ub.z)+this.Fg(ub.A,ub.B));var
Fb=ea.lg(2);Fb.setStyles(ub.w+s.RSCROLLER);Fb.setAttributes(ub.C+this.Fg(ub.y,ub.z)+this.Fg(ub.A,ub.B));return (Ta.paint()).join((ea.paint()).join((xa.paint()).join(x)+(K.paint()).join(ub.t)+(Fb.paint()).join(ub.t))+this.paintChildren(Ba));};k.Ec=function(){var
Ba=this.al();var
D=(this.Id()).parentwidth;var
z=this.vn();if(z)if(D<Ba){z.nextSibling.style.display=parseInt(z.style.left)<0?ub.f:ub.g;z.nextSibling.nextSibling.style.display=ub.f;}else{z.nextSibling.style.display=ub.g;z.nextSibling.nextSibling.style.display=ub.g;z.style.left=ub.D;}};k.al=function(){var
Ea=this.vn();if(Ea){var
Eb=Ea.childNodes;var
yb=Eb.length-1,ib=null;while(yb>=0&&!ib){if(Eb[yb].nodeType==1)ib=Eb[yb];yb--;}if(ib){var
Va=jsx3.html.getRelativePosition(Ea,ib);return Va.L+Va.W;}}};k.aq=function(a,l){var
jb=this;this._jsxxJ={direction:l.getAttribute(ub.E),totalwidth:this.al()-(this.Id()).parentwidth};this._jsxxJ.interval=window.setInterval(function(){jb.t4();},s.AUTO_SCROLL_INTERVAL);};k.vn=function(){var
ta=this.getRendered();return ta?ta.childNodes[0].childNodes[0]:null;};k.t4=function(){var
ma=this.vn();var
H=parseInt(ma.style.left);if(this._jsxxJ.direction==ub.F){if(H-5<0){ma.style.left=H+5+ub.G;ma.nextSibling.nextSibling.style.display=ub.f;}else{ma.style.left=ub.D;ma.nextSibling.style.display=ub.g;this.D2();}}else if(Math.abs(H)+5<=this._jsxxJ.totalwidth){ma.style.left=H-5+ub.G;ma.nextSibling.style.display=ub.f;}else{ma.style.left=ub.H+this._jsxxJ.totalwidth+ub.G;ma.nextSibling.nextSibling.style.display=ub.g;this.D2();}};k.D2=function(f,g){if(this._jsxxJ){window.clearInterval(this._jsxxJ.interval);delete this[ub.I];}};k.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};k.paintTabSize=function(){return this.getTabHeight()!=null&&!isNaN(this.getTabHeight())?this.getTabHeight():s.DEFAULTTABHEIGHT;};k.getTabHeight=function(){return this.jsxtabheight;};k.setTabHeight=function(b){this.jsxtabheight=b;this.clearBoxProfile(true);return this;};k.getShowTabs=function(){return this.jsxshowtabs==null||this.jsxshowtabs===ub.f?1:this.jsxshowtabs;};k.setShowTabs=function(p){this.jsxshowtabs=p;this.clearBoxProfile(true);return this;};k.Vn=function(b,c,o,p){if(!(c instanceof V))c=this.getChild(c);if(c){var
t=this.getShowTabs();var
F=c.getChildIndex();var
aa=this.getSelectedIndex();if(o||aa!=F){this.setSelectedIndex(F);var
yb=(this.getChildren()).length;for(var
ba=0;ba<yb;ba++){var
za=this.getChild(ba);var
hb=za.getContentChild();var
tb=ba==F;if(hb)hb=this.yI(hb,tb);if(t)za.setBackgroundColor(tb?za.Jj():za.Zn(),true);if(tb)hb.Mc(this.ve(),true);}}if(b)c.doEvent(ub.J,{objEVENT:b instanceof pb?b:null});if(!o){var
ya=this.getChild(aa);if(ya)ya.doEvent(ub.h);}if(p)c.focus();c.doEvent(ub.K,{_gipp:1});this.doEvent(ub.i);}};s.getVersion=function(){return ub.L;};});jsx3.TabbedPane=jsx3.gui.TabbedPane;
