(ns milestones.core
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [org.httpkit.server :refer :all]
            [ring.middleware.resource :as resource]
            [ring.middleware.json :as json]
            [ring.util.response :as resp]
            [taoensso.timbre :as timbre]
            [cheshire.core :refer :all]
            [milestones.tasks_specifier :as ts])
 (:gen-class))

;;; logging with timbre
(timbre/refer-timbre)

;;; current version, must be in sync with project.clj

(def version "1.0.0-SNAPSHOT")

;;; Logging to File enabled
(timbre/set-config! [:appenders :spit :enabled?] true )
(timbre/set-config! [:shared-appender-config :spit-filename] "./milestones.log")

;; app-routes
(defroutes app-routes
           (GET "/ver" []
                (str "MileStones v " version " by tnteam - clojurecup 2014"))
           (GET "/" [] (resp/redirect "index.html"))
           (GET "/specify-tasks" [] (resp/redirect "tasks-specifier.html"))
           (GET "/diagram" [] (resp/redirect "diagram.html"))
           (GET "/post" [] "posted")           
           (POST "/check-tasks" [:as rest]
                (generate-string (ts/formatted-tasks (rest :body))))
           (POST "/save-tasks" [:as rest]
                (generate-string (ts/save-tasks (rest :body))))

           (route/resources "/" {:root "public"})
           (route/not-found "Not Found!"))

(def app
          (->(handler/site app-routes)
             (json/wrap-json-body)
             (resource/wrap-resource "/public")))


(def ip "0.0.0.0")
(def port "8080")

(defn -main []
  (let [_ (.addShutdownHook (Runtime/getRuntime)
                            (Thread. (fn []
                                       (info (str "MileStones Server has Gone Down !")))))
        fn-stop-server (run-server app
                                   {:ip   ip
                                    :port (Integer/parseInt port)})]
    (info
     (str "MileStones Server Started - Listening on " ip ":" port ))
    fn-stop-server))
    ;this function, returned by main, will be used to stop the server.
