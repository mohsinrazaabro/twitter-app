(function(e){function t(t){for(var o,r,s=t[0],u=t[1],l=t[2],i=0,b=[];i<s.length;i++)r=s[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1e50f5bf"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"3bf30614"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===o||i===c))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],i=l.getAttribute("data-href");if(i===o||i===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var b=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",b.name="ChunkLoadError",b.type=o,b.request=r,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1453:function(e,t,n){"use strict";n("cbdb")},"209b":function(e,t,n){"use strict";n("ac66")},"211d":function(e,t,n){},"3eee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app"},c=Object(o["g"])("div",{class:"hero"},[Object(o["g"])("br"),Object(o["g"])("br"),Object(o["g"])("br"),Object(o["g"])("h1",{class:"title"},"Welcome to Twitter Clone")],-1),a={key:0,id:"nav"},s=Object(o["f"])("Home"),u=Object(o["f"])("About"),l=Object(o["f"])("Find Firends "),i=Object(o["f"])(" My Profile "),b=Object(o["g"])("br",null,null,-1),d={class:"container"};function g(e,t,n,g,f,p){var O=Object(o["w"])("router-link"),h=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",r,[c,null!=f.token?(Object(o["p"])(),Object(o["d"])("div",a,[Object(o["g"])(O,{to:"/"},{default:Object(o["C"])((function(){return[s]})),_:1}),Object(o["g"])(O,{to:"/about"},{default:Object(o["C"])((function(){return[u]})),_:1}),Object(o["g"])(O,{to:"/findusers"},{default:Object(o["C"])((function(){return[l]})),_:1}),Object(o["g"])(O,{to:"/myprofile"},{default:Object(o["C"])((function(){return[i]})),_:1})])):Object(o["e"])("",!0),b,Object(o["g"])("div",d,[Object(o["g"])(h)])])}var f={data:function(){return{token:null}},created:function(){this.token=localStorage.getItem("token")}};n("9cdc");f.render=g;var p=f,O=(n("d3b7"),n("6c02")),h={class:"signup"},j=Object(o["g"])("h1",{class:"subtitle"},"Welcome to Sign up Page",-1),m=Object(o["g"])("br",null,null,-1),w=Object(o["g"])("br",null,null,-1),v=Object(o["g"])("br",null,null,-1),y=Object(o["g"])("br",null,null,-1),k=Object(o["g"])("br",null,null,-1),P=Object(o["g"])("br",null,null,-1),C=Object(o["g"])("br",null,null,-1),T=Object(o["g"])("p",null,"Already have an account?",-1);function S(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",h,[j,Object(o["g"])("div",null,[Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),placeholder:"Username.."},null,512),[[o["A"],c.username]]),m,w,Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),type:"password",placeholder:"Password..."},null,512),[[o["A"],c.password]]),v,y,Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.confirmpassword=e}),type:"password",placeholder:"Confirm Password..."},null,512),[[o["A"],c.confirmpassword]]),k,P,Object(o["g"])("input",{class:"button is-primary is-medium",onClick:t[4]||(t[4]=function(e){return a.signup()}),type:"submit",value:"sign up"})]),C,T,Object(o["g"])("button",{class:"button is-link",onClick:t[5]||(t[5]=function(e){return a.goToLogin()})},"Login")])}n("ac1f"),n("5319");var A=n("bc3a"),x=n.n(A),z={name:"Sign Up",data:function(){return{username:"",password:"",confirmpassword:""}},methods:{signup:function(){var e=this;return this.username.length<5?alert("username too short!"):this.password.length<5?alert("password too short!"):void(this.password===this.confirmpassword?x.a.post("/users/create",{name:this.username,password:this.password}).then((function(t){alert(t.data),e.$router.replace("/login")})).catch((function(e){console.log(e)})):alert("Password didnt match"))},goToLogin:function(){this.$router.replace("/login")}}};z.render=S;var U=z,_=(n("b0c0"),Object(o["g"])("h1",{class:"title"},"Welcome to Homepage",-1)),$={class:"title is-red"},I=Object(o["g"])("br",null,null,-1),E=Object(o["g"])("br",null,null,-1),L={class:"card"},B={class:"title is-5"},M={class:"subtitle is-6"},F={class:"title is-6"},N=Object(o["g"])("br",null,null,-1),D=Object(o["g"])("br",null,null,-1),H=Object(o["g"])("br",null,null,-1),R={class:"title is-size-6"};function V(e,t,n,r,c,a){var s=Object(o["w"])("PostTweet");return Object(o["p"])(),Object(o["d"])("div",null,[_,Object(o["g"])("h2",$,"@"+Object(o["y"])(c.name),1),1==c.showPostTweet?(Object(o["p"])(),Object(o["d"])(s,{key:0,class:"button",onChangeShowTweet:t[1]||(t[1]=function(e){return c.showPostTweet=!1}),showPostTweet:c.showPostTweet},null,8,["showPostTweet"])):Object(o["e"])("",!0),0==c.showPostTweet?(Object(o["p"])(),Object(o["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.showPostTweet=!0})},"Create tweet")):Object(o["e"])("",!0),I,E,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("div",L,[Object(o["g"])("p",B,Object(o["y"])(e.tweet),1),Object(o["g"])("p",M,"@"+Object(o["y"])(e.username),1),Object(o["g"])("time",F,"Time: "+Object(o["y"])(e.time),1)]),N,D,H])])})),128)),Object(o["g"])("p",R,"current page: "+Object(o["y"])(c.page/5+1),1),Object(o["g"])("button",{class:"button is-link",onClick:t[3]||(t[3]=function(e){return a.nextPage()})}," Next Page "),Object(o["g"])("button",{class:"button is-danger",onClick:t[4]||(t[4]=function(e){return a.logOut()})},"Log Out")])}var W=Object(o["E"])("data-v-7382c92d");Object(o["s"])("data-v-7382c92d");var q=Object(o["g"])("br",null,null,-1);Object(o["q"])();var J=W((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.tweet=e}),placeholder:"What's on your mind?"},null,512),[[o["A"],c.tweet]]),q,Object(o["g"])("button",{onClick:t[2]||(t[2]=function(e){return a.postTweet()})},"Post")])})),K={name:"Post Tweet",data:function(){return{tweet:""}},methods:{postTweet:function(){var e=localStorage.getItem("token");return e?x.a.defaults.headers.common["Authorization"]="Bearer "+e:this.$router.push("/login"),this.tweet.length>160?alert("max  characters: 160"):this.tweet.length<1?alert("tweet too short!"):(x.a.post("/tweets",{tweet:this.tweet}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)})),void this.$emit("change-show-tweet"))}}};n("9173");K.render=J,K.__scopeId="data-v-7382c92d";var G=K,Q={name:"Home",data:function(){return{tweets:[],page:0,showPostTweet:!1,name:null}},components:{PostTweet:G},created:function(){var e=this,t=localStorage.getItem("token");this.name=localStorage.getItem("name"),t?x.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),x.a.get("/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfMany,console.log(t.data),"error occured at verification"==t.data.message&&e.$router.replace("/login")})).catch((function(e){console.log(e)}))},methods:{logOut:function(){localStorage.removeItem("token"),x.a.defaults.headers.common["Authorization"]="Bearer null",this.$router.go("/login")},nextPage:function(){var e=this;this.page+=5,x.a.get("/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("dfd4");Q.render=V;var X=Q,Y=Object(o["g"])("h1",null,"Find Users",-1),Z=Object(o["g"])("br",null,null,-1),ee=Object(o["g"])("br",null,null,-1);function te(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",null,[Y,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.users,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("button",{class:"button",onClick:function(t){return a.goToUser(e.user)}},Object(o["y"])(e.user),9,["onClick"]),0==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:0,class:"button is-primary",onClick:function(t){return a.follow(e.user)}},"Follow",8,["onClick"])):Object(o["e"])("",!0),1==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:1,class:"button is-danger",onClick:function(t){return a.unfollow(e.user)}},"UnFollow",8,["onClick"])):Object(o["e"])("",!0),Z,ee])])})),128))])}n("96cf");var ne=n("1da1"),oe={name:"Find Users",data:function(){return{users:[]}},created:function(){var e=this,t=localStorage.getItem("token");t?x.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),x.a.get("/users/findusers").then((function(t){e.users=t.data.newResponse,console.log(t.data)}))},methods:{follow:function(e){var t=this;x.a.post("/following/follow",{following:e}),x.a.get("/users/findusers").then((function(e){t.users=e.data.newResponse}))},unfollow:function(e){var t=this;return Object(ne["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:x.a.post("/following/unfollow",{following:e}),x.a.get("/users/findusers").then((function(e){t.users=e.data.newResponse}));case 2:case"end":return n.stop()}}),n)})))()},goToUser:function(e){this.$router.replace("/user/".concat(e))}}};n("1453");oe.render=te;var re=oe,ce={class:"card"},ae={class:"title is-size-5"},se={class:"subtitle is-size-5"},ue=Object(o["g"])("br",null,null,-1),le={class:"subtitle is-size-6"},ie=Object(o["g"])("br",null,null,-1),be=Object(o["g"])("br",null,null,-1);function de(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("h1",null,Object(o["y"])(c.user),1),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("div",ce,[Object(o["g"])("li",null,[Object(o["g"])("h3",ae,Object(o["y"])(e.tweet),1),Object(o["g"])("h5",se,"@"+Object(o["y"])(e.username),1),ue,Object(o["g"])("h5",le,Object(o["y"])(e.time),1),ie,be])])])})),128)),Object(o["g"])("button",{class:"button is-primary",onClick:t[1]||(t[1]=function(e){return a.nextPage()})},"Next Page"),Object(o["f"])(Object(o["y"])(c.page/5+1),1)])}n("99af");var ge={name:"User",data:function(){return{user:this.$route.params.user,tweets:[],page:0}},created:function(){var e=this,t=localStorage.getItem("token");t?x.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),x.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,x.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("209b");ge.render=de;var fe=ge,pe={class:"title is-size-5"},Oe=Object(o["g"])("h3",{class:"title is-size-5"},"My Profile",-1),he={class:"card"},je={class:"title is-size-5"},me={class:"subtitle is-size-5"},we=Object(o["g"])("br",null,null,-1),ve=Object(o["g"])("br",null,null,-1);function ye(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("h1",pe,Object(o["y"])(c.name),1),Oe,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("div",he,[Object(o["g"])("h3",je,"Tweet: "+Object(o["y"])(e.tweet),1),Object(o["g"])("h5",me,Object(o["y"])(e.time),1),we,ve])])])})),128)),Object(o["g"])("button",{class:"button is-link",onClick:t[1]||(t[1]=function(e){return a.nextPage()})},"next page"),Object(o["f"])(Object(o["y"])(c.page/5+1),1)])}var ke={name:"My Profile",data:function(){return{tweets:[],page:0,name:null}},created:function(){var e=this,t=localStorage.getItem("token");this.name=localStorage.getItem("name"),t?x.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),x.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,x.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("eb8b");ke.render=ye;var Pe=ke,Ce=[{path:"/user/:user",name:"User",component:fe},{path:"/myprofile",name:"My Profile",component:Pe},{path:"/signup",name:"Sign up",component:U},{path:"/findusers",name:"Find Users",component:re},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/",name:"Home",component:X}],Te=Object(O["a"])({history:Object(O["b"])("/"),routes:Ce}),Se=Te,Ae=n("5502"),xe=Object(Ae["a"])({state:{token:null},mutations:{},actions:{},modules:{}});Object(o["c"])(p).use(xe).use(Se).mount("#app")},"6b3b":function(e,t,n){},9173:function(e,t,n){"use strict";n("6b3b")},"9cdc":function(e,t,n){"use strict";n("c701")},ac66:function(e,t,n){},c701:function(e,t,n){},cbdb:function(e,t,n){},dfd4:function(e,t,n){"use strict";n("211d")},eb8b:function(e,t,n){"use strict";n("3eee")}});
//# sourceMappingURL=app.0b48d74a.js.map