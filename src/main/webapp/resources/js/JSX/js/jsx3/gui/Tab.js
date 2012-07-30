/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Tab",jsx3.gui.Block,null,function(p,d){var
ub={A:"The jsx3.gui.Tab instance with the id, '",B:"', could not be painted on-screen, because it does not belong to a jsx3.gui.TabbedPane parent.",C:'id="',D:'"',E:' class="jsx30tab" ',F:' class="jsx30tab_text"',G:"background-image:url(",H:");background-repeat:repeat-x;background-position:top left;",I:"cursor:pointer;",J:"background-color:",K:";",L:"3.0.00",a:"jsx:///images/tab/bevel.gif",b:"#e8e8f5",c:"#d8d8e5",d:"#f6f6ff",e:"#a6a6af",f:"jsx:///images/tab/on.gif",g:"jsx:///images/tab/off.gif",h:"_content",i:"100%",j:"JSXFRAG",k:"url(",l:")",m:"px",n:"none",o:"click",p:"keydown",q:"mouseover",r:"mouseout",s:"span",t:"relativebox",u:"",v:"3 4 1 4",w:"0px pseudo;2px pseudo;0px pseudo;1px pseudo",x:"div",y:"inline",z:"t21"};var
Kb=jsx3.gui.Event;var
Sa=jsx3.gui.Interactive;p.DEFAULTBEVELIMAGE=jsx3.resolveURI(ub.a);p.DEFAULTACTIVECOLOR=ub.b;p.DEFAULTINACTIVECOLOR=ub.c;p.DEFAULTHIGHLIGHT=ub.d;p.DEFAULTSHADOW=ub.e;p.ACTIVEBEVEL=jsx3.resolveURI(ub.f);p.INACTIVEBEVEL=jsx3.resolveURI(ub.g);if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(p.DEFAULTBEVELIMAGE,p.ACTIVEBEVEL,p.INACTIVEBEVEL);p.CHILDBGCOLOR=ub.b;p.STATEDISABLED=0;p.STATEENABLED=1;d.init=function(q,l,o,b,a){this.jsxsuper(q,null,null,o,null,l);if(b!=null)this.setActiveColor(b);if(a!=null)this.setInactiveColor(a);var
nb=new
jsx3.gui.Block(q+ub.h,null,null,ub.i,ub.i);nb.setOverflow(1);nb.setRelativePosition(0);nb.setBackgroundColor(b==null?p.CHILDBGCOLOR:b);this.setChild(nb,1,null,ub.j);};d.onSetParent=function(i){return jsx3.gui.TabbedPane&&i instanceof jsx3.gui.TabbedPane;};d.getBevel=function(){return this.jsxbevel;};d.setBevel=function(a){this.jsxbevel=a;return this;};d.getMaskProperties=function(){return jsx3.gui.Block.MASK_EAST_ONLY;};d.Ri=function(r,n){n.style.backgroundImage=ub.k+p.ACTIVEBEVEL+ub.l;if(jsx3.EventHelp.isDragging())this.Y4(r,false);};d.Uc=function(q,o){o.style.backgroundImage=ub.k+p.INACTIVEBEVEL+ub.l;};d.nj=function(n,r){jsx3.html.focus(r);if(n.leftButton())this.Y4(n);};d.doClickTab=function(a,l){this.Y4(this.isOldEventProtocol(),l);};d.doShow=function(){this.Y4(false);var
ib=this.getParent();var
V=ib.al();var
ha=(ib.Id()).parentwidth;if(V>ha){var
Ua=ib.vn();var
Q=this.getAbsolutePosition(ib.getRendered());if(Q.L+Q.W>ha&&this.getChildIndex()>0){Ua.style.left=parseInt(Ua.style.left)-(Q.L+Q.W-ha)+ub.m;}else if(Q.L<0)Ua.style.left=parseInt(Ua.style.left)-Q.L+ub.m;ib.Ec();}};d.Y4=function(s,l){(this.getParent()).Vn(s,this);};d.getActiveColor=function(){return this.jsxactivecolor;};d.setActiveColor=function(n){this.jsxactivecolor=n;return this;};d.getInactiveColor=function(){return this.jsxinactivecolor;};d.setInactiveColor=function(a){this.jsxinactivecolor=a;return this;};d.getEnabled=function(){return this.jsxenabled==null?1:this.jsxenabled;};d.setEnabled=function(c){this.jsxenabled=c;return this;};d.isFront=function(){var
qa=this.getChildIndex();return qa>=0&&(this.getParent()).getSelectedIndex()==qa;};d._ebKeyDown=function(k,b){if(this.jsxsupermix(k,b))return;var
Q=this.getChildIndex();var
Oa=this.getParent();if(k.leftArrow()||k.rightArrow()){var
gb=(Oa.getChildren()).length;var
B=k.leftArrow()?-1:1;var
wa=jsx3.util.numMod(Q+B,gb);var
O=Oa.getChild(wa);while(O!=this&&(!O.getEnabled()||O.getDisplay()==ub.n)){wa=jsx3.util.numMod(wa+B,gb);O=Oa.getChild(wa);}if(O!=this)Oa.Vn(k,wa,null,true);k.cancelAll();}else if(k.downArrow()){Oa.Vn(k,Q,null,true);(this.getContentChild()).focus();k.cancelAll();}};p.yg={};p.yg[ub.o]=true;p.yg[ub.p]=true;p.yg[ub.q]=true;p.yg[ub.r]=true;d.Id=function(o){return this.Gi(0)||this.Ei(0,this.getParent()?(this.getParent()).ve(this):{});};d.Hj=function(m,j,e){this.sk(m,j,e,3);};d.zd=function(h){if(h==null||isNaN(h.parentwidth)||isNaN(h.parentheight)){h=(this.getParent()).Id(this);}else if(h==null)h={};var
ga=this.getPadding();if(this.getWidth()!=null&&!isNaN(parseInt(this.getWidth())))h.width=this.getWidth();h.height=ub.i;h.tagname=ub.s;h.boxtype=ub.t;h.padding=ga!=null&&ga!=ub.u?ga:ub.v;h.border=this.getBorder()||ub.w;h.margin=this.getMargin();var
fa=new
jsx3.gui.Painted.Box(h);var
ra={};ra.parentwidth=fa.ee();ra.parentheight=fa.ld();ra.height=ub.i;if(!(this.getWidth()==null||isNaN(this.getWidth()))){ra.width=ub.i;ra.tagname=ub.x;ra.boxtype=ub.y;}else{ra.tagname=ub.s;ra.boxtype=ub.t;}var
Db=new
jsx3.gui.Painted.Box(ra);fa.cl(Db);return fa;};d.paint=function(){if(!(this.getParent() instanceof jsx3.gui.TabbedPane)){jsx3.util.Logger.doLog(ub.z,ub.A+this.getId()+ub.B);return ub.u;}this.applyDynamicProperties();var
xb=this.getEnabled()==1?this.qj(p.yg,0):ub.u;var
gb=this.renderAttributes(null,true);var
ea=this.Wl(true);ea.setAttributes(ub.C+this.getId()+ub.D+this.Ak()+this.Rl()+this.nk()+xb+ub.E+gb);ea.setStyles(this.Bl()+this.mi()+this.ch()+this.jc()+this._k()+this.cd()+this.wk()+this.Pb()+this.lc()+this.Bg());var
na=ea.lg(0);na.setAttributes(ub.F+jsx3.html._d);na.setStyles(this.Pb());return (ea.paint()).join((na.paint()).join(this.il()));};d.setWidth=function(m,c){this.jsxsuper(m);if(c)this.repaint();};d.setText=function(g,f){this.jsxsuper(g,f);if(f&&this.getParent())(this.getParent()).Ec();};d.Bl=function(){return ub.G+p.INACTIVEBEVEL+ub.H;};d.mi=function(){return this.getEnabled()==1?ub.I:ub.u;};d.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};d.Jj=function(){return this.getActiveColor()?this.getActiveColor():p.DEFAULTACTIVECOLOR;};d.Zn=function(){return this.getInactiveColor()?this.getInactiveColor():p.DEFAULTINACTIVECOLOR;};d.ch=function(){var
xa=this.getChildIndex()!=(this.getParent()).getSelectedIndex()?this.Zn():this.Jj();return xa?ub.J+xa+ub.K:ub.u;};p.getVersion=function(){return ub.L;};d.getContentChild=function(){return this.getChild(0);};d.Kj=function(a){var
Mb=this.getContentChild();if(Mb)Mb.Kj(a);this.jsxsuper(a);};});jsx3.Tab=jsx3.gui.Tab;
