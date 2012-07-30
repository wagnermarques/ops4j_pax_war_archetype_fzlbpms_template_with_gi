/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.TextBox",jsx3.gui.Block,[jsx3.gui.Form],function(d,m){var
ub={A:"textarea",B:"inline",C:"box",D:"2 0 0 2",E:"solid 1px #a6a6af;solid 1px #e6e6e6;solid 1px #e6e6e6;solid 1px #a6a6af",F:"keypress",G:"jsxkeydown",H:"keydown",I:"keyup",J:"blur",K:"jsxfocus",L:"focus",M:"jsxdblclick",N:"dblclick",O:"jsxclick",P:"click",Q:"jsxmousedown",R:"mousedown",S:"jsxmousewheel",T:"mousewheel",U:' id="',V:'"',W:' value="',X:'" class="',Y:'" ',Z:' class="',_:"overflow:",a:"",aa:";",b:"auto",ba:' wrap="',c:"scroll",ca:"virtual",d:"#ffffff",da:"off",e:"none",ea:"background-color:",f:"ssn",fa:' type="',g:"phone",ga:"text",h:"email",ha:"password",i:"number",ia:' maxlength="',j:"letter",ja:" ",k:"uszip",ka:' readonly="readonly" ',l:"jsx30textbox",la:"#FFFF66",m:/[\s\S]*/,ma:"3.0.00",n:/^\d{3}-\d{2}-\d{4}$/,na:"1;",o:/^[0-9\-\(\) ]+$/,oa:"jS",p:/^([a-zA-Z0-9_~\-\.]+)@([a-zA-Z0-9\-]+\.){1,}[a-zA-Z0-9]{2,}$/,q:/^\d+$/,r:/^[a-zA-Z ,-\.]+$/,s:/^\d{5}(-\d{4})?$/,t:"jsxexecute",u:"jsxkeypress",v:"jsxchange",w:"jsxkeyup",x:"jsxincchange",y:"input[text]",z:"input[password]"};var
ga=jsx3.gui.Event;var
F=jsx3.gui.Interactive;var
Ka=jsx3.html;d.TYPETEXT=0;d.TYPETEXTAREA=1;d.TYPEPASSWORD=2;d.WRAPYES=1;d.WRAPNO=0;d.OVERFLOWNORMAL=ub.a;d.OVERFLOWAUTO=ub.b;d.OVERFLOWSCROLL=ub.c;jsx3.gui.TextBox.DEFAULTBACKGROUNDCOLOR=ub.d;d.VALIDATIONNONE=ub.e;d.VALIDATIONSSN=ub.f;d.VALIDATIONPHONE=ub.g;d.VALIDATIONEMAIL=ub.h;d.VALIDATIONNUMBER=ub.i;d.VALIDATIONLETTER=ub.j;d.VALIDATIONUSZIP=ub.k;d.DEFAULTCLASSNAME=ub.l;d.hI={};d.hI[ub.e]=ub.m;d.hI[ub.f]=ub.n;d.hI[ub.g]=ub.o;d.hI[ub.h]=ub.p;d.hI[ub.i]=ub.q;d.hI[ub.j]=ub.r;d.hI[ub.k]=ub.s;m.init=function(s,f,a,q,n,o,b){this.jsxsuper(s,f,a,q,n);if(o!=null){this.setDefaultValue(o);this.setValue(o);}if(b!=null)this.setType(b);};m.Lh=function(i,c){if(i.enterKey()&&this.getEvent(ub.t)){this.doEvent(ub.t,{objEVENT:i});}else this.doEvent(ub.u,{objEVENT:i});};m.ah=function(r,n){this.jsxsupermix(r,n);var
W=this.parseValue(n.value);if(this.jsxvalue!==W){var
O=this.doEvent(ub.v,{objEVENT:r,strPREVIOUS:this.jsxvalue,strVALUE:W,_gipp:1});if(O===false){n.value=this.formatValue(this.jsxvalue);return;}else this.jsxvalue=W;}var
Sa=this.formatValue(W);if(Sa!=n.value)n.value=Sa;};m.formatValue=function(n){if(n==null)return ub.a;return ub.a+n;};m.parseValue=function(c){return c;};m.mc=function(s,j){this.doEvent(ub.w,{objEVENT:s});if(this.getType()==1){var
Gb=this.getMaxLength();if(Gb>0){var
Wa=j.value;if(Wa&&Wa.length>Gb)j.value=Wa.substring(0,Gb);}}if(this.hasEvent(ub.x)){var
ob=this.parseValue(j.value);if(this._jsxYp!=ob){var
wb=this.doEvent(ub.x,{objEVENT:s,strPREVIOUS:this._jsxYp,strVALUE:ob});if(wb===false){j.value=this._jsxYp!=null?this._jsxYp:ub.a;}else this._jsxYp=j.value;}}};m.getMaxLength=function(){return this.jsxmaxlength!=null?this.jsxmaxlength:null;};m.setMaxLength=function(c){this.jsxmaxlength=c;return this;};m.getType=function(){return this.jsxtype==null?0:this.jsxtype;};m.setType=function(p){this.jsxtype=p;this.Qf();return this;};m.getValue=function(){var
G=this.getRendered();if(G!=null){return this.parseValue(G.value);}else return this.jsxvalue!=null?this.jsxvalue:this.getDefaultValue();};m.hV=function(){var
ea=this.getRendered();if(ea)this.jsxvalue=this.parseValue(ea.value);};m.rA=function(){return jsx3.util.strEscapeHTML(this.formatValue(this.jsxvalue));};m.il=function(){return this.getText()?this.getText():ub.a;};m.getDefaultValue=function(){return this.il();};m.setValue=function(h){this.jsxvalue=h;this._jsxYp=h;var
Nb=this.getRendered();if(Nb!=null)Nb.value=this.formatValue(h);return this;};m.setDefaultValue=function(n){this.setText(n);return this;};m.getWrap=function(){return this.jsxwrap==null?1:this.jsxwrap;};m.setWrap=function(n){this.jsxwrap=n;return this;};m.Hj=function(n,j,e){this.sk(n,j,e,3);};m.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};this.applyDynamicProperties();var
vb=this.getRelativePosition()!=0;var
v,Qa,_a,Ra,sb;var
tb=!vb&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
Ya=!vb&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.left==null)s.left=Ya;if(s.top==null)s.top=tb;if(s.width==null)s.width=this.getWidth();if(s.height==null)s.height=this.getHeight();var
y=this.getType();if(y==0){s.tagname=ub.y;s.empty=true;}else if(y==2){s.tagname=ub.z;s.empty=true;}else s.tagname=ub.A;if(!s.boxtype)s.boxtype=vb?ub.B:ub.C;s.padding=(v=this.getPadding())!=null&&v!=ub.a?v:ub.D;if(s.tagname!=ub.A)s.margin=vb&&(Qa=this.getMargin())!=null&&Qa!=ub.a?Qa:null;s.border=(_a=this.getBorder())!=null&&_a!=ub.a?_a:ub.E;var
B=new
jsx3.gui.Painted.Box(s);return B;};m.paint=function(){this.applyDynamicProperties();this.hV();var
ib=this.getId();var
jb=this.getType();var
ja={};if(this.hasEvent(ub.t)||this.hasEvent(ub.u))ja[ub.F]=true;if(this.hasEvent(ub.G))ja[ub.H]=true;if(this.hasEvent(ub.w)||this.hasEvent(ub.x)||this.getType()==1&&this.getMaxLength()>0){ja[ub.I]=true;this._jsxYp=this.getValue();}ja[ub.J]=true;if(this.hasEvent(ub.K))ja[ub.L]=true;if(this.hasEvent(ub.M))ja[ub.N]=true;if(this.hasEvent(ub.O))ja[ub.P]=true;if(this.hasEvent(ub.Q))ja[ub.R]=true;if(this.hasEvent(ub.S))ja[ub.T]=true;var
Ea=this.qj(ja,0);var
mb=this.renderAttributes(null,true);var
xa=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
db=this.Wl(true);if(jb==0||jb==2){db.setAttributes(this.iH()+ub.U+ib+ub.V+this.Lj()+this.pc()+this.V3()+this.aW()+this.Rl()+this.nk()+Ea+ub.W+this.rA()+ub.X+this.dd()+ub.Y+mb);db.setStyles(xa);var
Eb=ub.a;}else{db.setAttributes(ub.U+ib+ub.V+this.Lj()+this.pc()+this.V3()+this.Rl()+this.nk()+Ea+ub.Z+this.dd()+ub.Y+this.renderAttributes()+this.vT());db.setStyles(xa+this.Mm());var
Eb=this.rA();}return (db.paint()).join(Eb);};m.Mm=function(){return ub._+(this.getOverflow()?this.getOverflow():ub.a)+ub.aa;};m.vT=function(){return ub.ba+(this.getWrap()==1?ub.ca:ub.da)+ub.V;};m.ch=function(){var
Aa=this.getEnabled()!=0?this.getBackgroundColor()||d.DEFAULTBACKGROUNDCOLOR:this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return ub.ea+Aa+ub.aa;};m.iH=function(){return ub.fa+(this.getType()==0?ub.ga:ub.ha)+ub.V;};m.aW=function(q){return this.getMaxLength()!=null?ub.ia+parseInt(this.getMaxLength())+ub.Y:ub.a;};m.dd=function(){var
_a=this.getClassName();return d.DEFAULTCLASSNAME+(_a?ub.ja+_a:ub.a);};m.getReadonly=function(){return this.jsxreadonly;};m.setReadonly=function(c){this.jsxreadonly=c?1:0;};m.V3=function(){return this.getReadonly()?ub.ka:ub.a;};m.getValidationType=function(){return jsx3.util.strEmpty(this.jsxvalidationtype)?ub.e:this.jsxvalidationtype;};m.setValidationType=function(k){this.jsxvalidationtype=k;return this;};m.getValidationExpression=function(){return jsx3.util.strEmpty(this.jsxvalidationexpression)?null:this.jsxvalidationexpression;};m.setValidationExpression=function(n){this.jsxvalidationexpression=n;return this;};m.doValidate=function(){this.setValidationState(1);var
nb=this.getValue();if(nb!=null)nb=String(nb);var
ca=null;if(nb==null||jsx3.util.strTrim(nb)==ub.a){if(this.getRequired()==1)this.setValidationState(0);}else{var
ya=this.getValidationExpression();if(ya==null){ca=d.hI[this.getValidationType()];}else ca=new
RegExp(ya);this.setValidationState(nb.search(ca)==0?1:0);}return this.getValidationState();};m.onSetChild=function(s){return false;};m.beep=function(){jsx3.gui.no(this.getRendered(),{backgroundColor:ub.la});};m.getSelection=function(){var
B=this.getRendered();if(B){var
pa=Ka.getSelection(B);return [pa.getStartIndex(),pa.getEndIndex()];}return [0,0];};m.setSelection=function(l,k){var
tb=this.getRendered();if(tb){if(arguments.length==0){l=0;k=tb.value.length;}var
lb=Ka.getSelection(tb);lb.setRange(l,k);}};d.getVersion=function(){return ub.ma;};m.emInit=function(a){this.jsxsupermix(a);var
_=ub.G;if(!this.hasEvent(_))this.setEvent(ub.na,_);this.subscribe(_,this,ub.oa);};m.emUpdateDisplay=function(r,p){if(this.getType()==1){var
la=isNaN(this._jsxdl)?r.W:Math.min(parseInt(this._jsxdl),r.W);var
ra=isNaN(this._jsxvh)?r.H:Math.min(parseInt(this._jsxvh),p.H-r.T);this.setDimensions(r.L,r.T,la,ra,true);}else this.jsxsupermix(r,p);};m.emGetValue=function(){var
z=(this.emGetSession()).value;var
pa=this.getValue();return z===null&&pa===ub.a?z:pa;};m.jS=function(j){var
P=j.context.objEVENT;var
Ia=false;if(!P.hasModifier(true)){var
vb=P.keyCode();var
Hb=false;if(this.getType()==1){Ia=!P.shiftKey()&&vb==13;Hb=P.isArrowKey();}else Hb=vb==37||vb==39;if(!Ia&&Hb){var
R=this.getRendered(P);var
eb=Ka.getSelection(R);var
ea=R.value;var
Ua=vb==37||vb==38;Ia=Ua&&(eb.getStartIndex()>0||eb.getEndIndex()>0)||!Ua&&(eb.getStartIndex()<ea.length||eb.getEndIndex()<ea.length);}}if(Ia)P.cancelBubble();};});jsx3.TextBox=jsx3.gui.TextBox;
