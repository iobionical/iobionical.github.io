module.exports=__NEXT_REGISTER_PAGE("/services",function(){var e=webpackJsonp([5],{229:function(e,t,n){e.exports=n(230)},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(9);var a=n.n(r);var o=n(0);var i=n.n(o);var s=n(28);var l=n.n(s);var c=n(16);var u=n.n(c);var p=n(17);var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var h=function(e){d(t,e);function t(){v(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){var t=this.props.services;return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"h2"},t.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}})))}}]);return t}(i.a.Component);var m=h;var y=n(18);var g=n(19);var _=n(231);var x=n.n(_);var E=n(20);var w=n.n(E);var O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function k(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o);var s=i.value}catch(e){n(e);return}if(i.done)e(s);else return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function I(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var T=x.a;var S=w.a;var C=function(e){I(t,e);O(t,null,[{key:"getInitialProps",value:function(){var e=k(a.a.mark(function e(){var t,n;return a.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:t=T;n=S;return r.abrupt("return",{globals:n,services:t});case 3:case"end":return r.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);function t(e){P(this,t);var n=j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={header:e.globals.header,contact_form:e.globals.contact_form,nav:e.globals.nav,social:e.globals.social,contactInfo:e.globals.contact_info.metadata,footer:e.globals.footer,productservices:e.services};return n}O(t,[{key:"render",value:function e(){return i.a.createElement(p["a"],null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Iobionical"),i.a.createElement("meta",{name:"description",content:this.state.productservices.metadata.seo_description}),i.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.header.metadata.favicon.url+"?w=32",sizes:"32x32"}),i.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.header.metadata.favicon.url+"?w=16",sizes:"16x16"})),i.a.createElement(y["a"],{header:this.state.header,nav:this.state.nav}),i.a.createElement(m,{services:this.state.productservices}),i.a.createElement(g["a"],{footer:this.state.footer,social:this.state.social,contactInfo:this.state.contactInfo}))}}]);return t}(i.a.Component);var R=t["default"]=C},231:function(e,t){e.exports={_id:"5ab90fbb2ed1234c2b60fc5b",bucket:"5ab90e73444caf1649f3cee7",slug:"services",title:"Services",content:'<p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;">Our cloud platform can be tailored for various purposes to fullfil needs of modern clinical trial. Possible co-operation projects might include:</p><p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><ul><span class="glyphicon glyphicon-ok" style="color:green"></span> Integration endpoint from PACS systems</ul></p><p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><ul><span class="glyphicon glyphicon-ok" style="color:green"></span> Storing DICOM images for analysis pusposes</ul></p><p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><ul><span class="glyphicon glyphicon-ok" style="color:green"></span> Analysis of images for anomalies using Tensor Flow (AI)</ul></p><p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><ul><span class="glyphicon glyphicon-ok" style="color:green"></span> HL7 FHIR integrations</ul></p><p style="margin-bottom: 1em; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><ul><span class="glyphicon glyphicon-ok" style="color:green"></span> Integrations to other systems</ul></p>',metafields:[{value:"This is the SEO description.  Keep it short.",key:"seo_description",title:"SEO Description",type:"textarea",children:false}],type_slug:"pages",created:"2018-03-26T15:20:27.352Z",created_at:"2018-03-26T15:20:27.352Z",order:11,status:"published",metadata:{seo_description:"This is the SEO description.  Keep it short."}}}},[229]);return{page:e.default}});