!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("auth0-js"),require("react")):"function"==typeof define&&define.amd?define(["exports","auth0-js","react"],t):t(e.reactUseAuth={},e.Auth0,e.react)}(this,function(e,t,o){t=t&&t.hasOwnProperty("default")?t.default:t;var n="default"in o?o.default:o,a=function(e,t){switch(console.log("got me some local",localStorage),t.type){case"login":var o=t.authResult,n=t.user,a=1e3*o.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("access_token",o.accessToken),localStorage.setItem("id_token",o.idToken),localStorage.setItem("expires_at",JSON.stringify(a)),localStorage.setItem("user",JSON.stringify(n))),{user:n,expiresAt:a};case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("user")),{user:{},expiresAt:null};default:return e}},r=o.createContext(null);e.AuthProvider=function(e){var s=e.children,u=e.navigate,i=e.auth0_domain,l="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",c=new t.WebAuth(Object.assign({},{domain:i,clientID:e.auth0_client_id,redirectUri:l+"/auth0_callback",audience:"https://"+i+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},e.auth0_params)),d=o.useReducer(a,{user:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("user")):{},expiresAt:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("expires_at")):null}),f=d[0],p=d[1];return console.log("auth provider",{state:f}),n.createElement(r.Provider,{value:{state:f,dispatch:p,auth0:c,navigate:u}},s)},e.useAuth=function(){var e=o.useContext(r),t=e.state,n=e.dispatch,a=e.auth0,s=e.navigate;return console.log(3,{state:t}),{isAuthenticated:function(){return t.expiresAt&&(new Date).getTime()<t.expiresAt},user:t.user,userId:t.user?t.user.sub:null,login:function(){a.authorize()},logout:function(){n({type:"logout"}),s("/")},handleAuthentication:function(){"undefined"!=typeof window&&a.parseHash(function(e,t){console.log(2,{err:e,authResult:t}),t&&t.accessToken&&t.idToken?function(e){a.client.userInfo(e.accessToken,function(t,o){console.log(1,{err:t,user:o}),t?console.log(t):n({type:"login",authResult:e,user:o})})}(t):e&&console.log(e)})}}}});
//# sourceMappingURL=index.umd.js.map