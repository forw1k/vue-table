(function(){"use strict";var t={5058:function(t,r,e){e.d(r,{Z:function(){return rt}});var s=e(6369),n=function(){var t=this,r=t._self._c;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("router-view")],1)])},u=[],o=e(1001),i={},a=(0,o.Z)(i,n,u,!1,null,null,null),c=a.exports,l=e(2631),m=function(){var t=this,r=t._self._c;return r("div",{staticClass:"main"},[r("VSelect",{staticClass:"main__select"}),r("VTable")],1)},_=[],S=e(3822),h=function(){var t=this,r=t._self._c;return r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.headers,(function(e){return r("th",{key:e.value,staticClass:"table__title",class:{active:e.value===t.currentSort,rotate:"desc"===t.currentSortDir},on:{click:function(r){t.sort(e.value),t.setRouteParams(t.queryParams)}}},[t._v(" "+t._s(e.name)+" ")])})),0)]),r("tbody",t._l(t.sortedRows,(function(e){return r("tr",{key:e.id},t._l(e,(function(e){return r("td",{key:e.id,staticClass:"table__cell"},[t._v(" "+t._s(e)+" ")])})),0)})),0)])},d=[];e(7658);function p(t){const r={};return Object.entries(t).forEach((([t,e])=>{e&&(r[t]=e)})),r}function R(t){const r=p(t);rt.$router.push({query:r}).catch((()=>{}))}var y={name:"v-table",computed:{...(0,S.rn)(["headers","rows","currentSort","currentSortDir"]),...(0,S.Se)(["sortedRows","queryParams"])},methods:{...(0,S.OI)(["SET_CURRENT_SORT_DIR","SET_CURRENT_SORT"]),sort(t){if(t===this.currentSort){const t="asc"===this.currentSortDir?"desc":"asc";this.$store.commit("SET_CURRENT_SORT_DIR",t)}this.$store.commit("SET_CURRENT_SORT",t)},setRouteParams:R}},v=y,E=(0,o.Z)(v,h,d,!1,null,null,null),f=E.exports,T=function(){var t=this,r=t._self._c;return r("div",{staticClass:"v-select"},[r("VToggler",{staticClass:"v-select__toggler",attrs:{currentSelect:t.currentSelect,options:t.options},on:{select:t.selectOption}}),t.isRange?r("div",{staticClass:"v-select__block"},[r("VInput",{staticClass:"v-select__input",attrs:{value:t.queryParams.min,placeholder:"min",type:"number"},on:{setQuery:t.submitMinVal}}),r("VInput",{staticClass:"v-select__input",attrs:{value:t.queryParams.max,placeholder:"max",type:"number"},on:{setQuery:t.submitMaxVal}})],1):r("div",{staticClass:"v-select__block"},[r("VInput",{staticClass:"v-select__input",attrs:{value:t.queryParams.query,placeholder:t.currentSelect,type:"text"},on:{setQuery:t.submitQuery}})],1),r("VButton",{staticClass:"v-select__btn",attrs:{text:"Clear filters"},on:{btnClick:t.clearFilters}})],1)},b=[],C=function(){var t=this,r=t._self._c;return r("button",{staticClass:"btn",on:{click:t.btnClick}},[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)},g=[],M={name:"v-button",props:{text:{type:String}},methods:{btnClick(){this.$emit("btnClick")}}},Q=M,O=(0,o.Z)(Q,C,g,!1,null,null,null),N=O.exports,x=function(){var t=this,r=t._self._c;return r("input",{staticClass:"v-input",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.value},on:{input:t.setQuery}})},$=[],q={name:"v-input",props:{placeholder:{type:String},value:{type:[String,Number]},type:{type:String}},methods:{setQuery(t){this.$emit("setQuery",t.target.value)}}},D=q,I=(0,o.Z)(D,x,$,!1,null,null,null),w=I.exports,U=function(){var t=this,r=t._self._c;return r("div",{staticClass:"v-toggler"},t._l(t.options,(function(e){return r("div",{key:e.value,staticClass:"v-toggler__option",class:{active:t.currentSelect===e.value},on:{click:function(r){return t.select(e.value)}}},[t._v(" "+t._s(e.name)+" ")])})),0)},P=[],k={name:"v-toggler",props:{options:{type:Array,default:()=>[]},currentSelect:{type:String}},methods:{select(t){this.$emit("select",t)}}},V=k,Z=(0,o.Z)(V,U,P,!1,null,null,null),A=Z.exports,Y={name:"my-select",components:{VButton:N,VInput:w,VToggler:A},computed:{...(0,S.rn)(["options","currentSelect"]),...(0,S.Se)(["queryParams"]),isRange(){return"orders"===this.currentSelect}},methods:{...(0,S.OI)(["SET_ORDERS_MIN","SET_ORDERS_MAX","SET_SEARCH_QUERY","SET_CURRENT_SELECT","SET_INIT_QUERY"]),submitQuery(t){this.$store.commit("SET_SEARCH_QUERY",t.toLowerCase()),R(this.queryParams)},submitMinVal(t){this.$store.commit("SET_ORDERS_MIN",Math.abs(t)),R(this.queryParams)},submitMaxVal(t){this.$store.commit("SET_ORDERS_MAX",Math.abs(t)),R(this.queryParams)},selectOption(t){this.$store.commit("SET_INIT_QUERY"),this.$router.push({}).catch((()=>{})),this.$store.commit("SET_CURRENT_SELECT",t)},clearFilters(){this.$store.commit("SET_INIT_QUERY"),this.$router.push({}).catch((()=>{}))}}},j=Y,L=(0,o.Z)(j,T,b,!1,null,null,null),H=L.exports,X={name:"v-main",components:{VTable:f,VSelect:H},computed:{...(0,S.rn)(["initQuery"])},methods:{...(0,S.OI)(["SET_ORDERS_MIN","SET_ORDERS_MAX","SET_CURRENT_SORT","SET_CURRENT_SORT_DIR","SET_SEARCH_QUERY","SET_CURRENT_SELECT"])},mounted(){this.$store.commit("SET_ORDERS_MIN",this.$route.query.min?Number(this.$route.query.min):this.initQuery.ordersMin),this.$store.commit("SET_ORDERS_MAX",this.$route.query.max?Number(this.$route.query.max):this.initQuery.ordersMax),this.$store.commit("SET_CURRENT_SORT",this.$route.query.sort?this.$route.query.sort:this.initQuery.currentSort),this.$store.commit("SET_CURRENT_SORT_DIR",this.$route.query.dir?this.$route.query.dir:this.initQuery.currentSortDir),this.$store.commit("SET_SEARCH_QUERY",this.$route.query.query?this.$route.query.query:this.initQuery.searchQuery),this.$store.commit("SET_CURRENT_SELECT",this.$route.query.select?this.$route.query.select:this.initQuery.currentSelect)}},F=X,B=(0,o.Z)(F,m,_,!1,null,null,null),z=B.exports;s.ZP.use(l.ZP);const G=[{path:"/",name:"main",component:z}],J=new l.ZP({mode:"history",base:"/vue-table/",routes:G});var K=J;s.ZP.use(S.ZP);var W=new S.ZP.Store({state:{headers:[{name:"Место",value:"place"},{name:"Логин",value:"login"},{name:"Подтвержденные заказы",value:"orders"},{name:"Статус",value:"status"}],rows:[{place:1,login:"smith@gmail.com",orders:312,status:"Ценитель красоты"},{place:2,login:"lenin@gmail.com",orders:120,status:"Поставщик аксессуаров"},{place:3,login:"mask@gmail.com",orders:98,status:"Конкурент минздрава"},{place:4,login:"dog@mail.ru",orders:64,status:"рыбак"},{place:5,login:"nightmare@mail.ru",orders:34,status:"охотник"},{place:6,login:"cat@mail.ru",orders:1,status:"Ценитель красоты"}],options:[{name:"Логин",value:"login"},{name:"Подтвержденные заказы",value:"orders"},{name:"Статус",value:"status"}],initQuery:{searchQuery:"",currentSelect:"login",ordersMin:null,ordersMax:null,currentSort:"",currentSortDir:"asc"},searchQuery:"",currentSelect:"login",ordersMin:null,ordersMax:null,currentSort:"",currentSortDir:"asc"},getters:{filteredRows(t){return[...t.rows].filter((r=>{if("orders"===t.currentSelect){if(t.ordersMin&&!t.ordersMax)return Number(r.orders)>=Number(t.ordersMin);if(!t.ordersMin&&t.ordersMax)return Number(r.orders)<=Number(t.ordersMax);if(t.ordersMin&&t.ordersMax)return Number(r.orders)>=Number(t.ordersMin)&&Number(r.orders)<=Number(t.ordersMax)}else if(t.searchQuery)return r[t.currentSelect].toLowerCase().includes(t.searchQuery);return t.rows}))},sortedRows(t,r){return r.filteredRows.sort(((r,e)=>"login"===t.currentSort||"status"===t.currentSort?"asc"===t.currentSortDir?r[t.currentSort]?.localeCompare(e[t.currentSort]):e[t.currentSort]?.localeCompare(r[t.currentSort]):"asc"===t.currentSortDir?r[t.currentSort]-e[t.currentSort]:e[t.currentSort]-r[t.currentSort]))},queryParams(t){return{min:t.ordersMin,max:t.ordersMax,query:t.searchQuery,dir:t.currentSortDir,sort:t.currentSort,select:t.currentSelect}}},mutations:{SET_CURRENT_SELECT(t,r){t.currentSelect=r},SET_SEARCH_QUERY(t,r){t.searchQuery=r},SET_ORDERS_MIN(t,r){t.ordersMin=r},SET_ORDERS_MAX(t,r){t.ordersMax=r},SET_CURRENT_SORT(t,r){t.currentSort=r},SET_CURRENT_SORT_DIR(t,r){t.currentSortDir=r},SET_INIT_QUERY(t){t.searchQuery=t.initQuery.searchQuery,t.currentSelect=t.initQuery.currentSelect,t.ordersMin=t.initQuery.ordersMin,t.ordersMax=t.initQuery.ordersMax,t.currentSort=t.initQuery.currentSort,t.currentSortDir=t.initQuery.currentSortDir}},actions:{},modules:{}});s.ZP.config.productionTip=!1;const tt=new s.ZP({router:K,store:W,render:t=>t(c)}).$mount("#app");var rt=tt}},r={};function e(s){var n=r[s];if(void 0!==n)return n.exports;var u=r[s]={exports:{}};return t[s](u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(r,s,n,u){if(!s){var o=1/0;for(l=0;l<t.length;l++){s=t[l][0],n=t[l][1],u=t[l][2];for(var i=!0,a=0;a<s.length;a++)(!1&u||o>=u)&&Object.keys(e.O).every((function(t){return e.O[t](s[a])}))?s.splice(a--,1):(i=!1,u<o&&(o=u));if(i){t.splice(l--,1);var c=n();void 0!==c&&(r=c)}}return r}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[s,n,u]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,s){var n,u,o=s[0],i=s[1],a=s[2],c=0;if(o.some((function(r){return 0!==t[r]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(a)var l=a(e)}for(r&&r(s);c<o.length;c++)u=o[c],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(l)},s=self["webpackChunkvue_table_app"]=self["webpackChunkvue_table_app"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(5058)}));s=e.O(s)})();
//# sourceMappingURL=app.6290ad24.js.map