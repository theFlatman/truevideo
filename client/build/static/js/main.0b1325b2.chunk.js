(this.webpackJsonptruefitvideo=this.webpackJsonptruefitvideo||[]).push([[0],{113:function(e,t,n){e.exports=n(233)},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(45),i=n.n(s),o=n(12),u=n(36),c=n(23),l=n(4),m={users:null},p=function(e,t){return Object(l.a)({},e,{users:t.users})},d=function(e,t){return Object(l.a)({},e,{users:Object(l.a)({},e.users,Object(c.a)({},t.uid,t.user))})};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_SET":return p(e,t);case"USER_SET":return d(e,t);default:return e}},f={authUser:null},b=function(e,t){return Object(l.a)({},e,{authUser:t.authUser})};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER_SET":return b(e,t);default:return e}},g={messages:null,limit:5},v=function(e,t){return Object(l.a)({},e,{messages:t.messages})},O=function(e,t){return Object(l.a)({},e,{limit:t.limit})};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_SET":return v(e,t);case"MESSAGES_LIMIT_SET":return O(e,t);default:return e}},S=Object(u.b)({sessionState:E,userState:h,messageState:j}),x=Object(u.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=n(5),y=n(6),k=n(8),U=n(7),C=n(9),M=n(13),A=n(37),T=n.n(A),V=(n(122),n(124),{apiKey:"AIzaSyCYBIAZV-Uea3MB62kyhnGr90y5F6AhzjY",authDomain:"truefitvideo.firebaseapp.com",databaseURL:"https://truefitvideo.firebaseio.com",projectId:"truefitvideo",storageBucket:"truefitvideo.appspot.com",messagingSenderId:"396071631932",appId:"1:396071631932:web:28667b8b87cc87f0e29739",measurementId:"G-JPF2ZN5BJP"}),P=function e(){var t=this;Object(w.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:"http://localhost:3000"})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged((function(a){a?t.user(a.uid).once("value").then((function(t){var n=t.val();n.roles||(n.roles={}),a=Object(l.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData,roomName:"",token:""},n),e(a)})):n()}))},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},T.a.initializeApp(V),this.serverValue=T.a.database.ServerValue,this.emailAuthProvider=T.a.auth.EmailAuthProvider,this.auth=T.a.auth(),this.db=T.a.database()},N=r.a.createContext(null),D=function(e){return function(t){return r.a.createElement(N.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},I=N,H=P,R=function(e){var t=function(t){function n(e){var t;return Object(w.a)(this,n),(t=Object(k.a)(this,Object(U.a)(n).call(this,e))).props.onSetAuthUser(JSON.parse(localStorage.getItem("authUser"))),t}return Object(C.a)(n,t),Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.props.onSetAuthUser(t)}),(function(){localStorage.removeItem("authUser"),e.props.onSetAuthUser(null)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(r.a.Component);return Object(M.a)(D,Object(o.b)(null,(function(e){return{onSetAuthUser:function(t){return e({type:"AUTH_USER_SET",authUser:t})}}})))(t)},_=n(27),L="/home",z=function(e){return function(t){var n=function(n){function a(){return Object(w.a)(this,a),Object(k.a)(this,Object(U.a)(a).apply(this,arguments))}return Object(C.a)(a,n),Object(y.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener((function(n){e(n)||t.props.history.push("/signin")}),(function(){return t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return e(this.props.authUser)?r.a.createElement(t,this.props):null}}]),a}(r.a.Component);return Object(M.a)(_.f,D,Object(o.b)((function(e){return{authUser:e.sessionState.authUser}})))(n)}},B=function(e){var t=function(t){function n(e){var t;return Object(w.a)(this,n),(t=Object(k.a)(this,Object(U.a)(n).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then((function(){return t.setState({isSent:!0})}))},t.state={isSent:!1},t}return Object(C.a)(n,t),Object(y.a)(n,[{key:"render",value:function(){return(t=this.props.authUser)&&!t.emailVerified&&t.providerData.map((function(e){return e.providerId})).includes("password")?r.a.createElement("div",null,this.state.isSent?r.a.createElement("p",null,"Best\xe4tigunsmail gesendet: \xdcberpr\xfcfen Sie ihre Emails. Sehen Sie in ihrem Spam Ordner nach falls Sie die Email nicht finden k\xf6nnen. Nachdem Sie ihre Email Adresse best\xe4tigt haben laden sie bitte die Seite erneut."):r.a.createElement("p",null,"Best\xe4tigen Sie ihre Email Adresse: \xdcberpr\xfcfen Sie ihren Spam Ordner falls Sie die Best\xe4tigunsmail nicht finden k\xf6nnen oder senden Sie erneut eine Best\xe4tigungsmail"),r.a.createElement("button",{type:"button",onClick:this.onSendEmailVerification,disabled:this.state.isSent},"Best\xe4tigunsmail senden")):r.a.createElement(e,this.props);var t}}]),n}(r.a.Component);return Object(M.a)(D,Object(o.b)((function(e){return{authUser:e.sessionState.authUser}})))(t)},W=n(20),Z=n(21);function F(){var e=Object(W.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    color: #c5986a;\n    font-family: Montserrat, sans-serif;\n    overflow-x:hidden;\n    height: 100%;\n    width: 100vw;\n    margin: 0px;\n  }\n\n  button {\n    border-radius: 3px;\n    text-align: center;\n    text-decoration: none;\n    font-family: Montserrat, sans-serif;\n    background-color: transparent;\n    color: #636363;\n    border: 1px solid #c5986a;\n    padding: 5px 10px 5px 10px;\n    margin: 5px;\n    font-size: 16px;\n  }\n\n  input {\n    text-decoration: none;\n    font-family: Montserrat, sans-serif;\n    background-color: transparent;\n    color: #636363;\n    border: 1px solid #c5986a;\n    padding: 5px 10px 5px 10px;\n    margin: 5px;\n    font-size: 16px;\n  }\n\n"]);return F=function(){return e},e}var J=Object(Z.a)(F()),X=n(26),G=n(15),K=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 186 44.227"},r.a.createElement("path",{d:"M88.413.413,88.207,0l-.413.207L66.713,8.68,45.427.207,45.22,0l-.207.413-.207.62-.207.413h.413L65.887,9.92V21.7L52.247,43.193l-.207.207.413.207.62.413.207.207.207-.413L66.713,23.147l13.02,20.667.207.413.413-.207.413-.413.413-.207-.207-.207L67.333,21.7V9.92l21.08-8.473h.413l-.207-.413Z",transform:"translate(47.573)"}),r.a.createElement("path",{d:"M.413,5.3H0V6.747H7.647v21.7H9.093V6.747H16.74V5.3H.413Z",transform:"translate(0 5.653)"}),r.a.createElement("path",{d:"M21.473,20.387a7.192,7.192,0,0,0,5.58-7.44c0-4.96-3.307-7.647-8.887-7.647H9.9V28.447h1.447V20.8H17.96a5.722,5.722,0,0,0,1.86-.207L25.4,28.24l.207.207h1.86l-.413-.62ZM11.347,6.747H17.96c4.753,0,7.44,2.273,7.44,6.2,0,4.133-2.687,6.407-7.44,6.407H11.347V6.747Z",transform:"translate(10.56 5.653)"}),r.a.createElement("path",{d:"M38.367,5.3h-.413V18.94c0,5.167-2.893,8.06-7.853,8.06s-7.853-2.893-7.853-8.06V5.3H20.8V18.94c0,5.993,3.307,9.507,9.3,9.507s9.3-3.513,9.3-9.507V5.3H38.367Z",transform:"translate(22.187 5.653)"}),r.a.createElement("path",{d:"M34.547,27V17.287h11.78V15.84H34.547V6.747H47.773V5.3H33.1V28.447H48.393V27H34.547Z",transform:"translate(35.307 5.653)"}),r.a.createElement("path",{d:"M71.313,5.3H70.9V28.447h1.447V18.113H83.3V16.667H72.347V6.747h12.4V5.3H71.313Z",transform:"translate(75.627 5.653)"}),r.a.createElement("path",{d:"M79.713,5.3H79.3V28.447h1.653V5.3h-1.24Z",transform:"translate(84.587 5.653)"}),r.a.createElement("path",{d:"M98.333,5.3H81.8V6.747h7.853v21.7H91.1V6.747h7.647V5.3Z",transform:"translate(87.253 5.653)"}))},Y=D((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Abmelden")}));function q(){var e=Object(W.a)(["\n  display: flex;\n  width: 100px;\n"]);return q=function(){return e},e}function Q(){var e=Object(W.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 0px 50px 0px 50px;\n\n  a {\n    text-decoration: none;\n    color: #636363;\n  }\n\n  button {\n    width: 100px;\n  }\n\n  svg {\n    width: 200px;\n    fill: #c5986a;\n  }\n\n  @media (max-width: 576px) {\n    padding: 10px 20px 10px 20px;\n  }\n"]);return Q=function(){return e},e}function $(){var e=Object(W.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  justify-content: space-between;\n\n  overflow: hidden;\n  padding: 0px 50px 0px 50px;\n\n  @media (max-width: 576px) {\n    padding: 10px 20px 10px 20px;\n  }\n\n  svg {\n    width: 200px;\n    fill: #c5986a;\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 30px;\n  height: 30px;\n  background: transparent;\n  border: none;\n  padding: 0;\n  z-index: 10;\n\n  div {\n    display: flex;\n    width: 30px;\n    height: 0.25rem;\n    background: #c5986a;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    z-index: 20;\n\n    :first-child {\n      background: ",";\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      background: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      background: ",";\n      transform: ",";\n    }\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(W.a)(["\n  display: flex;\n  background: #c5986a;\n  transform: ",";\n  height: 100vh;\n  width: 300px;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n  ul {\n    display: flex;\n    flex-flow: wrap;\n    margin-top: 50px;\n    list-style-type: none;\n    padding: 10px;\n  }\n\n  li {\n    width: 100%;\n  }\n\n  a {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: #0d0c1d;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 1rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: white;\n    }\n  }\n"]);return te=function(){return e},e}var ne=Z.b.nav(te(),(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),ae=Z.b.button(ee(),(function(e){return e.open?"white":"#c5986a"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"white":"#c5986a"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"white":"#c5986a"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),re=Z.b.header($()),se=Z.b.header(Q()),ie=Z.b.div(q()),oe=function(e){var t=e.open,n=e.authUser;return r.a.createElement(ne,{open:t},r.a.createElement(ce,{authUser:n}))},ue=function(e){var t=e.open,n=e.setOpen;return r.a.createElement(ae,{open:t,onClick:function(){return n(!t)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},ce=function(e){var t=e.authUser;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(G.a,{to:L},"Home")),r.a.createElement("li",null,r.a.createElement(G.a,{to:"/account"},"Account")),!!t.roles.ADMIN&&r.a.createElement("li",null,r.a.createElement(G.a,{to:"/admin"},"Admin"))))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement("div",null,r.a.createElement(G.a,{to:"/"},r.a.createElement(K,null))),r.a.createElement("div",null,r.a.createElement(G.a,{to:"/signin"},r.a.createElement("button",null,"Anmelden"))))},me=Object(o.b)((function(e){return{authUser:e.sessionState.authUser}}))((function(e){var t=e.authUser,n=r.a.useState(!1),a=Object(X.a)(n,2),s=a[0],i=a[1],o=r.a.useRef();return t?r.a.createElement(re,null,r.a.createElement("div",{ref:o},r.a.createElement(ue,{open:s,setOpen:i}),r.a.createElement(oe,{open:s,setOpen:i,authUser:t})),r.a.createElement(G.a,{to:"/"},r.a.createElement(K,null)),r.a.createElement(Y,null)):r.a.createElement(se,null,r.a.createElement(le,null))})),pe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing"))},de={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},he=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,s=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,s).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(){return n.props.firebase.doSendEmailVerification()})).then((function(){n.setState(Object(l.a)({},de)),n.props.history.push(L)})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  Es existiert bereits ein Account mit dieser Email Adresse. Versuchen Sie sich anzumelden.\n"),n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.state=Object(l.a)({},de),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,s=e.passwordTwo,i=e.error,o=a!==s||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Vorname Nachame"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Adresse"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Passwort"}),r.a.createElement("input",{name:"passwordTwo",value:s,onChange:this.onChange,type:"password",placeholder:"Passwort best\xe4tigen"}),r.a.createElement("button",{disabled:o,type:"submit"},"Account erstellen"),i&&r.a.createElement("p",null,i.message))}}]),t}(a.Component),fe=function(){return r.a.createElement("p",null,"Noch keinen Account? ",r.a.createElement(G.a,{to:"/signup"},"Account erstellen"))},be=Object(_.f)(D(he)),Ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Konto erstellen"),r.a.createElement(be,null))},ge={email:"",error:null},ve=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(l.a)({},ge))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.state=Object(l.a)({},ge),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Passwort zur\xfccksetzen"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),Oe=function(){return r.a.createElement("p",null,r.a.createElement(G.a,{to:"/pw-forget"},"Passwort vergessen?"))},je=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Passwort vergessen"),r.a.createElement(Se,null))},Se=D(ve),xe={email:"",password:"",error:null},we=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(l.a)({},xe)),n.props.history.push(L)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.state=Object(l.a)({},xe),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,s=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Adresse"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Passwort"}),r.a.createElement("button",{disabled:s,type:"submit"},"Anmelden"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),ye=Object(M.a)(_.f,D)(we),ke=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Anmelden"),r.a.createElement(ye,null),r.a.createElement(Oe,null),r.a.createElement(fe,null))},Ue=n(40),Ce=n(109),Me=n.n(Ce),Ae=function(e){var t=e.participant,n=Object(a.useState)([]),s=Object(X.a)(n,2),i=s[0],o=s[1],u=Object(a.useState)([]),c=Object(X.a)(u,2),l=c[0],m=c[1],p=Object(a.useRef)(),d=Object(a.useRef)(),h=function(e){return Array.from(e.values()).map((function(e){return e.track})).filter((function(e){return null!==e}))};return Object(a.useEffect)((function(){o(h(t.videoTracks)),m(h(t.audioTracks));return t.on("trackSubscribed",(function(e){"video"===e.kind?o((function(t){return[].concat(Object(Ue.a)(t),[e])})):m((function(t){return[].concat(Object(Ue.a)(t),[e])}))})),t.on("trackUnsubscribed",(function(e){"video"===e.kind?o((function(t){return t.filter((function(t){return t!==e}))})):m((function(t){return t.filter((function(t){return t!==e}))}))})),function(){o([]),m([]),t.removeAllListeners()}}),[t]),Object(a.useEffect)((function(){var e=i[0];if(e)return e.attach(p.current),function(){e.detach()}}),[i]),Object(a.useEffect)((function(){var e=l[0];if(e)return e.attach(d.current),function(){e.detach()}}),[l]),r.a.createElement("div",{className:"participant"},r.a.createElement("h3",null,t.identity),r.a.createElement("video",{ref:p,autoPlay:!0}),r.a.createElement("audio",{ref:d,autoPlay:!0,muted:!1}))},Te=function(e){var t=e.roomName,n=e.token,s=Object(a.useState)(null),i=Object(X.a)(s,2),o=i[0],u=i[1],c=Object(a.useState)([]),l=Object(X.a)(c,2),m=l[0],p=l[1];Object(a.useEffect)((function(){var e=function(e){p((function(t){return[].concat(Object(Ue.a)(t),[e])}))},a=function(e){p((function(t){return t.filter((function(t){return t!==e}))}))};return Me.a.connect(n,{name:t}).then((function(t){u(t),t.on("participantConnected",e),t.on("participantDisconnected",a),t.participants.forEach(e)})),function(){u((function(e){return e&&"connected"===e.localParticipant.state?(e.localParticipant.tracks.forEach((function(e){e.track.stop()})),e.disconnect(),null):e}))}}),[t,n]);var d=m.map((function(e){return r.a.createElement(Ae,{key:e.sid,participant:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"room"},r.a.createElement("div",{className:"local-participant"},o?r.a.createElement(Ae,{key:o.localParticipant.sid,participant:o.localParticipant}):""),r.a.createElement("div",{className:"remote-participants"},d)))},Ve=n(110),Pe=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editText:n.props.message.text}}))},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authUser,n=e.message,a=e.onRemoveMessage,s=this.state,i=s.editMode,o=s.editText;return r.a.createElement("li",null,i?r.a.createElement("input",{type:"text",value:o,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,n.userId)," ",n.text,n.editedAt&&r.a.createElement("span",null,"(Edited)")),t.uid===n.userId&&r.a.createElement("span",null,i?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!i&&r.a.createElement("button",{type:"button",onClick:function(){return a(n.uid)}},"Delete")))}}]),t}(a.Component),Ne=function(e){var t=e.authUser,n=e.messages,a=e.onEditMessage,s=e.onRemoveMessage;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(Pe,{authUser:t,key:e.uid,message:e,onEditMessage:a,onRemoveMessage:s})})))},De=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onListenForMessages=function(){n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.props.limit).on("value",(function(e){n.props.onSetMessages(e.val()),n.setState({loading:!1})}))},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){e.uid;var a=Object(Ve.a)(e,["uid"]);n.props.firebase.message(e.uid).set(Object(l.a)({},a,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.props.onSetMessagesLimit(n.props.limit+5)},n.state={text:"",loading:!1},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.messages.length||this.setState({loading:!0}),this.onListenForMessages()}},{key:"componentDidUpdate",value:function(e){e.limit!==this.props.limit&&this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.props.messages,n=this.state,a=n.text,s=n.loading;return r.a.createElement("div",null,!s&&t&&r.a.createElement("button",{type:"button",onClick:this.onNextPage},"More"),s&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement(Ne,{authUser:this.props.authUser,messages:t,onEditMessage:this.onEditMessage,onRemoveMessage:this.onRemoveMessage}),!t&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(t){return e.onCreateMessage(t,e.props.authUser)}},r.a.createElement("input",{type:"text",value:a,onChange:this.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))}}]),t}(a.Component);Object(M.a)(D,Object(o.b)((function(e){return{authUser:e.sessionState.authUser,messages:Object.keys(e.messageState.messages||{}).map((function(t){return Object(l.a)({},e.messageState.messages[t],{uid:t})})),limit:e.messageState.limit}}),(function(e){return{onSetMessages:function(t){return e({type:"MESSAGES_SET",messages:t})},onSetMessagesLimit:function(t){return e({type:"MESSAGES_LIMIT_SET",limit:t})}}})))(De);function Ie(){var e=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return Ie=function(){return e},e}var He=Z.b.div(Ie()),Re=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).openVideoChat=function(){return r.a.createElement(Te,{roomName:n.state.room,token:n.state.token})},n.state={token:"",room:"",roomOpen:!1},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.user(this.props.authUser.uid).once("value",(function(t){e.setState({token:t.val().token,room:t.val().roomName})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null,r.a.createElement("h1",null,"Home"),""===this.state.token?r.a.createElement("div",null,r.a.createElement("h2",null,"Momentan ist kein Videochat f\xfcr sie verf\xfcgbar. Der Videochat wird verf\xfcgbar sobald Marcel ihn gestartet hat.")):r.a.createElement(Te,{roomName:this.state.room,token:this.state.token})))}}]),t}(r.a.Component),_e=Object(M.a)(Object(o.b)((function(e){return{authUser:e.sessionState.authUser}})),D,B,z((function(e){return!!e})))(Re),Le={passwordOne:"",passwordTwo:"",error:null},ze=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(l.a)({},Le))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.state=Object(l.a)({},Le),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,s=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"Neues Passwort"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Neues Passwort best\xe4tigen"}),r.a.createElement("button",{disabled:s,type:"submit"},"Passwort zur\xfccksetzen"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Be=D(ze),We=Object(M.a)(Object(o.b)((function(e){return{authUser:e.sessionState.authUser}})),B,z((function(e){return!!e})))((function(e){var t=e.authUser;return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",t.email),r.a.createElement(Be,null))})),Ze=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).state={loading:!1},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.users.length||this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){e.props.onSetUsers(t.val()),e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.props.users,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Kunden"),t&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Name:")," ",e.username),r.a.createElement("span",null,r.a.createElement(G.a,{to:"".concat("/admin","/").concat(e.uid)},"Details")))}))))}}]),t}(a.Component),Fe=Object(M.a)(D,Object(o.b)((function(e){return{users:Object.keys(e.userState.users||{}).map((function(t){return Object(l.a)({},e.userState.users[t],{uid:t})}))}}),(function(e){return{onSetUsers:function(t){return e({type:"USERS_SET",users:t})}}})))(Ze),Je=n(61),Xe=n.n(Je),Ge=n(111),Ke=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(U.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.props.user.email)},n.onCreateRoom=function(){var e=Object(Ge.a)(Xe.a.mark((function e(t){var a,r;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/video/token",{method:"POST",body:JSON.stringify({identity:n.props.user.username.split(" ").join(""),room:n.props.user.username}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:return a=e.sent,n.props.firebase.user(n.props.match.params.id).set(Object(l.a)({},n.props.user,{token:a.token,roomName:n.props.user.username})),e.next=7,fetch("/video/token",{method:"POST",body:JSON.stringify({identity:n.props.authUser.username.split(" ").join(""),room:n.props.user.username}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 7:r=e.sent,n.props.firebase.user(n.props.authUser.uid).set({email:n.props.authUser.email,username:n.props.authUser.username,roles:n.props.authUser.roles,token:r.token,roomName:n.props.user.username}),n.props.history.push(L);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={loading:!1,token:""},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.user||this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",(function(t){e.props.onSetUser(t.val(),e.props.match.params.id),e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.props.user,t=this.state.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),t&&r.a.createElement("div",null,"Loading ..."),e&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Passwort zur\xfccksetzen"),r.a.createElement("button",{type:"button",onClick:this.onCreateRoom},"VideoChat starten"))))}}]),t}(a.Component),Ye=Object(M.a)(_.f,D,Object(o.b)((function(e,t){return{user:(e.userState.users||{})[t.match.params.id],authUser:e.sessionState.authUser}}),(function(e){return{onSetUser:function(t,n){return e({type:"USER_SET",user:t,uid:n})}}})))(Ke),qe=Object(M.a)(B,z((function(e){return e&&!!e.roles.ADMIN})))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/admin/:id",component:Ye}),r.a.createElement(_.a,{exact:!0,path:"/admin",component:Fe})))})),Qe=n(18),$e=Object(Qe.a)();function et(){var e=Object(W.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100%;\n  margin: 100px 30px 100px 30px;\n  justify-content: center;\n"]);return et=function(){return e},e}function tt(){var e=Object(W.a)(["\n  position: sticky;\n  top: 0px;\n  width: 100vw;\n  height: 80px;\n  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);\n  z-index: 50;\n\n  @media (max-width: 576px) {\n    height: auto;\n  }\n"]);return tt=function(){return e},e}var nt=Z.b.div(tt()),at=Z.b.div(et()),rt=function(){return r.a.createElement("div",null,r.a.createElement(_.b,{history:$e},r.a.createElement(J,null),r.a.createElement(nt,null,r.a.createElement(me,null)),r.a.createElement(at,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:pe}),r.a.createElement(_.a,{path:"/signup",component:Ee}),r.a.createElement(_.a,{path:"/signin",component:ke}),r.a.createElement(_.a,{path:"/pw-forget",component:je}),r.a.createElement(_.a,{path:L,component:_e}),r.a.createElement(_.a,{path:"/account",component:We}),r.a.createElement(_.a,{path:"/admin",component:qe})))))},st=R((function(){return r.a.createElement(rt,null)}));i.a.render(r.a.createElement(o.a,{store:x},r.a.createElement(I.Provider,{value:new H},r.a.createElement(st,null))),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.0b1325b2.chunk.js.map