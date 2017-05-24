@echo off
echo Executing commands please wait...
echo ------------------------------
color 0A
cd %TEST_NILO_UI5%
call npm install grunt
call npm install grunt-cli
call npm install grunt-openui5
call npm install grunt-contrib-jshint
call npm install grunt-xml-validator
call npm install grunt-htmlhint
call npm install grunt-nwabap-ui5uploader
call grunt nwabap_ui5uploader
echo "Test Nilo- Execution done!!!Thank you." 

