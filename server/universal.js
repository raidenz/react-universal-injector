const path = require('path')
const fs = require('fs')

// import React function
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

// import redux and Route
import createRoutes from 'routes'
import configureStore from 'store'
import {Provider} from 'react-redux'

const routes = createRoutes({})

module.exports = function universalLoader(req, res) {
  // =============================
  const filePath = path.resolve(__dirname, '..', 'build', 'asset-manifest.json')
  fs.readFile(filePath, 'utf8', (err, jsonData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    let assets = JSON.parse(jsonData)
    // console.log(assets);
    match({ routes, location: req.url }, (err, redirect, renderProps) => {
      if(err) {
        console.error('match err', err)
        return res.status(404).end()
      } else if(redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if(renderProps) {
        let store = configureStore()
        const ReactApp = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )
        res.render('main', {
          title: 'Server Side Rendering - Create React App',
          maincss: assets['main.css'],
          RRR: ReactApp,
          rFootScript: assets['main.js']
        })
      } else {
        return res.status(404).end()
      }
    })
  })
  // =============================
}

