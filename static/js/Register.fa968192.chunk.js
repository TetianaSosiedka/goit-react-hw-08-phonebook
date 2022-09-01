"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[494],{6731:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t,r=a(885),s=a(6151),i=a(168),o=a(7939).ZP.form(t||(t=(0,i.Z)(["\n  width: 400px;\n  border: solid 2px #000000;\n  padding: 15px;\n  label {\n    display: block;\n    margin-bottom: 15px;\n  }\n  span {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: 700;\n  }\n  input {\n    padding: 5px;\n  }\n"]))),l=a(4708),d=a(5984),u=a(8748),p=a(5562),c=a.n(p),m=a(9747),h=a(184),f=function(){var e=(0,l.Z)(""),n=e.name,a=e.email,t=e.password,i=e.setState,p=(0,m.l4)(),f=(0,r.Z)(p,2),x=f[0],b=f[1],g=b.isLoading,w=b.isError,j=(0,d.x0)(),v=(0,d.x0)(),k=(0,d.x0)(),Z=function(e){i(e.target.name,e.target.value)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Complete the fields:"}),(0,h.jsxs)(o,{onSubmit:function(e){e.preventDefault(),x({name:n,email:a,password:t}),i("")},children:[(0,h.jsxs)("label",{htmlFor:j,children:[(0,h.jsx)("span",{children:"Name"}),(0,h.jsx)("input",{id:j,onChange:Z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n})]}),(0,h.jsxs)("label",{htmlFor:v,children:[(0,h.jsx)("span",{children:"Email"}),(0,h.jsx)("input",{id:v,onChange:Z,type:"email",name:"email",pattern:"\\[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:"Email must have @ and can contain numbers, letters, dots, underscores and dashes.",required:!0,value:a})]}),(0,h.jsxs)("label",{htmlFor:k,children:[(0,h.jsx)("span",{children:"Password"}),(0,h.jsx)("input",{id:k,onChange:Z,type:"password",name:"password",required:!0,value:t})]}),(0,h.jsxs)(s.Z,{variant:"contained",size:"small",type:"submit",children:["register",g&&(0,h.jsx)(u._P,{height:"30px",width:"30px",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading"})]})]}),w&&c().Report.failure("Error","An error registration. Try again.","Ok",(function(){}))]})}},4708:function(e,n,a){var t=a(885),r=a(2791);n.Z=function(){var e=(0,r.useState)(""),n=(0,t.Z)(e,2),a=n[0],s=n[1],i=(0,r.useState)(""),o=(0,t.Z)(i,2),l=o[0],d=o[1],u=(0,r.useState)(""),p=(0,t.Z)(u,2),c=p[0],m=p[1],h=(0,r.useState)(""),f=(0,t.Z)(h,2),x=f[0],b=f[1];return{name:a,number:l,email:c,password:x,setState:function(e,n){switch(e){case"name":s(n);break;case"number":d(n);break;case"email":m(n);break;case"password":b(n);break;default:s(""),d(""),m("")}}}}},5984:function(e,n,a){a.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=Register.fa968192.chunk.js.map