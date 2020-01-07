(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,a,t){e.exports=t(76)},42:function(e,a,t){},44:function(e,a,t){},61:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(30),l=t.n(r),o=(t(42),t(4)),s=t.n(o),m=t(8),i=t(3),u=(t(44),function(){return c.a.createElement("div",{className:"loadingContainer bounce"},c.a.createElement("img",{className:"notFound_image",src:"404.png",alt:"loading"}))}),d=t(10),E=t.n(d);t(61);var p=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),p=d[0],f=d[1],v=Object(n.useState)(null),h=Object(i.a)(v,2),b=h[0],N=h[1],g=Object(n.useState)(""),_=Object(i.a)(g,2),O=_[0],k=_[1],j=function(e,a,t,n){l(e),f(a),N(t),k(n)};return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/getImage").then((function(e){j(e.data.url,e.data.explanation,e.data.title,e.data.media_type)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),c.a.createElement("div",{className:"Home"},c.a.createElement("h1",{className:"Home_heading hover"},"Homies"),c.a.createElement("div",{className:"Home_body"},null===r?c.a.createElement(u,null):"video"===O?c.a.createElement("iframe",{className:"Home_iframe",src:r,frameborder:"0",allowfullscreen:!0,allow:"autoplay"}):c.a.createElement("img",{className:"Home_image",src:r,alt:"nasa space"}),c.a.createElement("div",{className:"Home_title"},c.a.createElement("h2",{className:"Home_heading"},b))),c.a.createElement("p",{className:"Home_explanation"},p))},f=t(31),v=t(32),h=t(33);t(66);var b=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],o=e.data.media_type;return console.log("props data",e.data),Object(n.useEffect)((function(){(function(){var a=Object(m.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.get(e.href).then((function(e){l(e.data[0])})).catch((function(e){console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container_body"},c.a.createElement("div",{className:"container_title"},c.a.createElement("h1",null,e.data.title),c.a.createElement(v.a,Object(f.a)({onClick:function(e){e.preventDefault();var a=e.currentTarget.parentNode.parentNode.parentNode;a.classList.contains("active")?a.classList.remove("active"):a.classList.add("active")},className:"container_button",icon:h.a},"className","container_icon"))),c.a.createElement("div",null,null===o?c.a.createElement(u,null):"video"===o?c.a.createElement("iframe",{className:"container_iframe",src:r,frameborder:"0",allowfullscreen:!0,allow:"autoplay"}):c.a.createElement("img",{className:"container_image",src:r,alt:"nasa space"})),c.a.createElement("div",{className:"container_explanation"},c.a.createElement("p",null,e.data.description))))};t(67);var N=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),d=u[0],p=u[1];return c.a.createElement("div",{className:"Search"},c.a.createElement("div",{className:"Search_container"},c.a.createElement("h1",{className:"Search_heading hover"},"Search Images"),c.a.createElement("h2",null,"Use NASA's Search API"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/search?data=".concat(d)).then((function(e){var a;console.log("response data items",e.data),a=e.data,l(a)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),p("")},className:"Search_form"},c.a.createElement("label",{htmlFor:"search"},"Search",c.a.createElement("input",{onChange:function(e){p(e.target.value)},type:"search",name:"search",id:"search",placeholder:d}),c.a.createElement("input",{class:"Search_button",type:"submit",value:"submit"})))),r.map((function(e){return c.a.createElement(b,{href:e.href,data:e.data[0]})})))},g=t(12),_=t(11);t(68);var O=function(e){var a=Object(g.f)();return c.a.createElement("div",{className:"notFound"},c.a.createElement("h2",{className:"notFound_heading"},c.a.createElement("h1",null,"404"),"No match for ",c.a.createElement("code",null,a.pathname)),c.a.createElement("img",{className:"notFound_image",src:"404.png",alt:"page not found"}),c.a.createElement("p",{className:"notFound_explanation hover"},"Its Lonely Out Here"),c.a.createElement("button",{className:"notFound_button"},c.a.createElement(_.b,{className:"notFound_button_text",to:"/"},c.a.createElement("li",null,"Home"))))},k=t(36),j=t.n(k);t(72);var S=function(e){return console.log(e.data),Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),c.a.createElement("div",{className:"eonet_container"},c.a.createElement("div",{className:"eonet_container_body"},c.a.createElement("div",{className:"eonet_container_title"},c.a.createElement("h1",null,e.data.title)),c.a.createElement("div",{className:"eonet_container_explanation"},c.a.createElement("p",null,"Date Event Closed:",c.a.createElement("span",{className:"eonet_container_date"},j()(e.data.closed).utc().format("MM/DD/YYYY"))),c.a.createElement("div",null,c.a.createElement("iframe",{className:"eonet_container_link",allowfullscreen:"yes",src:e.data.sources[0].url,frameborder:"0"})),c.a.createElement("p",null,e.data.description))))};t(73);var y=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(6),u=Object(i.a)(o,2),d=u[0],p=u[1],f=Object(n.useState)([]),v=Object(i.a)(f,2),h=v[0],b=v[1],N=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/eonet?data=".concat(d)).then((function(e){b(e.data.events),l(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"eonet"},c.a.createElement("h1",{className:"eonet_title hover"},"Eonet"),c.a.createElement("h2",{className:"eonet_title"},"Earth Observatory Natural Event Tracker (EONET)"),c.a.createElement("h3",null,"Past Natural Disaster Tracker"),c.a.createElement("div",{className:"eonet_body"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N()}},c.a.createElement("select",{value:d,onChange:function(e){e.preventDefault(),p(e.target.value)},className:"eonet_select"},c.a.createElement("option",{value:"6"},"Drought"),c.a.createElement("option",{value:"7"},"Dust and Haze"),c.a.createElement("option",{value:"16"},"Earthquakes"),c.a.createElement("option",{value:"9"},"Floods"),c.a.createElement("option",{value:"14"},"Landslides"),c.a.createElement("option",{value:"19"},"Manmade"),c.a.createElement("option",{value:"15"},"Sea and Lake Ice"),c.a.createElement("option",{value:"10"},"Severe Storms"),c.a.createElement("option",{value:"17"},"Snow"),c.a.createElement("option",{value:"12"},"Volcanos"),c.a.createElement("option",{value:"13"},"Water Color"),c.a.createElement("option",{value:"8"},"Wildfires")),c.a.createElement("input",{className:"eonet_button",type:"submit",value:"Submit"}))),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h1",null,r.title),c.a.createElement("p",null,r.description))),c.a.createElement("div",null,h.map((function(e){return c.a.createElement(S,{data:e})}))))},x=(t(74),function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],l=t[1];return c.a.createElement("div",{className:"DarkmodeContainer"},c.a.createElement("span",{className:"DarkmodeContainer_name"},"Darkmode"),c.a.createElement("label",{className:"DarkmodeContainer_switch"},c.a.createElement("input",{onClick:function(e){var a=document.querySelector("body"),t=document.querySelectorAll("a"),n=document.getElementsByClassName("DarkmodeContainer_name"),c=document.getElementsByClassName("App_header"),o=document.getElementsByClassName("App_logo_dark")[0],s=document.querySelector("h2");!1===r?(l(!0),t.forEach((function(e){e.classList.add("dark")})),a.classList.add("dark"),n[0].classList.add("dark"),c[0].classList.add("dark"),s.classList.add("dark"),o.style.zIndex=2):(l(!1),t.forEach((function(e){e.classList.remove("dark")})),a.classList.remove("dark"),n[0].classList.remove("dark"),c[0].classList.remove("dark"),s.classList.remove("dark"),o.style.zIndex=0)},type:"checkbox"}),c.a.createElement("span",{className:"slider round"})))});t(75);var w=function(){return c.a.createElement(_.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App_header"},c.a.createElement(_.b,{className:"App_logo_light",to:"/"},c.a.createElement("img",{className:"logo",src:"logo.png",alt:"main header image"})),c.a.createElement(_.b,{className:"App_logo_dark",to:"/"},c.a.createElement("img",{className:"logo",src:"logoDark.png",alt:"main header image"})),c.a.createElement("div",{className:"App_nav"},c.a.createElement("li",null,c.a.createElement(_.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/search"},"Search")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/eonet"},"Eonet")),c.a.createElement(x,null))),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/"},c.a.createElement(p,null)),c.a.createElement(g.a,{exact:!0,path:"/search"},c.a.createElement(N,null)),c.a.createElement(g.a,{exact:!0,path:"/eonet"},c.a.createElement(y,null)),c.a.createElement(g.a,{path:"*"},c.a.createElement(O,null)))))};l.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d888fa3c.chunk.js.map