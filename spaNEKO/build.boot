(set-env!
 :source-paths    #{"src" "styles"}
 :resource-paths  #{"html" "build"}
 :dependencies    '[ [adzerk/boot-cljs "1.7.228-2"]
                          [adzerk/boot-reload "0.4.13"]
                          [org.martinklepsch/boot-garden "1.3.2-0"]
                          [pandeiro/boot-http "0.7.5"]
                          [org.clojure/clojurescript "1.9.456"]
                          [org.clojure/core.async "0.2.395"]])
(require
 '[org.martinklepsch.boot-garden :refer [garden]]
 '[adzerk.boot-cljs   :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[pandeiro.boot-http :refer [serve]])
(task-options!
  garden {:styles-var 'styles/base :output-to "styles.css" :pretty-print true}
  cljs      {:optimizations :none :source-map true}
  reload  {:on-jsload 'frontend.app/init}
  garden {:styles-var 'styles/screen})

(deftask dev []
  (comp
   (serve)
   (watch)
   (reload)
   (garden)
    (cljs)
    (target)))
