#!/bin/bash

url="http://localhost:8080/api/v1/cat-facts"
times=10

for ((i=1; i<=times; i++))
do
  curl "$url"
  echo -e "\n"
done
