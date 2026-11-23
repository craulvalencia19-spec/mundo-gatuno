(()=>{var qm=Object.defineProperty;var Ed=(n,e)=>{for(var t in e)qm(n,t,{get:e[t],enumerable:!0})};var lf=0,nh=1,cf=2;var Do=1,uf=2,vr=3,Ui=0,Jt=1,pi=2,mi=0,ws=1,ih=2,sh=3,rh=4,hf=5;var is=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,xf=202,yf=203,Qa=204,el=205,vf=206,Mf=207,Sf=208,bf=209,Tf=210,Af=211,Ef=212,wf=213,Cf=214,tl=0,nl=1,il=2,Cs=3,sl=4,rl=5,ol=6,al=7,oh=0,Rf=1,Pf=2,ei=0,ah=1,lh=2,ch=3,uh=4,hh=5,dh=6,fh=7;var ph=300,cs=301,Is=302,kl=303,zl=304,No=306,ll=1e3,li=1001,cl=1002,Yt=1003,If=1004;var Uo=1005;var $t=1006,Vl=1007;var us=1008;var yn=1009,mh=1010,gh=1011,Mr=1012,Gl=1013,zn=1014,_n=1015,gi=1016,Hl=1017,Wl=1018,Sr=1020,_h=35902,xh=35899,yh=1021,vh=1022,xn=1023,ui=1026,hs=1027,Xl=1028,Fo=1029,ds=1030,ql=1031;var Yl=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Zl=35840,$l=35841,Jl=35842,Kl=35843,jl=36196,Ql=37492,ec=37496,tc=37488,nc=37489,Vo=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,xc=36492,yc=36494,vc=36495,Mc=36283,Sc=36284,Go=36285,bc=36286;var eo=2300,ul=2301,ja=2302,Bu=2303,ku=2400,zu=2401,Vu=2402;var Lf=3200;var Tc=0,Df=1,Bi="",St="srgb",to="srgb-linear",no="linear",gt="srgb";var Es=7680;var Gu=519,Nf=512,Uf=513,Ff=514,Ac=515,Of=516,Bf=517,Ec=518,kf=519,Hu=35044;var Mh="300 es",Fn=2e3,ur=2001;function Ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zf(){let n=io("canvas");return n.style.display="block",n}var wd={},hr=null;function Sh(...n){let e="THREE."+n.shift();hr?hr("log",e,...n):console.log(e,...n)}function Vf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Vf(n);let e="THREE."+n.shift();if(hr)hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=Vf(n);let e="THREE."+n.shift();if(hr)hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hl(...n){let e=n.join(" ");e in wd||(wd[e]=!0,Ze(...n))}function Gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Hf={[tl]:nl,[il]:ol,[sl]:al,[Cs]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:Cs},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cu=Math.PI/180,dl=180/Math.PI;function br(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function $m(n,e){return(n%e+e)%e}function uu(n,e,t){return(1-t)*n+t*e}function Hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ch=class Ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;var xe=Ch,Bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),v=Math.sin(b);p=Math.sin(p*b)/v,a=Math.sin(a*b)/v,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rh=class Rh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rh.prototype.isVector3=!0;var q=Rh,hu=new q,Cd=new Bn,Ph=class Ph{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],b=s[1],v=s[4],M=s[7],I=s[2],T=s[5],L=s[8];return r[0]=o*y+a*b+l*I,r[3]=o*m+a*v+l*T,r[6]=o*p+a*M+l*L,r[1]=c*y+h*b+d*I,r[4]=c*m+h*v+d*T,r[7]=c*p+h*M+d*L,r[2]=u*y+f*b+g*I,r[5]=u*m+f*v+g*T,r[8]=u*p+f*M+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(du.makeScale(e,t)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,t){return this.premultiply(du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var $e=Ph,du=new $e,Rd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:e,whitePoint:i,transfer:no,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),n}var lt=Jm();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=io("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=io("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Km=0,dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fu(s[o].image)):r.push(fu(s[o]))}else r=fu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fu(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var jm=0,pu=new q,dn=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,r=$t,o=us,a=xn,l=yn,c=n.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=br(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ph;dn.DEFAULT_ANISOTROPY=1;var Ih=class Ih{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,I=(p+1)/2,T=(h+u)/4,L=(d+y)/4,x=(g+m)/4;return v>M&&v>I?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=L/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=x/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;var It=Ih,pl=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new dn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},so=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bl=class Bl{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qm,e,e0)}lookAt(e,t,i){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),$i.crossVectors(i,bn),$i.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),$i.crossVectors(i,bn)),$i.normalize(),Aa.crossVectors(bn,$i),s[0]=$i.x,s[4]=Aa.x,s[8]=bn.x,s[1]=$i.y,s[5]=Aa.y,s[9]=bn.y,s[2]=$i.z,s[6]=Aa.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],v=i[7],M=i[11],I=i[15],T=s[0],L=s[4],x=s[8],R=s[12],k=s[1],N=s[5],z=s[9],se=s[13],ie=s[2],O=s[6],W=s[10],V=s[14],X=s[3],Q=s[7],he=s[11],ye=s[15];return r[0]=o*T+a*k+l*ie+c*X,r[4]=o*L+a*N+l*O+c*Q,r[8]=o*x+a*z+l*W+c*he,r[12]=o*R+a*se+l*V+c*ye,r[1]=h*T+d*k+u*ie+f*X,r[5]=h*L+d*N+u*O+f*Q,r[9]=h*x+d*z+u*W+f*he,r[13]=h*R+d*se+u*V+f*ye,r[2]=g*T+y*k+m*ie+p*X,r[6]=g*L+y*N+m*O+p*Q,r[10]=g*x+y*z+m*W+p*he,r[14]=g*R+y*se+m*V+p*ye,r[3]=b*T+v*k+M*ie+I*X,r[7]=b*L+v*N+M*O+I*Q,r[11]=b*x+v*z+M*W+I*he,r[15]=b*R+v*se+M*V+I*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],b=l*f-c*u,v=a*f-c*d,M=a*u-l*d,I=o*f-c*h,T=o*u-l*h,L=o*d-a*h;return t*(y*b-m*v+p*M)-i*(g*b-m*I+p*T)+s*(g*v-y*I+p*L)-r*(g*M-y*T+m*L)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=t*a-i*o,v=t*l-s*o,M=t*c-r*o,I=i*l-s*a,T=i*c-r*a,L=s*c-r*l,x=h*y-d*g,R=h*m-u*g,k=h*p-f*g,N=d*m-u*y,z=d*p-f*y,se=u*p-f*m,ie=b*se-v*z+M*N+I*k-T*R+L*x;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/ie;return e[0]=(a*se-l*z+c*N)*O,e[1]=(s*z-i*se-r*N)*O,e[2]=(y*L-m*T+p*I)*O,e[3]=(u*T-d*L-f*I)*O,e[4]=(l*k-o*se-c*R)*O,e[5]=(t*se-s*k+r*R)*O,e[6]=(m*M-g*L-p*v)*O,e[7]=(h*L-u*M+f*v)*O,e[8]=(o*z-a*k+c*x)*O,e[9]=(i*k-t*z-r*x)*O,e[10]=(g*T-y*M+p*b)*O,e[11]=(d*M-h*T-f*b)*O,e[12]=(a*R-o*N-l*x)*O,e[13]=(t*N-i*R+s*x)*O,e[14]=(y*v-g*I-m*b)*O,e[15]=(h*I-d*v+u*b)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,b=l*c,v=l*h,M=l*d,I=i.x,T=i.y,L=i.z;return s[0]=(1-(y+p))*I,s[1]=(f+M)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+v)*L,s[9]=(m-b)*L,s[10]=(1-(u+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zn.copy(this);let c=1/o,h=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Fn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Fn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ur)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Fn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Fn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ur)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bl.prototype.isMatrix4=!0;var mt=Bl,Ks=new q,Zn=new mt,Qm=new q(0,0,0),e0=new q(1,1,1),$i=new q,Aa=new q,bn=new q,Id=new mt,Ld=new Bn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t0=0,Dd=new q,js=new Bn,Ci=new mt,Ea=new q,Wr=new q,n0=new q,i0=new Bn,Nd=new q(1,0,0),Ud=new q(0,1,0),Fd=new q(0,0,1),Od={type:"added"},s0={type:"removed"},Qs={type:"childadded",child:null},mu={type:"childremoved",child:null},Ft=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new q,t=new jn,i=new Bn,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new $e}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ea.copy(e):Ea.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Wr,Ea,this.up):Ci.lookAt(Ea,Wr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ci),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new q(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},r0={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new On;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},wa={h:0,s:0,l:0};function gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=$m(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let i=Wf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return lt.workingToColorSpace(en.copy(this),e),Math.round(ct(en.r*255,0,255))*65536+Math.round(ct(en.g*255,0,255))*256+Math.round(ct(en.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(en.copy(this),t);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=St){lt.workingToColorSpace(en.copy(this),e);let t=en.r,i=en.g,s=en.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(wa);let i=uu(Ji.h,wa.h,t),s=uu(Ji.s,wa.s,t),r=uu(Ji.l,wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new qe;qe.NAMES=Wf;var oo=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new q,Ri=new q,_u=new q,Pi=new q,er=new q,tr=new q,Bd=new q,xu=new q,yu=new q,vu=new q,Mu=new It,Su=new It,bu=new It,ts=class n{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Ri.subVectors(i,t),_u.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ri),l=$n.dot(_u),c=Ri.dot(Ri),h=Ri.dot(_u),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Mu.setScalar(0),Su.setScalar(0),bu.setScalar(0),Mu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mu,r.x),o.addScaledVector(Su,r.y),o.addScaledVector(bu,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Ri.subVectors(e,t),$n.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),tr.subVectors(r,i),xu.subVectors(e,i);let l=er.dot(xu),c=tr.dot(xu);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,s);let h=er.dot(yu),d=tr.dot(yu);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(er,o);vu.subVectors(e,r);let f=er.dot(vu),g=tr.dot(vu);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(tr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Bd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Bd,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Ra.subVectors(this.max,Xr),nr.subVectors(e.a,Xr),ir.subVectors(e.b,Xr),sr.subVectors(e.c,Xr),Ki.subVectors(ir,nr),ji.subVectors(sr,ir),vs.subVectors(nr,sr);let t=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-vs.z,vs.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,vs.z,0,-vs.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-vs.y,vs.x,0];return!Tu(t,nr,ir,sr,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,nr,ir,sr,Ra))?!1:(Pa.crossVectors(Ki,ji),t=[Pa.x,Pa.y,Pa.z],Tu(t,nr,ir,sr,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new q,new q,new q,new q,new q,new q,new q,new q],Jn=new q,Ca=new sn,nr=new q,ir=new q,sr=new q,Ki=new q,ji=new q,vs=new q,Xr=new q,Ra=new q,Pa=new q,Ms=new q;function Tu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ut=new q,Ia=new xe,o0=0,rn=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},a0=new sn,qr=new q,Au=new q,An=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):a0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Au)),this.expandByPoint(qr.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},l0=0,Un=new mt,Eu=new Ft,rr=new q,Tn=new sn,Yr=new sn,qt=new q,kt=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Tn.min,Yr.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,Yr.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(Yr.min),Tn.expandByPoint(Yr.max))}Tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),qt.add(rr)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new q,l[x]=new q;let c=new q,h=new q,d=new q,u=new xe,f=new xe,g=new xe,y=new q,m=new q;function p(x,R,k){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,k),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,k),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[x].add(y),a[R].add(y),a[k].add(y),l[x].add(m),l[R].add(m),l[k].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,R=b.length;x<R;++x){let k=b[x],N=k.start,z=k.count;for(let se=N,ie=N+z;se<ie;se+=3)p(e.getX(se+0),e.getX(se+1),e.getX(se+2))}let v=new q,M=new q,I=new q,T=new q;function L(x){I.fromBufferAttribute(s,x),T.copy(I);let R=a[x];v.copy(R),v.sub(I.multiplyScalar(I.dot(R))).normalize(),M.crossVectors(T,R);let N=M.dot(l[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,N)}for(let x=0,R=b.length;x<R;++x){let k=b[x],N=k.start,z=k.count;for(let se=N,ie=N+z;se<ie;se+=3)L(e.getX(se+0)),L(e.getX(se+1)),L(e.getX(se+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,d=new q;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new rn(u,h,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var c0=0,Fi=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=br(),this.name="",this.type="Material",this.blending=ws,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new q,wu=new q,La=new q,Qi=new q,Cu=new q,Da=new q,Ru=new q,co=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wu.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(wu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=Qi.dot(this.direction),l=-Qi.dot(La),c=Qi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wu).addScaledVector(La,u),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){Cu.subVectors(t,e),Da.subVectors(i,e),Ru.crossVectors(Cu,Da);let o=this.direction.dot(Ru),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);let l=a*this.direction.dot(Da.crossVectors(Qi,Da));if(l<0)return null;let c=a*this.direction.dot(Cu.cross(Qi));if(c<0||l+c>o)return null;let h=-a*Qi.dot(Ru);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},uo=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kd=new mt,Ss=new co,Na=new An,zd=new q,Ua=new q,Fa=new q,Oa=new q,Pu=new q,Ba=new q,Vd=new q,ka=new q,bt=class extends Ft{constructor(e=new kt,t=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Pu.fromBufferAttribute(d,e),o?Ba.addScaledVector(Pu,h):Ba.addScaledVector(Pu.sub(t),h))}t.add(Ba)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Na.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Na,zd)===null||Ss.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(kd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(kd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,I=v;M<I;M+=3){let T=a.getX(M),L=a.getX(M+1),x=a.getX(M+2);s=za(this,p,e,i,c,h,d,T,L,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=za(this,o,e,i,c,h,d,b,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,I=v;M<I;M+=3){let T=M,L=M+1,x=M+2;s=za(this,p,e,i,c,h,d,T,L,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,v=m+1,M=m+2;s=za(this,o,e,i,c,h,d,b,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function u0(n,e,t,i,s,r,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;ka.copy(a),ka.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:n}}function za(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ua),n.getVertexPosition(l,Fa),n.getVertexPosition(c,Oa);let h=u0(n,e,t,i,Ua,Fa,Oa,Vd);if(h){let d=new q;ts.getBarycoord(Vd,Ua,Fa,Oa,d),s&&(h.uv=ts.getInterpolatedAttribute(s,a,l,c,d,new xe)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,l,c,d,new xe)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,l,c,d,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new q,materialIndex:0};ts.getNormal(Ua,Fa,Oa,u.normal),h.face=u,h.barycoord=d}return h}var ns=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Yt,h=Yt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new mt,Gd=new mt,Va=[],Hd=new sn,h0=new mt,Zr=new bt,$r=new An,fo=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Hd.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),$r.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Gd.multiplyMatrices(i,or),Zr.matrixWorld=Gd,Zr.raycast(e,Va);for(let o=0,a=Va.length;o<a;o++){let l=Va[o];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Xl,_n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Iu=new q,d0=new q,f0=new $e,ai=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Iu.subVectors(i,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||f0.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new An,p0=new xe(.5,.5),Ga=new q,ss=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],v=r[13],M=r[14],I=r[15];if(s[0].setComponents(c-o,f-h,p-g,I-b).normalize(),s[1].setComponents(c+o,f+h,p+g,I+b).normalize(),s[2].setComponents(c+a,f+d,p+y,I+v).normalize(),s[3].setComponents(c-a,f-d,p-y,I-v).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,I-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,I-M).normalize(),t===Fn)s[5].setComponents(c+l,f+u,p+m,I+M).normalize();else if(t===ur)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=p0.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=new mt,ri=new ss,gl=class n{constructor(){this.coordinateSystem=Fn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let s=t.cameras[i];if(si.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),ri.setFromProjectionMatrix(si,s.coordinateSystem,s.reversedDepth),ri.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let s=t.cameras[i];if(si.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),ri.setFromProjectionMatrix(si,s.coordinateSystem,s.reversedDepth),ri.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let s=t.cameras[i];if(si.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),ri.setFromProjectionMatrix(si,s.coordinateSystem,s.reversedDepth),ri.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let s=t.cameras[i];if(si.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),ri.setFromProjectionMatrix(si,s.coordinateSystem,s.reversedDepth),ri.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let s=t.cameras[i];if(si.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),ri.setFromProjectionMatrix(si,s.coordinateSystem,s.reversedDepth),ri.containsPoint(e))return!0}return!1}clone(){return new n}};function Lu(n,e){return n-e}function m0(n,e){return n.z-e.z}function g0(n,e){return e.z-n.z}var Wu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=s}reset(){this.list.length=0,this.index=0}},gn=new mt,_0=new qe(1,1,1),Wd=new ss,x0=new gl,Ha=new sn,Ts=new An,Jr=new q,Xd=new q,y0=new q,Du=new Wu,tn=new bt,Wa=[];function v0(n,e,t=0){let i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){let s=n.count;for(let r=0;r<s;r++)for(let o=0;o<i;o++)e.setComponent(r+t,o,n.getComponent(r,o))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function As(n,e){if(n.constructor!==e.constructor){let t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{let t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}var po=class extends bt{constructor(e,t,i=t*2,s){super(new kt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new ns(t,e,e,xn,_n);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new ns(t,e,e,Fo,zn);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new ns(t,e,e,xn,_n);i.colorSpace=lt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(i*l),d=new rn(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=i>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new rn(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let s=e.getAttribute(i),r=t.getAttribute(i);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,gn),this.getBoundingBoxAt(r,Ha).applyMatrix4(gn),e.union(Ha)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,gn),this.getBoundingSphereAt(r,Ts).applyMatrix4(gn),e.union(Ts)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Lu),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=i):(s=this._instanceInfo.length,this._instanceInfo.push(i));let r=this._matricesTexture;gn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(_0.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?o.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Lu),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,s=i.getIndex()!==null,r=i.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let d=t.getAttribute(h),u=i.getAttribute(h);v0(d,u,l);let f=d.itemSize;for(let g=d.count,y=c;g<y;g++){let m=l+g;for(let p=0;p<f;p++)u.setComponent(m,p,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){let h=a.indexStart,d=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let s=0,r=i.length;s<r;s++)i[s].active&&i[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,s=i.map((o,a)=>a).sort((o,a)=>i[o].vertexStart-i[a].vertexStart),r=this.geometry;for(let o=0,a=i.length;o<a;o++){let l=s[o],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,g=f.array,y=e-d;for(let m=h;m<h+u;m++)g[m]=g[m]+y;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let g=u[f],{array:y,itemSize:m}=g;y.copyWithin(e*m,h*m,(h+d)*m),g.addUpdateRange(e*m,d*m),g.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new sn,o=i.index,a=i.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Jr.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new An;this.getBoundingBoxAt(e,Ha),Ha.getCenter(r.center);let o=i.index,a=i.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;o&&(d=o.getX(d)),Jr.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(Jr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Lu);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);As(this._multiDrawCounts,s),As(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),As(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),As(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),As(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new kt,this._initializeGeometry(r));let o=this.geometry;r.index&&As(r.index.array,o.index.array);for(let a in r.attributes)As(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let i=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;tn.material=this.material,tn.geometry.index=o.index,tn.geometry.attributes=o.attributes,tn.geometry.boundingBox===null&&(tn.geometry.boundingBox=new sn),tn.geometry.boundingSphere===null&&(tn.geometry.boundingSphere=new An);for(let a=0,l=i.length;a<l;a++){if(!i[a].visible||!i[a].active)continue;let c=i[a].geometryIndex,h=s[c];tn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,tn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,tn.geometry.boundingBox),this.getBoundingSphereAt(c,tn.geometry.boundingSphere),tn.raycast(e,Wa);for(let d=0,u=Wa.length;d<u;d++){let f=Wa[d];f.object=this,f.batchId=a,t.push(f)}Wa.length=0}tn.material=null,tn.geometry.index=null,tn.geometry.attributes={},tn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,a=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data,m=i.isArrayCamera?x0:Wd;f&&!i.isArrayCamera&&(gn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Wd.setFromProjectionMatrix(gn,i.coordinateSystem,i.reversedDepth));let p=0;if(this.sortObjects){gn.copy(this.matrixWorld).invert(),Jr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(gn),Xd.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(gn);for(let M=0,I=c.length;M<I;M++)if(c[M].visible&&c[M].active){let T=c[M].geometryIndex;this.getMatrixAt(M,gn),this.getBoundingSphereAt(T,Ts).applyMatrix4(gn);let L=!1;if(f&&(L=!m.intersectsSphere(Ts,i)),!L){let x=u[T],R=y0.subVectors(Ts.center,Jr).dot(Xd);Du.push(x.start,x.count,R,M)}}let b=Du.list,v=this.customSort;v===null?b.sort(r.transparent?g0:m0):v.call(this,b,i);for(let M=0,I=b.length;M<I;M++){let T=b[M];h[p]=T.start*a*l,d[p]=T.count*l,y[p]=T.index,p++}Du.reset()}else for(let b=0,v=c.length;b<v;b++)if(c[b].visible&&c[b].active){let M=c[b].geometryIndex,I=!1;if(f&&(this.getMatrixAt(b,gn),this.getBoundingSphereAt(M,Ts).applyMatrix4(gn),I=!m.intersectsSphere(Ts,i)),!I){let T=u[M];h[p]=T.start*a*l,d[p]=T.count*l,y[p]=b,p++}}g.needsUpdate=!0,this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,i,s,r,o){this.onBeforeRender(e,null,s,r,o)}};var pr=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qd=new mt,Xu=new co,Xa=new An,qa=new q,mo=class extends Ft{constructor(e=new kt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;qd.copy(s).invert(),Xu.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);qa.fromBufferAttribute(d,m),Yd(qa,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)qa.fromBufferAttribute(d,g),Yd(qa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yd(n,e,t,i,s,r,o){let a=Xu.distanceSqToPoint(n);if(a<t){let l=new q;Xu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var go=class extends dn{constructor(e=[],t=cs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_o=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends dn{constructor(e,t,i=zn,s,r,o,a=Yt,l=Yt,c,h=ui,d=1){if(h!==ui&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_l=class extends Oi{constructor(e,t=zn,i=cs,s,r,o=Yt,a=Yt,l,c=ui){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kn=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2));function g(y,m,p,b,v,M,I,T,L,x,R){let k=M/L,N=I/x,z=M/2,se=I/2,ie=T/2,O=L+1,W=x+1,V=0,X=0,Q=new q;for(let he=0;he<W;he++){let ye=he*N-se;for(let Ce=0;Ce<O;Ce++){let We=Ce*k-z;Q[y]=We*b,Q[m]=ye*v,Q[p]=ie,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Ce/L),d.push(1-he/x),V+=1}}for(let he=0;he<x;he++)for(let ye=0;ye<L;ye++){let Ce=u+ye+O*he,We=u+ye+O*(he+1),ee=u+(ye+1)+O*(he+1),F=u+(ye+1)+O*he;l.push(Ce,We,F),l.push(We,ee,F),X+=6}a.addGroup(f,X,R),f+=X,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new xe:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new q,s=[],r=[],o=[],a=new q,l=new mt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new q)}r[0]=new q,o[0]=new q;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends wn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends mr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Zd=new q,$d=new q,Nu=new bh,Uu=new bh,Fu=new bh,yl=class extends wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new q){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($d.subVectors(s[0],s[1]).add(s[0]),c=$d);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Zd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Nu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Uu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Fu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Nu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Uu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Fu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Nu.calc(l),Uu.calc(l),Fu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function M0(n,e){let t=1-n;return t*t*e}function S0(n,e){return 2*(1-n)*n*e}function b0(n,e){return n*n*e}function jr(n,e,t,i){return M0(n,e)+S0(n,t)+b0(n,i)}function T0(n,e){let t=1-n;return t*t*t*e}function A0(n,e){let t=1-n;return 3*t*t*n*e}function E0(n,e){return 3*(1-n)*n*n*e}function w0(n,e){return n*n*n*e}function Qr(n,e,t,i,s){return T0(n,e)+A0(n,t)+E0(n,i)+w0(n,s)}var yo=class extends wn{constructor(e=new xe,t=new xe,i=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new xe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(e,s.x,r.x,o.x,a.x),Qr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends wn{constructor(e=new q,t=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new q){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(e,s.x,r.x,o.x,a.x),Qr(e,s.y,r.y,o.y,a.y),Qr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends wn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends wn{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends wn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(jr(e,s.x,r.x,o.x),jr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends wn{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(jr(e,s.x,r.x,o.x),jr(e,s.y,r.y,o.y),jr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Jd(a,l.x,c.x,h.x,d.x),Jd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},qu=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:yl,CubicBezierCurve:yo,CubicBezierCurve3:vl,EllipseCurve:mr,LineCurve:vo,LineCurve3:Ml,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Sl,SplineCurve:So}),bl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new qu[s.type]().fromJSON(s))}return this}},di=class extends bl{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vo(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Mo(this.currentPoint.clone(),new xe(e,t),new xe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new yo(this.currentPoint.clone(),new xe(e,t),new xe(i,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new So(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new mr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Kn=class extends di{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new di().fromJSON(s))}return this}};function C0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Xf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=D0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],g=n[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return bo(r,o,t,a,l,c,0),o}function Xf(n,e,t,i,s){let r;if(s===W0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Kd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Kd(o/i|0,n[o],n[o+1],r);return r&&gr(r,r.next)&&(Ao(r),r=r.next),r}function Rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gr(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Ao(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function bo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&B0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?P0(n,i,s,r):R0(n)){e.push(l.i,n.i,c.i),Ao(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=I0(Rs(n),e),bo(n,e,t,i,s,r,2)):o===2&&L0(n,e,t,i,s,r):bo(Rs(n),e,t,i,s,r,1);break}}}function R0(n){let e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Kr(s,a,r,l,o,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Rt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),y=Math.max(a,l,c),m=Math.max(h,d,u),p=Yu(f,g,e,t,i),b=Yu(y,m,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Kr(a,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Kr(a,h,l,d,c,u,M.x,M.y)&&Rt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Kr(a,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Kr(a,h,l,d,c,u,M.x,M.y)&&Rt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function I0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!gr(i,s)&&Yf(i,t,t.next,s)&&To(i,s)&&To(s,i)&&(e.push(i.i,t.i,s.i),Ao(t),Ao(t.next),t=n=s),t=t.next}while(t!==n);return Rs(t)}function L0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V0(o,a)){let l=Zf(o,a);o=Rs(o,o.next),l=Rs(l,l.next),bo(o,e,t,i,s,r,0),bo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function D0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Xf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(z0(c))}s.sort(N0);for(let r=0;r<s.length;r++)t=U0(s[r],t);return t}function N0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function U0(n,e){let t=F0(n,e);if(!t)return e;let i=Zf(t,n);return Rs(i,i.next),Rs(t,t.next)}function F0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(gr(n,t))return t;do{if(gr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&qf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);To(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&O0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function O0(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function B0(n,e,t,i){let s=n;do s.z===0&&(s.z=Yu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,k0(s)}function k0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Yu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function z0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Kr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&qf(n,e,t,i,s,r,o,a)}function V0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!G0(n,e)&&(To(n,e)&&To(e,n)&&H0(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||gr(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gr(n,e){return n.x===e.x&&n.y===e.y}function Yf(n,e,t,i){let s=Za(Rt(n,e,t)),r=Za(Rt(n,e,i)),o=Za(Rt(t,i,n)),a=Za(Rt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ya(n,t,e)||r===0&&Ya(n,i,e)||o===0&&Ya(t,n,i)||a===0&&Ya(t,e,i))}function Ya(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Za(n){return n>0?1:n<0?-1:0}function G0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function To(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function H0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zf(n,e){let t=Zu(n.i,n.x,n.y),i=Zu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Kd(n,e,t,i){let s=Zu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ao(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var $u=class{static triangulate(e,t,i=2){return C0(e,t,i)}},ci=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];jd(e),Qd(i,e);let o=e.length;t.forEach(jd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Qd(i,t[l]);let a=$u.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function jd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var _r=class n extends kt{constructor(e=new Kn([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:X0,v,M=!1,I,T,L,x;if(p){v=p.getSpacedPoints(h),M=!0,u=!1;let B=p.isCatmullRomCurve3?p.closed:!1;I=p.computeFrenetFrames(h,B),T=new q,L=new q,x=new q}u||(m=0,f=0,g=0,y=0);let R=a.extractPoints(c),k=R.shape,N=R.holes;if(!ci.isClockWise(k)){k=k.reverse();for(let B=0,Z=N.length;B<Z;B++){let K=N[B];ci.isClockWise(K)&&(N[B]=K.reverse())}}function se(B){let K=10000000000000001e-36,re=B[0];for(let D=1;D<=B.length;D++){let P=D%B.length,C=B[P],ve=C.x-re.x,Te=C.y-re.y,Me=ve*ve+Te*Te,de=Math.max(Math.abs(C.x),Math.abs(C.y),Math.abs(re.x),Math.abs(re.y)),Le=K*de*de;if(Me<=Le){B.splice(P,1),D--;continue}re=C}}se(k),N.forEach(se);let ie=N.length,O=k;for(let B=0;B<ie;B++){let Z=N[B];k=k.concat(Z)}function W(B,Z,K){return Z||Ke("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Z,K)}let V=k.length;function X(B,Z,K){let re,D,P,C=B.x-Z.x,ve=B.y-Z.y,Te=K.x-B.x,Me=K.y-B.y,de=C*C+ve*ve,Le=C*Me-ve*Te;if(Math.abs(Le)>Number.EPSILON){let E=Math.sqrt(de),_=Math.sqrt(Te*Te+Me*Me),Y=Z.x-ve/E,oe=Z.y+C/E,me=K.x-Me/_,ge=K.y+Te/_,Se=((me-Y)*Me-(ge-oe)*Te)/(C*Me-ve*Te);re=Y+C*Se-B.x,D=oe+ve*Se-B.y;let ce=re*re+D*D;if(ce<=2)return new xe(re,D);P=Math.sqrt(ce/2)}else{let E=!1;C>Number.EPSILON?Te>Number.EPSILON&&(E=!0):C<-Number.EPSILON?Te<-Number.EPSILON&&(E=!0):Math.sign(ve)===Math.sign(Me)&&(E=!0),E?(re=-ve,D=C,P=Math.sqrt(de)):(re=C,D=ve,P=Math.sqrt(de/2))}return new xe(re/P,D/P)}let Q=[];for(let B=0,Z=O.length,K=Z-1,re=B+1;B<Z;B++,K++,re++)K===Z&&(K=0),re===Z&&(re=0),Q[B]=X(O[B],O[K],O[re]);let he=[],ye,Ce=Q.concat();for(let B=0,Z=ie;B<Z;B++){let K=N[B];ye=[];for(let re=0,D=K.length,P=D-1,C=re+1;re<D;re++,P++,C++)P===D&&(P=0),C===D&&(C=0),ye[re]=X(K[re],K[P],K[C]);he.push(ye),Ce=Ce.concat(ye)}let We;if(m===0)We=ci.triangulateShape(O,N);else{let B=[],Z=[];for(let K=0;K<m;K++){let re=K/m,D=f*Math.cos(re*Math.PI/2),P=g*Math.sin(re*Math.PI/2)+y;for(let C=0,ve=O.length;C<ve;C++){let Te=W(O[C],Q[C],P);ne(Te.x,Te.y,-D),re===0&&B.push(Te)}for(let C=0,ve=ie;C<ve;C++){let Te=N[C];ye=he[C];let Me=[];for(let de=0,Le=Te.length;de<Le;de++){let E=W(Te[de],ye[de],P);ne(E.x,E.y,-D),re===0&&Me.push(E)}re===0&&Z.push(Me)}}We=ci.triangulateShape(B,Z)}let ee=We.length,F=g+y;for(let B=0;B<V;B++){let Z=u?W(k[B],Ce[B],F):k[B];M?(L.copy(I.normals[0]).multiplyScalar(Z.x),T.copy(I.binormals[0]).multiplyScalar(Z.y),x.copy(v[0]).add(L).add(T),ne(x.x,x.y,x.z)):ne(Z.x,Z.y,0)}for(let B=1;B<=h;B++)for(let Z=0;Z<V;Z++){let K=u?W(k[Z],Ce[Z],F):k[Z];M?(L.copy(I.normals[B]).multiplyScalar(K.x),T.copy(I.binormals[B]).multiplyScalar(K.y),x.copy(v[B]).add(L).add(T),ne(x.x,x.y,x.z)):ne(K.x,K.y,d/h*B)}for(let B=m-1;B>=0;B--){let Z=B/m,K=f*Math.cos(Z*Math.PI/2),re=g*Math.sin(Z*Math.PI/2)+y;for(let D=0,P=O.length;D<P;D++){let C=W(O[D],Q[D],re);ne(C.x,C.y,d+K)}for(let D=0,P=N.length;D<P;D++){let C=N[D];ye=he[D];for(let ve=0,Te=C.length;ve<Te;ve++){let Me=W(C[ve],ye[ve],re);M?ne(Me.x,Me.y+v[h-1].y,v[h-1].x+K):ne(Me.x,Me.y,d+K)}}}S(),w();function S(){let B=s.length/3;if(u){let Z=0,K=V*Z;for(let re=0;re<ee;re++){let D=We[re];$(D[2]+K,D[1]+K,D[0]+K)}Z=h+m*2,K=V*Z;for(let re=0;re<ee;re++){let D=We[re];$(D[0]+K,D[1]+K,D[2]+K)}}else{for(let Z=0;Z<ee;Z++){let K=We[Z];$(K[2],K[1],K[0])}for(let Z=0;Z<ee;Z++){let K=We[Z];$(K[0]+V*h,K[1]+V*h,K[2]+V*h)}}i.addGroup(B,s.length/3-B,0)}function w(){let B=s.length/3,Z=0;G(O,Z),Z+=O.length;for(let K=0,re=N.length;K<re;K++){let D=N[K];G(D,Z),Z+=D.length}i.addGroup(B,s.length/3-B,1)}function G(B,Z){let K=B.length;for(;--K>=0;){let re=K,D=K-1;D<0&&(D=B.length-1);for(let P=0,C=h+m*2;P<C;P++){let ve=V*P,Te=V*(P+1),Me=Z+re+ve,de=Z+D+ve,Le=Z+D+Te,E=Z+re+Te;le(Me,de,Le,E)}}}function ne(B,Z,K){l.push(B),l.push(Z),l.push(K)}function $(B,Z,K){ue(B),ue(Z),ue(K);let re=s.length/3,D=b.generateTopUV(i,s,re-3,re-2,re-1);ae(D[0]),ae(D[1]),ae(D[2])}function le(B,Z,K,re){ue(B),ue(Z),ue(re),ue(Z),ue(K),ue(re);let D=s.length/3,P=b.generateSideWallUV(i,s,D-6,D-3,D-2,D-1);ae(P[0]),ae(P[1]),ae(P[3]),ae(P[1]),ae(P[2]),ae(P[3])}function ue(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function ae(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return q0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qu[s.type]().fromJSON(s)),new n(i,e.options)}},X0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new xe(r,o),new xe(a,l),new xe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-d),new xe(u,1-g),new xe(y,1-p)]:[new xe(a,1-l),new xe(h,1-d),new xe(f,1-g),new xe(m,1-p)]}};function q0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Eo=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let v=0;v<c;v++){let M=v*d-r;g.push(M,-b,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let v=b+c*p,M=b+c*(p+1),I=b+1+c*(p+1),T=b+1+c*p;f.push(v,M,T),f.push(M,I,T)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var rs=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new q,u=new q,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],v=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let T=I/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+M,1-v),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let v=h[p][b+1],M=h[p][b],I=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(v,M,T),(p!==i-1||l<Math.PI)&&f.push(M,I,T)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ef(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let s in i)e[s]=i[s]}return e}function ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Y0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var $f={clone:Ls,merge:on},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Tl=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fi=class extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Al=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $a(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:r=e,a=2*t-i;break;case Vu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zu:o=e,l=2*i-t;break;case Vu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+b*o[c+I]+v*o[l+I]+M*o[d+I];return r}},Cl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Rl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends os{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let y=(i-t)/(s-t),m=1-y;for(let p=0;p!==a;++p)r[p]=o[c+p]*m+o[l+p]*y;return r}let f=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],p=o[l+y],b=g*f+y*2,v=u[b],M=u[b+1],I=e*f+y*2,T=d[I],L=d[I+1],x=(i-t)/(s-t),R,k,N,z,se;for(let ie=0;ie<8;ie++){R=x*x,k=R*x,N=1-x,z=N*N,se=z*N;let W=se*t+3*z*x*v+3*N*R*T+k*s-i;if(Math.abs(W)<1e-10)break;let V=3*z*(v-t)+6*N*x*(T-v)+3*R*(s-T);if(Math.abs(V)<1e-10)break;x=x-W/V,x=Math.max(0,Math.min(1,x))}r[y]=se*m+3*z*x*M+3*N*R*L+k*p}return r}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case Bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Zm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ul;var as=class extends Cn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=eo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Il.prototype.ValueTypeName="color";var Ll=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Ll.prototype.ValueTypeName="number";var Dl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Cn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=eo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Nl.prototype.ValueTypeName="vector";var Ju={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(tf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!tf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function tf(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ul=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new Ul,Ps=class{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},Ku=class extends Error{constructor(e,t){super(e),this.response=t}},Co=class extends Ps{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ju.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:i,onError:s});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Di[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,y=0,m=new ReadableStream({start(p){b();function b(){d.read().then(({done:v,value:M})=>{if(v)p.close();else{y+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let T=0,L=h.length;T<L;T++){let x=h[T];x.onProgress&&x.onProgress(I)}p.enqueue(M),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Ku(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ju.add(`file:${e}`,c);let h=Di[e];delete Di[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Di[e];if(h===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ro=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ou=new mt,nf=new q,sf=new q,ju=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ur||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=new q,Ka=new Bn,oi=new q,Po=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,Ka,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ja,Ka,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new q,rf=new xe,of=new xe,nn=class extends Po{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,rf,of),t.subVectors(of,rf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xr=class extends Po{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qu=class extends ju{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Io=class extends Ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ar=-90,lr=1,Fl=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ar,lr,e,t);s.layers=this.layers,this.add(s);let r=new nn(ar,lr,e,t);r.layers=this.layers,this.add(r);let o=new nn(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new nn(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new nn(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new nn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ol=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ah="\\[\\]\\.:\\/",J0=new RegExp("["+Ah+"]","g"),Eh="[^"+Ah+"]",K0="[^"+Ah.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Q0=/(WCOD+)?/.source.replace("WCOD",K0),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),ng=new RegExp("^"+j0+Q0+eg+tg+"$"),ig=["material","materials","bones","map"],eh=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=ng.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ig.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=eh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var Lh=class Lh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lh.prototype.isMatrix2=!0;var th=Lh,af=new xe,Lo=class{constructor(e=new xe(1/0,1/0),t=new xe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=af.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,af).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Qn=class{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new di,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let b=[];for(let v=0,M=p.length;v<M;v++){let I=p[v],T=new Kn;T.curves=I.curves,b.push(T)}return b}function i(p,b){let v=b.length,M=!1;for(let I=v-1,T=0;T<v;I=T++){let L=b[I],x=b[T],R=x.x-L.x,k=x.y-L.y;if(Math.abs(k)>Number.EPSILON){if(k<0&&(L=b[T],R=-R,x=b[I],k=-k),p.y<L.y||p.y>x.y)continue;if(p.y===L.y){if(p.x===L.x)return!0}else{let N=k*(p.x-L.x)-R*(p.y-L.y);if(N===0)return!0;if(N<0)continue;M=!M}}else{if(p.y!==L.y)continue;if(x.x<=p.x&&p.x<=L.x||L.x<=p.x&&p.x<=x.x)return!0}}return M}let s=ci.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Kn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let d=[],u=[],f=[],g=0,y;u[g]=void 0,f[g]=[];for(let p=0,b=r.length;p<b;p++)a=r[p],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!h&&u[g]&&g++,u[g]={s:new Kn,p:y},u[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:y[0]});if(!u[0])return t(r);if(u.length>1){let p=!1,b=0;for(let v=0,M=u.length;v<M;v++)d[v]=[];for(let v=0,M=u.length;v<M;v++){let I=f[v];for(let T=0;T<I.length;T++){let L=I[T],x=!0;for(let R=0;R<u.length;R++)i(L.p,u[R].p)&&(v!==R&&b++,x?(x=!1,d[R].push(L)):p=!0);x&&d[v].push(L)}}b>0&&p===!1&&(f=d)}let m;for(let p=0,b=u.length;p<b;p++){l=u[p].s,c.push(l),m=f[p];for(let v=0,M=m.length;v<M;v++)l.holes.push(m[v].h)}return c}};function wh(n,e,t,i){let s=sg(i);switch(t){case yh:return n*e;case Xl:return n*e/s.components*s.byteLength;case Fo:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case ql:return n*e*2/s.components*s.byteLength;case vh:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case Yl:return n*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:case Kl:return Math.max(n,16)*Math.max(e,8)/4;case Zl:case Jl:return Math.max(n,8)*Math.max(e,8)/2;case jl:case Ql:case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:case Vo:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xc:case yc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Go:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(n){switch(n){case yn:case mh:return{byteLength:1,components:1};case Mr:case gh:case gi:return{byteLength:2,components:1};case Hl:case Wl:return{byteLength:2,components:4};case zn:case Gl:case _n:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window!="undefined"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function yp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function og(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,o_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
void main () {
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Ex=`#define MATCAP
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
}`,wx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:ag,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:xg,bsdfs:yg,iridescence_fragment:vg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Ag,color_fragment:Eg,color_pars_fragment:wg,color_pars_vertex:Cg,color_vertex:Rg,common:Pg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Fg,colorspace_fragment:Og,colorspace_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Vg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:Hg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:$g,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Kg,lights_pars_begin:jg,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,lightprobes_pars_fragment:c_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:x_,metalnessmap_pars_fragment:y_,morphinstance_vertex:v_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:T_,normal_fragment_begin:A_,normal_fragment_maps:E_,normal_pars_fragment:w_,normal_pars_vertex:C_,normal_vertex:R_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:B_,dithering_fragment:k_,dithering_pars_fragment:z_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:Z_,skinning_vertex:$_,skinnormal_vertex:J_,specularmap_fragment:K_,specularmap_pars_fragment:j_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:yx,linedashed_frag:vx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:Tx,meshmatcap_vert:Ax,meshmatcap_frag:Ex,meshnormal_vert:wx,meshnormal_frag:Cx,meshphong_vert:Rx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:kx,sprite_frag:zx},Fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},xi={basic:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:on([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:on([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:on([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:on([Fe.points,Fe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:on([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:on([Fe.common,Fe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:on([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:on([Fe.sprite,Fe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:on([Fe.common,Fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:on([Fe.lights,Fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xi.physical={uniforms:on([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var wc={r:0,b:0,g:0},Vx=new mt,vp=new $e;vp.set(-1,0,0,0,1,0,0,0,1);function Gx(n,e,t,i,s,r){let o=new qe(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let v=b.isScene===!0?b.background:null;if(v&&v.isTexture){let M=b.backgroundBlurriness>0;v=e.get(v,M)}return v}function g(b){let v=!1,M=f(b);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,v){let M=f(v);M&&(M.isCubeTexture||M.mapping===No)?(c===void 0&&(c=new bt(new kn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ls(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vp),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==gt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new Eo(2,2),new fn({name:"BackgroundMaterial",uniforms:Ls(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,v){b.getRGB(wc,Th(n)),t.buffers.color.setClear(wc.r,wc.g,wc.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:y,dispose:p}}function Hx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(N,z,se,ie,O){let W=!1,V=d(N,ie,se,z);r!==V&&(r=V,c(r.object)),W=f(N,ie,se,O),W&&g(N,ie,se,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(N,z,se,ie),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,z,se,ie){let O=ie.wireframe===!0,W=i[z.id];W===void 0&&(W={},i[z.id]=W);let V=N.isInstancedMesh===!0?N.id:0,X=W[V];X===void 0&&(X={},W[V]=X);let Q=X[se.id];Q===void 0&&(Q={},X[se.id]=Q);let he=Q[O];return he===void 0&&(he=u(l()),Q[O]=he),he}function u(N){let z=[],se=[],ie=[];for(let O=0;O<t;O++)z[O]=0,se[O]=0,ie[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:se,attributeDivisors:ie,object:N,attributes:{},index:null}}function f(N,z,se,ie){let O=r.attributes,W=z.attributes,V=0,X=se.getAttributes();for(let Q in X)if(X[Q].location>=0){let ye=O[Q],Ce=W[Q];if(Ce===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),ye===void 0||ye.attribute!==Ce||Ce&&ye.data!==Ce.data)return!0;V++}return r.attributesNum!==V||r.index!==ie}function g(N,z,se,ie){let O={},W=z.attributes,V=0,X=se.getAttributes();for(let Q in X)if(X[Q].location>=0){let ye=W[Q];ye===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));let Ce={};Ce.attribute=ye,ye&&ye.data&&(Ce.data=ye.data),O[Q]=Ce,V++}r.attributes=O,r.attributesNum=V,r.index=ie}function y(){let N=r.newAttributes;for(let z=0,se=N.length;z<se;z++)N[z]=0}function m(N){p(N,0)}function p(N,z){let se=r.newAttributes,ie=r.enabledAttributes,O=r.attributeDivisors;se[N]=1,ie[N]===0&&(n.enableVertexAttribArray(N),ie[N]=1),O[N]!==z&&(n.vertexAttribDivisor(N,z),O[N]=z)}function b(){let N=r.newAttributes,z=r.enabledAttributes;for(let se=0,ie=z.length;se<ie;se++)z[se]!==N[se]&&(n.disableVertexAttribArray(se),z[se]=0)}function v(N,z,se,ie,O,W,V){V===!0?n.vertexAttribIPointer(N,z,se,O,W):n.vertexAttribPointer(N,z,se,ie,O,W)}function M(N,z,se,ie){y();let O=ie.attributes,W=se.getAttributes(),V=z.defaultAttributeValues;for(let X in W){let Q=W[X];if(Q.location>=0){let he=O[X];if(he===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){let ye=he.normalized,Ce=he.itemSize,We=e.get(he);if(We===void 0)continue;let ee=We.buffer,F=We.type,S=We.bytesPerElement,w=F===n.INT||F===n.UNSIGNED_INT||he.gpuType===Gl;if(he.isInterleavedBufferAttribute){let G=he.data,ne=G.stride,$=he.offset;if(G.isInstancedInterleavedBuffer){for(let le=0;le<Q.locationSize;le++)p(Q.location+le,G.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<Q.locationSize;le++)m(Q.location+le);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let le=0;le<Q.locationSize;le++)v(Q.location+le,Ce/Q.locationSize,F,ye,ne*S,($+Ce/Q.locationSize*le)*S,w)}else{if(he.isInstancedBufferAttribute){for(let G=0;G<Q.locationSize;G++)p(Q.location+G,he.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let G=0;G<Q.locationSize;G++)m(Q.location+G);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let G=0;G<Q.locationSize;G++)v(Q.location+G,Ce/Q.locationSize,F,ye,Ce*S,Ce/Q.locationSize*G*S,w)}}else if(V!==void 0){let ye=V[X];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(Q.location,ye);break;case 3:n.vertexAttrib3fv(Q.location,ye);break;case 4:n.vertexAttrib4fv(Q.location,ye);break;default:n.vertexAttrib1fv(Q.location,ye)}}}}b()}function I(){R();for(let N in i){let z=i[N];for(let se in z){let ie=z[se];for(let O in ie){let W=ie[O];for(let V in W)h(W[V].object),delete W[V];delete ie[O]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let z=i[N.id];for(let se in z){let ie=z[se];for(let O in ie){let W=ie[O];for(let V in W)h(W[V].object),delete W[V];delete ie[O]}}delete i[N.id]}function L(N){for(let z in i){let se=i[z];for(let ie in se){let O=se[ie];if(O[N.id]===void 0)continue;let W=O[N.id];for(let V in W)h(W[V].object),delete W[V];delete O[N.id]}}}function x(N){for(let z in i){let se=i[z],ie=N.isInstancedMesh===!0?N.id:0,O=se[ie];if(O!==void 0){for(let W in O){let V=O[W];for(let X in V)h(V[X].object),delete V[X];delete O[W]}delete se[ie],Object.keys(se).length===0&&delete i[z]}}}function R(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Wx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let x=L===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==yn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_n&&!x)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:M,maxSamples:I,samples:T}}function qx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ai,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,v=b*4,M=p.clippingState||null;l.value=M,M=h(g,u,v,f);for(let I=0;I!==v;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==y;++v,M+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var fs=4,Kf=[.125,.215,.35,.446,.526,.582],Ds=20,Yx=256,Ho=new xr,jf=new qe,Dh=null,Nh=0,Uh=0,Fh=!1,Zx=new q,Rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Zx}=r;Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Nh,Uh),this._renderer.xr.enabled=Fh,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:gi,format:xn,colorSpace:to,depthBuffer:!1},s=Qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$x(r)),this._blurMaterial=Kx(r,e,t),this._ggxMaterial=Jx(r,e,t)}return s}_compileMaterial(e){let t=new bt(new kt,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,s,r){let l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jf),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new kn,new uo({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let I=this._cubeSize;Tr(s,M*I,v>2?I:0,I,I),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cs||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-fs?i-g+fs:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Tr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Ho),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Tr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,Ho)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ds;m>Ds&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let p=[],b=0;for(let L=0;L<Ds;++L){let x=L/y,R=Math.exp(-x*x/2);p.push(R),L===0?b+=R:L<m&&(b+=2*R)}for(let L=0;L<p.length;L++)p[L]=p[L]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let M=this._sizeLods[s],I=3*M*(s>v-fs?s-v+fs:0),T=4*(this._cubeSize-M);Tr(t,I,T,3*M,2*M),l.setRenderTarget(t),l.render(d,Ho)}};function $x(n){let e=[],t=[],i=[],s=n,r=n-fs+1+Kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-fs?l=Kf[o-n+fs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let L=T%3*2/3-1,x=T>2?0:-1,R=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];b.set(R,y*g*T),v.set(u,m*g*T);let k=[T,T,T,T,T,T];M.set(k,p*g*T)}let I=new kt;I.setAttribute("position",new rn(b,y)),I.setAttribute("uv",new rn(v,m)),I.setAttribute("faceIndex",new rn(M,p)),i.push(new bt(I,null)),s>fs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qf(n,e,t){let i=new En(n,e,t);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jx(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Kx(n,e,t){let i=new Float32Array(Ds),s=new q(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ep(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function tp(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pc=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:mi});r.uniforms.tEquirect.value=t;let o=new bt(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=$t),new Fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function jx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===kl||f===zl)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Pc(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===kl||f===zl,y=f===cs||f===Is;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Rc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new Rc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===kl?u.mapping=cs:f===zl&&(u.mapping=Is),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Qx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&hl("WebGLRenderer: "+i+" extension not supported."),s}}}function ey(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let v=0,M=b.length;v<M;v+=3){let I=b[v+0],T=b[v+1],L=b[v+2];u.push(I,T,T,L,L,I)}}else{let b=g.array;y=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){let I=v+0,T=v+1,L=v+2;u.push(I,T,T,L,L,I)}}let m=new(g.count>=65535?lo:ao)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ty(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ny(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iy(n,e,t){let i=new WeakMap,s=new It;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let R=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let M=a.attributes.position.count*v,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*I*4*d),L=new so(T,M,I,d);L.type=_n,L.needsUpdate=!0;let x=v*4;for(let k=0;k<d;k++){let N=m[k],z=p[k],se=b[k],ie=M*I*4*k;for(let O=0;O<N.count;O++){let W=O*x;f===!0&&(s.fromBufferAttribute(N,O),T[ie+W+0]=s.x,T[ie+W+1]=s.y,T[ie+W+2]=s.z,T[ie+W+3]=0),g===!0&&(s.fromBufferAttribute(z,O),T[ie+W+4]=s.x,T[ie+W+5]=s.y,T[ie+W+6]=s.z,T[ie+W+7]=0),y===!0&&(s.fromBufferAttribute(se,O),T[ie+W+8]=s.x,T[ie+W+9]=s.y,T[ie+W+10]=s.z,T[ie+W+11]=se.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new xe(M,I)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function sy(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ry={[ah]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function oy(n,e,t,i,s){let r=new En(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Oi(e,t):void 0}),o=new En(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),a=new kt;a.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let l=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bt(a,l),h=new xr(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(b,v){r.setSize(b,v),o.setSize(b,v);for(let M=0;M<m.length;M++){let I=m[M];I.setSize&&I.setSize(b,v)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;let v=r.width,M=r.height;for(let I=0;I<m.length;I++){let T=m[I];T.setSize&&T.setSize(v,M)}},this.begin=function(b,v){if(f||b.toneMapping===ei&&m.length===0)return!1;if(y=v,v!==null){let M=v.width,I=v.height;(r.width!==M||r.height!==I)&&this.setSize(M,I)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=ei,!0},this.hasRenderPass=function(){return p},this.end=function(b,v){b.toneMapping=g,f=!0;let M=r,I=o;for(let T=0;T<m.length;T++){let L=m[T];if(L.enabled!==!1&&(L.render(b,I,M,v),L.needsSwap!==!1)){let x=M;M=I,I=x}}if(d!==b.outputColorSpace||u!==b.toneMapping){d=b.outputColorSpace,u=b.toneMapping,l.defines={},lt.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");let T=ry[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(y),b.render(c,h),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Mp=new dn,kh=new Oi(1,1),Sp=new so,bp=new ml,Tp=new go,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function Er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dc(n,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ay(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function hy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;op.set(i),n.uniformMatrix2fv(this.addr,!1,op),Vt(t,i)}}function dy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),Vt(t,i)}}function fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),Vt(t,i)}}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function xy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?Ec:Ac,r=kh):r=Mp,t.setTexture2D(e||r,s)}function by(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function Ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Tp,s)}function Ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sp,s)}function Ey(n){switch(n){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return uy;case 35674:return hy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return yy;case 36295:return vy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}function wy(n,e){n.uniform1fv(this.addr,e)}function Cy(n,e){let t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function Ry(n,e){let t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function Py(n,e){let t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function Iy(n,e){let t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ly(n,e){let t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){let t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ny(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Fy(n,e){n.uniform3iv(this.addr,e)}function Oy(n,e){n.uniform4iv(this.addr,e)}function By(n,e){n.uniform1uiv(this.addr,e)}function ky(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function Vy(n,e){n.uniform4uiv(this.addr,e)}function Gy(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kh:o=Mp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Hy(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bp,r[o])}function Wy(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tp,r[o])}function Xy(n,e,t){let i=this.cache,s=e.length,r=Dc(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sp,r[o])}function qy(n){switch(n){case 5126:return wy;case 35664:return Cy;case 35665:return Ry;case 35666:return Py;case 35674:return Iy;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return ky;case 36295:return zy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}var zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}},Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qy(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function ap(n,e){n.seq.push(e),n.map[e.id]=e}function Yy(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ap(t,c===void 0?new zh(a,n,e):new Vh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Gh(a),ap(t,d)),t=d}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Yy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zy=37297,$y=0;function Jy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var cp=new $e;function Ky(n){lt._getMatrix(cp,lt.workingColorSpace,n);let e=`mat3( ${cp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case no:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function up(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jy(n.getShaderSource(e),a)}else return r}function jy(n,e){let t=Ky(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Qy={[ah]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[uh]:"ACESFilmic",[dh]:"AgX",[fh]:"Neutral",[hh]:"Custom"};function e1(n,e){let t=Qy[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new q;function t1(){lt.getLuminanceCoefficients(Cc);let n=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function i1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xo(n){return n!==""}function hp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(r1,a1)}var o1=new Map;function a1(n,e){let t=ot[e];if(t===void 0){let i=o1.get(e);if(i!==void 0)t=ot[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}var l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(l1,c1)}function c1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var u1={[Do]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function h1(n){return u1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d1={[cs]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function f1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":d1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var p1={[Is]:"ENVMAP_MODE_REFRACTION"};function m1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":p1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var g1={[oh]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function _1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":g1[n.combine]||"ENVMAP_BLENDING_NONE"}function x1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h1(t),c=f1(t),h=m1(t),d=_1(t),u=x1(t),f=n1(t),g=i1(r),y=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),p=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ot.tonemapping_pars_fragment:"",t.toneMapping!==ei?e1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),t1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Hh(o),o=hp(o,t),o=dp(o,t),a=Hh(a),a=hp(a,t),a=dp(a,t),o=fp(o),a=fp(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+o,M=b+p+a,I=lp(s,s.VERTEX_SHADER,v),T=lp(s,s.FRAGMENT_SHADER,M);s.attachShader(y,I),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(N){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(y)||"",se=s.getShaderInfoLog(I)||"",ie=s.getShaderInfoLog(T)||"",O=z.trim(),W=se.trim(),V=ie.trim(),X=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,I,T);else{let he=up(s,I,"vertex"),ye=up(s,T,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+he+`
`+ye)}else O!==""?Ze("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(Q=!1);Q&&(N.diagnostics={runnable:X,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(I),s.deleteShader(T),x=new Ar(s,y),R=s1(s,y)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(y,Zy)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=T,this}var v1=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xh(e),t.set(e,i)),i}},Xh=class{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}};function M1(n){return n===ds||n===Vo||n===Go}function S1(n,e,t,i,s,r){let o=new ro,a=new Wh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,R,k,N,z,se){let ie=N.fog,O=z.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||W,V),Q=X&&X.mapping===No?X.image.height:null,he=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ye=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ce=ye!==void 0?ye.length:0,We=0;O.morphAttributes.position!==void 0&&(We=1),O.morphAttributes.normal!==void 0&&(We=2),O.morphAttributes.color!==void 0&&(We=3);let ee,F,S,w;if(he){let Je=xi[he];ee=Je.vertexShader,F=Je.fragmentShader}else ee=x.vertexShader,F=x.fragmentShader,a.update(x),S=a.getVertexShaderID(x),w=a.getFragmentShaderID(x);let G=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),$=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,ue=!!x.map,ae=!!x.matcap,B=!!X,Z=!!x.aoMap,K=!!x.lightMap,re=!!x.bumpMap,D=!!x.normalMap,P=!!x.displacementMap,C=!!x.emissiveMap,ve=!!x.metalnessMap,Te=!!x.roughnessMap,Me=x.anisotropy>0,de=x.clearcoat>0,Le=x.dispersion>0,E=x.iridescence>0,_=x.sheen>0,Y=x.transmission>0,oe=Me&&!!x.anisotropyMap,me=de&&!!x.clearcoatMap,ge=de&&!!x.clearcoatNormalMap,Se=de&&!!x.clearcoatRoughnessMap,ce=E&&!!x.iridescenceMap,fe=E&&!!x.iridescenceThicknessMap,Ie=_&&!!x.sheenColorMap,Be=_&&!!x.sheenRoughnessMap,Re=!!x.specularMap,Ae=!!x.specularColorMap,Ye=!!x.specularIntensityMap,je=Y&&!!x.transmissionMap,ze=Y&&!!x.thicknessMap,H=!!x.gradientMap,be=!!x.alphaMap,pe=x.alphaTest>0,Ne=!!x.alphaHash,we=!!x.extensions,_e=ei;x.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(_e=n.toneMapping);let Ue={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:F,defines:x.defines,customVertexShaderID:S,customFragmentShaderID:w,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:le,batchingColor:le&&z._colorsTexture!==null,instancing:$,instancingColor:$&&z.instanceColor!==null,instancingMorph:$&&z.morphTexture!==null,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:ae,envMap:B,envMapMode:B&&X.mapping,envMapCubeUVHeight:Q,aoMap:Z,lightMap:K,bumpMap:re,normalMap:D,displacementMap:P,emissiveMap:C,normalMapObjectSpace:D&&x.normalMapType===Df,normalMapTangentSpace:D&&x.normalMapType===Tc,packedNormalMap:D&&x.normalMapType===Tc&&M1(x.normalMap.format),metalnessMap:ve,roughnessMap:Te,anisotropy:Me,anisotropyMap:oe,clearcoat:de,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Se,dispersion:Le,iridescence:E,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:_,sheenColorMap:Ie,sheenRoughnessMap:Be,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Ye,transmission:Y,transmissionMap:je,thicknessMap:ze,gradientMap:H,opaque:x.transparent===!1&&x.blending===ws&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:pe,alphaHash:Ne,combine:x.combine,mapUv:ue&&g(x.map.channel),aoMapUv:Z&&g(x.aoMap.channel),lightMapUv:K&&g(x.lightMap.channel),bumpMapUv:re&&g(x.bumpMap.channel),normalMapUv:D&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:C&&g(x.emissiveMap.channel),metalnessMapUv:ve&&g(x.metalnessMap.channel),roughnessMapUv:Te&&g(x.roughnessMap.channel),anisotropyMapUv:oe&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(x.sheenRoughnessMap.channel),specularMapUv:Re&&g(x.specularMap.channel),specularColorMapUv:Ae&&g(x.specularColorMap.channel),specularIntensityMapUv:Ye&&g(x.specularIntensityMap.channel),transmissionMapUv:je&&g(x.transmissionMap.channel),thicknessMapUv:ze&&g(x.thicknessMap.channel),alphaMapUv:be&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(D||Me),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(ue||be),fog:!!ie,useFog:x.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&D===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:We,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pi,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(x){let R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)R.push(k),R.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(R,x),b(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function b(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function v(x){let R=f[x.type],k;if(R){let N=xi[R];k=$f.clone(N.uniforms)}else k=x.uniforms;return k}function M(x,R){let k=h.get(R);return k!==void 0?++k.usedTimes:(k=new y1(n,R,x,s),c.push(k),h.set(R,k)),k}function I(x){if(--x.usedTimes===0){let R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function L(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:I,releaseShaderCache:T,programs:c,dispose:L}}function b1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function T1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=o(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function l(u,f,g,y,m,p){let b=a(u,f,g,y,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(u,f,g,y,m,p){let b=a(u,f,g,y,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||T1),i.length>1&&i.sort(f||mp),s.length>1&&s.sort(f||mp)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function A1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new gp,n.set(i,[o])):s>=r.length?(o=new gp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function E1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new qe};break;case"SpotLight":t={position:new q,direction:new q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function w1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var C1=0;function R1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P1(n){let e=new E1,t=w1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new mt,o=new mt;function a(c){let h=0,d=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,v=0,M=0,I=0,T=0,L=0;c.sort(R1);for(let R=0,k=c.length;R<k;R++){let N=c[R],z=N.color,se=N.intensity,ie=N.distance,O=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ds?O=N.shadow.map.texture:O=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*se,d+=z.g*se,u+=z.b*se;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],se);L++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,X=t.get(N);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=N.shadow.matrix,b++}i.directional[f]=W,f++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(z).multiplyScalar(se),W.distance=ie,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[y]=W;let V=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,V.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[y]=V.matrix,N.castShadow){let X=t.get(N);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=O,M++}y++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(z).multiplyScalar(se),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=W,m++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let V=N.shadow,X=t.get(N);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=N.shadow.matrix,v++}i.point[g]=W,g++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(se),W.groundColor.copy(N.groundColor).multiplyScalar(se),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==v||x.numSpotShadows!==M||x.numSpotMaps!==I||x.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=v,x.numSpotShadows=M,x.numSpotMaps=I,x.numLightProbes=L,i.version=C1++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let v=c[p];if(v.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(v.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function _p(n){let e=new P1(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function I1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _p(n),e.set(s,[a])):r>=o.length?(a=new _p(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
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
}`,N1=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],U1=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],xp=new mt,Wo=new q,Bh=new q;function F1(n,e,t){let i=new ss,s=new xe,r=new xe,o=new It,a=new Al,l=new El,c={},h=t.maxTextureSize,d={[Ui]:Jt,[Jt]:Ui,[pi]:pi},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(T,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===uf&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Do);let R=n.getRenderTarget(),k=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(mi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let se=p!==this.type;se&&L.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(O=>O.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,O=T.length;ie<O;ie++){let W=T[ie],V=W.shadow;if(V===void 0){Ze("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let X=V.getFrameExtents();s.multiply(X),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,V.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||se===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===vr){if(W.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new En(s.x,s.y,{format:ds,type:gi,minFilter:$t,magFilter:$t,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Oi(s.x,s.y,_n),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=ui,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yt,V.map.depthTexture.magFilter=Yt}else W.isPointLight?(V.map=new Pc(s.x),V.map.depthTexture=new _l(s.x,zn)):(V.map=new En(s.x,s.y),V.map.depthTexture=new Oi(s.x,s.y,zn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=ui,this.type===Do?(V.map.depthTexture.compareFunction=Q?Ec:Ac,V.map.depthTexture.minFilter=$t,V.map.depthTexture.magFilter=$t):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yt,V.map.depthTexture.magFilter=Yt);V.camera.updateProjectionMatrix()}let he=V.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<he;ye++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(V.map),n.clear());let Ce=V.getViewport(ye);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),z.viewport(o)}if(W.isPointLight){let Ce=V.camera,We=V.matrix,ee=W.distance||Ce.far;ee!==Ce.far&&(Ce.far=ee,Ce.updateProjectionMatrix()),Wo.setFromMatrixPosition(W.matrixWorld),Ce.position.copy(Wo),Bh.copy(Ce.position),Bh.add(N1[ye]),Ce.up.copy(U1[ye]),Ce.lookAt(Bh),Ce.updateMatrixWorld(),We.makeTranslation(-Wo.x,-Wo.y,-Wo.z),xp.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xp,Ce.coordinateSystem,Ce.reversedDepth)}else V.updateMatrices(W);i=V.getFrustum(),M(L,x,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===vr&&b(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,k,N)};function b(T,L){let x=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new En(s.x,s.y,{format:ds,type:gi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,x,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,x,f,y,null)}function v(T,L,x,R){let k=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)k=N;else if(k=x.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=k.uuid,se=L.uuid,ie=c[z];ie===void 0&&(ie={},c[z]=ie);let O=ie[se];O===void 0&&(O=k.clone(),ie[se]=O,L.addEventListener("dispose",I)),k=O}if(k.visible=L.visible,k.wireframe=L.wireframe,R===vr?k.side=L.shadowSide!==null?L.shadowSide:L.side:k.side=L.shadowSide!==null?L.shadowSide:d[L.side],k.alphaMap=L.alphaMap,k.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,k.map=L.map,k.clipShadows=L.clipShadows,k.clippingPlanes=L.clippingPlanes,k.clipIntersection=L.clipIntersection,k.displacementMap=L.displacementMap,k.displacementScale=L.displacementScale,k.displacementBias=L.displacementBias,k.wireframeLinewidth=L.wireframeLinewidth,k.linewidth=L.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let z=n.properties.get(k);z.light=x}return k}function M(T,L,x,R,k){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===vr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let se=e.update(T),ie=T.material;if(Array.isArray(ie)){let O=se.groups;for(let W=0,V=O.length;W<V;W++){let X=O[W],Q=ie[X.materialIndex];if(Q&&Q.visible){let he=v(T,Q,R,k);T.onBeforeShadow(n,T,L,x,se,he,X),n.renderBufferDirect(x,null,se,he,T,X),T.onAfterShadow(n,T,L,x,se,he,X)}}}else if(ie.visible){let O=v(T,ie,R,k);T.onBeforeShadow(n,T,L,x,se,O,null),n.renderBufferDirect(x,null,se,O,T,null),T.onAfterShadow(n,T,L,x,se,O,null)}}let z=T.children;for(let se=0,ie=z.length;se<ie;se++)M(z[se],L,x,R,k)}function I(T){T.target.removeEventListener("dispose",I);for(let x in c){let R=c[x],k=T.target.uuid;k in R&&(R[k].dispose(),delete R[k])}}}function O1(n,e){function t(){let H=!1,be=new It,pe=null,Ne=new It(0,0,0,0);return{setMask:function(we){pe!==we&&!H&&(n.colorMask(we,we,we,we),pe=we)},setLocked:function(we){H=we},setClear:function(we,_e,Ue,Je,He){He===!0&&(we*=Je,_e*=Je,Ue*=Je),be.set(we,_e,Ue,Je),Ne.equals(be)===!1&&(n.clearColor(we,_e,Ue,Je),Ne.copy(be))},reset:function(){H=!1,pe=null,Ne.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,pe=null,Ne=null,we=null;return{setReversed:function(_e){if(be!==_e){let Ue=e.get("EXT_clip_control");_e?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),be=_e;let Je=we;we=null,this.setClear(Je)}},getReversed:function(){return be},setTest:function(_e){_e?G(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!H&&(n.depthMask(_e),pe=_e)},setFunc:function(_e){if(be&&(_e=Hf[_e]),Ne!==_e){switch(_e){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=_e}},setLocked:function(_e){H=_e},setClear:function(_e){we!==_e&&(we=_e,be&&(_e=1-_e),n.clearDepth(_e))},reset:function(){H=!1,pe=null,Ne=null,we=null,be=!1}}}function s(){let H=!1,be=null,pe=null,Ne=null,we=null,_e=null,Ue=null,Je=null,He=null;return{setTest:function(Qe){H||(Qe?G(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(Qe){be!==Qe&&!H&&(n.stencilMask(Qe),be=Qe)},setFunc:function(Qe,Dn,hn){(pe!==Qe||Ne!==Dn||we!==hn)&&(n.stencilFunc(Qe,Dn,hn),pe=Qe,Ne=Dn,we=hn)},setOp:function(Qe,Dn,hn){(_e!==Qe||Ue!==Dn||Je!==hn)&&(n.stencilOp(Qe,Dn,hn),_e=Qe,Ue=Dn,Je=hn)},setLocked:function(Qe){H=Qe},setClear:function(Qe){He!==Qe&&(n.clearStencil(Qe),He=Qe)},reset:function(){H=!1,be=null,pe=null,Ne=null,we=null,_e=null,Ue=null,Je=null,He=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,v=null,M=null,I=null,T=null,L=null,x=new qe(0,0,0),R=0,k=!1,N=null,z=null,se=null,ie=null,O=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=X>=2);let he=null,ye={},Ce=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),ee=new It().fromArray(Ce),F=new It().fromArray(We);function S(H,be,pe,Ne){let we=new Uint8Array(4),_e=n.createTexture();n.bindTexture(H,_e),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<pe;Ue++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(be+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return _e}let w={};w[n.TEXTURE_2D]=S(n.TEXTURE_2D,n.TEXTURE_2D,1),w[n.TEXTURE_CUBE_MAP]=S(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[n.TEXTURE_2D_ARRAY]=S(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),w[n.TEXTURE_3D]=S(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(Cs),re(!1),D(nh),G(n.CULL_FACE),Z(mi);function G(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function ne(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function $(H,be){return u[H]!==be?(n.bindFramebuffer(H,be),u[H]=be,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function le(H,be){let pe=g,Ne=!1;if(H){pe=f.get(be),pe===void 0&&(pe=[],f.set(be,pe));let we=H.textures;if(pe.length!==we.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ue=we.length;_e<Ue;_e++)pe[_e]=n.COLOR_ATTACHMENT0+_e;pe.length=we.length,Ne=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(pe)}function ue(H){return y!==H?(n.useProgram(H),y=H,!0):!1}let ae={[is]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[ff]:n.FUNC_REVERSE_SUBTRACT};ae[pf]=n.MIN,ae[mf]=n.MAX;let B={[gf]:n.ZERO,[_f]:n.ONE,[xf]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[vf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[Af]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(H,be,pe,Ne,we,_e,Ue,Je,He,Qe){if(H===mi){m===!0&&(ne(n.BLEND),m=!1);return}if(m===!1&&(G(n.BLEND),m=!0),H!==hf){if(H!==p||Qe!==k){if((b!==is||I!==is)&&(n.blendEquation(n.FUNC_ADD),b=is,I=is),Qe)switch(H){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",H);break}else switch(H){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",H);break}v=null,M=null,T=null,L=null,x.set(0,0,0),R=0,p=H,k=Qe}return}we=we||be,_e=_e||pe,Ue=Ue||Ne,(be!==b||we!==I)&&(n.blendEquationSeparate(ae[be],ae[we]),b=be,I=we),(pe!==v||Ne!==M||_e!==T||Ue!==L)&&(n.blendFuncSeparate(B[pe],B[Ne],B[_e],B[Ue]),v=pe,M=Ne,T=_e,L=Ue),(Je.equals(x)===!1||He!==R)&&(n.blendColor(Je.r,Je.g,Je.b,He),x.copy(Je),R=He),p=H,k=!1}function K(H,be){H.side===pi?ne(n.CULL_FACE):G(n.CULL_FACE);let pe=H.side===Jt;be&&(pe=!pe),re(pe),H.blending===ws&&H.transparent===!1?Z(mi):Z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ne=H.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),C(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(H){N!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),N=H)}function D(H){H!==lf?(G(n.CULL_FACE),H!==z&&(H===nh?n.cullFace(n.BACK):H===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),z=H}function P(H){H!==se&&(V&&n.lineWidth(H),se=H)}function C(H,be,pe){H?(G(n.POLYGON_OFFSET_FILL),(ie!==be||O!==pe)&&(ie=be,O=pe,o.getReversed()&&(be=-be),n.polygonOffset(be,pe))):ne(n.POLYGON_OFFSET_FILL)}function ve(H){H?G(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function Te(H){H===void 0&&(H=n.TEXTURE0+W-1),he!==H&&(n.activeTexture(H),he=H)}function Me(H,be,pe){pe===void 0&&(he===null?pe=n.TEXTURE0+W-1:pe=he);let Ne=ye[pe];Ne===void 0&&(Ne={type:void 0,texture:void 0},ye[pe]=Ne),(Ne.type!==H||Ne.texture!==be)&&(he!==pe&&(n.activeTexture(pe),he=pe),n.bindTexture(H,be||w[H]),Ne.type=H,Ne.texture=be)}function de(){let H=ye[he];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Le(){try{n.compressedTexImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function _(){try{n.texSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function Y(){try{n.texSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ge(){try{n.texStorage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function Se(){try{n.texStorage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ce(){try{n.texImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function fe(){try{n.texImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function Ie(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function Be(H,be){d[H]!==be&&(n.pixelStorei(H,be),d[H]=be)}function Re(H){ee.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function Ae(H){F.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),F.copy(H))}function Ye(H,be){let pe=c.get(be);pe===void 0&&(pe=new WeakMap,c.set(be,pe));let Ne=pe.get(H);Ne===void 0&&(Ne=n.getUniformBlockIndex(be,H.name),pe.set(H,Ne))}function je(H,be){let Ne=c.get(be).get(H);l.get(be)!==Ne&&(n.uniformBlockBinding(be,Ne,H.__bindingPointIndex),l.set(be,Ne))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},he=null,ye={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,v=null,M=null,I=null,T=null,L=null,x=new qe(0,0,0),R=0,k=!1,N=null,z=null,se=null,ie=null,O=null,ee.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:ne,bindFramebuffer:$,drawBuffers:le,useProgram:ue,setBlending:Z,setMaterial:K,setFlipSided:re,setCullFace:D,setLineWidth:P,setPolygonOffset:C,setScissorTest:ve,activeTexture:Te,bindTexture:Me,unbindTexture:de,compressedTexImage2D:Le,compressedTexImage3D:E,texImage2D:ce,texImage3D:fe,pixelStorei:Be,getParameter:Ie,updateUBOMapping:Ye,uniformBlockBinding:je,texStorage2D:ge,texStorage3D:Se,texSubImage2D:_,texSubImage3D:Y,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Re,viewport:Ae,reset:ze}}function B1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,_){return g?new OffscreenCanvas(E,_):io("canvas")}function m(E,_,Y){let oe=1,me=Le(E);if((me.width>Y||me.height>Y)&&(oe=Y/Math.max(me.width,me.height)),oe<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let ge=Math.floor(oe*me.width),Se=Math.floor(oe*me.height);u===void 0&&(u=y(ge,Se));let ce=_?y(ge,Se):u;return ce.width=ge,ce.height=Se,ce.getContext("2d").drawImage(E,0,0,ge,Se),Ze("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ge+"x"+Se+")."),ce}else return"data"in E&&Ze("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),E;return E}function p(E){return E.generateMipmaps}function b(E){n.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,Y,oe,me,ge=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Se;oe&&(Se=e.get("EXT_texture_norm16"),Se||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=_;if(_===n.RED&&(Y===n.FLOAT&&(ce=n.R32F),Y===n.HALF_FLOAT&&(ce=n.R16F),Y===n.UNSIGNED_BYTE&&(ce=n.R8),Y===n.UNSIGNED_SHORT&&Se&&(ce=Se.R16_EXT),Y===n.SHORT&&Se&&(ce=Se.R16_SNORM_EXT)),_===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ce=n.R8UI),Y===n.UNSIGNED_SHORT&&(ce=n.R16UI),Y===n.UNSIGNED_INT&&(ce=n.R32UI),Y===n.BYTE&&(ce=n.R8I),Y===n.SHORT&&(ce=n.R16I),Y===n.INT&&(ce=n.R32I)),_===n.RG&&(Y===n.FLOAT&&(ce=n.RG32F),Y===n.HALF_FLOAT&&(ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(ce=n.RG8),Y===n.UNSIGNED_SHORT&&Se&&(ce=Se.RG16_EXT),Y===n.SHORT&&Se&&(ce=Se.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Y===n.UNSIGNED_INT&&(ce=n.RG32UI),Y===n.BYTE&&(ce=n.RG8I),Y===n.SHORT&&(ce=n.RG16I),Y===n.INT&&(ce=n.RG32I)),_===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Y===n.UNSIGNED_INT&&(ce=n.RGB32UI),Y===n.BYTE&&(ce=n.RGB8I),Y===n.SHORT&&(ce=n.RGB16I),Y===n.INT&&(ce=n.RGB32I)),_===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Y===n.BYTE&&(ce=n.RGBA8I),Y===n.SHORT&&(ce=n.RGBA16I),Y===n.INT&&(ce=n.RGBA32I)),_===n.RGB&&(Y===n.UNSIGNED_SHORT&&Se&&(ce=Se.RGB16_EXT),Y===n.SHORT&&Se&&(ce=Se.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),_===n.RGBA){let fe=ge?no:lt.getTransfer(me);Y===n.FLOAT&&(ce=n.RGBA32F),Y===n.HALF_FLOAT&&(ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ce=fe===gt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Se&&(ce=Se.RGBA16_EXT),Y===n.SHORT&&Se&&(ce=Se.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function I(E,_){let Y;return E?_===null||_===zn||_===Sr?Y=n.DEPTH24_STENCIL8:_===_n?Y=n.DEPTH32F_STENCIL8:_===Mr&&(Y=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===Sr?Y=n.DEPTH_COMPONENT24:_===_n?Y=n.DEPTH_COMPONENT32F:_===Mr&&(Y=n.DEPTH_COMPONENT16),Y}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Yt&&E.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function L(E){let _=E.target;_.removeEventListener("dispose",L),R(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),N(_)}function R(E){let _=i.get(E);if(_.__webglInit===void 0)return;let Y=E.source,oe=f.get(Y);if(oe){let me=oe[_.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(E),Object.keys(oe).length===0&&f.delete(Y)}i.remove(E)}function k(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let Y=E.source,oe=f.get(Y);delete oe[_.__cacheKey],o.memory.textures--}function N(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(_.__webglFramebuffer[oe]))for(let me=0;me<_.__webglFramebuffer[oe].length;me++)n.deleteFramebuffer(_.__webglFramebuffer[oe][me]);else n.deleteFramebuffer(_.__webglFramebuffer[oe]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[oe])}else{if(Array.isArray(_.__webglFramebuffer))for(let oe=0;oe<_.__webglFramebuffer.length;oe++)n.deleteFramebuffer(_.__webglFramebuffer[oe]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let oe=0;oe<_.__webglColorRenderbuffer.length;oe++)_.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[oe]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=E.textures;for(let oe=0,me=Y.length;oe<me;oe++){let ge=i.get(Y[oe]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(Y[oe])}i.remove(E)}let z=0;function se(){z=0}function ie(){return z}function O(E){z=E}function W(){let E=z;return E>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function V(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let Y=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&Y.__version!==E.version){let oe=E.image;if(oe===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,E,_);return}}else E.isExternalTexture&&(Y.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+_)}function Q(E,_){let Y=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){ne(Y,E,_);return}else E.isExternalTexture&&(Y.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+_)}function he(E,_){let Y=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){ne(Y,E,_);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+_)}function ye(E,_){let Y=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&Y.__version!==E.version){$(Y,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+_)}let Ce={[ll]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},We={[Yt]:n.NEAREST,[If]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},ee={[Nf]:n.NEVER,[kf]:n.ALWAYS,[Uf]:n.LESS,[Ac]:n.LEQUAL,[Ff]:n.EQUAL,[Ec]:n.GEQUAL,[Of]:n.GREATER,[Bf]:n.NOTEQUAL};function F(E,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===Vl||_.magFilter===Uo||_.magFilter===us||_.minFilter===$t||_.minFilter===Vl||_.minFilter===Uo||_.minFilter===us)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ce[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ce[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ce[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,We[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Uo&&_.minFilter!==us||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function S(E,_){let Y=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",L));let oe=_.source,me=f.get(oe);me===void 0&&(me={},f.set(oe,me));let ge=V(_);if(ge!==E.__cacheKey){me[ge]===void 0&&(me[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),me[ge].usedTimes++;let Se=me[E.__cacheKey];Se!==void 0&&(me[E.__cacheKey].usedTimes--,Se.usedTimes===0&&k(_)),E.__cacheKey=ge,E.__webglTexture=me[ge].texture}return Y}function w(E,_,Y){return Math.floor(Math.floor(E/Y)/_)}function G(E,_,Y,oe){let ge=E.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,Y,oe,_.data);else{ge.sort((Be,Re)=>Be.start-Re.start);let Se=0;for(let Be=1;Be<ge.length;Be++){let Re=ge[Se],Ae=ge[Be],Ye=Re.start+Re.count,je=w(Ae.start,_.width,4),ze=w(Re.start,_.width,4);Ae.start<=Ye+1&&je===ze&&w(Ae.start+Ae.count-1,_.width,4)===je?Re.count=Math.max(Re.count,Ae.start+Ae.count-Re.start):(++Se,ge[Se]=Ae)}ge.length=Se+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ie=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Be=0,Re=ge.length;Be<Re;Be++){let Ae=ge[Be],Ye=Math.floor(Ae.start/4),je=Math.ceil(Ae.count/4),ze=Ye%_.width,H=Math.floor(Ye/_.width),be=je,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ze,H,be,pe,Y,oe,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function ne(E,_,Y){let oe=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(oe=n.TEXTURE_3D);let me=S(E,_),ge=_.source;t.bindTexture(oe,E.__webglTexture,n.TEXTURE0+Y);let Se=i.get(ge);if(ge.version!==Se.__version||me===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let pe=lt.getPrimaries(lt.workingColorSpace),Ne=_.colorSpace===Bi?null:lt.getPrimaries(_.colorSpace),we=_.colorSpace===Bi||pe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let fe=m(_.image,!1,s.maxTextureSize);fe=de(_,fe);let Ie=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Re=M(_.internalFormat,Ie,Be,_.normalized,_.colorSpace,_.isVideoTexture);F(oe,_);let Ae,Ye=_.mipmaps,je=_.isVideoTexture!==!0,ze=Se.__version===void 0||me===!0,H=ge.dataReady,be=T(_,fe);if(_.isDepthTexture)Re=I(_.format===hs,_.type),ze&&(je?t.texStorage2D(n.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,Ie,Be,null));else if(_.isDataTexture)if(Ye.length>0){je&&ze&&t.texStorage2D(n.TEXTURE_2D,be,Re,Ye[0].width,Ye[0].height);for(let pe=0,Ne=Ye.length;pe<Ne;pe++)Ae=Ye[pe],je?H&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ie,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,pe,Re,Ae.width,Ae.height,0,Ie,Be,Ae.data);_.generateMipmaps=!1}else je?(ze&&t.texStorage2D(n.TEXTURE_2D,be,Re,fe.width,fe.height),H&&G(_,fe,Ie,Be)):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,Ie,Be,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Re,Ye[0].width,Ye[0].height,fe.depth);for(let pe=0,Ne=Ye.length;pe<Ne;pe++)if(Ae=Ye[pe],_.format!==xn)if(Ie!==null)if(je){if(H)if(_.layerUpdates.size>0){let we=wh(Ae.width,Ae.height,_.format,_.type);for(let _e of _.layerUpdates){let Ue=Ae.data.subarray(_e*we/Ae.data.BYTES_PER_ELEMENT,(_e+1)*we/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,_e,Ae.width,Ae.height,1,Ie,Ue)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,fe.depth,Ie,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Re,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,fe.depth,Ie,Be,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Re,Ae.width,Ae.height,fe.depth,0,Ie,Be,Ae.data)}else{je&&ze&&t.texStorage2D(n.TEXTURE_2D,be,Re,Ye[0].width,Ye[0].height);for(let pe=0,Ne=Ye.length;pe<Ne;pe++)Ae=Ye[pe],_.format!==xn?Ie!==null?je?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Re,Ae.width,Ae.height,0,Ae.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?H&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ie,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,pe,Re,Ae.width,Ae.height,0,Ie,Be,Ae.data)}else if(_.isDataArrayTexture)if(je){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Re,fe.width,fe.height,fe.depth),H)if(_.layerUpdates.size>0){let pe=wh(fe.width,fe.height,_.format,_.type);for(let Ne of _.layerUpdates){let we=fe.data.subarray(Ne*pe/fe.data.BYTES_PER_ELEMENT,(Ne+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,fe.width,fe.height,1,Ie,Be,we)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Be,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,Ie,Be,fe.data);else if(_.isData3DTexture)je?(ze&&t.texStorage3D(n.TEXTURE_3D,be,Re,fe.width,fe.height,fe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Be,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,Ie,Be,fe.data);else if(_.isFramebufferTexture){if(ze)if(je)t.texStorage2D(n.TEXTURE_2D,be,Re,fe.width,fe.height);else{let pe=fe.width,Ne=fe.height;for(let we=0;we<be;we++)t.texImage2D(n.TEXTURE_2D,we,Re,pe,Ne,0,Ie,Be,null),pe>>=1,Ne>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),d.add(_),pe.onpaint=Je=>{let He=Je.changedElements;for(let Qe of d)He.includes(Qe.image)&&(Qe.needsUpdate=!0)},pe.requestPaint();return}let Ne=0,we=n.RGBA,_e=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ne,we,_e,Ue,fe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(je&&ze){let pe=Le(Ye[0]);t.texStorage2D(n.TEXTURE_2D,be,Re,pe.width,pe.height)}for(let pe=0,Ne=Ye.length;pe<Ne;pe++)Ae=Ye[pe],je?H&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ie,Be,Ae):t.texImage2D(n.TEXTURE_2D,pe,Re,Ie,Be,Ae);_.generateMipmaps=!1}else if(je){if(ze){let pe=Le(fe);t.texStorage2D(n.TEXTURE_2D,be,Re,pe.width,pe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,Be,fe)}else t.texImage2D(n.TEXTURE_2D,0,Re,Ie,Be,fe);p(_)&&b(oe),Se.__version=ge.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function $(E,_,Y){if(_.image.length!==6)return;let oe=S(E,_),me=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+Y);let ge=i.get(me);if(me.version!==ge.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y);let Se=lt.getPrimaries(lt.workingColorSpace),ce=_.colorSpace===Bi?null:lt.getPrimaries(_.colorSpace),fe=_.colorSpace===Bi||Se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,Be=_.image[0]&&_.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!Ie&&!Be?Re[_e]=m(_.image[_e],!0,s.maxCubemapSize):Re[_e]=Be?_.image[_e].image:_.image[_e],Re[_e]=de(_,Re[_e]);let Ae=Re[0],Ye=r.convert(_.format,_.colorSpace),je=r.convert(_.type),ze=M(_.internalFormat,Ye,je,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,be=ge.__version===void 0||oe===!0,pe=me.dataReady,Ne=T(_,Ae);F(n.TEXTURE_CUBE_MAP,_);let we;if(Ie){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ze,Ae.width,Ae.height);for(let _e=0;_e<6;_e++){we=Re[_e].mipmaps;for(let Ue=0;Ue<we.length;Ue++){let Je=we[Ue];_.format!==xn?Ye!==null?H?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,Je.width,Je.height,Ye,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,ze,Je.width,Je.height,0,Je.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,Je.width,Je.height,Ye,je,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,ze,Je.width,Je.height,0,Ye,je,Je.data)}}}else{if(we=_.mipmaps,H&&be){we.length>0&&Ne++;let _e=Le(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ze,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Be){H?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,Ye,je,Re[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ze,Re[_e].width,Re[_e].height,0,Ye,je,Re[_e].data);for(let Ue=0;Ue<we.length;Ue++){let He=we[Ue].image[_e].image;H?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,He.width,He.height,Ye,je,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,ze,He.width,He.height,0,Ye,je,He.data)}}else{H?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ye,je,Re[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ze,Ye,je,Re[_e]);for(let Ue=0;Ue<we.length;Ue++){let Je=we[Ue];H?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,Ye,je,Je.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,ze,Ye,je,Je.image[_e])}}}p(_)&&b(n.TEXTURE_CUBE_MAP),ge.__version=me.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function le(E,_,Y,oe,me,ge){let Se=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),fe=M(Y.internalFormat,Se,ce,Y.normalized,Y.colorSpace),Ie=i.get(_),Be=i.get(Y);if(Be.__renderTarget=_,!Ie.__hasExternalTextures){let Re=Math.max(1,_.width>>ge),Ae=Math.max(1,_.height>>ge);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,ge,fe,Re,Ae,_.depth,0,Se,ce,null):t.texImage2D(me,ge,fe,Re,Ae,0,Se,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,me,Be.__webglTexture,0,ve(_)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,me,Be.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,_,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let oe=_.depthTexture,me=oe&&oe.isDepthTexture?oe.type:null,ge=I(_.stencilBuffer,me),Se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(_),ge,_.width,_.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(_),ge,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ge,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,E)}else{let oe=_.textures;for(let me=0;me<oe.length;me++){let ge=oe[me],Se=r.convert(ge.format,ge.colorSpace),ce=r.convert(ge.type),fe=M(ge.internalFormat,Se,ce,ge.normalized,ge.colorSpace);Te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve(_),fe,_.width,_.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve(_),fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(E,_,Y){let oe=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let me=i.get(_.depthTexture);if(me.__renderTarget=_,(!me.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),oe){if(me.__webglInit===void 0&&(me.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),me.__webglTexture===void 0){me.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),F(n.TEXTURE_CUBE_MAP,_.depthTexture);let Ie=r.convert(_.depthTexture.format),Be=r.convert(_.depthTexture.type),Re;_.depthTexture.format===ui?Re=n.DEPTH_COMPONENT24:_.depthTexture.format===hs&&(Re=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Re,_.width,_.height,0,Ie,Be,null)}}else X(_.depthTexture,0);let ge=me.__webglTexture,Se=ve(_),ce=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,fe=_.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ui)Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ce,ge,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ce,ge,0);else if(_.depthTexture.format===hs)Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ce,ge,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ce,ge,0);else throw new Error("Unknown depthTexture format")}function B(E){let _=i.get(E),Y=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let oe=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),oe){let me=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,oe.removeEventListener("dispose",me)};oe.addEventListener("dispose",me),_.__depthDisposeCallback=me}_.__boundDepthTexture=oe}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(Y)for(let oe=0;oe<6;oe++)ae(_.__webglFramebuffer[oe],E,oe);else{let oe=E.texture.mipmaps;oe&&oe.length>0?ae(_.__webglFramebuffer[0],E,0):ae(_.__webglFramebuffer,E,0)}else if(Y){_.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[oe]),_.__webglDepthbuffer[oe]===void 0)_.__webglDepthbuffer[oe]=n.createRenderbuffer(),ue(_.__webglDepthbuffer[oe],E,!1);else{let me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ge)}}else{let oe=E.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ue(_.__webglDepthbuffer,E,!1);else{let me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(E,_,Y){let oe=i.get(E);_!==void 0&&le(oe.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&B(E)}function K(E){let _=E.texture,Y=i.get(E),oe=i.get(_);E.addEventListener("dispose",x);let me=E.textures,ge=E.isWebGLCubeRenderTarget===!0,Se=me.length>1;if(Se||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=_.version,o.memory.textures++),ge){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let fe=0;fe<_.mipmaps.length;fe++)Y.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else Y.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ce=0,fe=me.length;ce<fe;ce++){let Ie=i.get(me[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Te(E)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<me.length;ce++){let fe=me[ce];Y.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let Ie=r.convert(fe.format,fe.colorSpace),Be=r.convert(fe.type),Re=M(fe.internalFormat,Ie,Be,fe.normalized,fe.colorSpace,E.isXRRenderTarget===!0),Ae=ve(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(Y.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),F(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)le(Y.__webglFramebuffer[ce][fe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else le(Y.__webglFramebuffer[ce],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(_)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,fe=me.length;ce<fe;ce++){let Ie=me[ce],Be=i.get(Ie),Re=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,Be.__webglTexture),F(Re,Ie),le(Y.__webglFramebuffer,E,Ie,n.COLOR_ATTACHMENT0+ce,Re,0),p(Ie)&&b(Re)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,oe.__webglTexture),F(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)le(Y.__webglFramebuffer[fe],E,_,n.COLOR_ATTACHMENT0,ce,fe);else le(Y.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ce,0);p(_)&&b(ce),t.unbindTexture()}E.depthBuffer&&B(E)}function re(E){let _=E.textures;for(let Y=0,oe=_.length;Y<oe;Y++){let me=_[Y];if(p(me)){let ge=v(E),Se=i.get(me).__webglTexture;t.bindTexture(ge,Se),b(ge),t.unbindTexture()}}}let D=[],P=[];function C(E){if(E.samples>0){if(Te(E)===!1){let _=E.textures,Y=E.width,oe=E.height,me=n.COLOR_BUFFER_BIT,ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(E),ce=_.length>1;if(ce)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let fe=E.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);let Be=i.get(_[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,me,n.NEAREST),l===!0&&(D.length=0,P.length=0,D.push(n.COLOR_ATTACHMENT0+Ie),E.depthBuffer&&E.resolveDepthBuffer===!1&&(D.push(ge),P.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);let Be=i.get(_[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ve(E){return Math.min(s.maxSamples,E.samples)}function Te(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function de(E,_){let Y=E.colorSpace,oe=E.format,me=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Y!==to&&Y!==Bi&&(lt.getTransfer(Y)===gt?(oe!==xn||me!==yn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",Y)),_}function Le(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=se,this.getTextureUnits=ie,this.setTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=ye,this.rebindTextures=Z,this.setupRenderTarget=K,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k1(n,e){function t(i,s=Bi){let r,o=lt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===vh)return n.RGB;if(i===xn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===Xl)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===$l||i===Jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jl||i===Ql||i===ec||i===tc||i===nc||i===Vo||i===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jl||i===Ql)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tc)return r.COMPRESSED_R11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vo)return r.COMPRESSED_RG11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===yc||i===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===Sc||i===Go||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V1=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:z1,fragmentShader:V1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new qh,p={},b=t.getContextAttributes(),v=null,M=null,I=[],T=[],L=new xe,x=null,R=new nn;R.viewport=new It;let k=new nn;k.viewport=new It;let N=[R,k],z=new Ol,se=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let w=I[S];return w===void 0&&(w=new fr,I[S]=w),w.getTargetRaySpace()},this.getControllerGrip=function(S){let w=I[S];return w===void 0&&(w=new fr,I[S]=w),w.getGripSpace()},this.getHand=function(S){let w=I[S];return w===void 0&&(w=new fr,I[S]=w),w.getHandSpace()};function O(S){let w=T.indexOf(S.inputSource);if(w===-1)return;let G=I[w];G!==void 0&&(G.update(S.inputSource,S.frame,c||o),G.dispatchEvent({type:S.type,data:S.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",V);for(let S=0;S<I.length;S++){let w=T[S];w!==null&&(T[S]=null,I[S].disconnect(w))}se=null,ie=null,m.reset();for(let S in p)delete p[S];e.setRenderTarget(v),f=null,u=null,d=null,s=null,M=null,F.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){r=S,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(S){c=S},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(S){if(s=S,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ne=null,$=null;b.depth&&($=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=b.stencil?hs:ui,ne=b.stencil?Sr:zn);let le={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new En(u.textureWidth,u.textureHeight,{format:xn,type:yn,depthTexture:new Oi(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let G={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new En(f.framebufferWidth,f.framebufferHeight,{format:xn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),F.setContext(s),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(S){for(let w=0;w<S.removed.length;w++){let G=S.removed[w],ne=T.indexOf(G);ne>=0&&(T[ne]=null,I[ne].disconnect(G))}for(let w=0;w<S.added.length;w++){let G=S.added[w],ne=T.indexOf(G);if(ne===-1){for(let le=0;le<I.length;le++)if(le>=T.length){T.push(G),ne=le;break}else if(T[le]===null){T[le]=G,ne=le;break}if(ne===-1)break}let $=I[ne];$&&$.connect(G)}}let X=new q,Q=new q;function he(S,w,G){X.setFromMatrixPosition(w.matrixWorld),Q.setFromMatrixPosition(G.matrixWorld);let ne=X.distanceTo(Q),$=w.projectionMatrix.elements,le=G.projectionMatrix.elements,ue=$[14]/($[10]-1),ae=$[14]/($[10]+1),B=($[9]+1)/$[5],Z=($[9]-1)/$[5],K=($[8]-1)/$[0],re=(le[8]+1)/le[0],D=ue*K,P=ue*re,C=ne/(-K+re),ve=C*-K;if(w.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(ve),S.translateZ(C),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),$[10]===-1)S.projectionMatrix.copy(w.projectionMatrix),S.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let Te=ue+C,Me=ae+C,de=D-ve,Le=P+(ne-ve),E=B*ae/Me*Te,_=Z*ae/Me*Te;S.projectionMatrix.makePerspective(de,Le,E,_,Te,Me),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function ye(S,w){w===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(w.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(s===null)return;let w=S.near,G=S.far;m.texture!==null&&(m.depthNear>0&&(w=m.depthNear),m.depthFar>0&&(G=m.depthFar)),z.near=k.near=R.near=w,z.far=k.far=R.far=G,(se!==z.near||ie!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),se=z.near,ie=z.far),z.layers.mask=S.layers.mask|6,R.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let ne=S.parent,$=z.cameras;ye(z,ne);for(let le=0;le<$.length;le++)ye($[le],ne);$.length===2?he(z,R,k):z.projectionMatrix.copy(R.projectionMatrix),Ce(S,z,ne)};function Ce(S,w,G){G===null?S.matrix.copy(w.matrixWorld):(S.matrix.copy(G.matrixWorld),S.matrix.invert(),S.matrix.multiply(w.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(w.projectionMatrix),S.projectionMatrixInverse.copy(w.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=dl*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(S){l=S,u!==null&&(u.fixedFoveation=S),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=S)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(S){return p[S]};let We=null;function ee(S,w){if(h=w.getViewerPose(c||o),g=w,h!==null){let G=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ne=!1;G.length!==z.cameras.length&&(z.cameras.length=0,ne=!0);for(let ae=0;ae<G.length;ae++){let B=G[ae],Z=null;if(f!==null)Z=f.getViewport(B);else{let re=d.getViewSubImage(u,B);Z=re.viewport,ae===0&&(e.setRenderTargetTextures(M,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(M))}let K=N[ae];K===void 0&&(K=new nn,K.layers.enable(ae),K.viewport=new It,N[ae]=K),K.matrix.fromArray(B.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(B.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Z.x,Z.y,Z.width,Z.height),ae===0&&(z.matrix.copy(K.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ne===!0&&z.cameras.push(K)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let ae=d.getDepthInformation(G[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,s.renderState)}if($&&$.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let ae=0;ae<G.length;ae++){let B=G[ae].camera;if(B){let Z=p[B];Z||(Z=new xo,p[B]=Z);let K=d.getCameraImage(B);Z.sourceTexture=K}}}}for(let G=0;G<I.length;G++){let ne=T[G],$=I[G];ne!==null&&$!==void 0&&$.update(ne,w,c||o)}We&&We(S,w),w.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:w}),g=null}let F=new yp;F.setAnimationLoop(ee),this.setAnimationLoop=function(S){We=S},this.dispose=function(){}}},G1=new mt,Ap=new $e;Ap.set(-1,0,0,0,1,0,0,0,1);function H1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Th(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,v,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),v=b.envMap,M=b.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ap),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let M=v.program;i.uniformBlockBinding(b,M)}function c(b,v){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));let I=v.program;i.updateUBOMapping(b,I);let T=e.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function h(b){let v=d();b.__bindingPointIndex=v;let M=n.createBuffer(),I=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=s[b.id],M=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,L=M.length;T<L;T++){let x=Array.isArray(M[T])?M[T]:[M[T]];for(let R=0,k=x.length;R<k;R++){let N=x[R];if(f(N,T,R,I)===!0){let z=N.__offset,se=Array.isArray(N.value)?N.value:[N.value],ie=0;for(let O=0;O<se.length;O++){let W=se[O],V=y(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+ie,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):ArrayBuffer.isView(W)?N.__data.set(new W.constructor(W.buffer,W.byteOffset,N.__data.length)):(W.toArray(N.__data,ie),ie+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,v,M,I){let T=b.value,L=v+"_"+M;if(I[L]===void 0)return typeof T=="number"||typeof T=="boolean"?I[L]=T:ArrayBuffer.isView(T)?I[L]=T.slice():I[L]=T.clone(),!0;{let x=I[L];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return I[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(b){let v=b.uniforms,M=0,I=16;for(let L=0,x=v.length;L<x;L++){let R=Array.isArray(v[L])?v[L]:[v[L]];for(let k=0,N=R.length;k<N;k++){let z=R[k],se=Array.isArray(z.value)?z.value:[z.value];for(let ie=0,O=se.length;ie<O;ie++){let W=se[ie],V=y(W),X=M%I,Q=X%V.boundary,he=X+Q;M+=Q,he!==0&&I-he<V.storage&&(M+=I-he),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=V.storage}}}let T=M%I;return T>0&&(M+=I-T),b.__size=M,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var X1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function q1(){return _i===null&&(_i=new ns(X1,16,16,ds,gi),_i.name="DFG_LUT",_i.minFilter=$t,_i.magFilter=$t,_i.wrapS=li,_i.wrapT=li,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Ic=class{constructor(e={}){let{canvas:t=zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([Yl,ql,Fo]),p=new Set([yn,zn,Mr,Sr,Hl,Wl]),b=new Uint32Array(4),v=new Int32Array(4),M=new q,I=null,T=null,L=[],x=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,N=!1,z=null;this._outputColorSpace=St;let se=0,ie=0,O=null,W=-1,V=null,X=new It,Q=new It,he=null,ye=new qe(0),Ce=0,We=t.width,ee=t.height,F=1,S=null,w=null,G=new It(0,0,We,ee),ne=new It(0,0,We,ee),$=!1,le=new ss,ue=!1,ae=!1,B=new mt,Z=new q,K=new It,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D=!1;function P(){return O===null?F:1}let C=i;function ve(A,U){return t.getContext(A,U)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Je,!1),C===null){let U="webgl2";if(C=ve(U,A),C===null)throw ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ke("WebGLRenderer: "+A.message),A}let Te,Me,de,Le,E,_,Y,oe,me,ge,Se,ce,fe,Ie,Be,Re,Ae,Ye,je,ze,H,be,pe;function Ne(){Te=new Qx(C),Te.init(),H=new k1(C,Te),Me=new Xx(C,Te,e,H),de=new O1(C,Te),Me.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),Le=new ny(C),E=new b1,_=new B1(C,Te,de,E,Me,H,Le),Y=new jx(k),oe=new og(C),be=new Hx(C,oe),me=new ey(C,oe,Le,be),ge=new sy(C,me,oe,be,Le),Ye=new iy(C,Me,_),Be=new qx(E),Se=new S1(k,Y,Te,Me,be,Be),ce=new H1(k,E),fe=new A1,Ie=new I1(Te),Ae=new Gx(k,Y,de,ge,g,l),Re=new F1(k,ge,Me),pe=new W1(C,Le,Me,de),je=new Wx(C,Te,Le),ze=new ty(C,Te,Le),Le.programs=Se.programs,k.capabilities=Me,k.extensions=Te,k.properties=E,k.renderLists=fe,k.shadowMap=Re,k.state=de,k.info=Le}Ne(),y!==yn&&(R=new oy(y,t.width,t.height,s,r));let we=new Yh(k,C);this.xr=we,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(We,ee,!1))},this.getSize=function(A){return A.set(We,ee)},this.setSize=function(A,U,te=!0){if(we.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,ee=U,t.width=Math.floor(A*F),t.height=Math.floor(U*F),te===!0&&(t.style.width=A+"px",t.style.height=U+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(We*F,ee*F).floor()},this.setDrawingBufferSize=function(A,U,te){We=A,ee=U,F=te,t.width=Math.floor(A*te),t.height=Math.floor(U*te),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(y===yn){Ke("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,U,te,j){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,U,te,j),de.viewport(X.copy(G).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,U,te,j){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,U,te,j),de.scissor(Q.copy(ne).multiplyScalar(F).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){de.setScissorTest($=A)},this.setOpaqueSort=function(A){S=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,te=!0){let j=0;if(A){let J=!1;if(O!==null){let Ee=O.texture.format;J=m.has(Ee)}if(J){let Ee=O.texture.type,De=p.has(Ee),Pe=Ae.getClearColor(),Oe=Ae.getClearAlpha(),Ve=Pe.r,et=Pe.g,at=Pe.b;De?(b[0]=Ve,b[1]=et,b[2]=at,b[3]=Oe,C.clearBufferuiv(C.COLOR,0,b)):(v[0]=Ve,v[1]=et,v[2]=at,v[3]=Oe,C.clearBufferiv(C.COLOR,0,v))}else j|=C.COLOR_BUFFER_BIT}U&&(j|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Ae.dispose(),fe.dispose(),Ie.dispose(),E.dispose(),Y.dispose(),ge.dispose(),be.dispose(),pe.dispose(),Se.dispose(),we.dispose(),we.removeEventListener("sessionstart",Vr),we.removeEventListener("sessionend",ga),Ei.stop()};function _e(A){A.preventDefault(),Sh("WebGLRenderer: Context Lost."),N=!0}function Ue(){Sh("WebGLRenderer: Context Restored."),N=!1;let A=Le.autoReset,U=Re.enabled,te=Re.autoUpdate,j=Re.needsUpdate,J=Re.type;Ne(),Le.autoReset=A,Re.enabled=U,Re.autoUpdate=te,Re.needsUpdate=j,Re.type=J}function Je(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){let U=A.target;U.removeEventListener("dispose",He),Qe(U)}function Qe(A){Dn(A),E.remove(A)}function Dn(A){let U=E.get(A).programs;U!==void 0&&(U.forEach(function(te){Se.releaseProgram(te)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,te,j,J,Ee){U===null&&(U=re);let De=J.isMesh&&J.matrixWorld.determinant()<0,Pe=wi(A,U,te,j,J);de.setMaterial(j,De);let Oe=te.index,Ve=1;if(j.wireframe===!0){if(Oe=me.getWireframeAttribute(te),Oe===void 0)return;Ve=2}let et=te.drawRange,at=te.attributes.position,Xe=et.start*Ve,yt=(et.start+et.count)*Ve;Ee!==null&&(Xe=Math.max(Xe,Ee.start*Ve),yt=Math.min(yt,(Ee.start+Ee.count)*Ve)),Oe!==null?(Xe=Math.max(Xe,0),yt=Math.min(yt,Oe.count)):at!=null&&(Xe=Math.max(Xe,0),yt=Math.min(yt,at.count));let Dt=yt-Xe;if(Dt<0||Dt===1/0)return;be.setup(J,j,Pe,te,Oe);let Lt,vt=je;if(Oe!==null&&(Lt=oe.get(Oe),vt=ze,vt.setIndex(Lt)),J.isMesh)j.wireframe===!0?(de.setLineWidth(j.wireframeLinewidth*P()),vt.setMode(C.LINES)):vt.setMode(C.TRIANGLES);else if(J.isLine){let jt=j.linewidth;jt===void 0&&(jt=1),de.setLineWidth(jt*P()),J.isLineSegments?vt.setMode(C.LINES):J.isLineLoop?vt.setMode(C.LINE_LOOP):vt.setMode(C.LINE_STRIP)}else J.isPoints?vt.setMode(C.POINTS):J.isSprite&&vt.setMode(C.TRIANGLES);if(J.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let jt=J._multiDrawStarts,ke=J._multiDrawCounts,Sn=J._multiDrawCount,dt=Oe?oe.get(Oe).bytesPerElement:1,Nn=E.get(j).currentProgram.getUniforms();for(let ii=0;ii<Sn;ii++)Nn.setValue(C,"_gl_DrawID",ii),vt.render(jt[ii]/dt,ke[ii])}else if(J.isInstancedMesh)vt.renderInstances(Xe,Dt,J.count);else if(te.isInstancedBufferGeometry){let jt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,jt);vt.renderInstances(Xe,Dt,ke)}else vt.render(Xe,Dt)};function hn(A,U,te){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,Ys(A,U,te),A.side=Ui,A.needsUpdate=!0,Ys(A,U,te),A.side=pi):Ys(A,U,te)}this.compile=function(A,U,te=null){te===null&&(te=A),T=Ie.get(te),T.init(U),x.push(T),te.traverseVisible(function(J){J.isLight&&J.layers.test(U.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),A!==te&&A.traverseVisible(function(J){J.isLight&&J.layers.test(U.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights();let j=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ee=J.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let Pe=Ee[De];hn(Pe,te,J),j.add(Pe)}else hn(Ee,te,J),j.add(Ee)}),T=x.pop(),j},this.compileAsync=function(A,U,te=null){let j=this.compile(A,U,te);return new Promise(J=>{function Ee(){if(j.forEach(function(De){E.get(De).currentProgram.isReady()&&j.delete(De)}),j.size===0){J(A);return}setTimeout(Ee,10)}Te.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Xs=null;function ma(A){Xs&&Xs(A)}function Vr(){Ei.stop()}function ga(){Ei.start()}let Ei=new yp;Ei.setAnimationLoop(ma),typeof self!="undefined"&&Ei.setContext(self),this.setAnimationLoop=function(A){Xs=A,we.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},we.addEventListener("sessionstart",Vr),we.addEventListener("sessionend",ga),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(A,U);let te=we.enabled===!0&&we.isPresenting===!0,j=R!==null&&(O===null||te)&&R.begin(k,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,U,O),T=Ie.get(A,x.length),T.init(U),T.state.textureUnits=_.getTextureUnits(),x.push(T),B.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(B,Fn,U.reversedDepth),ae=this.localClippingEnabled,ue=Be.init(this.clippingPlanes,ae),I=fe.get(A,L.length),I.init(),L.push(I),we.enabled===!0&&we.isPresenting===!0){let De=k.xr.getDepthSensingMesh();De!==null&&Gr(De,U,-1/0,k.sortObjects)}Gr(A,U,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(S,w),D=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,D&&Ae.addToRenderList(I,A),this.info.render.frame++,ue===!0&&Be.beginShadows();let J=T.state.shadowsArray;if(Re.render(J,A,U),ue===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&R.hasRenderPass())===!1){let De=I.opaque,Pe=I.transmissive;if(T.setupLights(),U.isArrayCamera){let Oe=U.cameras;if(Pe.length>0)for(let Ve=0,et=Oe.length;Ve<et;Ve++){let at=Oe[Ve];xa(De,Pe,A,at)}D&&Ae.render(A);for(let Ve=0,et=Oe.length;Ve<et;Ve++){let at=Oe[Ve];_a(I,A,at,at.viewport)}}else Pe.length>0&&xa(De,Pe,A,U),D&&Ae.render(A),_a(I,A,U)}O!==null&&ie===0&&(_.updateMultisampleRenderTarget(O),_.updateRenderTargetMipmap(O)),j&&R.end(k),A.isScene===!0&&A.onAfterRender(k,A,U),be.resetDefaultState(),W=-1,V=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),ue===!0&&Be.setGlobalState(k.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?I=L[L.length-1]:I=null,z!==null&&z.renderEnd()};function Gr(A,U,te,j){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){j&&K.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);let De=ge.update(A),Pe=A.material;Pe.visible&&I.push(A,De,Pe,te,K.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){let De=ge.update(A),Pe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),K.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),K.copy(De.boundingSphere.center)),K.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(Pe)){let Oe=De.groups;for(let Ve=0,et=Oe.length;Ve<et;Ve++){let at=Oe[Ve],Xe=Pe[at.materialIndex];Xe&&Xe.visible&&I.push(A,De,Xe,te,K.z,at)}}else Pe.visible&&I.push(A,De,Pe,te,K.z,null)}}let Ee=A.children;for(let De=0,Pe=Ee.length;De<Pe;De++)Gr(Ee[De],U,te,j)}function _a(A,U,te,j){let{opaque:J,transmissive:Ee,transparent:De}=A;T.setupLightsView(te),ue===!0&&Be.setGlobalState(k.clippingPlanes,te),j&&de.viewport(X.copy(j)),J.length>0&&qs(J,U,te),Ee.length>0&&qs(Ee,U,te),De.length>0&&qs(De,U,te),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function xa(A,U,te,j){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let Xe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new En(1,1,{generateMipmaps:!0,type:Xe?gi:yn,minFilter:us,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[j.id],De=j.viewport||X;Ee.setSize(De.z*k.transmissionResolutionScale,De.w*k.transmissionResolutionScale);let Pe=k.getRenderTarget(),Oe=k.getActiveCubeFace(),Ve=k.getActiveMipmapLevel();k.setRenderTarget(Ee),k.getClearColor(ye),Ce=k.getClearAlpha(),Ce<1&&k.setClearColor(16777215,.5),k.clear(),D&&Ae.render(te);let et=k.toneMapping;k.toneMapping=ei;let at=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),ue===!0&&Be.setGlobalState(k.clippingPlanes,j),qs(A,te,j),_.updateMultisampleRenderTarget(Ee),_.updateRenderTargetMipmap(Ee),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let yt=0,Dt=U.length;yt<Dt;yt++){let Lt=U[yt],{object:vt,geometry:jt,material:ke,group:Sn}=Lt;if(ke.side===pi&&vt.layers.test(j.layers)){let dt=ke.side;ke.side=Jt,ke.needsUpdate=!0,ya(vt,te,j,jt,ke,Sn),ke.side=dt,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(_.updateMultisampleRenderTarget(Ee),_.updateRenderTargetMipmap(Ee))}k.setRenderTarget(Pe,Oe,Ve),k.setClearColor(ye,Ce),at!==void 0&&(j.viewport=at),k.toneMapping=et}function qs(A,U,te){let j=U.isScene===!0?U.overrideMaterial:null;for(let J=0,Ee=A.length;J<Ee;J++){let De=A[J],{object:Pe,geometry:Oe,group:Ve}=De,et=De.material;et.allowOverride===!0&&j!==null&&(et=j),Pe.layers.test(te.layers)&&ya(Pe,U,te,Oe,et,Ve)}}function ya(A,U,te,j,J,Ee){A.onBeforeRender(k,U,te,j,J,Ee),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(k,U,te,j,A,Ee),J.transparent===!0&&J.side===pi&&J.forceSinglePass===!1?(J.side=Jt,J.needsUpdate=!0,k.renderBufferDirect(te,U,j,J,A,Ee),J.side=Ui,J.needsUpdate=!0,k.renderBufferDirect(te,U,j,J,A,Ee),J.side=pi):k.renderBufferDirect(te,U,j,J,A,Ee),A.onAfterRender(k,U,te,j,J,Ee)}function Ys(A,U,te){U.isScene!==!0&&(U=re);let j=E.get(A),J=T.state.lights,Ee=T.state.shadowsArray,De=J.state.version,Pe=Se.getParameters(A,J.state,Ee,U,te,T.state.lightProbeGridArray),Oe=Se.getProgramCacheKey(Pe),Ve=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,j.fog=U.fog;let et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=Y.get(A.envMap||j.environment,et),j.envMapRotation=j.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",He),Ve=new Map,j.programs=Ve);let at=Ve.get(Oe);if(at!==void 0){if(j.currentProgram===at&&j.lightsStateVersion===De)return Ma(A,Pe),at}else Pe.uniforms=Se.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,te,Pe),A.onBeforeCompile(Pe,k),at=Se.acquireProgram(Pe,Oe),Ve.set(Oe,at),j.uniforms=Pe.uniforms;let Xe=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Be.uniform),Ma(A,Pe),j.needsLights=Yn(A),j.lightsStateVersion=De,j.needsLights&&(Xe.ambientLightColor.value=J.state.ambient,Xe.lightProbe.value=J.state.probe,Xe.directionalLights.value=J.state.directional,Xe.directionalLightShadows.value=J.state.directionalShadow,Xe.spotLights.value=J.state.spot,Xe.spotLightShadows.value=J.state.spotShadow,Xe.rectAreaLights.value=J.state.rectArea,Xe.ltc_1.value=J.state.rectAreaLTC1,Xe.ltc_2.value=J.state.rectAreaLTC2,Xe.pointLights.value=J.state.point,Xe.pointLightShadows.value=J.state.pointShadow,Xe.hemisphereLights.value=J.state.hemi,Xe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Xe.spotLightMatrix.value=J.state.spotLightMatrix,Xe.spotLightMap.value=J.state.spotLightMap,Xe.pointShadowMatrix.value=J.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=at,j.uniformsList=null,at}function va(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Ar.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Ma(A,U){let te=E.get(A);te.outputColorSpace=U.outputColorSpace,te.batching=U.batching,te.batchingColor=U.batchingColor,te.instancing=U.instancing,te.instancingColor=U.instancingColor,te.instancingMorph=U.instancingMorph,te.skinning=U.skinning,te.morphTargets=U.morphTargets,te.morphNormals=U.morphNormals,te.morphColors=U.morphColors,te.morphTargetsCount=U.morphTargetsCount,te.numClippingPlanes=U.numClippingPlanes,te.numIntersection=U.numClipIntersection,te.vertexAlphas=U.vertexAlphas,te.vertexTangents=U.vertexTangents,te.toneMapping=U.toneMapping}function au(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let te=0,j=A.length;te<j;te++){let J=A[te];if(J.texture!==null&&J.boundingBox.containsPoint(M))return J}return null}function wi(A,U,te,j,J){U.isScene!==!0&&(U=re),_.resetTextureUnits();let Ee=U.fog,De=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?U.environment:null,Pe=O===null?k.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:lt.workingColorSpace,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ve=Y.get(j.envMap||De,Oe),et=j.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,at=!!te.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Dt=!!te.morphAttributes.color,Lt=ei;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Lt=k.toneMapping);let vt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,jt=vt!==void 0?vt.length:0,ke=E.get(j),Sn=T.state.lights;if(ue===!0&&(ae===!0||A!==V)){let Tt=A===V&&j.id===W;Be.setState(j,A,Tt)}let dt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Sn.state.version||ke.outputColorSpace!==Pe||J.isBatchedMesh&&ke.batching===!1||!J.isBatchedMesh&&ke.batching===!0||J.isBatchedMesh&&ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ke.instancing===!1||!J.isInstancedMesh&&ke.instancing===!0||J.isSkinnedMesh&&ke.skinning===!1||!J.isSkinnedMesh&&ke.skinning===!0||J.isInstancedMesh&&ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ke.instancingMorph===!1&&J.morphTexture!==null||ke.envMap!==Ve||j.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==et||ke.vertexTangents!==at||ke.morphTargets!==Xe||ke.morphNormals!==yt||ke.morphColors!==Dt||ke.toneMapping!==Lt||ke.morphTargetsCount!==jt||!!ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,ke.__version=j.version);let Nn=ke.currentProgram;dt===!0&&(Nn=Ys(j,U,J),z&&j.isNodeMaterial&&z.onUpdateProgram(j,Nn,ke));let ii=!1,qi=!1,Zs=!1,Mt=Nn.getUniforms(),Nt=ke.uniforms;if(de.useProgram(Nn.program)&&(ii=!0,qi=!0,Zs=!0),j.id!==W&&(W=j.id,qi=!0),ke.needsLights){let Tt=au(T.state.lightProbeGridArray,J);ke.lightProbeGrid!==Tt&&(ke.lightProbeGrid=Tt,qi=!0)}if(ii||V!==A){de.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Mt.setValue(C,"projectionMatrix",A.projectionMatrix),Mt.setValue(C,"viewMatrix",A.matrixWorldInverse);let Zi=Mt.map.cameraPosition;Zi!==void 0&&Zi.setValue(C,Z.setFromMatrixPosition(A.matrixWorld)),Me.logarithmicDepthBuffer&&Mt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,qi=!0,Zs=!0)}if(ke.needsLights&&(Sn.state.directionalShadowMap.length>0&&Mt.setValue(C,"directionalShadowMap",Sn.state.directionalShadowMap,_),Sn.state.spotShadowMap.length>0&&Mt.setValue(C,"spotShadowMap",Sn.state.spotShadowMap,_),Sn.state.pointShadowMap.length>0&&Mt.setValue(C,"pointShadowMap",Sn.state.pointShadowMap,_)),J.isSkinnedMesh){Mt.setOptional(C,J,"bindMatrix"),Mt.setOptional(C,J,"bindMatrixInverse");let Tt=J.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue(C,"boneTexture",Tt.boneTexture,_))}J.isBatchedMesh&&(Mt.setOptional(C,J,"batchingTexture"),Mt.setValue(C,"batchingTexture",J._matricesTexture,_),Mt.setOptional(C,J,"batchingIdTexture"),Mt.setValue(C,"batchingIdTexture",J._indirectTexture,_),Mt.setOptional(C,J,"batchingColorTexture"),J._colorsTexture!==null&&Mt.setValue(C,"batchingColorTexture",J._colorsTexture,_));let Yi=te.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ye.update(J,te,Nn),(qi||ke.receiveShadow!==J.receiveShadow)&&(ke.receiveShadow=J.receiveShadow,Mt.setValue(C,"receiveShadow",J.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=q1()),qi){if(Mt.setValue(C,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&Sa(Nt,Zs),Ee&&j.fog===!0&&ce.refreshFogUniforms(Nt,Ee),ce.refreshMaterialUniforms(Nt,j,F,ee,T.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){let Tt=ke.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}Ar.upload(C,va(ke),Nt,_)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ar.upload(C,va(ke),Nt,_),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(C,"center",J.center),Mt.setValue(C,"modelViewMatrix",J.modelViewMatrix),Mt.setValue(C,"normalMatrix",J.normalMatrix),Mt.setValue(C,"modelMatrix",J.matrixWorld),j.uniformsGroups!==void 0){let Tt=j.uniformsGroups;for(let Zi=0,$s=Tt.length;Zi<$s;Zi++){let Ad=Tt[Zi];pe.update(Ad,Nn),pe.bind(Ad,Nn)}}return Nn}function Sa(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Yn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,U,te){let j=E.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=U,E.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:te,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let te=E.get(A);te.__webglFramebuffer=U,te.__useDefaultFramebuffer=U===void 0};let lu=C.createFramebuffer();this.setRenderTarget=function(A,U=0,te=0){O=A,se=U,ie=te;let j=null,J=!1,Ee=!1;if(A){let Pe=E.get(A);if(Pe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(C.FRAMEBUFFER,Pe.__webglFramebuffer),X.copy(A.viewport),Q.copy(A.scissor),he=A.scissorTest,de.viewport(X),de.scissor(Q),de.setScissorTest(he),W=-1;return}else if(Pe.__webglFramebuffer===void 0)_.setupRenderTarget(A);else if(Pe.__hasExternalTextures)_.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let et=A.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&E.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);let Ve=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?j=Ve[U][te]:j=Ve[U],J=!0):A.samples>0&&_.useMultisampledRTT(A)===!1?j=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[te]:j=Ve,X.copy(A.viewport),Q.copy(A.scissor),he=A.scissorTest}else X.copy(G).multiplyScalar(F).floor(),Q.copy(ne).multiplyScalar(F).floor(),he=$;if(te!==0&&(j=lu),de.bindFramebuffer(C.FRAMEBUFFER,j)&&de.drawBuffers(A,j),de.viewport(X),de.scissor(Q),de.setScissorTest(he),J){let Pe=E.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,te)}else if(Ee){let Pe=U;for(let Oe=0;Oe<A.textures.length;Oe++){let Ve=E.get(A.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,te,Pe)}}else if(A!==null&&te!==0){let Pe=E.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pe.__webglTexture,te)}W=-1},this.readRenderTargetPixels=function(A,U,te,j,J,Ee,De,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){de.bindFramebuffer(C.FRAMEBUFFER,Oe);try{let Ve=A.textures[Pe],et=Ve.format,at=Ve.type;if(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),!Me.textureFormatReadable(et)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(at)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-j&&te>=0&&te<=A.height-J&&C.readPixels(U,te,j,J,H.convert(et),H.convert(at),Ee)}finally{let Ve=O!==null?E.get(O).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,U,te,j,J,Ee,De,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(U>=0&&U<=A.width-j&&te>=0&&te<=A.height-J){de.bindFramebuffer(C.FRAMEBUFFER,Oe);let Ve=A.textures[Pe],et=Ve.format,at=Ve.type;if(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),!Me.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,Ee.byteLength,C.STREAM_READ),C.readPixels(U,te,j,J,H.convert(et),H.convert(at),0);let yt=O!==null?E.get(O).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,yt);let Dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Gf(C,Dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ee),C.deleteBuffer(Xe),C.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,te=0){let j=Math.pow(2,-te),J=Math.floor(A.image.width*j),Ee=Math.floor(A.image.height*j),De=U!==null?U.x:0,Pe=U!==null?U.y:0;_.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,te,0,0,De,Pe,J,Ee),de.unbindTexture()};let ba=C.createFramebuffer(),Ta=C.createFramebuffer();this.copyTextureToTexture=function(A,U,te=null,j=null,J=0,Ee=0){let De,Pe,Oe,Ve,et,at,Xe,yt,Dt,Lt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(te!==null)De=te.max.x-te.min.x,Pe=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,et=te.min.y,at=te.isBox3?te.min.z:0;else{let Nt=Math.pow(2,-J);De=Math.floor(Lt.width*Nt),Pe=Math.floor(Lt.height*Nt),A.isDataArrayTexture?Oe=Lt.depth:A.isData3DTexture?Oe=Math.floor(Lt.depth*Nt):Oe=1,Ve=0,et=0,at=0}j!==null?(Xe=j.x,yt=j.y,Dt=j.z):(Xe=0,yt=0,Dt=0);let vt=H.convert(U.format),jt=H.convert(U.type),ke;U.isData3DTexture?(_.setTexture3D(U,0),ke=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(_.setTexture2DArray(U,0),ke=C.TEXTURE_2D_ARRAY):(_.setTexture2D(U,0),ke=C.TEXTURE_2D),de.activeTexture(C.TEXTURE0),de.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Sn=de.getParameter(C.UNPACK_ROW_LENGTH),dt=de.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=de.getParameter(C.UNPACK_SKIP_PIXELS),ii=de.getParameter(C.UNPACK_SKIP_ROWS),qi=de.getParameter(C.UNPACK_SKIP_IMAGES);de.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),de.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),de.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),de.pixelStorei(C.UNPACK_SKIP_ROWS,et),de.pixelStorei(C.UNPACK_SKIP_IMAGES,at);let Zs=A.isDataArrayTexture||A.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let Nt=E.get(A),Yi=E.get(U),Tt=E.get(Nt.__renderTarget),Zi=E.get(Yi.__renderTarget);de.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let $s=0;$s<Oe;$s++)Zs&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,E.get(A).__webglTexture,J,at+$s),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,E.get(U).__webglTexture,Ee,Dt+$s)),C.blitFramebuffer(Ve,et,De,Pe,Xe,yt,De,Pe,C.DEPTH_BUFFER_BIT,C.NEAREST);de.bindFramebuffer(C.READ_FRAMEBUFFER,null),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||E.has(A)){let Nt=E.get(A),Yi=E.get(U);de.bindFramebuffer(C.READ_FRAMEBUFFER,ba),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ta);for(let Tt=0;Tt<Oe;Tt++)Zs?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nt.__webglTexture,J,at+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Nt.__webglTexture,J),Mt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yi.__webglTexture,Ee,Dt+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yi.__webglTexture,Ee),J!==0?C.blitFramebuffer(Ve,et,De,Pe,Xe,yt,De,Pe,C.COLOR_BUFFER_BIT,C.NEAREST):Mt?C.copyTexSubImage3D(ke,Ee,Xe,yt,Dt+Tt,Ve,et,De,Pe):C.copyTexSubImage2D(ke,Ee,Xe,yt,Ve,et,De,Pe);de.bindFramebuffer(C.READ_FRAMEBUFFER,null),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Mt?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(ke,Ee,Xe,yt,Dt,De,Pe,Oe,vt,jt,Lt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,Ee,Xe,yt,Dt,De,Pe,Oe,vt,Lt.data):C.texSubImage3D(ke,Ee,Xe,yt,Dt,De,Pe,Oe,vt,jt,Lt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ee,Xe,yt,De,Pe,vt,jt,Lt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ee,Xe,yt,Lt.width,Lt.height,vt,Lt.data):C.texSubImage2D(C.TEXTURE_2D,Ee,Xe,yt,De,Pe,vt,jt,Lt);de.pixelStorei(C.UNPACK_ROW_LENGTH,Sn),de.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),de.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),de.pixelStorei(C.UNPACK_SKIP_ROWS,ii),de.pixelStorei(C.UNPACK_SKIP_IMAGES,qi),Ee===0&&U.generateMipmaps&&C.generateMipmap(ke),de.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&_.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?_.setTextureCube(A,0):A.isData3DTexture?_.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_.setTexture2DArray(A,0):_.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){se=0,ie=0,O=null,de.reset(),be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Y1=St,qo=class n extends Ps{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){let r=this,o=new Co(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){let t=this;function i(ee,F){if(ee.nodeType!==1)return;let S=M(ee),w=!1,G=null;switch(ee.nodeName){case"svg":F=g(ee,F);break;case"style":r(ee);break;case"g":F=g(ee,F);break;case"path":F=g(ee,F),ee.hasAttribute("d")&&(G=s(ee));break;case"rect":F=g(ee,F),G=l(ee);break;case"polygon":F=g(ee,F),G=c(ee);break;case"polyline":F=g(ee,F),G=h(ee);break;case"circle":F=g(ee,F),G=d(ee);break;case"ellipse":F=g(ee,F),G=u(ee);break;case"line":F=g(ee,F),G=f(ee);break;case"defs":w=!0;break;case"use":F=g(ee,F);let le=(ee.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ue=ee.viewportElement.getElementById(le);ue?i(ue,F):console.warn("SVGLoader: 'use node' references non-existent node id: "+le);break;default:}G&&(F.fill!==void 0&&F.fill!=="none"&&G.color.setStyle(F.fill,Y1),T(G,ye),z.push(G),G.userData={node:ee,style:F});let ne=ee.childNodes;for(let $=0;$<ne.length;$++){let le=ne[$];w&&le.nodeName!=="style"&&le.nodeName!=="defs"||i(le,F)}S&&(ie.pop(),ie.length>0?ye.copy(ie[ie.length-1]):ye.identity())}function s(ee){let F=new Qn,S=new xe,w=new xe,G=new xe,ne=!0,$=!1,le=ee.getAttribute("d");if(le===""||le==="none")return null;let ue=le.match(/[a-df-z][^a-df-z]*/ig);for(let ae=0,B=ue.length;ae<B;ae++){let Z=ue[ae],K=Z.charAt(0),re=Z.slice(1).trim();ne===!0&&($=!0,ne=!1);let D;switch(K){case"M":D=m(re);for(let P=0,C=D.length;P<C;P+=2)S.x=D[P+0],S.y=D[P+1],w.x=S.x,w.y=S.y,P===0?F.moveTo(S.x,S.y):F.lineTo(S.x,S.y),P===0&&G.copy(S);break;case"H":D=m(re);for(let P=0,C=D.length;P<C;P++)S.x=D[P],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"V":D=m(re);for(let P=0,C=D.length;P<C;P++)S.y=D[P],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"L":D=m(re);for(let P=0,C=D.length;P<C;P+=2)S.x=D[P+0],S.y=D[P+1],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"C":D=m(re);for(let P=0,C=D.length;P<C;P+=6)F.bezierCurveTo(D[P+0],D[P+1],D[P+2],D[P+3],D[P+4],D[P+5]),w.x=D[P+2],w.y=D[P+3],S.x=D[P+4],S.y=D[P+5],P===0&&$===!0&&G.copy(S);break;case"S":D=m(re);for(let P=0,C=D.length;P<C;P+=4)F.bezierCurveTo(y(S.x,w.x),y(S.y,w.y),D[P+0],D[P+1],D[P+2],D[P+3]),w.x=D[P+0],w.y=D[P+1],S.x=D[P+2],S.y=D[P+3],P===0&&$===!0&&G.copy(S);break;case"Q":D=m(re);for(let P=0,C=D.length;P<C;P+=4)F.quadraticCurveTo(D[P+0],D[P+1],D[P+2],D[P+3]),w.x=D[P+0],w.y=D[P+1],S.x=D[P+2],S.y=D[P+3],P===0&&$===!0&&G.copy(S);break;case"T":D=m(re);for(let P=0,C=D.length;P<C;P+=2){let ve=y(S.x,w.x),Te=y(S.y,w.y);F.quadraticCurveTo(ve,Te,D[P+0],D[P+1]),w.x=ve,w.y=Te,S.x=D[P+0],S.y=D[P+1],P===0&&$===!0&&G.copy(S)}break;case"A":D=m(re,[3,4],7);for(let P=0,C=D.length;P<C;P+=7){if(D[P+5]==S.x&&D[P+6]==S.y)continue;let ve=S.clone();S.x=D[P+5],S.y=D[P+6],w.x=S.x,w.y=S.y,o(F,D[P],D[P+1],D[P+2],D[P+3],D[P+4],ve,S),P===0&&$===!0&&G.copy(S)}break;case"m":D=m(re);for(let P=0,C=D.length;P<C;P+=2)S.x+=D[P+0],S.y+=D[P+1],w.x=S.x,w.y=S.y,P===0?F.moveTo(S.x,S.y):F.lineTo(S.x,S.y),P===0&&G.copy(S);break;case"h":D=m(re);for(let P=0,C=D.length;P<C;P++)S.x+=D[P],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"v":D=m(re);for(let P=0,C=D.length;P<C;P++)S.y+=D[P],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"l":D=m(re);for(let P=0,C=D.length;P<C;P+=2)S.x+=D[P+0],S.y+=D[P+1],w.x=S.x,w.y=S.y,F.lineTo(S.x,S.y),P===0&&$===!0&&G.copy(S);break;case"c":D=m(re);for(let P=0,C=D.length;P<C;P+=6)F.bezierCurveTo(S.x+D[P+0],S.y+D[P+1],S.x+D[P+2],S.y+D[P+3],S.x+D[P+4],S.y+D[P+5]),w.x=S.x+D[P+2],w.y=S.y+D[P+3],S.x+=D[P+4],S.y+=D[P+5],P===0&&$===!0&&G.copy(S);break;case"s":D=m(re);for(let P=0,C=D.length;P<C;P+=4)F.bezierCurveTo(y(S.x,w.x),y(S.y,w.y),S.x+D[P+0],S.y+D[P+1],S.x+D[P+2],S.y+D[P+3]),w.x=S.x+D[P+0],w.y=S.y+D[P+1],S.x+=D[P+2],S.y+=D[P+3],P===0&&$===!0&&G.copy(S);break;case"q":D=m(re);for(let P=0,C=D.length;P<C;P+=4)F.quadraticCurveTo(S.x+D[P+0],S.y+D[P+1],S.x+D[P+2],S.y+D[P+3]),w.x=S.x+D[P+0],w.y=S.y+D[P+1],S.x+=D[P+2],S.y+=D[P+3],P===0&&$===!0&&G.copy(S);break;case"t":D=m(re);for(let P=0,C=D.length;P<C;P+=2){let ve=y(S.x,w.x),Te=y(S.y,w.y);F.quadraticCurveTo(ve,Te,S.x+D[P+0],S.y+D[P+1]),w.x=ve,w.y=Te,S.x=S.x+D[P+0],S.y=S.y+D[P+1],P===0&&$===!0&&G.copy(S)}break;case"a":D=m(re,[3,4],7);for(let P=0,C=D.length;P<C;P+=7){if(D[P+5]==0&&D[P+6]==0)continue;let ve=S.clone();S.x+=D[P+5],S.y+=D[P+6],w.x=S.x,w.y=S.y,o(F,D[P],D[P+1],D[P+2],D[P+3],D[P+4],ve,S),P===0&&$===!0&&G.copy(S)}break;case"Z":case"z":F.currentPath.autoClose=!0,F.currentPath.curves.length>0&&(S.copy(G),F.currentPath.currentPoint.copy(S),ne=!0);break;default:console.warn(Z)}$=!1}return F}function r(ee){if(!(!ee.sheet||!ee.sheet.cssRules||!ee.sheet.cssRules.length))for(let F=0;F<ee.sheet.cssRules.length;F++){let S=ee.sheet.cssRules[F];if(S.type!==1)continue;let w=S.selectorText.split(/,/gm).filter(Boolean).map(G=>G.trim());for(let G=0;G<w.length;G++){let ne=Object.fromEntries(Object.entries(S.style).filter(([,$])=>$!==""));se[w[G]]=Object.assign(se[w[G]]||{},ne)}}}function o(ee,F,S,w,G,ne,$,le){if(F==0||S==0){ee.lineTo(le.x,le.y);return}w=w*Math.PI/180,F=Math.abs(F),S=Math.abs(S);let ue=($.x-le.x)/2,ae=($.y-le.y)/2,B=Math.cos(w)*ue+Math.sin(w)*ae,Z=-Math.sin(w)*ue+Math.cos(w)*ae,K=F*F,re=S*S,D=B*B,P=Z*Z,C=D/K+P/re;if(C>1){let me=Math.sqrt(C);F=me*F,S=me*S,K=F*F,re=S*S}let ve=K*P+re*D,Te=(K*re-ve)/ve,Me=Math.sqrt(Math.max(0,Te));G===ne&&(Me=-Me);let de=Me*F*Z/S,Le=-Me*S*B/F,E=Math.cos(w)*de-Math.sin(w)*Le+($.x+le.x)/2,_=Math.sin(w)*de+Math.cos(w)*Le+($.y+le.y)/2,Y=a(1,0,(B-de)/F,(Z-Le)/S),oe=a((B-de)/F,(Z-Le)/S,(-B-de)/F,(-Z-Le)/S)%(Math.PI*2);ee.currentPath.absellipse(E,_,F,S,Y,Y+oe,ne===0,w)}function a(ee,F,S,w){let G=ee*S+F*w,ne=Math.sqrt(ee*ee+F*F)*Math.sqrt(S*S+w*w),$=Math.acos(Math.max(-1,Math.min(1,G/ne)));return ee*w-F*S<0&&($=-$),$}function l(ee){let F=v(ee.getAttribute("x")||0),S=v(ee.getAttribute("y")||0),w=v(ee.getAttribute("rx")||ee.getAttribute("ry")||0),G=v(ee.getAttribute("ry")||ee.getAttribute("rx")||0),ne=v(ee.getAttribute("width")),$=v(ee.getAttribute("height")),le=1-.551915024494,ue=new Qn;return ue.moveTo(F+w,S),ue.lineTo(F+ne-w,S),(w!==0||G!==0)&&ue.bezierCurveTo(F+ne-w*le,S,F+ne,S+G*le,F+ne,S+G),ue.lineTo(F+ne,S+$-G),(w!==0||G!==0)&&ue.bezierCurveTo(F+ne,S+$-G*le,F+ne-w*le,S+$,F+ne-w,S+$),ue.lineTo(F+w,S+$),(w!==0||G!==0)&&ue.bezierCurveTo(F+w*le,S+$,F,S+$-G*le,F,S+$-G),ue.lineTo(F,S+G),(w!==0||G!==0)&&ue.bezierCurveTo(F,S+G*le,F+w*le,S,F+w,S),ue}function c(ee){function F(ne,$,le){let ue=v($),ae=v(le);G===0?w.moveTo(ue,ae):w.lineTo(ue,ae),G++}let S=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new Qn,G=0;return ee.getAttribute("points").replace(S,F),w.currentPath.autoClose=!0,w}function h(ee){function F(ne,$,le){let ue=v($),ae=v(le);G===0?w.moveTo(ue,ae):w.lineTo(ue,ae),G++}let S=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new Qn,G=0;return ee.getAttribute("points").replace(S,F),w.currentPath.autoClose=!1,w}function d(ee){let F=v(ee.getAttribute("cx")||0),S=v(ee.getAttribute("cy")||0),w=v(ee.getAttribute("r")||0),G=new di;G.absarc(F,S,w,0,Math.PI*2);let ne=new Qn;return ne.subPaths.push(G),ne}function u(ee){let F=v(ee.getAttribute("cx")||0),S=v(ee.getAttribute("cy")||0),w=v(ee.getAttribute("rx")||0),G=v(ee.getAttribute("ry")||0),ne=new di;ne.absellipse(F,S,w,G,0,Math.PI*2);let $=new Qn;return $.subPaths.push(ne),$}function f(ee){let F=v(ee.getAttribute("x1")||0),S=v(ee.getAttribute("y1")||0),w=v(ee.getAttribute("x2")||0),G=v(ee.getAttribute("y2")||0),ne=new Qn;return ne.moveTo(F,S),ne.lineTo(w,G),ne.currentPath.autoClose=!1,ne}function g(ee,F){F=Object.assign({},F);let S={};if(ee.hasAttribute("class")){let $=ee.getAttribute("class").split(/\s/).filter(Boolean).map(le=>le.trim());for(let le=0;le<$.length;le++)S=Object.assign(S,se["."+$[le]])}ee.hasAttribute("id")&&(S=Object.assign(S,se["#"+ee.getAttribute("id")]));function w($,le,ue){ue===void 0&&(ue=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),ee.hasAttribute($)&&(F[le]=ue(ee.getAttribute($))),S[le]&&(F[le]=ue(S[le])),ee.style&&ee.style[$]!==""&&(F[le]=ue(ee.style[$]))}function G($){return Math.max(0,Math.min(1,v($)))}function ne($){return Math.max(0,v($))}return w("fill","fill"),w("fill-opacity","fillOpacity",G),w("fill-rule","fillRule"),w("opacity","opacity",G),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",G),w("stroke-width","strokeWidth",ne),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ne),w("visibility","visibility"),F}function y(ee,F){return ee-(F-ee)}function m(ee,F,S){if(typeof ee!="string")throw new TypeError("Invalid input: "+typeof ee);let w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},G=0,ne=1,$=2,le=3,ue=G,ae=!0,B="",Z="",K=[];function re(ve,Te,Me){let de=new SyntaxError('Unexpected character "'+ve+'" at index '+Te+".");throw de.partial=Me,de}function D(){B!==""&&(Z===""?K.push(Number(B)):K.push(Number(B)*Math.pow(10,Number(Z)))),B="",Z=""}let P,C=ee.length;for(let ve=0;ve<C;ve++){if(P=ee[ve],Array.isArray(F)&&F.includes(K.length%S)&&w.FLAGS.test(P)){ue=ne,B=P,D();continue}if(ue===G){if(w.WHITESPACE.test(P))continue;if(w.DIGIT.test(P)||w.SIGN.test(P)){ue=ne,B=P;continue}if(w.POINT.test(P)){ue=$,B=P;continue}w.COMMA.test(P)&&(ae&&re(P,ve,K),ae=!0)}if(ue===ne){if(w.DIGIT.test(P)){B+=P;continue}if(w.POINT.test(P)){B+=P,ue=$;continue}if(w.EXP.test(P)){ue=le;continue}w.SIGN.test(P)&&B.length===1&&w.SIGN.test(B[0])&&re(P,ve,K)}if(ue===$){if(w.DIGIT.test(P)){B+=P;continue}if(w.EXP.test(P)){ue=le;continue}w.POINT.test(P)&&B[B.length-1]==="."&&re(P,ve,K)}if(ue===le){if(w.DIGIT.test(P)){Z+=P;continue}if(w.SIGN.test(P)){if(Z===""){Z+=P;continue}Z.length===1&&w.SIGN.test(Z)&&re(P,ve,K)}}w.WHITESPACE.test(P)?(D(),ue=G,ae=!1):w.COMMA.test(P)?(D(),ue=G,ae=!0):w.SIGN.test(P)?(D(),ue=ne,B=P):w.POINT.test(P)?(D(),ue=$,B=P):re(P,ve,K)}return D(),K}let p=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(ee){let F="px";if(typeof ee=="string"||ee instanceof String)for(let w=0,G=p.length;w<G;w++){let ne=p[w];if(ee.endsWith(ne)){F=ne,ee=ee.substring(0,ee.length-ne.length);break}}let S;return F==="px"&&t.defaultUnit!=="px"?S=b.in[t.defaultUnit]/t.defaultDPI:(S=b[F][t.defaultUnit],S<0&&(S=b[F].in*t.defaultDPI)),S*parseFloat(ee)}function M(ee){if(!(ee.hasAttribute("transform")||ee.nodeName==="use"&&(ee.hasAttribute("x")||ee.hasAttribute("y"))))return null;let F=I(ee);return ie.length>0&&F.premultiply(ie[ie.length-1]),ye.copy(F),ie.push(F),F}function I(ee){let F=new $e,S=O;if(ee.nodeName==="use"&&(ee.hasAttribute("x")||ee.hasAttribute("y"))){let w=v(ee.getAttribute("x")||0),G=v(ee.getAttribute("y")||0);F.translate(w,G)}if(ee.hasAttribute("transform")){let w=ee.getAttribute("transform").split(")");for(let G=w.length-1;G>=0;G--){let ne=w[G].trim();if(ne==="")continue;let $=ne.indexOf("("),le=ne.length;if($>0&&$<le){let ue=ne.slice(0,$),ae=m(ne.slice($+1));switch(S.identity(),ue){case"translate":if(ae.length>=1){let B=ae[0],Z=0;ae.length>=2&&(Z=ae[1]),S.translate(B,Z)}break;case"rotate":if(ae.length>=1){let B=0,Z=0,K=0;B=ae[0]*Math.PI/180,ae.length>=3&&(Z=ae[1],K=ae[2]),W.makeTranslation(-Z,-K),V.makeRotation(B),X.multiplyMatrices(V,W),W.makeTranslation(Z,K),S.multiplyMatrices(W,X)}break;case"scale":if(ae.length>=1){let B=ae[0],Z=B;ae.length>=2&&(Z=ae[1]),S.scale(B,Z)}break;case"skewX":ae.length===1&&S.set(1,Math.tan(ae[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ae.length===1&&S.set(1,0,0,Math.tan(ae[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ae.length===6&&S.set(ae[0],ae[2],ae[4],ae[1],ae[3],ae[5],0,0,1);break}}F.premultiply(S)}}return F}function T(ee,F){function S($){he.set($.x,$.y,1).applyMatrix3(F),$.set(he.x,he.y)}function w($){let le=$.xRadius,ue=$.yRadius,ae=Math.cos($.aRotation),B=Math.sin($.aRotation),Z=new q(le*ae,le*B,0),K=new q(-ue*B,ue*ae,0),re=Z.applyMatrix3(F),D=K.applyMatrix3(F),P=O.set(re.x,D.x,0,re.y,D.y,0,0,0,1),C=W.copy(P).invert(),Me=V.copy(C).transpose().multiply(C).elements,de=N(Me[0],Me[1],Me[4]),Le=Math.sqrt(de.rt1),E=Math.sqrt(de.rt2);if($.xRadius=1/Le,$.yRadius=1/E,$.aRotation=Math.atan2(de.sn,de.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Y=W.set(Le,0,0,0,E,0,0,0,1),oe=V.set(de.cs,de.sn,0,-de.sn,de.cs,0,0,0,1),me=Y.multiply(oe).multiply(P),ge=Se=>{let{x:ce,y:fe}=new q(Math.cos(Se),Math.sin(Se),0).applyMatrix3(me);return Math.atan2(fe,ce)};$.aStartAngle=ge($.aStartAngle),$.aEndAngle=ge($.aEndAngle),L(F)&&($.aClockwise=!$.aClockwise)}}function G($){let le=R(F),ue=k(F);$.xRadius*=le,$.yRadius*=ue;let ae=le>Number.EPSILON?Math.atan2(F.elements[1],F.elements[0]):Math.atan2(-F.elements[3],F.elements[4]);$.aRotation+=ae,L(F)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}let ne=ee.subPaths;for(let $=0,le=ne.length;$<le;$++){let ae=ne[$].curves;for(let B=0;B<ae.length;B++){let Z=ae[B];Z.isLineCurve?(S(Z.v1),S(Z.v2)):Z.isCubicBezierCurve?(S(Z.v0),S(Z.v1),S(Z.v2),S(Z.v3)):Z.isQuadraticBezierCurve?(S(Z.v0),S(Z.v1),S(Z.v2)):Z.isEllipseCurve&&(Q.set(Z.aX,Z.aY),S(Q),Z.aX=Q.x,Z.aY=Q.y,x(F)?w(Z):G(Z))}}}function L(ee){let F=ee.elements;return F[0]*F[4]-F[1]*F[3]<0}function x(ee){let F=ee.elements,S=F[0]*F[3]+F[1]*F[4];if(S===0)return!1;let w=R(ee),G=k(ee);return Math.abs(S/(w*G))>Number.EPSILON}function R(ee){let F=ee.elements;return Math.sqrt(F[0]*F[0]+F[1]*F[1])}function k(ee){let F=ee.elements;return Math.sqrt(F[3]*F[3]+F[4]*F[4])}function N(ee,F,S){let w,G,ne,$,le,ue=ee+S,ae=ee-S,B=Math.sqrt(ae*ae+4*F*F);return ue>0?(w=.5*(ue+B),le=1/w,G=ee*le*S-F*le*F):ue<0?G=.5*(ue-B):(w=.5*B,G=-.5*B),ae>0?ne=ae+B:ne=ae-B,Math.abs(ne)>2*Math.abs(F)?(le=-2*F/ne,$=1/Math.sqrt(1+le*le),ne=le*$):Math.abs(F)===0?(ne=1,$=0):(le=-.5*ne/F,ne=1/Math.sqrt(1+le*le),$=le*ne),ae>0&&(le=ne,ne=-$,$=le),{rt1:w,rt2:G,cs:ne,sn:$}}let z=[],se={},ie=[],O=new $e,W=new $e,V=new $e,X=new $e,Q=new xe,he=new q,ye=new $e,Ce=new DOMParser().parseFromString(e,"image/svg+xml");return i(Ce.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:z,xml:Ce.documentElement}}static createShapes(e){let i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(y,m,p,b){let v=y.x,M=m.x,I=p.x,T=b.x,L=y.y,x=m.y,R=p.y,k=b.y,N=(T-I)*(L-R)-(k-R)*(v-I),z=(M-v)*(L-R)-(x-L)*(v-I),se=(k-R)*(M-v)-(T-I)*(x-L),ie=N/se,O=z/se;if(se===0&&N!==0||ie<=0||ie>=1||O<0||O>1)return null;if(N===0&&se===0){for(let W=0;W<2;W++)if(o(W===0?p:b,y,m),s.loc==i.ORIGIN){let V=W===0?p:b;return{x:V.x,y:V.y,t:s.t}}else if(s.loc==i.BETWEEN){let V=+(v+s.t*(M-v)).toPrecision(10),X=+(L+s.t*(x-L)).toPrecision(10);return{x:V,y:X,t:s.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?p:b,y,m),s.loc==i.ORIGIN){let Q=X===0?p:b;return{x:Q.x,y:Q.y,t:s.t}}let W=+(v+ie*(M-v)).toPrecision(10),V=+(L+ie*(x-L)).toPrecision(10);return{x:W,y:V,t:ie}}}function o(y,m,p){let b=p.x-m.x,v=p.y-m.y,M=y.x-m.x,I=y.y-m.y,T=b*I-M*v;if(y.x===m.x&&y.y===m.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===p.x&&y.y===p.y){s.loc=i.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=i.LEFT;return}if(T>Number.EPSILON){s.loc=i.RIGHT;return}if(b*M<0||v*I<0){s.loc=i.BEHIND;return}if(Math.sqrt(b*b+v*v)<Math.sqrt(M*M+I*I)){s.loc=i.BEYOND;return}let L;b!==0?L=M/b:L=I/v,s.loc=i.BETWEEN,s.t=L}function a(y,m){let p=[],b=[];for(let v=1;v<y.length;v++){let M=y[v-1],I=y[v];for(let T=1;T<m.length;T++){let L=m[T-1],x=m[T],R=r(M,I,L,x);R!==null&&p.find(k=>k.t<=R.t+Number.EPSILON&&k.t>=R.t-Number.EPSILON)===void 0&&(p.push(R),b.push(new xe(R.x,R.y)))}}return b}function l(y,m,p){let b=new xe;m.getCenter(b);let v=[];return p.forEach(M=>{M.boundingBox.containsPoint(b)&&a(y,M.points).forEach(T=>{v.push({identifier:M.identifier,isCW:M.isCW,point:T})})}),v.sort((M,I)=>M.point.x-I.point.x),v}function c(y,m,p,b,v){(v==null||v==="")&&(v="nonzero");let M=new xe;y.boundingBox.getCenter(M);let I=[new xe(p,M.y),new xe(b,M.y)],T=l(I,y.boundingBox,m);T.sort((z,se)=>z.point.x-se.point.x);let L=[],x=[];T.forEach(z=>{z.identifier===y.identifier?L.push(z):x.push(z)});let R=L[0].point.x,k=[],N=0;for(;N<x.length&&x[N].point.x<R;)k.length>0&&k[k.length-1]===x[N].identifier?k.pop():k.push(x[N].identifier),N++;if(k.push(y.identifier),v==="evenodd"){let z=k.length%2===0,se=k[k.length-2];return{identifier:y.identifier,isHole:z,for:se}}else if(v==="nonzero"){let z=!0,se=null,ie=null;for(let O=0;O<k.length;O++){let W=k[O];z?(ie=m[W].isCW,z=!1,se=W):ie!==m[W].isCW&&(ie=m[W].isCW,z=!0)}return{identifier:y.identifier,isHole:z,for:se}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let h=999999999,d=-999999999,u=e.subPaths.map(y=>{let m=y.getPoints(),p=-999999999,b=999999999,v=-999999999,M=999999999;for(let I=0;I<m.length;I++){let T=m[I];T.y>p&&(p=T.y),T.y<b&&(b=T.y),T.x>v&&(v=T.x),T.x<M&&(M=T.x)}return d<=v&&(d=v+1),h>=M&&(h=M-1),{curves:y.curves,points:m,isCW:ci.isClockWise(m),identifier:-1,boundingBox:new Lo(new xe(M,b),new xe(v,p))}});u=u.filter(y=>y.points.length>1);for(let y=0;y<u.length;y++)u[y].identifier=y;let f=u.map(y=>c(y,u,h,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return u.forEach(y=>{if(!f[y.identifier].isHole){let p=new Kn;p.curves=y.curves,f.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{let M=u[v.identifier],I=new di;I.curves=M.curves,p.holes.push(I)}),g.push(p)}}),g}static getStrokeStyle(e,t,i,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,i,s){let r=[],o=[],a=[];if(n.pointsToStrokeWithBuffers(e,t,i,s,r,o,a)===0)return null;let l=new kt;return l.setAttribute("position",new Pt(r,3)),l.setAttribute("normal",new Pt(o,3)),l.setAttribute("uv",new Pt(a,2)),l}static pointsToStrokeWithBuffers(e,t,i,s,r,o,a,l){let c=new xe,h=new xe,d=new xe,u=new xe,f=new xe,g=new xe,y=new xe,m=new xe,p=new xe,b=new xe,v=new xe,M=new xe,I=new xe,T=new xe,L=new xe,x=new xe,R=new xe;i=i!==void 0?i:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=ae(e);let k=e.length;if(k<2)return 0;let N=e[0].equals(e[k-1]),z,se=e[0],ie,O=t.strokeWidth/2,W=1/(k-1),V=0,X,Q,he,ye,Ce=!1,We=0,ee=l*3,F=l*2;S(e[0],e[1],c).multiplyScalar(O),m.copy(e[0]).sub(c),p.copy(e[0]).add(c),b.copy(m),v.copy(p);for(let B=1;B<k;B++){z=e[B],B===k-1?N?ie=e[1]:ie=void 0:ie=e[B+1];let Z=c;if(S(se,z,Z),d.copy(Z).multiplyScalar(O),M.copy(z).sub(d),I.copy(z).add(d),X=V+W,Q=!1,ie!==void 0){S(z,ie,h),d.copy(h).multiplyScalar(O),T.copy(z).sub(d),L.copy(z).add(d),he=!0,d.subVectors(ie,se),Z.dot(d)<0&&(he=!1),B===1&&(Ce=he),d.subVectors(ie,z),d.normalize();let K=Math.abs(Z.dot(d));if(K>Number.EPSILON){let re=O/K;d.multiplyScalar(-re),u.subVectors(z,se),f.copy(u).setLength(re).add(d),x.copy(f).negate();let D=f.length(),P=u.length();u.divideScalar(P),g.subVectors(ie,z);let C=g.length();switch(g.divideScalar(C),u.dot(x)<P&&g.dot(x)<C&&(Q=!0),R.copy(f).add(z),x.add(z),ye=!1,Q?he?(L.copy(x),I.copy(x)):(T.copy(x),M.copy(x)):ne(),t.strokeLineJoin){case"bevel":$(he,Q,X);break;case"round":le(he,Q),he?G(z,M,T,X,0):G(z,L,I,X,1);break;default:let ve=O*t.strokeMiterLimit/D;if(ve<1)if(t.strokeLineJoin!=="miter-clip"){$(he,Q,X);break}else le(he,Q),he?(g.subVectors(R,M).multiplyScalar(ve).add(M),y.subVectors(R,T).multiplyScalar(ve).add(T),w(M,X,0),w(g,X,0),w(z,X,.5),w(z,X,.5),w(g,X,0),w(y,X,0),w(z,X,.5),w(y,X,0),w(T,X,0)):(g.subVectors(R,I).multiplyScalar(ve).add(I),y.subVectors(R,L).multiplyScalar(ve).add(L),w(I,X,1),w(g,X,1),w(z,X,.5),w(z,X,.5),w(g,X,1),w(y,X,1),w(z,X,.5),w(y,X,1),w(L,X,1));else Q?(he?(w(p,V,1),w(m,V,0),w(R,X,0),w(p,V,1),w(R,X,0),w(x,X,1)):(w(p,V,1),w(m,V,0),w(R,X,1),w(m,V,0),w(x,X,0),w(R,X,1)),he?T.copy(R):L.copy(R)):he?(w(M,X,0),w(R,X,0),w(z,X,.5),w(z,X,.5),w(R,X,0),w(T,X,0)):(w(I,X,1),w(R,X,1),w(z,X,.5),w(z,X,.5),w(R,X,1),w(L,X,1)),ye=!0;break}}else ne()}else ne();!N&&B===k-1&&ue(e[0],b,v,he,!0,V),V=X,se=z,m.copy(T),p.copy(L)}if(!N)ue(z,M,I,he,!1,X);else if(Q&&r){let B=R,Z=x;Ce!==he&&(B=x,Z=R),he?(ye||Ce)&&(Z.toArray(r,0),Z.toArray(r,9),ye&&B.toArray(r,3)):(ye||!Ce)&&(Z.toArray(r,3),Z.toArray(r,9),ye&&B.toArray(r,0))}return We;function S(B,Z,K){return K.subVectors(Z,B),K.set(-K.y,K.x).normalize()}function w(B,Z,K){r&&(r[ee]=B.x,r[ee+1]=B.y,r[ee+2]=0,o&&(o[ee]=0,o[ee+1]=0,o[ee+2]=1),ee+=3,a&&(a[F]=Z,a[F+1]=K,F+=2)),We+=3}function G(B,Z,K,re,D){c.copy(Z).sub(B).normalize(),h.copy(K).sub(B).normalize();let P=Math.PI,C=c.dot(h);Math.abs(C)<1&&(P=Math.abs(Math.acos(C))),P/=i,d.copy(Z);for(let ve=0,Te=i-1;ve<Te;ve++)u.copy(d).rotateAround(B,P),w(d,re,D),w(u,re,D),w(B,re,.5),d.copy(u);w(d,re,D),w(K,re,D),w(B,re,.5)}function ne(){w(p,V,1),w(m,V,0),w(M,X,0),w(p,V,1),w(M,X,0),w(I,X,1)}function $(B,Z,K){Z?B?(w(p,V,1),w(m,V,0),w(M,X,0),w(p,V,1),w(M,X,0),w(x,X,1),w(M,K,0),w(T,K,0),w(x,K,.5)):(w(p,V,1),w(m,V,0),w(I,X,1),w(m,V,0),w(x,X,0),w(I,X,1),w(I,K,1),w(x,K,0),w(L,K,1)):B?(w(M,K,0),w(T,K,0),w(z,K,.5)):(w(I,K,1),w(L,K,0),w(z,K,.5))}function le(B,Z){Z&&(B?(w(p,V,1),w(m,V,0),w(M,X,0),w(p,V,1),w(M,X,0),w(x,X,1),w(M,V,0),w(z,X,.5),w(x,X,1),w(z,X,.5),w(T,V,0),w(x,X,1)):(w(p,V,1),w(m,V,0),w(I,X,1),w(m,V,0),w(x,X,0),w(I,X,1),w(I,V,1),w(x,X,0),w(z,X,.5),w(z,X,.5),w(x,X,0),w(L,V,1)))}function ue(B,Z,K,re,D,P){switch(t.strokeLineCap){case"round":D?G(B,K,Z,P,.5):G(B,Z,K,P,.5);break;case"square":if(D)c.subVectors(Z,B),h.set(c.y,-c.x),d.addVectors(c,h).add(B),u.subVectors(h,c).add(B),re?(d.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(d.toArray(r,3),a[7]===1?u.toArray(r,9):d.toArray(r,9),u.toArray(r,0));else{c.subVectors(K,B),h.set(c.y,-c.x),d.addVectors(c,h).add(B),u.subVectors(h,c).add(B);let C=r.length;re?(d.toArray(r,C-3),u.toArray(r,C-6),u.toArray(r,C-12)):(u.toArray(r,C-6),d.toArray(r,C-3),u.toArray(r,C-12))}break;default:break}}function ae(B){let Z=!1;for(let re=1,D=B.length-1;re<D;re++)if(B[re].distanceTo(B[re+1])<s){Z=!0;break}if(!Z)return B;let K=[];K.push(B[0]);for(let re=1,D=B.length-1;re<D;re++)B[re].distanceTo(B[re+1])>=s&&K.push(B[re]);return K.push(B[B.length-1]),K}}};var Vn=typeof window!="undefined",Nc=Vn?window:null,ps=Vn?document:null,_t={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},it={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Gt={NONE:0,AUTO:1,FORCE:2},Et={replace:0,none:1,blend:2},Zh=Symbol(),yi=Symbol(),Uc=Symbol(),ms=Symbol(),Ep=Symbol(),st=1e-11,Yo=1e12,vi=1e3,Zo=240,Gn="",wp="var(",$o=[],Fc=(()=>{let n=new Map;return n.set("x","translateX"),n.set("y","translateY"),n.set("z","translateZ"),n})(),wr=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Cp=wr.reduce((n,e)=>({...n,[e]:e+"("}),{}),Ot=()=>{},Rp=n=>n,Pp=/\)\s*[-.\d]/,Ip=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Lp=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Dp=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Np=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Up=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,$h=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Oc=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Fp=/([a-z])([A-Z])/g,Op=/(\*=|\+=|-=)/,Bp=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var Cr={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Zo,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:vi,delay:0,loopDelay:0,ease:"out(2)",composition:Et.replace,modifier:Rp,onBegin:Ot,onBeforeUpdate:Ot,onUpdate:Ot,onLoop:Ot,onPause:Ot,onComplete:Ot,onRender:Ot},Jo={current:null,root:ps},nt={defaults:Cr,precision:4,timeScale:1,tickThreshold:200,editor:null},Jh={version:"4.5.0",engine:null};Vn&&(Nc.AnimeJS||(Nc.AnimeJS=[]),Nc.AnimeJS.push(Jh));var jh=n=>n.replace(Fp,"$1-$2").toLowerCase(),Rn=(n,e)=>n.indexOf(e)===0,zi=Date.now,Pn=Array.isArray,Ns=n=>n&&n.constructor===Object,vn=n=>typeof n=="number"&&!isNaN(n),an=n=>typeof n=="string",Kt=n=>typeof n=="function",Ge=n=>typeof n=="undefined",Mi=n=>Ge(n)||n===null,Bc=n=>Vn&&n instanceof SVGElement,Qh=n=>Ip.test(n),ed=n=>Rn(n,"rgb"),td=n=>Rn(n,"hsl"),kp=n=>Qh(n)||(ed(n)||td(n))&&(n[n.length-1]===")"||!Pp.test(n)),Ko=n=>!nt.defaults.hasOwnProperty(n),Z1=["opacity","rotate","overflow","color"],zp=(n,e)=>{if(Z1.includes(e))return!1;if(n.getAttribute(e)||e in n){if(e==="scale"){let t=n.parentNode;return t&&t.tagName==="filter"}return!0}},Vi=n=>an(n)?parseFloat(n):n,Us=Math.pow,jo=Math.sqrt,Vp=Math.sin,Gp=Math.cos,ki=Math.abs;var Fs=Math.floor,Hp=Math.asin;var Qo=Math.PI,Kh=Math.round,ln=(n,e,t)=>n<e?e:n>t?t:n,ut=(n,e)=>{if(e<0)return n;if(!e)return Kh(n);let t=10**e;return Kh(n*t)/t},Wp=(n,e)=>Pn(e)?e.reduce((t,i)=>ki(i-n)<ki(t-n)?i:t):e?Kh(n/e)*e:n,Gi=(n,e,t)=>t===1?e:t===0?n:n+(e-n)*t,Os=n=>n===1/0?Yo:n===-1/0?-Yo:n,Hi=n=>n<=st?st:Os(ut(n,11)),Bt=n=>Pn(n)?[...n]:n,kc=(n,e)=>{let t={...n};for(let i in e){let s=n[i];t[i]=Ge(s)?e[i]:s}return t},ht=(n,e,t,i="_prev",s="_next")=>{let r=n._head,o=s;for(t&&(r=n._tail,o=i);r;){let a=r[o];e(r),r=a}},In=(n,e,t="_prev",i="_next")=>{let s=e[t],r=e[i];s?s[i]=r:n._head=r,r?r[t]=s:n._tail=s,e[t]=null,e[i]=null},Mn=(n,e,t,i="_prev",s="_next")=>{let r=n._tail;for(;r&&t&&t(r,e);)r=r[i];let o=r?r[s]:n._head;r?r[s]=e:n._head=e,o?o[i]=e:n._tail=e,e[i]=r,e[s]=o};var Xp=(n,e,t)=>{let i=n.style.transform;if(i){let s=n[ms],r=0,o=i.length,a;for(;r<o;){for(;r<o&&i.charCodeAt(r)===32;)r++;if(r>=o)break;let c=r;for(;r<o&&i.charCodeAt(r)!==40;)r++;if(r>=o)break;let h=i.substring(c,r),d=1,u=r+1,f=-1,g=-1;for(r++;r<o&&d>0;){let m=i.charCodeAt(r);m===40?d++:m===41?d--:m===44&&d===1&&(f===-1?f=r:g===-1&&(g=r)),r++}let y=r-1;h==="translate"||h==="translate3d"?(f===-1?s.translateX=i.substring(u,y).trim():(s.translateX=i.substring(u,f).trim(),g===-1?s.translateY=i.substring(f+1,y).trim():(s.translateY=i.substring(f+1,g).trim(),s.translateZ=i.substring(g+1,y).trim())),a=i.substring(u,y)):h==="scale"||h==="scale3d"?f===-1?s.scale=i.substring(u,y).trim():(s.scaleX=i.substring(u,f).trim(),g===-1?s.scaleY=i.substring(f+1,y).trim():(s.scaleY=i.substring(f+1,g).trim(),s.scaleZ=i.substring(g+1,y).trim())):s[h]=i.substring(u,y)}if(e==="translate3d"&&a)return t&&(t[e]=a),a;let l=s[e];if(!Ge(l))return t&&(t[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Rn(e,"scale")?"1":Rn(e,"rotate")||Rn(e,"skew")?"0deg":"0px"},zc=n=>{let e=Gn;for(let t=0,i=wr.length;t<i;t++){let s=wr[t],r=n[s];if(r!==void 0){if(s==="translateX"){let o=n.translateY;if(o!==void 0){let a=n.translateZ;a!==void 0?(e+=`translate3d(${r},${o},${a}) `,t+=2):(e+=`translate(${r},${o}) `,t+=1);continue}}if(s==="scaleX"&&n.scale===void 0){let o=n.scaleY;if(o!==void 0){let a=n.scaleZ;a!==void 0?(e+=`scale3d(${r},${o},${a}) `,t+=2):(e+=`scale(${r},${o}) `,t+=1);continue}}e+=`${Cp[s]}${r}) `}s==="rotateZ"&&n.rotate3d!==void 0&&(e+=`rotate3d(${n.rotate3d}) `)}return n.matrix!==void 0&&(e+=`matrix(${n.matrix}) `),n.matrix3d!==void 0&&(e+=`matrix3d(${n.matrix3d}) `),e};var $1=()=>!0,nd=class{constructor(e){this.detect=e,this.props={}}registerProperty(e,t,i,s){this.props[e]={get:t,set:i,gate:s||$1}}},id=class{constructor(e){this.detect=e||null,this.targetAdapters=[],this.propertyResolvers=[]}registerTargetAdapter(e){let t=new nd(e);return this.targetAdapters.push(t),t}registerPropertyResolver(e){this.propertyResolvers.indexOf(e)===-1&&this.propertyResolvers.push(e)}},Vc=[];function qp(n){let e=new id(n);return Vc.push(e),e}function Gc(n,e){if(!n)return null;let t=Vc.length;e:for(let i=0;i<t;i++){let s=Vc[i];if(s.detect&&!s.detect(n))continue;let r=s.targetAdapters;for(let o=0,a=r.length;o<a;o++){let l=r[o];if(l.detect(n)){let c=l.props[e];if(c&&(!c.gate||c.gate(n)))return c;break e}}}for(let i=0;i<t;i++){let s=Vc[i];if(s.detect&&!s.detect(n))continue;let r=s.propertyResolvers;for(let o=0,a=r.length;o<a;o++){let l=r[o](n,e);if(l)return l}}return null}var J1=n=>{let e=Lp.exec(n)||Dp.exec(n),t=Ge(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},K1=n=>{let e=n.length,t=e===4||e===5;return[+("0x"+n[1]+n[t?1:2]),+("0x"+n[t?2:3]+n[t?2:4]),+("0x"+n[t?3:5]+n[t?3:6]),e===5||e===9?+(+("0x"+n[t?4:7]+n[t?4:8])/255).toFixed(3):1]},sd=(n,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n),j1=n=>{let e=Np.exec(n)||Up.exec(n),t=+e[1]/360,i=+e[2]/100,s=+e[3]/100,r=Ge(e[4])?1:+e[4],o,a,l;if(i===0)o=a=l=s;else{let c=s<.5?s*(1+i):s+i-s*i,h=2*s-c;o=ut(sd(h,c,t+1/3)*255,0),a=ut(sd(h,c,t)*255,0),l=ut(sd(h,c,t-1/3)*255,0)}return[o,a,l,r]},Yp=n=>ed(n)?J1(n):Qh(n)?K1(n):td(n)?j1(n):[0,0,0,1];var wt=(n,e)=>Ge(n)?e:n,Zp=(n,e)=>{var r;let t=n.match(Bp),i=e[yi]?e:document.documentElement,s=(r=getComputedStyle(i))==null?void 0:r.getPropertyValue(t[1]);return(!s||s.trim()===Gn)&&t[2]&&(s=t[2].trim()),s||0},Si=(n,e,t,i,s,r)=>{if(Kt(n)){if(!s){let a=n(e,t,i,r);return isNaN(+a)?a||0:+a}let o=()=>{let a=n(e,t,i,r);return isNaN(+a)?a||0:+a};return s.func=o,o()}if(an(n)&&Rn(n,wp)){if(!s)return Zp(n,e);let o=()=>Zp(n,e);return s.func=o,o()}return n},ea=(n,e)=>n[yi]?n[Uc]&&zp(n,e)?_t.ATTRIBUTE:wr.includes(e)||Fc.get(e)?_t.TRANSFORM:Rn(e,"--")?_t.CSS_VAR:e in n.style?_t.CSS:e in n?_t.OBJECT:_t.ATTRIBUTE:_t.OBJECT,$p=(n,e,t)=>{let i=n.style[e];i&&t&&(t[e]=i);let s=i||getComputedStyle(n[Ep]||n).getPropertyValue(e);return s==="auto"?"0":s},bi=(n,e,t,i)=>{let s=Ge(t)?ea(n,e):t,r=Gc(n,e);if(r){let o=r.get(n);return o&&i&&(i[e]=o),o==null?0:o}if(s===_t.OBJECT){let o=n[e];return o&&i&&(i[e]=o),o||0}if(s===_t.ATTRIBUTE){let o=n.getAttribute(e);return o&&i&&(i[e]=o),o}return s===_t.TRANSFORM?Xp(n,e,i):s===_t.CSS_VAR?$p(n,e,i).trimStart():$p(n,e,i)},Rr=(n,e,t)=>t==="-"?n-e:t==="+"?n+e:n*e,Hc=()=>({t:it.NUMBER,n:0,u:null,o:null,d:null,s:null}),cn=(n,e)=>{if(e.t=it.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!n)return e;let t=+n;if(!isNaN(t))return e.n=t,e;let i=n;i[1]==="="&&(e.o=i[0],i=i.slice(2));let s=i.includes(" ")?!1:Oc.exec(i);if(s)return e.t=it.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+i,e;if(kp(i))return e.t=it.COLOR,e.d=Yp(i),e;{let r=i.match($h);return e.t=it.COMPLEX,e.d=r?r.map(Number):[],e.s=i.split($h)||[],e}},rd=(n,e)=>(e.t=n._valueType,e.n=n._toNumber,e.u=n._unit,e.o=null,e.d=Bt(n._toNumbers),e.s=Bt(n._strings),e),Ht=Hc(),Wc=(n,e,t)=>{let i=n._modifier,s=n._fromNumbers,r=n._toNumbers,o=n._strings,a=o[0];for(let l=0,c=r.length;l<c;l++){let h=i(ut(Gi(s[l],r[l],e),t)),d=o[l+1];a+=`${d?h+d:h}`,n._numbers[l]=h}return a};var ta=(n,e,t,i,s)=>{let r=n.parent,o=n.duration,a=n.completed,l=n.iterationDuration,c=n.iterationCount,h=n._currentIteration,d=n._loopDelay,u=n._reversed,f=n._alternate,g=n._hasChildren,y=n._delay,m=n._currentTime,p=y+l,b=e-y,v=ln(m,-y,o),M=ln(b,-y,o),I=b-m,T=M>0,L=M>=o,x=o<=st,R=s===Gt.FORCE,k=0,N=b,z=0;if(c>1){let V=l+(L?0:d),X=~~(M/V);n._currentIteration=ln(X,0,c),L&&n._currentIteration--,k=n._currentIteration%2,N=M-X*V||0}let se=u^(f&&k),ie=n._ease,O=L?se?0:o:se?l-N:N;ie&&(O=l*ie(O/l)||0);let W=(r?r.backwards:b<m)?!se:!!se;if(n._currentTime=b,n._iterationTime=O,n.backwards=W,T&&!n.began?(n.began=!0,!t&&!(r&&(W||!r.began))&&n.onBegin(n)):b<=0&&(n.began=!1),!t&&!g&&T&&n._currentIteration!==h&&n.onLoop(n),R||s===Gt.AUTO&&(e>=(r&&y>0?0:y)&&e<=p||e<=y&&v>y||e>=p&&v!==o)||O>=p&&v!==o||O<=y&&v>0&&!L||e<=v&&v===o&&a||L&&!a&&x){if(T&&(n.computeDeltaTime(v),t||n.onBeforeUpdate(n)),!g){let V=R||(W?I*-1:I)>=nt.tickThreshold,X=ut(n._offset+(r?r._offset:0)+y+O,12),Q=n._head,he,ye,Ce,We,ee=0;for(;Q;){let F=Q._composition,S=Q._currentTime,w=Q._changeDuration,G=Q._absoluteStartTime+Q._changeDuration,ne=Q._nextRep,$=Q._prevRep,le=F!==Et.none,ue=$?$._absoluteStartTime+$._changeDuration:0,ae=$&&$.parent!==Q.parent,B=!ne||ne._isOverridden?G:ne.parent===Q.parent?G+ne._delay:ne._absoluteStartTime<ne._absoluteUpdateStartTime?ne._absoluteStartTime:ne._absoluteUpdateStartTime;if((V||(S!==w||X<=B||$&&!ae&&(!ne||ne.parent!==Q.parent))&&(S!==0||X>=Q._absoluteStartTime||ae&&!Q._hasFromValue&&!$._isOverridden&&X>=ue||ne&&!ne._isOverridden&&ne.parent===Q.parent&&ne._currentTime!==0&&O<ne._startTime))&&(!$||ae||O>=Q._startTime)&&(!le||!Q._isOverridden&&(!Q._isOverlapped||X<=G)&&(!ne||ne._isOverridden||X<=B)&&(!$||$._isOverridden||(ae?X>=Q._absoluteStartTime||!Q._hasFromValue&&X>=ue:X>=ue+Q._delay)))){let Z=Q._currentTime=ln(O-Q._startTime,0,w),K=Q._ease(Z/Q._updateDuration),re=Q._modifier,D=Q._valueType,P=Q._tweenType,C=P===_t.OBJECT,ve=D===it.NUMBER,Te=ve&&C||K===0||K===1?-1:nt.precision,Me,de;if(ve)Me=de=re(ut(Gi(Q._fromNumber,Q._toNumber,K),Te));else if(D===it.UNIT)de=re(ut(Gi(Q._fromNumber,Q._toNumber,K),Te)),Me=`${de}${Q._unit}`;else if(D===it.COLOR){let Le=Q._numbers,E=Q._fromNumbers,_=Q._toNumbers,Y=1-K,oe=E[0],me=E[1],ge=E[2],Se=_[0],ce=_[1],fe=_[2];Le[0]=re(Math.sqrt(oe*oe*Y+Se*Se*K)),Le[1]=re(Math.sqrt(me*me*Y+ce*ce*K)),Le[2]=re(Math.sqrt(ge*ge*Y+fe*fe*K)),Le[3]=re(Gi(E[3],_[3],K)),(!Q._setter||i)&&(Me=`rgba(${ut(Le[0],0)},${ut(Le[1],0)},${ut(Le[2],0)},${Le[3]})`)}else D===it.COMPLEX&&(Me=Wc(Q,K,Te));if(le&&(Q._number=de),!i&&F!==Et.blend){let Le=Q.property;he=Q.target,Q._setter?Q._setter(he,de,Q):C?he[Le]=Me:P===_t.ATTRIBUTE?he.setAttribute(Le,Me):(ye=he.style,P===_t.TRANSFORM?(he!==Ce&&(Ce=he,We=he[ms]),We[Le]=Me,ee=1):P===_t.CSS?ye[Le]=Me:P===_t.CSS_VAR&&ye.setProperty(Le,Me)),T&&(z=1)}else Q._value=Me}else S&&$&&!ae&&O<Q._startTime&&(Q._currentTime=0);ee&&Q._renderTransforms&&(ye.transform=zc(We),ee=0),Q=Q._next}!t&&z&&n.onRender(n)}!t&&T&&n.onUpdate(n)}return r&&x?!t&&(r.began&&!W&&b>0&&!a||W&&b<=st&&a)&&(n.onComplete(n),n.completed=!W):T&&L?c===1/0?n._startTime+=n.duration:n._currentIteration>=c-1&&(n.paused=!0,!a&&!g&&(n.completed=!0,!t&&!(r&&(W||!r.began))&&(n.onComplete(n),n._resolve(n)))):n.completed=!1,z},Ti=(n,e,t,i,s)=>{let r=n._currentIteration;if(ta(n,e,t,i,s),n._hasChildren){let o=n,a=o.backwards,l=i?e:o._iterationTime,c=zi(),h=0,d=!0;if(!i&&o._currentIteration!==r){let u=o.iterationDuration;ht(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&ta(f,u,t,1,Gt.FORCE),f.began=!1,f.completed=!1;else{let g=f.duration,y=f._offset+f._delay,m=y+g;!t&&g<=st&&(!y||m===u)&&f.onComplete(f)}}),t||o.onLoop(o)}ht(o,u=>{let f=ut((l-u._offset)*u._speed,12);if(a&&f>u._delay+u.duration)return;let g=u._fps<o._fps?u.requestTick(c):s;h+=ta(u,f,t,i,g),!u.completed&&d&&(d=!1)},a),!t&&h&&o.onRender(o),(d||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}};var Jp={},Pr=(n,e,t)=>{if(t===_t.TRANSFORM){let i=Fc.get(n);return i||n}else if(t===_t.CSS||t===_t.ATTRIBUTE&&Bc(e)&&n in e.style){let i=Jp[n];if(i)return i;{let s=n&&jh(n);return Jp[n]=s,s}}else return n},Ir=(n,e=!1)=>{if(n._hasChildren)ht(n,t=>Ir(t,e),!0);else{let t=n;t.pause(),ht(t,i=>{let s=i.property,r=i.target,o=i._tweenType,a=i._inlineValue,l=Mi(a)||a===Gn;if(i._setter){if(!e&&!l){if(cn(a,Ht),Ht.d){let c=Ht.d,h=i._numbers;for(let d=0,u=c.length;d<u;d++)h[d]=c[d]}else i._number=Ht.n;i._setter(i.target,i._number,i)}}else if(o===_t.OBJECT)!e&&!l&&(r[s]=a);else if(r[yi])if(o===_t.ATTRIBUTE)e||(l?r.removeAttribute(s):r.setAttribute(s,a));else{let c=r.style;if(o===_t.TRANSFORM){let h=r[ms];l?delete h[s]:h[s]=a,i._renderTransforms&&(Object.keys(h).length?c.transform=zc(h):c.removeProperty("transform"))}else l?c.removeProperty(jh(s)):c[s]=a}r[yi]&&t._tail===i&&t.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===Gn&&c.removeAttribute("style")})})}return n},Kp=n=>Ir(n,!0);var Lr=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=vi/Zo,this._fps=Zo,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,i=t<st?st:t,s=vi/i;i>Cr.frameRate&&(Cr.frameRate=i),this._fps=i,this._frameDuration=s}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<st?st:t}requestTick(e){let t=this._frameDuration,i=e-this._lastTickTime,s=t*.25,r=s<4?s:4;return i+r<t?Gt.NONE:(this._lastTickTime=i>=t?e-i%t:e,Gt.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}};var Wi={animation:null,update:Ot},jp=n=>{let e=Wi.animation;return e||(e={duration:st,computeDeltaTime:Ot,_offset:0,_delay:0,_head:null,_tail:null},Wi.animation=e,Wi.update=()=>{n.forEach(t=>{for(let i in t){let s=t[i],r=s._head;if(r){let o=r._valueType,a=o===it.COMPLEX||o===it.COLOR?Bt(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let h=0,d=c._numbers.length;h<d;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),ta(e,1,1,0,Gt.FORCE)}),e};var Qp=Vn?requestAnimationFrame:setImmediate,Q1=Vn?cancelAnimationFrame:clearImmediate,od=class extends Lr{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Cr,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=zi();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,i=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(In(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):Ti(s,(e-s._startTime)*s._speed*t,0,0,s._fps<i?s.requestTick(e):Gt.AUTO),s=r}Wi.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(zi()),this.reqId=Qp(em)),this}pause(){if(this.reqId)return this.paused=!0,ev()}resume(){if(this.paused)return this.paused=!1,ht(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(nt.timeScale===1?1:vi)}set speed(e){let t=e*nt.timeScale;this._speed!==t&&(this._speed=t,ht(this,i=>i.speed=i._speed))}get timeUnit(){return nt.timeScale===1?"ms":"s"}set timeUnit(e){let i=e==="s",s=i?.001:1;if(nt.timeScale!==s){nt.timeScale=s,nt.tickThreshold=200*s;let r=i?.001:vi;this.defaults.duration*=r,this._speed*=r}}get precision(){return nt.precision}set precision(e){nt.precision=e}},Wt=(()=>{let n=new od(zi());return Vn&&(Jh.engine=n,ps.addEventListener("visibilitychange",()=>{n.pauseOnDocumentHidden&&(ps.hidden?n.pause():n.resume())})),n})(),em=()=>{Wt._head?(Wt.reqId=Qp(em),Wt.update()):Wt.reqId=0},ev=()=>(Q1(Wt.reqId),Wt.reqId=0,Wt);var Xc={_rep:new WeakMap,_add:new Map},ia=(n,e,t="_rep")=>{let i=Xc[t],s=i.get(n);return s||(s={},i.set(n,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},tv=(n,e)=>n._isOverridden||n._absoluteStartTime>e._absoluteStartTime,na=n=>{n._isOverlapped=1,n._isOverridden=1,n._changeDuration=st,n._currentTime=st},qc=(n,e)=>{let t=n._composition;if(t===Et.replace){let i=n._absoluteStartTime;Mn(e,n,tv,"_prevRep","_nextRep");let s=n._prevRep;if(s){let r=s.parent,o=s._absoluteEndTime;if(n.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>i){na(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)na(c),c=c._prevRep}let a=n._absoluteUpdateStartTime;if(o>a){let c=s._startTime,h=o-(c+s._updateDuration),d=ut(a-h-c,12);s._changeDuration=d,s._currentTime=d,s._isOverlapped=1,d<st&&na(s)}let l=n.parent.parent;if(!l||l!==r.parent){let c=!0;if(ht(r,h=>{h._isOverlapped||(c=!1)}),c){let h=r.parent;if(h){let d=!0;ht(h,u=>{u!==r&&ht(u,f=>{f._isOverlapped||(d=!1)})}),d&&h.cancel()}else r.cancel()}}}}else if(t===Et.blend){let i=ia(n.target,n.property,"_add"),s=jp(Xc._add),r=i._head;r||(r={...n},r._composition=Et.replace,r._updateDuration=st,r._startTime=0,r._numbers=Bt(n._fromNumbers),r._number=0,r._next=null,r._prev=null,Mn(i,r),Mn(s,r));let o=n._toNumber;if(n._fromNumber=r._fromNumber-o,n._toNumber=0,n._numbers=Bt(n._fromNumbers),n._number=0,r._fromNumber=o,n._toNumbers.length){let a=Bt(n._toNumbers);a.forEach((l,c)=>{n._fromNumbers[c]=r._fromNumbers[c]-l,n._toNumbers[c]=0}),r._fromNumbers=a}Mn(i,n,null,"_prevAdd","_nextAdd")}return n},ad=n=>{let e=n._composition;if(e!==Et.none){let t=n.target,i=n.property,o=Xc._rep.get(t)[i];if(In(o,n,"_prevRep","_nextRep"),e===Et.blend){let a=Xc._add,l=a.get(t);if(!l)return;let c=l[i],h=Wi.animation;In(c,n,"_prevAdd","_nextAdd");let d=c._head;if(d&&d===c._tail){In(c,d,"_prevAdd","_nextAdd"),In(h,d);let u=!0;for(let f in l)if(l[f]._head){u=!1;break}u&&a.delete(t)}}}return n},tm=(n,e,t)=>{let i=!1;return ht(e,s=>{let r=s.target;if(n.includes(r)){let o=s.property,a=s._tweenType,l=Pr(t,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===_t.TRANSFORM&&s._prev&&s._prev._tweenType===_t.TRANSFORM&&(s._prev._renderTransforms=1),In(e,s),ad(s),i=!0)}},!0),i},sa=(n,e,t)=>{let i=e||Wt,s;if(i._hasChildren){let r=0;ht(i,o=>{if(!o._hasChildren)if(s=tm(n,o,t),s&&!o._head)o.cancel(),In(i,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?sa(n,o,t):o._hasChildren=!1},!0),Ge(i.iterationDuration)||(i.iterationDuration=r)}else s=tm(n,i,t);s&&!i._head&&(i._hasChildren=!1,i.cancel&&i.cancel())};var nm=n=>(n.paused=!0,n.began=!1,n.completed=!1,n),ld=n=>(n._cancelled&&(n._hasChildren?ht(n,ld):ht(n,e=>{e._composition!==Et.none&&qc(e,ia(e.target,e.property))}),n._cancelled=0),n),im=0,nv=(n,e)=>n._priority>e._priority,ti=class extends Lr{constructor(e={},t=null,i=0){super(0),++im;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:d,frameRate:u,playbackRate:f,priority:g,onComplete:y,onLoop:m,onPause:p,onBegin:b,onBeforeUpdate:v,onUpdate:M}=e;Jo.current&&Jo.current.register(this);let I=t?0:Wt._lastTickTime,T=t?t.defaults:nt.defaults,L=Kt(r)||Ge(r)?T.delay:+r,x=Kt(o)||Ge(o)?1/0:+o,R=wt(c,T.loop),k=wt(h,T.loopDelay),N=R===!0||R===1/0||R<0?1/0:R+1,z=0;t?z=i:(Wt.reqId||Wt.requestTick(zi()),z=(Wt._lastTickTime-Wt._startTime)*nt.timeScale),this.id=Ge(s)?im:s,this.parent=t,this.duration=Os((x+k)*N-k)||st,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=b||T.onBegin,this.onBeforeUpdate=v||T.onBeforeUpdate,this.onUpdate=M||T.onUpdate,this.onLoop=m||T.onLoop,this.onPause=p||T.onPause,this.onComplete=y||T.onComplete,this.iterationDuration=x,this.iterationCount=N,this._autoplay=t?!1:wt(d,T.autoplay),this._offset=z,this._delay=L,this._loopDelay=k,this._iterationTime=0,this._currentIteration=0,this._resolve=Ot,this._running=!1,this._reversed=+wt(a,T.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=wt(l,T.alternate),this._prev=null,this._next=null,this._lastTickTime=I,this._startTime=I,this._lastTime=I,this._fps=wt(u,T.frameRate),this._speed=wt(f,T.playbackRate),this._priority=+wt(g,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return ln(ut(this._currentTime,nt.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return ln(ut(this._iterationTime,nt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return ln(ut(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return ln(ut(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*ln(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return ld(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Ti(this,0,1,~~e,Gt.FORCE),nm(this),this._hasChildren&&ht(this,nm),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Ti(this,this.duration,1,~~e,Gt.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!Ge(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*Wt._speed);return this._startTime=zi()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=st&&!this._hasChildren?Ti(this,st,0,0,Gt.FORCE):(this._running||(Mn(Wt,this,nv),Wt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Wt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,i=0){ld(this),this.completed=!1;let s=this.paused;return this.paused=!0,Ti(this,e+this._delay,~~t,~~i,Gt.AUTO),s?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,i=this.iterationDuration,s=t===1/0?Fs(Yo/i):t;return this._reversed=+(this._alternate&&!(s%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?ht(this,e=>e.cancel(),!0):ht(this,ad),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,i=Hi(e);if(t===i)return this;let s=e/t,r=e<=st;return this.duration=r?st:i,this.iterationDuration=r?st:Hi(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){Ti(this,0,1,0,Gt.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Ot){let t=this.then,i=()=>{this.then=null,e(this),this.then=t,this._resolve=Ot};return new Promise(s=>(this._resolve=()=>s(i()),this.completed&&this._resolve(),this))}},cd=n=>new ti(n,null,0).init();function sm(n){let e=an(n)?Jo.root.querySelectorAll(n):n;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function Dr(n){if(Mi(n))return[];if(!Vn)return Pn(n)&&n.flat(1/0)||[n];if(Pn(n)){let t=n.flat(1/0),i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];if(!Mi(o)){let a=sm(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!Mi(h)){let d=!1;for(let u=0,f=i.length;u<f;u++)if(i[u]===h){d=!0;break}d||i.push(h)}}else{let l=!1;for(let c=0,h=i.length;c<h;c++)if(i[c]===o){l=!0;break}l||i.push(o)}}}return i}let e=sm(n);return e?Array.from(e):[n]}function gs(n){let e=Dr(n),t=e.length;for(let i=0;i<t;i++){let s=e[i];if(!s[Zh]){s[Zh]=!0;let r=Bc(s);(s.nodeType||r)&&(s[yi]=!0,s[Uc]=r,s[ms]={})}}return e}var ud={deg:1,rad:180/Qo,turn:360},rm={},ra=(n,e,t,i=!1)=>{let s=e.u,r=e.n;if(e.t===it.UNIT&&s===t)return e;let o=r+s+t,a=rm[o];if(!Ge(a)&&!i)e.n=a;else{let l;if(s in ud)l=r*ud[s]/ud[t];else{let h=n.cloneNode(),d=n.parentNode,u=d&&d!==ps?d:ps.body;u.appendChild(h);let f=h.style;f.width=100+s;let g=h.offsetWidth||100;f.width=100+t;let y=h.offsetWidth||100,m=g/y;u.removeChild(h),l=m*r}e.n=l,rm[o]=l}return e.t,it.UNIT,e.u=t,e};var Ln=n=>n;var oa=(n=1.68)=>e=>Us(e,+n),dd={in:n=>e=>n(e),out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n(e*-2+2)/2,outIn:n=>e=>e<.5?(1-n(1-e*2))/2:(n(e*2-1)+1)/2},iv=Qo/2,om=Qo*2,am={[Gn]:oa,Quad:oa(2),Cubic:oa(3),Quart:oa(4),Quint:oa(5),Sine:n=>1-Gp(n*iv),Circ:n=>1-jo(1-n*n),Expo:n=>n?Us(2,10*n-10):0,Bounce:n=>{let e,t=4;for(;n<((e=Us(2,--t))-1)/11;);return 1/Us(4,3-t)-7.5625*Us((e*3-2)/22-n,2)},Back:(n=1.7)=>e=>(+n+1)*e*e*e-+n*e*e,Elastic:(n=1,e=.3)=>{let t=ln(+n,1,10),i=ln(+e,st,2),s=i/om*Hp(1/t),r=om/i;return o=>o===0||o===1?o:-t*Us(2,-10*(1-o))*Vp((1-o-s)*r)}},hd=(()=>{let n={linear:Ln,none:Ln};for(let e in dd)for(let t in am){let i=am[t],s=dd[e];n[e+t]=t===Gn||t==="Back"||t==="Elastic"?(r,o)=>s(i(r,o)):s(i)}return n})(),Yc={linear:Ln,none:Ln},sv=n=>{if(Yc[n])return Yc[n];if(n.indexOf("(")<=-1){let t=dd[n]||n.includes("Back")||n.includes("Elastic")?hd[n]():hd[n];return t?Yc[n]=t:Ln}else{let e=n.slice(0,-1).split("("),t=hd[e[0]];return t?Yc[n]=t(...e[1].split(",")):Ln}},lm=["steps(","irregular(","linear(","cubicBezier("],Bs=n=>{if(an(n)){for(let t=0,i=lm.length;t<i;t++)if(Rn(n,lm[t]))return console.warn(`String syntax for \`ease: "${n}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${n}\``),Ln}return Kt(n)?n:an(n)?sv(n):Ln};var tt=Hc(),rt=Hc(),Nr={},Zc={func:null},$c={func:null},Jc=[null],Ur=[null,null],Kc={to:null},rv=0,cm=0,_s,Ai,ov=(n,e)=>{let t={};if(Pn(n)){let i=[].concat(...n.map(s=>Object.keys(s))).filter(Ko);for(let s=0,r=i.length;s<r;s++){let o=i[s],a=n.map(l=>{let c={};for(let h in l){let d=l[h];Ko(h)?h===o&&(c.to=d):c[h]=d}return c});t[o]=a}}else{let i=wt(e.duration,nt.defaults.duration);Object.keys(n).map(r=>({o:parseFloat(r)/100,p:n[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(Ko(l)){let c=t[l];c||(c=t[l]=[]);let h=o*i,d=c.length,u=c[d-1],f={to:a[l]},g=0;for(let y=0;y<d;y++)g+=c[y].duration;d===1&&(f.from=u.to),a.ease&&(f.ease=a.ease),f.duration=h-(d?g:0),c.push(f)}return r});for(let r in t){let o=t[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],d=h.ease;h.ease=a||void 0,a=d}o[0].duration||o.shift()}}return t},xs=class extends ti{constructor(e,t,i,s,r=!1,o=0,a){super(t,i,s),this._head,this._tail,++cm;let l=gs(e),c=l.length,h=t.keyframes,d=h?kc(ov(h,t),t):t,{id:u,delay:f,duration:g,ease:y,playbackEase:m,modifier:p,composition:b,onRender:v}=d,M=i?i.defaults:nt.defaults,I=wt(y,M.ease),T=wt(m,M.playbackEase),L=T?Bs(T):null,x=!Ge(I.ease),R=x?I.ease:wt(y,L?"linear":M.ease),k=x?I.settlingDuration:wt(g,M.duration),N=wt(f,M.delay),z=p||M.modifier,se=Ge(b)&&c>=vi?Et.none:Ge(b)?M.composition:b,ie=this._offset+(i?i._offset:0);x&&(I.parent=this);let O=NaN,W=NaN,V=0,X=0;for(let Q=0;Q<c;Q++){let he=l[Q],ye=o||Q,Ce=a||l,We=NaN,ee=NaN;for(let F in d)if(Ko(F)){let S=ea(he,F),w=Gc(he,F),G=Pr(F,he,S),ne=d[F],$=Pn(ne);if(r&&!$&&(Ur[0]=ne,Ur[1]=ne,ne=Ur),$){let K=ne.length,re=!Ns(ne[0]);K===2&&re?(Kc.to=ne,Jc[0]=Kc,_s=Jc):K>2&&re?(_s=[],ne.forEach((D,P)=>{P?P===1?(Ur[1]=D,_s.push(Ur)):_s.push(D):Ur[0]=D})):_s=ne}else Jc[0]=ne,_s=Jc;let le=null,ue=null,ae=NaN,B=0,Z=0;for(let K=_s.length;Z<K;Z++){let re=_s[Z];Ns(re)?Ai=re:(Kc.to=re,Ai=Kc),Zc.func=null,$c.func=null;let D=Si(wt(Ai.composition,se),he,ye,Ce,null,null),P=vn(D)?D:Et[D];!le&&P!==Et.none&&(le=ia(he,G));let C=le?le._tail:null,ve=i&&C&&C.parent.parent===i?C:ue,Te=Si(Ai.to,he,ye,Ce,Zc,ve),Me;Ns(Te)&&!Ge(Te.to)?(Ai=Te,Me=Te.to):Me=Te;let de=Si(Ai.from,he,ye,Ce,$c,ve),Le=Ai.ease||R,E=Si(Le,he,ye,Ce,null,ve),_=Kt(E)||an(E)?E:Le,Y=!Ge(_)&&!Ge(_.ease),oe=Y?_.ease:_,me=Y?_.settlingDuration:Si(wt(Ai.duration,K>1?Si(k,he,ye,Ce,null,ve)/K:k),he,ye,Ce,null,ve),ge=Si(wt(Ai.delay,Z?0:N),he,ye,Ce,null,ve),Se=Ai.modifier||z,ce=!Ge(de),fe=!Ge(Me),Ie=Pn(Me),Be=Ie||ce&&fe,Re=ue?B:0,Ae=ue?B+ge:ge,Ye=ut(ie+Ae,12),je=ut(ie+Re,12);!X&&(ce||Ie)&&(X=1);let ze=ue;if(P!==Et.none){let He=le._head;for(;He&&He._absoluteStartTime<=Ye;)if(He._isOverridden||(ze=He),He=He._nextRep,He&&He._absoluteStartTime>=Ye)for(;He;)na(He),He=He._nextRep}if(Be){cn(Ie?Si(Me[0],he,ye,Ce,$c,ve):de,tt),cn(Ie?Si(Me[1],he,ye,Ce,Zc,ve):Me,rt);let He=bi(he,G,S,Nr);tt.t===it.NUMBER&&(ze?ze._valueType===it.UNIT&&(tt.t=it.UNIT,tt.u=ze._unit):(cn(He,Ht),Ht.t===it.UNIT&&(tt.t=it.UNIT,tt.u=Ht.u)))}else fe?cn(Me,rt):ue?rd(ue,rt):cn(i&&ze&&ze.parent.parent===i?ze._value:bi(he,G,S,Nr),rt),ce?cn(de,tt):ue?rd(ue,tt):cn(i&&ze&&ze.parent.parent===i?ze._value:bi(he,G,S,Nr),tt);if(tt.o&&(tt.n=Rr(ze?ze._toNumber:cn(bi(he,G,S,Nr),Ht).n,tt.n,tt.o)),rt.o&&(rt.n=Rr(tt.n,rt.n,rt.o)),tt.t!==rt.t){if(tt.t===it.COMPLEX||rt.t===it.COMPLEX){let He=tt.t===it.COMPLEX?tt:rt,Qe=tt.t===it.COMPLEX?rt:tt;Qe.t=it.COMPLEX,Qe.s=Bt(He.s),Qe.d=He.d.map(()=>Qe.n)}else if(tt.t===it.UNIT||rt.t===it.UNIT){let He=tt.t===it.UNIT?tt:rt,Qe=tt.t===it.UNIT?rt:tt;Qe.t=it.UNIT,Qe.u=He.u}else if(tt.t===it.COLOR||rt.t===it.COLOR){let He=tt.t===it.COLOR?tt:rt,Qe=tt.t===it.COLOR?rt:tt;Qe.t=it.COLOR,Qe.d=He.d.map(()=>0)}}if(tt.u!==rt.u){let He=rt.u?tt:rt;He=ra(he,He,rt.u?rt.u:tt.u,!1)}if(rt.d&&tt.d&&rt.d.length!==tt.d.length){let He=tt.d.length>rt.d.length?tt:rt,Qe=He===tt?rt:tt;Qe.d=He.d.map((Dn,hn)=>Ge(Qe.d[hn])?0:Qe.d[hn]),Qe.s=Bt(He.s)}let H=ut(+me||st,12),be=Nr[G];Mi(be)||(Nr[G]=null);let pe=w?w.set:null;B=ut(Ae+H,12);let Ne=tt.d,we=rt.d,_e=rt.s,Ue={parent:this,id:rv++,property:G,target:he,_value:null,_toFunc:Zc.func,_fromFunc:$c.func,_ease:Bs(oe),_fromNumbers:Ne?Bt(Ne):$o,_toNumbers:we?Bt(we):$o,_strings:_e?Bt(_e):$o,_fromNumber:tt.n,_toNumber:rt.n,_numbers:Ne?Bt(Ne):$o,_number:tt.n,_unit:rt.u,_modifier:Se,_currentTime:0,_startTime:Ae,_delay:+ge,_updateDuration:H,_changeDuration:H,_absoluteStartTime:Ye,_absoluteUpdateStartTime:je,_absoluteEndTime:ut(ie+B,12),_hasFromValue:ce||Ie?1:0,_tweenType:S,_setter:pe,_valueType:rt.t,_composition:P,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:be,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};P!==Et.none&&qc(Ue,le);let Je=Ue._valueType;if(Je===it.COMPLEX)Ue._value=Wc(Ue,1,-1);else if(Je===it.UNIT)Ue._value=`${Se(Ue._toNumber)}${Ue._unit}`;else if(Je===it.COLOR){let He=rt.d;Ue._value=`rgba(${ut(He[0],0)},${ut(He[1],0)},${ut(He[2],0)},${He[3]})`}else Ue._value=Se(Ue._toNumber);isNaN(ae)&&(ae=Ue._startTime),ue=Ue,V++,Mn(this,Ue)}(isNaN(W)||ae<W)&&(W=ae),(isNaN(O)||B>O)&&(O=B),S===_t.TRANSFORM&&(We=V-Z,ee=V)}if(!isNaN(We)){let F=0;ht(this,S=>{F>=We&&F<ee&&(S._renderTransforms=1,S._composition===Et.blend&&ht(Wi.animation,w=>{w.id===S.id&&(w._renderTransforms=1)})),F++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),W?(ht(this,Q=>{Q._startTime-Q._delay||(Q._delay-=W),Q._startTime-=W}),O-=W):W=0,O||(O=st,this.iterationCount=0),this.targets=l,this.id=Ge(u)?cm:u,this.duration=O===st?st:Os((O+this._loopDelay)*this.iterationCount-this._loopDelay)||st,this.onRender=v||M.onRender,this._ease=L,this._delay=W,this.iterationDuration=O,!this._autoplay&&X&&this.onRender(this)}stretch(e){let t=this.duration;if(t===Hi(e))return this;let i=e/t;return ht(this,s=>{s._updateDuration=Hi(s._updateDuration*i),s._changeDuration=Hi(s._changeDuration*i),s._currentTime*=i,s._delay*=i,s._startTime*=i,s._absoluteStartTime*=i,s._absoluteUpdateStartTime*=i,s._absoluteEndTime*=i}),super.stretch(e)}refresh(){return ht(this,e=>{let t=e._toFunc,i=e._fromFunc;(t||i)&&(i?(cn(i(),tt),tt.u!==e._unit&&e.target[yi]&&ra(e.target,tt,e._unit,!0),e._fromNumbers=Bt(tt.d),e._fromNumber=tt.n):t&&(cn(bi(e.target,e.property,e._tweenType),Ht),e._fromNumbers=Bt(Ht.d),e._fromNumber=Ht.n),t&&(cn(t(),rt),e._toNumbers=Bt(rt.d),e._strings=Bt(rt.s),e._toNumber=rt.o?Rr(e._fromNumber,rt.n,rt.o):rt.n))}),this.duration===st&&this.restart(),this}revert(){return super.revert(),Ir(this)}then(e){return super.then(e)}},fd=(n,e)=>nt.editor?nt.editor.addAnimation(n,e):new xs(n,e,null,0,!1).init();var av=(n,e)=>{if(Rn(e,"<")){let t=e[1]==="<",i=n._tail,s=i?i._offset+i._delay:0;return t?s:s+i.duration}},ks=(n,e)=>{let t=n.iterationDuration;if(t===st&&(t=0),Ge(e))return t;if(vn(+e))return+e;let i=e,s=n?n.labels:null,r=!Mi(s),o=av(n,i),a=!Ge(o),l=Op.exec(i);if(l){let c=l[0],h=i.split(c),d=r&&h[0]?s[h[0]]:t,u=a?o:r?d:t,f=+h[1];return Rr(u,f,c[0])}else return a?o:r?Ge(s[i])?t:s[i]:t};function lv(n){return Os((n.iterationDuration+n._loopDelay)*n.iterationCount-n._loopDelay)||st}function pd(n,e,t,i,s,r){let a=vn(n.duration)&&n.duration<=st?t-st:t;e.composition&&Ti(e,a,1,1,Gt.AUTO);let l=i?new xs(i,n,e,a,!1,s,r):new ti(n,e,a);return e.composition&&l.init(!0),Mn(e,l),ht(e,c=>{let d=c._offset+c._delay+c.duration;d>e.iterationDuration&&(e.iterationDuration=d)}),e.duration=lv(e),e}var um=0,jc=class extends ti{constructor(e={}){super(e,null,0),++um,this.id=Ge(e.id)?um:e.id,this.duration=0,this.labels={};let t=e.defaults,i=nt.defaults;this.defaults=t?kc(t,i):i,this.composition=wt(e.composition,!0),this.onRender=e.onRender||i.onRender;let s=wt(e.playbackEase,i.playbackEase);this._ease=s?Bs(s):null,this.iterationDuration=0}add(e,t,i){let s=Ns(t),r=Ns(e);if(s||r){if(this._hasChildren=!0,s){let o=t,a=nt.editor&&nt.editor.addTimelineChild,l=i&&i.type==="Stagger"&&nt.editor,c=Kt(i)?i:null;if(c||l){let h=Dr(e),d=this.duration,u=this.iterationDuration,f=o.id,g=0,y=h.length,m=a?a(e,o,this.id,i,y):null,p=c||nt.editor.resolveStagger(i.defaultValue);h.forEach(b=>{let v={...m||o};this.duration=d,this.iterationDuration=u,Ge(f)||(v.id=f+"-"+g);let M=ks(this,p(b,g,h,null,this));pd(v,this,M,b,g,h),g++})}else{let h=a?a(e,o,this.id,i):o,d=i&&i.type?i.defaultValue:i;pd(h,this,ks(this,d),e)}}else pd(e,this,ks(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(Ge(e)||e&&Ge(e.pause))return this;e.pause();let i=+(e.effect?e.effect.getTiming().duration:e.duration);!Ge(e)&&!Ge(e.persist)&&(e.persist=!0);let s=nt.editor,r=s&&s.addTimelineChild;s&&s.addTimelineSync&&(t=s.addTimelineSync(e,t,this.id),s.addTimelineChild=null);let o=this.add(e,{currentTime:[0,i],duration:i,delay:0,ease:"linear",playbackEase:"linear"},t);return s&&(s.addTimelineChild=r),o}set(e,t,i){return Ge(t)?this:(t.duration=st,t.composition=Et.replace,this.add(e,t,i))}call(e,t){return Ge(e)||e&&!Kt(e)?this:(nt.editor&&nt.editor.addTimelineCall&&(t=nt.editor.addTimelineCall(e,t,this.id)),this.add({duration:0,delay:0,onComplete:()=>e(this)},t))}label(e,t){return Ge(e)||e&&!an(e)?this:(nt.editor&&nt.editor.addTimelineLabel&&(t=nt.editor.addTimelineLabel(e,t,this.id)),this.labels[e]=ks(this,t),this)}remove(e,t){return sa(Dr(e),this,t),this}stretch(e){let t=this.duration;if(t===Hi(e))return this;let i=e/t,s=this.labels;ht(this,r=>r.stretch(r.duration*i));for(let r in s)s[r]*=i;return super.stretch(e)}refresh(){return ht(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),ht(this,e=>e.revert,!0),Ir(this)}then(e){return super.then(e)}},md=n=>nt.editor?nt.editor.addTimeline(n):new jc(n).init();var gd={};Ed(gd,{clamp:()=>ln,damp:()=>pv,degToRad:()=>un,lerp:()=>Gi,mapRange:()=>fv,padEnd:()=>hv,padStart:()=>uv,radToDeg:()=>Hn,round:()=>ut,roundPad:()=>cv,snap:()=>Wp,wrap:()=>dv});var cv=(n,e)=>(+n).toFixed(e),uv=(n,e,t)=>`${n}`.padStart(e,t),hv=(n,e,t)=>`${n}`.padEnd(e,t),dv=(n,e,t)=>((n-e)%(t-e)+(t-e))%(t-e)+e,fv=(n,e,t,i,s)=>i+(n-e)/(t-e)*(s-i),un=n=>n*Math.PI/180,Hn=n=>n*180/Math.PI,pv=(n,e,t,i)=>i?i===1?e:Gi(n,e,1-Math.exp(-i*t*.1)):n;var hm={_head:null,_tail:null},dm=(n,e,t)=>{let i=hm._head,s;for(;i;){let r=i._next,o=i.$el===n,a=!e||i.property===e,l=!t||i.parent===t;if(o&&a&&l){s=i.animation;try{s.commitStyles()}catch{}s.cancel(),In(hm,i);let c=i.parent;c&&(c._completed++,c.animations.length===c._completed&&(c.completed=!0,c.paused=!0,c.muteCallbacks||(c.onComplete(c),c._resolve(c))))}i=r}return s};function fm(n,e,t){let i=gs(n);if(!i.length)return;let[s]=i,r=ea(s,e),o=Pr(e,s,r),a=bi(s,o);if(Ge(t))return a;if(cn(a,Ht),Ht.t===it.NUMBER||Ht.t===it.UNIT){if(t===!1)return Ht.n;{let l=ra(s,Ht,t,!1);return`${ut(l.n,nt.precision)}${l.u}`}}}var pm=(n,e)=>{if(!Ge(e))return nt.editor&&nt.editor.addSet?nt.editor.addSet(n,e):(e.duration=st,e.composition=wt(e.composition,Et.none),new xs(n,e,null,0,!0).resume())},mm=(n,e,t)=>{let i=Dr(n);for(let s=0,r=i.length;s<r;s++)dm(i[s],t,e&&e.controlAnimation&&e);return sa(i,e,t),i};var gm=(n=Ot)=>new ti({duration:1*nt.timeScale,onComplete:n},null,0).resume(),_m=n=>{let e;return((...t)=>{let i,s,r,o,a;e&&(i=e.currentIteration,s=e.iterationProgress,r=e.reversed,o=e._alternate,a=e._startTime,e.revert());let l=n(...t);return l&&!Kt(l)&&l.revert&&(e=l),Ge(s)||(e.currentIteration=i,e.iterationProgress=(o&&i%2?!r:r)?1-s:s,e._startTime=a),l||Ot})};var xm=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,mv=(n,e,t)=>{let i=0,s=1,r,o,a=0;do o=i+(s-i)/2,r=xm(o,e,t)-n,r>0?s=o:i=o;while(ki(r)>1e-7&&++a<100);return o},pt=(n=.5,e=0,t=.5,i=1)=>n===e&&t===i?Ln:s=>s===0||s===1?s:xm(mv(s,n,t),e,i);var ni=(...n)=>{let e=n.length;if(!e)return Ln;let t=e-1,i=n[0],s=n[t],r=[0],o=[Vi(i)];for(let a=1;a<t;a++){let l=n[a],c=an(l)?l.trim().split(" "):[l],h=c[0],d=c[1];r.push(Ge(d)?a/t:Vi(d)/100),o.push(Vi(h))}return o.push(Vi(s)),r.push(1),function(l){for(let c=1,h=r.length;c<h;c++){let d=r[c];if(l<=d){let u=r[c-1],f=o[c-1];return f+(o[c]-f)*(l-u)/(d-u)}}return o[o.length-1]}};var Ct={};Ed(Ct,{$:()=>gs,addChild:()=>Mn,clamp:()=>Cm,cleanInlineStyles:()=>Kp,createSeededRandom:()=>eu,damp:()=>Im,degToRad:()=>Am,forEachChildren:()=>ht,get:()=>fm,keepTime:()=>_m,lerp:()=>Pm,mapRange:()=>Tm,padEnd:()=>Sm,padStart:()=>Mm,radToDeg:()=>Em,random:()=>Fr,randomPick:()=>Lm,remove:()=>mm,removeChild:()=>In,round:()=>Rm,roundPad:()=>vm,set:()=>pm,shuffle:()=>tu,snap:()=>wm,stagger:()=>xt,sync:()=>gm,wrap:()=>bm});var Wn=gd,Qc={},gv=(n,e=0)=>(...t)=>e?i=>n(...t,i):i=>n(i,...t),ym=n=>(...e)=>{let t=n(...e);return new Proxy(Ot,{apply:(i,s,[r])=>t(r),get:(i,s)=>{if(Qc[s])return ym((...r)=>{let o=Qc[s](...r);return a=>o(t(a))})}})},Xn=(n,e,t=0)=>{let i=(...s)=>(s.length<e.length?ym(gv(e,t)):e)(...s);return Qc[n]||(Qc[n]=i),i},vm=Xn("roundPad",Wn.roundPad),Mm=Xn("padStart",Wn.padStart),Sm=Xn("padEnd",Wn.padEnd),bm=Xn("wrap",Wn.wrap),Tm=Xn("mapRange",Wn.mapRange),Am=Xn("degToRad",Wn.degToRad),Em=Xn("radToDeg",Wn.radToDeg),wm=Xn("snap",Wn.snap),Cm=Xn("clamp",Wn.clamp),Rm=Xn("round",Wn.round),Pm=Xn("lerp",Wn.lerp,1),Im=Xn("damp",Wn.damp,1);var Fr=(n=0,e=1,t=0)=>{let i=10**t;return Math.floor((Math.random()*(e-n+1/i)+n)*i)/i},_v=0,eu=(n,e=0,t=1,i=0)=>{let s=n===void 0?_v++:n;return(r=e,o=t,a=i)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);let l=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/l)+r)*l)/l}},Lm=n=>n[Fr(0,n.length-1)],tu=(n,e=Fr)=>{let t=n.length,i,s;for(;t;)s=e(0,--t),i=n[t],n[t]=n[s],n[s]=i;return n};var xt=(n,e={})=>{let t=[],i=0,s,r=null,o=e.from,a=e.reversed,l=e.ease,c=!Ge(l),d=c&&!Ge(l.ease)?l.ease:c?Bs(l):null,u=e.grid,f=u===!0,g=e.axis,y=e.total,m=Ge(o)||o===0||o==="first",p=o==="center",b=o==="last",v=o==="random",M=Pn(o),I=Pn(n),T=e.use,L=I?Vi(n[0]):Vi(n),x=I?Vi(n[1]):0,R=Oc.exec((I?n[1]:n)+Gn),k=e.start||0+(I?L:0),N=e.seed,se=!Ge(N)&&N!==!1?eu(N===!0?0:N):Fr,ie=e.jitter,O=!Ge(ie),W=Pn(ie),V=W?ie[0]:ie||0,X=W?ie[1]:ie||0,Q=m?0:vn(o)?o:0;return(he,ye,Ce,We,ee)=>{let[F]=gs(he),S=Ge(y)?Ce.length:y,w=Ge(T)?!1:Kt(T)?T(F,ye,S):bi(F,T),G=vn(w)||an(w)&&vn(+w)?+w:ye,ne=G>=0&&G<S?G:ye;if(p&&(Q=(S-1)/2),b&&(Q=S-1),!t.length){if(f){let ue=!0,ae=!1,B=1/0,Z=1/0,K=1/0,re=-1/0,D=-1/0,P=-1/0,C=[],ve=[],Te=[];for(let Me=0;Me<S;Me++){let de=Ce[Me],Le=0,E=0,_=0,Y=!1;if(de&&Kt(de.getBoundingClientRect)){let oe=de.getBoundingClientRect();Le=oe.left+oe.width/2,E=oe.top+oe.height/2,Y=!0}else{let oe=de;oe&&vn(oe.x)&&vn(oe.y)&&(Le=oe.x,E=oe.y,vn(oe.z)&&(_=oe.z,ae=!0),Y=!0)}if(!Y){ue=!1;break}C.push(Le),ve.push(E),Te.push(_),Le<B&&(B=Le),E<Z&&(Z=E),_<K&&(K=_),Le>re&&(re=Le),E>D&&(D=E),_>P&&(P=_)}if(ue){let Me=C[0],de=ve[0],Le=Te[0];M?(Me=B+o[0]*(re-B),de=Z+o[1]*(D-Z),Le=ae?K+(o.length>=3?o[2]:.5)*(P-K):0):p?(Me=(B+re)/2,de=(Z+D)/2,Le=(K+P)/2):b?(Me=C[S-1],de=ve[S-1],Le=Te[S-1]):vn(o)&&(Me=C[o],de=ve[o],Le=Te[o]);for(let _=0;_<S;_++){let Y=Me-C[_],oe=de-ve[_],me=Le-Te[_],ge=jo(Y*Y+oe*oe+(ae?me*me:0));g==="x"&&(ge=-Y),g==="y"&&(ge=-oe),g==="z"&&(ge=-me),t.push(ge)}let E=1/0;for(let _=0;_<S;_++){let Y=ki(t[_]);Y>0&&Y<E&&(E=Y)}if(E>0&&E<1/0)for(let _=0;_<S;_++)t[_]=t[_]/E}else for(let Me=0;Me<S;Me++)t.push(ki(Q-Me))}else for(let ue=0;ue<S;ue++)if(!u)t.push(ki(Q-ue));else{let ae=u.length,B=u[0]*u[1],Z,K,re;M?(Z=o[0]*(u[0]-1),K=o[1]*(u[1]-1),re=ae===3?(o.length>=3?o[2]:.5)*(u[2]-1):0):p?(Z=(u[0]-1)/2,K=(u[1]-1)/2,re=ae===3?(u[2]-1)/2:0):(Z=Q%u[0],K=Fs(Q/u[0])%u[1],re=ae===3?Fs(Q/B):0);let D=ue%u[0],P=Fs(ue/u[0])%u[1],C=ae===3?Fs(ue/B):0,ve=Z-D,Te=K-P,Me=re-C,de=jo(ve*ve+Te*Te+(ae===3?Me*Me:0));g==="x"&&(de=-ve),g==="y"&&(de=-Te),g==="z"&&(de=-Me),t.push(de)}i=t[0];for(let ue=1;ue<S;ue++)t[ue]>i&&(i=t[ue]);if(d||a)for(let ue=0;ue<S;ue++){let ae=t[ue];d&&(ae=d(ae/i)*i),a&&(ae=g?-ae:ki(i-ae)),t[ue]=ae}if(O){r=new Array(S);for(let ue=0;ue<S;ue++)r[ue]=se(-1,1,4)}v&&(t=tu(t,se))}let $=I?(x-L)/i:L;Ge(s)&&(s=ee?ks(ee,Ge(e.start)?ee.iterationDuration:k):k);let le=s+($*ut(t[ne],2)||0);if(O){let ue=i?t[ne]/i:0,ae=V+(X-V)*ue;le=le+r[ne]*ae}return e.modifier&&(le=e.modifier(le)),R&&(le=`${le}${R[2]}`),le}};var xv=n=>!!(n&&!n.nodeType&&(n.isObject3D||n.isMaterial||n.isTexture||n.isFog||n.isFogExp2||n.isUniformNode||n.isColor||n.isVector2||n.isVector3||n.isVector4||n.isAnimejsInstanceProxy)),qn=qp(xv);var pn=1/255,yd={X:"x",Y:"y",Z:"z",W:"w"},Zt=0,aa=1,_d=2,la=0,Or=1,xd=2,ft={kind:0,path:0,base:"",axis:"x"};function nu(n,e,t,i,s,r,o){if(e!==0){let a=Math.tan(un(e));n[4]+=n[0]*a,n[5]+=n[1]*a,n[6]+=n[2]*a}if(t!==0){let a=Math.tan(un(t));n[0]+=n[4]*a,n[1]+=n[5]*a,n[2]+=n[6]*a}if(i!==0){let a=Math.tan(un(i));n[0]+=n[8]*a,n[1]+=n[9]*a,n[2]+=n[10]*a}(s!==0||r!==0||o!==0)&&(n[12]+=s-(n[0]*s+n[4]*r+n[8]*o),n[13]+=r-(n[1]*s+n[5]*r+n[9]*o),n[14]+=o-(n[2]*s+n[6]*r+n[10]*o))}function Vs(n){return n?`#${n.getHexString(St)}`:null}function ys(n,e){return n?e==="x"||e==="y"?!!(n.isVector2||n.isVector3||n.isVector4):e==="z"?!!(n.isVector3||n.isVector4):!!n.isVector4:!1}function vd(n,e){let t=n[e];if(t!==void 0){if(t&&t.isColor)return ft.kind=la,ft.path=Zt,ft;if(t&&t.isUniformNode){let o=t.value;return o&&o.isColor?(ft.kind=la,ft.path=_d,ft):typeof o=="number"||typeof o=="boolean"?(ft.kind=Or,ft.path=_d,ft):null}return typeof t=="number"||typeof t=="boolean"?(ft.kind=Or,ft.path=Zt,ft):null}let i=n.uniforms,s=i&&i[e];if(s){let o=s.value;if(o&&o.isColor)return ft.kind=la,ft.path=aa,ft;if(typeof o=="number")return ft.kind=Or,ft.path=aa,ft}let r=yd[e[e.length-1]];if(r){let o=e.slice(0,-1);if(ys(n[o],r))return ft.kind=xd,ft.path=Zt,ft.base=o,ft.axis=r,ft;let a=n[o];if(a&&a.isUniformNode&&ys(a.value,r))return ft.kind=xd,ft.path=_d,ft.base=o,ft.axis=r,ft;let l=i&&i[o];if(l&&ys(l.value,r))return ft.kind=xd,ft.path=aa,ft.base=o,ft.axis=r,ft}return null}function zs(n,e,t){if(t===Zt)return n[e];if(t===aa){let s=n.uniforms,r=s&&s[e];return r?r.value:null}let i=n[e];return i?i.value:null}function Dm(n,e,t,i){if(i===Zt){n[e]=t;return}if(i===aa){let r=n.uniforms,o=r&&r[e];o&&(o.value=t);return}let s=n[e];s&&(s.value=t)}function Gs(n,e,t,i){if(i===void 0&&(i=0),!n)return i;let s=Array.isArray(n)?n[0]:n;if(!s)return i;let r=zs(s,e,t);return r==null?i:r}function Br(n,e,t,i){if(n)if(Array.isArray(n))for(let s=0,r=n.length;s<r;s++)Dm(n[s],e,t,i);else Dm(n,e,t,i)}function ca(n,e,t){if(!n)return null;let i=Array.isArray(n)?n[0]:n;return Vs(i?zs(i,e,t):null)}function ua(n,e,t,i){if(!n)return;let s=t[0]*pn,r=t[1]*pn,o=t[2]*pn;if(Array.isArray(n))for(let a=0,l=n.length;a<l;a++){let c=zs(n[a],e,i);c&&c.setRGB(s,r,o,St)}else{let a=zs(n,e,i);a&&a.setRGB(s,r,o,St)}}function Nm(n,e,t,i){if(!n)return 0;let s=Array.isArray(n)?n[0]:n,r=s?zs(s,e,i):null;return r?r[t]:0}function Um(n,e,t,i,s){if(n)if(Array.isArray(n))for(let r=0,o=n.length;r<o;r++){let a=zs(n[r],e,s);a&&(a[t]=i)}else{let r=zs(n,e,s);r&&(r[t]=i)}}var yv=n=>n,vv=n=>n.material,Mv=[{},{},{}],Sv=[{},{},{}],bv=[{},{},{}],Tv=[{},{},{}],Av=[{},{},{}],Ev=[{},{},{}],Bm=(n,e,t,i,s,r)=>{let o=e.path;if(e.kind===la){let h=i[o];return h[n]||(h[n]={get:d=>ca(t(d),n,o),set:(d,u,f)=>ua(t(d),n,f._numbers,o)})}if(e.kind===Or){let h=s[o];return h[n]||(h[n]={get:d=>Gs(t(d),n,o),set:(d,u)=>Br(t(d),n,u,o)})}let a=e.base,l=e.axis,c=r[o];return c[n]||(c[n]={get:h=>Nm(t(h),a,l,o),set:(h,d)=>Um(t(h),a,l,d,o)})};qn.registerPropertyResolver((n,e)=>{let t=vd(n,e);return!t||t.kind===Or&&t.path===Zt?null:Bm(e,t,yv,Mv,Sv,bv)});qn.registerPropertyResolver((n,e)=>{if(n[e]!==void 0)return null;let t=n.material;if(!t)return null;let i=Array.isArray(t)?t[0]:t;if(!i)return null;let s=vd(i,e);return s?Bm(e,s,vv,Tv,Av,Ev):null});var km={rotation:1,angle:1},Fm={};qn.registerPropertyResolver((n,e)=>!km[e]||typeof n[e]!="number"?null:Fm[e]||(Fm[e]={get:t=>Hn(t[e]),set:(t,i)=>{t[e]=un(i)}}));var Om={};qn.registerPropertyResolver((n,e)=>{let t=yd[e[e.length-1]];if(!t)return null;let i=e.slice(0,-1);if(!km[i])return null;let s=n[i];return!s||!s.isEuler?null:Om[e]||(Om[e]={get:r=>Hn(r[i][t]),set:(r,o)=>{r[i][t]=un(o)}})});var ha=qn.registerTargetAdapter(n=>!!(n&&n.isUniformNode));ha.registerProperty("color",n=>Vs(n.value),(n,e,t)=>{let i=t._numbers;n.value.setRGB(i[0]*pn,i[1]*pn,i[2]*pn,St)},n=>!!(n.value&&n.value.isColor));ha.registerProperty("x",n=>n.value.x,(n,e)=>{n.value.x=e},n=>ys(n.value,"x"));ha.registerProperty("y",n=>n.value.y,(n,e)=>{n.value.y=e},n=>ys(n.value,"y"));ha.registerProperty("z",n=>n.value.z,(n,e)=>{n.value.z=e},n=>ys(n.value,"z"));ha.registerProperty("w",n=>n.value.w,(n,e)=>{n.value.w=e},n=>ys(n.value,"w"));var zm=n=>n.isLight?n:n.material,da=Symbol("animejs.skewOrigin"),Md=Symbol("animejs.opacity");function fa(n,e){if(e===void 0)if(n.material)e=Gs(n.material,"opacity",Zt,1);else{let i=n[Md];e=i===void 0?1:i}let t=n.scale;n.visible=!!(e&&t.x&&t.y&&t.z)}function Vm(n){let e=n[da];if(e)return e;e=n[da]={skewX:0,skewY:0,skewZ:0,originX:0,originY:0,originZ:0};let t=n.updateMatrix;return n.updateMatrix=function(){t.call(this);let i=this[da];(i.skewX!==0||i.skewY!==0||i.skewZ!==0||i.originX!==0||i.originY!==0||i.originZ!==0)&&nu(this.matrix.elements,i.skewX,i.skewY,i.skewZ,i.originX,i.originY,i.originZ)},e}var Xt=qn.registerTargetAdapter(n=>n instanceof Ft);Xt.registerProperty("x",n=>n.position.x,(n,e)=>{n.position.x=e});Xt.registerProperty("y",n=>n.position.y,(n,e)=>{n.position.y=e});Xt.registerProperty("z",n=>n.position.z,(n,e)=>{n.position.z=e});Xt.registerProperty("rotateX",n=>Hn(n.rotation.x),(n,e)=>{n.rotation.x=un(e)});Xt.registerProperty("rotateY",n=>Hn(n.rotation.y),(n,e)=>{n.rotation.y=un(e)});Xt.registerProperty("rotateZ",n=>Hn(n.rotation.z),(n,e)=>{n.rotation.z=un(e)});Xt.registerProperty("scaleX",n=>n.scale.x,(n,e)=>{n.scale.x=e,fa(n)});Xt.registerProperty("scaleY",n=>n.scale.y,(n,e)=>{n.scale.y=e,fa(n)});Xt.registerProperty("scaleZ",n=>n.scale.z,(n,e)=>{n.scale.z=e,fa(n)});Xt.registerProperty("scale",n=>n.scale.x,(n,e)=>{n.scale.x=e,n.scale.y=e,n.scale.z=e,fa(n)});Xt.registerProperty("visible",n=>n.visible,(n,e)=>{n.visible=!!e});Xt.registerProperty("opacity",n=>{if(n.material)return Gs(n.material,"opacity",Zt,1);let e=n[Md];return e===void 0?1:e},(n,e)=>{n.material?Br(n.material,"opacity",e,Zt):n[Md]=e,fa(n,e)},n=>!n.isLight);Xt.registerProperty("color",n=>ca(zm(n),"color",Zt),(n,e,t)=>ua(zm(n),"color",t._numbers,Zt));Xt.registerProperty("groundColor",n=>ca(n,"groundColor",Zt),(n,e,t)=>ua(n,"groundColor",t._numbers,Zt),n=>!!n.groundColor);Xt.registerProperty("background",n=>{let e=n.background;return e&&e.isColor?Vs(e):"#000000"},(n,e,t)=>{let i=n,s=i.background;(!s||!s.isColor)&&(s=new qe,i.background=s);let r=t._numbers;s.setRGB(r[0]*pn,r[1]*pn,r[2]*pn,St)},n=>!!n.isScene);var pa=(n,e,t,i)=>{Xt.registerProperty(n,s=>s[e](),(s,r)=>{s[t](r)},s=>!!s[i])};pa("volume","getVolume","setVolume","setVolume");pa("refDistance","getRefDistance","setRefDistance","setRefDistance");pa("rolloffFactor","getRolloffFactor","setRolloffFactor","setRefDistance");pa("maxDistance","getMaxDistance","setMaxDistance","setRefDistance");pa("focalLength","getFocalLength","setFocalLength","setFocalLength");var Xi=(n,e)=>{Xt.registerProperty(n,t=>t[n],(t,i)=>{t[n]=i,t.updateProjectionMatrix()},e)},Gm=n=>!!n.isPerspectiveCamera,iu=n=>!!n.isOrthographicCamera;Xi("fov",Gm);Xi("aspect",Gm);Xi("left",iu);Xi("right",iu);Xi("top",iu);Xi("bottom",iu);var kr=(n,e)=>{Xt.registerProperty(n,t=>{let i=t[da];return i?i[e]:0},(t,i)=>{Vm(t)[e]=i})};kr("skewX","skewX");kr("skewY","skewY");kr("skewZ","skewZ");kr("transformOriginX","originX");kr("transformOriginY","originY");kr("transformOriginZ","originZ");Xt.registerProperty("transformOrigin",n=>{let e=n[da];return e?`${e.originX} ${e.originY} ${e.originZ}`:"0 0 0"},(n,e,t)=>{let i=Vm(n),s=t._numbers;i.originX=s[0],i.originY=s[1],i.originZ=s[2]});var Sd=n=>!!n.isPerspectiveCamera||!!n.isOrthographicCamera;Xi("near",Sd);Xi("far",Sd);Xi("zoom",Sd);var Hs=n=>!!(n._skewX||n._skewY||n._skewZ||n._originX||n._originY||n._originZ),su=1,ru=2,ou=4,Ws=8,Hm=new WeakMap,bd=class{constructor(e){this.mesh=e,this.hasInstanceMatrix="instanceMatrix"in e,this.instances=[],this.dirtyList=[],this.userOnBeforeRender=e.onBeforeRender||null,this.chainedHandler=wv(this),Object.defineProperty(e,"onBeforeRender",{configurable:!0,get:()=>this.chainedHandler,set:t=>{this.userOnBeforeRender=t}})}flush(){let e=this.dirtyList;if(e.length!==0){for(let t=0,i=e.length;t<i;t++)e[t]._flush();this.hasInstanceMatrix&&(this.mesh.instanceMatrix.needsUpdate=!0),e.length=0}}};function wv(n){return function(e,t,i,s,r,o){n.flush();let a=n.userOnBeforeRender;a&&a.call(n.mesh,e,t,i,s,r,o)}}var zr=class{constructor(e,t){this.isAnimejsInstanceProxy=!0,this.parent=e.mesh,this.id=t,this._position=new q,this._rotation=new jn(0,0,0,"XYZ"),this._scale=new q(1,1,1),this._matrix=new mt,this._quat=new Bn,this._color=new qe,this._dirty=0,this._skewX=0,this._skewY=0,this._skewZ=0,this._originX=0,this._originY=0,this._originZ=0,this._hasSkewOrigin=!1,this._dirtyList=e.dirtyList;let i=e.mesh;this._hasSetColor="setColorAt"in i,this._hasSetVisible="setVisibleAt"in i,this._hasGetVisible="getVisibleAt"in i,i.getMatrixAt(t,this._matrix),this._matrix.elements[15]===0&&this._matrix.identity(),this._matrix.decompose(this._position,this._quat,this._scale),this._rotation.setFromQuaternion(this._quat,"XYZ"),"getColorAt"in i&&"instanceColor"in i&&i.instanceColor&&i.getColorAt(t,this._color)}_markDirty(e){this._dirty===0&&this._dirtyList.push(this),this._dirty|=e}_flush(){let e=this._dirty;if(!e)return;let t=this._matrix,i=this._position;if(e===su&&!this._hasSkewOrigin){let s=t.elements;s[12]=i.x,s[13]=i.y,s[14]=i.z}else{let s=this._quat;e&ru&&s.setFromEuler(this._rotation),t.compose(i,s,this._scale),this._hasSkewOrigin&&nu(t.elements,this._skewX,this._skewY,this._skewZ,this._originX,this._originY,this._originZ)}this.parent.setMatrixAt(this.id,t),this._dirty=0}get x(){return this._position.x}set x(e){this._position.x=e,this._markDirty(su)}get y(){return this._position.y}set y(e){this._position.y=e,this._markDirty(su)}get z(){return this._position.z}set z(e){this._position.z=e,this._markDirty(su)}get rotateX(){return Hn(this._rotation.x)}set rotateX(e){this._rotation.x=un(e),this._markDirty(ru)}get rotateY(){return Hn(this._rotation.y)}set rotateY(e){this._rotation.y=un(e),this._markDirty(ru)}get rotateZ(){return Hn(this._rotation.z)}set rotateZ(e){this._rotation.z=un(e),this._markDirty(ru)}get scaleX(){return this._scale.x}set scaleX(e){this._scale.x=e,this._markDirty(ou)}get scaleY(){return this._scale.y}set scaleY(e){this._scale.y=e,this._markDirty(ou)}get scaleZ(){return this._scale.z}set scaleZ(e){this._scale.z=e,this._markDirty(ou)}get scale(){return this._scale.x}set scale(e){let t=this._scale;t.x=e,t.y=e,t.z=e,this._markDirty(ou)}get skewX(){return this._skewX}set skewX(e){this._skewX=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get skewY(){return this._skewY}set skewY(e){this._skewY=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get skewZ(){return this._skewZ}set skewZ(e){this._skewZ=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get transformOriginX(){return this._originX}set transformOriginX(e){this._originX=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get transformOriginY(){return this._originY}set transformOriginY(e){this._originY=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get transformOriginZ(){return this._originZ}set transformOriginZ(e){this._originZ=e,this._hasSkewOrigin=Hs(this),this._markDirty(Ws)}get opacity(){return Gs(this.parent.material,"opacity",Zt,1)}set opacity(e){Br(this.parent.material,"opacity",e,Zt)}get visible(){return this._hasGetVisible?this.parent.getVisibleAt(this.id):!0}set visible(e){this._hasSetVisible&&this.parent.setVisibleAt(this.id,e)}};function Td(n){let e=Hm.get(n);return e||(e=new bd(n),Hm.set(n,e)),n instanceof po?Rv(e):Cv(e)}function Cv(n){let t=n.mesh.count,i=n.instances;if(i.length===0&&t>0){i.length=t;for(let s=0;s<t;s++)i[s]=new zr(n,s);return i}if(i.length<t)for(let s=i.length;s<t;s++)i.push(new zr(n,s));else i.length>t&&(i.length=t);return i}function Rv(n){var r;let e=n.mesh,t=n.instances,i=(r=e._instanceInfo)!=null?r:[],s=i.length;t.length<s&&(t.length=s);for(let o=0;o<s;o++){let a=i[o];a&&a.active===!1?t[o]=null:t[o]||(t[o]=new zr(n,o))}return t.length>s&&(t.length=s),t}var Wm=qn.registerTargetAdapter(n=>n instanceof zr);Wm.registerProperty("color",n=>Vs(n._color),(n,e,t)=>{if(!n._hasSetColor)return;let i=t._numbers;n._color.setRGB(i[0]*pn,i[1]*pn,i[2]*pn,St);let s=n.parent;s.setColorAt(n.id,n._color),s.instanceColor&&(s.instanceColor.needsUpdate=!0)});Wm.registerProperty("transformOrigin",n=>`${n._originX} ${n._originY} ${n._originZ}`,(n,e,t)=>{let i=t._numbers;n._originX=i[0],n._originY=i[1],n._originZ=i[2],n._hasSkewOrigin=Hs(n),n._markDirty(Ws)});var Xm=`<svg id="logo" viewBox="0 0 7.156 4.024" xmlns="http://www.w3.org/2000/svg" data-pivot1="264" data-base1="294.76" data-pivot2="375.18" data-base2="393.45" data-dotx="378.45" data-doty="285.39" data-dotw="22.38" data-w1="800" data-w2="700">
  <g fill-rule="evenodd" transform="scale(0.01118)">
    <path id="l1-0" data-line="1" data-ch="\xA1" fill="#e63946" d="M-367.15,241.84 C-367.15,244.78 -368.2,247.24 -370.29,249.23 C-372.39,251.21 -375.05,252.2 -378.28,252.2 C-381.59,252.2 -384.29,251.21 -386.39,249.23 C-388.48,247.24 -389.53,244.78 -389.53,241.84 C-389.53,238.98 -388.48,236.57 -386.39,234.62 C-384.29,232.67 -381.59,231.7 -378.28,231.7 C-375.05,231.7 -372.39,232.67 -370.29,234.62 C-368.2,236.57 -367.15,238.98 -367.15,241.84 Z M-386.55,259.92 L-370.57,259.92 L-368.36,312.73 L-388.76,312.73 Z"/>
    <path id="l1-1" data-line="1" data-ch="B" fill="#ffffff" d="M-286.9,273.7 C-286.9,280.17 -289.16,285.29 -293.68,289.08 C-298.19,292.86 -304.5,294.76 -312.58,294.76 L-348.63,294.76 L-348.63,217.37 L-313.79,217.37 C-305.93,217.37 -299.77,219.17 -295.33,222.77 C-290.88,226.37 -288.66,231.26 -288.66,237.43 C-288.66,241.99 -289.85,245.77 -292.24,248.79 C-294.63,251.8 -297.81,253.89 -301.78,255.07 C-297.29,256.03 -293.69,258.25 -290.97,261.74 C-288.26,265.23 -286.9,269.22 -286.9,273.7 Z M-329.78,248.68 L-317.43,248.68 C-314.34,248.68 -311.97,248 -310.32,246.64 C-308.67,245.28 -307.84,243.28 -307.84,240.63 C-307.84,237.98 -308.67,235.96 -310.32,234.57 C-311.97,233.17 -314.34,232.47 -317.43,232.47 L-329.78,232.47 Z M-305.97,271.17 C-305.97,268.45 -306.87,266.32 -308.67,264.77 C-310.47,263.23 -312.95,262.46 -316.11,262.46 L-329.78,262.46 L-329.78,279.54 L-315.89,279.54 C-312.73,279.54 -310.28,278.83 -308.56,277.39 C-306.83,275.96 -305.97,273.88 -305.97,271.17 Z"/>
    <path id="l1-2" data-line="1" data-ch="i" fill="#2fbf71" d="M-276.42,216.71 C-276.42,213.77 -275.38,211.32 -273.28,209.38 C-271.19,207.43 -268.49,206.46 -265.18,206.46 C-261.94,206.46 -259.28,207.43 -257.19,209.38 C-255.09,211.32 -254.04,213.77 -254.04,216.71 C-254.04,219.57 -255.09,221.98 -257.19,223.93 C-259.28,225.88 -261.94,226.85 -265.18,226.85 C-268.49,226.85 -271.19,225.88 -273.28,223.93 C-275.38,221.98 -276.42,219.57 -276.42,216.71 Z M-255.81,233.24 L-255.81,294.76 L-274.66,294.76 L-274.66,233.24 Z"/>
    <path id="l1-3" data-line="1" data-ch="e" fill="#e63946" d="M-183.16,268.52 L-225.82,268.52 C-225.53,272.34 -224.3,275.26 -222.13,277.28 C-219.96,279.3 -217.3,280.32 -214.14,280.32 C-209.43,280.32 -206.16,278.33 -204.33,274.36 L-184.26,274.36 C-185.29,278.4 -187.15,282.04 -189.83,285.28 C-192.51,288.51 -195.88,291.05 -199.92,292.88 C-203.96,294.72 -208.48,295.64 -213.48,295.64 C-219.5,295.64 -224.87,294.35 -229.57,291.78 C-234.27,289.21 -237.95,285.53 -240.6,280.76 C-243.24,275.98 -244.56,270.39 -244.56,264 C-244.56,257.61 -243.26,252.02 -240.65,247.24 C-238.04,242.47 -234.39,238.79 -229.68,236.22 C-224.98,233.65 -219.58,232.36 -213.48,232.36 C-207.52,232.36 -202.23,233.61 -197.6,236.11 C-192.97,238.61 -189.35,242.17 -186.74,246.8 C-184.13,251.43 -182.83,256.83 -182.83,263.01 C-182.83,264.77 -182.94,266.61 -183.16,268.52 Z M-202.12,258.05 C-202.12,254.81 -203.22,252.24 -205.43,250.33 C-207.63,248.42 -210.39,247.46 -213.7,247.46 C-216.86,247.46 -219.52,248.38 -221.69,250.22 C-223.86,252.06 -225.2,254.67 -225.71,258.05 Z"/>
    <path id="l1-4" data-line="1" data-ch="n" fill="#ffffff" d="M-110.4,258.82 L-110.4,294.76 L-129.14,294.76 L-129.14,261.35 C-129.14,257.24 -130.21,254.04 -132.34,251.76 C-134.47,249.49 -137.34,248.35 -140.94,248.35 C-144.54,248.35 -147.41,249.49 -149.54,251.76 C-151.67,254.04 -152.74,257.24 -152.74,261.35 L-152.74,294.76 L-171.59,294.76 L-171.59,233.24 L-152.74,233.24 L-152.74,241.4 C-150.82,238.68 -148.25,236.53 -145.02,234.95 C-141.78,233.37 -138.15,232.58 -134.11,232.58 C-126.9,232.58 -121.15,234.92 -116.85,239.58 C-112.55,244.25 -110.4,250.66 -110.4,258.82 Z"/>
    <path id="l1-5" data-line="1" data-ch="v" fill="#2fbf71" d="M-68.29,277.12 L-54.95,233.24 L-34.89,233.24 L-56.72,294.76 L-79.98,294.76 L-101.81,233.24 L-81.63,233.24 Z"/>
    <path id="l1-6" data-line="1" data-ch="e" fill="#e63946" d="M32.02,268.52 L-10.64,268.52 C-10.34,272.34 -9.11,275.26 -6.95,277.28 C-4.78,279.3 -2.11,280.32 1.05,280.32 C5.75,280.32 9.02,278.33 10.86,274.36 L30.92,274.36 C29.89,278.4 28.04,282.04 25.35,285.28 C22.67,288.51 19.31,291.05 15.27,292.88 C11.23,294.72 6.71,295.64 1.71,295.64 C-4.32,295.64 -9.68,294.35 -14.39,291.78 C-19.09,289.21 -22.76,285.53 -25.41,280.76 C-28.06,275.98 -29.38,270.39 -29.38,264 C-29.38,257.61 -28.07,252.02 -25.47,247.24 C-22.86,242.47 -19.2,238.79 -14.5,236.22 C-9.79,233.65 -4.39,232.36 1.71,232.36 C7.66,232.36 12.95,233.61 17.58,236.11 C22.21,238.61 25.83,242.17 28.44,246.8 C31.05,251.43 32.35,256.83 32.35,263.01 C32.35,264.77 32.24,266.61 32.02,268.52 Z M13.06,258.05 C13.06,254.81 11.96,252.24 9.76,250.33 C7.55,248.42 4.8,247.46 1.49,247.46 C-1.67,247.46 -4.34,248.38 -6.5,250.22 C-8.67,252.06 -10.01,254.67 -10.53,258.05 Z"/>
    <path id="l1-7" data-line="1" data-ch="n" fill="#ffffff" d="M104.78,258.82 L104.78,294.76 L86.04,294.76 L86.04,261.35 C86.04,257.24 84.98,254.04 82.84,251.76 C80.71,249.49 77.85,248.35 74.25,248.35 C70.64,248.35 67.78,249.49 65.65,251.76 C63.52,254.04 62.45,257.24 62.45,261.35 L62.45,294.76 L43.6,294.76 L43.6,233.24 L62.45,233.24 L62.45,241.4 C64.36,238.68 66.93,236.53 70.17,234.95 C73.4,233.37 77.04,232.58 81.08,232.58 C88.28,232.58 94.03,234.92 98.33,239.58 C102.63,244.25 104.78,250.66 104.78,258.82 Z"/>
    <path id="l1-8" data-line="1" data-ch="i" fill="#2fbf71" d="M117.46,216.71 C117.46,213.77 118.51,211.32 120.6,209.38 C122.7,207.43 125.4,206.46 128.7,206.46 C131.94,206.46 134.6,207.43 136.7,209.38 C138.79,211.32 139.84,213.77 139.84,216.71 C139.84,219.57 138.79,221.98 136.7,223.93 C134.6,225.88 131.94,226.85 128.7,226.85 C125.4,226.85 122.7,225.88 120.6,223.93 C118.51,221.98 117.46,219.57 117.46,216.71 Z M138.07,233.24 L138.07,294.76 L119.22,294.76 L119.22,233.24 Z"/>
    <path id="l1-9" data-line="1" data-ch="d" fill="#e63946" d="M176.44,232.36 C180.48,232.36 184.17,233.21 187.52,234.9 C190.86,236.59 193.49,238.87 195.4,241.73 L195.4,213.18 L214.25,213.18 L214.25,294.76 L195.4,294.76 L195.4,285.94 C193.63,288.88 191.12,291.23 187.85,292.99 C184.58,294.76 180.77,295.64 176.44,295.64 C171.37,295.64 166.77,294.33 162.66,291.72 C158.54,289.12 155.29,285.4 152.9,280.59 C150.51,275.78 149.32,270.21 149.32,263.89 C149.32,257.57 150.51,252.02 152.9,247.24 C155.29,242.47 158.54,238.79 162.66,236.22 C166.77,233.65 171.37,232.36 176.44,232.36 Z M181.95,248.79 C178.2,248.79 175.02,250.13 172.41,252.81 C169.8,255.49 168.5,259.19 168.5,263.89 C168.5,268.59 169.8,272.32 172.41,275.08 C175.02,277.83 178.2,279.21 181.95,279.21 C185.7,279.21 188.88,277.85 191.48,275.13 C194.09,272.41 195.4,268.7 195.4,264 C195.4,259.3 194.09,255.59 191.48,252.87 C188.88,250.15 185.7,248.79 181.95,248.79 Z"/>
    <path id="l1-10" data-line="1" data-ch="o" fill="#ffffff" d="M225.49,264 C225.49,257.68 226.89,252.11 229.68,247.3 C232.47,242.49 236.3,238.79 241.15,236.22 C246,233.65 251.44,232.36 257.46,232.36 C263.49,232.36 268.93,233.65 273.78,236.22 C278.63,238.79 282.45,242.49 285.24,247.3 C288.03,252.11 289.43,257.68 289.43,264 C289.43,270.32 288.02,275.89 285.19,280.7 C282.36,285.51 278.5,289.21 273.61,291.78 C268.72,294.35 263.27,295.64 257.24,295.64 C251.21,295.64 245.79,294.35 240.98,291.78 C236.17,289.21 232.38,285.53 229.63,280.76 C226.87,275.98 225.49,270.39 225.49,264 Z M270.25,264 C270.25,259.08 269.02,255.29 266.56,252.65 C264.09,250 261.06,248.68 257.46,248.68 C253.79,248.68 250.74,249.98 248.31,252.59 C245.89,255.2 244.67,259 244.67,264 C244.67,268.92 245.87,272.71 248.26,275.35 C250.65,278 253.64,279.32 257.24,279.32 C260.84,279.32 263.91,278 266.45,275.35 C268.98,272.71 270.25,268.92 270.25,264 Z"/>
    <path id="l1-11" data-line="1" data-ch="s" fill="#2fbf71" d="M297.48,274.58 L316.11,274.58 C316.33,276.71 317.32,278.44 319.09,279.76 C320.85,281.09 323.02,281.75 325.59,281.75 C327.94,281.75 329.76,281.29 331.05,280.37 C332.33,279.45 332.98,278.26 332.98,276.79 C332.98,275.02 332.06,273.72 330.22,272.87 C328.38,272.03 325.41,271.09 321.29,270.06 C316.88,269.03 313.21,267.95 310.27,266.81 C307.33,265.67 304.79,263.87 302.66,261.41 C300.53,258.95 299.46,255.62 299.46,251.43 C299.46,247.91 300.44,244.69 302.38,241.79 C304.33,238.88 307.2,236.59 310.98,234.9 C314.77,233.21 319.27,232.36 324.49,232.36 C332.2,232.36 338.28,234.27 342.73,238.09 C347.18,241.92 349.73,246.99 350.39,253.31 L332.98,253.31 C332.68,251.18 331.74,249.49 330.16,248.24 C328.58,246.99 326.51,246.36 323.94,246.36 C321.73,246.36 320.04,246.78 318.86,247.63 C317.69,248.47 317.1,249.63 317.1,251.1 C317.1,252.87 318.04,254.19 319.91,255.07 C321.79,255.95 324.71,256.83 328.68,257.72 C333.23,258.89 336.94,260.05 339.81,261.19 C342.68,262.33 345.19,264.17 347.36,266.7 C349.53,269.24 350.65,272.64 350.72,276.9 C350.72,280.5 349.71,283.71 347.69,286.54 C345.67,289.37 342.77,291.6 338.98,293.21 C335.2,294.83 330.81,295.64 325.81,295.64 C320.44,295.64 315.67,294.72 311.48,292.88 C307.29,291.05 303.98,288.53 301.56,285.33 C299.13,282.13 297.77,278.55 297.48,274.58 Z"/>
    <path id="l1-12" data-line="1" data-ch="!" fill="#e63946" d="M388.42,214.61 L386.22,267.42 L370.24,267.42 L368.03,214.61 Z"/>
    <path id="l2-0" data-line="2" data-ch="E" fill="#ffd166" d="M-334.75,356.46 L-334.75,365.76 L-319.76,365.76 L-319.76,374.4 L-334.75,374.4 L-334.75,384.48 L-317.8,384.48 L-317.8,393.45 L-345.94,393.45 L-345.94,347.5 L-317.8,347.5 L-317.8,356.46 Z"/>
    <path id="l2-1" data-line="2" data-ch="s" fill="#ffd166" d="M-311.71,381.47 L-300.65,381.47 C-300.51,382.73 -299.93,383.76 -298.88,384.55 C-297.83,385.33 -296.54,385.72 -295.02,385.72 C-293.62,385.72 -292.54,385.45 -291.78,384.91 C-291.01,384.36 -290.63,383.65 -290.63,382.78 C-290.63,381.73 -291.18,380.96 -292.27,380.45 C-293.36,379.95 -295.12,379.4 -297.57,378.78 C-300.19,378.17 -302.37,377.53 -304.11,376.85 C-305.86,376.18 -307.37,375.11 -308.63,373.65 C-309.9,372.18 -310.53,370.21 -310.53,367.72 C-310.53,365.63 -309.95,363.72 -308.79,362 C-307.64,360.27 -305.94,358.91 -303.69,357.9 C-301.44,356.9 -298.77,356.4 -295.67,356.4 C-291.09,356.4 -287.48,357.53 -284.84,359.8 C-282.2,362.07 -280.68,365.08 -280.29,368.84 L-290.63,368.84 C-290.8,367.57 -291.36,366.57 -292.3,365.82 C-293.24,365.08 -294.47,364.71 -296,364.71 C-297.31,364.71 -298.31,364.96 -299.01,365.46 C-299.71,365.97 -300.06,366.65 -300.06,367.53 C-300.06,368.57 -299.5,369.36 -298.39,369.88 C-297.27,370.41 -295.54,370.93 -293.18,371.45 C-290.48,372.15 -288.27,372.84 -286.57,373.52 C-284.87,374.19 -283.38,375.28 -282.09,376.79 C-280.8,378.29 -280.14,380.31 -280.09,382.84 C-280.09,384.98 -280.69,386.89 -281.89,388.57 C-283.09,390.25 -284.82,391.57 -287.06,392.53 C-289.31,393.49 -291.92,393.97 -294.88,393.97 C-298.07,393.97 -300.91,393.43 -303.39,392.33 C-305.88,391.24 -307.85,389.75 -309.29,387.85 C-310.73,385.95 -311.53,383.83 -311.71,381.47 Z"/>
    <path id="l2-2" data-line="2" data-ch="p" fill="#ffd166" d="M-249.98,356.4 C-246.97,356.4 -244.24,357.16 -241.8,358.69 C-239.36,360.22 -237.42,362.4 -236.01,365.24 C-234.59,368.07 -233.88,371.37 -233.88,375.12 C-233.88,378.87 -234.59,382.18 -236.01,385.04 C-237.42,387.89 -239.36,390.1 -241.8,391.65 C-244.24,393.2 -246.97,393.97 -249.98,393.97 C-252.51,393.97 -254.75,393.45 -256.69,392.4 C-258.63,391.35 -260.15,390 -261.24,388.34 L-261.24,410.86 L-272.43,410.86 L-272.43,356.92 L-261.24,356.92 L-261.24,362.09 C-260.15,360.39 -258.64,359.02 -256.72,357.97 C-254.8,356.92 -252.56,356.4 -249.98,356.4 Z M-253.32,366.15 C-255.55,366.15 -257.43,366.96 -258.98,368.57 C-260.53,370.19 -261.31,372.39 -261.31,375.18 C-261.31,377.98 -260.53,380.18 -258.98,381.8 C-257.43,383.41 -255.55,384.22 -253.32,384.22 C-251.09,384.22 -249.2,383.4 -247.62,381.76 C-246.05,380.13 -245.27,377.91 -245.27,375.12 C-245.27,372.33 -246.04,370.13 -247.59,368.54 C-249.14,366.95 -251.05,366.15 -253.32,366.15 Z"/>
    <path id="l2-3" data-line="2" data-ch="e" fill="#ffd166" d="M-192.97,377.87 L-218.3,377.87 C-218.13,380.14 -217.39,381.87 -216.11,383.07 C-214.82,384.27 -213.24,384.87 -211.36,384.87 C-208.57,384.87 -206.63,383.69 -205.54,381.34 L-193.62,381.34 C-194.23,383.74 -195.34,385.9 -196.93,387.82 C-198.52,389.74 -200.52,391.24 -202.92,392.33 C-205.32,393.43 -208,393.97 -210.97,393.97 C-214.55,393.97 -217.73,393.21 -220.53,391.68 C-223.32,390.15 -225.5,387.97 -227.07,385.13 C-228.64,382.3 -229.43,378.98 -229.43,375.18 C-229.43,371.39 -228.65,368.07 -227.1,365.24 C-225.55,362.4 -223.38,360.22 -220.59,358.69 C-217.8,357.16 -214.59,356.4 -210.97,356.4 C-207.43,356.4 -204.29,357.14 -201.54,358.62 C-198.79,360.11 -196.64,362.22 -195.1,364.97 C-193.55,367.72 -192.77,370.93 -192.77,374.6 C-192.77,375.64 -192.84,376.73 -192.97,377.87 Z M-204.23,371.65 C-204.23,369.73 -204.88,368.2 -206.19,367.07 C-207.5,365.93 -209.14,365.37 -211.1,365.37 C-212.98,365.37 -214.56,365.91 -215.85,367 C-217.13,368.09 -217.93,369.64 -218.23,371.65 Z"/>
    <path id="l2-4" data-line="2" data-ch="r" fill="#ffd166" d="M-163.45,356.53 L-163.45,368.38 L-166.52,368.38 C-169.32,368.38 -171.41,368.98 -172.81,370.18 C-174.2,371.38 -174.9,373.48 -174.9,376.49 L-174.9,393.45 L-186.1,393.45 L-186.1,356.92 L-174.9,356.92 L-174.9,363.01 C-173.59,361 -171.96,359.42 -169.99,358.26 C-168.03,357.11 -165.85,356.53 -163.45,356.53 Z"/>
    <path id="l2-5" data-line="2" data-ch="o" fill="#ffd166" d="M-159.52,375.18 C-159.52,371.43 -158.69,368.13 -157.03,365.27 C-155.37,362.41 -153.1,360.22 -150.22,358.69 C-147.34,357.16 -144.12,356.4 -140.54,356.4 C-136.96,356.4 -133.73,357.16 -130.85,358.69 C-127.97,360.22 -125.7,362.41 -124.04,365.27 C-122.38,368.13 -121.55,371.43 -121.55,375.18 C-121.55,378.94 -122.39,382.24 -124.07,385.1 C-125.75,387.96 -128.05,390.15 -130.95,391.68 C-133.85,393.21 -137.09,393.97 -140.67,393.97 C-144.25,393.97 -147.46,393.21 -150.32,391.68 C-153.18,390.15 -155.43,387.97 -157.06,385.13 C-158.7,382.3 -159.52,378.98 -159.52,375.18 Z M-132.94,375.18 C-132.94,372.26 -133.67,370.01 -135.14,368.44 C-136.6,366.87 -138.4,366.09 -140.54,366.09 C-142.72,366.09 -144.53,366.86 -145.97,368.41 C-147.41,369.96 -148.13,372.22 -148.13,375.18 C-148.13,378.11 -147.42,380.36 -146,381.93 C-144.58,383.5 -142.81,384.28 -140.67,384.28 C-138.53,384.28 -136.71,383.5 -135.2,381.93 C-133.7,380.36 -132.94,378.11 -132.94,375.18 Z"/>
    <path id="l2-6" data-line="2" data-ch="q" fill="#ffd166" d="M-85.68,356.53 C-83.37,356.53 -81.3,356.93 -79.47,357.74 C-77.63,358.55 -76.15,359.67 -75.01,361.11 L-75.01,356.92 L-63.82,356.92 L-63.82,410.86 L-75.01,410.86 L-75.01,388.87 C-76.28,390.39 -77.82,391.61 -79.63,392.53 C-81.44,393.45 -83.5,393.91 -85.81,393.91 C-88.78,393.91 -91.53,393.12 -94.06,391.55 C-96.59,389.98 -98.61,387.77 -100.12,384.94 C-101.62,382.1 -102.38,378.87 -102.38,375.25 C-102.38,371.63 -101.62,368.4 -100.12,365.56 C-98.61,362.73 -96.58,360.51 -94.03,358.92 C-91.48,357.33 -88.69,356.53 -85.68,356.53 Z M-83,366.22 C-84.31,366.22 -85.57,366.56 -86.8,367.23 C-88.02,367.91 -89.02,368.92 -89.81,370.28 C-90.59,371.63 -90.99,373.29 -90.99,375.25 C-90.99,377.21 -90.59,378.86 -89.81,380.19 C-89.02,381.52 -88.02,382.53 -86.8,383.2 C-85.57,383.88 -84.31,384.22 -83,384.22 C-81.69,384.22 -80.41,383.88 -79.17,383.2 C-77.93,382.53 -76.92,381.51 -76.16,380.16 C-75.4,378.81 -75.01,377.15 -75.01,375.18 C-75.01,373.22 -75.4,371.57 -76.16,370.24 C-76.92,368.91 -77.92,367.91 -79.14,367.23 C-80.36,366.56 -81.65,366.22 -83,366.22 Z"/>
    <path id="l2-7" data-line="2" data-ch="u" fill="#ffd166" d="M-18.85,356.92 L-18.85,393.45 L-30.04,393.45 L-30.04,388.47 C-31.18,390.09 -32.72,391.39 -34.66,392.37 C-36.6,393.35 -38.75,393.84 -41.11,393.84 C-43.9,393.84 -46.37,393.22 -48.5,391.97 C-50.64,390.73 -52.3,388.93 -53.48,386.57 C-54.66,384.22 -55.25,381.45 -55.25,378.26 L-55.25,356.92 L-44.12,356.92 L-44.12,376.76 C-44.12,379.2 -43.49,381.1 -42.22,382.45 C-40.95,383.8 -39.25,384.48 -37.11,384.48 C-34.93,384.48 -33.21,383.8 -31.94,382.45 C-30.68,381.1 -30.04,379.2 -30.04,376.76 L-30.04,356.92 Z"/>
    <path id="l2-8" data-line="2" data-ch="e" fill="#ffd166" d="M24.22,377.87 L-1.11,377.87 C-0.94,380.14 -0.21,381.87 1.08,383.07 C2.37,384.27 3.95,384.87 5.83,384.87 C8.62,384.87 10.56,383.69 11.65,381.34 L23.56,381.34 C22.95,383.74 21.85,385.9 20.26,387.82 C18.67,389.74 16.67,391.24 14.27,392.33 C11.87,393.43 9.19,393.97 6.22,393.97 C2.64,393.97 -0.55,393.21 -3.34,391.68 C-6.13,390.15 -8.31,387.97 -9.88,385.13 C-11.46,382.3 -12.24,378.98 -12.24,375.18 C-12.24,371.39 -11.47,368.07 -9.92,365.24 C-8.37,362.4 -6.2,360.22 -3.4,358.69 C-0.61,357.16 2.6,356.4 6.22,356.4 C9.75,356.4 12.9,357.14 15.64,358.62 C18.39,360.11 20.54,362.22 22.09,364.97 C23.64,367.72 24.42,370.93 24.42,374.6 C24.42,375.64 24.35,376.73 24.22,377.87 Z M12.96,371.65 C12.96,369.73 12.31,368.2 11,367.07 C9.69,365.93 8.05,365.37 6.09,365.37 C4.21,365.37 2.63,365.91 1.34,367 C0.05,368.09 -0.74,369.64 -1.05,371.65 Z"/>
    <path id="l2-9" data-line="2" data-ch="l" fill="#ffd166" d="M56.95,345.01 L56.95,393.45 L45.75,393.45 L45.75,345.01 Z"/>
    <path id="l2-10" data-line="2" data-ch="e" fill="#ffd166" d="M100.08,377.87 L74.75,377.87 C74.93,380.14 75.66,381.87 76.95,383.07 C78.23,384.27 79.81,384.87 81.69,384.87 C84.48,384.87 86.43,383.69 87.52,381.34 L99.43,381.34 C98.82,383.74 97.72,385.9 96.12,387.82 C94.53,389.74 92.53,391.24 90.13,392.33 C87.73,393.43 85.05,393.97 82.08,393.97 C78.51,393.97 75.32,393.21 72.53,391.68 C69.73,390.15 67.55,387.97 65.98,385.13 C64.41,382.3 63.62,378.98 63.62,375.18 C63.62,371.39 64.4,368.07 65.95,365.24 C67.5,362.4 69.67,360.22 72.46,358.69 C75.25,357.16 78.46,356.4 82.08,356.4 C85.62,356.4 88.76,357.14 91.51,358.62 C94.26,360.11 96.41,362.22 97.96,364.97 C99.51,367.72 100.28,370.93 100.28,374.6 C100.28,375.64 100.22,376.73 100.08,377.87 Z M88.83,371.65 C88.83,369.73 88.17,368.2 86.86,367.07 C85.55,365.93 83.92,365.37 81.95,365.37 C80.08,365.37 78.49,365.91 77.21,367 C75.92,368.09 75.12,369.64 74.82,371.65 Z"/>
    <path id="l2-11" data-line="2" data-ch="s" fill="#ffd166" d="M104.99,381.47 L116.06,381.47 C116.19,382.73 116.78,383.76 117.82,384.55 C118.87,385.33 120.16,385.72 121.69,385.72 C123.08,385.72 124.16,385.45 124.93,384.91 C125.69,384.36 126.07,383.65 126.07,382.78 C126.07,381.73 125.53,380.96 124.43,380.45 C123.34,379.95 121.58,379.4 119.13,378.78 C116.51,378.17 114.33,377.53 112.59,376.85 C110.84,376.18 109.34,375.11 108.07,373.65 C106.8,372.18 106.17,370.21 106.17,367.72 C106.17,365.63 106.75,363.72 107.91,362 C109.06,360.27 110.76,358.91 113.01,357.9 C115.26,356.9 117.93,356.4 121.03,356.4 C125.61,356.4 129.22,357.53 131.86,359.8 C134.5,362.07 136.02,365.08 136.41,368.84 L126.07,368.84 C125.9,367.57 125.34,366.57 124.4,365.82 C123.46,365.08 122.23,364.71 120.7,364.71 C119.39,364.71 118.39,364.96 117.69,365.46 C116.99,365.97 116.64,366.65 116.64,367.53 C116.64,368.57 117.2,369.36 118.31,369.88 C119.43,370.41 121.16,370.93 123.52,371.45 C126.22,372.15 128.43,372.84 130.13,373.52 C131.83,374.19 133.33,375.28 134.61,376.79 C135.9,378.29 136.57,380.31 136.61,382.84 C136.61,384.98 136.01,386.89 134.81,388.57 C133.61,390.25 131.89,391.57 129.64,392.53 C127.39,393.49 124.78,393.97 121.82,393.97 C118.63,393.97 115.79,393.43 113.31,392.33 C110.82,391.24 108.86,389.75 107.42,387.85 C105.98,385.95 105.17,383.83 104.99,381.47 Z"/>
    <path id="l2-12" data-line="2" data-ch="g" fill="#ffd166" d="M184.07,362.09 L184.07,356.92 L195.26,356.92 L195.26,393.38 C195.26,396.74 194.59,399.79 193.26,402.51 C191.93,405.24 189.9,407.41 187.18,409.03 C184.45,410.64 181.05,411.45 177,411.45 C171.59,411.45 167.2,410.17 163.84,407.62 C160.48,405.07 158.56,401.61 158.08,397.24 L169.14,397.24 C169.49,398.64 170.32,399.74 171.63,400.55 C172.94,401.36 174.55,401.76 176.47,401.76 C178.79,401.76 180.63,401.09 182,399.76 C183.38,398.43 184.07,396.31 184.07,393.38 L184.07,388.21 C182.97,389.91 181.47,391.3 179.55,392.37 C177.63,393.44 175.38,393.97 172.81,393.97 C169.8,393.97 167.07,393.2 164.63,391.65 C162.18,390.1 160.25,387.89 158.83,385.04 C157.41,382.18 156.7,378.87 156.7,375.12 C156.7,371.37 157.41,368.07 158.83,365.24 C160.25,362.4 162.18,360.22 164.63,358.69 C167.07,357.16 169.8,356.4 172.81,356.4 C175.38,356.4 177.64,356.92 179.58,357.97 C181.52,359.02 183.02,360.39 184.07,362.09 Z M176.08,366.15 C173.85,366.15 171.97,366.95 170.42,368.54 C168.87,370.13 168.09,372.33 168.09,375.12 C168.09,377.91 168.87,380.13 170.42,381.76 C171.97,383.4 173.85,384.22 176.08,384.22 C178.31,384.22 180.19,383.41 181.74,381.8 C183.29,380.18 184.07,377.98 184.07,375.18 C184.07,372.39 183.29,370.19 181.74,368.57 C180.19,366.96 178.31,366.15 176.08,366.15 Z"/>
    <path id="l2-13" data-line="2" data-ch="u" fill="#ffd166" d="M240.23,356.92 L240.23,393.45 L229.03,393.45 L229.03,388.47 C227.9,390.09 226.36,391.39 224.42,392.37 C222.48,393.35 220.33,393.84 217.97,393.84 C215.18,393.84 212.71,393.22 210.58,391.97 C208.44,390.73 206.78,388.93 205.6,386.57 C204.42,384.22 203.83,381.45 203.83,378.26 L203.83,356.92 L214.96,356.92 L214.96,376.76 C214.96,379.2 215.59,381.1 216.86,382.45 C218.13,383.8 219.83,384.48 221.97,384.48 C224.15,384.48 225.87,383.8 227.14,382.45 C228.4,381.1 229.03,379.2 229.03,376.76 L229.03,356.92 Z"/>
    <path id="l2-14" data-line="2" data-ch="s" fill="#ffd166" d="M247.1,381.47 L258.16,381.47 C258.29,382.73 258.88,383.76 259.93,384.55 C260.98,385.33 262.27,385.72 263.79,385.72 C265.19,385.72 266.27,385.45 267.03,384.91 C267.8,384.36 268.18,383.65 268.18,382.78 C268.18,381.73 267.63,380.96 266.54,380.45 C265.45,379.95 263.68,379.4 261.24,378.78 C258.62,378.17 256.44,377.53 254.69,376.85 C252.95,376.18 251.44,375.11 250.18,373.65 C248.91,372.18 248.28,370.21 248.28,367.72 C248.28,365.63 248.86,363.72 250.01,362 C251.17,360.27 252.87,358.91 255.12,357.9 C257.37,356.9 260.04,356.4 263.14,356.4 C267.72,356.4 271.33,357.53 273.97,359.8 C276.61,362.07 278.13,365.08 278.52,368.84 L268.18,368.84 C268,367.57 267.45,366.57 266.51,365.82 C265.57,365.08 264.34,364.71 262.81,364.71 C261.5,364.71 260.5,364.96 259.8,365.46 C259.1,365.97 258.75,366.65 258.75,367.53 C258.75,368.57 259.31,369.36 260.42,369.88 C261.53,370.41 263.27,370.93 265.63,371.45 C268.33,372.15 270.53,372.84 272.24,373.52 C273.94,374.19 275.43,375.28 276.72,376.79 C278.01,378.29 278.67,380.31 278.72,382.84 C278.72,384.98 278.12,386.89 276.92,388.57 C275.72,390.25 273.99,391.57 271.75,392.53 C269.5,393.49 266.89,393.97 263.92,393.97 C260.74,393.97 257.9,393.43 255.41,392.33 C252.93,391.24 250.96,389.75 249.52,387.85 C248.08,385.95 247.28,383.83 247.1,381.47 Z"/>
    <path id="l2-15" data-line="2" data-ch="t" fill="#ffd166" d="M306.73,383.96 L306.73,393.45 L301.04,393.45 C296.98,393.45 293.82,392.45 291.55,390.47 C289.28,388.48 288.14,385.24 288.14,380.75 L288.14,366.22 L283.69,366.22 L283.69,356.92 L288.14,356.92 L288.14,348.02 L299.34,348.02 L299.34,356.92 L306.67,356.92 L306.67,366.22 L299.34,366.22 L299.34,380.88 C299.34,381.97 299.6,382.76 300.12,383.24 C300.65,383.72 301.52,383.96 302.74,383.96 Z"/>
    <path id="l2-16" data-line="2" data-ch="e" fill="#ffd166" d="M347.97,377.87 L322.64,377.87 C322.81,380.14 323.54,381.87 324.83,383.07 C326.12,384.27 327.7,384.87 329.58,384.87 C332.37,384.87 334.31,383.69 335.4,381.34 L347.32,381.34 C346.71,383.74 345.6,385.9 344.01,387.82 C342.42,389.74 340.42,391.24 338.02,392.33 C335.62,393.43 332.94,393.97 329.97,393.97 C326.39,393.97 323.21,393.21 320.41,391.68 C317.62,390.15 315.44,387.97 313.87,385.13 C312.3,382.3 311.51,378.98 311.51,375.18 C311.51,371.39 312.29,368.07 313.83,365.24 C315.38,362.4 317.56,360.22 320.35,358.69 C323.14,357.16 326.35,356.4 329.97,356.4 C333.5,356.4 336.65,357.14 339.4,358.62 C342.15,360.11 344.29,362.22 345.84,364.97 C347.39,367.72 348.17,370.93 348.17,374.6 C348.17,375.64 348.1,376.73 347.97,377.87 Z M336.71,371.65 C336.71,369.73 336.06,368.2 334.75,367.07 C333.44,365.93 331.8,365.37 329.84,365.37 C327.96,365.37 326.38,365.91 325.09,367 C323.81,368.09 323.01,369.64 322.7,371.65 Z"/>
  </g>
</svg>`;function Iv(n,e){var A;let a="#e63946",l="#ffd166",c="#dfe8f6",h="#c8d6ec",d="#2fbf71",u="#0c1b33",f=document.createElement("div");f.innerHTML=Xm;let g=f.firstElementChild,y=U=>parseFloat(g.getAttribute("data-"+U)),m={pivot1:y("pivot1"),base1:y("base1"),pivot2:y("pivot2"),base2:y("base2"),dotx:y("dotx"),doty:y("doty"),w1:y("w1")},p=new qo().parse(g.outerHTML);g.remove();function b(U){let te=j=>j.curves.forEach(J=>{J.v0&&(J.v0.y=-J.v0.y),J.v1&&(J.v1.y=-J.v1.y),J.v2&&(J.v2.y=-J.v2.y),J.v3&&(J.v3.y=-J.v3.y)});te(U),U.holes.forEach(te)}let v=[],M=[],I=new On;for(let U of p.paths){let te=(A=U.userData)==null?void 0:A.node;if(!te||!te.id)continue;let j=te.getAttribute("data-line"),J=qo.createShapes(U);J.forEach(b);let Ee=new _r(J,{depth:.2565,bevelEnabled:!1}),Pe=new sn().setFromBufferAttribute(Ee.attributes.position).getCenter(new q),Oe=-(j==="1"?m.pivot1:m.pivot2)*.01118,Ve=-(j==="1"?m.base1:m.base2)*.01118;Ee.translate(-Pe.x,-Oe,-Pe.z);let et=new bt(Ee,new fi({color:new qe(U.userData.style.fill||"#fff"),roughness:.4,metalness:.1}));et.position.set(Pe.x,Oe,Pe.z),et.userData.halfHeight=Oe-Ve,I.add(et),(j==="1"?v:M).push(et)}let T=1/(23.01*.01118);I.scale.setScalar(T);let L={x:m.dotx*.01118*T,y:-.31+(1.9+(m.pivot1-m.doty)*.01118)*T},x=v.reduce((U,te)=>Math.abs(U.position.x)<Math.abs(te.position.x)?U:te),R=new On;R.add(I),R.position.y=-5;let k="#6f94c4",N="#1b2c57",z=new oo;z.background=new qe(u);let se=new fn({uniforms:{topColor:{value:new qe(N)},bottomColor:{value:new qe(k)},offset:{value:32},exponent:{value:.6}},side:Jt,fog:!1,vertexShader:`
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;
    varying vec3 vWorldPosition;
    void main() {
      float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
      gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0);
      #include <colorspace_fragment>
    }
  `}),ie=new bt(new rs(600,32,15),se);z.add(ie),z.add(R);let O=31,W=31,V=1,X=new On,Q=new fo(new kn(V,V,V),new fi({color:new qe("#ffffff"),roughness:.7,metalness:.05}),O*W),he=new Ft,ye=new qe,Ce=new qe(a),We=new qe(d),ee=new qe(c),F=new qe(h);for(let U=0;U<W;U++)for(let te=0;te<O;te++){let j=U*O+te;he.position.set(te-(O-1)/2,0,U-(W-1)/2),he.updateMatrix(),Q.setMatrixAt(j,he.matrix);let J=Math.abs(Math.sin(j*12.9898)*43758.5453)%1;ye.copy(J<.08?Ce:J<.16?We:J<.6?ee:F),Q.setColorAt(j,ye)}Q.instanceColor.needsUpdate=!0,X.add(Q);let S=Td(Q),w=new fi({color:new qe(h),roughness:.7,metalness:.05}),G=O*V/2,ne=W*V/2,$=5,le=[],ue=(U,te,j,J)=>{let Ee=new bt(new kn(U,V,te),w);Ee.position.set(j,0,J),X.add(Ee),le.push(Ee)};ue($,2*ne,G+$/2,0),ue($,2*ne,-G-$/2,0),ue(2*G+2*$,$,0,ne+$/2),ue(2*G+2*$,$,0,-ne-$/2),z.add(X);let ae=new bt(new kn(V,V,V),new fi({color:a,roughness:.4,metalness:.1})),B=new fi({color:l,roughness:.35,metalness:.25}),Z=new bt(new kn(.22,1.03,1.03),B),K=new bt(new kn(1.03,1.03,.22),B),re=new bt(new rs(.2,16,12),B),D=new bt(new rs(.2,16,12),B),P=new bt(new rs(.12,12,10),B);re.position.set(-.17,.56,0),re.scale.set(1.25,.65,.8),re.rotation.z=.35,D.position.set(.17,.56,0),D.scale.set(1.25,.65,.8),D.rotation.z=-.35,P.position.set(0,.54,0),ae.add(Z,K,re,D,P),z.add(ae);function C(U,te,j){let J=new Kn;for(let Ee=0;Ee<j*2;Ee++){let De=Math.PI/2+Ee*Math.PI/j,Pe=Ee%2?te:U,Oe=Math.cos(De)*Pe,Ve=Math.sin(De)*Pe;Ee===0?J.moveTo(Oe,Ve):J.lineTo(Oe,Ve)}return J.closePath(),J}let ve=new _r(C(1.6,.7,5),{depth:.5,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:2});ve.center();let Te=new fi({color:l,emissive:new qe("#ffb703"),emissiveIntensity:.5,roughness:.35,metalness:.3}),Me=new bt(ve,Te);Me.position.set(0,12.6,0),z.add(Me);let Le=650,E=new Float32Array(Le*3),_=new Float32Array(Le),Y=new Float32Array(Le);for(let U=0;U<Le;U++)E[U*3]=(Math.random()-.5)*90,E[U*3+1]=Math.random()*56-12,E[U*3+2]=(Math.random()-.5)*70,_[U]=1.4+Math.random()*2.2,Y[U]=Math.random()*Math.PI*2;let oe=new kt;oe.setAttribute("position",new Pt(E,3));let me=document.createElement("canvas");me.width=me.height=64;let ge=me.getContext("2d"),Se=ge.createRadialGradient(32,32,0,32,32,32);Se.addColorStop(0,"rgba(255,255,255,1)"),Se.addColorStop(.5,"rgba(255,255,255,0.85)"),Se.addColorStop(1,"rgba(255,255,255,0)"),ge.fillStyle=Se,ge.fillRect(0,0,64,64);let ce=new _o(me);ce.colorSpace=St;let fe=new pr({map:ce,size:.4,transparent:!0,opacity:.95,depthWrite:!1}),Ie=new mo(oe,fe);Ie.frustumCulled=!1,z.add(Ie);let Be=.22;function Re(U,te){for(let j=0;j<Le;j++){let J=j*3;E[J+1]-=_[j]*te,E[J]+=Math.sin(U*.8+Y[j])*.35*te,E[J+1]<-12&&(E[J+1]=44+Math.random()*6)}oe.attributes.position.needsUpdate=!0}let Ae=new Io(16777215,.6);z.add(Ae);let Ye=new yr(16777215,1.6);Ye.position.set(100,200,300),z.add(Ye);let je=new yr(11188479,.6);je.position.set(-200,-50,150),z.add(je);let ze=new nn(35,innerWidth/innerHeight,.01,100),H=new On;H.add(ze),z.add(H);let be=new Ic({antialias:!0});be.setSize(innerWidth,innerHeight),be.setPixelRatio(Math.min(devicePixelRatio||1,2)),n.appendChild(be.domElement),be.domElement.style.display="block",be.domElement.style.opacity="0",addEventListener("resize",()=>{let U=innerWidth/innerHeight;ze.aspect=U,ze.updateProjectionMatrix(),be.setSize(innerWidth,innerHeight)});let pe=U=>`0 ${-U.userData.halfHeight} 0`;v.forEach(U=>Ct.set(U,{skewX:-8,transformOrigin:pe(U)}));let Ne=1.9-v[0].position.y;M.forEach(U=>Ct.set(U,{y:U.position.y+Ne,z:6.5,rotateX:20,transformOrigin:pe(U)})),Ct.set(Me,{scale:0}),Ct.set(ze,{x:0,y:5.64,z:20.66,rotateX:-14.73,fov:60,zoom:1,near:1,far:2e3});let we=Math.PI/180,_e=ze.fov,Ue=ze.position.z*Math.tan(_e*.5*we),Je={value:1},He=m.w1*.01118*T/2+5,Qe=performance.now(),Dn=cd({priority:0,onUpdate:()=>{let U=performance.now(),te=Math.min(.05,(U-Qe)/1e3);Qe=U;let j=Math.min(1,Math.max(0,(Je.value-1)/.5)),J=He/ze.aspect,De=1+(Math.max(1,J/(Ue*1.5))-1)*j;ze.position.z=Ue*Je.value*De/Math.tan(ze.fov*.5*we),fe.size=Be/Math.tan(ze.fov*.5*we),Re(U/1e3,te),Me.rotation.y=Math.sin(U*.0016)*.45,Te.emissiveIntensity=.5+.25*Math.sin(U*.004),be.render(z,ze)}});Ct.set(se,{topColor:"#243a6e",bottomColor:"#8fb2dc",offset:-38,exponent:1.15}),Ct.set(Ae,{intensity:.6}),Ct.set(Ye,{intensity:1.6,color:"#fff6e8",x:0,y:30,z:0}),Ct.set(je,{intensity:.6,color:"#aab8ff",x:-200,y:-50,z:150}),Ct.set(S,{x:xt(1,{grid:!0,from:"center",axis:"x"}),z:xt(1,{grid:!0,from:"center",axis:"z"}),y:0}),Ct.set(ae,{x:0,y:0,z:0,transformOriginY:-.5}),Ct.set(I,{x:0,y:-.31,z:-.5});let hn=S[Math.floor(W/2)*O+Math.floor(O/2)],Xs=10,ma=U=>Math.hypot(U%O-Math.floor(O/2),Math.floor(U/O)-Math.floor(W/2)),Vr=U=>S.filter((te,j)=>ma(j)<=U),ga=U=>S.filter((te,j)=>ma(j)>U),Ei=Ct.createSeededRandom(4,800,1279),Gr=Ct.createSeededRandom(0,800,1279),_a=Ct.createSeededRandom(7,800,1279),xa=Ct.createSeededRandom(7,-1080,1080),qs=Ct.createSeededRandom(13,-1080,1080),ya=Ct.createSeededRandom(21,-1080,1080),Ys=Ct.createSeededRandom(0,500,1200),va=Ct.createSeededRandom(10,-540,540),Ma=Ct.createSeededRandom(7,-540,540),au=Ct.createSeededRandom(12,-540,540),wi=(U,te,{decay:j=1,sweep:J=0,settle:Ee=0,dir:De=1,center:Pe=0}={})=>Oe=>Pe+De*(Ee+(U-Ee)*(1-Oe)**j)*Math.sin(te*(Oe+J*Oe*Oe)*2*Math.PI),Sa=(U,te,j,J={})=>{let Ee=wi(U,te,J);return De=>De<j?0:Ee((De-j)/(1-j))},Yn=md({id:"Bienvenidos navidad",autoplay:!1}).add(be.domElement,{id:"fade in",opacity:[0,1],duration:1300,ease:"inOut(2)"},0).add(ze,{id:"camera follow",rotateX:[{to:38,duration:700,ease:"inOut(2)"},{to:41,duration:500,delay:0,ease:"inOutSine"},{to:40.5,duration:200,delay:0,ease:"inOutSine"},{to:36,duration:180,delay:0,ease:"in(2)"},{to:24,duration:80,delay:0,ease:"in(2)"},{to:-10,duration:40,delay:0,ease:"in(1.5)"},{to:-16.5,duration:90,delay:20,ease:"out(2)"},{to:-14.73,duration:190,delay:0,ease:"inOutSine"}],y:[{to:6.3,duration:900,ease:"inOut(2)"},{to:6.4,duration:500,delay:0,ease:"inOutSine"},{to:6.15,duration:180,delay:0,ease:"in(2)"},{to:5.04,duration:120,delay:0,ease:"in(2)"}]},300).add(ae,{id:"cube enter",y:[{from:24,to:1,duration:300,delay:1700,ease:"in(5.0825)"},{from:0,to:.138,duration:60,delay:0,ease:pt(0,1.1575,.5712,.9605)},{to:-.75,duration:1040,ease:pt(0,1.1575,.5712,.9605)},{from:-1.75,to:-2.5,duration:146,delay:0,ease:"out(9.8523)"}],scaleX:[{from:0,to:1,duration:2e3,delay:0},{from:1.3,to:1,duration:100,ease:"out(2)"}],scaleY:[{from:5,to:2,duration:2e3,delay:0},{to:1.25,duration:200,delay:0,ease:pt(.1,.7,.5763,.7728)},{to:1,duration:900,delay:0,ease:pt(.1,.7,.5763,.7728)}],scaleZ:[{from:0,to:1,duration:2e3},{from:1.3,to:1,duration:100,ease:"out(2)"}],ease:"in(2.4146)",skewX:{from:0,to:1,duration:1143,delay:2e3,ease:"linear",modifier:wi(8,18,{decay:2})},skewZ:{from:0,to:1,duration:1143,delay:2e3,ease:"linear",modifier:wi(8,18,{decay:2})}},0).set(hn,{scale:0},2e3).add(S,{id:"floor crash",y:[{from:0,to:xt([.15,0],{from:"center",ease:ni("0","0.185 70.69%","0.4644 84.63%","0.7852 95.62%","1"),grid:!0}),duration:50,delay:xt([0,451],{from:"center",ease:"in(2.5507)",grid:!0}),ease:pt(.5621,.9568,.5,1)},{to:xt([-1.5,0],{from:"center",ease:ni("0","0.2812 12.72%","0.5478 20.84%","1 41.29%","1"),grid:!0,jitter:[.102,0],seed:0}),duration:1050,delay:0,ease:pt(0,.8,0,1.0128)},{to:xt([-3,0],{from:"center",ease:ni("0","0 14.17%","0.5317 25.26%","0.8904 47.35%","1 47.8%","1"),grid:!0,jitter:[.3,0],seed:0}),duration:xt([0,656],{from:"center",ease:ni("0","0.0368 14.54%","0.3042 62.23%","1 62.24%","1"),grid:!0,jitter:[50,0],seed:0}),delay:0,ease:pt(0,1.0807,.3512,1.2537)}],rotateX:{to:xt([0,0],{from:"center",ease:ni("0","0 13.93%","0.2419 40.77%","1 55.03%","1"),grid:!0,jitter:[20,0],seed:6}),duration:1200,delay:0},rotateY:{to:xt([0,0],{from:"center",ease:ni("0","0 13.93%","0.2419 40.77%","1 55.03%","1"),grid:!0,jitter:[20,0],seed:12}),duration:1260,delay:0},rotateZ:{to:xt([0,0],{from:"center",ease:ni("0","0 13.93%","0.2419 40.77%","1 55.03%","1"),grid:!0,jitter:[20,0],seed:3}),duration:1200,delay:50}},2e3).add(ze,{id:"camera shake",y:{from:0,to:1,duration:1412,ease:"linear",modifier:U=>wi(.12,15,{decay:2,center:5.64})(U)+Sa(.97,2,.78,{decay:1.6})(U)},rotateZ:{from:0,to:1,duration:1437,ease:"linear",modifier:U=>wi(.42,10,{decay:1.8})(U)+Sa(.42,2,.79,{decay:1.4})(U)},ease:"inOutSine"},2e3).add(ae,{id:"cube recover",skewX:[{to:-9,duration:58,ease:pt(.3815,.0684,.5,1)},{to:7,duration:63,delay:0,ease:pt(.3815,.0684,.5,1)},{to:-5,duration:71,delay:0,ease:pt(.3815,.0684,.5,1)},{to:3.5,duration:77,delay:0,ease:pt(.3815,.0684,.5,1)},{to:-2,duration:82,delay:0,ease:pt(.3815,.0684,.5,1)},{to:1,duration:90,delay:0,ease:pt(.3815,.0684,.5,1)},{to:-.5,duration:96,delay:0,ease:pt(.3815,.0684,.5,1)},{to:0,duration:83,delay:0,ease:pt(.3815,.0684,.5,1)}],scaleY:[{to:.8,duration:77,ease:"out(3)"},{to:1.12,duration:102,delay:0,ease:"inOutSine"},{to:.94,duration:109,delay:0,ease:"inOutSine"},{to:1.05,duration:115,delay:0,ease:"inOutSine"},{to:.98,duration:109,delay:0,ease:"inOutSine"},{to:.97,duration:108,delay:0,ease:"inOutSine"}],scaleX:[{to:1.15,duration:77,ease:"out(3)"},{to:.93,duration:102,delay:0,ease:"inOutSine"},{to:1.04,duration:109,delay:0,ease:"inOutSine"},{to:.97,duration:115,delay:0,ease:"inOutSine"},{to:1.01,duration:109,delay:0,ease:"inOutSine"},{to:1.02,duration:108,delay:0,ease:"inOutSine"}],scaleZ:[{to:1.15,duration:77,ease:"out(3)"},{to:.93,duration:102,delay:0,ease:"inOutSine"},{to:1.04,duration:109,delay:0,ease:"inOutSine"},{to:.97,duration:115,delay:0,ease:"inOutSine"},{to:1.01,duration:109,delay:0,ease:"inOutSine"},{to:1.02,duration:108,delay:0,ease:"inOutSine"}],y:[{to:-2.56,duration:77,ease:"out(3)"},{to:-2.47,duration:128,delay:0,ease:"inOutSine"},{to:-2.52,duration:140,delay:0,ease:"inOutSine"},{to:-2.53,duration:275,delay:0,ease:"inOutSine"}]},3230).add(ae,{id:"cube expand",scaleY:{to:4,duration:4150,delay:800,ease:pt(.2423,-.0053,.3107,.5533)},scaleX:{to:.8,duration:4150,delay:800,ease:pt(.2423,-.0053,.3107,.5533)},scaleZ:{to:.8,duration:4150,delay:800,ease:pt(.2423,-.0053,.3107,.5533)},y:{to:.75,duration:4150,delay:800,ease:pt(.2423,-.0053,.3107,.5533)},skewX:{from:0,to:1,duration:4150,delay:800,ease:"linear",modifier:wi(9.5,21,{decay:1.5,sweep:1.2,settle:3.1})},skewZ:{from:0,to:1,duration:4150,delay:800,ease:"linear",modifier:wi(4.3,18,{decay:.7,sweep:1.4,dir:-1})}},3050).add(Vr(8),{id:"floor expand",y:[{to:xt([-3.5,-.82],{from:"center",ease:ni("0","0.0878 0.01%","0.3904 50.14%","0.7766 68.95%","1"),grid:!0,jitter:[.3,0],seed:0}),duration:260,delay:0,ease:"out(3)"},{to:xt([1.4,-.72],{from:"center",ease:ni("0","0 28.61%","0.27 28.62%","0.7766 68.95%","1"),grid:!0,jitter:[.3,0],seed:0}),duration:4100,delay:440,ease:pt(.2423,-.0053,.367,.5896)}]},3200).label("POP",8e3).label("slowmo start","POP-=0").label("slowmo end","POP+=500").add(ze,{id:"camera zoom in",zoom:{to:2,duration:5500,delay:0,ease:pt(.6985,.1061,.5527,.7364)}},2500).add(H,{id:"camera orbit",rotateY:[{from:-270,to:-180,duration:3600,delay:0},{to:0,duration:700,delay:1e3,ease:pt(.375,-.0148,0,1.0101)}],rotateX:{to:0,duration:1900,delay:2700},y:[{to:0,duration:1900,delay:2700},{to:0,duration:300,delay:0,ease:"out(2)"}],ease:"inOut(2)"},3400).add(Vr(Xs),{id:"floor explode",x:{to:xt([1,40],{from:"center",grid:!0,axis:"x",jitter:5,seed:0}),duration:()=>Ei(),delay:xt([0,137],{from:"center",grid:!0}),ease:"out(5.3605)"},z:{to:xt([1,40],{from:"center",grid:!0,axis:"z"}),duration:()=>Gr(),delay:xt([0,137],{from:"center",grid:!0,jitter:5,seed:0}),ease:"out(5.3605)"},y:{to:xt([40,1],{from:"center",ease:pt(.3326,.0289,.9886,.4057),grid:!0,jitter:5,seed:0}),duration:()=>_a(),delay:xt([0,137],{from:"center",grid:!0}),ease:"out(5.3605)"},rotateX:{to:()=>xa(),duration:815,delay:xt([0,314],{from:"center",grid:!0}),ease:"out(2)"},rotateY:{to:()=>qs(),duration:815,delay:xt([0,314],{from:"center",grid:!0}),ease:"out(2)"},rotateZ:{to:()=>ya(),duration:815,delay:xt([0,314],{from:"center",grid:!0}),ease:"out(2)"},scale:{to:0,duration:()=>Ys(),delay:xt([0,314],{from:"center",grid:!0}),ease:"out(2.8731)"},duration:113,delay:xt([0,210],{from:"center",grid:!0,seed:0}),ease:"linear"},"POP-=15").add([...ga(Xs),...le],{id:"floor drop",y:{to:-50,duration:604,delay:146,ease:pt(.8109,.0308,.9152,.5479)}},"POP-=150").add(v,{id:"letters pop",y:[{from:-.39,to:3.23,duration:240,ease:pt(.225,1,.915,.98)},{to:1.9,duration:120,delay:20,ease:"inQuad"},{to:1.9,duration:120,delay:0,ease:"outQuad"}],scaleX:[{to:[.25,.85],duration:240,ease:"outQuad"},{to:1.08,duration:120,delay:85,ease:"inOutSine"},{to:1,duration:260,delay:25,ease:"outQuad"}],scaleY:[{to:[.4,1.5],duration:120,ease:"outSine"},{to:.6,duration:120,delay:180,ease:"inOutSine"},{to:1.2,duration:180,delay:25,ease:"outQuad"},{to:1,duration:190,delay:15,ease:"outQuad"}],duration:400,ease:"outSine",delay:xt(60,{from:"center"})},"POP").add(ae,{id:"cube dot pop",y:[{from:.75,to:16.9,duration:240,delay:0,ease:pt(.225,1,.915,.98)},{to:7.58,duration:180,delay:120,ease:"inQuad"},{to:11.7,duration:250,delay:0,ease:pt(.225,1,.915,.98)},{to:9.11,duration:170,delay:20,ease:"inQuad"},{to:9.5,duration:120,delay:0,ease:"outQuad"}],scaleX:{to:[.8,1],duration:260,delay:0,ease:"outQuad"},scaleY:{from:4,to:1,duration:120,delay:0,ease:"outQuad"},scaleZ:{to:[.8,1],duration:260,delay:0,ease:"outQuad"},transformOriginY:{to:0,duration:150,delay:0,ease:"out(2)"},rotateZ:[{to:-540,duration:480,delay:20,ease:pt(.7865,.9809,.8395,.9559)},{to:-720,duration:540,delay:160,ease:"outSine"}],skewX:{to:0,duration:180,delay:0,ease:"out(2)"},skewZ:{to:0,duration:180,delay:0,ease:"out(2)"},ease:"outSine"},"POP").add(R,{id:"logo punch",scale:{from:1.25,to:1,duration:600,delay:0},y:{from:-5.28,to:0,duration:600,delay:0},duration:900,ease:"outExpo"},"POP").add(x,{id:"letter squish",scaleY:[{to:.25,duration:150,delay:0,ease:"outExpo"},{to:1,duration:700,delay:0,ease:"outElastic(2.11, 0.61)"}],scaleX:[{to:1.5,duration:50,delay:0,ease:"outSine"},{to:1,duration:900,delay:0,ease:"outElastic(2.11, 0.61)"}]},"POP+=380").add(ze,{id:"camera pop",y:{to:5.8,duration:1100,ease:"out(4.9225)"},rotateX:[{to:9.1,duration:260,ease:"out(3.2713)"},{to:0,duration:700,ease:"out(3)",delay:140}],zoom:{to:1,duration:400,ease:"out(3)"}},"POP").add(v,{id:"letters skew",skewX:0,duration:1350,ease:"outElastic(1.1, .9)"},"POP+=1050").add(ae,{id:"cube sweep",x:{to:L.x,duration:1350},y:{to:L.y,duration:1350},skewX:{from:12,to:0,duration:1350},duration:1450,ease:"outElastic(1.1,1.7)"},"POP+=1050").add(M,{id:"line 2 plug",z:{from:-2,to:.12825,duration:1295},rotateX:{from:-120,to:0,duration:1295},delay:xt(45),ease:"outElastic(1.1, .9)",scale:{from:0,to:1,duration:549}},"POP+=1055").add(ze,{id:"camera flatten",fov:{to:2,duration:700,ease:"out(2)"}},"POP+=1450").add(Je,{id:"camera dezoom",value:{to:1.5,duration:1125,delay:0},duration:1150,ease:"out(2)"},"POP+=1050").add(se,{id:"sky to bg",topColor:u,bottomColor:u,duration:465,ease:"inOut(4.348)"},"POP+=1500").add(Me,{id:"star pop",scale:{from:0,to:1,duration:1e3},ease:"outElastic(1.1, .9)"},"POP+=1700").add(Ae,{id:"ambient up",intensity:[{to:3,duration:300},{to:1,duration:700,delay:1050}],duration:240,ease:"inOut(1.8042)"},"POP+=1650").add(ze,{id:"outro depth",fov:35,duration:1500,ease:"out(2)"},11e3).add([...v,...M,ae],{id:"outro burst",z:62.1,y:.5,rotateX:()=>va(),rotateY:()=>Ma(),rotateZ:()=>au(),delay:xt(30,{from:"last",ease:"in(2.3145)"}),duration:1140,ease:"in(2)"},10960).add(Me,{id:"star out",scale:{to:0,duration:500},ease:"in(2)"},10960).init(),lu=fd(Yn,{id:"Player",currentTime:[{to:()=>Yn.labels["slowmo start"],duration:()=>Yn.labels["slowmo start"],ease:pt(1,.7,1,.85)},{to:()=>Yn.labels["slowmo end"],duration:2e3,ease:pt(.0314,.3616,.8994,-.2122)},{to:()=>Yn.duration,duration:()=>Yn.duration-Yn.labels["slowmo end"]}],duration:Yn.duration,loop:!1,ease:"linear",onComplete:()=>Ta()}),ba=!1;function Ta(){if(!ba){ba=!0;try{lu.pause(),Yn.pause(),Dn.pause()}catch{}e(),setTimeout(()=>{try{be.dispose(),be.domElement.remove()}catch{}},1200)}}return{stop:Ta}}(function(){let n=document.getElementById("bienvenida");if(!n)return;let e=document.getElementById("bvSkip"),t=!1,i=null;try{window.__introTl&&window.__introTl.pause()}catch{}function s(o){if(!t){t=!0;try{i&&i.stop()}catch{}if(n.classList.add("bye"),o)try{window.__introTl&&window.__introTl.play()}catch{}setTimeout(()=>n.remove(),1e3)}}let r=window.introFinished;window.introFinished=function(){return s(!1),r&&r.apply(this,arguments)},e&&e.addEventListener("click",()=>s(!0));try{let o=document.createElement("canvas");if(!(o.getContext("webgl2")||o.getContext("webgl")))throw new Error("sin WebGL");i=Iv(n,()=>s(!0))}catch(o){console.warn("Bienvenida no disponible:",o),s(!0)}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

animejs/dist/modules/core/consts.js:
animejs/dist/modules/core/globals.js:
animejs/dist/modules/core/helpers.js:
animejs/dist/modules/core/transforms.js:
animejs/dist/modules/core/colors.js:
animejs/dist/modules/core/values.js:
animejs/dist/modules/core/render.js:
animejs/dist/modules/core/styles.js:
animejs/dist/modules/core/clock.js:
animejs/dist/modules/core/targets.js:
animejs/dist/modules/core/units.js:
  (**
   * Anime.js - core - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/adapters/registry.js:
animejs/dist/modules/adapters/three/adapter.js:
animejs/dist/modules/adapters/three/helpers.js:
animejs/dist/modules/adapters/three/resolvers.js:
animejs/dist/modules/adapters/three/uniform.js:
animejs/dist/modules/adapters/three/object3d.js:
animejs/dist/modules/adapters/three/instance.js:
animejs/dist/modules/adapters/three/index.js:
  (**
   * Anime.js - adapters - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/animation/additive.js:
animejs/dist/modules/animation/composition.js:
animejs/dist/modules/animation/animation.js:
  (**
   * Anime.js - animation - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/engine/engine.js:
  (**
   * Anime.js - engine - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timer/timer.js:
  (**
   * Anime.js - timer - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/easings/none.js:
animejs/dist/modules/easings/eases/parser.js:
animejs/dist/modules/easings/cubic-bezier/index.js:
animejs/dist/modules/easings/linear/index.js:
  (**
   * Anime.js - easings - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timeline/position.js:
animejs/dist/modules/timeline/timeline.js:
  (**
   * Anime.js - timeline - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/utils/number.js:
animejs/dist/modules/utils/target.js:
animejs/dist/modules/utils/time.js:
animejs/dist/modules/utils/chainable.js:
animejs/dist/modules/utils/random.js:
animejs/dist/modules/utils/stagger.js:
animejs/dist/modules/utils/index.js:
  (**
   * Anime.js - utils - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/waapi/composition.js:
  (**
   * Anime.js - waapi - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/index.js:
  (**
   * Anime.js - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)
*/
