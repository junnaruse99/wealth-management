(this["webpackJsonpwealth-management"]=this["webpackJsonpwealth-management"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),r=n(7),i=n.n(r),j=(n(15),n(16),n(2)),l=function(e){var t=e.message;return Object(s.jsx)("p",{className:"alert alert-danger error",children:t})},b=function(e){var t=e.saveBudget,n=e.saveRemaining,a=e.updateQuestion,r=Object(c.useState)(0),i=Object(j.a)(r,2),b=i[0],u=i[1],d=Object(c.useState)(!1),o=Object(j.a)(d,2),m=o[0],O=o[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Insert budget"}),m?Object(s.jsx)(l,{message:"The number is incorrect"}):null,Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b<1||isNaN(b)?O(!0):(O(!1),t(b),n(b),a(!1))},children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"number",className:"form-control",placeholder:"Insert your budget",onChange:function(e){return u(parseInt(e.target.value))}})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})]})},u=n(9),d=n(8),o=n.n(d),m=function(e){var t=e.expenses,n=e.updateExpenses,a=Object(c.useState)(""),r=Object(j.a)(a,2),i=r[0],b=r[1],d=Object(c.useState)(0),m=Object(j.a)(d,2),O=m[0],x=m[1],h=Object(c.useState)(!1),p=Object(j.a)(h,2),g=p[0],v=p[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Add here your expenses"}),g?Object(s.jsx)(l,{message:"Both fields are mandatory and Expense Amount must be positive"}):null,Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim()||O<1||isNaN(O))v(!0);else{v(!1);var s={name:i,quantity:O,id:o.a.generate()};n([].concat(Object(u.a)(t),[s])),b(""),x(0)}},children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"camp",children:[Object(s.jsx)("label",{children:"Expense name"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Ex. Transportation",value:i,onChange:function(e){return b(e.target.value)}})]})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"camp",children:[Object(s.jsx)("label",{children:"Expense Amount"}),Object(s.jsx)("input",{type:"number",className:"form-control",placeholder:"Ex. 300",value:O,onChange:function(e){return x(parseInt(e.target.value))}})]})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})]})},O=function(e){var t=e.expenses;return Object(s.jsxs)("div",{className:"expenses",children:[Object(s.jsx)("h2",{children:"List"}),t.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[e.name,Object(s.jsxs)("span",{className:"expense",children:["$ ",e.quantity]})]})},e.id)}))]})},x=function(e,t){var n="alert ";return n+=.25*e>t?"alert-danger":.5*e>t?"alert-warning":"alert-success"},h=function(e){var t=e.budget,n=e.remaining;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"alert alert-primary",children:["Budget: $ ",t]}),Object(s.jsxs)("div",{className:x(t,n),children:["Remaining: $ ",n]})]})};var p=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(j.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)(!0),o=Object(j.a)(d,2),x=o[0],p=o[1],g=Object(c.useState)([]),v=Object(j.a)(g,2),f=v[0],N=v[1];return Object(c.useEffect)((function(){0!=f.length&&u(l-f[f.length-1].quantity)}),[f]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Weekly expenses"})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"principal-content content",children:x?Object(s.jsx)(b,{saveBudget:a,saveRemaining:u,updateQuestion:p}):Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 col-md-6",children:Object(s.jsx)(m,{expenses:f,updateExpenses:N})}),Object(s.jsxs)("div",{className:"col-12 col-md-6",children:[Object(s.jsx)(O,{expenses:f}),Object(s.jsx)(h,{budget:n,remaining:l})]})]})})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.269c909e.chunk.js.map