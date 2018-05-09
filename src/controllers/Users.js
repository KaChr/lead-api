import * as Users from '../lib/Users'
import DB from '../models'
import { rand } from '../helpers/Math'
import BCrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export default {
  list(req, res) {
    Promise
      .all([
        Users.list({
          res,
          query: req.query,
          returnData: true,
          jsonData: true
        }),
        Users.pages({ query: req.query })
      ])
      .then(promises => {
        res.status(200).send({
          rows: promises[0],
          pages: promises[1]
        })
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  create_student(req, res) {
    const main = require('../models/index');
    return main.sequelize.transaction().then((t) => {
      const Pwd = req.body.password;
      const salt = BCrypt.genSaltSync(10);
      const password = BCrypt.hashSync(Pwd.toString(), salt);
      
      return DB.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        password: password,
        redirect: req.body.redirect,
        status: req.body.status
      }, {transaction: t})
      .then((response) => {
        console.log(response.userId);

        return DB.Students.create({
            first_name: response.firstName,
            last_name: response.lastName,
            email: response.email,
            phone: req.body.phone,
            street_adress: req.body.street_adress,
            social_security_number: req.body.social_security_number,
            country_id: req.body.country_id,
            city_id: req.body.city_id,
            user_id: response.userId
          }, {transaction: t})
          .then((response2) => {
            res.status(200).send(response2);
            return t.commit();
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send(error);
            return t.rollback();
          });
      }).catch((err) => {
        console.log(err);
        return t.rollback();
      });
    });
  },

  login_student(req, res) {
    DB.User.find({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if(user === null) {
        return res.status(401).json({
          message: 'Authorization failed'
        });
      }
      
      BCrypt.compare(req.body.password, user.password, (err, result) => {
        if(err) {
          return res.status(401).json({
            message: 'Authorization failed'
          });
        }
        
        if(result) {
          const token = JWT.sign({
            email: user.email,
            userId: user.userId
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h"
          });
          
          return res.status(200).json({
            message: 'Authorization successful',
            token: token
          });
        }
        
        return res.status(401).json({
          message: 'Authorization failed'
        });
      });
    })
    .catch((error) => {
      return res.status(401).json({
        message: 'Authorization failed'
      });
    });
  },

  /*update_student(req, res) {
    DB.Students.update({
      first_name: 'Maxy-boi-boi'
    }, {  
      where: {id: 1}
    })
    .then((student) => {
      res.status(200).json({
        message: 'Success'
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err
      });
    });
  },*/

  create_company(req, res) {
    const main = require('../models/index');
    return main.sequelize.transaction().then((t) => {
      const Pwd = req.body.password;
      const salt = BCrypt.genSaltSync(10);
      const password = BCrypt.hashSync(Pwd.toString(), salt);
      
      return DB.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        password: password,
        redirect: req.body.redirect,
        status: req.body.status
      }, {transaction: t})
      .then((response) => {
        console.log(response);

        return DB.Companies.create({
            name: req.body.name,
            email: response.email,
            phone: req.body.phone,
            street_adress: req.body.street_adress,
            logo_url: req.body.logo_url,
            country_id: req.body.country_id,
            city_id: req.body.city_id,
            user_id: response.userId
          }, {transaction: t})
          .then((response2) => {
            res.status(200).send(response2);
            return t.commit();
          })
          .catch((error) => {
            console.log(error);
            return t.rollback();
          });
      }).catch((err) => {
        console.log(err);
        return t.rollback();
      });
    });
  },

  find(req, res) {
    Users.find({
      res,
      where: {
        userId: req.params.userId
      }
    })
  },

  update(req, res) {
    Users.update({
      res,
      body: req.body,
      userId: req.params.userId
    })
  },

  destroy(req, res) {
    Users.destroy({
      res,
      userId: req.params.userId
    })
  }
}
