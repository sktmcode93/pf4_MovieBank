(this.webpackJsonppf4_movie_bank=this.webpackJsonppf4_movie_bank||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(5),r=a.n(i),c=(a(14),a(1)),o=a.n(c),l=a(3),u=a(6),d=a(7),p=a(9),m=a(8),v=(a(16),a(17),a(0)),h=function(){return Object(v.jsx)("div",{className:"loading",children:Object(v.jsx)("h1",{children:"\uc790\ub8cc\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4..."})})},j=(a(19),function(e){return Object(v.jsx)("div",{className:"mb-header",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"mb-header-title",children:"MovieBank"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{onClick:e.selectList,children:"\ucd5c\uc2e0\uc21c"}),Object(v.jsx)("li",{onClick:e.selectList,children:"\ud3c9\uc810\uc21c"}),Object(v.jsx)("li",{onClick:e.selectList,children:"\ub2e4\uc6b4\ub85c\ub4dc\uc21c"})]})]})})}),x=function(e){return e.map((function(e,t){return Object(v.jsx)("li",{children:e},t)}))},b=function(e){return Object(v.jsxs)("ul",{children:[" Genres : ",x(e.genres)]})},f=(a(20),function(e,t){return e.map((function(e){return g(e,t)}))}),g=function(e,t){return Object(v.jsxs)("div",{className:"mb-movie",children:[Object(v.jsxs)("div",{className:"mb-movie-poster",children:[Object(v.jsx)("img",{src:e.medium_cover_image,alt:e.title,onClick:t}),Object(v.jsx)("div",{className:"mb-movie-id",children:e.id})]}),Object(v.jsxs)("div",{className:"mb-movie-info",children:[Object(v.jsx)("h2",{children:e.title_long}),Object(v.jsxs)("span",{children:["Rating : ",e.rating]}),Object(v.jsx)("p",{children:e.synopsis}),Object(v.jsx)(b,{genres:e.genres})]})]},e.id)},O=function(e){return Object(v.jsxs)("div",{className:"moviebox",children:[Object(v.jsx)(j,{selectList:e.selectList}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"movie-main",children:f(e.movieList,e.selectMovie)})})]})},k=function(){document.querySelector(".movie-detail").style.display="none"},y=function(e){var t=e.display;return Object(v.jsx)("div",{className:"movie-detail",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("input",{type:"button",className:"movie-detail-cancel",value:"x",onClick:k}),Object(v.jsxs)("div",{className:"movie-detail-box",children:[Object(v.jsxs)("figure",{className:"movie-detail-poster",children:[Object(v.jsx)("img",{src:t.medium_cover_image,alt:t.title}),Object(v.jsx)("figcaption",{className:"md-title",children:t.title_long})]}),Object(v.jsxs)("div",{className:"movie-detail-info",children:[Object(v.jsxs)("span",{className:"md-info-rating",children:["Rating : ",t.rating]}),Object(v.jsx)("p",{className:"md-info-description",children:t.description_full}),Object(v.jsx)(b,{genres:t.genres})]})]})]})})},L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={page:1,paragraph:1},e.renderMovies=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=document.querySelector(".App")).classList.add("while-loading"),t.next=4,e.callApi("https://yts.mx/api/v2/list_movies.json?");case 4:n=t.sent,e.setState({movieList:n.movies}),e.setPage(n),a.classList.remove("while-loading"),e.changeActive(1);case 9:case"end":return t.stop()}}),t)}))),e.setPage=function(t){var a=t.movie_count,n=t.limit,s=Math.ceil(a/n);e.setState({lastPage:s})},e.callApi=function(t){return e.setState({url:t}),fetch(t).then((function(e){return e.json()})).then((function(e){return e.data}))},e.selectMovie=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=document.querySelector(".App")).classList.add("while-loading"),s=a.target.nextSibling.innerText,t.next=5,e.callApi("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(s));case 5:i=t.sent,e.setState({display:i.movie}),document.querySelector(".movie-detail").style.display="block",n.classList.remove("while-loading");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectList=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=document.querySelector(".App")).classList.add("while-loading"),"\ucd5c\uc2e0\uc21c"!==(s=a.target.innerText)){t.next=9;break}return t.next=6,e.callApi("https://yts.mx/api/v2/list_movies.json?sort_by=year");case 6:i=t.sent,t.next=18;break;case 9:if("\ud3c9\uc810\uc21c"!==s){t.next=15;break}return t.next=12,e.callApi("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 12:i=t.sent,t.next=18;break;case 15:return t.next=17,e.callApi("https://yts.mx/api/v2/list_movies.json?sort_by=downlad_count");case 17:i=t.sent;case 18:e.setState({movieList:i.movies}),n.classList.remove("while-loading");case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectPage=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state.page,s=a.target.innerText,n!==Number(s)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.calculPage(n,s);case 6:e.renderPage();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.calculPage=function(){var t=Object(l.a)(o.a.mark((function t(a,n){var s,i,r,c,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.state.paragraph,i=Math.floor((e.state.lastPage-1)/10)+1,"<"!==n){t.next=11;break}if(!(a>1)){t.next=6;break}return t.next=6,e.setState({page:a-1});case 6:if(Math.floor((a-1)/10)===Math.floor((e.state.page-1)/10)){t.next=9;break}return t.next=9,e.setState({paragraph:e.state.paragraph-1});case 9:t.next=38;break;case 11:if(">"!==n){t.next=20;break}if(!(a<e.state.lastPage)){t.next=15;break}return t.next=15,e.setState({page:a+1});case 15:if(Math.floor((a-1)/10)===Math.floor((e.state.page-1)/10)){t.next=18;break}return t.next=18,e.setState({paragraph:e.state.paragraph+1});case 18:t.next=38;break;case 20:if("<<"!==n){t.next=28;break}if(!(s>1)){t.next=26;break}return c=10*((r=s-1)-1)+1,t.next=26,e.setState({paragraph:r,page:c});case 26:t.next=38;break;case 28:if(">>"!==n){t.next=36;break}if(!(s<i)){t.next=34;break}return u=10*((l=s+1)-1)+1,t.next=34,e.setState({paragraph:l,page:u});case 34:t.next=38;break;case 36:return t.next=38,e.setState({page:Number(n)});case 38:e.changeActive(e.state.page);case 39:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.renderPage=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.state.page,(a=document.querySelector(".App")).classList.add("while-loading"),t.next=5,e.callApi("https://yts.mx/api/v2/list_movies.json?sort_by=downlad_count").movies;case 5:n=t.sent,e.setState({movieList:n}),console.log(e.state.movieList),a.classList.remove("while-loading");case 9:case"end":return t.stop()}}),t)}))),e.changeActive=function(e){document.querySelectorAll(".pages li").forEach((function(t){t.classList.remove("active"),t.innerText==e&&t.classList.add("active")}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.renderMovies()}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[this.state.movieList?Object(v.jsx)(O,{movieList:this.state.movieList,selectMovie:this.selectMovie,selectList:this.selectList,paragraph:this.state.paragraph,selectPage:this.selectPage}):Object(v.jsx)(h,{}),this.state.display?Object(v.jsx)(y,{display:this.state.display}):""]})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.268b4b42.chunk.js.map