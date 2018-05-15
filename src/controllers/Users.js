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
        /*firstName: req.body.firstName,
        lastName: req.body.lastName,*/
        email: req.body.email,
        // role: req.body.role,
        password: password
        /*redirect: req.body.redirect,
        status: req.body.status*/
      }, {transaction: t})
      .then((response) => {
        console.log(response.userId);

        return DB.Students.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            // email: response.email,
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

  login(req, res) {
    const main = require('../models/index');

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

  user_type(req, res) {
    DB.Students.findOne({
      where: {user_id: req.params.id},
      attributes: ['id']
    })
    .then((student) => {
      console.log(student.id);
      return res.status(200).json({
        id: student.id,
        role: 'student'
      });
    })
    .catch((err) => {
      console.log(err);
    });

    DB.Companies.findOne({
      where: {user_id: req.params.id},
      attributes: ['id']
    })
    .then((company) => {
      console.log(company.id);
      return res.status(200).json({
        id: company.id,
        role: 'company'
      });
    })
    .catch((err) => {
      console.log(err);
    });

    DB.Schools.findOne({
      where: {user_id: req.params.id},
      attributes: ['id']
    })
    .then((school) => {
      console.log(school.id);
      return res.status(200).json({
        id: school.id,
        role: 'school'
      });
    })
    .catch((err) => {
      console.log(err);
    });
  },

  update_student(req, res) {
    const main = require('../models/index');

    DB.Students.find({
      where: {
        user_id: req.params.id
      },
      attributes: ['id']
    })
    .then((user) => {
      console.log(user);
      res.status(200).send(user);
      return main.sequelize.transaction().then((t) => {
      return DB.User.update({
        email: req.body.email
      }, {  
        where: {
          userId: req.params.id
        }
      }, {transaction: t})
      .then((response) => {
        console.log(response);
        res.status(200).send(response);

        return DB.Students.update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
          street_adress: req.body.street_adress,
          social_security_number: req.body.social_security_number,
          country_id: req.body.country_id,
          city_id: req.body.city_id
        }, {  
          where: {
            id: user.id
          }
        }, {transaction: t})
        .then((response2) => {
          res.status(200).send(response2);
          return t.commit();
        })
        .catch((error2) => {
          console.log(error2);
          return t.rollback();
        });
      }).catch((err) => {
        console.log(err);
        return t.rollback();
      });
    });
    })
    .catch((error3) => {
      console.log(error3);
      return t.rollback();
    });
  },

  create_company(req, res) {
    const main = require('../models/index');
    return main.sequelize.transaction().then((t) => {
      const Pwd = req.body.password;
      const salt = BCrypt.genSaltSync(10);
      const password = BCrypt.hashSync(Pwd.toString(), salt);
      
      return DB.User.create({
        /*firstName: req.body.firstName,
        lastName: req.body.lastName,*/
        email: req.body.email,
        // role: req.body.role,
        password: password
        /*redirect: req.body.redirect,
        status: req.body.status*/
      }, {transaction: t})
      .then((response) => {
        console.log(response);

        return DB.Companies.create({
            name: req.body.name,
            // email: response.email,
            information: req.body.information,
            phone: req.body.phone,
            street_adress: req.body.street_adress,
            postal_code: req.body.postal_code,
            logo_url: req.body.logo_url,
            website: req.body.website,
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

  create_school(req, res) {
    const main = require('../models/index');
    return main.sequelize.transaction().then((t) => {
      const Pwd = req.body.password;
      const salt = BCrypt.genSaltSync(10);
      const password = BCrypt.hashSync(Pwd.toString(), salt);
      
      return DB.User.create({
        /*firstName: req.body.firstName,
        lastName: req.body.lastName,*/
        email: req.body.email,
        // role: req.body.role,
        password: password
        /*redirect: req.body.redirect,
        status: req.body.status*/
      }, {transaction: t})
      .then((response) => {
        console.log(response);

        return DB.Schools.create({
            name: req.body.name,
            // email: response.email,
            phone: req.body.phone,
            street_adress: req.body.street_adress,
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

  destroy_user(req, res) {
    DB.User.destroy({
      where: {
        userId: req.params.id
      }
    })
    .then((result) => {
      console.log(result);
      return res.status(200).json({
        message: 'User successfully deleted'
      });
    }).catch((error) => {
      console.log(error);
      return res.status(200).json({
        message: 'Failure in deleting user'
      });
    });
  },

  verify_token(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      
      res.status(200).json(decoded);
    } catch(err) {
        res.status(401).json({
            message: 'Authorization failed'
        });
    }
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
