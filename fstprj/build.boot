(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"resources"}
 :dependencies '[[adzerk/boot-cljs "1.7.228-2" :scope "test"]
 [adzerk/boot-reload "0.5.1" :scope "test"]
 [pandeiro/boot-http "0.7.3" :scope "test"]
 [adzerk/boot-cljs-repl   "0.3.3"  :scope "test"]
 [com.cemerick/piggieback "0.2.1"  :scope "test"]
 [weasel                  "0.7.0"  :scope "test"]
 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
 [org.clojure/clojurescript "1.9.456"]
 [reagent "0.6.0"]])

(require '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[pandeiro.boot-http :refer [serve]])
(task-options!
 reload {:on-jsload 'boot-06.app/main})

(deftask dev []
 (comp (serve) (watch) (reload) (cljs-repl) (cljs)))
