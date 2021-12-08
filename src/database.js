const mongoose = require('mongoose')

//URI=('mongodb://localhost/bdVacunados')
URI=('mongodb+srv://admin:admin@tucanchapp.guu3i.mongodb.net/Cluster0?retryWrites=true&w=majority')


mongoose.connect(URI,{
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(db=>console.log('conectado a la base de datos', db.connection.name))
.catch(error=>console.log(error))

module.exports = mongoose