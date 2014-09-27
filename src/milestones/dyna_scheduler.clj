;;; The Dynamic Scheduler,
;;; Using core.async channels, it will plan tasks.
;;; input is a seq of tasks like:
;;;           {:task-id 1
;;;            :task-name "A description about this task"
;;;                   ;the resource that'll be booked doing the task
;;;            :resource-id 3
;;;                    ;the duration that this resource will be booked during this task
;;;            :duration 3
;;;                     ;priority : less is higher priority
;;;            :priority 1
;;;                     ;predecessors : if they are not complete, task cannot be fired.
;;;             predecessors [2 4]}

(ns milestones.dyna-scheduler
  (:require  [clojure.core.async
              :as async
              :refer [chan go alts! alts!! >! >!! <!! <! close! timeout]]))
