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
  app.get('/users/:userId', authBearer(), C.Users.find)
  app.put('/users/:userId', authBearer(), C.Users.update)
  app.delete('/users/:userId', authBearer(), C.Users.destroy)

  /* Students */
  app.post('/register-student', C.Users.create_student)
  app.post('/login-student', C.Users.login_student)
  // app.put('/update-student/:id', C.Users.update_student)

  /* Companies */
  app.post('/register-company', C.Users.create_company)

  /* Tests */
  app.get('/tests', C.Tests.list)
  app.get('/tests/custom-method', C.Tests.customMethod) // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create)
  app.get('/tests/:id', C.Tests.find)
  app.patch('/tests/:id', C.Tests.update)
  app.put('/tests/:id', C.Tests.update)
  app.delete('/tests/:id', C.Tests.destroy)

  /* Listings */
  app.get('/listings', C.Listings.list)
  app.get('/listings/:id', C.Listings.find)
}
