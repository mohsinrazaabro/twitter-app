(function(e){function t(t){for(var o,c,l=t[0],a=t[1],s=t[2],i=0,b=[];i<l.length;i++)c=l[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);O&&O(t);while(b.length)b.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r={app:0},u=[];function l(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab760106"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={about:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"c6e1b430"}[e]+".css",r=a.p+o,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var s=u[l],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===o||i===r))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){s=b[l],i=s.getAttribute("data-href");if(i===o||i===r)return t()}var O=document.createElement("link");O.rel="stylesheet",O.type="text/css",O.onload=t,O.onerror=function(t){var o=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete c[e],O.parentNode.removeChild(O),n(u)},O.href=r;var j=document.getElementsByTagName("head")[0];j.appendChild(O)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=l(e);var b=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(O);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",b.name="ChunkLoadError",b.type=o,b.request=c,n[1](b)}r[e]=void 0}};var O=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var O=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1453:function(e,t,n){"use strict";n("cbdb")},"209b":function(e,t,n){"use strict";n("ac66")},"211d":function(e,t,n){},"3eee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"app"},r={id:"nav"},u=Object(o["g"])("h1",null,"Twitter App",-1),l=Object(o["f"])("Home"),a=Object(o["f"])("About"),s=Object(o["f"])("Find Firends "),i=Object(o["f"])(" My Profile "),b=Object(o["g"])("br",null,null,-1),O={class:"router"};function j(e,t,n,j,g,d){var h=Object(o["w"])("router-link"),f=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",c,[Object(o["g"])("div",r,[u,Object(o["g"])(h,{to:"/"},{default:Object(o["C"])((function(){return[l]})),_:1}),Object(o["g"])(h,{to:"/about"},{default:Object(o["C"])((function(){return[a]})),_:1}),Object(o["g"])(h,{to:"/findusers"},{default:Object(o["C"])((function(){return[s]})),_:1}),Object(o["g"])(h,{to:"/myprofile"},{default:Object(o["C"])((function(){return[i]})),_:1})]),b,Object(o["g"])("div",O,[Object(o["g"])(f)])])}n("9cdc");const g={};g.render=j;var d=g,h=(n("d3b7"),n("6c02")),f={class:"signup"},p=Object(o["g"])("h1",null,"Welcome to Sign up Page",-1),w={class:"input"},m=Object(o["g"])("br",null,null,-1),y=Object(o["g"])("br",null,null,-1),v=Object(o["g"])("br",null,null,-1),k=Object(o["g"])("br",null,null,-1),P=Object(o["g"])("p",null,"Already have an account?",-1);function T(e,t,n,c,r,u){return Object(o["p"])(),Object(o["d"])("div",f,[p,Object(o["g"])("div",w,[Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.username=e}),placeholder:"Username.."},null,512),[[o["A"],r.username]]),m,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.password=e}),type:"password",placeholder:"Password..."},null,512),[[o["A"],r.password]]),y,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.confirmpassword=e}),type:"password",placeholder:"Confirm Password..."},null,512),[[o["A"],r.confirmpassword]]),v,Object(o["g"])("input",{onClick:t[4]||(t[4]=function(e){return u.signup()}),type:"submit",value:"sign up"})]),k,P,Object(o["g"])("button",{onClick:t[5]||(t[5]=function(e){return u.goToLogin()})},"Login")])}var C=n("bc3a"),U=n.n(C),A={name:"Sign Up",data:function(){return{username:"",password:"",confirmpassword:""}},methods:{signup:function(){var e=this;return this.username.length<5?alert("username too short!"):this.password.length<5?alert("password too short!"):void(this.password===this.confirmpassword?U.a.post("/users/create",{name:this.username,password:this.password}).then((function(t){alert(t.data),e.$router.push("/login")})).catch((function(e){console.log(e)})):alert("Password didnt match"))},goToLogin:function(){this.$router.push("/login")}}};A.render=T;var S=A,x=Object(o["g"])("h1",null,"Welcome to Homepage",-1),_={key:2},$={key:0},E=Object(o["g"])("br",null,null,-1),L={key:1},B=Object(o["g"])("br",null,null,-1),M={key:2},F=Object(o["g"])("br",null,null,-1),I={key:3},N=Object(o["g"])("br",null,null,-1),z={key:4},D=Object(o["g"])("br",null,null,-1),H={key:5},V=Object(o["g"])("br",null,null,-1),q={key:6},W=Object(o["g"])("br",null,null,-1),J={key:7},K=Object(o["g"])("br",null,null,-1),R={key:8},G=Object(o["g"])("br",null,null,-1),Q={key:9},X=Object(o["g"])("br",null,null,-1);function Y(e,t,n,c,r,u){var l=Object(o["w"])("PostTweet");return Object(o["p"])(),Object(o["d"])("div",null,[1==r.showPostTweet?(Object(o["p"])(),Object(o["d"])(l,{key:0,onChangeShowTweet:t[1]||(t[1]=function(e){return r.showPostTweet=!1}),showPostTweet:r.showPostTweet},null,8,["showPostTweet"])):Object(o["e"])("",!0),0==r.showPostTweet?(Object(o["p"])(),Object(o["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return r.showPostTweet=!0})},"Create tweet")):Object(o["e"])("",!0),x,null!==r.tweets?(Object(o["p"])(),Object(o["d"])("ul",_,[null!==r.tweets[0]?(Object(o["p"])(),Object(o["d"])("li",$,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[0].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[0].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[0].time),1),E])):Object(o["e"])("",!0),null!==r.tweets[1]?(Object(o["p"])(),Object(o["d"])("li",L,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[1].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[1].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[1].time),1),B])):Object(o["e"])("",!0),null!==r.tweets[2]?(Object(o["p"])(),Object(o["d"])("li",M,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[2].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(e.tweet[2].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[2].time),1),F])):Object(o["e"])("",!0),null!==r.tweets[3]?(Object(o["p"])(),Object(o["d"])("li",I,[Object(o["g"])("h4",null,Object(o["y"])(e.tweet[3].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[3].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[3].time),1),N])):Object(o["e"])("",!0),null!==r.tweets[4]?(Object(o["p"])(),Object(o["d"])("li",z,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[4].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[4].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[4].time),1),D])):Object(o["e"])("",!0),null!==r.tweets[5]?(Object(o["p"])(),Object(o["d"])("li",H,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[5].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[5].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[5].time),1),V])):Object(o["e"])("",!0),null!==r.tweets[6]?(Object(o["p"])(),Object(o["d"])("li",q,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[6].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[6].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[6].time),1),W])):Object(o["e"])("",!0),null!==r.tweets[7]?(Object(o["p"])(),Object(o["d"])("li",J,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[7].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[7].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[7].time),1),K])):Object(o["e"])("",!0),null!==r.tweets[8]?(Object(o["p"])(),Object(o["d"])("li",R,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[8].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[8].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[8].time),1),G])):Object(o["e"])("",!0),null!==r.tweets[9]?(Object(o["p"])(),Object(o["d"])("li",Q,[Object(o["g"])("h4",null,Object(o["y"])(r.tweets[9].tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(r.tweets[9].username),1),Object(o["g"])("h5",null,"Time: "+Object(o["y"])(r.tweets[9].time),1),X])):Object(o["e"])("",!0)])):Object(o["e"])("",!0),Object(o["g"])("button",{onClick:t[3]||(t[3]=function(e){return u.nextPage()})}," Next Page "),Object(o["f"])(" current page: "+Object(o["y"])(r.page/5+1)+" ",1),Object(o["g"])("button",{onClick:t[4]||(t[4]=function(e){return u.logOut()})},"Log Out")])}var Z=Object(o["E"])("data-v-7382c92d");Object(o["s"])("data-v-7382c92d");var ee=Object(o["g"])("br",null,null,-1);Object(o["q"])();var te=Z((function(e,t,n,c,r,u){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tweet=e}),placeholder:"What's on your mind?"},null,512),[[o["A"],r.tweet]]),ee,Object(o["g"])("button",{onClick:t[2]||(t[2]=function(e){return u.postTweet()})},"Post")])})),ne={name:"Post Tweet",data:function(){return{tweet:""}},methods:{postTweet:function(){var e=localStorage.getItem("token");return e?U.a.defaults.headers.common["Authorization"]="Bearer "+e:this.$router.push("/login"),this.tweet.length>160?alert("max  characters: 160"):this.tweet.length<1?alert("tweet too short!"):(U.a.post("/tweets",{tweet:this.tweet}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)})),void this.$emit("change-show-tweet"))}}};n("9173");ne.render=te,ne.__scopeId="data-v-7382c92d";var oe=ne,ce={name:"Home",data:function(){return{tweets:null,page:0,showPostTweet:!1}},components:{PostTweet:oe},created:function(){var e=this,t=localStorage.getItem("token");t?U.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.push("/login"),U.a.get("http://localhost:4000/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfMany,console.log(t.data),"error occured at verification"==t.data.message&&e.$router.push("/login")})).catch((function(e){console.log(e)}))},methods:{logOut:function(){localStorage.removeItem("token"),U.a.defaults.headers.common["Authorization"]="Bearer null",this.$router.push("/login")},nextPage:function(){var e=this;this.page+=5,U.a.get("http://localhost:4000/tweets/tweetsofmany?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("dfd4");ce.render=Y;var re=ce,ue=Object(o["g"])("h1",null,"Find Users",-1);function le(e,t,n,c,r,u){return Object(o["p"])(),Object(o["d"])("div",null,[ue,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.users,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("button",{onClick:function(t){return u.goToUser(e.user)}},Object(o["y"])(e.user),9,["onClick"]),0==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:0,onClick:function(t){return u.follow(e.user)}},"Follow",8,["onClick"])):Object(o["e"])("",!0),1==e.following?(Object(o["p"])(),Object(o["d"])("button",{key:1,onClick:function(t){return u.unfollow(e.user)}},"UnFollow",8,["onClick"])):Object(o["e"])("",!0)])])})),128))])}var ae={name:"Find Users",data:function(){return{users:null}},created:function(){var e=this,t=localStorage.getItem("token");t?U.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.push("/login"),U.a.get("/users/findusers").then((function(t){e.users=t.data}))},methods:{follow:function(e){var t=this;U.a.post("/following/follow",{following:e}),U.a.get("/users/findusers").then((function(e){t.users=e.data}))},unfollow:function(e){var t=this;U.a.post("/following/unfollow",{following:e}),U.a.get("/users/findusers").then((function(e){t.users=e.data.newResponse}))},goToUser:function(e){this.$router.push("/user/".concat(e))}}};n("1453");ae.render=le;var se=ae,ie=Object(o["g"])("br",null,null,-1),be=Object(o["g"])("br",null,null,-1);function Oe(e,t,n,c,r,u){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("h1",null,Object(o["y"])(r.user),1),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("h3",null,Object(o["y"])(e.tweet),1),Object(o["g"])("h5",null,"User: "+Object(o["y"])(e.username),1),Object(o["g"])("h5",null,Object(o["y"])(e.time),1),ie,be])])})),128)),Object(o["g"])("button",{onClick:t[1]||(t[1]=function(e){return u.nextPage()})},"Next Page"),Object(o["f"])(Object(o["y"])(r.page/5+1),1)])}n("99af");var je={name:"User",data:function(){return{user:this.$route.params.user,tweets:"",page:0}},created:function(){var e=this,t=localStorage.getItem("token");t?U.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.push("/login"),U.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,U.a.post("/tweets/".concat(this.user,"?page=").concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("209b");je.render=Oe;var ge=je,de=Object(o["g"])("h3",null,"My Profile",-1),he=Object(o["g"])("br",null,null,-1);function fe(e,t,n,c,r,u){return Object(o["p"])(),Object(o["d"])("div",null,[de,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.tweets,(function(e){return Object(o["p"])(),Object(o["d"])("ul",{key:e.id},[Object(o["g"])("li",null,[Object(o["g"])("h3",null,"Tweet: "+Object(o["y"])(e.tweet),1),Object(o["g"])("h5",null,Object(o["y"])(e.time),1),he])])})),128)),Object(o["g"])("button",{onClick:t[1]||(t[1]=function(e){return u.nextPage()})},"next page"),Object(o["f"])(Object(o["y"])(r.page/5+1),1)])}var pe={name:"My Profile",data:function(){return{tweets:"",page:0}},created:function(){var e=this,t=localStorage.getItem("token");t?U.a.defaults.headers.common["Authorization"]="Bearer "+t:this.$router.push("/login"),U.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data.tweetsOfOne})).catch((function(e){console.log(e)}))},methods:{nextPage:function(){var e=this;this.page+=5,U.a.get("/tweets/tweetsofmine?page=".concat(this.page)).then((function(t){e.tweets=t.data})).catch((function(e){console.log(e)}))}}};n("eb8b");pe.render=fe;var we=pe,me=[{path:"/user/:user",name:"User",component:ge},{path:"/myprofile",name:"My Profile",component:we},{path:"/signup",name:"Sign up",component:S},{path:"/findusers",name:"Find Users",component:se},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/",name:"Home",component:re}],ye=Object(h["a"])({history:Object(h["b"])("/"),routes:me}),ve=ye,ke=n("5502"),Pe=Object(ke["a"])({state:{token:null},mutations:{},actions:{},modules:{}});Object(o["c"])(d).use(Pe).use(ve).mount("#app")},"6b3b":function(e,t,n){},9173:function(e,t,n){"use strict";n("6b3b")},"9cdc":function(e,t,n){"use strict";n("c701")},ac66:function(e,t,n){},c701:function(e,t,n){},cbdb:function(e,t,n){},dfd4:function(e,t,n){"use strict";n("211d")},eb8b:function(e,t,n){"use strict";n("3eee")}});
//# sourceMappingURL=app.c803d635.js.map