// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10447__auto__,writer__10448__auto__,opt__10449__auto__){
return cljs.core._write.call(null,writer__10448__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13145 = arguments.length;
var i__10950__auto___13146 = (0);
while(true){
if((i__10950__auto___13146 < len__10949__auto___13145)){
args__10956__auto__.push((arguments[i__10950__auto___13146]));

var G__13147 = (i__10950__auto___13146 + (1));
i__10950__auto___13146 = G__13147;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13144){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13144));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13149 = arguments.length;
var i__10950__auto___13150 = (0);
while(true){
if((i__10950__auto___13150 < len__10949__auto___13149)){
args__10956__auto__.push((arguments[i__10950__auto___13150]));

var G__13151 = (i__10950__auto___13150 + (1));
i__10950__auto___13150 = G__13151;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13148){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13148));
});

var g_QMARK__13152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13153 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13152){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13152))
,null));
var mkg_13154 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13152,g_13153){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13152,g_13153))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13152,g_13153,mkg_13154){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13152).call(null,x);
});})(g_QMARK__13152,g_13153,mkg_13154))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13152,g_13153,mkg_13154){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13154).call(null,gfn);
});})(g_QMARK__13152,g_13153,mkg_13154))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13152,g_13153,mkg_13154){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13153).call(null,generator);
});})(g_QMARK__13152,g_13153,mkg_13154))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11041__auto___13174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11041__auto___13174){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13175 = arguments.length;
var i__10950__auto___13176 = (0);
while(true){
if((i__10950__auto___13176 < len__10949__auto___13175)){
args__10956__auto__.push((arguments[i__10950__auto___13176]));

var G__13177 = (i__10950__auto___13176 + (1));
i__10950__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13174))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13174){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13174),args);
});})(g__11041__auto___13174))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11041__auto___13174){
return (function (seq13155){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13155));
});})(g__11041__auto___13174))
;


var g__11041__auto___13178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11041__auto___13178){
return (function cljs$spec$impl$gen$list(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13179 = arguments.length;
var i__10950__auto___13180 = (0);
while(true){
if((i__10950__auto___13180 < len__10949__auto___13179)){
args__10956__auto__.push((arguments[i__10950__auto___13180]));

var G__13181 = (i__10950__auto___13180 + (1));
i__10950__auto___13180 = G__13181;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13178))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13178),args);
});})(g__11041__auto___13178))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11041__auto___13178){
return (function (seq13156){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13156));
});})(g__11041__auto___13178))
;


var g__11041__auto___13182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11041__auto___13182){
return (function cljs$spec$impl$gen$map(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13183 = arguments.length;
var i__10950__auto___13184 = (0);
while(true){
if((i__10950__auto___13184 < len__10949__auto___13183)){
args__10956__auto__.push((arguments[i__10950__auto___13184]));

var G__13185 = (i__10950__auto___13184 + (1));
i__10950__auto___13184 = G__13185;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13182))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13182),args);
});})(g__11041__auto___13182))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11041__auto___13182){
return (function (seq13157){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13157));
});})(g__11041__auto___13182))
;


var g__11041__auto___13186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11041__auto___13186){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13187 = arguments.length;
var i__10950__auto___13188 = (0);
while(true){
if((i__10950__auto___13188 < len__10949__auto___13187)){
args__10956__auto__.push((arguments[i__10950__auto___13188]));

var G__13189 = (i__10950__auto___13188 + (1));
i__10950__auto___13188 = G__13189;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13186))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13186),args);
});})(g__11041__auto___13186))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11041__auto___13186){
return (function (seq13158){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13158));
});})(g__11041__auto___13186))
;


var g__11041__auto___13190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11041__auto___13190){
return (function cljs$spec$impl$gen$set(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13191 = arguments.length;
var i__10950__auto___13192 = (0);
while(true){
if((i__10950__auto___13192 < len__10949__auto___13191)){
args__10956__auto__.push((arguments[i__10950__auto___13192]));

var G__13193 = (i__10950__auto___13192 + (1));
i__10950__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13190))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13190),args);
});})(g__11041__auto___13190))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11041__auto___13190){
return (function (seq13159){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13159));
});})(g__11041__auto___13190))
;


