(this.webpackJsonpmoulunkevin=this.webpackJsonpmoulunkevin||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),s=(t(12),t(1)),o=t(2),i=t(4),m=t(3),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isOpen:!0,width:0},e}return Object(o.a)(t,[{key:"modal",value:function(){var e=null,a=null;this.state.isOpen?(a=!1,e=-100):(a=!0,e=0),this.setState({width:e,isOpen:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"header",id:"home"},l.a.createElement("nav",{className:"nav"},l.a.createElement("button",{id:"offcanvas-toggler",className:"offcanvas-toggler mobile-only",onClick:function(a){return e.modal()}},l.a.createElement("img",{src:"./img/icons/bars-solid.svg",alt:"menu",height:"16",width:"16"})),l.a.createElement("a",{className:"header-logo-container",href:"#"},l.a.createElement("img",{className:"header-logo",src:"./img/Logo.png",alt:"Logo"})),l.a.createElement("ul",{className:"nav-list desktop-only"},this.props.links.map((function(e){return l.a.createElement("a",{href:e.url},l.a.createElement("li",{className:"nav-item"},e.label))})))),l.a.createElement("div",{className:"hero"},l.a.createElement("img",{className:"illustration",src:"./img/homeIllustration.png",alt:"home illustration"}),l.a.createElement("div",{className:"hero-text"},l.a.createElement("h1",{className:"title"},"Kevin Moulun"),l.a.createElement("p",{className:"subtitle"},"Developpeur web junior"),l.a.createElement("a",{className:"header-cv-btn",href:"./CVMoulunKevin.pdf",download:"Kevin Moulun CV"},"Mon cv"))),l.a.createElement("div",{className:"offcanvas-menu mobile-only",id:"offcanvas",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{left:this.state.width+"%"}},l.a.createElement("button",{id:"offcanvas-close",type:"button",className:"close",onClick:function(a){return e.modal()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("ul",{className:"nav-list"},this.props.links.map((function(e){return l.a.createElement("a",{href:e.url},l.a.createElement("li",{className:"nav-item"},e.label))})))))}}]),t}(n.Component),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section about",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"section-title"},"A propos"),l.a.createElement("div",{className:"about-me"},l.a.createElement("img",{className:"about-img",src:"./img/me.png",alt:"me"}),l.a.createElement("div",{className:"about-me-text-container"},l.a.createElement("p",{className:"greeting"},"Hello !"),l.a.createElement("p",{className:"about-me-text"},"Je m'appelle Kevin, je suis un developpeur junior passion\xe9 par les technologies de toute sortes, mais surtout celles du web. J\u2019adore apprendre de nouvelles choses, de nouvelles technologies, experiment\xe9 egalement")))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"./img/icons/".concat(this.props.img,".png"),alt:this.props.name,srcSet:"./img/icons/".concat(this.props.img,".svg")}))}}]),t}(n.Component),g={front:[{name:"HTML",img:"html"},{name:"CSS",img:"css"},{name:"JS",img:"js"},{name:"Boostrap",img:"bootstrap"},{name:"Jquery",img:"jquery"},{name:"Sass",img:"sass"},{name:"React",img:"react"},{name:"Git",img:"git"}],back:[{name:"PHP",img:"php"},{name:"symfony",img:"symfony"},{name:"JS",img:"js"},{name:"node JS",img:"node"}]},v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section tech",id:"tech"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"section-title --black"},"Les differentes technologies que j\u2019ai pu utiliser"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-5"},l.a.createElement("div",{className:"tech-front"},l.a.createElement("p",{className:"tech-cat"},"Front end"),l.a.createElement("div",{className:"row"},g.front.map((function(e){return l.a.createElement(p,{name:e.name,img:e.img,key:e.name})}))))),l.a.createElement("div",{className:"offset-lg-1 col-lg-5"},l.a.createElement("p",{className:"tech-cat"},"Back end"),l.a.createElement("div",{className:"tech-back"},l.a.createElement("div",{className:"row"},g.back.map((function(e){return l.a.createElement(p,{name:e.name,img:e.img,key:e.name})}))))))))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.info,a=e.cover,t=e.title,n=e.id,r=e.description,c=e.link;return l.a.createElement("div",{className:"col-lg-6 col-md-6 project-container"},l.a.createElement("div",{"data-aos":"fade-left",className:"project-container",style:{backgroundImage:"url(".concat(a,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"overlay__content"},l.a.createElement("p",{className:"project-title"},t),l.a.createElement("button",{type:"button",className:"modal-btn","data-toggle":"modal","data-target":"#".concat(n)},"Voir le projet"))),l.a.createElement("div",{className:"modal fade project__modal",id:n,tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("img",{className:"project-img img-fluid",src:a,alt:t})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h2",{className:"modal-title"},t),l.a.createElement("p",null,r),l.a.createElement("div",{className:"control-wrapper"},l.a.createElement("button",{type:"button",className:"modal-btn","data-dismiss":"modal"},l.a.createElement("i",{className:"fas fa-times"})," Fermer"),c&&l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"modal-btn"},l.a.createElement("i",{className:"fas fa-code"}),"Voir le projet")))))))))}}]),t}(n.Component),b=[{title:"Markdown converter",id:"markdown",cover:"https://raw.githubusercontent.com/Atndesign/Markdown-converter/master/screen.png",description:"Markdown-converter est un projet fait avec react, realiser avec un seul objectif me faire progresser en react JS , je voulais un outil capable de transcrire du markdown en HTML structur\xe9",link:"https://atndesign.github.io/Markdown-converter/"},{title:"Memory React",id:"memory",cover:"https://raw.githubusercontent.com/Atndesign/Memory/master/screen.png",description:"Memory React, est un projet bas\xe9 sur le framework React, dans ce projet on peut choisir la taille de la grille et bien sur y jou\xe9",link:"https://atndesign.github.io/Memory/"},{title:"Sales&Go",id:"salesgo",cover:"https://raw.githubusercontent.com/Atndesign/Sales-Go/master/screen.png",description:"Sales&Go est un petit projet que j'ai voulu realiser afin de comprendre un peux mieux React, l'objectif de cette web app est de convertir un prix avec une reduction",link:"https://atndesign.github.io/Sales-Go/"},{title:"Daily code",id:"dailycode",cover:"https://raw.githubusercontent.com/Atndesign/dailycode/master/screen.png",description:"L'id\xe9e de daily code etait de documenter mon avanc\xe9 dans le developpement web front end, le but etait de realiser un projet tout les jours, afin d'apprendre de nouvelles competences",link:"https://atndesign.github.io/dailycode/"}],E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section projects",id:"projects"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"section-title"},"Mes differentes realisations"),l.a.createElement("div",{className:"row"},b.map((function(e){return l.a.createElement(h,{info:e,key:e.id})})))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section contact",id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"section-title --black"},"Contactez moi"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("form",{action:""},l.a.createElement("label",{className:"input-label",htmlFor:"email"},"Entrez votre email"),l.a.createElement("input",{className:"input",id:"email",type:"email"}),l.a.createElement("label",{className:"input-label",htmlFor:"name"},"Entrez votre nom"),l.a.createElement("input",{className:"input",id:"name",type:"text"}),l.a.createElement("label",{className:"input-label",htmlFor:"object"},"Objet"),l.a.createElement("input",{className:"input",id:"object",type:"text"}),l.a.createElement("label",{className:"input-label",htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"input",name:"",id:"message",cols:"30",rows:"10"}),l.a.createElement("button",{className:"contact-form-sub",type:"submit"},"Envoyer"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"contact-medias"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Atndesign/"},l.a.createElement("img",{className:"media-icons",src:"./img/icons/github.png",alt:"github",srcSet:"./img/icons/github.svg"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/kevin-moulun-233b64174/"},l.a.createElement("img",{className:"media-icons",src:"./img/icons/linkedin.png",alt:"linkedin",srcSet:"./img/icons/linkedin.svg"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mail:moulun.kevinn@gmail.com"},l.a.createElement("img",{className:"media-icons",src:"./img/icons/mail.png",alt:"mail",srcSet:"./img/icons/mail.svg"})))))))}}]),t}(n.Component),N=(t(13),[{label:"Home",url:"#"},{label:"A propos",url:"#about"},{label:"Les technologies",url:"#tech"},{label:"Mes realisations",url:"#projects"},{label:"contact",url:"#contact"}]);var y=function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"App"},l.a.createElement(u,{links:N}),l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement("footer",{className:"desktop-only"},"\xa9 Moulun Kevin ",e,l.a.createElement("a",{href:"#home"},l.a.createElement("i",{className:"fas fa-chevron-up"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2e2aa3fa.chunk.js.map