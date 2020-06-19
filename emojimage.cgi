#!/bin/bash

echo -e "Content-type: image/svg+xml\n"
echo "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,100,100'><text y='.9em' font-size='90'>${SCRIPT_NAME:1}</text></svg>"

