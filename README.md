# Live coding steps

to start:

1. npm install
1. npm run start

## NPM package configuration

1. make directory for project
1. npm init
1. add "browserslist": ["since 2017-06"] to package.json

## Node.js for back-end programming

1. install back-end packages
   1. koa
   1. koa-static
   1. koa-route
1. set up server
   1. import koa, koa-route, koa-static
   1. make new Koa()
   1. use static('dist')
   1. listen(8080)
1. install fun quote packages
   1. get-random-quote
   1. pirate-speak
1. add quote route
   1. import quote and { translate }
   1. async function
   1. { text, author } = await quote()
   1. set body to translated text, author

## Node.js for building front-end applications

1. install front-end packages
   1. parcel
   1. react
   1. react-dom
   1. sass
1. make src/client folder
1. make react application
   1. index.html
     1. script index.js, div#app
   1. index.js
     1. import React, { render }
     1. state: text = '', author = ''
     1. bound getQuote
        1. await fetch('/quote')
        1. check response ok
        1. setState await res.json()
     1. render
        1. destructure state
        1. if text && author, content =
           1. visible is true, fragment:
             1. blockquote of text
             1. cite author
        1. return main with condition 'hidden' class
        1. put content
        1. button#get-quote, on click, getQuote
     1. render &lt;App /&gt;, doc.getbyid('app')
  1. scss
     1. *: no margin or padding, border-box
     1. main:
        1. width: 30vw
        1. margin: 10em auto
        1. opacity 1
        1. transition: 150ms opacity ease-in-out
        1. &.hidden opacity: 0
     1. blockquote
        1. font-size 300%
        1. font-style: italic
        1. line-height: 1.5
     1. cite:
        1. float right
        1. font-size 150%
        1. font-style normal
        1. &::before content: '—'
     1. button#get-quote
        1. fixed, left 2em top 1em
1. run parcel build
1. show generated code

## More NPM package configuration

1. add npm scripts
   1. build: parcel build src/client/index.html
   1. start: npm run build && node src/server
