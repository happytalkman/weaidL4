(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ig(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ic={exports:{}},Ia={},Dc={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function E_(){if(jp)return Tt;jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function g(N,z,_e){this.props=N,this.context=z,this.refs=S,this.updater=_e||v}g.prototype.isReactComponent={},g.prototype.setState=function(N,z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,z,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function p(){}p.prototype=g.prototype;function T(N,z,_e){this.props=N,this.context=z,this.refs=S,this.updater=_e||v}var I=T.prototype=new p;I.constructor=T,M(I,g.prototype),I.isPureReactComponent=!0;var R=Array.isArray,P=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(N,z,_e){var Ee,ge={},ze=null,ue=null;if(z!=null)for(Ee in z.ref!==void 0&&(ue=z.ref),z.key!==void 0&&(ze=""+z.key),z)P.call(z,Ee)&&!O.hasOwnProperty(Ee)&&(ge[Ee]=z[Ee]);var oe=arguments.length-2;if(oe===1)ge.children=_e;else if(1<oe){for(var Re=Array(oe),We=0;We<oe;We++)Re[We]=arguments[We+2];ge.children=Re}if(N&&N.defaultProps)for(Ee in oe=N.defaultProps,oe)ge[Ee]===void 0&&(ge[Ee]=oe[Ee]);return{$$typeof:s,type:N,key:ze,ref:ue,props:ge,_owner:U.current}}function D(N,z){return{$$typeof:s,type:N.type,key:z,ref:N.ref,props:N.props,_owner:N._owner}}function W(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Z(N){var z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_e){return z[_e]})}var F=/\/+/g;function j(N,z){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):z.toString(36)}function w(N,z,_e,Ee,ge){var ze=typeof N;(ze==="undefined"||ze==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(ze){case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case s:case e:ue=!0}}if(ue)return ue=N,ge=ge(ue),N=Ee===""?"."+j(ue,0):Ee,R(ge)?(_e="",N!=null&&(_e=N.replace(F,"$&/")+"/"),w(ge,z,_e,"",function(We){return We})):ge!=null&&(W(ge)&&(ge=D(ge,_e+(!ge.key||ue&&ue.key===ge.key?"":(""+ge.key).replace(F,"$&/")+"/")+N)),z.push(ge)),1;if(ue=0,Ee=Ee===""?".":Ee+":",R(N))for(var oe=0;oe<N.length;oe++){ze=N[oe];var Re=Ee+j(ze,oe);ue+=w(ze,z,_e,Re,ge)}else if(Re=m(N),typeof Re=="function")for(N=Re.call(N),oe=0;!(ze=N.next()).done;)ze=ze.value,Re=Ee+j(ze,oe++),ue+=w(ze,z,_e,Re,ge);else if(ze==="object")throw z=String(N),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ue}function Y(N,z,_e){if(N==null)return N;var Ee=[],ge=0;return w(N,Ee,"","",function(ze){return z.call(_e,ze,ge++)}),Ee}function le(N){if(N._status===-1){var z=N._result;z=z(),z.then(function(_e){(N._status===0||N._status===-1)&&(N._status=1,N._result=_e)},function(_e){(N._status===0||N._status===-1)&&(N._status=2,N._result=_e)}),N._status===-1&&(N._status=0,N._result=z)}if(N._status===1)return N._result.default;throw N._result}var q={current:null},J={transition:null},H={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:J,ReactCurrentOwner:U};function K(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:Y,forEach:function(N,z,_e){Y(N,function(){z.apply(this,arguments)},_e)},count:function(N){var z=0;return Y(N,function(){z++}),z},toArray:function(N){return Y(N,function(z){return z})||[]},only:function(N){if(!W(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Tt.Component=g,Tt.Fragment=t,Tt.Profiler=a,Tt.PureComponent=T,Tt.StrictMode=r,Tt.Suspense=d,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Tt.act=K,Tt.cloneElement=function(N,z,_e){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ee=M({},N.props),ge=N.key,ze=N.ref,ue=N._owner;if(z!=null){if(z.ref!==void 0&&(ze=z.ref,ue=U.current),z.key!==void 0&&(ge=""+z.key),N.type&&N.type.defaultProps)var oe=N.type.defaultProps;for(Re in z)P.call(z,Re)&&!O.hasOwnProperty(Re)&&(Ee[Re]=z[Re]===void 0&&oe!==void 0?oe[Re]:z[Re])}var Re=arguments.length-2;if(Re===1)Ee.children=_e;else if(1<Re){oe=Array(Re);for(var We=0;We<Re;We++)oe[We]=arguments[We+2];Ee.children=oe}return{$$typeof:s,type:N.type,key:ge,ref:ze,props:Ee,_owner:ue}},Tt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Tt.createElement=A,Tt.createFactory=function(N){var z=A.bind(null,N);return z.type=N,z},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(N){return{$$typeof:f,render:N}},Tt.isValidElement=W,Tt.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:le}},Tt.memo=function(N,z){return{$$typeof:h,type:N,compare:z===void 0?null:z}},Tt.startTransition=function(N){var z=J.transition;J.transition={};try{N()}finally{J.transition=z}},Tt.unstable_act=K,Tt.useCallback=function(N,z){return q.current.useCallback(N,z)},Tt.useContext=function(N){return q.current.useContext(N)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(N){return q.current.useDeferredValue(N)},Tt.useEffect=function(N,z){return q.current.useEffect(N,z)},Tt.useId=function(){return q.current.useId()},Tt.useImperativeHandle=function(N,z,_e){return q.current.useImperativeHandle(N,z,_e)},Tt.useInsertionEffect=function(N,z){return q.current.useInsertionEffect(N,z)},Tt.useLayoutEffect=function(N,z){return q.current.useLayoutEffect(N,z)},Tt.useMemo=function(N,z){return q.current.useMemo(N,z)},Tt.useReducer=function(N,z,_e){return q.current.useReducer(N,z,_e)},Tt.useRef=function(N){return q.current.useRef(N)},Tt.useState=function(N){return q.current.useState(N)},Tt.useSyncExternalStore=function(N,z,_e){return q.current.useSyncExternalStore(N,z,_e)},Tt.useTransition=function(){return q.current.useTransition()},Tt.version="18.3.1",Tt}var Yp;function fd(){return Yp||(Yp=1,Dc.exports=E_()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function w_(){if(qp)return Ia;qp=1;var s=fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var x,y={},m=null,v=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(v=d.ref);for(x in d)r.call(d,x)&&!l.hasOwnProperty(x)&&(y[x]=d[x]);if(f&&f.defaultProps)for(x in d=f.defaultProps,d)y[x]===void 0&&(y[x]=d[x]);return{$$typeof:e,type:f,key:m,ref:v,props:y,_owner:a.current}}return Ia.Fragment=t,Ia.jsx=u,Ia.jsxs=u,Ia}var $p;function T_(){return $p||($p=1,Ic.exports=w_()),Ic.exports}var re=T_(),al={},Lc={exports:{}},On={},Uc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function b_(){return Kp||(Kp=1,(function(s){function e(J,H){var K=J.length;J.push(H);e:for(;0<K;){var N=K-1>>>1,z=J[N];if(0<a(z,H))J[N]=H,J[K]=z,K=N;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var H=J[0],K=J.pop();if(K!==H){J[0]=K;e:for(var N=0,z=J.length,_e=z>>>1;N<_e;){var Ee=2*(N+1)-1,ge=J[Ee],ze=Ee+1,ue=J[ze];if(0>a(ge,K))ze<z&&0>a(ue,ge)?(J[N]=ue,J[ze]=K,N=ze):(J[N]=ge,J[Ee]=K,N=Ee);else if(ze<z&&0>a(ue,K))J[N]=ue,J[ze]=K,N=ze;else break e}}return H}function a(J,H){var K=J.sortIndex-H.sortIndex;return K!==0?K:J.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],h=[],x=1,y=null,m=3,v=!1,M=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(J){for(var H=t(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=J)r(h),H.sortIndex=H.expirationTime,e(d,H);else break;H=t(h)}}function R(J){if(S=!1,I(J),!M)if(t(d)!==null)M=!0,le(P);else{var H=t(h);H!==null&&q(R,H.startTime-J)}}function P(J,H){M=!1,S&&(S=!1,p(A),A=-1),v=!0;var K=m;try{for(I(H),y=t(d);y!==null&&(!(y.expirationTime>H)||J&&!Z());){var N=y.callback;if(typeof N=="function"){y.callback=null,m=y.priorityLevel;var z=N(y.expirationTime<=H);H=s.unstable_now(),typeof z=="function"?y.callback=z:y===t(d)&&r(d),I(H)}else r(d);y=t(d)}if(y!==null)var _e=!0;else{var Ee=t(h);Ee!==null&&q(R,Ee.startTime-H),_e=!1}return _e}finally{y=null,m=K,v=!1}}var U=!1,O=null,A=-1,D=5,W=-1;function Z(){return!(s.unstable_now()-W<D)}function F(){if(O!==null){var J=s.unstable_now();W=J;var H=!0;try{H=O(!0,J)}finally{H?j():(U=!1,O=null)}}else U=!1}var j;if(typeof T=="function")j=function(){T(F)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,Y=w.port2;w.port1.onmessage=F,j=function(){Y.postMessage(null)}}else j=function(){g(F,0)};function le(J){O=J,U||(U=!0,j())}function q(J,H){A=g(function(){J(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){M||v||(M=!0,le(P))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(J){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var K=m;m=H;try{return J()}finally{m=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,H){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var K=m;m=J;try{return H()}finally{m=K}},s.unstable_scheduleCallback=function(J,H,K){var N=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,J){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,J={id:x++,callback:H,priorityLevel:J,startTime:K,expirationTime:z,sortIndex:-1},K>N?(J.sortIndex=K,e(h,J),t(d)===null&&J===t(h)&&(S?(p(A),A=-1):S=!0,q(R,K-N))):(J.sortIndex=z,e(d,J),M||v||(M=!0,le(P))),J},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(J){var H=m;return function(){var K=m;m=H;try{return J.apply(this,arguments)}finally{m=K}}}})(Fc)),Fc}var Zp;function A_(){return Zp||(Zp=1,Uc.exports=b_()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function C_(){if(Jp)return On;Jp=1;var s=fd(),e=A_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function m(n){return d.call(y,n)?!0:d.call(x,n)?!1:h.test(n)?y[n]=!0:(x[n]=!0,!1)}function v(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||v(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function S(n,i,o,c,_,E,L){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=_,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=E,this.removeEmptyString=L}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){g[n]=new S(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];g[i]=new S(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){g[n]=new S(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){g[n]=new S(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){g[n]=new S(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){g[n]=new S(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){g[n]=new S(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){g[n]=new S(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){g[n]=new S(n,5,!1,n.toLowerCase(),null,!1,!1)});var p=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(p,T);g[i]=new S(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(p,T);g[i]=new S(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(p,T);g[i]=new S(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){g[n]=new S(n,1,!1,n.toLowerCase(),null,!1,!1)}),g.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){g[n]=new S(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var _=g.hasOwnProperty(i)?g[i]:null;(_!==null?_.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,_,c)&&(o=null),c||_===null?m(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):_.mustUseProperty?n[_.propertyName]=o===null?_.type===3?!1:"":o:(i=_.attributeName,c=_.attributeNamespace,o===null?n.removeAttribute(i):(_=_.type,o=_===3||_===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),Z=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),J=Symbol.iterator;function H(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,N;function z(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var _e=!1;function Ee(n,i){if(!n||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Te){var c=Te}Reflect.construct(n,[],i)}else{try{i.call()}catch(Te){c=Te}n.call(i.prototype)}else{try{throw Error()}catch(Te){c=Te}n()}}catch(Te){if(Te&&c&&typeof Te.stack=="string"){for(var _=Te.stack.split(`
`),E=c.stack.split(`
`),L=_.length-1,$=E.length-1;1<=L&&0<=$&&_[L]!==E[$];)$--;for(;1<=L&&0<=$;L--,$--)if(_[L]!==E[$]){if(L!==1||$!==1)do if(L--,$--,0>$||_[L]!==E[$]){var te=`
`+_[L].replace(" at new "," at ");return n.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",n.displayName)),te}while(1<=L&&0<=$);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?z(n):""}function ge(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ze(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case U:return"Portal";case D:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case w:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Z:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case F:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:ze(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return ze(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ze(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var _=o.get,E=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return _.call(this)},set:function(L){c=""+L,E.call(this,L)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(L){c=""+L},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=We(n))}function ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function b(n,i){var o=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Me(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=oe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function he(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function V(n,i){he(n,i);var o=oe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ie(n,i.type,o):i.hasOwnProperty("defaultValue")&&ie(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function G(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ie(n,i,o){(i!=="number"||wt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ce=Array.isArray;function Ae(n,i,o,c){if(n=n.options,i){i={};for(var _=0;_<o.length;_++)i["$"+o[_]]=!0;for(o=0;o<n.length;o++)_=i.hasOwnProperty("$"+n[o].value),n[o].selected!==_&&(n[o].selected=_),_&&c&&(n[o].defaultSelected=!0)}else{for(o=""+oe(o),i=null,_=0;_<n.length;_++){if(n[_].value===o){n[_].selected=!0,c&&(n[_].defaultSelected=!0);return}i!==null||n[_].disabled||(i=n[_])}i!==null&&(i.selected=!0)}}function ce(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ce(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:oe(o)}}function Ge(n,i){var o=oe(i.value),c=oe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function be(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function B(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?B(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,de=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,_){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,_)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ye(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(n){Ve.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Le[i]=Le[n]})});function ee(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Le.hasOwnProperty(n)&&Le[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,_=ee(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,_):n[o]=_}}var Ie=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ht=null,pt=null,ne=null;function Xe(n){if(n=_a(n)){if(typeof ht!="function")throw Error(t(280));var i=n.stateNode;i&&(i=So(i),ht(n.stateNode,n.type,i))}}function Pe(n){pt?ne?ne.push(n):ne=[n]:pt=n}function je(){if(pt){var n=pt,i=ne;if(ne=pt=null,Xe(n),i)for(n=0;n<i.length;n++)Xe(i[n])}}function Je(n,i){return n(i)}function De(){}var ft=!1;function ot(n,i,o){if(ft)return n(i,o);ft=!0;try{return Je(n,i,o)}finally{ft=!1,(pt!==null||ne!==null)&&(De(),je())}}function It(n,i){var o=n.stateNode;if(o===null)return null;var c=So(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Pt=!1;if(f)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Pt=!1}function $n(n,i,o,c,_,E,L,$,te){var Te=Array.prototype.slice.call(arguments,3);try{i.apply(o,Te)}catch(ke){this.onError(ke)}}var Rr=!1,ss=null,Pr=!1,Nr=null,tu={onError:function(n){Rr=!0,ss=n}};function no(n,i,o,c,_,E,L,$,te){Rr=!1,ss=null,$n.apply(tu,arguments)}function io(n,i,o,c,_,E,L,$,te){if(no.apply(this,arguments),Rr){if(Rr){var Te=ss;Rr=!1,ss=null}else throw Error(t(198));Pr||(Pr=!0,Nr=Te)}}function bn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function as(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ks(n){if(bn(n)!==n)throw Error(t(188))}function ro(n){var i=n.alternate;if(!i){if(i=bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var _=o.return;if(_===null)break;var E=_.alternate;if(E===null){if(c=_.return,c!==null){o=c;continue}break}if(_.child===E.child){for(E=_.child;E;){if(E===o)return Ks(_),n;if(E===c)return Ks(_),i;E=E.sibling}throw Error(t(188))}if(o.return!==c.return)o=_,c=E;else{for(var L=!1,$=_.child;$;){if($===o){L=!0,o=_,c=E;break}if($===c){L=!0,c=_,o=E;break}$=$.sibling}if(!L){for($=E.child;$;){if($===o){L=!0,o=E,c=_;break}if($===c){L=!0,c=E,o=_;break}$=$.sibling}if(!L)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ir(n){return n=ro(n),n!==null?Zs(n):null}function Zs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Zs(n);if(i!==null)return i;n=n.sibling}return null}var Dr=e.unstable_scheduleCallback,Js=e.unstable_cancelCallback,so=e.unstable_shouldYield,nu=e.unstable_requestPaint,Yt=e.unstable_now,iu=e.unstable_getCurrentPriorityLevel,Qs=e.unstable_ImmediatePriority,ea=e.unstable_UserBlockingPriority,k=e.unstable_NormalPriority,se=e.unstable_LowPriority,we=e.unstable_IdlePriority,pe=null,fe=null;function Ke(n){if(fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:ct,qe=Math.log,st=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-(qe(n)/st|0)|0}var xt=64,St=4194304;function nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,_=n.suspendedLanes,E=n.pingedLanes,L=o&268435455;if(L!==0){var $=L&~_;$!==0?c=nt($):(E&=L,E!==0&&(c=nt(E)))}else L=o&~_,L!==0?c=nt(L):E!==0&&(c=nt(E));if(c===0)return 0;if(i!==0&&i!==c&&(i&_)===0&&(_=c&-c,E=i&-i,_>=E||_===16&&(E&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Ye(i),_=1<<o,c|=n[o],i&=~_;return c}function Kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,_=n.expirationTimes,E=n.pendingLanes;0<E;){var L=31-Ye(E),$=1<<L,te=_[L];te===-1?(($&o)===0||($&c)!==0)&&(_[L]=Kt($,i)):te<=i&&(n.expiredLanes|=$),E&=~$}}function kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function sn(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function Qe(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Qt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ye(i),n[i]=o}function At(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var _=31-Ye(o),E=1<<_;i[_]=0,c[_]=-1,n[_]=-1,o&=~E}}function vn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Ye(o),_=1<<c;_&i|n[c]&i&&(n[c]|=i),o&=~_}}var Mt=0;function oi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ki,Dt,Xt,li,Bt,Kn=!1,ui=[],ci=null,ir=null,rr=null,ta=new Map,na=new Map,sr=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(n,i){switch(n){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(n,i,o,c,_,E){return n===null||n.nativeEvent!==E?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:E,targetContainers:[_]},i!==null&&(i=_a(i),i!==null&&Dt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,_!==null&&i.indexOf(_)===-1&&i.push(_),n)}function jg(n,i,o,c,_){switch(i){case"focusin":return ci=ia(ci,n,i,o,c,_),!0;case"dragenter":return ir=ia(ir,n,i,o,c,_),!0;case"mouseover":return rr=ia(rr,n,i,o,c,_),!0;case"pointerover":var E=_.pointerId;return ta.set(E,ia(ta.get(E)||null,n,i,o,c,_)),!0;case"gotpointercapture":return E=_.pointerId,na.set(E,ia(na.get(E)||null,n,i,o,c,_)),!0}return!1}function Pd(n){var i=Lr(n.target);if(i!==null){var o=bn(i);if(o!==null){if(i=o.tag,i===13){if(i=as(o),i!==null){n.blockedOn=i,Bt(n.priority,function(){Xt(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ao(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=su(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Fe=c,o.target.dispatchEvent(c),Fe=null}else return i=_a(o),i!==null&&Dt(i),n.blockedOn=o,!1;i.shift()}return!0}function Nd(n,i,o){ao(n)&&o.delete(i)}function Yg(){Kn=!1,ci!==null&&ao(ci)&&(ci=null),ir!==null&&ao(ir)&&(ir=null),rr!==null&&ao(rr)&&(rr=null),ta.forEach(Nd),na.forEach(Nd)}function ra(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yg)))}function sa(n){function i(_){return ra(_,n)}if(0<ui.length){ra(ui[0],n);for(var o=1;o<ui.length;o++){var c=ui[o];c.blockedOn===n&&(c.blockedOn=null)}}for(ci!==null&&ra(ci,n),ir!==null&&ra(ir,n),rr!==null&&ra(rr,n),ta.forEach(i),na.forEach(i),o=0;o<sr.length;o++)c=sr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)Pd(o),o.blockedOn===null&&sr.shift()}var os=R.ReactCurrentBatchConfig,oo=!0;function qg(n,i,o,c){var _=Mt,E=os.transition;os.transition=null;try{Mt=1,ru(n,i,o,c)}finally{Mt=_,os.transition=E}}function $g(n,i,o,c){var _=Mt,E=os.transition;os.transition=null;try{Mt=4,ru(n,i,o,c)}finally{Mt=_,os.transition=E}}function ru(n,i,o,c){if(oo){var _=su(n,i,o,c);if(_===null)Mu(n,i,c,lo,o),Rd(n,c);else if(jg(_,n,i,o,c))c.stopPropagation();else if(Rd(n,c),i&4&&-1<Xg.indexOf(n)){for(;_!==null;){var E=_a(_);if(E!==null&&ki(E),E=su(n,i,o,c),E===null&&Mu(n,i,c,lo,o),E===_)break;_=E}_!==null&&c.stopPropagation()}else Mu(n,i,c,null,o)}}var lo=null;function su(n,i,o,c){if(lo=null,n=it(c),n=Lr(n),n!==null)if(i=bn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=as(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return lo=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iu()){case Qs:return 1;case ea:return 4;case k:case se:return 16;case we:return 536870912;default:return 16}default:return 16}}var ar=null,au=null,uo=null;function Dd(){if(uo)return uo;var n,i=au,o=i.length,c,_="value"in ar?ar.value:ar.textContent,E=_.length;for(n=0;n<o&&i[n]===_[n];n++);var L=o-n;for(c=1;c<=L&&i[o-c]===_[E-c];c++);return uo=_.slice(n,1<c?1-c:void 0)}function co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function fo(){return!0}function Ld(){return!1}function Hn(n){function i(o,c,_,E,L){this._reactName=o,this._targetInst=_,this.type=c,this.nativeEvent=E,this.target=L,this.currentTarget=null;for(var $ in n)n.hasOwnProperty($)&&(o=n[$],this[$]=o?o(E):E[$]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?fo:Ld,this.isPropagationStopped=Ld,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Hn(ls),aa=K({},ls,{view:0,detail:0}),Kg=Hn(aa),lu,uu,oa,ho=K({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(lu=n.screenX-oa.screenX,uu=n.screenY-oa.screenY):uu=lu=0,oa=n),lu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),Ud=Hn(ho),Zg=K({},ho,{dataTransfer:0}),Jg=Hn(Zg),Qg=K({},aa,{relatedTarget:0}),cu=Hn(Qg),e0=K({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),t0=Hn(e0),n0=K({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),i0=Hn(n0),r0=K({},ls,{data:0}),Fd=Hn(r0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=o0[n])?!!i[n]:!1}function fu(){return l0}var u0=K({},aa,{key:function(n){if(n.key){var i=s0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?a0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(n){return n.type==="keypress"?co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),c0=Hn(u0),f0=K({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Hn(f0),d0=K({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),h0=Hn(d0),p0=K({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),m0=Hn(p0),g0=K({},ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Hn(g0),v0=[9,13,27,32],du=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var x0=f&&"TextEvent"in window&&!la,Od=f&&(!du||la&&8<la&&11>=la),Bd=" ",zd=!1;function Hd(n,i){switch(n){case"keyup":return v0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function y0(n,i){switch(n){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(zd=!0,Bd);case"textInput":return n=i.data,n===Bd&&zd?null:n;default:return null}}function S0(n,i){if(us)return n==="compositionend"||!du&&Hd(n,i)?(n=Dd(),uo=au=ar=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Od&&i.locale!=="ko"?null:i.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!M0[n.type]:i==="textarea"}function Wd(n,i,o,c){Pe(c),i=vo(i,"onChange"),0<i.length&&(o=new ou("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ua=null,ca=null;function E0(n){lh(n,0)}function po(n){var i=ps(n);if(ut(i))return n}function w0(n,i){if(n==="change")return i}var Xd=!1;if(f){var hu;if(f){var pu="oninput"in document;if(!pu){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),pu=typeof jd.oninput=="function"}hu=pu}else hu=!1;Xd=hu&&(!document.documentMode||9<document.documentMode)}function Yd(){ua&&(ua.detachEvent("onpropertychange",qd),ca=ua=null)}function qd(n){if(n.propertyName==="value"&&po(ca)){var i=[];Wd(i,ca,n,it(n)),ot(E0,i)}}function T0(n,i,o){n==="focusin"?(Yd(),ua=i,ca=o,ua.attachEvent("onpropertychange",qd)):n==="focusout"&&Yd()}function b0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return po(ca)}function A0(n,i){if(n==="click")return po(i)}function C0(n,i){if(n==="input"||n==="change")return po(i)}function R0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:R0;function fa(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var _=o[c];if(!d.call(i,_)||!fi(n[_],i[_]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,i){var o=$d(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$d(o)}}function Zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Jd(){for(var n=window,i=wt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=wt(n.document)}return i}function mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function P0(n){var i=Jd(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Zd(o.ownerDocument.documentElement,o)){if(c!==null&&mu(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var _=o.textContent.length,E=Math.min(c.start,_);c=c.end===void 0?E:Math.min(c.end,_),!n.extend&&E>c&&(_=c,c=E,E=_),_=Kd(o,E);var L=Kd(o,c);_&&L&&(n.rangeCount!==1||n.anchorNode!==_.node||n.anchorOffset!==_.offset||n.focusNode!==L.node||n.focusOffset!==L.offset)&&(i=i.createRange(),i.setStart(_.node,_.offset),n.removeAllRanges(),E>c?(n.addRange(i),n.extend(L.node,L.offset)):(i.setEnd(L.node,L.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N0=f&&"documentMode"in document&&11>=document.documentMode,cs=null,gu=null,da=null,_u=!1;function Qd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_u||cs==null||cs!==wt(c)||(c=cs,"selectionStart"in c&&mu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&fa(da,c)||(da=c,c=vo(gu,"onSelect"),0<c.length&&(i=new ou("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=cs)))}function mo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var fs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},vu={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function go(n){if(vu[n])return vu[n];if(!fs[n])return n;var i=fs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in eh)return vu[n]=i[o];return n}var th=go("animationend"),nh=go("animationiteration"),ih=go("animationstart"),rh=go("transitionend"),sh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){sh.set(n,i),l(i,[n])}for(var xu=0;xu<ah.length;xu++){var yu=ah[xu],I0=yu.toLowerCase(),D0=yu[0].toUpperCase()+yu.slice(1);or(I0,"on"+D0)}or(th,"onAnimationEnd"),or(nh,"onAnimationIteration"),or(ih,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function oh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,io(c,i,void 0,n),n.currentTarget=null}function lh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],_=c.event;c=c.listeners;e:{var E=void 0;if(i)for(var L=c.length-1;0<=L;L--){var $=c[L],te=$.instance,Te=$.currentTarget;if($=$.listener,te!==E&&_.isPropagationStopped())break e;oh(_,$,Te),E=te}else for(L=0;L<c.length;L++){if($=c[L],te=$.instance,Te=$.currentTarget,$=$.listener,te!==E&&_.isPropagationStopped())break e;oh(_,$,Te),E=te}}}if(Pr)throw n=Nr,Pr=!1,Nr=null,n}function Vt(n,i){var o=i[Cu];o===void 0&&(o=i[Cu]=new Set);var c=n+"__bubble";o.has(c)||(uh(i,n,2,!1),o.add(c))}function Su(n,i,o){var c=0;i&&(c|=4),uh(o,n,c,i)}var _o="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[_o]){n[_o]=!0,r.forEach(function(o){o!=="selectionchange"&&(L0.has(o)||Su(o,!1,n),Su(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_o]||(i[_o]=!0,Su("selectionchange",!1,i))}}function uh(n,i,o,c){switch(Id(i)){case 1:var _=qg;break;case 4:_=$g;break;default:_=ru}o=_.bind(null,i,o,n),_=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(_=!0),c?_!==void 0?n.addEventListener(i,o,{capture:!0,passive:_}):n.addEventListener(i,o,!0):_!==void 0?n.addEventListener(i,o,{passive:_}):n.addEventListener(i,o,!1)}function Mu(n,i,o,c,_){var E=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var L=c.tag;if(L===3||L===4){var $=c.stateNode.containerInfo;if($===_||$.nodeType===8&&$.parentNode===_)break;if(L===4)for(L=c.return;L!==null;){var te=L.tag;if((te===3||te===4)&&(te=L.stateNode.containerInfo,te===_||te.nodeType===8&&te.parentNode===_))return;L=L.return}for(;$!==null;){if(L=Lr($),L===null)return;if(te=L.tag,te===5||te===6){c=E=L;continue e}$=$.parentNode}}c=c.return}ot(function(){var Te=E,ke=it(o),Oe=[];e:{var Ue=sh.get(n);if(Ue!==void 0){var et=ou,at=n;switch(n){case"keypress":if(co(o)===0)break e;case"keydown":case"keyup":et=c0;break;case"focusin":at="focus",et=cu;break;case"focusout":at="blur",et=cu;break;case"beforeblur":case"afterblur":et=cu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=h0;break;case th:case nh:case ih:et=t0;break;case rh:et=m0;break;case"scroll":et=Kg;break;case"wheel":et=_0;break;case"copy":case"cut":case"paste":et=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=kd}var lt=(i&4)!==0,en=!lt&&n==="scroll",me=lt?Ue!==null?Ue+"Capture":null:Ue;lt=[];for(var ae=Te,xe;ae!==null;){xe=ae;var He=xe.stateNode;if(xe.tag===5&&He!==null&&(xe=He,me!==null&&(He=It(ae,me),He!=null&&lt.push(ma(ae,He,xe)))),en)break;ae=ae.return}0<lt.length&&(Ue=new et(Ue,at,null,o,ke),Oe.push({event:Ue,listeners:lt}))}}if((i&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",Ue&&o!==Fe&&(at=o.relatedTarget||o.fromElement)&&(Lr(at)||at[Oi]))break e;if((et||Ue)&&(Ue=ke.window===ke?ke:(Ue=ke.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,et?(at=o.relatedTarget||o.toElement,et=Te,at=at?Lr(at):null,at!==null&&(en=bn(at),at!==en||at.tag!==5&&at.tag!==6)&&(at=null)):(et=null,at=Te),et!==at)){if(lt=Ud,He="onMouseLeave",me="onMouseEnter",ae="mouse",(n==="pointerout"||n==="pointerover")&&(lt=kd,He="onPointerLeave",me="onPointerEnter",ae="pointer"),en=et==null?Ue:ps(et),xe=at==null?Ue:ps(at),Ue=new lt(He,ae+"leave",et,o,ke),Ue.target=en,Ue.relatedTarget=xe,He=null,Lr(ke)===Te&&(lt=new lt(me,ae+"enter",at,o,ke),lt.target=xe,lt.relatedTarget=en,He=lt),en=He,et&&at)t:{for(lt=et,me=at,ae=0,xe=lt;xe;xe=ds(xe))ae++;for(xe=0,He=me;He;He=ds(He))xe++;for(;0<ae-xe;)lt=ds(lt),ae--;for(;0<xe-ae;)me=ds(me),xe--;for(;ae--;){if(lt===me||me!==null&&lt===me.alternate)break t;lt=ds(lt),me=ds(me)}lt=null}else lt=null;et!==null&&ch(Oe,Ue,et,lt,!1),at!==null&&en!==null&&ch(Oe,en,at,lt,!0)}}e:{if(Ue=Te?ps(Te):window,et=Ue.nodeName&&Ue.nodeName.toLowerCase(),et==="select"||et==="input"&&Ue.type==="file")var dt=w0;else if(Vd(Ue))if(Xd)dt=C0;else{dt=b0;var mt=T0}else(et=Ue.nodeName)&&et.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(dt=A0);if(dt&&(dt=dt(n,Te))){Wd(Oe,dt,o,ke);break e}mt&&mt(n,Ue,Te),n==="focusout"&&(mt=Ue._wrapperState)&&mt.controlled&&Ue.type==="number"&&ie(Ue,"number",Ue.value)}switch(mt=Te?ps(Te):window,n){case"focusin":(Vd(mt)||mt.contentEditable==="true")&&(cs=mt,gu=Te,da=null);break;case"focusout":da=gu=cs=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Qd(Oe,o,ke);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":Qd(Oe,o,ke)}var gt;if(du)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else us?Hd(n,o)&&(_t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(Od&&o.locale!=="ko"&&(us||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&us&&(gt=Dd()):(ar=ke,au="value"in ar?ar.value:ar.textContent,us=!0)),mt=vo(Te,_t),0<mt.length&&(_t=new Fd(_t,n,null,o,ke),Oe.push({event:_t,listeners:mt}),gt?_t.data=gt:(gt=Gd(o),gt!==null&&(_t.data=gt)))),(gt=x0?y0(n,o):S0(n,o))&&(Te=vo(Te,"onBeforeInput"),0<Te.length&&(ke=new Fd("onBeforeInput","beforeinput",null,o,ke),Oe.push({event:ke,listeners:Te}),ke.data=gt))}lh(Oe,i)})}function ma(n,i,o){return{instance:n,listener:i,currentTarget:o}}function vo(n,i){for(var o=i+"Capture",c=[];n!==null;){var _=n,E=_.stateNode;_.tag===5&&E!==null&&(_=E,E=It(n,o),E!=null&&c.unshift(ma(n,E,_)),E=It(n,i),E!=null&&c.push(ma(n,E,_))),n=n.return}return c}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ch(n,i,o,c,_){for(var E=i._reactName,L=[];o!==null&&o!==c;){var $=o,te=$.alternate,Te=$.stateNode;if(te!==null&&te===c)break;$.tag===5&&Te!==null&&($=Te,_?(te=It(o,E),te!=null&&L.unshift(ma(o,te,$))):_||(te=It(o,E),te!=null&&L.push(ma(o,te,$)))),o=o.return}L.length!==0&&n.push({event:i,listeners:L})}var U0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function fh(n){return(typeof n=="string"?n:""+n).replace(U0,`
`).replace(F0,"")}function xo(n,i,o){if(i=fh(i),fh(n)!==i&&o)throw Error(t(425))}function yo(){}var Eu=null,wu=null;function Tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(n){return dh.resolve(null).then(n).catch(B0)}:bu;function B0(n){setTimeout(function(){throw n})}function Au(n,i){var o=i,c=0;do{var _=o.nextSibling;if(n.removeChild(o),_&&_.nodeType===8)if(o=_.data,o==="/$"){if(c===0){n.removeChild(_),sa(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=_}while(o);sa(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),wi="__reactFiber$"+hs,ga="__reactProps$"+hs,Oi="__reactContainer$"+hs,Cu="__reactEvents$"+hs,z0="__reactListeners$"+hs,H0="__reactHandles$"+hs;function Lr(n){var i=n[wi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Oi]||o[wi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=hh(n);n!==null;){if(o=n[wi])return o;n=hh(n)}return i}n=o,o=n.parentNode}return null}function _a(n){return n=n[wi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function So(n){return n[ga]||null}var Ru=[],ms=-1;function ur(n){return{current:n}}function Wt(n){0>ms||(n.current=Ru[ms],Ru[ms]=null,ms--)}function Gt(n,i){ms++,Ru[ms]=n.current,n.current=i}var cr={},xn=ur(cr),Dn=ur(!1),Ur=cr;function gs(n,i){var o=n.type.contextTypes;if(!o)return cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var _={},E;for(E in o)_[E]=i[E];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=_),_}function Ln(n){return n=n.childContextTypes,n!=null}function Mo(){Wt(Dn),Wt(xn)}function ph(n,i,o){if(xn.current!==cr)throw Error(t(168));Gt(xn,i),Gt(Dn,o)}function mh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var _ in c)if(!(_ in i))throw Error(t(108,ue(n)||"Unknown",_));return K({},o,c)}function Eo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Ur=xn.current,Gt(xn,n),Gt(Dn,Dn.current),!0}function gh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=mh(n,i,Ur),c.__reactInternalMemoizedMergedChildContext=n,Wt(Dn),Wt(xn),Gt(xn,n)):Wt(Dn),Gt(Dn,o)}var Bi=null,wo=!1,Pu=!1;function _h(n){Bi===null?Bi=[n]:Bi.push(n)}function G0(n){wo=!0,_h(n)}function fr(){if(!Pu&&Bi!==null){Pu=!0;var n=0,i=Mt;try{var o=Bi;for(Mt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Bi=null,wo=!1}catch(_){throw Bi!==null&&(Bi=Bi.slice(n+1)),Dr(Qs,fr),_}finally{Mt=i,Pu=!1}}return null}var _s=[],vs=0,To=null,bo=0,Zn=[],Jn=0,Fr=null,zi=1,Hi="";function kr(n,i){_s[vs++]=bo,_s[vs++]=To,To=n,bo=i}function vh(n,i,o){Zn[Jn++]=zi,Zn[Jn++]=Hi,Zn[Jn++]=Fr,Fr=n;var c=zi;n=Hi;var _=32-Ye(c)-1;c&=~(1<<_),o+=1;var E=32-Ye(i)+_;if(30<E){var L=_-_%5;E=(c&(1<<L)-1).toString(32),c>>=L,_-=L,zi=1<<32-Ye(i)+_|o<<_|c,Hi=E+n}else zi=1<<E|o<<_|c,Hi=n}function Nu(n){n.return!==null&&(kr(n,1),vh(n,1,0))}function Iu(n){for(;n===To;)To=_s[--vs],_s[vs]=null,bo=_s[--vs],_s[vs]=null;for(;n===Fr;)Fr=Zn[--Jn],Zn[Jn]=null,Hi=Zn[--Jn],Zn[Jn]=null,zi=Zn[--Jn],Zn[Jn]=null}var Gn=null,Vn=null,jt=!1,di=null;function xh(n,i){var o=ni(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function yh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Vn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Fr!==null?{id:zi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ni(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Gn=n,Vn=null,!0):!1;default:return!1}}function Du(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lu(n){if(jt){var i=Vn;if(i){var o=i;if(!yh(n,i)){if(Du(n))throw Error(t(418));i=lr(o.nextSibling);var c=Gn;i&&yh(n,i)?xh(c,o):(n.flags=n.flags&-4097|2,jt=!1,Gn=n)}}else{if(Du(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Gn=n}}}function Sh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Ao(n){if(n!==Gn)return!1;if(!jt)return Sh(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tu(n.type,n.memoizedProps)),i&&(i=Vn)){if(Du(n))throw Mh(),Error(t(418));for(;i;)xh(n,i),i=lr(i.nextSibling)}if(Sh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Vn=lr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Gn?lr(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=Vn;n;)n=lr(n.nextSibling)}function xs(){Vn=Gn=null,jt=!1}function Uu(n){di===null?di=[n]:di.push(n)}var V0=R.ReactCurrentBatchConfig;function va(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var _=c,E=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===E?i.ref:(i=function(L){var $=_.refs;L===null?delete $[E]:$[E]=L},i._stringRef=E,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Co(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Eh(n){var i=n._init;return i(n._payload)}function wh(n){function i(me,ae){if(n){var xe=me.deletions;xe===null?(me.deletions=[ae],me.flags|=16):xe.push(ae)}}function o(me,ae){if(!n)return null;for(;ae!==null;)i(me,ae),ae=ae.sibling;return null}function c(me,ae){for(me=new Map;ae!==null;)ae.key!==null?me.set(ae.key,ae):me.set(ae.index,ae),ae=ae.sibling;return me}function _(me,ae){return me=xr(me,ae),me.index=0,me.sibling=null,me}function E(me,ae,xe){return me.index=xe,n?(xe=me.alternate,xe!==null?(xe=xe.index,xe<ae?(me.flags|=2,ae):xe):(me.flags|=2,ae)):(me.flags|=1048576,ae)}function L(me){return n&&me.alternate===null&&(me.flags|=2),me}function $(me,ae,xe,He){return ae===null||ae.tag!==6?(ae=bc(xe,me.mode,He),ae.return=me,ae):(ae=_(ae,xe),ae.return=me,ae)}function te(me,ae,xe,He){var dt=xe.type;return dt===O?ke(me,ae,xe.props.children,He,xe.key):ae!==null&&(ae.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===le&&Eh(dt)===ae.type)?(He=_(ae,xe.props),He.ref=va(me,ae,xe),He.return=me,He):(He=Jo(xe.type,xe.key,xe.props,null,me.mode,He),He.ref=va(me,ae,xe),He.return=me,He)}function Te(me,ae,xe,He){return ae===null||ae.tag!==4||ae.stateNode.containerInfo!==xe.containerInfo||ae.stateNode.implementation!==xe.implementation?(ae=Ac(xe,me.mode,He),ae.return=me,ae):(ae=_(ae,xe.children||[]),ae.return=me,ae)}function ke(me,ae,xe,He,dt){return ae===null||ae.tag!==7?(ae=Xr(xe,me.mode,He,dt),ae.return=me,ae):(ae=_(ae,xe),ae.return=me,ae)}function Oe(me,ae,xe){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return ae=bc(""+ae,me.mode,xe),ae.return=me,ae;if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case P:return xe=Jo(ae.type,ae.key,ae.props,null,me.mode,xe),xe.ref=va(me,null,ae),xe.return=me,xe;case U:return ae=Ac(ae,me.mode,xe),ae.return=me,ae;case le:var He=ae._init;return Oe(me,He(ae._payload),xe)}if(Ce(ae)||H(ae))return ae=Xr(ae,me.mode,xe,null),ae.return=me,ae;Co(me,ae)}return null}function Ue(me,ae,xe,He){var dt=ae!==null?ae.key:null;if(typeof xe=="string"&&xe!==""||typeof xe=="number")return dt!==null?null:$(me,ae,""+xe,He);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case P:return xe.key===dt?te(me,ae,xe,He):null;case U:return xe.key===dt?Te(me,ae,xe,He):null;case le:return dt=xe._init,Ue(me,ae,dt(xe._payload),He)}if(Ce(xe)||H(xe))return dt!==null?null:ke(me,ae,xe,He,null);Co(me,xe)}return null}function et(me,ae,xe,He,dt){if(typeof He=="string"&&He!==""||typeof He=="number")return me=me.get(xe)||null,$(ae,me,""+He,dt);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case P:return me=me.get(He.key===null?xe:He.key)||null,te(ae,me,He,dt);case U:return me=me.get(He.key===null?xe:He.key)||null,Te(ae,me,He,dt);case le:var mt=He._init;return et(me,ae,xe,mt(He._payload),dt)}if(Ce(He)||H(He))return me=me.get(xe)||null,ke(ae,me,He,dt,null);Co(ae,He)}return null}function at(me,ae,xe,He){for(var dt=null,mt=null,gt=ae,_t=ae=0,dn=null;gt!==null&&_t<xe.length;_t++){gt.index>_t?(dn=gt,gt=null):dn=gt.sibling;var Lt=Ue(me,gt,xe[_t],He);if(Lt===null){gt===null&&(gt=dn);break}n&&gt&&Lt.alternate===null&&i(me,gt),ae=E(Lt,ae,_t),mt===null?dt=Lt:mt.sibling=Lt,mt=Lt,gt=dn}if(_t===xe.length)return o(me,gt),jt&&kr(me,_t),dt;if(gt===null){for(;_t<xe.length;_t++)gt=Oe(me,xe[_t],He),gt!==null&&(ae=E(gt,ae,_t),mt===null?dt=gt:mt.sibling=gt,mt=gt);return jt&&kr(me,_t),dt}for(gt=c(me,gt);_t<xe.length;_t++)dn=et(gt,me,_t,xe[_t],He),dn!==null&&(n&&dn.alternate!==null&&gt.delete(dn.key===null?_t:dn.key),ae=E(dn,ae,_t),mt===null?dt=dn:mt.sibling=dn,mt=dn);return n&&gt.forEach(function(yr){return i(me,yr)}),jt&&kr(me,_t),dt}function lt(me,ae,xe,He){var dt=H(xe);if(typeof dt!="function")throw Error(t(150));if(xe=dt.call(xe),xe==null)throw Error(t(151));for(var mt=dt=null,gt=ae,_t=ae=0,dn=null,Lt=xe.next();gt!==null&&!Lt.done;_t++,Lt=xe.next()){gt.index>_t?(dn=gt,gt=null):dn=gt.sibling;var yr=Ue(me,gt,Lt.value,He);if(yr===null){gt===null&&(gt=dn);break}n&&gt&&yr.alternate===null&&i(me,gt),ae=E(yr,ae,_t),mt===null?dt=yr:mt.sibling=yr,mt=yr,gt=dn}if(Lt.done)return o(me,gt),jt&&kr(me,_t),dt;if(gt===null){for(;!Lt.done;_t++,Lt=xe.next())Lt=Oe(me,Lt.value,He),Lt!==null&&(ae=E(Lt,ae,_t),mt===null?dt=Lt:mt.sibling=Lt,mt=Lt);return jt&&kr(me,_t),dt}for(gt=c(me,gt);!Lt.done;_t++,Lt=xe.next())Lt=et(gt,me,_t,Lt.value,He),Lt!==null&&(n&&Lt.alternate!==null&&gt.delete(Lt.key===null?_t:Lt.key),ae=E(Lt,ae,_t),mt===null?dt=Lt:mt.sibling=Lt,mt=Lt);return n&&gt.forEach(function(M_){return i(me,M_)}),jt&&kr(me,_t),dt}function en(me,ae,xe,He){if(typeof xe=="object"&&xe!==null&&xe.type===O&&xe.key===null&&(xe=xe.props.children),typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case P:e:{for(var dt=xe.key,mt=ae;mt!==null;){if(mt.key===dt){if(dt=xe.type,dt===O){if(mt.tag===7){o(me,mt.sibling),ae=_(mt,xe.props.children),ae.return=me,me=ae;break e}}else if(mt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===le&&Eh(dt)===mt.type){o(me,mt.sibling),ae=_(mt,xe.props),ae.ref=va(me,mt,xe),ae.return=me,me=ae;break e}o(me,mt);break}else i(me,mt);mt=mt.sibling}xe.type===O?(ae=Xr(xe.props.children,me.mode,He,xe.key),ae.return=me,me=ae):(He=Jo(xe.type,xe.key,xe.props,null,me.mode,He),He.ref=va(me,ae,xe),He.return=me,me=He)}return L(me);case U:e:{for(mt=xe.key;ae!==null;){if(ae.key===mt)if(ae.tag===4&&ae.stateNode.containerInfo===xe.containerInfo&&ae.stateNode.implementation===xe.implementation){o(me,ae.sibling),ae=_(ae,xe.children||[]),ae.return=me,me=ae;break e}else{o(me,ae);break}else i(me,ae);ae=ae.sibling}ae=Ac(xe,me.mode,He),ae.return=me,me=ae}return L(me);case le:return mt=xe._init,en(me,ae,mt(xe._payload),He)}if(Ce(xe))return at(me,ae,xe,He);if(H(xe))return lt(me,ae,xe,He);Co(me,xe)}return typeof xe=="string"&&xe!==""||typeof xe=="number"?(xe=""+xe,ae!==null&&ae.tag===6?(o(me,ae.sibling),ae=_(ae,xe),ae.return=me,me=ae):(o(me,ae),ae=bc(xe,me.mode,He),ae.return=me,me=ae),L(me)):o(me,ae)}return en}var ys=wh(!0),Th=wh(!1),Ro=ur(null),Po=null,Ss=null,Fu=null;function ku(){Fu=Ss=Po=null}function Ou(n){var i=Ro.current;Wt(Ro),n._currentValue=i}function Bu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ms(n,i){Po=n,Fu=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Fu!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Po===null)throw Error(t(308));Ss=n,Po.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Or=null;function zu(n){Or===null?Or=[n]:Or.push(n)}function bh(n,i,o,c){var _=i.interleaved;return _===null?(o.next=o,zu(i)):(o.next=_.next,_.next=o),i.interleaved=o,Gi(n,c)}function Gi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function Hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Nt&2)!==0){var _=c.pending;return _===null?i.next=i:(i.next=_.next,_.next=i),c.pending=i,Gi(n,o)}return _=c.interleaved,_===null?(i.next=i,zu(c)):(i.next=_.next,_.next=i),c.interleaved=i,Gi(n,o)}function No(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,vn(n,o)}}function Ch(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var _=null,E=null;if(o=o.firstBaseUpdate,o!==null){do{var L={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};E===null?_=E=L:E=E.next=L,o=o.next}while(o!==null);E===null?_=E=i:E=E.next=i}else _=E=i;o={baseState:c.baseState,firstBaseUpdate:_,lastBaseUpdate:E,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Io(n,i,o,c){var _=n.updateQueue;dr=!1;var E=_.firstBaseUpdate,L=_.lastBaseUpdate,$=_.shared.pending;if($!==null){_.shared.pending=null;var te=$,Te=te.next;te.next=null,L===null?E=Te:L.next=Te,L=te;var ke=n.alternate;ke!==null&&(ke=ke.updateQueue,$=ke.lastBaseUpdate,$!==L&&($===null?ke.firstBaseUpdate=Te:$.next=Te,ke.lastBaseUpdate=te))}if(E!==null){var Oe=_.baseState;L=0,ke=Te=te=null,$=E;do{var Ue=$.lane,et=$.eventTime;if((c&Ue)===Ue){ke!==null&&(ke=ke.next={eventTime:et,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var at=n,lt=$;switch(Ue=i,et=o,lt.tag){case 1:if(at=lt.payload,typeof at=="function"){Oe=at.call(et,Oe,Ue);break e}Oe=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=lt.payload,Ue=typeof at=="function"?at.call(et,Oe,Ue):at,Ue==null)break e;Oe=K({},Oe,Ue);break e;case 2:dr=!0}}$.callback!==null&&$.lane!==0&&(n.flags|=64,Ue=_.effects,Ue===null?_.effects=[$]:Ue.push($))}else et={eventTime:et,lane:Ue,tag:$.tag,payload:$.payload,callback:$.callback,next:null},ke===null?(Te=ke=et,te=Oe):ke=ke.next=et,L|=Ue;if($=$.next,$===null){if($=_.shared.pending,$===null)break;Ue=$,$=Ue.next,Ue.next=null,_.lastBaseUpdate=Ue,_.shared.pending=null}}while(!0);if(ke===null&&(te=Oe),_.baseState=te,_.firstBaseUpdate=Te,_.lastBaseUpdate=ke,i=_.shared.interleaved,i!==null){_=i;do L|=_.lane,_=_.next;while(_!==i)}else E===null&&(_.shared.lanes=0);Hr|=L,n.lanes=L,n.memoizedState=Oe}}function Rh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],_=c.callback;if(_!==null){if(c.callback=null,c=o,typeof _!="function")throw Error(t(191,_));_.call(c)}}}var xa={},Ti=ur(xa),ya=ur(xa),Sa=ur(xa);function Br(n){if(n===xa)throw Error(t(174));return n}function Gu(n,i){switch(Gt(Sa,i),Gt(ya,n),Gt(Ti,xa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:C(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=C(i,n)}Wt(Ti),Gt(Ti,i)}function Es(){Wt(Ti),Wt(ya),Wt(Sa)}function Ph(n){Br(Sa.current);var i=Br(Ti.current),o=C(i,n.type);i!==o&&(Gt(ya,n),Gt(Ti,o))}function Vu(n){ya.current===n&&(Wt(Ti),Wt(ya))}var qt=ur(0);function Do(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wu=[];function Xu(){for(var n=0;n<Wu.length;n++)Wu[n]._workInProgressVersionPrimary=null;Wu.length=0}var Lo=R.ReactCurrentDispatcher,ju=R.ReactCurrentBatchConfig,zr=0,$t=null,an=null,cn=null,Uo=!1,Ma=!1,Ea=0,W0=0;function yn(){throw Error(t(321))}function Yu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!fi(n[o],i[o]))return!1;return!0}function qu(n,i,o,c,_,E){if(zr=E,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=n===null||n.memoizedState===null?q0:$0,n=o(c,_),Ma){E=0;do{if(Ma=!1,Ea=0,25<=E)throw Error(t(301));E+=1,cn=an=null,i.updateQueue=null,Lo.current=K0,n=o(c,_)}while(Ma)}if(Lo.current=Oo,i=an!==null&&an.next!==null,zr=0,cn=an=$t=null,Uo=!1,i)throw Error(t(300));return n}function $u(){var n=Ea!==0;return Ea=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?$t.memoizedState=cn=n:cn=cn.next=n,cn}function ei(){if(an===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=cn===null?$t.memoizedState:cn.next;if(i!==null)cn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},cn===null?$t.memoizedState=cn=n:cn=cn.next=n}return cn}function wa(n,i){return typeof i=="function"?i(n):i}function Ku(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=an,_=c.baseQueue,E=o.pending;if(E!==null){if(_!==null){var L=_.next;_.next=E.next,E.next=L}c.baseQueue=_=E,o.pending=null}if(_!==null){E=_.next,c=c.baseState;var $=L=null,te=null,Te=E;do{var ke=Te.lane;if((zr&ke)===ke)te!==null&&(te=te.next={lane:0,action:Te.action,hasEagerState:Te.hasEagerState,eagerState:Te.eagerState,next:null}),c=Te.hasEagerState?Te.eagerState:n(c,Te.action);else{var Oe={lane:ke,action:Te.action,hasEagerState:Te.hasEagerState,eagerState:Te.eagerState,next:null};te===null?($=te=Oe,L=c):te=te.next=Oe,$t.lanes|=ke,Hr|=ke}Te=Te.next}while(Te!==null&&Te!==E);te===null?L=c:te.next=$,fi(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=L,i.baseQueue=te,o.lastRenderedState=c}if(n=o.interleaved,n!==null){_=n;do E=_.lane,$t.lanes|=E,Hr|=E,_=_.next;while(_!==n)}else _===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Zu(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,_=o.pending,E=i.memoizedState;if(_!==null){o.pending=null;var L=_=_.next;do E=n(E,L.action),L=L.next;while(L!==_);fi(E,i.memoizedState)||(Un=!0),i.memoizedState=E,i.baseQueue===null&&(i.baseState=E),o.lastRenderedState=E}return[E,c]}function Nh(){}function Ih(n,i){var o=$t,c=ei(),_=i(),E=!fi(c.memoizedState,_);if(E&&(c.memoizedState=_,Un=!0),c=c.queue,Ju(Uh.bind(null,o,c,n),[n]),c.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Ta(9,Lh.bind(null,o,c,_,i),void 0,null),fn===null)throw Error(t(349));(zr&30)!==0||Dh(o,i,_)}return _}function Dh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Lh(n,i,o,c){i.value=o,i.getSnapshot=c,Fh(i)&&kh(n)}function Uh(n,i,o){return o(function(){Fh(i)&&kh(n)})}function Fh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!fi(n,o)}catch{return!0}}function kh(n){var i=Gi(n,1);i!==null&&gi(i,n,1,-1)}function Oh(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Y0.bind(null,$t,n),[i.memoizedState,n]}function Ta(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Bh(){return ei().memoizedState}function Fo(n,i,o,c){var _=bi();$t.flags|=n,_.memoizedState=Ta(1|i,o,void 0,c===void 0?null:c)}function ko(n,i,o,c){var _=ei();c=c===void 0?null:c;var E=void 0;if(an!==null){var L=an.memoizedState;if(E=L.destroy,c!==null&&Yu(c,L.deps)){_.memoizedState=Ta(i,o,E,c);return}}$t.flags|=n,_.memoizedState=Ta(1|i,o,E,c)}function zh(n,i){return Fo(8390656,8,n,i)}function Ju(n,i){return ko(2048,8,n,i)}function Hh(n,i){return ko(4,2,n,i)}function Gh(n,i){return ko(4,4,n,i)}function Vh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wh(n,i,o){return o=o!=null?o.concat([n]):null,ko(4,4,Vh.bind(null,i,n),o)}function Qu(){}function Xh(n,i){var o=ei();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Yu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function jh(n,i){var o=ei();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Yu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Yh(n,i,o){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(fi(o,i)||(o=sn(),$t.lanes|=o,Hr|=o,n.baseState=!0),i)}function X0(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var c=ju.transition;ju.transition={};try{n(!1),i()}finally{Mt=o,ju.transition=c}}function qh(){return ei().memoizedState}function j0(n,i,o){var c=_r(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},$h(n))Kh(i,o);else if(o=bh(n,i,o,c),o!==null){var _=Cn();gi(o,n,c,_),Zh(o,i,c)}}function Y0(n,i,o){var c=_r(n),_={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if($h(n))Kh(i,_);else{var E=n.alternate;if(n.lanes===0&&(E===null||E.lanes===0)&&(E=i.lastRenderedReducer,E!==null))try{var L=i.lastRenderedState,$=E(L,o);if(_.hasEagerState=!0,_.eagerState=$,fi($,L)){var te=i.interleaved;te===null?(_.next=_,zu(i)):(_.next=te.next,te.next=_),i.interleaved=_;return}}catch{}finally{}o=bh(n,i,_,c),o!==null&&(_=Cn(),gi(o,n,c,_),Zh(o,i,c))}}function $h(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Kh(n,i){Ma=Uo=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Zh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,vn(n,o)}}var Oo={readContext:Qn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},q0={readContext:Qn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:zh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Fo(4194308,4,Vh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Fo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fo(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=bi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=j0.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:Oh,useDebugValue:Qu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=Oh(!1),i=n[0];return n=X0.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=$t,_=bi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),fn===null)throw Error(t(349));(zr&30)!==0||Dh(c,i,o)}_.memoizedState=o;var E={value:o,getSnapshot:i};return _.queue=E,zh(Uh.bind(null,c,E,n),[n]),c.flags|=2048,Ta(9,Lh.bind(null,c,E,o,i),void 0,null),o},useId:function(){var n=bi(),i=fn.identifierPrefix;if(jt){var o=Hi,c=zi;o=(c&~(1<<32-Ye(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ea++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=W0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},$0={readContext:Qn,useCallback:Xh,useContext:Qn,useEffect:Ju,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:jh,useReducer:Ku,useRef:Bh,useState:function(){return Ku(wa)},useDebugValue:Qu,useDeferredValue:function(n){var i=ei();return Yh(i,an.memoizedState,n)},useTransition:function(){var n=Ku(wa)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:qh,unstable_isNewReconciler:!1},K0={readContext:Qn,useCallback:Xh,useContext:Qn,useEffect:Ju,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:jh,useReducer:Zu,useRef:Bh,useState:function(){return Zu(wa)},useDebugValue:Qu,useDeferredValue:function(n){var i=ei();return an===null?i.memoizedState=n:Yh(i,an.memoizedState,n)},useTransition:function(){var n=Zu(wa)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:qh,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=K({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function ec(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:K({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Bo={isMounted:function(n){return(n=n._reactInternals)?bn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Cn(),_=_r(n),E=Vi(c,_);E.payload=i,o!=null&&(E.callback=o),i=hr(n,E,_),i!==null&&(gi(i,n,_,c),No(i,n,_))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Cn(),_=_r(n),E=Vi(c,_);E.tag=1,E.payload=i,o!=null&&(E.callback=o),i=hr(n,E,_),i!==null&&(gi(i,n,_,c),No(i,n,_))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Cn(),c=_r(n),_=Vi(o,c);_.tag=2,i!=null&&(_.callback=i),i=hr(n,_,c),i!==null&&(gi(i,n,c,o),No(i,n,c))}};function Jh(n,i,o,c,_,E,L){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,E,L):i.prototype&&i.prototype.isPureReactComponent?!fa(o,c)||!fa(_,E):!0}function Qh(n,i,o){var c=!1,_=cr,E=i.contextType;return typeof E=="object"&&E!==null?E=Qn(E):(_=Ln(i)?Ur:xn.current,c=i.contextTypes,E=(c=c!=null)?gs(n,_):cr),i=new i(o,E),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=_,n.__reactInternalMemoizedMaskedChildContext=E),i}function ep(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Bo.enqueueReplaceState(i,i.state,null)}function tc(n,i,o,c){var _=n.stateNode;_.props=o,_.state=n.memoizedState,_.refs={},Hu(n);var E=i.contextType;typeof E=="object"&&E!==null?_.context=Qn(E):(E=Ln(i)?Ur:xn.current,_.context=gs(n,E)),_.state=n.memoizedState,E=i.getDerivedStateFromProps,typeof E=="function"&&(ec(n,i,E,o),_.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(i=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),i!==_.state&&Bo.enqueueReplaceState(_,_.state,null),Io(n,o,_,c),_.state=n.memoizedState),typeof _.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",c=i;do o+=ge(c),c=c.return;while(c);var _=o}catch(E){_=`
Error generating stack: `+E.message+`
`+E.stack}return{value:n,source:i,stack:_,digest:null}}function nc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ic(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function tp(n,i,o){o=Vi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){jo||(jo=!0,vc=c),ic(n,i)},o}function np(n,i,o){o=Vi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var _=i.value;o.payload=function(){return c(_)},o.callback=function(){ic(n,i)}}var E=n.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(o.callback=function(){ic(n,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var L=i.stack;this.componentDidCatch(i.value,{componentStack:L!==null?L:""})}),o}function ip(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Z0;var _=new Set;c.set(i,_)}else _=c.get(i),_===void 0&&(_=new Set,c.set(i,_));_.has(o)||(_.add(o),n=f_.bind(null,n,i,o),i.then(n,n))}function rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function sp(n,i,o,c,_){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Vi(-1,1),i.tag=2,hr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=_,n)}var J0=R.ReactCurrentOwner,Un=!1;function An(n,i,o,c){i.child=n===null?Th(i,null,o,c):ys(i,n.child,o,c)}function ap(n,i,o,c,_){o=o.render;var E=i.ref;return Ms(i,_),c=qu(n,i,o,c,E,_),o=$u(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~_,Wi(n,i,_)):(jt&&o&&Nu(i),i.flags|=1,An(n,i,c,_),i.child)}function op(n,i,o,c,_){if(n===null){var E=o.type;return typeof E=="function"&&!Tc(E)&&E.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=E,lp(n,i,E,c,_)):(n=Jo(o.type,null,c,i,i.mode,_),n.ref=i.ref,n.return=i,i.child=n)}if(E=n.child,(n.lanes&_)===0){var L=E.memoizedProps;if(o=o.compare,o=o!==null?o:fa,o(L,c)&&n.ref===i.ref)return Wi(n,i,_)}return i.flags|=1,n=xr(E,c),n.ref=i.ref,n.return=i,i.child=n}function lp(n,i,o,c,_){if(n!==null){var E=n.memoizedProps;if(fa(E,c)&&n.ref===i.ref)if(Un=!1,i.pendingProps=c=E,(n.lanes&_)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,Wi(n,i,_)}return rc(n,i,o,c,_)}function up(n,i,o){var c=i.pendingProps,_=c.children,E=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(bs,Wn),Wn|=o;else{if((o&1073741824)===0)return n=E!==null?E.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(bs,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=E!==null?E.baseLanes:o,Gt(bs,Wn),Wn|=c}else E!==null?(c=E.baseLanes|o,i.memoizedState=null):c=o,Gt(bs,Wn),Wn|=c;return An(n,i,_,o),i.child}function cp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function rc(n,i,o,c,_){var E=Ln(o)?Ur:xn.current;return E=gs(i,E),Ms(i,_),o=qu(n,i,o,c,E,_),c=$u(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~_,Wi(n,i,_)):(jt&&c&&Nu(i),i.flags|=1,An(n,i,o,_),i.child)}function fp(n,i,o,c,_){if(Ln(o)){var E=!0;Eo(i)}else E=!1;if(Ms(i,_),i.stateNode===null)Ho(n,i),Qh(i,o,c),tc(i,o,c,_),c=!0;else if(n===null){var L=i.stateNode,$=i.memoizedProps;L.props=$;var te=L.context,Te=o.contextType;typeof Te=="object"&&Te!==null?Te=Qn(Te):(Te=Ln(o)?Ur:xn.current,Te=gs(i,Te));var ke=o.getDerivedStateFromProps,Oe=typeof ke=="function"||typeof L.getSnapshotBeforeUpdate=="function";Oe||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||($!==c||te!==Te)&&ep(i,L,c,Te),dr=!1;var Ue=i.memoizedState;L.state=Ue,Io(i,c,L,_),te=i.memoizedState,$!==c||Ue!==te||Dn.current||dr?(typeof ke=="function"&&(ec(i,o,ke,c),te=i.memoizedState),($=dr||Jh(i,o,$,c,Ue,te,Te))?(Oe||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(i.flags|=4194308)):(typeof L.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=te),L.props=c,L.state=te,L.context=Te,c=$):(typeof L.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{L=i.stateNode,Ah(n,i),$=i.memoizedProps,Te=i.type===i.elementType?$:hi(i.type,$),L.props=Te,Oe=i.pendingProps,Ue=L.context,te=o.contextType,typeof te=="object"&&te!==null?te=Qn(te):(te=Ln(o)?Ur:xn.current,te=gs(i,te));var et=o.getDerivedStateFromProps;(ke=typeof et=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||($!==Oe||Ue!==te)&&ep(i,L,c,te),dr=!1,Ue=i.memoizedState,L.state=Ue,Io(i,c,L,_);var at=i.memoizedState;$!==Oe||Ue!==at||Dn.current||dr?(typeof et=="function"&&(ec(i,o,et,c),at=i.memoizedState),(Te=dr||Jh(i,o,Te,c,Ue,at,te)||!1)?(ke||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(c,at,te),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(c,at,te)),typeof L.componentDidUpdate=="function"&&(i.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof L.componentDidUpdate!="function"||$===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||$===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),L.props=c,L.state=at,L.context=te,c=Te):(typeof L.componentDidUpdate!="function"||$===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||$===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),c=!1)}return sc(n,i,o,c,E,_)}function sc(n,i,o,c,_,E){cp(n,i);var L=(i.flags&128)!==0;if(!c&&!L)return _&&gh(i,o,!1),Wi(n,i,E);c=i.stateNode,J0.current=i;var $=L&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&L?(i.child=ys(i,n.child,null,E),i.child=ys(i,null,$,E)):An(n,i,$,E),i.memoizedState=c.state,_&&gh(i,o,!0),i.child}function dp(n){var i=n.stateNode;i.pendingContext?ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(n,i.context,!1),Gu(n,i.containerInfo)}function hp(n,i,o,c,_){return xs(),Uu(_),i.flags|=256,An(n,i,o,c),i.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function pp(n,i,o){var c=i.pendingProps,_=qt.current,E=!1,L=(i.flags&128)!==0,$;if(($=L)||($=n!==null&&n.memoizedState===null?!1:(_&2)!==0),$?(E=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(_|=1),Gt(qt,_&1),n===null)return Lu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(L=c.children,n=c.fallback,E?(c=i.mode,E=i.child,L={mode:"hidden",children:L},(c&1)===0&&E!==null?(E.childLanes=0,E.pendingProps=L):E=Qo(L,c,0,null),n=Xr(n,c,o,null),E.return=i,n.return=i,E.sibling=n,i.child=E,i.child.memoizedState=oc(o),i.memoizedState=ac,n):lc(i,L));if(_=n.memoizedState,_!==null&&($=_.dehydrated,$!==null))return Q0(n,i,L,c,$,_,o);if(E){E=c.fallback,L=i.mode,_=n.child,$=_.sibling;var te={mode:"hidden",children:c.children};return(L&1)===0&&i.child!==_?(c=i.child,c.childLanes=0,c.pendingProps=te,i.deletions=null):(c=xr(_,te),c.subtreeFlags=_.subtreeFlags&14680064),$!==null?E=xr($,E):(E=Xr(E,L,o,null),E.flags|=2),E.return=i,c.return=i,c.sibling=E,i.child=c,c=E,E=i.child,L=n.child.memoizedState,L=L===null?oc(o):{baseLanes:L.baseLanes|o,cachePool:null,transitions:L.transitions},E.memoizedState=L,E.childLanes=n.childLanes&~o,i.memoizedState=ac,c}return E=n.child,n=E.sibling,c=xr(E,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function lc(n,i){return i=Qo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function zo(n,i,o,c){return c!==null&&Uu(c),ys(i,n.child,null,o),n=lc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Q0(n,i,o,c,_,E,L){if(o)return i.flags&256?(i.flags&=-257,c=nc(Error(t(422))),zo(n,i,L,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(E=c.fallback,_=i.mode,c=Qo({mode:"visible",children:c.children},_,0,null),E=Xr(E,_,L,null),E.flags|=2,c.return=i,E.return=i,c.sibling=E,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,L),i.child.memoizedState=oc(L),i.memoizedState=ac,E);if((i.mode&1)===0)return zo(n,i,L,null);if(_.data==="$!"){if(c=_.nextSibling&&_.nextSibling.dataset,c)var $=c.dgst;return c=$,E=Error(t(419)),c=nc(E,c,void 0),zo(n,i,L,c)}if($=(L&n.childLanes)!==0,Un||$){if(c=fn,c!==null){switch(L&-L){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(c.suspendedLanes|L))!==0?0:_,_!==0&&_!==E.retryLane&&(E.retryLane=_,Gi(n,_),gi(c,n,_,-1))}return wc(),c=nc(Error(t(421))),zo(n,i,L,c)}return _.data==="$?"?(i.flags|=128,i.child=n.child,i=d_.bind(null,n),_._reactRetry=i,null):(n=E.treeContext,Vn=lr(_.nextSibling),Gn=i,jt=!0,di=null,n!==null&&(Zn[Jn++]=zi,Zn[Jn++]=Hi,Zn[Jn++]=Fr,zi=n.id,Hi=n.overflow,Fr=i),i=lc(i,c.children),i.flags|=4096,i)}function mp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Bu(n.return,i,o)}function uc(n,i,o,c,_){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:_}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=c,E.tail=o,E.tailMode=_)}function gp(n,i,o){var c=i.pendingProps,_=c.revealOrder,E=c.tail;if(An(n,i,c.children,o),c=qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,o,i);else if(n.tag===19)mp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(_){case"forwards":for(o=i.child,_=null;o!==null;)n=o.alternate,n!==null&&Do(n)===null&&(_=o),o=o.sibling;o=_,o===null?(_=i.child,i.child=null):(_=o.sibling,o.sibling=null),uc(i,!1,_,o,E);break;case"backwards":for(o=null,_=i.child,i.child=null;_!==null;){if(n=_.alternate,n!==null&&Do(n)===null){i.child=_;break}n=_.sibling,_.sibling=o,o=_,_=n}uc(i,!0,o,null,E);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=xr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=xr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function e_(n,i,o){switch(i.tag){case 3:dp(i),xs();break;case 5:Ph(i);break;case 1:Ln(i.type)&&Eo(i);break;case 4:Gu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,_=i.memoizedProps.value;Gt(Ro,c._currentValue),c._currentValue=_;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(qt,qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?pp(n,i,o):(Gt(qt,qt.current&1),n=Wi(n,i,o),n!==null?n.sibling:null);Gt(qt,qt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return gp(n,i,o);i.flags|=128}if(_=i.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),Gt(qt,qt.current),c)break;return null;case 22:case 23:return i.lanes=0,up(n,i,o)}return Wi(n,i,o)}var _p,cc,vp,xp;_p=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},cc=function(){},vp=function(n,i,o,c){var _=n.memoizedProps;if(_!==c){n=i.stateNode,Br(Ti.current);var E=null;switch(o){case"input":_=b(n,_),c=b(n,c),E=[];break;case"select":_=K({},_,{value:void 0}),c=K({},c,{value:void 0}),E=[];break;case"textarea":_=ce(n,_),c=ce(n,c),E=[];break;default:typeof _.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yo)}$e(o,c);var L;o=null;for(Te in _)if(!c.hasOwnProperty(Te)&&_.hasOwnProperty(Te)&&_[Te]!=null)if(Te==="style"){var $=_[Te];for(L in $)$.hasOwnProperty(L)&&(o||(o={}),o[L]="")}else Te!=="dangerouslySetInnerHTML"&&Te!=="children"&&Te!=="suppressContentEditableWarning"&&Te!=="suppressHydrationWarning"&&Te!=="autoFocus"&&(a.hasOwnProperty(Te)?E||(E=[]):(E=E||[]).push(Te,null));for(Te in c){var te=c[Te];if($=_!=null?_[Te]:void 0,c.hasOwnProperty(Te)&&te!==$&&(te!=null||$!=null))if(Te==="style")if($){for(L in $)!$.hasOwnProperty(L)||te&&te.hasOwnProperty(L)||(o||(o={}),o[L]="");for(L in te)te.hasOwnProperty(L)&&$[L]!==te[L]&&(o||(o={}),o[L]=te[L])}else o||(E||(E=[]),E.push(Te,o)),o=te;else Te==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,$=$?$.__html:void 0,te!=null&&$!==te&&(E=E||[]).push(Te,te)):Te==="children"?typeof te!="string"&&typeof te!="number"||(E=E||[]).push(Te,""+te):Te!=="suppressContentEditableWarning"&&Te!=="suppressHydrationWarning"&&(a.hasOwnProperty(Te)?(te!=null&&Te==="onScroll"&&Vt("scroll",n),E||$===te||(E=[])):(E=E||[]).push(Te,te))}o&&(E=E||[]).push("style",o);var Te=E;(i.updateQueue=Te)&&(i.flags|=4)}},xp=function(n,i,o,c){o!==c&&(i.flags|=4)};function ba(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Sn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var _=n.child;_!==null;)o|=_.lanes|_.childLanes,c|=_.subtreeFlags&14680064,c|=_.flags&14680064,_.return=n,_=_.sibling;else for(_=n.child;_!==null;)o|=_.lanes|_.childLanes,c|=_.subtreeFlags,c|=_.flags,_.return=n,_=_.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function t_(n,i,o){var c=i.pendingProps;switch(Iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Ln(i.type)&&Mo(),Sn(i),null;case 3:return c=i.stateNode,Es(),Wt(Dn),Wt(xn),Xu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ao(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(Sc(di),di=null))),cc(n,i),Sn(i),null;case 5:Vu(i);var _=Br(Sa.current);if(o=i.type,n!==null&&i.stateNode!=null)vp(n,i,o,c,_),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Sn(i),null}if(n=Br(Ti.current),Ao(i)){c=i.stateNode,o=i.type;var E=i.memoizedProps;switch(c[wi]=i,c[ga]=E,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(_=0;_<ha.length;_++)Vt(ha[_],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":Me(c,E),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!E.multiple},Vt("invalid",c);break;case"textarea":X(c,E),Vt("invalid",c)}$e(o,E),_=null;for(var L in E)if(E.hasOwnProperty(L)){var $=E[L];L==="children"?typeof $=="string"?c.textContent!==$&&(E.suppressHydrationWarning!==!0&&xo(c.textContent,$,n),_=["children",$]):typeof $=="number"&&c.textContent!==""+$&&(E.suppressHydrationWarning!==!0&&xo(c.textContent,$,n),_=["children",""+$]):a.hasOwnProperty(L)&&$!=null&&L==="onScroll"&&Vt("scroll",c)}switch(o){case"input":Be(c),G(c,E,!0);break;case"textarea":Be(c),be(c);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(c.onclick=yo)}c=_,i.updateQueue=c,c!==null&&(i.flags|=4)}else{L=_.nodeType===9?_:_.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=B(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=L.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=L.createElement(o,{is:c.is}):(n=L.createElement(o),o==="select"&&(L=n,c.multiple?L.multiple=!0:c.size&&(L.size=c.size))):n=L.createElementNS(n,o),n[wi]=i,n[ga]=c,_p(n,i,!1,!1),i.stateNode=n;e:{switch(L=Ne(o,c),o){case"dialog":Vt("cancel",n),Vt("close",n),_=c;break;case"iframe":case"object":case"embed":Vt("load",n),_=c;break;case"video":case"audio":for(_=0;_<ha.length;_++)Vt(ha[_],n);_=c;break;case"source":Vt("error",n),_=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),_=c;break;case"details":Vt("toggle",n),_=c;break;case"input":Me(n,c),_=b(n,c),Vt("invalid",n);break;case"option":_=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},_=K({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":X(n,c),_=ce(n,c),Vt("invalid",n);break;default:_=c}$e(o,_),$=_;for(E in $)if($.hasOwnProperty(E)){var te=$[E];E==="style"?ve(n,te):E==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&de(n,te)):E==="children"?typeof te=="string"?(o!=="textarea"||te!=="")&&ye(n,te):typeof te=="number"&&ye(n,""+te):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(a.hasOwnProperty(E)?te!=null&&E==="onScroll"&&Vt("scroll",n):te!=null&&I(n,E,te,L))}switch(o){case"input":Be(n),G(n,c,!1);break;case"textarea":Be(n),be(n);break;case"option":c.value!=null&&n.setAttribute("value",""+oe(c.value));break;case"select":n.multiple=!!c.multiple,E=c.value,E!=null?Ae(n,!!c.multiple,E,!1):c.defaultValue!=null&&Ae(n,!!c.multiple,c.defaultValue,!0);break;default:typeof _.onClick=="function"&&(n.onclick=yo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(n&&i.stateNode!=null)xp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Br(Sa.current),Br(Ti.current),Ao(i)){if(c=i.stateNode,o=i.memoizedProps,c[wi]=i,(E=c.nodeValue!==o)&&(n=Gn,n!==null))switch(n.tag){case 3:xo(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xo(c.nodeValue,o,(n.mode&1)!==0)}E&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[wi]=i,i.stateNode=c}return Sn(i),null;case 13:if(Wt(qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),xs(),i.flags|=98560,E=!1;else if(E=Ao(i),c!==null&&c.dehydrated!==null){if(n===null){if(!E)throw Error(t(318));if(E=i.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[wi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),E=!1}else di!==null&&(Sc(di),di=null),E=!0;if(!E)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(qt.current&1)!==0?on===0&&(on=3):wc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return Es(),cc(n,i),n===null&&pa(i.stateNode.containerInfo),Sn(i),null;case 10:return Ou(i.type._context),Sn(i),null;case 17:return Ln(i.type)&&Mo(),Sn(i),null;case 19:if(Wt(qt),E=i.memoizedState,E===null)return Sn(i),null;if(c=(i.flags&128)!==0,L=E.rendering,L===null)if(c)ba(E,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(L=Do(n),L!==null){for(i.flags|=128,ba(E,!1),c=L.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)E=o,n=c,E.flags&=14680066,L=E.alternate,L===null?(E.childLanes=0,E.lanes=n,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=L.childLanes,E.lanes=L.lanes,E.child=L.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=L.memoizedProps,E.memoizedState=L.memoizedState,E.updateQueue=L.updateQueue,E.type=L.type,n=L.dependencies,E.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(qt,qt.current&1|2),i.child}n=n.sibling}E.tail!==null&&Yt()>As&&(i.flags|=128,c=!0,ba(E,!1),i.lanes=4194304)}else{if(!c)if(n=Do(L),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ba(E,!0),E.tail===null&&E.tailMode==="hidden"&&!L.alternate&&!jt)return Sn(i),null}else 2*Yt()-E.renderingStartTime>As&&o!==1073741824&&(i.flags|=128,c=!0,ba(E,!1),i.lanes=4194304);E.isBackwards?(L.sibling=i.child,i.child=L):(o=E.last,o!==null?o.sibling=L:i.child=L,E.last=L)}return E.tail!==null?(i=E.tail,E.rendering=i,E.tail=i.sibling,E.renderingStartTime=Yt(),i.sibling=null,o=qt.current,Gt(qt,c?o&1|2:o&1),i):(Sn(i),null);case 22:case 23:return Ec(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function n_(n,i){switch(Iu(i),i.tag){case 1:return Ln(i.type)&&Mo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),Wt(Dn),Wt(xn),Xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Wt(qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(qt),null;case 4:return Es(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var Go=!1,Mn=!1,i_=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Zt(n,i,c)}else o.current=null}function fc(n,i,o){try{o()}catch(c){Zt(n,i,c)}}var yp=!1;function r_(n,i){if(Eu=oo,n=Jd(),mu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var _=c.anchorOffset,E=c.focusNode;c=c.focusOffset;try{o.nodeType,E.nodeType}catch{o=null;break e}var L=0,$=-1,te=-1,Te=0,ke=0,Oe=n,Ue=null;t:for(;;){for(var et;Oe!==o||_!==0&&Oe.nodeType!==3||($=L+_),Oe!==E||c!==0&&Oe.nodeType!==3||(te=L+c),Oe.nodeType===3&&(L+=Oe.nodeValue.length),(et=Oe.firstChild)!==null;)Ue=Oe,Oe=et;for(;;){if(Oe===n)break t;if(Ue===o&&++Te===_&&($=L),Ue===E&&++ke===c&&(te=L),(et=Oe.nextSibling)!==null)break;Oe=Ue,Ue=Oe.parentNode}Oe=et}o=$===-1||te===-1?null:{start:$,end:te}}else o=null}o=o||{start:0,end:0}}else o=null;for(wu={focusedElem:n,selectionRange:o},oo=!1,rt=i;rt!==null;)if(i=rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,rt=n;else for(;rt!==null;){i=rt;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var lt=at.memoizedProps,en=at.memoizedState,me=i.stateNode,ae=me.getSnapshotBeforeUpdate(i.elementType===i.type?lt:hi(i.type,lt),en);me.__reactInternalSnapshotBeforeUpdate=ae}break;case 3:var xe=i.stateNode.containerInfo;xe.nodeType===1?xe.textContent="":xe.nodeType===9&&xe.documentElement&&xe.removeChild(xe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(He){Zt(i,i.return,He)}if(n=i.sibling,n!==null){n.return=i.return,rt=n;break}rt=i.return}return at=yp,yp=!1,at}function Aa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var _=c=c.next;do{if((_.tag&n)===n){var E=_.destroy;_.destroy=void 0,E!==void 0&&fc(i,o,E)}_=_.next}while(_!==c)}}function Vo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function dc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Sp(n){var i=n.alternate;i!==null&&(n.alternate=null,Sp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[wi],delete i[ga],delete i[Cu],delete i[z0],delete i[H0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(n=n.child,n!==null))for(hc(n,i,o),n=n.sibling;n!==null;)hc(n,i,o),n=n.sibling}function pc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pc(n,i,o),n=n.sibling;n!==null;)pc(n,i,o),n=n.sibling}var mn=null,pi=!1;function pr(n,i,o){for(o=o.child;o!==null;)wp(n,i,o),o=o.sibling}function wp(n,i,o){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(pe,o)}catch{}switch(o.tag){case 5:Mn||Ts(o,i);case 6:var c=mn,_=pi;mn=null,pr(n,i,o),mn=c,pi=_,mn!==null&&(pi?(n=mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(pi?(n=mn,o=o.stateNode,n.nodeType===8?Au(n.parentNode,o):n.nodeType===1&&Au(n,o),sa(n)):Au(mn,o.stateNode));break;case 4:c=mn,_=pi,mn=o.stateNode.containerInfo,pi=!0,pr(n,i,o),mn=c,pi=_;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){_=c=c.next;do{var E=_,L=E.destroy;E=E.tag,L!==void 0&&((E&2)!==0||(E&4)!==0)&&fc(o,i,L),_=_.next}while(_!==c)}pr(n,i,o);break;case 1:if(!Mn&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch($){Zt(o,i,$)}pr(n,i,o);break;case 21:pr(n,i,o);break;case 22:o.mode&1?(Mn=(c=Mn)||o.memoizedState!==null,pr(n,i,o),Mn=c):pr(n,i,o);break;default:pr(n,i,o)}}function Tp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new i_),i.forEach(function(c){var _=h_.bind(null,n,c);o.has(c)||(o.add(c),c.then(_,_))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var _=o[c];try{var E=n,L=i,$=L;e:for(;$!==null;){switch($.tag){case 5:mn=$.stateNode,pi=!1;break e;case 3:mn=$.stateNode.containerInfo,pi=!0;break e;case 4:mn=$.stateNode.containerInfo,pi=!0;break e}$=$.return}if(mn===null)throw Error(t(160));wp(E,L,_),mn=null,pi=!1;var te=_.alternate;te!==null&&(te.return=null),_.return=null}catch(Te){Zt(_,i,Te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,n),i=i.sibling}function bp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),Ai(n),c&4){try{Aa(3,n,n.return),Vo(3,n)}catch(lt){Zt(n,n.return,lt)}try{Aa(5,n,n.return)}catch(lt){Zt(n,n.return,lt)}}break;case 1:mi(i,n),Ai(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(mi(i,n),Ai(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var _=n.stateNode;try{ye(_,"")}catch(lt){Zt(n,n.return,lt)}}if(c&4&&(_=n.stateNode,_!=null)){var E=n.memoizedProps,L=o!==null?o.memoizedProps:E,$=n.type,te=n.updateQueue;if(n.updateQueue=null,te!==null)try{$==="input"&&E.type==="radio"&&E.name!=null&&he(_,E),Ne($,L);var Te=Ne($,E);for(L=0;L<te.length;L+=2){var ke=te[L],Oe=te[L+1];ke==="style"?ve(_,Oe):ke==="dangerouslySetInnerHTML"?de(_,Oe):ke==="children"?ye(_,Oe):I(_,ke,Oe,Te)}switch($){case"input":V(_,E);break;case"textarea":Ge(_,E);break;case"select":var Ue=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!E.multiple;var et=E.value;et!=null?Ae(_,!!E.multiple,et,!1):Ue!==!!E.multiple&&(E.defaultValue!=null?Ae(_,!!E.multiple,E.defaultValue,!0):Ae(_,!!E.multiple,E.multiple?[]:"",!1))}_[ga]=E}catch(lt){Zt(n,n.return,lt)}}break;case 6:if(mi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));_=n.stateNode,E=n.memoizedProps;try{_.nodeValue=E}catch(lt){Zt(n,n.return,lt)}}break;case 3:if(mi(i,n),Ai(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch(lt){Zt(n,n.return,lt)}break;case 4:mi(i,n),Ai(n);break;case 13:mi(i,n),Ai(n),_=n.child,_.flags&8192&&(E=_.memoizedState!==null,_.stateNode.isHidden=E,!E||_.alternate!==null&&_.alternate.memoizedState!==null||(_c=Yt())),c&4&&Tp(n);break;case 22:if(ke=o!==null&&o.memoizedState!==null,n.mode&1?(Mn=(Te=Mn)||ke,mi(i,n),Mn=Te):mi(i,n),Ai(n),c&8192){if(Te=n.memoizedState!==null,(n.stateNode.isHidden=Te)&&!ke&&(n.mode&1)!==0)for(rt=n,ke=n.child;ke!==null;){for(Oe=rt=ke;rt!==null;){switch(Ue=rt,et=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:Aa(4,Ue,Ue.return);break;case 1:Ts(Ue,Ue.return);var at=Ue.stateNode;if(typeof at.componentWillUnmount=="function"){c=Ue,o=Ue.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(lt){Zt(c,o,lt)}}break;case 5:Ts(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){Rp(Oe);continue}}et!==null?(et.return=Ue,rt=et):Rp(Oe)}ke=ke.sibling}e:for(ke=null,Oe=n;;){if(Oe.tag===5){if(ke===null){ke=Oe;try{_=Oe.stateNode,Te?(E=_.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):($=Oe.stateNode,te=Oe.memoizedProps.style,L=te!=null&&te.hasOwnProperty("display")?te.display:null,$.style.display=ee("display",L))}catch(lt){Zt(n,n.return,lt)}}}else if(Oe.tag===6){if(ke===null)try{Oe.stateNode.nodeValue=Te?"":Oe.memoizedProps}catch(lt){Zt(n,n.return,lt)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===n)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===n)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===n)break e;ke===Oe&&(ke=null),Oe=Oe.return}ke===Oe&&(ke=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:mi(i,n),Ai(n),c&4&&Tp(n);break;case 21:break;default:mi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Mp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var _=c.stateNode;c.flags&32&&(ye(_,""),c.flags&=-33);var E=Ep(n);pc(n,E,_);break;case 3:case 4:var L=c.stateNode.containerInfo,$=Ep(n);hc(n,$,L);break;default:throw Error(t(161))}}catch(te){Zt(n,n.return,te)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function s_(n,i,o){rt=n,Ap(n)}function Ap(n,i,o){for(var c=(n.mode&1)!==0;rt!==null;){var _=rt,E=_.child;if(_.tag===22&&c){var L=_.memoizedState!==null||Go;if(!L){var $=_.alternate,te=$!==null&&$.memoizedState!==null||Mn;$=Go;var Te=Mn;if(Go=L,(Mn=te)&&!Te)for(rt=_;rt!==null;)L=rt,te=L.child,L.tag===22&&L.memoizedState!==null?Pp(_):te!==null?(te.return=L,rt=te):Pp(_);for(;E!==null;)rt=E,Ap(E),E=E.sibling;rt=_,Go=$,Mn=Te}Cp(n)}else(_.subtreeFlags&8772)!==0&&E!==null?(E.return=_,rt=E):Cp(n)}}function Cp(n){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Vo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(o===null)c.componentDidMount();else{var _=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(_,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var E=i.updateQueue;E!==null&&Rh(i,E,c);break;case 3:var L=i.updateQueue;if(L!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Rh(i,L,o)}break;case 5:var $=i.stateNode;if(o===null&&i.flags&4){o=$;var te=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&o.focus();break;case"img":te.src&&(o.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Te=i.alternate;if(Te!==null){var ke=Te.memoizedState;if(ke!==null){var Oe=ke.dehydrated;Oe!==null&&sa(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&dc(i)}catch(Ue){Zt(i,i.return,Ue)}}if(i===n){rt=null;break}if(o=i.sibling,o!==null){o.return=i.return,rt=o;break}rt=i.return}}function Rp(n){for(;rt!==null;){var i=rt;if(i===n){rt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,rt=o;break}rt=i.return}}function Pp(n){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Vo(4,i)}catch(te){Zt(i,o,te)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var _=i.return;try{c.componentDidMount()}catch(te){Zt(i,_,te)}}var E=i.return;try{dc(i)}catch(te){Zt(i,E,te)}break;case 5:var L=i.return;try{dc(i)}catch(te){Zt(i,L,te)}}}catch(te){Zt(i,i.return,te)}if(i===n){rt=null;break}var $=i.sibling;if($!==null){$.return=i.return,rt=$;break}rt=i.return}}var a_=Math.ceil,Wo=R.ReactCurrentDispatcher,mc=R.ReactCurrentOwner,ti=R.ReactCurrentBatchConfig,Nt=0,fn=null,nn=null,gn=0,Wn=0,bs=ur(0),on=0,Ca=null,Hr=0,Xo=0,gc=0,Ra=null,Fn=null,_c=0,As=1/0,Xi=null,jo=!1,vc=null,mr=null,Yo=!1,gr=null,qo=0,Pa=0,xc=null,$o=-1,Ko=0;function Cn(){return(Nt&6)!==0?Yt():$o!==-1?$o:$o=Yt()}function _r(n){return(n.mode&1)===0?1:(Nt&2)!==0&&gn!==0?gn&-gn:V0.transition!==null?(Ko===0&&(Ko=sn()),Ko):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function gi(n,i,o,c){if(50<Pa)throw Pa=0,xc=null,Error(t(185));Qt(n,o,c),((Nt&2)===0||n!==fn)&&(n===fn&&((Nt&2)===0&&(Xo|=o),on===4&&vr(n,gn)),kn(n,c),o===1&&Nt===0&&(i.mode&1)===0&&(As=Yt()+500,wo&&fr()))}function kn(n,i){var o=n.callbackNode;Ht(n,i);var c=bt(n,n===fn?gn:0);if(c===0)o!==null&&Js(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Js(o),i===1)n.tag===0?G0(Ip.bind(null,n)):_h(Ip.bind(null,n)),O0(function(){(Nt&6)===0&&fr()}),o=null;else{switch(oi(c)){case 1:o=Qs;break;case 4:o=ea;break;case 16:o=k;break;case 536870912:o=we;break;default:o=k}o=zp(o,Np.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Np(n,i){if($o=-1,Ko=0,(Nt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Cs()&&n.callbackNode!==o)return null;var c=bt(n,n===fn?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Zo(n,c);else{i=c;var _=Nt;Nt|=2;var E=Lp();(fn!==n||gn!==i)&&(Xi=null,As=Yt()+500,Vr(n,i));do try{u_();break}catch($){Dp(n,$)}while(!0);ku(),Wo.current=E,Nt=_,nn!==null?i=0:(fn=null,gn=0,i=on)}if(i!==0){if(i===2&&(_=kt(n),_!==0&&(c=_,i=yc(n,_))),i===1)throw o=Ca,Vr(n,0),vr(n,c),kn(n,Yt()),o;if(i===6)vr(n,c);else{if(_=n.current.alternate,(c&30)===0&&!o_(_)&&(i=Zo(n,c),i===2&&(E=kt(n),E!==0&&(c=E,i=yc(n,E))),i===1))throw o=Ca,Vr(n,0),vr(n,c),kn(n,Yt()),o;switch(n.finishedWork=_,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,Fn,Xi);break;case 3:if(vr(n,c),(c&130023424)===c&&(i=_c+500-Yt(),10<i)){if(bt(n,0)!==0)break;if(_=n.suspendedLanes,(_&c)!==c){Cn(),n.pingedLanes|=n.suspendedLanes&_;break}n.timeoutHandle=bu(Wr.bind(null,n,Fn,Xi),i);break}Wr(n,Fn,Xi);break;case 4:if(vr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,_=-1;0<c;){var L=31-Ye(c);E=1<<L,L=i[L],L>_&&(_=L),c&=~E}if(c=_,c=Yt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*a_(c/1960))-c,10<c){n.timeoutHandle=bu(Wr.bind(null,n,Fn,Xi),c);break}Wr(n,Fn,Xi);break;case 5:Wr(n,Fn,Xi);break;default:throw Error(t(329))}}}return kn(n,Yt()),n.callbackNode===o?Np.bind(null,n):null}function yc(n,i){var o=Ra;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=Zo(n,i),n!==2&&(i=Fn,Fn=o,i!==null&&Sc(i)),n}function Sc(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function o_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var _=o[c],E=_.getSnapshot;_=_.value;try{if(!fi(E(),_))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(n,i){for(i&=~gc,i&=~Xo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ye(i),c=1<<o;n[o]=-1,i&=~c}}function Ip(n){if((Nt&6)!==0)throw Error(t(327));Cs();var i=bt(n,0);if((i&1)===0)return kn(n,Yt()),null;var o=Zo(n,i);if(n.tag!==0&&o===2){var c=kt(n);c!==0&&(i=c,o=yc(n,c))}if(o===1)throw o=Ca,Vr(n,0),vr(n,i),kn(n,Yt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,Fn,Xi),kn(n,Yt()),null}function Mc(n,i){var o=Nt;Nt|=1;try{return n(i)}finally{Nt=o,Nt===0&&(As=Yt()+500,wo&&fr())}}function Gr(n){gr!==null&&gr.tag===0&&(Nt&6)===0&&Cs();var i=Nt;Nt|=1;var o=ti.transition,c=Mt;try{if(ti.transition=null,Mt=1,n)return n()}finally{Mt=c,ti.transition=o,Nt=i,(Nt&6)===0&&fr()}}function Ec(){Wn=bs.current,Wt(bs)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,k0(o)),nn!==null)for(o=nn.return;o!==null;){var c=o;switch(Iu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Mo();break;case 3:Es(),Wt(Dn),Wt(xn),Xu();break;case 5:Vu(c);break;case 4:Es();break;case 13:Wt(qt);break;case 19:Wt(qt);break;case 10:Ou(c.type._context);break;case 22:case 23:Ec()}o=o.return}if(fn=n,nn=n=xr(n.current,null),gn=Wn=i,on=0,Ca=null,gc=Xo=Hr=0,Fn=Ra=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],c=o.interleaved,c!==null){o.interleaved=null;var _=c.next,E=o.pending;if(E!==null){var L=E.next;E.next=_,c.next=L}o.pending=c}Or=null}return n}function Dp(n,i){do{var o=nn;try{if(ku(),Lo.current=Oo,Uo){for(var c=$t.memoizedState;c!==null;){var _=c.queue;_!==null&&(_.pending=null),c=c.next}Uo=!1}if(zr=0,cn=an=$t=null,Ma=!1,Ea=0,mc.current=null,o===null||o.return===null){on=1,Ca=i,nn=null;break}e:{var E=n,L=o.return,$=o,te=i;if(i=gn,$.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var Te=te,ke=$,Oe=ke.tag;if((ke.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Ue=ke.alternate;Ue?(ke.updateQueue=Ue.updateQueue,ke.memoizedState=Ue.memoizedState,ke.lanes=Ue.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var et=rp(L);if(et!==null){et.flags&=-257,sp(et,L,$,E,i),et.mode&1&&ip(E,Te,i),i=et,te=Te;var at=i.updateQueue;if(at===null){var lt=new Set;lt.add(te),i.updateQueue=lt}else at.add(te);break e}else{if((i&1)===0){ip(E,Te,i),wc();break e}te=Error(t(426))}}else if(jt&&$.mode&1){var en=rp(L);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),sp(en,L,$,E,i),Uu(ws(te,$));break e}}E=te=ws(te,$),on!==4&&(on=2),Ra===null?Ra=[E]:Ra.push(E),E=L;do{switch(E.tag){case 3:E.flags|=65536,i&=-i,E.lanes|=i;var me=tp(E,te,i);Ch(E,me);break e;case 1:$=te;var ae=E.type,xe=E.stateNode;if((E.flags&128)===0&&(typeof ae.getDerivedStateFromError=="function"||xe!==null&&typeof xe.componentDidCatch=="function"&&(mr===null||!mr.has(xe)))){E.flags|=65536,i&=-i,E.lanes|=i;var He=np(E,$,i);Ch(E,He);break e}}E=E.return}while(E!==null)}Fp(o)}catch(dt){i=dt,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function Lp(){var n=Wo.current;return Wo.current=Oo,n===null?Oo:n}function wc(){(on===0||on===3||on===2)&&(on=4),fn===null||(Hr&268435455)===0&&(Xo&268435455)===0||vr(fn,gn)}function Zo(n,i){var o=Nt;Nt|=2;var c=Lp();(fn!==n||gn!==i)&&(Xi=null,Vr(n,i));do try{l_();break}catch(_){Dp(n,_)}while(!0);if(ku(),Nt=o,Wo.current=c,nn!==null)throw Error(t(261));return fn=null,gn=0,on}function l_(){for(;nn!==null;)Up(nn)}function u_(){for(;nn!==null&&!so();)Up(nn)}function Up(n){var i=Bp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?Fp(n):nn=i,mc.current=null}function Fp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=t_(o,i,Wn),o!==null){nn=o;return}}else{if(o=n_(o,i),o!==null){o.flags&=32767,nn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=n}while(i!==null);on===0&&(on=5)}function Wr(n,i,o){var c=Mt,_=ti.transition;try{ti.transition=null,Mt=1,c_(n,i,o,c)}finally{ti.transition=_,Mt=c}return null}function c_(n,i,o,c){do Cs();while(gr!==null);if((Nt&6)!==0)throw Error(t(327));o=n.finishedWork;var _=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var E=o.lanes|o.childLanes;if(At(n,E),n===fn&&(nn=fn=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Yo||(Yo=!0,zp(k,function(){return Cs(),null})),E=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||E){E=ti.transition,ti.transition=null;var L=Mt;Mt=1;var $=Nt;Nt|=4,mc.current=null,r_(n,o),bp(o,n),P0(wu),oo=!!Eu,wu=Eu=null,n.current=o,s_(o),nu(),Nt=$,Mt=L,ti.transition=E}else n.current=o;if(Yo&&(Yo=!1,gr=n,qo=_),E=n.pendingLanes,E===0&&(mr=null),Ke(o.stateNode),kn(n,Yt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)_=i[o],c(_.value,{componentStack:_.stack,digest:_.digest});if(jo)throw jo=!1,n=vc,vc=null,n;return(qo&1)!==0&&n.tag!==0&&Cs(),E=n.pendingLanes,(E&1)!==0?n===xc?Pa++:(Pa=0,xc=n):Pa=0,fr(),null}function Cs(){if(gr!==null){var n=oi(qo),i=ti.transition,o=Mt;try{if(ti.transition=null,Mt=16>n?16:n,gr===null)var c=!1;else{if(n=gr,gr=null,qo=0,(Nt&6)!==0)throw Error(t(331));var _=Nt;for(Nt|=4,rt=n.current;rt!==null;){var E=rt,L=E.child;if((rt.flags&16)!==0){var $=E.deletions;if($!==null){for(var te=0;te<$.length;te++){var Te=$[te];for(rt=Te;rt!==null;){var ke=rt;switch(ke.tag){case 0:case 11:case 15:Aa(8,ke,E)}var Oe=ke.child;if(Oe!==null)Oe.return=ke,rt=Oe;else for(;rt!==null;){ke=rt;var Ue=ke.sibling,et=ke.return;if(Sp(ke),ke===Te){rt=null;break}if(Ue!==null){Ue.return=et,rt=Ue;break}rt=et}}}var at=E.alternate;if(at!==null){var lt=at.child;if(lt!==null){at.child=null;do{var en=lt.sibling;lt.sibling=null,lt=en}while(lt!==null)}}rt=E}}if((E.subtreeFlags&2064)!==0&&L!==null)L.return=E,rt=L;else e:for(;rt!==null;){if(E=rt,(E.flags&2048)!==0)switch(E.tag){case 0:case 11:case 15:Aa(9,E,E.return)}var me=E.sibling;if(me!==null){me.return=E.return,rt=me;break e}rt=E.return}}var ae=n.current;for(rt=ae;rt!==null;){L=rt;var xe=L.child;if((L.subtreeFlags&2064)!==0&&xe!==null)xe.return=L,rt=xe;else e:for(L=ae;rt!==null;){if($=rt,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:Vo(9,$)}}catch(dt){Zt($,$.return,dt)}if($===L){rt=null;break e}var He=$.sibling;if(He!==null){He.return=$.return,rt=He;break e}rt=$.return}}if(Nt=_,fr(),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(pe,n)}catch{}c=!0}return c}finally{Mt=o,ti.transition=i}}return!1}function kp(n,i,o){i=ws(o,i),i=tp(n,i,1),n=hr(n,i,1),i=Cn(),n!==null&&(Qt(n,1,i),kn(n,i))}function Zt(n,i,o){if(n.tag===3)kp(n,n,o);else for(;i!==null;){if(i.tag===3){kp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=ws(o,n),n=np(i,n,1),i=hr(i,n,1),n=Cn(),i!==null&&(Qt(i,1,n),kn(i,n));break}}i=i.return}}function f_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&o,fn===n&&(gn&o)===o&&(on===4||on===3&&(gn&130023424)===gn&&500>Yt()-_c?Vr(n,0):gc|=o),kn(n,i)}function Op(n,i){i===0&&((n.mode&1)===0?i=1:(i=St,St<<=1,(St&130023424)===0&&(St=4194304)));var o=Cn();n=Gi(n,i),n!==null&&(Qt(n,i,o),kn(n,o))}function d_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Op(n,o)}function h_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,_=n.memoizedState;_!==null&&(o=_.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Op(n,o)}var Bp;Bp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Un=!1,e_(n,i,o);Un=(n.flags&131072)!==0}else Un=!1,jt&&(i.flags&1048576)!==0&&vh(i,bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ho(n,i),n=i.pendingProps;var _=gs(i,xn.current);Ms(i,o),_=qu(null,i,c,n,_,o);var E=$u();return i.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(E=!0,Eo(i)):E=!1,i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,Hu(i),_.updater=Bo,i.stateNode=_,_._reactInternals=i,tc(i,c,n,o),i=sc(null,i,c,!0,E,o)):(i.tag=0,jt&&E&&Nu(i),An(null,i,_,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ho(n,i),n=i.pendingProps,_=c._init,c=_(c._payload),i.type=c,_=i.tag=m_(c),n=hi(c,n),_){case 0:i=rc(null,i,c,n,o);break e;case 1:i=fp(null,i,c,n,o);break e;case 11:i=ap(null,i,c,n,o);break e;case 14:i=op(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,_=i.pendingProps,_=i.elementType===c?_:hi(c,_),rc(n,i,c,_,o);case 1:return c=i.type,_=i.pendingProps,_=i.elementType===c?_:hi(c,_),fp(n,i,c,_,o);case 3:e:{if(dp(i),n===null)throw Error(t(387));c=i.pendingProps,E=i.memoizedState,_=E.element,Ah(n,i),Io(i,c,null,o);var L=i.memoizedState;if(c=L.element,E.isDehydrated)if(E={element:c,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},i.updateQueue.baseState=E,i.memoizedState=E,i.flags&256){_=ws(Error(t(423)),i),i=hp(n,i,c,o,_);break e}else if(c!==_){_=ws(Error(t(424)),i),i=hp(n,i,c,o,_);break e}else for(Vn=lr(i.stateNode.containerInfo.firstChild),Gn=i,jt=!0,di=null,o=Th(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===_){i=Wi(n,i,o);break e}An(n,i,c,o)}i=i.child}return i;case 5:return Ph(i),n===null&&Lu(i),c=i.type,_=i.pendingProps,E=n!==null?n.memoizedProps:null,L=_.children,Tu(c,_)?L=null:E!==null&&Tu(c,E)&&(i.flags|=32),cp(n,i),An(n,i,L,o),i.child;case 6:return n===null&&Lu(i),null;case 13:return pp(n,i,o);case 4:return Gu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,o):An(n,i,c,o),i.child;case 11:return c=i.type,_=i.pendingProps,_=i.elementType===c?_:hi(c,_),ap(n,i,c,_,o);case 7:return An(n,i,i.pendingProps,o),i.child;case 8:return An(n,i,i.pendingProps.children,o),i.child;case 12:return An(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,_=i.pendingProps,E=i.memoizedProps,L=_.value,Gt(Ro,c._currentValue),c._currentValue=L,E!==null)if(fi(E.value,L)){if(E.children===_.children&&!Dn.current){i=Wi(n,i,o);break e}}else for(E=i.child,E!==null&&(E.return=i);E!==null;){var $=E.dependencies;if($!==null){L=E.child;for(var te=$.firstContext;te!==null;){if(te.context===c){if(E.tag===1){te=Vi(-1,o&-o),te.tag=2;var Te=E.updateQueue;if(Te!==null){Te=Te.shared;var ke=Te.pending;ke===null?te.next=te:(te.next=ke.next,ke.next=te),Te.pending=te}}E.lanes|=o,te=E.alternate,te!==null&&(te.lanes|=o),Bu(E.return,o,i),$.lanes|=o;break}te=te.next}}else if(E.tag===10)L=E.type===i.type?null:E.child;else if(E.tag===18){if(L=E.return,L===null)throw Error(t(341));L.lanes|=o,$=L.alternate,$!==null&&($.lanes|=o),Bu(L,o,i),L=E.sibling}else L=E.child;if(L!==null)L.return=E;else for(L=E;L!==null;){if(L===i){L=null;break}if(E=L.sibling,E!==null){E.return=L.return,L=E;break}L=L.return}E=L}An(n,i,_.children,o),i=i.child}return i;case 9:return _=i.type,c=i.pendingProps.children,Ms(i,o),_=Qn(_),c=c(_),i.flags|=1,An(n,i,c,o),i.child;case 14:return c=i.type,_=hi(c,i.pendingProps),_=hi(c.type,_),op(n,i,c,_,o);case 15:return lp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,_=i.pendingProps,_=i.elementType===c?_:hi(c,_),Ho(n,i),i.tag=1,Ln(c)?(n=!0,Eo(i)):n=!1,Ms(i,o),Qh(i,c,_),tc(i,c,_,o),sc(null,i,c,!0,n,o);case 19:return gp(n,i,o);case 22:return up(n,i,o)}throw Error(t(156,i.tag))};function zp(n,i){return Dr(n,i)}function p_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,o,c){return new p_(n,i,o,c)}function Tc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function m_(n){if(typeof n=="function")return Tc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===F)return 11;if(n===Y)return 14}return 2}function xr(n,i){var o=n.alternate;return o===null?(o=ni(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Jo(n,i,o,c,_,E){var L=2;if(c=n,typeof n=="function")Tc(n)&&(L=1);else if(typeof n=="string")L=5;else e:switch(n){case O:return Xr(o.children,_,E,i);case A:L=8,_|=8;break;case D:return n=ni(12,o,i,_|2),n.elementType=D,n.lanes=E,n;case j:return n=ni(13,o,i,_),n.elementType=j,n.lanes=E,n;case w:return n=ni(19,o,i,_),n.elementType=w,n.lanes=E,n;case q:return Qo(o,_,E,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:L=10;break e;case Z:L=9;break e;case F:L=11;break e;case Y:L=14;break e;case le:L=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ni(L,o,i,_),i.elementType=n,i.type=c,i.lanes=E,i}function Xr(n,i,o,c){return n=ni(7,n,c,i),n.lanes=o,n}function Qo(n,i,o,c){return n=ni(22,n,c,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function bc(n,i,o){return n=ni(6,n,null,i),n.lanes=o,n}function Ac(n,i,o){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function g_(n,i,o,c,_){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qe(0),this.expirationTimes=Qe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.identifierPrefix=c,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function Cc(n,i,o,c,_,E,L,$,te){return n=new g_(n,i,o,$,te),i===1?(i=1,E===!0&&(i|=8)):i=0,E=ni(3,null,null,i),n.current=E,E.stateNode=n,E.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hu(E),n}function __(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Hp(n){if(!n)return cr;n=n._reactInternals;e:{if(bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return mh(n,o,i)}return i}function Gp(n,i,o,c,_,E,L,$,te){return n=Cc(o,c,!0,n,_,E,L,$,te),n.context=Hp(null),o=n.current,c=Cn(),_=_r(o),E=Vi(c,_),E.callback=i??null,hr(o,E,_),n.current.lanes=_,Qt(n,_,c),kn(n,c),n}function el(n,i,o,c){var _=i.current,E=Cn(),L=_r(_);return o=Hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Vi(E,L),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=hr(_,i,L),n!==null&&(gi(n,_,L,E),No(n,_,L)),L}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Rc(n,i){Vp(n,i),(n=n.alternate)&&Vp(n,i)}function v_(){return null}var Wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pc(n){this._internalRoot=n}nl.prototype.render=Pc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=Pc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){el(null,n,null,null)}),i[Oi]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=li();n={blockedOn:null,target:n,priority:i};for(var o=0;o<sr.length&&i!==0&&i<sr[o].priority;o++);sr.splice(o,0,n),o===0&&Pd(n)}};function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function x_(n,i,o,c,_){if(_){if(typeof c=="function"){var E=c;c=function(){var Te=tl(L);E.call(Te)}}var L=Gp(i,c,n,0,null,!1,!1,"",Xp);return n._reactRootContainer=L,n[Oi]=L.current,pa(n.nodeType===8?n.parentNode:n),Gr(),L}for(;_=n.lastChild;)n.removeChild(_);if(typeof c=="function"){var $=c;c=function(){var Te=tl(te);$.call(Te)}}var te=Cc(n,0,!1,null,null,!1,!1,"",Xp);return n._reactRootContainer=te,n[Oi]=te.current,pa(n.nodeType===8?n.parentNode:n),Gr(function(){el(i,te,o,c)}),te}function rl(n,i,o,c,_){var E=o._reactRootContainer;if(E){var L=E;if(typeof _=="function"){var $=_;_=function(){var te=tl(L);$.call(te)}}el(i,L,n,_)}else L=x_(o,i,n,_,c);return tl(L)}ki=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=nt(i.pendingLanes);o!==0&&(vn(i,o|1),kn(i,Yt()),(Nt&6)===0&&(As=Yt()+500,fr()))}break;case 13:Gr(function(){var c=Gi(n,1);if(c!==null){var _=Cn();gi(c,n,1,_)}}),Rc(n,1)}},Dt=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var o=Cn();gi(i,n,134217728,o)}Rc(n,134217728)}},Xt=function(n){if(n.tag===13){var i=_r(n),o=Gi(n,i);if(o!==null){var c=Cn();gi(o,n,i,c)}Rc(n,i)}},li=function(){return Mt},Bt=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},ht=function(n,i,o){switch(i){case"input":if(V(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var _=So(c);if(!_)throw Error(t(90));ut(c),V(c,_)}}}break;case"textarea":Ge(n,o);break;case"select":i=o.value,i!=null&&Ae(n,!!o.multiple,i,!1)}},Je=Mc,De=Gr;var y_={usingClientEntryPoint:!1,Events:[_a,ps,So,Pe,je,Mc]},Na={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S_={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ir(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||v_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{pe=sl.inject(S_),fe=sl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y_,On.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(t(200));return __(n,i,null,o)},On.createRoot=function(n,i){if(!Nc(n))throw Error(t(299));var o=!1,c="",_=Wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=Cc(n,1,!1,null,null,o,!1,c,_),n[Oi]=i.current,pa(n.nodeType===8?n.parentNode:n),new Pc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ir(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Gr(n)},On.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},On.hydrateRoot=function(n,i,o){if(!Nc(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,_=!1,E="",L=Wp;if(o!=null&&(o.unstable_strictMode===!0&&(_=!0),o.identifierPrefix!==void 0&&(E=o.identifierPrefix),o.onRecoverableError!==void 0&&(L=o.onRecoverableError)),i=Gp(i,null,n,1,o??null,_,!1,E,L),n[Oi]=i.current,pa(n),c)for(n=0;n<c.length;n++)o=c[n],_=o._getVersion,_=_(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,_]:i.mutableSourceEagerHydrationData.push(o,_);return new nl(i)},On.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},On.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},On.unstable_batchedUpdates=Mc,On.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,c)},On.version="18.3.1-next-f1338f8080-20240426",On}var Qp;function R_(){if(Qp)return Lc.exports;Qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lc.exports=C_(),Lc.exports}var em;function P_(){if(em)return al;em=1;var s=R_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var N_=P_();const I_=ig(N_);var tt=fd();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="186",D_=0,tm=1,L_=2,Ul=1,U_=2,Ha=3,es=0,Pn=1,Ji=2,er=0,Wa=1,yf=2,nm=3,im=4,F_=5,Gs=100,k_=101,O_=102,B_=103,z_=104,H_=200,G_=201,V_=202,W_=203,rg=204,sg=205,X_=206,j_=207,Y_=208,q_=209,$_=210,K_=211,Z_=212,J_=213,Q_=214,Sf=0,Mf=1,Ef=2,ja=3,wf=4,Tf=5,bf=6,Af=7,ag=0,ev=1,tv=2,Di=0,og=1,lg=2,ug=3,cg=4,fg=5,dg=6,hg=7,pg=300,ts=301,js=302,kc=303,Oc=304,Kl=306,Cf=1e3,Qi=1001,Rf=1002,_n=1003,nv=1004,ol=1005,Tn=1006,Bc=1007,Jr=1008,ai=1009,mg=1010,gg=1011,Ya=1012,hd=1013,Li=1014,Ni=1015,Ui=1016,pd=1017,md=1018,qa=1020,_g=35902,vg=35899,xg=1021,yg=1022,Si=1023,nr=1026,Qr=1027,Sg=1028,gd=1029,ns=1030,_d=1031,vd=1033,Fl=33776,kl=33777,Ol=33778,Bl=33779,Pf=35840,Nf=35841,If=35842,Df=35843,Lf=36196,Uf=37492,Ff=37496,kf=37488,Of=37489,Gl=37490,Bf=37491,zf=37808,Hf=37809,Gf=37810,Vf=37811,Wf=37812,Xf=37813,jf=37814,Yf=37815,qf=37816,$f=37817,Kf=37818,Zf=37819,Jf=37820,Qf=37821,ed=36492,td=36494,nd=36495,id=36283,rd=36284,Vl=36285,sd=36286,iv=3200,rm=0,rv=1,Ar="",ri="srgb",Wl="srgb-linear",Xl="linear",zt="srgb",zc=7680,sv=519,av=512,ov=513,lv=514,xd=515,uv=516,cv=517,yd=518,fv=519,dv=35044,sm="300 es",Ii=2e3,jl=2001;function hv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pv(){const s=Yl("canvas");return s.style.display="block",s}const am={};function om(...s){const e="THREE."+s.shift();console.log(e,...s)}function Mg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=Mg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ut(...s){s=Mg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ws(...s){const e=s.join(" ");e in am||(am[e]=!0,vt(...s))}function mv(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const gv={[Sf]:Mf,[Ef]:bf,[wf]:Af,[ja]:Tf,[Mf]:Sf,[bf]:Ef,[Af]:wf,[Tf]:ja};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,ad=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function _v(s,e){return(s%e+e)%e}function Gc(s,e,t){return(1-t)*s+t*e}function Da(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wd=class wd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wd.prototype.isVector2=!0;let Ot=wd;class qs{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let d=r[a+0],h=r[a+1],x=r[a+2],y=r[a+3],m=l[u+0],v=l[u+1],M=l[u+2],S=l[u+3];if(y!==S||d!==m||h!==v||x!==M){let g=d*m+h*v+x*M+y*S;g<0&&(m=-m,v=-v,M=-M,S=-S,g=-g);let p=1-f;if(g<.9995){const T=Math.acos(g),I=Math.sin(T);p=Math.sin(p*T)/I,f=Math.sin(f*T)/I,d=d*p+m*f,h=h*p+v*f,x=x*p+M*f,y=y*p+S*f}else{d=d*p+m*f,h=h*p+v*f,x=x*p+M*f,y=y*p+S*f;const T=1/Math.sqrt(d*d+h*h+x*x+y*y);d*=T,h*=T,x*=T,y*=T}}e[t]=d,e[t+1]=h,e[t+2]=x,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],d=r[a+1],h=r[a+2],x=r[a+3],y=l[u],m=l[u+1],v=l[u+2],M=l[u+3];return e[t]=f*M+x*y+d*v-h*m,e[t+1]=d*M+x*m+h*y-f*v,e[t+2]=h*M+x*v+f*m-d*y,e[t+3]=x*M-f*y-d*m-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),x=f(a/2),y=f(l/2),m=d(r/2),v=d(a/2),M=d(l/2);switch(u){case"XYZ":this._x=m*x*y+h*v*M,this._y=h*v*y-m*x*M,this._z=h*x*M+m*v*y,this._w=h*x*y-m*v*M;break;case"YXZ":this._x=m*x*y+h*v*M,this._y=h*v*y-m*x*M,this._z=h*x*M-m*v*y,this._w=h*x*y+m*v*M;break;case"ZXY":this._x=m*x*y-h*v*M,this._y=h*v*y+m*x*M,this._z=h*x*M+m*v*y,this._w=h*x*y-m*v*M;break;case"ZYX":this._x=m*x*y-h*v*M,this._y=h*v*y+m*x*M,this._z=h*x*M-m*v*y,this._w=h*x*y+m*v*M;break;case"YZX":this._x=m*x*y+h*v*M,this._y=h*v*y+m*x*M,this._z=h*x*M-m*v*y,this._w=h*x*y-m*v*M;break;case"XZY":this._x=m*x*y-h*v*M,this._y=h*v*y-m*x*M,this._z=h*x*M+m*v*y,this._w=h*x*y+m*v*M;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],x=t[6],y=t[10],m=r+f+y;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(x-d)*v,this._y=(l-h)*v,this._z=(u-a)*v}else if(r>f&&r>y){const v=2*Math.sqrt(1+r-f-y);this._w=(x-d)/v,this._x=.25*v,this._y=(a+u)/v,this._z=(l+h)/v}else if(f>y){const v=2*Math.sqrt(1+f-r-y);this._w=(l-h)/v,this._x=(a+u)/v,this._y=.25*v,this._z=(d+x)/v}else{const v=2*Math.sqrt(1+y-r-f);this._w=(u-a)/v,this._x=(l+h)/v,this._y=(d+x)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,x=t._w;return this._x=r*x+u*f+a*h-l*d,this._y=a*x+u*d+l*f-r*h,this._z=l*x+u*h+r*d-a*f,this._w=u*x-r*f-a*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),x=Math.sin(h);d=Math.sin(d*h)/x,t=Math.sin(t*h)/x,this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Td=class Td{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*a-f*r),x=2*(f*t-l*a),y=2*(l*r-u*t);return this.x=t+d*h+u*y-f*x,this.y=r+d*x+f*h-l*y,this.z=a+d*y+l*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*u-r*d,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Td.prototype.isVector3=!0;let Se=Td;const Vc=new Se,lm=new qs,bd=class bd{constructor(e,t,r,a,l,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,d,h)}set(e,t,r,a,l,u,f,d,h){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=t,x[4]=l,x[5]=d,x[6]=r,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],x=r[4],y=r[7],m=r[2],v=r[5],M=r[8],S=a[0],g=a[3],p=a[6],T=a[1],I=a[4],R=a[7],P=a[2],U=a[5],O=a[8];return l[0]=u*S+f*T+d*P,l[3]=u*g+f*I+d*U,l[6]=u*p+f*R+d*O,l[1]=h*S+x*T+y*P,l[4]=h*g+x*I+y*U,l[7]=h*p+x*R+y*O,l[2]=m*S+v*T+M*P,l[5]=m*g+v*I+M*U,l[8]=m*p+v*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],x=e[8];return t*u*x-t*f*h-r*l*x+r*f*d+a*l*h-a*u*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],x=e[8],y=x*u-f*h,m=f*d-x*l,v=h*l-u*d,M=t*y+r*m+a*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=y*S,e[1]=(a*h-x*r)*S,e[2]=(f*r-a*u)*S,e[3]=m*S,e[4]=(x*t-a*d)*S,e[5]=(a*l-f*t)*S,e[6]=v*S,e[7]=(r*d-h*t)*S,e[8]=(u*t-r*l)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-a*h,a*d,-a*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bd.prototype.isMatrix3=!0;let yt=bd;const Wc=new yt,um=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vv(){const s={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(a.r=tr(a.r),a.g=tr(a.g),a.b=tr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(a.r=Xs(a.r),a.g=Xs(a.g),a.b=Xs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ar?Xl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Wl]:{primaries:e,whitePoint:r,transfer:Xl,toXYZ:um,fromXYZ:cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:um,fromXYZ:cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const Ct=vv();function tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class xv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Yl("canvas")),Rs.width=e.width,Rs.height=e.height;const a=Rs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tr(t[r]/255)*255):t[r]=tr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yv=0;class Sd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Xc(a[u].image)):l.push(Xc(a[u]))}else l=Xc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let Sv=0;const jc=new Se;class Nn extends rs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=Qi,a=Qi,l=Tn,u=Jr,f=Si,d=ai,h=Nn.DEFAULT_ANISOTROPY,x=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Ka(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=pg;Nn.DEFAULT_ANISOTROPY=1;const Ad=class Ad{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const d=e.elements,h=d[0],x=d[4],y=d[8],m=d[1],v=d[5],M=d[9],S=d[2],g=d[6],p=d[10];if(Math.abs(x-m)<.01&&Math.abs(y-S)<.01&&Math.abs(M-g)<.01){if(Math.abs(x+m)<.1&&Math.abs(y+S)<.1&&Math.abs(M+g)<.1&&Math.abs(h+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,R=(v+1)/2,P=(p+1)/2,U=(x+m)/4,O=(y+S)/4,A=(M+g)/4;return I>R&&I>P?I<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(I),a=U/r,l=O/r):R>P?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=U/a,l=A/a):P<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),r=O/l,a=A/l),this.set(r,a,l,t),this}let T=Math.sqrt((g-M)*(g-M)+(y-S)*(y-S)+(m-x)*(m-x));return Math.abs(T)<.001&&(T=1),this.x=(g-M)/T,this.y=(y-S)/T,this.z=(m-x)/T,this.w=Math.acos((h+v+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ad.prototype.isVector4=!0;let Jt=Ad;class Mv extends rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Nn(a),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Sd(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Mv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Eg extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ev extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,t,r,a,l,u,f,d,h,x,y,m,v,M,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,d,h,x,y,m,v,M,S,g)}set(e,t,r,a,l,u,f,d,h,x,y,m,v,M,S,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=a,p[1]=l,p[5]=u,p[9]=f,p[13]=d,p[2]=h,p[6]=x,p[10]=y,p[14]=m,p[3]=v,p[7]=M,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(a),h=Math.sin(a),x=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const m=u*x,v=u*y,M=f*x,S=f*y;t[0]=d*x,t[4]=-d*y,t[8]=h,t[1]=v+M*h,t[5]=m-S*h,t[9]=-f*d,t[2]=S-m*h,t[6]=M+v*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*x,v=d*y,M=h*x,S=h*y;t[0]=m+S*f,t[4]=M*f-v,t[8]=u*h,t[1]=u*y,t[5]=u*x,t[9]=-f,t[2]=v*f-M,t[6]=S+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*x,v=d*y,M=h*x,S=h*y;t[0]=m-S*f,t[4]=-u*y,t[8]=M+v*f,t[1]=v+M*f,t[5]=u*x,t[9]=S-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*x,v=u*y,M=f*x,S=f*y;t[0]=d*x,t[4]=M*h-v,t[8]=m*h+S,t[1]=d*y,t[5]=S*h+m,t[9]=v*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,v=u*h,M=f*d,S=f*h;t[0]=d*x,t[4]=S-m*y,t[8]=M*y+v,t[1]=y,t[5]=u*x,t[9]=-f*x,t[2]=-h*x,t[6]=v*y+M,t[10]=m-S*y}else if(e.order==="XZY"){const m=u*d,v=u*h,M=f*d,S=f*h;t[0]=d*x,t[4]=-y,t[8]=h*x,t[1]=m*y+S,t[5]=u*x,t[9]=v*y-M,t[2]=M*y-v,t[6]=f*x,t[10]=S*y+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Tv)}lookAt(e,t,r){const a=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Sr.crossVectors(r,Xn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Sr.crossVectors(r,Xn)),Sr.normalize(),ll.crossVectors(Xn,Sr),a[0]=Sr.x,a[4]=ll.x,a[8]=Xn.x,a[1]=Sr.y,a[5]=ll.y,a[9]=Xn.y,a[2]=Sr.z,a[6]=ll.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],x=r[1],y=r[5],m=r[9],v=r[13],M=r[2],S=r[6],g=r[10],p=r[14],T=r[3],I=r[7],R=r[11],P=r[15],U=a[0],O=a[4],A=a[8],D=a[12],W=a[1],Z=a[5],F=a[9],j=a[13],w=a[2],Y=a[6],le=a[10],q=a[14],J=a[3],H=a[7],K=a[11],N=a[15];return l[0]=u*U+f*W+d*w+h*J,l[4]=u*O+f*Z+d*Y+h*H,l[8]=u*A+f*F+d*le+h*K,l[12]=u*D+f*j+d*q+h*N,l[1]=x*U+y*W+m*w+v*J,l[5]=x*O+y*Z+m*Y+v*H,l[9]=x*A+y*F+m*le+v*K,l[13]=x*D+y*j+m*q+v*N,l[2]=M*U+S*W+g*w+p*J,l[6]=M*O+S*Z+g*Y+p*H,l[10]=M*A+S*F+g*le+p*K,l[14]=M*D+S*j+g*q+p*N,l[3]=T*U+I*W+R*w+P*J,l[7]=T*O+I*Z+R*Y+P*H,l[11]=T*A+I*F+R*le+P*K,l[15]=T*D+I*j+R*q+P*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],x=e[2],y=e[6],m=e[10],v=e[14],M=e[3],S=e[7],g=e[11],p=e[15],T=d*v-h*m,I=f*v-h*y,R=f*m-d*y,P=u*v-h*x,U=u*m-d*x,O=u*y-f*x;return t*(S*T-g*I+p*R)-r*(M*T-g*P+p*U)+a*(M*I-S*P+p*O)-l*(M*R-S*U+g*O)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],d=e[2],h=e[6],x=e[10];return t*(u*x-f*h)-r*(l*x-f*d)+a*(l*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],x=e[8],y=e[9],m=e[10],v=e[11],M=e[12],S=e[13],g=e[14],p=e[15],T=t*f-r*u,I=t*d-a*u,R=t*h-l*u,P=r*d-a*f,U=r*h-l*f,O=a*h-l*d,A=x*S-y*M,D=x*g-m*M,W=x*p-v*M,Z=y*g-m*S,F=y*p-v*S,j=m*p-v*g,w=T*j-I*F+R*Z+P*W-U*D+O*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/w;return e[0]=(f*j-d*F+h*Z)*Y,e[1]=(a*F-r*j-l*Z)*Y,e[2]=(S*O-g*U+p*P)*Y,e[3]=(m*U-y*O-v*P)*Y,e[4]=(d*W-u*j-h*D)*Y,e[5]=(t*j-a*W+l*D)*Y,e[6]=(g*R-M*O-p*I)*Y,e[7]=(x*O-m*R+v*I)*Y,e[8]=(u*F-f*W+h*A)*Y,e[9]=(r*W-t*F-l*A)*Y,e[10]=(M*U-S*R+p*T)*Y,e[11]=(y*R-x*U-v*T)*Y,e[12]=(f*D-u*Z-d*A)*Y,e[13]=(t*Z-r*D+a*A)*Y,e[14]=(S*I-M*P-g*T)*Y,e[15]=(x*P-y*I+m*T)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,x=l*f;return this.set(h*u+r,h*f-a*d,h*d+a*f,0,h*f+a*d,x*f+r,x*d-a*u,0,h*d-a*f,x*d+a*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,x=u+u,y=f+f,m=l*h,v=l*x,M=l*y,S=u*x,g=u*y,p=f*y,T=d*h,I=d*x,R=d*y,P=r.x,U=r.y,O=r.z;return a[0]=(1-(S+p))*P,a[1]=(v+R)*P,a[2]=(M-I)*P,a[3]=0,a[4]=(v-R)*U,a[5]=(1-(m+p))*U,a[6]=(g+T)*U,a[7]=0,a[8]=(M+I)*O,a[9]=(g-T)*O,a[10]=(1-(m+S))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Ps.set(a[0],a[1],a[2]).length();const f=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();l<0&&(u=-u),_i.copy(this);const h=1/u,x=1/f,y=1/d;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=y,_i.elements[9]*=y,_i.elements[10]*=y,t.setFromRotationMatrix(_i),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,a,l,u,f=Ii,d=!1){const h=this.elements,x=2*l/(t-e),y=2*l/(r-a),m=(t+e)/(t-e),v=(r+a)/(r-a);let M,S;if(d)M=l/(u-l),S=u*l/(u-l);else if(f===Ii)M=-(u+l)/(u-l),S=-2*u*l/(u-l);else if(f===jl)M=-u/(u-l),S=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=y,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=Ii,d=!1){const h=this.elements,x=2/(t-e),y=2/(r-a),m=-(t+e)/(t-e),v=-(r+a)/(r-a);let M,S;if(d)M=1/(u-l),S=u/(u-l);else if(f===Ii)M=-2/(u-l),S=-(u+l)/(u-l);else if(f===jl)M=-1/(u-l),S=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=y,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};$l.prototype.isMatrix4=!0;let tn=$l;const Ps=new Se,_i=new tn,wv=new Se(0,0,0),Tv=new Se(1,1,1),Sr=new Se,ll=new Se,Xn=new Se,fm=new tn,dm=new qs;class is{constructor(e=0,t=0,r=0,a=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],d=a[1],h=a[5],x=a[9],y=a[2],m=a[6],v=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,v),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-y,v),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Rt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,v),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bv=0;const hm=new Se,Ns=new qs,ji=new tn,ul=new Se,La=new Se,Av=new Se,Cv=new qs,pm=new Se(1,0,0),mm=new Se(0,1,0),gm=new Se(0,0,1),_m={type:"added"},Rv={type:"removed"},Is={type:"childadded",child:null},Yc={type:"childremoved",child:null};class zn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new Se,t=new is,r=new qs,a=new Se(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tn},normalMatrix:{value:new yt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,t){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ul.copy(e):ul.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(La,ul,this.up):ji.lookAt(ul,La,this.up),this.quaternion.setFromRotationMatrix(ji),a&&(ji.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(ji),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,x=d.length;h<x;h++){const y=d[h];l(e.shapes,y)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),x=u(e.images),y=u(e.shapes),m=u(e.skeletons),v=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(f){const d=[];for(const h in f){const x=f[h];delete x.metadata,d.push(x)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new Se(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cl extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,r),p=this._getHandJoint(h,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const x=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],m=x.position.distanceTo(y.position),v=.02,M=.005;h.inputState.pinching&&m>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new cl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Ct.workingColorSpace){if(e=_v(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=$c(u,l,e+1/3),this.g=$c(u,l,e),this.b=$c(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=ri){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ct.workingToColorSpace(wn.copy(this),e),Math.round(Rt(wn.r*255,0,255))*65536+Math.round(Rt(wn.g*255,0,255))*256+Math.round(Rt(wn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(wn.copy(this),t);const r=wn.r,a=wn.g,l=wn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let d,h;const x=(f+u)/2;if(f===u)d=0,h=0;else{const y=u-f;switch(h=x<=.5?y/(u+f):y/(2-u-f),u){case r:d=(a-l)/y+(a<l?6:0);break;case a:d=(l-r)/y+2;break;case l:d=(r-a)/y+4;break}d/=6}return e.h=d,e.s=h,e.l=x,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ri){Ct.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,a=wn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(fl);const r=Gc(Mr.h,fl.h,t),a=Gc(Mr.s,fl.s,t),l=Gc(Mr.l,fl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ft;Ft.NAMES=Tg;class Nv extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new Se,Yi=new Se,Kc=new Se,qi=new Se,Ds=new Se,Ls=new Se,vm=new Se,Zc=new Se,Jc=new Se,Qc=new Se,ef=new Jt,tf=new Jt,nf=new Jt;class yi{constructor(e=new Se,t=new Se,r=new Se){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),vi.subVectors(e,t),a.cross(vi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){vi.subVectors(a,t),Yi.subVectors(r,t),Kc.subVectors(e,t);const u=vi.dot(vi),f=vi.dot(Yi),d=vi.dot(Kc),h=Yi.dot(Yi),x=Yi.dot(Kc),y=u*h-f*f;if(y===0)return l.set(0,0,0),null;const m=1/y,v=(h*d-f*x)*m,M=(u*x-f*d)*m;return l.set(1-v-M,M,v)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,a,l,u,f,d){return this.getBarycoord(e,t,r,a,qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,qi.x),d.addScaledVector(u,qi.y),d.addScaledVector(f,qi.z),d)}static getInterpolatedAttribute(e,t,r,a,l,u){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,r),nf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(ef,l.x),u.addScaledVector(tf,l.y),u.addScaledVector(nf,l.z),u}static isFrontFacing(e,t,r,a){return vi.subVectors(r,t),Yi.subVectors(e,t),vi.cross(Yi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;Ds.subVectors(a,r),Ls.subVectors(l,r),Zc.subVectors(e,r);const d=Ds.dot(Zc),h=Ls.dot(Zc);if(d<=0&&h<=0)return t.copy(r);Jc.subVectors(e,a);const x=Ds.dot(Jc),y=Ls.dot(Jc);if(x>=0&&y<=x)return t.copy(a);const m=d*y-x*h;if(m<=0&&d>=0&&x<=0)return u=d/(d-x),t.copy(r).addScaledVector(Ds,u);Qc.subVectors(e,l);const v=Ds.dot(Qc),M=Ls.dot(Qc);if(M>=0&&v<=M)return t.copy(l);const S=v*h-d*M;if(S<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(Ls,f);const g=x*M-v*y;if(g<=0&&y-x>=0&&v-M>=0)return vm.subVectors(l,a),f=(y-x)/(y-x+(v-M)),t.copy(a).addScaledVector(vm,f);const p=1/(g+S+m);return u=S*p,f=m*p,t.copy(r).addScaledVector(Ds,u).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new Se(1/0,1/0,1/0),t=new Se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(l,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),hl.subVectors(this.max,Ua),Us.subVectors(e.a,Ua),Fs.subVectors(e.b,Ua),ks.subVectors(e.c,Ua),Er.subVectors(Fs,Us),wr.subVectors(ks,Fs),jr.subVectors(Us,ks);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-jr.z,jr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,jr.z,0,-jr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-jr.y,jr.x,0];return!rf(t,Us,Fs,ks,hl)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Us,Fs,ks,hl))?!1:(pl.crossVectors(Er,wr),t=[pl.x,pl.y,pl.z],rf(t,Us,Fs,ks,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new Se,new Se,new Se,new Se,new Se,new Se,new Se,new Se],xi=new Se,dl=new Za,Us=new Se,Fs=new Se,ks=new Se,Er=new Se,wr=new Se,jr=new Se,Ua=new Se,hl=new Se,pl=new Se,Yr=new Se;function rf(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Yr.fromArray(s,l);const f=a.x*Math.abs(Yr.x)+a.y*Math.abs(Yr.y)+a.z*Math.abs(Yr.z),d=e.dot(Yr),h=t.dot(Yr),x=r.dot(Yr);if(Math.max(-Math.max(d,h,x),Math.min(d,h,x))>f)return!1}return!0}const rn=new Se,ml=new Ot;let Iv=0;class Ei extends rs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=dv,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Da(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),a=Bn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),a=Bn(a,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bg extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ag extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class In extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Dv=new Za,Fa=new Se,sf=new Se;class Zl{constructor(e=new Se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Dv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Fa,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(sf)),this.expandByPoint(Fa.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lv=0;const ii=new tn,af=new zn,Os=new Se,jn=new Za,ka=new Za,hn=new Se;class qn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?Ag:bg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Se(-1/0,-1/0,-1/0),new Se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Se,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ka.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(jn.min,ka.min),jn.expandByPoint(hn),hn.addVectors(jn.max,ka.max),jn.expandByPoint(hn)):(jn.expandByPoint(ka.min),jn.expandByPoint(ka.max))}jn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)hn.fromBufferAttribute(f,h),d&&(Os.fromBufferAttribute(e,h),hn.add(Os)),a=Math.max(a,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ei(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new Se,d[A]=new Se;const h=new Se,x=new Se,y=new Se,m=new Ot,v=new Ot,M=new Ot,S=new Se,g=new Se;function p(A,D,W){h.fromBufferAttribute(r,A),x.fromBufferAttribute(r,D),y.fromBufferAttribute(r,W),m.fromBufferAttribute(l,A),v.fromBufferAttribute(l,D),M.fromBufferAttribute(l,W),x.sub(h),y.sub(h),v.sub(m),M.sub(m);const Z=1/(v.x*M.y-M.x*v.y);isFinite(Z)&&(S.copy(x).multiplyScalar(M.y).addScaledVector(y,-v.y).multiplyScalar(Z),g.copy(y).multiplyScalar(v.x).addScaledVector(x,-M.x).multiplyScalar(Z),f[A].add(S),f[D].add(S),f[W].add(S),d[A].add(g),d[D].add(g),d[W].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let A=0,D=T.length;A<D;++A){const W=T[A],Z=W.start,F=W.count;for(let j=Z,w=Z+F;j<w;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const I=new Se,R=new Se,P=new Se,U=new Se;function O(A){P.fromBufferAttribute(a,A),U.copy(P);const D=f[A];I.copy(D),I.sub(P.multiplyScalar(P.dot(D))).normalize(),R.crossVectors(U,D);const Z=R.dot(d[A])<0?-1:1;u.setXYZW(A,I.x,I.y,I.z,Z)}for(let A=0,D=T.length;A<D;++A){const W=T[A],Z=W.start,F=W.count;for(let j=Z,w=Z+F;j<w;j+=3)O(e.getX(j+0)),O(e.getX(j+1)),O(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,v=r.count;m<v;m++)r.setXYZ(m,0,0,0);const a=new Se,l=new Se,u=new Se,f=new Se,d=new Se,h=new Se,x=new Se,y=new Se;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),S=e.getX(m+1),g=e.getX(m+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),u.fromBufferAttribute(t,g),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,S),h.fromBufferAttribute(r,g),f.add(x),d.add(x),h.add(x),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(S,d.x,d.y,d.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let m=0,v=t.count;m<v;m+=3)a.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),r.setXYZ(m+0,x.x,x.y,x.z),r.setXYZ(m+1,x.x,x.y,x.z),r.setXYZ(m+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,d){const h=f.array,x=f.itemSize,y=f.normalized,m=new h.constructor(d.length*x);let v=0,M=0;for(let S=0,g=d.length;S<g;S++){f.isInterleavedBufferAttribute?v=d[S]*f.data.stride+f.offset:v=d[S]*x;for(let p=0;p<x;p++)m[M++]=h[v++]}return new Ei(m,x,y)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let x=0,y=h.length;x<y;x++){const m=h[x],v=e(m,r);d.push(v)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],x=[];for(let y=0,m=h.length;y<m;y++){const v=h[y];x.push(v.toJSON(e.data))}x.length>0&&(a[d]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const x=a[h];this.setAttribute(h,x.clone(t))}const l=e.morphAttributes;for(const h in l){const x=[],y=l[h];for(let m=0,v=y.length;m<v;m++)x.push(y[m].clone(t));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const y=u[h];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new Se,Uv=new Se,Fv=new yt;class br{constructor(e=new Se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=of.subVectors(r,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(of),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Fv.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kv=0;class Ja extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Wa,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rg,this.blendDst=sg,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new br().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ot().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new Se,lf=new Se,gl=new Se,_l=new Se;class Cg{constructor(e=new Se,t=new Se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){lf.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(lf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(gl),f=_l.dot(this.direction),d=-_l.dot(gl),h=_l.lengthSq(),x=Math.abs(1-u*u);let y,m,v,M;if(x>0)if(y=u*d-f,m=u*f-d,M=l*x,y>=0)if(m>=-M)if(m<=M){const S=1/x;y*=S,m*=S,v=y*(y+u*m+2*f)+m*(u*y+m+2*d)+h}else m=l,y=Math.max(0,-(u*m+f)),v=-y*y+m*(m+2*d)+h;else m=-l,y=Math.max(0,-(u*m+f)),v=-y*y+m*(m+2*d)+h;else m<=-M?(y=Math.max(0,-(-u*l+f)),m=y>0?-l:Math.min(Math.max(-l,-d),l),v=-y*y+m*(m+2*d)+h):m<=M?(y=0,m=Math.min(Math.max(-l,-d),l),v=m*(m+2*d)+h):(y=Math.max(0,-(u*l+f)),m=y>0?l:Math.min(Math.max(-l,-d),l),v=-y*y+m*(m+2*d)+h);else m=u>0?-l:l,y=Math.max(0,-(u*m+f)),v=-y*y+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(lf).addScaledVector(gl,m),v}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),a=Ki.dot(Ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,d;const h=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),x>=0?(l=(e.min.y-m.y)*x,u=(e.max.y-m.y)*x):(l=(e.max.y-m.y)*x,u=(e.min.y-m.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),y>=0?(f=(e.min.z-m.z)*y,d=(e.max.z-m.z)*y):(f=(e.max.z-m.z)*y,d=(e.min.z-m.z)*y),r>d||f>a)||((f>r||r!==r)&&(r=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,r,a,l){const u=this.origin,f=this.direction,d=f.x,h=f.y,x=f.z,y=e.x-u.x,m=e.y-u.y,v=e.z-u.z,M=t.x-u.x,S=t.y-u.y,g=t.z-u.z,p=r.x-u.x,T=r.y-u.y,I=r.z-u.z,R=Math.abs(d),P=Math.abs(h),U=Math.abs(x);let O,A,D,W,Z,F,j,w,Y,le,q,J;if(R>=P&&R>=U?(D=d,F=y,Y=M,J=p,d>=0?(O=h,A=x,W=m,Z=v,j=S,w=g,le=T,q=I):(O=x,A=h,W=v,Z=m,j=g,w=S,le=I,q=T)):P>=U?(D=h,F=m,Y=S,J=T,h>=0?(O=x,A=d,W=v,Z=y,j=g,w=M,le=I,q=p):(O=d,A=x,W=y,Z=v,j=M,w=g,le=p,q=I)):(D=x,F=v,Y=g,J=I,x>=0?(O=d,A=h,W=y,Z=m,j=M,w=S,le=p,q=T):(O=h,A=d,W=m,Z=y,j=S,w=M,le=T,q=p)),D===0)return null;const H=O/D,K=A/D,N=1/D,z=W-H*F,_e=Z-K*F,Ee=j-H*Y,ge=w-K*Y,ze=le-H*J,ue=q-K*J,oe=ze*ge-ue*Ee,Re=z*ue-_e*ze,We=Ee*_e-ge*z;if(a){if(oe<0||Re<0||We<0)return null}else if((oe<0||Re<0||We<0)&&(oe>0||Re>0||We>0))return null;const Be=oe+Re+We;if(Be===0)return null;const ut=N*(oe*F+Re*Y+We*J);return(Be>0?ut<0:ut>0)?null:this.at(ut/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xa extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xm=new tn,qr=new Cg,vl=new Zl,ym=new Se,xl=new Se,yl=new Se,Sl=new Se,uf=new Se,Ml=new Se,Sm=new Se,El=new Se;class Yn extends zn{constructor(e=new qn,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ml.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const x=f[d],y=l[d];x!==0&&(uf.fromBufferAttribute(y,e),u?Ml.addScaledVector(uf,x):Ml.addScaledVector(uf.sub(t),x))}t.add(Ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(vl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(vl,ym)===null||qr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(xm.copy(l).invert(),qr.copy(e.ray).applyMatrix4(xm),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,y=l.attributes.normal,m=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,S=m.length;M<S;M++){const g=m[M],p=u[g.materialIndex],T=Math.max(g.start,v.start),I=Math.min(f.count,Math.min(g.start+g.count,v.start+v.count));for(let R=T,P=I;R<P;R+=3){const U=f.getX(R),O=f.getX(R+1),A=f.getX(R+2);a=wl(this,p,e,r,h,x,y,U,O,A),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const M=Math.max(0,v.start),S=Math.min(f.count,v.start+v.count);for(let g=M,p=S;g<p;g+=3){const T=f.getX(g),I=f.getX(g+1),R=f.getX(g+2);a=wl(this,u,e,r,h,x,y,T,I,R),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,S=m.length;M<S;M++){const g=m[M],p=u[g.materialIndex],T=Math.max(g.start,v.start),I=Math.min(d.count,Math.min(g.start+g.count,v.start+v.count));for(let R=T,P=I;R<P;R+=3){const U=R,O=R+1,A=R+2;a=wl(this,p,e,r,h,x,y,U,O,A),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const M=Math.max(0,v.start),S=Math.min(d.count,v.start+v.count);for(let g=M,p=S;g<p;g+=3){const T=g,I=g+1,R=g+2;a=wl(this,u,e,r,h,x,y,T,I,R),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Ov(s,e,t,r,a,l,u,f){let d;if(e.side===Pn?d=r.intersectTriangle(u,l,a,!0,f):d=r.intersectTriangle(a,l,u,e.side===es,f),d===null)return null;El.copy(f),El.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(El);return h<t.near||h>t.far?null:{distance:h,point:El.clone(),object:s}}function wl(s,e,t,r,a,l,u,f,d,h){s.getVertexPosition(f,xl),s.getVertexPosition(d,yl),s.getVertexPosition(h,Sl);const x=Ov(s,e,t,r,xl,yl,Sl,Sm);if(x){const y=new Se;yi.getBarycoord(Sm,xl,yl,Sl,y),a&&(x.uv=yi.getInterpolatedAttribute(a,f,d,h,y,new Ot)),l&&(x.uv1=yi.getInterpolatedAttribute(l,f,d,h,y,new Ot)),u&&(x.normal=yi.getInterpolatedAttribute(u,f,d,h,y,new Se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Se,materialIndex:0};yi.getNormal(xl,yl,Sl,m.normal),x.face=m,x.barycoord=y}return x}class Bv extends Nn{constructor(e=null,t=1,r=1,a,l,u,f,d,h=_n,x=_n,y,m){super(null,u,f,d,h,x,a,l,y,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=new Zl,zv=new Ot(.5,.5),Tl=new Se;class Rg{constructor(e=new br,t=new br,r=new br,a=new br,l=new br,u=new br){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],x=l[4],y=l[5],m=l[6],v=l[7],M=l[8],S=l[9],g=l[10],p=l[11],T=l[12],I=l[13],R=l[14],P=l[15];if(a[0].setComponents(h-u,v-x,p-M,P-T).normalize(),a[1].setComponents(h+u,v+x,p+M,P+T).normalize(),a[2].setComponents(h+f,v+y,p+S,P+I).normalize(),a[3].setComponents(h-f,v-y,p-S,P-I).normalize(),r)a[4].setComponents(d,m,g,R).normalize(),a[5].setComponents(h-d,v-m,p-g,P-R).normalize();else if(a[4].setComponents(h-d,v-m,p-g,P-R).normalize(),t===Ii)a[5].setComponents(h+d,v+m,p+g,P+R).normalize();else if(t===jl)a[5].setComponents(d,m,g,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=zv.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Tl.x=a.normal.x>0?e.max.x:e.min.x,Tl.y=a.normal.y>0?e.max.y:e.min.y,Tl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pg extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mm=new tn,od=new Cg,bl=new Zl,Al=new Se;class Hv extends zn{constructor(e=new qn,t=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(a),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;Mm.copy(a).invert(),od.copy(e.ray).applyMatrix4(Mm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,y=r.attributes.position;if(h!==null){const m=Math.max(0,u.start),v=Math.min(h.count,u.start+u.count);for(let M=m,S=v;M<S;M++){const g=h.getX(M);Al.fromBufferAttribute(y,g),Em(Al,g,d,a,e,t,this)}}else{const m=Math.max(0,u.start),v=Math.min(y.count,u.start+u.count);for(let M=m,S=v;M<S;M++)Al.fromBufferAttribute(y,M),Em(Al,M,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Em(s,e,t,r,a,l,u){const f=od.distanceSqToPoint(s);if(f<t){const d=new Se;od.closestPointToPoint(s,d),d.applyMatrix4(r);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ng extends Nn{constructor(e=[],t=ts,r,a,l,u,f,d,h,x){super(e,t,r,a,l,u,f,d,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $a extends Nn{constructor(e,t,r=Li,a,l,u,f=_n,d=_n,h,x=nr,y=1){if(x!==nr&&x!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:y};super(m,a,l,u,f,d,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gv extends $a{constructor(e,t=Li,r=ts,a,l,u=_n,f=_n,d,h=nr){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,t,r,a,l,u,f,d,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ig extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends qn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],x=[],y=[];let m=0,v=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(y,2));function M(S,g,p,T,I,R,P,U,O,A,D){const W=R/O,Z=P/A,F=R/2,j=P/2,w=U/2,Y=O+1,le=A+1;let q=0,J=0;const H=new Se;for(let K=0;K<le;K++){const N=K*Z-j;for(let z=0;z<Y;z++){const _e=z*W-F;H[S]=_e*T,H[g]=N*I,H[p]=w,h.push(H.x,H.y,H.z),H[S]=0,H[g]=0,H[p]=U>0?1:-1,x.push(H.x,H.y,H.z),y.push(z/O),y.push(1-K/A),q+=1}}for(let K=0;K<A;K++)for(let N=0;N<O;N++){const z=m+N+Y*K,_e=m+N+Y*(K+1),Ee=m+(N+1)+Y*(K+1),ge=m+(N+1)+Y*K;d.push(z,_e,ge),d.push(_e,Ee,ge),J+=6}f.addGroup(v,J,D),v+=J,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jl extends qn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(a),h=f+1,x=d+1,y=e/f,m=t/d,v=[],M=[],S=[],g=[];for(let p=0;p<x;p++){const T=p*m-u;for(let I=0;I<h;I++){const R=I*y-l;M.push(R,-T,0),S.push(0,0,1),g.push(I/f),g.push(1-p/d)}}for(let p=0;p<d;p++)for(let T=0;T<f;T++){const I=T+h*p,R=T+h*(p+1),P=T+1+h*(p+1),U=T+1+h*p;v.push(I,R,U),v.push(R,P,U)}this.setIndex(v),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(S,3)),this.setAttribute("uv",new In(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends qn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+f,Math.PI);let h=0;const x=[],y=new Se,m=new Se,v=[],M=[],S=[],g=[];for(let p=0;p<=r;p++){const T=[],I=p/r,R=u+I*f,P=e*Math.cos(R),U=Math.sqrt(e*e-P*P);let O=0;p===0&&u===0?O=.5/t:p===r&&d===Math.PI&&(O=-.5/t);for(let A=0;A<=t;A++){const D=A/t,W=a+D*l;y.x=-U*Math.cos(W),y.y=P,y.z=U*Math.sin(W),M.push(y.x,y.y,y.z),m.copy(y).normalize(),S.push(m.x,m.y,m.z),g.push(D+O,1-I),T.push(h++)}x.push(T)}for(let p=0;p<r;p++)for(let T=0;T<t;T++){const I=x[p][T+1],R=x[p][T],P=x[p+1][T],U=x[p+1][T+1];(p!==0||u>0)&&v.push(I,R,U),(p!==r-1||d<Math.PI)&&v.push(R,P,U)}this.setIndex(v),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(S,3)),this.setAttribute("uv",new In(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Md extends qn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),a=Math.floor(a);const d=[],h=[],x=[],y=[],m=new Se,v=new Se,M=new Se;for(let S=0;S<=r;S++){const g=u+S/r*f;for(let p=0;p<=a;p++){const T=p/a*l;v.x=(e+t*Math.cos(g))*Math.cos(T),v.y=(e+t*Math.cos(g))*Math.sin(T),v.z=t*Math.sin(g),h.push(v.x,v.y,v.z),m.x=e*Math.cos(T),m.y=e*Math.sin(T),M.subVectors(v,m).normalize(),x.push(M.x,M.y,M.z),y.push(p/a),y.push(S/r)}}for(let S=1;S<=r;S++)for(let g=1;g<=a;g++){const p=(a+1)*S+g-1,T=(a+1)*(S-1)+g-1,I=(a+1)*(S-1)+g,R=(a+1)*S+g;d.push(p,T,R),d.push(T,I,R)}this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(wm(a))a.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(wm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Rn(s){const e={};for(let t=0;t<s.length;t++){const r=Ys(s[t]);for(const a in r)e[a]=r[a]}return e}function wm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Vv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Wv={clone:Ys,merge:Rn};var Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Ft().setHex(a.value);break;case"v2":this.uniforms[r].value=new Ot().fromArray(a.value);break;case"v3":this.uniforms[r].value=new Se().fromArray(a.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(a.value);break;case"m3":this.uniforms[r].value=new yt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yv extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qv extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $v extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cl=new Se,Rl=new qs,Ci=new Se;class Lg extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Cl,Rl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new Se,Tm=new Ot,bm=new Ot;class si extends Lg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,Tm,bm),t.subVectors(bm,Tm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/d,t-=u.offsetY*r/h,a*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ug extends Lg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=x*this.view.offsetY,d=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=-90,zs=1;class Kv extends zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new si(Bs,zs,e,t);a.layers=this.layers,this.add(a);const l=new si(Bs,zs,e,t);l.layers=this.layers,this.add(l);const u=new si(Bs,zs,e,t);u.layers=this.layers,this.add(u);const f=new si(Bs,zs,e,t);f.layers=this.layers,this.add(f);const d=new si(Bs,zs,e,t);d.layers=this.layers,this.add(d);const h=new si(Bs,zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,x]=this.children,y=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=S,e.setRenderTarget(r,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(y,m,v),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Zv extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cd=class Cd{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Cd.prototype.isMatrix2=!0;let Am=Cd;function Cm(s,e,t,r){const a=Jv(r);switch(t){case xg:return s*e;case Sg:return s*e/a.components*a.byteLength;case gd:return s*e/a.components*a.byteLength;case ns:return s*e*2/a.components*a.byteLength;case _d:return s*e*2/a.components*a.byteLength;case yg:return s*e*3/a.components*a.byteLength;case Si:return s*e*4/a.components*a.byteLength;case vd:return s*e*4/a.components*a.byteLength;case Fl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Df:return Math.max(s,16)*Math.max(e,8)/4;case Pf:case If:return Math.max(s,8)*Math.max(e,8)/2;case Lf:case Uf:case kf:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Gl:case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ed:case td:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case id:case rd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vl:case sd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(s){switch(s){case ai:case mg:return{byteLength:1,components:1};case Ya:case gg:case Ui:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case Li:case hd:case Ni:return{byteLength:4,components:1};case _g:case vg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let s=null,e=!1,t=null,r=null;function a(l,u){r=s.requestAnimationFrame(a),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Qv(s){const e=new WeakMap;function t(f,d){const h=f.array,x=f.usage,y=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,x),f.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,d,h){const x=d.array,y=d.updateRanges;if(s.bindBuffer(h,f),y.length===0)s.bufferSubData(h,0,x);else{y.sort((v,M)=>v.start-M.start);let m=0;for(let v=1;v<y.length;v++){const M=y[m],S=y[v];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++m,y[m]=S)}y.length=m+1;for(let v=0,M=y.length;v<M;v++){const S=y[v];s.bufferSubData(h,S.start*x.BYTES_PER_ELEMENT,x,S.start,S.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:u}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ax,aomap_pars_fragment:ox,batching_pars_vertex:lx,batching_vertex:ux,begin_vertex:cx,beginnormal_vertex:fx,bsdfs:dx,iridescence_fragment:hx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:vx,color_fragment:xx,color_pars_fragment:yx,color_pars_vertex:Sx,color_vertex:Mx,common:Ex,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:bx,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:Px,colorspace_pars_fragment:Nx,envmap_fragment:Ix,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Lx,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:jx,envmap_vertex:Fx,fog_vertex:kx,fog_pars_vertex:Ox,fog_fragment:Bx,fog_pars_fragment:zx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:Yx,lights_toon_pars_fragment:qx,lights_phong_fragment:$x,lights_phong_pars_fragment:Kx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:ey,lights_fragment_end:ty,lightprobes_pars_fragment:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:uy,map_particle_pars_fragment:cy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:dy,morphinstance_vertex:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Ny,dithering_fragment:Iy,dithering_pars_fragment:Dy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:ky,shadowmap_vertex:Oy,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Hy,skinning_vertex:Gy,skinnormal_vertex:Vy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:jy,tonemapping_pars_fragment:Yy,transmission_fragment:qy,transmission_pars_fragment:$y,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Jy,worldpos_vertex:Qy,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:rS,cube_frag:sS,depth_vert:aS,depth_frag:oS,distance_vert:lS,distance_frag:uS,equirect_vert:cS,equirect_frag:fS,linedashed_vert:dS,linedashed_frag:hS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:vS,meshmatcap_frag:xS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:ES,meshphysical_vert:wS,meshphysical_frag:TS,meshtoon_vert:bS,meshtoon_frag:AS,points_vert:CS,points_frag:RS,shadow_vert:PS,shadow_frag:NS,sprite_vert:IS,sprite_frag:DS},Ze={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Se},probesMax:{value:new Se},probesResolution:{value:new Se}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Pi={basic:{uniforms:Rn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Rn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Rn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Rn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Rn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Rn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Rn([Ze.points,Ze.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Rn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Rn([Ze.common,Ze.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Rn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Rn([Ze.sprite,Ze.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Rn([Ze.common,Ze.displacementmap,{referencePosition:{value:new Se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Rn([Ze.lights,Ze.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Pi.physical={uniforms:Rn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Pl={r:0,b:0,g:0},LS=new tn,kg=new yt;kg.set(-1,0,0,0,1,0,0,0,1);function US(s,e,t,r,a,l){const u=new Ft(0);let f=a===!0?0:1,d,h,x=null,y=0,m=null;function v(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){const R=T.backgroundBlurriness>0;I=e.get(I,R)}return I}function M(T){let I=!1;const R=v(T);R===null?g(u,f):R&&R.isColor&&(g(R,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(T,I){const R=v(I);R&&(R.isCubeTexture||R.mapping===Kl)?(h===void 0&&(h=new Yn(new Qa(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ys(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LS.makeRotationFromEuler(I.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kg),h.material.toneMapped=Ct.getTransfer(R.colorSpace)!==zt,(x!==R||y!==R.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,x=R,y=R.version,m=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Yn(new Jl(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ys(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(R.colorSpace)!==zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||y!==R.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,x=R,y=R.version,m=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function g(T,I){T.getRGB(Pl,Dg(s)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,I,l)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(T,I=1){u.set(T),f=I,g(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,g(u,f)},render:M,addToRenderList:S,dispose:p}}function FS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=m(null);let l=a,u=!1;function f(Z,F,j,w,Y){let le=!1;const q=y(Z,w,j,F);l!==q&&(l=q,h(l.object)),le=v(Z,w,j,Y),le&&M(Z,w,j,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,R(Z,F,j,w),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return s.createVertexArray()}function h(Z){return s.bindVertexArray(Z)}function x(Z){return s.deleteVertexArray(Z)}function y(Z,F,j,w){const Y=w.wireframe===!0;let le=r[F.id];le===void 0&&(le={},r[F.id]=le);const q=Z.isInstancedMesh===!0?Z.id:0;let J=le[q];J===void 0&&(J={},le[q]=J);let H=J[j.id];H===void 0&&(H={},J[j.id]=H);let K=H[Y];return K===void 0&&(K=m(d()),H[Y]=K),K}function m(Z){const F=[],j=[],w=[];for(let Y=0;Y<t;Y++)F[Y]=0,j[Y]=0,w[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:w,object:Z,attributes:{},index:null}}function v(Z,F,j,w){const Y=l.attributes,le=F.attributes;let q=0;const J=j.getAttributes();for(const H in J)if(J[H].location>=0){const N=Y[H];let z=le[H];if(z===void 0&&(H==="instanceMatrix"&&Z.instanceMatrix&&(z=Z.instanceMatrix),H==="instanceColor"&&Z.instanceColor&&(z=Z.instanceColor)),N===void 0||N.attribute!==z||z&&N.data!==z.data)return!0;q++}return l.attributesNum!==q||l.index!==w}function M(Z,F,j,w){const Y={},le=F.attributes;let q=0;const J=j.getAttributes();for(const H in J)if(J[H].location>=0){let N=le[H];N===void 0&&(H==="instanceMatrix"&&Z.instanceMatrix&&(N=Z.instanceMatrix),H==="instanceColor"&&Z.instanceColor&&(N=Z.instanceColor));const z={};z.attribute=N,N&&N.data&&(z.data=N.data),Y[H]=z,q++}l.attributes=Y,l.attributesNum=q,l.index=w}function S(){const Z=l.newAttributes;for(let F=0,j=Z.length;F<j;F++)Z[F]=0}function g(Z){p(Z,0)}function p(Z,F){const j=l.newAttributes,w=l.enabledAttributes,Y=l.attributeDivisors;j[Z]=1,w[Z]===0&&(s.enableVertexAttribArray(Z),w[Z]=1),Y[Z]!==F&&(s.vertexAttribDivisor(Z,F),Y[Z]=F)}function T(){const Z=l.newAttributes,F=l.enabledAttributes;for(let j=0,w=F.length;j<w;j++)F[j]!==Z[j]&&(s.disableVertexAttribArray(j),F[j]=0)}function I(Z,F,j,w,Y,le,q){q===!0?s.vertexAttribIPointer(Z,F,j,Y,le):s.vertexAttribPointer(Z,F,j,w,Y,le)}function R(Z,F,j,w){S();const Y=w.attributes,le=j.getAttributes(),q=F.defaultAttributeValues;for(const J in le){const H=le[J];if(H.location>=0){let K=Y[J];if(K===void 0&&(J==="instanceMatrix"&&Z.instanceMatrix&&(K=Z.instanceMatrix),J==="instanceColor"&&Z.instanceColor&&(K=Z.instanceColor)),K!==void 0){const N=K.normalized,z=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const Ee=_e.buffer,ge=_e.type,ze=_e.bytesPerElement,ue=ge===s.INT||ge===s.UNSIGNED_INT||K.gpuType===hd;if(K.isInterleavedBufferAttribute){const oe=K.data,Re=oe.stride,We=K.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,oe.meshPerAttribute);Z.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<H.locationSize;Be++)g(H.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Be=0;Be<H.locationSize;Be++)I(H.location+Be,z/H.locationSize,ge,N,Re*ze,(We+z/H.locationSize*Be)*ze,ue)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,K.meshPerAttribute);Z.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<H.locationSize;oe++)g(H.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let oe=0;oe<H.locationSize;oe++)I(H.location+oe,z/H.locationSize,ge,N,z*ze,z/H.locationSize*oe*ze,ue)}}else if(q!==void 0){const N=q[J];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(H.location,N);break;case 3:s.vertexAttrib3fv(H.location,N);break;case 4:s.vertexAttrib4fv(H.location,N);break;default:s.vertexAttrib1fv(H.location,N)}}}}T()}function P(){D();for(const Z in r){const F=r[Z];for(const j in F){const w=F[j];for(const Y in w){const le=w[Y];for(const q in le)x(le[q].object),delete le[q];delete w[Y]}}delete r[Z]}}function U(Z){if(r[Z.id]===void 0)return;const F=r[Z.id];for(const j in F){const w=F[j];for(const Y in w){const le=w[Y];for(const q in le)x(le[q].object),delete le[q];delete w[Y]}}delete r[Z.id]}function O(Z){for(const F in r){const j=r[F];for(const w in j){const Y=j[w];if(Y[Z.id]===void 0)continue;const le=Y[Z.id];for(const q in le)x(le[q].object),delete le[q];delete Y[Z.id]}}}function A(Z){for(const F in r){const j=r[F],w=Z.isInstancedMesh===!0?Z.id:0,Y=j[w];if(Y!==void 0){for(const le in Y){const q=Y[le];for(const J in q)x(q[J].object),delete q[J];delete Y[le]}delete j[w],Object.keys(j).length===0&&delete r[F]}}}function D(){W(),u=!0,l!==a&&(l=a,h(l.object))}function W(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:D,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:g,disableUnusedAttributes:T}}function kS(s,e,t){let r;function a(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,x){x!==0&&(s.drawArraysInstanced(r,d,h,x),t.update(h,r,x))}function f(d,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,x);let m=0;for(let v=0;v<x;v++)m+=h[v];t.update(m,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function OS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ai&&O!==Ni&&!A&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const x=d(h);x!==h&&(vt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const y=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:m,maxTextures:v,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:R,maxSamples:P,samples:U}}function BS(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new br,f=new yt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,m){const v=y.length!==0||m||r!==0||a;return a=m,r=y.length,v},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,m){t=x(y,m,0)},this.setState=function(y,m,v){const M=y.clippingPlanes,S=y.clipIntersection,g=y.clipShadows,p=s.get(y);if(!a||M===null||M.length===0||l&&!g)l?x(null):h();else{const T=l?0:r,I=T*4;let R=p.clippingState||null;d.value=R,R=x(M,m,I,v);for(let P=0;P!==I;++P)R[P]=t[P];p.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,m,v,M){const S=y!==null?y.length:0;let g=null;if(S!==0){if(g=d.value,M!==!0||g===null){const p=v+S*4,T=m.matrixWorldInverse;f.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let I=0,R=v;I!==S;++I,R+=4)u.copy(y[I]).applyMatrix4(T,f),u.normal.toArray(g,R),g[R+3]=u.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const Vs=4,zS=6,HS=20,GS=256,Oa=new Ug,Rm=new Ft;let cf=null,ff=0,df=0,hf=!1;const VS=new Se,Kr=new Se;class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=VS}=l;cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ui,format:Si,colorSpace:Wl,depthBuffer:!1},a=Nm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WS(l)),this._blurMaterial=jS(l,e,t),this._ggxMaterial=XS(l,e,t)}return a}_compileMaterial(e){const t=new Yn(new qn,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,r,a,l){const d=new si(90,1,t,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,m=y.autoClear,v=y.toneMapping;y.getClearColor(Rm),y.toneMapping=Di,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(a),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new Qa,new Xa({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let p=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(Rm),p=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+x[I],l.y,l.z)):R===1?(d.up.set(0,0,h[I]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+x[I],l.z)):(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+x[I]));const P=this._cubeSize;Hs(a,R*P,I>2?P:0,P,P),y.setRenderTarget(a),p&&y.render(S,d),y.render(e,d)}y.toneMapping=v,y.autoClear=m,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ts||e.mapping===js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Hs(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Oa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),y=Math.sqrt(h*h-x*x),m=h*1.25,v=y*m,{_lodMax:M}=this,S=this._sizeLods[r],g=3*S*(r>M-Vs?r-M+Vs:0),p=4*(this._cubeSize-S);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=M-t,Hs(l,g,p,3*S,2*S),a.setRenderTarget(l),a.render(f,Oa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,Hs(e,g,p,3*S,2*S),a.setRenderTarget(e),a.render(f,Oa)}_blur(e,t,r,a){const l=this._pingPongRenderTarget,u=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,a,l){const u=this._renderer,f=this._blurMaterial,d=this._lodMeshes[a];d.material=f;const h=f.uniforms;h.envMap.value=e.texture,h.sigma.value=l,h.mipInt.value=this._lodMax-r;const x=this._sizeLods[a],y=3*x*(a>this._lodMax-Vs?a-this._lodMax+Vs:0),m=4*(this._cubeSize-x);Hs(t,y,m,3*x,2*x),u.setRenderTarget(t),u.render(d,Oa)}}function WS(s){const e=[],t=[];let r=s;const a=s-Vs+1+zS;for(let l=0;l<a;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),d=-f,h=1+f,x=[d,d,h,d,h,h,d,d,h,h,d,h],y=6,m=6,v=3,M=new Float32Array(v*m*y),S=new Float32Array(v*m*y);for(let p=0;p<y;p++){const T=p%3*2/3-1,I=p>2?0:-1,R=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(R,v*m*p);for(let P=0;P<m;P++){const U=x[P*2]*2-1,O=x[P*2+1]*2-1;p===0?Kr.set(1,O,U):p===1?Kr.set(-U,1,-O):p===2?Kr.set(-U,O,1):p===3?Kr.set(-1,O,-U):p===4?Kr.set(-U,-1,O):Kr.set(U,O,-1),Kr.toArray(S,(p*m+P)*v)}}const g=new qn;g.setAttribute("position",new Ei(M,v)),g.setAttribute("outputDirection",new Ei(S,v)),t.push(new Yn(g,null)),r>Vs&&r--}return{lodMeshes:t,sizeLods:e}}function Nm(s,e,t){const r=new Mi(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function XS(s,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function jS(s,e,t){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:HS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Im(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Dm(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Og extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ng(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Qa(5,5,5),l=new Fi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:er});l.uniforms.tEquirect.value=t;const u=new Yn(a,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Tn),new Kv(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function YS(s){let e=new WeakMap,t=new WeakMap,r=null;function a(m,v=!1){return m==null?null:v?u(m):l(m)}function l(m){if(m&&m.isTexture){const v=m.mapping;if(v===kc||v===Oc)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const S=new Og(M.height);return S.fromEquirectangularTexture(s,m),e.set(m,S),m.addEventListener("dispose",h),f(S.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const v=m.mapping,M=v===kc||v===Oc,S=v===ts||v===js;if(M||S){let g=t.get(m);const p=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==p)return r===null&&(r=new Pm(s)),g=M?r.fromEquirectangular(m,g):r.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,t.set(m,g),g.texture;if(g!==void 0)return g.texture;{const T=m.image;return M&&T&&T.height>0||S&&T&&d(T)?(r===null&&(r=new Pm(s)),g=M?r.fromEquirectangular(m):r.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,t.set(m,g),m.addEventListener("dispose",x),g.texture):null}}}return m}function f(m,v){return v===kc?m.mapping=ts:v===Oc&&(m.mapping=js),m}function d(m){let v=0;const M=6;for(let S=0;S<M;S++)m[S]!==void 0&&v++;return v===M}function h(m){const v=m.target;v.removeEventListener("dispose",h);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function x(m){const v=m.target;v.removeEventListener("dispose",x);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:y}}function qS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ws("WebGLRenderer: "+r+" extension not supported."),a}}}function $S(s,e,t,r){const a={},l=new WeakMap;function u(y){const m=y.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete a[m.id];const v=l.get(m);v&&(e.remove(v),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(y,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function d(y){const m=y.attributes;for(const v in m)e.update(m[v],s.ARRAY_BUFFER)}function h(y){const m=[],v=y.index,M=y.attributes.position;let S=0;if(M===void 0)return;if(v!==null){const T=v.array;S=v.version;for(let I=0,R=T.length;I<R;I+=3){const P=T[I+0],U=T[I+1],O=T[I+2];m.push(P,U,U,O,O,P)}}else{const T=M.array;S=M.version;for(let I=0,R=T.length/3-1;I<R;I+=3){const P=I+0,U=I+1,O=I+2;m.push(P,U,U,O,O,P)}}const g=new(M.count>=65535?Ag:bg)(m,1);g.version=S;const p=l.get(y);p&&e.remove(p),l.set(y,g)}function x(y){const m=l.get(y);if(m){const v=y.index;v!==null&&m.version<v.version&&h(y)}else h(y);return l.get(y)}return{get:f,update:d,getWireframeAttribute:x}}function KS(s,e,t){let r;function a(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function d(y,m){s.drawElements(r,m,l,y*u),t.update(m,r,1)}function h(y,m,v){v!==0&&(s.drawElementsInstanced(r,m,l,y*u,v),t.update(m,r,v))}function x(y,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,y,0,v);let S=0;for(let g=0;g<v;g++)S+=m[g];t.update(S,r,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=x}function ZS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function JS(s,e,t){const r=new WeakMap,a=new Jt;function l(u,f,d){const h=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let m=r.get(f);if(m===void 0||m.count!==y){let W=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var v=W;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,p=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),S===!0&&(R=2),g===!0&&(R=3);let P=f.attributes.position.count*R,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const O=new Float32Array(P*U*4*y),A=new Eg(O,P,U,y);A.type=Ni,A.needsUpdate=!0;const D=R*4;for(let Z=0;Z<y;Z++){const F=p[Z],j=T[Z],w=I[Z],Y=P*U*4*Z;for(let le=0;le<F.count;le++){const q=le*D;M===!0&&(a.fromBufferAttribute(F,le),O[Y+q+0]=a.x,O[Y+q+1]=a.y,O[Y+q+2]=a.z,O[Y+q+3]=0),S===!0&&(a.fromBufferAttribute(j,le),O[Y+q+4]=a.x,O[Y+q+5]=a.y,O[Y+q+6]=a.z,O[Y+q+7]=0),g===!0&&(a.fromBufferAttribute(w,le),O[Y+q+8]=a.x,O[Y+q+9]=a.y,O[Y+q+10]=a.z,O[Y+q+11]=w.itemSize===4?a.w:1)}}m={count:y,texture:A,size:new Ot(P,U)},r.set(f,m),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let g=0;g<h.length;g++)M+=h[g];const S=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",S),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function QS(s,e,t,r,a){let l=new WeakMap;function u(h){const x=a.render.frame,y=h.geometry,m=e.get(h,y);if(l.get(m)!==x&&(e.update(m),l.set(m,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==x&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,x))),h.isSkinnedMesh){const v=h.skeleton;l.get(v)!==x&&(v.update(),l.set(v,x))}return m}function f(){l=new WeakMap}function d(h){const x=h.target;x.removeEventListener("dispose",d),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:f}}const eM={[og]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[ug]:"CINEON_TONE_MAPPING",[cg]:"ACES_FILMIC_TONE_MAPPING",[dg]:"AGX_TONE_MAPPING",[hg]:"NEUTRAL_TONE_MAPPING",[fg]:"CUSTOM_TONE_MAPPING"};function tM(s,e,t,r,a,l){const u=new Mi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null;const h=new qn;h.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new In([0,2,0,0,2,0],2));const x=new Yv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Yn(h,x),m=new Ug(-1,1,1,-1,0,1);let v=null,M=null,S=!1,g,p=null,T=[],I=!1;this.setSize=function(R,P){u.setSize(R,P),f!==null&&f.setSize(R,P),d!==null&&d.setSize(R,P);for(let U=0;U<T.length;U++){const O=T[U];O.setSize&&O.setSize(R,P)}},this.setEffects=function(R){T=R,I=T.length>0&&T[0].isRenderPass===!0;const P=u.width,U=u.height;T.length>0&&f===null&&(f=new Mi(P,U,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),d=new Mi(P,U,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<T.length;O++){const A=T[O];A.setSize&&A.setSize(P,U)}},this.begin=function(R,P){if(S||R.toneMapping===Di&&T.length===0)return!1;if(p=P,P!==null){const U=P.width,O=P.height;(u.width!==U||u.height!==O)&&this.setSize(U,O)}return I===!1&&R.setRenderTarget(u),g=R.toneMapping,R.toneMapping=Di,!0},this.hasRenderPass=function(){return I},this.end=function(R,P){R.toneMapping=g,S=!0;let U=u,O=f;for(let A=0;A<T.length;A++){const D=T[A];D.enabled!==!1&&(D.render(R,O,U,P),D.needsSwap!==!1&&(U=O,O=O===f?d:f))}if(v!==R.outputColorSpace||M!==R.toneMapping){v=R.outputColorSpace,M=R.toneMapping,x.defines={},Ct.getTransfer(v)===zt&&(x.defines.SRGB_TRANSFER="");const A=eM[M];A&&(x.defines[A]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(p),R.render(y,m),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),h.dispose(),x.dispose()}}const Bg=new Nn,ld=new $a(1,1),zg=new Eg,Hg=new Ev,Gg=new Ng,Lm=[],Um=[],Fm=new Float32Array(16),km=new Float32Array(9),Om=new Float32Array(4);function $s(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Lm[a];if(l===void 0&&(l=new Float32Array(a),Lm[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function eu(s,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function aM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),un(t,r)}}function oM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;km.set(r),s.uniformMatrix3fv(this.addr,!1,km),un(t,r)}}function lM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;Fm.set(r),s.uniformMatrix4fv(this.addr,!1,Fm),un(t,r)}}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function _M(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=t.isReversedDepthBuffer()?yd:xd,l=ld):l=Bg,t.setTexture2D(e||l,a)}function vM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Hg,a)}function xM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Gg,a)}function yM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||zg,a)}function SM(s){switch(s){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return uM;case 35667:case 35671:return cM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return hM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function MM(s,e){s.uniform1fv(this.addr,e)}function EM(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function wM(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function TM(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function bM(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function AM(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function CM(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function RM(s,e){s.uniform1iv(this.addr,e)}function PM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function IM(s,e){s.uniform4iv(this.addr,e)}function DM(s,e){s.uniform1uiv(this.addr,e)}function LM(s,e){s.uniform2uiv(this.addr,e)}function UM(s,e){s.uniform3uiv(this.addr,e)}function FM(s,e){s.uniform4uiv(this.addr,e)}function kM(s,e,t){const r=this.cache,a=e.length,l=eu(t,a);ln(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ld:u=Bg;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function OM(s,e,t){const r=this.cache,a=e.length,l=eu(t,a);ln(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Hg,l[u])}function BM(s,e,t){const r=this.cache,a=e.length,l=eu(t,a);ln(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Gg,l[u])}function zM(s,e,t){const r=this.cache,a=e.length,l=eu(t,a);ln(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||zg,l[u])}function HM(s){switch(s){case 5126:return MM;case 35664:return EM;case 35665:return wM;case 35666:return TM;case 35674:return bM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return NM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return LM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}class GM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class VM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Bm(s,e){s.seq.push(e),s.map[e.id]=e}function XM(s,e,t){const r=s.name,a=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),u=pf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){Bm(t,h===void 0?new GM(f,s,e):new VM(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new WM(f),Bm(t,y)),t=y}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);XM(f,d,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function zm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const jM=37297;let YM=0;function qM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Hm=new yt;function $M(s){Ct._getMatrix(Hm,Ct.workingColorSpace,s);const e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Xl:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+qM(s.getShaderSource(e),f)}else return l}function KM(s,e){const t=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZM={[og]:"Linear",[lg]:"Reinhard",[ug]:"Cineon",[cg]:"ACESFilmic",[dg]:"AgX",[hg]:"Neutral",[fg]:"Custom"};function JM(s,e){const t=ZM[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new Se;function QM(){Ct.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function tE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Ga(s){return s!==""}function Vm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(s){return s.replace(iE,sE)}const rE=new Map;function sE(s,e){let t=Et[e];if(t===void 0){const r=rE.get(e);if(r!==void 0)t=Et[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ud(t)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(s){return s.replace(aE,oE)}function oE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lE={[Ul]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function uE(s){return lE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cE={[ts]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function fE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dE={[js]:"ENVMAP_MODE_REFRACTION"};function hE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pE={[ag]:"ENVMAP_BLENDING_MULTIPLY",[ev]:"ENVMAP_BLENDING_MIX",[tv]:"ENVMAP_BLENDING_ADD"};function mE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":pE[s.combine]||"ENVMAP_BLENDING_NONE"}function gE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _E(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=uE(t),h=fE(t),x=hE(t),y=mE(t),m=gE(t),v=eE(t),M=tE(l),S=a.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(g=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+x:"",t.envMap?"#define "+y:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Et.tonemapping_pars_fragment:"",t.toneMapping!==Di?JM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,KM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),u=ud(u),u=Vm(u,t),u=Wm(u,t),f=ud(f),f=Vm(f,t),f=Wm(f,t),u=Xm(u),f=Xm(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const I=T+g+u,R=T+p+f,P=zm(a,a.VERTEX_SHADER,I),U=zm(a,a.FRAGMENT_SHADER,R);a.attachShader(S,P),a.attachShader(S,U),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function O(Z){if(s.debug.checkShaderErrors){const F=a.getProgramInfoLog(S)||"",j=a.getShaderInfoLog(P)||"",w=a.getShaderInfoLog(U)||"",Y=F.trim(),le=j.trim(),q=w.trim();let J=!0,H=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,S,P,U);else{const K=Gm(a,P,"vertex"),N=Gm(a,U,"fragment");Ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+Y+`
`+K+`
`+N)}else Y!==""?vt("WebGLProgram: Program Info Log:",Y):(le===""||q==="")&&(H=!1);H&&(Z.diagnostics={runnable:J,programLog:Y,vertexShader:{log:le,prefix:g},fragmentShader:{log:q,prefix:p}})}a.deleteShader(P),a.deleteShader(U),A=new zl(a,S),D=nE(a,S)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=a.getProgramParameter(S,jM)),W},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=U,this}let vE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yE(e),t.set(e,r)),r}}class yE{constructor(e){this.id=vE++,this.code=e,this.usedTimes=0}}function SE(s){return s===ns||s===Gl||s===Vl}function ME(s,e,t,r,a,l){const u=new wg,f=new xE,d=new Set,h=[],x=new Map,y=r.logarithmicDepthBuffer;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,D,W,Z,F,j){const w=Z.fog,Y=F.geometry,le=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,q=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||le,q),H=J&&J.mapping===Kl?J.image.height:null,K=v[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&vt("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,z=N!==void 0?N.length:0;let _e=0;Y.morphAttributes.position!==void 0&&(_e=1),Y.morphAttributes.normal!==void 0&&(_e=2),Y.morphAttributes.color!==void 0&&(_e=3);let Ee,ge,ze,ue;if(K){const It=Pi[K];Ee=It.vertexShader,ge=It.fragmentShader}else{Ee=A.vertexShader,ge=A.fragmentShader;const It=f.getVertexShaderStage(A),Pt=f.getFragmentShaderStage(A);f.update(A,It,Pt),ze=It.id,ue=Pt.id}const oe=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),We=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,ut=!!A.map,wt=!!A.matcap,b=!!J,Me=!!A.aoMap,he=!!A.lightMap,V=!!A.bumpMap&&A.wireframe===!1,G=!!A.normalMap,ie=!!A.displacementMap,Ce=!!A.emissiveMap,Ae=!!A.metalnessMap,ce=!!A.roughnessMap,X=A.anisotropy>0,Ge=A.clearcoat>0,be=A.dispersion>0,B=A.retroreflectivity>0,C=A.iridescence>0,Q=A.sheen>0,de=A.transmission>0,ye=X&&!!A.anisotropyMap,Le=Ge&&!!A.clearcoatMap,Ve=Ge&&!!A.clearcoatNormalMap,ee=Ge&&!!A.clearcoatRoughnessMap,ve=C&&!!A.iridescenceMap,Ie=C&&!!A.iridescenceThicknessMap,$e=Q&&!!A.sheenColorMap,Ne=Q&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,it=!!A.specularColorMap,ht=!!A.specularIntensityMap,pt=de&&!!A.transmissionMap,ne=de&&!!A.thicknessMap,Xe=!!A.gradientMap,Pe=!!A.alphaMap,je=A.alphaTest>0,Je=!!A.alphaHash,De=!!A.extensions;let ft=Di;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ft=s.toneMapping);const ot={shaderID:K,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:ge,defines:A.defines,customVertexShaderID:ze,customFragmentShaderID:ue,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:We,instancingColor:We&&F.instanceColor!==null,instancingMorph:We&&F.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ut,matcap:wt,envMap:b,envMapMode:b&&J.mapping,envMapCubeUVHeight:H,aoMap:Me,lightMap:he,bumpMap:V,normalMap:G,displacementMap:ie,emissiveMap:Ce,normalMapObjectSpace:G&&A.normalMapType===rv,normalMapTangentSpace:G&&A.normalMapType===rm,packedNormalMap:G&&A.normalMapType===rm&&SE(A.normalMap.format),metalnessMap:Ae,roughnessMap:ce,anisotropy:X,anisotropyMap:ye,clearcoat:Ge,clearcoatMap:Le,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ee,dispersion:be,retroreflection:B,iridescence:C,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:Q,sheenColorMap:$e,sheenRoughnessMap:Ne,specularMap:Fe,specularColorMap:it,specularIntensityMap:ht,transmission:de,transmissionMap:pt,thicknessMap:ne,gradientMap:Xe,opaque:A.transparent===!1&&A.blending===Wa&&A.alphaToCoverage===!1,alphaMap:Pe,alphaTest:je,alphaHash:Je,combine:A.combine,mapUv:ut&&M(A.map.channel),aoMapUv:Me&&M(A.aoMap.channel),lightMapUv:he&&M(A.lightMap.channel),bumpMapUv:V&&M(A.bumpMap.channel),normalMapUv:G&&M(A.normalMap.channel),displacementMapUv:ie&&M(A.displacementMap.channel),emissiveMapUv:Ce&&M(A.emissiveMap.channel),metalnessMapUv:Ae&&M(A.metalnessMap.channel),roughnessMapUv:ce&&M(A.roughnessMap.channel),anisotropyMapUv:ye&&M(A.anisotropyMap.channel),clearcoatMapUv:Le&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&M(A.sheenRoughnessMap.channel),specularMapUv:Fe&&M(A.specularMap.channel),specularColorMapUv:it&&M(A.specularColorMap.channel),specularIntensityMapUv:ht&&M(A.specularIntensityMap.channel),transmissionMapUv:pt&&M(A.transmissionMap.channel),thicknessMapUv:ne&&M(A.thicknessMap.channel),alphaMapUv:Pe&&M(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(G||X),vertexNormals:!!Y.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ut||Pe),fog:!!w,useFog:A.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&G===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:_e,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:ut&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===zt,decodeVideoTextureEmissive:Ce&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ji,flipSided:A.side===Pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:De&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&A.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ot.vertexUv1s=d.has(1),ot.vertexUv2s=d.has(2),ot.vertexUv3s=d.has(3),d.clear(),ot}function g(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)D.push(W),D.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(p(D,A),T(D,A),D.push(s.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function p(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numSunLights),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numSunLightShadows),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function T(A,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function I(A){const D=v[A.type];let W;if(D){const Z=Pi[D];W=Wv.clone(Z.uniforms)}else W=A.uniforms;return W}function R(A,D){let W=x.get(D);return W!==void 0?++W.usedTimes:(W=new _E(s,D,A,a),h.push(W),x.set(D,W)),W}function P(A){if(--A.usedTimes===0){const D=h.indexOf(A);h[D]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function U(A){f.remove(A)}function O(){f.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:I,acquireProgram:R,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:O}}function EE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,d){s.get(u)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function wE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(m){let v=0;return m.isInstancedMesh&&(v+=2),m.isSkinnedMesh&&(v+=1),v}function f(m,v,M,S,g,p){let T=s[e];return T===void 0?(T={id:m.id,object:m,geometry:v,material:M,materialVariant:u(m),groupOrder:S,renderOrder:m.renderOrder,z:g,group:p},s[e]=T):(T.id=m.id,T.object=m,T.geometry=v,T.material=M,T.materialVariant=u(m),T.groupOrder=S,T.renderOrder=m.renderOrder,T.z=g,T.group=p),e++,T}function d(m,v,M,S,g,p,T){T.reversedDepth===!0&&(g=-g);const I=f(m,v,M,S,g,p);M.transmission>0?r.push(I):M.transparent===!0?a.push(I):t.push(I)}function h(m,v,M,S,g,p){const T=f(m,v,M,S,g,p);M.transmission>0?r.unshift(T):M.transparent===!0?a.unshift(T):t.unshift(T)}function x(m,v){t.length>1&&t.sort(m||wE),r.length>1&&r.sort(v||Ym),a.length>1&&a.sort(v||Ym)}function y(){for(let m=e,v=s.length;m<v;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:y,sort:x}}function TE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new qm,s.set(r,[u])):a>=l.length?(u=new qm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Se,color:new Ft};break;case"SpotLight":t={position:new Se,direction:new Se,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Se,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Se,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new Se,halfWidth:new Se,halfHeight:new Se};break}return s[e.id]=t,t}}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let CE=0;function RE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PE(s){const e=new bE,t=AE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Se);const a=new Se,l=new tn,u=new tn;function f(h){let x=0,y=0,m=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,M=0,S=0,g=0,p=0,T=0,I=0,R=0,P=0,U=0,O=0,A=0,D=0,W=0;h.sort(RE);for(let F=0,j=h.length;F<j;F++){const w=h[F],Y=w.color,le=w.intensity,q=w.distance;let J=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ns?J=w.shadow.map.texture:J=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)x+=Y.r*le,y+=Y.g*le,m+=Y.b*le;else if(w.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(w.sh.coefficients[H],le);W++}else if(w.isSunLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,N=t.get(w);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[M]=N,r.sunShadowMap[M]=J;const z=K.getViewportCount();for(let _e=0;_e<z;_e++)r.sunShadowMatrix[S+_e]=K.getMatrix(_e),r.sunShadowCascade[S+_e]=K._cascadeData[_e];S+=z,M++}r.sun[v]=H,v++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,N=t.get(w);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.directionalShadow[g]=N,r.directionalShadowMap[g]=J,r.directionalShadowMatrix[g]=w.shadow.matrix,P++}r.directional[g]=H,g++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(Y).multiplyScalar(le),H.distance=q,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,r.spot[T]=H;const K=w.shadow;if(w.map&&(r.spotLightMap[A]=w.map,A++,K.updateMatrices(w),w.castShadow&&D++),r.spotLightMatrix[T]=K.matrix,w.castShadow){const N=t.get(w);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.spotShadow[T]=N,r.spotShadowMap[T]=J,O++}T++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(Y).multiplyScalar(le),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),r.rectArea[I]=H,I++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const K=w.shadow,N=t.get(w);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=w.shadow.matrix,U++}r.point[p]=H,p++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(le),H.groundColor.copy(w.groundColor).multiplyScalar(le),r.hemi[R]=H,R++}}I>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ze.LTC_FLOAT_1,r.rectAreaLTC2=Ze.LTC_FLOAT_2):(r.rectAreaLTC1=Ze.LTC_HALF_1,r.rectAreaLTC2=Ze.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=m;const Z=r.hash;(Z.sunLength!==v||Z.directionalLength!==g||Z.pointLength!==p||Z.spotLength!==T||Z.rectAreaLength!==I||Z.hemiLength!==R||Z.numSunShadows!==M||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==O||Z.numSpotMaps!==A||Z.numLightProbes!==W)&&(r.sun.length=v,r.directional.length=g,r.spot.length=T,r.rectArea.length=I,r.point.length=p,r.hemi.length=R,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=S,r.sunShadowCascade.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=O,r.spotShadowMap.length=O,r.spotLightMatrix.length=O+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=W,Z.sunLength=v,Z.directionalLength=g,Z.pointLength=p,Z.spotLength=T,Z.rectAreaLength=I,Z.hemiLength=R,Z.numSunShadows=M,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=O,Z.numSpotMaps=A,Z.numLightProbes=W,r.version=CE++)}function d(h,x){let y=0,m=0,v=0,M=0,S=0,g=0;const p=x.matrixWorldInverse;for(let T=0,I=h.length;T<I;T++){const R=h[T];if(R.isSunLight){const P=r.sun[y];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(p),y++}else if(R.isDirectionalLight){const P=r.directional[m];P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),m++}else if(R.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(p),M++}else if(R.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(p),u.identity(),l.copy(R.matrixWorld),l.premultiply(p),u.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),S++}else if(R.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(p),v++}else if(R.isHemisphereLight){const P=r.hemi[g];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(p),g++}}}return{setup:f,setupView:d,state:r}}function $m(s){const e=new PE(s),t=[],r=[],a=[];function l(m){y.camera=m,t.length=0,r.length=0,a.length=0}function u(m){t.push(m)}function f(m){r.push(m)}function d(m){a.push(m)}function h(){e.setup(t)}function x(m){e.setupView(t,m)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:h,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function NE(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new $m(s),e.set(a,[f])):l>=u.length?(f=new $m(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LE=[new Se(1,0,0),new Se(-1,0,0),new Se(0,1,0),new Se(0,-1,0),new Se(0,0,1),new Se(0,0,-1)],UE=[new Se(0,-1,0),new Se(0,-1,0),new Se(0,0,1),new Se(0,0,-1),new Se(0,-1,0),new Se(0,-1,0)],Km=new tn,Ba=new Se,mf=new Se;function FE(s,e,t){let r=new Rg;const a=new Ot,l=new Ot,u=new Jt,f=new qv,d=new $v,h={},x=t.maxTextureSize,y={[es]:Pn,[Pn]:es,[Ji]:Ji},m=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:IE,fragmentShader:DE}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new qn;M.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yn(M,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let p=this.type;this.render=function(U,O,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;this.type===U_&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ul);const D=s.getRenderTarget(),W=s.getActiveCubeFace(),Z=s.getActiveMipmapLevel(),F=s.state;F.setBlending(er),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=p!==this.type;j&&O.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(Y=>Y.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,Y=U.length;w<Y;w++){const le=U[w],q=le.shadow;if(q===void 0){vt("WebGLShadowMap:",le,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const J=q.getFrameExtents();a.multiply(J),l.copy(q.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/J.x),a.x=l.x*J.x,q.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/J.y),a.y=l.y*J.y,q.mapSize.y=l.y));const H=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=H,q.map===null||j===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ha){if(le.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Mi(a.x,a.y,{format:ns,type:Ui,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),q.map.texture.name=le.name+".shadowMap",q.map.depthTexture=new $a(a.x,a.y,Ni),q.map.depthTexture.name=le.name+".shadowMapDepth",q.map.depthTexture.format=nr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n}else le.isPointLight?(q.map=new Og(a.x),q.map.depthTexture=new Gv(a.x,Li)):(q.map=new Mi(a.x,a.y),q.map.depthTexture=new $a(a.x,a.y,Li)),q.map.depthTexture.name=le.name+".shadowMap",q.map.depthTexture.format=nr,this.type===Ul?(q.map.depthTexture.compareFunction=H?yd:xd,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);const K=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();le.isPointLight!==!0&&q.updateMatrices(le,A);for(let N=0;N<K;N++){const z=q.getCamera(N);if(le.isPointLight){const _e=q.camera,Ee=q.matrix,ge=le.distance||_e.far;ge!==_e.far&&(_e.far=ge,_e.updateProjectionMatrix()),Ba.setFromMatrixPosition(le.matrixWorld),_e.position.copy(Ba),mf.copy(_e.position),mf.add(LE[N]),_e.up.copy(UE[N]),_e.lookAt(mf),_e.updateMatrixWorld(),Ee.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Km.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Km,_e.coordinateSystem,_e.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,N),s.clear();else{N===0&&(s.setRenderTarget(q.map),s.clear());const _e=q.getViewport(N);u.set(l.x*_e.x,l.y*_e.y,l.x*_e.z,l.y*_e.w),F.viewport(u)}r=q.getFrustum(N),R(O,A,z,le,this.type)}q.isPointLightShadow!==!0&&this.type===Ha&&T(q,A),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(D,W,Z)};function T(U,O){const A=e.update(S);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null?U.mapPass=new Mi(a.x,a.y,{format:ns,type:Ui}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),m.uniforms.shadow_pass.value=U.map.depthTexture,m.uniforms.resolution.value.set(U.map.width,U.map.height),m.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,A,m,S,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,A,v,S,null)}function I(U,O,A,D){let W=null;const Z=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Z!==void 0)W=Z;else if(W=A.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const F=W.uuid,j=O.uuid;let w=h[F];w===void 0&&(w={},h[F]=w);let Y=w[j];Y===void 0&&(Y=W.clone(),w[j]=Y,O.addEventListener("dispose",P)),W=Y}if(W.visible=O.visible,W.wireframe=O.wireframe,D===Ha?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:y[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const F=s.properties.get(W);F.light=A}return W}function R(U,O,A,D,W){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&W===Ha)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);const j=e.update(U),w=U.material;if(Array.isArray(w)){const Y=j.groups;for(let le=0,q=Y.length;le<q;le++){const J=Y[le],H=w[J.materialIndex];if(H&&H.visible){const K=I(U,H,D,W);U.onBeforeShadow(s,U,O,A,j,K,J),s.renderBufferDirect(A,null,j,K,U,J),U.onAfterShadow(s,U,O,A,j,K,J)}}}else if(w.visible){const Y=I(U,w,D,W);U.onBeforeShadow(s,U,O,A,j,Y,null),s.renderBufferDirect(A,null,j,Y,U,null),U.onAfterShadow(s,U,O,A,j,Y,null)}}const F=U.children;for(let j=0,w=F.length;j<w;j++)R(F[j],O,A,D,W)}function P(U){U.target.removeEventListener("dispose",P);for(const A in h){const D=h[A],W=U.target.uuid;W in D&&(D[W].dispose(),delete D[W])}}}function kE(s,e){function t(){let ne=!1;const Xe=new Jt;let Pe=null;const je=new Jt(0,0,0,0);return{setMask:function(Je){Pe!==Je&&!ne&&(s.colorMask(Je,Je,Je,Je),Pe=Je)},setLocked:function(Je){ne=Je},setClear:function(Je,De,ft,ot,It){It===!0&&(Je*=ot,De*=ot,ft*=ot),Xe.set(Je,De,ft,ot),je.equals(Xe)===!1&&(s.clearColor(Je,De,ft,ot),je.copy(Xe))},reset:function(){ne=!1,Pe=null,je.set(-1,0,0,0)}}}function r(){let ne=!1,Xe=!1,Pe=null,je=null,Je=null;return{setReversed:function(De){if(Xe!==De){const ft=e.get("EXT_clip_control");De?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),Xe=De;const ot=Je;Je=null,this.setClear(ot)}},getReversed:function(){return Xe},setTest:function(De){De?oe(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(De){Pe!==De&&!ne&&(s.depthMask(De),Pe=De)},setFunc:function(De){if(Xe&&(De=gv[De]),je!==De){switch(De){case Sf:s.depthFunc(s.NEVER);break;case Mf:s.depthFunc(s.ALWAYS);break;case Ef:s.depthFunc(s.LESS);break;case ja:s.depthFunc(s.LEQUAL);break;case wf:s.depthFunc(s.EQUAL);break;case Tf:s.depthFunc(s.GEQUAL);break;case bf:s.depthFunc(s.GREATER);break;case Af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}je=De}},setLocked:function(De){ne=De},setClear:function(De){Je!==De&&(Je=De,Xe&&(De=1-De),s.clearDepth(De))},reset:function(){ne=!1,Pe=null,je=null,Je=null,Xe=!1}}}function a(){let ne=!1,Xe=null,Pe=null,je=null,Je=null,De=null,ft=null,ot=null,It=null;return{setTest:function(Pt){ne||(Pt?oe(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Pt){Xe!==Pt&&!ne&&(s.stencilMask(Pt),Xe=Pt)},setFunc:function(Pt,pn,$n){(Pe!==Pt||je!==pn||Je!==$n)&&(s.stencilFunc(Pt,pn,$n),Pe=Pt,je=pn,Je=$n)},setOp:function(Pt,pn,$n){(De!==Pt||ft!==pn||ot!==$n)&&(s.stencilOp(Pt,pn,$n),De=Pt,ft=pn,ot=$n)},setLocked:function(Pt){ne=Pt},setClear:function(Pt){It!==Pt&&(s.clearStencil(Pt),It=Pt)},reset:function(){ne=!1,Xe=null,Pe=null,je=null,Je=null,De=null,ft=null,ot=null,It=null}}}const l=new t,u=new r,f=new a,d=new WeakMap,h=new WeakMap;let x={},y={},m={},v=new WeakMap,M=[],S=null,g=!1,p=null,T=null,I=null,R=null,P=null,U=null,O=null,A=new Ft(0,0,0),D=0,W=!1,Z=null,F=null,j=null,w=null,Y=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=J>=2);let K=null,N={};const z=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Ee=new Jt().fromArray(z),ge=new Jt().fromArray(_e);function ze(ne,Xe,Pe,je){const Je=new Uint8Array(4),De=s.createTexture();s.bindTexture(ne,De),s.texParameteri(ne,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(ne,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<Pe;ft++)ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?s.texImage3D(Xe,0,s.RGBA,1,1,je,0,s.RGBA,s.UNSIGNED_BYTE,Je):s.texImage2D(Xe+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Je);return De}const ue={};ue[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),u.setFunc(ja),V(!1),G(tm),oe(s.CULL_FACE),Me(er);function oe(ne){x[ne]!==!0&&(s.enable(ne),x[ne]=!0)}function Re(ne){x[ne]!==!1&&(s.disable(ne),x[ne]=!1)}function We(ne,Xe){return m[ne]!==Xe?(s.bindFramebuffer(ne,Xe),m[ne]=Xe,ne===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Xe),ne===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Xe),!0):!1}function Be(ne,Xe){let Pe=M,je=!1;if(ne){Pe=v.get(Xe),Pe===void 0&&(Pe=[],v.set(Xe,Pe));const Je=ne.textures;if(Pe.length!==Je.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ft=Je.length;De<ft;De++)Pe[De]=s.COLOR_ATTACHMENT0+De;Pe.length=Je.length,je=!0}}else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,je=!0);je&&s.drawBuffers(Pe)}function ut(ne){return S!==ne?(s.useProgram(ne),S=ne,!0):!1}const wt={[Gs]:s.FUNC_ADD,[k_]:s.FUNC_SUBTRACT,[O_]:s.FUNC_REVERSE_SUBTRACT};wt[B_]=s.MIN,wt[z_]=s.MAX;const b={[H_]:s.ZERO,[G_]:s.ONE,[V_]:s.SRC_COLOR,[rg]:s.SRC_ALPHA,[$_]:s.SRC_ALPHA_SATURATE,[Y_]:s.DST_COLOR,[X_]:s.DST_ALPHA,[W_]:s.ONE_MINUS_SRC_COLOR,[sg]:s.ONE_MINUS_SRC_ALPHA,[q_]:s.ONE_MINUS_DST_COLOR,[j_]:s.ONE_MINUS_DST_ALPHA,[K_]:s.CONSTANT_COLOR,[Z_]:s.ONE_MINUS_CONSTANT_COLOR,[J_]:s.CONSTANT_ALPHA,[Q_]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(ne,Xe,Pe,je,Je,De,ft,ot,It,Pt){if(ne===er){g===!0&&(Re(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),ne!==F_){if(ne!==p||Pt!==W){if((T!==Gs||P!==Gs)&&(s.blendEquation(s.FUNC_ADD),T=Gs,P=Gs),Pt)switch(ne){case Wa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFunc(s.ONE,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case im:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",ne);break}else switch(ne){case Wa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nm:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case im:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",ne);break}I=null,R=null,U=null,O=null,A.set(0,0,0),D=0,p=ne,W=Pt}return}Je=Je||Xe,De=De||Pe,ft=ft||je,(Xe!==T||Je!==P)&&(s.blendEquationSeparate(wt[Xe],wt[Je]),T=Xe,P=Je),(Pe!==I||je!==R||De!==U||ft!==O)&&(s.blendFuncSeparate(b[Pe],b[je],b[De],b[ft]),I=Pe,R=je,U=De,O=ft),(ot.equals(A)===!1||It!==D)&&(s.blendColor(ot.r,ot.g,ot.b,It),A.copy(ot),D=It),p=ne,W=!1}function he(ne,Xe){ne.side===Ji?Re(s.CULL_FACE):oe(s.CULL_FACE);let Pe=ne.side===Pn;Xe&&(Pe=!Pe),V(Pe),ne.blending===Wa&&ne.transparent===!1?Me(er):Me(ne.blending,ne.blendEquation,ne.blendSrc,ne.blendDst,ne.blendEquationAlpha,ne.blendSrcAlpha,ne.blendDstAlpha,ne.blendColor,ne.blendAlpha,ne.premultipliedAlpha),u.setFunc(ne.depthFunc),u.setTest(ne.depthTest),u.setMask(ne.depthWrite),l.setMask(ne.colorWrite);const je=ne.stencilWrite;f.setTest(je),je&&(f.setMask(ne.stencilWriteMask),f.setFunc(ne.stencilFunc,ne.stencilRef,ne.stencilFuncMask),f.setOp(ne.stencilFail,ne.stencilZFail,ne.stencilZPass)),Ce(ne.polygonOffset,ne.polygonOffsetFactor,ne.polygonOffsetUnits),ne.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function V(ne){Z!==ne&&(ne?s.frontFace(s.CW):s.frontFace(s.CCW),Z=ne)}function G(ne){ne!==D_?(oe(s.CULL_FACE),ne!==F&&(ne===tm?s.cullFace(s.BACK):ne===L_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),F=ne}function ie(ne){ne!==j&&(q&&s.lineWidth(ne),j=ne)}function Ce(ne,Xe,Pe){ne?(oe(s.POLYGON_OFFSET_FILL),(w!==Xe||Y!==Pe)&&(w=Xe,Y=Pe,u.getReversed()&&(Xe=-Xe),s.polygonOffset(Xe,Pe))):Re(s.POLYGON_OFFSET_FILL)}function Ae(ne){ne?oe(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function ce(ne){ne===void 0&&(ne=s.TEXTURE0+le-1),K!==ne&&(s.activeTexture(ne),K=ne)}function X(ne,Xe,Pe){Pe===void 0&&(K===null?Pe=s.TEXTURE0+le-1:Pe=K);let je=N[Pe];je===void 0&&(je={type:void 0,texture:void 0},N[Pe]=je),(je.type!==ne||je.texture!==Xe)&&(K!==Pe&&(s.activeTexture(Pe),K=Pe),s.bindTexture(ne,Xe||ue[ne]),je.type=ne,je.texture=Xe)}function Ge(){const ne=N[K];ne!==void 0&&ne.type!==void 0&&(s.bindTexture(ne.type,null),ne.type=void 0,ne.texture=void 0)}function be(){try{s.compressedTexImage2D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function C(){try{s.texSubImage2D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function Q(){try{s.texSubImage3D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function Le(){try{s.texStorage2D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function Ve(){try{s.texStorage3D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function ee(){try{s.texImage2D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function ve(){try{s.texImage3D(...arguments)}catch(ne){Ut("WebGLState:",ne)}}function Ie(ne){return y[ne]!==void 0?y[ne]:s.getParameter(ne)}function $e(ne,Xe){y[ne]!==Xe&&(s.pixelStorei(ne,Xe),y[ne]=Xe)}function Ne(ne){Ee.equals(ne)===!1&&(s.scissor(ne.x,ne.y,ne.z,ne.w),Ee.copy(ne))}function Fe(ne){ge.equals(ne)===!1&&(s.viewport(ne.x,ne.y,ne.z,ne.w),ge.copy(ne))}function it(ne,Xe){let Pe=h.get(Xe);Pe===void 0&&(Pe=new WeakMap,h.set(Xe,Pe));let je=Pe.get(ne);je===void 0&&(je=s.getUniformBlockIndex(Xe,ne.name),Pe.set(ne,je))}function ht(ne,Xe){const je=h.get(Xe).get(ne);d.get(Xe)!==je&&(s.uniformBlockBinding(Xe,je,ne.__bindingPointIndex),d.set(Xe,je))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},y={},K=null,N={},m={},v=new WeakMap,M=[],S=null,g=!1,p=null,T=null,I=null,R=null,P=null,U=null,O=null,A=new Ft(0,0,0),D=0,W=!1,Z=null,F=null,j=null,w=null,Y=null,Ee.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:oe,disable:Re,bindFramebuffer:We,drawBuffers:Be,useProgram:ut,setBlending:Me,setMaterial:he,setFlipSided:V,setCullFace:G,setLineWidth:ie,setPolygonOffset:Ce,setScissorTest:Ae,activeTexture:ce,bindTexture:X,unbindTexture:Ge,compressedTexImage2D:be,compressedTexImage3D:B,texImage2D:ee,texImage3D:ve,pixelStorei:$e,getParameter:Ie,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:Le,texStorage3D:Ve,texSubImage2D:C,texSubImage3D:Q,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ne,viewport:Fe,reset:pt}}function OE(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,x=new WeakMap,y=new Set;let m;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(B,C){return M?new OffscreenCanvas(B,C):Yl("canvas")}function g(B,C,Q){let de=1;const ye=be(B);if((ye.width>Q||ye.height>Q)&&(de=Q/Math.max(ye.width,ye.height)),de<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Le=Math.floor(de*ye.width),Ve=Math.floor(de*ye.height);m===void 0&&(m=S(Le,Ve));const ee=C?S(Le,Ve):m;return ee.width=Le,ee.height=Ve,ee.getContext("2d").drawImage(B,0,0,Le,Ve),vt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Le+"x"+Ve+")."),ee}else return"data"in B&&vt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),B;return B}function p(B){return B.generateMipmaps}function T(B){s.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(B,C,Q,de,ye,Le=!1){if(B!==null){if(s[B]!==void 0)return s[B];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ve;de&&(Ve=e.get("EXT_texture_norm16"),Ve||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=C;if(C===s.RED&&(Q===s.FLOAT&&(ee=s.R32F),Q===s.HALF_FLOAT&&(ee=s.R16F),Q===s.UNSIGNED_BYTE&&(ee=s.R8),Q===s.UNSIGNED_SHORT&&Ve&&(ee=Ve.R16_EXT),Q===s.SHORT&&Ve&&(ee=Ve.R16_SNORM_EXT)),C===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ee=s.R8UI),Q===s.UNSIGNED_SHORT&&(ee=s.R16UI),Q===s.UNSIGNED_INT&&(ee=s.R32UI),Q===s.BYTE&&(ee=s.R8I),Q===s.SHORT&&(ee=s.R16I),Q===s.INT&&(ee=s.R32I)),C===s.RG&&(Q===s.FLOAT&&(ee=s.RG32F),Q===s.HALF_FLOAT&&(ee=s.RG16F),Q===s.UNSIGNED_BYTE&&(ee=s.RG8),Q===s.UNSIGNED_SHORT&&Ve&&(ee=Ve.RG16_EXT),Q===s.SHORT&&Ve&&(ee=Ve.RG16_SNORM_EXT)),C===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ee=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ee=s.RG16UI),Q===s.UNSIGNED_INT&&(ee=s.RG32UI),Q===s.BYTE&&(ee=s.RG8I),Q===s.SHORT&&(ee=s.RG16I),Q===s.INT&&(ee=s.RG32I)),C===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),Q===s.UNSIGNED_INT&&(ee=s.RGB32UI),Q===s.BYTE&&(ee=s.RGB8I),Q===s.SHORT&&(ee=s.RGB16I),Q===s.INT&&(ee=s.RGB32I)),C===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ee=s.RGBA32UI),Q===s.BYTE&&(ee=s.RGBA8I),Q===s.SHORT&&(ee=s.RGBA16I),Q===s.INT&&(ee=s.RGBA32I)),C===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ve&&(ee=Ve.RGB16_EXT),Q===s.SHORT&&Ve&&(ee=Ve.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),C===s.RGBA){const ve=Le?Xl:Ct.getTransfer(ye);Q===s.FLOAT&&(ee=s.RGBA32F),Q===s.HALF_FLOAT&&(ee=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ee=ve===zt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ve&&(ee=Ve.RGBA16_EXT),Q===s.SHORT&&Ve&&(ee=Ve.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(B,C){let Q;return B?C===null||C===Li||C===qa?Q=s.DEPTH24_STENCIL8:C===Ni?Q=s.DEPTH32F_STENCIL8:C===Ya&&(Q=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Li||C===qa?Q=s.DEPTH_COMPONENT24:C===Ni?Q=s.DEPTH_COMPONENT32F:C===Ya&&(Q=s.DEPTH_COMPONENT16),Q}function U(B,C){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==_n&&B.minFilter!==Tn?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function O(B){const C=B.target;C.removeEventListener("dispose",O),D(C),C.isVideoTexture&&x.delete(C),C.isHTMLTexture&&y.delete(C)}function A(B){const C=B.target;C.removeEventListener("dispose",A),Z(C)}function D(B){const C=r.get(B);if(C.__webglInit===void 0)return;const Q=B.source,de=v.get(Q);if(de){const ye=de[C.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&W(B),Object.keys(de).length===0&&v.delete(Q)}r.remove(B)}function W(B){const C=r.get(B);s.deleteTexture(C.__webglTexture);const Q=B.source,de=v.get(Q);delete de[C.__cacheKey],u.memory.textures--}function Z(B){const C=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(C.__webglFramebuffer[de]))for(let ye=0;ye<C.__webglFramebuffer[de].length;ye++)s.deleteFramebuffer(C.__webglFramebuffer[de][ye]);else s.deleteFramebuffer(C.__webglFramebuffer[de]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[de])}else{if(Array.isArray(C.__webglFramebuffer))for(let de=0;de<C.__webglFramebuffer.length;de++)s.deleteFramebuffer(C.__webglFramebuffer[de]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let de=0;de<C.__webglColorRenderbuffer.length;de++)C.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[de]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Q=B.textures;for(let de=0,ye=Q.length;de<ye;de++){const Le=r.get(Q[de]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),u.memory.textures--),r.remove(Q[de])}r.remove(B)}let F=0;function j(){F=0}function w(){return F}function Y(B){F=B}function le(){const B=F;return B>=a.maxTextures&&vt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,B}function q(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function J(B,C){const Q=r.get(B);if(B.isVideoTexture&&X(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Q.__version!==B.version){const de=B.image;if(de===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Q,B,C);return}}else B.isExternalTexture&&(Q.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+C)}function H(B,C){const Q=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Q.__version!==B.version){Re(Q,B,C);return}else B.isExternalTexture&&(Q.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+C)}function K(B,C){const Q=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Q.__version!==B.version){Re(Q,B,C);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+C)}function N(B,C){const Q=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Q.__version!==B.version){We(Q,B,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+C)}const z={[Cf]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[Rf]:s.MIRRORED_REPEAT},_e={[_n]:s.NEAREST,[nv]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Bc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},Ee={[av]:s.NEVER,[fv]:s.ALWAYS,[ov]:s.LESS,[xd]:s.LEQUAL,[lv]:s.EQUAL,[yd]:s.GEQUAL,[uv]:s.GREATER,[cv]:s.NOTEQUAL};function ge(B,C){if(C.type===Ni&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Tn||C.magFilter===Bc||C.magFilter===ol||C.magFilter===Jr||C.minFilter===Tn||C.minFilter===Bc||C.minFilter===ol||C.minFilter===Jr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,z[C.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,z[C.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,z[C.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,_e[C.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,_e[C.minFilter]),C.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Ee[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===_n||C.minFilter!==ol&&C.minFilter!==Jr||C.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function ze(B,C){let Q=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",O));const de=C.source;let ye=v.get(de);ye===void 0&&(ye={},v.set(de,ye));const Le=q(C);if(Le!==B.__cacheKey){ye[Le]===void 0&&(ye[Le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ye[Le].usedTimes++;const Ve=ye[B.__cacheKey];Ve!==void 0&&(ye[B.__cacheKey].usedTimes--,Ve.usedTimes===0&&W(C)),B.__cacheKey=Le,B.__webglTexture=ye[Le].texture}return Q}function ue(B,C,Q){return Math.floor(Math.floor(B/Q)/C)}function oe(B,C,Q,de){const Le=B.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,Q,de,C.data);else{Le.sort(($e,Ne)=>$e.start-Ne.start);let Ve=0;for(let $e=1;$e<Le.length;$e++){const Ne=Le[Ve],Fe=Le[$e],it=Ne.start+Ne.count,ht=ue(Fe.start,C.width,4),pt=ue(Ne.start,C.width,4);Fe.start<=it+1&&ht===pt&&ue(Fe.start+Fe.count-1,C.width,4)===ht?Ne.count=Math.max(Ne.count,Fe.start+Fe.count-Ne.start):(++Ve,Le[Ve]=Fe)}Le.length=Ve+1;const ee=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let $e=0,Ne=Le.length;$e<Ne;$e++){const Fe=Le[$e],it=Math.floor(Fe.start/4),ht=Math.ceil(Fe.count/4),pt=it%C.width,ne=Math.floor(it/C.width),Xe=ht,Pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,ne),t.texSubImage2D(s.TEXTURE_2D,0,pt,ne,Xe,Pe,Q,de,C.data)}B.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Re(B,C,Q){let de=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(de=s.TEXTURE_3D);const ye=ze(B,C),Le=C.source;t.bindTexture(de,B.__webglTexture,s.TEXTURE0+Q);const Ve=r.get(Le);if(Le.version!==Ve.__version||ye===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const Pe=Ct.getPrimaries(Ct.workingColorSpace),je=C.colorSpace===Ar?null:Ct.getPrimaries(C.colorSpace),Je=C.colorSpace===Ar||Pe===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment);let ve=g(C.image,!1,a.maxTextureSize);ve=Ge(C,ve);const Ie=l.convert(C.format,C.colorSpace),$e=l.convert(C.type);let Ne=R(C.internalFormat,Ie,$e,C.normalized,C.colorSpace,C.isVideoTexture);ge(de,C);let Fe;const it=C.mipmaps,ht=C.isVideoTexture!==!0,pt=Ve.__version===void 0||ye===!0,ne=Le.dataReady,Xe=U(C,ve);if(C.isDepthTexture)Ne=P(C.format===Qr,C.type),pt&&(ht?t.texStorage2D(s.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ie,$e,null));else if(C.isDataTexture)if(it.length>0){ht&&pt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ne,it[0].width,it[0].height);for(let Pe=0,je=it.length;Pe<je;Pe++)Fe=it[Pe],ht?ne&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Fe.width,Fe.height,Ie,$e,Fe.data):t.texImage2D(s.TEXTURE_2D,Pe,Ne,Fe.width,Fe.height,0,Ie,$e,Fe.data);C.generateMipmaps=!1}else ht?(pt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ne,ve.width,ve.height),ne&&oe(C,ve,Ie,$e)):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ie,$e,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ht&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ne,it[0].width,it[0].height,ve.depth);for(let Pe=0,je=it.length;Pe<je;Pe++)if(Fe=it[Pe],C.format!==Si)if(Ie!==null)if(ht){if(ne)if(C.layerUpdates.size>0){const Je=Cm(Fe.width,Fe.height,C.format,C.type);for(const De of C.layerUpdates){const ft=Fe.data.subarray(De*Je/Fe.data.BYTES_PER_ELEMENT,(De+1)*Je/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,De,Fe.width,Fe.height,1,Ie,ft)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Fe.width,Fe.height,ve.depth,Ie,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Pe,Ne,Fe.width,Fe.height,ve.depth,0,Fe.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Fe.width,Fe.height,ve.depth,Ie,$e,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Pe,Ne,Fe.width,Fe.height,ve.depth,0,Ie,$e,Fe.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{ht&&pt&&t.texStorage2D(s.TEXTURE_2D,Xe,Ne,it[0].width,it[0].height);for(let Pe=0,je=it.length;Pe<je;Pe++)Fe=it[Pe],C.format!==Si?Ie!==null?ht?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,Pe,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Pe,Ne,Fe.width,Fe.height,0,Fe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?ne&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Fe.width,Fe.height,Ie,$e,Fe.data):t.texImage2D(s.TEXTURE_2D,Pe,Ne,Fe.width,Fe.height,0,Ie,$e,Fe.data)}else if(C.isDataArrayTexture)if(ht){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ne,ve.width,ve.height,ve.depth),ne)if(C.layerUpdates.size>0){const Pe=Cm(ve.width,ve.height,C.format,C.type);for(const je of C.layerUpdates){const Je=ve.data.subarray(je*Pe/ve.data.BYTES_PER_ELEMENT,(je+1)*Pe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,je,ve.width,ve.height,1,Ie,$e,Je)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ie,$e,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Ie,$e,ve.data);else if(C.isData3DTexture)ht?(pt&&t.texStorage3D(s.TEXTURE_3D,Xe,Ne,ve.width,ve.height,ve.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ie,$e,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Ie,$e,ve.data);else if(C.isFramebufferTexture){if(pt)if(ht)t.texStorage2D(s.TEXTURE_2D,Xe,Ne,ve.width,ve.height);else{let Pe=ve.width,je=ve.height;for(let Je=0;Je<Xe;Je++)t.texImage2D(s.TEXTURE_2D,Je,Ne,Pe,je,0,Ie,$e,null),Pe>>=1,je>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in s){const Pe=s.canvas;if(Pe.hasAttribute("layoutsubtree")||Pe.setAttribute("layoutsubtree","true"),ve.parentNode!==Pe){Pe.appendChild(ve),y.add(C),Pe.onpaint=je=>{const Je=je.changedElements;for(const De of y)Je.includes(De.image)&&(De.needsUpdate=!0)},Pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const Je=s.RGBA,De=s.RGBA,ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Je,De,ft,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(ht&&pt){const Pe=be(it[0]);t.texStorage2D(s.TEXTURE_2D,Xe,Ne,Pe.width,Pe.height)}for(let Pe=0,je=it.length;Pe<je;Pe++)Fe=it[Pe],ht?ne&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Ie,$e,Fe):t.texImage2D(s.TEXTURE_2D,Pe,Ne,Ie,$e,Fe);C.generateMipmaps=!1}else if(ht){if(pt){const Pe=be(ve);t.texStorage2D(s.TEXTURE_2D,Xe,Ne,Pe.width,Pe.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,$e,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Ie,$e,ve);p(C)&&T(de),Ve.__version=Le.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function We(B,C,Q){if(C.image.length!==6)return;const de=ze(B,C),ye=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+Q);const Le=r.get(ye);if(ye.version!==Le.__version||de===!0){t.activeTexture(s.TEXTURE0+Q);const Ve=Ct.getPrimaries(Ct.workingColorSpace),ee=C.colorSpace===Ar?null:Ct.getPrimaries(C.colorSpace),ve=C.colorSpace===Ar||Ve===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=C.isCompressedTexture||C.image[0].isCompressedTexture,$e=C.image[0]&&C.image[0].isDataTexture,Ne=[];for(let De=0;De<6;De++)!Ie&&!$e?Ne[De]=g(C.image[De],!0,a.maxCubemapSize):Ne[De]=$e?C.image[De].image:C.image[De],Ne[De]=Ge(C,Ne[De]);const Fe=Ne[0],it=l.convert(C.format,C.colorSpace),ht=l.convert(C.type),pt=R(C.internalFormat,it,ht,C.normalized,C.colorSpace),ne=C.isVideoTexture!==!0,Xe=Le.__version===void 0||de===!0,Pe=ye.dataReady;let je=U(C,Fe);ge(s.TEXTURE_CUBE_MAP,C);let Je;if(Ie){ne&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,pt,Fe.width,Fe.height);for(let De=0;De<6;De++){Je=Ne[De].mipmaps;for(let ft=0;ft<Je.length;ft++){const ot=Je[ft];C.format!==Si?it!==null?ne?Pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft,pt,ot.width,ot.height,0,ot.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft,0,0,ot.width,ot.height,it,ht,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft,pt,ot.width,ot.height,0,it,ht,ot.data)}}}else{if(Je=C.mipmaps,ne&&Xe){Je.length>0&&je++;const De=be(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,je,pt,De.width,De.height)}for(let De=0;De<6;De++)if($e){ne?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Ne[De].width,Ne[De].height,it,ht,Ne[De].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,pt,Ne[De].width,Ne[De].height,0,it,ht,Ne[De].data);for(let ft=0;ft<Je.length;ft++){const It=Je[ft].image[De].image;ne?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft+1,0,0,It.width,It.height,it,ht,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft+1,pt,It.width,It.height,0,it,ht,It.data)}}else{ne?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,it,ht,Ne[De]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,pt,it,ht,Ne[De]);for(let ft=0;ft<Je.length;ft++){const ot=Je[ft];ne?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft+1,0,0,it,ht,ot.image[De]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,ft+1,pt,it,ht,ot.image[De])}}}p(C)&&T(s.TEXTURE_CUBE_MAP),Le.__version=ye.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function Be(B,C,Q,de,ye,Le){const Ve=l.convert(Q.format,Q.colorSpace),ee=l.convert(Q.type),ve=R(Q.internalFormat,Ve,ee,Q.normalized,Q.colorSpace),Ie=r.get(C),$e=r.get(Q);if($e.__renderTarget=C,!Ie.__hasExternalTextures){const Ne=Math.max(1,C.width>>Le),Fe=Math.max(1,C.height>>Le);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,Le,ve,Ne,Fe,C.depth,0,Ve,ee,null):t.texImage2D(ye,Le,ve,Ne,Fe,0,Ve,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),ce(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ye,$e.__webglTexture,0,Ae(C)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ye,$e.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(B,C,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,B),C.depthBuffer){const de=C.depthTexture,ye=de&&de.isDepthTexture?de.type:null,Le=P(C.stencilBuffer,ye),Ve=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ce(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(C),Le,C.width,C.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(C),Le,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,B)}else{const de=C.textures;for(let ye=0;ye<de.length;ye++){const Le=de[ye],Ve=l.convert(Le.format,Le.colorSpace),ee=l.convert(Le.type),ve=R(Le.internalFormat,Ve,ee,Le.normalized,Le.colorSpace);ce(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(C),ve,C.width,C.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(C),ve,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ve,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(B,C,Q){const de=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=r.get(C.depthTexture);if(ye.__renderTarget=C,(!ye.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),de){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,C.depthTexture.addEventListener("dispose",O)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),ge(s.TEXTURE_CUBE_MAP,C.depthTexture);const Ie=l.convert(C.depthTexture.format),$e=l.convert(C.depthTexture.type);let Ne;C.depthTexture.format===nr?Ne=s.DEPTH_COMPONENT24:C.depthTexture.format===Qr&&(Ne=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,C.width,C.height,0,Ie,$e,null)}}else J(C.depthTexture,0);const Le=ye.__webglTexture,Ve=Ae(C),ee=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,ve=C.depthTexture.format===Qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===nr)ce(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ee,Le,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ee,Le,0);else if(C.depthTexture.format===Qr)ce(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ee,Le,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ee,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b(B){const C=r.get(B),Q=B.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==B.depthTexture){const de=B.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),de){const ye=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,de.removeEventListener("dispose",ye)};de.addEventListener("dispose",ye),C.__depthDisposeCallback=ye}C.__boundDepthTexture=de}if(B.depthTexture&&!C.__autoAllocateDepthBuffer)if(Q)for(let de=0;de<6;de++)wt(C.__webglFramebuffer[de],B,de);else{const de=B.texture.mipmaps;de&&de.length>0?wt(C.__webglFramebuffer[0],B,0):wt(C.__webglFramebuffer,B,0)}else if(Q){C.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[de]),C.__webglDepthbuffer[de]===void 0)C.__webglDepthbuffer[de]=s.createRenderbuffer(),ut(C.__webglDepthbuffer[de],B,!1);else{const ye=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=C.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Le)}}else{const de=B.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ut(C.__webglDepthbuffer,B,!1);else{const ye=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(B,C,Q){const de=r.get(B);C!==void 0&&Be(de.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&b(B)}function he(B){const C=B.texture,Q=r.get(B),de=r.get(C);B.addEventListener("dispose",A);const ye=B.textures,Le=B.isWebGLCubeRenderTarget===!0,Ve=ye.length>1;if(Ve||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=C.version,u.memory.textures++),Le){Q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[ee]=[];for(let ve=0;ve<C.mipmaps.length;ve++)Q.__webglFramebuffer[ee][ve]=s.createFramebuffer()}else Q.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ee=0;ee<C.mipmaps.length;ee++)Q.__webglFramebuffer[ee]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let ee=0,ve=ye.length;ee<ve;ee++){const Ie=r.get(ye[ee]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(B.samples>0&&ce(B)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ee=0;ee<ye.length;ee++){const ve=ye[ee];Q.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ee]);const Ie=l.convert(ve.format,ve.colorSpace),$e=l.convert(ve.type),Ne=R(ve.internalFormat,Ie,$e,ve.normalized,ve.colorSpace,B.isXRRenderTarget===!0),Fe=Ae(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ne,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(Q.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ge(s.TEXTURE_CUBE_MAP,C);for(let ee=0;ee<6;ee++)if(C.mipmaps&&C.mipmaps.length>0)for(let ve=0;ve<C.mipmaps.length;ve++)Be(Q.__webglFramebuffer[ee][ve],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve);else Be(Q.__webglFramebuffer[ee],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(C)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let ee=0,ve=ye.length;ee<ve;ee++){const Ie=ye[ee],$e=r.get(Ie);let Ne=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ne=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,$e.__webglTexture),ge(Ne,Ie),Be(Q.__webglFramebuffer,B,Ie,s.COLOR_ATTACHMENT0+ee,Ne,0),p(Ie)&&T(Ne)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ee=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,de.__webglTexture),ge(ee,C),C.mipmaps&&C.mipmaps.length>0)for(let ve=0;ve<C.mipmaps.length;ve++)Be(Q.__webglFramebuffer[ve],B,C,s.COLOR_ATTACHMENT0,ee,ve);else Be(Q.__webglFramebuffer,B,C,s.COLOR_ATTACHMENT0,ee,0);p(C)&&T(ee),t.unbindTexture()}B.depthBuffer&&b(B)}function V(B){const C=B.textures;for(let Q=0,de=C.length;Q<de;Q++){const ye=C[Q];if(p(ye)){const Le=I(B),Ve=r.get(ye).__webglTexture;t.bindTexture(Le,Ve),T(Le),t.unbindTexture()}}}const G=[],ie=[];function Ce(B){if(B.samples>0){if(ce(B)===!1){const C=B.textures,Q=B.width,de=B.height;let ye=s.COLOR_BUFFER_BIT;const Le=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(B),ee=C.length>1;if(ee)for(let Ie=0;Ie<C.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const ve=B.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ie=0;Ie<C.length;Ie++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const $e=r.get(C[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,Q,de,0,0,Q,de,ye,s.NEAREST),d===!0&&(G.length=0,ie.length=0,G.push(s.COLOR_ATTACHMENT0+Ie),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(G.push(Le),ie.push(Le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let Ie=0;Ie<C.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const $e=r.get(C[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&d){const C=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ae(B){return Math.min(a.maxSamples,B.samples)}function ce(B){const C=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function X(B){const C=u.render.frame;x.get(B)!==C&&(x.set(B,C),B.update())}function Ge(B,C){const Q=B.colorSpace,de=B.format,ye=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Q!==Wl&&Q!==Ar&&(Ct.getTransfer(Q)===zt?(de!==Si||ye!==ai)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",Q)),C}function be(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=le,this.resetTextureUnits=j,this.getTextureUnits=w,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=Me,this.setupRenderTarget=he,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BE(s,e){function t(r,a=Ar){let l;const u=Ct.getTransfer(a);if(r===ai)return s.UNSIGNED_BYTE;if(r===pd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===md)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===mg)return s.BYTE;if(r===gg)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===hd)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ni)return s.FLOAT;if(r===Ui)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===yg)return s.RGB;if(r===Si)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===Qr)return s.DEPTH_STENCIL;if(r===Sg)return s.RED;if(r===gd)return s.RED_INTEGER;if(r===ns)return s.RG;if(r===_d)return s.RG_INTEGER;if(r===vd)return s.RGBA_INTEGER;if(r===Fl||r===kl||r===Ol||r===Bl)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pf||r===Nf||r===If||r===Df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lf||r===Uf||r===Ff||r===kf||r===Of||r===Gl||r===Bf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lf||r===Uf)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ff)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===kf)return l.COMPRESSED_R11_EAC;if(r===Of)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Gl)return l.COMPRESSED_RG11_EAC;if(r===Bf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===zf||r===Hf||r===Gf||r===Vf||r===Wf||r===Xf||r===jf||r===Yf||r===qf||r===$f||r===Kf||r===Zf||r===Jf||r===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===zf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$f)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ed||r===td||r===nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ed)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===id||r===rd||r===Vl||r===sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===id)return l.COMPRESSED_RED_RGTC1_EXT;if(r===rd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:zE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new Jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends rs{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",d=1,h=null,x=null,y=null,m=null,v=null,M=null;const S=typeof XRWebGLBinding<"u",g=new GE,p={},T=t.getContextAttributes();let I=null,R=null;const P=[],U=[],O=new Ot;let A=null,D=null;const W=new si;W.viewport=new Jt;const Z=new si;Z.viewport=new Jt;const F=[W,Z],j=new Zv;let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let oe=P[ue];return oe===void 0&&(oe=new qc,P[ue]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ue){let oe=P[ue];return oe===void 0&&(oe=new qc,P[ue]=oe),oe.getGripSpace()},this.getHand=function(ue){let oe=P[ue];return oe===void 0&&(oe=new qc,P[ue]=oe),oe.getHandSpace()};function le(ue){const oe=U.indexOf(ue.inputSource);if(oe===-1)return;const Re=P[oe];Re!==void 0&&(Re.update(ue.inputSource,ue.frame,h||u),Re.dispatchEvent({type:ue.type,data:ue.inputSource}))}function q(){a.removeEventListener("select",le),a.removeEventListener("selectstart",le),a.removeEventListener("selectend",le),a.removeEventListener("squeeze",le),a.removeEventListener("squeezestart",le),a.removeEventListener("squeezeend",le),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",J);for(let ue=0;ue<P.length;ue++){const oe=U[ue];oe!==null&&(U[ue]=null,P[ue].disconnect(oe))}w=null,Y=null,g.reset();for(const ue in p)delete p[ue];if(e.setRenderTarget(I),v=null,m=null,y=null,a=null,R=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),D!==null){const ue=D.camera;ue.fov=D.fov,ue.zoom=D.zoom,ue.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){f=ue,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ue){h=ue},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return y===null&&S&&(y=new XRWebGLBinding(a,t)),y},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ue){if(a=ue,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",le),a.addEventListener("selectstart",le),a.addEventListener("selectend",le),a.addEventListener("squeeze",le),a.addEventListener("squeezestart",le),a.addEventListener("squeezeend",le),a.addEventListener("end",q),a.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,We=null,Be=null;T.depth&&(Be=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=T.stencil?Qr:nr,We=T.stencil?qa:Li);const ut={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:l};y=this.getBinding(),m=y.createProjectionLayer(ut),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Mi(m.textureWidth,m.textureHeight,{format:Si,type:ai,depthTexture:new $a(m.textureWidth,m.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(a,t,Re),a.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new Mi(v.framebufferWidth,v.framebufferHeight,{format:Si,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),ze.setContext(a),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(ue){for(let oe=0;oe<ue.removed.length;oe++){const Re=ue.removed[oe],We=U.indexOf(Re);We>=0&&(U[We]=null,P[We].disconnect(Re))}for(let oe=0;oe<ue.added.length;oe++){const Re=ue.added[oe];let We=U.indexOf(Re);if(We===-1){for(let ut=0;ut<P.length;ut++)if(ut>=U.length){U.push(Re),We=ut;break}else if(U[ut]===null){U[ut]=Re,We=ut;break}if(We===-1)break}const Be=P[We];Be&&Be.connect(Re)}}const H=new Se,K=new Se;function N(ue,oe,Re){H.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(Re.matrixWorld);const We=H.distanceTo(K),Be=oe.projectionMatrix.elements,ut=Re.projectionMatrix.elements,wt=Be[14]/(Be[10]-1),b=Be[14]/(Be[10]+1),Me=(Be[9]+1)/Be[5],he=(Be[9]-1)/Be[5],V=(Be[8]-1)/Be[0],G=(ut[8]+1)/ut[0],ie=wt*V,Ce=wt*G,Ae=We/(-V+G),ce=Ae*-V;if(oe.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(ce),ue.translateZ(Ae),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Be[10]===-1)ue.projectionMatrix.copy(oe.projectionMatrix),ue.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const X=wt+Ae,Ge=b+Ae,be=ie-ce,B=Ce+(We-ce),C=Me*b/Ge*X,Q=he*b/Ge*X;ue.projectionMatrix.makePerspective(be,B,C,Q,X,Ge),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function z(ue,oe){oe===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(oe.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(a===null)return;let oe=ue.near,Re=ue.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),j.near=Z.near=W.near=oe,j.far=Z.far=W.far=Re,(w!==j.near||Y!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),w=j.near,Y=j.far),j.layers.mask=ue.layers.mask|6,W.layers.mask=j.layers.mask&-5,Z.layers.mask=j.layers.mask&-3;const We=ue.parent,Be=j.cameras;z(j,We);for(let ut=0;ut<Be.length;ut++)z(Be[ut],We);Be.length===2?N(j,W,Z):j.projectionMatrix.copy(W.projectionMatrix),D===null&&ue.isPerspectiveCamera&&(D={camera:ue,fov:ue.fov,zoom:ue.zoom}),_e(ue,j,We)};function _e(ue,oe,Re){Re===null?ue.matrix.copy(oe.matrixWorld):(ue.matrix.copy(Re.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(oe.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(oe.projectionMatrix),ue.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=ad*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&v===null))return d},this.setFoveation=function(ue){d=ue,m!==null&&(m.fixedFoveation=ue),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ue)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(ue){return p[ue]};let Ee=null;function ge(ue,oe){if(x=oe.getViewerPose(h||u),M=oe,x!==null){const Re=x.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let We=!1;Re.length!==j.cameras.length&&(j.cameras.length=0,We=!0);for(let b=0;b<Re.length;b++){const Me=Re[b];let he=null;if(v!==null)he=v.getViewport(Me);else{const G=y.getViewSubImage(m,Me);he=G.viewport,b===0&&(e.setRenderTargetTextures(R,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(R))}let V=F[b];V===void 0&&(V=new si,V.layers.enable(b),V.viewport=new Jt,F[b]=V),V.matrix.fromArray(Me.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Me.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(he.x,he.y,he.width,he.height),b===0&&(j.matrix.copy(V.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),We===!0&&j.cameras.push(V)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){y=r.getBinding();const b=y.getDepthInformation(Re[0]);b&&b.isValid&&b.texture&&g.init(b,a.renderState)}if(Be&&Be.includes("camera-access")&&S){e.state.unbindTexture(),y=r.getBinding();for(let b=0;b<Re.length;b++){const Me=Re[b].camera;if(Me){let he=p[Me];he||(he=new Ig,p[Me]=he);const V=y.getCameraImage(Me);he.sourceTexture=V}}}}for(let Re=0;Re<P.length;Re++){const We=U[Re],Be=P[Re];We!==null&&Be!==void 0&&Be.update(We,oe,h||u)}Ee&&Ee(ue,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),M=null}const ze=new Fg;ze.setAnimationLoop(ge),this.setAnimationLoop=function(ue){Ee=ue},this.dispose=function(){}}}const WE=new tn,Vg=new yt;Vg.set(-1,0,0,0,1,0,0,0,1);function XE(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,Dg(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,T,I,R){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?l(g,p):p.isMeshLambertMaterial?(l(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(l(g,p),y(g,p)):p.isMeshPhongMaterial?(l(g,p),x(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(l(g,p),m(g,p),p.isMeshPhysicalMaterial&&v(g,p,R)):p.isMeshMatcapMaterial?(l(g,p),M(g,p)):p.isMeshDepthMaterial?l(g,p):p.isMeshDistanceMaterial?(l(g,p),S(g,p)):p.isMeshNormalMaterial?l(g,p):p.isLineBasicMaterial?(u(g,p),p.isLineDashedMaterial&&f(g,p)):p.isPointsMaterial?d(g,p,T,I):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function l(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),I=T.envMap,R=T.envMapRotation;I&&(g.envMap.value=I,g.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(R)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vg),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function f(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function d(g,p,T,I){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=I*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function x(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function y(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function m(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function v(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jE(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){const U=P.program;r.uniformBlockBinding(R,U)}function h(R,P){let U=a[R.id];U===void 0&&(g(R),U=x(R),a[R.id]=U,R.addEventListener("dispose",T));const O=P.program;r.updateUBOMapping(R,O);const A=e.render.frame;l[R.id]!==A&&(m(R),l[R.id]=A)}function x(R){const P=y();R.__bindingPointIndex=P;const U=s.createBuffer(),O=R.__size,A=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,O,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,U),U}function y(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const P=a[R.id],U=R.uniforms,O=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let A=0,D=U.length;A<D;A++){const W=U[A];if(Array.isArray(W))for(let Z=0,F=W.length;Z<F;Z++)v(W[Z],A,Z,O);else v(W,A,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(R,P,U,O){if(S(R,P,U,O)===!0){const A=R.__offset,D=R.value;if(Array.isArray(D)){let W=0;for(let Z=0;Z<D.length;Z++){const F=D[Z],j=p(F);M(F,R.__data,W),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,R.__data)}}function M(R,P,U){typeof R=="number"||typeof R=="boolean"?P[0]=R:R.isMatrix3?(P[0]=R.elements[0],P[1]=R.elements[1],P[2]=R.elements[2],P[3]=0,P[4]=R.elements[3],P[5]=R.elements[4],P[6]=R.elements[5],P[7]=0,P[8]=R.elements[6],P[9]=R.elements[7],P[10]=R.elements[8],P[11]=0):ArrayBuffer.isView(R)?P.set(new R.constructor(R.buffer,R.byteOffset,P.length)):R.toArray(P,U)}function S(R,P,U,O){const A=R.value,D=P+"_"+U;if(O[D]===void 0)return typeof A=="number"||typeof A=="boolean"?O[D]=A:ArrayBuffer.isView(A)?O[D]=A.slice():O[D]=A.clone(),!0;{const W=O[D];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return O[D]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(W.equals(A)===!1)return W.copy(A),!0}}return!1}function g(R){const P=R.uniforms;let U=0;const O=16;for(let D=0,W=P.length;D<W;D++){const Z=Array.isArray(P[D])?P[D]:[P[D]];for(let F=0,j=Z.length;F<j;F++){const w=Z[F],Y=Array.isArray(w.value)?w.value:[w.value];for(let le=0,q=Y.length;le<q;le++){const J=Y[le],H=p(J),K=U%O,N=K%H.boundary,z=K+N;U+=N,z!==0&&O-z<H.storage&&(U+=O-z),w.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=U,U+=H.storage}}}const A=U%O;return A>0&&(U+=O-A),R.__size=U,R.__cache={},this}function p(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",R),P}function T(R){const P=R.target;P.removeEventListener("dispose",T);const U=u.indexOf(P.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function I(){for(const R in a)s.deleteBuffer(a[R]);u=[],a={},l={}}return{bind:d,update:h,dispose:I}}const YE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function qE(){return Ri===null&&(Ri=new Bv(YE,16,16,ns,Ui),Ri.name="DFG_LUT",Ri.minFilter=Tn,Ri.magFilter=Tn,Ri.wrapS=Qi,Ri.wrapT=Qi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class $E{constructor(e={}){const{canvas:t=pv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:m=!1,outputBufferType:v=ai}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const S=v,g=new Set([vd,_d,gd]),p=new Set([ai,Li,Ya,qa,pd,md]),T=new Uint32Array(4),I=new Int32Array(4),R=new Se;let P=null,U=null;const O=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let Z=!1,F=null,j=null,w=null,Y=null;this._outputColorSpace=ri;let le=0,q=0,J=null,H=-1,K=null;const N=new Jt,z=new Jt;let _e=null;const Ee=new Ft(0);let ge=0,ze=t.width,ue=t.height,oe=1,Re=null,We=null;const Be=new Jt(0,0,ze,ue),ut=new Jt(0,0,ze,ue);let wt=!1;const b=new Rg;let Me=!1,he=!1;const V=new tn,G=new Se,ie=new Jt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function ce(){return J===null?oe:1}let X=r;function Ge(k,se){return t.getContext(k,se)}let be,B,C,Q,de,ye,Le,Ve,ee,ve,Ie,$e,Ne,Fe,it,ht,pt,ne,Xe,Pe,je,Je,De;try{const k={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dd}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",pn,!1),X===null){const se="webgl2";if(X=Ge(se,k),X===null)throw Ge(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(k){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Ut("WebGLRenderer: "+k.message),k}function ft(){be=new qS(X),be.init(),je=new BE(X,be),B=new OS(X,be,e,je),C=new kE(X,be),B.reversedDepthBuffer&&m&&C.buffers.depth.setReversed(!0),j=X.createFramebuffer(),w=X.createFramebuffer(),Y=X.createFramebuffer(),Q=new ZS(X),de=new EE,ye=new OE(X,be,C,de,B,je,Q),Le=new YS(W),Ve=new Qv(X),Je=new FS(X,Ve),ee=new $S(X,Ve,Q,Je),ve=new QS(X,ee,Ve,Je,Q),ne=new JS(X,B,ye),it=new BS(de),Ie=new ME(W,Le,be,B,Je,it),$e=new XE(W,de),Ne=new TE,Fe=new NE(be),pt=new US(W,Le,C,ve,M,d),ht=new FE(W,ve,B),De=new jE(X,Q,B,C),Xe=new kS(X,be,Q),Pe=new KS(X,be,Q),Q.programs=Ie.programs,W.capabilities=B,W.extensions=be,W.properties=de,W.renderLists=Ne,W.shadowMap=ht,W.state=C,W.info=Q}S!==ai&&(D=new tM(S,t.width,t.height,f,a,l));const ot=new VE(W,X);this.xr=ot,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const k=be.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=be.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(k){k!==void 0&&(oe=k,this.setSize(ze,ue,!1))},this.getSize=function(k){return k.set(ze,ue)},this.setSize=function(k,se,we=!0){if(ot.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=k,ue=se,t.width=Math.floor(k*oe),t.height=Math.floor(se*oe),we===!0&&(t.style.width=k+"px",t.style.height=se+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,k,se)},this.getDrawingBufferSize=function(k){return k.set(ze*oe,ue*oe).floor()},this.setDrawingBufferSize=function(k,se,we){ze=k,ue=se,oe=we,t.width=Math.floor(k*we),t.height=Math.floor(se*we),this.setViewport(0,0,k,se)},this.setEffects=function(k){if(S===ai){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let se=0;se<k.length;se++)if(k[se].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(N)},this.getViewport=function(k){return k.copy(Be)},this.setViewport=function(k,se,we,pe){k.isVector4?Be.set(k.x,k.y,k.z,k.w):Be.set(k,se,we,pe),C.viewport(N.copy(Be).multiplyScalar(oe).round())},this.getScissor=function(k){return k.copy(ut)},this.setScissor=function(k,se,we,pe){k.isVector4?ut.set(k.x,k.y,k.z,k.w):ut.set(k,se,we,pe),C.scissor(z.copy(ut).multiplyScalar(oe).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(k){C.setScissorTest(wt=k)},this.setOpaqueSort=function(k){Re=k},this.setTransparentSort=function(k){We=k},this.getClearColor=function(k){return k.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(k=!0,se=!0,we=!0){let pe=0;if(k){let fe=!1;if(J!==null){const Ke=J.texture.format;fe=g.has(Ke)}if(fe){const Ke=J.texture.type,Ye=p.has(Ke),qe=pt.getClearColor(),st=pt.getClearAlpha(),ct=qe.r,xt=qe.g,St=qe.b;Ye?(T[0]=ct,T[1]=xt,T[2]=St,T[3]=st,X.clearBufferuiv(X.COLOR,0,T)):(I[0]=ct,I[1]=xt,I[2]=St,I[3]=st,X.clearBufferiv(X.COLOR,0,I))}else pe|=X.COLOR_BUFFER_BIT}se&&(pe|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),we&&(pe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&X.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),F=k},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),pt.dispose(),Ne.dispose(),Fe.dispose(),de.dispose(),Le.dispose(),ve.dispose(),Je.dispose(),De.dispose(),Ie.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",no),ot.removeEventListener("sessionend",io),bn.stop()};function It(k){k.preventDefault(),om("WebGLRenderer: Context Lost."),Z=!0}function Pt(){om("WebGLRenderer: Context Restored."),Z=!1;const k=Q.autoReset,se=ht.enabled,we=ht.autoUpdate,pe=ht.needsUpdate,fe=ht.type;ft(),Q.autoReset=k,ht.enabled=se,ht.autoUpdate=we,ht.needsUpdate=pe,ht.type=fe}function pn(k){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function $n(k){const se=k.target;se.removeEventListener("dispose",$n),Rr(se)}function Rr(k){ss(k),de.remove(k)}function ss(k){const se=de.get(k).programs;se!==void 0&&(se.forEach(function(we){Ie.releaseProgram(we)}),k.isShaderMaterial&&Ie.releaseShaderCache(k))}this.renderBufferDirect=function(k,se,we,pe,fe,Ke){se===null&&(se=Ce);const Ye=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,qe=Yt(k,se,we,pe,fe);C.setMaterial(pe,Ye);let st=we.index,ct=1;if(pe.wireframe===!0){if(st=ee.getWireframeAttribute(we),st===void 0)return;ct=2}const xt=we.drawRange,St=we.attributes.position;let nt=xt.start*ct,bt=(xt.start+xt.count)*ct;Ke!==null&&(nt=Math.max(nt,Ke.start*ct),bt=Math.min(bt,(Ke.start+Ke.count)*ct)),st!==null?(nt=Math.max(nt,0),bt=Math.min(bt,st.count)):St!=null&&(nt=Math.max(nt,0),bt=Math.min(bt,St.count));const Kt=bt-nt;if(Kt<0||Kt===1/0)return;Je.setup(fe,pe,qe,we,st);let Ht,kt=Xe;if(st!==null&&(Ht=Ve.get(st),kt=Pe,kt.setIndex(Ht)),fe.isMesh)pe.wireframe===!0?(C.setLineWidth(pe.wireframeLinewidth*ce()),kt.setMode(X.LINES)):kt.setMode(X.TRIANGLES);else if(fe.isLine){let sn=pe.linewidth;sn===void 0&&(sn=1),C.setLineWidth(sn*ce()),fe.isLineSegments?kt.setMode(X.LINES):fe.isLineLoop?kt.setMode(X.LINE_LOOP):kt.setMode(X.LINE_STRIP)}else fe.isPoints?kt.setMode(X.POINTS):fe.isSprite&&kt.setMode(X.TRIANGLES);if(fe.isBatchedMesh)if(be.get("WEBGL_multi_draw"))kt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const sn=fe._multiDrawStarts,Qe=fe._multiDrawCounts,Qt=fe._multiDrawCount,At=st?Ve.get(st).bytesPerElement:1,vn=de.get(pe).currentProgram.getUniforms();for(let Mt=0;Mt<Qt;Mt++)vn.setValue(X,"_gl_DrawID",Mt),kt.render(sn[Mt]/At,Qe[Mt])}else if(fe.isInstancedMesh)kt.renderInstances(nt,Kt,fe.count);else if(we.isInstancedBufferGeometry){const sn=we._maxInstanceCount!==void 0?we._maxInstanceCount:1/0,Qe=Math.min(we.instanceCount,sn);kt.renderInstances(nt,Kt,Qe)}else kt.render(nt,Kt)};function Pr(k,se,we,pe){F!==null&&k.isNodeMaterial&&F.setObject(pe,k),Me===!0&&it.setState(k,we,!1),k.transparent===!0&&k.side===Ji&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,Dr(k,se,pe),k.side=es,k.needsUpdate=!0,Dr(k,se,pe),k.side=Ji):Dr(k,se,pe)}this.compile=function(k,se,we=null){we===null&&(we=k),F!==null&&F.renderStart(k,se,we),U=Fe.get(we),U.init(se),A.push(U),we.traverseVisible(function(fe){fe.isLight&&fe.layers.test(se.layers)&&(U.pushLight(fe),fe.castShadow&&U.pushShadow(fe))}),k!==we&&k.traverseVisible(function(fe){fe.isLight&&fe.layers.test(se.layers)&&(U.pushLight(fe),fe.castShadow&&U.pushShadow(fe))}),U.setupLights(),F!==null&&F.updateLights(U.state.lightsArray),he=this.localClippingEnabled,Me=it.init(this.clippingPlanes,he),Me===!0&&it.setGlobalState(this.clippingPlanes,se),F!==null&&ht.render(U.state.shadowsArray,we,se);const pe=new Set;return k.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Ke=fe.material;if(Ke)if(Array.isArray(Ke))for(let Ye=0;Ye<Ke.length;Ye++){const qe=Ke[Ye];Pr(qe,we,se,fe),pe.add(qe)}else Pr(Ke,we,se,fe),pe.add(Ke)}),U=A.pop(),F!==null&&F.renderEnd(),pe},this.compileAsync=function(k,se,we=null){const pe=this.compile(k,se,we);return new Promise(fe=>{function Ke(){if(pe.forEach(function(Ye){const st=de.get(Ye).currentProgram;(st===void 0||st.isReady())&&pe.delete(Ye)}),pe.size===0){fe(k);return}setTimeout(Ke,10)}be.get("KHR_parallel_shader_compile")!==null?Ke():setTimeout(Ke,10)})};let Nr=null;function tu(k){Nr&&Nr(k)}function no(){bn.stop()}function io(){bn.start()}const bn=new Fg;bn.setAnimationLoop(tu),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(k){Nr=k,ot.setAnimationLoop(k),k===null?bn.stop():bn.start()},ot.addEventListener("sessionstart",no),ot.addEventListener("sessionend",io),this.render=function(k,se){if(se!==void 0&&se.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;F!==null&&F.renderStart(k,se);const we=ot.enabled===!0&&ot.isPresenting===!0,pe=D!==null&&(J===null||we)&&D.begin(W,J);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(se),se=ot.getCamera()),k.isScene===!0&&k.onBeforeRender(W,k,se,J),U=Fe.get(k,A.length),U.init(se),U.state.textureUnits=ye.getTextureUnits(),A.push(U),V.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),b.setFromProjectionMatrix(V,Ii,se.reversedDepth),he=this.localClippingEnabled,Me=it.init(this.clippingPlanes,he),P=Ne.get(k,O.length),P.init(),O.push(P),ot.enabled===!0&&ot.isPresenting===!0){const Ye=W.xr.getDepthSensingMesh();Ye!==null&&as(Ye,se,-1/0,W.sortObjects)}as(k,se,0,W.sortObjects),P.finish(),F!==null&&F.updateLights(U.state.lightsArray),W.sortObjects===!0&&P.sort(Re,We),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&pt.addToRenderList(P,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&it.beginShadows();const fe=U.state.shadowsArray;if(ht.render(fe,k,se),Me===!0&&it.endShadows(),(pe&&D.hasRenderPass())===!1){const Ye=P.opaque,qe=P.transmissive;if(U.setupLights(),se.isArrayCamera){const st=se.cameras;if(qe.length>0)for(let ct=0,xt=st.length;ct<xt;ct++){const St=st[ct];ro(Ye,qe,k,St)}Ae&&pt.render(k);for(let ct=0,xt=st.length;ct<xt;ct++){const St=st[ct];Ks(P,k,St,St.viewport)}}else qe.length>0&&ro(Ye,qe,k,se),Ae&&pt.render(k),Ks(P,k,se)}J!==null&&q===0&&(ye.updateMultisampleRenderTarget(J),ye.updateRenderTargetMipmap(J)),pe&&D.end(W),k.isScene===!0&&k.onAfterRender(W,k,se),Je.resetDefaultState(),H=-1,K=null,A.pop(),A.length>0?(U=A[A.length-1],ye.setTextureUnits(U.state.textureUnits),Me===!0&&it.setGlobalState(W.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,F!==null&&F.renderEnd()};function as(k,se,we,pe){if(k.visible===!1)return;if(k.layers.test(se.layers)){if(k.isGroup)we=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(se);else if(k.isLightProbeGrid)U.pushLightProbeGrid(k);else if(k.isLight)U.pushLight(k),k.castShadow&&U.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(b)){pe&&ie.setFromMatrixPosition(k.matrixWorld).applyMatrix4(V);const Ye=ve.update(k),qe=k.material;qe.visible&&P.push(k,Ye,qe,we,ie.z,null,se)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(b))){const Ye=ve.update(k),qe=k.material;if(pe&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),ie.copy(k.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ie.copy(Ye.boundingSphere.center)),ie.applyMatrix4(k.matrixWorld).applyMatrix4(V)),Array.isArray(qe)){const st=Ye.groups;for(let ct=0,xt=st.length;ct<xt;ct++){const St=st[ct],nt=qe[St.materialIndex];nt&&nt.visible&&P.push(k,Ye,nt,we,ie.z,St,se)}}else qe.visible&&P.push(k,Ye,qe,we,ie.z,null,se)}}const Ke=k.children;for(let Ye=0,qe=Ke.length;Ye<qe;Ye++)as(Ke[Ye],se,we,pe)}function Ks(k,se,we,pe){const{opaque:fe,transmissive:Ke,transparent:Ye}=k;U.setupLightsView(we),Me===!0&&it.setGlobalState(W.clippingPlanes,we),pe&&C.viewport(N.copy(pe)),fe.length>0&&Ir(fe,se,we),Ke.length>0&&Ir(Ke,se,we),Ye.length>0&&Ir(Ye,se,we),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function ro(k,se,we,pe){if((we.isScene===!0?we.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[pe.id]===void 0){const nt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[pe.id]=new Mi(1,1,{generateMipmaps:!0,type:nt?Ui:ai,minFilter:Jr,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ke=U.state.transmissionRenderTarget[pe.id],Ye=pe.viewport||N;Ke.setSize(Ye.z*W.transmissionResolutionScale,Ye.w*W.transmissionResolutionScale);const qe=W.getRenderTarget(),st=W.getActiveCubeFace(),ct=W.getActiveMipmapLevel();W.setRenderTarget(Ke),W.getClearColor(Ee),ge=W.getClearAlpha(),ge<1&&W.setClearColor(16777215,.5),W.clear(),Ae&&pt.render(we);const xt=W.toneMapping;W.toneMapping=Di;const St=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),U.setupLightsView(pe),Me===!0&&it.setGlobalState(W.clippingPlanes,pe),Ir(k,we,pe),ye.updateMultisampleRenderTarget(Ke),ye.updateRenderTargetMipmap(Ke),be.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let bt=0,Kt=se.length;bt<Kt;bt++){const Ht=se[bt],{object:kt,geometry:sn,material:Qe,group:Qt}=Ht;if(Qe.side===Ji&&kt.layers.test(pe.layers)){const At=Qe.side;Qe.side=Pn,Qe.needsUpdate=!0,Zs(kt,we,pe,sn,Qe,Qt),Qe.side=At,Qe.needsUpdate=!0,nt=!0}}nt===!0&&(ye.updateMultisampleRenderTarget(Ke),ye.updateRenderTargetMipmap(Ke))}W.setRenderTarget(qe,st,ct),W.setClearColor(Ee,ge),St!==void 0&&(pe.viewport=St),W.toneMapping=xt}function Ir(k,se,we){const pe=se.isScene===!0?se.overrideMaterial:null;for(let fe=0,Ke=k.length;fe<Ke;fe++){const Ye=k[fe],{object:qe,geometry:st,group:ct}=Ye;let xt=Ye.material;xt.allowOverride===!0&&pe!==null&&(xt=pe),qe.layers.test(we.layers)&&Zs(qe,se,we,st,xt,ct)}}function Zs(k,se,we,pe,fe,Ke){F!==null&&fe.isNodeMaterial&&F.setObject(k,fe),k.onBeforeRender(W,se,we,pe,fe,Ke),k.modelViewMatrix.multiplyMatrices(we.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),fe.onBeforeRender(W,se,we,pe,k,Ke),fe.transparent===!0&&fe.side===Ji&&fe.forceSinglePass===!1?(fe.side=Pn,fe.needsUpdate=!0,W.renderBufferDirect(we,se,pe,fe,k,Ke),fe.side=es,fe.needsUpdate=!0,W.renderBufferDirect(we,se,pe,fe,k,Ke),fe.side=Ji):W.renderBufferDirect(we,se,pe,fe,k,Ke),k.onAfterRender(W,se,we,pe,fe,Ke)}function Dr(k,se,we){se.isScene!==!0&&(se=Ce);const pe=de.get(k),fe=U.state.lights,Ke=U.state.shadowsArray,Ye=fe.state.version,qe=Ie.getParameters(k,fe.state,Ke,se,we,U.state.lightProbeGridArray),st=Ie.getProgramCacheKey(qe);let ct=pe.programs;pe.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?se.environment:null,pe.fog=se.fog;const xt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;pe.envMap=Le.get(k.envMap||pe.environment,xt),pe.envMapRotation=pe.environment!==null&&k.envMap===null?se.environmentRotation:k.envMapRotation,ct===void 0&&(k.addEventListener("dispose",$n),ct=new Map,pe.programs=ct);let St=ct.get(st);if(St!==void 0){if(pe.currentProgram===St&&pe.lightsStateVersion===Ye)return so(k,qe),St}else qe.uniforms=Ie.getUniforms(k),F!==null&&k.isNodeMaterial&&F.build(k,we,qe),k.onBeforeCompile(qe,W),St=Ie.acquireProgram(qe,st),ct.set(st,St),pe.uniforms=qe.uniforms;const nt=pe.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(nt.clippingPlanes=it.uniform),so(k,qe),pe.needsLights=Qs(k),pe.lightsStateVersion=Ye,pe.needsLights&&(nt.ambientLightColor.value=fe.state.ambient,nt.lightProbe.value=fe.state.probe,nt.sunLights.value=fe.state.sun,nt.sunLightShadows.value=fe.state.sunShadow,nt.directionalLights.value=fe.state.directional,nt.directionalLightShadows.value=fe.state.directionalShadow,nt.spotLights.value=fe.state.spot,nt.spotLightShadows.value=fe.state.spotShadow,nt.rectAreaLights.value=fe.state.rectArea,nt.ltc_1.value=fe.state.rectAreaLTC1,nt.ltc_2.value=fe.state.rectAreaLTC2,nt.pointLights.value=fe.state.point,nt.pointLightShadows.value=fe.state.pointShadow,nt.hemisphereLights.value=fe.state.hemi,nt.sunShadowMatrix.value=fe.state.sunShadowMatrix,nt.sunShadowCascade.value=fe.state.sunShadowCascade,nt.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,nt.spotLightMatrix.value=fe.state.spotLightMatrix,nt.spotLightMap.value=fe.state.spotLightMap,nt.pointShadowMatrix.value=fe.state.pointShadowMatrix),pe.lightProbeGrid=U.state.lightProbeGridArray.length>0,pe.currentProgram=St,pe.uniformsList=null,St}function Js(k){if(k.uniformsList===null){const se=k.currentProgram.getUniforms();k.uniformsList=zl.seqWithValue(se.seq,k.uniforms)}return k.uniformsList}function so(k,se){const we=de.get(k);we.outputColorSpace=se.outputColorSpace,we.batching=se.batching,we.batchingColor=se.batchingColor,we.instancing=se.instancing,we.instancingColor=se.instancingColor,we.instancingMorph=se.instancingMorph,we.skinning=se.skinning,we.morphTargets=se.morphTargets,we.morphNormals=se.morphNormals,we.morphColors=se.morphColors,we.morphTargetsCount=se.morphTargetsCount,we.numClippingPlanes=se.numClippingPlanes,we.numIntersection=se.numClipIntersection,we.vertexAlphas=se.vertexAlphas,we.vertexTangents=se.vertexTangents,we.toneMapping=se.toneMapping}function nu(k,se){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;R.setFromMatrixPosition(se.matrixWorld);for(let we=0,pe=k.length;we<pe;we++){const fe=k[we];if(fe.texture!==null&&fe.boundingBox.containsPoint(R))return fe}return null}function Yt(k,se,we,pe,fe){se.isScene!==!0&&(se=Ce),ye.resetTextureUnits();const Ke=se.fog,Ye=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?se.environment:null,qe=J===null?W.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,st=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,ct=Le.get(pe.envMap||Ye,st),xt=pe.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,St=!!we.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),nt=!!we.morphAttributes.position,bt=!!we.morphAttributes.normal,Kt=!!we.morphAttributes.color;let Ht=Di;pe.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ht=W.toneMapping);const kt=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,sn=kt!==void 0?kt.length:0,Qe=de.get(pe),Qt=U.state.lights;if(Me===!0&&(he===!0||k!==K)){const Bt=k===K&&pe.id===H;it.setState(pe,k,Bt)}let At=!1;pe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Qt.state.version||Qe.outputColorSpace!==qe||fe.isBatchedMesh&&Qe.batching===!1||!fe.isBatchedMesh&&Qe.batching===!0||fe.isBatchedMesh&&Qe.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&Qe.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&Qe.instancing===!1||!fe.isInstancedMesh&&Qe.instancing===!0||fe.isSkinnedMesh&&Qe.skinning===!1||!fe.isSkinnedMesh&&Qe.skinning===!0||fe.isInstancedMesh&&Qe.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Qe.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Qe.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Qe.instancingMorph===!1&&fe.morphTexture!==null||Qe.envMap!==ct||pe.fog===!0&&Qe.fog!==Ke||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==it.numPlanes||Qe.numIntersection!==it.numIntersection)||Qe.vertexAlphas!==xt||Qe.vertexTangents!==St||Qe.morphTargets!==nt||Qe.morphNormals!==bt||Qe.morphColors!==Kt||Qe.toneMapping!==Ht||Qe.morphTargetsCount!==sn||!!Qe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Qe.__version=pe.version);let vn=Qe.currentProgram;At===!0&&(vn=Dr(pe,se,fe),F&&pe.isNodeMaterial&&F.onUpdateProgram(pe,vn,Qe));let Mt=!1,oi=!1,ki=!1;const Dt=vn.getUniforms(),Xt=Qe.uniforms;if(C.useProgram(vn.program)&&(Mt=!0,oi=!0,ki=!0),pe.id!==H&&(H=pe.id,oi=!0),Qe.needsLights){const Bt=nu(U.state.lightProbeGridArray,fe);Qe.lightProbeGrid!==Bt&&(Qe.lightProbeGrid=Bt,oi=!0)}if(Mt||K!==k){C.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Dt.setValue(X,"projectionMatrix",k.projectionMatrix),Dt.setValue(X,"viewMatrix",k.matrixWorldInverse);const Kn=Dt.map.cameraPosition;Kn!==void 0&&Kn.setValue(X,G.setFromMatrixPosition(k.matrixWorld)),B.logarithmicDepthBuffer&&Dt.setValue(X,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Dt.setValue(X,"isOrthographic",k.isOrthographicCamera===!0),K!==k&&(K=k,oi=!0,ki=!0)}if(Qe.needsLights&&(Qt.state.sunShadowMap.length>0&&Dt.setValue(X,"sunShadowMap",Qt.state.sunShadowMap,ye),Qt.state.directionalShadowMap.length>0&&Dt.setValue(X,"directionalShadowMap",Qt.state.directionalShadowMap,ye),Qt.state.spotShadowMap.length>0&&Dt.setValue(X,"spotShadowMap",Qt.state.spotShadowMap,ye),Qt.state.pointShadowMap.length>0&&Dt.setValue(X,"pointShadowMap",Qt.state.pointShadowMap,ye)),fe.isSkinnedMesh){Dt.setOptional(X,fe,"bindMatrix"),Dt.setOptional(X,fe,"bindMatrixInverse");const Bt=fe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Dt.setValue(X,"boneTexture",Bt.boneTexture,ye))}fe.isBatchedMesh&&(Dt.setOptional(X,fe,"batchingTexture"),Dt.setValue(X,"batchingTexture",fe._matricesTexture,ye),Dt.setOptional(X,fe,"batchingIdTexture"),Dt.setValue(X,"batchingIdTexture",fe._indirectTexture,ye),Dt.setOptional(X,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Dt.setValue(X,"batchingColorTexture",fe._colorsTexture,ye));const li=we.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&ne.update(fe,we,vn),(oi||Qe.receiveShadow!==fe.receiveShadow)&&(Qe.receiveShadow=fe.receiveShadow,Dt.setValue(X,"receiveShadow",fe.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&se.environment!==null&&(Xt.envMapIntensity.value=se.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=qE()),oi){if(Dt.setValue(X,"toneMappingExposure",W.toneMappingExposure),Qe.needsLights&&iu(Xt,ki),Ke&&pe.fog===!0&&$e.refreshFogUniforms(Xt,Ke),$e.refreshMaterialUniforms(Xt,pe,oe,ue,U.state.transmissionRenderTarget[k.id]),Qe.needsLights&&Qe.lightProbeGrid){const Bt=Qe.lightProbeGrid;Xt.probesSH.value=Bt.texture,Xt.probesMin.value.copy(Bt.boundingBox.min),Xt.probesMax.value.copy(Bt.boundingBox.max),Xt.probesResolution.value.copy(Bt.resolution)}zl.upload(X,Js(Qe),Xt,ye)}if(pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(zl.upload(X,Js(Qe),Xt,ye),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Dt.setValue(X,"center",fe.center),Dt.setValue(X,"modelViewMatrix",fe.modelViewMatrix),Dt.setValue(X,"normalMatrix",fe.normalMatrix),Dt.setValue(X,"modelMatrix",fe.matrixWorld),pe.uniformsGroups!==void 0){const Bt=pe.uniformsGroups;for(let Kn=0,ui=Bt.length;Kn<ui;Kn++){const ci=Bt[Kn];De.update(ci,vn),De.bind(ci,vn)}}return vn}function iu(k,se){k.ambientLightColor.needsUpdate=se,k.lightProbe.needsUpdate=se,k.sunLights.needsUpdate=se,k.sunLightShadows.needsUpdate=se,k.directionalLights.needsUpdate=se,k.directionalLightShadows.needsUpdate=se,k.pointLights.needsUpdate=se,k.pointLightShadows.needsUpdate=se,k.spotLights.needsUpdate=se,k.spotLightShadows.needsUpdate=se,k.rectAreaLights.needsUpdate=se,k.hemisphereLights.needsUpdate=se}function Qs(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(k,se,we){const pe=de.get(k);pe.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),de.get(k.texture).__webglTexture=se,de.get(k.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:we,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,se){const we=de.get(k);we.__webglFramebuffer=se,we.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(k,se=0,we=0){J=k,le=se,q=we;let pe=null,fe=!1,Ke=!1;if(k){const qe=de.get(k);if(qe.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(X.FRAMEBUFFER,qe.__webglFramebuffer),N.copy(k.viewport),z.copy(k.scissor),_e=k.scissorTest,C.viewport(N),C.scissor(z),C.setScissorTest(_e),H=-1;return}else if(qe.__webglFramebuffer===void 0)ye.setupRenderTarget(k);else if(qe.__hasExternalTextures)ye.rebindTextures(k,de.get(k.texture).__webglTexture,de.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const xt=k.depthTexture;if(qe.__boundDepthTexture!==xt){if(xt!==null&&de.has(xt)&&(k.width!==xt.image.width||k.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(k)}}const st=k.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ke=!0);const ct=de.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(ct[se])?pe=ct[se][we]:pe=ct[se],fe=!0):k.samples>0&&ye.useMultisampledRTT(k)===!1?pe=de.get(k).__webglMultisampledFramebuffer:Array.isArray(ct)?pe=ct[we]:pe=ct,N.copy(k.viewport),z.copy(k.scissor),_e=k.scissorTest}else N.copy(Be).multiplyScalar(oe).floor(),z.copy(ut).multiplyScalar(oe).floor(),_e=wt;if(we!==0&&(pe=j),C.bindFramebuffer(X.FRAMEBUFFER,pe)&&C.drawBuffers(k,pe),C.viewport(N),C.scissor(z),C.setScissorTest(_e),fe){const qe=de.get(k.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+se,qe.__webglTexture,we)}else if(Ke){const qe=se;for(let st=0;st<k.textures.length;st++){const ct=de.get(k.textures[st]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+st,ct.__webglTexture,we,qe)}}else if(k!==null&&we!==0){const qe=de.get(k.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qe.__webglTexture,we)}H=-1};function ea(k){const se=de.get(k);return(se.__readFormat!==k.format||se.__readType!==k.type)&&(se.__readFormat=k.format,se.__readType=k.type,se.__formatReadable=B.textureFormatReadable(k.format),se.__typeReadable=B.textureTypeReadable(k.type)),se}this.readRenderTargetPixels=function(k,se,we,pe,fe,Ke,Ye,qe=0){if(!(k&&k.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=de.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Ye!==void 0&&(st=st[Ye]),st){C.bindFramebuffer(X.FRAMEBUFFER,st);try{const ct=k.textures[qe],xt=ct.format,St=ct.type;k.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qe);const nt=ea(ct);if(nt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=k.width-pe&&we>=0&&we<=k.height-fe&&X.readPixels(se,we,pe,fe,je.convert(xt),je.convert(St),Ke)}finally{const ct=J!==null?de.get(J).__webglFramebuffer:null;C.bindFramebuffer(X.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(k,se,we,pe,fe,Ke,Ye,qe=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=de.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Ye!==void 0&&(st=st[Ye]),st)if(se>=0&&se<=k.width-pe&&we>=0&&we<=k.height-fe){C.bindFramebuffer(X.FRAMEBUFFER,st);const ct=k.textures[qe],xt=ct.format,St=ct.type;k.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+qe);const nt=ea(ct);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,bt),X.bufferData(X.PIXEL_PACK_BUFFER,Ke.byteLength,X.STREAM_READ),X.readPixels(se,we,pe,fe,je.convert(xt),je.convert(St),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Kt=J!==null?de.get(J).__webglFramebuffer:null;C.bindFramebuffer(X.FRAMEBUFFER,Kt);const Ht=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await mv(X,Ht,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,bt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ke),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(bt),X.deleteSync(Ht),Ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,se=null,we=0){const pe=Math.pow(2,-we),fe=Math.floor(k.image.width*pe),Ke=Math.floor(k.image.height*pe),Ye=se!==null?se.x:0,qe=se!==null?se.y:0;ye.setTexture2D(k,0),X.copyTexSubImage2D(X.TEXTURE_2D,we,0,0,Ye,qe,fe,Ke),C.unbindTexture()},this.copyTextureToTexture=function(k,se,we=null,pe=null,fe=0,Ke=0){let Ye,qe,st,ct,xt,St,nt,bt,Kt;const Ht=k.isCompressedTexture?k.mipmaps[Ke]:k.image;if(we!==null)Ye=we.max.x-we.min.x,qe=we.max.y-we.min.y,st=we.isBox3?we.max.z-we.min.z:1,ct=we.min.x,xt=we.min.y,St=we.isBox3?we.min.z:0;else{const Xt=Math.pow(2,-fe);Ye=Math.floor(Ht.width*Xt),qe=Math.floor(Ht.height*Xt),k.isDataArrayTexture?st=Ht.depth:k.isData3DTexture?st=Math.floor(Ht.depth*Xt):st=1,ct=0,xt=0,St=0}pe!==null?(nt=pe.x,bt=pe.y,Kt=pe.z):(nt=0,bt=0,Kt=0);const kt=je.convert(se.format),sn=je.convert(se.type);let Qe;se.isData3DTexture?(ye.setTexture3D(se,0),Qe=X.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(ye.setTexture2DArray(se,0),Qe=X.TEXTURE_2D_ARRAY):(ye.setTexture2D(se,0),Qe=X.TEXTURE_2D),C.activeTexture(X.TEXTURE0),C.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,se.flipY),C.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),C.pixelStorei(X.UNPACK_ALIGNMENT,se.unpackAlignment);const Qt=C.getParameter(X.UNPACK_ROW_LENGTH),At=C.getParameter(X.UNPACK_IMAGE_HEIGHT),vn=C.getParameter(X.UNPACK_SKIP_PIXELS),Mt=C.getParameter(X.UNPACK_SKIP_ROWS),oi=C.getParameter(X.UNPACK_SKIP_IMAGES);C.pixelStorei(X.UNPACK_ROW_LENGTH,Ht.width),C.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht.height),C.pixelStorei(X.UNPACK_SKIP_PIXELS,ct),C.pixelStorei(X.UNPACK_SKIP_ROWS,xt),C.pixelStorei(X.UNPACK_SKIP_IMAGES,St);const ki=k.isDataArrayTexture||k.isData3DTexture,Dt=se.isDataArrayTexture||se.isData3DTexture;if(k.isDepthTexture){const Xt=de.get(k),li=de.get(se),Bt=de.get(Xt.__renderTarget),Kn=de.get(li.__renderTarget);C.bindFramebuffer(X.READ_FRAMEBUFFER,Bt.__webglFramebuffer),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let ui=0;ui<st;ui++)ki&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(k).__webglTexture,fe,St+ui),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,de.get(se).__webglTexture,Ke,Kt+ui)),X.blitFramebuffer(ct,xt,Ye,qe,nt,bt,Ye,qe,X.DEPTH_BUFFER_BIT,X.NEAREST);C.bindFramebuffer(X.READ_FRAMEBUFFER,null),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(fe!==0||k.isRenderTargetTexture||de.has(k)){const Xt=de.get(k),li=de.get(se);C.bindFramebuffer(X.READ_FRAMEBUFFER,w),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,Y);for(let Bt=0;Bt<st;Bt++)ki?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xt.__webglTexture,fe,St+Bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xt.__webglTexture,fe),Dt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,li.__webglTexture,Ke,Kt+Bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,li.__webglTexture,Ke),fe!==0?X.blitFramebuffer(ct,xt,Ye,qe,nt,bt,Ye,qe,X.COLOR_BUFFER_BIT,X.NEAREST):Dt?X.copyTexSubImage3D(Qe,Ke,nt,bt,Kt+Bt,ct,xt,Ye,qe):X.copyTexSubImage2D(Qe,Ke,nt,bt,ct,xt,Ye,qe);C.bindFramebuffer(X.READ_FRAMEBUFFER,null),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Dt?k.isDataTexture||k.isData3DTexture?X.texSubImage3D(Qe,Ke,nt,bt,Kt,Ye,qe,st,kt,sn,Ht.data):se.isCompressedArrayTexture?X.compressedTexSubImage3D(Qe,Ke,nt,bt,Kt,Ye,qe,st,kt,Ht.data):X.texSubImage3D(Qe,Ke,nt,bt,Kt,Ye,qe,st,kt,sn,Ht):k.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ke,nt,bt,Ye,qe,kt,sn,Ht.data):k.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ke,nt,bt,Ht.width,Ht.height,kt,Ht.data):X.texSubImage2D(X.TEXTURE_2D,Ke,nt,bt,Ye,qe,kt,sn,Ht);C.pixelStorei(X.UNPACK_ROW_LENGTH,Qt),C.pixelStorei(X.UNPACK_IMAGE_HEIGHT,At),C.pixelStorei(X.UNPACK_SKIP_PIXELS,vn),C.pixelStorei(X.UNPACK_SKIP_ROWS,Mt),C.pixelStorei(X.UNPACK_SKIP_IMAGES,oi),Ke===0&&se.generateMipmaps&&X.generateMipmap(Qe),C.unbindTexture()},this.initRenderTarget=function(k){de.get(k).__webglFramebuffer===void 0&&ye.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ye.setTextureCube(k,0):k.isData3DTexture?ye.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ye.setTexture2DArray(k,0):ye.setTexture2D(k,0),C.unbindTexture()},this.resetState=function(){le=0,q=0,J=null,C.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function KE({state:s,speaking:e,muted:t,audioLevel:r,assistantName:a,themeColor:l}){const u=tt.useRef(null),f=tt.useRef(null),d=tt.useRef(null),h=tt.useRef(null),x=tt.useRef(0),y=tt.useRef([]),m=tt.useRef(null),v=tt.useRef(null),M=tt.useRef({state:s,speaking:e,muted:t,audioLevel:r,assistantName:a,themeColor:l});return M.current={state:s,speaking:e,muted:t,audioLevel:r,assistantName:a,themeColor:l},tt.useEffect(()=>{const S=u.current;if(!S)return;const g=new Nv;d.current=g;const p=new si(60,S.clientWidth/S.clientHeight,.1,1e3);p.position.z=5,h.current=p;const T=new $E({antialias:!0,alpha:!0});T.setSize(S.clientWidth,S.clientHeight),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.setClearColor(1546,1),S.appendChild(T.domElement),f.current=T;const I=new ql(.8,32,32),R=new Xa({color:54527,transparent:!0,opacity:.15,wireframe:!1}),P=new Yn(I,R);g.add(P),v.current=P;const U=new ql(.85,32,32),O=new Xa({color:54527,transparent:!0,opacity:.05,side:Pn}),A=new Yn(U,O);g.add(A);const D=[];[{radius:1.5,tube:.02,color:54527,speed:.5,tiltX:.3,tiltY:0},{radius:1.8,tube:.015,color:31385,speed:-.3,tiltX:.6,tiltY:.4},{radius:2.1,tube:.01,color:54527,speed:.7,tiltX:-.2,tiltY:.8},{radius:2.4,tube:.008,color:1727610,speed:-.4,tiltX:.9,tiltY:-.3},{radius:2.7,tube:.006,color:865095,speed:.2,tiltX:-.5,tiltY:.6}].forEach(H=>{const K=new Md(H.radius,H.tube,16,100),N=new Xa({color:H.color,transparent:!0,opacity:.7}),z=new Yn(K,N);z.rotation.x=H.tiltX,z.rotation.y=H.tiltY,z._speed=H.speed,z._baseOpacity=.7,g.add(z),D.push(z)}),y.current=D;const Z=500,F=new Float32Array(Z*3),j=new Float32Array(Z*3);for(let H=0;H<Z;H++){const K=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1),z=1.5+Math.random()*2;F[H*3]=z*Math.sin(N)*Math.cos(K),F[H*3+1]=z*Math.sin(N)*Math.sin(K),F[H*3+2]=z*Math.cos(N);const _e=new Ft(54527);j[H*3]=_e.r,j[H*3+1]=_e.g,j[H*3+2]=_e.b}const w=new qn;w.setAttribute("position",new Ei(F,3)),w.setAttribute("color",new Ei(j,3));const Y=new Pg({size:.03,vertexColors:!0,transparent:!0,opacity:.6,blending:yf}),le=new Hv(w,Y);g.add(le),m.current=le;const q=()=>{const{state:H,speaking:K,muted:N,audioLevel:z}=M.current,_e=performance.now()/1e3;if(P){const Ee=N?.8:K?1+z*.3:1+z*.15;P.scale.setScalar(Ee),P.material.opacity=N?.05:K?.2+z*.2:.15;const ge=N?16724838:K?16739072:54527;P.material.color.setHex(ge)}if(D.forEach((Ee,ge)=>{const ze=Ee._speed,ue=N?.2:K?2+z*3:1+z*1.5;Ee.rotation.z+=ze*.01*ue,Ee.rotation.x+=ze*.005*ue;const oe=Ee._baseOpacity;Ee.material.opacity=N?oe*.3:K?oe+z*.3:oe}),le){le.rotation.y+=.001*(K?3:1),le.rotation.x+=5e-4;const Ee=le.geometry.attributes.position;for(let ge=0;ge<Ee.count;ge++){const ze=Ee.getX(ge),ue=Ee.getY(ge),oe=Ee.getZ(ge),Re=Math.sqrt(ze*ze+ue*ue+oe*oe),We=Math.sin(_e*2+Re*2)*.01*(K?3:1);Ee.setXYZ(ge,ze+We,ue+We,oe+We)}Ee.needsUpdate=!0,le.material.opacity=N?.2:K?.6+z*.4:.6}p&&(p.position.x=Math.sin(_e*.3)*.1,p.position.y=Math.cos(_e*.2)*.1,p.lookAt(0,0,0)),T.render(g,p),x.current=requestAnimationFrame(q)};x.current=requestAnimationFrame(q);const J=()=>{if(!S||!T||!p)return;const H=S.clientWidth,K=S.clientHeight;p.aspect=H/K,p.updateProjectionMatrix(),T.setSize(H,K)};return window.addEventListener("resize",J),()=>{cancelAnimationFrame(x.current),window.removeEventListener("resize",J),T&&S&&(S.removeChild(T.domElement),T.dispose()),g.traverse(H=>{H instanceof Yn&&(H.geometry.dispose(),Array.isArray(H.material)?H.material.forEach(K=>K.dispose()):H.material.dispose())})}},[]),re.jsx("div",{ref:u,className:"w-full h-full relative",children:re.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:re.jsxs("div",{className:"text-center",children:[re.jsx("div",{className:"text-[14px] font-bold tracking-[0.3em] mb-2",style:{color:t?"#ff3366":"#00d4ff"},children:a}),re.jsx("div",{className:"text-[9px] tracking-wider",style:{color:s==="LISTENING"?"#00ff88":s==="SPEAKING"?"#ff6b00":s==="THINKING"?"#ffcc00":s==="SLEEPING"?"#3a8a9a":"#00d4ff"},children:t?"⊘ MUTED":s})]})})})}function Il({label:s,value:e,text:t,color:r="#00d4ff"}){const a=e>85?"#ff3355":e>65?"#ff6b00":r;return re.jsxs("div",{className:"relative rounded border border-[#0f4060] bg-[#010f18] px-2 py-1.5 h-[38px]",children:[re.jsxs("div",{className:"flex justify-between items-center",children:[re.jsx("span",{className:"text-[7px] font-bold text-[#3a8a9a] uppercase tracking-wider",children:s}),re.jsx("span",{className:"text-[9px] font-bold",style:{color:t==="--"?"#3a8a9a":a},children:t})]}),re.jsx("div",{className:"mt-1 h-[4px] rounded-full bg-[#011520] overflow-hidden",children:re.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${Math.min(100,Math.max(0,e))}%`,backgroundColor:a}})})]})}const ZE={you:"#d8f8ff",ai:"#00d4ff",err:"#ff3355",file:"#00ff88",sys:"#ffcc00"};function JE({logs:s}){const e=tt.useRef(null),[t,r]=tt.useState([]);return tt.useEffect(()=>{r(s)},[s]),tt.useEffect(()=>{e.current&&(e.current.scrollTop=e.current.scrollHeight)},[t]),re.jsx("div",{ref:e,className:"h-full overflow-y-auto bg-[#010d14] border border-[#0d3347] rounded p-2 font-mono text-[9px] leading-relaxed",children:t.length===0?re.jsx("div",{className:"text-[#3a8a9a] text-center mt-4",children:"◈ Awaiting input..."}):t.map((a,l)=>re.jsxs("div",{className:"mb-1 flex gap-2",children:[re.jsx("span",{className:"text-[#1a5c7a] shrink-0",children:a.timestamp}),re.jsx("span",{style:{color:ZE[a.tag]||"#8ffcff"},children:a.text})]},l))})}const Va={default:{name:"Default (Cyan)",bg:"#00060a",panel:"#010d14",panel2:"#010f18",border:"#0d3347",borderB:"#1a5c7a",borderA:"#0f4060",pri:"#00d4ff",priDim:"#007a99",priGhost:"#001f2e",acc:"#ff6b00",acc2:"#ffcc00",green:"#00ff88",greenD:"#00aa55",red:"#ff3355",muted:"#ff3366",text:"#8ffcff",textDim:"#3a8a9a",textMed:"#5ab8cc",white:"#d8f8ff",dark:"#000d14",barBg:"#011520"},ironman:{name:"Iron Man",bg:"#0a0600",panel:"#140d01",panel2:"#180f01",border:"#47330d",borderB:"#7a5c1a",borderA:"#60400f",pri:"#ff6b00",priDim:"#994400",priGhost:"#2e1f00",acc:"#ffcc00",acc2:"#ff3355",green:"#00ff88",greenD:"#00aa55",red:"#ff3355",muted:"#ff3366",text:"#ffc88f",textDim:"#9a6a3a",textMed:"#cc8a5a",white:"#fff8d8",dark:"#0d0600",barBg:"#201501"},tron:{name:"Tron",bg:"#000a14",panel:"#011420",panel2:"#011828",border:"#0d4760",borderB:"#1a7a9a",borderA:"#0f6080",pri:"#00ffff",priDim:"#009999",priGhost:"#002e2e",acc:"#ff00ff",acc2:"#ffff00",green:"#00ff00",greenD:"#00aa00",red:"#ff0066",muted:"#ff0099",text:"#8fffff",textDim:"#3a9a9a",textMed:"#5acccc",white:"#d8ffff",dark:"#000d14",barBg:"#012020"},matrix:{name:"Matrix",bg:"#000a00",panel:"#011401",panel2:"#011801",border:"#0d470d",borderB:"#1a7a1a",borderA:"#0f600f",pri:"#00ff00",priDim:"#009900",priGhost:"#002e00",acc:"#ffff00",acc2:"#00ffff",green:"#00ff00",greenD:"#00aa00",red:"#ff0000",muted:"#ff3300",text:"#8fff8f",textDim:"#3a9a3a",textMed:"#5acc5a",white:"#d8ffd8",dark:"#000d00",barBg:"#012001"},cyberpunk:{name:"Cyberpunk",bg:"#0a0014",panel:"#140120",panel2:"#180128",border:"#470d60",borderB:"#7a1a9a",borderA:"#600f80",pri:"#ff00ff",priDim:"#990099",priGhost:"#2e002e",acc:"#00ffff",acc2:"#ffff00",green:"#00ff88",greenD:"#00aa55",red:"#ff0066",muted:"#ff0099",text:"#ff8fff",textDim:"#9a3a9a",textMed:"#cc5acc",white:"#ffd8ff",dark:"#0d0014",barBg:"#200120"}};function Zm(s){const e=document.documentElement;e.style.setProperty("--bg",s.bg),e.style.setProperty("--panel",s.panel),e.style.setProperty("--panel2",s.panel2),e.style.setProperty("--border",s.border),e.style.setProperty("--border-b",s.borderB),e.style.setProperty("--border-a",s.borderA),e.style.setProperty("--pri",s.pri),e.style.setProperty("--pri-dim",s.priDim),e.style.setProperty("--pri-ghost",s.priGhost),e.style.setProperty("--acc",s.acc),e.style.setProperty("--acc2",s.acc2),e.style.setProperty("--green",s.green),e.style.setProperty("--green-d",s.greenD),e.style.setProperty("--red",s.red),e.style.setProperty("--muted",s.muted),e.style.setProperty("--text",s.text),e.style.setProperty("--text-dim",s.textDim),e.style.setProperty("--text-med",s.textMed),e.style.setProperty("--white",s.white),e.style.setProperty("--dark",s.dark),e.style.setProperty("--bar-bg",s.barBg)}const QE=["Puck","Charon","Kore","Fenrir","Aoede"];function e1({open:s,onClose:e,assistantName:t,voice:r,wakeWordEnabled:a,currentThemeName:l,geminiKey:u,onAssistantNameChange:f,onVoiceChange:d,onWakeWordToggle:h,onThemeChange:x,onGeminiKeyChange:y}){const[m,v]=tt.useState(t),[M,S]=tt.useState(u);return s?re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[re.jsx("div",{className:"absolute inset-0 bg-black/60",onClick:e}),re.jsxs("div",{className:"relative w-[480px] max-h-[85vh] overflow-y-auto rounded-lg border border-[#1a5c7a] bg-[rgba(0,6,10,0.97)] p-6",children:[re.jsx("h2",{className:"text-[12px] font-bold text-[#00d4ff] mb-2",children:"⚙ SETTINGS"}),re.jsx("div",{className:"h-px bg-[#0d3347] mb-4"}),re.jsxs("div",{className:"mb-4",children:[re.jsx("label",{className:"text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-1",children:"Assistant Name"}),re.jsx("input",{type:"text",value:m,onChange:g=>v(g.target.value),onBlur:()=>f(m),className:"w-full h-8 bg-[#000d12] border border-[#0d3347] rounded px-2 text-[10px] text-[#8ffcff] font-mono focus:border-[#00d4ff] outline-none"})]}),re.jsxs("div",{className:"mb-4",children:[re.jsx("label",{className:"text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-1",children:"Gemini API Key"}),re.jsx("input",{type:"password",value:M,onChange:g=>S(g.target.value),onBlur:()=>y(M),placeholder:"Enter your Gemini API key...",className:"w-full h-8 bg-[#000d12] border border-[#0d3347] rounded px-2 text-[10px] text-[#8ffcff] font-mono focus:border-[#00d4ff] outline-none placeholder:text-[#1a5c7a]"}),re.jsxs("p",{className:"text-[7px] text-[#3a8a9a] mt-1",children:["Get a free key at ",re.jsx("span",{className:"text-[#00d4ff]",children:"aistudio.google.com"})]})]}),re.jsxs("div",{className:"mb-4",children:[re.jsx("label",{className:"text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2",children:"Assistant Voice"}),re.jsx("div",{className:"flex gap-1 flex-wrap",children:QE.map(g=>re.jsx("button",{onClick:()=>d(g),className:`px-3 py-1 text-[8px] font-bold rounded border transition-all ${r===g?"bg-[#001f2e] text-[#00d4ff] border-[#00d4ff]":"bg-transparent text-[#5ab8cc] border-[#0d3347] hover:text-[#8ffcff] hover:border-[#1a5c7a]"}`,children:g},g))})]}),re.jsxs("div",{className:"mb-4",children:[re.jsx("label",{className:"text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2",children:"Theme"}),re.jsx("div",{className:"flex gap-1 flex-wrap",children:Object.entries(Va).map(([g,p])=>re.jsxs("button",{onClick:()=>x(g),className:`px-3 py-1.5 text-[8px] font-bold rounded border transition-all ${l===g?"border-[#00d4ff] text-[#00d4ff]":"border-[#0d3347] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a]"}`,style:l===g?{background:`${p.pri}14`}:{},children:[re.jsx("span",{className:"inline-block w-2 h-2 rounded-full mr-1",style:{background:p.pri}}),p.name]},g))})]}),re.jsxs("div",{className:"mb-4",children:[re.jsx("label",{className:"text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2",children:'Wake Word ("Hey WEAID")'}),re.jsx("button",{onClick:()=>h(!a),className:`px-4 py-1.5 text-[8px] font-bold rounded border transition-all ${a?"bg-[#001a08] text-[#00ff88] border-[#00aa55]":"bg-transparent text-[#3a8a9a] border-[#0d3347] hover:text-[#8ffcff]"}`,children:a?"ON":"OFF"})]}),re.jsx("button",{onClick:e,className:"w-full h-8 mt-4 bg-transparent border border-[#0d3347] rounded text-[9px] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a] transition-all",children:"CLOSE"})]})]}):null}const t1="webigai_db",n1=1;function eo(){return new Promise((s,e)=>{const t=indexedDB.open(t1,n1);t.onerror=()=>e(t.error),t.onsuccess=()=>s(t.result),t.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains("memory")||a.createObjectStore("memory",{keyPath:"key"}),a.objectStoreNames.contains("sessions")||a.createObjectStore("sessions",{keyPath:"id"}),a.objectStoreNames.contains("logs")||a.createObjectStore("logs",{keyPath:"id",autoIncrement:!0}).createIndex("timestamp","timestamp"),a.objectStoreNames.contains("automations")||a.createObjectStore("automations",{keyPath:"id"}),a.objectStoreNames.contains("plugins")||a.createObjectStore("plugins",{keyPath:"id"}),a.objectStoreNames.contains("settings")||a.createObjectStore("settings",{keyPath:"key"})}})}async function cd(){const s=await eo();return new Promise((e,t)=>{const l=s.transaction("memory","readonly").objectStore("memory").getAll();l.onerror=()=>t(l.error),l.onsuccess=()=>e(l.result)})}async function i1(s){const e=await eo();return new Promise((t,r)=>{const a=e.transaction("memory","readwrite");a.objectStore("memory").put(s),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}async function r1(s){const e=await eo();return new Promise((t,r)=>{const a=e.transaction("memory","readwrite");a.objectStore("memory").delete(s),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}async function s1(){const s=await cd();return JSON.stringify(s,null,2)}async function a1(s){const e=JSON.parse(s),t=await eo();return new Promise((r,a)=>{const l=t.transaction("memory","readwrite"),u=l.objectStore("memory");e.forEach(f=>u.put(f)),l.oncomplete=()=>r(e.length),l.onerror=()=>a(l.error)})}async function o1(s){const e=await eo();return new Promise((t,r)=>{const a=e.transaction("sessions","readwrite");a.objectStore("sessions").put(s),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}const Jm={identity:"#00d4ff",preferences:"#ff6b00",projects:"#00ff88",relationships:"#cc44ff",wishes:"#ffcc00",notes:"#5ab8cc"};function l1({open:s,onClose:e,entries:t,onDelete:r}){const a=tt.useRef(null);if(!s)return null;const l=async()=>{const f=await s1(),d=new Blob([f],{type:"application/json"}),h=URL.createObjectURL(d),x=document.createElement("a");x.href=h,x.download=`weaid-memory-${new Date().toISOString().split("T")[0]}.json`,x.click(),URL.revokeObjectURL(h)},u=async f=>{var x;const d=(x=f.target.files)==null?void 0:x[0];if(!d)return;const h=await d.text();try{const y=await a1(h);alert(`Imported ${y} memories. Refresh to see changes.`),window.location.reload()}catch{alert("Failed to import: Invalid file format")}a.current&&(a.current.value="")};return re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[re.jsx("div",{className:"absolute inset-0 bg-black/60",onClick:e}),re.jsxs("div",{className:"relative w-[560px] max-h-[85vh] overflow-hidden flex flex-col rounded-lg border border-[#1a5c7a] bg-[rgba(0,6,10,0.97)] p-5",children:[re.jsxs("div",{className:"flex items-center justify-between mb-1",children:[re.jsx("h2",{className:"text-[12px] font-bold text-[#00d4ff]",children:"🧠 WHAT WEAID REMEMBERS"}),re.jsxs("div",{className:"flex gap-2",children:[re.jsx("button",{onClick:l,className:"px-2 py-0.5 text-[7px] font-bold border border-[#0d3347] rounded text-[#5ab8cc] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all",children:"📥 EXPORT"}),re.jsx("button",{onClick:()=>{var f;return(f=a.current)==null?void 0:f.click()},className:"px-2 py-0.5 text-[7px] font-bold border border-[#0d3347] rounded text-[#5ab8cc] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all",children:"📤 IMPORT"}),re.jsx("input",{ref:a,type:"file",accept:".json",onChange:u,className:"hidden"})]})]}),re.jsx("div",{className:"h-px bg-[#0d3347] mb-3"}),re.jsxs("p",{className:"text-[7px] text-[#3a8a9a] mb-3",children:[t.length," stored facts — persisted in IndexedDB. Nothing leaves your machine."]}),re.jsx("div",{className:"flex-1 overflow-y-auto space-y-1.5 mb-3",children:t.length===0?re.jsx("div",{className:"text-[9px] text-[#5ab8cc] text-center py-4",children:"Nothing stored yet."}):t.map((f,d)=>re.jsxs("div",{className:"flex items-center gap-2 py-1.5 px-2 rounded bg-[#010f18] border border-[#0d3347]",children:[re.jsxs("div",{className:"flex-1 min-w-0",children:[re.jsx("span",{className:"text-[8px] font-bold text-[#d8f8ff]",children:f.key.replace(/_/g," ")}),re.jsxs("span",{className:"text-[8px] text-[#5ab8cc] ml-1",children:["— ",f.value]})]}),re.jsx("span",{className:"text-[7px] px-1.5 py-0.5 rounded border shrink-0",style:{color:Jm[f.category]||"#5ab8cc",borderColor:Jm[f.category]||"#0d3347"},children:f.category.slice(0,4)}),re.jsx("span",{className:"text-[7px] text-[#3a8a9a] shrink-0",children:f.updated}),re.jsx("button",{onClick:()=>r(f.key,f.category),className:"w-5 h-5 flex items-center justify-center text-[8px] font-bold text-[#3a8a9a] border border-[#0d3347] rounded hover:text-[#ff3355] hover:border-[#ff3355] transition-all shrink-0",title:"Forget this",children:"✕"})]},d))}),re.jsx("button",{onClick:e,className:"w-full h-8 bg-transparent border border-[#0d3347] rounded text-[9px] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a] transition-all",children:"CLOSE"})]})]})}function u1({title:s,content:e,visible:t}){return t?re.jsxs("div",{className:"h-full overflow-y-auto bg-[#010d14] border border-[#0d3347] rounded p-3",children:[re.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[re.jsx("span",{className:"text-[8px] font-bold text-[#00d4ff]",children:"◈"}),re.jsx("span",{className:"text-[8px] font-bold text-[#00d4ff] uppercase",children:s})]}),re.jsx("div",{className:"h-px bg-[#0d3347] mb-2"}),re.jsx("div",{className:"text-[8px] text-[#8ffcff] leading-relaxed whitespace-pre-wrap",children:e})]}):null}function c1({open:s,onClose:e,onCommand:t}){const[r,a]=tt.useState(["╔══════════════════════════════════════════════════╗","║  W.E.BIG.A.I Terminal v1.0                      ║",'║  Type "help" for available commands              ║',"╚══════════════════════════════════════════════════╝",""]),[l,u]=tt.useState(""),[f,d]=tt.useState([]),[h,x]=tt.useState(-1),y=tt.useRef(null);if(tt.useEffect(()=>{var M;(M=y.current)==null||M.scrollIntoView({behavior:"smooth"})},[r]),!s)return null;const m=M=>{const S=[...r,`$ ${M}`];if(M.trim()&&(d(g=>[M,...g]),x(-1)),M==="help")S.push("Available commands:","  help        - Show this help","  clear       - Clear terminal","  status      - Show system status","  memory      - List stored memories","  theme <n>   - Switch theme (default/ironman/tron/matrix/cyberpunk)","  plugins     - List active plugins","  weather     - Show weather info","  time        - Show current time","  echo <msg>  - Echo a message","  calc <expr> - Calculate expression","  exit        - Close terminal","");else if(M==="clear"){a([]);return}else if(M==="exit"){e();return}else if(M==="status")S.push("System Status:",`  CPU: ${Math.round(Math.random()*40+15)}%`,`  Memory: ${Math.round(Math.random()*30+35)}%`,`  GPU: ${Math.round(Math.random()*50+10)}%`,`  Network: ${navigator.onLine?"Online":"Offline"}`,"  Battery: N/A","");else if(M==="time")S.push(`  ${new Date().toLocaleString()}`,"");else if(M.startsWith("echo "))S.push(`  ${M.slice(5)}`,"");else if(M.startsWith("calc "))try{const g=M.slice(5),p=Function(`"use strict"; return (${g})`)();S.push(`  = ${p}`,"")}catch{S.push("  Error: Invalid expression","")}else if(M==="plugins")S.push("Active Plugins:","  [✓] Calculator","  [✓] DateTime","  [✓] UUID Generator","  [✓] Base64 Encoder/Decoder","  [✓] Word Counter","");else if(M){const g=t(M);S.push(`  ${g}`,"")}a(S)},v=M=>{if(M.key==="Enter")m(l),u("");else if(M.key==="ArrowUp"){if(M.preventDefault(),f.length>0){const S=Math.min(h+1,f.length-1);x(S),u(f[S])}}else if(M.key==="ArrowDown")if(M.preventDefault(),h>0){const S=h-1;x(S),u(f[S])}else x(-1),u("")};return re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[re.jsx("div",{className:"absolute inset-0 bg-black/70",onClick:e}),re.jsxs("div",{className:"relative w-[700px] h-[500px] rounded-lg border border-[#1a5c7a] bg-[#00060a] flex flex-col overflow-hidden",children:[re.jsxs("div",{className:"h-8 flex items-center justify-between px-3 bg-[#010d14] border-b border-[#0d3347]",children:[re.jsx("span",{className:"text-[9px] font-bold text-[#00d4ff]",children:"◈ TERMINAL"}),re.jsx("button",{onClick:e,className:"text-[8px] text-[#3a8a9a] hover:text-[#ff3355]",children:"✕ CLOSE"})]}),re.jsxs("div",{className:"flex-1 overflow-y-auto p-3 font-mono text-[10px] leading-relaxed",children:[r.map((M,S)=>re.jsx("div",{className:`${M.startsWith("$")?"text-[#00ff88]":"text-[#8ffcff]"}`,children:M||" "},S)),re.jsx("div",{ref:y})]}),re.jsxs("div",{className:"p-2 border-t border-[#0d3347] flex items-center gap-2",children:[re.jsx("span",{className:"text-[10px] text-[#00ff88] font-mono",children:"$"}),re.jsx("input",{type:"text",value:l,onChange:M=>u(M.target.value),onKeyDown:v,className:"flex-1 bg-transparent text-[10px] text-[#8ffcff] font-mono outline-none",autoFocus:!0,spellCheck:!1})]})]})]})}function f1({open:s,onClose:e,commands:t}){const[r,a]=tt.useState(""),[l,u]=tt.useState(0),f=tt.useRef(null),d=t.filter(x=>x.label.toLowerCase().includes(r.toLowerCase())||x.description.toLowerCase().includes(r.toLowerCase()));if(tt.useEffect(()=>{s&&(a(""),u(0),setTimeout(()=>{var x;return(x=f.current)==null?void 0:x.focus()},50))},[s]),tt.useEffect(()=>{u(0)},[r]),!s)return null;const h=x=>{x.key==="Escape"?e():x.key==="ArrowDown"?(x.preventDefault(),u(y=>Math.min(y+1,d.length-1))):x.key==="ArrowUp"?(x.preventDefault(),u(y=>Math.max(y-1,0))):x.key==="Enter"&&d[l]&&(d[l].action(),e())};return re.jsxs("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[15vh]",children:[re.jsx("div",{className:"absolute inset-0 bg-black/60",onClick:e}),re.jsxs("div",{className:"relative w-[560px] max-h-[400px] rounded-lg border border-[#1a5c7a] bg-[#010d14] overflow-hidden shadow-2xl",children:[re.jsx("div",{className:"p-3 border-b border-[#0d3347]",children:re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-[#00d4ff]",children:"◈"}),re.jsx("input",{ref:f,type:"text",value:r,onChange:x=>a(x.target.value),onKeyDown:h,placeholder:"Type a command...",className:"flex-1 bg-transparent text-[11px] text-[#8ffcff] outline-none placeholder:text-[#3a8a9a]"}),re.jsx("span",{className:"text-[8px] text-[#3a8a9a]",children:"ESC to close"})]})}),re.jsx("div",{className:"overflow-y-auto max-h-[320px]",children:d.length===0?re.jsx("div",{className:"p-4 text-center text-[9px] text-[#3a8a9a]",children:"No commands found"}):d.map((x,y)=>re.jsxs("button",{onClick:()=>{x.action(),e()},onMouseEnter:()=>u(y),className:`w-full px-4 py-2.5 flex items-center justify-between text-left transition-all ${y===l?"bg-[#001f2e]":"hover:bg-[#010f18]"}`,children:[re.jsxs("div",{children:[re.jsx("div",{className:"text-[10px] text-[#d8f8ff]",children:x.label}),re.jsx("div",{className:"text-[8px] text-[#3a8a9a]",children:x.description})]}),x.shortcut&&re.jsx("span",{className:"text-[7px] text-[#5ab8cc] bg-[#000d14] px-2 py-0.5 rounded border border-[#0d3347]",children:x.shortcut})]},x.id))})]})]})}const Wg=new Map;function to(s){Wg.set(s.id,s)}function d1(){return Array.from(Wg.values())}to({id:"calculator",name:"Calculator",description:"Evaluate mathematical expressions",execute:async s=>{try{const e=s.input.replace(/[^0-9+\-*/().%\s]/g,"");return`Result: ${Function(`"use strict"; return (${e})`)()}`}catch{return"Error: Invalid expression"}}});to({id:"datetime",name:"DateTime",description:"Get current date and time information",execute:async()=>`Current time: ${new Date().toLocaleString()}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`});to({id:"uuid",name:"UUID Generator",description:"Generate unique identifiers",execute:async()=>crypto.randomUUID()});to({id:"base64",name:"Base64 Encoder/Decoder",description:"Encode or decode Base64 strings",execute:async s=>{const e=s.input;if(e.startsWith("decode:"))try{return atob(e.slice(7))}catch{return"Error: Invalid Base64"}return btoa(e)}});to({id:"wordcount",name:"Word Counter",description:"Count words, characters, and lines",execute:async s=>{const e=s.input,t=e.trim().split(/\s+/).filter(l=>l.length>0).length,r=e.length,a=e.split(`
`).length;return`Words: ${t}
Characters: ${r}
Lines: ${a}`}});const h1=new Map;async function p1(s){const e=[];for(const t of h1.values())t.enabled&&s.toLowerCase().includes(t.trigger.toLowerCase())&&e.push(`[${t.name}] ${t.action}`);return e}async function m1(s,e="javascript"){if(e==="javascript")try{const t=[],r={log:(...d)=>t.push(d.map(String).join(" ")),error:(...d)=>t.push("ERROR: "+d.map(String).join(" ")),warn:(...d)=>t.push("WARN: "+d.map(String).join(" "))},l=new Function("console",`"use strict"; ${s}`)(r),u=t.length>0?t.join(`
`):"",f=l!==void 0?`
→ ${JSON.stringify(l)}`:"";return u+f||"Code executed successfully (no output)"}catch(t){return`Error: ${t.message}`}else if(e==="python")return"Python execution requires a backend service. Use JavaScript for client-side execution.";return`Language "${e}" is not supported for client-side execution.`}function g1({open:s,onClose:e}){const[t,r]=tt.useState(`// Write JavaScript here
const greeting = "Hello from WEAID!";
console.log(greeting);

// Try some math
const result = 2 + 2;
console.log(\`2 + 2 = \${result}\`);

// Return a value
return { success: true, result };`),[a,l]=tt.useState(""),[u,f]=tt.useState("javascript"),[d,h]=tt.useState(!1);if(!s)return null;const x=async()=>{h(!0),l("Executing...");try{const m=await m1(t,u);l(m)}catch(m){l(`Error: ${m.message}`)}h(!1)},y={fibonacci:`// Fibonacci sequence
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fib(i)}\`);
}`,arrayOps:`// Array operations
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(n => n % 2 === 0);
console.log('Even:', even);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log('Sum:', sum);

const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);`,async:`// Async simulation
async function fetchData() {
  console.log('Fetching data...');
  await new Promise(r => setTimeout(r, 1000));
  return { name: 'WEAID', status: 'active' };
}

const data = await fetchData();
console.log('Data:', JSON.stringify(data));`};return re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[re.jsx("div",{className:"absolute inset-0 bg-black/70",onClick:e}),re.jsxs("div",{className:"relative w-[800px] h-[600px] rounded-lg border border-[#1a5c7a] bg-[#00060a] flex flex-col overflow-hidden",children:[re.jsxs("div",{className:"h-10 flex items-center justify-between px-3 bg-[#010d14] border-b border-[#0d3347]",children:[re.jsxs("div",{className:"flex items-center gap-3",children:[re.jsx("span",{className:"text-[9px] font-bold text-[#00d4ff]",children:"◈ CODE EDITOR"}),re.jsxs("select",{value:u,onChange:m=>f(m.target.value),className:"bg-[#000d12] border border-[#0d3347] rounded px-2 py-0.5 text-[8px] text-[#8ffcff] outline-none",children:[re.jsx("option",{value:"javascript",children:"JavaScript"}),re.jsx("option",{value:"python",children:"Python (info)"})]})]}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsxs("select",{onChange:m=>{m.target.value&&y[m.target.value]&&r(y[m.target.value]),m.target.value=""},className:"bg-[#000d12] border border-[#0d3347] rounded px-2 py-0.5 text-[8px] text-[#5ab8cc] outline-none",defaultValue:"",children:[re.jsx("option",{value:"",disabled:!0,children:"Examples..."}),re.jsx("option",{value:"fibonacci",children:"Fibonacci"}),re.jsx("option",{value:"arrayOps",children:"Array Ops"}),re.jsx("option",{value:"async",children:"Async"})]}),re.jsx("button",{onClick:x,disabled:d,className:"px-3 py-1 bg-[#001f2e] border border-[#00d4ff] rounded text-[8px] font-bold text-[#00d4ff] hover:bg-[#002f3e] disabled:opacity-50 transition-all",children:d?"⏳ RUNNING...":"▶ RUN"}),re.jsx("button",{onClick:e,className:"text-[8px] text-[#3a8a9a] hover:text-[#ff3355]",children:"✕ CLOSE"})]})]}),re.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[re.jsxs("div",{className:"flex-1 flex flex-col border-r border-[#0d3347]",children:[re.jsx("div",{className:"h-6 px-3 flex items-center bg-[#010d14] border-b border-[#0d3347]",children:re.jsx("span",{className:"text-[7px] text-[#3a8a9a]",children:"EDITOR"})}),re.jsx("textarea",{value:t,onChange:m=>r(m.target.value),className:"flex-1 bg-[#00060a] text-[10px] text-[#8ffcff] font-mono p-3 resize-none outline-none leading-relaxed",spellCheck:!1,style:{tabSize:2}})]}),re.jsxs("div",{className:"w-[300px] flex flex-col",children:[re.jsx("div",{className:"h-6 px-3 flex items-center bg-[#010d14] border-b border-[#0d3347]",children:re.jsx("span",{className:"text-[7px] text-[#3a8a9a]",children:"OUTPUT"})}),re.jsx("div",{className:"flex-1 overflow-y-auto p-3 font-mono text-[9px] text-[#00ff88] leading-relaxed whitespace-pre-wrap bg-[#00060a]",children:a||"Click RUN to execute code..."})]})]})]})]})}class _1{constructor(){this.audioContext=null,this.analyser=null,this.source=null,this.stream=null,this.dataArray=new Uint8Array(0),this._isActive=!1}get isActive(){return this._isActive}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.audioContext=new AudioContext,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,this.source=this.audioContext.createMediaStreamSource(this.stream),this.source.connect(this.analyser),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this._isActive=!0}catch(e){console.error("Audio start failed:",e),this._isActive=!1}}stop(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.source&&(this.source.disconnect(),this.source=null),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.analyser=null,this._isActive=!1}getLevel(){if(!this.analyser||!this._isActive)return 0;this.analyser.getByteFrequencyData(this.dataArray);let e=0;for(let r=0;r<this.dataArray.length;r++)e+=this.dataArray[r];const t=e/this.dataArray.length;return Math.min(1,t/128)}getFrequencyData(){return!this.analyser||!this._isActive?[]:(this.analyser.getByteFrequencyData(this.dataArray),Array.from(this.dataArray))}getTimeDomainData(){if(!this.analyser||!this._isActive)return[];const e=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteTimeDomainData(e),Array.from(e)}}class v1{constructor(){this.recognition=null,this.synthesis=window.speechSynthesis,this._isListening=!1,this._isSpeaking=!1,this.onResultCallback=null,this.onErrorCallback=null,this.selectedVoice=null,this.rate=1,this.pitch=1}get isListening(){return this._isListening}get isSpeaking(){return this._isSpeaking}getVoices(){return this.synthesis.getVoices()}setVoice(e){this.selectedVoice=e}setRate(e){this.rate=e}setPitch(e){this.pitch=e}onResult(e){this.onResultCallback=e}onError(e){this.onErrorCallback=e}startListening(e="en-US"){var r,a;if(this._isListening)return;const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){(r=this.onErrorCallback)==null||r.call(this,"Speech recognition not supported");return}this.recognition=new t,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.lang=e,this.recognition.onresult=l=>{var u;for(let f=l.resultIndex;f<l.results.length;f++){const d=l.results[f][0].transcript,h=l.results[f].isFinal;(u=this.onResultCallback)==null||u.call(this,d,h)}},this.recognition.onerror=l=>{var u;(u=this.onErrorCallback)==null||u.call(this,l.error),l.error!=="no-speech"&&(this._isListening=!1)},this.recognition.onend=()=>{if(this._isListening)try{this.recognition.start()}catch{}};try{this.recognition.start(),this._isListening=!0}catch{(a=this.onErrorCallback)==null||a.call(this,"Failed to start recognition")}}stopListening(){if(this._isListening=!1,this.recognition){try{this.recognition.stop()}catch{}this.recognition=null}}speak(e){return new Promise(t=>{this._isSpeaking&&this.synthesis.cancel();const r=new SpeechSynthesisUtterance(e);this.selectedVoice&&(r.voice=this.selectedVoice),r.rate=this.rate,r.pitch=this.pitch,r.onstart=()=>{this._isSpeaking=!0},r.onend=()=>{this._isSpeaking=!1,t()},r.onerror=()=>{this._isSpeaking=!1,t()},this.synthesis.speak(r)})}cancelSpeech(){this.synthesis.cancel(),this._isSpeaking=!1}}const za=new _1,Dl=new v1,x1="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";let Ed="",Zr=[];function y1(s){Ed=s}function gf(){return Ed}async function Qm(s,e,t){var l,u,f,d,h,x;const r=Ed;if(!r)throw new Error("API key not set. Please configure your Gemini API key in Settings.");const a="You are WEAID, a highly capable AI assistant displayed on a futuristic HUD interface. Be concise, direct, and helpful. Use technical language when appropriate. Keep responses under 200 words unless asked for detail.";Zr.push({role:"user",parts:[{text:s}]}),Zr.length>20&&(Zr=Zr.slice(-20));try{const y=await fetch(`${x1}?key=${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:Zr,systemInstruction:{parts:[{text:a}]},generationConfig:{temperature:(e==null?void 0:e.temperature)??.7,maxOutputTokens:(e==null?void 0:e.maxTokens)??1024}})});if(!y.ok){const M=await y.json();throw new Error(((l=M.error)==null?void 0:l.message)||`API error: ${y.status}`)}const v=((x=(h=(d=(f=(u=(await y.json()).candidates)==null?void 0:u[0])==null?void 0:f.content)==null?void 0:d.parts)==null?void 0:h[0])==null?void 0:x.text)||"No response generated.";return Zr.push({role:"model",parts:[{text:v}]}),v}catch(y){throw Zr.pop(),y}}const S1={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Depositing rime fog",51:"Light drizzle",53:"Moderate drizzle",55:"Dense drizzle",61:"Slight rain",63:"Moderate rain",65:"Heavy rain",71:"Slight snow",73:"Moderate snow",75:"Heavy snow",80:"Slight rain showers",81:"Moderate rain showers",82:"Violent rain showers",95:"Thunderstorm",96:"Thunderstorm with slight hail",99:"Thunderstorm with heavy hail"};async function M1(s,e,t="Unknown"){var r,a;try{const l=`https://api.open-meteo.com/v1/forecast?latitude=${s}&longitude=${e}&current_weather=true&hourly=relativehumidity_2m`,f=await(await fetch(l)).json(),d=f.current_weather;return{temperature:d.temperature,humidity:((a=(r=f.hourly)==null?void 0:r.relativehumidity_2m)==null?void 0:a[0])??50,windspeed:d.windspeed,description:S1[d.weathercode]||"Unknown",city:t,icon:E1(d.weathercode)}}catch{return{temperature:0,humidity:0,windspeed:0,description:"Unavailable",city:t,icon:"❓"}}}function E1(s){return s===0||s===1?"☀️":s===2?"⛅":s===3?"☁️":s>=45&&s<=48?"🌫️":s>=51&&s<=67?"🌧️":s>=71&&s<=77?"🌨️":s>=80&&s<=82?"🌦️":s>=95?"⛈️":"🌤️"}async function w1(s){var e;try{const r=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(s)}&count=1`)).json();if(!((e=r.results)!=null&&e.length))return{temperature:0,humidity:0,windspeed:0,description:"City not found",city:s,icon:"❓"};const{latitude:a,longitude:l,name:u}=r.results[0];return M1(a,l,u)}catch{return{temperature:0,humidity:0,windspeed:0,description:"Error",city:s,icon:"❓"}}}async function T1(s){try{const t=await(await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(s)}&format=json&no_html=1`)).json(),r=[];if(t.Abstract&&r.push({title:t.Heading||s,url:t.AbstractURL||"",snippet:t.Abstract}),t.RelatedTopics)for(const a of t.RelatedTopics.slice(0,5))a.Text&&a.FirstURL&&r.push({title:a.Text.split(" - ")[0]||a.Text.slice(0,60),url:a.FirstURL,snippet:a.Text});return r}catch{return[]}}async function eg(){const s=navigator;let e=null,t=null;try{if(s.getBattery){const f=await s.getBattery();e=Math.round(f.level*100),t=f.charging}}catch{}let r=0,a=0,l=0;if(s.deviceMemory){l=s.deviceMemory*1024;const f=performance;f.memory&&(a=Math.round(f.memory.usedJSHeapSize/1024/1024),r=Math.round(a/l*100))}const u=s.connection||s.mozConnection||s.webkitConnection;return{cpu:Math.round(Math.random()*30+10),memory:r,memoryUsed:a,memoryTotal:l,battery:e,batteryCharging:t,online:navigator.onLine,connectionType:(u==null?void 0:u.effectiveType)||"unknown",downlink:(u==null?void 0:u.downlink)||0}}function Ll(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _f={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var tg;function b1(){return tg||(tg=1,(function(s,e){(function(t){s.exports=t()})(function(){return(function t(r,a,l){function u(h,x){if(!a[h]){if(!r[h]){var y=typeof Ll=="function"&&Ll;if(!x&&y)return y(h,!0);if(f)return f(h,!0);var m=new Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m}var v=a[h]={exports:{}};r[h][0].call(v.exports,function(M){var S=r[h][1][M];return u(S||M)},v,v.exports,t,r,a,l)}return a[h].exports}for(var f=typeof Ll=="function"&&Ll,d=0;d<l.length;d++)u(l[d]);return u})({1:[function(t,r,a){var l=t("./utils"),u=t("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(d){for(var h,x,y,m,v,M,S,g=[],p=0,T=d.length,I=T,R=l.getTypeOf(d)!=="string";p<d.length;)I=T-p,y=R?(h=d[p++],x=p<T?d[p++]:0,p<T?d[p++]:0):(h=d.charCodeAt(p++),x=p<T?d.charCodeAt(p++):0,p<T?d.charCodeAt(p++):0),m=h>>2,v=(3&h)<<4|x>>4,M=1<I?(15&x)<<2|y>>6:64,S=2<I?63&y:64,g.push(f.charAt(m)+f.charAt(v)+f.charAt(M)+f.charAt(S));return g.join("")},a.decode=function(d){var h,x,y,m,v,M,S=0,g=0,p="data:";if(d.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var T,I=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===f.charAt(64)&&I--,d.charAt(d.length-2)===f.charAt(64)&&I--,I%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=u.uint8array?new Uint8Array(0|I):new Array(0|I);S<d.length;)h=f.indexOf(d.charAt(S++))<<2|(m=f.indexOf(d.charAt(S++)))>>4,x=(15&m)<<4|(v=f.indexOf(d.charAt(S++)))>>2,y=(3&v)<<6|(M=f.indexOf(d.charAt(S++))),T[g++]=h,v!==64&&(T[g++]=x),M!==64&&(T[g++]=y);return T}},{"./support":30,"./utils":32}],2:[function(t,r,a){var l=t("./external"),u=t("./stream/DataWorker"),f=t("./stream/Crc32Probe"),d=t("./stream/DataLengthProbe");function h(x,y,m,v,M){this.compressedSize=x,this.uncompressedSize=y,this.crc32=m,this.compression=v,this.compressedContent=M}h.prototype={getContentWorker:function(){var x=new u(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),y=this;return x.on("end",function(){if(this.streamInfo.data_length!==y.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),x},getCompressedWorker:function(){return new u(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(x,y,m){return x.pipe(new f).pipe(new d("uncompressedSize")).pipe(y.compressWorker(m)).pipe(new d("compressedSize")).withStreamInfo("compression",y)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,r,a){var l=t("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},a.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,r,a){var l=t("./utils"),u=(function(){for(var f,d=[],h=0;h<256;h++){f=h;for(var x=0;x<8;x++)f=1&f?3988292384^f>>>1:f>>>1;d[h]=f}return d})();r.exports=function(f,d){return f!==void 0&&f.length?l.getTypeOf(f)!=="string"?(function(h,x,y,m){var v=u,M=m+y;h^=-1;for(var S=m;S<M;S++)h=h>>>8^v[255&(h^x[S])];return-1^h})(0|d,f,f.length,0):(function(h,x,y,m){var v=u,M=m+y;h^=-1;for(var S=m;S<M;S++)h=h>>>8^v[255&(h^x.charCodeAt(S))];return-1^h})(0|d,f,f.length,0):0}},{"./utils":32}],5:[function(t,r,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(t,r,a){var l=null;l=typeof Promise<"u"?Promise:t("lie"),r.exports={Promise:l}},{lie:37}],7:[function(t,r,a){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",u=t("pako"),f=t("./utils"),d=t("./stream/GenericWorker"),h=l?"uint8array":"array";function x(y,m){d.call(this,"FlateWorker/"+y),this._pako=null,this._pakoAction=y,this._pakoOptions=m,this.meta={}}a.magic="\b\0",f.inherits(x,d),x.prototype.processChunk=function(y){this.meta=y.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(h,y.data),!1)},x.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},x.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},x.prototype._createPako=function(){this._pako=new u[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var y=this;this._pako.onData=function(m){y.push({data:m,meta:y.meta})}},a.compressWorker=function(y){return new x("Deflate",y)},a.uncompressWorker=function(){return new x("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,r,a){function l(v,M){var S,g="";for(S=0;S<M;S++)g+=String.fromCharCode(255&v),v>>>=8;return g}function u(v,M,S,g,p,T){var I,R,P=v.file,U=v.compression,O=T!==h.utf8encode,A=f.transformTo("string",T(P.name)),D=f.transformTo("string",h.utf8encode(P.name)),W=P.comment,Z=f.transformTo("string",T(W)),F=f.transformTo("string",h.utf8encode(W)),j=D.length!==P.name.length,w=F.length!==W.length,Y="",le="",q="",J=P.dir,H=P.date,K={crc32:0,compressedSize:0,uncompressedSize:0};M&&!S||(K.crc32=v.crc32,K.compressedSize=v.compressedSize,K.uncompressedSize=v.uncompressedSize);var N=0;M&&(N|=8),O||!j&&!w||(N|=2048);var z=0,_e=0;J&&(z|=16),p==="UNIX"?(_e=798,z|=(function(ge,ze){var ue=ge;return ge||(ue=ze?16893:33204),(65535&ue)<<16})(P.unixPermissions,J)):(_e=20,z|=(function(ge){return 63&(ge||0)})(P.dosPermissions)),I=H.getUTCHours(),I<<=6,I|=H.getUTCMinutes(),I<<=5,I|=H.getUTCSeconds()/2,R=H.getUTCFullYear()-1980,R<<=4,R|=H.getUTCMonth()+1,R<<=5,R|=H.getUTCDate(),j&&(le=l(1,1)+l(x(A),4)+D,Y+="up"+l(le.length,2)+le),w&&(q=l(1,1)+l(x(Z),4)+F,Y+="uc"+l(q.length,2)+q);var Ee="";return Ee+=`
\0`,Ee+=l(N,2),Ee+=U.magic,Ee+=l(I,2),Ee+=l(R,2),Ee+=l(K.crc32,4),Ee+=l(K.compressedSize,4),Ee+=l(K.uncompressedSize,4),Ee+=l(A.length,2),Ee+=l(Y.length,2),{fileRecord:y.LOCAL_FILE_HEADER+Ee+A+Y,dirRecord:y.CENTRAL_FILE_HEADER+l(_e,2)+Ee+l(Z.length,2)+"\0\0\0\0"+l(z,4)+l(g,4)+A+Y+Z}}var f=t("../utils"),d=t("../stream/GenericWorker"),h=t("../utf8"),x=t("../crc32"),y=t("../signature");function m(v,M,S,g){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=M,this.zipPlatform=S,this.encodeFileName=g,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(m,d),m.prototype.push=function(v){var M=v.meta.percent||0,S=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,d.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:S?(M+100*(S-g-1))/S:100}}))},m.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var M=this.streamFiles&&!v.file.dir;if(M){var S=u(v,M,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:S.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(v){this.accumulate=!1;var M=this.streamFiles&&!v.file.dir,S=u(v,M,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(S.dirRecord),M)this.push({data:(function(g){return y.DATA_DESCRIPTOR+l(g.crc32,4)+l(g.compressedSize,4)+l(g.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:S.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var v=this.bytesWritten,M=0;M<this.dirRecords.length;M++)this.push({data:this.dirRecords[M],meta:{percent:100}});var S=this.bytesWritten-v,g=(function(p,T,I,R,P){var U=f.transformTo("string",P(R));return y.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(p,2)+l(p,2)+l(T,4)+l(I,4)+l(U.length,2)+U})(this.dirRecords.length,S,v,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(v){this._sources.push(v);var M=this;return v.on("data",function(S){M.processChunk(S)}),v.on("end",function(){M.closedSource(M.previous.streamInfo),M._sources.length?M.prepareNextSource():M.end()}),v.on("error",function(S){M.error(S)}),this},m.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(v){var M=this._sources;if(!d.prototype.error.call(this,v))return!1;for(var S=0;S<M.length;S++)try{M[S].error(v)}catch{}return!0},m.prototype.lock=function(){d.prototype.lock.call(this);for(var v=this._sources,M=0;M<v.length;M++)v[M].lock()},r.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,r,a){var l=t("../compressions"),u=t("./ZipFileWorker");a.generateWorker=function(f,d,h){var x=new u(d.streamFiles,h,d.platform,d.encodeFileName),y=0;try{f.forEach(function(m,v){y++;var M=(function(T,I){var R=T||I,P=l[R];if(!P)throw new Error(R+" is not a valid compression method !");return P})(v.options.compression,d.compression),S=v.options.compressionOptions||d.compressionOptions||{},g=v.dir,p=v.date;v._compressWorker(M,S).withStreamInfo("file",{name:m,dir:g,date:p,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(x)}),x.entriesCount=y}catch(m){x.error(m)}return x}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,r,a){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var u=new l;for(var f in this)typeof this[f]!="function"&&(u[f]=this[f]);return u}}(l.prototype=t("./object")).loadAsync=t("./load"),l.support=t("./support"),l.defaults=t("./defaults"),l.version="3.10.2",l.loadAsync=function(u,f){return new l().loadAsync(u,f)},l.external=t("./external"),r.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,r,a){var l=t("./utils"),u=t("./external"),f=t("./utf8"),d=t("./zipEntries"),h=t("./stream/Crc32Probe"),x=t("./nodejsUtils");function y(m){return new u.Promise(function(v,M){var S=m.decompressed.getContentWorker().pipe(new h);S.on("error",function(g){M(g)}).on("end",function(){S.streamInfo.crc32!==m.decompressed.crc32?M(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(m,v){var M=this;return v=l.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),x.isNode&&x.isStream(m)?u.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",m,!0,v.optimizedBinaryString,v.base64).then(function(S){var g=new d(v);return g.load(S),g}).then(function(S){var g=[u.Promise.resolve(S)],p=S.files;if(v.checkCRC32)for(var T=0;T<p.length;T++)g.push(y(p[T]));return u.Promise.all(g)}).then(function(S){for(var g=S.shift(),p=g.files,T=0;T<p.length;T++){var I=p[T],R=I.fileNameStr,P=l.resolve(I.fileNameStr);M.file(P,I.decompressed,{binary:!0,optimizedBinaryString:!0,date:I.date,dir:I.dir,comment:I.fileCommentStr.length?I.fileCommentStr:null,unixPermissions:I.unixPermissions,dosPermissions:I.dosPermissions,createFolders:v.createFolders}),I.dir||(M.file(P).unsafeOriginalName=R)}return g.zipComment.length&&(M.comment=g.zipComment),M})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,r,a){var l=t("../utils"),u=t("../stream/GenericWorker");function f(d,h){u.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(h)}l.inherits(f,u),f.prototype._bindStream=function(d){var h=this;(this._stream=d).pause(),d.on("data",function(x){h.push({data:x,meta:{percent:0}})}).on("error",function(x){h.isPaused?this.generatedError=x:h.error(x)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},f.prototype.pause=function(){return!!u.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,r,a){var l=t("readable-stream").Readable;function u(f,d,h){l.call(this,d),this._helper=f;var x=this;f.on("data",function(y,m){x.push(y)||x._helper.pause(),h&&h(m)}).on("error",function(y){x.emit("error",y)}).on("end",function(){x.push(null)})}t("../utils").inherits(u,l),u.prototype._read=function(){this._helper.resume()},r.exports=u},{"../utils":32,"readable-stream":16}],14:[function(t,r,a){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,u){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,u);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,u)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var u=new Buffer(l);return u.fill(0),u},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(t,r,a){function l(P,U,O){var A,D=f.getTypeOf(U),W=f.extend(O||{},x);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(P=p(P)),W.createFolders&&(A=g(P))&&T.call(this,A,!0);var Z=D==="string"&&W.binary===!1&&W.base64===!1;O&&O.binary!==void 0||(W.binary=!Z),(U instanceof y&&U.uncompressedSize===0||W.dir||!U||U.length===0)&&(W.base64=!1,W.binary=!0,U="",W.compression="STORE",D="string");var F=null;F=U instanceof y||U instanceof d?U:M.isNode&&M.isStream(U)?new S(P,U):f.prepareContent(P,U,W.binary,W.optimizedBinaryString,W.base64);var j=new m(P,F,W);this.files[P]=j}var u=t("./utf8"),f=t("./utils"),d=t("./stream/GenericWorker"),h=t("./stream/StreamHelper"),x=t("./defaults"),y=t("./compressedObject"),m=t("./zipObject"),v=t("./generate"),M=t("./nodejsUtils"),S=t("./nodejs/NodejsStreamInputAdapter"),g=function(P){P.slice(-1)==="/"&&(P=P.substring(0,P.length-1));var U=P.lastIndexOf("/");return 0<U?P.substring(0,U):""},p=function(P){return P.slice(-1)!=="/"&&(P+="/"),P},T=function(P,U){return U=U!==void 0?U:x.createFolders,P=p(P),this.files[P]||l.call(this,P,null,{dir:!0,createFolders:U}),this.files[P]};function I(P){return Object.prototype.toString.call(P)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(P){var U,O,A;for(U in this.files)A=this.files[U],(O=U.slice(this.root.length,U.length))&&U.slice(0,this.root.length)===this.root&&P(O,A)},filter:function(P){var U=[];return this.forEach(function(O,A){P(O,A)&&U.push(A)}),U},file:function(P,U,O){if(arguments.length!==1)return P=this.root+P,l.call(this,P,U,O),this;if(I(P)){var A=P;return this.filter(function(W,Z){return!Z.dir&&A.test(W)})}var D=this.files[this.root+P];return D&&!D.dir?D:null},folder:function(P){if(!P)return this;if(I(P))return this.filter(function(D,W){return W.dir&&P.test(D)});var U=this.root+P,O=T.call(this,U),A=this.clone();return A.root=O.name,A},remove:function(P){P=this.root+P;var U=this.files[P];if(U||(P.slice(-1)!=="/"&&(P+="/"),U=this.files[P]),U&&!U.dir)delete this.files[P];else for(var O=this.filter(function(D,W){return W.name.slice(0,P.length)===P}),A=0;A<O.length;A++)delete this.files[O[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(P){var U,O={};try{if((O=f.extend(P||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:u.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");f.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var A=O.comment||this.comment||"";U=v.generateWorker(this,O,A)}catch(D){(U=new d("error")).error(D)}return new h(U,O.type||"string",O.mimeType)},generateAsync:function(P,U){return this.generateInternalStream(P).accumulate(U)},generateNodeStream:function(P,U){return(P=P||{}).type||(P.type="nodebuffer"),this.generateInternalStream(P).toNodejsStream(U)}};r.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,r,a){r.exports=t("stream")},{stream:void 0}],17:[function(t,r,a){var l=t("./DataReader");function u(f){l.call(this,f);for(var d=0;d<this.data.length;d++)f[d]=255&f[d]}t("../utils").inherits(u,l),u.prototype.byteAt=function(f){return this.data[this.zero+f]},u.prototype.lastIndexOfSignature=function(f){for(var d=f.charCodeAt(0),h=f.charCodeAt(1),x=f.charCodeAt(2),y=f.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===d&&this.data[m+1]===h&&this.data[m+2]===x&&this.data[m+3]===y)return m-this.zero;return-1},u.prototype.readAndCheckSignature=function(f){var d=f.charCodeAt(0),h=f.charCodeAt(1),x=f.charCodeAt(2),y=f.charCodeAt(3),m=this.readData(4);return d===m[0]&&h===m[1]&&x===m[2]&&y===m[3]},u.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=u},{"../utils":32,"./DataReader":18}],18:[function(t,r,a){var l=t("../utils");function u(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}u.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var d,h=0;for(this.checkOffset(f),d=this.index+f-1;d>=this.index;d--)h=(h<<8)+this.byteAt(d);return this.index+=f,h},readString:function(f){return l.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},r.exports=u},{"../utils":32}],19:[function(t,r,a){var l=t("./Uint8ArrayReader");function u(f){l.call(this,f)}t("../utils").inherits(u,l),u.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=u},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,r,a){var l=t("./DataReader");function u(f){l.call(this,f)}t("../utils").inherits(u,l),u.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},u.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},u.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},u.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=u},{"../utils":32,"./DataReader":18}],21:[function(t,r,a){var l=t("./ArrayReader");function u(f){l.call(this,f)}t("../utils").inherits(u,l),u.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=u},{"../utils":32,"./ArrayReader":17}],22:[function(t,r,a){var l=t("../utils"),u=t("../support"),f=t("./ArrayReader"),d=t("./StringReader"),h=t("./NodeBufferReader"),x=t("./Uint8ArrayReader");r.exports=function(y){var m=l.getTypeOf(y);return l.checkSupport(m),m!=="string"||u.uint8array?m==="nodebuffer"?new h(y):u.uint8array?new x(l.transformTo("uint8array",y)):new f(l.transformTo("array",y)):new d(y)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,r,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,r,a){var l=t("./GenericWorker"),u=t("../utils");function f(d){l.call(this,"ConvertWorker to "+d),this.destType=d}u.inherits(f,l),f.prototype.processChunk=function(d){this.push({data:u.transformTo(this.destType,d.data),meta:d.meta})},r.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(t,r,a){var l=t("./GenericWorker"),u=t("../crc32");function f(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(f,l),f.prototype.processChunk=function(d){this.streamInfo.crc32=u(d.data,this.streamInfo.crc32||0),this.push(d)},r.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,r,a){var l=t("../utils"),u=t("./GenericWorker");function f(d){u.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}l.inherits(f,u),f.prototype.processChunk=function(d){if(d){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+d.data.length}u.prototype.processChunk.call(this,d)},r.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(t,r,a){var l=t("../utils"),u=t("./GenericWorker");function f(d){u.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(x){h.dataIsReady=!0,h.data=x,h.max=x&&x.length||0,h.type=l.getTypeOf(x),h.isPaused||h._tickAndRepeat()},function(x){h.error(x)})}l.inherits(f,u),f.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,h);break;case"uint8array":d=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":d=this.data.slice(this.index,h)}return this.index=h,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(t,r,a){function l(u){this.name=u||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(u){this.emit("data",u)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(u){this.emit("error",u)}return!0},error:function(u){return!this.isFinished&&(this.isPaused?this.generatedError=u:(this.isFinished=!0,this.emit("error",u),this.previous&&this.previous.error(u),this.cleanUp()),!0)},on:function(u,f){return this._listeners[u].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(u,f){if(this._listeners[u])for(var d=0;d<this._listeners[u].length;d++)this._listeners[u][d].call(this,f)},pipe:function(u){return u.registerPrevious(this)},registerPrevious:function(u){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=u.streamInfo,this.mergeStreamInfo(),this.previous=u;var f=this;return u.on("data",function(d){f.processChunk(d)}),u.on("end",function(){f.end()}),u.on("error",function(d){f.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var u=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),u=!0),this.previous&&this.previous.resume(),!u},flush:function(){},processChunk:function(u){this.push(u)},withStreamInfo:function(u,f){return this.extraStreamInfo[u]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var u in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,u)&&(this.streamInfo[u]=this.extraStreamInfo[u])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var u="Worker "+this.name;return this.previous?this.previous+" -> "+u:u}},r.exports=l},{}],29:[function(t,r,a){var l=t("../utils"),u=t("./ConvertWorker"),f=t("./GenericWorker"),d=t("../base64"),h=t("../support"),x=t("../external"),y=null;if(h.nodestream)try{y=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(M,S){return new x.Promise(function(g,p){var T=[],I=M._internalType,R=M._outputType,P=M._mimeType;M.on("data",function(U,O){T.push(U),S&&S(O)}).on("error",function(U){T=[],p(U)}).on("end",function(){try{var U=(function(O,A,D){switch(O){case"blob":return l.newBlob(l.transformTo("arraybuffer",A),D);case"base64":return d.encode(A);default:return l.transformTo(O,A)}})(R,(function(O,A){var D,W=0,Z=null,F=0;for(D=0;D<A.length;D++)F+=A[D].length;switch(O){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for(Z=new Uint8Array(F),D=0;D<A.length;D++)Z.set(A[D],W),W+=A[D].length;return Z;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+O+"'")}})(I,T),P);g(U)}catch(O){p(O)}T=[]}).resume()})}function v(M,S,g){var p=S;switch(S){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=S,this._mimeType=g,l.checkSupport(p),this._worker=M.pipe(new u(p)),M.lock()}catch(T){this._worker=new f("error"),this._worker.error(T)}}v.prototype={accumulate:function(M){return m(this,M)},on:function(M,S){var g=this;return M==="data"?this._worker.on(M,function(p){S.call(g,p.data,p.meta)}):this._worker.on(M,function(){l.delay(S,arguments,g)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(M){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new y(this,{objectMode:this._outputType!=="nodebuffer"},M)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,r,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var l=new ArrayBuffer(0);try{a.blob=new Blob([l],{type:"application/zip"}).size===0}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);u.append(l),a.blob=u.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!t("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(t,r,a){for(var l=t("./utils"),u=t("./support"),f=t("./nodejsUtils"),d=t("./stream/GenericWorker"),h=new Array(256),x=0;x<256;x++)h[x]=252<=x?6:248<=x?5:240<=x?4:224<=x?3:192<=x?2:1;h[254]=h[254]=1;function y(){d.call(this,"utf-8 decode"),this.leftOver=null}function m(){d.call(this,"utf-8 encode")}a.utf8encode=function(v){return u.nodebuffer?f.newBufferFrom(v,"utf-8"):(function(M){var S,g,p,T,I,R=M.length,P=0;for(T=0;T<R;T++)(64512&(g=M.charCodeAt(T)))==55296&&T+1<R&&(64512&(p=M.charCodeAt(T+1)))==56320&&(g=65536+(g-55296<<10)+(p-56320),T++),P+=g<128?1:g<2048?2:g<65536?3:4;for(S=u.uint8array?new Uint8Array(P):new Array(P),T=I=0;I<P;T++)(64512&(g=M.charCodeAt(T)))==55296&&T+1<R&&(64512&(p=M.charCodeAt(T+1)))==56320&&(g=65536+(g-55296<<10)+(p-56320),T++),g<128?S[I++]=g:(g<2048?S[I++]=192|g>>>6:(g<65536?S[I++]=224|g>>>12:(S[I++]=240|g>>>18,S[I++]=128|g>>>12&63),S[I++]=128|g>>>6&63),S[I++]=128|63&g);return S})(v)},a.utf8decode=function(v){return u.nodebuffer?l.transformTo("nodebuffer",v).toString("utf-8"):(function(M){var S,g,p,T,I=M.length,R=new Array(2*I);for(S=g=0;S<I;)if((p=M[S++])<128)R[g++]=p;else if(4<(T=h[p]))R[g++]=65533,S+=T-1;else{for(p&=T===2?31:T===3?15:7;1<T&&S<I;)p=p<<6|63&M[S++],T--;1<T?R[g++]=65533:p<65536?R[g++]=p:(p-=65536,R[g++]=55296|p>>10&1023,R[g++]=56320|1023&p)}return R.length!==g&&(R.subarray?R=R.subarray(0,g):R.length=g),l.applyFromCharCode(R)})(v=l.transformTo(u.uint8array?"uint8array":"array",v))},l.inherits(y,d),y.prototype.processChunk=function(v){var M=l.transformTo(u.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(u.uint8array){var S=M;(M=new Uint8Array(S.length+this.leftOver.length)).set(this.leftOver,0),M.set(S,this.leftOver.length)}else M=this.leftOver.concat(M);this.leftOver=null}var g=(function(T,I){var R;for((I=I||T.length)>T.length&&(I=T.length),R=I-1;0<=R&&(192&T[R])==128;)R--;return R<0||R===0?I:R+h[T[R]]>I?R:I})(M),p=M;g!==M.length&&(u.uint8array?(p=M.subarray(0,g),this.leftOver=M.subarray(g,M.length)):(p=M.slice(0,g),this.leftOver=M.slice(g,M.length))),this.push({data:a.utf8decode(p),meta:v.meta})},y.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=y,l.inherits(m,d),m.prototype.processChunk=function(v){this.push({data:a.utf8encode(v.data),meta:v.meta})},a.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,r,a){var l=t("./support"),u=t("./base64"),f=t("./nodejsUtils"),d=t("./external");function h(S){return S}function x(S,g){for(var p=0;p<S.length;++p)g[p]=255&S.charCodeAt(p);return g}t("setimmediate"),a.newBlob=function(S,g){a.checkSupport("blob");try{return new Blob([S],{type:g})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(S),p.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var y={stringifyByChunk:function(S,g,p){var T=[],I=0,R=S.length;if(R<=p)return String.fromCharCode.apply(null,S);for(;I<R;)g==="array"||g==="nodebuffer"?T.push(String.fromCharCode.apply(null,S.slice(I,Math.min(I+p,R)))):T.push(String.fromCharCode.apply(null,S.subarray(I,Math.min(I+p,R)))),I+=p;return T.join("")},stringifyByChar:function(S){for(var g="",p=0;p<S.length;p++)g+=String.fromCharCode(S[p]);return g},applyCanBeUsed:{uint8array:(function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function m(S){var g=65536,p=a.getTypeOf(S),T=!0;if(p==="uint8array"?T=y.applyCanBeUsed.uint8array:p==="nodebuffer"&&(T=y.applyCanBeUsed.nodebuffer),T)for(;1<g;)try{return y.stringifyByChunk(S,p,g)}catch{g=Math.floor(g/2)}return y.stringifyByChar(S)}function v(S,g){for(var p=0;p<S.length;p++)g[p]=S[p];return g}a.applyFromCharCode=m;var M={};M.string={string:h,array:function(S){return x(S,new Array(S.length))},arraybuffer:function(S){return M.string.uint8array(S).buffer},uint8array:function(S){return x(S,new Uint8Array(S.length))},nodebuffer:function(S){return x(S,f.allocBuffer(S.length))}},M.array={string:m,array:h,arraybuffer:function(S){return new Uint8Array(S).buffer},uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return f.newBufferFrom(S)}},M.arraybuffer={string:function(S){return m(new Uint8Array(S))},array:function(S){return v(new Uint8Array(S),new Array(S.byteLength))},arraybuffer:h,uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return f.newBufferFrom(new Uint8Array(S))}},M.uint8array={string:m,array:function(S){return v(S,new Array(S.length))},arraybuffer:function(S){return S.buffer},uint8array:h,nodebuffer:function(S){return f.newBufferFrom(S)}},M.nodebuffer={string:m,array:function(S){return v(S,new Array(S.length))},arraybuffer:function(S){return M.nodebuffer.uint8array(S).buffer},uint8array:function(S){return v(S,new Uint8Array(S.length))},nodebuffer:h},a.transformTo=function(S,g){if(g=g||"",!S)return g;a.checkSupport(S);var p=a.getTypeOf(g);return M[p][S](g)},a.resolve=function(S){for(var g=S.split("/"),p=[],T=0;T<g.length;T++){var I=g[T];I==="."||I===""&&T!==0&&T!==g.length-1||(I===".."?p.pop():p.push(I))}return p.join("/")},a.getTypeOf=function(S){if(typeof S=="string")return"string";var g=Object.prototype.toString.call(S);return g==="[object Array]"?"array":l.nodebuffer&&f.isBuffer(S)?"nodebuffer":l.uint8array&&g==="[object Uint8Array]"?"uint8array":l.arraybuffer&&g==="[object ArrayBuffer]"?"arraybuffer":void 0},a.checkSupport=function(S){if(!l[S.toLowerCase()])throw new Error(S+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(S){var g,p,T="";for(p=0;p<(S||"").length;p++)T+="\\x"+((g=S.charCodeAt(p))<16?"0":"")+g.toString(16).toUpperCase();return T},a.delay=function(S,g,p){setImmediate(function(){S.apply(p||null,g||[])})},a.inherits=function(S,g){function p(){}p.prototype=g.prototype,S.prototype=new p},a.extend=function(){var S,g,p={};for(S=0;S<arguments.length;S++)for(g in arguments[S])Object.prototype.hasOwnProperty.call(arguments[S],g)&&p[g]===void 0&&(p[g]=arguments[S][g]);return p},a.prepareContent=function(S,g,p,T,I){return d.Promise.resolve(g).then(function(R){return l.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)?Blob.prototype.arrayBuffer!==void 0?R.arrayBuffer():typeof FileReader<"u"?new d.Promise(function(P,U){var O=new FileReader;O.onload=function(A){P(A.target.result)},O.onerror=function(A){U(A.target.error)},O.readAsArrayBuffer(R)}):d.Promise.reject(new Error(S+" is a Blob, but we have no way of reading it.")):R}).then(function(R){var P=a.getTypeOf(R);return P?(P==="arraybuffer"?R=a.transformTo("uint8array",R):P==="string"&&(I?R=u.decode(R):p&&T!==!0&&(R=(function(U){return x(U,l.uint8array?new Uint8Array(U.length):new Array(U.length))})(R))),R):d.Promise.reject(new Error("Can't read the data of '"+S+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,r,a){var l=t("./reader/readerFor"),u=t("./utils"),f=t("./signature"),d=t("./zipEntry"),h=t("./support");function x(y){this.files=[],this.loadOptions=y}x.prototype={checkSignature:function(y){if(!this.reader.readAndCheckSignature(y)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+u.pretty(m)+", expected "+u.pretty(y)+")")}},isSignature:function(y,m){var v=this.reader.index;this.reader.setIndex(y);var M=this.reader.readString(4)===m;return this.reader.setIndex(v),M},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var y=this.reader.readData(this.zipCommentLength),m=h.uint8array?"uint8array":"array",v=u.transformTo(m,y);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var y,m,v,M=this.zip64EndOfCentralSize-44;0<M;)y=this.reader.readInt(2),m=this.reader.readInt(4),v=this.reader.readData(m),this.zip64ExtensibleData[y]={id:y,length:m,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var y,m;for(y=0;y<this.files.length;y++)m=this.files[y],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var y;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(y=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(y);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var y=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(y<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(y);var m=y;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===u.MAX_VALUE_16BITS||this.diskWithCentralDirStart===u.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===u.MAX_VALUE_16BITS||this.centralDirRecords===u.MAX_VALUE_16BITS||this.centralDirSize===u.MAX_VALUE_32BITS||this.centralDirOffset===u.MAX_VALUE_32BITS){if(this.zip64=!0,(y=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(y),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var M=m-v;if(0<M)this.isSignature(m,f.CENTRAL_FILE_HEADER)||(this.reader.zero=M);else if(M<0)throw new Error("Corrupted zip: missing "+Math.abs(M)+" bytes.")},prepareReader:function(y){this.reader=l(y)},load:function(y){this.prepareReader(y),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=x},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,r,a){var l=t("./reader/readerFor"),u=t("./utils"),f=t("./compressedObject"),d=t("./crc32"),h=t("./utf8"),x=t("./compressions"),y=t("./support");function m(v,M){this.options=v,this.loadOptions=M}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var M,S;if(v.skip(22),this.fileNameLength=v.readInt(2),S=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(S),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((M=(function(g){for(var p in x)if(Object.prototype.hasOwnProperty.call(x,p)&&x[p].magic===g)return x[p];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+u.pretty(this.compressionMethod)+" unknown (inner file : "+u.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,M,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var M=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(M),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=l(this.extraFields[1].value);this.uncompressedSize===u.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===u.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===u.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===u.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var M,S,g,p=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<p;)M=v.readInt(2),S=v.readInt(2),g=v.readData(S),this.extraFields[M]={id:M,length:S,value:g};v.setIndex(p)},handleUTF8:function(){var v=y.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var M=this.findExtraFieldUnicodePath();if(M!==null)this.fileNameStr=M;else{var S=u.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(S)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var p=u.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var M=l(v.value);return M.readInt(1)!==1||d(this.fileName)!==M.readInt(4)?null:h.utf8decode(M.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var M=l(v.value);return M.readInt(1)!==1||d(this.fileComment)!==M.readInt(4)?null:h.utf8decode(M.readData(v.length-5))}return null}},r.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,r,a){function l(M,S,g){this.name=M,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=S,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var u=t("./stream/StreamHelper"),f=t("./stream/DataWorker"),d=t("./utf8"),h=t("./compressedObject"),x=t("./stream/GenericWorker");l.prototype={internalStream:function(M){var S=null,g="string";try{if(!M)throw new Error("No output type specified.");var p=(g=M.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),S=this._decompressWorker();var T=!this._dataBinary;T&&!p&&(S=S.pipe(new d.Utf8EncodeWorker)),!T&&p&&(S=S.pipe(new d.Utf8DecodeWorker))}catch(I){(S=new x("error")).error(I)}return new u(S,g,"")},async:function(M,S){return this.internalStream(M).accumulate(S)},nodeStream:function(M,S){return this.internalStream(M||"nodebuffer").toNodejsStream(S)},_compressWorker:function(M,S){if(this._data instanceof h&&this._data.compression.magic===M.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new d.Utf8EncodeWorker)),h.createWorkerFrom(g,M,S)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof x?this._data:new f(this._data)}};for(var y=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<y.length;v++)l.prototype[y[v]]=m;r.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,r,a){(function(l){var u,f,d=l.MutationObserver||l.WebKitMutationObserver;if(d){var h=0,x=new d(M),y=l.document.createTextNode("");x.observe(y,{characterData:!0}),u=function(){y.data=h=++h%2}}else if(l.setImmediate||l.MessageChannel===void 0)u="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var S=l.document.createElement("script");S.onreadystatechange=function(){M(),S.onreadystatechange=null,S.parentNode.removeChild(S),S=null},l.document.documentElement.appendChild(S)}:function(){setTimeout(M,0)};else{var m=new l.MessageChannel;m.port1.onmessage=M,u=function(){m.port2.postMessage(0)}}var v=[];function M(){var S,g;f=!0;for(var p=v.length;p;){for(g=v,v=[],S=-1;++S<p;)g[S]();p=v.length}f=!1}r.exports=function(S){v.push(S)!==1||f||u()}}).call(this,typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,r,a){var l=t("immediate");function u(){}var f={},d=["REJECTED"],h=["FULFILLED"],x=["PENDING"];function y(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=x,this.queue=[],this.outcome=void 0,p!==u&&S(this,p)}function m(p,T,I){this.promise=p,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}function v(p,T,I){l(function(){var R;try{R=T(I)}catch(P){return f.reject(p,P)}R===p?f.reject(p,new TypeError("Cannot resolve promise with itself")):f.resolve(p,R)})}function M(p){var T=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof T=="function")return function(){T.apply(p,arguments)}}function S(p,T){var I=!1;function R(O){I||(I=!0,f.reject(p,O))}function P(O){I||(I=!0,f.resolve(p,O))}var U=g(function(){T(P,R)});U.status==="error"&&R(U.value)}function g(p,T){var I={};try{I.value=p(T),I.status="success"}catch(R){I.status="error",I.value=R}return I}(r.exports=y).prototype.finally=function(p){if(typeof p!="function")return this;var T=this.constructor;return this.then(function(I){return T.resolve(p()).then(function(){return I})},function(I){return T.resolve(p()).then(function(){throw I})})},y.prototype.catch=function(p){return this.then(null,p)},y.prototype.then=function(p,T){if(typeof p!="function"&&this.state===h||typeof T!="function"&&this.state===d)return this;var I=new this.constructor(u);return this.state!==x?v(I,this.state===h?p:T,this.outcome):this.queue.push(new m(I,p,T)),I},m.prototype.callFulfilled=function(p){f.resolve(this.promise,p)},m.prototype.otherCallFulfilled=function(p){v(this.promise,this.onFulfilled,p)},m.prototype.callRejected=function(p){f.reject(this.promise,p)},m.prototype.otherCallRejected=function(p){v(this.promise,this.onRejected,p)},f.resolve=function(p,T){var I=g(M,T);if(I.status==="error")return f.reject(p,I.value);var R=I.value;if(R)S(p,R);else{p.state=h,p.outcome=T;for(var P=-1,U=p.queue.length;++P<U;)p.queue[P].callFulfilled(T)}return p},f.reject=function(p,T){p.state=d,p.outcome=T;for(var I=-1,R=p.queue.length;++I<R;)p.queue[I].callRejected(T);return p},y.resolve=function(p){return p instanceof this?p:f.resolve(new this(u),p)},y.reject=function(p){var T=new this(u);return f.reject(T,p)},y.all=function(p){var T=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=p.length,R=!1;if(!I)return this.resolve([]);for(var P=new Array(I),U=0,O=-1,A=new this(u);++O<I;)D(p[O],O);return A;function D(W,Z){T.resolve(W).then(function(F){P[Z]=F,++U!==I||R||(R=!0,f.resolve(A,P))},function(F){R||(R=!0,f.reject(A,F))})}},y.race=function(p){var T=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=p.length,R=!1;if(!I)return this.resolve([]);for(var P=-1,U=new this(u);++P<I;)O=p[P],T.resolve(O).then(function(A){R||(R=!0,f.resolve(U,A))},function(A){R||(R=!0,f.reject(U,A))});var O;return U}},{immediate:36}],38:[function(t,r,a){var l={};(0,t("./lib/utils/common").assign)(l,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),r.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,r,a){var l=t("./zlib/deflate"),u=t("./utils/common"),f=t("./utils/strings"),d=t("./zlib/messages"),h=t("./zlib/zstream"),x=Object.prototype.toString,y=0,m=-1,v=0,M=8;function S(p){if(!(this instanceof S))return new S(p);this.options=u.assign({level:m,method:M,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},p||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var I=l.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(I!==y)throw new Error(d[I]);if(T.header&&l.deflateSetHeader(this.strm,T.header),T.dictionary){var R;if(R=typeof T.dictionary=="string"?f.string2buf(T.dictionary):x.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(I=l.deflateSetDictionary(this.strm,R))!==y)throw new Error(d[I]);this._dict_set=!0}}function g(p,T){var I=new S(T);if(I.push(p,!0),I.err)throw I.msg||d[I.err];return I.result}S.prototype.push=function(p,T){var I,R,P=this.strm,U=this.options.chunkSize;if(this.ended)return!1;R=T===~~T?T:T===!0?4:0,typeof p=="string"?P.input=f.string2buf(p):x.call(p)==="[object ArrayBuffer]"?P.input=new Uint8Array(p):P.input=p,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new u.Buf8(U),P.next_out=0,P.avail_out=U),(I=l.deflate(P,R))!==1&&I!==y)return this.onEnd(I),!(this.ended=!0);P.avail_out!==0&&(P.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(u.shrinkBuf(P.output,P.next_out))):this.onData(u.shrinkBuf(P.output,P.next_out)))}while((0<P.avail_in||P.avail_out===0)&&I!==1);return R===4?(I=l.deflateEnd(this.strm),this.onEnd(I),this.ended=!0,I===y):R!==2||(this.onEnd(y),!(P.avail_out=0))},S.prototype.onData=function(p){this.chunks.push(p)},S.prototype.onEnd=function(p){p===y&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},a.Deflate=S,a.deflate=g,a.deflateRaw=function(p,T){return(T=T||{}).raw=!0,g(p,T)},a.gzip=function(p,T){return(T=T||{}).gzip=!0,g(p,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,r,a){var l=t("./zlib/inflate"),u=t("./utils/common"),f=t("./utils/strings"),d=t("./zlib/constants"),h=t("./zlib/messages"),x=t("./zlib/zstream"),y=t("./zlib/gzheader"),m=Object.prototype.toString;function v(S){if(!(this instanceof v))return new v(S);this.options=u.assign({chunkSize:16384,windowBits:0,to:""},S||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||S&&S.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new x,this.strm.avail_out=0;var p=l.inflateInit2(this.strm,g.windowBits);if(p!==d.Z_OK)throw new Error(h[p]);this.header=new y,l.inflateGetHeader(this.strm,this.header)}function M(S,g){var p=new v(g);if(p.push(S,!0),p.err)throw p.msg||h[p.err];return p.result}v.prototype.push=function(S,g){var p,T,I,R,P,U,O=this.strm,A=this.options.chunkSize,D=this.options.dictionary,W=!1;if(this.ended)return!1;T=g===~~g?g:g===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof S=="string"?O.input=f.binstring2buf(S):m.call(S)==="[object ArrayBuffer]"?O.input=new Uint8Array(S):O.input=S,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new u.Buf8(A),O.next_out=0,O.avail_out=A),(p=l.inflate(O,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&D&&(U=typeof D=="string"?f.string2buf(D):m.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,p=l.inflateSetDictionary(this.strm,U)),p===d.Z_BUF_ERROR&&W===!0&&(p=d.Z_OK,W=!1),p!==d.Z_STREAM_END&&p!==d.Z_OK)return this.onEnd(p),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&p!==d.Z_STREAM_END&&(O.avail_in!==0||T!==d.Z_FINISH&&T!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(I=f.utf8border(O.output,O.next_out),R=O.next_out-I,P=f.buf2string(O.output,I),O.next_out=R,O.avail_out=A-R,R&&u.arraySet(O.output,O.output,I,R,0),this.onData(P)):this.onData(u.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(W=!0)}while((0<O.avail_in||O.avail_out===0)&&p!==d.Z_STREAM_END);return p===d.Z_STREAM_END&&(T=d.Z_FINISH),T===d.Z_FINISH?(p=l.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===d.Z_OK):T!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(O.avail_out=0))},v.prototype.onData=function(S){this.chunks.push(S)},v.prototype.onEnd=function(S){S===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Inflate=v,a.inflate=M,a.inflateRaw=function(S,g){return(g=g||{}).raw=!0,M(S,g)},a.ungzip=M},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,r,a){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(d){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var x=h.shift();if(x){if(typeof x!="object")throw new TypeError(x+"must be non-object");for(var y in x)x.hasOwnProperty(y)&&(d[y]=x[y])}}return d},a.shrinkBuf=function(d,h){return d.length===h?d:d.subarray?d.subarray(0,h):(d.length=h,d)};var u={arraySet:function(d,h,x,y,m){if(h.subarray&&d.subarray)d.set(h.subarray(x,x+y),m);else for(var v=0;v<y;v++)d[m+v]=h[x+v]},flattenChunks:function(d){var h,x,y,m,v,M;for(h=y=0,x=d.length;h<x;h++)y+=d[h].length;for(M=new Uint8Array(y),h=m=0,x=d.length;h<x;h++)v=d[h],M.set(v,m),m+=v.length;return M}},f={arraySet:function(d,h,x,y,m){for(var v=0;v<y;v++)d[m+v]=h[x+v]},flattenChunks:function(d){return[].concat.apply([],d)}};a.setTyped=function(d){d?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,u)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,f))},a.setTyped(l)},{}],42:[function(t,r,a){var l=t("./common"),u=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{u=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var d=new l.Buf8(256),h=0;h<256;h++)d[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function x(y,m){if(m<65537&&(y.subarray&&f||!y.subarray&&u))return String.fromCharCode.apply(null,l.shrinkBuf(y,m));for(var v="",M=0;M<m;M++)v+=String.fromCharCode(y[M]);return v}d[254]=d[254]=1,a.string2buf=function(y){var m,v,M,S,g,p=y.length,T=0;for(S=0;S<p;S++)(64512&(v=y.charCodeAt(S)))==55296&&S+1<p&&(64512&(M=y.charCodeAt(S+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),S++),T+=v<128?1:v<2048?2:v<65536?3:4;for(m=new l.Buf8(T),S=g=0;g<T;S++)(64512&(v=y.charCodeAt(S)))==55296&&S+1<p&&(64512&(M=y.charCodeAt(S+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),S++),v<128?m[g++]=v:(v<2048?m[g++]=192|v>>>6:(v<65536?m[g++]=224|v>>>12:(m[g++]=240|v>>>18,m[g++]=128|v>>>12&63),m[g++]=128|v>>>6&63),m[g++]=128|63&v);return m},a.buf2binstring=function(y){return x(y,y.length)},a.binstring2buf=function(y){for(var m=new l.Buf8(y.length),v=0,M=m.length;v<M;v++)m[v]=y.charCodeAt(v);return m},a.buf2string=function(y,m){var v,M,S,g,p=m||y.length,T=new Array(2*p);for(v=M=0;v<p;)if((S=y[v++])<128)T[M++]=S;else if(4<(g=d[S]))T[M++]=65533,v+=g-1;else{for(S&=g===2?31:g===3?15:7;1<g&&v<p;)S=S<<6|63&y[v++],g--;1<g?T[M++]=65533:S<65536?T[M++]=S:(S-=65536,T[M++]=55296|S>>10&1023,T[M++]=56320|1023&S)}return x(T,M)},a.utf8border=function(y,m){var v;for((m=m||y.length)>y.length&&(m=y.length),v=m-1;0<=v&&(192&y[v])==128;)v--;return v<0||v===0?m:v+d[y[v]]>m?v:m}},{"./common":41}],43:[function(t,r,a){r.exports=function(l,u,f,d){for(var h=65535&l|0,x=l>>>16&65535|0,y=0;f!==0;){for(f-=y=2e3<f?2e3:f;x=x+(h=h+u[d++]|0)|0,--y;);h%=65521,x%=65521}return h|x<<16|0}},{}],44:[function(t,r,a){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,r,a){var l=(function(){for(var u,f=[],d=0;d<256;d++){u=d;for(var h=0;h<8;h++)u=1&u?3988292384^u>>>1:u>>>1;f[d]=u}return f})();r.exports=function(u,f,d,h){var x=l,y=h+d;u^=-1;for(var m=h;m<y;m++)u=u>>>8^x[255&(u^f[m])];return-1^u}},{}],46:[function(t,r,a){var l,u=t("../utils/common"),f=t("./trees"),d=t("./adler32"),h=t("./crc32"),x=t("./messages"),y=0,m=4,v=0,M=-2,S=-1,g=4,p=2,T=8,I=9,R=286,P=30,U=19,O=2*R+1,A=15,D=3,W=258,Z=W+D+1,F=42,j=113,w=1,Y=2,le=3,q=4;function J(b,Me){return b.msg=x[Me],Me}function H(b){return(b<<1)-(4<b?9:0)}function K(b){for(var Me=b.length;0<=--Me;)b[Me]=0}function N(b){var Me=b.state,he=Me.pending;he>b.avail_out&&(he=b.avail_out),he!==0&&(u.arraySet(b.output,Me.pending_buf,Me.pending_out,he,b.next_out),b.next_out+=he,Me.pending_out+=he,b.total_out+=he,b.avail_out-=he,Me.pending-=he,Me.pending===0&&(Me.pending_out=0))}function z(b,Me){f._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,Me),b.block_start=b.strstart,N(b.strm)}function _e(b,Me){b.pending_buf[b.pending++]=Me}function Ee(b,Me){b.pending_buf[b.pending++]=Me>>>8&255,b.pending_buf[b.pending++]=255&Me}function ge(b,Me){var he,V,G=b.max_chain_length,ie=b.strstart,Ce=b.prev_length,Ae=b.nice_match,ce=b.strstart>b.w_size-Z?b.strstart-(b.w_size-Z):0,X=b.window,Ge=b.w_mask,be=b.prev,B=b.strstart+W,C=X[ie+Ce-1],Q=X[ie+Ce];b.prev_length>=b.good_match&&(G>>=2),Ae>b.lookahead&&(Ae=b.lookahead);do if(X[(he=Me)+Ce]===Q&&X[he+Ce-1]===C&&X[he]===X[ie]&&X[++he]===X[ie+1]){ie+=2,he++;do;while(X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&X[++ie]===X[++he]&&ie<B);if(V=W-(B-ie),ie=B-W,Ce<V){if(b.match_start=Me,Ae<=(Ce=V))break;C=X[ie+Ce-1],Q=X[ie+Ce]}}while((Me=be[Me&Ge])>ce&&--G!=0);return Ce<=b.lookahead?Ce:b.lookahead}function ze(b){var Me,he,V,G,ie,Ce,Ae,ce,X,Ge,be=b.w_size;do{if(G=b.window_size-b.lookahead-b.strstart,b.strstart>=be+(be-Z)){for(u.arraySet(b.window,b.window,be,be,0),b.match_start-=be,b.strstart-=be,b.block_start-=be,Me=he=b.hash_size;V=b.head[--Me],b.head[Me]=be<=V?V-be:0,--he;);for(Me=he=be;V=b.prev[--Me],b.prev[Me]=be<=V?V-be:0,--he;);G+=be}if(b.strm.avail_in===0)break;if(Ce=b.strm,Ae=b.window,ce=b.strstart+b.lookahead,X=G,Ge=void 0,Ge=Ce.avail_in,X<Ge&&(Ge=X),he=Ge===0?0:(Ce.avail_in-=Ge,u.arraySet(Ae,Ce.input,Ce.next_in,Ge,ce),Ce.state.wrap===1?Ce.adler=d(Ce.adler,Ae,Ge,ce):Ce.state.wrap===2&&(Ce.adler=h(Ce.adler,Ae,Ge,ce)),Ce.next_in+=Ge,Ce.total_in+=Ge,Ge),b.lookahead+=he,b.lookahead+b.insert>=D)for(ie=b.strstart-b.insert,b.ins_h=b.window[ie],b.ins_h=(b.ins_h<<b.hash_shift^b.window[ie+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[ie+D-1])&b.hash_mask,b.prev[ie&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=ie,ie++,b.insert--,!(b.lookahead+b.insert<D)););}while(b.lookahead<Z&&b.strm.avail_in!==0)}function ue(b,Me){for(var he,V;;){if(b.lookahead<Z){if(ze(b),b.lookahead<Z&&Me===y)return w;if(b.lookahead===0)break}if(he=0,b.lookahead>=D&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+D-1])&b.hash_mask,he=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),he!==0&&b.strstart-he<=b.w_size-Z&&(b.match_length=ge(b,he)),b.match_length>=D)if(V=f._tr_tally(b,b.strstart-b.match_start,b.match_length-D),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=D){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+D-1])&b.hash_mask,he=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else V=f._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(V&&(z(b,!1),b.strm.avail_out===0))return w}return b.insert=b.strstart<D-1?b.strstart:D-1,Me===m?(z(b,!0),b.strm.avail_out===0?le:q):b.last_lit&&(z(b,!1),b.strm.avail_out===0)?w:Y}function oe(b,Me){for(var he,V,G;;){if(b.lookahead<Z){if(ze(b),b.lookahead<Z&&Me===y)return w;if(b.lookahead===0)break}if(he=0,b.lookahead>=D&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+D-1])&b.hash_mask,he=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=D-1,he!==0&&b.prev_length<b.max_lazy_match&&b.strstart-he<=b.w_size-Z&&(b.match_length=ge(b,he),b.match_length<=5&&(b.strategy===1||b.match_length===D&&4096<b.strstart-b.match_start)&&(b.match_length=D-1)),b.prev_length>=D&&b.match_length<=b.prev_length){for(G=b.strstart+b.lookahead-D,V=f._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-D),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=G&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+D-1])&b.hash_mask,he=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=D-1,b.strstart++,V&&(z(b,!1),b.strm.avail_out===0))return w}else if(b.match_available){if((V=f._tr_tally(b,0,b.window[b.strstart-1]))&&z(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return w}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(V=f._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<D-1?b.strstart:D-1,Me===m?(z(b,!0),b.strm.avail_out===0?le:q):b.last_lit&&(z(b,!1),b.strm.avail_out===0)?w:Y}function Re(b,Me,he,V,G){this.good_length=b,this.max_lazy=Me,this.nice_length=he,this.max_chain=V,this.func=G}function We(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new u.Buf16(2*O),this.dyn_dtree=new u.Buf16(2*(2*P+1)),this.bl_tree=new u.Buf16(2*(2*U+1)),K(this.dyn_ltree),K(this.dyn_dtree),K(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new u.Buf16(A+1),this.heap=new u.Buf16(2*R+1),K(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new u.Buf16(2*R+1),K(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Be(b){var Me;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=p,(Me=b.state).pending=0,Me.pending_out=0,Me.wrap<0&&(Me.wrap=-Me.wrap),Me.status=Me.wrap?F:j,b.adler=Me.wrap===2?0:1,Me.last_flush=y,f._tr_init(Me),v):J(b,M)}function ut(b){var Me=Be(b);return Me===v&&(function(he){he.window_size=2*he.w_size,K(he.head),he.max_lazy_match=l[he.level].max_lazy,he.good_match=l[he.level].good_length,he.nice_match=l[he.level].nice_length,he.max_chain_length=l[he.level].max_chain,he.strstart=0,he.block_start=0,he.lookahead=0,he.insert=0,he.match_length=he.prev_length=D-1,he.match_available=0,he.ins_h=0})(b.state),Me}function wt(b,Me,he,V,G,ie){if(!b)return M;var Ce=1;if(Me===S&&(Me=6),V<0?(Ce=0,V=-V):15<V&&(Ce=2,V-=16),G<1||I<G||he!==T||V<8||15<V||Me<0||9<Me||ie<0||g<ie)return J(b,M);V===8&&(V=9);var Ae=new We;return(b.state=Ae).strm=b,Ae.wrap=Ce,Ae.gzhead=null,Ae.w_bits=V,Ae.w_size=1<<Ae.w_bits,Ae.w_mask=Ae.w_size-1,Ae.hash_bits=G+7,Ae.hash_size=1<<Ae.hash_bits,Ae.hash_mask=Ae.hash_size-1,Ae.hash_shift=~~((Ae.hash_bits+D-1)/D),Ae.window=new u.Buf8(2*Ae.w_size),Ae.head=new u.Buf16(Ae.hash_size),Ae.prev=new u.Buf16(Ae.w_size),Ae.lit_bufsize=1<<G+6,Ae.pending_buf_size=4*Ae.lit_bufsize,Ae.pending_buf=new u.Buf8(Ae.pending_buf_size),Ae.d_buf=1*Ae.lit_bufsize,Ae.l_buf=3*Ae.lit_bufsize,Ae.level=Me,Ae.strategy=ie,Ae.method=he,ut(b)}l=[new Re(0,0,0,0,function(b,Me){var he=65535;for(he>b.pending_buf_size-5&&(he=b.pending_buf_size-5);;){if(b.lookahead<=1){if(ze(b),b.lookahead===0&&Me===y)return w;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var V=b.block_start+he;if((b.strstart===0||b.strstart>=V)&&(b.lookahead=b.strstart-V,b.strstart=V,z(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-Z&&(z(b,!1),b.strm.avail_out===0))return w}return b.insert=0,Me===m?(z(b,!0),b.strm.avail_out===0?le:q):(b.strstart>b.block_start&&(z(b,!1),b.strm.avail_out),w)}),new Re(4,4,8,4,ue),new Re(4,5,16,8,ue),new Re(4,6,32,32,ue),new Re(4,4,16,16,oe),new Re(8,16,32,32,oe),new Re(8,16,128,128,oe),new Re(8,32,128,256,oe),new Re(32,128,258,1024,oe),new Re(32,258,258,4096,oe)],a.deflateInit=function(b,Me){return wt(b,Me,T,15,8,0)},a.deflateInit2=wt,a.deflateReset=ut,a.deflateResetKeep=Be,a.deflateSetHeader=function(b,Me){return b&&b.state?b.state.wrap!==2?M:(b.state.gzhead=Me,v):M},a.deflate=function(b,Me){var he,V,G,ie;if(!b||!b.state||5<Me||Me<0)return b?J(b,M):M;if(V=b.state,!b.output||!b.input&&b.avail_in!==0||V.status===666&&Me!==m)return J(b,b.avail_out===0?-5:M);if(V.strm=b,he=V.last_flush,V.last_flush=Me,V.status===F)if(V.wrap===2)b.adler=0,_e(V,31),_e(V,139),_e(V,8),V.gzhead?(_e(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_e(V,255&V.gzhead.time),_e(V,V.gzhead.time>>8&255),_e(V,V.gzhead.time>>16&255),_e(V,V.gzhead.time>>24&255),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_e(V,255&V.gzhead.extra.length),_e(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(b.adler=h(b.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,3),V.status=j);else{var Ce=T+(V.w_bits-8<<4)<<8;Ce|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(Ce|=32),Ce+=31-Ce%31,V.status=j,Ee(V,Ce),V.strstart!==0&&(Ee(V,b.adler>>>16),Ee(V,65535&b.adler)),b.adler=1}if(V.status===69)if(V.gzhead.extra){for(G=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),N(b),G=V.pending,V.pending!==V.pending_buf_size));)_e(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){G=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),N(b),G=V.pending,V.pending===V.pending_buf_size)){ie=1;break}ie=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_e(V,ie)}while(ie!==0);V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),ie===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){G=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),N(b),G=V.pending,V.pending===V.pending_buf_size)){ie=1;break}ie=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_e(V,ie)}while(ie!==0);V.gzhead.hcrc&&V.pending>G&&(b.adler=h(b.adler,V.pending_buf,V.pending-G,G)),ie===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&N(b),V.pending+2<=V.pending_buf_size&&(_e(V,255&b.adler),_e(V,b.adler>>8&255),b.adler=0,V.status=j)):V.status=j),V.pending!==0){if(N(b),b.avail_out===0)return V.last_flush=-1,v}else if(b.avail_in===0&&H(Me)<=H(he)&&Me!==m)return J(b,-5);if(V.status===666&&b.avail_in!==0)return J(b,-5);if(b.avail_in!==0||V.lookahead!==0||Me!==y&&V.status!==666){var Ae=V.strategy===2?(function(ce,X){for(var Ge;;){if(ce.lookahead===0&&(ze(ce),ce.lookahead===0)){if(X===y)return w;break}if(ce.match_length=0,Ge=f._tr_tally(ce,0,ce.window[ce.strstart]),ce.lookahead--,ce.strstart++,Ge&&(z(ce,!1),ce.strm.avail_out===0))return w}return ce.insert=0,X===m?(z(ce,!0),ce.strm.avail_out===0?le:q):ce.last_lit&&(z(ce,!1),ce.strm.avail_out===0)?w:Y})(V,Me):V.strategy===3?(function(ce,X){for(var Ge,be,B,C,Q=ce.window;;){if(ce.lookahead<=W){if(ze(ce),ce.lookahead<=W&&X===y)return w;if(ce.lookahead===0)break}if(ce.match_length=0,ce.lookahead>=D&&0<ce.strstart&&(be=Q[B=ce.strstart-1])===Q[++B]&&be===Q[++B]&&be===Q[++B]){C=ce.strstart+W;do;while(be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&be===Q[++B]&&B<C);ce.match_length=W-(C-B),ce.match_length>ce.lookahead&&(ce.match_length=ce.lookahead)}if(ce.match_length>=D?(Ge=f._tr_tally(ce,1,ce.match_length-D),ce.lookahead-=ce.match_length,ce.strstart+=ce.match_length,ce.match_length=0):(Ge=f._tr_tally(ce,0,ce.window[ce.strstart]),ce.lookahead--,ce.strstart++),Ge&&(z(ce,!1),ce.strm.avail_out===0))return w}return ce.insert=0,X===m?(z(ce,!0),ce.strm.avail_out===0?le:q):ce.last_lit&&(z(ce,!1),ce.strm.avail_out===0)?w:Y})(V,Me):l[V.level].func(V,Me);if(Ae!==le&&Ae!==q||(V.status=666),Ae===w||Ae===le)return b.avail_out===0&&(V.last_flush=-1),v;if(Ae===Y&&(Me===1?f._tr_align(V):Me!==5&&(f._tr_stored_block(V,0,0,!1),Me===3&&(K(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),N(b),b.avail_out===0))return V.last_flush=-1,v}return Me!==m?v:V.wrap<=0?1:(V.wrap===2?(_e(V,255&b.adler),_e(V,b.adler>>8&255),_e(V,b.adler>>16&255),_e(V,b.adler>>24&255),_e(V,255&b.total_in),_e(V,b.total_in>>8&255),_e(V,b.total_in>>16&255),_e(V,b.total_in>>24&255)):(Ee(V,b.adler>>>16),Ee(V,65535&b.adler)),N(b),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?v:1)},a.deflateEnd=function(b){var Me;return b&&b.state?(Me=b.state.status)!==F&&Me!==69&&Me!==73&&Me!==91&&Me!==103&&Me!==j&&Me!==666?J(b,M):(b.state=null,Me===j?J(b,-3):v):M},a.deflateSetDictionary=function(b,Me){var he,V,G,ie,Ce,Ae,ce,X,Ge=Me.length;if(!b||!b.state||(ie=(he=b.state).wrap)===2||ie===1&&he.status!==F||he.lookahead)return M;for(ie===1&&(b.adler=d(b.adler,Me,Ge,0)),he.wrap=0,Ge>=he.w_size&&(ie===0&&(K(he.head),he.strstart=0,he.block_start=0,he.insert=0),X=new u.Buf8(he.w_size),u.arraySet(X,Me,Ge-he.w_size,he.w_size,0),Me=X,Ge=he.w_size),Ce=b.avail_in,Ae=b.next_in,ce=b.input,b.avail_in=Ge,b.next_in=0,b.input=Me,ze(he);he.lookahead>=D;){for(V=he.strstart,G=he.lookahead-(D-1);he.ins_h=(he.ins_h<<he.hash_shift^he.window[V+D-1])&he.hash_mask,he.prev[V&he.w_mask]=he.head[he.ins_h],he.head[he.ins_h]=V,V++,--G;);he.strstart=V,he.lookahead=D-1,ze(he)}return he.strstart+=he.lookahead,he.block_start=he.strstart,he.insert=he.lookahead,he.lookahead=0,he.match_length=he.prev_length=D-1,he.match_available=0,b.next_in=Ae,b.input=ce,b.avail_in=Ce,he.wrap=ie,v},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,r,a){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,r,a){r.exports=function(l,u){var f,d,h,x,y,m,v,M,S,g,p,T,I,R,P,U,O,A,D,W,Z,F,j,w,Y;f=l.state,d=l.next_in,w=l.input,h=d+(l.avail_in-5),x=l.next_out,Y=l.output,y=x-(u-l.avail_out),m=x+(l.avail_out-257),v=f.dmax,M=f.wsize,S=f.whave,g=f.wnext,p=f.window,T=f.hold,I=f.bits,R=f.lencode,P=f.distcode,U=(1<<f.lenbits)-1,O=(1<<f.distbits)-1;e:do{I<15&&(T+=w[d++]<<I,I+=8,T+=w[d++]<<I,I+=8),A=R[T&U];t:for(;;){if(T>>>=D=A>>>24,I-=D,(D=A>>>16&255)===0)Y[x++]=65535&A;else{if(!(16&D)){if((64&D)==0){A=R[(65535&A)+(T&(1<<D)-1)];continue t}if(32&D){f.mode=12;break e}l.msg="invalid literal/length code",f.mode=30;break e}W=65535&A,(D&=15)&&(I<D&&(T+=w[d++]<<I,I+=8),W+=T&(1<<D)-1,T>>>=D,I-=D),I<15&&(T+=w[d++]<<I,I+=8,T+=w[d++]<<I,I+=8),A=P[T&O];n:for(;;){if(T>>>=D=A>>>24,I-=D,!(16&(D=A>>>16&255))){if((64&D)==0){A=P[(65535&A)+(T&(1<<D)-1)];continue n}l.msg="invalid distance code",f.mode=30;break e}if(Z=65535&A,I<(D&=15)&&(T+=w[d++]<<I,(I+=8)<D&&(T+=w[d++]<<I,I+=8)),v<(Z+=T&(1<<D)-1)){l.msg="invalid distance too far back",f.mode=30;break e}if(T>>>=D,I-=D,(D=x-y)<Z){if(S<(D=Z-D)&&f.sane){l.msg="invalid distance too far back",f.mode=30;break e}if(j=p,(F=0)===g){if(F+=M-D,D<W){for(W-=D;Y[x++]=p[F++],--D;);F=x-Z,j=Y}}else if(g<D){if(F+=M+g-D,(D-=g)<W){for(W-=D;Y[x++]=p[F++],--D;);if(F=0,g<W){for(W-=D=g;Y[x++]=p[F++],--D;);F=x-Z,j=Y}}}else if(F+=g-D,D<W){for(W-=D;Y[x++]=p[F++],--D;);F=x-Z,j=Y}for(;2<W;)Y[x++]=j[F++],Y[x++]=j[F++],Y[x++]=j[F++],W-=3;W&&(Y[x++]=j[F++],1<W&&(Y[x++]=j[F++]))}else{for(F=x-Z;Y[x++]=Y[F++],Y[x++]=Y[F++],Y[x++]=Y[F++],2<(W-=3););W&&(Y[x++]=Y[F++],1<W&&(Y[x++]=Y[F++]))}break}}break}}while(d<h&&x<m);d-=W=I>>3,T&=(1<<(I-=W<<3))-1,l.next_in=d,l.next_out=x,l.avail_in=d<h?h-d+5:5-(d-h),l.avail_out=x<m?m-x+257:257-(x-m),f.hold=T,f.bits=I}},{}],49:[function(t,r,a){var l=t("../utils/common"),u=t("./adler32"),f=t("./crc32"),d=t("./inffast"),h=t("./inftrees"),x=1,y=2,m=0,v=-2,M=1,S=852,g=592;function p(F){return(F>>>24&255)+(F>>>8&65280)+((65280&F)<<8)+((255&F)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function I(F){var j;return F&&F.state?(j=F.state,F.total_in=F.total_out=j.total=0,F.msg="",j.wrap&&(F.adler=1&j.wrap),j.mode=M,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new l.Buf32(S),j.distcode=j.distdyn=new l.Buf32(g),j.sane=1,j.back=-1,m):v}function R(F){var j;return F&&F.state?((j=F.state).wsize=0,j.whave=0,j.wnext=0,I(F)):v}function P(F,j){var w,Y;return F&&F.state?(Y=F.state,j<0?(w=0,j=-j):(w=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?v:(Y.window!==null&&Y.wbits!==j&&(Y.window=null),Y.wrap=w,Y.wbits=j,R(F))):v}function U(F,j){var w,Y;return F?(Y=new T,(F.state=Y).window=null,(w=P(F,j))!==m&&(F.state=null),w):v}var O,A,D=!0;function W(F){if(D){var j;for(O=new l.Buf32(512),A=new l.Buf32(32),j=0;j<144;)F.lens[j++]=8;for(;j<256;)F.lens[j++]=9;for(;j<280;)F.lens[j++]=7;for(;j<288;)F.lens[j++]=8;for(h(x,F.lens,0,288,O,0,F.work,{bits:9}),j=0;j<32;)F.lens[j++]=5;h(y,F.lens,0,32,A,0,F.work,{bits:5}),D=!1}F.lencode=O,F.lenbits=9,F.distcode=A,F.distbits=5}function Z(F,j,w,Y){var le,q=F.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new l.Buf8(q.wsize)),Y>=q.wsize?(l.arraySet(q.window,j,w-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(Y<(le=q.wsize-q.wnext)&&(le=Y),l.arraySet(q.window,j,w-Y,le,q.wnext),(Y-=le)?(l.arraySet(q.window,j,w-Y,Y,0),q.wnext=Y,q.whave=q.wsize):(q.wnext+=le,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=le))),0}a.inflateReset=R,a.inflateReset2=P,a.inflateResetKeep=I,a.inflateInit=function(F){return U(F,15)},a.inflateInit2=U,a.inflate=function(F,j){var w,Y,le,q,J,H,K,N,z,_e,Ee,ge,ze,ue,oe,Re,We,Be,ut,wt,b,Me,he,V,G=0,ie=new l.Buf8(4),Ce=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!F||!F.state||!F.output||!F.input&&F.avail_in!==0)return v;(w=F.state).mode===12&&(w.mode=13),J=F.next_out,le=F.output,K=F.avail_out,q=F.next_in,Y=F.input,H=F.avail_in,N=w.hold,z=w.bits,_e=H,Ee=K,Me=m;e:for(;;)switch(w.mode){case M:if(w.wrap===0){w.mode=13;break}for(;z<16;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(2&w.wrap&&N===35615){ie[w.check=0]=255&N,ie[1]=N>>>8&255,w.check=f(w.check,ie,2,0),z=N=0,w.mode=2;break}if(w.flags=0,w.head&&(w.head.done=!1),!(1&w.wrap)||(((255&N)<<8)+(N>>8))%31){F.msg="incorrect header check",w.mode=30;break}if((15&N)!=8){F.msg="unknown compression method",w.mode=30;break}if(z-=4,b=8+(15&(N>>>=4)),w.wbits===0)w.wbits=b;else if(b>w.wbits){F.msg="invalid window size",w.mode=30;break}w.dmax=1<<b,F.adler=w.check=1,w.mode=512&N?10:12,z=N=0;break;case 2:for(;z<16;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(w.flags=N,(255&w.flags)!=8){F.msg="unknown compression method",w.mode=30;break}if(57344&w.flags){F.msg="unknown header flags set",w.mode=30;break}w.head&&(w.head.text=N>>8&1),512&w.flags&&(ie[0]=255&N,ie[1]=N>>>8&255,w.check=f(w.check,ie,2,0)),z=N=0,w.mode=3;case 3:for(;z<32;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.head&&(w.head.time=N),512&w.flags&&(ie[0]=255&N,ie[1]=N>>>8&255,ie[2]=N>>>16&255,ie[3]=N>>>24&255,w.check=f(w.check,ie,4,0)),z=N=0,w.mode=4;case 4:for(;z<16;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.head&&(w.head.xflags=255&N,w.head.os=N>>8),512&w.flags&&(ie[0]=255&N,ie[1]=N>>>8&255,w.check=f(w.check,ie,2,0)),z=N=0,w.mode=5;case 5:if(1024&w.flags){for(;z<16;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.length=N,w.head&&(w.head.extra_len=N),512&w.flags&&(ie[0]=255&N,ie[1]=N>>>8&255,w.check=f(w.check,ie,2,0)),z=N=0}else w.head&&(w.head.extra=null);w.mode=6;case 6:if(1024&w.flags&&(H<(ge=w.length)&&(ge=H),ge&&(w.head&&(b=w.head.extra_len-w.length,w.head.extra||(w.head.extra=new Array(w.head.extra_len)),l.arraySet(w.head.extra,Y,q,ge,b)),512&w.flags&&(w.check=f(w.check,Y,ge,q)),H-=ge,q+=ge,w.length-=ge),w.length))break e;w.length=0,w.mode=7;case 7:if(2048&w.flags){if(H===0)break e;for(ge=0;b=Y[q+ge++],w.head&&b&&w.length<65536&&(w.head.name+=String.fromCharCode(b)),b&&ge<H;);if(512&w.flags&&(w.check=f(w.check,Y,ge,q)),H-=ge,q+=ge,b)break e}else w.head&&(w.head.name=null);w.length=0,w.mode=8;case 8:if(4096&w.flags){if(H===0)break e;for(ge=0;b=Y[q+ge++],w.head&&b&&w.length<65536&&(w.head.comment+=String.fromCharCode(b)),b&&ge<H;);if(512&w.flags&&(w.check=f(w.check,Y,ge,q)),H-=ge,q+=ge,b)break e}else w.head&&(w.head.comment=null);w.mode=9;case 9:if(512&w.flags){for(;z<16;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(N!==(65535&w.check)){F.msg="header crc mismatch",w.mode=30;break}z=N=0}w.head&&(w.head.hcrc=w.flags>>9&1,w.head.done=!0),F.adler=w.check=0,w.mode=12;break;case 10:for(;z<32;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}F.adler=w.check=p(N),z=N=0,w.mode=11;case 11:if(w.havedict===0)return F.next_out=J,F.avail_out=K,F.next_in=q,F.avail_in=H,w.hold=N,w.bits=z,2;F.adler=w.check=1,w.mode=12;case 12:if(j===5||j===6)break e;case 13:if(w.last){N>>>=7&z,z-=7&z,w.mode=27;break}for(;z<3;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}switch(w.last=1&N,z-=1,3&(N>>>=1)){case 0:w.mode=14;break;case 1:if(W(w),w.mode=20,j!==6)break;N>>>=2,z-=2;break e;case 2:w.mode=17;break;case 3:F.msg="invalid block type",w.mode=30}N>>>=2,z-=2;break;case 14:for(N>>>=7&z,z-=7&z;z<32;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if((65535&N)!=(N>>>16^65535)){F.msg="invalid stored block lengths",w.mode=30;break}if(w.length=65535&N,z=N=0,w.mode=15,j===6)break e;case 15:w.mode=16;case 16:if(ge=w.length){if(H<ge&&(ge=H),K<ge&&(ge=K),ge===0)break e;l.arraySet(le,Y,q,ge,J),H-=ge,q+=ge,K-=ge,J+=ge,w.length-=ge;break}w.mode=12;break;case 17:for(;z<14;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(w.nlen=257+(31&N),N>>>=5,z-=5,w.ndist=1+(31&N),N>>>=5,z-=5,w.ncode=4+(15&N),N>>>=4,z-=4,286<w.nlen||30<w.ndist){F.msg="too many length or distance symbols",w.mode=30;break}w.have=0,w.mode=18;case 18:for(;w.have<w.ncode;){for(;z<3;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.lens[Ce[w.have++]]=7&N,N>>>=3,z-=3}for(;w.have<19;)w.lens[Ce[w.have++]]=0;if(w.lencode=w.lendyn,w.lenbits=7,he={bits:w.lenbits},Me=h(0,w.lens,0,19,w.lencode,0,w.work,he),w.lenbits=he.bits,Me){F.msg="invalid code lengths set",w.mode=30;break}w.have=0,w.mode=19;case 19:for(;w.have<w.nlen+w.ndist;){for(;Re=(G=w.lencode[N&(1<<w.lenbits)-1])>>>16&255,We=65535&G,!((oe=G>>>24)<=z);){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(We<16)N>>>=oe,z-=oe,w.lens[w.have++]=We;else{if(We===16){for(V=oe+2;z<V;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(N>>>=oe,z-=oe,w.have===0){F.msg="invalid bit length repeat",w.mode=30;break}b=w.lens[w.have-1],ge=3+(3&N),N>>>=2,z-=2}else if(We===17){for(V=oe+3;z<V;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}z-=oe,b=0,ge=3+(7&(N>>>=oe)),N>>>=3,z-=3}else{for(V=oe+7;z<V;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}z-=oe,b=0,ge=11+(127&(N>>>=oe)),N>>>=7,z-=7}if(w.have+ge>w.nlen+w.ndist){F.msg="invalid bit length repeat",w.mode=30;break}for(;ge--;)w.lens[w.have++]=b}}if(w.mode===30)break;if(w.lens[256]===0){F.msg="invalid code -- missing end-of-block",w.mode=30;break}if(w.lenbits=9,he={bits:w.lenbits},Me=h(x,w.lens,0,w.nlen,w.lencode,0,w.work,he),w.lenbits=he.bits,Me){F.msg="invalid literal/lengths set",w.mode=30;break}if(w.distbits=6,w.distcode=w.distdyn,he={bits:w.distbits},Me=h(y,w.lens,w.nlen,w.ndist,w.distcode,0,w.work,he),w.distbits=he.bits,Me){F.msg="invalid distances set",w.mode=30;break}if(w.mode=20,j===6)break e;case 20:w.mode=21;case 21:if(6<=H&&258<=K){F.next_out=J,F.avail_out=K,F.next_in=q,F.avail_in=H,w.hold=N,w.bits=z,d(F,Ee),J=F.next_out,le=F.output,K=F.avail_out,q=F.next_in,Y=F.input,H=F.avail_in,N=w.hold,z=w.bits,w.mode===12&&(w.back=-1);break}for(w.back=0;Re=(G=w.lencode[N&(1<<w.lenbits)-1])>>>16&255,We=65535&G,!((oe=G>>>24)<=z);){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(Re&&(240&Re)==0){for(Be=oe,ut=Re,wt=We;Re=(G=w.lencode[wt+((N&(1<<Be+ut)-1)>>Be)])>>>16&255,We=65535&G,!(Be+(oe=G>>>24)<=z);){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}N>>>=Be,z-=Be,w.back+=Be}if(N>>>=oe,z-=oe,w.back+=oe,w.length=We,Re===0){w.mode=26;break}if(32&Re){w.back=-1,w.mode=12;break}if(64&Re){F.msg="invalid literal/length code",w.mode=30;break}w.extra=15&Re,w.mode=22;case 22:if(w.extra){for(V=w.extra;z<V;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.length+=N&(1<<w.extra)-1,N>>>=w.extra,z-=w.extra,w.back+=w.extra}w.was=w.length,w.mode=23;case 23:for(;Re=(G=w.distcode[N&(1<<w.distbits)-1])>>>16&255,We=65535&G,!((oe=G>>>24)<=z);){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if((240&Re)==0){for(Be=oe,ut=Re,wt=We;Re=(G=w.distcode[wt+((N&(1<<Be+ut)-1)>>Be)])>>>16&255,We=65535&G,!(Be+(oe=G>>>24)<=z);){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}N>>>=Be,z-=Be,w.back+=Be}if(N>>>=oe,z-=oe,w.back+=oe,64&Re){F.msg="invalid distance code",w.mode=30;break}w.offset=We,w.extra=15&Re,w.mode=24;case 24:if(w.extra){for(V=w.extra;z<V;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}w.offset+=N&(1<<w.extra)-1,N>>>=w.extra,z-=w.extra,w.back+=w.extra}if(w.offset>w.dmax){F.msg="invalid distance too far back",w.mode=30;break}w.mode=25;case 25:if(K===0)break e;if(ge=Ee-K,w.offset>ge){if((ge=w.offset-ge)>w.whave&&w.sane){F.msg="invalid distance too far back",w.mode=30;break}ze=ge>w.wnext?(ge-=w.wnext,w.wsize-ge):w.wnext-ge,ge>w.length&&(ge=w.length),ue=w.window}else ue=le,ze=J-w.offset,ge=w.length;for(K<ge&&(ge=K),K-=ge,w.length-=ge;le[J++]=ue[ze++],--ge;);w.length===0&&(w.mode=21);break;case 26:if(K===0)break e;le[J++]=w.length,K--,w.mode=21;break;case 27:if(w.wrap){for(;z<32;){if(H===0)break e;H--,N|=Y[q++]<<z,z+=8}if(Ee-=K,F.total_out+=Ee,w.total+=Ee,Ee&&(F.adler=w.check=w.flags?f(w.check,le,Ee,J-Ee):u(w.check,le,Ee,J-Ee)),Ee=K,(w.flags?N:p(N))!==w.check){F.msg="incorrect data check",w.mode=30;break}z=N=0}w.mode=28;case 28:if(w.wrap&&w.flags){for(;z<32;){if(H===0)break e;H--,N+=Y[q++]<<z,z+=8}if(N!==(4294967295&w.total)){F.msg="incorrect length check",w.mode=30;break}z=N=0}w.mode=29;case 29:Me=1;break e;case 30:Me=-3;break e;case 31:return-4;case 32:default:return v}return F.next_out=J,F.avail_out=K,F.next_in=q,F.avail_in=H,w.hold=N,w.bits=z,(w.wsize||Ee!==F.avail_out&&w.mode<30&&(w.mode<27||j!==4))&&Z(F,F.output,F.next_out,Ee-F.avail_out)?(w.mode=31,-4):(_e-=F.avail_in,Ee-=F.avail_out,F.total_in+=_e,F.total_out+=Ee,w.total+=Ee,w.wrap&&Ee&&(F.adler=w.check=w.flags?f(w.check,le,Ee,F.next_out-Ee):u(w.check,le,Ee,F.next_out-Ee)),F.data_type=w.bits+(w.last?64:0)+(w.mode===12?128:0)+(w.mode===20||w.mode===15?256:0),(_e==0&&Ee===0||j===4)&&Me===m&&(Me=-5),Me)},a.inflateEnd=function(F){if(!F||!F.state)return v;var j=F.state;return j.window&&(j.window=null),F.state=null,m},a.inflateGetHeader=function(F,j){var w;return F&&F.state?(2&(w=F.state).wrap)==0?v:((w.head=j).done=!1,m):v},a.inflateSetDictionary=function(F,j){var w,Y=j.length;return F&&F.state?(w=F.state).wrap!==0&&w.mode!==11?v:w.mode===11&&u(1,j,Y,0)!==w.check?-3:Z(F,j,Y,Y)?(w.mode=31,-4):(w.havedict=1,m):v},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,r,a){var l=t("../utils/common"),u=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(x,y,m,v,M,S,g,p){var T,I,R,P,U,O,A,D,W,Z=p.bits,F=0,j=0,w=0,Y=0,le=0,q=0,J=0,H=0,K=0,N=0,z=null,_e=0,Ee=new l.Buf16(16),ge=new l.Buf16(16),ze=null,ue=0;for(F=0;F<=15;F++)Ee[F]=0;for(j=0;j<v;j++)Ee[y[m+j]]++;for(le=Z,Y=15;1<=Y&&Ee[Y]===0;Y--);if(Y<le&&(le=Y),Y===0)return M[S++]=20971520,M[S++]=20971520,p.bits=1,0;for(w=1;w<Y&&Ee[w]===0;w++);for(le<w&&(le=w),F=H=1;F<=15;F++)if(H<<=1,(H-=Ee[F])<0)return-1;if(0<H&&(x===0||Y!==1))return-1;for(ge[1]=0,F=1;F<15;F++)ge[F+1]=ge[F]+Ee[F];for(j=0;j<v;j++)y[m+j]!==0&&(g[ge[y[m+j]]++]=j);if(O=x===0?(z=ze=g,19):x===1?(z=u,_e-=257,ze=f,ue-=257,256):(z=d,ze=h,-1),F=w,U=S,J=j=N=0,R=-1,P=(K=1<<(q=le))-1,x===1&&852<K||x===2&&592<K)return 1;for(;;){for(A=F-J,W=g[j]<O?(D=0,g[j]):g[j]>O?(D=ze[ue+g[j]],z[_e+g[j]]):(D=96,0),T=1<<F-J,w=I=1<<q;M[U+(N>>J)+(I-=T)]=A<<24|D<<16|W|0,I!==0;);for(T=1<<F-1;N&T;)T>>=1;if(T!==0?(N&=T-1,N+=T):N=0,j++,--Ee[F]==0){if(F===Y)break;F=y[m+g[j]]}if(le<F&&(N&P)!==R){for(J===0&&(J=le),U+=w,H=1<<(q=F-J);q+J<Y&&!((H-=Ee[q+J])<=0);)q++,H<<=1;if(K+=1<<q,x===1&&852<K||x===2&&592<K)return 1;M[R=N&P]=le<<24|q<<16|U-S|0}}return N!==0&&(M[U+N]=F-J<<24|64<<16|0),p.bits=le,0}},{"../utils/common":41}],51:[function(t,r,a){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,r,a){var l=t("../utils/common"),u=0,f=1;function d(G){for(var ie=G.length;0<=--ie;)G[ie]=0}var h=0,x=29,y=256,m=y+1+x,v=30,M=19,S=2*m+1,g=15,p=16,T=7,I=256,R=16,P=17,U=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=new Array(2*(m+2));d(Z);var F=new Array(2*v);d(F);var j=new Array(512);d(j);var w=new Array(256);d(w);var Y=new Array(x);d(Y);var le,q,J,H=new Array(v);function K(G,ie,Ce,Ae,ce){this.static_tree=G,this.extra_bits=ie,this.extra_base=Ce,this.elems=Ae,this.max_length=ce,this.has_stree=G&&G.length}function N(G,ie){this.dyn_tree=G,this.max_code=0,this.stat_desc=ie}function z(G){return G<256?j[G]:j[256+(G>>>7)]}function _e(G,ie){G.pending_buf[G.pending++]=255&ie,G.pending_buf[G.pending++]=ie>>>8&255}function Ee(G,ie,Ce){G.bi_valid>p-Ce?(G.bi_buf|=ie<<G.bi_valid&65535,_e(G,G.bi_buf),G.bi_buf=ie>>p-G.bi_valid,G.bi_valid+=Ce-p):(G.bi_buf|=ie<<G.bi_valid&65535,G.bi_valid+=Ce)}function ge(G,ie,Ce){Ee(G,Ce[2*ie],Ce[2*ie+1])}function ze(G,ie){for(var Ce=0;Ce|=1&G,G>>>=1,Ce<<=1,0<--ie;);return Ce>>>1}function ue(G,ie,Ce){var Ae,ce,X=new Array(g+1),Ge=0;for(Ae=1;Ae<=g;Ae++)X[Ae]=Ge=Ge+Ce[Ae-1]<<1;for(ce=0;ce<=ie;ce++){var be=G[2*ce+1];be!==0&&(G[2*ce]=ze(X[be]++,be))}}function oe(G){var ie;for(ie=0;ie<m;ie++)G.dyn_ltree[2*ie]=0;for(ie=0;ie<v;ie++)G.dyn_dtree[2*ie]=0;for(ie=0;ie<M;ie++)G.bl_tree[2*ie]=0;G.dyn_ltree[2*I]=1,G.opt_len=G.static_len=0,G.last_lit=G.matches=0}function Re(G){8<G.bi_valid?_e(G,G.bi_buf):0<G.bi_valid&&(G.pending_buf[G.pending++]=G.bi_buf),G.bi_buf=0,G.bi_valid=0}function We(G,ie,Ce,Ae){var ce=2*ie,X=2*Ce;return G[ce]<G[X]||G[ce]===G[X]&&Ae[ie]<=Ae[Ce]}function Be(G,ie,Ce){for(var Ae=G.heap[Ce],ce=Ce<<1;ce<=G.heap_len&&(ce<G.heap_len&&We(ie,G.heap[ce+1],G.heap[ce],G.depth)&&ce++,!We(ie,Ae,G.heap[ce],G.depth));)G.heap[Ce]=G.heap[ce],Ce=ce,ce<<=1;G.heap[Ce]=Ae}function ut(G,ie,Ce){var Ae,ce,X,Ge,be=0;if(G.last_lit!==0)for(;Ae=G.pending_buf[G.d_buf+2*be]<<8|G.pending_buf[G.d_buf+2*be+1],ce=G.pending_buf[G.l_buf+be],be++,Ae===0?ge(G,ce,ie):(ge(G,(X=w[ce])+y+1,ie),(Ge=O[X])!==0&&Ee(G,ce-=Y[X],Ge),ge(G,X=z(--Ae),Ce),(Ge=A[X])!==0&&Ee(G,Ae-=H[X],Ge)),be<G.last_lit;);ge(G,I,ie)}function wt(G,ie){var Ce,Ae,ce,X=ie.dyn_tree,Ge=ie.stat_desc.static_tree,be=ie.stat_desc.has_stree,B=ie.stat_desc.elems,C=-1;for(G.heap_len=0,G.heap_max=S,Ce=0;Ce<B;Ce++)X[2*Ce]!==0?(G.heap[++G.heap_len]=C=Ce,G.depth[Ce]=0):X[2*Ce+1]=0;for(;G.heap_len<2;)X[2*(ce=G.heap[++G.heap_len]=C<2?++C:0)]=1,G.depth[ce]=0,G.opt_len--,be&&(G.static_len-=Ge[2*ce+1]);for(ie.max_code=C,Ce=G.heap_len>>1;1<=Ce;Ce--)Be(G,X,Ce);for(ce=B;Ce=G.heap[1],G.heap[1]=G.heap[G.heap_len--],Be(G,X,1),Ae=G.heap[1],G.heap[--G.heap_max]=Ce,G.heap[--G.heap_max]=Ae,X[2*ce]=X[2*Ce]+X[2*Ae],G.depth[ce]=(G.depth[Ce]>=G.depth[Ae]?G.depth[Ce]:G.depth[Ae])+1,X[2*Ce+1]=X[2*Ae+1]=ce,G.heap[1]=ce++,Be(G,X,1),2<=G.heap_len;);G.heap[--G.heap_max]=G.heap[1],(function(Q,de){var ye,Le,Ve,ee,ve,Ie,$e=de.dyn_tree,Ne=de.max_code,Fe=de.stat_desc.static_tree,it=de.stat_desc.has_stree,ht=de.stat_desc.extra_bits,pt=de.stat_desc.extra_base,ne=de.stat_desc.max_length,Xe=0;for(ee=0;ee<=g;ee++)Q.bl_count[ee]=0;for($e[2*Q.heap[Q.heap_max]+1]=0,ye=Q.heap_max+1;ye<S;ye++)ne<(ee=$e[2*$e[2*(Le=Q.heap[ye])+1]+1]+1)&&(ee=ne,Xe++),$e[2*Le+1]=ee,Ne<Le||(Q.bl_count[ee]++,ve=0,pt<=Le&&(ve=ht[Le-pt]),Ie=$e[2*Le],Q.opt_len+=Ie*(ee+ve),it&&(Q.static_len+=Ie*(Fe[2*Le+1]+ve)));if(Xe!==0){do{for(ee=ne-1;Q.bl_count[ee]===0;)ee--;Q.bl_count[ee]--,Q.bl_count[ee+1]+=2,Q.bl_count[ne]--,Xe-=2}while(0<Xe);for(ee=ne;ee!==0;ee--)for(Le=Q.bl_count[ee];Le!==0;)Ne<(Ve=Q.heap[--ye])||($e[2*Ve+1]!==ee&&(Q.opt_len+=(ee-$e[2*Ve+1])*$e[2*Ve],$e[2*Ve+1]=ee),Le--)}})(G,ie),ue(X,C,G.bl_count)}function b(G,ie,Ce){var Ae,ce,X=-1,Ge=ie[1],be=0,B=7,C=4;for(Ge===0&&(B=138,C=3),ie[2*(Ce+1)+1]=65535,Ae=0;Ae<=Ce;Ae++)ce=Ge,Ge=ie[2*(Ae+1)+1],++be<B&&ce===Ge||(be<C?G.bl_tree[2*ce]+=be:ce!==0?(ce!==X&&G.bl_tree[2*ce]++,G.bl_tree[2*R]++):be<=10?G.bl_tree[2*P]++:G.bl_tree[2*U]++,X=ce,C=(be=0)===Ge?(B=138,3):ce===Ge?(B=6,3):(B=7,4))}function Me(G,ie,Ce){var Ae,ce,X=-1,Ge=ie[1],be=0,B=7,C=4;for(Ge===0&&(B=138,C=3),Ae=0;Ae<=Ce;Ae++)if(ce=Ge,Ge=ie[2*(Ae+1)+1],!(++be<B&&ce===Ge)){if(be<C)for(;ge(G,ce,G.bl_tree),--be!=0;);else ce!==0?(ce!==X&&(ge(G,ce,G.bl_tree),be--),ge(G,R,G.bl_tree),Ee(G,be-3,2)):be<=10?(ge(G,P,G.bl_tree),Ee(G,be-3,3)):(ge(G,U,G.bl_tree),Ee(G,be-11,7));X=ce,C=(be=0)===Ge?(B=138,3):ce===Ge?(B=6,3):(B=7,4)}}d(H);var he=!1;function V(G,ie,Ce,Ae){Ee(G,(h<<1)+(Ae?1:0),3),(function(ce,X,Ge,be){Re(ce),_e(ce,Ge),_e(ce,~Ge),l.arraySet(ce.pending_buf,ce.window,X,Ge,ce.pending),ce.pending+=Ge})(G,ie,Ce)}a._tr_init=function(G){he||((function(){var ie,Ce,Ae,ce,X,Ge=new Array(g+1);for(ce=Ae=0;ce<x-1;ce++)for(Y[ce]=Ae,ie=0;ie<1<<O[ce];ie++)w[Ae++]=ce;for(w[Ae-1]=ce,ce=X=0;ce<16;ce++)for(H[ce]=X,ie=0;ie<1<<A[ce];ie++)j[X++]=ce;for(X>>=7;ce<v;ce++)for(H[ce]=X<<7,ie=0;ie<1<<A[ce]-7;ie++)j[256+X++]=ce;for(Ce=0;Ce<=g;Ce++)Ge[Ce]=0;for(ie=0;ie<=143;)Z[2*ie+1]=8,ie++,Ge[8]++;for(;ie<=255;)Z[2*ie+1]=9,ie++,Ge[9]++;for(;ie<=279;)Z[2*ie+1]=7,ie++,Ge[7]++;for(;ie<=287;)Z[2*ie+1]=8,ie++,Ge[8]++;for(ue(Z,m+1,Ge),ie=0;ie<v;ie++)F[2*ie+1]=5,F[2*ie]=ze(ie,5);le=new K(Z,O,y+1,m,g),q=new K(F,A,0,v,g),J=new K(new Array(0),D,0,M,T)})(),he=!0),G.l_desc=new N(G.dyn_ltree,le),G.d_desc=new N(G.dyn_dtree,q),G.bl_desc=new N(G.bl_tree,J),G.bi_buf=0,G.bi_valid=0,oe(G)},a._tr_stored_block=V,a._tr_flush_block=function(G,ie,Ce,Ae){var ce,X,Ge=0;0<G.level?(G.strm.data_type===2&&(G.strm.data_type=(function(be){var B,C=4093624447;for(B=0;B<=31;B++,C>>>=1)if(1&C&&be.dyn_ltree[2*B]!==0)return u;if(be.dyn_ltree[18]!==0||be.dyn_ltree[20]!==0||be.dyn_ltree[26]!==0)return f;for(B=32;B<y;B++)if(be.dyn_ltree[2*B]!==0)return f;return u})(G)),wt(G,G.l_desc),wt(G,G.d_desc),Ge=(function(be){var B;for(b(be,be.dyn_ltree,be.l_desc.max_code),b(be,be.dyn_dtree,be.d_desc.max_code),wt(be,be.bl_desc),B=M-1;3<=B&&be.bl_tree[2*W[B]+1]===0;B--);return be.opt_len+=3*(B+1)+5+5+4,B})(G),ce=G.opt_len+3+7>>>3,(X=G.static_len+3+7>>>3)<=ce&&(ce=X)):ce=X=Ce+5,Ce+4<=ce&&ie!==-1?V(G,ie,Ce,Ae):G.strategy===4||X===ce?(Ee(G,2+(Ae?1:0),3),ut(G,Z,F)):(Ee(G,4+(Ae?1:0),3),(function(be,B,C,Q){var de;for(Ee(be,B-257,5),Ee(be,C-1,5),Ee(be,Q-4,4),de=0;de<Q;de++)Ee(be,be.bl_tree[2*W[de]+1],3);Me(be,be.dyn_ltree,B-1),Me(be,be.dyn_dtree,C-1)})(G,G.l_desc.max_code+1,G.d_desc.max_code+1,Ge+1),ut(G,G.dyn_ltree,G.dyn_dtree)),oe(G),Ae&&Re(G)},a._tr_tally=function(G,ie,Ce){return G.pending_buf[G.d_buf+2*G.last_lit]=ie>>>8&255,G.pending_buf[G.d_buf+2*G.last_lit+1]=255&ie,G.pending_buf[G.l_buf+G.last_lit]=255&Ce,G.last_lit++,ie===0?G.dyn_ltree[2*Ce]++:(G.matches++,ie--,G.dyn_ltree[2*(w[Ce]+y+1)]++,G.dyn_dtree[2*z(ie)]++),G.last_lit===G.lit_bufsize-1},a._tr_align=function(G){Ee(G,2,3),ge(G,I,Z),(function(ie){ie.bi_valid===16?(_e(ie,ie.bi_buf),ie.bi_buf=0,ie.bi_valid=0):8<=ie.bi_valid&&(ie.pending_buf[ie.pending++]=255&ie.bi_buf,ie.bi_buf>>=8,ie.bi_valid-=8)})(G)}},{"../utils/common":41}],53:[function(t,r,a){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,r,a){(function(l){(function(u,f){if(!u.setImmediate){var d,h,x,y,m=1,v={},M=!1,S=u.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(u);g=g&&g.setTimeout?g:u,d={}.toString.call(u.process)==="[object process]"?function(R){process.nextTick(function(){T(R)})}:(function(){if(u.postMessage&&!u.importScripts){var R=!0,P=u.onmessage;return u.onmessage=function(){R=!1},u.postMessage("","*"),u.onmessage=P,R}})()?(y="setImmediate$"+Math.random()+"$",u.addEventListener?u.addEventListener("message",I,!1):u.attachEvent("onmessage",I),function(R){u.postMessage(y+R,"*")}):u.MessageChannel?((x=new MessageChannel).port1.onmessage=function(R){T(R.data)},function(R){x.port2.postMessage(R)}):S&&"onreadystatechange"in S.createElement("script")?(h=S.documentElement,function(R){var P=S.createElement("script");P.onreadystatechange=function(){T(R),P.onreadystatechange=null,h.removeChild(P),P=null},h.appendChild(P)}):function(R){setTimeout(T,0,R)},g.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var P=new Array(arguments.length-1),U=0;U<P.length;U++)P[U]=arguments[U+1];var O={callback:R,args:P};return v[m]=O,d(m),m++},g.clearImmediate=p}function p(R){delete v[R]}function T(R){if(M)setTimeout(T,0,R);else{var P=v[R];if(P){M=!0;try{(function(U){var O=U.callback,A=U.args;switch(A.length){case 0:O();break;case 1:O(A[0]);break;case 2:O(A[0],A[1]);break;case 3:O(A[0],A[1],A[2]);break;default:O.apply(f,A)}})(P)}finally{p(R),M=!1}}}}function I(R){R.source===u&&typeof R.data=="string"&&R.data.indexOf(y)===0&&T(+R.data.slice(y.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(_f)),_f.exports}var A1=b1();const C1=ig(A1);var Hl={exports:{}},R1=Hl.exports,ng;function P1(){return ng||(ng=1,(function(s,e){(function(t,r){r()})(R1,function(){function t(h,x){return typeof x>"u"?x={autoBom:!1}:typeof x!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),x={autoBom:!x}),x.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function r(h,x,y){var m=new XMLHttpRequest;m.open("GET",h),m.responseType="blob",m.onload=function(){d(m.response,x,y)},m.onerror=function(){console.error("could not download file")},m.send()}function a(h){var x=new XMLHttpRequest;x.open("HEAD",h,!1);try{x.send()}catch{}return 200<=x.status&&299>=x.status}function l(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var x=document.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(x)}}var u=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Cr=="object"&&Cr.global===Cr?Cr:void 0,f=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=u.saveAs||(typeof window!="object"||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(h,x,y){var m=u.URL||u.webkitURL,v=document.createElement("a");x=x||h.name||"download",v.download=x,v.rel="noopener",typeof h=="string"?(v.href=h,v.origin===location.origin?l(v):a(v.href)?r(h,x,y):l(v,v.target="_blank")):(v.href=m.createObjectURL(h),setTimeout(function(){m.revokeObjectURL(v.href)},4e4),setTimeout(function(){l(v)},0))}:"msSaveOrOpenBlob"in navigator?function(h,x,y){if(x=x||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(t(h,y),x);else if(a(h))r(h,x,y);else{var m=document.createElement("a");m.href=h,m.target="_blank",setTimeout(function(){l(m)})}}:function(h,x,y,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof h=="string")return r(h,x,y);var v=h.type==="application/octet-stream",M=/constructor/i.test(u.HTMLElement)||u.safari,S=/CriOS\/[\d]+/.test(navigator.userAgent);if((S||v&&M||f)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var I=g.result;I=S?I:I.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=I:location=I,m=null},g.readAsDataURL(h)}else{var p=u.URL||u.webkitURL,T=p.createObjectURL(h);m?m.location=T:location.href=T,m=null,setTimeout(function(){p.revokeObjectURL(T)},4e4)}});u.saveAs=d.saveAs=d,s.exports=d})})(Hl)),Hl.exports}var N1=P1();const I1={"index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="W.E.BIG.A.I - Advanced AI Assistant HUD Interface" />
    <meta name="theme-color" content="#00d4ff" />
    <title>MARK LIII — W.E.BIG.A.I</title>
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body, #root {
        width: 100%; height: 100%;
        overflow: hidden;
        background: #00060a;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }
    </style>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch(() => {});
        });
      }
    <\/script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`,"package.json":`{
  "name": "weaid-l3",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@types/file-saver": "^2.0.7",
    "@types/three": "^0.186.0",
    "file-saver": "^2.0.5",
    "jszip": "^3.10.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.186.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}`,"tsconfig.json":`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}`,"vite.config.js":`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});`,"README.md":`# W.E.BIG.A.I - Mark LIII

Advanced AI Assistant HUD Interface with 3D visualization, voice control, and real-time system monitoring.

## Features

- 🎨 **3D HUD** - Three.js based rotating rings, particles, and glowing core
- 🤖 **Gemini AI** - Real AI responses with conversation history
- 🎤 **Voice Control** - Web Speech API for voice recognition & synthesis
- 🎵 **Audio Analysis** - Web Audio API for real-time audio visualization
- 💾 **Persistent Memory** - IndexedDB for long-term data storage
- 🎭 **Theme System** - 5 themes (Default, Iron Man, Tron, Matrix, Cyberpunk)
- 💻 **Terminal** - Command-line interface
- 📝 **Code Editor** - JavaScript execution environment
- 🌤️ **Weather API** - Real-time weather data
- 🔍 **Web Search** - DuckDuckGo integration
- ⌨️ **Keyboard Shortcuts** - Ctrl+K, Ctrl+\`, Ctrl+Shift+E
- 📱 **PWA** - Offline support and push notifications

## Installation

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

## Commands

- \`/weather [city]\` - Get weather information
- \`/search [query]\` - Web search
- \`/news [query]\` - News search
- \`/clear\` - Clear logs
- \`/status\` - System status
- \`/plugins\` - List plugins
- \`/memory\` - Open memory panel
- \`/help\` - Show help

## Keyboard Shortcuts

- \`Ctrl+K\` - Command palette
- \`Ctrl+\`\` - Terminal
- \`Ctrl+Shift+E\` - Code editor
- \`Escape\` - Close panels

## License

MIT
`};async function vf(){const s=new C1;for(const[t,r]of Object.entries(I1))s.file(t,r);const e=await s.generateAsync({type:"blob"});N1.saveAs(e,"weaid-mark-liii-source.zip")}function xf(){return new Date().toLocaleTimeString("en-US",{hour12:!1})}function D1(){const[s,e]=tt.useState("W.E.BIG.A.I"),[t,r]=tt.useState("Puck"),[a,l]=tt.useState(!1),[u,f]=tt.useState(Va.default),[d,h]=tt.useState(!0),[x,y]=tt.useState("LISTENING"),[m,v]=tt.useState(!1),[M,S]=tt.useState(!1),[g,p]=tt.useState([]),[T,I]=tt.useState([]),[R,P]=tt.useState(""),[U,O]=tt.useState(""),[A,D]=tt.useState(!1),[W,Z]=tt.useState(""),[F,j]=tt.useState(""),[w,Y]=tt.useState(0),[le,q]=tt.useState(!1),[J,H]=tt.useState(!1),[K,N]=tt.useState(!1),[z,_e]=tt.useState(!1),[Ee,ge]=tt.useState(!1),[ze,ue]=tt.useState(!1),[oe,Re]=tt.useState(""),[We,Be]=tt.useState(null),[ut,wt]=tt.useState({cpu:23,mem:41,gpu:15,net:2.4,temp:52}),[b,Me]=tt.useState(!1),[he,V]=tt.useState(!1),[G,ie]=tt.useState(""),Ce=tt.useRef(crypto.randomUUID()),Ae=tt.useRef([]);tt.useEffect(()=>{Zm(u),X(),Ge(),ce()},[]),tt.useEffect(()=>{const ee=()=>j(new Date().toLocaleTimeString("en-US",{hour12:!1}));ee();const ve=setInterval(ee,1e3);return()=>clearInterval(ve)},[]),tt.useEffect(()=>{if(b){const ee=setInterval(()=>{Y(za.getLevel())},50);return()=>clearInterval(ee)}else{const ee=setInterval(()=>{Y(m?.3+Math.random()*.7:x==="LISTENING"?Math.random()*.3:Math.random()*.05)},50);return()=>clearInterval(ee)}},[b,m,x]);const ce=async()=>{const ee=await eg();wt({cpu:ee.cpu,mem:ee.memory||41,gpu:Math.round(Math.random()*40+10),net:ee.downlink||2.4,temp:52})};tt.useEffect(()=>{const ee=setInterval(ce,5e3);return()=>clearInterval(ee)},[]);const X=async()=>{const ee=await cd();if(ee.length===0){const ve=[{key:"assistant_name",value:"WEAID",category:"identity",updated:new Date().toISOString().split("T")[0]},{key:"platform",value:"Web Browser",category:"identity",updated:new Date().toISOString().split("T")[0]},{key:"version",value:"Mark LIII",category:"identity",updated:new Date().toISOString().split("T")[0]}];for(const Ie of ve)await i1(Ie);I(ve)}else I(ee)},Ge=async()=>{},be=tt.useCallback((ee,ve="sys")=>{p(Ie=>[...Ie.slice(-100),{text:ee,tag:ve,timestamp:xf()}])},[]),B=tt.useCallback(async()=>{if(!W.trim())return;const ee=W;Z(""),ie(""),be(`You: ${ee}`,"you"),Ae.current.push({role:"user",text:ee,timestamp:xf()}),(await p1(ee)).forEach(Ne=>be(Ne,"sys"));const Ie=ee.toLowerCase();if(Ie.startsWith("/weather")){const Ne=ee.split(" ").slice(1).join(" ")||"Seoul";be(`SYS: Fetching weather for ${Ne}...`,"sys"),y("THINKING");const Fe=await w1(Ne);Be(Fe),P(`WEATHER — ${Fe.city}`),O(`Temperature: ${Fe.temperature}°C
Humidity: ${Fe.humidity}%
Wind: ${Fe.windspeed} km/h
Condition: ${Fe.description} ${Fe.icon}`),D(!0),be(`🌤️ weather → ${Fe.temperature}°C, ${Fe.description}`,"file"),y("LISTENING");return}if(Ie.startsWith("/search")||Ie.startsWith("/news")){const Ne=ee.split(" ").slice(1).join(" ");if(!Ne){be("ERR: Please provide a search query","err");return}be(`SYS: Searching for "${Ne}"...`,"sys"),y("THINKING");const Fe=await T1(Ne);Fe.length>0?(P(`SEARCH — ${Ne}`),O(Fe.map((it,ht)=>`${ht+1}. ${it.title}
   ${it.snippet.slice(0,100)}...
   ${it.url}`).join(`

`)),D(!0),be(`🔍 search → ${Fe.length} results found`,"file")):be("SYS: No results found","sys"),y("LISTENING");return}if(Ie==="/clear"){p([]);return}if(Ie==="/status"){const Ne=await eg();be(`SYS: CPU ${Ne.cpu}% | Memory ${Ne.memory}% | Online: ${Ne.online} | Connection: ${Ne.connectionType}`,"sys");return}if(Ie==="/plugins"){const Ne=d1();be(`SYS: ${Ne.length} plugins active: ${Ne.map(Fe=>Fe.name).join(", ")}`,"sys");return}if(Ie==="/memory"){const Ne=await cd();be(`SYS: ${Ne.length} memories stored`,"sys"),H(!0);return}if(Ie==="/help"){be("SYS: Commands: /weather [city], /search [query], /news [query], /clear, /status, /plugins, /memory, /help","sys");return}if(oe||gf()){y("THINKING");try{v(!0),y("SPEAKING");const Ne=await Qm(ee);be(`WEAID: ${Ne}`,"ai"),Ae.current.push({role:"ai",text:Ne,timestamp:xf()}),he&&await Dl.speak(Ne)}catch(Ne){be(`ERR: ${Ne.message}`,"err")}v(!1),y("LISTENING")}else y("THINKING"),setTimeout(()=>{const Ne=["I understand your request. Please configure a Gemini API key in Settings for full AI capabilities.","Processing... For complete AI responses, add your Gemini API key in ⚙ Settings.","I'm running in offline mode. Connect a Gemini API key for intelligent responses.","Command received. Enable Gemini API in Settings for advanced AI assistance."],Fe=Ne[Math.floor(Math.random()*Ne.length)];be(`WEAID: ${Fe}`,"ai"),y("LISTENING")},800)},[W,oe,he,be]),C=async()=>{b?(za.stop(),Me(!1),be("SYS: Microphone deactivated","sys")):(await za.start(),Me(za.isActive),za.isActive?be("SYS: Microphone activated — real-time audio analysis","sys"):be("ERR: Could not access microphone","err"))},Q=()=>{he?(Dl.stopListening(),V(!1),ie(""),be("SYS: Voice recognition deactivated","sys")):(Dl.onResult((ee,ve)=>{ve?(Z(ee),ie(""),setTimeout(()=>{Z(""),de(ee)},100)):ie(ee)}),Dl.startListening(),V(!0),be("SYS: Voice recognition activated — speak your command","sys"))},de=async ee=>{Z(ee),setTimeout(()=>{Z(""),be(`You: ${ee}`,"you"),y("THINKING"),setTimeout(()=>{oe||gf()?Qm(ee).then(Ie=>{be(`WEAID: ${Ie}`,"ai"),y("LISTENING")}).catch(Ie=>{be(`ERR: ${Ie.message}`,"err"),y("LISTENING")}):(be("WEAID: API key not configured. Please add your Gemini API key in Settings.","ai"),y("LISTENING"))},500)},0)},ye=ee=>{const ve=Va[ee];ve&&(f(ve),Zm(ve),be(`SYS: Theme changed to "${ve.name}"`,"sys"))};tt.useEffect(()=>{const ee=ve=>{(ve.ctrlKey||ve.metaKey)&&ve.key==="k"?(ve.preventDefault(),_e(Ie=>!Ie)):(ve.ctrlKey||ve.metaKey)&&ve.key==="`"?(ve.preventDefault(),N(Ie=>!Ie)):(ve.ctrlKey||ve.metaKey)&&ve.shiftKey&&ve.key==="E"?(ve.preventDefault(),ge(Ie=>!Ie)):ve.key==="Escape"&&(_e(!1),N(!1),ge(!1),q(!1),H(!1))};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[]);const Le=[{id:"settings",label:"Open Settings",description:"Configure assistant",shortcut:"⚙",action:()=>q(!0)},{id:"memory",label:"Open Memory Panel",description:"View stored memories",shortcut:"🧠",action:()=>H(!0)},{id:"terminal",label:"Open Terminal",description:"Command-line interface",shortcut:"Ctrl+`",action:()=>N(!0)},{id:"code",label:"Open Code Editor",description:"Write and execute code",shortcut:"Ctrl+Shift+E",action:()=>ge(!0)},{id:"mute",label:M?"Unmute":"Mute",description:"Toggle audio output",action:()=>S(!M)},{id:"mic",label:b?"Stop Microphone":"Start Microphone",description:"Toggle real-time audio analysis",action:C},{id:"voice",label:he?"Stop Voice Recognition":"Start Voice Recognition",description:"Toggle speech-to-text",action:Q},{id:"3d",label:d?"Switch to 2D HUD":"Switch to 3D HUD",description:"Toggle 3D visualization",action:()=>h(!d)},{id:"clear",label:"Clear Logs",description:"Remove all log entries",action:()=>p([])},{id:"download",label:"Download Source Code",description:"Download project as ZIP file",action:vf},{id:"theme-default",label:"Theme: Default (Cyan)",description:"Classic cyan theme",action:()=>ye("default")},{id:"theme-ironman",label:"Theme: Iron Man",description:"Gold and red",action:()=>ye("ironman")},{id:"theme-tron",label:"Theme: Tron",description:"Neon cyan and magenta",action:()=>ye("tron")},{id:"theme-matrix",label:"Theme: Matrix",description:"Green code rain",action:()=>ye("matrix")},{id:"theme-cyberpunk",label:"Theme: Cyberpunk",description:"Pink and purple",action:()=>ye("cyberpunk")}],Ve=ee=>ee==="memory"?`${T.length} memories stored`:ee==="theme default"?(ye("default"),"Theme changed to Default"):ee==="theme ironman"?(ye("ironman"),"Theme changed to Iron Man"):ee==="theme tron"?(ye("tron"),"Theme changed to Tron"):ee==="theme matrix"?(ye("matrix"),"Theme changed to Matrix"):ee==="theme cyberpunk"?(ye("cyberpunk"),"Theme changed to Cyberpunk"):ee==="weather"?We?`${We.city}: ${We.temperature}°C, ${We.description}`:"No weather data. Use /weather [city] first.":`Unknown command: ${ee}. Type "help" for available commands.`;return tt.useEffect(()=>()=>{Ae.current.length>0&&o1({id:Ce.current,timestamp:new Date().toISOString(),messages:Ae.current})},[]),re.jsxs("div",{className:"w-full h-full flex flex-col overflow-hidden",style:{background:u.bg},children:[re.jsxs("header",{className:"h-10 flex items-center justify-between px-4 border-b shrink-0",style:{borderColor:u.border,background:u.panel},children:[re.jsxs("div",{className:"flex items-center gap-3",children:[re.jsx("span",{className:"text-[10px] font-bold",style:{color:u.pri},children:"◈"}),re.jsx("span",{className:"text-[10px] font-bold tracking-wider",style:{color:u.white},children:s}),re.jsx("span",{className:"text-[8px] px-2 py-0.5 rounded border",style:{borderColor:u.borderA,color:u.textDim},children:"PROTOCOL LIII"}),G&&re.jsxs("span",{className:"text-[8px] italic animate-pulse",style:{color:u.acc},children:["🎙 ",G]})]}),re.jsxs("div",{className:"flex items-center gap-4",children:[re.jsx("span",{className:"text-[8px]",style:{color:u.textDim},children:oe||gf()?"🟢 AI Connected":"🔴 No API Key"}),re.jsx("span",{className:"text-[8px]",style:{color:u.textDim},children:b?"🎙 Mic Active":"🔇 Mic Off"}),re.jsx("button",{onClick:vf,className:"px-2 py-0.5 text-[8px] font-bold border rounded transition-all hover:opacity-80",style:{borderColor:u.borderB,color:u.pri},title:"Download source code as ZIP",children:"📥 DOWNLOAD"}),re.jsx("span",{className:"text-[10px] font-mono",style:{color:u.textMed},children:F})]})]}),re.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[re.jsxs("aside",{className:"w-[148px] flex flex-col gap-1.5 p-2 border-r overflow-y-auto shrink-0",style:{borderColor:u.border,background:u.panel},children:[re.jsx("div",{className:"text-[7px] uppercase tracking-wider px-1 mb-1",style:{color:u.textDim},children:"Quick Access"}),re.jsx(Zi,{icon:"⚙",label:"SETTINGS",onClick:()=>q(!0),theme:u}),re.jsx(Zi,{icon:"🧠",label:"MEMORY",onClick:()=>H(!0),theme:u}),re.jsx(Zi,{icon:"💻",label:"TERMINAL",onClick:()=>N(!0),theme:u}),re.jsx(Zi,{icon:"📝",label:"CODE",onClick:()=>ge(!0),theme:u}),re.jsx(Zi,{icon:M?"🔇":"🎙",label:M?"UNMUTE":"MUTE",onClick:()=>S(!M),active:M,activeColor:u.red,theme:u}),re.jsx(Zi,{icon:"🎤",label:b?"MIC ON":"MIC OFF",onClick:C,active:b,activeColor:u.green,theme:u}),re.jsx(Zi,{icon:"🗣",label:he?"VOICE ON":"VOICE",onClick:Q,active:he,activeColor:u.acc,theme:u}),re.jsx(Zi,{icon:d?"3D":"2D",label:"HUD MODE",onClick:()=>h(!d),theme:u}),re.jsx(Zi,{icon:"📥",label:"DOWNLOAD",onClick:vf,theme:u}),re.jsx("div",{className:"flex-1"}),re.jsx("div",{className:"text-[7px] uppercase tracking-wider px-1 mb-1 mt-2",style:{color:u.textDim},children:"System"}),re.jsx(Il,{label:"CPU",value:ut.cpu,text:`${Math.round(ut.cpu)}%`,color:u.pri}),re.jsx(Il,{label:"RAM",value:ut.mem,text:`${Math.round(ut.mem)}%`,color:u.pri}),re.jsx(Il,{label:"GPU",value:ut.gpu,text:`${Math.round(ut.gpu)}%`,color:u.acc}),re.jsx(Il,{label:"NET",value:Math.min(100,ut.net*2),text:`${ut.net.toFixed(1)} MB/s`,color:u.green})]}),re.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[re.jsxs("div",{className:"flex-1 relative min-h-0",children:[d?re.jsx(KE,{state:x,speaking:m,muted:M,audioLevel:w,assistantName:s,themeColor:u.pri}):re.jsx("div",{className:"w-full h-full flex items-center justify-center",style:{background:u.bg},children:re.jsxs("div",{className:"text-center",children:[re.jsx("div",{className:"text-[24px] font-bold tracking-[0.3em] mb-4",style:{color:u.pri},children:s}),re.jsx("div",{className:"text-[10px]",style:{color:u.textDim},children:x})]})}),re.jsxs("div",{className:"absolute top-3 left-3 flex items-center gap-2",children:[re.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:x==="LISTENING"?u.green:x==="SPEAKING"?u.acc:x==="THINKING"?u.acc2:u.textDim}}),re.jsx("span",{className:"text-[8px] uppercase",style:{color:u.textDim},children:x})]}),re.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-2",children:[re.jsx("div",{className:"w-16 h-1.5 rounded-full overflow-hidden",style:{background:u.barBg},children:re.jsx("div",{className:"h-full rounded-full transition-all duration-75",style:{width:`${w*100}%`,backgroundColor:m?u.acc:u.pri}})}),re.jsx("span",{className:"text-[7px]",style:{color:u.textDim},children:m?"OUT":"IN"})]})]}),re.jsx("div",{className:"h-[180px] shrink-0 p-2 border-t",style:{borderColor:u.border},children:A?re.jsx(u1,{title:R,content:U,visible:A}):re.jsx("div",{className:"h-full flex items-center justify-center",children:re.jsx("div",{className:"text-[8px] text-center",style:{color:u.borderB},children:"◈ Content panel — use /weather, /search, /news commands"})})})]}),re.jsxs("aside",{className:"w-[340px] flex flex-col border-l shrink-0",style:{borderColor:u.border,background:u.panel},children:[re.jsxs("div",{className:"h-8 flex items-center justify-between px-3 border-b",style:{borderColor:u.border},children:[re.jsx("span",{className:"text-[8px] font-bold",style:{color:u.pri},children:"◈ ACTIVITY LOG"}),re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:[g.length," entries"]})]}),re.jsx("div",{className:"flex-1 overflow-hidden p-2",children:re.jsx(JE,{logs:g})}),re.jsx("div",{className:"p-2 border-t",style:{borderColor:u.border},children:re.jsxs("div",{className:"flex gap-2",children:[re.jsx("input",{type:"text",value:W,onChange:ee=>Z(ee.target.value),onKeyDown:ee=>ee.key==="Enter"&&B(),placeholder:"Type /help for commands...",className:"flex-1 h-8 border rounded px-3 text-[9px] font-mono outline-none",style:{background:u.dark,borderColor:u.border,color:u.text}}),re.jsx("button",{onClick:B,className:"h-8 px-3 border rounded text-[8px] font-bold transition-all",style:{borderColor:u.borderA,color:u.pri},children:"▸ SEND"})]})})]})]}),re.jsxs("footer",{className:"h-7 flex items-center justify-between px-4 border-t shrink-0",style:{borderColor:u.border,background:u.panel},children:[re.jsxs("div",{className:"flex items-center gap-4",children:[re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:["VOICE: ",re.jsx("span",{style:{color:u.textMed},children:t})]}),re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:["THEME: ",re.jsx("span",{style:{color:u.pri},children:u.name})]}),re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:["HUD: ",re.jsx("span",{style:{color:u.textMed},children:d?"3D":"2D"})]})]}),re.jsxs("div",{className:"flex items-center gap-4",children:[re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:[re.jsx("kbd",{className:"px-1 border rounded text-[6px]",style:{borderColor:u.border},children:"Ctrl+K"})," Commands"]}),re.jsxs("span",{className:"text-[7px]",style:{color:u.textDim},children:[re.jsx("kbd",{className:"px-1 border rounded text-[6px]",style:{borderColor:u.border},children:"Ctrl+`"})," Terminal"]}),re.jsx("span",{className:"text-[7px]",style:{color:u.borderB},children:"MARK LIII v2.0"})]})]}),re.jsx(e1,{open:le,onClose:()=>q(!1),assistantName:s,userName:"",voice:t,wakeWordEnabled:a,uiColor:u.pri,currentThemeName:Object.keys(Va).find(ee=>Va[ee]===u)||"default",geminiKey:oe,onAssistantNameChange:e,onVoiceChange:r,onWakeWordToggle:l,onThemeChange:ye,onGeminiKeyChange:ee=>{Re(ee),y1(ee)}}),re.jsx(l1,{open:J,onClose:()=>H(!1),entries:T,onDelete:async(ee,ve)=>{await r1(ee),I(Ie=>Ie.filter($e=>!($e.key===ee&&$e.category===ve))),be(`SYS: Memory "${ee}" deleted`,"sys")}}),re.jsx(c1,{open:K,onClose:()=>N(!1),onCommand:Ve}),re.jsx(f1,{open:z,onClose:()=>_e(!1),commands:Le}),re.jsx(g1,{open:Ee,onClose:()=>ge(!1)})]})}function Zi({icon:s,label:e,onClick:t,active:r=!1,activeColor:a="#00d4ff",theme:l}){return re.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-2 py-1.5 rounded text-left transition-all border",style:{borderColor:r?a:"transparent",background:r?`${a}14`:"transparent"},onMouseEnter:u=>{r||(u.currentTarget.style.borderColor=l.border,u.currentTarget.style.background=l.panel2)},onMouseLeave:u=>{r||(u.currentTarget.style.borderColor="transparent",u.currentTarget.style.background="transparent")},children:[re.jsx("span",{className:"text-[10px]",children:s}),re.jsx("span",{className:"text-[7px] font-bold tracking-wider",style:{color:r?a:l.textMed},children:e})]})}I_.createRoot(document.getElementById("root")).render(re.jsx(D1,{}));
