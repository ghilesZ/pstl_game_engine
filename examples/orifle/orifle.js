// This program was compiled from OCaml by js_of_ocaml 2.00
(function(Z){"use strict";var
f0=104,dj="mediumspringgreen",aT=123,ex="black",ey="teal",bB=254,bx=108,f9='"',I=16777215,cD="darkgreen",dR="saddlebrown",di=65599,fJ="jsError",fZ=119,ak=115,ew="lightgrey",cC="mediumseagreen",dQ="palegreen",aj=120,dP="deeppink",ev="limegreen",fI=144,cB="lavender",fY="rgb",eu="salmon",cz="lightpink",cA="palevioletred",dg="blue",dh="lightgoldenrodyellow",aS=117,cy="chocolate",aR=150,es="sienna",et=128,fW=135,fX="rgba",df="linen",cx="darkslateblue",er="oldlace",fH="BACK",x="0",fV=136,dd="chartreuse",de=248,fU=" is not a valid color",dc="antiquewhite",dO=126,gl="fd ",fT=121,cw="hotpink",fG="EXIT",fS=107,cv="lightslategrey",fR=131,db="lightyellow",gk=141,cu="floralwhite",da="gainsboro",f7=145,f8=112,dN="x",eq="darkslategrey",c9="blanchedalmond",c_="cornsilk",c$="ivory",ep="darkviolet",ct="beige",fQ=3.5,bv="g",c8="skyblue",dL="cyan",dM="firebrick",cs="lightblue",au=1073741823,c7="fuchsia",O=105,c6="mediumturquoise",dK="darkturquoise",eo="khaki",ai=110,gj=-88,cq="springgreen",cr="whitesmoke",aQ=200,dJ="aquamarine",by="'",fF=132,bu="int_of_string",c5="darkgoldenrod",en="lightslategray",f6="x_r",dI="purple",c4="mediumvioletred",aW="e",fE="HELP",cp="gold",em="rosybrown",fP=139,ah="-",co="blueviolet",aw=-48,el="maroon",ek="lemonchiffon",c3=" : file already exists",gh=1600,gi=109,cn="midnightblue",dH="brown",ei="aqua",ej="slategrey",fO="y_r",dG="moccasin",bA=101,eh="lightgreen",cm="slategray",c2="tomato",dF="white",gg="index out of bounds",ee="darkorange",ef="indigo",eg="olive",ed="peachpuff",aO=125,fN=142,c1="navajowhite",dD="papayawhip",dE="slateblue",ec="lavenderblush",h=255,dC="dimgray",gf=140,cl="greenyellow",c0="turquoise",ag=250,eb="darkolivegreen",ck="dodgerblue",ci="darkmagenta",cj="lightcyan",cZ="goldenrod",at=292,cg="bisque",ch="paleturquoise",f5=246,ge=1073741824,aP=102,dB="palegoldenrod",ea="mediumslateblue",f4="Unix.Unix_error",d$="darkblue",gd=113,dA="darksalmon",d_="darkkhaki",dz=122,d9="globalAlpha",cf="darkred",dy="royalblue",l="",fD=134,d8=143,ce="mediumpurple",H=100,d7="gray",cd="darkgrey",d6="mediumaquamarine",d5="grey",cc="indianred",cY="honeydew",dw="darkgray",dx="dimgrey",aV=103,cb="lightseagreen",gc="): ",ca="silver",dv="powderblue",cX="lime",d4="olivedrab",cW=1e3,cV="peru",b$="plum",d2="crimson",d3="pink",aU=".",b_="darkseagreen",cU="cadetblue",bw="+",bz=65535,fM=138,cT="seashell",f3=106,d1="orange",b9="lightsalmon",cS="snow",du="f",dt="navy",d0=980,gb="color conversion error (",b8="ghostwhite",ds="green",dr=124,b7="sandybrown",cR=127,fL=-32,cQ="azure",f2=130,dZ="lawngreen",cP="deepskyblue",av=111,f1=133,dY="lightgray",N=" ",dV="aliceblue",dW="lightcoral",dX="wheat",b6="steelblue",cN="darkslategray",cO="magenta",cM="red",dp="darkorchid",dq="mistyrose",b5="thistle",ga=118,cK="cornflowerblue",cL="forestgreen",fK="nan",dU="yellow",fC=137,aN=116,f$=65520,dn="orchid",dT="lightsteelblue",cJ="lightskyblue",b4="violet",cI="burlywood",dm="tan",b3="mediumorchid",cH="darkcyan",b2="mediumblue",cF="mintcream",cG="/",dS="coral",ax=114,dl="orangered",G=146,cE="yellowgreen",dk="seagreen",f_=129,am=new
Object();function
gB(a,b){throw[0,a,b]}function
eE(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=Z.console;b&&b.error&&b.error(a)}var
f=[0];function
a1(a,b){if(!a)return l;if(a&1)return a1(a-1,b)+b;var
c=a1(a>>1,b);return c+c}function
n(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
gD(){gB(f[4],new
n(gg))}n.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){eE('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){eE('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=l,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=a1(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
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
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)gD();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&h);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&h;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)gD();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
J(a){this.string=a}J.prototype=new
n();function
eD(a,b){gB(a,new
J(b))}function
aZ(a){eD(f[4],a)}function
go(){aZ(gg)}function
oY(a,b){if(b<0||b>=a.length-1)go();return a[b+1]}function
oZ(a,b,c){if(b<0||b>=a.length-1)go();a[b+1]=c;return 0}function
gp(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
Y(c,b){if(c.fun)return Y(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return Y(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return Y(c,b.concat([a]))}}function
o0(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
pa(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
pl(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
ez(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
n)if(b
instanceof
n){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===bB)f=0;if(f===ag){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===bB)g=0;if(g===ag){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
de:var
d=pl(a[2],b[2]);if(d!=0)return d;break;case
251:aZ("equal: abstract value");case
h:var
d=pa(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
n||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
i=e.pop();b=e.pop();a=e.pop();if(i+1<a.length)e.push(a,b,i+1);a=a[i];b=b[i]}}function
o1(a,b){return ez(a,b,true)}function
gm(a){this.bytes=l;this.len=a}gm.prototype=new
n();function
gq(a){if(a<0)aZ("String.create");return new
gm(a)}function
gz(a){throw[0,a]}function
gC(){gz(f[6])}function
o3(a,b){if(b==0)gC();return a/b|0}function
o4(a,b,c,d){a.fill(b,c,d)}function
aY(a){eD(f[3],a)}function
o5(a){var
b;a=a.getFullBytes();b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,l);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;if(/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(a)){var
c=a.indexOf("p");c=c==-1?a.indexOf("P"):c;var
d=+a.substring(c+1);b=+a.substring(0,c);return b*Math.pow(2,d)}aY("float_of_string")}function
eC(a){a=a.toString();var
e=a.length;if(e>31)aZ("format_int: format too long");var
b={justify:bw,signstyle:ah,filler:N,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:du};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
ah:b.justify=ah;break;case
bw:case
N:b.signstyle=c;break;case
x:b.filler=x;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
aU:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
dN:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
aW:case
du:case
bv:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
eA(a,b){if(a.uppercase)b=b.toUpperCase();var
e=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=ah))e++;if(a.alternate){if(a.base==8)e+=1;if(a.base==16)e+=2}var
c=l;if(a.justify==bw&&a.filler==N)for(var
d=e;d<a.width;d++)c+=N;if(a.signedconv)if(a.sign<0)c+=ah;else
if(a.signstyle!=ah)c+=a.signstyle;if(a.alternate&&a.base==8)c+=x;if(a.alternate&&a.base==16)c+="0x";if(a.justify==bw&&a.filler==x)for(var
d=e;d<a.width;d++)c+=x;c+=b;if(a.justify==ah)for(var
d=e;d<a.width;d++)c+=N;return new
J(c)}function
o6(a,b){var
c,f=eC(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=fK;f.filler=N}else
if(!isFinite(b)){c="inf";f.filler=N}else
switch(f.conv){case
aW:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==aW)c=c.slice(0,d-1)+x+c.slice(d-1);break;case
du:c=b.toFixed(e);break;case
bv:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(aW),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==x)d--;if(c.charAt(d)==aU)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==aW)c=c.slice(0,d-1)+x+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==x)d--;if(c.charAt(d)==aU)d--;c=c.slice(0,d+1)}}break}return eA(f,c)}function
o7(a,b){if(a.toString()=="%d")return new
J(l+b);var
c=eC(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
d=b.toString(c.base);if(c.prec>=0){c.filler=N;var
e=c.prec-d.length;if(e>0)d=a1(e,x)+d}return eA(c,d)}function
o9(a,b){return+(ez(a,b,false)>=0)}function
gr(a){if(!isFinite(a)){if(isNaN(a))return[h,1,0,f$];return a>0?[h,0,0,32752]:[h,0,0,f$]}var
f=a>=0?0:32768;if(f)a=-a;var
b=Math.floor(Math.LOG2E*Math.log(a))+1023;if(b<=0){b=0;a/=Math.pow(2,-1026)}else{a/=Math.pow(2,b-1027);if(a<16){a*=2;b-=1}if(b==0)a/=2}var
d=Math.pow(2,24),c=a|0;a=(a-c)*d;var
e=a|0;a=(a-e)*d;var
g=a|0;c=c&15|f|b<<4;return[h,g,e,c]}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&bz)*b|0};var
a0=Math.imul,o_=function(){var
r=256;function
c(a,b){return a<<b|a>>>32-b}function
g(a,b){b=a0(b,3432918353);b=c(b,15);b=a0(b,461845907);a^=b;a=c(a,13);return(a*5|0)+3864292196|0}function
u(a){a^=a>>>16;a=a0(a,2246822507);a^=a>>>13;a=a0(a,3266489909);a^=a>>>16;return a}function
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
l,m,o,j,i,f,e,k,q;j=b;if(j<0||j>r)j=r;i=a;f=c;l=[d];m=0;o=1;while(m<o&&i>0){e=l[m++];if(e
instanceof
Array&&e[0]===(e[0]|0))switch(e[0]){case
de:f=g(f,e[2]);i--;break;case
ag:l[--m]=e[1];break;case
h:f=w(f,e);i--;break;default:var
t=e.length-1<<10|e[0];f=g(f,t);for(k=1,q=e.length;k<q;k++){if(o>=j)break;l[o++]=e[k]}break}else
if(e
instanceof
n){var
p=e.array;if(p)f=x(f,p);else{var
s=e.getFullBytes();f=y(f,s)}i--;break}else
if(e===(e|0)){f=g(f,e+e+1);i--}else
if(e===+e){f=v(f,gr(e));i--;break}}f=u(f);return f&au}}();function
pi(a){return[a[3]>>8,a[3]&h,a[2]>>16,a[2]>>8&h,a[2]&h,a[1]>>16,a[1]>>8&h,a[1]&h]}function
o$(e,b,c){var
d=0;function
f(a){b--;if(e<0||b<0)return;if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
de:e--;d=d*di+a[2]|0;break;case
ag:b++;f(a);break;case
h:e--;d=d*di+a[1]+(a[2]<<24)|0;break;default:e--;d=d*19+a[0]|0;for(var
c=a.length-1;c>0;c--)f(a[c])}else
if(a
instanceof
n){e--;var
g=a.array,i=a.getLen();if(g)for(var
c=0;c<i;c++)d=d*19+g[c]|0;else{var
j=a.getFullBytes();for(var
c=0;c<i;c++)d=d*19+j.charCodeAt(c)|0}}else
if(a===(a|0)){e--;d=d*di+a|0}else
if(a===+a){e--;var
k=pi(gr(a));for(var
c=7;c>=0;c--)d=d*19+k[c]|0}}f(c);return d&au}function
pd(a){return(a[3]|a[2]|a[1])==0}function
pg(a){return[h,a&I,a>>24&I,a>>31&bz]}function
ph(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[h,c&I,d&I,e&bz]}function
gt(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
gs(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&I;a[1]=a[1]<<1&I}function
pe(a){a[1]=(a[1]>>>1|a[2]<<23)&I;a[2]=(a[2]>>>1|a[3]<<23)&I;a[3]=a[3]>>>1}function
pk(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[h,0,0,0];while(gt(d,c)>0){e++;gs(c)}while(e>=0){e--;gs(f);if(gt(d,c)>=0){f[1]++;d=ph(d,c)}pe(c)}return[0,f,d]}function
pj(a){return a[1]|a[2]<<24}function
pc(a){return a[3]<<16<0}function
pf(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[h,b&I,c&I,d&bz]}function
pb(a,b){var
c=eC(a);if(c.signedconv&&pc(b)){c.sign=-1;b=pf(b)}var
d=l,h=pg(c.base),g="0123456789abcdef";do{var
f=pk(b,h);b=f[1];d=g.charAt(pj(f[2]))+d}while(!pd(b));if(c.prec>=0){c.filler=N;var
e=c.prec-d.length;if(e>0)d=a1(e,x)+d}return eA(c,d)}function
pC(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
aj:case
88:c=16;b+=2;break;case
av:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
gy(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=dz)return a-87;return-1}function
pm(a){var
g=pC(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=gy(e);if(c<0||c>=d)aY(bu);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=gy(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)aY(bu)}if(f!=a.getLen())aY(bu);b=h*b;if(d==10&&(b|0)!=b)aY(bu);return b|0}function
pn(a){return+(a>31&&a<cR)}function
po(a){return a.getFullBytes()}function
pp(a){return new
n(a)}function
pq(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return Y(a,b)}}function
pr(a,b){return+(ez(a,b,false)<=0)}function
ps(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
gn(a){var
b=a.length;this.array=a;this.len=this.last=b}gn.prototype=new
n();var
pt=function(){function
n(a,b){return a+b|0}function
m(a,b,c,d,e,f){b=n(n(b,a),n(d,f));return n(b<<e|b>>>32-e,c)}function
i(a,b,c,d,e,f,g){return m(b&c|~b&d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return m(b&d|c&~d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return m(b^c^d,a,b,e,f,g)}function
l(a,b,c,d,e,f,g){return m(c^(b|~d),a,b,e,f,g)}function
o(a,b){var
g=b;a[g>>2]|=et<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
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
gn(o(h,c))}}();function
y(a){eD(f[2],a)}function
gu(a){if(!a.opened)y("Cannot flush a closed channel");if(a.buffer==l)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=l}function
gA(a){a=a
instanceof
n?a.toString():a;y(a+": No such file or directory")}var
o2=cG;function
bC(a){a=a
instanceof
n?a.toString():a;if(a.charCodeAt(0)!=47)a=o2+a;var
d=a.split(cG),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case
aU:case
l:if(b.length==0)b.push(l);break;default:b.push(d[c]);break}b.orig=a;return b}function
al(){this.content={}}al.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
bE=new
al();bE.mk(l,new
al());function
eB(a){var
b=bE;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))gA(a.orig);b=b.get(a[c])}return b}function
pM(a){var
c=bC(a),b=eB(c);return b
instanceof
al?1:0}function
aX(a){this.data=a}aX.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
o8(a,b){var
e=bC(a),c=bE;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
al());c=c.get(d);if(!(c
instanceof
al))y(e.orig+c3)}var
d=e[e.length-1];if(c.exists(d))y(e.orig+c3);if(b
instanceof
al)c.mk(d,b);else
if(b
instanceof
aX)c.mk(d,b);else
if(b
instanceof
n)c.mk(d,new
aX(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
aX(b));else
if(b.toString)c.mk(d,new
aX(new
n(b.toString()).getArray()));else
aZ("caml_fs_register")}function
pK(a){var
b=bE,d=bC(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(cG)):0;b=b.get(d[c])}return 1}function
a2(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
pU(a,b,c){var
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
g=a.toString(),i=bC(a);if(d.rdonly&&d.wronly)y(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)y(g+" : flags Open_text and Open_binary are not compatible");if(pK(a)){if(pM(a))y(g+" : is a directory");if(d.create&&d.excl)y(g+c3);var
h=f.fd_last_idx?f.fd_last_idx:0,e=eB(i);if(d.truncate)e.truncate();return a2(h+1,e.content(),d)}else
if(d.create){var
h=f.fd_last_idx?f.fd_last_idx:0;o8(a,[]);var
e=eB(i);return a2(h+1,e.content(),d)}else
gA(a)}a2(0,[]);a2(1,[]);a2(2,[]);function
pu(a){var
b=f.fds[a];if(b.flags.wronly)y(gl+a+" is writeonly");return{data:b,fd:a,opened:true}}function
pQ(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=Z.console;b&&b.log&&b.log(a)}var
bD=new
Array();function
pG(a,b){var
e=new
n(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
pv(a){var
b;switch(a){case
1:b=pQ;break;case
2:b=eE;break;default:b=pG}var
d=f.fds[a];if(d.flags.rdonly)y(gl+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:l,output:b};bD[c.fd]=c;return c}function
pw(){var
a=0;for(var
b
in
bD)if(bD[b].opened)a=[0,bD[b],a];return a}function
gv(a,b,c,d){if(!a.opened)y("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=gq(d);gp(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);gu(a);a.buffer+=e.substr(g+1)}}function
gx(a){return new
n(a)}function
px(a,b){var
c=gx(String.fromCharCode(b));gv(a,c,0,1)}function
py(a,b){if(b==0)gC();return a%b}function
pA(a,b){a[0]=b;return 0}function
pB(a){return a
instanceof
Array?a[0]:cW}function
pE(a,b){f[a+1]=b}var
gw={};function
pF(a,b){gw[a.toString()]=b;return 0}function
pH(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
pI(a,b){return 1-pH(a,b)}function
pJ(){return 32}function
pD(){gz(f[7])}function
pL(){pD()}function
pN(){var
a=new
Date()^4294967295*Math.random();return{valueOf:function(){return a},0:0,1:a,length:2}}function
pz(a){return gw[a]}function
pO(a){if(a
instanceof
Array)return a;if(Z.RangeError&&a
instanceof
Z.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,f[9]];if(Z.InternalError&&a
instanceof
Z.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,f[9]];if(a
instanceof
Z.Error)return[0,pz(fJ),a];return[0,f[3],new
J(String(a))]}function
pP(a){var
b=document.createElement("audio");b.id=a;b.src=a;am[a]=b}function
pR(a){var
b=am[a];b.pause();b.currentTime<-0;am[a]=b;am[a].play()}function
pS(a,b){if(a
in
am){var
c=am[a];c.volume=b;am[a]=c}}function
pT(){return 0}var
E=oY,i=oZ,bp=gp,as=o1,W=gq,fx=o6,bq=o7,fy=pm,b0=pn,X=po,fB=pq,F=ps,fu=gu,ft=pv,br=py,fw=a0,g=gx,M=pE,fv=pF,b=pI,fz=pL,fA=pN,s=pO,bt=pT;function
q(a,b){return a.length==1?a(b):Y(a,[b])}function
D(a,b,c){return a.length==2?a(b,c):Y(a,[b,c])}function
m(a,b,c,d){return a.length==3?a(b,c,d):Y(a,[b,c,d])}function
b1(a,b,c,d,e){return a.length==4?a(b,c,d,e):Y(a,[b,c,d,e])}var
_=[0,g("Failure")],z=[0,g("Invalid_argument")],u=[0,g("Not_found")],e1=[0,g("Match_failure")],eJ=[0,g("Assert_failure")],oL=[0,g(dF),[0,g(cr),[0,g(dU),[0,g(cE),0]]]],oM=[0,g(ej),[0,g(cS),[0,g(cq),[0,g(b6),[0,g(dm),[0,g(ey),[0,g(b5),[0,g(c2),[0,g(c0),[0,g(b4),[0,g(dX),oL]]]]]]]]]]],oN=[0,g(dy),[0,g(dR),[0,g(eu),[0,g(b7),[0,g(dk),[0,g(cT),[0,g(es),[0,g(ca),[0,g(c8),[0,g(dE),[0,g(cm),oM]]]]]]]]]]],oO=[0,g(ch),[0,g(cA),[0,g(dD),[0,g(ed),[0,g(cV),[0,g(d3),[0,g(b$),[0,g(dv),[0,g(dI),[0,g(cM),[0,g(em),oN]]]]]]]]]]],oP=[0,g(dG),[0,g(c1),[0,g(dt),[0,g(er),[0,g(eg),[0,g(d4),[0,g(d1),[0,g(dl),[0,g(dn),[0,g(dB),[0,g(dQ),oO]]]]]]]]]]],oQ=[0,g(b2),[0,g(b3),[0,g(ce),[0,g(cC),[0,g(ea),[0,g(dj),[0,g(c6),[0,g(c4),[0,g(cn),[0,g(cF),[0,g(dq),oP]]]]]]]]]]],oR=[0,g(cJ),[0,g(en),[0,g(cv),[0,g(dT),[0,g(db),[0,g(cX),[0,g(ev),[0,g(df),[0,g(cO),[0,g(el),[0,g(d6),oQ]]]]]]]]]]],oS=[0,g(ek),[0,g(cs),[0,g(dW),[0,g(cj),[0,g(dh),[0,g(dY),[0,g(eh),[0,g(ew),[0,g(cz),[0,g(b9),[0,g(cb),oR]]]]]]]]]]],oT=[0,g(cl),[0,g(d5),[0,g(cY),[0,g(cw),[0,g(cc),[0,g(ef),[0,g(c$),[0,g(eo),[0,g(cB),[0,g(ec),[0,g(dZ),oS]]]]]]]]]]],oU=[0,g(ck),[0,g(dM),[0,g(cu),[0,g(cL),[0,g(c7),[0,g(da),[0,g(b8),[0,g(cp),[0,g(cZ),[0,g(d7),[0,g(ds),oT]]]]]]]]]]],oV=[0,g(dA),[0,g(b_),[0,g(cx),[0,g(cN),[0,g(eq),[0,g(dK),[0,g(ep),[0,g(dP),[0,g(cP),[0,g(dC),[0,g(dx),oU]]]]]]]]]]],oW=[0,g(cH),[0,g(c5),[0,g(dw),[0,g(cD),[0,g(cd),[0,g(d_),[0,g(ci),[0,g(eb),[0,g(ee),[0,g(dp),[0,g(cf),oV]]]]]]]]]]],oX=[0,g(dH),[0,g(cI),[0,g(cU),[0,g(dd),[0,g(cy),[0,g(dS),[0,g(cK),[0,g(c_),[0,g(d2),[0,g(dL),[0,g(d$),oW]]]]]]]]]]];M(11,[0,g("Undefined_recursive_module")]);M(8,[0,g("Stack_overflow")]);M(7,e1);M(6,u);M(5,[0,g("Division_by_zero")]);M(4,[0,g("End_of_file")]);M(3,z);M(2,_);M(1,[0,g("Sys_error")]);var
gE=g("true"),gF=g("false"),gG=g("Pervasives.do_at_exit"),gK=[0,g("list.ml"),223,11],gI=g("nth"),gJ=g("List.nth"),gH=g("hd"),gN=g("\\b"),gO=g("\\t"),gP=g("\\n"),gQ=g("\\r"),gM=g("\\\\"),gL=g("\\'"),gT=g("String.contains_from"),gS=g("String.blit"),gR=g("String.sub"),gV=g("CamlinternalLazy.Undefined"),gY=g("Buffer.add: cannot grow buffer"),hc=g(l),hd=g(l),hg=g("%.12g"),hh=g(f9),hi=g(f9),he=g(by),hf=g(by),hb=g(fK),g$=g("neg_infinity"),ha=g("infinity"),g_=g(aU),g9=g("printf: bad positional specification (0)."),g8=g("%_"),g7=[0,g("printf.ml"),d8,8],g5=g(by),g6=g("Printf: premature end of format string '"),g1=g(by),g2=g(" in format string '"),g3=g(", at char number "),g4=g("Printf: bad conversion %"),gZ=g("Sformat.index_of_int: negative argument "),hk=g("Random.int"),hj=g(dN),hl=[0,987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],oJ=g("OCAMLRUNPARAM"),oH=g("CAMLRUNPARAM"),hm=g(l),hs=g("E2BIG"),hu=g("EACCES"),hv=g("EAGAIN"),hw=g("EBADF"),hx=g("EBUSY"),hy=g("ECHILD"),hz=g("EDEADLK"),hA=g("EDOM"),hB=g("EEXIST"),hC=g("EFAULT"),hD=g("EFBIG"),hE=g("EINTR"),hF=g("EINVAL"),hG=g("EIO"),hH=g("EISDIR"),hI=g("EMFILE"),hJ=g("EMLINK"),hK=g("ENAMETOOLONG"),hL=g("ENFILE"),hM=g("ENODEV"),hN=g("ENOENT"),hO=g("ENOEXEC"),hP=g("ENOLCK"),hQ=g("ENOMEM"),hR=g("ENOSPC"),hS=g("ENOSYS"),hT=g("ENOTDIR"),hU=g("ENOTEMPTY"),hV=g("ENOTTY"),hW=g("ENXIO"),hX=g("EPERM"),hY=g("EPIPE"),hZ=g("ERANGE"),h0=g("EROFS"),h1=g("ESPIPE"),h2=g("ESRCH"),h3=g("EXDEV"),h4=g("EWOULDBLOCK"),h5=g("EINPROGRESS"),h6=g("EALREADY"),h7=g("ENOTSOCK"),h8=g("EDESTADDRREQ"),h9=g("EMSGSIZE"),h_=g("EPROTOTYPE"),h$=g("ENOPROTOOPT"),ia=g("EPROTONOSUPPORT"),ib=g("ESOCKTNOSUPPORT"),ic=g("EOPNOTSUPP"),id=g("EPFNOSUPPORT"),ie=g("EAFNOSUPPORT"),ig=g("EADDRINUSE"),ih=g("EADDRNOTAVAIL"),ii=g("ENETDOWN"),ij=g("ENETUNREACH"),ik=g("ENETRESET"),il=g("ECONNABORTED"),im=g("ECONNRESET"),io=g("ENOBUFS"),ip=g("EISCONN"),iq=g("ENOTCONN"),ir=g("ESHUTDOWN"),is=g("ETOOMANYREFS"),it=g("ETIMEDOUT"),iu=g("ECONNREFUSED"),iv=g("EHOSTDOWN"),iw=g("EHOSTUNREACH"),ix=g("ELOOP"),iy=g("EOVERFLOW"),iz=g("EUNKNOWNERR %d"),ht=g("Unix.Unix_error(Unix.%s, %S, %S)"),ho=g(f4),hp=g(l),hq=g(l),hr=g(f4),iA=g("0.0.0.0"),iB=g("127.0.0.1"),oG=g("::"),oF=g("::1"),iD=g("Js.Error"),iE=g(fJ),iJ=g("canvas"),iG=g("img"),iH=g("Dom_html.Canvas_not_available"),iK=g("[\\][()\\\\|+*.?{}^$]"),nG=g(gc),nH=g(gb),nE=g(gc),nF=g(gb),nA=g(fU),nB=g("(rgba?)\\((?:(\\d*),(\\d*),(\\d*)(?:,(\\d*(?:\\.\\d*)?))?)\\)"),nC=g("(rgba?)\\((?:(\\d*)%,(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),nD=g("(hsla?)\\((?:(\\d*),(\\d*)%,(\\d*)%(?:,(\\d*(?:\\.\\d*)?))?)\\)"),nI=g(fY),nJ=g(fX),nK=g(fY),nL=g(fX),nM=g("hsl"),nN=g("hsla"),ns=g("^rgb\\(\\s*\\d*,\\s*\\d*,\\s*\\d*\\)$"),nt=g("^rgb\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%\\)$"),nu=g("^rgba\\(\\s*\\d*,\\s*\\d*,\\s*\\d*,\\d*\\.?\\d*\\)$"),nv=g("^rgba\\(\\s*\\d*%,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),nw=g("^hsl\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%\\)$"),nx=g("^hsla\\(\\s*\\d*,\\s*\\d*%,\\s*\\d*%,\\d*\\.?\\d*\\)$"),ny=[0,g(dV),[0,g(dc),[0,g(ei),[0,g(dJ),[0,g(cQ),[0,g(ct),[0,g(cg),[0,g(ex),[0,g(c9),[0,g(dg),[0,g(co),oX]]]]]]]]]]],nz=g(fU),nm=g("rgb(%d,%d,%d)"),nn=g("rgb(%d%%,%d%%,%d%%)"),no=g("rgba(%d,%d,%d,%f)"),np=g("rgba(%d%%,%d%%,%d%%,%f)"),nq=g("hsl(%d,%d%%,%d%%)"),nr=g("hsla(%d,%d%%,%d%%,%f)"),k4=g(dV),k5=g(dc),k6=g(ei),k7=g(dJ),k8=g(cQ),k9=g(ct),k_=g(cg),k$=g(ex),la=g(c9),lb=g(dg),lc=g(co),ld=g(dH),le=g(cI),lf=g(cU),lg=g(dd),lh=g(cy),li=g(dS),lj=g(cK),lk=g(c_),ll=g(d2),lm=g(dL),ln=g(d$),lo=g(cH),lp=g(c5),lq=g(dw),lr=g(cD),ls=g(cd),lt=g(d_),lu=g(ci),lv=g(eb),lw=g(ee),lx=g(dp),ly=g(cf),lz=g(dA),lA=g(b_),lB=g(cx),lC=g(cN),lD=g(eq),lE=g(dK),lF=g(ep),lG=g(dP),lH=g(cP),lI=g(dC),lJ=g(dx),lK=g(ck),lL=g(dM),lM=g(cu),lN=g(cL),lO=g(c7),lP=g(da),lQ=g(b8),lR=g(cp),lS=g(cZ),lT=g(d7),lU=g(ds),lV=g(cl),lW=g(d5),lX=g(cY),lY=g(cw),lZ=g(cc),l0=g(ef),l1=g(c$),l2=g(eo),l3=g(cB),l4=g(ec),l5=g(dZ),l6=g(ek),l7=g(cs),l8=g(dW),l9=g(cj),l_=g(dh),l$=g(dY),ma=g(eh),mb=g(ew),mc=g(cz),md=g(b9),me=g(cb),mf=g(cJ),mg=g(en),mh=g(cv),mi=g(dT),mj=g(db),mk=g(cX),ml=g(ev),mm=g(df),mn=g(cO),mo=g(el),mp=g(d6),mq=g(b2),mr=g(b3),ms=g(ce),mt=g(cC),mu=g(ea),mv=g(dj),mw=g(c6),mx=g(c4),my=g(cn),mz=g(cF),mA=g(dq),mB=g(dG),mC=g(c1),mD=g(dt),mE=g(er),mF=g(eg),mG=g(d4),mH=g(d1),mI=g(dl),mJ=g(dn),mK=g(dB),mL=g(dQ),mM=g(ch),mN=g(cA),mO=g(dD),mP=g(ed),mQ=g(cV),mR=g(d3),mS=g(b$),mT=g(dv),mU=g(dI),mV=g(cM),mW=g(em),mX=g(dy),mY=g(dR),mZ=g(eu),m0=g(b7),m1=g(dk),m2=g(cT),m3=g(es),m4=g(ca),m5=g(c8),m6=g(dE),m7=g(cm),m8=g(ej),m9=g(cS),m_=g(cq),m$=g(b6),na=g(dm),nb=g(ey),nc=g(b5),nd=g(c2),ne=g(c0),nf=g(b4),ng=g(dX),nh=g(dF),ni=g(cr),nj=g(dU),nk=g(cE),nl=g(" is not a valid color name"),iL=g(dV),iM=g(dc),iN=g(ei),iO=g(dJ),iP=g(cQ),iQ=g(ct),iR=g(cg),iS=g(ex),iT=g(c9),iU=g(dg),iV=g(co),iW=g(dH),iX=g(cI),iY=g(cU),iZ=g(dd),i0=g(cy),i1=g(dS),i2=g(cK),i3=g(c_),i4=g(d2),i5=g(dL),i6=g(d$),i7=g(cH),i8=g(c5),i9=g(dw),i_=g(cD),i$=g(cd),ja=g(d_),jb=g(ci),jc=g(eb),jd=g(ee),je=g(dp),jf=g(cf),jg=g(dA),jh=g(b_),ji=g(cx),jj=g(cN),jk=g(eq),jl=g(dK),jm=g(ep),jn=g(dP),jo=g(cP),jp=g(dC),jq=g(dx),jr=g(ck),js=g(dM),jt=g(cu),ju=g(cL),jv=g(c7),jw=g(da),jx=g(b8),jy=g(cp),jz=g(cZ),jA=g(d7),jB=g(d5),jC=g(ds),jD=g(cl),jE=g(cY),jF=g(cw),jG=g(cc),jH=g(ef),jI=g(c$),jJ=g(eo),jK=g(cB),jL=g(ec),jM=g(dZ),jN=g(ek),jO=g(cs),jP=g(dW),jQ=g(cj),jR=g(dh),jS=g(dY),jT=g(eh),jU=g(ew),jV=g(cz),jW=g(b9),jX=g(cb),jY=g(cJ),jZ=g(en),j0=g(cv),j1=g(dT),j2=g(db),j3=g(cX),j4=g(ev),j5=g(df),j6=g(cO),j7=g(el),j8=g(d6),j9=g(b2),j_=g(b3),j$=g(ce),ka=g(cC),kb=g(ea),kc=g(dj),kd=g(c6),ke=g(c4),kf=g(cn),kg=g(cF),kh=g(dq),ki=g(dG),kj=g(c1),kk=g(dt),kl=g(er),km=g(eg),kn=g(d4),ko=g(d1),kp=g(dl),kq=g(dn),kr=g(dB),ks=g(dQ),kt=g(ch),ku=g(cA),kv=g(dD),kw=g(ed),kx=g(cV),ky=g(d3),kz=g(b$),kA=g(dv),kB=g(dI),kC=g(cM),kD=g(em),kE=g(dy),kF=g(dR),kG=g(eu),kH=g(b7),kI=g(dk),kJ=g(cT),kK=g(es),kL=g(ca),kM=g(c8),kN=g(dE),kO=g(cm),kP=g(ej),kQ=g(cS),kR=g(cq),kS=g(b6),kT=g(dm),kU=g(ey),kV=g(b5),kW=g(c2),kX=g(c0),kY=g(b4),kZ=g(dX),k0=g(dF),k1=g(cr),k2=g(dU),k3=g(cE),nP=[0,g("keyboard.ml"),155,4],nW=g(fO),nX=g(f6),nS=g(dN),nT=g("y"),nU=g(f6),nV=g(fO),nR=g("px arial"),nY=g("menu "),nZ=g("menu fait "),n0=g("Timebis.TIMELINE(G).HasNoContent"),oy=[0,g(fH),0],oz=[0,g("CONTINUE"),[0,g(fE),[0,g(fG),0]]],oA=[0,g(fH),0],ox=g("gun_reload.wav"),ow=g("gun.wav"),ov=[0,1],ob=g("grande_rue.png"),od=g("w-0.png"),of=g("w-1.png"),oh=g("w-2.png"),oj=g("w-3.png"),ol=g("w-4.png"),on=g("viseur.png"),op=g("impact2.png"),or=g("gun2.png"),ot=g("sab.png"),ou=[0,g("START"),[0,g(fE),[0,g(fG),0]]],oa=g("glass.wav"),n$=g("bonus.wav"),n5=g("press 'b' to go back in time"),n7=g("press 'p' to pause the game-echap: leave the game"),n9=g("press 'Echap' to leave the game"),oC=g("HEAD SHOT");function
ay(a){throw[0,_,a]}function
$(a){throw[0,z,a]}function
eF(a,b){return pr(a,b)?a:b}function
bF(a,b){return o9(a,b)?a:b}function
j(a,b){var
c=a.getLen(),e=b.getLen(),d=W(c+e|0);bp(a,0,d,0,c);bp(b,0,d,c,e);return d}function
az(a){return g(l+a)}function
bG(a,b){if(a){var
c=a[1];return[0,c,bG(a[2],b)]}return b}pu(0);var
bH=ft(1);ft(2);function
eG(a){return gv(bH,a,0,a.getLen())}function
eH(a){px(bH,10);return fu(bH)}function
eI(a){var
b=pw(0);for(;;){if(b){var
c=b[2],d=b[1];try{fu(d)}catch(f){}var
b=c;continue}return 0}}fv(gG,eI);function
a3(a){var
c=0,b=a;for(;;){if(b){var
c=c+1|0,b=b[2];continue}return c}}function
t(a,b){if(0<=b){var
c=a,d=b;for(;;){if(c){var
e=c[2],f=c[1];if(0===d)return f;var
c=e,d=d-1|0;continue}return ay(gI)}}return $(gJ)}function
aA(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[1],d],c=c[2],d=e;continue}return d}}function
eK(a){return aA(a,0)}function
eL(a){if(a){var
b=a[1];return bG(b,eL(a[2]))}return 0}function
an(a,b){if(b){var
c=b[2],d=q(a,b[1]);return[0,d,an(a,c)]}return 0}function
ao(a,b){var
c=b;for(;;){if(c){var
d=c[2];q(a,c[1]);var
c=d;continue}return 0}}function
a4(f){var
g=0;return function(a){var
c=g,b=a;for(;;){if(b){var
d=b[2],e=b[1];if(q(f,e)){var
c=[0,e,c],b=d;continue}var
b=d;continue}return eK(c)}}}function
eM(a,b){var
d=a,c=b;for(;;){if(0===d)return c;if(c){var
d=d-1|0,c=c[2];continue}throw[0,eJ,gK]}}function
a5(a,b){var
c=W(a);o4(c,0,a,b);return c}function
a6(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=W(c);bp(a,b,d,0,c);return d}return $(gR)}function
a7(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return bp(a,b,c,d,e);return $(gS)}var
bI=pJ(0),bJ=(1<<(bI-10|0))-1|0,aB=fw(bI/8|0,bJ)-1|0,gW=[0,gV];function
gX(a){throw[0,gW]}function
bK(a){var
b=1<=a?a:1,c=aB<b?aB:b,d=W(c);return[0,d,0,c,d]}function
bL(a){return a6(a[1],0,a[2])}function
eP(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(aB<c[1])if((a[2]+b|0)<=aB)c[1]=aB;else
ay(gY);var
d=W(c[1]);a7(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
aC(a,b){var
c=a[2];if(a[3]<=c)eP(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
bM(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)eP(a,c);a7(b,0,a[1],a[2],c);a[2]=d;return 0}function
bN(a){return 0<=a?a:ay(j(gZ,az(a)))}function
eQ(a,b){return bN(a+b|0)}var
g0=1;function
eR(a){return eQ(g0,a)}function
eS(a){return a6(a,0,a.getLen())}function
eT(a,b,c){var
d=j(g2,j(a,g1)),e=j(g3,j(az(b),d));return $(j(g4,j(a5(1,c),e)))}function
aD(a,b,c){return eT(eS(a),b,c)}function
a9(a){return $(j(g6,j(eS(a),g5)))}function
aa(e,b,c,d){function
h(a){if((e.safeGet(a)+aw|0)<0||9<(e.safeGet(a)+aw|0))return a;var
b=a+1|0;for(;;){var
c=e.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
i=h(b+1|0),f=bK((c-i|0)+10|0);aC(f,37);var
a=i,g=eK(d);for(;;){if(a<=c){var
j=e.safeGet(a);if(42===j){if(g){var
k=g[2];bM(f,az(g[1]));var
a=h(a+1|0),g=k;continue}throw[0,eJ,g7]}aC(f,j);var
a=a+1|0;continue}return bL(f)}}function
eU(a,b,c,d,e){var
f=aa(b,c,d,e);if(78!==a)if(ai!==a)return f;f.safeSet(f.getLen()-1|0,aS);return f}function
eV(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:aO,c=b;for(;;){if(k<=c)return a9(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return a9(d);var
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
j=0===g?0:1;if(j)return f===m?e+1|0:aD(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
eW(i,b,c){var
l=i.getLen()-1|0;function
r(a){var
k=a;a:for(;;){if(k<l){if(37===i.safeGet(k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=a9(i);else{var
n=i.safeGet(h);if(58<=n){if(95===n){var
f=1,h=h+1|0;continue}}else
if(32<=n)switch(n+fL|0){case
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
h=m(b,f,h,O);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=a9(i);else{var
j=i.safeGet(d);if(dO<=j)var
g=0;else
switch(j){case
78:case
88:case
H:case
O:case
av:case
aS:case
aj:var
e=m(b,f,d,O),g=1;break;case
69:case
70:case
71:case
bA:case
aP:case
aV:var
e=m(b,f,d,aP),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
ak:var
e=m(b,f,d,ak),g=1;break;case
97:case
ax:case
aN:var
e=m(b,f,d,j),g=1;break;case
76:case
bx:case
ai:var
s=d+1|0;if(l<s)var
e=m(b,f,d,O),g=1;else{var
p=i.safeGet(s)+gj|0;if(p<0||32<p)var
q=1;else
switch(p){case
0:case
12:case
17:case
23:case
29:case
32:var
e=D(c,m(b,f,d,j),O),g=1,q=0;break;default:var
q=1}if(q)var
e=m(b,f,d,O),g=1}break;case
67:case
99:var
e=m(b,f,d,99),g=1;break;case
66:case
98:var
e=m(b,f,d,66),g=1;break;case
41:case
aO:var
e=m(b,f,d,j),g=1;break;case
40:var
e=r(m(b,f,d,j)),g=1;break;case
aT:var
t=m(b,f,d,j),u=D(eV(j),i,t),o=t;for(;;){if(o<(u-2|0)){var
o=D(c,o,i.safeGet(o));continue}var
d=u-1|0;continue b}default:var
g=0}if(!g)var
e=aD(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}r(0);return 0}function
eX(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?aO!==c?1:0:f;if(g){var
e=97===c?2:1;if(ax===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}eW(a,b,function(a,b){return a+1|0});return d[1]}function
eY(a,b,c){var
g=a.safeGet(c);if((g+aw|0)<0||9<(g+aw|0))return D(b,0,c);var
e=g+aw|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+aw|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?ay(g9):D(b,[0,bN(e-1|0)],d+1|0);return D(b,0,c)}}function
r(a,b){return a?b:eR(b)}function
eZ(a,b){return a?a[1]:b}function
P(g){function
e(a){var
b=bL(a);a[2]=0;return b}var
G=bK(2*g.getLen()|0),aO=1;function
af(a){return bM(G,a)}function
aL(a,b,g,aM){var
f=g.getLen();function
z(h,b){var
k=b;for(;;){if(f<=k)return q(a,G);var
c=g.safeGet(k);if(37===c){var
i=function(a,b){return E(aM,eZ(a,b))},au=function(f,e,c,d){var
a=d;for(;;){var
$=g.safeGet(a)+fL|0;if(!($<0||25<$))switch($){case
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
10:return eY(g,function(a,b){var
d=[0,i(a,e),c];return au(f,r(a,e),d,b)},a+1|0);default:var
a=a+1|0;continue}var
l=g.safeGet(a);if(!(dr<=l))switch(l){case
78:case
88:case
H:case
O:case
av:case
aS:case
aj:var
bc=i(f,e),bd=bq(eU(l,g,k,a,c),bc);return m(r(f,e),bd,a+1|0);case
69:case
71:case
bA:case
aP:case
aV:var
a4=i(f,e),a8=fx(aa(g,k,a,c),a4);return m(r(f,e),a8,a+1|0);case
76:case
bx:case
ai:var
ad=g.safeGet(a+1|0)+gj|0;if(!(ad<0||32<ad))switch(ad){case
0:case
12:case
17:case
23:case
29:case
32:var
R=a+1|0,ae=l-108|0;if(ae<0||2<ae)var
ag=0;else{switch(ae){case
1:var
ag=0,ah=0;break;case
2:var
bb=i(f,e),aE=bq(aa(g,k,R,c),bb),ah=1;break;default:var
ba=i(f,e),aE=bq(aa(g,k,R,c),ba),ah=1}if(ah)var
aB=aE,ag=1}if(!ag)var
a$=i(f,e),aB=pb(aa(g,k,R,c),a$);return m(r(f,e),aB,R+1|0)}var
a9=i(f,e),a_=bq(eU(ai,g,k,a,c),a9);return m(r(f,e),a_,a+1|0);case
37:case
64:return m(e,a5(1,l),a+1|0);case
83:case
ak:var
v=i(f,e);if(ak===l)var
w=v;else{var
b=[0,0],ao=v.getLen()-1|0,aQ=0;if(!(ao<0)){var
J=aQ;for(;;){var
u=v.safeGet(J),bj=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aW=bj?2:b0(u)?1:4;b[1]=b[1]+aW|0;var
aX=J+1|0;if(ao!==J){var
J=aX;continue}break}}if(b[1]===v.getLen())var
aG=v;else{var
h=W(b[1]);b[1]=0;var
ap=v.getLen()-1|0,aR=0;if(!(ap<0)){var
I=aR;for(;;){var
t=v.safeGet(I),x=t-34|0;if(x<0||58<x)if(-20<=x)var
S=1;else{switch(x+34|0){case
8:h.safeSet(b[1],92);b[1]++;h.safeSet(b[1],98);var
F=1;break;case
9:h.safeSet(b[1],92);b[1]++;h.safeSet(b[1],aN);var
F=1;break;case
10:h.safeSet(b[1],92);b[1]++;h.safeSet(b[1],ai);var
F=1;break;case
13:h.safeSet(b[1],92);b[1]++;h.safeSet(b[1],ax);var
F=1;break;default:var
S=1,F=0}if(F)var
S=0}else
var
S=(x-1|0)<0||56<(x-1|0)?(h.safeSet(b[1],92),b[1]++,h.safeSet(b[1],t),0):1;if(S)if(b0(t))h.safeSet(b[1],t);else{h.safeSet(b[1],92);b[1]++;h.safeSet(b[1],48+(t/H|0)|0);b[1]++;h.safeSet(b[1],48+((t/10|0)%10|0)|0);b[1]++;h.safeSet(b[1],48+(t%10|0)|0)}b[1]++;var
aU=I+1|0;if(ap!==I){var
I=aU;continue}break}}var
aG=h}var
w=j(hi,j(aG,hh))}if(a===(k+1|0))var
aF=w;else{var
E=aa(g,k,a,c);try{var
T=0,o=1;for(;;){if(E.getLen()<=o)var
aq=[0,0,T];else{var
U=E.safeGet(o);if(49<=U)if(58<=U)var
al=0;else
var
aq=[0,fy(a6(E,o,(E.getLen()-o|0)-1|0)),T],al=1;else{if(45===U){var
T=1,o=o+1|0;continue}var
al=0}if(!al){var
o=o+1|0;continue}}var
X=aq;break}}catch(f){f=s(f);if(f[1]!==_)throw f;var
X=eT(E,0,ak)}var
K=X[1],y=w.getLen(),aY=X[2],L=0,aZ=32;if(K===y)if(0===L)var
Y=w,am=1;else
var
am=0;else
var
am=0;if(!am)if(K<=y)var
Y=a6(w,L,y);else{var
V=a5(K,aZ);if(aY)a7(w,L,V,0,y);else
a7(w,L,V,K-y|0,y);var
Y=V}var
aF=Y}return m(r(f,e),aF,a+1|0);case
67:case
99:var
n=i(f,e);if(99===l)var
az=a5(1,n);else{if(39===n)var
p=gL;else
if(92===n)var
p=gM;else{if(14<=n)var
A=0;else
switch(n){case
8:var
p=gN,A=1;break;case
9:var
p=gO,A=1;break;case
10:var
p=gP,A=1;break;case
13:var
p=gQ,A=1;break;default:var
A=0}if(!A)if(b0(n)){var
an=W(1);an.safeSet(0,n);var
p=an}else{var
B=W(4);B.safeSet(0,92);B.safeSet(1,48+(n/H|0)|0);B.safeSet(2,48+((n/10|0)%10|0)|0);B.safeSet(3,48+(n%10|0)|0);var
p=B}}var
az=j(hf,j(p,he))}return m(r(f,e),az,a+1|0);case
66:case
98:var
a2=a+1|0,a3=i(f,e)?gE:gF;return m(r(f,e),a3,a2);case
40:case
aT:var
Q=i(f,e),aw=D(eV(l),g,a+1|0);if(aT===l){var
M=bK(Q.getLen()),ar=function(a,b){aC(M,b);return a+1|0};eW(Q,function(a,b,c){if(a)bM(M,g8);else
aC(M,37);return ar(b,c)},ar);var
a0=bL(M);return m(r(f,e),a0,aw)}var
ay=r(f,e),bi=eQ(eX(Q),ay);return aL(function(a){return z(bi,aw)},ay,Q,aM);case
33:return z(e,a+1|0);case
41:return m(e,hc,a+1|0);case
44:return m(e,hd,a+1|0);case
70:var
ab=i(f,e);if(0===c)var
aA=hg;else{var
Z=aa(g,k,a,c);if(70===l)Z.safeSet(Z.getLen()-1|0,aV);var
aA=Z}var
at=o0(ab);if(3===at)var
ac=ab<0?g$:ha;else
if(4<=at)var
ac=hb;else{var
P=fx(aA,ab),N=0,a1=P.getLen();for(;;){if(a1<=N)var
as=j(P,g_);else{var
C=P.safeGet(N)-46|0,bk=C<0||23<C?55===C?1:0:(C-1|0)<0||21<(C-1|0)?1:0;if(!bk){var
N=N+1|0;continue}var
as=P}var
ac=as;break}}return m(r(f,e),ac,a+1|0);case
91:return aD(g,a,l);case
97:var
aH=i(f,e),aI=eR(eZ(f,e)),aJ=i(0,aI),be=a+1|0,bf=r(f,aI);if(aO)af(D(aH,0,aJ));else
D(aH,G,aJ);return z(bf,be);case
ax:return aD(g,a,l);case
aN:var
aK=i(f,e),bg=a+1|0,bh=r(f,e);if(aO)af(q(aK,0));else
q(aK,G);return z(bh,bg)}return aD(g,a,l)}},d=k+1|0,e=0;return eY(g,function(a,b){return au(a,h,e,b)},d)}aC(G,c);var
k=k+1|0;continue}}function
m(a,b,c){af(b);return z(a,c)}return z(b,0)}var
d=bN(0);function
h(a,b){return aL(e,d,a,b)}var
c=eX(g);if(c<0||6<c){var
k=function(j,b){if(c<=j){var
l=F(c,0),m=function(a,b){return i(l,(c-a|0)-1|0,b)},d=0,a=b;for(;;){if(a){var
e=a[2],f=a[1];if(e){m(d,f);var
d=d+1|0,a=e;continue}m(d,f)}return h(g,l)}}return function(a){return k(j+1|0,[0,a,b])}};return k(0,0)}switch(c){case
1:return function(a){var
b=F(1,0);i(b,0,a);return h(g,b)};case
2:return function(a,b){var
c=F(2,0);i(c,0,a);i(c,1,b);return h(g,c)};case
3:return function(a,b,c){var
d=F(3,0);i(d,0,a);i(d,1,b);i(d,2,c);return h(g,d)};case
4:return function(a,b,c,d){var
e=F(4,0);i(e,0,a);i(e,1,b);i(e,2,c);i(e,3,d);return h(g,e)};case
5:return function(a,b,c,d,e){var
f=F(5,0);i(f,0,a);i(f,1,b);i(f,2,c);i(f,3,d);i(f,4,e);return h(g,f)};case
6:return function(a,b,c,d,e,f){var
j=F(6,0);i(j,0,a);i(j,1,b);i(j,2,c);i(j,3,d);i(j,4,e);i(j,5,f);return h(g,j)};default:return h(g,[0])}}var
e0=[0,0];function
bO(a){e0[1]=[0,a,e0[1]];return 0}function
e2(a,b){var
h=0===b.length-1?[0,0]:b,k=h.length-1,n=0;if(!0){var
d=n;for(;;){i(a[1],d,d);var
r=d+1|0;if(54!==d){var
d=r;continue}break}}var
f=[0,hj],l=54+bF(55,k)|0,o=0;if(!(l<0)){var
c=o;for(;;){var
m=c%55|0,p=f[1],g=j(p,az(E(h,br(c,k))));f[1]=pt(g,0,g.getLen());var
e=f[1];i(a[1],m,(E(a[1],m)^(((e.safeGet(0)+(e.safeGet(1)<<8)|0)+(e.safeGet(2)<<16)|0)+(e.safeGet(3)<<24)|0))&au);var
q=c+1|0;if(l!==c){var
c=q;continue}break}}a[2]=0;return 0}function
a_(a){a[2]=(a[2]+1|0)%55|0;var
b=E(a[1],a[2]),c=(E(a[1],(a[2]+24|0)%55|0)+(b^b>>>25&31)|0)&au;i(a[1],a[2],c);return c}32===bI;var
a$=[0,hl.slice(),0];function
e3(a){if(!(au<a))if(0<a)for(;;){var
b=a_(a$),c=br(b,a);if(((au-a|0)+1|0)<(b-c|0))continue;return c}return $(hk)}function
bP(a){var
b=a_(a$);return(b/ge+a_(a$))/ge*a}try{var
oK=fz(oJ),bQ=oK}catch(f){f=s(f);if(f[1]!==u)throw f;try{var
oI=fz(oH),e4=oI}catch(f){f=s(f);if(f[1]!==u)throw f;var
e4=hm}var
bQ=e4}var
eN=bQ.getLen(),hn=82,eO=0;if(0<=0)if(eN<eO)var
bs=0;else
try{var
a8=eO;for(;;){if(eN<=a8)throw[0,u];if(bQ.safeGet(a8)!==hn){var
a8=a8+1|0;continue}var
gU=1,bR=gU,bs=1;break}}catch(f){f=s(f);if(f[1]!==u)throw f;var
bR=0,bs=1}else
var
bs=0;if(!bs)var
bR=$(gT);var
Q=[f5,function(a){var
b=[0,F(55,0),0];e2(b,fA(0));return b}];function
aE(a,b){var
i=a?a[1]:bR,c=16;for(;;){if(!(b<=c))if(!(bJ<(c*2|0))){var
c=c*2|0;continue}if(i){var
f=pB(Q);if(ag===f)var
d=Q[1];else
if(f5===f){var
h=Q[0+1];Q[0+1]=gX;try{var
e=q(h,0);Q[0+1]=e;pA(Q,ag)}catch(f){f=s(f);Q[0+1]=function(a){throw f};throw f}var
d=e}else
var
d=Q;var
g=a_(d)}else
var
g=0;return[0,0,F(c,0),g,c]}}function
e5(l,b){var
d=b[2],e=d.length-1,f=e*2|0,g=f<bJ?1:0;if(g){var
c=F(f,0);b[2]=c;var
h=function(a){if(a){var
d=a[1],f=a[2];h(a[3]);var
e=D(l,b,d);return i(c,e,[0,d,f,E(c,e)])}return 0},j=e-1|0,m=0;if(!(j<0)){var
a=m;for(;;){h(E(d,a));var
n=a+1|0;if(j!==a){var
a=n;continue}break}}var
k=0}else
var
k=g;return k}function
aF(a,b){return 3<=a.length-1?o_(10,H,a[3],b)&(a[2].length-1-1|0):br(o$(10,H,b),a[2].length-1)}function
e(a,b,c){var
d=aF(a,b);i(a[2],d,[0,b,c,E(a[2],d)]);a[1]=a[1]+1|0;var
e=a[2].length-1<<1<a[1]?1:0;return e?e5(aF,a):e}function
aG(a,b){var
i=aF(a,b),d=E(a[2],i);if(d){var
e=d[3],j=d[2];if(0===as(b,d[1]))return j;if(e){var
f=e[3],k=e[2];if(0===as(b,e[1]))return k;if(f){var
l=f[3],m=f[2];if(0===as(b,f[1]))return m;var
c=l;for(;;){if(c){var
g=c[3],h=c[2];if(0===as(b,c[1]))return h;var
c=g;continue}throw[0,u]}}throw[0,u]}throw[0,u]}throw[0,u]}function
d(a,b,c){function
e(a){if(a){var
d=a[3],f=a[1],g=a[2];return 0===as(f,b)?[0,b,c,d]:[0,f,g,e(d)]}throw[0,u]}var
d=aF(a,b),g=E(a[2],d);try{var
f=e(g),j=i(a[2],d,f)}catch(f){f=s(f);if(f[1]===u){i(a[2],d,[0,b,c,g]);a[1]=a[1]+1|0;var
h=a[2].length-1<<1<a[1]?1:0;return h?e5(aF,a):h}throw f}return j}function
e6(a,b){return fv(a,b[0+1])}var
e7=[0,ho];e6(hr,[0,e7,0,hq,hp]);bO(function(a){if(a[1]===e7){var
c=a[2],d=a[4],e=a[3];if(typeof
c==="number")switch(c){case
1:var
b=hu;break;case
2:var
b=hv;break;case
3:var
b=hw;break;case
4:var
b=hx;break;case
5:var
b=hy;break;case
6:var
b=hz;break;case
7:var
b=hA;break;case
8:var
b=hB;break;case
9:var
b=hC;break;case
10:var
b=hD;break;case
11:var
b=hE;break;case
12:var
b=hF;break;case
13:var
b=hG;break;case
14:var
b=hH;break;case
15:var
b=hI;break;case
16:var
b=hJ;break;case
17:var
b=hK;break;case
18:var
b=hL;break;case
19:var
b=hM;break;case
20:var
b=hN;break;case
21:var
b=hO;break;case
22:var
b=hP;break;case
23:var
b=hQ;break;case
24:var
b=hR;break;case
25:var
b=hS;break;case
26:var
b=hT;break;case
27:var
b=hU;break;case
28:var
b=hV;break;case
29:var
b=hW;break;case
30:var
b=hX;break;case
31:var
b=hY;break;case
32:var
b=hZ;break;case
33:var
b=h0;break;case
34:var
b=h1;break;case
35:var
b=h2;break;case
36:var
b=h3;break;case
37:var
b=h4;break;case
38:var
b=h5;break;case
39:var
b=h6;break;case
40:var
b=h7;break;case
41:var
b=h8;break;case
42:var
b=h9;break;case
43:var
b=h_;break;case
44:var
b=h$;break;case
45:var
b=ia;break;case
46:var
b=ib;break;case
47:var
b=ic;break;case
48:var
b=id;break;case
49:var
b=ie;break;case
50:var
b=ig;break;case
51:var
b=ih;break;case
52:var
b=ii;break;case
53:var
b=ij;break;case
54:var
b=ik;break;case
55:var
b=il;break;case
56:var
b=im;break;case
57:var
b=io;break;case
58:var
b=ip;break;case
59:var
b=iq;break;case
60:var
b=ir;break;case
61:var
b=is;break;case
62:var
b=it;break;case
63:var
b=iu;break;case
64:var
b=iv;break;case
65:var
b=iw;break;case
66:var
b=ix;break;case
67:var
b=iy;break;default:var
b=hs}else
var
f=c[1],b=q(P(iz),f);return[0,m(P(ht),b,e,d)]}return 0});bt(iA);bt(iB);try{bt(oG)}catch(f){f=s(f);if(f[1]!==_)throw f}try{bt(oF)}catch(f){f=s(f);if(f[1]!==_)throw f}aE(0,7);var
v=Z,ba=null,bb=undefined,K=true,R=RegExp,e8=[0,iD];e6(iE,[0,e8,{}]);var
iC=Array;bO(function(a){return a[1]===e8?[0,new
J(a[2].toString())]:0});bO(function(a){return a
instanceof
iC?0:[0,new
J(a.toString())]});function
S(d){return fB(function(a){if(a){var
e=q(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=q(d,c);if(!(b|0))c.returnValue=b;return b})}var
e9=v.document,iF="2d";function
e_(a,b){return a.createElement(b.toString())}function
e$(a){return e_(a,iG)}var
iI=[0,iH];v.HTMLElement===bb;function
bc(a){return new
R(X(a),bv)}function
bS(a,b,c){a.lastIndex=c;var
d=a.exec(X(b)),e=d==ba?ba:d;return e==ba?0:[0,e]}function
o(a,b){var
c=a[b],d=c===bb?bb:pp(c);return d===bb?0:[0,d]}new
R("[$]",bv);bc(iK);function
fa(a){switch(a[0]){case
1:var
e=a[1],h=e[3],i=e[2],j=e[1];return m(P(nm),j,i,h);case
2:var
f=a[1],k=f[3],l=f[2],n=f[1];return m(P(nn),n,l,k);case
3:var
b=a[1],o=b[4],p=b[3],q=b[2],r=b[1];return b1(P(no),r,q,p,o);case
4:var
c=a[1],s=c[4],t=c[3],u=c[2],v=c[1];return b1(P(np),v,u,t,s);case
5:var
g=a[1],w=g[3],x=g[2],y=g[1];return m(P(nq),y,x,w);case
6:var
d=a[1],z=d[4],A=d[3],B=d[2],C=d[1];return b1(P(nr),C,B,A,z);default:switch(a[1]){case
1:return iM;case
2:return iN;case
3:return iO;case
4:return iP;case
5:return iQ;case
6:return iR;case
7:return iS;case
8:return iT;case
9:return iU;case
10:return iV;case
11:return iW;case
12:return iX;case
13:return iY;case
14:return iZ;case
15:return i0;case
16:return i1;case
17:return i2;case
18:return i3;case
19:return i4;case
20:return i5;case
21:return i6;case
22:return i7;case
23:return i8;case
24:return i9;case
25:return i_;case
26:return i$;case
27:return ja;case
28:return jb;case
29:return jc;case
30:return jd;case
31:return je;case
32:return jf;case
33:return jg;case
34:return jh;case
35:return ji;case
36:return jj;case
37:return jk;case
38:return jl;case
39:return jm;case
40:return jn;case
41:return jo;case
42:return jp;case
43:return jq;case
44:return jr;case
45:return js;case
46:return jt;case
47:return ju;case
48:return jv;case
49:return jw;case
50:return jx;case
51:return jy;case
52:return jz;case
53:return jA;case
54:return jB;case
55:return jC;case
56:return jD;case
57:return jE;case
58:return jF;case
59:return jG;case
60:return jH;case
61:return jI;case
62:return jJ;case
63:return jK;case
64:return jL;case
65:return jM;case
66:return jN;case
67:return jO;case
68:return jP;case
69:return jQ;case
70:return jR;case
71:return jS;case
72:return jT;case
73:return jU;case
74:return jV;case
75:return jW;case
76:return jX;case
77:return jY;case
78:return jZ;case
79:return j0;case
80:return j1;case
81:return j2;case
82:return j3;case
83:return j4;case
84:return j5;case
85:return j6;case
86:return j7;case
87:return j8;case
88:return j9;case
89:return j_;case
90:return j$;case
91:return ka;case
92:return kb;case
93:return kc;case
94:return kd;case
95:return ke;case
96:return kf;case
97:return kg;case
98:return kh;case
99:return ki;case
H:return kj;case
bA:return kk;case
aP:return kl;case
aV:return km;case
f0:return kn;case
O:return ko;case
f3:return kp;case
fS:return kq;case
bx:return kr;case
gi:return ks;case
ai:return kt;case
av:return ku;case
f8:return kv;case
gd:return kw;case
ax:return kx;case
ak:return ky;case
aN:return kz;case
aS:return kA;case
ga:return kB;case
fZ:return kC;case
aj:return kD;case
fT:return kE;case
dz:return kF;case
aT:return kG;case
dr:return kH;case
aO:return kI;case
dO:return kJ;case
cR:return kK;case
et:return kL;case
f_:return kM;case
f2:return kN;case
fR:return kO;case
fF:return kP;case
f1:return kQ;case
fD:return kR;case
fW:return kS;case
fV:return kT;case
fC:return kU;case
fM:return kV;case
fP:return kW;case
gf:return kX;case
gk:return kY;case
fN:return kZ;case
d8:return k0;case
fI:return k1;case
f7:return k2;case
G:return k3;default:return iL}}}function
aI(a){var
f=new
R(X(ns)),g=new
R(X(nt)),h=new
R(X(nu)),i=new
R(X(nv)),k=new
R(X(nw)),l=new
R(X(nx));if(!(f.test(a)|0))if(!(h.test(a)|0))if(!(g.test(a)|0))if(!(i.test(a)|0))if(!(k.test(a)|0))if(!(l.test(a)|0)){var
b=ny,m=new
J(a);for(;;){if(b){var
e=b[2],c=0===as(b[1],m)?1:0;if(!c){var
b=e;continue}var
d=c}else
var
d=0;if(d)return a;throw[0,z,j(new
J(a),nz)]}}return a}function
aJ(a){var
c=new
J(a);try{if(b(c,k4))if(b(c,k5))if(b(c,k6))if(b(c,k7))if(b(c,k8))if(b(c,k9))if(b(c,k_))if(b(c,k$))if(b(c,la))if(b(c,lb))if(b(c,lc))if(b(c,ld))if(b(c,le))if(b(c,lf))if(b(c,lg))if(b(c,lh))if(b(c,li))if(b(c,lj))if(b(c,lk))if(b(c,ll))if(b(c,lm))if(b(c,ln))if(b(c,lo))if(b(c,lp))if(b(c,lq))if(b(c,lr))if(b(c,ls))if(b(c,lt))if(b(c,lu))if(b(c,lv))if(b(c,lw))if(b(c,lx))if(b(c,ly))if(b(c,lz))if(b(c,lA))if(b(c,lB))if(b(c,lC))if(b(c,lD))if(b(c,lE))if(b(c,lF))if(b(c,lG))if(b(c,lH))if(b(c,lI))if(b(c,lJ))if(b(c,lK))if(b(c,lL))if(b(c,lM))if(b(c,lN))if(b(c,lO))if(b(c,lP))if(b(c,lQ))if(b(c,lR))if(b(c,lS))if(b(c,lT))if(b(c,lU))if(b(c,lV))if(b(c,lW))if(b(c,lX))if(b(c,lY))if(b(c,lZ))if(b(c,l0))if(b(c,l1))if(b(c,l2))if(b(c,l3))if(b(c,l4))if(b(c,l5))if(b(c,l6))if(b(c,l7))if(b(c,l8))if(b(c,l9))if(b(c,l_))if(b(c,l$))if(b(c,ma))if(b(c,mb))if(b(c,mc))if(b(c,md))if(b(c,me))if(b(c,mf))if(b(c,mg))if(b(c,mh))if(b(c,mi))if(b(c,mj))if(b(c,mk))if(b(c,ml))if(b(c,mm))if(b(c,mn))if(b(c,mo))if(b(c,mp))if(b(c,mq))if(b(c,mr))if(b(c,ms))if(b(c,mt))if(b(c,mu))if(b(c,mv))if(b(c,mw))if(b(c,mx))if(b(c,my))if(b(c,mz))if(b(c,mA))if(b(c,mB))if(b(c,mC))if(b(c,mD))if(b(c,mE))if(b(c,mF))if(b(c,mG))if(b(c,mH))if(b(c,mI))if(b(c,mJ))if(b(c,mK))if(b(c,mL))if(b(c,mM))if(b(c,mN))if(b(c,mO))if(b(c,mP))if(b(c,mQ))if(b(c,mR))if(b(c,mS))if(b(c,mT))if(b(c,mU))if(b(c,mV))if(b(c,mW))if(b(c,mX))if(b(c,mY))if(b(c,mZ))if(b(c,m0))if(b(c,m1))if(b(c,m2))if(b(c,m3))if(b(c,m4))if(b(c,m5))if(b(c,m6))if(b(c,m7))if(b(c,m8))if(b(c,m9))if(b(c,m_))if(b(c,m$))if(b(c,na))if(b(c,nb))if(b(c,nc))if(b(c,nd))if(b(c,ne))if(b(c,nf))if(b(c,ng))if(b(c,nh))if(b(c,ni))if(b(c,nj)){if(b(c,nk))throw[0,z,j(c,nl)];var
d=G}else
var
d=f7;else
var
d=fI;else
var
d=d8;else
var
d=fN;else
var
d=gk;else
var
d=gf;else
var
d=fP;else
var
d=fM;else
var
d=fC;else
var
d=fV;else
var
d=fW;else
var
d=fD;else
var
d=f1;else
var
d=fF;else
var
d=fR;else
var
d=f2;else
var
d=f_;else
var
d=et;else
var
d=cR;else
var
d=dO;else
var
d=aO;else
var
d=dr;else
var
d=aT;else
var
d=dz;else
var
d=fT;else
var
d=aj;else
var
d=fZ;else
var
d=ga;else
var
d=aS;else
var
d=aN;else
var
d=ak;else
var
d=ax;else
var
d=gd;else
var
d=f8;else
var
d=av;else
var
d=ai;else
var
d=gi;else
var
d=bx;else
var
d=fS;else
var
d=f3;else
var
d=O;else
var
d=f0;else
var
d=aV;else
var
d=aP;else
var
d=bA;else
var
d=H;else
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
f=[0,d]}catch(f){f=s(f);if(f[1]===z){var
g=function(a){throw[0,z,j(c,nA)]},N=bc(nB),P=bc(nC),Q=bc(nD),e=function(a){if(a){var
b=a[1];try{var
d=fy(b)}catch(f){f=s(f);if(f[1]===z)var
c=f[2];else{if(f[1]!==_)throw f;var
c=f[2]}throw[0,z,j(nF,j(b,j(nE,c)))]}return d}return g(0)},l=function(a){try{var
c=o5(a)}catch(f){f=s(f);if(f[1]===z)var
b=f[2];else{if(f[1]!==_)throw f;var
b=f[2]}throw[0,z,j(nH,j(a,j(nG,b)))]}return c},q=bS(N,c,0);if(q){var
h=q[1],r=o(h,2),t=o(h,3),u=o(h,4),m=o(h,5),v=o(h,1);if(v){var
w=v[1];if(!b(w,nI)){if(m)return g(0);var
U=e(u),V=e(t);return[1,[0,e(r),V,U]]}if(!b(w,nJ)){if(m){var
R=l(m[1]),S=e(u),T=e(t);return[3,[0,e(r),T,S,R]]}return g(0)}}return g(0)}var
x=bS(P,c,0);if(x){var
i=x[1],y=o(i,2),A=o(i,3),B=o(i,4),n=o(i,5),C=o(i,1);if(C){var
D=C[1];if(!b(D,nK)){if(n)return g(0);var
Z=e(B),$=e(A);return[2,[0,e(y),$,Z]]}if(!b(D,nL)){if(n){var
W=l(n[1]),X=e(B),Y=e(A);return[4,[0,e(y),Y,X,W]]}return g(0)}}return g(0)}var
E=bS(Q,c,0);if(E){var
k=E[1],F=o(k,2),I=o(k,3),K=o(k,4),p=o(k,5),L=o(k,1);if(L){var
M=L[1];if(!b(M,nM)){if(p)return g(0);var
ad=e(K),ae=e(I);return[5,[0,e(F),ae,ad]]}if(!b(M,nN)){if(p){var
aa=l(p[1]),ab=e(K),ac=e(I);return[6,[0,e(F),ac,ab,aa]]}return g(0)}}return g(0)}return g(0)}throw f}return f}function
bd(a){return[0,a]}function
be(a){var
b=a[1];pP(b);return[0,b]}function
bf(a){pR(a[1]);return 0}function
bg(a,b){return pS(a[1],b/H)}function
w(a,b,c,d){return fa([3,[0,a,b,c,d]]).toString()}var
bh=w(h,h,h,1),ab=w(0,0,0,1),bT=w(h,0,0,1);w(0,0,h,1);w(0,h,0,1);w(h,0,h,1);w(0,h,h,1);var
nO=w(h,h,0,1);w(h,192,203,1);w(h,h,h,0);function
bi(a,b){var
d=aJ(aI(a));if(3===d[0]){var
c=d[1];return w(c[1],c[2],c[3],b)}return a}function
a(a){return[0,a]}function
aK(a){return a[1]}function
bU(a){return t(a[1],a[2])}var
c=aE(0,av);function
fb(a){var
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
81:return 25}throw[0,e1,nP]}function
aL(a){return 1===aG(c,a)?1:0}function
fc(a,b,c){return e(a,b,c)}function
bj(a,b,c,d){return[0,a,b,c+d,d]}function
ap(a){var
e=aJ(aI(a)),f=3===e[0]?e[1][4]:0,d=aJ(aI(a)),g=3===d[0]?d[1][3]:0,c=aJ(aI(a)),h=3===c[0]?c[1][2]:0,b=aJ(aI(a)),i=3===b[0]?b[1][1]:0;return fa([3,[0,i,h,g,f]]).toString()}function
A(a){return a[2].width}function
B(a){return a[2].height}function
T(a,b,c,d,e,f){a[3][g(d9)]=1;var
h=a[3];h.fillStyle=ap(f);a[3].fillRect(b,c,d,e);return a[3].fillStyle=a[4]}function
fd(a,b,c,d,e,f){a[3][g(d9)]=1;var
h=a[3];h.strokeStyle=ap(f);a[3].strokeRect(b,c,d,e);return a[3].strokeStyle=a[4]}function
bV(a,b,c,d,e){a[3][g(d9)]=1;var
f=a[3];f.fillStyle=ap(e);a[3].beginPath();a[3].arc(b,c,d/2,0,6.2832,K);a[3].closePath();return a[3].fill()}function
L(h,b,c,d,e,j,g){var
k=h[3].globalAlpha;h[3].globalAlpha=g;try{var
f=aK(b),a=aG(h[6],f);h[3].drawImage(a[1],c,d,e,j);var
l=h[3].globalAlpha=k}catch(f){var
i=e$(h[1]);i.src=aK(b).toString();return i.onload=S(function(a){var
f=aK(b);fc(h[6],f,[0,i]);h[3].drawImage(i,c,d,e,j);h[3].globalAlpha=k;return K})}return l}function
fe(a,b,c,d,e,f,g){L(a,bU(b),c,d,e,f,g);b[4]=b[4]+1|0;var
h=a3(b[1]);b[2]=br(o3(b[4],b[3]),h);return 0}function
bk(a,b,c){var
d=a[3];d.fillStyle=ap(c);var
e=b[1].toString(),f=a[3];f.font=j(az(b[4]),nR).toString();return a[3].fillText(e,b[2],b[3])}var
C=aE(0,30);function
ff(a){e(C,0,0);e(C,1,0);return e(C,2,0)}function
fg(a){var
b=0!==a?1:0;if(b){if(1!==a)return 1;var
c=2}else
var
c=b;return c}var
aq=aE(0,10);function
fh(a){return 1===aG(C,a)?1:0}function
bW(a){var
b=a[2].getBoundingClientRect(),c=e9.body,d=e9.documentElement,e=((b.top|0)-c.clientTop|0)-d.clientTop|0,f=((b.left|0)-c.clientLeft|0)-d.clientLeft|0,g=aG(aq,nW)-e|0;return[0,aG(aq,nX)-f|0,g]}function
bY(a){var
b=a[7];return b?v.clearInterval(b[1]):(a[1].body.removeChild(a[2]),0)}function
fk(a,b){var
d=bW(b),c=a[2],f=c[2],g=c[1],h=d[1]<(g+c[3]|0)?1:0;if(h){var
i=g<d[1]?1:0;if(i)var
j=f<d[2]?1:0,e=j?d[2]<(f+c[4]|0)?1:0:j;else
var
e=i}else
var
e=h;return e}function
ac(a,b){var
c=fh(0);return c?fk(a,b):c}function
bZ(c,b){var
a=b[1];return ao(function(a){var
b=fk(a,c)?bT:bh;return bk(c,a[1],b)},a)}function
ad(a,b){return t(a[1],b)}function
bl(a,b){eG(nY);eH(0);var
k=a3(b),g=0,c=b,f=0;for(;;){if(c){var
j=c[1],d=B(a),h=(A(a)|0)/4|0,e=0.2*d/k|0,i=d*0.1+f*(0.8*d)/k,l=[0,bj(j,h,i,e),[0,h,i|0,0.9*j.getLen()*e|0,e]],m=c[2],g=bG(g,[0,l,0]),c=m,f=f+1|0;continue}eG(nZ);eH(0);return[0,g]}}var
ae=[0,0,2e3],n6=bj(n5,aR,ag,20),n8=bj(n7,aR,310,20),n_=bj(n9,aR,370,20);function
fo(a,b,c){return[bB,a,b,c]}function
af(a,b){return eF(a-G,bF(b,G))}function
aM(a,b){return eF(a-G,bF(b,G))}function
ar(a){return[0,a[1],a[2]]}function
U(a,b,c){return c+(b/2-af(b,a))}function
V(a,b,c){return c+(b/2-aM(b,a))}function
fq(e,b,c,d){var
a=A(e),f=B(e),n=V(b[2],f,0),o=U(b[1],a,0),m=b[7],p=m?m[1]:ay(gH);L(e,p,o,n,a,f,c);var
q=b[6];ao(function(a){var
d=A(e),f=B(e),g=c*(1-a[1]/aj),h=V(b[2],f,a[3]),i=U(b[1],d,a[2])-3;return L(e,t(b[7],7),i,h,20,20,g)},q);var
r=b[5];ao(function(a){var
f=A(e),g=B(e),d=a[1],h=V(b[2],g,d[2]),i=U(b[1],f,d[1]);return L(e,t(b[7],9),i,h,35,50,c)},r);var
s=b[4];ao(function(a){var
g=A(e),h=B(e),n=a[5];if(n){var
f=n[1];if(d){var
o=V(b[2],h,a[2]),p=U(b[1],g,a[1]);fe(e,a[4],p,o,80,aQ,c*(1-f/14))}else{var
q=V(b[2],h,a[2]),r=U(b[1],g,a[1]);L(e,bU(a[4]),r,q,80,aQ,c*(1-f/14))}var
j=V(b[2],h,a[2]),k=U(b[1],g,a[1]),l=bP(20)-10,m=bP(10)-20,i=bi(bT,1-f*0.06);bV(e,k+30,j+5,3*f,i);bV(e,k+30+l,j+5+m,f/2|0,i);return bV(e,k+30+l/2,j+5+m/2,f,i)}if(d){var
s=V(b[2],h,a[2]),t=U(b[1],g,a[1]);return fe(e,a[4],t,s,80,aQ,c)}var
u=V(b[2],h,a[2]),v=U(b[1],g,a[1]);return L(e,bU(a[4]),v,u,80,aQ,c)},s);T(e,0,0,a,f/2-G,ab);T(e,0,f/2+G,a,f/2-G,ab);T(e,0,0,(a-at)/2,f,ab);T(e,a-(a-at)/2,0,(a-at)/2,f,ab);var
h=bi(bT,c),g=b[3],j=g[4],i=g[2],k=g[1];L(e,g[5],10,30,35,30,1);fd(e,80,30,i*5,20,h);var
u=k===i?j<g[3]?(T(e,80,30,fw(j+50|0,i)/80*5,20,h),1):0:0;if(!u)T(e,80,30,k*5,20,h);var
l=bi(nO,c);L(e,t(b[7],9),925,25,20,30,1);fd(e,d0,30,ae[2]/10,20,l);T(e,d0,30,ae[1]/10,20,l);return L(e,t(b[7],6),(a-at)/2,f/2-G,at,at,c)}var
bm=[0,n0];function
fl(a){if(a)return a[1][1];throw[0,bm,a]}function
p(a,b){try{fl(a);try{fl(b);var
d=0,c=d}catch(f){f=s(f);if(f[1]!==bm)throw f;var
c=1}}catch(f){f=s(f);if(f[1]===bm)return-1;throw f}return c}function
bn(a){if(a)return a[1][1];throw[0,bm,a]}function
bo(a){if(a){var
b=a[1];return b[2]?b[2]:a}return a}function
fm(f,b,c,d,e){if(aL(36)){bY(f);var
u=[0,b,0]}else{var
T=aL(1);if(T){var
S=0<ae[1]?1:0;if(S)ae[1]=ae[1]-1|0;var
O=S}else
var
O=T;if(O)var
u=[0,bn(bo(c)),1];else{var
az=A(f),ai=0,aB=B(f);switch(b[0]){case
1:var
m=b[1],_=bW(f),aC=m[7],aD=m[6],aE=m[5],aF=m[4],aG=m[3],aH=ar(_)[2],g=[0,ar(_)[1],aH,aG,aF,aE,aD,aC];if(aL(15))var
a=[2,bl(f,oz),g];else
if(fh(0)){var
l=g[3],W=l[3],X=l[2];if(0===l[1]){var
V=be(bd(ox));bg(V,15);bf(V);var
Y=g.slice();Y[3]=[0,X,X,W,-50,l[5]];var
F=Y}else
if(W<l[4]){var
U=be(bd(ow));bg(U,5);bf(U);var
w=bW(f),ap=A(f),aq=B(f),v=g[3],as=[0,v[1]-1|0,v[2],v[3],0,v[5]],at=g[4],au=an(function(a){var
c=ar(w),d=A(f),e=B(f),j=a[1]+30,g=j<af(d,c[1])?1:0;if(g){var
k=a[1]+50,h=af(d,c[1])<k?1:0;if(h){var
l=a[2]+5,i=l<aM(e,c[2])?1:0;if(i)var
m=a[2]+25,b=aM(e,c[2])<m?1:0;else
var
b=i}else
var
b=h}else
var
b=g;return b?a[5]?a:[0,a[1],a[2],0,a[4],ov]:a},at),av=g[5],aw=q(a4(function(a){var
d=ar(w),g=A(f),h=B(f),c=a[1],l=c[1],i=l<af(g,d[1])?1:0;if(i){var
m=c[1]+35,j=af(g,d[1])<m?1:0;if(j){var
n=c[2],k=n<aM(h,d[2])?1:0;if(k)var
o=c[2]+50,b=aM(h,d[2])<o?1:0;else
var
b=k}else
var
b=j}else
var
b=i;if(b){var
e=be(bd(oa));bg(e,50);bf(e);ae[1]=ae[1]+aQ|0}return 1-b}),av),ax=af(aq,ar(w)[2]-10),ay=[0,0,af(ap,ar(w)[1]-10),ax],F=[0,g[1],g[2],as,au,aw,[0,ay,g[6]],g[7]]}else
var
F=g;var
a=[1,F]}else
var
a=[1,g];break;case
2:var
G=b[1];if(ac(ad(G,0),f))var
r=0;else
if(aL(57))var
r=0;else
if(ac(ad(G,1),f))var
a=[3,bl(f,oA),b],r=1;else
if(ac(ad(G,2),f)){bY(f);var
a=b,r=1}else
var
a=b,r=1;if(!r)var
a=[1,b[2]];break;case
3:var
a=ac(ad(b[1],0),f)?b[2]:b;break;default:var
E=b[1];if(ac(ad(E,0),f))var
s=0;else
if(aL(57))var
s=0;else
if(ac(ad(E,1),f))var
a=[3,bl(f,oy),b],s=1;else
if(ac(ad(E,2),f)){bY(f);var
a=b,s=1}else
var
a=b,s=1;if(!s)var
Z=b[2],a=[1,[0,az/2,aB/2,[0,15,15,30,0,t(Z,8)],0,0,0,Z]]}var
u=[0,a,ai]}}if(0===u[2]){var
C=u[1],ak=0;if(1===C[0]){var
i=C[1],o=i[3],aP=[0,o[1],o[2],o[3],o[4]+1|0,o[5]],aS=i[4],aT=an(function(a){var
b=[0,a[1]+a[3],a[2],a[3],a[4],a[5]],c=b[5];return c?[0,b[1],b[2],b[3],b[4],[0,c[1]+1|0]]:b},aS),aU=i[5],aV=an(function(a){var
b=a[1];return[0,[bB,b[1]+b[3],b[2],b[3]]]},aU),aW=q(a4(function(a){var
b=a[5];if(b)var
d=14<b[1]?1:0,c=d||(gh<a[1]?1:0);else
var
c=b;return 1-c}),aT),aX=q(a4(function(a){return 1-(gh<a[1][1]?1:0)}),aV),aY=i[6],aZ=an(function(a){return[0,a[1]+1|0,a[2],a[3]]},aY),a0=q(a4(function(a){return 1-(aj<a[1]?1:0)}),aZ),h=[0,i[1],i[2],aP,aW,aX,a0,i[7]],$=e3(cW),aa=bP(20)-10;if(0===(d0<$?1:0))var
I=h;else{var
n=h[7],aI=[0,t(n,5),0],aJ=[0,t(n,4),aI],aK=[0,t(n,3),aJ],aN=[0,t(n,2),aK],R=[0,0,380-aa,1.2+aa/20,[0,[0,t(n,1),aN],0,5,0],0];if(999===$){var
Q=be(bd(n$));bg(Q,5);bf(Q);var
D=e3(H),aO=40<D?[0,fo(0,aR+D,fQ)]:[0,fo(0,aR+D,fQ)],I=[0,h[1],h[2],h[3],[0,R,h[4]],[0,aO,h[5]],h[6],h[7]]}else{var
ab=h.slice();ab[4]=[0,R,h[4]];var
I=ab}}var
P=[1,I]}else
var
P=C;var
j=[0,P,ak]}else
var
j=[0,bn(bo(c)),1];if(0===j[2]){var
al=1===j[1][0]?1:0;if(al){var
L=[0,[0,j[1],c,0]];if(c){var
M=c[1],y=[0,L,M[3]],x=function(a,b){if(2===a){if(b){var
o=b[2];if(o){var
i=o[1],j=b[1];return 0<p(j,i)?[0,i,[0,j,0]]:[0,j,[0,i,0]]}}}else
if(3===a)if(b){var
l=b[2];if(l){var
q=l[2];if(q){var
c=q[1],d=l[1],e=b[1];return 0<p(e,d)?0<p(e,c)?0<p(d,c)?[0,c,[0,d,[0,e,0]]]:[0,d,[0,c,[0,e,0]]]:[0,d,[0,e,[0,c,0]]]:0<p(d,c)?0<p(e,c)?[0,c,[0,e,[0,d,0]]]:[0,e,[0,c,[0,d,0]]]:[0,e,[0,d,[0,c,0]]]}}}var
k=a>>1,t=eM(k,b),u=J(k,b),h=u,g=J(a-k|0,t),f=0;for(;;){if(h){if(g){var
m=g[1],n=h[1],r=g[2],s=h[2];if(0<p(n,m)){var
h=s,f=[0,n,f];continue}var
g=r,f=[0,m,f];continue}return aA(h,f)}return aA(g,f)}},J=function(a,b){if(2===a){if(b){var
o=b[2];if(o){var
i=o[1],j=b[1];return 0<p(j,i)?[0,j,[0,i,0]]:[0,i,[0,j,0]]}}}else
if(3===a)if(b){var
l=b[2];if(l){var
q=l[2];if(q){var
c=q[1],d=l[1],e=b[1];return 0<p(e,d)?0<p(d,c)?[0,e,[0,d,[0,c,0]]]:0<p(e,c)?[0,e,[0,c,[0,d,0]]]:[0,c,[0,e,[0,d,0]]]:0<p(e,c)?[0,d,[0,e,[0,c,0]]]:0<p(d,c)?[0,d,[0,c,[0,e,0]]]:[0,c,[0,d,[0,e,0]]]}}}var
k=a>>1,t=eM(k,b),u=x(k,b),h=u,g=x(a-k|0,t),f=0;for(;;){if(h){if(g){var
m=g[1],n=h[1],r=g[2],s=h[2];if(0<p(n,m)){var
g=r,f=[0,m,f];continue}var
h=s,f=[0,n,f];continue}return aA(h,f)}return aA(g,f)}},K=a3(y),ag=2<=K?x(K,y):y,k=ag;for(;;){if(e<a3(k))if(k){var
k=k[2];continue}M[3]=k;break}}var
am=eL(an(function(a){var
b=a?a[1][3]:a;return b},d));return[0,j[1],L,am]}return[0,j[1],c,d]}if(c)var
z=c[1][2],ah=z?z[1][3]:z,N=ah;else
var
N=c;var
ao=bo(c);return[0,bn(bo(c)),ao,N]}function
fn(a,b,c){ao(function(a){try{bn(a);var
b=0}catch(f){return 0}return b},b);var
d=A(a),e=B(a);switch(c[0]){case
1:return fq(a,c[1],1,1);case
2:fq(a,c[2],1,0);T(a,0,0,d,e,bi(ab,0.5));return bZ(a,c[1]);case
3:bk(a,n_,bh);bk(a,n8,bh);bk(a,n6,bh);return bZ(a,c[1]);default:return bZ(a,c[1])}}var
fi=v.document,aH=e_(fi,iJ),oB=60,fr=600,fs=1200;if(1-(aH.getContext==ba?1:0)){var
bX=aH.getContext(iF);aH.width=fs|0;aH.height=fr|0;bX.fillStyle=ap(ab);bX.fillRect(0,0,fs,fr);e(c,0,0);e(c,1,0);e(c,2,0);e(c,3,0);e(c,4,0);e(c,5,0);e(c,6,0);e(c,7,0);e(c,8,0);e(c,9,0);e(c,10,0);e(c,11,0);e(c,12,0);e(c,13,0);e(c,14,0);e(c,15,0);e(c,16,0);e(c,17,0);e(c,18,0);e(c,19,0);e(c,20,0);e(c,21,0);e(c,22,0);e(c,23,0);e(c,24,0);e(c,25,0);e(c,57,0);e(c,36,0);e(c,58,0);e(c,73,0);e(c,74,0);e(c,71,0);e(c,72,0);ff(0);ff(0);var
nQ=aE(0,10),k=[0,fi,aH,bX,ap(ab),cW/oB,nQ,0,oC];e2(a$,fA(0));var
oc=a(ob),oe=a(od),og=a(of),oi=a(oh),ok=a(oj),om=a(ol),oo=a(on),oq=a(op),os=a(or),fp=[0,oc,[0,oe,[0,og,[0,oi,[0,ok,[0,om,[0,oo,[0,oq,[0,os,[0,a(ot),0]]]]]]]]]],oD=1,oE=1,n1=0,n2=1,n3=0;ao(function(c){var
b=e$(k[1]);b.src=aK(c).toString();return b.onload=S(function(a){var
d=aK(c);fc(k[6],d,[0,b]);return K})},fp);var
n4=[0,[0,bl(k,ou),fp],n1,oE,n3,oD];k[1].title=k[8].toString();var
fj=[0,n4];v.onload=S(function(a){k[1].body.appendChild(k[2]);var
b=k[5];v.setInterval(fB(function(a){v.onkeydown=S(function(a){switch(fb(a.keyCode)){case
0:d(c,0,1);break;case
1:d(c,1,1);break;case
2:d(c,2,1);break;case
3:d(c,3,1);break;case
4:d(c,4,1);break;case
5:d(c,5,1);break;case
6:d(c,6,1);break;case
7:d(c,7,1);break;case
8:d(c,8,1);break;case
9:d(c,9,1);break;case
10:d(c,10,1);break;case
11:d(c,11,1);break;case
12:d(c,12,1);break;case
13:d(c,13,1);break;case
14:d(c,14,1);break;case
15:d(c,15,1);break;case
16:d(c,16,1);break;case
17:d(c,17,1);break;case
18:d(c,18,1);break;case
19:d(c,19,1);break;case
20:d(c,20,1);break;case
21:d(c,21,1);break;case
22:d(c,22,1);break;case
23:d(c,23,1);break;case
24:d(c,24,1);break;case
25:d(c,25,1);break;case
36:d(c,36,1);break;case
57:d(c,57,1);break;case
58:d(c,58,1);break;case
71:d(c,71,1);break;case
72:d(c,72,1);break;case
73:d(c,73,1);break;case
74:d(c,74,1);break}return K});v.onkeyup=S(function(a){switch(fb(a.keyCode)){case
0:d(c,0,0);break;case
1:d(c,1,0);break;case
2:d(c,2,0);break;case
3:d(c,3,0);break;case
4:d(c,4,0);break;case
5:d(c,5,0);break;case
6:d(c,6,0);break;case
7:d(c,7,0);break;case
8:d(c,8,0);break;case
9:d(c,9,0);break;case
10:d(c,10,0);break;case
11:d(c,11,0);break;case
12:d(c,12,0);break;case
13:d(c,13,0);break;case
14:d(c,14,0);break;case
15:d(c,15,0);break;case
16:d(c,16,0);break;case
17:d(c,17,0);break;case
18:d(c,18,0);break;case
19:d(c,19,0);break;case
20:d(c,20,0);break;case
21:d(c,21,0);break;case
22:d(c,22,0);break;case
23:d(c,23,0);break;case
24:d(c,24,0);break;case
25:d(c,25,0);break;case
36:d(c,36,0);break;case
57:d(c,57,0);break;case
58:d(c,58,0);break;case
71:d(c,71,0);break;case
72:d(c,72,0);break;case
73:d(c,73,0);break;case
74:d(c,74,0);break}return K});v.onmousedown=S(function(a){switch(fg(a.button)){case
0:d(C,0,1);break;case
1:d(C,1,1);break;case
2:d(C,2,1);break}return K});v.onmouseup=S(function(a){switch(fg(a.button)){case
0:d(C,0,0);break;case
1:d(C,1,0);break;case
2:d(C,2,0);break}return K});v.onmousemove=S(function(a){d(aq,nS,a.screenX);d(aq,nT,a.screenY);d(aq,nU,a.clientX);d(aq,nV,a.clientY);return K});if(n2){k[2].width=k[2].width;k[3].fillStyle=k[4];k[3].fillRect(0,0,k[2].width,k[2].height)}var
b=fj[1],e=b[5],f=b[4],h=b[3],m=b[2],g=b[1];if(0===h){var
i=fm(k,g,m,f,e);fn(k,f,g);var
l=[0,i[1],i[2],h,i[3],e]}else{fn(k,f,g);var
j=fm(k,g,m,f,e),l=[0,j[1],j[2],h,j[3],e]}fj[1]=l;return 0}),b);return K});eI(0);return}throw[0,iI]}(this));
