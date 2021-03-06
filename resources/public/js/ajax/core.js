// Compiled by ClojureScript 0.0-2356
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('cognitect.transit');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj20331 = {};return obj20331;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__15125__auto__ = this$;if(and__15125__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__15125__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__15773__auto__ = (((this$ == null))?null:this$);return (function (){var or__15137__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__15773__auto__)]);if(or__15137__auto__)
{return or__15137__auto__;
} else
{var or__15137__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__15137__auto____$1)
{return or__15137__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj20333 = {};return obj20333;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__15125__auto__ = this$;if(and__15125__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__15125__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__15773__auto__ = (((this$ == null))?null:this$);return (function (){var or__15137__auto__ = (ajax.core._abort[goog.typeOf(x__15773__auto__)]);if(or__15137__auto__)
{return or__15137__auto__;
} else
{var or__15137__auto____$1 = (ajax.core._abort["_"]);if(or__15137__auto____$1)
{return or__15137__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
ajax.core.DirectlySubmittable = (function (){var obj20335 = {};return obj20335;
})();
String.prototype.ajax$core$DirectlySubmittable$ = true;
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__20336){var map__20337 = p__20336;var map__20337__$1 = ((cljs.core.seq_QMARK_.call(null,map__20337))?cljs.core.apply.call(null,cljs.core.hash_map,map__20337):map__20337);var timeout = cljs.core.get.call(null,map__20337__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));var G__20338 = (new goog.net.XhrIo());goog.events.listen(G__20338,goog.net.EventType.COMPLETE,handler);
G__20338.setTimeoutInterval((function (){var or__15137__auto__ = timeout;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return (0);
}
})());
G__20338.send(uri,method,body,headers);
return G__20338;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__20339){var map__20340 = p__20339;var map__20340__$1 = ((cljs.core.seq_QMARK_.call(null,map__20340))?cljs.core.apply.call(null,cljs.core.hash_map,map__20340):map__20340);var max_retries = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));var priority = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));var timeout = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));var id = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function() {
var edn_response_format = null;
var edn_response_format__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});
var edn_response_format__1 = (function (opts){return edn_response_format.call(null);
});
edn_response_format = function(opts){
switch(arguments.length){
case 0:
return edn_response_format__0.call(this);
case 1:
return edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edn_response_format.cljs$core$IFn$_invoke$arity$0 = edn_response_format__0;
edn_response_format.cljs$core$IFn$_invoke$arity$1 = edn_response_format__1;
return edn_response_format;
})()
;
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var transit_write = null;
var transit_write__1 = (function (writer){return (function (params){return cognitect.transit.write.call(null,writer,params);
});
});
var transit_write__2 = (function (writer,params){return cognitect.transit.write.call(null,writer,params);
});
transit_write = function(writer,params){
switch(arguments.length){
case 1:
return transit_write__1.call(this,writer);
case 2:
return transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_write.cljs$core$IFn$_invoke$arity$1 = transit_write__1;
transit_write.cljs$core$IFn$_invoke$arity$2 = transit_write__2;
return transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var transit_request_format = null;
var transit_request_format__0 = (function (){return transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var transit_request_format__1 = (function (p__20341){var map__20343 = p__20341;var map__20343__$1 = ((cljs.core.seq_QMARK_.call(null,map__20343))?cljs.core.apply.call(null,cljs.core.hash_map,map__20343):map__20343);var opts = map__20343__$1;var writer = cljs.core.get.call(null,map__20343__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));var type = cljs.core.get.call(null,map__20343__$1,new cljs.core.Keyword(null,"type","type",1174270348));var writer__$1 = (function (){var or__15137__auto__ = writer;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return cognitect.transit.writer.call(null,(function (){var or__15137__auto____$1 = type;if(cljs.core.truth_(or__15137__auto____$1))
{return or__15137__auto____$1;
} else
{return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),ajax.core.transit_content_type], null);
});
transit_request_format = function(p__20341){
switch(arguments.length){
case 0:
return transit_request_format__0.call(this);
case 1:
return transit_request_format__1.call(this,p__20341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_request_format.cljs$core$IFn$_invoke$arity$0 = transit_request_format__0;
transit_request_format.cljs$core$IFn$_invoke$arity$1 = transit_request_format__1;
return transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var transit_read = null;
var transit_read__1 = (function (reader){return (function (raw,xhrio){var text = xhrio.getResponseText();var data = cognitect.transit.read.call(null,reader,text);if(cljs.core.truth_(raw))
{return data;
} else
{return cljs.core.js__GT_clj.call(null,data);
}
});
});
var transit_read__2 = (function (reader,raw){return (function (xhrio){var text = xhrio.getResponseText();var data = cognitect.transit.read.call(null,reader,text);if(cljs.core.truth_(raw))
{return data;
} else
{return cljs.core.js__GT_clj.call(null,data);
}
});
});
var transit_read__3 = (function (reader,raw,xhrio){var text = xhrio.getResponseText();var data = cognitect.transit.read.call(null,reader,text);if(cljs.core.truth_(raw))
{return data;
} else
{return cljs.core.js__GT_clj.call(null,data);
}
});
transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return transit_read__1.call(this,reader);
case 2:
return transit_read__2.call(this,reader,raw);
case 3:
return transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_read.cljs$core$IFn$_invoke$arity$1 = transit_read__1;
transit_read.cljs$core$IFn$_invoke$arity$2 = transit_read__2;
transit_read.cljs$core$IFn$_invoke$arity$3 = transit_read__3;
return transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var transit_response_format = null;
var transit_response_format__0 = (function (){return transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var transit_response_format__1 = (function (p__20344){var map__20346 = p__20344;var map__20346__$1 = ((cljs.core.seq_QMARK_.call(null,map__20346))?cljs.core.apply.call(null,cljs.core.hash_map,map__20346):map__20346);var opts = map__20346__$1;var raw = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var reader = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"reader","reader",169660853));var type = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"type","type",1174270348));var reader__$1 = (function (){var or__15137__auto__ = reader;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return cognitect.transit.reader.call(null,(function (){var or__15137__auto____$1 = reader;if(cljs.core.truth_(or__15137__auto____$1))
{return or__15137__auto____$1;
} else
{return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit"], null);
});
transit_response_format = function(p__20344){
switch(arguments.length){
case 0:
return transit_response_format__0.call(this);
case 1:
return transit_response_format__1.call(this,p__20344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_response_format.cljs$core$IFn$_invoke$arity$0 = transit_response_format__0;
transit_response_format.cljs$core$IFn$_invoke$arity$1 = transit_response_format__1;
return transit_response_format;
})()
;
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var raw_response_format = null;
var raw_response_format__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});
var raw_response_format__1 = (function (opts){return raw_response_format.call(null);
});
raw_response_format = function(opts){
switch(arguments.length){
case 0:
return raw_response_format__0.call(this);
case 1:
return raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_response_format.cljs$core$IFn$_invoke$arity$0 = raw_response_format__0;
raw_response_format.cljs$core$IFn$_invoke$arity$1 = raw_response_format__1;
return raw_response_format;
})()
;
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function() {
var json_read = null;
var json_read__1 = (function (prefix){return (function (raw,keywords_QMARK_,xhrio){var json = xhrio.getResponseJson(prefix);if(cljs.core.truth_(raw))
{return json;
} else
{return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__2 = (function (prefix,raw){return (function (keywords_QMARK_,xhrio){var json = xhrio.getResponseJson(prefix);if(cljs.core.truth_(raw))
{return json;
} else
{return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__3 = (function (prefix,raw,keywords_QMARK_){return (function (xhrio){var json = xhrio.getResponseJson(prefix);if(cljs.core.truth_(raw))
{return json;
} else
{return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){var json = xhrio.getResponseJson(prefix);if(cljs.core.truth_(raw))
{return json;
} else
{return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return json_read__1.call(this,prefix);
case 2:
return json_read__2.call(this,prefix,raw);
case 3:
return json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_read.cljs$core$IFn$_invoke$arity$1 = json_read__1;
json_read.cljs$core$IFn$_invoke$arity$2 = json_read__2;
json_read.cljs$core$IFn$_invoke$arity$3 = json_read__3;
json_read.cljs$core$IFn$_invoke$arity$4 = json_read__4;
return json_read;
})()
;
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should think about using this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function() {
var json_response_format = null;
var json_response_format__0 = (function (){return json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var json_response_format__1 = (function (p__20347){var map__20349 = p__20347;var map__20349__$1 = ((cljs.core.seq_QMARK_.call(null,map__20349))?cljs.core.apply.call(null,cljs.core.hash_map,map__20349):map__20349);var raw = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var keywords_QMARK_ = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));var prefix = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),("JSON"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?(" prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null)))], null);
});
json_response_format = function(p__20347){
switch(arguments.length){
case 0:
return json_response_format__0.call(this);
case 1:
return json_response_format__1.call(this,p__20347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_response_format.cljs$core$IFn$_invoke$arity$0 = json_response_format__0;
json_response_format.cljs$core$IFn$_invoke$arity$1 = json_response_format__1;
return json_response_format;
})()
;
ajax.core.get_response_format = (function get_response_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else
{throw (new Error(("unrecognized response format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__20350,xhrio){var map__20352 = p__20350;var map__20352__$1 = ((cljs.core.seq_QMARK_.call(null,map__20352))?cljs.core.apply.call(null,cljs.core.hash_map,map__20352):map__20352);var description = cljs.core.get.call(null,map__20352__$1,new cljs.core.Keyword(null,"description","description",-1428560544));var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);var status_text = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return parse_error;
} else
{return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
/**
* @param {...*} var_args
*/
ajax.core.fail = (function() { 
var fail__delegate = function (status,status_text,failure,params){var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
};
var fail = function (status,status_text,failure,var_args){
var params = null;if (arguments.length > 3) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return fail__delegate.call(this,status,status_text,failure,params);};
fail.cljs$lang$maxFixedArity = 3;
fail.cljs$lang$applyTo = (function (arglist__20353){
var status = cljs.core.first(arglist__20353);
arglist__20353 = cljs.core.next(arglist__20353);
var status_text = cljs.core.first(arglist__20353);
arglist__20353 = cljs.core.next(arglist__20353);
var failure = cljs.core.first(arglist__20353);
var params = cljs.core.rest(arglist__20353);
return fail__delegate(status,status_text,failure,params);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
ajax.core.interpret_response = (function interpret_response(p__20354,response){var map__20358 = p__20354;var map__20358__$1 = ((cljs.core.seq_QMARK_.call(null,map__20358))?cljs.core.apply.call(null,cljs.core.hash_map,map__20358):map__20358);var format = map__20358__$1;var read = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword(null,"read","read",1140058661));try{var xhrio = response.target;var status = xhrio.getStatus();var fail = cljs.core.partial.call(null,ajax.core.fail,status);if(cljs.core._EQ_.call(null,(-1),status))
{if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else
{return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}
} else
{try{var response__$1 = read.call(null,xhrio);if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return fail.call(null,xhrio.getStatusText(),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1);
}
}catch (e20360){if((e20360 instanceof Object))
{var e = e20360;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else
{throw e20360;

}
}}
}catch (e20359){if((e20359 instanceof Object))
{var e = e20359;return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else
{throw e20359;

}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.params_to_str.call(null,params)));
} else
{return uri;
}
});
ajax.core.get_request_format = (function get_request_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else
{return null;

}
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else
{return method;
}
});
ajax.core.process_inputs = (function process_inputs(p__20361){var map__20365 = p__20361;var map__20365__$1 = ((cljs.core.seq_QMARK_.call(null,map__20365))?cljs.core.apply.call(null,cljs.core.hash_map,map__20365):map__20365);var headers = cljs.core.get.call(null,map__20365__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));var params = cljs.core.get.call(null,map__20365__$1,new cljs.core.Keyword(null,"params","params",710516235));var format = cljs.core.get.call(null,map__20365__$1,new cljs.core.Keyword(null,"format","format",-1306924766));var method = cljs.core.get.call(null,map__20365__$1,new cljs.core.Keyword(null,"method","method",55703592));var uri = cljs.core.get.call(null,map__20365__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else
{var map__20366 = ajax.core.get_request_format.call(null,format);var map__20366__$1 = ((cljs.core.seq_QMARK_.call(null,map__20366))?cljs.core.apply.call(null,cljs.core.hash_map,map__20366):map__20366);var content_type = cljs.core.get.call(null,map__20366__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));var write = cljs.core.get.call(null,map__20366__$1,new cljs.core.Keyword(null,"write","write",-1857649168));var body = ((!((write == null)))?write.call(null,params):(((function (){var G__20367 = params;if(G__20367)
{var bit__15800__auto__ = null;if(cljs.core.truth_((function (){var or__15137__auto__ = bit__15800__auto__;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return G__20367.ajax$core$DirectlySubmittable$;
}
})()))
{return true;
} else
{if((!G__20367.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__20367);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__20367);
}
})())?params:(function(){throw (new Error(("unrecognized request format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))))})()
));var content_type__$1 = (cljs.core.truth_(content_type)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type], null):null);var headers__$1 = cljs.core.merge.call(null,(function (){var or__15137__auto__ = headers;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$1);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.js_handler = (function() {
var js_handler = null;
var js_handler__1 = (function (response_format){return (function (handler,xhrio){var response = ajax.core.interpret_response.call(null,response_format,xhrio);return handler.call(null,response);
});
});
var js_handler__2 = (function (response_format,handler){return (function (xhrio){var response = ajax.core.interpret_response.call(null,response_format,xhrio);return handler.call(null,response);
});
});
var js_handler__3 = (function (response_format,handler,xhrio){var response = ajax.core.interpret_response.call(null,response_format,xhrio);return handler.call(null,response);
});
js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return js_handler__1.call(this,response_format);
case 2:
return js_handler__2.call(this,response_format,handler);
case 3:
return js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_handler.cljs$core$IFn$_invoke$arity$1 = js_handler__1;
js_handler.cljs$core$IFn$_invoke$arity$2 = js_handler__2;
js_handler.cljs$core$IFn$_invoke$arity$3 = js_handler__3;
return js_handler;
})()
;
ajax.core.base_handler = (function base_handler(response_format,p__20368){var map__20370 = p__20368;var map__20370__$1 = ((cljs.core.seq_QMARK_.call(null,map__20370))?cljs.core.apply.call(null,cljs.core.hash_map,map__20370):map__20370);var handler = cljs.core.get.call(null,map__20370__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));if(cljs.core.truth_(handler))
{return ajax.core.js_handler.call(null,response_format,handler);
} else
{throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax_request(p__20371){var map__20374 = p__20371;var map__20374__$1 = ((cljs.core.seq_QMARK_.call(null,map__20374))?cljs.core.apply.call(null,cljs.core.hash_map,map__20374):map__20374);var opts = map__20374__$1;var manager = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));var response_format = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));var method = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword(null,"method","method",55703592));var uri = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var response_format__$1 = ajax.core.get_response_format.call(null,response_format);var method__$1 = ajax.core.normalize_method.call(null,method);var vec__20375 = ajax.core.process_inputs.call(null,opts);var uri__$1 = cljs.core.nth.call(null,vec__20375,(0),null);var body = cljs.core.nth.call(null,vec__20375,(1),null);var headers = cljs.core.nth.call(null,vec__20375,(2),null);var handler = ajax.core.base_handler.call(null,response_format__$1,opts);return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn",ajax.core.edn_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ajax.core.raw_response_format], null)], null);
ajax.core.detect_content_type = (function() {
var detect_content_type = null;
var detect_content_type__1 = (function (content_type){return (function (p__20381){var vec__20382 = p__20381;var substring = cljs.core.nth.call(null,vec__20382,(0),null);return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});
});
var detect_content_type__2 = (function (content_type,p__20376){var vec__20380 = p__20376;var substring = cljs.core.nth.call(null,vec__20380,(0),null);return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});
detect_content_type = function(content_type,p__20376){
switch(arguments.length){
case 1:
return detect_content_type__1.call(this,content_type);
case 2:
return detect_content_type__2.call(this,content_type,p__20376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_content_type.cljs$core$IFn$_invoke$arity$1 = detect_content_type__1;
detect_content_type.cljs$core$IFn$_invoke$arity$2 = detect_content_type__2;
return detect_content_type;
})()
;
ajax.core.get_default_format = (function get_default_format(xhrio,p__20383){var map__20385 = p__20383;var map__20385__$1 = ((cljs.core.seq_QMARK_.call(null,map__20385))?cljs.core.apply.call(null,cljs.core.hash_map,map__20385):map__20385);var opts = map__20385__$1;var defaults = cljs.core.get.call(null,map__20385__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));var f = ajax.core.detect_content_type.call(null,(function (){var or__15137__auto__ = xhrio.getResponseHeader("Content-Type");if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return "";
}
})());return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,f,defaults))).call(null,opts);
});
ajax.core.detect_response_format_read = (function() {
var detect_response_format_read = null;
var detect_response_format_read__1 = (function (opts){return (function (xhrio){return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});
var detect_response_format_read__2 = (function (opts,xhrio){return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return detect_response_format_read__1.call(this,opts);
case 2:
return detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = detect_response_format_read__1;
detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = detect_response_format_read__2;
return detect_response_format_read;
})()
;
ajax.core.detect_response_format = (function() {
var detect_response_format = null;
var detect_response_format__0 = (function (){return detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaults","defaults",976027214),ajax.core.default_formats], null));
});
var detect_response_format__1 = (function (opts){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),"(from content type)"], null);
});
detect_response_format = function(opts){
switch(arguments.length){
case 0:
return detect_response_format__0.call(this);
case 1:
return detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format.cljs$core$IFn$_invoke$arity$0 = detect_response_format__0;
detect_response_format.cljs$core$IFn$_invoke$arity$1 = detect_response_format__1;
return detect_response_format;
})()
;
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.fn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else
{if((format == null))
{return ajax.core.transit_request_format.call(null,format_params);
} else
{var G__20387 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__20387) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.fn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else
{if((format == null))
{return ajax.core.detect_response_format.call(null);
} else
{var G__20390 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__20390) {
case "detect":
return ajax.core.detect_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__20392){var map__20397 = p__20392;var map__20397__$1 = ((cljs.core.seq_QMARK_.call(null,map__20397))?cljs.core.apply.call(null,cljs.core.hash_map,map__20397):map__20397);var finally$ = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));var error_handler = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));var handler = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));return ((function (map__20397,map__20397__$1,finally$,error_handler,handler){
return (function easy_handler(p__20398){var vec__20400 = p__20398;var ok = cljs.core.nth.call(null,vec__20400,(0),null);var result = cljs.core.nth.call(null,vec__20400,(1),null);var temp__4124__auto___20401 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___20401))
{var h_20402 = temp__4124__auto___20401;h_20402.call(null,result);
} else
{}
if(cljs.core.fn_QMARK_.call(null,finally$))
{return finally$.call(null);
} else
{return null;
}
});
;})(map__20397,map__20397__$1,finally$,error_handler,handler))
});
ajax.core.transform_opts = (function transform_opts(p__20403){var map__20407 = p__20403;var map__20407__$1 = ((cljs.core.seq_QMARK_.call(null,map__20407))?cljs.core.apply.call(null,cljs.core.hash_map,map__20407):map__20407);var opts = map__20407__$1;var params = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"params","params",710516235));var response_format = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));var format = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"format","format",-1306924766));var method = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"method","method",55703592));var needs_format = !((function (){var or__15137__auto__ = (function (){var G__20409 = params;if(G__20409)
{var bit__15800__auto__ = null;if(cljs.core.truth_((function (){var or__15137__auto__ = bit__15800__auto__;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return G__20409.ajax$core$DirectlySubmittable$;
}
})()))
{return true;
} else
{if((!G__20409.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__20409);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__20409);
}
})();if(or__15137__auto__)
{return or__15137__auto__;
} else
{return cljs.core._EQ_.call(null,method,"GET");
}
})());var rf = (cljs.core.truth_((function (){var or__15137__auto__ = format;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),(function (){var or__15137__auto__ = rf;if(cljs.core.truth_(or__15137__auto__))
{return or__15137__auto__;
} else
{if(needs_format)
{throw (new Error(("unrecognized request format: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__15137__auto____$1 = format;if(cljs.core.truth_(or__15137__auto____$1))
{return or__15137__auto____$1;
} else
{return "NIL";
}
})())+"'")));
} else
{return null;
}
}
})(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function easy_ajax_request(uri,method,opts){return ajax.core.ajax_request.call(null,cljs.core.assoc.call(null,ajax.core.transform_opts.call(null,opts),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var GET = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,opts);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20410){
var uri = cljs.core.first(arglist__20410);
var opts = cljs.core.rest(arglist__20410);
return GET__delegate(uri,opts);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var HEAD = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,opts);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__20411){
var uri = cljs.core.first(arglist__20411);
var opts = cljs.core.rest(arglist__20411);
return HEAD__delegate(uri,opts);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var POST = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,opts);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__20412){
var uri = cljs.core.first(arglist__20412);
var opts = cljs.core.rest(arglist__20412);
return POST__delegate(uri,opts);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var PUT = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,opts);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__20413){
var uri = cljs.core.first(arglist__20413);
var opts = cljs.core.rest(arglist__20413);
return PUT__delegate(uri,opts);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var DELETE = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,opts);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__20414){
var uri = cljs.core.first(arglist__20414);
var opts = cljs.core.rest(arglist__20414);
return DELETE__delegate(uri,opts);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var OPTIONS = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,opts);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__20415){
var uri = cljs.core.first(arglist__20415);
var opts = cljs.core.rest(arglist__20415);
return OPTIONS__delegate(uri,opts);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,opts){var f__17004__auto__ = cljs.core.first.call(null,opts);return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__17004__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17004__auto__));
};
var TRACE = function (uri,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,opts);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__20416){
var uri = cljs.core.first(arglist__20416);
var opts = cljs.core.rest(arglist__20416);
return TRACE__delegate(uri,opts);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