var g__11041__auto___13194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11041__auto___13194){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13195 = arguments.length;
var i__10950__auto___13196 = (0);
while(true){
if((i__10950__auto___13196 < len__10949__auto___13195)){
args__10956__auto__.push((arguments[i__10950__auto___13196]));

var G__13197 = (i__10950__auto___13196 + (1));
i__10950__auto___13196 = G__13197;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13194))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13194),args);
});})(g__11041__auto___13194))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11041__auto___13194){
return (function (seq13160){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13160));
});})(g__11041__auto___13194))
;


var g__11041__auto___13198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11041__auto___13198){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13199 = arguments.length;
var i__10950__auto___13200 = (0);
while(true){
if((i__10950__auto___13200 < len__10949__auto___13199)){
args__10956__auto__.push((arguments[i__10950__auto___13200]));

var G__13201 = (i__10950__auto___13200 + (1));
i__10950__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13198))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13198),args);
});})(g__11041__auto___13198))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11041__auto___13198){
return (function (seq13161){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13161));
});})(g__11041__auto___13198))
;


var g__11041__auto___13202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11041__auto___13202){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13203 = arguments.length;
var i__10950__auto___13204 = (0);
while(true){
if((i__10950__auto___13204 < len__10949__auto___13203)){
args__10956__auto__.push((arguments[i__10950__auto___13204]));

var G__13205 = (i__10950__auto___13204 + (1));
i__10950__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13202))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13202),args);
});})(g__11041__auto___13202))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11041__auto___13202){
return (function (seq13162){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13162));
});})(g__11041__auto___13202))
;


var g__11041__auto___13206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11041__auto___13206){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13207 = arguments.length;
var i__10950__auto___13208 = (0);
while(true){
if((i__10950__auto___13208 < len__10949__auto___13207)){
args__10956__auto__.push((arguments[i__10950__auto___13208]));

var G__13209 = (i__10950__auto___13208 + (1));
i__10950__auto___13208 = G__13209;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13206))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13206),args);
});})(g__11041__auto___13206))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11041__auto___13206){
return (function (seq13163){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13163));
});})(g__11041__auto___13206))
;


var g__11041__auto___13210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11041__auto___13210){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13211 = arguments.length;
var i__10950__auto___13212 = (0);
while(true){
if((i__10950__auto___13212 < len__10949__auto___13211)){
args__10956__auto__.push((arguments[i__10950__auto___13212]));

var G__13213 = (i__10950__auto___13212 + (1));
i__10950__auto___13212 = G__13213;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13210))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13210),args);
});})(g__11041__auto___13210))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11041__auto___13210){
return (function (seq13164){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13164));
});})(g__11041__auto___13210))
;


var g__11041__auto___13214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11041__auto___13214){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13215 = arguments.length;
var i__10950__auto___13216 = (0);
while(true){
if((i__10950__auto___13216 < len__10949__auto___13215)){
args__10956__auto__.push((arguments[i__10950__auto___13216]));

var G__13217 = (i__10950__auto___13216 + (1));
i__10950__auto___13216 = G__13217;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13214))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13214),args);
});})(g__11041__auto___13214))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11041__auto___13214){
return (function (seq13165){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13165));
});})(g__11041__auto___13214))
;


var g__11041__auto___13218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11041__auto___13218){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13219 = arguments.length;
var i__10950__auto___13220 = (0);
while(true){
if((i__10950__auto___13220 < len__10949__auto___13219)){
args__10956__auto__.push((arguments[i__10950__auto___13220]));

var G__13221 = (i__10950__auto___13220 + (1));
i__10950__auto___13220 = G__13221;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13218))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13218),args);
});})(g__11041__auto___13218))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11041__auto___13218){
return (function (seq13166){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13166));
});})(g__11041__auto___13218))
;


