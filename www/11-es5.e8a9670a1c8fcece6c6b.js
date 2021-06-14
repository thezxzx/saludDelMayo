!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jaOa:function(o,n,t){"use strict";t.r(n),t.d(n,"RegisterPageModule",function(){return E});var i=t("ofXK"),a=t("3Pt+"),l=t("TEn/"),s=t("tyNb"),m=t("mrSG"),c=t("fXoL"),b=t("N/25"),u=t("PZxA");function d(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.nameErrorMsg)}}function f(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.lastNameErrorMsg)}}function g(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.emailErrorMsg)}}function p(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.phoneErrorMsg)}}function v(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.passwordErrorMsg)}}function h(e,r){if(1&e&&(c.Ob(0,"ion-item",16),c.Ob(1,"ion-label"),c.mc(2),c.Nb(),c.Nb()),2&e){var o=c.Yb();c.Bb(2),c.nc(o.confirmPasswordErrorMsg)}}var N,O,w,y=[{path:"",component:(N=function(){function o(r,n,t,i,l,s){e(this,o),this.formBuilder=r,this.menu=n,this.alertCtrl=t,this.router=i,this.authService=l,this.validatorService=s,this.namePattern="[a-zA-Z ]{3,50}",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.form=this.formBuilder.group({name:["",[a.l.required,a.l.minLength(3),a.l.pattern(this.namePattern)]],lastName:["",[a.l.required,a.l.minLength(3),a.l.pattern(this.namePattern)]],email:["",[a.l.required,a.l.pattern(this.emailPattern)]],phone:["",[a.l.required,a.l.minLength(8)]],password:["",[a.l.required,a.l.minLength(6),a.l.maxLength(20)]],password2:[""]},{validators:[this.validatorService.camposIguales("password","password2")]}),this.menu.enable(!1,"first")}var n,t,i;return n=o,(t=[{key:"nameErrorMsg",get:function(){var e,r=null===(e=this.form.get("name"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"El nombre es obligatorio.":(null==r?void 0:r.minlength)?"El nombre debe contener m\xednimo 3 caracteres.":(null==r?void 0:r.pattern)?"El nombre no es v\xe1lido.":""}},{key:"lastNameErrorMsg",get:function(){var e,r=null===(e=this.form.get("lastName"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"El apellido es obligatorio.":(null==r?void 0:r.minlength)?"El apellido debe contener m\xednimo 3 caracteres.":(null==r?void 0:r.pattern)?"El apellido no es v\xe1lido":""}},{key:"emailErrorMsg",get:function(){var e,r=null===(e=this.form.get("email"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"El correo es obligatorio.":(null==r?void 0:r.pattern)?"El formato del correo no es v\xe1lido.":""}},{key:"phoneErrorMsg",get:function(){var e,r=null===(e=this.form.get("phone"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"El tel\xe9fono es obligatorio":(null==r?void 0:r.minlength)?"El tel\xe9fono debe contener m\xednimio 8 caracteres.":""}},{key:"passwordErrorMsg",get:function(){var e,r=null===(e=this.form.get("password"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"La contrase\xf1a es obligatoria.":(null==r?void 0:r.minlength)?"La contrase\xf1a debe contener m\xednimo 6 caracteres.":(null==r?void 0:r.maxlength)?"La contrase\xf1a debe contener m\xe1ximo 20 caracteres.":""}},{key:"confirmPasswordErrorMsg",get:function(){var e,r=null===(e=this.form.get("password2"))||void 0===e?void 0:e.errors;return!1!==(null==r?void 0:r.noIguales)?"Las contrase\xf1as no son iguales.":(console.log(r),"")}},{key:"ngOnInit",value:function(){}},{key:"onRegister",value:function(){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r,o,n,t,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.form.value,o=r.email,n=r.password,delete(t=this.form.value).password,delete t.password2,e.prev=2,this.form.valid){e.next=5;break}return e.abrupt("return",void this.form.markAllAsTouched());case 5:return e.next=7,this.authService.registerWithEmailPassword(o,n,t);case 7:if(!(i=e.sent)){e.next=13;break}return a={name:this.form.get("name").value,lastName:this.form.get("lastName").value,email:this.form.get("email").value,emailVerified:i.emailVerified,phone:this.form.get("phone").value,role:"Empleado",uid:i.uid},this.authService.addUser(a),e.next=13,this.verifyEmailAlert();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("\ud83d\ude80 ~ file: register.page.ts ~ line 40 ~ RegisterPage ~ onRegister ~ err",e.t0);case 18:case"end":return e.stop()}},e,this,[[2,15]])}))}},{key:"campoNoValido",value:function(e){var r,o;return(null===(r=this.form.get(e))||void 0===r?void 0:r.invalid)&&(null===(o=this.form.get(e))||void 0===o?void 0:o.touched)}},{key:"verifyEmailAlert",value:function(){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:"Registrado correctamente",message:"Verifique su correo",buttons:[{text:"OK",handler:function(){o.form.reset(),o.router.navigate(["/login"])}}]});case 2:return r=e.sent,e.next=5,r.present();case 5:return e.next=7,r.onDidDismiss();case 7:this.form.reset(),this.router.navigate(["/login"]);case 9:case"end":return e.stop()}},e,this)}))}}])&&r(n.prototype,t),i&&r(n,i),o}(),N.\u0275fac=function(e){return new(e||N)(c.Lb(a.a),c.Lb(l.D),c.Lb(l.a),c.Lb(s.g),c.Lb(b.a),c.Lb(u.a))},N.\u0275cmp=c.Fb({type:N,selectors:[["app-register"]],decls:44,vars:7,consts:[[1,"ion-no-border"],[1,"ion-text-center"],[1,"main"],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","name"],["class","error",4,"ngIf"],["type","text","formControlName","lastName"],["type","email","formControlName","email"],["type","tel","formControlName","phone"],["type","password","formControlName","password"],["type","password","formControlName","password2"],[1,"no-border"],["routerLink","/login"],[1,"form-button","ion-margin-top"],["expand","block","type","submit"],[1,"error"]],template:function(e,r){1&e&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar"),c.Ob(2,"ion-title",1),c.mc(3,"Registrar usuario"),c.Nb(),c.Nb(),c.Nb(),c.Ob(4,"ion-content"),c.Ob(5,"div",2),c.Ob(6,"form",3),c.Wb("ngSubmit",function(){return r.onRegister()}),c.Ob(7,"ion-item"),c.Ob(8,"ion-label",4),c.mc(9,"Nombre"),c.Nb(),c.Mb(10,"ion-input",5),c.Nb(),c.kc(11,d,3,1,"ion-item",6),c.Ob(12,"ion-item"),c.Ob(13,"ion-label",4),c.mc(14,"Apellido(s)"),c.Nb(),c.Mb(15,"ion-input",7),c.Nb(),c.kc(16,f,3,1,"ion-item",6),c.Ob(17,"ion-item"),c.Ob(18,"ion-label",4),c.mc(19,"Correo electr\xf3nico"),c.Nb(),c.Mb(20,"ion-input",8),c.Nb(),c.kc(21,g,3,1,"ion-item",6),c.Ob(22,"ion-item"),c.Ob(23,"ion-label",4),c.mc(24,"Tel\xe9fono"),c.Nb(),c.Mb(25,"ion-input",9),c.Nb(),c.kc(26,p,3,1,"ion-item",6),c.Ob(27,"ion-item"),c.Ob(28,"ion-label",4),c.mc(29,"Contrase\xf1a"),c.Nb(),c.Mb(30,"ion-input",10),c.Nb(),c.kc(31,v,3,1,"ion-item",6),c.Ob(32,"ion-item"),c.Ob(33,"ion-label",4),c.mc(34,"Confirmar contrase\xf1a"),c.Nb(),c.Mb(35,"ion-input",11),c.Nb(),c.kc(36,h,3,1,"ion-item",6),c.Ob(37,"div"),c.Ob(38,"ion-item",12),c.Ob(39,"a",13),c.mc(40,"\xbfYa tienes una cuenta, haz clic aqui?"),c.Nb(),c.Nb(),c.Nb(),c.Ob(41,"div",14),c.Ob(42,"ion-button",15),c.mc(43," Registrarse "),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.Bb(6),c.ec("formGroup",r.form),c.Bb(5),c.ec("ngIf",r.campoNoValido("name")),c.Bb(5),c.ec("ngIf",r.campoNoValido("lastName")),c.Bb(5),c.ec("ngIf",r.campoNoValido("email")),c.Bb(5),c.ec("ngIf",r.campoNoValido("phone")),c.Bb(5),c.ec("ngIf",r.campoNoValido("password")),c.Bb(5),c.ec("ngIf",r.campoNoValido("password2")))},directives:[l.j,l.A,l.y,l.g,a.m,a.h,a.c,l.m,l.o,l.l,l.I,a.g,a.b,i.j,s.i,l.G,l.d],styles:[".main[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}form[_ngcontent-%COMP%]{margin:0 auto;width:50%}.no-border[_ngcontent-%COMP%]{--border-style:none;--color:#3880ff}.no-border[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.error[_ngcontent-%COMP%]{--border-style:none;color:red}"]}),N)}],k=((w=function r(){e(this,r)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=c.Jb({type:w}),w.\u0275inj=c.Ib({imports:[[s.j.forChild(y)],s.j]}),w),E=((O=function r(){e(this,r)}).\u0275fac=function(e){return new(e||O)},O.\u0275mod=c.Jb({type:O}),O.\u0275inj=c.Ib({imports:[[i.c,a.k,l.B,k]]}),O)}}])}();