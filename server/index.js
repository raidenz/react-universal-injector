const app = require('./app')

const PORT = process.env.PORT || 3001

app.listen(PORT, (err)=>{
  if (err) {
    return console.error(err);
  }
  console.log('=============================')
  console.log('App listening on: ')
  console.log(`http://localhost:${PORT}`)
	console.log('=============================')
})
