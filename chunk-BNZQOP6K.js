import{a as E}from"./chunk-ZC45JYJP.js";import{g as O,j as h}from"./chunk-JTVH7QYJ.js";import{c as r,f as v,g as w,h as m,j as y,k,m as j,o as S}from"./chunk-NMQFHZ3R.js";import"./chunk-C3LIQM5V.js";import{$ as d,Ab as C,Bb as _,Cb as M,Eb as e,Mb as P,Na as c,Oa as x,eb as f,gb as u,ob as t,pb as n,qb as o,vb as b}from"./chunk-TUAV3TSL.js";var z=[".wrapper"],T=(()=>{let a=class a{constructor(l){this.fb=l,this.isActive=!1,this.fg=new w({username:new m(""),password:new m("")}),this.fg=l.group({username:["",[r.required,r.minLength(6),r.maxLength(20)]],password:["",[r.required,r.minLength(6),r.maxLength(20)]]}),this.startTimer()}startTimer(){setTimeout(()=>{this.isActive=!this.isActive,console.log(9999999)},400)}toggleActive(){this.isActive=!this.isActive}};a.\u0275fac=function(i){return new(i||a)(x(j))},a.\u0275cmp=d({type:a,selectors:[["app-password-recovery"]],viewQuery:function(i,s){if(i&1&&C(z,5),i&2){let g;_(g=M())&&(s.wrapper=g.first)}},standalone:!0,features:[P],decls:49,vars:4,consts:[[1,"content"],[1,"wrapper"],[1,"bg-animate"],[1,"bg-animate2"],[1,"form-box","login"],[1,"animation",2,"--i","0","--j","21"],["action","#",3,"formGroup"],[1,"input-box","animation",2,"--i","1","--j","22"],["type","text","required","",1,"p-inputtext-sm"],[1,"bx","bxs-user"],[1,"input-box","animation",2,"--i","2","--j","23"],["type","password","required","",1,"p-inputtext-sm"],[1,"bx","bxs-lock-alt"],[1,"btn","animation",2,"--i","3","--j","24"],[1,"logreg-link","animation",2,"--i","4","--j","25"],[1,"register-link",3,"click"],[1,"info-text","login"],[1,"animation",2,"--i","1","--j","21"],["src","../../../../../assets/img/logo.png","alt","Logo","width","200ppx"],[1,"form-box","register"],[1,"animation",2,"--i","17","--j","0"],[1,"input-box","animation",2,"--i","18","--j","1"],[1,"p-float-label"],["pInputText","",1,"p-inputtext-sm"],[1,"pb-4"],[1,"bx","bxs-envelope"],[1,"btn","animation",2,"--i","18","--j","2"],[1,"logreg-link","animation",2,"--i","19"],["routerLink","/login",1,"register-link"],[1,"info-text","register"],[1,"animation",2,"--i","20","--j","4"]],template:function(i,s){i&1&&(t(0,"div",0)(1,"div",1),o(2,"span",2)(3,"span",3),t(4,"div",4)(5,"h2",5),e(6,"Login"),n(),t(7,"form",6)(8,"div",7),o(9,"input",8),t(10,"label"),e(11,"Username"),n(),o(12,"i",9),n(),t(13,"div",10),o(14,"input",11),t(15,"label"),e(16,"Password"),n(),o(17,"i",12),n(),t(18,"button",13),e(19,"Login"),n(),t(20,"div",14)(21,"p"),e(22,"Don't have an account? "),t(23,"b",15),b("click",function(){return s.toggleActive()}),e(24,"Sign Up"),n()(),e(25,"restorepassword "),n()()(),t(26,"div",16)(27,"div",17),o(28,"img",18),n()(),t(29,"div",19)(30,"h2",20),e(31,"Restore Password"),n(),t(32,"form",6)(33,"div",21)(34,"span",22),o(35,"input",23),t(36,"label",24),e(37,"Email"),n()(),o(38,"i",25),n(),t(39,"button",26),e(40,"Recuest"),n(),t(41,"div",27)(42,"p"),e(43,"Don't have an account? "),t(44,"a",28),e(45,"Login"),n()()()()(),t(46,"div",29)(47,"div",30),o(48,"img",18),n()()()()),i&2&&(c(),u("active",s.isActive),c(6),f("formGroup",s.fg),c(25),f("formGroup",s.fg))},dependencies:[S,y,v,k,h,O,E],styles:['.content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#081b29}.wrapper[_ngcontent-%COMP%]{position:relative;width:750px;height:450px;background-color:transparent;border:2px solid #ffb703;box-shadow:0 0 25px #ffb703;overflow:hidden}.wrapper[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{position:absolute;top:0;width:50%;height:100%;display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%]   .form-box.login[_ngcontent-%COMP%]{left:0;padding:0 60px 0 40px}.wrapper[_ngcontent-%COMP%]   .form-box.login[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translate(0);opacity:1;filter:blur(0);transition:.7s ease;transition-delay:calc(.1s * var(--j))}.wrapper.active[_ngcontent-%COMP%]   .form-box.login[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translate(-120%);opacity:0;filter:blur(10px);transition-delay:calc(.1s * var(--i))}.wrapper[_ngcontent-%COMP%]   .form-box.register[_ngcontent-%COMP%]{right:0;padding:0 40px 0 60px;pointer-events:none}.wrapper[_ngcontent-%COMP%]   .form-box.register[_ngcontent-%COMP%]{pointer-events:auto}.wrapper[_ngcontent-%COMP%]   .form-box.register[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translateY(120%);opacity:0;filter:blur(10px);transition:.7s;transition-delay:calc(.1s * var(--j))}.wrapper.active[_ngcontent-%COMP%]   .form-box.register[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translateY(0);opacity:1;filter:blur(0);transition-delay:calc(.1s * var(--i))}.form-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;color:#fff;text-align:center}.form-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{position:relative;width:100%;height:50px;margin:25px 0}.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border:none;outline:none;border-bottom:2px solid #fff;padding-right:23px;font-size:16px;color:#fff;font-weight:500;transition:.5s}.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-box[_ngcontent-%COMP%]   input.valid[_ngcontent-%COMP%]{border-bottom-color:#ffb703}.input-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translateY(-50%);font-size:16px;color:#fff;pointer-events:none;transition:.5s}.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], .input-box[_ngcontent-%COMP%]   input.valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{top:-5px;color:#ffb703}.input-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;transform:translateY(-50%);font-size:18px;color:#fff;transition:.5s}.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ i[_ngcontent-%COMP%], .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid ~ i[_ngcontent-%COMP%]{color:#ffb703}.btn[_ngcontent-%COMP%]{position:relative;width:100%;height:45px;background-color:transparent;border:2px solid #ffb703;outline:none;border-radius:40px;cursor:pointer;font-size:16px;color:#fff;font-weight:600;z-index:1;overflow:hidden}.btn[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-100%;left:0;width:100%;height:300%;background:linear-gradient(#081b29,#ffb703,#081b29),#ffb703;z-index:-1;transition:.5s}.btn[_ngcontent-%COMP%]:hover:before{top:0}.form-box[_ngcontent-%COMP%]   .logreg-link[_ngcontent-%COMP%]{font-size:14.5px;color:#fff;text-align:center;margin:20px 0 10px}.logreg-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffb703;text-decoration:none;font-weight:600}.logreg-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.wrapper[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{position:absolute;top:0;width:50%;height:100%;display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%]   .info-text.login[_ngcontent-%COMP%]{right:0;text-align:right;padding:0 40px 60px 150px}.wrapper[_ngcontent-%COMP%]   .info-text.login[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translate(0);opacity:1;filter:blur(0);transition:.7s ease;transition-delay:calc(.1s * var(--j))}.wrapper.active[_ngcontent-%COMP%]   .info-text.login[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translate(120%);opacity:0;filter:blur(10px);transition-delay:calc(.1s * var(--i))}.wrapper[_ngcontent-%COMP%]   .info-text.register[_ngcontent-%COMP%]{left:0;text-align:right;padding:0 150px 60px 40px;pointer-events:none}.wrapper.active[_ngcontent-%COMP%]   .info-text.register[_ngcontent-%COMP%]{pointer-events:auto}.wrapper[_ngcontent-%COMP%]   .info-text.register[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translateY(-120%);opacity:0;filter:blur(10px);transition:.7 ease;transition-delay:calc(.1s * var(--j))}.wrapper.active[_ngcontent-%COMP%]   .info-text.register[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{transform:translateY(0);opacity:1;filter:blur(0);transition-delay:calc(.1s * var(--i))}.info-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;color:#fff;line-height:1,3;text-transform:uppercase}.info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#fff}.wrapper[_ngcontent-%COMP%]   .bg-animate[_ngcontent-%COMP%]{position:absolute;top:-4px;right:0;width:850px;height:600px;background:linear-gradient(45deg,#081b29,#ffb703);border-bottom:3px solid #ffb703;transform:rotate(10deg) skewY(40deg);transform-origin:bottom right;transition:1.5s ease;transition-delay:1.6s}.wrapper.active[_ngcontent-%COMP%]   .bg-animate[_ngcontent-%COMP%]{transform:rotate(0) skewY(0);transition-delay:.5s}.wrapper[_ngcontent-%COMP%]   .bg-animate2[_ngcontent-%COMP%]{position:absolute;top:100%;left:250px;width:850px;height:700px;background:#081b29;border-bottom:3px solid #ffb703;transform:rotate(0) skewY(0);transform-origin:bottom left;transition:1.5s ease;transition-delay:.5s}.wrapper.active[_ngcontent-%COMP%]   .bg-animate2[_ngcontent-%COMP%]{transform:rotate(-11deg) skewY(-41deg);transition-delay:1.2s}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100%;background-color:var(--background-color, #081b29)}.card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}']});let p=a;return p})();export{T as default};