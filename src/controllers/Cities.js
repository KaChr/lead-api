import DB from '../models'

export default {
    list(req, res) {
        DB.Cities.findAll()
        .then(function(data) {
          res.status(200).send(data);
        })
        .catch(function(error) {
          res.status(400).send(error);
        })
    },
    find(req, res) {
        DB.Cities.findById(req.params.id)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    create(req, res) {
       return DB.Cities.create({
        res,
        city_name: req.body.city_name

        
        })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    update(req, res) {
        DB.Cities.update(
            {   res,
                city_name: req.body.city_name
                
            },
            {where: {id:req.params.id}}
          )
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    
    },
    destroy(req, res) {
        DB.Cities.destroy(
            {where: {id:req.params.id}}
        )
        .then((Cities) => {
            res.status(200).json({
                message: 'Success'
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}