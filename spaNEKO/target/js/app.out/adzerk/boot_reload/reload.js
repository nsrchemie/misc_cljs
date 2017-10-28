// Compiled by ClojureScript 1.9.456 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8405_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8405_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8410 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8411 = null;
var count__8412 = (0);
var i__8413 = (0);
while(true){
if((i__8413 < count__8412)){
var s = cljs.core._nth.call(null,chunk__8411,i__8413);
var temp__4657__auto___8414 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8414)){
var sheet_8415 = temp__4657__auto___8414;
var temp__4657__auto___8416__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8415.href,changed);
if(cljs.core.truth_(temp__4657__auto___8416__$1)){
var href_uri_8417 = temp__4657__auto___8416__$1;
sheet_8415.ownerNode.href = href_uri_8417.makeUnique().toString();
} else {
}
} else {
}

var G__8418 = seq__8410;
var G__8419 = chunk__8411;
var G__8420 = count__8412;
var G__8421 = (i__8413 + (1));
seq__8410 = G__8418;
chunk__8411 = G__8419;
count__8412 = G__8420;
i__8413 = G__8421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8410);
if(temp__4657__auto__){
var seq__8410__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410__$1)){
var c__7915__auto__ = cljs.core.chunk_first.call(null,seq__8410__$1);
var G__8422 = cljs.core.chunk_rest.call(null,seq__8410__$1);
var G__8423 = c__7915__auto__;
var G__8424 = cljs.core.count.call(null,c__7915__auto__);
var G__8425 = (0);
seq__8410 = G__8422;
chunk__8411 = G__8423;
count__8412 = G__8424;
i__8413 = G__8425;
continue;
} else {
var s = cljs.core.first.call(null,seq__8410__$1);
var temp__4657__auto___8426__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8426__$1)){
var sheet_8427 = temp__4657__auto___8426__$1;
var temp__4657__auto___8428__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8427.href,changed);
if(cljs.core.truth_(temp__4657__auto___8428__$2)){
var href_uri_8429 = temp__4657__auto___8428__$2;
sheet_8427.ownerNode.href = href_uri_8429.makeUnique().toString();
} else {
}
} else {
}

var G__8430 = cljs.core.next.call(null,seq__8410__$1);
var G__8431 = null;
var G__8432 = (0);
var G__8433 = (0);
seq__8410 = G__8430;
chunk__8411 = G__8431;
count__8412 = G__8432;
i__8413 = G__8433;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8438 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8439 = null;
var count__8440 = (0);
var i__8441 = (0);
while(true){
if((i__8441 < count__8440)){
var s = cljs.core._nth.call(null,chunk__8439,i__8441);
var temp__4657__auto___8442 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8442)){
var image_8443 = temp__4657__auto___8442;
var temp__4657__auto___8444__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8443.src,changed);
if(cljs.core.truth_(temp__4657__auto___8444__$1)){
var href_uri_8445 = temp__4657__auto___8444__$1;
image_8443.src = href_uri_8445.makeUnique().toString();
} else {
}
} else {
}

var G__8446 = seq__8438;
var G__8447 = chunk__8439;
var G__8448 = count__8440;
var G__8449 = (i__8441 + (1));
seq__8438 = G__8446;
chunk__8439 = G__8447;
count__8440 = G__8448;
i__8441 = G__8449;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8438);
if(temp__4657__auto__){
var seq__8438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8438__$1)){
var c__7915__auto__ = cljs.core.chunk_first.call(null,seq__8438__$1);
var G__8450 = cljs.core.chunk_rest.call(null,seq__8438__$1);
var G__8451 = c__7915__auto__;
var G__8452 = cljs.core.count.call(null,c__7915__auto__);
var G__8453 = (0);
seq__8438 = G__8450;
chunk__8439 = G__8451;
count__8440 = G__8452;
i__8441 = G__8453;
continue;
} else {
var s = cljs.core.first.call(null,seq__8438__$1);
var temp__4657__auto___8454__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8454__$1)){
var image_8455 = temp__4657__auto___8454__$1;
var temp__4657__auto___8456__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8455.src,changed);
if(cljs.core.truth_(temp__4657__auto___8456__$2)){
var href_uri_8457 = temp__4657__auto___8456__$2;
image_8455.src = href_uri_8457.makeUnique().toString();
} else {
}
} else {
}

