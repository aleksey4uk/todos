(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{103:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),u=a.n(c),o=a(28),i=a(37),l=a(21),d=a(11),s={data:[],value:"",editValue:{value:""}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD":return Object(d.a)({},e,{data:t.payload,loading:!0});case"COMPLETE":return Object(d.a)({},e,{loading:!1});case"DELETE":var a=e.data.findIndex((function(e){return e.id===t.payload}));return Object(d.a)({},e,{data:[].concat(Object(l.a)(e.data.slice(0,a)),Object(l.a)(e.data.slice(a+1)))});case"EDIT":var n=t.payload.value;return Object(d.a)({},e,{editValue:{value:n,id:t.payload.id,classes:"on"}});case"EDIT-START":return Object(d.a)({},e,{editValue:{value:e.data.find((function(e){return e.id===t.payload})).name,id:t.payload,classes:"on"}});case"EDIT-COMPLETE":var r=e.data.findIndex((function(t){return t.id===e.editValue.id}));return Object(d.a)({},e,{data:[].concat(Object(l.a)(e.data.slice(0,r)),[t.payload],Object(l.a)(e.data.slice(r+1))),editValue:Object(d.a)({},e.editValue,{classes:"off"})});case"CHECKED":var c=e.data.findIndex((function(e){return e.id===t.payload})),u=Object(d.a)({},e.data[c],{checked:!e.data[c].checked});return Object(d.a)({},e,{data:[].concat(Object(l.a)(e.data.slice(0,c)),[u],Object(l.a)(e.data.slice(c+1)))});case"ADD-VALUE":return Object(d.a)({},e,{value:t.payload.target.value});case"COMPLETE-VALUE":return Object(d.a)({},e,{data:[].concat(Object(l.a)(e.data),[t.payload]),value:""});default:return e}},f=Object(i.b)(p),m=a(144),h=a(145),E=a(141),v=(a(84),a(15)),b=a.n(v),y=a(33),O=a(38),j=a(34),k=a.n(j),C=function e(){var t=this;Object(O.a)(this,e),this.apiBase="http://localhost:3000/users/",this.getData=Object(y.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(t.apiBase);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))),this.deleteItem=function(){var e=Object(y.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(t.apiBase).concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.checkedItem=function(){var e=Object(y.a)(b.a.mark((function e(a,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.patch("".concat(t.apiBase).concat(a),{checked:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.editItem=function(){var e=Object(y.a)(b.a.mark((function e(a,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.patch("".concat(t.apiBase).concat(a),{name:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.addItem=function(){var e=Object(y.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.post(t.apiBase,a));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=new C,T=function(e){var t=e.value,a=e.onChanges,n=e.onSubmits,c=e.data;return r.a.createElement("div",{className:"add-panel"},r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return n(e,t,c)}},r.a.createElement(h.a,{className:"add-panel-inputs",fullWidth:!0,label:"Task",id:"outlined-size-small",variant:"outlined",size:"small",onChange:function(e){e.preventDefault(),a(e)},value:t}),r.a.createElement(E.a,{type:"submit",onSubmit:function(e){return n(e,t)},variant:"outlined",size:"small",color:"primary",className:"add-panel-button"},"ADD")))};T.defaultProps={value:"",data:[],onChanges:function(){},onSubmits:function(){}};var g=Object(o.b)((function(e){return Object(d.a)({},e)}),(function(e){return{onChanges:function(t){return e({type:"ADD-VALUE",payload:t})},onSubmits:function(t,a){if(t.preventDefault(),!(a.length<=0)){var n={name:a,checked:!1};D.addItem(n).then((function(t){var a=t.data;e({type:"COMPLETE-VALUE",payload:a})}))}}}}))(T),x=a(62),I=a(64),w=a(65),L=a(140),V=a(142),S=a(146),A=a(143),N=a(63),P=a.n(N),B=a(148),M=(a(103),function(e){var t=e.id,a=e.name,n=e.onEdit,c=e.onDelete,u=e.onChecked,o=e.checked,i=e.editValue,l=void 0!==i&&i,d=e.onEditStart,s=e.editComplete,p="list-item-text ",f="list-item-texts ";return l&&l.id===t&&(p+="on",f+="off"),"off"===l.classes&&(p="list-item-text ",f="list-item-texts "),r.a.createElement(V.a,{className:"list-items"},r.a.createElement(S.a,{checked:o,color:"primary",inputProps:{"aria-label":"secondary checkbox"},onClick:function(){return u(t,o)}}),r.a.createElement("form",{onSubmit:function(e){return s(e,t,l.value)}},r.a.createElement(h.a,{id:"".concat(t),autoComplete:"off",className:p,onChange:function(e){e.preventDefault(),n(e,t)},placeholder:a,value:l.value}),r.a.createElement(B.a,{className:f,id:t,primary:a,onClick:function(){d(t)}})),r.a.createElement(A.a,{"aria-label":"delete",onClick:function(){return c(t)}},r.a.createElement(P.a,null)))}),U=new C,z=function(e){Object(w.a)(a,e);var t=Object(I.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.load,a=e.complete;U.getData().then(t).then(a)}},{key:"render",value:function(){var e=this,t=this.props.data;return t.length<=0?r.a.createElement("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,t.map((function(t){var a=e.props,n=a.editValue,c=a.onEdit,u=a.onEditStart,o=a.onDelete,i=a.onChecked,l=a.editComplete;return r.a.createElement(M,{checked:t.checked,id:t.id,name:t.name,editValue:n,key:t.id,onEdit:c,onEditStart:u,onDelete:o,onChecked:i,editComplete:l})}))))}}]),a}(n.Component),H=Object(o.b)((function(e){return Object(d.a)({},e)}),(function(e){return{load:function(t){return e({type:"LOAD",payload:t})},complete:function(){return e({type:"COMPLETE"})},onDelete:function(t){U.deleteItem(t).then((function(){return e({type:"DELETE",payload:t})}))},onChecked:function(t,a){var n=!a;U.checkedItem(t,n).then((function(){return e({type:"CHECKED",payload:t})}))},onEdit:function(t,a){var n={value:t.target.value,id:a};e({type:"EDIT",payload:n})},onEditStart:function(t){return e({type:"EDIT-START",payload:t})},editComplete:function(t,a,n){t.preventDefault(),U.editItem(a,n).then((function(t){return e({type:"EDIT-COMPLETE",payload:t})}))}}}))(z),J=(a(106),function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m.a,{className:"card"},r.a.createElement(g,null),r.a.createElement(H,null)))});u.a.render(r.a.createElement(o.a,{store:f},r.a.createElement(J,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a(107)},84:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.97b33b5b.chunk.js.map