/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.chart.Series","jsx3.chart.PointRenderer");jsx3.Class.defineClass("jsx3.chart.PlotSeries",jsx3.chart.Series,null,function(m,g){var
ub={a:"jsx3.chart.PointRenderer.CIRCLE",b:"Xf",c:"Eh",d:"qe",e:"diameter",f:"area",g:"_p",h:"jsxid",i:"renderer"};m.Rp=25;g.init=function(c,j){this.jsxsuper(c,j);this.xField=null;this.yField=null;this.magnitude=null;this.renderer=ub.a;};g.UI=function(){var
Ya=this.Lm(ub.b);if(Ya==null){Ya=[];this.Rf(ub.b,Ya);}return Ya;};g.updateView=function(){this.jsxsuper();var
Lb=this.Gk();var
Da=this.Sb(Lb);this.Rf(ub.c,Lb);this.Rf(ub.d,Da);var
V=this.UI();for(var
fb=0;fb<V.length;fb++)this.eK(V[fb]);};g.vK=function(b,l,j,f,c){var
Ka=this.getCanvas();var
Nb=this.getChart();if(Nb==null)return;var
_=Nb.getMaxPointRadius();var
ra=this.getWidth();var
nb=this.getHeight();if(j>ra||j<0)return;if(f>nb||f<0)return;var
Jb=this.getRenderer();if(Jb==null)Jb=jsx3.chart.PointRenderer.CIRCLE;var
Ib=null,Ia=null,xa=null,x=null;var
ta=Nb.getMagnitudeMethod();if(ta==ub.e){c=Math.min(_*2,c);Ib=j-Math.round(c/2);Ia=f-Math.round(c/2);xa=Ib+c;x=Ia+c;}else{var
ja=ta==ub.f?Jb.areaToRadius(c*m.Rp):c;ja=Math.min(_,ja);Ib=j-Math.round(ja);Ia=f-Math.round(ja);xa=Ib+Math.round(2*ja);x=Ia+Math.round(2*ja);}var
A=this.getColorFunction();var
db=A!=null?A.apply(this,[b,l]):this.Lm(ub.c);var
ya=Jb.render(Ib,Ia,xa,x,db,this.Lm(ub.d));ya.setId(this.getId()+ub.g+l);this.Ci(ya,l,b.getAttribute(ub.h));Ka.appendChild(ya);var
_a=this.getTooltipFunction();if(_a!=null)ya.setToolTip(_a.apply(this,[this,b]));};g.ym=function(){var
E=this.UI();E.splice(0,E.length);};g.getXValue=function(d){if(this.xField)return jsx3.chart.asNumber(d.getAttribute(this.xField));return null;};g.getYValue=function(r){if(this.yField)return jsx3.chart.asNumber(r.getAttribute(this.yField));return null;};g.getXField=function(){return this.xField;};g.setXField=function(f){this.xField=f;};g.getYField=function(){return this.yField;};g.setYField=function(n){this.yField=n;};g.getRenderer=function(){return jsx3.chart.Sl(this,ub.i);};g.setRenderer=function(h){jsx3.chart.yd(this,ub.i,h);};g.getLegendRenderer=function(){var
ca=this.getRenderer();return ca!=null?ca:this.jsxsuper();};m.getVersion=function(){return jsx3.chart.Xe;};});jsx3.Class.defineClass("jsx3.chart.PointSeries",jsx3.chart.PlotSeries,null,function(s,k){var
ub={a:"jsx3.chart.PointSeries.tooltip",b:"{",c:",",d:"}"};s.DEFAULT_MAGNITUDE=4;k.init=function(e,h){this.jsxsuper(e,h);this.magnitude=null;this.setTooltipFunction(ub.a);};k.uk=function(o,f,m,l){(this.UI()).push([o,f,m,l]);};k.eK=function(g){this.vK(g[0],g[1],g[2],g[3],this.getMagnitude());};k.getMagnitude=function(){return this.magnitude!=null?this.magnitude:s.DEFAULT_MAGNITUDE;};k.setMagnitude=function(b){this.magnitude=b;};s.tooltip=function(g,f){var
sa=g.getXValue(f);var
la=g.getYValue(f);return ub.b+sa+ub.c+la+ub.d;};});jsx3.Class.defineClass("jsx3.chart.BubbleSeries",jsx3.chart.PlotSeries,null,function(c,k){var
ub={a:"jsx3.chart.BubbleSeries.tooltip",b:"{",c:",",d:"}"};k.init=function(h,e){this.jsxsuper(h,e);this.magnitudeField=null;this.setTooltipFunction(ub.a);};k.uk=function(i,s,f,r,m){(this.UI()).push([i,s,f,r,m]);};k.eK=function(e){this.vK(e[0],e[1],e[2],e[3],e[4]);};c.tooltip=function(b,e){var
L=b.getXValue(e);var
C=b.getYValue(e);var
B=b.getMagnitudeValue(e);return ub.b+L+ub.c+C+ub.c+B+ub.d;};k.getMagnitudeField=function(){return this.magnitudeField;};k.setMagnitudeField=function(i){this.magnitudeField=i;};k.getMagnitudeValue=function(o){if(this.magnitudeField)return jsx3.chart.asNumber(o.getAttribute(this.magnitudeField));return null;};});