var g__11041__auto___13222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11041__auto___13222){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13223 = arguments.length;
var i__10950__auto___13224 = (0);
while(true){
if((i__10950__auto___13224 < len__10949__auto___13223)){
args__10956__auto__.push((arguments[i__10950__auto___13224]));

var G__13225 = (i__10950__auto___13224 + (1));
i__10950__auto___13224 = G__13225;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13222))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13222),args);
});})(g__11041__auto___13222))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11041__auto___13222){
return (function (seq13167){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13167));
});})(g__11041__auto___13222))
;


var g__11041__auto___13226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11041__auto___13226){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13227 = arguments.length;
var i__10950__auto___13228 = (0);
while(true){
if((i__10950__auto___13228 < len__10949__auto___13227)){
args__10956__auto__.push((arguments[i__10950__auto___13228]));

var G__13229 = (i__10950__auto___13228 + (1));
i__10950__auto___13228 = G__13229;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13226))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13226),args);
});})(g__11041__auto___13226))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11041__auto___13226){
return (function (seq13168){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13168));
});})(g__11041__auto___13226))
;


var g__11041__auto___13230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11041__auto___13230){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13231 = arguments.length;
var i__10950__auto___13232 = (0);
while(true){
if((i__10950__auto___13232 < len__10949__auto___13231)){
args__10956__auto__.push((arguments[i__10950__auto___13232]));

var G__13233 = (i__10950__auto___13232 + (1));
i__10950__auto___13232 = G__13233;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13230))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13230),args);
});})(g__11041__auto___13230))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11041__auto___13230){
return (function (seq13169){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13169));
});})(g__11041__auto___13230))
;


var g__11041__auto___13234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11041__auto___13234){
return (function cljs$spec$impl$gen$return(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13235 = arguments.length;
var i__10950__auto___13236 = (0);
while(true){
if((i__10950__auto___13236 < len__10949__auto___13235)){
args__10956__auto__.push((arguments[i__10950__auto___13236]));

var G__13237 = (i__10950__auto___13236 + (1));
i__10950__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13234))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13234),args);
});})(g__11041__auto___13234))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11041__auto___13234){
return (function (seq13170){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13170));
});})(g__11041__auto___13234))
;


var g__11041__auto___13238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11041__auto___13238){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13239 = arguments.length;
var i__10950__auto___13240 = (0);
while(true){
if((i__10950__auto___13240 < len__10949__auto___13239)){
args__10956__auto__.push((arguments[i__10950__auto___13240]));

var G__13241 = (i__10950__auto___13240 + (1));
i__10950__auto___13240 = G__13241;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13238))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13238),args);
});})(g__11041__auto___13238))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11041__auto___13238){
return (function (seq13171){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13171));
});})(g__11041__auto___13238))
;


var g__11041__auto___13242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11041__auto___13242){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13243 = arguments.length;
var i__10950__auto___13244 = (0);
while(true){
if((i__10950__auto___13244 < len__10949__auto___13243)){
args__10956__auto__.push((arguments[i__10950__auto___13244]));

var G__13245 = (i__10950__auto___13244 + (1));
i__10950__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13242))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13242),args);
});})(g__11041__auto___13242))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11041__auto___13242){
return (function (seq13172){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13172));
});})(g__11041__auto___13242))
;


var g__11041__auto___13246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__11041__auto___13246){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13247 = arguments.length;
var i__10950__auto___13248 = (0);
while(true){
if((i__10950__auto___13248 < len__10949__auto___13247)){
args__10956__auto__.push((arguments[i__10950__auto___13248]));

var G__13249 = (i__10950__auto___13248 + (1));
i__10950__auto___13248 = G__13249;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11041__auto___13246))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11041__auto___13246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11041__auto___13246),args);
});})(g__11041__auto___13246))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__11041__auto___13246){
return (function (seq13173){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13173));
});})(g__11041__auto___13246))
;

var g__11054__auto___13271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11054__auto___13271){
return (function cljs$spec$impl$gen$any(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13272 = arguments.length;
var i__10950__auto___13273 = (0);
while(true){
if((i__10950__auto___13273 < len__10949__auto___13272)){
args__10956__auto__.push((arguments[i__10950__auto___13273]));

var G__13274 = (i__10950__auto___13273 + (1));
i__10950__auto___13273 = G__13274;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13271))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13271){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13271);
});})(g__11054__auto___13271))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11054__auto___13271){
return (function (seq13250){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13250));
});})(g__11054__auto___13271))
;


