(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(12),r=n.n(a),l=n(8),s=n(6),c=n(10),i=n(2),u=n(3),d=n(5),b=n(4),h=n(7),f=n.n(h),j=(n(20),n(0)),m=function(t){var e=t.toDo,n=t.done;return Object(j.jsxs)("div",{className:"app-header d-flex",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},p=(n(22),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={searchText:""},t.handleChange=function(e){var n=e.target.value;t.setState({searchText:n}),t.props.onChange(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.searchText,onChange:this.handleChange})}}]),n}(o.Component)),g=n(13),O=n(9),v=n.n(O),x=(n(23),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,o=t.onToggleImportant,a=t.onToggleDone,r=t.isImportant,l=t.isDone,s=v()("todo-list-item",{done:l,important:r});return Object(j.jsxs)("span",{className:s,children:[Object(j.jsx)("span",{className:"todo-list-item-label",onClick:a,children:e}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:o,children:Object(j.jsx)("i",{className:"fa fa-exclamation"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(j.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),C=(n(24),["id"]),D=function(t){var e=t.todos,n=t.onDelete,o=t.onToggleImportant,a=t.onToggleDone;if(0===e.length)return null;var r=e.map((function(t){var e=t.id,r=Object(g.a)(t,C);return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)(x,Object(s.a)(Object(s.a)({},r),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},e)}));return Object(j.jsx)("ul",{className:"list-group todo-list",children:r})},I=(n(25),function(t){var e=t.filter,n=t.onChange,o=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(t){var o=t.name,a=t.label,r=v()("btn",{"btn-info":e===o,"btn-outline-secondary":e!==o});return Object(j.jsx)("button",{type:"button",className:r,onClick:function(){return n(o)},children:a},o)}));return Object(j.jsx)("div",{className:"btn-group",children:o})});I.defaultProps={filter:null};var y=I,N=(n(26),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.handleLabelChange=function(e){t.setState({label:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddItem(t.state.label),t.setState({label:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"What needs to be done",onChange:this.handleLabelChange,value:this.state.label}),Object(j.jsx)("button",{className:"btn btn-outline-secondary",disabled:!this.state.label,children:"Add Item"})]})}}]),n}(o.Component)),T=(n(27),[{id:Number(f.a.uniqueId()),label:"Drink coffee",isImportant:!1,isDone:!1},{id:Number(f.a.uniqueId()),label:"Build awesome app",isImportant:!0,isDone:!1},{id:Number(f.a.uniqueId()),label:"Have lunch",isImportant:!1,isDone:!1}]),S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:T,searchText:"",filterValue:"all"},t.deleteItem=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.addItem=function(e){var n={id:f.a.uniqueId(),label:e,isImported:!1,isDone:!1};t.setState((function(t){var e=t.todos;return{todos:[].concat(Object(c.a)(e),[n])}}))},t.toggleProperty=function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=Object(s.a)(Object(s.a)({},t[o]),{},Object(l.a)({},n,!t[o][n]));return[].concat(Object(c.a)(t.slice(0,o)),[a],Object(c.a)(t.slice(o+1)))},t.toggleImportant=function(e){t.setState((function(n){var o=n.todos;return{todos:t.toggleProperty(o,e,"isImportant")}}))},t.toggleDone=function(e){t.setState((function(n){var o=n.todos;return{todos:t.toggleProperty(o,e,"isDone")}}))},t.getDoneCount=function(){return t.state.todos.filter((function(t){return t.isDone})).length},t.search=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.filter=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.isDone}));case"done":return t.filter((function(t){return t.isDone}));default:return t}},t.getTodoCount=function(){return t.state.todos.length-t.getDoneCount()},t.handleSearchChange=function(e){t.setState({searchText:e})},t.handleFilterChange=function(e){t.setState({filterValue:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.todos,n=t.searchText,o=t.filterValue,a=this.filter(this.search(e,n),o);return Object(j.jsxs)("div",{className:"todo-app",children:[Object(j.jsx)(m,{toDo:this.getTodoCount(),done:this.getDoneCount()}),Object(j.jsxs)("div",{className:"top-panel d-flex",children:[Object(j.jsx)(p,{onChange:this.handleSearchChange}),Object(j.jsx)(y,{filter:o,onChange:this.handleFilterChange})]}),Object(j.jsx)(D,{todos:a,onDelete:this.deleteItem,onToggleImportant:this.toggleImportant,onToggleDone:this.toggleDone}),Object(j.jsx)(N,{onAddItem:this.addItem})]})}}]),n}(o.Component);r.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d4d1139e.chunk.js.map