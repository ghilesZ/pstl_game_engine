// This program was compiled from OCaml by js_of_ocaml 2.00
(function(U){"use strict";var
fv=104,cW="mediumspringgreen",az=123,d_="black",d$="teal",fU=254,a9=108,fF='"',E=16777215,cf="darkgreen",du="saddlebrown",cV=65599,fd="jsError",fu=119,ab=115,d9="lightgrey",ft=445,ce="mediumseagreen",dt="palegreen",ay=120,ds="deeppink",d8="limegreen",fc=144,cd="lavender",fs="rgb",d7="salmon",cb="lightpink",cc="palevioletred",cT="blue",cU="lightgoldenrodyellow",ax=117,ca="chocolate",d5="sienna",d6=128,fq=135,fr="rgba",cS="linen",bb=".png",b$="darkslateblue",d4="oldlace",x="0",fp=136,cQ="chartreuse",cR=248,fo=" is not a valid color",cP="antiquewhite",dr=126,fT="fd ",fn=121,b_="hotpink",fm=107,b9="lightslategrey",fl=131,cO="lightyellow",fS=141,b8="floralwhite",cN="gainsboro",fD=145,fE=112,dq="x",d3="darkslategrey",cK="blanchedalmond",cL="cornsilk",cM="ivory",d2="darkviolet",b7="beige",a7="g",cJ="skyblue",dn="cyan",dp="firebrick",b6="lightblue",a6=1073741823,cI="fuchsia",K=105,cH="mediumturquoise",dm="darkturquoise",d1="khaki",S=110,fR=-88,b4="springgreen",b5="whitesmoke",dk=200,dl="aquamarine",a_="'",fb=132,a5="int_of_string",cG="darkgoldenrod",d0="lightslategray",dj="purple",cF="mediumvioletred",aC="e",b3="gold",dZ="rosybrown",fk=139,aa="-",fB=-1200,fC="audio",b2="blueviolet",ag=-48,dY="maroon",aw=600,dX="lemonchiffon",fa=240,cE=" : file already exists",fQ=109,b1="midnightblue",di="brown",dV="aqua",dW="slategrey",dh="moccasin",ba=101,dU="lightgreen",b0="slategray",cD="tomato",dg="white",fP="index out of bounds",dR="darkorange",dS="indigo",dT="olive",dQ="peachpuff",au=125,fj=142,cC="navajowhite",de="papayawhip",df="slateblue",dP="lavenderblush",h=255,dd="dimgray",fO=140,bZ="greenyellow",cB="turquoise",af=250,dc=1200,dO="darkolivegreen",bY="dodgerblue",bW="darkmagenta",bX="lightcyan",cA="goldenrod",bU="bisque",bV="paleturquoise",fA=246,fN=1073741824,av=102,db="palegoldenrod",dN="mediumslateblue",fz="Unix.Unix_error",dM="darkblue",fM=113,da="darksalmon",dL="darkkhaki",c$=122,fL="globalAlpha",bT="darkred",c_="royalblue",k="",e$=134,dK=143,bS="mediumpurple",n=100,dJ="gray",bR="darkgrey",dI="mediumaquamarine",dH="grey",bQ="indianred",cz="honeydew",c8="darkgray",c9="dimgrey",aB=103,bP="lightseagreen",fK="): ",bO="silver",c7="powderblue",cy="lime",dG="olivedrab",fi=1e3,cx="peru",bN="plum",dE="crimson",dF="pink",aA=".",bM="darkseagreen",cw="cadetblue",a8="+",a$=65535,fh=138,cv="seashell",fy=106,dD="orange",bL="lightsalmon",cu="snow",c6="f",c5="navy",fJ="color conversion error (",bK="ghostwhite",c4="green",c3=124,bJ="sandybrown",ct=127,bI=400,fg=-32,cs="azure",fx=130,dC="lawngreen",cr="deepskyblue",ae=111,fw=133,dB="lightgray",J=" ",dy="aliceblue",dz="lightcoral",dA="wheat",bH="steelblue",cp="darkslategray",cq="magenta",co="red",c1="darkorchid",c2="mistyrose",bG="thistle",fI=118,cm="cornflowerblue",cn="forestgreen",ff="nan",dx="yellow",e_=137,at=116,fH=65520,c0="orchid",dw="lightsteelblue",cl="lightskyblue",bF="violet",ck="burlywood",cZ="tan",bE="mediumorchid",cj="darkcyan",bD="mediumblue",ch="mintcream",ci="/",dv="coral",ah=114,cY="orangered",fe=146,cg="yellowgreen",cX="seagreen",fG=129,V=new
Object();function
f5(a,b){throw[0,a,b]}function
ef(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=U.console;b&&b.error&&b.error(a)}var
j=[0];function
aH(a,b){if(!a)return k;if(a&1)return aH(a-1,b)+b;var
c=aH(a>>1,b);return c+c}function
o(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
f7(){f5(j[4],new
o(fP))}o.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){ef('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){ef('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=k,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=aH(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
c=this.bytes;if(c==null)c=this.toBytes();var
b=[],d=this.last;for(var
a=0;a<d;a++)b[a]=c.charCodeAt(a);for(d=this.len;a<d;a++)b[a]=0;this.string=this.bytes=this.fullBytes=null;this.last=this.len;this.array=b;return b},getArray:function(){var
a=this.array;if(!a)a=this.toArray();return a},getLen:function(){var
a=this.len;if(a!==null)return a;this.toBytes();return this.len},toString:function(){var
a=this.string;return a?a:this.toJsString()},valueOf:function(){var
a=this.string;return a?a:this.toJsString()},blitToArray:function(a,b,c,d){var
g=this.array;if(g)if(c<=a)for(var
e=0;e<d;e++)b[c+e]=g[a+e];else
for(var
e=d-1;e>=0;e--)b[c+e]=g[a+e];else{var
f=this.bytes;if(f==null)f=this.toBytes();var
h=this.last-a;if(d<=h)for(var
e=0;e<d;e++)b[c+e]=f.charCodeAt(a+e);else{for(var
e=0;e<h;e++)b[c+e]=f.charCodeAt(a+e);for(;e<d;e++)b[c+e]=0}}},get:function(a){var
c=this.array;if(c)return c[a];var
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)f7();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&h);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&h;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)f7();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
F(a){this.string=a}F.prototype=new
o();function
ee(a,b){f5(a,new
F(b))}function
aF(a){ee(j[4],a)}function
fX(){aF(fP)}function
ok(a,b){if(b<0||b>=a.length-1)fX();return a[b+1]}function
ol(a,b,c){if(b<0||b>=a.length-1)fX();a[b+1]=c;return 0}function
om(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
T(c,b){if(c.fun)return T(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return T(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return T(c,b.concat([a]))}}function
on(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
oA(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
oL(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
ea(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
o)if(b
instanceof
o){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===fU)f=0;if(f===af){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===fU)g=0;if(g===af){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
cR:var
d=oL(a[2],b[2]);if(d!=0)return d;break;case
251:aF("equal: abstract value");case
h:var
d=oA(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
o||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
i=e.pop();b=e.pop();a=e.pop();if(i+1<a.length)e.push(a,b,i+1);a=a[i];b=b[i]}}function
oo(a,b){return ea(a,b,true)}function
fV(a){this.bytes=k;this.len=a}fV.prototype=new
o();function
op(a){if(a<0)aF("String.create");return new
fV(a)}function
f3(a){throw[0,a]}function
f6(){f3(j[6])}function
or(a,b){if(b==0)f6();return a/b|0}function
os(a,b,c,d){a.fill(b,c,d)}function
aE(a){ee(j[3],a)}function
ot(a){var
b;a=a.getFullBytes();b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,k);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;if(/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(a)){var
c=a.indexOf("p");c=c==-1?a.indexOf("P"):c;var
d=+a.substring(c+1);b=+a.substring(0,c);return b*Math.pow(2,d)}aE("float_of_string")}function
ed(a){a=a.toString();var
e=a.length;if(e>31)aF("format_int: format too long");var
b={justify:a8,signstyle:aa,filler:J,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:c6};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
aa:b.justify=aa;break;case
a8:case
J:b.signstyle=c;break;case
x:b.filler=x;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
aA:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
dq:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
aC:case
c6:case
a7:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
eb(a,b){if(a.uppercase)b=b.toUpperCase();var
e=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=aa))e++;if(a.alternate){if(a.base==8)e+=1;if(a.base==16)e+=2}var
c=k;if(a.justify==a8&&a.filler==J)for(var
d=e;d<a.width;d++)c+=J;if(a.signedconv)if(a.sign<0)c+=aa;else
if(a.signstyle!=aa)c+=a.signstyle;if(a.alternate&&a.base==8)c+=x;if(a.alternate&&a.base==16)c+="0x";if(a.justify==a8&&a.filler==x)for(var
d=e;d<a.width;d++)c+=x;c+=b;if(a.justify==aa)for(var
d=e;d<a.width;d++)c+=J;return new
F(c)}function
ou(a,b){var
c,f=ed(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=ff;f.filler=J}else
if(!isFinite(b)){c="inf";f.filler=J}else
switch(f.conv){case
aC:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==aC)c=c.slice(0,d-1)+x+c.slice(d-1);break;case
c6:c=b.toFixed(e);break;case
a7:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(aC),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==x)d--;if(c.charAt(d)==aA)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==aC)c=c.slice(0,d-1)+x+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==x)d--;if(c.charAt(d)==aA)d--;c=c.slice(0,d+1)}}break}return eb(f,c)}function
ov(a,b){if(a.toString()=="%d")return new
F(k+b);var
c=ed(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
d=b.toString(c.base);if(c.prec>=0){c.filler=J;var
e=c.prec-d.length;if(e>0)d=aH(e,x)+d}return eb(c,d)}function
ox(a,b){return+(ea(a,b,false)>=0)}function
fY(a){if(!isFinite(a)){if(isNaN(a))return[h,1,0,fH];return a>0?[h,0,0,32752]:[h,0,0,fH]}var
f=a>=0?0:32768;if(f)a=-a;var
b=Math.floor(Math.LOG2E*Math.log(a))+1023;if(b<=0){b=0;a/=Math.pow(2,-1026)}else{a/=Math.pow(2,b-1027);if(a<16){a*=2;b-=1}if(b==0)a/=2}var
d=Math.pow(2,24),c=a|0;a=(a-c)*d;var
e=a|0;a=(a-e)*d;var
g=a|0;c=c&15|f|b<<4;return[h,g,e,c]}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&a$)*b|0};var
aG=Math.imul,oy=function(){var
r=256;function
c(a,b){return a<<b|a>>>32-b}function
g(a,b){b=aG(b,3432918353);b=c(b,15);b=aG(b,461845907);a^=b;a=c(a,13);return(a*5|0)+3864292196|0}function
u(a){a^=a>>>16;a=aG(a,2246822507);a^=a>>>13;a=aG(a,3266489909);a^=a>>>16;return a}function
v(a,b){var
d=b[1]|b[2]<<24,c=b[2]>>>8|b[3]<<16;a=g(a,d);a=g(a,c);return a}function
w(a,b){var
d=b[1]|b[2]<<24,c=b[2]>>>8|b[3]<<16;a=g(a,c^d);return a}function
y(a,b){var
e=b.length,c,d;for(c=0;c+4<=e;c+=4){d=b.charCodeAt(c)|b.charCodeAt(c+1)<<8|b.charCodeAt(c+2)<<16|b.charCodeAt(c+3)<<24;a=g(a,d)}d=0;switch(e&3){case
3:d=b.charCodeAt(c+2)<<16;case
2:d|=b.charCodeAt(c+1)<<8;case
1:d|=b.charCodeAt(c);a=g(a,d)}a^=e;return a}function
x(a,b){var
e=b.length,c,d;for(c=0;c+4<=e;c+=4){d=b[c]|b[c+1]<<8|b[c+2]<<16|b[c+3]<<24;a=g(a,d)}d=0;switch(e&3){case
3:d=b[c+2]<<16;case
2:d|=b[c+1]<<8;case
1:d|=b[c];a=g(a,d)}a^=e;return a}return function(a,b,c,d){var
l,m,n,j,i,f,e,k,q;j=b;if(j<0||j>r)j=r;i=a;f=c;l=[d];m=0;n=1;while(m<n&&i>0){e=l[m++];if(e
instanceof
Array&&e[0]===(e[0]|0))switch(e[0]){case
cR:f=g(f,e[2]);i--;break;case
af:l[--m]=e[1];break;case
h:f=w(f,e);i--;break;default:var
t=e.length-1<<10|e[0];f=g(f,t);for(k=1,q=e.length;k<q;k++){if(n>=j)break;l[n++]=e[k]}break}else
if(e
instanceof
o){var
p=e.array;if(p)f=x(f,p);else{var
s=e.getFullBytes();f=y(f,s)}i--;break}else
if(e===(e|0)){f=g(f,e+e+1);i--}else
if(e===+e){f=v(f,fY(e));i--;break}}f=u(f);return f&a6}}();function
oI(a){return[a[3]>>8,a[3]&h,a[2]>>16,a[2]>>8&h,a[2]&h,a[1]>>16,a[1]>>8&h,a[1]&h]}function
oz(e,b,c){var
d=0;function
f(a){b--;if(e<0||b<0)return;if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
cR:e--;d=d*cV+a[2]|0;break;case
af:b++;f(a);break;case
h:e--;d=d*cV+a[1]+(a[2]<<24)|0;break;default:e--;d=d*19+a[0]|0;for(var
c=a.length-1;c>0;c--)f(a[c])}else
if(a
instanceof
o){e--;var
g=a.array,i=a.getLen();if(g)for(var
c=0;c<i;c++)d=d*19+g[c]|0;else{var
j=a.getFullBytes();for(var
c=0;c<i;c++)d=d*19+j.charCodeAt(c)|0}}else
if(a===(a|0)){e--;d=d*cV+a|0}else
if(a===+a){e--;var
k=oI(fY(a));for(var
c=7;c>=0;c--)d=d*19+k[c]|0}}f(c);return d&a6}function
oD(a){return(a[3]|a[2]|a[1])==0}function
oG(a){return[h,a&E,a>>24&E,a>>31&a$]}function
oH(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[h,c&E,d&E,e&a$]}function
f0(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fZ(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&E;a[1]=a[1]<<1&E}function
oE(a){a[1]=(a[1]>>>1|a[2]<<23)&E;a[2]=(a[2]>>>1|a[3]<<23)&E;a[3]=a[3]>>>1}function
oK(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[h,0,0,0];while(f0(d,c)>0){e++;fZ(c)}while(e>=0){e--;fZ(f);if(f0(d,c)>=0){f[1]++;d=oH(d,c)}oE(c)}return[0,f,d]}function
oJ(a){return a[1]|a[2]<<24}function
oC(a){return a[3]<<16<0}function
oF(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[h,b&E,c&E,d&a$]}function
oB(a,b){var
c=ed(a);if(c.signedconv&&oC(b)){c.sign=-1;b=oF(b)}var
d=k,h=oG(c.base),g="0123456789abcdef";do{var
f=oK(b,h);b=f[1];d=g.charAt(oJ(f[2]))+d}while(!oD(b));if(c.prec>=0){c.filler=J;var
e=c.prec-d.length;if(e>0)d=aH(e,x)+d}return eb(c,d)}function
o3(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
ay:case
88:c=16;b+=2;break;case
ae:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
f2(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=c$)return a-87;return-1}function
oM(a){var
g=o3(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=f2(e);if(c<0||c>=d)aE(a5);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=f2(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)aE(a5)}if(f!=a.getLen())aE(a5);b=h*b;if(d==10&&(b|0)!=b)aE(a5);return b|0}function
oN(a){return+(a>31&&a<ct)}function
oO(a){return a.getFullBytes()}function
oP(a){return new
o(a)}function
oQ(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return T(a,b)}}function
oR(a,b){return+(ea(a,b,false)<=0)}function
oS(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
fW(a){var
b=a.length;this.array=a;this.len=this.last=b}fW.prototype=new
o();var
oT=function(){function
n(a,b){return a+b|0}function
m(a,b,c,d,e,f){b=n(n(b,a),n(d,f));return n(b<<e|b>>>32-e,c)}function
i(a,b,c,d,e,f,g){return m(b&c|~b&d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return m(b&d|c&~d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return m(b^c^d,a,b,e,f,g)}function
l(a,b,c,d,e,f,g){return m(c^(b|~d),a,b,e,f,g)}function
o(a,b){var
g=b;a[g>>2]|=d6<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
m=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=m[0],d=m[1],e=m[2],f=m[3];c=i(c,d,e,f,a[g+0],7,3614090360);f=i(f,c,d,e,a[g+1],12,3905402710);e=i(e,f,c,d,a[g+2],17,606105819);d=i(d,e,f,c,a[g+3],22,3250441966);c=i(c,d,e,f,a[g+4],7,4118548399);f=i(f,c,d,e,a[g+5],12,1200080426);e=i(e,f,c,d,a[g+6],17,2821735955);d=i(d,e,f,c,a[g+7],22,4249261313);c=i(c,d,e,f,a[g+8],7,1770035416);f=i(f,c,d,e,a[g+9],12,2336552879);e=i(e,f,c,d,a[g+10],17,4294925233);d=i(d,e,f,c,a[g+11],22,2304563134);c=i(c,d,e,f,a[g+12],7,1804603682);f=i(f,c,d,e,a[g+13],12,4254626195);e=i(e,f,c,d,a[g+14],17,2792965006);d=i(d,e,f,c,a[g+15],22,1236535329);c=j(c,d,e,f,a[g+1],5,4129170786);f=j(f,c,d,e,a[g+6],9,3225465664);e=j(e,f,c,d,a[g+11],14,643717713);d=j(d,e,f,c,a[g+0],20,3921069994);c=j(c,d,e,f,a[g+5],5,3593408605);f=j(f,c,d,e,a[g+10],9,38016083);e=j(e,f,c,d,a[g+15],14,3634488961);d=j(d,e,f,c,a[g+4],20,3889429448);c=j(c,d,e,f,a[g+9],5,568446438);f=j(f,c,d,e,a[g+14],9,3275163606);e=j(e,f,c,d,a[g+3],14,4107603335);d=j(d,e,f,c,a[g+8],20,1163531501);c=j(c,d,e,f,a[g+13],5,2850285829);f=j(f,c,d,e,a[g+2],9,4243563512);e=j(e,f,c,d,a[g+7],14,1735328473);d=j(d,e,f,c,a[g+12],20,2368359562);c=k(c,d,e,f,a[g+5],4,4294588738);f=k(f,c,d,e,a[g+8],11,2272392833);e=k(e,f,c,d,a[g+11],16,1839030562);d=k(d,e,f,c,a[g+14],23,4259657740);c=k(c,d,e,f,a[g+1],4,2763975236);f=k(f,c,d,e,a[g+4],11,1272893353);e=k(e,f,c,d,a[g+7],16,4139469664);d=k(d,e,f,c,a[g+10],23,3200236656);c=k(c,d,e,f,a[g+13],4,681279174);f=k(f,c,d,e,a[g+0],11,3936430074);e=k(e,f,c,d,a[g+3],16,3572445317);d=k(d,e,f,c,a[g+6],23,76029189);c=k(c,d,e,f,a[g+9],4,3654602809);f=k(f,c,d,e,a[g+12],11,3873151461);e=k(e,f,c,d,a[g+15],16,530742520);d=k(d,e,f,c,a[g+2],23,3299628645);c=l(c,d,e,f,a[g+0],6,4096336452);f=l(f,c,d,e,a[g+7],10,1126891415);e=l(e,f,c,d,a[g+14],15,2878612391);d=l(d,e,f,c,a[g+5],21,4237533241);c=l(c,d,e,f,a[g+12],6,1700485571);f=l(f,c,d,e,a[g+3],10,2399980690);e=l(e,f,c,d,a[g+10],15,4293915773);d=l(d,e,f,c,a[g+1],21,2240044497);c=l(c,d,e,f,a[g+8],6,1873313359);f=l(f,c,d,e,a[g+15],10,4264355552);e=l(e,f,c,d,a[g+6],15,2734768916);d=l(d,e,f,c,a[g+13],21,1309151649);c=l(c,d,e,f,a[g+4],6,4149444226);f=l(f,c,d,e,a[g+11],10,3174756917);e=l(e,f,c,d,a[g+2],15,718787259);d=l(d,e,f,c,a[g+9],21,3951481745);m[0]=n(c,m[0]);m[1]=n(d,m[1]);m[2]=n(e,m[2]);m[3]=n(f,m[3])}var
p=[];for(var
g=0;g<4;g++)for(var
o=0;o<4;o++)p[g*4+o]=m[g]>>8*o&h;return p}return function(a,b,c){var
h=[];if(a.array){var
f=a.array;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}else{var
g=a.getFullBytes();for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3)}return new
fW(o(h,c))}}();function
G(a){ee(j[2],a)}function
oU(a){if(!a.opened)G("Cannot flush a closed channel");if(a.buffer==k)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=k}function
f4(a){a=a
instanceof
o?a.toString():a;G(a+": No such file or directory")}var
oq=ci;function
bc(a){a=a
instanceof
o?a.toString():a;if(a.charCodeAt(0)!=47)a=oq+a;var
d=a.split(ci),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case
aA:case
k:if(b.length==0)b.push(k);break;default:b.push(d[c]);break}b.orig=a;return b}function
ac(){this.content={}}ac.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
be=new
ac();be.mk(k,new
ac());function
ec(a){var
b=be;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))f4(a.orig);b=b.get(a[c])}return b}function
pb(a){var
c=bc(a),b=ec(c);return b
instanceof
ac?1:0}function
aD(a){this.data=a}aD.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
ow(a,b){var
e=bc(a),c=be;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
ac());c=c.get(d);if(!(c
instanceof
ac))G(e.orig+cE)}var
d=e[e.length-1];if(c.exists(d))G(e.orig+cE);if(b
instanceof
ac)c.mk(d,b);else
if(b
instanceof
aD)c.mk(d,b);else
if(b
instanceof
o)c.mk(d,new
aD(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
aD(b));else
if(b.toString)c.mk(d,new
aD(new
o(b.toString()).getArray()));else
aF("caml_fs_register")}function
o$(a){var
b=be,d=bc(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(ci)):0;b=b.get(d[c])}return 1}function
aI(a,b,c){if(j.fds===undefined)j.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;j.fds[a]=d;j.fd_last_idx=a;return a}function
pi(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
f=a.toString(),h=bc(a);if(d.rdonly&&d.wronly)G(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)G(f+" : flags Open_text and Open_binary are not compatible");if(o$(a)){if(pb(a))G(f+" : is a directory");if(d.create&&d.excl)G(f+cE);var
g=j.fd_last_idx?j.fd_last_idx:0,e=ec(h);if(d.truncate)e.truncate();return aI(g+1,e.content(),d)}else
if(d.create){var
g=j.fd_last_idx?j.fd_last_idx:0;ow(a,[]);var
e=ec(h);return aI(g+1,e.content(),d)}else
f4(a)}aI(0,[]);aI(1,[]);aI(2,[]);function
oV(a){var
b=j.fds[a];if(b.flags.wronly)G(fT+a+" is writeonly");return{data:b,fd:a,opened:true}}function
pg(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=U.console;b&&b.log&&b.log(a)}var
bd=new
Array();function
o7(a,b){var
e=new
o(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
oW(a){var
b;switch(a){case
1:b=pg;break;case
2:b=ef;break;default:b=o7}var
d=j.fds[a];if(d.flags.rdonly)G(fT+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:k,output:b};bd[c.fd]=c;return c}function
oX(){var
a=0;for(var
b
in
bd)if(bd[b].opened)a=[0,bd[b],a];return a}function
oY(a,b){if(b==0)f6();return a%b}function
o0(a){return new
o(a)}function
o1(a,b){a[0]=b;return 0}function
o2(a){return a
instanceof
Array?a[0]:fi}function
o5(a,b){j[a+1]=b}var
f1={};function
o6(a,b){f1[a.toString()]=b;return 0}function
o8(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
o9(a,b){return 1-o8(a,b)}function
o_(){return 32}function
o4(){f3(j[7])}function
pa(){o4()}function
pc(){var
a=new
Date()^4294967295*Math.random();return{valueOf:function(){return a},0:0,1:a,length:2}}function
oZ(a){return f1[a]}function
pd(a){if(a
instanceof
Array)return a;if(U.RangeError&&a
instanceof
U.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,j[9]];if(U.InternalError&&a
instanceof
U.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,j[9]];if(a
instanceof
U.Error)return[0,oZ(fd),a];return[0,j[3],new
F(String(a))]}function
pe(a){var
b=document.createElement(fC);b.id=a;b.src=a;V[a]=b}function
pf(a,b){var
c=document.createElement(fC);c.id=a;c.src=a;c.addEventListener("ended",function(){this.currentTime=0;this.play()},false);V[a]=c}function
f8(a){var
b=V[a];b.pause();b.currentTime<-0;V[a]=b;V[a].play()}function
f9(a,b){if(a
in
V){var
c=V[a];c.volume=b;V[a]=c}}function
ph(){return 0}var
u=ok,i=ol,a0=om,$=oo,Q=op,e5=ou,a1=ov,e6=oM,bB=oN,R=oO,e9=oQ,w=oS,e3=oW,a2=oY,d=o0,I=o5,e4=o6,b=o9,e7=pa,e8=pc,t=pd,a4=ph;function
C(a,b){return a.length==1?a(b):T(a,[b])}function
D(a,b,c){return a.length==2?a(b,c):T(a,[b,c])}function
m(a,b,c,d){return a.length==3?a(b,c,d):T(a,[b,c,d])}function
bC(a,b,c,d,e){return a.length==4?a(b,c,d,e):T(a,[b,c,d,e])}var
W=[0,d("Failure")],y=[0,d("Invalid_argument")],v=[0,d("Not_found")],eA=[0,d("Match_failure")],ej=[0,d("Assert_failure")],n9=[0,d(dg),[0,d(b5),[0,d(dx),[0,d(cg),0]]]],n_=[0,d(dW),[0,d(cu),[0,d(b4),[0,d(bH),[0,d(cZ),[0,d(d$),[0,d(bG),[0,d(cD),[0,d(cB),[0,d(bF),[0,d(dA),n9]]]]]]]]]]],n$=[0,d(c_),[0,d(du),[0,d(d7),[0,d(bJ),[0,d(cX),[0,d(cv),[0,d(d5),[0,d(bO),[0,d(cJ),[0,d(df),[0,d(b0),n_]]]]]]]]]]],oa=[0,d(bV),[0,d(cc),[0,d(de),[0,d(dQ),[0,d(cx),[0,d(dF),[0,d(bN),[0,d(c7),[0,d(dj),[0,d(co),[0,d(dZ),n$]]]]]]]]]]],ob=[0,d(dh),[0,d(cC),[0,d(c5),[0,d(d4),[0,d(dT),[0,d(dG),[0,d(dD),[0,d(cY),[0,d(c0),[0,d(db),[0,d(dt),oa]]]]]]]]]]],oc=[0,d(bD),[0,d(bE),[0,d(bS),[0,d(ce),[0,d(dN),[0,d(cW),[0,d(cH),[0,d(cF),[0,d(b1),[0,d(ch),[0,d(c2),ob]]]]]]]]]]],od=[0,d(cl),[0,d(d0),[0,d(b9),[0,d(dw),[0,d(cO),[0,d(cy),[0,d(d8),[0,d(cS),[0,d(cq),[0,d(dY),[0,d(dI),oc]]]]]]]]]]],oe=[0,d(dX),[0,d(b6),[0,d(dz),[0,d(bX),[0,d(cU),[0,d(dB),[0,d(dU),[0,d(d9),[0,d(cb),[0,d(bL),[0,d(bP),od]]]]]]]]]]],of=[0,d(bZ),[0,d(dH),[0,d(cz),[0,d(b_),[0,d(bQ),[0,d(dS),[0,d(cM),[0,d(d1),[0,d(cd),[0,d(dP),[0,d(dC),oe]]]]]]]]]]],og=[0,d(bY),[0,d(dp),[0,d(b8),[0,d(cn),[0,d(cI),[0,d(cN),[0,d(bK),[0,d(b3),[0,d(cA),[0,d(dJ),[0,d(c4),of]]]]]]]]]]],oh=[0,d(da),[0,d(bM),[0,d(b$),[0,d(cp),[0,d(d3),[0,d(dm),[0,d(d2),[0,d(ds),[0,d(cr),[0,d(dd),[0,d(c9),og]]]]]]]]]]],oi=[0,d(cj),[0,d(cG),[0,d(c8),[0,d(cf),[0,d(bR),[0,d(dL),[0,d(bW),[0,d(dO),[0,d(dR),[0,d(c1),[0,d(bT),oh]]]]]]]]]]],oj=[0,d(di),[0,d(ck),[0,d(cw),[0,d(cQ),[0,d(ca),[0,d(dv),[0,d(cm),[0,d(cL),[0,d(dE),[0,d(dn),[0,d(dM),oi]]]]]]]]]]],bA=d("res/hobo_music.wav"),bw=d("res/hobo_laser.wav");I(11,[0,d("Undefined_recursive_module")]);I(8,[0,d("Stack_overflow")]);I(7,eA);I(6,v);I(5,[0,d("Division_by_zero")]);I(4,[0,d("End_of_file")]);I(3,y);I(2,W);I(1,[0,d("Sys_error")]);var
f_=d("true"),f$=d("false"),ga=d("Pervasives.do_at_exit"),ge=[0,d("list.ml"),223,11],gc=d("nth"),gd=d("List.nth"),gh=d("\\b"),gi=d("\\t"),gj=d("\\n"),gk=d("\\r"),gg=d("\\\\"),gf=d("\\'"),gn=d("String.contains_from"),gm=d("String.blit"),gl=d("String.sub"),gp=d("CamlinternalLazy.Undefined"),gs=d("Buffer.add: cannot grow buffer"),gI=d(k),gJ=d(k),gM=d("%.12g"),gN=d(fF),gO=d(fF),gK=d(a_),gL=d(a_),gH=d(ff),gF=d("neg_infinity"),gG=d("infinity"),gE=d(aA),gD=d("printf: bad positional specification (0)."),gC=d("%_"),gB=[0,d("printf.ml"),dK,8],gz=d(a_),gA=d("Printf: premature end of format string '"),gv=d(a_),gw=d(" in format string '"),gx=d(", at char number "),gy=d("Printf: bad conversion %"),gt=d("Sformat.index_of_int: negative argument "),gP=d(dq),gQ=[0,987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],n7=d("OCAMLRUNPARAM"),n5=d("CAMLRUNPARAM"),gR=d(k),gX=d("E2BIG"),gZ=d("EACCES"),g0=d("EAGAIN"),g1=d("EBADF"),g2=d("EBUSY"),g3=d("ECHILD"),g4=d("EDEADLK"),g5=d("EDOM"),g6=d("EEXIST"),g7=d("EFAULT"),g8=d("EFBIG"),g9=d("EINTR"),g_=d("EINVAL"),g$=d("EIO"),ha=d("EISDIR"),hb=d("EMFILE"),hc=d("EMLINK"),hd=d("ENAMETOOLONG"),he=d("ENFILE"),hf=d("ENODEV"),hg=d("ENOENT"),hh=d("ENOEXEC"),hi=d("ENOLCK"),hj=d("ENOMEM"),hk=d("ENOSPC"),hl=d("ENOSYS"),hm=d("ENOTDIR"),hn=d("ENOTEMPTY"),ho=d("ENOTTY"),hp=d("ENXIO"),hq=d("EPERM"),hr=d("EPIPE"),hs=d("ERANGE"),ht=d("EROFS"),hu=d("ESPIPE"),hv=d("ESRCH"),hw=d("EXDEV"),hx=d("EWOULDBLOCK"),hy=d("EINPROGRESS"),hz=d("EALREADY"),hA=d("ENOTSOCK"),hB=d("EDESTADDRREQ"),hC=d("EMSGSIZE"),hD=d("EPROTOTYPE"),hE=d("ENOPROTOOPT"),hF=d("EPROTONOSUPPORT"),hG=d("ESOCKTNOSUPPORT"),hH=d("EOPNOTSUPP"),hI=d("EPFNOSUPPORT"),hJ=d("EAFNOSUPPORT"),hK=d("EADDRINUSE"),hL=d("EADDRNOTAVAIL"),hM=d("ENETDOWN"),hN=d("ENETUNREACH"),hO=d("ENETRESET"),hP=d("ECONNABORTED"),hQ=d("ECONNRESET"),hR=d("ENOBUFS"),hS=d("EISCONN"),hT=d("ENOTCONN"),hU=d("ESHUTDOWN"),hV=d("ETOOMANYREFS"),hW=d("ETIMEDOUT"),hX=d("ECONNREFUSED"),hY=d("EHOSTDOWN"),hZ=d("EHOSTUNREACH"),h0=d("ELOOP"),h1=d("EOVERFLOW"),h2=d("EUNKNOWNERR %d"),gY=d("Unix.Unix_error(Unix.%s, %S, %S)"),gT=d(fz),gU=d(k),gV=d(k),gW=d(fz),h3=d("0.0.0.0"),h4=d("127.0.0.1"),n4=d("::"),n3=d("::1"),h6=d("Js.Error"),h7=d(fd),ia=d("canvas"),h9=d("img"),h_=d("Dom_html.Canvas_not_available"),ib=d("[\\][()\\\\|+*.?{}^$]"),m$=d(fK),na=d(fJ),m9=d(fK),m_=d(fJ),m5=d(fo),m6=d("(rgba?)\\((?:(\\d*),(\\d*),(\\d*)(?:,(\\d*(?:\\.\\d*)?))?)\\)"),m7=d("(rgba?)\\((?:(\\d*)%,(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),m8=d("(hsla?)\\((?:(\\d*),(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),nb=d(fs),nc=d(fr),nd=d(fs),ne=d(fr),nf=d("hsl"),ng=d("hsla"),mX=d("^rgb\\(\\s*\\d*,\\s*\\d*,\\s*\\d*\\)$"),mY=d("^rgb\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%\\)$"),mZ=d("^rgba\\(\\s*\\d*,\\s*\\d*,\\s*\\d*,\\d*\\.?\\d*\\)$"),m0=d("^rgba\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),m1=d("^hsl\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%\\)$"),m2=d("^hsla\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),m3=[0,d(dy),[0,d(cP),[0,d(dV),[0,d(dl),[0,d(cs),[0,d(b7),[0,d(bU),[0,d(d_),[0,d(cK),[0,d(cT),[0,d(b2),oj]]]]]]]]]]],m4=d(fo),mR=d("rgb(%d,%d,%d)"),mS=d("rgb(%d%%,%d%%,%d%%)"),mT=d("rgba(%d,%d,%d,%f)"),mU=d("rgba(%d%%,%d%%,%d%%,%f)"),mV=d("hsl(%d,%d%%,%d%%)"),mW=d("hsla(%d,%d%%,%d%%,%f)"),kx=d(dy),ky=d(cP),kz=d(dV),kA=d(dl),kB=d(cs),kC=d(b7),kD=d(bU),kE=d(d_),kF=d(cK),kG=d(cT),kH=d(b2),kI=d(di),kJ=d(ck),kK=d(cw),kL=d(cQ),kM=d(ca),kN=d(dv),kO=d(cm),kP=d(cL),kQ=d(dE),kR=d(dn),kS=d(dM),kT=d(cj),kU=d(cG),kV=d(c8),kW=d(cf),kX=d(bR),kY=d(dL),kZ=d(bW),k0=d(dO),k1=d(dR),k2=d(c1),k3=d(bT),k4=d(da),k5=d(bM),k6=d(b$),k7=d(cp),k8=d(d3),k9=d(dm),k_=d(d2),k$=d(ds),la=d(cr),lb=d(dd),lc=d(c9),ld=d(bY),le=d(dp),lf=d(b8),lg=d(cn),lh=d(cI),li=d(cN),lj=d(bK),lk=d(b3),ll=d(cA),lm=d(dJ),ln=d(c4),lo=d(bZ),lp=d(dH),lq=d(cz),lr=d(b_),ls=d(bQ),lt=d(dS),lu=d(cM),lv=d(d1),lw=d(cd),lx=d(dP),ly=d(dC),lz=d(dX),lA=d(b6),lB=d(dz),lC=d(bX),lD=d(cU),lE=d(dB),lF=d(dU),lG=d(d9),lH=d(cb),lI=d(bL),lJ=d(bP),lK=d(cl),lL=d(d0),lM=d(b9),lN=d(dw),lO=d(cO),lP=d(cy),lQ=d(d8),lR=d(cS),lS=d(cq),lT=d(dY),lU=d(dI),lV=d(bD),lW=d(bE),lX=d(bS),lY=d(ce),lZ=d(dN),l0=d(cW),l1=d(cH),l2=d(cF),l3=d(b1),l4=d(ch),l5=d(c2),l6=d(dh),l7=d(cC),l8=d(c5),l9=d(d4),l_=d(dT),l$=d(dG),ma=d(dD),mb=d(cY),mc=d(c0),md=d(db),me=d(dt),mf=d(bV),mg=d(cc),mh=d(de),mi=d(dQ),mj=d(cx),mk=d(dF),ml=d(bN),mm=d(c7),mn=d(dj),mo=d(co),mp=d(dZ),mq=d(c_),mr=d(du),ms=d(d7),mt=d(bJ),mu=d(cX),mv=d(cv),mw=d(d5),mx=d(bO),my=d(cJ),mz=d(df),mA=d(b0),mB=d(dW),mC=d(cu),mD=d(b4),mE=d(bH),mF=d(cZ),mG=d(d$),mH=d(bG),mI=d(cD),mJ=d(cB),mK=d(bF),mL=d(dA),mM=d(dg),mN=d(b5),mO=d(dx),mP=d(cg),mQ=d(" is not a valid color name"),ic=d(dy),id=d(cP),ie=d(dV),ig=d(dl),ih=d(cs),ii=d(b7),ij=d(bU),ik=d(d_),il=d(cK),im=d(cT),io=d(b2),ip=d(di),iq=d(ck),ir=d(cw),is=d(cQ),it=d(ca),iu=d(dv),iv=d(cm),iw=d(cL),ix=d(dE),iy=d(dn),iz=d(dM),iA=d(cj),iB=d(cG),iC=d(c8),iD=d(cf),iE=d(bR),iF=d(dL),iG=d(bW),iH=d(dO),iI=d(dR),iJ=d(c1),iK=d(bT),iL=d(da),iM=d(bM),iN=d(b$),iO=d(cp),iP=d(d3),iQ=d(dm),iR=d(d2),iS=d(ds),iT=d(cr),iU=d(dd),iV=d(c9),iW=d(bY),iX=d(dp),iY=d(b8),iZ=d(cn),i0=d(cI),i1=d(cN),i2=d(bK),i3=d(b3),i4=d(cA),i5=d(dJ),i6=d(dH),i7=d(c4),i8=d(bZ),i9=d(cz),i_=d(b_),i$=d(bQ),ja=d(dS),jb=d(cM),jc=d(d1),jd=d(cd),je=d(dP),jf=d(dC),jg=d(dX),jh=d(b6),ji=d(dz),jj=d(bX),jk=d(cU),jl=d(dB),jm=d(dU),jn=d(d9),jo=d(cb),jp=d(bL),jq=d(bP),jr=d(cl),js=d(d0),jt=d(b9),ju=d(dw),jv=d(cO),jw=d(cy),jx=d(d8),jy=d(cS),jz=d(cq),jA=d(dY),jB=d(dI),jC=d(bD),jD=d(bE),jE=d(bS),jF=d(ce),jG=d(dN),jH=d(cW),jI=d(cH),jJ=d(cF),jK=d(b1),jL=d(ch),jM=d(c2),jN=d(dh),jO=d(cC),jP=d(c5),jQ=d(d4),jR=d(dT),jS=d(dG),jT=d(dD),jU=d(cY),jV=d(c0),jW=d(db),jX=d(dt),jY=d(bV),jZ=d(cc),j0=d(de),j1=d(dQ),j2=d(cx),j3=d(dF),j4=d(bN),j5=d(c7),j6=d(dj),j7=d(co),j8=d(dZ),j9=d(c_),j_=d(du),j$=d(d7),ka=d(bJ),kb=d(cX),kc=d(cv),kd=d(d5),ke=d(bO),kf=d(cJ),kg=d(df),kh=d(b0),ki=d(dW),kj=d(cu),kk=d(b4),kl=d(bH),km=d(cZ),kn=d(d$),ko=d(bG),kp=d(cD),kq=d(cB),kr=d(bF),ks=d(dA),kt=d(dg),ku=d(b5),kv=d(dx),kw=d(cg),nh=[0,d("keyboard.ml"),155,4],nk=d(dq),nl=d("y"),nm=d("x_r"),nn=d("y_r"),nj=d("px arial"),no=d("Timebis.TIMELINE(G).HasNoContent"),nS=d(bb),nT=d("res/cactuar"),nL=d(bb),nM=d("res/explosion"),nC=d(bb),nD=d("res/kame"),nx=d(bb),ny=d("res/walk"),nF=d("res/scrolling_background.png"),nG=d("res/footer.png"),nW=d("res/hourglass.png"),n0=d("Pouet");function
aJ(a){throw[0,W,a]}function
ad(a){throw[0,y,a]}function
g(a,b){var
c=a.getLen(),e=b.getLen(),d=Q(c+e|0);a0(a,0,d,0,c);a0(b,0,d,c,e);return d}function
z(a){return d(k+a)}function
eg(a,b){if(a){var
c=a[1];return[0,c,eg(a[2],b)]}return b}oV(0);e3(1);e3(2);function
eh(a){var
b=oX(0);for(;;){if(b){var
c=b[2],d=b[1];try{oU(d)}catch(f){}var
b=c;continue}return 0}}e4(ga,eh);function
gb(a){var
b=a.length-1-1|0,c=0;for(;;){if(0<=b){var
d=[0,a[b+1],c],b=b-1|0,c=d;continue}return c}}function
ei(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=w(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}function
bf(a){var
c=0,b=a;for(;;){if(b){var
c=c+1|0,b=b[2];continue}return c}}function
ai(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[1],d],c=c[2],d=e;continue}return d}}function
ek(a){return ai(a,0)}function
bg(a){if(a){var
b=a[1];return eg(b,bg(a[2]))}return 0}function
r(a,b){if(b){var
c=b[2],d=C(a,b[1]);return[0,d,r(a,c)]}return 0}function
bh(a,b){var
c=b;for(;;){if(c){var
d=c[2];C(a,c[1]);var
c=d;continue}return 0}}function
el(a,b){var
d=a,c=b;for(;;){if(0===d)return c;if(c){var
d=d-1|0,c=c[2];continue}throw[0,ej,ge]}}function
aK(a,b){var
c=Q(a);os(c,0,a,b);return c}function
aL(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=Q(c);a0(a,b,d,0,c);return d}return ad(gl)}function
aM(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return a0(a,b,c,d,e);return ad(gm)}var
bi=o_(0),bj=(1<<(bi-10|0))-1|0,aj=aG(bi/8|0,bj)-1|0,gq=[0,gp];function
gr(a){throw[0,gq]}function
bk(a){var
b=1<=a?a:1,c=aj<b?aj:b,d=Q(c);return[0,d,0,c,d]}function
bl(a){return aL(a[1],0,a[2])}function
eo(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(aj<c[1])if((a[2]+b|0)<=aj)c[1]=aj;else
aJ(gs);var
d=Q(c[1]);aM(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
ak(a,b){var
c=a[2];if(a[3]<=c)eo(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
bm(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)eo(a,c);aM(b,0,a[1],a[2],c);a[2]=d;return 0}function
bn(a){return 0<=a?a:aJ(g(gt,z(a)))}function
ep(a,b){return bn(a+b|0)}var
gu=1;function
eq(a){return ep(gu,a)}function
er(a){return aL(a,0,a.getLen())}function
es(a,b,c){var
d=g(gw,g(a,gv)),e=g(gx,g(z(b),d));return ad(g(gy,g(aK(1,c),e)))}function
al(a,b,c){return es(er(a),b,c)}function
aO(a){return ad(g(gA,g(er(a),gz)))}function
X(e,b,c,d){function
h(a){if((e.safeGet(a)+ag|0)<0||9<(e.safeGet(a)+ag|0))return a;var
b=a+1|0;for(;;){var
c=e.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
i=h(b+1|0),f=bk((c-i|0)+10|0);ak(f,37);var
a=i,g=ek(d);for(;;){if(a<=c){var
j=e.safeGet(a);if(42===j){if(g){var
k=g[2];bm(f,z(g[1]));var
a=h(a+1|0),g=k;continue}throw[0,ej,gB]}ak(f,j);var
a=a+1|0;continue}return bl(f)}}function
et(a,b,c,d,e){var
f=X(b,c,d,e);if(78!==a)if(S!==a)return f;f.safeSet(f.getLen()-1|0,ax);return f}function
eu(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:au,c=b;for(;;){if(k<=c)return aO(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return aO(d);var
f=d.safeGet(e),g=f-40|0;if(g<0||1<g){var
i=g-83|0;if(i<0||2<i)var
h=1;else
switch(i){case
1:var
h=1;break;case
2:var
j=1,h=0;break;default:var
j=0,h=0}if(h){var
c=e+1|0;continue}}else
var
j=0===g?0:1;if(j)return f===m?e+1|0:al(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
ev(i,b,c){var
l=i.getLen()-1|0;function
s(a){var
k=a;a:for(;;){if(k<l){if(37===i.safeGet(k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=aO(i);else{var
o=i.safeGet(h);if(58<=o){if(95===o){var
f=1,h=h+1|0;continue}}else
if(32<=o)switch(o+fg|0){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
0:case
3:case
11:case
13:var
h=h+1|0;continue;case
10:var
h=m(b,f,h,K);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=aO(i);else{var
j=i.safeGet(d);if(dr<=j)var
g=0;else
switch(j){case
78:case
88:case
n:case
K:case
ae:case
ax:case
ay:var
e=m(b,f,d,K),g=1;break;case
69:case
70:case
71:case
ba:case
av:case
aB:var
e=m(b,f,d,av),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
ab:var
e=m(b,f,d,ab),g=1;break;case
97:case
ah:case
at:var
e=m(b,f,d,j),g=1;break;case
76:case
a9:case
S:var
t=d+1|0;if(l<t)var
e=m(b,f,d,K),g=1;else{var
q=i.safeGet(t)+fR|0;if(q<0||32<q)var
r=1;else
switch(q){case
0:case
12:case
17:case
23:case
29:case
32:var
e=D(c,m(b,f,d,j),K),g=1,r=0;break;default:var
r=1}if(r)var
e=m(b,f,d,K),g=1}break;case
67:case
99:var
e=m(b,f,d,99),g=1;break;case
66:case
98:var
e=m(b,f,d,66),g=1;break;case
41:case
au:var
e=m(b,f,d,j),g=1;break;case
40:var
e=s(m(b,f,d,j)),g=1;break;case
az:var
u=m(b,f,d,j),v=D(eu(j),i,u),p=u;for(;;){if(p<(v-2|0)){var
p=D(c,p,i.safeGet(p));continue}var
d=v-1|0;continue b}default:var
g=0}if(!g)var
e=al(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}s(0);return 0}function
ew(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?au!==c?1:0:f;if(g){var
e=97===c?2:1;if(ah===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}ev(a,b,function(a,b){return a+1|0});return d[1]}function
ex(a,b,c){var
g=a.safeGet(c);if((g+ag|0)<0||9<(g+ag|0))return D(b,0,c);var
e=g+ag|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+ag|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aJ(gD):D(b,[0,bn(e-1|0)],d+1|0);return D(b,0,c)}}function
s(a,b){return a?b:eq(b)}function
ey(a,b){return a?a[1]:b}function
L(h){function
e(a){var
b=bl(a);a[2]=0;return b}var
G=bk(2*h.getLen()|0),aV=1;function
aj(a){return bm(G,a)}function
aT(a,b,h,aU){var
f=h.getLen();function
z(i,b){var
k=b;for(;;){if(f<=k)return C(a,G);var
c=h.safeGet(k);if(37===c){var
j=function(a,b){return u(aU,ey(a,b))},aD=function(f,e,c,d){var
a=d;for(;;){var
ac=h.safeGet(a)+fg|0;if(!(ac<0||25<ac))switch(ac){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
10:return ex(h,function(a,b){var
d=[0,j(a,e),c];return aD(f,s(a,e),d,b)},a+1|0);default:var
a=a+1|0;continue}var
l=h.safeGet(a);if(!(c3<=l))switch(l){case
78:case
88:case
n:case
K:case
ae:case
ax:case
ay:var
bf=j(f,e),bg=a1(et(l,h,k,a,c),bf);return m(s(f,e),bg,a+1|0);case
69:case
71:case
ba:case
av:case
aB:var
a8=j(f,e),a_=e5(X(h,k,a,c),a8);return m(s(f,e),a_,a+1|0);case
76:case
a9:case
S:var
ag=h.safeGet(a+1|0)+fR|0;if(!(ag<0||32<ag))switch(ag){case
0:case
12:case
17:case
23:case
29:case
32:var
T=a+1|0,ai=l-108|0;if(ai<0||2<ai)var
am=0;else{switch(ai){case
1:var
am=0,an=0;break;case
2:var
be=j(f,e),aJ=a1(X(h,k,T,c),be),an=1;break;default:var
bd=j(f,e),aJ=a1(X(h,k,T,c),bd),an=1}if(an)var
aI=aJ,am=1}if(!am)var
bc=j(f,e),aI=oB(X(h,k,T,c),bc);return m(s(f,e),aI,T+1|0)}var
a$=j(f,e),bb=a1(et(S,h,k,a,c),a$);return m(s(f,e),bb,a+1|0);case
37:case
64:return m(e,aK(1,l),a+1|0);case
83:case
ab:var
v=j(f,e);if(ab===l)var
w=v;else{var
b=[0,0],ar=v.getLen()-1|0,aW=0;if(!(ar<0)){var
J=aW;for(;;){var
u=v.safeGet(J),bp=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aZ=bp?2:bB(u)?1:4;b[1]=b[1]+aZ|0;var
a0=J+1|0;if(ar!==J){var
J=a0;continue}break}}if(b[1]===v.getLen())var
aO=v;else{var
i=Q(b[1]);b[1]=0;var
as=v.getLen()-1|0,aX=0;if(!(as<0)){var
I=aX;for(;;){var
r=v.safeGet(I),x=r-34|0;if(x<0||58<x)if(-20<=x)var
U=1;else{switch(x+34|0){case
8:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],98);var
H=1;break;case
9:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],at);var
H=1;break;case
10:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],S);var
H=1;break;case
13:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],ah);var
H=1;break;default:var
U=1,H=0}if(H)var
U=0}else
var
U=(x-1|0)<0||56<(x-1|0)?(i.safeSet(b[1],92),b[1]++,i.safeSet(b[1],r),0):1;if(U)if(bB(r))i.safeSet(b[1],r);else{i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],48+(r/n|0)|0);b[1]++;i.safeSet(b[1],48+((r/10|0)%10|0)|0);b[1]++;i.safeSet(b[1],48+(r%10|0)|0)}b[1]++;var
aY=I+1|0;if(as!==I){var
I=aY;continue}break}}var
aO=i}var
w=g(gO,g(aO,gN))}if(a===(k+1|0))var
aN=w;else{var
F=X(h,k,a,c);try{var
V=0,p=1;for(;;){if(F.getLen()<=p)var
au=[0,0,V];else{var
Y=F.safeGet(p);if(49<=Y)if(58<=Y)var
ao=0;else
var
au=[0,e6(aL(F,p,(F.getLen()-p|0)-1|0)),V],ao=1;else{if(45===Y){var
V=1,p=p+1|0;continue}var
ao=0}if(!ao){var
p=p+1|0;continue}}var
_=au;break}}catch(f){f=t(f);if(f[1]!==W)throw f;var
_=es(F,0,ab)}var
L=_[1],y=w.getLen(),a2=_[2],M=0,a3=32;if(L===y)if(0===M)var
$=w,ap=1;else
var
ap=0;else
var
ap=0;if(!ap)if(L<=y)var
$=aL(w,M,y);else{var
Z=aK(L,a3);if(a2)aM(w,M,Z,0,y);else
aM(w,M,Z,L-y|0,y);var
$=Z}var
aN=$}return m(s(f,e),aN,a+1|0);case
67:case
99:var
o=j(f,e);if(99===l)var
aG=aK(1,o);else{if(39===o)var
q=gf;else
if(92===o)var
q=gg;else{if(14<=o)var
A=0;else
switch(o){case
8:var
q=gh,A=1;break;case
9:var
q=gi,A=1;break;case
10:var
q=gj,A=1;break;case
13:var
q=gk,A=1;break;default:var
A=0}if(!A)if(bB(o)){var
aq=Q(1);aq.safeSet(0,o);var
q=aq}else{var
B=Q(4);B.safeSet(0,92);B.safeSet(1,48+(o/n|0)|0);B.safeSet(2,48+((o/10|0)%10|0)|0);B.safeSet(3,48+(o%10|0)|0);var
q=B}}var
aG=g(gL,g(q,gK))}return m(s(f,e),aG,a+1|0);case
66:case
98:var
a6=a+1|0,a7=j(f,e)?f_:f$;return m(s(f,e),a7,a6);case
40:case
az:var
R=j(f,e),aE=D(eu(l),h,a+1|0);if(az===l){var
N=bk(R.getLen()),aw=function(a,b){ak(N,b);return a+1|0};ev(R,function(a,b,c){if(a)bm(N,gC);else
ak(N,37);return aw(b,c)},aw);var
a4=bl(N);return m(s(f,e),a4,aE)}var
aF=s(f,e),bo=ep(ew(R),aF);return aT(function(a){return z(bo,aE)},aF,R,aU);case
33:return z(e,a+1|0);case
41:return m(e,gI,a+1|0);case
44:return m(e,gJ,a+1|0);case
70:var
ad=j(f,e);if(0===c)var
aH=gM;else{var
aa=X(h,k,a,c);if(70===l)aa.safeSet(aa.getLen()-1|0,aB);var
aH=aa}var
aC=on(ad);if(3===aC)var
af=ad<0?gF:gG;else
if(4<=aC)var
af=gH;else{var
P=e5(aH,ad),O=0,a5=P.getLen();for(;;){if(a5<=O)var
aA=g(P,gE);else{var
E=P.safeGet(O)-46|0,bq=E<0||23<E?55===E?1:0:(E-1|0)<0||21<(E-1|0)?1:0;if(!bq){var
O=O+1|0;continue}var
aA=P}var
af=aA;break}}return m(s(f,e),af,a+1|0);case
91:return al(h,a,l);case
97:var
aP=j(f,e),aQ=eq(ey(f,e)),aR=j(0,aQ),bh=a+1|0,bi=s(f,aQ);if(aV)aj(D(aP,0,aR));else
D(aP,G,aR);return z(bi,bh);case
ah:return al(h,a,l);case
at:var
aS=j(f,e),bj=a+1|0,bn=s(f,e);if(aV)aj(C(aS,0));else
C(aS,G);return z(bn,bj)}return al(h,a,l)}},d=k+1|0,e=0;return ex(h,function(a,b){return aD(a,i,e,b)},d)}ak(G,c);var
k=k+1|0;continue}}function
m(a,b,c){aj(b);return z(a,c)}return z(b,0)}var
d=bn(0);function
j(a,b){return aT(e,d,a,b)}var
c=ew(h);if(c<0||6<c){var
k=function(g,b){if(c<=g){var
l=w(c,0),m=function(a,b){return i(l,(c-a|0)-1|0,b)},d=0,a=b;for(;;){if(a){var
e=a[2],f=a[1];if(e){m(d,f);var
d=d+1|0,a=e;continue}m(d,f)}return j(h,l)}}return function(a){return k(g+1|0,[0,a,b])}};return k(0,0)}switch(c){case
1:return function(a){var
b=w(1,0);i(b,0,a);return j(h,b)};case
2:return function(a,b){var
c=w(2,0);i(c,0,a);i(c,1,b);return j(h,c)};case
3:return function(a,b,c){var
d=w(3,0);i(d,0,a);i(d,1,b);i(d,2,c);return j(h,d)};case
4:return function(a,b,c,d){var
e=w(4,0);i(e,0,a);i(e,1,b);i(e,2,c);i(e,3,d);return j(h,e)};case
5:return function(a,b,c,d,e){var
f=w(5,0);i(f,0,a);i(f,1,b);i(f,2,c);i(f,3,d);i(f,4,e);return j(h,f)};case
6:return function(a,b,c,d,e,f){var
g=w(6,0);i(g,0,a);i(g,1,b);i(g,2,c);i(g,3,d);i(g,4,e);i(g,5,f);return j(h,g)};default:return j(h,[0])}}var
ez=[0,0];function
bo(a){ez[1]=[0,a,ez[1]];return 0}function
eB(a,b){var
k=0===b.length-1?[0,0]:b,f=k.length-1,n=0;if(!0){var
d=n;for(;;){i(a[1],d,d);var
t=d+1|0;if(54!==d){var
d=t;continue}break}}var
h=[0,gP],o=0,p=55,q=ox(55,f)?p:f,l=54+q|0;if(!(l<0)){var
c=o;for(;;){var
m=c%55|0,r=h[1],j=g(r,z(u(k,a2(c,f))));h[1]=oT(j,0,j.getLen());var
e=h[1];i(a[1],m,(u(a[1],m)^(((e.safeGet(0)+(e.safeGet(1)<<8)|0)+(e.safeGet(2)<<16)|0)+(e.safeGet(3)<<24)|0))&a6);var
s=c+1|0;if(l!==c){var
c=s;continue}break}}a[2]=0;return 0}function
bp(a){a[2]=(a[2]+1|0)%55|0;var
b=u(a[1],a[2]),c=(u(a[1],(a[2]+24|0)%55|0)+(b^b>>>25&31)|0)&a6;i(a[1],a[2],c);return c}32===bi;var
bq=[0,gQ.slice(),0];function
br(a){var
b=bp(bq);return(b/fN+bp(bq))/fN*a}try{var
n8=e7(n7),bs=n8}catch(f){f=t(f);if(f[1]!==v)throw f;try{var
n6=e7(n5),eC=n6}catch(f){f=t(f);if(f[1]!==v)throw f;var
eC=gR}var
bs=eC}var
em=bs.getLen(),gS=82,en=0;if(0<=0)if(em<en)var
a3=0;else
try{var
aN=en;for(;;){if(em<=aN)throw[0,v];if(bs.safeGet(aN)!==gS){var
aN=aN+1|0;continue}var
go=1,bt=go,a3=1;break}}catch(f){f=t(f);if(f[1]!==v)throw f;var
bt=0,a3=1}else
var
a3=0;if(!a3)var
bt=ad(gn);var
M=[fA,function(a){var
b=[0,w(55,0),0];eB(b,e8(0));return b}];function
am(a,b){var
i=a?a[1]:bt,c=16;for(;;){if(!(b<=c))if(!(bj<(c*2|0))){var
c=c*2|0;continue}if(i){var
f=o2(M);if(af===f)var
d=M[1];else
if(fA===f){var
h=M[0+1];M[0+1]=gr;try{var
e=C(h,0);M[0+1]=e;o1(M,af)}catch(f){f=t(f);M[0+1]=function(a){throw f};throw f}var
d=e}else
var
d=M;var
g=bp(d)}else
var
g=0;return[0,0,w(c,0),g,c]}}function
eD(l,b){var
d=b[2],e=d.length-1,f=e*2|0,g=f<bj?1:0;if(g){var
c=w(f,0);b[2]=c;var
h=function(a){if(a){var
d=a[1],f=a[2];h(a[3]);var
e=D(l,b,d);return i(c,e,[0,d,f,u(c,e)])}return 0},j=e-1|0,m=0;if(!(j<0)){var
a=m;for(;;){h(u(d,a));var
n=a+1|0;if(j!==a){var
a=n;continue}break}}var
k=0}else
var
k=g;return k}function
an(a,b){return 3<=a.length-1?oy(10,n,a[3],b)&(a[2].length-1-1|0):a2(oz(10,n,b),a[2].length-1)}function
f(a,b,c){var
d=an(a,b);i(a[2],d,[0,b,c,u(a[2],d)]);a[1]=a[1]+1|0;var
e=a[2].length-1<<1<a[1]?1:0;return e?eD(an,a):e}function
eE(a,b){var
i=an(a,b),d=u(a[2],i);if(d){var
e=d[3],j=d[2];if(0===$(b,d[1]))return j;if(e){var
f=e[3],k=e[2];if(0===$(b,e[1]))return k;if(f){var
l=f[3],m=f[2];if(0===$(b,f[1]))return m;var
c=l;for(;;){if(c){var
g=c[3],h=c[2];if(0===$(b,c[1]))return h;var
c=g;continue}throw[0,v]}}throw[0,v]}throw[0,v]}throw[0,v]}function
e(a,b,c){function
e(a){if(a){var
d=a[3],f=a[1],g=a[2];return 0===$(f,b)?[0,b,c,d]:[0,f,g,e(d)]}throw[0,v]}var
d=an(a,b),g=u(a[2],d);try{var
f=e(g),j=i(a[2],d,f)}catch(f){f=t(f);if(f[1]===v){i(a[2],d,[0,b,c,g]);a[1]=a[1]+1|0;var
h=a[2].length-1<<1<a[1]?1:0;return h?eD(an,a):h}throw f}return j}function
eF(a,b){return e4(a,b[0+1])}var
eG=[0,gT];eF(gW,[0,eG,0,gV,gU]);bo(function(a){if(a[1]===eG){var
c=a[2],d=a[4],e=a[3];if(typeof
c==="number")switch(c){case
1:var
b=gZ;break;case
2:var
b=g0;break;case
3:var
b=g1;break;case
4:var
b=g2;break;case
5:var
b=g3;break;case
6:var
b=g4;break;case
7:var
b=g5;break;case
8:var
b=g6;break;case
9:var
b=g7;break;case
10:var
b=g8;break;case
11:var
b=g9;break;case
12:var
b=g_;break;case
13:var
b=g$;break;case
14:var
b=ha;break;case
15:var
b=hb;break;case
16:var
b=hc;break;case
17:var
b=hd;break;case
18:var
b=he;break;case
19:var
b=hf;break;case
20:var
b=hg;break;case
21:var
b=hh;break;case
22:var
b=hi;break;case
23:var
b=hj;break;case
24:var
b=hk;break;case
25:var
b=hl;break;case
26:var
b=hm;break;case
27:var
b=hn;break;case
28:var
b=ho;break;case
29:var
b=hp;break;case
30:var
b=hq;break;case
31:var
b=hr;break;case
32:var
b=hs;break;case
33:var
b=ht;break;case
34:var
b=hu;break;case
35:var
b=hv;break;case
36:var
b=hw;break;case
37:var
b=hx;break;case
38:var
b=hy;break;case
39:var
b=hz;break;case
40:var
b=hA;break;case
41:var
b=hB;break;case
42:var
b=hC;break;case
43:var
b=hD;break;case
44:var
b=hE;break;case
45:var
b=hF;break;case
46:var
b=hG;break;case
47:var
b=hH;break;case
48:var
b=hI;break;case
49:var
b=hJ;break;case
50:var
b=hK;break;case
51:var
b=hL;break;case
52:var
b=hM;break;case
53:var
b=hN;break;case
54:var
b=hO;break;case
55:var
b=hP;break;case
56:var
b=hQ;break;case
57:var
b=hR;break;case
58:var
b=hS;break;case
59:var
b=hT;break;case
60:var
b=hU;break;case
61:var
b=hV;break;case
62:var
b=hW;break;case
63:var
b=hX;break;case
64:var
b=hY;break;case
65:var
b=hZ;break;case
66:var
b=h0;break;case
67:var
b=h1;break;default:var
b=gX}else
var
f=c[1],b=C(L(h2),f);return[0,m(L(gY),b,e,d)]}return 0});a4(h3);a4(h4);try{a4(n4)}catch(f){f=t(f);if(f[1]!==W)throw f}try{a4(n3)}catch(f){f=t(f);if(f[1]!==W)throw f}am(0,7);var
A=U,aP=null,aQ=undefined,N=true,O=RegExp,eH=[0,h6];eF(h7,[0,eH,{}]);var
h5=Array;bo(function(a){return a[1]===eH?[0,new
F(a[2].toString())]:0});bo(function(a){return a
instanceof
h5?0:[0,new
F(a.toString())]});function
P(d){return e9(function(a){if(a){var
e=C(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=C(d,c);if(!(b|0))c.returnValue=b;return b})}var
h8="2d";function
eI(a,b){return a.createElement(b.toString())}function
eJ(a){return eI(a,h9)}var
h$=[0,h_];A.HTMLElement===aQ;function
aR(a){return new
O(R(a),a7)}function
bu(a,b,c){a.lastIndex=c;var
d=a.exec(R(b)),e=d==aP?aP:d;return e==aP?0:[0,e]}function
p(a,b){var
c=a[b],d=c===aQ?aQ:oP(c);return d===aQ?0:[0,d]}new
O("[$]",a7);aR(ib);function
eK(a){switch(a[0]){case
1:var
e=a[1],h=e[3],i=e[2],j=e[1];return m(L(mR),j,i,h);case
2:var
f=a[1],k=f[3],l=f[2],o=f[1];return m(L(mS),o,l,k);case
3:var
b=a[1],p=b[4],q=b[3],r=b[2],s=b[1];return bC(L(mT),s,r,q,p);case
4:var
c=a[1],t=c[4],u=c[3],v=c[2],w=c[1];return bC(L(mU),w,v,u,t);case
5:var
g=a[1],x=g[3],y=g[2],z=g[1];return m(L(mV),z,y,x);case
6:var
d=a[1],A=d[4],B=d[3],C=d[2],D=d[1];return bC(L(mW),D,C,B,A);default:switch(a[1]){case
1:return id;case
2:return ie;case
3:return ig;case
4:return ih;case
5:return ii;case
6:return ij;case
7:return ik;case
8:return il;case
9:return im;case
10:return io;case
11:return ip;case
12:return iq;case
13:return ir;case
14:return is;case
15:return it;case
16:return iu;case
17:return iv;case
18:return iw;case
19:return ix;case
20:return iy;case
21:return iz;case
22:return iA;case
23:return iB;case
24:return iC;case
25:return iD;case
26:return iE;case
27:return iF;case
28:return iG;case
29:return iH;case
30:return iI;case
31:return iJ;case
32:return iK;case
33:return iL;case
34:return iM;case
35:return iN;case
36:return iO;case
37:return iP;case
38:return iQ;case
39:return iR;case
40:return iS;case
41:return iT;case
42:return iU;case
43:return iV;case
44:return iW;case
45:return iX;case
46:return iY;case
47:return iZ;case
48:return i0;case
49:return i1;case
50:return i2;case
51:return i3;case
52:return i4;case
53:return i5;case
54:return i6;case
55:return i7;case
56:return i8;case
57:return i9;case
58:return i_;case
59:return i$;case
60:return ja;case
61:return jb;case
62:return jc;case
63:return jd;case
64:return je;case
65:return jf;case
66:return jg;case
67:return jh;case
68:return ji;case
69:return jj;case
70:return jk;case
71:return jl;case
72:return jm;case
73:return jn;case
74:return jo;case
75:return jp;case
76:return jq;case
77:return jr;case
78:return js;case
79:return jt;case
80:return ju;case
81:return jv;case
82:return jw;case
83:return jx;case
84:return jy;case
85:return jz;case
86:return jA;case
87:return jB;case
88:return jC;case
89:return jD;case
90:return jE;case
91:return jF;case
92:return jG;case
93:return jH;case
94:return jI;case
95:return jJ;case
96:return jK;case
97:return jL;case
98:return jM;case
99:return jN;case
n:return jO;case
ba:return jP;case
av:return jQ;case
aB:return jR;case
fv:return jS;case
K:return jT;case
fy:return jU;case
fm:return jV;case
a9:return jW;case
fQ:return jX;case
S:return jY;case
ae:return jZ;case
fE:return j0;case
fM:return j1;case
ah:return j2;case
ab:return j3;case
at:return j4;case
ax:return j5;case
fI:return j6;case
fu:return j7;case
ay:return j8;case
fn:return j9;case
c$:return j_;case
az:return j$;case
c3:return ka;case
au:return kb;case
dr:return kc;case
ct:return kd;case
d6:return ke;case
fG:return kf;case
fx:return kg;case
fl:return kh;case
fb:return ki;case
fw:return kj;case
e$:return kk;case
fq:return kl;case
fp:return km;case
e_:return kn;case
fh:return ko;case
fk:return kp;case
fO:return kq;case
fS:return kr;case
fj:return ks;case
dK:return kt;case
fc:return ku;case
fD:return kv;case
fe:return kw;default:return ic}}}function
aS(a){var
f=new
O(R(mX)),h=new
O(R(mY)),i=new
O(R(mZ)),j=new
O(R(m0)),k=new
O(R(m1)),l=new
O(R(m2));if(!(f.test(a)|0))if(!(i.test(a)|0))if(!(h.test(a)|0))if(!(j.test(a)|0))if(!(k.test(a)|0))if(!(l.test(a)|0)){var
b=m3,m=new
F(a);for(;;){if(b){var
e=b[2],c=0===$(b[1],m)?1:0;if(!c){var
b=e;continue}var
d=c}else
var
d=0;if(d)return a;throw[0,y,g(new
F(a),m4)]}}return a}function
aT(a){var
c=new
F(a);try{if(b(c,kx))if(b(c,ky))if(b(c,kz))if(b(c,kA))if(b(c,kB))if(b(c,kC))if(b(c,kD))if(b(c,kE))if(b(c,kF))if(b(c,kG))if(b(c,kH))if(b(c,kI))if(b(c,kJ))if(b(c,kK))if(b(c,kL))if(b(c,kM))if(b(c,kN))if(b(c,kO))if(b(c,kP))if(b(c,kQ))if(b(c,kR))if(b(c,kS))if(b(c,kT))if(b(c,kU))if(b(c,kV))if(b(c,kW))if(b(c,kX))if(b(c,kY))if(b(c,kZ))if(b(c,k0))if(b(c,k1))if(b(c,k2))if(b(c,k3))if(b(c,k4))if(b(c,k5))if(b(c,k6))if(b(c,k7))if(b(c,k8))if(b(c,k9))if(b(c,k_))if(b(c,k$))if(b(c,la))if(b(c,lb))if(b(c,lc))if(b(c,ld))if(b(c,le))if(b(c,lf))if(b(c,lg))if(b(c,lh))if(b(c,li))if(b(c,lj))if(b(c,lk))if(b(c,ll))if(b(c,lm))if(b(c,ln))if(b(c,lo))if(b(c,lp))if(b(c,lq))if(b(c,lr))if(b(c,ls))if(b(c,lt))if(b(c,lu))if(b(c,lv))if(b(c,lw))if(b(c,lx))if(b(c,ly))if(b(c,lz))if(b(c,lA))if(b(c,lB))if(b(c,lC))if(b(c,lD))if(b(c,lE))if(b(c,lF))if(b(c,lG))if(b(c,lH))if(b(c,lI))if(b(c,lJ))if(b(c,lK))if(b(c,lL))if(b(c,lM))if(b(c,lN))if(b(c,lO))if(b(c,lP))if(b(c,lQ))if(b(c,lR))if(b(c,lS))if(b(c,lT))if(b(c,lU))if(b(c,lV))if(b(c,lW))if(b(c,lX))if(b(c,lY))if(b(c,lZ))if(b(c,l0))if(b(c,l1))if(b(c,l2))if(b(c,l3))if(b(c,l4))if(b(c,l5))if(b(c,l6))if(b(c,l7))if(b(c,l8))if(b(c,l9))if(b(c,l_))if(b(c,l$))if(b(c,ma))if(b(c,mb))if(b(c,mc))if(b(c,md))if(b(c,me))if(b(c,mf))if(b(c,mg))if(b(c,mh))if(b(c,mi))if(b(c,mj))if(b(c,mk))if(b(c,ml))if(b(c,mm))if(b(c,mn))if(b(c,mo))if(b(c,mp))if(b(c,mq))if(b(c,mr))if(b(c,ms))if(b(c,mt))if(b(c,mu))if(b(c,mv))if(b(c,mw))if(b(c,mx))if(b(c,my))if(b(c,mz))if(b(c,mA))if(b(c,mB))if(b(c,mC))if(b(c,mD))if(b(c,mE))if(b(c,mF))if(b(c,mG))if(b(c,mH))if(b(c,mI))if(b(c,mJ))if(b(c,mK))if(b(c,mL))if(b(c,mM))if(b(c,mN))if(b(c,mO)){if(b(c,mP))throw[0,y,g(c,mQ)];var
d=fe}else
var
d=fD;else
var
d=fc;else
var
d=dK;else
var
d=fj;else
var
d=fS;else
var
d=fO;else
var
d=fk;else
var
d=fh;else
var
d=e_;else
var
d=fp;else
var
d=fq;else
var
d=e$;else
var
d=fw;else
var
d=fb;else
var
d=fl;else
var
d=fx;else
var
d=fG;else
var
d=d6;else
var
d=ct;else
var
d=dr;else
var
d=au;else
var
d=c3;else
var
d=az;else
var
d=c$;else
var
d=fn;else
var
d=ay;else
var
d=fu;else
var
d=fI;else
var
d=ax;else
var
d=at;else
var
d=ab;else
var
d=ah;else
var
d=fM;else
var
d=fE;else
var
d=ae;else
var
d=S;else
var
d=fQ;else
var
d=a9;else
var
d=fm;else
var
d=fy;else
var
d=K;else
var
d=fv;else
var
d=aB;else
var
d=av;else
var
d=ba;else
var
d=n;else
var
d=99;else
var
d=98;else
var
d=97;else
var
d=96;else
var
d=95;else
var
d=94;else
var
d=93;else
var
d=92;else
var
d=91;else
var
d=90;else
var
d=89;else
var
d=88;else
var
d=87;else
var
d=86;else
var
d=85;else
var
d=84;else
var
d=83;else
var
d=82;else
var
d=81;else
var
d=80;else
var
d=79;else
var
d=78;else
var
d=77;else
var
d=76;else
var
d=75;else
var
d=74;else
var
d=73;else
var
d=72;else
var
d=71;else
var
d=70;else
var
d=69;else
var
d=68;else
var
d=67;else
var
d=66;else
var
d=65;else
var
d=64;else
var
d=63;else
var
d=62;else
var
d=61;else
var
d=60;else
var
d=59;else
var
d=58;else
var
d=57;else
var
d=54;else
var
d=56;else
var
d=55;else
var
d=53;else
var
d=52;else
var
d=51;else
var
d=50;else
var
d=49;else
var
d=48;else
var
d=47;else
var
d=46;else
var
d=45;else
var
d=44;else
var
d=43;else
var
d=42;else
var
d=41;else
var
d=40;else
var
d=39;else
var
d=38;else
var
d=37;else
var
d=36;else
var
d=35;else
var
d=34;else
var
d=33;else
var
d=32;else
var
d=31;else
var
d=30;else
var
d=29;else
var
d=28;else
var
d=27;else
var
d=26;else
var
d=25;else
var
d=24;else
var
d=23;else
var
d=22;else
var
d=21;else
var
d=20;else
var
d=19;else
var
d=18;else
var
d=17;else
var
d=16;else
var
d=15;else
var
d=14;else
var
d=13;else
var
d=12;else
var
d=11;else
var
d=10;else
var
d=9;else
var
d=8;else
var
d=7;else
var
d=6;else
var
d=5;else
var
d=4;else
var
d=3;else
var
d=2;else
var
d=1;else
var
d=0;var
f=[0,d]}catch(f){f=t(f);if(f[1]===y){var
h=function(a){throw[0,y,g(c,m5)]},N=aR(m6),O=aR(m7),P=aR(m8),e=function(a){if(a){var
b=a[1];try{var
d=e6(b)}catch(f){f=t(f);if(f[1]===y)var
c=f[2];else{if(f[1]!==W)throw f;var
c=f[2]}throw[0,y,g(m_,g(b,g(m9,c)))]}return d}return h(0)},l=function(a){try{var
c=ot(a)}catch(f){f=t(f);if(f[1]===y)var
b=f[2];else{if(f[1]!==W)throw f;var
b=f[2]}throw[0,y,g(na,g(a,g(m$,b)))]}return c},r=bu(N,c,0);if(r){var
i=r[1],s=p(i,2),u=p(i,3),v=p(i,4),m=p(i,5),w=p(i,1);if(w){var
x=w[1];if(!b(x,nb)){if(m)return h(0);var
U=e(v),V=e(u);return[1,[0,e(s),V,U]]}if(!b(x,nc)){if(m){var
Q=l(m[1]),R=e(v),T=e(u);return[3,[0,e(s),T,R,Q]]}return h(0)}}return h(0)}var
z=bu(O,c,0);if(z){var
j=z[1],A=p(j,2),B=p(j,3),C=p(j,4),o=p(j,5),D=p(j,1);if(D){var
E=D[1];if(!b(E,nd)){if(o)return h(0);var
_=e(C),$=e(B);return[2,[0,e(A),$,_]]}if(!b(E,ne)){if(o){var
X=l(o[1]),Y=e(C),Z=e(B);return[4,[0,e(A),Z,Y,X]]}return h(0)}}return h(0)}var
G=bu(P,c,0);if(G){var
k=G[1],H=p(k,2),I=p(k,3),J=p(k,4),q=p(k,5),L=p(k,1);if(L){var
M=L[1];if(!b(M,nf)){if(q)return h(0);var
af=e(J),ag=e(I);return[5,[0,e(H),ag,af]]}if(!b(M,ng)){if(q){var
aa=l(q[1]),ac=e(J),ad=e(I);return[6,[0,e(H),ad,ac,aa]]}return h(0)}}return h(0)}return h(0)}throw f}return f}function
B(a,b,c,d){return eK([3,[0,a,b,c,d]]).toString()}var
ap=B(h,h,h,1);B(0,0,0,1);B(h,0,0,1);B(0,0,h,1);B(0,h,0,1);B(h,0,h,1);B(0,h,h,1);B(h,h,0,1);B(h,192,203,1);B(h,h,h,0);function
Y(a){return[0,a]}function
aq(a){return a[1]}function
eL(a,b){return[0,a,0,b,0]}var
c=am(0,ae);function
eM(a){var
b=a-9|0;if(!(b<0||81<b))switch(b){case
0:return 58;case
18:return 36;case
23:return 57;case
28:return 71;case
29:return 73;case
30:return 72;case
31:return 74;case
56:return 0;case
57:return 1;case
58:return 2;case
59:return 3;case
60:return 4;case
61:return 5;case
62:return 6;case
63:return 7;case
64:return 8;case
65:return 9;case
66:return 10;case
67:return 11;case
68:return 12;case
69:return 13;case
70:return 14;case
71:return 15;case
72:return 16;case
73:return 17;case
74:return 18;case
75:return 19;case
76:return 20;case
77:return 21;case
78:return 22;case
79:return 23;case
80:return 24;case
81:return 25}throw[0,eA,nh]}function
ar(a){return 1===eE(c,a)?1:0}function
eN(a,b,c){return f(a,b,c)}function
as(a){var
e=aT(aS(a)),f=3===e[0]?e[1][4]:0,d=aT(aS(a)),g=3===d[0]?d[1][3]:0,c=aT(aS(a)),h=3===c[0]?c[1][2]:0,b=aT(aS(a)),i=3===b[0]?b[1][1]:0;return eK([3,[0,i,h,g,f]]).toString()}function
Z(h,b,c,d,e,j,g){var
k=h[3].globalAlpha;h[3].globalAlpha=g;try{var
f=aq(b),a=eE(h[6],f);h[3].drawImage(a[1],c,d,e,j);var
l=h[3].globalAlpha=k}catch(f){var
i=eJ(h[1]);i.src=aq(b).toString();return i.onload=P(function(a){var
f=aq(b);eN(h[6],f,[0,i]);h[3].drawImage(i,c,d,e,j);h[3].globalAlpha=k;return N})}return l}function
eO(a,b,c,d,e,f,g){var
k=b[2],n=b[1];if(0<=k){var
h=n,i=k;for(;;){if(h){var
l=h[2],m=h[1];if(0!==i){var
h=l,i=i-1|0;continue}var
j=m}else
var
j=aJ(gc);break}}else
var
j=ad(gd);Z(a,j,c,d,e,f,g);b[4]=b[4]+1|0;var
o=bf(b[1]);b[2]=a2(or(b[4],b[3]),o);return 0}var
H=am(0,30);function
eP(a){f(H,0,0);f(H,1,0);return f(H,2,0)}function
eQ(a){var
b=0!==a?1:0;if(b){if(1!==a)return 1;var
c=2}else
var
c=b;return c}var
aU=am(0,10);function
aY(a){var
c=0,b=a;for(;;){if(0===b)return c;var
c=[0,b,c],b=b-1|0;continue}}function
a(a,b){return C(b,a)}var
aZ=[0,0],eY=[0,0],_=[0,dk,2e3],ns=[0,[0,0,50,280,0,0],0],nt=320,nu=80,eW=64,eX=64;function
nv(a){return r(Y,a)}function
nw(a){return g(ny,g(z(a),nx))}function
nz(a){return r(nw,a)}var
bx=a(a(a(aY(12),nz),nv),ei);function
nA(a){return r(Y,a)}function
nB(a){return g(nD,g(z(a),nC))}function
nE(a){return r(nB,a)}var
by=a(a(a(aY(17),nE),nA),ei),bz=Y(nF),nH=Y(nG);function
nI(a){return eL(a,5)}function
nJ(a){return r(Y,a)}function
nK(a){return g(nM,g(z(a),nL))}function
nN(a){return r(nK,a)}var
nO=a(a(a(aY(25),nN),nJ),nI);function
nP(a){return eL(a,n)}function
nQ(a){return r(Y,a)}function
nR(a){return g(nT,g(z(a),nS))}function
nU(a){return r(nR,a)}var
nV=a(a(a(aY(2),nU),nQ),nP),nX=Y(nW),nY=[0,bz,bg(r(gb,[0,bx,[0,by,0]]))];function
eZ(a,b,c){var
d=a[1];return[0,[0,d[1],b,c,d[4],d[5]],a[2]]}function
e0(c,b){function
d(a){return[0,c,536-30,a,b]}return a(br(236)+n,d)}var
aV=[0,no];function
eT(a){if(a)return a[1][1];throw[0,aV,a]}function
q(a,b){try{var
d=eT(a);try{var
e=$(d,eT(b)),c=e}catch(f){f=t(f);if(f[1]!==aV)throw f;var
c=1}}catch(f){f=t(f);if(f[1]===aV)return-1;throw f}return c}function
aW(a){if(a)return a[1][1];throw[0,aV,a]}function
aX(a){if(a){var
b=a[1];return b[2]?b[2]:a}return a}function
eU(a,b,c,d,e){if(ar(36)){var
J=a[7];if(J)A.clearInterval(J[1]);else
a[1].body.removeChild(a[2]);var
o=[0,b,0]}else{var
Y=ar(1);if(Y)var
X=0<_[1]?1:0,am=X?(_[1]=_[1]-1|0,1):X,N=am;else
var
N=Y;if(N)var
o=[0,aW(aX(c)),1];else{var
aa=0;if(ar(74))if(b[1][3]<nt)if(b[1][4])var
s=0;else
var
m=eZ(b,b[1][2],b[1][3]+2),s=1;else
var
s=0;else
var
s=0;if(!s){if(ar(73))if(n<b[1][3])if(b[1][4])var
t=0;else
var
m=eZ(b,b[1][2],b[1][3]-2),t=1;else
var
t=0;else
var
t=0;if(!t){if(ar(57))if(b[1][4])var
D=0;else{pe(bw);f9(bw,5/n);f8(bw);aZ[1]=1;var
C=b[1],m=[0,[0,0,C[2],C[3],1,C[5]],b[2]],D=1}else
var
D=0;if(!D)var
m=b}}var
o=[0,m,aa]}}if(0===o[2]){var
O=o[1],f=O[1],U=f[1],ab=0,ah=f[4]?by.length-1:bx.length-1,aj=0===(aZ[1]%10|0)?U+1|0:U,l=a2(aj,ah);if(f[4])if(0===l)if(10<aZ[1])var
g=[0,l,f[2],f[3],0,f[5]],u=1;else
var
u=0;else
var
u=0;else
var
u=0;if(!u)var
g=[0,l,f[2],f[3],f[4],f[5]];aZ[1]++;eY[1]++;var
ak=O[2],V=r(function(a){return 2<=a[1]?[0,a[1],a[2],a[3],a[4]-1|0]:[0,a[1],a[2]-1,a[3],a[4]]},ak),W=br(n)<0.2?[0,e0(1,-1),V]:V,al=br(n)<1?[0,e0(0,-1),W]:W,ae=[0,g[2],g[3]+10,38,60],P=function(a,b){var
d=b[2],e=b[1],f=a[2],g=a[1],h=g<e+b[3]?1:0;if(h){var
i=e<g+a[3]?1:0;if(i)var
j=f<d+b[4]?1:0,c=j?d<f+a[4]?1:0:j;else
var
c=i}else
var
c=h;return c},p=[0,g[5]],v=0,h=al;for(;;){if(h){var
F=h[2],i=h[1],B=i[1];if(2<=B)var
w=0<i[4]?1:0;else
if(P(ae,[0,i[2],i[3],eW,eX])){if(0===B)p[1]=0;else
if(1===B){var
Q=_[1]+dk|0,R=_[2],af=oR(R,Q)?R:Q;_[1]=af}var
w=0}else
var
w=1;if(w){var
v=[0,i,v],h=F;continue}var
h=F;continue}var
G=ek(v);if(g[4])if(9<l)var
ag=[0,g[2]+68-10,g[3],S,nu],T=r(function(a){return 0===a[1]?P(ag,[0,a[2],a[3],eW,eX])?(p[1]=p[1]+1|0,[0,2,a[2],a[3],n]):a:a},G),E=1;else
var
E=0;else
var
E=0;if(!E)var
T=G;var
k=[0,[0,[0,l,g[2],g[3],g[4],p[1]],T],ab];break}}else
var
k=[0,aW(aX(c)),1];if(0===k[2]){if(1){var
K=[0,[0,k[1],c,0]];if(c){var
L=c[1],y=[0,K,L[3]],x=function(a,b){if(2===a){if(b){var
o=b[2];if(o){var
i=o[1],j=b[1];return 0<q(j,i)?[0,i,[0,j,0]]:[0,j,[0,i,0]]}}}else
if(3===a)if(b){var
l=b[2];if(l){var
p=l[2];if(p){var
c=p[1],d=l[1],e=b[1];return 0<q(e,d)?0<q(e,c)?0<q(d,c)?[0,c,[0,d,[0,e,0]]]:[0,d,[0,c,[0,e,0]]]:[0,d,[0,e,[0,c,0]]]:0<q(d,c)?0<q(e,c)?[0,c,[0,e,[0,d,0]]]:[0,e,[0,c,[0,d,0]]]:[0,e,[0,d,[0,c,0]]]}}}var
k=a>>1,t=el(k,b),u=H(k,b),h=u,g=H(a-k|0,t),f=0;for(;;){if(h){if(g){var
m=g[1],n=h[1],r=g[2],s=h[2];if(0<q(n,m)){var
h=s,f=[0,n,f];continue}var
g=r,f=[0,m,f];continue}return ai(h,f)}return ai(g,f)}},H=function(a,b){if(2===a){if(b){var
o=b[2];if(o){var
i=o[1],j=b[1];return 0<q(j,i)?[0,j,[0,i,0]]:[0,i,[0,j,0]]}}}else
if(3===a)if(b){var
l=b[2];if(l){var
p=l[2];if(p){var
c=p[1],d=l[1],e=b[1];return 0<q(e,d)?0<q(d,c)?[0,e,[0,d,[0,c,0]]]:0<q(e,c)?[0,e,[0,c,[0,d,0]]]:[0,c,[0,e,[0,d,0]]]:0<q(e,c)?[0,d,[0,e,[0,c,0]]]:0<q(d,c)?[0,d,[0,c,[0,e,0]]]:[0,c,[0,d,[0,e,0]]]}}}var
k=a>>1,t=el(k,b),u=x(k,b),h=u,g=x(a-k|0,t),f=0;for(;;){if(h){if(g){var
m=g[1],n=h[1],r=g[2],s=h[2];if(0<q(n,m)){var
g=r,f=[0,m,f];continue}var
h=s,f=[0,n,f];continue}return ai(h,f)}return ai(g,f)}},I=bf(y),Z=2<=I?x(I,y):y,j=Z;for(;;){if(e<bf(j))if(j){var
j=j[2];continue}L[3]=j;break}}var
ac=bg(r(function(a){var
b=a?a[1][3]:a;return b},d));return[0,k[1],K,ac]}return[0,k[1],c,d]}if(c)var
z=c[1][2],$=z?z[1][3]:z,M=$;else
var
M=c;var
ad=aX(c);return[0,aW(aX(c)),ad,M]}function
eV(e,b,c){bh(function(a){try{aW(a);var
b=0}catch(f){return 0}return b},b);var
f=c[1],h=-(eY[1]%1800|0)|0,i=h+dc|0,j=fB<h?1:0,r=j?h<aw?1:0:j;if(r)Z(e,bz,h,0,dc,bI,1);var
k=fB<i?1:0,s=k?i<aw?1:0:k;if(s)Z(e,bz,i,0,dc,bI,1);Z(e,nH,0,bI,aw,dk,1);var
t=z(f[5]),o=e[3];o.fillStyle=as(ap);var
p=t.toString(),q=e[3];q.font=g(z(20),nj).toString();e[3].fillText(p,170,437+20);e[3][d(fL)]=1;var
m=e[3];m.strokeStyle=as(ap);e[3].strokeRect(fa,ft,n,8);e[3].strokeStyle=e[4];function
v(a){return a}var
w=a(_[1]/20|0,v);e[3][d(fL)]=1;var
l=e[3];l.fillStyle=as(ap);e[3].fillRect(fa,ft,w,8);e[3].fillStyle=e[4];if(f[4])Z(e,u(by,f[1]),f[2],f[3],180,80,1);else
Z(e,u(bx,f[1]),f[2],f[3],68,80,1);var
x=c[2];return bh(function(a){switch(a[1]){case
1:return Z(e,nX,a[2],a[3],64,64,1);case
2:return eO(e,nO,a[2],a[3],64,64,1);default:return eO(e,nV,a[2],a[3],64,64,1)}},x)}var
eR=A.document,ao=eI(eR,ia),nZ=60,e1=aw,e2=aw;if(1-(ao.getContext==aP?1:0)){var
bv=ao.getContext(h8);ao.width=e2|0;ao.height=e1|0;bv.fillStyle=as(ap);bv.fillRect(0,0,e2,e1);f(c,0,0);f(c,1,0);f(c,2,0);f(c,3,0);f(c,4,0);f(c,5,0);f(c,6,0);f(c,7,0);f(c,8,0);f(c,9,0);f(c,10,0);f(c,11,0);f(c,12,0);f(c,13,0);f(c,14,0);f(c,15,0);f(c,16,0);f(c,17,0);f(c,18,0);f(c,19,0);f(c,20,0);f(c,21,0);f(c,22,0);f(c,23,0);f(c,24,0);f(c,25,0);f(c,57,0);f(c,36,0);f(c,58,0);f(c,73,0);f(c,74,0);f(c,71,0);f(c,72,0);eP(0);eP(0);var
ni=am(0,10),l=[0,eR,ao,bv,as(ap),fi/nZ,ni,0,n0];pf(bA,1);f9(bA,10/n);f8(bA);eB(bq,e8(0));var
n1=1,n2=1,np=0,nq=1,nr=0;bh(function(c){var
b=eJ(l[1]);b.src=aq(c).toString();return b.onload=P(function(a){var
d=aq(c);eN(l[6],d,[0,b]);return N})},nY);l[1].title=l[8].toString();var
eS=[0,[0,ns,np,n2,nr,n1]];A.onload=P(function(a){l[1].body.appendChild(l[2]);var
b=l[5];A.setInterval(e9(function(a){A.onkeydown=P(function(a){switch(eM(a.keyCode)){case
0:e(c,0,1);break;case
1:e(c,1,1);break;case
2:e(c,2,1);break;case
3:e(c,3,1);break;case
4:e(c,4,1);break;case
5:e(c,5,1);break;case
6:e(c,6,1);break;case
7:e(c,7,1);break;case
8:e(c,8,1);break;case
9:e(c,9,1);break;case
10:e(c,10,1);break;case
11:e(c,11,1);break;case
12:e(c,12,1);break;case
13:e(c,13,1);break;case
14:e(c,14,1);break;case
15:e(c,15,1);break;case
16:e(c,16,1);break;case
17:e(c,17,1);break;case
18:e(c,18,1);break;case
19:e(c,19,1);break;case
20:e(c,20,1);break;case
21:e(c,21,1);break;case
22:e(c,22,1);break;case
23:e(c,23,1);break;case
24:e(c,24,1);break;case
25:e(c,25,1);break;case
36:e(c,36,1);break;case
57:e(c,57,1);break;case
58:e(c,58,1);break;case
71:e(c,71,1);break;case
72:e(c,72,1);break;case
73:e(c,73,1);break;case
74:e(c,74,1);break}return N});A.onkeyup=P(function(a){switch(eM(a.keyCode)){case
0:e(c,0,0);break;case
1:e(c,1,0);break;case
2:e(c,2,0);break;case
3:e(c,3,0);break;case
4:e(c,4,0);break;case
5:e(c,5,0);break;case
6:e(c,6,0);break;case
7:e(c,7,0);break;case
8:e(c,8,0);break;case
9:e(c,9,0);break;case
10:e(c,10,0);break;case
11:e(c,11,0);break;case
12:e(c,12,0);break;case
13:e(c,13,0);break;case
14:e(c,14,0);break;case
15:e(c,15,0);break;case
16:e(c,16,0);break;case
17:e(c,17,0);break;case
18:e(c,18,0);break;case
19:e(c,19,0);break;case
20:e(c,20,0);break;case
21:e(c,21,0);break;case
22:e(c,22,0);break;case
23:e(c,23,0);break;case
24:e(c,24,0);break;case
25:e(c,25,0);break;case
36:e(c,36,0);break;case
57:e(c,57,0);break;case
58:e(c,58,0);break;case
71:e(c,71,0);break;case
72:e(c,72,0);break;case
73:e(c,73,0);break;case
74:e(c,74,0);break}return N});A.onmousedown=P(function(a){switch(eQ(a.button)){case
0:e(H,0,1);break;case
1:e(H,1,1);break;case
2:e(H,2,1);break}return N});A.onmouseup=P(function(a){switch(eQ(a.button)){case
0:e(H,0,0);break;case
1:e(H,1,0);break;case
2:e(H,2,0);break}return N});A.onmousemove=P(function(a){e(aU,nk,a.screenX);e(aU,nl,a.screenY);e(aU,nm,a.clientX);e(aU,nn,a.clientY);return N});if(nq){l[2].width=l[2].width;l[3].fillStyle=l[4];l[3].fillRect(0,0,l[2].width,l[2].height)}var
b=eS[1],d=b[5],f=b[4],h=b[3],m=b[2],g=b[1];if(0===h){var
i=eU(l,g,m,f,d);eV(l,f,g);var
k=[0,i[1],i[2],h,i[3],d]}else{eV(l,f,g);var
j=eU(l,g,m,f,d),k=[0,j[1],j[2],h,j[3],d]}eS[1]=k;return 0}),b);return N});eh(0);return}throw[0,h$]}(this));
