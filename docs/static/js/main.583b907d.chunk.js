(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r),o=a(3),s=a(4),l=a(6),m=a(5),u=a(14),d=a(7),f=a(11),p=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie_container"},i.a.createElement("img",{src:this.props.image,alt:this.props.title,className:"img"}),i.a.createElement("h3",{className:"movie_title"},this.props.title),i.a.createElement("p",{className:"rating"},i.a.createElement("span",null,i.a.createElement("i",{class:"fas fa-star star"})),this.props.rating),i.a.createElement("div",{className:"link_more"},i.a.createElement(f.b,{to:"/detail/".concat(this.props.id),className:"more"},"Ver m\xe1s")))}}]),t}(i.a.Component)),h=(a(34),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",{className:"list"},this.props.movies.map(function(e){return i.a.createElement("li",{className:"list_item"},i.a.createElement(p,{title:e.title,image:e.image,rating:e.rating,id:e.id}))}))}}]),t}(i.a.Component)),v=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"nav_bar"},i.a.createElement("div",{className:"logo"},"Logo"))}}]),t}(i.a.Component)),g=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement("div",{className:"home_container"},i.a.createElement("h1",{className:"title"},"Mis pel\xedculas favoritas"),i.a.createElement(h,{movies:this.props.movies,handleFilter:this.handleFilter})))}}]),t}(i.a.Component)),b=a(10),E=(a(37),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=parseInt(this.props.takeParams.match.params.movie),t=this.props.movies.find(function(t){return t.id===e});return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),void 0!==t?i.a.createElement("div",{className:"movie_detail"},i.a.createElement("div",{className:"detail_container"},i.a.createElement("div",{className:"img_detail"},i.a.createElement("img",{src:t.image,alt:t.title})),i.a.createElement("h2",{className:"title_detail"},t.title),i.a.createElement("p",{className:"synopsis"},t.synopsis),i.a.createElement("div",{className:"lists"},i.a.createElement("ul",{className:"directors_list"},i.a.createElement("p",null,"Director: "),t.director.map(function(e){return i.a.createElement("li",{className:"director_element"},e)})),i.a.createElement("ul",{className:"cast_list"},i.a.createElement("p",null,"Actores: "),t.cast.map(function(e){return i.a.createElement("li",{className:"cast_element"},e)}))),i.a.createElement("p",{className:"rating_detail"},i.a.createElement("span",null,i.a.createElement("i",{class:"fas fa-star star_detail"})),t.rating),i.a.createElement(f.b,{to:"/",className:"link_volver"},"Volver"))):i.a.createElement("p",null,"Loading..."))}}]),t}(i.a.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={movies:[]},a.getMovies=a.getMovies.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("data"));e&&e.length?this.setState({movies:e}):this.getMovies()}},{key:"getMovies",value:function(){var e=this;fetch("https://eeb98180-236b-43f6-be83-01af4d1d548f.mock.pstmn.io/test").then(function(e){return e.json()}).then(function(t){e.setState({movies:t},function(){localStorage.setItem("data",JSON.stringify(e.state.movies))})})}},{key:"render",value:function(){var e=this;return i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",render:function(){return i.a.createElement(g,{movies:e.state.movies})}}),i.a.createElement(b.a,{path:"/detail/:movie",render:function(t){return i.a.createElement(E,{takeParams:t,movies:e.state.movies})}}))}}]),t}(i.a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(38);c.a.render(i.a.createElement(f.a,null,i.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");O?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(t,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.583b907d.chunk.js.map