(this["webpackJsonprevolut-generator"]=this["webpackJsonprevolut-generator"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(15),s=n.n(c),r=(n(29),n(2)),i=n(9),l=(n(30),n(31),n(1));function m(e){return Object(l.jsx)("div",{className:"col-xs-12 col-md-10",children:Object(l.jsxs)("form",{id:"create-component",children:[Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("h3",{style:{fontSize:"36px",fontWeight:"bold"},children:"Create your button"})}),Object(l.jsxs)("div",{className:"mb-5",children:[Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("span",{className:"input-group-text",style:{fontSize:"18px",fontWeight:"500"},children:"revolut.me/"}),Object(l.jsx)("input",{type:"text",className:"form-control",defaultValue:e.formData.username,onChange:function(t){return e.setFormData(Object(r.a)(Object(r.a)({},e.formData),{},{username:t.target.value}))}})]}),Object(l.jsxs)("div",{className:"d-flex flex-column mt-2",children:[Object(l.jsx)("a",{class:"form-text text-primary text-decoration-none",target:"_blank",href:"https://www.revolut.com/",children:"What is Revolut?"}),Object(l.jsx)("a",{class:"form-text text-primary text-decoration-none",target:"_blank",href:"https://www.revolut.com/en-AT/help/making-payments/sending-money-to-another-revolut-account/username-payments/how-can-i-send-money-by-username",children:"I can\u2019t find my revolut username"})]})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("label",{className:"form-label",style:{fontSize:"12px",fontWeight:"500"},children:"Message"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Buy me a coffe",defaultValue:e.formData.message,onChange:function(t){return e.setFormData(Object(r.a)(Object(r.a)({},e.formData),{},{message:t.target.value}))}})]}),Object(l.jsx)("div",{className:"colors mb-5",children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("label",{className:"form-label",children:"Background color"}),Object(l.jsx)("span",{className:"black",onClick:function(){return e.setFormData(Object(r.a)(Object(r.a)({},e.formData),{},{color:"#000000"}))}}),Object(l.jsx)("span",{className:"blue",onClick:function(){return e.setFormData(Object(r.a)(Object(r.a)({},e.formData),{},{color:"#0d6efd"}))}})]})})]})})}n(33);function d(e,t,n){return'<button style="background:'.concat(n,';font-size:1rem;display:flex;align-items:center;font-weight:400;line-height:1.5;color:#fff;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-width:1px;border-style:solid;border-color:transparent;padding-top:.375rem;padding-bottom:.375rem;padding-right:1.5rem;padding-left:.75rem;font-size:1rem;border-radius:.25rem;"onclick="openWin()"><img style="width:32px;height:32px;margin-right:1rem;"src="https://svgur.com/i/Zry.svg"/>').concat(e,'</button><script>function openWin(){window.focus&&window.open("https://revolut.me/').concat(t,'",null,["width=500","height=600","top="+(window.screen.height-600)/2,"left="+(window.screen.width-500)/2,"directories=no","location=no","menubar=no","resizable=no","scrollbars=no","status=no","toolbar=no"].join(",")).focus()}<\/script>')}function u(e){var t="https://revolut.me/".concat(e),n=(window.screen.width-500)/2,o=(window.screen.height-600)/2;window.focus&&window.open(t,null,["width=".concat(500),"height=".concat(600),"top=".concat(o),"left=".concat(n),"directories=no","location=no","menubar=no","resizable=no","scrollbars=no","status=no","toolbar=no"].join(",")).focus()}var b=n(13);function h(e){var t=a.a.useState(d(e.message,e.username,e.color)),n=Object(i.a)(t,2),o=n[0],c=n[1];return a.a.useEffect((function(){c(d(e.message,e.username,e.color))}),[e.username,e.message,e.color]),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:{fontSize:"12px",fontWeight:"500"},children:"Preview"}),Object(l.jsxs)("button",{className:"btn-preview-style",onClick:function(){return u(e.username)},style:{background:e.color},children:[Object(l.jsx)("img",{alt:"Revolut Logo",width:"32",height:"32",style:{marginRight:"1rem"},src:"https://svgur.com/i/Zry.svg"}),e.message]}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("p",{className:"mb-1",style:{fontSize:"14px",fontWeight:"500"},children:"Paste anywhere on the internet"}),Object(l.jsx)("div",{className:"col-md-12 preview-code",children:Object(l.jsx)(b.a,{showLineNumbers:e.showLineNumbers,startingLineNumber:e.startingLineNumber,text:o,language:"html",theme:b.b,wrapLines:!0})})]})]})}var j=function(){var e=a.a.useState({username:"andreijluca",color:"black",message:"Buy me a coffe"}),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(l.jsx)("div",{className:"main",children:Object(l.jsx)("div",{className:"container py-5 my-5 content-area",children:Object(l.jsxs)("div",{className:"row gx-5",children:[Object(l.jsx)("div",{className:"col-md-0 col-lg-1"}),Object(l.jsxs)("div",{className:"order-2 order-lg-1 col-md-12 col-lg-4 col-first-mob pe-5",children:[Object(l.jsxs)("div",{className:"has-radius p-5 box mb-3",style:{backgroundImage:"url(".concat("/revolut-popup-element.png",")")},children:[Object(l.jsx)("p",{className:"text-white",style:{fontSize:"14px",fontWeight:"bold"},children:"Start taking tips directly in your Revolut account. Generate a simple button that you can place anywhere on the web."}),Object(l.jsx)("a",{className:"text-white",href:"https://revolut.com/referral/andreiban!jul1ar",children:"Join Revolut"})]}),Object(l.jsxs)("div",{className:"bg-white p-5 has-radius mt-5",children:[Object(l.jsxs)("p",{style:{fontSize:"14px",fontWeight:"500"},children:["Follow me ",Object(l.jsx)("a",{className:"text-decoration-none",href:"https://twitter.com/andreijluca",children:"@andreijluca"})]}),Object(l.jsx)("h4",{style:{fontSize:"24px",fontWeight:"bold"},children:"Enjoy the generator? A thank you is always appreciated!"}),Object(l.jsxs)("button",{className:"mt-4 btn-preview-style",style:{backgroundColor:"black"},onClick:function(){return u("andreijluca")},children:[Object(l.jsx)("img",{style:{marginRight:"1rem"},width:"40",height:"40",src:"/revolut.svg",alt:"Revolut Logo"}),"Say Thank You!"]})]})]}),Object(l.jsxs)("div",{className:"order-1 order-lg-2 col-md-12 col-lg-6 preview-content px-5",children:[Object(l.jsx)(m,{setFormData:o,formData:n}),Object(l.jsx)(h,Object(r.a)({},n))]})]})})})},g=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,228)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),g()}},[[41,152,154]]]);
//# sourceMappingURL=main.f202320f.chunk.js.map