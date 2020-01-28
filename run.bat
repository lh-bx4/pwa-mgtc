@echo off
title close me
cd %~dp0
start cmd /k "cd %~dp0 && title ng serve --host 192.168.1.61 %~dp0 && color 8F && ng serve"
start cmd /k "cd %~dp0 && title IDE GIT && color 0A"
code .
:: --host 192.168.1.61