var g__11054__auto___13275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11054__auto___13275){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13276 = arguments.length;
var i__10950__auto___13277 = (0);
while(true){
if((i__10950__auto___13277 < len__10949__auto___13276)){
args__10956__auto__.push((arguments[i__10950__auto___13277]));

var G__13278 = (i__10950__auto___13277 + (1));
i__10950__auto___13277 = G__13278;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13275))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13275){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13275);
});})(g__11054__auto___13275))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11054__auto___13275){
return (function (seq13251){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13251));
});})(g__11054__auto___13275))
;


var g__11054__auto___13279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11054__auto___13279){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13280 = arguments.length;
var i__10950__auto___13281 = (0);
while(true){
if((i__10950__auto___13281 < len__10949__auto___13280)){
args__10956__auto__.push((arguments[i__10950__auto___13281]));

var G__13282 = (i__10950__auto___13281 + (1));
i__10950__auto___13281 = G__13282;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13279))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13279){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13279);
});})(g__11054__auto___13279))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11054__auto___13279){
return (function (seq13252){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13252));
});})(g__11054__auto___13279))
;


var g__11054__auto___13283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11054__auto___13283){
return (function cljs$spec$impl$gen$char(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13284 = arguments.length;
var i__10950__auto___13285 = (0);
while(true){
if((i__10950__auto___13285 < len__10949__auto___13284)){
args__10956__auto__.push((arguments[i__10950__auto___13285]));

var G__13286 = (i__10950__auto___13285 + (1));
i__10950__auto___13285 = G__13286;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13283))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13283){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13283);
});})(g__11054__auto___13283))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11054__auto___13283){
return (function (seq13253){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13253));
});})(g__11054__auto___13283))
;


var g__11054__auto___13287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11054__auto___13287){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13288 = arguments.length;
var i__10950__auto___13289 = (0);
while(true){
if((i__10950__auto___13289 < len__10949__auto___13288)){
args__10956__auto__.push((arguments[i__10950__auto___13289]));

var G__13290 = (i__10950__auto___13289 + (1));
i__10950__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13287))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13287){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13287);
});})(g__11054__auto___13287))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11054__auto___13287){
return (function (seq13254){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13254));
});})(g__11054__auto___13287))
;


var g__11054__auto___13291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11054__auto___13291){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13292 = arguments.length;
var i__10950__auto___13293 = (0);
while(true){
if((i__10950__auto___13293 < len__10949__auto___13292)){
args__10956__auto__.push((arguments[i__10950__auto___13293]));

var G__13294 = (i__10950__auto___13293 + (1));
i__10950__auto___13293 = G__13294;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13291))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13291){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13291);
});})(g__11054__auto___13291))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11054__auto___13291){
return (function (seq13255){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13255));
});})(g__11054__auto___13291))
;


var g__11054__auto___13295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11054__auto___13295){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13296 = arguments.length;
var i__10950__auto___13297 = (0);
while(true){
if((i__10950__auto___13297 < len__10949__auto___13296)){
args__10956__auto__.push((arguments[i__10950__auto___13297]));

var G__13298 = (i__10950__auto___13297 + (1));
i__10950__auto___13297 = G__13298;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13295))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13295){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13295);
});})(g__11054__auto___13295))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11054__auto___13295){
return (function (seq13256){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13256));
});})(g__11054__auto___13295))
;


var g__11054__auto___13299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11054__auto___13299){
return (function cljs$spec$impl$gen$double(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13300 = arguments.length;
var i__10950__auto___13301 = (0);
while(true){
if((i__10950__auto___13301 < len__10949__auto___13300)){
args__10956__auto__.push((arguments[i__10950__auto___13301]));

var G__13302 = (i__10950__auto___13301 + (1));
i__10950__auto___13301 = G__13302;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13299))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13299){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13299);
});})(g__11054__auto___13299))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11054__auto___13299){
return (function (seq13257){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13257));
});})(g__11054__auto___13299))
;


