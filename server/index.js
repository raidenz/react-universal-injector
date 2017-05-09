const app = require('./app')

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
  console.log('=============================')
  console.log('App listening on: ')
  console.log(`http://localhost:${PORT}`)
	console.log('=============================')
})
