const mongoose = require('mongoose');
const db_name = "productManagerDB"



mongoose.connect(`mongodb+srv://root:root@cluster0.ta3x0wn.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('Something went wrong when connecting to the database ', err));
