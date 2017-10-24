(ns boot-06.app
(:require [reagent.core :as reagent]))
(defn static-component []
 [:a {:href "http://www.google.com"} "Get me to google please!"])

(def my-text
 (reagent/atom "I am an atomized reagent component"))

(defn dynamic-component []
  [:p @my-text ])

(defn init[]
 (let [ container (.getElementById js/document "container")]
   (reagent/render-component [static-component] container)))

