# Sonura

## Setting up the code on your local machine

1. Create a new folder named Sonura on your computer. This will be your project folder--it can be located wherever you want. I created mine in a folder called Code on my Desktop.

2. Open your terminal and switch into this folder using the ```cd your/path/to/Sonura``` command. For me, it was ```cd Desktop/Code/Sonura``` (since this is where I created that folder).

3. Run the command ```git clone https://github.com/cbhanson/sonura-app.git```. This will copy all of the code from the repository into your Sonura folder. All of this code is located under a new folder called sonura-app, so once this is done, run ```cd sonura-app```. This directory is where you will run all of the code from.

4. Run the command ```npm install```. This will install a bunch of dependencies that the code needs to run on your computer.

## Starting the app

Simply run ```npm start``` to bootstrap and run the app. This will open the app in your default browser. If for some reason the audio recording doesn't work on chrome (which was the case for me), install firefox and then run this command: ```BROWSER=firefox npm start```
