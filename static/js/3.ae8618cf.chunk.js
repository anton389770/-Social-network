(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{249:function(e,t,s){e.exports={page_active:"Paginator_page_active__30TcF",page:"Paginator_page__2ErM0"}},250:function(e,t,s){e.exports={foto:"Users_foto__P0VL2",buttonBlock:"Users_buttonBlock__9zS9U",fotoBlock:"Users_fotoBlock__3lKlr",userInfo:"Users_userInfo___i57a",name:"Users_name__2PhVV",status:"Users_status__1sSwo",country:"Users_country__1EPiv",city:"Users_city__2w3Nn",userBlock:"Users_userBlock__r3xb4"}},253:function(e,t,s){"use strict";s.r(t);var n=s(4),o=s(5),r=s(9),a=s(10),i=s(18),c=s(0),l=s.n(c),u=s(13),p=s(249),b=s.n(p),j=s(1),f=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);var o=Math.ceil(t/e.numberOfPages),r=Object(c.useState)(2),a=Object(u.a)(r,2),i=a[0],l=a[1],p=(i-1)*e.numberOfPages+1,f=i*e.numberOfPages;return Object(j.jsxs)("div",{children:[i>1&&Object(j.jsx)("button",{onClick:function(){return l(i-1)},children:"left"}),s.filter((function(e){return e>=p&&e<=f})).map((function(t){return Object(j.jsx)("span",{className:e.currentPage===t?b.a.page_active:b.a.page,onClick:function(){e.onPageChanget(t)},children:t})})),i<o&&Object(j.jsx)("button",{onClick:function(){return l(i+1)},children:"right"})]})},g=s(57),h=s(250),d=s.n(h),O=s(102),_=s(15),m=["u"],x=function(e){var t=e.u,s=Object(g.a)(e,m);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:d.a.userBlock,children:[Object(j.jsxs)("div",{className:d.a.fotoBlock,children:[Object(j.jsx)("div",{className:d.a.foto,children:Object(j.jsx)(_.b,{to:"/profile/".concat(t.id),children:Object(j.jsx)("img",{src:t.photos.small?t.photos.small:O.a,alt:""})})}),Object(j.jsx)("div",{className:d.a.buttonBlock,children:t.followed?Object(j.jsx)("button",{disabled:s.isBtnDisablet.some((function(e){return e===t.id})),onClick:function(){s.onFollow(t.id)},children:"follow"}):Object(j.jsx)("button",{disabled:s.isBtnDisablet.some((function(e){return e===t.id})),onClick:function(){s.follow(t.id)},children:"onfollow"})})]}),Object(j.jsxs)("div",{className:d.a.userInfo,children:[Object(j.jsx)("div",{className:d.a.name,children:t.name}),Object(j.jsx)("div",{className:d.a.status,children:t.status}),Object(j.jsxs)("div",{className:d.a.country,children:["u.country",","]}),Object(j.jsx)("div",{className:d.a.city,children:"u.city"})]})]})})},v=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{totalCount:e.totalCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanget:e.onPageChanget,numberOfPages:"10"}),e.users.map((function(t){return Object(j.jsx)(x,{u:t,isBtnDisablet:e.isBtnDisablet,onFollow:e.onFollow,follow:e.follow},t.id)}))]})},P=s(30),w=s(104),B=s(28),C=function(e){return e.users.users},k=function(e){return e.users.totalCount},U=function(e){return e.users.pageSize},y=function(e){return e.users.currentPage},D=function(e){return e.users.isLoading},S=function(e){return e.users.isBtnDisablet},N=function(e){Object(r.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(n.a)(this,s);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanget=function(t){e.props.setUsers(t,e.props.pageSize)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isLoading?Object(j.jsx)(P.a,{}):null,Object(j.jsx)(v,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanget:this.onPageChanget,follow:this.props.follow,onFollow:this.props.onFollow,toggelUsersBtnDisablet:this.props.toggelUsersBtnDisablet,isBtnDisablet:this.props.isBtnDisablet})]})}}]),s}(l.a.Component);t.default=Object(B.c)(Object(i.b)((function(e){return{users:C(e),totalCount:k(e),pageSize:U(e),currentPage:y(e),isLoading:D(e),isBtnDisablet:S(e)}}),{follow:w.b,onFollow:w.c,toggelUsersBtnDisablet:w.e,setUsers:w.d}))(N)}}]);
//# sourceMappingURL=3.ae8618cf.chunk.js.map