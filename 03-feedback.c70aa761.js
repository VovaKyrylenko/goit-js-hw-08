!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);(r=l("1WSnx")).drop;var r=l("1WSnx"),o="feedback-form-state",n=document.querySelector(".feedback-form"),s=document.getElementsByName("email")[0],i=document.getElementsByName("message")[0],m={};m.email=null===JSON.parse(localStorage.getItem(o))?"":JSON.parse(localStorage.getItem(o)).email,m.message=null===JSON.parse(localStorage.getItem(o))?"":JSON.parse(localStorage.getItem(o)).message,s.value=m.email,i.value=m.message,n.addEventListener("input",r.throttle((function(e){"email"===e.target.name&&(m.email=e.target.value,localStorage.setItem(o,JSON.stringify(m))),"message"===e.target.name&&(m.message=e.target.value,localStorage.setItem(o,JSON.stringify(m)))}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),console.log(m),localStorage.clear(),s.value="",i.value="",m={email:"",message:""}}))}();
//# sourceMappingURL=03-feedback.c70aa761.js.map