/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.ToolbarButton",jsx3.gui.Block,[jsx3.gui.Form],function(r,d){var
ub={A:"span",B:"relativebox",C:"div",D:"box",E:"0 0 0 4",F:"0px;0px;0px;solid 1px ",G:"5 4 5 0",H:"background-image:url(",I:");",J:"id='",K:"' ",L:" class='jsx30toolbarbutton'",M:"class='jsx30toolbarbutton_img'",N:"class='jsx30toolbarbutton_lbl'",O:"&#160;",P:"class='jsx30toolbarbutton_cap'",Q:"overflow:hidden;",R:"background-color:",S:";",T:"3.0.00",U:"pt",a:"jsx:///images/tbb/down.gif",b:"jsx:///images/tbb/on.gif",c:"jsx:///images/tbb/over.gif",d:"jsx:///images/tbb/default.gif",e:"#9B9BB7",f:"",g:"url(",h:")",i:"jsxmenu",j:"#808080",k:"jsxexecute",l:"border",m:"padding",n:"jsxchange",o:"click",p:"BT",q:"keydown",r:"mousedown",s:"mouseup",t:"mouseout",u:"mouseover",v:"blur",w:"Uc",x:"focus",y:"Ri",z:"1 4 1 0"};var
Oa=jsx3.gui.Form;var
z=jsx3.gui.Interactive;var
nb=jsx3.gui.Event;r.TYPENORMAL=0;r.TYPECHECK=1;r.TYPERADIO=2;r.STATEOFF=0;r.STATEON=1;r.IMAGEDOWN=jsx3.resolveURI(ub.a);r.IMAGEON=jsx3.resolveURI(ub.b);r.IMAGEOVER=jsx3.resolveURI(ub.c);r.DEFAULTIMAGE=jsx3.resolveURI(ub.d);r.BORDERCOLOR=ub.e;if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(r.IMAGEDOWN,r.IMAGEON,r.IMAGEOVER,r.DEFAULTIMAGE);d._jsxRL=null;d.init=function(s,j,b){this.jsxsuper(s,null,null,null,null);if(j!=null)this.setType(j);if(b!=null)this.setTip(b);};d.getDisabledImage=function(){return this.jsxdisabledimage!=null&&jsx3.util.strTrim(this.jsxdisabledimage)!=ub.f?this.jsxdisabledimage:this.getImage();};d.setDisabledImage=function(o){this.jsxdisabledimage=o;return this;};d.doValidate=function(){var
sa=this.getType==0||this.getRequired()==0||this.getState()==1;return (this.setValidationState(sa?1:0)).getValidationState();};d.getImage=function(){return this.jsximage!=null&&jsx3.util.strTrim(this.jsximage)!=ub.f?this.jsximage:null;};d.setImage=function(g){this.jsximage=g;return this;};d.getType=function(){return this.jsxtype==null?0:this.jsxtype;};d.setType=function(h){this.jsxtype=h;return this;};d._ebKeyDown=function(f,g){if(f.spaceKey()||f.enterKey()){this.BT(f,g);f.cancelAll();}};d.getMaskProperties=function(){return jsx3.gui.Block.MASK_NO_EDIT;};d.Fo=function(p,n){if(!p.leftButton())return;n.style.backgroundImage=ub.g+r.IMAGEDOWN+ub.h;n.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)n.childNodes[2].style.backgroundImage=ub.g+r.IMAGEDOWNMENU+ub.h;};d.yo=function(s,m){if(s.leftButton()){var
Bb=this.jsxstate==1;m.style.backgroundImage=Bb?ub.g+r.IMAGEON+ub.h:ub.f;m.childNodes[3].style.backgroundColor=Bb?r.BORDERCOLOR:ub.f;}else if(s.rightButton())this.jsxsupermix(s,m);};d.Ri=function(s,m){if(this.getState()==0){m.style.backgroundImage=ub.g+r.IMAGEOVER+ub.h;m.childNodes[3].style.backgroundColor=ub.j;}};d.Uc=function(s,m){if(this.getState()==0){m.style.backgroundImage=ub.f;m.childNodes[3].style.backgroundColor=ub.f;}};d.doExecute=function(c){if(c==null)c=true;this.BT(c,this.getRendered(c instanceof nb?c:null));};d.doClick=function(){this.BT(true,this.getRendered());};d.BT=function(j,c){var
ua=this.doEvent(ub.k,{objEVENT:j instanceof nb?j:null});if(ua!==false)if(this.getType()==2){this.EK(1,j,c);}else if(this.getType()==1)this.EK(this.getState()==1?0:1,j,c);};d.getGroupName=function(){return this.jsxgroupname!=null&&this.getType()==2?this.jsxgroupname:null;};d.setGroupName=function(f){if(this.getType()==2)this.jsxgroupname=f;return this;};d.getDivider=function(){return this.jsxdivider!=null?this.jsxdivider:0;};d.setDivider=function(q,j){this.jsxdivider=q;if(j)this.recalcBox([ub.l,ub.m]);else this.Qf();return this;};d.getState=function(){return this.getType()==0?0:this.jsxstate==null?0:this.jsxstate;};d.setState=function(j){var
v=null;v=this.isOldEventProtocol();this.EK(j,v,this.getRendered());return this;};d.EK=function(a,k,b){var
V=false;if(this.getType()==2&&a==1){var
Db=this.getGroupName();var
Ba=(this.getParent()).findDescendants(function(h){return h instanceof r&&h.getGroupName()==Db;},false,true,true);for(var
Ea=Ba.length-1;Ea>=0;Ea--)if(Ba[Ea]!=this&&Ba[Ea].getType()==2){Ba[Ea].jsxstate=0;var
B=Ba[Ea].getRendered(b);if(B!=null){B.style.backgroundImage=ub.f;B.childNodes[3].style.backgroundColor=ub.f;if(Ba[Ea].getEvent(ub.i)!=null)B.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}}else if(Ba[Ea]==this)if(b!=null){b.style.backgroundImage=ub.g+r.IMAGEON+ub.h;b.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEONMENU+ub.h;}V=true;}else if(this.getType()==2){if(b!=null){b.style.backgroundImage=ub.f;b.childNodes[3].style.backgroundColor=ub.f;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}V=true;}else if(this.getType()==1){if(b!=null)if(a==1){b.style.backgroundImage=ub.g+r.IMAGEON+ub.h;b.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEONMENU+ub.h;}else{b.style.backgroundImage=ub.f;b.childNodes[3].style.backgroundColor=ub.f;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}V=true;}this.jsxstate=a;if(V&&k){var
da=null;if(k instanceof nb)da={objEVENT:k,_gipp:1};this.doEvent(ub.n,da);}return this;};d.setEnabled=function(e,o){if(this._jsxRL!=null)this._jsxRL.setEnabled(e==1);return this.jsxsupermix(e,o);};r.yg={};r.yg[ub.o]=ub.p;r.yg[ub.q]=true;r.yg[ub.r]=true;r.yg[ub.s]=true;r.yg[ub.t]=true;r.yg[ub.u]=true;r.yg[ub.v]=ub.w;r.yg[ub.x]=ub.y;d.Hj=function(c,s,o){this.sk(c,s,o,3);};d.zd=function(){var
H=this.getRelativePosition()!=0;var
Ua,P,ea;var
Xa={};Xa.height=22;if(H){Xa.margin=(Ua=this.getMargin())!=null&&Ua!=ub.f?Ua:ub.z;Xa.tagname=ub.A;Xa.boxtype=ub.B;}else{Xa.left=(P=this.getLeft())!=null&&P!=ub.f?P:0;Xa.top=(ea=this.getTop())!=null&&ea!=ub.f?ea:0;Xa.tagname=ub.C;Xa.boxtype=ub.D;}if(this.getDivider()==1){Xa.padding=ub.E;Xa.border=ub.F+r.BORDERCOLOR;}var
Ca=new
jsx3.gui.Painted.Box(Xa);Xa={};Xa.width=this.getImage()!=null&&this.getImage()!=ub.f?22:3;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
Qa=new
jsx3.gui.Painted.Box(Xa);Ca.cl(Qa);Xa={};if(jsx3.util.strEmpty(this.getText())){Xa.width=1;}else Xa.padding=ub.G;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
wb=new
jsx3.gui.Painted.Box(Xa);Ca.cl(wb);Xa={};Xa.width=1;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
Pa=new
jsx3.gui.Painted.Box(Xa);Ca.cl(Pa);Xa={};Xa.width=1;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
T=new
jsx3.gui.Painted.Box(Xa);Ca.cl(T);return Ca;};d.paint=function(){this.applyDynamicProperties();var
Da;if((Da=this.getKeyBinding())!=null){var
na=this;if(this._jsxRL!=null)this._jsxRL.destroy();this._jsxRL=this.doKeyBinding(function(q){na.BT(q,na.getRendered());},Da);if(this._jsxRL)this._jsxRL.setEnabled(this.getEnabled()!=0);}var
Bb=this.getState()==1?ub.H+r.IMAGEON+ub.I:ub.f;var
Va=this.ad();var
ja=this.lc();var
pb=null,cb=null,B=null;if(this.getEnabled()==1){pb=this.qj(r.yg,0);cb=(this.getUriResolver()).resolveURI(this.getImage());B=ub.f;}else{pb=ub.f;cb=(this.getUriResolver()).resolveURI(this.getDisabledImage());B=jsx3.html.getCSSOpacity(0.4);}var
U=this.renderAttributes(null,true);var
K=this.Wl(true);K.setAttributes(ub.J+this.getId()+ub.K+this.Rl()+this.nk()+this.Ak()+pb+ub.L+U);K.setStyles(this.mi(true)+Bb+Va+ja+B+this.Wi()+this.Bg());var
Xa=K.lg(0);Xa.setStyles(cb!=null?ub.H+cb+ub.I:ub.f);Xa.setAttributes(ub.M+jsx3.html._d);var
G=K.lg(1);G.setAttributes(ub.N+jsx3.html._d);var
wb;if((wb=this.getText())!=null&&wb!=ub.f){G.setStyles(this.jc()+this._k()+this.cd()+this.wk());}else{wb=ub.O;G.setStyles(jsx3.html.co);}var
ib=K.lg(2);ib.setAttributes(ub.P);var
kb=K.lg(3);kb.setAttributes(ub.P);kb.setStyles(ub.Q+(this.getState()==1?ub.R+r.BORDERCOLOR+ub.S:ub.f));return (K.paint()).join((Xa.paint()).join(ub.O)+(G.paint()).join(wb)+(ib.paint()).join(ub.O)+(kb.paint()).join(ub.O));};r.getVersion=function(){return ub.T;};d.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};d.emInit=function(e){this.jsxsupermix(e);if(this.getType()==2)this.setType(0);this.subscribe(ub.k,this,ub.U);};d.emSetValue=function(a){};d.emGetValue=function(){return null;};d.emBeginEdit=function(c,l,a,h,e,k,j){var
Qa=j.childNodes[0].childNodes[0];if(Qa){this.jsxsupermix(c,l,a,h,e,k,j);jsx3.html.focus(Qa);}else return false;};d.emPaintTemplate=function(){this.setEnabled(0);var
Ja=this.paint();this.setEnabled(1);var
ta=this.paint();return this.emGetTemplate(ta,Ja);};d.pt=function(l){var
Eb=this.emGetSession();if(Eb){}};d.onDestroy=function(s){if(this._jsxRL)this._jsxRL.destroy();this.jsxsuper(s);};d.onSetChild=function(l){return false;};});jsx3.ToolbarButton=jsx3.gui.ToolbarButton;
