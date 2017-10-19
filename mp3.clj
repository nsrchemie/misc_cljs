#!/usr/bin/env boot
(set-env! :dependencies '[[com.googlecode.soundlibs/jlayer "1.0.1.4"]])

(def sound "https://www.soundjay.com/transportation/train-pass-by-01.mp3")

(with-open [mp3 (clojure.java.io/input-stream sound)]
  (let [player (javazoom.jl.player.Player. mp3)]
    (.play player)))
