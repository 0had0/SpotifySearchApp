(this.webpackJsonpwireframes=this.webpackJsonpwireframes||[]).push([[0],{53:function(e,t,a){e.exports=a(84)},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=a(7),l=a(98),s=a(100),u=a(101),m=a(102),f=Object(l.a)((function(e){return{Title:{padding:e.spacing(2,2)}}})),d=function(){var e=f();return r.a.createElement(s.a,{elevation:1,color:"default",position:"static"},r.a.createElement(u.a,null,r.a.createElement(m.a,{variant:"h5",className:e.Title},"Spotify Artist Search")))},p=a(103),g=Object(l.a)((function(e){return{root:{height:"100%",padding:e.spacing(2.5,.5)}}})),h=function(e){var t=e.render,a=g();return r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(p.a,{container:!0,justify:"center",alignItems:"flex-start",className:a.root},t()))},v=a(111),E=Object(l.a)((function(e){return{root:{minWidth:"300px",background:e.palette.background.default,boxShadow:"0px 0px 1px 1px rgba(0,0,0,0.28)",borderRadius:"5px",padding:e.spacing(.5,.5),display:"flex",flexDirection:"row",flexGrow:1}}})),b=function(e){var t=e.render,a=E();return r.a.createElement(p.a,{item:!0,xs:10,sm:4,className:a.root},t())},y=a(104),x=a(45),j=a.n(x),O=a(43),w=a.n(O),k=a(25),S=a.n(k),N="85831341d2ed4b4aba6ac3ac0fde81df",I="https://0had0.github.io/SpotifySearchApp/",T="hello123",C=function(e,t,a,n,r){return w.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:r(!0),S.a.get("https://api.spotify.com/v1/artists/".concat(e,"/albums"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log(e),a(e.data.items),r(!1),0===e.data.items.length&&n({message:"nothing found",severity:"info"})})).catch((function(e){console.log(e),r(!1),n(Object.assign({},e,{severity:"error"}))}));case 2:case"end":return o.stop()}}))},D=function(e,t,a,n,r){r(!0),S.a.get("https://api.spotify.com/v1/search?q="+e.split(" ").join("+")+"&type=artist",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log(e),a(e.data.artists.items),r(!1),0===e.data.artists.items.length&&n({message:"nothing found",severity:"info"})})).catch((function(e){console.log(e),r(!1),n(Object.assign({},e,{severity:"error"}))}))},W=Object(l.a)((function(e){return{root:{height:"100%",width:"100%",borderWidth:0,background:"transparent",padding:e.spacing(1,0),"&:focus":{outline:"none"},"&::placeholder":{fontSize:e.typography.fontSize,fontWeight:e.typography.fontWeightLight,fontFamily:e.typography.fontFamily}}}}));var A=function(e){var t=e.setPostion,a=e.token,o=e.setItems,c=e.setShow,l=e.setError,s=e.setIsLoading,u=W(),m=Object(n.useState)(""),f=Object(i.a)(m,2),d=f[0],p=f[1],g=function(){D(d,a,o,l,s),c(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:u.root,placeholder:"Search for Artists ...",value:d,onChange:function(e){""===e.target.value?(t("center"),p(""),o([])):(t("flex-start"),p(e.target.value),c(!0))},onKeyDown:function(e){"Enter"===e.key&&(console.log("Enter Pressed"),g())}}),r.a.createElement(y.a,{size:"small",onClick:g,disabled:""===d,children:r.a.createElement(j.a,{fontSize:"small"})}))},B=a(105),F=a(106),_=Object(l.a)((function(e){return{root:{minWidth:"300px",minHeight:"400px",margin:e.spacing(3,2),background:e.palette.background.default,boxShadow:"0px 0px 1px 1px rgba(0,0,0,0.28)",borderRadius:"5px"},Action:{minWidth:"300px",minHeight:"400px"}}}));var z=function(e){var t=e.render,a=e.open,n=e.href,o=_();return r.a.createElement(p.a,{item:!0,xs:6,sm:3,md:3,lg:2,className:o.root},r.a.createElement(B.a,null,r.a.createElement(F.a,{className:o.Action,onClick:a||function(){},href:n||""},t())))},G=a(107);var L=function(){return r.a.createElement(G.a,{href:"https://accounts.spotify.com/authorize?response_type=token&client_id="+N+"&redirect_uri="+I+"&state="+T+"&show_dialog=true",style:{flexGrow:1}},r.a.createElement(m.a,null,"Login\xa0",r.a.createElement("i",{className:"fa fa-spotify"})))},H=a(46),P=a.n(H),R=a(108),J=a(109),q=Object(l.a)((function(e){return{content:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}}));var K=function(e){var t=e.album,a=q(),n=t.images?t.images[1].url:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"img",alt:t.name,height:"285",src:n,title:t.name}),r.a.createElement(J.a,{className:a.content},r.a.createElement("div",null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"p"},t.name),r.a.createElement(m.a,{variant:"body2",component:"p"},t.total_tracks,"\xa0Tracks"),r.a.createElement(m.a,{variant:"body2",component:"p"},"Date:\xa0",t.release_date))))},U=a(110),$=Object(l.a)((function(e){return{root:{width:"100%",minHeight:"60vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}));var M=function(){var e=$(),t=r.a.useState(0),a=Object(i.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(){var e=setInterval((function(){o((function(e){return e>=100?0:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(U.a,{variant:"determinate",value:n}))},Q=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",flexGrow:1,width:"94vw",height:"100%",justifyContent:"flex-start"},TitleBar:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"center",backgroundColor:"transparent",color:"#000"},underTitle:{fontWeight:e.typography.fontWeightLight,padding:e.spacing(0,1.5)},items:{padding:e.spacing(3,1)},alert:{width:"100%",padding:e.spacing(2,3)}}}));var V=function(e){var t=e.user,a=e.exit,o=e.token,c=Q(),l=Object(n.useState)([]),u=Object(i.a)(l,2),f=u[0],d=u[1],g=Object(n.useState)(null),h=Object(i.a)(g,2),E=h[0],b=h[1],x=Object(n.useState)(!1),j=Object(i.a)(x,2),O=j[0],w=j[1];return Object(n.useEffect)((function(){C(t.id,o,d,b,w)}),[]),Object(n.useEffect)((function(){setTimeout((function(){return b(null)}),1e3)}),[E]),r.a.createElement("div",{className:c.root},r.a.createElement(s.a,{position:"static",className:c.TitleBar,elevation:0},r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(m.a,{variant:"h5",component:"h2"},t.name)),r.a.createElement(y.a,{onClick:a},r.a.createElement(P.a,null))),r.a.createElement(s.a,{position:"static",className:c.TitleBar,elevation:0},r.a.createElement(m.a,{variant:"body2",component:"p",className:c.underTitle},"Albums"),r.a.createElement(m.a,{variant:"body2",component:"p"},"(Tape on Album to Open it)")),r.a.createElement(p.a,{container:!0,justify:"center",alignItems:"flex-start",className:c.items},O?r.a.createElement(M,null):null===E?r.a.createElement(r.a.Fragment,null,f.map((function(e,t){return r.a.createElement(z,{key:t,href:e.external_urls.spotify,render:function(){return r.a.createElement(K,{album:e})}})}))):r.a.createElement("div",{className:c.alert},r.a.createElement(v.a,{severity:E.severity},E.message))))},X=a(112),Y=Object(l.a)((function(e){return{content:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}}));var Z=function(e){var t=e.artist,a=Y(),n=t.images[1]?t.images[1].url:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"img",alt:t.name,height:"285",src:n,title:t.name}),r.a.createElement(J.a,{className:a.content},r.a.createElement("div",null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"p"},t.name),r.a.createElement(m.a,{variant:"body2",component:"p"},t.followers.total,"\xa0followers")),r.a.createElement(X.a,{name:"pristine",value:null})))},ee=Object(l.a)((function(e){return{items:{padding:e.spacing(3,1)},alert:{width:"100%",padding:e.spacing(2,3)}}}));var te=function(e){var t=e.token,a=ee(),o=Object(n.useState)("center"),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)([]),m=Object(i.a)(u,2),f=m[0],d=m[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),E=h[0],y=h[1],x=Object(n.useState)(void 0),j=Object(i.a)(x,2),O=j[0],w=j[1],k=Object(n.useState)(null),S=Object(i.a)(k,2),N=S[0],I=S[1],T=Object(n.useState)(!1),C=Object(i.a)(T,2),D=C[0],W=C[1];return Object(n.useEffect)((function(){setTimeout((function(){return I(null)}),1e3)}),[N]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"center"===l?"40vh":0,transition:"margin-top .5s ease",display:"flex",flexDirection:"column",alignItems:"center"}},t?void 0===O?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{render:function(){return r.a.createElement(A,{setItems:d,setShow:y,setPostion:s,token:t,setError:I,setIsLoading:W})}}),D?r.a.createElement(M,null):null===N?r.a.createElement("div",{style:{width:"100%"}},E&&r.a.createElement(p.a,{container:!0,justify:"center",alignItems:"flex-start",className:a.items},f.map((function(e,t){return r.a.createElement(z,{open:function(){return w(e)},key:t,render:function(){return r.a.createElement(Z,{artist:e})}})})))):r.a.createElement("div",{className:a.alert},r.a.createElement(v.a,{severity:N.severity},N.message))):r.a.createElement(V,{user:O,token:t,exit:function(){w(void 0)}}):r.a.createElement(b,{render:function(){return r.a.createElement(L,null)}})))},ae=(a(81),a(47));a.n(ae).a.config();var ne=Object(l.a)((function(e){return{root:{margin:0,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",height:"100vh"}}})),re=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});var oe=function(){var e=ne(),t=Object(n.useState)(null),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2);return s[0],s[1],Object(n.useEffect)((function(){var e=re.access_token;e&&c(e)}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(d,null),r.a.createElement(h,{render:function(){return r.a.createElement(te,{token:o})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.cecd28c2.chunk.js.map