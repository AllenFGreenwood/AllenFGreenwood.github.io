(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kW0G:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("Bl7J"),c=r("vrFN"),p=r("p6eR"),u=(r("VRzm"),r("Btvt"),r("f3/d"),r("o0o1")),s=r.n(u);r("ls82");function l(e,t,r,n,o,a,i){try{var c=e[a](i),p=c.value}catch(u){return void r(u)}c.done?t(p):Promise.resolve(p).then(n,o)}var d={display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"flex-start",padding:"1rem",marginBottom:"1rem",boxShadow:"5px 5px 25px 0 rgba(46,61,73,.2)",backgroundColor:"#fff",borderRadius:"6px",maxWidth:"300px"},f={fontSize:"13px",textAlign:"center",color:"#fff",outline:"none",padding:"12px",boxShadow:"2px 5px 10px rgba(0,0,0,.1)",backgroundColor:"rgb(255, 178, 56)",borderRadius:"6px",letterSpacing:"1.5px"},m=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.redirectToCheckout=function(){var e,t=(e=s.a.mark((function e(t,r,n){var o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=1),t.preventDefault(),e.next=4,this.props.stripe.redirectToCheckout({items:[{sku:r,quantity:n}],successUrl:window.location.origin+"/page-2/",cancelUrl:window.location.origin+"/advanced"});case 4:o=e.sent,(a=o.error)&&console.warn("Error:",a);case 7:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){l(a,n,o,i,c,"next",e)}function c(e){l(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),a.render=function(){var e,t,r,n=this,a=this.props.sku;return o.a.createElement("div",{style:d},o.a.createElement("h4",null,a.name,"x"),o.a.createElement("p",null,"Price: ",(e=a.price,t=a.currency,r=(e/100).toFixed(2),new Intl.NumberFormat(["en-US"],{style:"currency",currency:t,currencyDisplay:"symbol"}).format(r))),o.a.createElement("button",{style:f,onClick:function(e){return n.redirectToCheckout(e,a.id)}},"BUY ME"))},n}(o.a.Component);var y={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",padding:"1rem 0 1rem 0"},v=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={stripe:null},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){var e=window.Stripe("pk_test_wq42XjvnnoLeoQUlEPrWa52F00tgAS3ehU");this.setState({stripe:e})},i.render=function(){var e=this;return o.a.createElement(a.StaticQuery,{query:"3492883323",render:function(t){var r=t.skus;return o.a.createElement("div",{style:y},r.edges.map((function(t){var r=t.node;return o.a.createElement(m,{key:r.id,sku:r,stripe:e.state.stripe})})))},data:p})},n}(n.Component);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Advanced Example"}),o.a.createElement("h1",null,"This is the advanced example"),o.a.createElement(v,null),o.a.createElement(a.Link,{to:"/"},"Go back to the easy example"))}},p6eR:function(e){e.exports=JSON.parse('{"data":{"skus":{"edges":[{"node":{"id":"sku_GlZ9tcR0UAVIPL","currency":"usd","price":1111}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-advanced-js-e73986e4750025b7fc6e.js.map