(function(e){function t(t){for(var o,r,u=t[0],s=t[1],i=t[2],l=0,b=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1e50f5bf"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"3bf30614"}[e]+".css",c=s.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],l=i.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var b=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",b.name="ChunkLoadError",b.type=o,b.request=r,n[1](b)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1453:function(e,t,n){"use strict";n("cbdb")},"209b":function(e,t,n){"use strict";n("ac66")},"211d":function(e,t,n){},"3eee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app"},c=Object(o["g"])("div",{class:"hero"},[Object(o["g"])("br"),Object(o["g"])("br"),Object(o["g"])("br"),Object(o["g"])("h1",{class:"title"},"Welcome to Twitter Clone")],-1),a=Object(o["g"])("br",null,null,-1),u={class:"container"};function s(e,t,n,s,i,l){var b=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",r,[c,a,Object(o["g"])("div",u,[Object(o["g"])(b)])])}var i={};n("9cdc");i.render=s;var l=i,b=(n("d3b7"),n("6c02")),f={class:"signup"},d=Object(o["g"])("h1",{class:"subtitle"},"Welcome to Sign up Page",-1),g=Object(o["g"])("br",null,null,-1),O=Object(o["g"])("br",null,null,-1),j=Object(o["g"])("br",null,null,-1),p=Object(o["g"])("br",null,null,-1),h=Object(o["g"])("br",null,null,-1),m=Object(o["g"])("br",null,null,-1),w=Object(o["g"])("br",null,null,-1),v=Object(o["g"])("p",null,"Already have an account?",-1);function y(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",f,[d,Object(o["g"])("div",null,[Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),placeholder:"Username.."},null,512),[[o["A"],c.username]]),g,O,Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),type:"password",placeholder:"Password..."},null,512),[[o["A"],c.password]]),j,p,Object(o["D"])(Object(o["g"])("input",{class:"input is-size-3","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.confirmpassword=e}),type:"password",placeholder:"Confirm Password..."},null,512),[[o["A"],c.confirmpassword]]),h,m,Object(o["g"])("input",{class:"button is-primary is-medium",onClick:t[4]||(t[4]=function(e){return a.signup()}),type:"submit",value:"sign up"})]),w,v,Object(o["g"])("button",{class:"button is-link",onClick:t[5]||(t[5]=function(e){return a.goToLogin()})},"Login")])}n("ac1f"),n("5319");var k=n("bc3a"),C=n.n(k),P={name:"Sign Up",data:function(){return{username:"",password:"",confirmpassword:""}},methods:{signup:function(){var e=this;return this.username.length<5?alert("username too short!"):this.password.length<5?alert("password too short!"):void(this.password===this.confirmpassword?C.a.post("/users/create",{name:this.username,password:this.password}).then((function(t){alert(t.data),e.$router.replace("/login")})).catch((function(e){console.log(e)})):alert("Password didnt match"))},goToLogin:function(){this.$router.replace("/login")}}};P.render=y;var T=P,_=(n("b0c0"),{id:"nav"}),A=Object(o["f"])("Home"),S=Object(o["f"])("About"),x=Object(o["f"])("Find Firends "),z=Object(o["f"])(" My Profile "),U=Object(o["g"])("h1",{class:"title"},"Welcome to Homepage",-1),F={class:"title is-red"},M=Object(o["g"])("br",null,null,-1),$=Object(o["g"])("br",null,null,-1),E={class:"card"},I={class:"title is-5"},L={class:"subtitle is-6"},B={class:"title is-6"},H=Object(o["g"])("br",null,null,-1),N=Object(o["g"])("br",null,null,-1),D=Object(o["g"])("br",null,null,-1),R={class:"title is-size-6"};function V(e,t,n,r,c,a){var u=Object(o["w"])("router-link"),s=Object(o["w"])("PostTweet");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",_,[Object(o["g"])(u,{to:"/"},{default:Object(o["C"])((function(){return[A]})),_:1}),Object(o["g"])(u,{to:"/about"},{default:Object(o["C"])((function(){return[S]})),_:1}),Object(o["g"])(u,{to:"/findusers"},{default:Object(o["C"])((function(){return[x]})),_:1}),Object(o["g"])(u,{to:"/myprofile"},{default:Object(o["C"])((function(){return[z]})),_:1})]),U,Object(o["g"])("h2",F,"@"+Object(o["y"])(c.name),1),1==c.showPostTweet?(Object(o["p"])(),Object(o["d"])(s,{key:0,class:"button",onChangeShowTweet:t[1]||(t[1]=function(e){return c.showPostTweet=!1}),showPostTweet:c.showPostTweet},null,8,["showPostTweet"])):Object(o["e"])("",!0),0==c.showPostTweet?(Object(o["p"])(),Object(o["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.showPostTweet=!0})},"Create tweet")):Object(o["e"])("",!0),M,$,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("div",E,[Object(o["g"])("p",I,Object(o["y"])(e.tweet),1),Object(o["g"])("p",L,"@"+Object(o["y"])(e.username),1),Object(o["g"])("time",B,"Time: "+Object(o["y"])(e.time),1)]),H,N,D])])})),128)),Object(o["g"])("p",R,"current page: "+Object(o["y"])(c.page/5+1),1),Object(o["g"])("button",{class:"button is-link",onClick:t[3]||(t[3]=function(e){return a.nextPage()})}," Next Page "),Object(o["g"])("button",{class:"button is-danger",onClick:t[4]||(t[4]=function(e){return a.logOut()})},"Log Out")])}var W=Object(o["E"])("data-v-7382c92d");Object(o["s"])("data-v-7382c92d");var q=Object(o["g"])("br",null,null,-1);Object(o["q"])();var J=W((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.tweet=e}),placeholder:"What's on your mind?"},null,512),[[o["A"],c.tweet]]),q,Object(o["g"])("button",{onClick:t[2]||(t[2]=function(e){return a.postTweet()})},"Post")])})),K={name:"Post Tweet",data:function(){return{tweet:""}},methods:{postTweet:function(){var e=localStorage.getItem("token");return e?C.a.defaults.headers.common["Authorization"]="Bearer "+e:this.$router.push("/login"),this.tweet.length>160?alert("max  characters: 160"):this.tweet.length<1?alert("tweet too short!"):(C.a.post("/tweets",{tweet:this.tweet}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)})),void this.$emit("change-show-tweet"))}}};n("9173");K.render=J,K.__scopeId="data-v-7382c92d";var G=K,Q={name:"Home",data:function(){return{tweets:[],page:0,showPostTweet:!1,name:null}},components:{PostTweet:G},created:function(){var e=this,t=localStorage.getItem("token");this.name=localStorage.getItem("name"),t?C.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),C.a.get("/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfMany,console.log(t.data),"error occured at verification"==t.data.message&&e.$router.replace("/login")})).catch((function(e){console.log(e)}))},methods:{logOut:function(){localStorage.removeItem("token"),C.a.defaults.headers.common["Authorization"]="Bearer null",this.$router.go("/login")},nextPage:function(){var e=this;this.page+=5,C.a.get("/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("dfd4");Q.render=V;var X=Q,Y={id:"nav"},Z=Object(o["f"])("Home"),ee=Object(o["f"])("About"),te=Object(o["f"])("Find Firends "),ne=Object(o["f"])(" My Profile "),oe=Object(o["g"])("h1",null,"Find Users",-1),re=Object(o["g"])("br",null,null,-1),ce=Object(o["g"])("br",null,null,-1);function ae(e,t,n,r,c,a){var u=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",Y,[Object(o["g"])(u,{to:"/"},{default:Object(o["C"])((function(){return[Z]})),_:1}),Object(o["g"])(u,{to:"/about"},{default:Object(o["C"])((function(){return[ee]})),_:1}),Object(o["g"])(u,{to:"/findusers"},{default:Object(o["C"])((function(){return[te]})),_:1}),Object(o["g"])(u,{to:"/myprofile"},{default:Object(o["C"])((function(){return[ne]})),_:1})]),oe,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.users,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("button",{class:"button",onClick:function(t){return a.goToUser(e.user)}},Object(o["y"])(e.user),9,["onClick"]),0==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:0,class:"button is-primary",onClick:function(t){return a.follow(e.user)}},"Follow",8,["onClick"])):Object(o["e"])("",!0),1==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:1,class:"button is-danger",onClick:function(t){return a.unfollow(e.user)}},"UnFollow",8,["onClick"])):Object(o["e"])("",!0),re,ce])])})),128))])}n("96cf");var ue=n("1da1"),se={name:"Find Users",data:function(){return{users:[]}},created:function(){var e=this,t=localStorage.getItem("token");t?C.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),C.a.get("/users/findusers").then((function(t){e.users=t.data.newResponse,console.log(t.data)}))},methods:{follow:function(e){var t=this;C.a.post("/following/follow",{following:e}),C.a.get("/users/findusers").then((function(e){t.users=e.data.newResponse}))},unfollow:function(e){var t=this;return Object(ue["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:C.a.post("/following/unfollow",{following:e}),C.a.get("/users/findusers").then((function(e){t.users=e.data.newResponse}));case 2:case"end":return n.stop()}}),n)})))()},goToUser:function(e){this.$router.replace("/user/".concat(e))}}};n("1453");se.render=ae;var ie=se,le={id:"nav"},be=Object(o["f"])("Home"),fe=Object(o["f"])("About"),de=Object(o["f"])("Find Firends "),ge=Object(o["f"])(" My Profile "),Oe={class:"card"},je={class:"title is-size-5"},pe={class:"subtitle is-size-5"},he=Object(o["g"])("br",null,null,-1),me={class:"subtitle is-size-6"},we=Object(o["g"])("br",null,null,-1),ve=Object(o["g"])("br",null,null,-1);function ye(e,t,n,r,c,a){var u=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",le,[Object(o["g"])(u,{to:"/"},{default:Object(o["C"])((function(){return[be]})),_:1}),Object(o["g"])(u,{to:"/about"},{default:Object(o["C"])((function(){return[fe]})),_:1}),Object(o["g"])(u,{to:"/findusers"},{default:Object(o["C"])((function(){return[de]})),_:1}),Object(o["g"])(u,{to:"/myprofile"},{default:Object(o["C"])((function(){return[ge]})),_:1})]),Object(o["g"])("h1",null,Object(o["y"])(c.user),1),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("div",Oe,[Object(o["g"])("li",null,[Object(o["g"])("h3",je,Object(o["y"])(e.tweet),1),Object(o["g"])("h5",pe,"@"+Object(o["y"])(e.username),1),he,Object(o["g"])("h5",me,Object(o["y"])(e.time),1),we,ve])])])})),128)),Object(o["g"])("button",{class:"button is-primary",onClick:t[1]||(t[1]=function(e){return a.nextPage()})},"Next Page"),Object(o["f"])(Object(o["y"])(c.page/5+1),1)])}n("99af");var ke={name:"User",data:function(){return{user:this.$route.params.user,tweets:[],page:0}},created:function(){var e=this,t=localStorage.getItem("token");t?C.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),C.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,C.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("209b");ke.render=ye;var Ce=ke,Pe={id:"nav"},Te=Object(o["f"])("Home"),_e=Object(o["f"])("About"),Ae=Object(o["f"])("Find Firends "),Se=Object(o["f"])(" My Profile "),xe={class:"title is-size-5"},ze=Object(o["g"])("h3",{class:"title is-size-5"},"My Profile",-1),Ue={class:"card"},Fe={class:"title is-size-5"},Me={class:"subtitle is-size-5"},$e=Object(o["g"])("br",null,null,-1),Ee=Object(o["g"])("br",null,null,-1);function Ie(e,t,n,r,c,a){var u=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",Pe,[Object(o["g"])(u,{to:"/"},{default:Object(o["C"])((function(){return[Te]})),_:1}),Object(o["g"])(u,{to:"/about"},{default:Object(o["C"])((function(){return[_e]})),_:1}),Object(o["g"])(u,{to:"/findusers"},{default:Object(o["C"])((function(){return[Ae]})),_:1}),Object(o["g"])(u,{to:"/myprofile"},{default:Object(o["C"])((function(){return[Se]})),_:1})]),Object(o["g"])("h1",xe,Object(o["y"])(c.name),1),ze,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("div",Ue,[Object(o["g"])("h3",Fe,"Tweet: "+Object(o["y"])(e.tweet),1),Object(o["g"])("h5",Me,Object(o["y"])(e.time),1),$e,Ee])])])})),128)),Object(o["g"])("button",{class:"button is-link",onClick:t[1]||(t[1]=function(e){return a.nextPage()})},"next page"),Object(o["f"])(Object(o["y"])(c.page/5+1),1)])}var Le={name:"My Profile",data:function(){return{tweets:[],page:0,name:null}},created:function(){var e=this,t=localStorage.getItem("token");this.name=localStorage.getItem("name"),t?C.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.replace("/login"),C.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,C.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("eb8b");Le.render=Ie;var Be=Le,He=[{path:"/user/:user",name:"User",component:Ce},{path:"/myprofile",name:"My Profile",component:Be},{path:"/signup",name:"Sign up",component:T},{path:"/findusers",name:"Find Users",component:ie},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/",name:"Home",component:X}],Ne=Object(b["a"])({history:Object(b["b"])("/"),routes:He}),De=Ne,Re=n("5502"),Ve=Object(Re["a"])({state:{token:null},mutations:{},actions:{},modules:{}});Object(o["c"])(l).use(Ve).use(De).mount("#app")},"6b3b":function(e,t,n){},9173:function(e,t,n){"use strict";n("6b3b")},"9cdc":function(e,t,n){"use strict";n("c701")},ac66:function(e,t,n){},c701:function(e,t,n){},cbdb:function(e,t,n){},dfd4:function(e,t,n){"use strict";n("211d")},eb8b:function(e,t,n){"use strict";n("3eee")}});
//# sourceMappingURL=app.0254c813.js.map