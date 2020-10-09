#!/bin/bash
# import fichiers centres.json

cat centres.json  | jq -crM '.[]'  | while read a ; do echo "$a" | curl -H "Content-Type: application/json"  -X  POST localhost/centres -d @- ; done
