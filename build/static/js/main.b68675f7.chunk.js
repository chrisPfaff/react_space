(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,a,t){e.exports=t(77)},42:function(e,a,t){},44:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),l=t.n(c),s=(t(42),t(4)),o=t.n(s),i=t(8),m=t(3),u=(t(44),function(){return r.a.createElement("div",{className:"loadingContainer bounce"},r.a.createElement("img",{className:"notFound_image",src:"404.png",alt:"loading"}))}),d=t(11),p=t.n(d);t(61);var E=function(e){var a=Object(n.useState)(null),t=Object(m.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(null),d=Object(m.a)(s,2),E=d[0],h=d[1],f=Object(n.useState)(null),v=Object(m.a)(f,2),g=v[0],b=v[1],N=Object(n.useState)(""),_=Object(m.a)(N,2),y=_[0],S=_[1],k=function(e,a,t,n){l(e),h(a),b(t),S(n)};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/getImage").then((function(e){k(e.data.url,e.data.explanation,e.data.title,e.data.media_type)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Home_heading hover"},"A.P.O.D (Astronomy Picture of The Day)"),r.a.createElement("div",{className:"Home_body"},null===c?r.a.createElement(u,null):"video"===y?r.a.createElement("iframe",{className:"Home_iframe",src:c,frameborder:"0",allowfullscreen:!0,allow:"autoplay"}):r.a.createElement("img",{className:"Home_image",src:c,alt:"nasa space"}),r.a.createElement("div",{className:"Home_title"},r.a.createElement("h2",{className:"Home_heading"},g))),r.a.createElement("p",{className:"Home_explanation"},E))};t(62);var h=function(){return r.a.createElement("div",{className:"Landing"},r.a.createElement("div",{className:"Landing_hero"},r.a.createElement("h1",null,"React Space"),r.a.createElement("video",{className:"Landing_video",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},r.a.createElement("source",{src:"milkyway.mp4",type:"video/mp4"}))),r.a.createElement("div",{className:"Landing_content"},r.a.createElement("h2",null,r.a.createElement("span",{className:"Landing_para_beginning"},"T"),"his App was created using NASA's free api."," "),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",{className:"Landing_para_beginning"},"I")," used the React hooks API instead of classes and basic functional components. I included a proprietary dark mode switch for ease of reading. The first"," ",r.a.createElement("strong",null,"Landing Page")," I used a basic React component with some SASS styling to create a .MP4 video background upon entering the app."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",{className:"Landing_para_beginning"},"T"),"he second page uses NASA's daily image api(APOD) or"," ",r.a.createElement("a",{className:"apod_link",href:"http://apod.nasa.gov/apod/astropix.html"},"Astronomy Picture of the Day")," ","This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. It uses a hook which fetches the image along with data about said image and displays it in a responsive webpage."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",{className:"Landing_para_beginning"},"F"),"or the third page I used NASA's search api. This API allows you to search NASA's image and video library. The images.nasa.gov API is organized around REST, has predictable/resource\xad-oriented URLs and uses HTTP response codes to indicate API errors. This API uses built-\xadin HTTP features such as HTTP authentication and HTTP verbs, which are understood by many off-\xadthe-\xadshelf HTTP clients."),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",{className:"Landing_para_beginning"},"T"),"he last page uses EONET(Earth Observatory National Event Tracker). Using client applications, such as"," ",r.a.createElement("a",{className:"apod_link",href:"https://worldview.earthdata.nasa.gov/"},"NASA EOSDIS\u2019 Worldview"," "),", users can browse the entire globe daily and look for natural events as they occur. Storms are regularly spotted in the tropics, dust storms over deserts, forest fires in the summers. These events are occurring constantly and NASA NRT imagery can represent them all using a variety of different data parameters. However, the user\u2019s experience is tailored, and therefore restricted, by the client application. What if there was an API that provided a curated list of natural events and provided a way to link those events to event-related NRT image layers? Enter EONET."),r.a.createElement("br",null)))},f=t(31),v=t(32),g=t(33);t(67);var b=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],l=t[1],s=e.data.media_type;return console.log("props data",e.data),Object(n.useEffect)((function(){(function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.get(e.href).then((function(e){l(e.data[0])})).catch((function(e){console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container_body"},r.a.createElement("div",{className:"container_title"},r.a.createElement("h1",null,e.data.title),r.a.createElement(v.a,Object(f.a)({onClick:function(e){e.preventDefault();var a=e.currentTarget.parentNode.parentNode.parentNode;a.classList.contains("active")?a.classList.remove("active"):a.classList.add("active")},className:"container_button",icon:g.a},"className","container_icon"))),r.a.createElement("div",null,null===s?r.a.createElement(u,null):"video"===s?r.a.createElement("iframe",{className:"container_iframe",src:c,frameborder:"0",allowfullscreen:!0,allow:"autoplay"}):r.a.createElement("img",{className:"container_image",src:c,alt:"nasa space"})),r.a.createElement("div",{className:"container_explanation"},r.a.createElement("p",null,e.data.description))))};t(68);var N=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),d=u[0],E=u[1];return r.a.createElement("div",{className:"Search"},r.a.createElement("div",{className:"Search_container"},r.a.createElement("h1",{className:"Search_heading hover"},"Search Images"),r.a.createElement("h2",null,"Use NASA's Search API"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/search?data=".concat(d)).then((function(e){var a;console.log("response data items",e.data),a=e.data,l(a)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),E("")},className:"Search_form"},r.a.createElement("label",{htmlFor:"search"},"Search",r.a.createElement("input",{onChange:function(e){E(e.target.value)},type:"search",name:"search",id:"search",placeholder:d}),r.a.createElement("input",{class:"Search_button",type:"submit",value:"submit"})))),c.map((function(e){return r.a.createElement(b,{href:e.href,data:e.data[0]})})))},_=t(12),y=t(10);t(69);var S=function(e){var a=Object(_.f)();return r.a.createElement("div",{className:"notFound"},r.a.createElement("h2",{className:"notFound_heading"},r.a.createElement("h1",null,"404"),"No match for ",r.a.createElement("code",null,a.pathname)),r.a.createElement("img",{className:"notFound_image",src:"404.png",alt:"page not found"}),r.a.createElement("p",{className:"notFound_explanation hover"},"Its Lonely Out Here"),r.a.createElement("button",{className:"notFound_button"},r.a.createElement(y.b,{className:"notFound_button_text",to:"/"},r.a.createElement("li",null,"Home"))))},k=t(36),O=t.n(k);t(73);var A=function(e){return console.log(e.data),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{className:"eonet_container"},r.a.createElement("div",{className:"eonet_container_body"},r.a.createElement("div",{className:"eonet_container_title"},r.a.createElement("h1",null,e.data.title)),r.a.createElement("div",{className:"eonet_container_explanation"},r.a.createElement("p",null,"Date Event Closed:",r.a.createElement("span",{className:"eonet_container_date"},O()(e.data.closed).utc().format("MM/DD/YYYY"))),r.a.createElement("div",null,r.a.createElement("iframe",{className:"eonet_container_link",allowfullscreen:"yes",src:e.data.sources[0].url,frameborder:"0"})),r.a.createElement("p",null,e.data.description))))};t(74);var w=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(6),u=Object(m.a)(s,2),d=u[0],E=u[1],h=Object(n.useState)([]),f=Object(m.a)(h,2),v=f[0],g=f[1],b=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/eonet?data=".concat(d)).then((function(e){g(e.data.events),l(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"eonet"},r.a.createElement("h1",{className:"eonet_title_main hover"},"Eonet"),r.a.createElement("h2",{className:"eonet_title"},"Earth Observatory Natural Event Tracker (EONET)"),r.a.createElement("h3",null,"Past Natural Disaster Tracker"),r.a.createElement("div",{className:"eonet_body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b()}},r.a.createElement("select",{value:d,onChange:function(e){e.preventDefault(),E(e.target.value)},className:"eonet_select"},r.a.createElement("option",{value:"6"},"Drought"),r.a.createElement("option",{value:"7"},"Dust and Haze"),r.a.createElement("option",{value:"16"},"Earthquakes"),r.a.createElement("option",{value:"9"},"Floods"),r.a.createElement("option",{value:"14"},"Landslides"),r.a.createElement("option",{value:"19"},"Manmade"),r.a.createElement("option",{value:"15"},"Sea and Lake Ice"),r.a.createElement("option",{value:"10"},"Severe Storms"),r.a.createElement("option",{value:"17"},"Snow"),r.a.createElement("option",{value:"12"},"Volcanos"),r.a.createElement("option",{value:"13"},"Water Color"),r.a.createElement("option",{value:"8"},"Wildfires")),r.a.createElement("input",{className:"eonet_button",type:"submit",value:"Submit"}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,c.title),r.a.createElement("p",null,c.description))),r.a.createElement("div",null,v.map((function(e){return r.a.createElement(A,{data:e})}))))},j=(t(75),function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",{className:"DarkmodeContainer"},r.a.createElement("span",{className:"DarkmodeContainer_name"},"Darkmode"),r.a.createElement("label",{className:"DarkmodeContainer_switch"},r.a.createElement("input",{onClick:function(e){var a=document.querySelector("body"),t=document.querySelectorAll("a"),n=document.getElementsByClassName("DarkmodeContainer_name"),r=document.getElementsByClassName("App_header"),s=document.getElementsByClassName("App_logo_dark")[0],o=document.querySelector("h2");!1===c?(l(!0),t.forEach((function(e){e.classList.add("dark")})),a.classList.add("dark"),n[0].classList.add("dark"),r[0].classList.add("dark"),o.classList.add("dark"),s.style.zIndex=2):(l(!1),t.forEach((function(e){e.classList.remove("dark")})),a.classList.remove("dark"),n[0].classList.remove("dark"),r[0].classList.remove("dark"),o.classList.remove("dark"),s.style.zIndex=0)},type:"checkbox"}),r.a.createElement("span",{className:"slider round"})))});t(76);var T=function(){return r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App_header"},r.a.createElement(y.b,{className:"App_logo_light",to:"/"},r.a.createElement("img",{className:"logo",src:"logo.png",alt:"main header image"})),r.a.createElement(y.b,{className:"App_logo_dark",to:"/"},r.a.createElement("img",{className:"logo",src:"logoDark.png",alt:"main header image"})),r.a.createElement("div",{className:"App_nav"},r.a.createElement("li",null,r.a.createElement(y.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(y.b,{to:"/fact"},"Nasa Fact")),r.a.createElement("li",null,r.a.createElement(y.b,{to:"/search"},"Search")),r.a.createElement("li",null,r.a.createElement(y.b,{to:"/eonet"},"Eonet")),r.a.createElement(j,null))),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(_.a,{exact:!0,path:"/fact"},r.a.createElement(E,null)),r.a.createElement(_.a,{exact:!0,path:"/search"},r.a.createElement(N,null)),r.a.createElement(_.a,{exact:!0,path:"/eonet"},r.a.createElement(w,null)),r.a.createElement(_.a,{path:"*"},r.a.createElement(S,null)))))};l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b68675f7.chunk.js.map