(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),a=n.n(r),i=n(15),s=n.n(i),o=(n(28),n(3)),u=n.n(o),l=n(4),p=n(20),d=n(16),j=n(17),h=n(18),b=n(5),f=n(22),O=n(21),m=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).state={title:"",description:""},c.onChangeHandler=c.onChangeHandler.bind(Object(b.a)(c)),c}return Object(h.a)(n,[{key:"onChangeHandler",value:function(t){this.setState(Object(d.a)({},t.target.name,t.target.value)),console.log(this.state.title),console.log(this.state.description)}},{key:"postProduct",value:function(t,e){fetch("/api/product",{method:"post",body:JSON.stringify({title:this.state.title,description:this.state.description}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e.json()).catch((function(t){e.json(t)}))}},{key:"render",value:function(){return Object(c.jsxs)("form",{onSubmit:this.postProduct.bind(this),children:[Object(c.jsx)("label",{for:"title",children:"Product Name: "}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"title",placeholder:"Enter product name",onChange:this.onChangeHandler}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"description",children:"Product Description: "}),Object(c.jsx)("input",{type:"text",name:"description",placeholder:"Enter product's description",onChange:this.onChangeHandler}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})}}]),n}(r.Component),x=n(19),g=n.n(x),v={getAll:function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("/api/product");case 2:return e=t.sent,t.abrupt("return",e.data||[]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()};var y=function(){var t=Object(r.useState)(null),e=Object(p.a)(t,2),n=e[0],a=e[1];Object(r.useEffect)((function(){n||i()}));var i=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getAll();case 2:e=t.sent,console.log(e),a(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsx)("ul",{className:"list",children:n&&n.length>0?n.map((function(t){return function(t){return Object(c.jsxs)("li",{className:"list__item product",children:[Object(c.jsx)("h3",{className:"product__name",children:t.name}),Object(c.jsx)("p",{className:"product__description",children:t.description})]},t._id)}(t)})):Object(c.jsx)("p",{children:"No products found"})})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.8daf2b1d.chunk.js.map