/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.RadioButton",jsx3.gui.Block,[jsx3.gui.Form],function(k,f){var
ub={A:' name="',B:'" value="',C:'" ',D:' for="',E:'_input"',F:"0/0/0",G:' checked="checked" ',H:" ",I:"_input",J:"3.0.00",K:"C0",L:"disabled",M:/<(input .*?)\/>/g,N:"<$1><xsl:if test=\"{0}='1'\"><xsl:attribute name=\"checked\">checked</xsl:attribute></xsl:if><xsl:if test=\"@jsxdisabled='1'\"><xsl:attribute name=\"disabled\">disabled</xsl:attribute></xsl:if></input>",O:"//record[@",P:"='1']",Q:"1",a:"jsx30radio",b:"jsxselect",c:"input",d:"radio",e:"click",f:"keydown",g:"span",h:"",i:"relativebox",j:"box",k:"div",l:"inline",m:"input[radio]",n:"label",o:"100%",p:"0 0 0 18",q:' id="',r:'"',s:' class="',t:"overflow-x:hidden;",u:' class="jsx30radio_tristate" ',v:'_input" type="radio" ',w:"focus",x:"Vl",y:"blur",z:"ah"};k.UNSELECTED=0;k.SELECTED=1;k.DEFAULTCLASSNAME=ub.a;f.init=function(e,a,o,c,s,j,n,r,g){this.jsxsuper(e,a,o,c,s,j);this.setGroupName(r);this.setValue(n);this.setDefaultSelected(g==null?1:g);if(g!=null)this.setSelected(g);};f.getGroupName=function(){return this.jsxgroupname;};f.setGroupName=function(e){this.jsxgroupname=e;};f.nj=function(c,j){this.focus(j);if(!c.leftButton()&&c.isMouseEvent())return;if(this.getSelected()!=1){var
ob=this.doEvent(ub.b,{objEVENT:c,_gipp:1});if(ob!==false)this.setSelected(1,j);}};f._ebKeyDown=function(s,m){if(s.enterKey()){this.nj(s,m);s.cancelAll();}};f.getDefaultSelected=function(){return this.jsxdefaultselected;};f.setDefaultSelected=function(g){this.jsxdefaultselected=g;return this;};f.getSelected=function(){return this.jsxselected!=null?this.jsxselected:this.getDefaultSelected();};f.setSelected=function(q,a){q=q!=null?q:1;this.jsxselected=q;if(a==null)a=this.getRendered();if(a){(jsx3.html.selectSingleElm(a,0,0,0)).checked=q==1;if(q==1){var
lb=this.getSiblings();for(var
Da=0;Da<lb.length;Da++)lb[Da].jsxselected=0;}}return this;};f.getSiblings=function(l){var
ya=[];var
oa=this.getDocument();if(oa==null)return ya;var
Ia=this.getId();var
N=oa.getElementsByName(this.getGroupName());for(var
Ib=0;Ib<N.length;Ib++){var
Fa=N[Ib];if(Fa.nodeName.toLowerCase()==ub.c&&Fa.type.toLowerCase()==ub.d){var
ea=Fa.parentNode.parentNode.parentNode;if(ea.id!=Ia)ya.push(l?[jsx3.GO(ea.id),ea]:jsx3.GO(ea.id));}}return ya;};k.getValue=function(a){var
Ba=document;if(Ba!=null){var
Y=Ba.getElementsByName(a);if(Y!=null){var
wa=Y.length;for(var
bb=0;bb<wa;bb++)if(Y[bb].checked)return Y[bb].value;}}};k.setValue=function(g,b){var
ya=document;if(ya==null)return null;var
Ab=ya.getElementsByName(g);if(Ab!=null){var
Fb=Ab.length;for(var
T=0;T<Fb;T++)if(Ab[T].value==b){var
_=jsx3.GO(Ab[T].parentNode.parentNode.parentNode.id);_.setSelected(1);return _;}}return null;};f.getValue=function(){return this.jsxvalue;};f.setValue=function(p){this.jsxvalue=p;return this;};f.getGroupValue=function(){if(this.getSelected()==1)return this.getValue();var
Pa=this.getSiblings();for(var
Eb=0;Eb<Pa.length;Eb++){var
H=Pa[Eb];if(H.getSelected()==1)return H.getValue();}return null;};f.setGroupValue=function(p){if(this.getValue()==p){if(this.getSelected()!=1)this.setSelected(1);}else{this.jsxselected=0;var
yb=this.getSiblings(true);for(var
T=0;T<yb.length;T++){var
K=yb[T][0];var
ma=yb[T][1];var
X=K.getValue()==p;K.jsxselected=X?1:0;(jsx3.html.selectSingleElm(ma,0,0,0)).checked=X;}}};f.doValidate=function(){this.setValidationState(this.getRequired()==0||this.getGroupValue()!=null?1:0);return this.getValidationState();};k.yg={};k.yg[ub.e]=true;k.yg[ub.f]=true;f.Hj=function(m,j,e){this.sk(m,j,e,3);};f.zd=function(g){if(this.getParent()&&(g==null||isNaN(g.parentwidth)||isNaN(g.parentheight))){g=(this.getParent()).Id(this);}else if(g==null)g={};var
Q=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
hb,ra,w,na;if(g.tagname==null)g.tagname=ub.g;if((hb=this.getBorder())!=null&&hb!=ub.h)g.border=hb;if(Q&&(ra=this.getMargin())!=null&&ra!=ub.h)g.margin=ra;if(!g.boxtype)g.boxtype=Q?ub.i:ub.j;if(g.left==null)g.left=!Q&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(g.top==null)g.top=!Q&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(g.height==null)g.height=(w=this.getHeight())!=null?w:18;if(g.width==null)if((na=this.getWidth())!=null)g.width=na;var
Ga=new
jsx3.gui.Painted.Box(g);var
yb={};yb.tagname=ub.k;yb.boxtype=ub.l;var
Aa=new
jsx3.gui.Painted.Box(yb);Ga.cl(Aa);yb={};yb.tagname=ub.g;yb.boxtype=ub.j;yb.width=16;yb.parentheight=Ga.ld();yb.height=18;var
_=new
jsx3.gui.Painted.Box(yb);Aa.cl(_);yb={};yb.tagname=ub.m;yb.empty=true;yb.omitpos=true;var
Za=new
jsx3.gui.Painted.Box(yb);_.cl(Za);yb={};yb.tagname=ub.n;yb.boxtype=ub.l;yb.top=2;yb.parentheight=Ga.ld();yb.height=ub.o;yb.padding=ub.p;var
Ca=new
jsx3.gui.Painted.Box(yb);Ga.cl(Ca);return Ga;};f.paint=function(){this.applyDynamicProperties();var
ea=this.getEnabled()==1;var
Ia=ea?this.qj(k.yg,0):ub.h;var
Q=this.renderAttributes(null,true);var
H=this.Wl(true);H.setAttributes(ub.q+this.getId()+ub.r+this.Ak()+ub.s+this.dd()+ub.r+this.nk()+Ia+Q);H.setStyles((H.getPaintedWidth()?ub.t:ub.h)+this.mi(true)+this._k()+this.cd()+this.wk()+this.jc()+this.ch()+this.ad()+this.lc()+this.Wi()+this.Bg());var
Ba=H.lg(0);var
Ib=Ba.lg(0);Ib.setAttributes(ub.u);var
O=Ib.lg(0);O.setAttributes(ub.q+this.getId()+ub.v+this.Fg(ub.w,ub.x,3)+this.Fg(ub.y,ub.z,3)+ub.A+this.getGroupName()+ub.B+this.getValue()+ub.C+this.pc()+this.paintSelected()+this.Rl());var
eb=this.il();var
Ja=H.lg(1);Ja.setAttributes((eb?ub.D+this.getId()+ub.E:ub.h)+jsx3.html._d);return (H.paint()).join((Ba.paint()).join((Ib.paint()).join((O.paint()).join(ub.h))+(Ja.paint()).join(eb)));};f.focus=function(d){if(!d)d=this.getRendered();if(d)jsx3.html.focus(jsx3.html.selectSingleElm(d,ub.F));};f.paintSelected=function(){return this.getSelected()==1?ub.G:ub.h;};f.dd=function(){var
B=this.getClassName();return k.DEFAULTCLASSNAME+(B?ub.H+B:ub.h);};f.getInputId=function(){return this.getId()+ub.I;};f.onSetChild=function(i){return false;};k.getVersion=function(){return ub.J;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(d){this.jsxsupermix(d);this.subscribe(ub.b,this,ub.K);};f.emSetValue=function(l){this.jsxselected=Number(l)==1?1:0;};f.emGetValue=function(){var
ma=this.emGetSession();if(ma)return ma.column.getValueForRecord(ma.recordId);return null;};f.emBeginEdit=function(a,n,h,m,e,i,l){var
L=jsx3.html.selectSingleElm(l,0,0,0,0,0);if(L&&!L.getAttribute(ub.L)){this.jsxsupermix(a,n,h,m,e,i,l);jsx3.html.focus(L);}else return false;};f.emPaintTemplate=function(){this.jsxselected=0;this.setText(ub.h);this.setEnabled(0);var
da=this.paint();this.setEnabled(1);var
La=this.paint();var
ia=this.emGetTemplate(La,da);ia=ia.replace(ub.M,ub.N);return ia;};f.C0=function(l){var
qb=this.emGetSession();if(qb){var
sa=qb.column.getPath();var
aa=(qb.matrix.getXML()).selectNodeIterator(ub.O+sa+ub.P);while(aa.hasNext()){var
yb=aa.next();yb.removeAttribute(sa);}qb.column.setValueForRecord(qb.recordId,ub.Q);}};});jsx3.RadioButton=jsx3.gui.RadioButton;
