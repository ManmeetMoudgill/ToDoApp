(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(5),i=n.n(o),s=(n(21),n(15)),a=n(8),l=(n(22),n(23),n(12)),d=n.n(l),r=n(1);var u=function(e){return Object(r.jsxs)("div",{className:"ToDoListDelete",children:[Object(r.jsx)("button",{onClick:function(){e.Selected(e.id)},className:"deleteButton",children:Object(r.jsx)(d.a,{})}),Object(r.jsx)("li",{className:"list-Item",children:e.text})]})},j=n(14),b=n.n(j);var f=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),l=Object(a.a)(i,2),d=l[0],j=l[1],f=function(){""!==n?j((function(e){return[].concat(Object(s.a)(e),[n])})):alert("You can not leave the field blank"),o("")},h=function(e){console.log(e);var t=window.prompt("Do you really wanna delete the ToDo please enter Y for yess , N for no");"y"==t||"Y"==t?(j((function(){return d.filter((function(t,n){return e!==n}))})),o("")):alert("You have decied to not delete the ToDo")};return Object(r.jsx)("div",{className:"main-div",children:Object(r.jsxs)("div",{className:"main-inside-div",children:[Object(r.jsx)("h1",{children:"ToDo-List"}),Object(r.jsxs)("div",{className:"input-div",children:[Object(r.jsx)("input",{type:"text",id:"input",onKeyUp:function(e){13===e.keyCode&&f()},onClick:function(){document.getElementById("input").style.outline="none"},value:n,onChange:function(e){o(e.target.value)},placeholder:"Add a Item"}),Object(r.jsx)("button",{className:"btn",onClick:f,children:Object(r.jsx)(b.a,{})})]}),Object(r.jsx)("div",{className:"Node-Taken",children:Object(r.jsx)("ol",{children:d.map((function(e,t){return Object(r.jsx)(u,{text:e,Selected:h,id:t,indexNumber:t},t)}))})})]})})};i.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.17eb21a8.chunk.js.map