require('babel-register')
require('babel-polyfill')

global.document  = require('jsdom').jsdom("<head><meta charset='UTF-8'><title>React In Theory</title></head><body><div id='application'></div></body>"); // this allows our props comp to mount

global.window    = document.defaultView

global.navigator =  window.navigator
