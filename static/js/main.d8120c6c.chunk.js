(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i,c=n(1),r=n.n(c),a=n(35),s=n.n(a),l=(n(57),n(16)),o=n.n(l),u=n(4),d=n(20),b=n(30),p=n(31),m=n(33),h=n(32),j=(n(59),n(21)),g=(n(60),n(9)),O=n(2),f=Object(g.g)((function(e){var t=e.title,n=e.imageUrl,i=e.size,c=e.history,r=e.linkUrl,a=e.match;return Object(O.jsxs)("div",{className:"".concat(i," menu-item"),onClick:function(){return c.push("".concat(a.url).concat(r))},children:[Object(O.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(O.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),v=(n(66),n(8)),x=n(6),y=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections})),w=Object(x.b)({sections:y}),k=Object(v.b)(w)((function(e){var t=e.sections;return Object(O.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(j.a)(e,["id"]);return Object(c.createElement)(f,Object(u.a)(Object(u.a)({},n),{},{key:t}))}))})})),N=n(25),E=n(26),C=E.a.div(i||(i=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]))),U=function(){return Object(O.jsx)(C,{children:Object(O.jsx)(k,{})})},I=(n(68),n(69),function(e){var t=e.children,n=e.isGoogleSignIn,i=e.inverted,c=Object(j.a)(e,["children","isGoogleSignIn","inverted"]);return Object(O.jsx)("button",Object(u.a)(Object(u.a)({className:"".concat(i?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))}),T=(n(70),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"}),S=function(){return{type:T.TOGGLE_CART_HIDDEN}},M=function(e){return{type:T.ADD_ITEM,payload:e}},A=Object(v.b)(null,(function(e){return{addItem:function(t){return e(M(t))}}}))((function(e){var t=e.item,n=e.addItem,i=(t.id,t.name),c=t.price,r=t.imageUrl;return Object(O.jsxs)("div",{className:"collection-item",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(r,")")},className:"image"}),Object(O.jsxs)("div",{className:"collection-footer",children:[Object(O.jsx)("span",{className:"name",children:i}),Object(O.jsxs)("span",{className:"price",children:["$",c]})]}),Object(O.jsx)(I,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),B=(n(71),function(e){var t=e.title,n=e.items;return Object(O.jsxs)("div",{className:"collection-preview",children:[Object(O.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(O.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(O.jsx)(A,{item:e},e.id)}))})]})}),R=n(48),_=n.n(R),D=Object(x.a)([function(e){return e.shop}],(function(e){return e.collections})),P=Object(x.a)([D],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),G=_()((function(e){return Object(x.a)([D],(function(t){return t[e]}))})),W=Object(x.b)({collections:P}),q=Object(v.b)(W)((function(e){var t=e.collections;return Object(O.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(j.a)(e,["id"]);return Object(O.jsx)(B,Object(u.a)({},n),t)}))})})),H=(n(72),Object(v.b)((function(e,t){return{collection:G(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,i=t.items;return Object(O.jsxs)("div",{className:"collection-page",children:[Object(O.jsx)("h2",{className:"title",children:n}),Object(O.jsx)("div",{className:"items",children:i.map((function(e){return Object(O.jsx)(A,{item:e},e.id)}))})]})}))),L=function(e){var t=e.match;return Object(O.jsxs)("div",{className:"shop-page",children:[Object(O.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:q}),Object(O.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:H})]})},J=function(e){return e.cart},V=Object(x.a)([J],(function(e){return e.cartItems})),z=Object(x.a)([J],(function(e){return e.hidden})),F=Object(x.a)([V],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),K=Object(x.a)([V],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Q=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser})),X=(n(73),n(34)),Y=(n(89),n(74),function(){var e=Object(d.a)(o.a.mark((function e(t,n){var i,c,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return i=$.doc("users/".concat(t.uid)),e.next=5,i.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,r=t.email,a=new Date,e.prev=9,e.next=12,i.set(Object(u.a)({displayName:c,email:r,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());X.a.initializeApp({apiKey:"AIzaSyCt0MsvLBhxtAEs2U7AmZWV49LE-wlbTos",authDomain:"clothing-db-f0ca5.firebaseapp.com",projectId:"clothing-db-f0ca5",storageBucket:"clothing-db-f0ca5.appspot.com",messagingSenderId:"267466100378",appId:"1:267466100378:web:f37fa6cbf200d18cbf9923"});var Z=X.a.auth(),$=X.a.firestore(),ee=new X.a.auth.GoogleAuthProvider;ee.setCustomParameters({prompt:"select_account"});var te,ne,ie=function(){return Z.signInWithPopup(ee)};X.a;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ae(e,t){var n=e.title,i=e.titleId,r=re(e,["title","titleId"]);return c.createElement("svg",ce({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":i},r),void 0===n?c.createElement("title",{id:i},"Group"):n?c.createElement("title",{id:i},n):null,te||(te=c.createElement("desc",null,"Created with Sketch.")),ne||(ne=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var se,le,oe,ue,de,be,pe,me,he,je,ge,Oe,fe,ve,xe,ye=c.forwardRef(ae);n.p,n(76);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ne(e,t){var n=e.title,i=e.titleId,r=ke(e,["title","titleId"]);return c.createElement("svg",we({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},r),n?c.createElement("title",{id:i},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),se||(se=c.createElement("g",null)),le||(le=c.createElement("g",null)),oe||(oe=c.createElement("g",null)),ue||(ue=c.createElement("g",null)),de||(de=c.createElement("g",null)),be||(be=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),me||(me=c.createElement("g",null)),he||(he=c.createElement("g",null)),je||(je=c.createElement("g",null)),ge||(ge=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)),xe||(xe=c.createElement("g",null)))}var Ee,Ce,Ue,Ie,Te=c.forwardRef(Ne),Se=(n.p,Object(x.b)({itemCount:F})),Me=Object(v.b)(Se,(function(e){return{toggleCartHidden:function(){return e(S())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(O.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(O.jsx)(Te,{className:"shopping-icon"}),Object(O.jsx)("span",{className:"item-count",children:n})]})})),Ae=(n(77),function(e){var t=e.item,n=t.imageUrl,i=t.price,c=t.name,r=t.quantity;return Object(O.jsxs)("div",{className:"cart-item",children:[Object(O.jsx)("img",{src:n,alt:"item"}),Object(O.jsxs)("div",{className:"item-details",children:[Object(O.jsx)("span",{className:"name",children:c}),Object(O.jsxs)("span",{className:"price",children:[r," x $",i]})]})]})}),Be=(n(78),Object(x.b)({cartItems:V})),Re=Object(g.g)(Object(v.b)(Be)((function(e){var t=e.cartItems,n=e.history,i=e.dispatch;return Object(O.jsxs)("div",{className:"cart-dropdown",children:[Object(O.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(O.jsx)(Ae,{item:e},e.id)})):Object(O.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(O.jsx)(I,{onClick:function(){i(S()),n.push("/checkout")},children:"GO TO CHECKOUT"})]})}))),_e=n(19),De=E.a.div(Ee||(Ee=Object(N.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]))),Pe=Object(E.a)(_e.b)(Ce||(Ce=Object(N.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]))),Ge=E.a.div(Ue||(Ue=Object(N.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),We=Object(E.a)(_e.b)(Ie||(Ie=Object(N.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),qe=Object(x.b)({currentUser:Q,hidden:z}),He=Object(v.b)(qe)((function(e){var t=e.currentUser,n=e.hidden;return Object(O.jsxs)(De,{children:[Object(O.jsx)(Pe,{to:"/",children:Object(O.jsx)(ye,{className:"logo"})}),Object(O.jsxs)(Ge,{children:[Object(O.jsx)(We,{to:"/clothing-training/shop",children:"SHOP"}),Object(O.jsx)(We,{to:"/clothing-training/shop",children:"CONTACT"}),t?Object(O.jsx)(We,{as:"div",onClick:function(){return Z.signOut()},children:"SIGN OUT"}):Object(O.jsx)(We,{to:"/clothing-training/signin",children:"SIGN IN"}),Object(O.jsx)(Me,{})]}),n?null:Object(O.jsx)(Re,{})]})})),Le=(n(79),n(80),Object(v.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:T.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(M(t))},removeItem:function(t){return e(function(e){return{type:T.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,i=e.removeItem,c=e.addItem,r=t.name,a=t.imageUrl,s=t.price,l=t.quantity;return Object(O.jsxs)("div",{className:"checkout-item",children:[Object(O.jsx)("div",{className:"image-container",children:Object(O.jsx)("img",{alt:"item",src:a})}),Object(O.jsx)("span",{className:"name",children:r}),Object(O.jsxs)("span",{className:"quantity",children:[Object(O.jsx)("div",{className:"arrow",onClick:function(){return i(t)},children:"\u276e"}),Object(O.jsxs)("span",{className:"value",children:[" ",l]}),Object(O.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(O.jsxs)("span",{className:"price",children:["$",s]}),Object(O.jsx)("span",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Je=Object(x.b)({cartItems:V,total:K}),Ve=Object(v.b)(Je)((function(e){var t=e.cartItems,n=e.total;return Object(O.jsxs)("div",{className:"checkout-page",children:[Object(O.jsxs)("div",{className:"checkout-header",children:[Object(O.jsx)("div",{className:"header-blocks",children:Object(O.jsx)("span",{children:"Products"})}),Object(O.jsx)("div",{className:"header-blocks",children:Object(O.jsx)("span",{children:"Description"})}),Object(O.jsx)("div",{className:"header-blocks",children:Object(O.jsx)("span",{children:"Quantity"})}),Object(O.jsx)("div",{className:"header-blocks",children:Object(O.jsx)("span",{children:"Price"})}),Object(O.jsx)("div",{className:"header-blocks",children:Object(O.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(O.jsx)(Le,{cartItem:e},e.id)})),Object(O.jsx)("div",{className:"total",children:Object(O.jsxs)("span",{children:["TOTAL: $",n]})})]})})),ze=(n(81),n(29)),Fe=(n(82),n(83),function(e){var t=e.handleChange,n=e.label,i=Object(j.a)(e,["handleChange","label"]);return Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)("input",Object(u.a)({className:"form-input",onChange:t},i)),n?Object(O.jsx)("label",{className:"".concat(Object.keys(i).length?"shrink":""," form-input-label"),children:n}):null]})}),Ke=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(b.a)(this,n),(i=t.call(this,e)).handleSumbit=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=i.state,c=n.email,r=n.password,e.prev=2,e.next=5,Z.signInWithEmailAndPassword(c,r);case 5:i.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),i.handleChange=function(e){var t=e.target,n=t.value,c=t.name;i.setState(Object(ze.a)({},c,n))},i.state={email:"",password:""},i}return Object(p.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"sign-in",children:[Object(O.jsx)("h2",{children:"I already have an account"}),Object(O.jsx)("span",{children:"Sign in"}),Object(O.jsxs)("form",{onSubmit:this.handleSumbit,children:[Object(O.jsx)(Fe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(O.jsx)(Fe,{label:"password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(I,{type:"submit",value:"Submit form",children:"Sign In"}),Object(O.jsx)(I,{onClick:ie,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(r.a.Component),Qe=(n(84),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(d.a)(o.a.mark((function t(n){var i,c,r,a,s,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i=e.state,c=i.displayName,r=i.email,a=i.password,s=i.confirmPassword,a===s){t.next=5;break}return alert("Password doesn't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Z.createUserWithEmailAndPassword(r,a);case 8:return l=t.sent,u=l.user,t.next=12,Y(u,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,i=n.name,c=n.value;e.setState(Object(ze.a)({},i,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,i=e.password,c=e.confirmPassword;return Object(O.jsxs)("div",{className:"sign-up",children:[Object(O.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(O.jsx)("span",{children:"Sign up with email and password"}),Object(O.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(O.jsx)(Fe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Name",required:!0}),Object(O.jsx)(Fe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(O.jsx)(Fe,{type:"password",name:"password",value:i,onChange:this.handleChange,label:"password",required:!0}),Object(O.jsx)(Fe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:!0}),Object(O.jsx)(I,{type:"submit",children:"Sign Up"})]})]})}}]),n}(r.a.Component)),Xe=function(){return Object(O.jsxs)("div",{className:"sign-in-sign-out",children:[Object(O.jsx)(Ke,{}),Object(O.jsx)(Qe,{})]})},Ye="SET_CURRENT_USER",Ze=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).unsubscribeFromAuth=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=Z.onAuthStateChanged(function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,Y(n);case 3:t.sent.onSnapshot((function(t){e.props.setCurrentUser(Object(u.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e.props.setCurrentUser(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentDidUnount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(He,{}),Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/clothing-training/",component:U}),Object(O.jsx)(g.b,{path:"/clothing-training/shop",component:L}),Object(O.jsx)(g.b,{exact:!0,path:"/clothing-training/checkout",component:Ve}),Object(O.jsx)(g.b,{exact:!0,path:"/clothing-training/signin",render:function(){return e.props.currentUser?Object(O.jsx)(g.a,{to:"/"}):Object(O.jsx)(Xe,{})}})]})]})}}]),n}(r.a.Component),$e=Object(x.b)({currentUser:Q}),et=Object(v.b)($e,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ye,payload:e}}(t))}}}))(Ze),tt=n(50),nt=n(18),it=(n(85),n(36)),ct=n(51),rt=n.n(ct),at=n(52),st=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(at.a)(e),[Object(u.a)(Object(u.a)({},t),{},{quantity:1})])},lt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},ot={hidden:!0,cartItems:[]},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.TOGGLE_CART_HIDDEN:return Object(u.a)(Object(u.a)({},e),{},{hidden:!e.hidden});case T.ADD_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:st(e.cartItems,t.payload)});case T.REMOVE_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:lt(e.cartItems,t.payload)});case T.CLEAR_ITEM_FROM_CART:return Object(u.a)(Object(u.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},dt={currentUser:null},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});default:return e}},pt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ht={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;return t.type,e},gt={key:"root",storage:rt.a,whitelist:["cart"]},Ot=Object(nt.c)({user:bt,cart:ut,directory:mt,shop:jt}),ft=Object(it.a)(gt,Ot);var vt=Object(nt.d)(ft,nt.a.apply(void 0,[])),xt=Object(it.b)(vt);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v.a,{store:vt,children:Object(O.jsx)(_e.a,{children:Object(O.jsx)(tt.a,{persistor:xt,children:Object(O.jsx)(et,{})})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d8120c6c.chunk.js.map