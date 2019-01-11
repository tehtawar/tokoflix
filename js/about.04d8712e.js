(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"043a":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.isLoading?a("div",[a("loading")],1):a("div",[a("div",{staticClass:"header"},[a("div",{staticClass:"top-container flex-row"},[a("div",{staticClass:"poster"},[a("img",{attrs:{src:t.$store.state.imgBaseUrl+t.movieData.poster_path}})]),a("div",{staticClass:"info"},[a("div",{attrs:{id:"title"}},[a("strong",[t._v(t._s(t.movieData.original_title))]),a("span",[t._v(" ("+t._s(new Date(t.movieData.release_date).getFullYear())+")")])]),a("div",{staticClass:"actions"},[a("div",{staticClass:"rating"},[a("i",{staticClass:"material-icons"},[t._v("star")]),a("span",[t._v(t._s(t.movieData.vote_average))])]),a("div",[a("i",{staticClass:"material-icons"},[t._v("access_time")]),t.runtimeText.hour>=1?a("span",[t._v("\n              "+t._s(t.runtimeText.hour)+" jam "+t._s(t.runtimeText.minutes)+" menit\n            ")]):a("span",[t._v("\n              "+t._s(t.runtimeText.minutes)+" menit\n            ")])]),t.$store.state.boughtMovies.indexOf(t.movieData.id)<0?a("div",{staticClass:"action-buttons"},[a("div",{staticClass:"button primary large",on:{click:function(i){t.showConfirm=!0}}},[t._v("\n              Beli Rp"+t._s(t.moviePrice(t.movieData.vote_average).toLocaleString("id-ID"))+"\n            ")])]):a("div",{staticClass:"bought"},[a("i",{staticClass:"material-icons"},[t._v("check_circle")]),a("span",[t._v(" Anda memiliki film ini")])])]),a("div",{staticClass:"overview"},[a("span",[t._v("Ringkasan")]),a("p",[t._v(t._s(t.movieData.overview))])])])])]),a("div",{staticClass:"top-container"},[t._m(0),a("div",{staticClass:"cast-list"},t._l(t.cast.slice(0,t.castCount),function(i){return a("div",{key:i.id,staticClass:"cast-card"},[a("div",{staticClass:"photo"},[i.profile_path?a("img",{attrs:{src:t.$store.state.castBaseUrl+i.profile_path}}):a("i",{staticClass:"material-icons"},[t._v("person")])]),a("p",{staticClass:"name"},[t._v(t._s(i.name))]),a("p",{staticClass:"character"},[t._v(t._s(i.character))])])}),0),a("div",[t.cast.length>6?a("div",{staticClass:"button",on:{click:function(i){t.toggleCastCount()}}},[t._v("\n        "+t._s(6==t.castCount?"Tampilkan selengkapnya":"Tampilkan lebih sedikit")+"\n      ")]):t._e()]),t._m(1),a("div",{staticClass:"recomm-list"},t._l(t.recommendations,function(i){return a("div",{key:i.id,staticClass:"recomm-card",on:{click:function(a){t.$router.push({path:"/"+i.id+"-"+i.original_title.replace(/\W+/g,"-")})}}},[a("div",{staticClass:"backdrop"},[i.backdrop_path?a("img",{attrs:{src:t.$store.state.backdropBaseUrl+i.backdrop_path}}):a("i",{staticClass:"material-icons"},[t._v("broken_image")])]),a("div",{staticClass:"flex-row recomtext"},[a("div",{staticClass:"recomm-title"},[t._v("\n            "+t._s(i.original_title)+"\n          ")]),a("div",{staticClass:"verticenter"},[a("i",{staticClass:"material-icons"},[t._v("star")]),a("span",[t._v(t._s(i.vote_average))])])])])}),0),t._m(2),a("div",{staticClass:"recomm-list"},t._l(t.similar,function(i){return a("div",{key:i.id,staticClass:"recomm-card",on:{click:function(a){t.$router.push("/"+i.id+"-"+i.original_title.replace(/\W+/g,"-"))}}},[a("div",{staticClass:"backdrop"},[a("img",{attrs:{src:t.$store.state.backdropBaseUrl+i.backdrop_path}})]),a("div",{staticClass:"flex-row recomtext"},[a("div",{staticClass:"recomm-title"},[t._v("\n            "+t._s(i.original_title)+"\n          ")]),a("div",{staticClass:"verticenter"},[a("i",{staticClass:"material-icons"},[t._v("star")]),a("span",[t._v(t._s(i.vote_average))])])])])}),0)]),t.showConfirm?a("modal-buy",{attrs:{"movie-data":t.movieData},on:{close:function(i){t.showConfirm=!1}}}):t._e()],1)},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Pemeran")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Rekomendasi")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"section-title"},[a("h2",[t._v("Serupa")])])}],n=(a("28a5"),a("96cf"),a("3b8d")),r=a("cebc"),o=a("bc3a"),c=a.n(o),l=a("2f62"),u=a("454a"),v=a("3a5e"),m=a("1aea"),d={name:"",components:{Loading:v["a"],ModalBuy:m["a"]},data:function(){return{movieData:{},castCount:6,cast:[],recommendations:[],similar:[],isLoading:!0,showConfirm:!1}},methods:Object(r["a"])({},Object(l["b"])(["buyMovie"]),{getMovieDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.$route.params.movieurl.split("-")[0],t.next=3,c()({baseURL:this.$store.state.baseUrl,url:"/movie/".concat(i),params:{api_key:this.$store.state.token,append_to_response:"credits,similar,recommendations"}});case 3:a=t.sent,this.movieData=a.data,this.cast=a.data.credits.cast||[],this.recommendations=a.data.recommendations.results||[],this.similar=a.data.similar.results||[],this.isLoading=!1;case 9:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),toggleCastCount:function(){6===this.castCount?this.castCount=this.cast.length:this.castCount=6}}),computed:{runtimeText:function(){var t={hour:0,minutes:0};return this.movieData.runtime&&(t.hour=Math.floor(this.movieData.runtime/60),t.minutes=this.movieData.runtime-60*t.hour),t}},watch:{$route:function(t,i){this.isLoading=!0,window.scrollTo(0,0),this.getMovieDetail()}},created:function(){this.moviePrice=u["a"].moviePrice,this.getMovieDetail()}},h=d,_=(a("8af9"),a("2877")),p=Object(_["a"])(h,e,s,!1,null,"8ec69c0c",null);p.options.__file="MovieDetail.vue";i["default"]=p.exports},"28a5":function(t,i,a){"use strict";var e=a("aae3"),s=a("cb7c"),n=a("ebd6"),r=a("0390"),o=a("9def"),c=a("5f1b"),l=a("520a"),u=Math.min,v=[].push,m="split",d="length",h="lastIndex",_=!!function(){try{return new RegExp("x","y")}catch(t){}}();a("214f")("split",2,function(t,i,a,p){var f;return f="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[d]||2!="ab"[m](/(?:ab)*/)[d]||4!="."[m](/(.?)(.?)/)[d]||"."[m](/()()/)[d]>1||""[m](/.?/)[d]?function(t,i){var s=String(this);if(void 0===t&&0===i)return[];if(!e(t))return a.call(s,t,i);var n,r,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,_=void 0===i?4294967295:i>>>0,p=new RegExp(t.source,u+"g");while(n=l.call(p,s)){if(r=p[h],r>m&&(c.push(s.slice(m,n.index)),n[d]>1&&n.index<s[d]&&v.apply(c,n.slice(1)),o=n[0][d],m=r,c[d]>=_))break;p[h]===n.index&&p[h]++}return m===s[d]?!o&&p.test("")||c.push(""):c.push(s.slice(m)),c[d]>_?c.slice(0,_):c}:"0"[m](void 0,0)[d]?function(t,i){return void 0===t&&0===i?[]:a.call(this,t,i)}:a,[function(a,e){var s=t(this),n=void 0==a?void 0:a[i];return void 0!==n?n.call(a,s,e):f.call(String(s),a,e)},function(t,i){var e=p(f,t,this,i,f!==a);if(e.done)return e.value;var l=s(t),v=String(this),m=n(l,RegExp),d=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(_?"y":"g"),g=new m(_?l:"^(?:"+l.source+")",h),C=void 0===i?4294967295:i>>>0;if(0===C)return[];if(0===v.length)return null===c(g,v)?[v]:[];var b=0,k=0,w=[];while(k<v.length){g.lastIndex=_?k:0;var x,D=c(g,_?v:v.slice(k));if(null===D||(x=u(o(g.lastIndex+(_?0:k)),v.length))===b)k=r(v,k,d);else{if(w.push(v.slice(b,k)),w.length===C)return w;for(var y=1;y<=D.length-1;y++)if(w.push(D[y]),w.length===C)return w;k=b=x}}return w.push(v.slice(b)),w}]})},"8af9":function(t,i,a){"use strict";var e=a("a5ee"),s=a.n(e);s.a},a5ee:function(t,i,a){},aae3:function(t,i,a){var e=a("d3f4"),s=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var i;return e(t)&&(void 0!==(i=t[n])?!!i:"RegExp"==s(t))}}}]);
//# sourceMappingURL=about.04d8712e.js.map