var g__11054__auto___13303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11054__auto___13303){
return (function cljs$spec$impl$gen$int(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13304 = arguments.length;
var i__10950__auto___13305 = (0);
while(true){
if((i__10950__auto___13305 < len__10949__auto___13304)){
args__10956__auto__.push((arguments[i__10950__auto___13305]));

var G__13306 = (i__10950__auto___13305 + (1));
i__10950__auto___13305 = G__13306;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13303))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13303){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13303);
});})(g__11054__auto___13303))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11054__auto___13303){
return (function (seq13258){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13258));
});})(g__11054__auto___13303))
;


var g__11054__auto___13307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11054__auto___13307){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13308 = arguments.length;
var i__10950__auto___13309 = (0);
while(true){
if((i__10950__auto___13309 < len__10949__auto___13308)){
args__10956__auto__.push((arguments[i__10950__auto___13309]));

var G__13310 = (i__10950__auto___13309 + (1));
i__10950__auto___13309 = G__13310;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13307))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13307){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13307);
});})(g__11054__auto___13307))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11054__auto___13307){
return (function (seq13259){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13259));
});})(g__11054__auto___13307))
;


var g__11054__auto___13311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11054__auto___13311){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13312 = arguments.length;
var i__10950__auto___13313 = (0);
while(true){
if((i__10950__auto___13313 < len__10949__auto___13312)){
args__10956__auto__.push((arguments[i__10950__auto___13313]));

var G__13314 = (i__10950__auto___13313 + (1));
i__10950__auto___13313 = G__13314;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13311))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13311){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13311);
});})(g__11054__auto___13311))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11054__auto___13311){
return (function (seq13260){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13260));
});})(g__11054__auto___13311))
;


var g__11054__auto___13315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11054__auto___13315){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13316 = arguments.length;
var i__10950__auto___13317 = (0);
while(true){
if((i__10950__auto___13317 < len__10949__auto___13316)){
args__10956__auto__.push((arguments[i__10950__auto___13317]));

var G__13318 = (i__10950__auto___13317 + (1));
i__10950__auto___13317 = G__13318;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13315))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13315){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13315);
});})(g__11054__auto___13315))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11054__auto___13315){
return (function (seq13261){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13261));
});})(g__11054__auto___13315))
;


var g__11054__auto___13319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11054__auto___13319){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13320 = arguments.length;
var i__10950__auto___13321 = (0);
while(true){
if((i__10950__auto___13321 < len__10949__auto___13320)){
args__10956__auto__.push((arguments[i__10950__auto___13321]));

var G__13322 = (i__10950__auto___13321 + (1));
i__10950__auto___13321 = G__13322;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13319))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13319){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13319);
});})(g__11054__auto___13319))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11054__auto___13319){
return (function (seq13262){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13262));
});})(g__11054__auto___13319))
;


var g__11054__auto___13323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11054__auto___13323){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13324 = arguments.length;
var i__10950__auto___13325 = (0);
while(true){
if((i__10950__auto___13325 < len__10949__auto___13324)){
args__10956__auto__.push((arguments[i__10950__auto___13325]));

var G__13326 = (i__10950__auto___13325 + (1));
i__10950__auto___13325 = G__13326;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13323))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13323){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13323);
});})(g__11054__auto___13323))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11054__auto___13323){
return (function (seq13263){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13263));
});})(g__11054__auto___13323))
;


var g__11054__auto___13327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11054__auto___13327){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13328 = arguments.length;
var i__10950__auto___13329 = (0);
while(true){
if((i__10950__auto___13329 < len__10949__auto___13328)){
args__10956__auto__.push((arguments[i__10950__auto___13329]));

var G__13330 = (i__10950__auto___13329 + (1));
i__10950__auto___13329 = G__13330;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13327))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13327){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13327);
});})(g__11054__auto___13327))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11054__auto___13327){
return (function (seq13264){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13264));
});})(g__11054__auto___13327))
;


