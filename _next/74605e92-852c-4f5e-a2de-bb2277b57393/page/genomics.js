module.exports=__NEXT_REGISTER_PAGE("/genomics",function(){var e=webpackJsonp([8],{221:function(e,t,a){e.exports=a(222)},222:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(9);var i=a.n(n);var r=a(0);var o=a.n(r);var l=a(28);var c=a.n(l);var s=a(16);var u=a.n(s);var f=a(17);var p=a(39);var m=a.n(p);var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var g=function(e){v(t,e);function t(){h(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t=this.props.genomics;return o.a.createElement("div",null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 text-center",style:{marginTop:"30px",marginBottom:"50px"}},o.a.createElement("p",{className:"h1"},t.headline.value))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 text-center"},!!t.blurbs&&t.blurbs.map(function(e,t){return o.a.createElement("div",{key:"blurb_"+t,className:"col-sm-4 text-center"},o.a.createElement("div",{className:"h3",style:{marginBottom:"30px"}},e.value),o.a.createElement("div",{className:"img-circle center-block",style:{background:"url("+e.children[0].value+")",backgroundSize:"cover",height:"300px",width:"300px"}}),o.a.createElement("div",{style:{marginTop:"30px"}},e.children[1].value))}))),o.a.createElement("div",{className:"row",style:{marginTop:"30px"}},o.a.createElement("div",{className:"col-sm-12 text-center",style:{marginTop:"50px"}},o.a.createElement("p",{className:"h1"},t.call_to_action_text.value),o.a.createElement("br",null),o.a.createElement(m.a,{href:"/contact"},o.a.createElement("a",{className:"btn btn-default"},t.call_to_action_button_text.value))))))}}]);return t}(o.a.Component);var y=g;var _=a(18);var x=a(19);var E=a(223);var k=a.n(E);var w=a(20);var T=a.n(w);var O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function j(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(i,r){try{var o=t[i](r);var l=o.value}catch(e){a(e);return}if(o.done)e(l);else return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var B=k.a;var I=T.a;var S=function(e){P(t,e);O(t,null,[{key:"getInitialProps",value:function(){var e=j(i.a.mark(function e(){var t,a;return i.a.wrap(function e(n){while(1)switch(n.prev=n.next){case 0:t=B;a=I;return n.abrupt("return",{globals:a,genomics:t});case 3:case"end":return n.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);function t(e){C(this,t);var a=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={header:e.globals.header,contact_form:e.globals.contact_form,nav:e.globals.nav,social:e.globals.social,contactInfo:e.globals.contact_info.metadata,footer:e.globals.footer,productgenomics:e.genomics};return a}O(t,[{key:"render",value:function e(){return o.a.createElement(f["a"],null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Iobionical"),o.a.createElement("meta",{name:"description",content:this.state.productgenomics.metadata.seo_description}),o.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.header.metadata.favicon.url+"?w=32",sizes:"32x32"}),o.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.header.metadata.favicon.url+"?w=16",sizes:"16x16"})),o.a.createElement(_["a"],{header:this.state.header,nav:this.state.nav}),o.a.createElement(y,{genomics:this.state.productgenomics}),o.a.createElement(x["a"],{footer:this.state.footer,social:this.state.social,contactInfo:this.state.contactInfo}))}}]);return t}(o.a.Component);var G=t["default"]=S},223:function(e,t){e.exports={productdata:{imgurl:" https://iobionical.github.io/images/iot2.png",content:""},headline:{value:"TrialGenomics",key:"headline",title:"Headline",type:"text",children:false},subheadline:{value:"Complete turnkey IOT data capture solution for clinical trials",key:"subheadline",title:"Subheadline",type:"text",children:false},blurbs:[{value:"Genotyping as a Service",key:"blurb_1",link:"/services",title:"Blurb 1",type:"text",children:[{value:"https://iobionical.github.io/images/geno.png",key:"image",title:"Image",type:"file",children:false},{value:"There is companies offering affordable genotyping services for public. TrialGenomics is genotyping service in clinical setting offering full traceability and audit trails all the way from logistics of specimens to handling genotype data in our cloud.",key:"blurb_content",title:"Blurb Content",type:"textarea",children:false}]},{value:"Subject Eligibility",key:"blurb_1",link:"/sense",title:"Blurb 1",type:"text",children:[{value:"https://iobionical.github.io/images/medicalstaff.jpg",key:"image",title:"Image",type:"file",children:false},{value:"Greatest challenge in genetic variation data and computing has been the huge size of data files containing variants. Transferring such files might become as a obstacle and also warehousing such data in context of clinical trial may be challenging. TrialGenomics utilizes cloud based datalakes and parallel HPC patterns for finding variants of interest.",key:"blurb_content",title:"Blurb Content",type:"textarea",children:false}]},{value:"Reducing Costs",key:"blurb_1",link:"/genomics",title:"Blurb 1",type:"text",children:[{value:"https://iobionical.github.io/images/sequenc.jpg",key:"image",title:"Image",type:"file",children:false},{value:"Maintaining a infrastructure for genetic variation data may not be feasible for all organizations. Our infrastructure as a service reduces significantly operating costs of study while maintaining ownership of the data. Full end to end traceability and audit trail. We also offer decomissioning projects for moving data to derired location.",key:"blurb_content",title:"Blurb Content",type:"textarea",children:false}]}],call_to_action_text:{value:"Contact Us for more information!",key:"call_to_action_text",title:"Call To Action Text",type:"text",children:false},call_to_action_button_text:{value:"Contact Us",key:"call_to_action_button_text",title:"Call To Action Button Text",type:"text",children:false},call_to_action_button_link:{value:"/contact",key:"call_to_action_button_link",title:"Call To Action Button Link",type:"text",children:false},seo_description:{value:"This is the SEO description.  Keep it short.",key:"seo_description",title:"SEO Description",type:"textarea",children:false},metadata:{seo_description:"This is the SEO description.  Keep it short."}}}},[221]);return{page:e.default}});