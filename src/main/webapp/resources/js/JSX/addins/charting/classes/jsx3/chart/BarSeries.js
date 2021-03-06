/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.chart.Series");jsx3.Class.defineClass("jsx3.chart.BCSeries",jsx3.chart.Series,null,function(l,d){var
ub={a:"ak",b:"Eh",c:"qe",d:"_r",e:"jsxid"};d.init=function(c,a){this.jsxsuper(c,a);this.xField=null;this.yField=null;this.minField=null;};d.Ug=jsx3.Method.newAbstract();d.af=jsx3.Method.newAbstract();d.xk=jsx3.Method.newAbstract();d.getXValue=function(q){if(this.xField)return jsx3.chart.asNumber(q.getAttribute(this.xField));return null;};d.getYValue=function(p){if(this.yField)return jsx3.chart.asNumber(p.getAttribute(this.yField));return null;};d.getMinValue=function(b){if(this.minField)return jsx3.chart.asNumber(b.getAttribute(this.minField));return null;};d._getShownAreas=function(){var
Q=this.Lm(ub.a);if(Q==null){Q=[];this.Rf(ub.a,Q);}return Q;};d.updateView=function(){this.jsxsuper();var
sa=this.Gk();var
R=this.Sb(sa);this.Rf(ub.b,sa);this.Rf(ub.c,R);var
w=this._getShownAreas();for(var
U=0;U<w.length;U++){var
va=w[U];this.En(va[0],va[1],va[2],va[3],va[4],va[5],true);}};d.En=function(e,o,c,j,b,i,h){if(!h)(this._getShownAreas()).push([e,o,c,j,b,i]);var
ia=this.getCanvas();var
Xa=this.getWidth();var
Pa=this.getHeight();if(c>b){var
U=c;c=b;b=U;}if(j>i){var
U=j;j=i;i=U;}if(c>Xa||b<0)return;if(j>Pa||i<0)return;var
H=new
jsx3.vector.Rectangle(c,j,b-c,i-j);H.setId(this.getId()+ub.d+o);H.clipTo(0,0,Xa,Pa);var
Ma=this.getColorFunction();var
fa=Ma!=null?Ma.apply(this,[e,o]):this.Lm(ub.b);H.setFill(fa);H.setStroke(this.Lm(ub.c));var
Lb=this.getTooltipFunction();if(Lb!=null)H.setToolTip(Lb.apply(this,[this,e]));this.Ci(H,o,e.getAttribute(ub.e));ia.appendChild(H);};d.Vb=function(){var
ca=this._getShownAreas();ca.splice(0,ca.length);};d.getXField=function(){return this.xField;};d.setXField=function(q){this.xField=q;};d.getYField=function(){return this.yField;};d.setYField=function(k){this.yField=k;};d.getMinField=function(){return this.minField;};d.setMinField=function(j){this.minField=j;};l.getVersion=function(){return jsx3.chart.Xe;};});jsx3.chart.BCSeries.prototype.drawBar=jsx3.chart.BCSeries.prototype.En;jsx3.chart.BCSeries.prototype.drawColumn=jsx3.chart.BCSeries.prototype.En;jsx3.Class.defineClass("jsx3.chart.BarSeries",jsx3.chart.BCSeries,null,function(k,a){var
ub={a:"jsx3.chart.BarSeries.tooltip",b:"{",c:",",d:"}",e:", y = "};k.DEFAULT_BARHEIGHT=10;a.init=function(b,m){this.jsxsuper(b,m);this.barHeight=null;this.setTooltipFunction(ub.a);};a.Ug=function(o){return this.getXValue(o);};a.af=function(l){return this.getYValue(l);};a.xk=function(){return this.getBarHeight();};a.getBarHeight=function(){return this.barHeight!=null?this.barHeight:k.DEFAULT_BARHEIGHT;};a.setBarHeight=function(j){this.barHeight=j;};k.tooltip=function(r,h){var
Fb=r.getXValue(h);var
yb=r.getYValue(h);var
ta=r.getMinValue(h);var
F=ta!=null?ub.b+ta+ub.c+Fb+ub.d:Fb;if(yb!=null)F=F+(ub.e+yb);return F;};});jsx3.Class.defineClass("jsx3.chart.ColumnSeries",jsx3.chart.BCSeries,null,function(q,l){var
ub={a:"jsx3.chart.ColumnSeries.tooltip",b:"[ColumnSeries '",c:"']",d:"{",e:",",f:"}",g:", x = "};q.DEFAULT_COLUMNWIDTH=10;l.init=function(i,d){this.jsxsuper(i,d);this.columnWidth=null;this.setTooltipFunction(ub.a);};l.Ug=function(j){return this.getYValue(j);};l.af=function(b){return this.getXValue(b);};l.xk=function(){return this.getColumnWidth();};l.getColumnWidth=function(){return this.columnWidth!=null?this.columnWidth:q.DEFAULT_COLUMNWIDTH;};l.setColumnWidth=function(d){this.columnWidth=d;};l.toString=function(){return ub.b+this.getName()+ub.c;};l.En=function(d,n,e,j,p,i,b){if(b)this.jsxsuper(d,n,e,j,p,i,b);else this.jsxsuper(d,n,j,p,i,e,b);};q.tooltip=function(s,g){var
M=s.getXValue(g);var
Ya=s.getYValue(g);var
Bb=s.getMinValue(g);var
Ib=Bb!=null?ub.d+Bb+ub.e+Ya+ub.f:Ya;if(M!=null)Ib=Ib+(ub.g+M);return Ib;};});
