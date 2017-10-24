(ns boot-05.app
(:require-macros [hiccups.core :as hiccups :refer [html]])
(:require [hiccups.runtime]))
(defn my-component [txt]
 (html
 [:div
  [:label {:for :input} txt]
  [:input#input]]))

(defn init[]
 (set!
   (.-innerHTML (.getElementById js/document "container"))
   (my-component "not much here yet...")))
(init)
