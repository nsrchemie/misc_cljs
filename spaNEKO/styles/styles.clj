(ns styles
 (:require [garden.def :refer [defrule defstyles]]
   [garden.stylesheet :refer [rule]]))

(def main-color "#55bbff")

(defstyles screen
 (let [h1 (rule :h1) body (rule :body)]
 [(h1 {
     :font-size "14px"
     :color main-color
     :line-height 1.5})
 (body
  {:background-color "#C2DFFF"
   :height 400
   :padding-left "20%"
   :font-family "Pangolin, cursive"
   :font-size "12px"})]))
