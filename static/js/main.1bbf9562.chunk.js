(this["webpackJsonpmemes-service"]=this["webpackJsonpmemes-service"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=a(34),s=a(157),l=a(167),d=a(89),u=a(174),m=a(21),j=a(29),b=a(19),p=a(5),h=a(163),O=a(39),v=a(162),f=a(164),g=a(85),x=a.n(g),y=a(180),w=a(90),k=a(161),E=a(4),F=Object(s.a)((function(e){return{title:Object(b.a)({marginLeft:"5%",color:e.palette.primary.light},e.breakpoints.down("sm"),{fontSize:"24px"}),menuButton:Object(b.a)({marginLeft:"auto",color:e.palette.primary.light,display:"none"},e.breakpoints.down("sm"),{display:"block"})}})),T=Object(p.a)({paper:{border:"1px solid #d3d4d5",width:"200px"}})((function(e){return Object(E.jsx)(w.a,Object(j.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),_=Object(p.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(y.a),C=function(){var e=F(),t=Object(n.useState)(null),a=Object(m.a)(t,2),o=a[0],r=a[1],i=["regular","hot","favorites","add_meme"].map((function(e){return Object(E.jsx)(_,{button:"true",component:c.b,to:"/".concat(e),children:Object(E.jsx)(k.a,{primary:e.toUpperCase().replace(/_/g," ")})},e)}));return Object(E.jsx)(v.a,{position:"sticky",children:Object(E.jsxs)(h.a,{className:e.toolBar,children:[Object(E.jsx)(O.a,{className:e.title,variant:"h4",children:"MEME'S SERVICE"}),Object(E.jsx)(f.a,{edge:"end",className:e.menuButton,"aria-label":"menu",onClick:function(e){r(e.currentTarget)},children:Object(E.jsx)(x.a,{fontSize:"large"})}),Object(E.jsx)(T,{id:"customized-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){r(null)},children:i})]})})},N=a(166),A=a(165),S=Object(s.a)((function(e){return{root:Object(b.a)({width:275,marginTop:64,marginLeft:"auto",marginRight:"auto",position:"sticky",top:128},e.breakpoints.down("sm"),{display:"none"}),wrap:{padding:"10%"},button:Object(b.a)({marginBottom:25},e.breakpoints.up("md"),{"&:last-child":{marginBottom:0}}),notActiveButton:{"&:hover":{background:e.palette.primary.dark,color:e.palette.text.main,borderColor:e.palette.primary.dark}},isActiveButton:{background:e.palette.primary.main,color:e.palette.text.main,borderColor:e.palette.primary.main,"&:hover":{background:e.palette.primary.main}}}}));function D(){var e=S(),t=Object(n.useState)("regular"),a=Object(m.a)(t,2),o=a[0],r=a[1],i=["regular","hot","favorites","add_meme"].map((function(t){return Object(E.jsx)(A.a,{name:t,onClick:function(){return function(e){r(e)}(t)},component:c.b,to:"/".concat(t),variant:"outlined",className:o===t?"".concat(e.button," ").concat(e.isActiveButton):"".concat(e.button," ").concat(e.notActiveButton),children:t.replace(/_/g," ")},t)}));return Object(E.jsx)(N.a,{className:e.root,style:{zIndex:"3000"},children:Object(E.jsx)(l.a,{container:!0,direction:"column",className:e.wrap,children:i})})}var I=a(12),B=a(15),L=a(30),M=a(172),z=a(160),R="ADD_UP_VOTE",W="ADD_DOWN_VOTE",V="CHANGE_FAVORITE",U="ADD_MEME",G=a(171),P=a(169),H=a(168),X=a(170),q=a(86),J=a.n(q),K=a(88),Q=a.n(K),Y=a(87),Z=a.n(Y),$=Object(s.a)({root:{maxWidth:560,marginBottom:"20px"},cardActions:{justifyContent:"space-evenly",marginTop:5,marginBottom:5},b:{fontSize:20,paddingLeft:10},favoriteIcon:{fontSize:30},isActiveFavoriteIcon:{color:"#FF2400"},notActiveFavoriteIcon:{color:"#00000042"}}),ee=function(e){var t=e.title,a=e.img,o=e.upvotes,r=e.downvotes,i=e.id,c=e.author,s=e.favorite,l=Object(L.b)(),d=$(),u=Object(n.useState)(s),j=Object(m.a)(u,2),b=j[0],p=j[1];return Object(E.jsxs)(N.a,{className:d.root,children:[Object(E.jsx)(H.a,{title:t,subheader:"by ".concat(c)}),Object(E.jsx)(P.a,{}),Object(E.jsx)(X.a,{component:"img",alt:t,image:a}),Object(E.jsxs)(G.a,{className:d.cardActions,children:[Object(E.jsxs)(A.a,{"aria-label":"add up vote",color:"primary",onClick:function(){return l(function(e){return{type:"ADD_UP_VOTE",payload:{upvotes:e.upvotes+1,id:e.id,type:e.type}}}({upvotes:o,id:i,type:"upvotes"}))},children:[Object(E.jsx)(J.a,{}),Object(E.jsx)("b",{className:d.b,children:o})]}),Object(E.jsx)(A.a,{"aria-label":"favorites",onClick:function(){var e;p(!s),l({type:"CHANGE_FAVORITE",payload:{favorite:!(e={favorite:s,id:i}).favorite,id:e.id}})},children:Object(E.jsx)(Z.a,{className:!1===b?"".concat(d.favoriteIcon," ").concat(d.notActiveFavoriteIcon):"".concat(d.favoriteIcon," ").concat(d.isActiveFavoriteIcon)})}),Object(E.jsxs)(A.a,{"aria-label":"add down vote",color:"secondary",onClick:function(){return l({type:"ADD_DOWN_VOTE",payload:{downvotes:(e={downvotes:r,id:i,type:"downvotes"}).downvotes+1,id:e.id,type:e.type}});var e},children:[Object(E.jsx)(Q.a,{}),Object(E.jsx)("b",{className:d.b,children:r})]})]})]})};function te(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var ae=function(e){var t=e.array;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(te,{}),Object(E.jsx)(z.a,{children:function(e){return e.map((function(e){return Object(E.jsx)(ee,Object(j.a)({},e),e.id)}))}(t)})]})},ne=a(74),oe=a(176),re=a(179),ie=a(175),ce=a(181),se=a(177),le=Object(s.a)((function(){return{root:{maxWidth:560,marginTop:8,display:"flex",flexDirection:"column"},form:{padding:15},textField:{marginBottom:20}}})),de={title:"",author:"",img:""},ue=function(){var e=Object(L.b)(),t=le(),a=Object(n.useState)(""),o=Object(m.a)(a,2),r=o[0],i=o[1],c=Object(ne.b)({defaultValues:de}),s=c.control,l=c.handleSubmit,d=c.reset,u=[{nameField:"Title*",id:"title",helperText:"Add a title to your meme"},{nameField:"Name*",id:"author",helperText:"Add your name"},{nameField:"Link*",id:"img",helperText:"Enter URL link to the image"}].map((function(e){var a=e.nameField,n=e.id,o=e.helperText;return Object(E.jsxs)(ie.a,{children:[Object(E.jsx)(ce.a,{htmlFor:n,children:a}),Object(E.jsx)(ne.a,{name:n,control:s,render:function(e){var a=e.field,r=a.onChange,i=a.value;return Object(E.jsx)(oe.a,{required:!0,fullWidth:!0,id:n,variant:"outlined",helperText:o,value:i,onChange:r,className:t.textField})}})]},n)}));function b(e){return Object(E.jsx)(se.a,Object(j.a)({elevation:6,variant:"filled"},e))}var p=function(e){"clickaway"!==e&&i("")};return Object(E.jsxs)(N.a,{className:t.root,children:[Object(E.jsx)(H.a,{title:"Add meme"}),Object(E.jsxs)("form",{onSubmit:l((function(t){var a,n=t.title,o=t.author,r=t.img;e({type:"ADD_MEME",payload:{title:(a={title:n,author:o,img:r}).title,author:a.author,upvotes:0,downvotes:0,favorite:!1,img:a.img}}),i("Meme has been added"),d()})),className:t.form,children:[u,Object(E.jsxs)(ie.a,{children:[Object(E.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:{marginBottom:20},children:"submit"}),Object(E.jsx)(A.a,{type:"reset",variant:"contained",fullWidth:!0,onClick:function(){return d()},children:"reset form"})]})]}),r?Object(E.jsx)(re.a,{open:!0,autoHideDuration:3e3,onClose:p,children:Object(E.jsx)(b,{onClose:p,severity:"success",children:r})}):null]})},me=Object(s.a)((function(e){return{root:Object(b.a)({width:"100%",maxWidth:560,paddingTop:20},e.breakpoints.down("sm"),{paddingTop:84})}})),je=function(){var e=me(),t=Object(L.c)((function(e){return e.memes.hot})),a=Object(L.c)((function(e){return e.memes.regular})),n=Object(L.c)((function(e){return[].concat(Object(I.a)(e.memes.hot),Object(I.a)(e.memes.regular)).filter((function(e){return e.favorite}))}));return Object(E.jsxs)(M.a,{className:e.root,children:[Object(E.jsx)(B.b,{path:"/",children:Object(E.jsx)(B.a,{to:"/regular"})}),Object(E.jsx)(B.b,{path:"/regular",render:function(){return Object(E.jsx)(ae,{array:a})}}),Object(E.jsx)(B.b,{path:"/hot",render:function(){return Object(E.jsx)(ae,{array:t})}}),Object(E.jsx)(B.b,{path:"/favorites",render:function(){return Object(E.jsx)(ae,{array:n})}}),Object(E.jsx)(B.b,{path:"/add_meme",render:function(){return Object(E.jsx)(ue,{})}})]})},be=a(173),pe=Object(s.a)((function(e){return{root:Object(b.a)({width:235,marginTop:32,marginLeft:"auto",marginRight:"auto",position:"sticky",top:434},e.breakpoints.down("sm"),{display:"none"}),header:{backgroundColor:"#ffd55b"}}}));function he(){var e=pe();return Object(E.jsxs)(N.a,{className:e.root,style:{zIndex:"3000"},children:[Object(E.jsx)(H.a,{title:"Welcome to Meme's service!",className:e.header}),Object(E.jsx)(be.a,{children:Object(E.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:"Links to amusing, interesting, or funny memes from the web! .png, .jpeg, .jpg, and .svg format submissions only, please!"})})]})}var Oe=Object(d.a)({palette:{primary:{light:"#F5F0E7",middle:"#C8E6C9",main:"#4CAF50",dark:"#388E3C"},secondary:{main:"#03A9F4"},text:{main:"#FFF"}},typography:{fontFamily:"'Lato', sans-serif",h4:{fontFamily:"Comic Sans MS"}}}),ve=Object(s.a)({root:{flexGrow:1,backgroundColor:Oe.palette.primary.light}});function fe(){var e=ve();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(c.a,{children:Object(E.jsx)(u.a,{theme:Oe,children:Object(E.jsxs)("div",{className:e.root,style:{minHeight:"100vh"},children:[Object(E.jsx)(C,{}),Object(E.jsx)("main",{children:Object(E.jsxs)(l.a,{container:!0,justify:"center",children:[Object(E.jsxs)(l.a,{item:!0,xs:12,md:3,children:[Object(E.jsx)(D,{}),Object(E.jsx)(he,{})]}),Object(E.jsx)(l.a,{item:!0,xs:12,md:8,lg:6,children:Object(E.jsx)(je,{})})]})})]})})})})}var ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))},xe=a(91),ye={hot:[{id:1,title:"hmmmmm",author:"Kate",upvotes:6,downvotes:0,favorite:!0,img:"https://www.timecamp.com/blog/wp-content/uploads/2018/02/work-memes-1.jpg"},{id:4,title:"recepta na problemy",author:"Brajanusz",upvotes:10,downvotes:3,favorite:!1,img:"https://lalameme.pl/upload/ogloszenie/464/img_1FM0l1NGWtfYLQ.jpg"},{id:6,title:"Grandma is a superhero",author:"effigyoma",upvotes:10,downvotes:3,favorite:!1,img:"https://i.kym-cdn.com/photos/images/newsfeed/002/107/882/713.jpg"}],regular:[{id:2,title:"Dafuq> WTF",author:"Ryba7",upvotes:1,downvotes:2,favorite:!1,img:"https://i.kym-cdn.com/news_feeds/icons/mobile/000/054/894/e1d.jpg"},{id:3,title:"SuPeRmArKeT gUyS aRe IdIoTs",author:"Memin-Sanchez",upvotes:3,downvotes:5,favorite:!1,img:"https://i.imgflip.com/5amwr6.jpg"},{id:5,title:"Love These Days",author:"MeggyNikirk",upvotes:5,downvotes:5,favorite:!1,img:"https://i.kym-cdn.com/photos/images/newsfeed/002/107/865/59a.jpg"}]},we=function(e,t,a){return e.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},Object(b.a)({},a,t.payload[a])):e}))};function ke(e,t,a){e.map((function(n,o){if("upvotes"===a.payload.type&&n.upvotes-n.downvotes>5||"downvotes"===a.payload.type&&n.upvotes-n.downvotes<=5){var r=e.splice(o,1);t.push(r[0])}return n}))}var Ee=Object(xe.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{memes:ye},t=arguments.length>1?arguments[1]:void 0,a=Object(I.a)(e.memes.hot),n=Object(I.a)(e.memes.regular);switch(t.type){case R:var o=we(a,t,"upvotes"),r=we(n,t,"upvotes");return ke(r,o,t),{memes:{hot:o,regular:r}};case W:var i=we(a,t,"downvotes"),c=we(n,t,"downvotes");return ke(i,c,t),{memes:{hot:i,regular:c}};case V:var s=we(a,t,"favorite"),l=we(n,t,"favorite");return{memes:{hot:s,regular:l}};case U:var d=[].concat(Object(I.a)(e.memes.hot),Object(I.a)(e.memes.regular)).length+1,u=Object(j.a)({id:d},t.payload),m=Object(I.a)(a),b=[].concat(Object(I.a)(n),[u]);return{memes:{hot:m,regular:b}};default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(L.a,{store:Ee,children:Object(E.jsx)(fe,{})})}),document.getElementById("root")),ge()}},[[119,1,2]]]);
//# sourceMappingURL=main.1bbf9562.chunk.js.map