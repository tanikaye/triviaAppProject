(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{12:function(e,t,s){},17:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(19),r=s.n(n),a=s(2),i=(s(12),s(3)),o=(s(17),s(4)),l=s(0);var j=function(){return Object(l.jsxs)("div",{className:"registration",children:[Object(l.jsxs)("nav",{className:"main-nav",children:[Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"welcome",children:"Welcome to TriviApp! Sign up to See How You Stack up Against Your Peers!"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"yo",children:Object(l.jsx)("ul",{className:"youall",children:Object(l.jsxs)("div",{className:"hi",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"signin",href:"#0",to:"/Login",children:"Sign in"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"signup",href:"#0",to:"/Signup",children:"Sign up"})})]})})})]}),Object(l.jsx)("div",{className:"user-modal",children:Object(l.jsxs)("div",{className:"user-modal-container",children:[Object(l.jsxs)("ul",{className:"switcher",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#0",children:"Sign in"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#0",children:"New account"})})]}),Object(l.jsxs)("div",{id:"reset-password",children:[Object(l.jsxs)("p",{className:"form-message",children:["Lost your password? Please enter your email address.",Object(l.jsx)("br",{})," You will receive a link to create a new password."]}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace email",for:"reset-email",children:"E-mail"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"reset-email",type:"email",placeholder:"E-mail"}),Object(l.jsx)("span",{className:"error-message",children:"An account with this email does not exist!"})]}),Object(l.jsx)("p",{className:"fieldset",children:Object(l.jsx)("input",{className:"full-width has-padding",type:"submit",value:"Reset password"})})]}),Object(l.jsx)("p",{className:"form-bottom-message",children:Object(l.jsx)("a",{href:"#0",children:"Back to log-in"})})]}),Object(l.jsx)("a",{href:"#0",className:"close-form",children:"Close"})]})})]})};var d=function(e){var t=e.handleLogin,s=Object(c.useState)(""),n=Object(a.a)(s,2),r=n[0],j=n[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)(""),m=Object(a.a)(O,2),x=m[0],f=m[1],g=Object(c.useState)(""),p=Object(a.a)(g,2),v=p[0],N=p[1],w=Object(c.useState)(!1),y=Object(a.a)(w,2),S=y[0],C=y[1],k=Object(c.useState)(""),A=Object(a.a)(k,2),T=A[0],E=A[1],P=Object(c.useState)(""),L=Object(a.a)(P,2),_=L[0],R=L[1],q=Object(i.g)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"login-message",children:"Sign up to get started!"}),Object(l.jsxs)("div",{id:"login",children:[Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace username",for:"signup-username",children:"Username"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signup-username",type:"text",placeholder:"Username",value:r,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("span",{className:"error-message",children:"Your username can only contain numeric and alphabetic symbols!"})]}),Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace email",for:"signup-email",children:"E-mail"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signup-email",type:"email",placeholder:"E-mail",value:u,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("span",{className:"error-message",children:"Enter a valid email address!"})]}),Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace password",for:"signup-password",children:"Password"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signup-password",type:T?"text":"password",placeholder:"Password",value:x,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("a",{href:"#0",className:"hide-password",onClick:function(){E((function(e){return!e}))},children:"Show"}),Object(l.jsx)("span",{className:"error-message",children:"Your password has to be at least 6 characters long!"})]}),Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace password",for:"signup-password",children:"Confirm Password"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signup-password",type:_?"text":"password",placeholder:"Confirm Password",value:v,onChange:function(e){return N(e.target.value)}}),Object(l.jsx)("a",{href:"#0",className:"hide-password",onClick:function(){R((function(e){return!e}))},children:"Show"}),Object(l.jsx)("span",{className:"error-message",children:"Password does not match"})]}),Object(l.jsxs)("p",{className:"fieldset check",children:[Object(l.jsx)("input",{type:"checkbox",id:"accept-terms",onChange:function(){C((function(e){return!e}))}}),Object(l.jsxs)("label",{for:"accept-terms",children:["I agree to the ",Object(l.jsx)("a",{className:"accept-terms",href:"#0",children:"Terms"})]})]})]}),Object(l.jsx)("p",{className:"fieldset",onClick:function(e){console.log("whatever1"),console.log("whatever2"),fetch("/Signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,email:u,password:x,password_confirmation:v})}).then((function(e){return e.json()})).catch((function(e){console.log("behold the error",e)})).then((function(e){e.errors?(alert(e.errors[0]),console.log(e),console.log("log the error again ",e.errors)):(t(e),q.push("/Categories"),console.log("the data from the Signup fetch",e))}))},children:Object(l.jsx)("input",{className:"full-width has-padding",type:"submit",value:"Create Account",disabled:!S})}),Object(l.jsx)("div",{className:"reg-button",children:Object(l.jsx)(o.b,{to:"/Registration",children:Object(l.jsx)("button",{className:"cd-close-form",children:"Registration"})})})]})]})};var b=function(e){var t=e.handleLogin,s=(e.user,e.setUser,Object(c.useState)("")),n=Object(a.a)(s,2),r=n[0],j=n[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)(""),m=Object(a.a)(O,2),x=m[0],f=m[1];console.log("here is use history ",i.g);var g=Object(i.g)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"login-message",children:"Log in to get started!"}),Object(l.jsxs)("div",{id:"login",children:[Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace username",for:"signin-email",children:"Username"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signin-email",type:"email",placeholder:"Username",value:r,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("span",{className:"error-message",children:"An account with this username address does not exist!"})]}),Object(l.jsxs)("p",{className:"fieldset",children:[Object(l.jsx)("label",{className:"image-replace password",for:"signin-password",children:"Password"}),Object(l.jsx)("input",{className:"full-width has-padding has-border",id:"signin-password",type:x?"text":"password",placeholder:"Password",value:u,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("a",{href:"#0",className:"hide-password",onClick:function(){f((function(e){return!e}))},children:"Show"}),Object(l.jsx)("span",{className:"error-message",children:"Wrong password! Try again."})]}),Object(l.jsxs)("p",{className:"fieldset check",children:[Object(l.jsx)("input",{type:"checkbox",id:"remember-me"}),Object(l.jsx)("label",{for:"remember-me",children:"Remember me"})]})]}),Object(l.jsx)("p",{className:"fieldset",onClick:function(){fetch("/Login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:u})}).then((function(e){return e.json()})).catch((function(e){console.log("behold the error",e)})).then((function(e){e.error?(alert("Login Failed; Incorrect Name/Password Combination. Or Maye You Haven't Signed Up?"),console.log("log the error again ",e.error)):(t(e),g.push("/Categories"))}))},children:Object(l.jsx)("input",{className:"full-width has-padding",type:"submit",value:"Login"})}),Object(l.jsx)("div",{className:"reg-button",children:Object(l.jsx)(o.b,{className:"regy",to:"/Registration",children:Object(l.jsx)("button",{className:"cd-close-form",children:"Registration"})})})]})]})};var u=function(e){var t=e.specificCategory,s=(e.listOfCategories,e.handleCatAndDiff);return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("div",{className:"image"}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("strong",{children:t}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(o.b,{to:"/Question",children:Object(l.jsx)("button",{className:"difficulty-level-button",value:"easy",onClick:function(){return s("easy",t)},children:Object(l.jsx)("span",{children:"easy"})})}),Object(l.jsx)(o.b,{to:"/Question",children:Object(l.jsx)("button",{className:"difficulty-level-button",value:"medium",onClick:function(){return s("medium",t)},children:Object(l.jsx)("span",{children:"medium"})})}),Object(l.jsx)(o.b,{to:"/Question",children:Object(l.jsx)("button",{className:"difficulty-level-button",value:"hard",onClick:function(){return s("hard",t)},children:Object(l.jsx)("span",{children:"hard"})})})]})]})};var h=function(e){var t=e.user,s=(e.setUser,e.handleCatAndDiff),c=e.listOfCategories;return Object(l.jsxs)("main",{className:"page",children:[t&&Object(l.jsxs)("div",{className:"hi-choose",children:[Object(l.jsxs)("h1",{className:"hi-user",children:["Hi ",t.username,"!"]})," ",Object(l.jsx)("h3",{children:"Choose a Category and Level"})]}),Object(l.jsx)("ul",{className:"cards",children:t&&c.map((function(e){return Object(l.jsx)(u,{specificCategory:e,listOfCategories:c,handleCatAndDiff:s})}))})]})};var O=function(e){var t=e.user,s=e.setUser;return console.log("the userrrr ",t),console.log("thats that user tho ",t),Object(l.jsxs)("nav",{className:"navBar",children:[Object(l.jsx)("div",{id:"logout",children:t&&Object(l.jsx)("button",{className:"difficulty-level-button logout-button",onClick:function(){console.log("logged out",t),fetch("/Logout",{method:"DELETE"}).then((function(e){return e.json()})).then(s(null))},children:Object(l.jsx)(o.b,{className:"hello",to:"/Registration",children:"Logout"})})}),Object(l.jsx)("div",{className:"triviapp",children:"TriviApp"})]})},m=s(14);s(35),s(36),s(37);var x=function(e){var t=e.category,s=e.difficulty,n=e.user,r=Object(c.useState)(0),i=Object(a.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(!1),u=Object(a.a)(b,2),h=u[0],O=u[1],x=Object(c.useState)(0),f=Object(a.a)(x,2),g=f[0],p=f[1],v=Object(c.useState)([]),N=Object(a.a)(v,2),w=N[0],y=N[1],S=Object(c.useState)(null),C=Object(a.a)(S,2),k=C[0],A=C[1],T=Object(c.useState)([]),E=Object(a.a)(T,2),P=E[0],L=E[1],_=Object(c.useState)(null),R=Object(a.a)(_,2),q=R[0],M=R[1],U=Object(c.useState)(null),Y=Object(a.a)(U,2),G=Y[0],H=Y[1],B=Object(c.useState)([]),F=Object(a.a)(B,2),J=F[0],W=F[1],D=Object(c.useState)(null),I=Object(a.a)(D,2),Q=I[0],z=I[1],V=Object(c.useState)(null),K=Object(a.a)(V,2),X=K[0],Z=K[1],$=Object(c.useState)(null),ee=Object(a.a)($,2),te=ee[0],se=ee[1],ce=Object(c.useState)(null),ne=Object(a.a)(ce,2),re=ne[0],ae=ne[1],ie=Object(c.useState)(null),oe=Object(a.a)(ie,2),le=oe[0],je=oe[1],de=Object(c.useState)(null),be=Object(a.a)(de,2),ue=be[0],he=be[1],Oe=Object(c.useState)(null),me=Object(a.a)(Oe,2),xe=me[0],fe=me[1],ge=Object(c.useState)(null),pe=Object(a.a)(ge,2),ve=pe[0],Ne=pe[1],we=Object(c.useState)([]),ye=Object(a.a)(we,2),Se=ye[0],Ce=ye[1],ke=Object(c.useState)(null),Ae=Object(a.a)(ke,2),Te=Ae[0],Ee=Ae[1];function Pe(e){var t=0;null===G?t=0:null!==G&&G<9&&(t=G+1),console.log("the answer array ",e),A(e[t]),H(t)}function Le(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function _e(e){for(var t=e[0].score,s=0,c=0,r=0,a=0,i=0;i<e.length;i++)e[i].score>t&&(t=e[i].score),s+=e[i].score,e[i].user.username===n.username&&e[i].score>c&&(c=e[i].score),e[i].user.username===n.username&&(r+=e[i].score,a++);fetch("/leaderboard_entries").then((function(e){e.ok&&e.json().then((function(e){return function(e){console.log("the data of the leader",e);var t=e.filter((function(e){return n.username===e.user.username}));if(console.log("filter it up ",t),0===t.length)fetch("/leaderboard_entries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({high_score:null,cumulative_score:g,user_id:n.id})}).then((function(e){return e.json()})).then((function(e){fe(e)}));else{var s=t[0].cumulative_score;fetch("leaderboard_entries/".concat(t[0].id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({cumulative_score:s+g})}).then((function(e){return e.json()})).then((function(e){return he(e)}))}}(e)}))}));var o=s/e.length;je(r/a),se(o),Z(t),ae(c)}console.log("first log"),Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=".concat(t,"&difficulty=").concat(s,"&type=multiple")).then((function(e){return e.json()})).then((function(e){return function(e){if(0===e.results.length)return void Ee(e);console.log("this is the api ",e);var t=e.results.map((function(e){return e.question}));console.log("henceforth shall be the questions ",t),W(t);var s=e.results.map((function(e){return{correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}}));console.log("henceforth shall be the answers ",s),y(s);var c=s.map((function(e){return e.correctAnswer}));console.log("this is the correct array ",c),M(c),Pe(s)}(e)})).catch((function(e){return console.log("error is: ",e)}))}),[]),console.log("second log"),console.log("third log"),Object(c.useEffect)((function(){console.log("answer state ",k),null!==G&&function(){console.log("what happnes here");var e=[];for(var t in k)e.push(k[t]);console.log("here are 4 answers ",e);for(var s=[].concat(Object(m.a)(e[1]),[e[0]]),c=s.length-1;c>0;c--){var n=Math.floor(Math.random()*(c+1)),r=s[c];s[c]=s[n],s[n]=r}console.log("the array of four shuffled answers to be mapped ",s),console.log("whats good"),L(s)}()}),[G]),Object(c.useEffect)((function(){console.log("check out these entries ",ve)}),[ve]),Object(c.useEffect)((function(){fetch("/leaderboard_entries").then((function(e){e.ok&&e.json().then((function(e){return Ne(e)}))}))}),[ue]),Object(c.useEffect)((function(){fetch("/leaderboard_entries").then((function(e){e.ok&&e.json().then((function(e){return Ne(e)}))}))}),[xe]),Object(c.useEffect)((function(){h?(console.log("bout to show leaderboard",h),fetch("/Attempt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({score:g,user_id:n.id})}).then((function(e){return e.json()})).then((function(e){z(e),console.log("the attempt frmo the attempt fetch ",e)}))):console.log("NOTHING TO SEE HERE")}),[h]),Object(c.useEffect)((function(){null!==Q&&fetch("/Average").then((function(e){e.ok&&e.json().then((function(e){return _e(e)}))}))}),[Q]);var Re=10*X+"%",qe=10*re+"%",Me=10*te+"%",Ue=10*le+"%",Ye=10*g+"%";return console.log("high scory is ",Re),console.log("personal high scory is ",qe),console.log("average scory is ",Me),console.log("personal averagy is ",Ue),console.log("scooooorer ",g),Object(l.jsxs)("div",{className:"question-container",children:[h&&Q&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"score-section",children:["You scored ",g," out of 10!"]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"answer-results",children:Se.map((function(e){return void 0===e.yourWrongAnswer?Object(l.jsxs)("div",{className:"correct",children:[Object(l.jsx)("br",{}),Se.indexOf(e)+1,". ",e.question," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," CORRECT, it's  \"",e.answer,'"',Object(l.jsx)("br",{})]}):Object(l.jsxs)("div",{className:"incorrect",children:[Object(l.jsx)("br",{}),Se.indexOf(e)+1,". ",e.question," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),' You Chose "',e.yourWrongAnswer,'". But you\'re WRONG, Stupid! The correct answer is "',e.answer,'"',Object(l.jsx)("br",{})]})}))}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"entire-board",children:[Object(l.jsx)("h2",{className:"title",children:"Player Leaderboard"}),Object(l.jsxs)("table",{className:"taby",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"toprow",children:[Object(l.jsx)("th",{class:"rank",children:"Rank"}),Object(l.jsx)("th",{className:"play",children:"Player"}),Object(l.jsx)("th",{className:"play"}),Object(l.jsx)("th",{onClick:function(){console.log("whatsgoodwiddit")},class:"combined",children:"Combined Score"})]})}),ve.sort((function(e,t){return e.cumulative_score-t.cumulative_score})).reverse().map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{class:"rank",children:ve.indexOf(e)+1}),Object(l.jsx)("td",{className:"player-and-arrow",children:e.user.username}),Object(l.jsx)("td",{className:"player-and-arrow",children:"----------------------------------------------------------------\x3e"}),Object(l.jsx)("td",{class:"combined",children:e.cumulative_score})]})})).slice(0,15)]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"Compare your score with the TriviApp Graph!"}),Object(l.jsxs)("div",{class:"buttony",children:[Object(l.jsx)("div",{className:"scores uno",children:"Your Score"}),Object(l.jsx)("div",{className:"scores dos",children:"Your High Score"}),Object(l.jsx)("div",{className:"scores tres",children:"Average TriviApp score"}),Object(l.jsx)("div",{className:"scores quatro",children:"Your Average Score"})]}),Object(l.jsxs)("div",{class:"chart-container",children:[Object(l.jsx)("div",{class:"base"}),Object(l.jsxs)("ul",{class:"meter",children:[Object(l.jsx)("li",{children:Object(l.jsx)("div",{children:"8"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{children:"6"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{children:"4"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{children:"2"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{children:"0"})})]}),Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]})]}),Object(l.jsxs)("div",{class:"barnard",children:[Object(l.jsx)("div",{class:"bar one",style:{height:Ye}}),Object(l.jsx)("div",{class:"bar two",style:{height:qe}}),Object(l.jsx)("div",{class:"bar three",style:{height:Me}}),Object(l.jsx)("div",{class:"bar four",style:{height:Ue}})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"play-again",children:Object(l.jsx)(o.b,{to:"/Categories",children:"Play Again!"})})]}),!1===h&&null===Te&&Object(l.jsxs)("div",{className:"question-and-answer",children:[Object(l.jsxs)("div",{className:"question-section",children:[Object(l.jsxs)("div",{className:"question-count",children:[Object(l.jsxs)("span",{children:["Question ",j+1]}),"/",10]}),Object(l.jsx)("div",{className:"question-text",children:Le(J[G])})]}),Object(l.jsx)("div",{className:"answer-section",children:P.map((function(e){return Object(l.jsx)("button",{className:"options-button",value:e,onClick:function(e){return function(e){var t=q.filter((function(t){return e.target.value===t}));console.log("hence correct array state ",q),console.log("target value ",e.target.value),console.log("this is the filtered array ",t),0!==t.length?(p(g+1),Ce([].concat(Object(m.a)(Se),[{question:Le(J[j]),answer:Le(k.correctAnswer)}]))):Ce([].concat(Object(m.a)(Se),[{question:Le(J[j]),yourWrongAnswer:e.target.value,answer:Le(k.correctAnswer)}])),console.log("initial result array ",Se),d(j+1),j<9?Pe(w):O(!0)}(e)},children:Le(e)})}))})]}),null!==Te&&Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"whoopsie",children:"Whoops!"}),Object(l.jsxs)("h4",{className:"whoops-message",children:["The ",13===t?"Musicals and Theater":19===t?"Mathematics":24===t?"Politics":25===t?"Art":26===t?"Celebrities":30===t?"Gadgets":" whatever"," quiz is currently under construction. Please go back and try another quiz."]}),Object(l.jsx)(o.b,{to:"/Categories",className:"whoops-back-link",children:"Back"})]})]})};var f=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(null),o=Object(a.a)(r,2),u=o[0],m=o[1],f=Object(c.useState)(null),g=Object(a.a)(f,2),p=g[0],v=g[1];Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return n(e)}))}))}),[]);var N=["General Knowledge","Books","Film","Music","Musicals & Theater","Television","Video Games","Board Games","Science & Nature","Computers","Mathematics","Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals","Vehicles","Comics","Gadgets","Japanese Anime & Manga","Cartoon & Animations"];function w(e){console.log("working"),n(e),console.log("this is the user in handleLogin",e)}return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{user:s,setUser:n}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.a,{exact:!0,from:"/",to:"/Registration"}),Object(l.jsx)(i.b,{path:"/Registration",children:Object(l.jsx)(j,{})}),Object(l.jsx)(i.b,{path:"/Signup",children:Object(l.jsx)(d,{handleLogin:w})}),Object(l.jsx)(i.b,{path:"/Login",children:Object(l.jsx)(b,{handleLogin:w,user:s,setUser:n})}),Object(l.jsx)(i.b,{path:"/Categories",children:Object(l.jsx)(h,{user:s,setUser:n,handleCatAndDiff:function(e,t){for(var s=0;s<N.length;s++)N[s]===t&&(console.log("category number is ",s+9),m(s+9));v(e),console.log("the category is: ",u),console.log("the difficulty is: ",e),console.log(N)},listOfCategories:N})}),Object(l.jsx)(i.b,{path:"/Question",children:Object(l.jsx)(x,{category:u,difficulty:p,user:s})})]})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};r.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(f,{Route:i.b})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.c5ade52d.chunk.js.map