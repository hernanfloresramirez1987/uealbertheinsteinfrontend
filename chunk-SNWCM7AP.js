import{A as c,B as o,D as u,F as m,G as E,H as l,I as _,K as g,L as R,M as C,N as I,R as w,S as P,T as b,U as F,V as L,i as f,k as h,l as T,m as A,n as N,p as M,r as s,s as S,t as D,v as r,w as y,x as n,z as v}from"./chunk-GLF6IBDU.js";var U=["*"];var H=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["p-header"]],ngContentSelectors:U,decls:1,vars:0,template:function(i,a){i&1&&(E(),l(0))},encapsulation:2})}return t})(),W=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["p-footer"]],ngContentSelectors:U,decls:1,vars:0,template:function(i,a){i&1&&(E(),l(0))},encapsulation:2})}return t})(),G=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(S(D))};static \u0275dir=N({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[h.None,"pTemplate","name"]}})}return t})(),x=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=f({imports:[L]})}return t})();var k=["*",[["p-header"]],[["p-footer"]]],K=["*","p-header","p-footer"];function V(t,p){t&1&&u(0)}function Y(t,p){if(t&1&&(c(0,"div",8),l(1,1),r(2,V,1,0,"ng-container",6),o()),t&2){let e=m();s(2),n("ngTemplateOutlet",e.headerTemplate)}}function j(t,p){t&1&&u(0)}function q(t,p){if(t&1&&(c(0,"div",9),C(1),r(2,j,1,0,"ng-container",6),o()),t&2){let e=m();s(),I(" ",e.header," "),s(),n("ngTemplateOutlet",e.titleTemplate)}}function Q(t,p){t&1&&u(0)}function J(t,p){if(t&1&&(c(0,"div",10),C(1),r(2,Q,1,0,"ng-container",6),o()),t&2){let e=m();s(),I(" ",e.subheader," "),s(),n("ngTemplateOutlet",e.subtitleTemplate)}}function z(t,p){t&1&&u(0)}function X(t,p){t&1&&u(0)}function Z(t,p){if(t&1&&(c(0,"div",11),l(1,2),r(2,X,1,0,"ng-container",6),o()),t&2){let e=m();s(2),n("ngTemplateOutlet",e.footerTemplate)}}var pt=(()=>{class t{el;header;subheader;style;styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;constructor(e){this.el=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"title":this.titleTemplate=e.template;break;case"subtitle":this.subtitleTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(i){return new(i||t)(S(M))};static \u0275cmp=T({type:t,selectors:[["p-card"]],contentQueries:function(i,a,O){if(i&1&&(_(O,H,5),_(O,W,5),_(O,G,4)),i&2){let d;g(d=R())&&(a.headerFacet=d.first),g(d=R())&&(a.footerFacet=d.first),g(d=R())&&(a.templates=d)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:K,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,a){i&1&&(E(k),c(0,"div",0),r(1,Y,3,1,"div",1),c(2,"div",2),r(3,q,3,2,"div",3)(4,J,3,2,"div",4),c(5,"div",5),l(6),r(7,z,1,0,"ng-container",6),o(),r(8,Z,3,1,"div",7),o()()),i&2&&(v(a.styleClass),n("ngClass","p-card p-component")("ngStyle",a.style),y("data-pc-name","card"),s(),n("ngIf",a.headerFacet||a.headerTemplate),s(2),n("ngIf",a.header||a.titleTemplate),s(),n("ngIf",a.subheader||a.subtitleTemplate),s(3),n("ngTemplateOutlet",a.contentTemplate),s(),n("ngIf",a.footerFacet||a.footerTemplate))},dependencies:[w,P,F,b],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return t})(),ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=f({imports:[L,x]})}return t})();export{pt as a,ct as b};