var g__11054__auto___13331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11054__auto___13331){
return (function cljs$spec$impl$gen$string(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13332 = arguments.length;
var i__10950__auto___13333 = (0);
while(true){
if((i__10950__auto___13333 < len__10949__auto___13332)){
args__10956__auto__.push((arguments[i__10950__auto___13333]));

var G__13334 = (i__10950__auto___13333 + (1));
i__10950__auto___13333 = G__13334;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13331))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13331){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13331);
});})(g__11054__auto___13331))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11054__auto___13331){
return (function (seq13265){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13265));
});})(g__11054__auto___13331))
;


var g__11054__auto___13335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11054__auto___13335){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13336 = arguments.length;
var i__10950__auto___13337 = (0);
while(true){
if((i__10950__auto___13337 < len__10949__auto___13336)){
args__10956__auto__.push((arguments[i__10950__auto___13337]));

var G__13338 = (i__10950__auto___13337 + (1));
i__10950__auto___13337 = G__13338;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13335))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13335){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13335);
});})(g__11054__auto___13335))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11054__auto___13335){
return (function (seq13266){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13266));
});})(g__11054__auto___13335))
;


var g__11054__auto___13339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11054__auto___13339){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13340 = arguments.length;
var i__10950__auto___13341 = (0);
while(true){
if((i__10950__auto___13341 < len__10949__auto___13340)){
args__10956__auto__.push((arguments[i__10950__auto___13341]));

var G__13342 = (i__10950__auto___13341 + (1));
i__10950__auto___13341 = G__13342;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13339))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13339){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13339);
});})(g__11054__auto___13339))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11054__auto___13339){
return (function (seq13267){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13267));
});})(g__11054__auto___13339))
;


var g__11054__auto___13343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11054__auto___13343){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13344 = arguments.length;
var i__10950__auto___13345 = (0);
while(true){
if((i__10950__auto___13345 < len__10949__auto___13344)){
args__10956__auto__.push((arguments[i__10950__auto___13345]));

var G__13346 = (i__10950__auto___13345 + (1));
i__10950__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13343))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13343){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13343);
});})(g__11054__auto___13343))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11054__auto___13343){
return (function (seq13268){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13268));
});})(g__11054__auto___13343))
;


var g__11054__auto___13347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11054__auto___13347){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13348 = arguments.length;
var i__10950__auto___13349 = (0);
while(true){
if((i__10950__auto___13349 < len__10949__auto___13348)){
args__10956__auto__.push((arguments[i__10950__auto___13349]));

var G__13350 = (i__10950__auto___13349 + (1));
i__10950__auto___13349 = G__13350;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13347))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13347){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13347);
});})(g__11054__auto___13347))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11054__auto___13347){
return (function (seq13269){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13269));
});})(g__11054__auto___13347))
;


var g__11054__auto___13351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11054__auto___13351){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13352 = arguments.length;
var i__10950__auto___13353 = (0);
while(true){
if((i__10950__auto___13353 < len__10949__auto___13352)){
args__10956__auto__.push((arguments[i__10950__auto___13353]));

var G__13354 = (i__10950__auto___13353 + (1));
i__10950__auto___13353 = G__13354;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});})(g__11054__auto___13351))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11054__auto___13351){
return (function (args){
return cljs.core.deref.call(null,g__11054__auto___13351);
});})(g__11054__auto___13351))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11054__auto___13351){
return (function (seq13270){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13270));
});})(g__11054__auto___13351))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10956__auto__ = [];
var len__10949__auto___13357 = arguments.length;
var i__10950__auto___13358 = (0);
while(true){
if((i__10950__auto___13358 < len__10949__auto___13357)){
args__10956__auto__.push((arguments[i__10950__auto___13358]));

var G__13359 = (i__10950__auto___13358 + (1));
i__10950__auto___13358 = G__13359;
continue;
} else {
}
break;
}

var argseq__10957__auto__ = ((((0) < args__10956__auto__.length))?(new cljs.core.IndexedSeq(args__10956__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10957__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13355_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13355_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13356){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13356));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13360_SHARP_){
return (new Date(p1__13360_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map