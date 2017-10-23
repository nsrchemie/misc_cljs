// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12089){
var map__12114 = p__12089;
var map__12114__$1 = ((((!((map__12114 == null)))?((((map__12114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12114):map__12114);
var m = map__12114__$1;
var n = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12116_12138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12117_12139 = null;
var count__12118_12140 = (0);
var i__12119_12141 = (0);
while(true){
if((i__12119_12141 < count__12118_12140)){
var f_12142 = cljs.core._nth.call(null,chunk__12117_12139,i__12119_12141);
cljs.core.println.call(null,"  ",f_12142);

var G__12143 = seq__12116_12138;
var G__12144 = chunk__12117_12139;
var G__12145 = count__12118_12140;
var G__12146 = (i__12119_12141 + (1));
seq__12116_12138 = G__12143;
chunk__12117_12139 = G__12144;
count__12118_12140 = G__12145;
i__12119_12141 = G__12146;
continue;
} else {
var temp__4657__auto___12147 = cljs.core.seq.call(null,seq__12116_12138);
if(temp__4657__auto___12147){
var seq__12116_12148__$1 = temp__4657__auto___12147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12116_12148__$1)){
var c__10655__auto___12149 = cljs.core.chunk_first.call(null,seq__12116_12148__$1);
var G__12150 = cljs.core.chunk_rest.call(null,seq__12116_12148__$1);
var G__12151 = c__10655__auto___12149;
var G__12152 = cljs.core.count.call(null,c__10655__auto___12149);
var G__12153 = (0);
seq__12116_12138 = G__12150;
chunk__12117_12139 = G__12151;
count__12118_12140 = G__12152;
i__12119_12141 = G__12153;
continue;
} else {
var f_12154 = cljs.core.first.call(null,seq__12116_12148__$1);
cljs.core.println.call(null,"  ",f_12154);

var G__12155 = cljs.core.next.call(null,seq__12116_12148__$1);
var G__12156 = null;
var G__12157 = (0);
var G__12158 = (0);
seq__12116_12138 = G__12155;
chunk__12117_12139 = G__12156;
count__12118_12140 = G__12157;
i__12119_12141 = G__12158;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12159 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9836__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9836__auto__)){
return or__9836__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12159);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12159)))?cljs.core.second.call(null,arglists_12159):arglists_12159));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12120_12160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12121_12161 = null;
var count__12122_12162 = (0);
var i__12123_12163 = (0);
while(true){
if((i__12123_12163 < count__12122_12162)){
var vec__12124_12164 = cljs.core._nth.call(null,chunk__12121_12161,i__12123_12163);
var name_12165 = cljs.core.nth.call(null,vec__12124_12164,(0),null);
var map__12127_12166 = cljs.core.nth.call(null,vec__12124_12164,(1),null);
var map__12127_12167__$1 = ((((!((map__12127_12166 == null)))?((((map__12127_12166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12127_12166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12127_12166):map__12127_12166);
var doc_12168 = cljs.core.get.call(null,map__12127_12167__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12169 = cljs.core.get.call(null,map__12127_12167__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12165);

cljs.core.println.call(null," ",arglists_12169);

if(cljs.core.truth_(doc_12168)){
cljs.core.println.call(null," ",doc_12168);
} else {
}

var G__12170 = seq__12120_12160;
var G__12171 = chunk__12121_12161;
var G__12172 = count__12122_12162;
var G__12173 = (i__12123_12163 + (1));
seq__12120_12160 = G__12170;
chunk__12121_12161 = G__12171;
count__12122_12162 = G__12172;
i__12123_12163 = G__12173;
continue;
} else {
var temp__4657__auto___12174 = cljs.core.seq.call(null,seq__12120_12160);
if(temp__4657__auto___12174){
var seq__12120_12175__$1 = temp__4657__auto___12174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12120_12175__$1)){
var c__10655__auto___12176 = cljs.core.chunk_first.call(null,seq__12120_12175__$1);
var G__12177 = cljs.core.chunk_rest.call(null,seq__12120_12175__$1);
var G__12178 = c__10655__auto___12176;
var G__12179 = cljs.core.count.call(null,c__10655__auto___12176);
var G__12180 = (0);
seq__12120_12160 = G__12177;
chunk__12121_12161 = G__12178;
count__12122_12162 = G__12179;
i__12123_12163 = G__12180;
continue;
} else {
var vec__12129_12181 = cljs.core.first.call(null,seq__12120_12175__$1);
var name_12182 = cljs.core.nth.call(null,vec__12129_12181,(0),null);
var map__12132_12183 = cljs.core.nth.call(null,vec__12129_12181,(1),null);
var map__12132_12184__$1 = ((((!((map__12132_12183 == null)))?((((map__12132_12183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12132_12183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12132_12183):map__12132_12183);
var doc_12185 = cljs.core.get.call(null,map__12132_12184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12186 = cljs.core.get.call(null,map__12132_12184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12182);

cljs.core.println.call(null," ",arglists_12186);

if(cljs.core.truth_(doc_12185)){
cljs.core.println.call(null," ",doc_12185);
} else {
}

var G__12187 = cljs.core.next.call(null,seq__12120_12175__$1);
var G__12188 = null;
var G__12189 = (0);
var G__12190 = (0);
seq__12120_12160 = G__12187;
chunk__12121_12161 = G__12188;
count__12122_12162 = G__12189;
i__12123_12163 = G__12190;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12134 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12135 = null;
var count__12136 = (0);
var i__12137 = (0);
while(true){
if((i__12137 < count__12136)){
var role = cljs.core._nth.call(null,chunk__12135,i__12137);
var temp__4657__auto___12191__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12191__$1)){
var spec_12192 = temp__4657__auto___12191__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12192));
} else {
}

var G__12193 = seq__12134;
var G__12194 = chunk__12135;
var G__12195 = count__12136;
var G__12196 = (i__12137 + (1));
seq__12134 = G__12193;
chunk__12135 = G__12194;
count__12136 = G__12195;
i__12137 = G__12196;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12134);
if(temp__4657__auto____$1){
var seq__12134__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12134__$1)){
var c__10655__auto__ = cljs.core.chunk_first.call(null,seq__12134__$1);
var G__12197 = cljs.core.chunk_rest.call(null,seq__12134__$1);
var G__12198 = c__10655__auto__;
var G__12199 = cljs.core.count.call(null,c__10655__auto__);
var G__12200 = (0);
seq__12134 = G__12197;
chunk__12135 = G__12198;
count__12136 = G__12199;
i__12137 = G__12200;
continue;
} else {
var role = cljs.core.first.call(null,seq__12134__$1);
var temp__4657__auto___12201__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12201__$2)){
var spec_12202 = temp__4657__auto___12201__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12202));
} else {
}

var G__12203 = cljs.core.next.call(null,seq__12134__$1);
var G__12204 = null;
var G__12205 = (0);
var G__12206 = (0);
seq__12134 = G__12203;
chunk__12135 = G__12204;
count__12136 = G__12205;
i__12137 = G__12206;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map