import { authBearer } from '../lib/Sessions'
import C from '../controllers'
// import DB from '../models'

export default (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Node Express API Boilerplate!'
  }))

  /* Sessions */
  app.post('/sign-in', C.Sessions.authenticate)
  app.post('/sign-out', authBearer(), C.Sessions.signOut)
  app.get('/verify-token', authBearer(), C.Sessions.verifyToken)

  /* Users */
  app.get('/users', authBearer(), C.Users.list)
  app.post('/users', authBearer(), C.Users.create)
  app.get('/users/:userId', authBearer(), C.Users.find)
  app.put('/users/:userId', authBearer(), C.Users.update)
  app.delete('/users/:userId', authBearer(), C.Users.destroy)

  /* Tests */
  app.get('/tests', C.Tests.list)
  app.get('/tests/custom-method', C.Tests.customMethod) // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create)
  app.get('/tests/:id', C.Tests.find)
  app.patch('/tests/:id', C.Tests.update)
  app.put('/tests/:id', C.Tests.update)
  app.delete('/tests/:id', C.Tests.destroy)

  /* Listings */
  /*app.get('/listings', function(req, res) {
    DB.Listings.findAll().then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
    //return res.send('Hej')
  })*/

  app.get('/listings', C.Listings.list)
  app.get('/listings/:id', C.Listings.find)
}
