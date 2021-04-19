#!/bin/bash
#Program:
#        This is a programm that will creat files from
#        1 to n.
#History:
#         2021/04/18  powerfultraveling  1st ver

FIRST=1
LAST=$1
for i in $(seq $FIRST $LAST)
do
        touch "$i.js"
done
exit