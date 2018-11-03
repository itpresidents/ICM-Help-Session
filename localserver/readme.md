# How to use localserver
This document focuses on Mac OS basically, but commands in this doc work for Windows OS.  
#### When you start your localserver, you are under your project folder.
If you don't know how to move folder/directory, you should check basic commands(https://github.com/sleepy-maker/ITP-Terminal-Workshop).  


## python localserver

Python has 2 versions. One is python2 and the other is python3. First what you need to do is to check which python you have on your machine.  
To check version, you need to use Terminal application/Command Prompt.

```bash
python2
$ python --version
Python 2.7.10

python3
$ python --version
Python 3.7.0

Also you can use the following command
$ python -V

```
In terms of Mac OS, Apple has installed python2(mostly python 2.7.10) on your Mac. If you install python, you have something different. You many have python2.7.14, python3.5 or python3.6.

If you check your python version, you need to type one of following commands to start you python local server.

#### python2
```
$ python -m SimpleHTTPServer
```

#### python3
```
$python -m http.server
```
If you want to open more than 2 local server, you need to use a different port(default is 8000)
```
In this case, use port 8080
$ python -m SimpleHTTPServer 8080
$python -m http.server 8080

```

### How to terminate your server
You need to hit ctrl + c to terminating your localserver. If you don't stop it, it will keep working until Reboot/Shut Down your machine.


## live-server(nodejs/npm)
If you prefer to use nodejs for your localserver, you can use a npm package, live-server(If you want, you can write a localserver by yourself).

If you want to use live-server, you need to install Nodejs first. There are some ways to install nodejs. But, in this document I will explain the easiest way. First, you have get nodejs installer from the official site(https://nodejs.org/en/). Basically, you should select LTS version instead of Current.If you know about you can use Current, but if you are new to nodejs, you should avoid installing Current.

The installing steps are very easy because you just need to follow the installer. When you finish installing nodejs, npm is also installed by the installer. You can check your node version and npm version with the following commands.

```
$ node -v

$ npm -v

```

If you can see both versions, you are almost there. The final step is to intall live-server via npm.

```
$ npm install -g live-server
```
-g means install live-server globally. That option allows you to use live-server from any directory.  
Then you can use live-server with the following command. live-server is really useful because it detects what you change automatically then refresh yourbrowser. https://github.com/tapio/live-server  

```
$ live-server
```

## Atom live-server
If you have Aton on your machine and don't want to deal with Terminal/Command Prompt, you can use Atom's plugin, live-server.
You can start your localserver with a few clicks.  
https://atom.io/packages/atom-live-server

## p5-manager
p5-manager is a npm package which focuses on p5js. You can create a new project with one line command and use a localserver with a very simple command.  
https://www.npmjs.com/package/p5-manager  
Dan has a video on this.   
https://www.youtube.com/watch?v=LdWleSHQTcw  

## Additional information on local server
https://github.com/processing/p5.js/wiki/Local-server    
https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zu_uqEA6NqhLzKLACwU74X       
