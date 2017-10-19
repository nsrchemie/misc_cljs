(set-env!
 :resource-paths #{"src" "html"}
 :dependencies '[[adzerk/boot-cljs "1.7.228-2"]
   [org.clojure/clojurescript "1.9.456"]])

(require '[adzerk.boot-cljs :refer [cljs]])
