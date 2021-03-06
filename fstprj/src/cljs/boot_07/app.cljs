(ns boot-07.app
(:require [reagent.core :as reagent]))

(defn c-to-f [myc]
(+ (* myc 1.8) 32))

(defn f-to-c [myf]
(/ (- myf 32) 1.8))
(defn temp []
 [:div
 [:h3 "Temperature Converter"]
 [celsius]
 [fahrenheit]])

(def celsius-v
 (reagent/atom 30))

(defn celsius []
 [:div
 [:label "celsius"]
 [:input {
  :value @celsius-v
  :on-change
      #(reset! celsius-v (-> % .target .-value))
 }]])

 (defn fahrenheit []
  [:div
  [:label "fahrenheit"]
  [:input {
      :value (c-to-f @celsius-v)
      :on-change
        #(reset! celsius-v (f-to-c
        	(-> % .target .-value)))
          }]])

(defn init []
 (reagent/render-component [temp]
  (.getElementById js/document "container")))
