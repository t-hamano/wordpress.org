(window.wporgLearnPlugin=window.wporgLearnPlugin||[]).push([[9],{27:function(e,t,n){}}]),function(e){function t(t){for(var r,l,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(a&&a(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={5:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.wporgLearnPlugin=window.wporgLearnPlugin||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var a=u;i.push([31,9]),n()}({0:function(e,t){!function(){e.exports=this.wp.i18n}()},1:function(e,t){!function(){e.exports=this.wp.element}()},2:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.wp.blocks}()},31:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(0),i=(n(27),n(1)),l=n(4),s=n(5),u=n(6);var c=n(8);Object(r.registerBlockType)(c.name,{title:Object(o.__)("Lesson Plan Details","wporg-learn"),description:Object(o.__)("Show details about the Lesson Plan, pulled from post meta.","wporg-learn"),category:c.category,icon:c.icon,supports:c.supports,edit:function(e){var t=e.clientId,n=Object(u.a)("lesson-plan",Object(s.a)(),Object(s.b)(t,"wporg-learn-lesson-plans"),Object(o.__)("This will be dynamically populated based on settings in the Lesson Plan Details meta box.","wporg-learn"));return Object(i.createElement)(l.Placeholder,{label:Object(o.__)("Lesson Plan Details","wporg-learn")},Object(i.createElement)("p",null,n))},save:function(){return null}})},4:function(e,t){!function(){e.exports=this.wp.components}()},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(2),o=function(){return Object(r.useSelect)((function(e){return(0,e("core/editor").getCurrentPostType)()}))},i=function(e,t){return Object(r.useSelect)((function(n){var r=n("core/block-editor"),o=r.getBlockAttributes,i=r.getBlockName;return(0,r.getBlockParents)(e).some((function(e){return"core/widget-area"===i(e)&&o(e).id===t}))}))}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o={BLOCK_SIDEBAR_TYPE_INCOMPATIBLE:Object(r.__)("Error: This block is not compatible with this sidebar.","wporg-learn"),BLOCK_POST_TYPE_INCOMPATIBLE:Object(r.__)("Error: This block is not compatible with this post type.","wporg-learn")},i=function(e,t,n,r){if(null===t){if(!n)return o.BLOCK_SIDEBAR_TYPE_INCOMPATIBLE}else if(e!==t)return o.BLOCK_POST_TYPE_INCOMPATIBLE;return r}},8:function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wporg-learn/lesson-plan-details","title":"Lesson Plan Details","category":"widgets","icon":"info-outline","description":"","textdomain":"wporg-learn","supports":{"html":false},"editorScript":"file:../../build/lesson-plan-details.js","editorStyle":"file:../../build/lesson-plan-details.css","style":"file:../../build/style-lesson-plan-details.css"}')}});