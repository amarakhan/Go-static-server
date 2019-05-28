package main

import (
	"log"
	"net/http"
)

func main() {
	port := ":8000"                                        //serving on port 8000
	directory := "."                                       //directory for files to host
	http.Handle("/", http.FileServer(http.Dir(directory))) //FileServer - returns handler for http requests
	log.Print("listening...")
	http.ListenAndServe(port, nil)
}
