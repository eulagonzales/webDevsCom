(this.webpackJsonpwebdevscom=this.webpackJsonpwebdevscom||[]).push([[8],{414:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a(0),o=a.n(n),c=a(85),l=a.n(c),s=a(165),i=a.n(s),m=a(22),u=a(78),d=a(46),f=a(15),b=a(19),p=a(23),h=a(21),g=a(20),v=a(79),E=a.n(v),k=(a(200),a(390),function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).setRef=r.setRef.bind(Object(p.a)(r)),r}return Object(b.a)(a,[{key:"setRef",value:function(e){this.codeEl=e}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){null!==this.props.language&&E.a.highlightBlock(this.codeEl)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.setRef,className:"language-".concat(this.props.language)},this.props.value))}}]),a}(o.a.PureComponent));k.defaultProps={language:""};var N=k,w=a(409),O=a(410),y=a(10),j=function(e){var t=e.isBookMarked,a=e.removeBookmark,r=e.bookmarkIt,n=e.setModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{type:"light"}),o.a.createElement("div",{id:"bookmarkBtn",className:"button button-special is-rounded box-shadow-lift",style:{cursor:"pointer"},onClick:function(){return t?a():r()},"data-tip":t?"Remove from Bookmark":"Add to Bookmark"},o.a.createElement(w.a,{color:"blue",fill:t?"blue":"#c9cff8",className:"icon"})),o.a.createElement("div",{id:"repo-owner-info",className:"button button-special is-rounded box-shadow-lift",style:{cursor:"pointer"},onClick:function(){return n(!0)},"data-tip":"See more from Repo owners"},o.a.createElement(O.a,{color:"blue",fill:"blue",className:"icon"})))},S=a(391),x=a(411),A=a(396),C=new function e(){Object(f.a)(this,e),this.createPdf=function(e,t,a){Object(A.a)(e,{title:"webdevscom.github.io",scale:.8,producer:"WebDevsCom",subject:"Learning Resources",creator:"Binu kumar",paperSize:"Letter",fileName:t+".pdf",margin:5},(function(){a(!1)}))}},R=function(e){var t=o.a.createRef(),a=o.a.useState(!1),c=Object(r.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){l?document.querySelector("body").classList.add("overflow-hidden"):document.querySelector("body").classList.remove("overflow-hidden")}),[l]),o.a.createElement("section",null,o.a.createElement("div",{className:"has-text-centered",style:{padding:"10px 0 20px"}},l?o.a.createElement("div",{id:"cover-spin"}):o.a.createElement("button",{className:"button button-special box-shadow-lift is-primary is-medium is-rounded fadeInUp",onClick:function(){s(!0),C.createPdf(t.current,e.name,s)},style:{animationDelay:"0.25s"},id:"download-pdf",disabled:l},o.a.createElement(x.a,null),o.a.createElement("span",null,"\u2003Download PDF"))),o.a.createElement("section",{className:"pdf-body",ref:t},e.children))},q=(t.default=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1],f=Object(n.useState)({}),b=Object(r.a)(f,2),p=b[0],h=b[1],g=Object(n.useState)(!0),v=Object(r.a)(g,2),E=v[0],k=v[1],w=Object(n.useState)([]),O=Object(r.a)(w,2),y=O[0],x=O[1],A=Object(n.useState)(!1),C=Object(r.a)(A,2),B=C[0],L=C[1],M=Object(n.useState)(!1),I=Object(r.a)(M,2),D=I[0],J=I[1],P=Object(n.useState)([]),H=Object(r.a)(P,2),T=H[0],_=H[1];Object(n.useEffect)((function(){x(JSON.parse(localStorage.getItem("bookmarks")));var e=y&&y.find((function(e){return p.id===e}));if(L(!!e),!1===E){var t=[];u.a.forEach((function(e){e.repoOwnerName===p.repoOwnerName&&t.push(e)})),_(t);for(var a=document.querySelectorAll("#markdown h1"),r=0;r<a.length;r++)a[r].className="title is-2",a[r].setAttribute("id",Object(S.slug)(a[r].innerHTML));var n=document.querySelectorAll("#markdown h2");for(r=0;r<n.length;r++)n[r].className="title is-3",n[r].setAttribute("id",Object(S.slug)(n[r].innerHTML));var o=document.querySelectorAll("#markdown h3");for(r=0;r<o.length;r++)o[r].className="title is-4",o[r].setAttribute("id",Object(S.slug)(o[r].innerHTML));var c=document.querySelectorAll("#markdown strong");for(r=0;r<c.length;r++)c[r].setAttribute("id",Object(S.slug)(c[r].innerHTML));var l=document.querySelectorAll("#markdown table");for(r=0;r<l.length;r++)l[r].className="table is-hoverable is-dark is-fullwidth is-striped";var s=document.querySelectorAll("img");for(r=0;r<s.length;r++)s[r].src.includes(window.location.origin)&&s[r].setAttribute("src","https://raw.githubusercontent.com/".concat(p.repoOwnerName,"/").concat(p.repoName,"/master").concat(s[r].src.replace(window.location.origin,"").replace(window.location.pathname,"").replace("/resources","")));var i=document.querySelectorAll("#markdown a");for(r=0;r<i.length;r++)i[r].href.includes("./")||i[r].href.includes(".md")&&i[r].href.includes(window.location.origin)?(i[r].setAttribute("href","https://github.com/".concat(p.repoOwnerName,"/").concat(p.repoName,"/blob/master").concat(i[r].href.replace(window.location.origin,"").replace(window.location.pathname,"").replace("/resources",""))),i[r].setAttribute("target","_blank")):i[r].href.includes("#")?i[r].href.includes("#")&&i[r].setAttribute("href",i[r].href.toLowerCase()):i[r].setAttribute("target","_blank")}}),[E,p]);return Object(n.useEffect)((function(){k(!0);var t=e.match.params.id,a=u.a.find((function(e){return String(e.id)===String(t)}));h(a),a&&i.a.get(a.link).then((function(e){s(e.data),k(!1)}))}),[]),Object(n.useEffect)((function(){D?document.querySelector("html").classList.add("is-clipped"):document.querySelector("html").classList.remove("is-clipped")}),[D]),E?o.a.createElement(m.a,null):o.a.createElement("div",{className:"container",id:"markdown"},o.a.createElement("div",{id:"table-of-contents"}),o.a.createElement(j,{isBookMarked:B,removeBookmark:function(){L(!1);var e=y&&y.filter((function(e){return e!==p.id}));x(e),localStorage.setItem("bookmarks",JSON.stringify(e))},bookmarkIt:function(){L(!0),null===y?localStorage.setItem("bookmarks",JSON.stringify([p.id])):(y.push(p.id),x(y),localStorage.setItem("bookmarks",JSON.stringify(y)))},setModal:J}),o.a.createElement(R,{forcePageBreak:".page-break",name:p.repoName},o.a.createElement("div",{id:"markdown-content"},o.a.createElement("div",{className:"has-text-centered fadeInUp",style:{padding:"10px 0 20px",animationDelay:".5s"}},o.a.createElement("a",{href:"https://github.com/".concat(p.repoOwnerName,"/").concat(p.repoName,"/"),className:"button button-special box-shadow-lift is-medium is-rounded",target:"_blank",rel:"noopener noreferrer",id:"view-on-github"},o.a.createElement(d.a,null)," ",o.a.createElement("span",null," \u2003View on Github"))),o.a.createElement("div",null,o.a.createElement(l.a,{source:c,escapeHtml:!1,renderers:{code:N}})))),D&&o.a.createElement(q,{authorRepos:T,setModal:J,currentRepoId:p.id}))},function(e){var t=e.authorRepos,a=e.setModal,r=e.currentRepoId;return o.a.createElement("div",{className:"modal is-active"},o.a.createElement("div",{className:"modal-background",style:{cursor:"pointer"},onClick:function(){return a(!1)}}),o.a.createElement("div",{className:"modal-card"},o.a.createElement("header",{className:"modal-card-head"},o.a.createElement("p",{className:"modal-card-title has-text-primary"},t[0].repoOwner),o.a.createElement("button",{className:"delete",onClick:function(){return a(!1)}})),o.a.createElement("section",{className:"modal-card-body"},o.a.createElement("div",{className:"is-flex is-horizontal-center"},o.a.createElement("figure",{className:"image is-128x128"},o.a.createElement("a",{href:"https://github.com/".concat(t[0].repoOwnerName),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"is-rounded avatar-home",alt:t[0].repoOwnerName,src:"https://avatars.githubusercontent.com/".concat(t[0].repoOwnerName)})))),o.a.createElement("div",{className:"has-text-centered"},o.a.createElement("p",{className:"is-5 subtitle has-text-centered has-text-primary",style:{marginBottom:"0"}},t[0].repoOwner),o.a.createElement("a",{href:"https://github.com/".concat(t[0].repoOwnerName),target:"_blank",rel:"noopener noreferrer"},"@",t[0].repoOwnerName)),o.a.createElement("hr",{className:"navbar-divider"}),o.a.createElement("p",{className:"subtitle is-4 has-text-primary"},"Resources available by ",t[0].repoOwner),t.map((function(e){return o.a.createElement("article",{className:"message is-info",key:e.id},o.a.createElement("div",{className:"message-header"},o.a.createElement("p",null,e.repoName),o.a.createElement("div",{id:"categories"},e.category.map((function(e,t){return o.a.createElement("span",{"data-tip":e,key:t,className:"category ".concat(e),style:{cursor:"default"}})})))),o.a.createElement("article",{className:"message is-info"},o.a.createElement("div",{className:"message-body"},e.description,o.a.createElement("br",null),e.id!==r&&o.a.createElement("div",{className:"is-flex is-horizontal-center",style:{marginTop:"10px"}},o.a.createElement("a",{className:"button button box-shadow-lift button-special is-rounded",href:"/resources/".concat(e.id)},"View")))))}))),o.a.createElement("footer",{className:"modal-card-foot"},o.a.createElement("button",{className:"button",onClick:function(){return a(!1)}},"Close"))))})}}]);
//# sourceMappingURL=8.ef432e4c.chunk.js.map