var G__8458 = cljs.core.next.call(null,seq__8438__$1);
var G__8459 = null;
var G__8460 = (0);
var G__8461 = (0);
seq__8438 = G__8458;
chunk__8439 = G__8459;
count__8440 = G__8460;
i__8441 = G__8461;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8464){
var map__8467 = p__8464;
var map__8467__$1 = ((((!((map__8467 == null)))?((((map__8467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8467):map__8467);
var on_jsload = cljs.core.get.call(null,map__8467__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8467,map__8467__$1,on_jsload){
return (function (p1__8462_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8462_SHARP_,".js");
});})(map__8467,map__8467__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8467,map__8467__$1,on_jsload){
return (function (p1__8463_SHARP_){
return goog.Uri.parse(p1__8463_SHARP_).makeUnique();
});})(js_files,map__8467,map__8467__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8467,map__8467__$1,on_jsload){
return (function() { 
var G__8469__delegate = function (_){
return on_jsload.call(null);
};
var G__8469 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8470__i = 0, G__8470__a = new Array(arguments.length -  0);
while (G__8470__i < G__8470__a.length) {G__8470__a[G__8470__i] = arguments[G__8470__i + 0]; ++G__8470__i;}
  _ = new cljs.core.IndexedSeq(G__8470__a,0);
} 
return G__8469__delegate.call(this,_);};
G__8469.cljs$lang$maxFixedArity = 0;
G__8469.cljs$lang$applyTo = (function (arglist__8471){
var _ = cljs.core.seq(arglist__8471);
return G__8469__delegate(_);
});
G__8469.cljs$core$IFn$_invoke$arity$variadic = G__8469__delegate;
return G__8469;
})()
;})(js_files,map__8467,map__8467__$1,on_jsload))
,((function (js_files,map__8467,map__8467__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8467,map__8467__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8476_8480 = cljs.core.seq.call(null,things_to_log);
var chunk__8477_8481 = null;
var count__8478_8482 = (0);
var i__8479_8483 = (0);
while(true){
if((i__8479_8483 < count__8478_8482)){
var t_8484 = cljs.core._nth.call(null,chunk__8477_8481,i__8479_8483);
console.log(t_8484);

var G__8485 = seq__8476_8480;
var G__8486 = chunk__8477_8481;
var G__8487 = count__8478_8482;
var G__8488 = (i__8479_8483 + (1));
seq__8476_8480 = G__8485;
chunk__8477_8481 = G__8486;
count__8478_8482 = G__8487;
i__8479_8483 = G__8488;
continue;
} else {
var temp__4657__auto___8489 = cljs.core.seq.call(null,seq__8476_8480);
if(temp__4657__auto___8489){
var seq__8476_8490__$1 = temp__4657__auto___8489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_8490__$1)){
var c__7915__auto___8491 = cljs.core.chunk_first.call(null,seq__8476_8490__$1);
var G__8492 = cljs.core.chunk_rest.call(null,seq__8476_8490__$1);
var G__8493 = c__7915__auto___8491;
var G__8494 = cljs.core.count.call(null,c__7915__auto___8491);
var G__8495 = (0);
seq__8476_8480 = G__8492;
chunk__8477_8481 = G__8493;
count__8478_8482 = G__8494;
i__8479_8483 = G__8495;
continue;
} else {
var t_8496 = cljs.core.first.call(null,seq__8476_8490__$1);
console.log(t_8496);

var G__8497 = cljs.core.next.call(null,seq__8476_8490__$1);
var G__8498 = null;
var G__8499 = (0);
var G__8500 = (0);
seq__8476_8480 = G__8497;
chunk__8477_8481 = G__8498;
count__8478_8482 = G__8499;
i__8479_8483 = G__8500;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8501_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8501_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__8503 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8503);

adzerk.boot_reload.reload.reload_css.call(null,G__8503);

adzerk.boot_reload.reload.reload_img.call(null,G__8503);

return G__8503;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map