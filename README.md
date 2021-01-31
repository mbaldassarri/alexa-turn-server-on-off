# alexa-turn-server-on-off

This very simple project was made for enabling Alexa command to turn on and off my home server at home, just for sake of laziness ! :)

This solution was developed Node Express API project with two GET requests routes: /turnon turns on the home server with WOL technology; /turnoff turns off the server by accessing it via SSH connection.
This app was made up and running in a always-on Rasbpian environment (Raspberry Pi 4) by using PM2.
The home server is another host in the LAN home network so it's quite easy for the rPi to interact with it.

##Alexa
API was exposed with a Dynamic DNS server in order to be reachable from outside the network. This way, anyone with the right token can turn on and off the local server. In my case, the one that is interacting with this API is an IFTTT Applet, called by Alexa.
When the user says: 'Alexa, turn on the server', it calls the turn-on-server applet in IFTTT, which calls the given /turnon API. Same for the turn off.


Enjoy! :)
