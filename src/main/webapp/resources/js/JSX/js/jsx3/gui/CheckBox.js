/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.CheckBox",jsx3.gui.Block,[jsx3.gui.Form],function(n,f){var
ub={A:";",B:' for="',C:'_input"',D:"_ebLabelClick",E:"&#160;",F:' checked="checked" ',G:" ",H:"_input",I:"3.0.00",J:"tM",K:"disabled",L:/<(input .*?)\/>/g,M:"<$1><xsl:if test=\"{0}='1'\"><xsl:attribute name=\"checked\">checked</xsl:attribute></xsl:if></input>",a:"jsx30checkbox",b:/^false|0|null$/i,c:"jsxtoggle",d:"",e:"visible",f:"hidden",g:"click",h:"keydown",i:"span",j:"relativebox",k:"box",l:"div",m:"inline",n:"input[checkbox]",o:"label",p:"0 0 0 18",q:"0/0/0",r:"background-color:#999999;",s:' id="',t:'"',u:' class="',v:"overflow-x:hidden;",w:' class="jsx30checkbox_tristate" ',x:'_input" type="checkbox"',y:' class="jsx30checkbox_partial" ',z:"visibility:"};n.UNCHECKED=0;n.CHECKED=1;n.PARTIAL=2;n.DEFAULTCLASSNAME=ub.a;f.jsxdefaultchecked=0;var
mb=ub.b;f.init=function(c,h,q,a,l,g,s){this.jsxsuper(c,h,q,a,l,g);this.setDefaultChecked(s==null?1:s);this.jsxchecked=s;};f.getDefaultChecked=function(){return this.jsxdefaultchecked;};f.setDefaultChecked=function(p){this.jsxdefaultchecked=p;return this;};f.getChecked=function(){return this.jsxchecked!=null?this.jsxchecked:this.getDefaultChecked();};f.setChecked=function(o){if(this.jsxchecked!=o){this.jsxchecked=o;this.Wx();if(this.isOldEventProtocol())this.doEvent(ub.c,{intCHECKED:o});}return this;};f.getValue=function(){return this.getChecked();};f.setValue=function(r){this.setChecked(!jsx3.util.strEmpty(r)&&(r+ub.d).search(mb)!=0?1:0);return this;};f.nj=function(k,b){this.focus(b);if(!k.leftButton()&&k.isMouseEvent())return;if(this.getEnabled()==1){var
ib=this.getChecked()==1?0:1;this.jsxchecked=ib;this.Wx(b);this.doEvent(ub.c,{objEVENT:k,intCHECKED:ib,_gipp:1});}};f.Wx=function(o){if(o==null)o=this.getRendered();if(o!=null){(jsx3.html.selectSingleElm(o,0,0,0)).checked=this.jsxchecked==1;(jsx3.html.selectSingleElm(o,0,0,1)).style.visibility=this.jsxchecked==2?ub.e:ub.f;}};f._ebKeyDown=function(r,p){if(r.enterKey()){this.nj(r,p);r.cancelAll();}};f._ebLabelClick=function(q,o){q.preventDefault();};n.yg={};n.yg[ub.g]=true;n.yg[ub.h]=true;f.Hj=function(q,p,a){this.sk(q,p,a,3);};f.zd=function(p){if(this.getParent()&&(p==null||isNaN(p.parentwidth)||isNaN(p.parentheight))){p=(this.getParent()).Id(this);}else if(p==null)p={};var
ca=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
xa,sb,tb,Fa;if(p.tagname==null)p.tagname=ub.i;if((xa=this.getBorder())!=null&&xa!=ub.d)p.border=xa;if(ca&&(sb=this.getMargin())!=null&&sb!=ub.d)p.margin=sb;if(!p.boxtype)p.boxtype=ca?ub.j:ub.k;if(p.left==null)p.left=!ca&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(p.top==null)p.top=!ca&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(p.height==null)p.height=(tb=this.getHeight())!=null?tb:18;if(p.width==null)if((Fa=this.getWidth())!=null)p.width=Fa;var
Ma=new
jsx3.gui.Painted.Box(p);var
Ha={};Ha.tagname=ub.l;Ha.boxtype=ub.m;var
S=new
jsx3.gui.Painted.Box(Ha);Ma.cl(S);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.width=16;Ha.parentheight=Ma.ld();Ha.height=18;Ha.left=0;Ha.top=0;var
fa=new
jsx3.gui.Painted.Box(Ha);S.cl(fa);var
Ha={};Ha.tagname=ub.n;Ha.empty=true;Ha.omitpos=true;var
Y=new
jsx3.gui.Painted.Box(Ha);fa.cl(Y);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.left=3;Ha.top=7;Ha.width=7;Ha.height=2;var
ma=new
jsx3.gui.Painted.Box(Ha);fa.cl(ma);var
Ha={};Ha.tagname=ub.o;Ha.boxtype=ub.m;Ha.top=2;Ha.parentheight=Ma.ld();Ha.height=18;Ha.padding=ub.p;var
oa=new
jsx3.gui.Painted.Box(Ha);Ma.cl(oa);return Ma;};f.focus=function(m){if(!m)m=this.getRendered();if(m)jsx3.html.focus(jsx3.html.selectSingleElm(m,ub.q));};f.paint=function(){this.applyDynamicProperties();var
z=this.getEnabled()==1;var
Ha=z?this.qj(n.yg,0):ub.d;var
v=this.renderAttributes(null,true);var
ka=this.getChecked()==2?ub.e:ub.f;var
yb=z?ub.d:ub.r;var
cb=this.Wl(true);cb.setAttributes(ub.s+this.getId()+ub.t+this.Ak()+ub.u+this.dd()+ub.t+this.nk()+Ha+v);cb.setStyles((cb.getPaintedWidth()?ub.v:ub.d)+this.mi(true)+this._k()+this.cd()+this.wk()+this.jc()+this.ch()+this.ad()+this.lc()+this.Wi()+this.Bg());var
ya=cb.lg(0);var
Ab=ya.lg(0);Ab.setAttributes(ub.w);var
Db=Ab.lg(0);Db.setAttributes(ub.s+this.getId()+ub.x+this.Lj()+this.pc()+this.HF()+this.Rl());var
I=Ab.lg(1);I.setAttributes(ub.y);I.setStyles(ub.z+ka+ub.A+yb);var
qa=this.il();var
Fb=cb.lg(1);Fb.setAttributes((qa?ub.B+this.getId()+ub.C:ub.d)+jsx3.html._d+this.Fg(ub.g,ub.D));return (cb.paint()).join((ya.paint()).join((Ab.paint()).join((Db.paint()).join(ub.d)+(I.paint()).join(ub.E))+(Fb.paint()).join(qa)));};f.HF=function(){return this.getChecked()==1?ub.F:ub.d;};f.dd=function(){var
ia=this.getClassName();return n.DEFAULTCLASSNAME+(ia?ub.G+ia:ub.d);};f.doValidate=function(){this.setValidationState(this.getRequired()==0||this.getChecked()==1?1:0);return this.getValidationState();};f.getInputId=function(){return this.getId()+ub.H;};n.getVersion=function(){return ub.I;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(e){this.jsxsupermix(e);this.subscribe(ub.c,this,ub.J);};f.emSetValue=function(q){this.jsxchecked=Number(q)==1?1:0;};f.emGetValue=function(){var
Jb=this.emGetSession();if(Jb)return Jb.column.getValueForRecord(Jb.recordId);return null;};f.emBeginEdit=function(o,s,p,a,j,d,q){var
Ua=jsx3.html.selectSingleElm(q,0,0,0,0,0);if(Ua&&!Ua.getAttribute(ub.K)){this.jsxsupermix(o,s,p,a,j,d,q);jsx3.html.focus(Ua);}else return false;};f.emPaintTemplate=function(){this.jsxchecked=0;this.setText(ub.d);this.setEnabled(0);var
la=this.paint();this.setEnabled(1);var
Bb=this.paint();var
S=this.emGetTemplate(Bb,la);S=S.replace(ub.L,ub.M);return S;};f.tM=function(d){var
ua=this.emGetSession();if(ua){var
Db=d.context.intCHECKED;this.jsxchecked=Db;ua.column.setValueForRecord(ua.recordId,Db.toString());}};f.onSetChild=function(b){return false;};});jsx3.CheckBox=jsx3.gui.CheckBox;
