(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={logo:"MainNavigation_logo__1TgMx",header:"MainNavigation_header__2lqQ1",active:"MainNavigation_active__ydtOF",badge:"MainNavigation_badge__VkidO"}},,,function(e,t,n){e.exports={main:"Layout_main__1dFZc"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(14),r=n.n(s),l=(n(21),n(2)),i=n(3),o=(n(22),n(0)),u=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},j=(n(24),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter: mesec"}),Object(o.jsxs)("select",{value:e.monthValue,onChange:function(t){e.selectedMonth(t.target.value)},children:[Object(o.jsx)("option",{value:"Januar",children:"Januar"}),Object(o.jsx)("option",{value:"Februar",children:"Februar"}),Object(o.jsx)("option",{value:"Marec",children:"Marec"}),Object(o.jsx)("option",{value:"April",children:"April"}),Object(o.jsx)("option",{value:"Maj",children:"Maj"}),Object(o.jsx)("option",{value:"Junij",children:"Junij"}),Object(o.jsx)("option",{value:"Julij",children:"Julij"}),Object(o.jsx)("option",{value:"Avgust",children:"Avgust"}),Object(o.jsx)("option",{value:"September",children:"September"}),Object(o.jsx)("option",{value:"Oktober",children:"Oktober"}),Object(o.jsx)("option",{value:"November",children:"November"}),Object(o.jsx)("option",{value:"December",children:"December"})]}),Object(o.jsx)("label",{children:"Filter: leto"}),Object(o.jsxs)("select",{value:e.value,onChange:function(t){e.selectedYear(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),b=(n(25),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:n})]})}),d=(n(26),function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(u,{className:"expense-item",children:[Object(o.jsx)(b,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["\u20ac",e.amount]})]})]})})}),O=(n(27),function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=Object(a.createContext)({expenses:[],filteredExpenses:function(e){},addData:function(e){},dodajExpenses:function(e){},addElementsArray:function(e){},elementsArray:[],"pla\u010da":[],"dodajpla\u010do":function(e){},months:[]});function x(e){var t=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),j=u[0],b=u[1],d=Object(a.useState)([]),O=Object(i.a)(d,2),x=O[0],v=O[1],f=Object(a.useCallback)((function(e){r(e)}),[]),p=Object(a.useCallback)((function(e){r((function(t){return console.log(e),t.concat(e)}))}),[]),m=Object(a.useCallback)((function(e){b(e)}),[]),g=Object(a.useCallback)((function(e){v(e),console.log(e)}),[]),S={expenses:s,filteredExpenses:function(e,n){return s.filter((function(e){return e.date.getFullYear().toString()===n})).filter((function(n){return t[n.date.getMonth()]===e}))},addData:p,addElementsArray:g,elementsArray:x,"pla\u010da":j,"dodajpla\u010do":m,months:t,dodajExpenses:f};return Object(o.jsx)(h.Provider,{value:S,children:e.children})}var v=h,f=(n(28),function(e){var t=Object(a.useContext)(v),n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)("2022"),b=Object(i.a)(l,2),d=b[0],h=b[1],x=Object(a.useState)("Januar"),f=Object(i.a)(x,2),p=f[0],m=f[1];return Object(o.jsx)("section",{children:Object(o.jsxs)(u,{className:"expenses",children:[!s&&Object(o.jsx)("button",{onClick:function(){r(!0)},children:"Stro\u0161ki"}),s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){r(!1)},children:"Stro\u0161ki"}),Object(o.jsx)(j,{selectedYear:function(e){h(e)},value:d,selectedMonth:function(e){m(e)},monthValue:p}),Object(o.jsx)(O,{items:t.filteredExpenses(p,d)})]})]})})}),p=n(10),m=n(13),g=n(5),S=n.n(g),N=(n(30),function(e){var t=Object(a.useState)("Elektrika"),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(0),l=Object(i.a)(r,2),u=l[0],j=l[1],b=new Date,d=b.getFullYear()+"-"+b.getMonth(),O=Object(a.useState)(d),h=Object(i.a)(O,2),x=h[0],f=h[1],p=Object(a.useContext)(v);return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),s(""),j(""),f("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Stro\u0161ek"}),Object(o.jsx)("select",{value:c,onChange:function(e){s(e.target.value)},children:p.elementsArray.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.value},e.id)}))})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Znesek"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Datum"}),Object(o.jsx)("input",{type:"month",min:"2019-01",max:"2022-12",value:x,onChange:function(e){f(e.target.value),console.log(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Prekli\u010di"}),Object(o.jsx)("button",{type:"submit",children:"Dodaj stro\u0161ek"})]})]})}),k=(n(31),function(e){var t=Object(a.useContext)(v),n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],l=s[1],u=t.dodajExpenses,j=Object(a.useCallback)((function(e){console.log("save expense data handler izvedel se je");var t=Object(m.a)(Object(m.a)({},e),{},{id:Math.random().toString()});fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/stroski.json",{method:"POST",body:JSON.stringify({id:t.id,amount:t.amount,date:t.date,title:t.title})}),l(!1)}),[]);Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(S.a.mark((function e(){var t,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/stroski.json");case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,t.ok){e.next=9;break}throw new Error("Niste dodali nobenega stro\u0161ka");case 9:for(c in a=[],console.log("USEEFFECT SE JE IZVEDEL NEW EXPENSES"),n)console.log(new Date(n[c].date)),a.push({id:c,amount:n[c].amount,title:n[c].title,date:new Date(n[c].date)});u(a),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(0),new Error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[u,r]);return Object(o.jsxs)("section",{className:"new-expense",children:[!r&&Object(o.jsx)("button",{onClick:function(){l(!0)},children:"Dodaj nov stro\u0161ek"}),r&&Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("h1",{children:"Dodaj novi stro\u0161ek"}),Object(o.jsx)(N,{onSaveExpenseData:j,onCancel:function(){l(!1)}})]})]})}),E=n(7),w=(n(32),n(16)),y=(n(33),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),C=(n(34),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(w.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(y,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),J=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(E.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(o.jsx)(C,{dataPoints:n})},A=function(e){var t=Object(a.useContext)(v),n=Object(a.useState)("2022"),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)("Januar"),b=Object(i.a)(l,2),O=b[0],h=b[1],x=Object(a.useState)(0),f=Object(i.a)(x,2),m=f[0],g=f[1],N=Object(a.useState)(0),k=Object(i.a)(N,2),w=k[0],y=k[1],C=Object(a.useState)(0),A=Object(i.a)(C,2),X=A[0],P=A[1],R=t.dodajpla\u010do,D=t.addElementsArray;var V=Object(a.useCallback)((function(e,n){var a=t.expenses.filter((function(e){return e.date.getFullYear().toString()===n})).filter((function(n){return t.months[n.date.getMonth()]===e}));if(a.length>0){var c=a.map((function(e){return e.amount})).reduce((function(e,t){return 1*e+1*t}));P(c)}else P(0)}),[t]),M=Object(a.useCallback)((function(){var e,n=-1,a=Object(E.a)(t.months);try{for(a.s();!(e=a.n()).done;){var c=e.value;n+=1,c===O&&g(n)}}catch(l){a.e(l)}finally{a.f()}var r=t.pla\u010da.filter((function(e){return e.month===O&&e.year===s}));r.length>0?y(r[0].value):y(0)}),[t,O,s]);return Object(a.useEffect)((function(){M(),V(O,s)}),[M,V,O,s]),Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(S.a.mark((function e(){var t,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/pla\u010da.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c in n=e.sent,a=[],n)a.push({id:c,month:n[c].month,value:n[c].value,year:n[c].year});R(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[R]),Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(S.a.mark((function e(){var t,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/elements.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c in n=e.sent,a=[],n)a.push({id:c,value:n[c]});D(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[D]),Object(o.jsx)("section",{children:Object(o.jsxs)(u,{className:"expenses",children:[Object(o.jsx)("h1",{children:"Statistika"}),Object(o.jsx)(j,{selectedYear:function(e){r(e)},value:s,selectedMonth:function(e){h(e),V(e,s)},monthValue:O}),Object(o.jsx)(J,{expenses:t.expenses}),Object(o.jsxs)("ul",{className:"expenses-list",children:[Object(o.jsx)(d,{title:"Skupni stro\u0161ki",amount:X,date:new Date(s,m,1)},"Stro\u0161ki"),Object(o.jsx)(d,{title:"Pla\u010da",amount:w,date:new Date(s,m,1)},"Pla\u010da")]})]})})},X=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(k,{}),Object(o.jsx)(f,{}),Object(o.jsx)(A,{})]})},P=n(8),R=n(12),D=n.n(R);var V=function(){return Object(o.jsxs)("header",{className:D.a.header,children:[Object(o.jsxs)("div",{className:D.a.logo,children:[" ",Object(o.jsx)("img",{alt:"logo",src:"data:image/png;base64,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"})]}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)(P.b,{to:"/welcome",children:[" ",Object(o.jsx)("p",{children:"Stro\u0161ki "})]})}),Object(o.jsx)("li",{children:Object(o.jsx)(P.b,{to:"/dodaj-element",children:Object(o.jsx)("p",{children:"Ustvari nov predmet"})})})]})})]})},M=n(15),U=n.n(M);var L=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(V,{}),Object(o.jsx)("main",{className:U.a.main,children:e.children})]})},B=(n(35),function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useState)("2022"),r=Object(i.a)(s,2),l=r[0],b=r[1],d=Object(a.useState)("Januar"),O=Object(i.a)(d,2),h=O[0],x=O[1];return Object(o.jsxs)(u,{className:"expenses",children:[Object(o.jsx)("h1",{children:"Dodaj pla\u010do"}),Object(o.jsx)(j,{selectedYear:function(e){b(e)},selectedMonth:function(e){x(e)},value:l,monthValue:h}),Object(o.jsxs)("form",{onSubmit:function(a){a.preventDefault();var s=1*e.current.value+1*t.current.value+1*n.current.value+1*c.current.value;fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/pla\u010da.json",{method:"POST",body:JSON.stringify({value:s,month:h,year:l})}),e.current.value="",t.current.value="",n.current.value="",c.current.value="",window.alert("Uspe\u0161no ste dodali pla\u010do ")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Pla\u010da (NETO)"}),Object(o.jsx)("input",{ref:e,type:"number",min:"0.01",step:"0.01"})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Nadure (enota: eur)"}),Object(o.jsx)("input",{ref:t,type:"number"})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Regres"}),Object(o.jsx)("input",{ref:n,type:"number"}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Bo\u017ei\u010dnica"}),Object(o.jsx)("input",{ref:c,type:"number"})]})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:function(){},children:"Prekli\u010di"}),Object(o.jsx)("button",{type:"submit",children:"Dodaj element"})]})]})]})}),F=(n(36),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useContext)(v);return Object(o.jsxs)(u,{className:"expenses",children:[Object(o.jsx)("h1",{children:"Dodaj stro\u0161ek (Element)"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.elementsArray.includes(c)||(fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/elements.json",{method:"POST",body:JSON.stringify(c)}),window.alert("Uspe\u0161no ste dodali element "+c))},children:[Object(o.jsx)("div",{className:"new-expense__controls",children:Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Naslov"}),Object(o.jsx)("input",{type:"text",placeholder:'"Zavarovanje"',value:c,onChange:function(e){s(e.target.value)}})]})}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:function(){s("")},children:"Prekli\u010di"}),Object(o.jsx)("button",{type:"submit",children:"Dodaj element"})]})]})]})}),I=function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(F,{}),",",Object(o.jsx)(B,{})]})},W=function(){return Object(o.jsx)(L,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/welcome",element:Object(o.jsx)(X,{})}),Object(o.jsx)(l.a,{path:"/dodaj-element",element:Object(o.jsx)(I,{})})]})})};r.a.render(Object(o.jsx)(x,{children:Object(o.jsx)(P.a,{children:Object(o.jsx)(W,{})})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.46935904.chunk.js.map