var St=Object.create;var w=Object.defineProperty,wt=Object.defineProperties,xt=Object.getOwnPropertyDescriptor,Rt=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertyNames,J=Object.getOwnPropertySymbols,Tt=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var L=(s,t,e)=>t in s?w(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,_=(s,t)=>{for(var e in t||(t={}))K.call(t,e)&&L(s,e,t[e]);if(J)for(var e of J(t))Ot.call(t,e)&&L(s,e,t[e]);return s},Q=(s,t)=>wt(s,Rt(t)),Mt=s=>w(s,"__esModule",{value:!0});var Gt=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Lt=(s,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of It(t))!K.call(s,r)&&r!=="default"&&w(s,r,{get:()=>t[r],enumerable:!(e=xt(t,r))||e.enumerable});return s},g=s=>Lt(Mt(w(s!=null?St(Tt(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);var i=(s,t,e)=>(L(s,typeof t!="symbol"?t+"":t,e),e);var it=Gt(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});var N=function(s,t){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},N(s,t)};function $(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=s}N(s,t),s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var U,C=function(){function s(){}return s._xfnv1a=function(t){for(var e=2166136261,r=0;r<t.length;r++)e=Math.imul(e^t.charCodeAt(r),16777619);return function(){return e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,(e+=e<<5)>>>0}},s}(),$t=function(s){function t(e){var r=s.call(this)||this;return r.a=t._xfnv1a(e)(),r}return $(t,s),t.prototype.next=function(){var e=this.a+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296},t}(C),Ut=function(s){function t(e){var r=s.call(this)||this,o=t._xfnv1a(e);return r.a=o(),r.b=o(),r.c=o(),r.d=o(),r}return $(t,s),t.prototype.next=function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var e=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,e=e+this.d|0,this.c=this.c+e|0,(e>>>0)/4294967296},t}(C),Ct=function(s){function t(e){var r=s.call(this)||this,o=t._xfnv1a(e);return r.a=o(),r.b=o(),r.c=o(),r.d=o(),r}return $(t,s),t.prototype.next=function(){var e=this.b<<9,r=5*this.a;return r=r<<7|9*(r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=e,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296},t}(C);E.PRNG=void 0,(U=E.PRNG||(E.PRNG={})).sfc32="sfc32",U.mulberry32="mulberry32",U.xoshiro128ss="xoshiro128ss";var Dt=function(){function s(t,e){e===void 0&&(e=E.PRNG.sfc32),this.str=t,this.prng=e,this.generator=this._initializeGenerator()}return s.prototype.next=function(){return this.generator.next()},s.prototype._initializeGenerator=function(){if(function(e){return e===null}(t=this.str)||function(e){return e===void 0}(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new Ut(this.str);case"mulberry32":return new $t(this.str);case"xoshiro128ss":return new Ct(this.str);default:return this.wrap()}},s.prototype.wrap=function(){return{next:function(){return Math.random()}}},s}();E.default=Dt});var lt=g(require("path")),ut=g(require("fs"));var q=g(require("path")),Z=[{flag:"-d",desc:"Indica que as sa\xEDdas de debug devem ser impressas.",process:s=>s.debug=!0,num:0},{flag:"-q",desc:'Entra no modo "quiet": roda todo o jogo e s\xF3 imprime o resultado final (sobrescreve o par\xE2metro de debug).',process:s=>{s.quiet=!0,s.debug=!1},num:0},{flag:"-i",desc:"Entra no modo iterativo. A cada rodada, o jogo espera o usu\xE1rio digitar <enter> para continuar.",process:s=>s.interactive=!0,num:0},{flag:"-m",desc:"Salva as mensagens enviadas para os bots, \xFAtil para debugar. Cada bot ter\xE1 seu arquivo com a extens\xE3o .in",process:s=>s.messages=!0,num:0},{flag:"-r",desc:"L\xEA o estado do jogo especificado em um arquivo, sobrescrevendo argumentos passados. Exemplo: -r game.state",process:(s,t,e)=>s.readfile=t[e+1],num:1},{flag:"-s",desc:"Indica uma semente para o gerador de n\xFAmero aleat\xF3rios. A semente deve ser um valor inteiro. Exemplo: -s 24652",process:(s,t,e)=>s.seed=parseInt(t[e+1]),num:1},{flag:"-t",desc:"Indica o tempo (em milisegundos) que um bot tem para responder com uma a\xE7\xE3o antes de dar timeout (default: 3000). Exemplo: -t 2000",process:(s,t,e)=>s.timeout=parseInt(t[e+1]),num:1}];function qt(s){let t=q.basename(process.argv[0]),e=q.basename(process.argv[1]);s.split(`
`).forEach(r=>console.log(r.trim())),console.log(`Uso: ${t} ${e} [op\xE7\xF5es] [bot1 bot2 ...]
`),console.log("As op\xE7\xF5es s\xE3o:"),Z.forEach(r=>console.log(r.flag,r.desc)),console.log(`
`)}function tt(s){let t=process.argv,e={debug:!1,quiet:!1,interactive:!1,messages:!1,timeout:3e3};return Z.forEach(r=>{let o=t.indexOf(r.flag);o>1&&o<t.length-r.num&&(r.process(e,t,o),t.splice(o,r.num+1))}),t.includes("-h")&&(qt(s),process.exit(0)),e.bots=t.slice(2).filter(r=>!r.startsWith("-")),e}var R=g(require("path")),st=g(require("fs")),B=g(require("child_process"));var Bt=g(require("child_process")),Ft=g(require("stream")),et=g(require("readline"));function rt(s){let t=(0,et.createInterface)({input:s}),e=async function*(){for await(let r of t)yield r}();return async()=>(await e.next()).value}var c=s=>`[${s}m`,x={bold:c("1"),black:c("30"),red:c("31"),green:c("32"),yellow:c("33"),blue:c("34"),magenta:c("35"),cyan:c("36"),white:c("37"),gray:c("90"),bgBlack:c("40"),bgRed:c("41"),bgGreen:c("42"),bgYellow:c("43"),bgBlue:c("44"),bgMagenta:c("45"),bgCyan:c("46"),bgWhite:c("47"),bgGray:c("100"),reset:c("0")};function Nt(s){return s.endsWith(x.reset)?s:`${s}${x.reset}`}var n=Object.keys(x).reduce((s,t)=>Q(_({},s),{[t]:e=>Nt(`${x[t]}${e}`)}),{});var d=console.log,ot=n.bgGreen(n.black("DEBUG:")),F=class{constructor(t,e,r){this.game=t;this.id=e;this.execName=r;i(this,"_proc");i(this,"_read");i(this,"_errorPromise");i(this,"_msgStream",null);i(this,"_active");R.dirname(r)==="."?this._proc=(0,B.spawn)(R.join(process.cwd(),r)):this._proc=(0,B.spawn)(r),this.game.config.messages&&(this._msgStream=(0,st.createWriteStream)(r+".in")),this.game.config.quiet&&(d=()=>{}),this._proc.on("error",o=>{d(n.red(`Erro na execu\xE7\xE3o do programa ${r}.`)),d(n.red(o)),this.game.quit(e,o)}),this._proc.stderr.on("data",o=>{if(this.game.config.quiet===!1){let h=o.toString().replace(/\n/g,`
	`);d(n.red(`Bot ${e}:`)),d(n.red(`	${h}`))}}),this._errorPromise=new Promise(o=>{this._proc.on("close",(h,l)=>{l!=="SIGINT"?(d(n.red(`Programa ${this.execName} terminou com signal ${l}.`)),o("EXEC_ERROR")):o("FINISHED")})}),this._read=rt(this._proc.stdout),this._active=!0}async write(t){if(this._active){this.game.config.debug&&console.debug(`${ot} Enviando para ${this.id}: ${t}`);let e=`${t}
`;this._msgStream&&this._msgStream.write(e);try{return this._proc.stdin.write(e),Promise.resolve("OK")}catch(r){return Promise.resolve("ERROR")}}}async read(){if(this._active){let t,e=new Promise(l=>{t=setTimeout(()=>l("TIMEOUT"),this.game.config.timeout)}),r=this._read(),o=this._errorPromise,h=await Promise.race([e,r,o]).then(l=>l===void 0||l==="EXEC_ERROR"?"ERROR":l);return h==="TIMEOUT"?(d(`Jogador ${this.id} n\xE3o enviou dados no tempo de ${this.game.config.timeout}ms e foi eliminado.`),Promise.resolve("PLAYER_ERROR")):h==="ERROR"?(d(`Jogador ${this.id} teve problemas t\xE9cnicos e foi eliminado.`),Promise.resolve("PLAYER_ERROR")):(clearTimeout(t),this.game.config.debug&&console.debug(`${ot} Recebido de ${this.id}: ${h}`),Promise.resolve(h))}}halt(){console.log(n.red("HALT")),this._msgStream&&this._msgStream.close(),this._proc.kill("SIGINT"),this._active=!1}get isActive(){return this._active}};var nt=g(it()),D,at;function ct(s,t,e=0){return Math.floor(s*(t-e)+e)}function v(s){return typeof s=="number"&&(D=new nt.default(s.toString()),at=s),at}function y(){return D||v(ct(Math.random(),1e5)),D.next()}function u(s,t=0){return ct(y(),s,t)}var a=class{constructor(t,...e){this.content=t;i(this,"params");this.params=e.map(r=>r.toString())}toString(){let t=this.params.join(" "),e=this.content.length>0&&t.length>0;return this.content+(e?" ":"")+t}static parse(t){let[e,...r]=t.split(" ").filter(o=>o.length>0);return new a(e,...r)}};var I=console.log,jt=[n.cyan,n.yellow,n.magenta,n.cyan],T=class{constructor(t){this.config=t;i(this,"players");i(this,"currPlayerIndex");let e=tt(this.config.description);this.config=_(_({},t),e),this.config.quiet&&(I=()=>{}),this.config.readfile&&this.loadFile(this.config.readfile),this.config.seed||(y(),this.config.seed=v()),I(`Seed da partida ${v()}`),(!this.currPlayerIndex||this.currPlayerIndex<0||this.currPlayerIndex>this.config.bots.length-1)&&(this.currPlayerIndex=u(this.config.bots.length)),this.players=this.config.bots.map(r=>new F(this,lt.basename(r),r)),this.players.forEach((r,o)=>r.color=jt[o])}async run(){try{for(await this.config.init(),await this.config.start();;)await this.config.turn(),this.currPlayerIndex=(this.currPlayerIndex+1)%this.players.length}catch(t){console.error(t),this.players.forEach(e=>e.halt())}}over(t){I(t),this.config.finish(),this.closeGame()}quit(t,e){}closeGame(){console.log(n.red("closeGame")),this.players.forEach(t=>t.halt()),process.exit()}loadFile(t){try{let e=ut.readFileSync(t,"utf8"),[r,o]=e.split(`---
`),h=r.match(/seed\s*:\s*(\d+)\s*\n/);h&&(this.config.seed=parseInt(h[1]));let l=r.match(/bots\s*:\s*([ \w]+)\n/);l&&(this.config.bots=l[1].split(" ").filter(z=>z&&z.length>0));let S=r.match(/curr\s*:\s*(\d+)\n/);S&&(this.currPlayerIndex=parseInt(S[1])),this.config.loadState(o)}catch(e){console.error(e)}}async forEachPlayer(t){await Promise.all(this.players.map(async e=>{await t(e)}))}get numPlayers(){return this.players.length}async send(t,e){let r=this.players.find(o=>o.id===t);if(r){let o=await r.write(e.toString());return o!=="OK"?(this.failPlayer("CONFIG ERROR",`Algo estranho ocorreu com o jogador ${r.id}`,r),"ERROR"):o}return"PLAYER ID not found."}async broadcast(t,e=this.players){await Promise.all(e.map(async r=>{await this.send(r.id,t)}))}async broadcastNonCurrent(t){await this.broadcast(t,this.players.filter(e=>e!=this.currentPlayer))}async receiveMessage(){let t=await this.currentPlayer.read();return a.parse(t)}failPlayer(t,e,r){I(`${r.id}: ${n.red(t)} ${e}`)}get currentPlayer(){return this.players[this.currPlayerIndex]}};var ht=10,ft=30,mt=20,pt=50,gt=500,dt=5e4,yt=500;var j=10,V=20,bt=200,_t=150,Et=100,O=10,H=20,M=30;var G=class{constructor(t=0,e=0){this.lin=t;this.col=e}},A=class{constructor(){i(this,"width");i(this,"height");i(this,"harbors");i(this,"_cell");this.height=u(V,j),this.width=u(V,j);let t=()=>y()<.5?O+u(10,1):y()<.7?H+u(10,1):M+u(10,1);this._cell=[];for(let e=0;e<this.height;e++){this._cell.push([]);for(let r=0;r<this.width;r++)this._cell[e].push(y()<=.3?t():0)}this.harbors=[];for(let e=u(5,1);e>0;e--){let r=new G(u(this.height),u(this.width));this.harbors.push(r),this._cell[r.lin][r.col]=1}}static get instance(){return A._instance===void 0&&(A._instance=new A),A._instance}isInside({lin:t,col:e}){return t>=0&&t<this.height&&e>=0&&e<this.width}cell(t){return this.isInside(t)?this._cell[t.lin][t.col]:0}isFishingPoint(t){if(this.isInside(t)){let e=this.cell(t);return e>=O&&e<M+10}return!1}isPort(t){return this.cell(t)===1}getFishInfo(t){if(this.isFishingPoint(t)){let e=this.cell(t),r=e%10;switch(e-r){case O:return{fish:"MULLET",quantity:r};case H:return{fish:"SNAPPER",quantity:r};case M:return{fish:"SEABASS",quantity:r}}}return null}isAllowedToFish(t){let e=this.getFishInfo(t);return e?e.quantity>0:!0}fish(t){let e=this.getFishInfo(t);e&&e.quantity>0&&this._cell[t.lin][t.col]--}update(){let t=u(this.height),e=u(this.width),r=this.getFishInfo({lin:t,col:e});r&&r.quantity>0&&r.quantity<9&&this._cell[t][e]++}get strData(){return this._cell.map(t=>t.join(" ")).join(`
`)}},m=A;i(m,"_instance");var W=class{constructor(t=new G(0,0)){i(this,"_type");i(this,"_pos");i(this,"_moves");i(this,"_charge");this._type="BOAT",this._pos=t,this._moves=0,this._charge=[{fish:"MULLET",quantity:0},{fish:"SNAPPER",quantity:0},{fish:"SEABASS",quantity:0}]}get type(){return this._type}get moveLimit(){return this.type==="BOAT"?ft:pt}get chargeLimit(){return this.type==="BOAT"?ht:mt}get pos(){return this._pos}get moves(){return this._moves}get overload(){let t=this._charge.reduce((e,r)=>e+r.quantity,0);return t>this.chargeLimit?t-this.chargeLimit:0}moveTo(t){this._pos=t}load(t){this._charge.find(e=>e.fish===t).quantity++}quantity(t){return this._charge.find(e=>e.fish===t).quantity}unload(){let t=this.quantity("MULLET")*Et+this.quantity("SNAPPER")*_t+this.quantity("SEABASS")*bt;return this._moves=0,this._charge.forEach(e=>e.quantity=0),t}};var b=class{constructor(t){this.id=t;i(this,"_boat");i(this,"_money");let e=m.instance,r=e.harbors[u(e.harbors.length)];this._boat=new W(r),this._money=0,b._bots.set(t,this)}valid(t){switch(t.content){case"LEFT":case"RIGHT":case"UP":case"DOWN":return this.move(t.content);case"FISH":return this.fish();case"SELL":return this.sell();default:return new a("INVALID")}}get pos(){return this._boat.pos}get money(){return this._money}static get ids(){return[...b._bots.keys()]}static get bots(){return[...b._bots.values()]}static bot(t){return b._bots.get(t)}static isBusy({lin:t,col:e}){return b.bots.some(r=>r.pos.lin===t&&r.pos.col===e)}quantity(t){return this._boat.quantity(t)}move(t){let e=m.instance,r=_({},this.pos);return t==="LEFT"&&r.col--,t==="RIGHT"&&r.col++,t==="UP"&&r.lin--,t==="DOWN"&&r.lin++,e.isInside(r)?b.isBusy(r)?new a("BUSY"):(this._boat.moveTo(r),new a("DONE")):(this._money-=gt,new a("OUT"))}fish(){let t=m.instance,e=t.getFishInfo(this.pos);return e?t.isAllowedToFish(this.pos)?(t.fish(this.pos),this._boat.load(e.fish),new a(e.fish)):(this._money-=dt,new a("IMPACT")):new a("NONE")}sell(){if(m.instance.isPort(this.pos)){let e=this._boat.overload*yt,r=this._boat.unload();this._money+=r-e}return new a(this.money.toString())}},p=b;i(p,"_bots",new Map);function P(s){switch(s.fish){case"MULLET":return n.bgGray(s.quantity);case"SNAPPER":return n.bgGreen(n.gray(s.quantity));case"SEABASS":return n.bgMagenta(s.quantity)}}function X(s){return n.bgRed(n.white(String.fromCharCode(65+s)))}function Vt(){return n.bgBlack("P")}function Pt(){return n.bgBlue(" ")}function At(){console.log("Bots");let t=p.bots.reduce((e,r,o)=>`${e}${X(o)}: ${r.id}
`,"");console.log(t),console.log("Pontos de pesca (o digito \xE9 a quantidade)"),console.log(P({fish:"MULLET",quantity:0})+": Tainha"),console.log(P({fish:"SNAPPER",quantity:0})+": Cioba"),console.log(P({fish:"SEABASS",quantity:0})+": Robalo"),console.log(),console.log("P: Porto")}function k(){let s=m.instance,t=p.bots,e="";for(let r=0;r<s.height;r++){for(let o=0;o<s.width;o++){let h=t.findIndex(l=>l.pos.lin===r&&l.pos.col===o);if(h>=0)e+=X(h);else{let l=s.getFishInfo({lin:r,col:o});l?e+=P(l):s.isPort({lin:r,col:o})?e+=Vt():e+=Pt()}e+=Pt()}if(r<t.length){let o=t[r],h=P({fish:"MULLET",quantity:o.quantity("MULLET")}),l=P({fish:"SNAPPER",quantity:o.quantity("SNAPPER")}),S=P({fish:"SEABASS",quantity:o.quantity("SEABASS")});e+=`    ${X(r)}: ${h} ${l} ${S} - R$ ${o.money}`}e+=`
`}console.log(e)}var Y,vt,f=new T({description:"Neste jogo, voc\xEA controla um barco-pesqueiro, que compete com outros barcos pelos recursos naturais de uma \xE1rea de pesca.",loadState:Ht,init:Wt,start:Xt,turn:kt,finish:Yt});f.run();function Ht(s){}async function Wt(){f.numPlayers===0&&(console.log("N\xE3o h\xE1 bot-jogadores."),f.closeGame()),Y=3,vt=0,f.forEachPlayer(s=>new p(s.id))}async function Xt(){let s=m.instance;await f.broadcast(new a("AREA",s.height,s.width));for(let t of p.bots)await f.send(t.id,new a("ID",t.id));At(),k()}async function kt(){let s=m.instance;try{if(++vt%f.numPlayers==0&&Y--,Y>=0){let t=f.currentPlayer.id;await f.send(t,new a(s.strData)),await f.send(t,new a("BOTS",p.bots.length));for(let o of p.bots)await f.send(t,new a(o.id,o.pos.lin,o.pos.col));let e=await f.receiveMessage(),r=p.bot(t).valid(e);await f.send(t,r),s.update(),k()}else f.over("timeout")}catch(t){console.log(t)}}function Yt(){console.log("closing game")}