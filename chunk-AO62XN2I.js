import{a as A,b as B,c as g,d as x}from"./chunk-WPENU6T7.js";import{a as H,b as V,c as W,d as z,e as Y,f as $,g as G,h as J,i as K,j as Q,k as X}from"./chunk-JXUD7O3P.js";import{p as R,q as U}from"./chunk-RCOL7DCZ.js";import"./chunk-NJC4F6AZ.js";import{b as l,f as a,j as _,k as O,l as F}from"./chunk-IOBLEBZS.js";import{a as k}from"./chunk-IZ5ZRGIP.js";import{Ia as S,O as b,Qa as p,T as f,Wa as e,Xa as t,Ya as o,Z as C,bb as T,bc as D,d as v,hc as h,ic as L,kb as i,ob as N,pb as I,qb as P,rb as q,sb as j,xa as u,ya as c}from"./chunk-E2JUHIDH.js";var w=(()=>{let n=class n{constructor(r){this.http=r,this.url=`${g.URL_API}`,this.getAll=()=>this.http.get(`${this.url}cargo`)}};n.\u0275fac=function(s){return new(s||n)(f(h))},n.\u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"});let d=n;return d})();var E=(()=>{let n=class n{constructor(r){this.http=r,this.url=`${g.URL_API}`,this.getAll=()=>this.http.get(`${this.url}tipodoc`)}};n.\u0275fac=function(s){return new(s||n)(f(h))},n.\u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"});let d=n;return d})();var je=(()=>{let n=class n{constructor(r,s,m,y){this.fb=r,this.cargoService=s,this.tipoempleadoService=m,this.tipodocService=y,this.visible=!1,this.dataDtoEmployes={},this.sexo=[{name:"Varon",value:!0},{name:"Mujer",value:0}],this.stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}],this.value="off",this.itemsCargo=S([]),this.itemsTipoempleado=S([]),this.itemsTipodoc=S([]),this.itemsExtdocs=[{name:"Lp",value:"La Paz"},{name:"Pt",value:"Potosi"},{name:"Tj",value:"Tarija"},{name:"St",value:"Santa Cruz"}],this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.fg=this.fb.group({username:new a("",{validators:[l.required],nonNullable:!0}),password:new a("",{validators:[l.required],nonNullable:!0}),rol:new a(0,{validators:[l.required],nonNullable:!0}),doc:new a("",{validators:[l.required],nonNullable:!0}),tipodoc:new a(0,{validators:[l.required],nonNullable:!0}),nombre:new a("",{validators:[l.required],nonNullable:!0}),app:new a("",{validators:[l.required],nonNullable:!0}),apm:new a("",{validators:[l.required],nonNullable:!0}),fnaci:new a("",{validators:[l.required],nonNullable:!0}),sexo:new a(!0,{validators:[l.required],nonNullable:!0}),estadociv:new a("",{validators:[l.required],nonNullable:!0}),dir:new a("",{validators:[l.required],nonNullable:!0}),telcel:new a("",{validators:[l.required],nonNullable:!0}),email:new a("",{validators:[l.required],nonNullable:!0}),idtipo:new a(0,{validators:[l.required],nonNullable:!0}),idcargo:new a(0,{validators:[l.required],nonNullable:!0}),fing:new a("",{validators:[l.required],nonNullable:!0}),salario:new a(0,{validators:[l.required],nonNullable:!0})}),this.loadCargo(),this.loadTipoEmpleado(),this.loadTipoDoc()}loadCargo(){return v(this,null,function*(){yield this.cargoService.getAll().subscribe({next:r=>this.itemsCargo.set(r),error:r=>{console.log(r)}})})}loadTipoEmpleado(){return v(this,null,function*(){yield this.tipoempleadoService.getAll().subscribe({next:r=>this.itemsTipoempleado.set(r),error:r=>{console.log(r)}})})}loadTipoDoc(){return v(this,null,function*(){yield this.tipodocService.getAll().subscribe({next:r=>this.itemsTipodoc.set(r),error:r=>console.log(r)})})}toggleSidebar(){this.visible=!this.visible}};n.\u0275fac=function(s){return new(s||n)(c(_),c(w),c(x),c(E))},n.\u0275cmp=C({type:n,selectors:[["app-employes"]],standalone:!0,features:[q([w,x,E]),j],decls:135,vars:9,consts:[[3,"visibleChange","visible","blockScroll","dismissible"],[1,"sidebar-header"],["pButton","","type","button","icon","pi pi-arrow-left",1,"p-button-text",3,"click"],[1,"sidebar-content"],[1,"menu"],["routerLink","/home"],["routerLink","/about"],["routerLink","/services"],[1,"grid","p-fluid"],[1,"col-12","md:col-6"],[1,"card"],[1,"grid","formgrid","pb-4"],[1,"col-12","mb-2","lg:col-4","lg:mb-0"],[1,"p-float-label"],["pInputText","",1,"p-inputtext-sm"],["for","username"],["pInputText","","type","password",1,"p-inputtext-sm"],["for","password"],["optionLabel","descrip",3,"options"],["for","idcargo"],[1,"grid","formgrid","pb-0"],["placeholder","Select type Document","optionLabel","abreviatura",1,"p-inputtext-sm",3,"options"],["for","idtipo"],["for","doc"],["placeholder","Select type Document","optionLabel","name",1,"p-inputtext-sm",3,"options"],["for","float-label"],["id","float-input","type","text","pInputText",""],["for","nombre"],["for","app"],["for","apm"],[1,"grid","formgrid"],["inputId","birth_date"],["for","fnaci"],[1,"flex","align-items-center"],["id","sexo","name","sexo","label","sss","value","Varon"],["for","masculino",1,"ml-2"],["id","sexo","name","sexo","value","Mujer"],["for","femenino",1,"ml-2"],[1,"p-input-icon-left"],[1,"pi","pi-user"],["type","text","pInputText","","placeholder","Username"],[1,"p-input-icon-right"],["type","text","pInputText","","placeholder","Search"],[1,"pi","pi-search"],[1,"p-input-icon-left","p-input-icon-right"],["for","float-input"]],template:function(s,m){s&1&&(e(0,"p-sidebar",0),P("visibleChange",function(M){return I(m.visible,M)||(m.visible=M),M}),e(1,"div",1)(2,"button",2),T("click",function(){return m.toggleSidebar()}),t()(),e(3,"div",3)(4,"ul",4)(5,"li")(6,"a",5),i(7,"Home"),t()(),e(8,"li")(9,"a",6),i(10,"About"),t()(),e(11,"li")(12,"a",7),i(13,"Services"),t()()()()(),e(14,"div",8)(15,"div",9)(16,"div",10)(17,"h5"),i(18,"Datos de acceso"),t(),e(19,"div",11)(20,"div",12)(21,"span",13),o(22,"input",14),e(23,"label",15),i(24,"Username"),t()()(),e(25,"div",12)(26,"span",13),o(27,"input",16),e(28,"label",17),i(29,"Password"),t()()(),e(30,"div",12)(31,"span",13),o(32,"p-multiSelect",18),e(33,"label",19),i(34,"Select Rol"),t()()()(),e(35,"div",20)(36,"div",12)(37,"span",13),o(38,"p-dropdown",21),e(39,"label",22),i(40,"Select Tipo doc"),t()()(),e(41,"div",12)(42,"span",13),o(43,"input",14),e(44,"label",23),i(45,"Documento"),t()()(),e(46,"div",12)(47,"span",13),o(48,"p-dropdown",24),e(49,"label",25),i(50,"Select a expedition"),t()()()(),e(51,"h5"),i(52,"Float Label"),t(),e(53,"span",13),o(54,"input",26),e(55,"label",15),i(56,"Username"),t()()()(),e(57,"div",9)(58,"div",10)(59,"h5"),i(60,"Datos Personales"),t(),e(61,"div",11)(62,"div",12)(63,"span",13),o(64,"p-dropdown",21),e(65,"label",22),i(66,"Select Tipo doc"),t()()(),e(67,"div",12)(68,"span",13),o(69,"input",14),e(70,"label",27),i(71,"No Documento"),t()()(),e(72,"div",12)(73,"span",13),o(74,"p-dropdown",24),e(75,"label",22),i(76,"Select Extension"),t()()()(),e(77,"div",11)(78,"div",12)(79,"span",13),o(80,"input",14),e(81,"label",27),i(82,"Nombres"),t()()(),e(83,"div",12)(84,"span",13),o(85,"input",14),e(86,"label",28),i(87,"Apellido Paterno"),t()()(),e(88,"div",12)(89,"span",13),o(90,"input",14),e(91,"label",29),i(92,"Apellido Materno"),t()()()(),e(93,"div",30)(94,"div",12)(95,"span",13),o(96,"p-calendar",31),e(97,"label",32),i(98,"Fecha Naciminto"),t()()(),e(99,"div",12)(100,"div",33),o(101,"p-radioButton",34),e(102,"label",35),i(103,"Varon"),t()(),e(104,"div",33),o(105,"p-radioButton",36),e(106,"label",37),i(107,"Mujer"),t()()(),e(108,"div",12)(109,"span",13),o(110,"p-dropdown",24),e(111,"label",25),i(112,"Select a Estado "),t()()()(),e(113,"h5"),i(114,"Icons"),t(),e(115,"div",30)(116,"div",12)(117,"span",38),o(118,"i",39)(119,"input",40),t()(),e(120,"div",12)(121,"span",41),o(122,"input",42)(123,"i",43),t()(),e(124,"div",12)(125,"span",44),o(126,"i",39)(127,"input",42)(128,"i",43),t()()(),e(129,"h5"),i(130,"Float Label"),t(),e(131,"span",13),o(132,"input",26),e(133,"label",45),i(134,"Username"),t()()()()()),s&2&&(N("visible",m.visible),p("blockScroll",!0)("dismissible",!1),u(32),p("options",m.itemsTipoempleado()),u(6),p("options",m.itemsTipodoc()),u(10),p("options",m.cities),u(16),p("options",m.itemsTipodoc()),u(10),p("options",m.itemsExtdocs),u(36),p("options",m.cities))},dependencies:[D,F,O,X,Q,k,z,W,B,A,U,R,G,$,Y,J,K,V,H,L],styles:[".sidebar-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:.5rem}.sidebar-content[_ngcontent-%COMP%]{padding:1rem}.menu[_ngcontent-%COMP%]{list-style:none;padding:0}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:1rem}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#333}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#007bff;text-decoration:underline}"]});let d=n;return d})();export{je as default};