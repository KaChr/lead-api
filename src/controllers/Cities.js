import DB from '../models'

export default {
    list(req, res) {
        DB.cities.findAll()
        .then(function(data) {
          res.status(200).send(data);
        })
        .catch(function(error) {
          res.status(400).send(error);
        })
    },
    find(req, res) {
        DB.cities.findById(req.params.id)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    create(req, res) {
       return DB.cities.create({
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
        DB.cities.update(
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
        DB.cities.destroy(
            {where: {id:req.params.id}}
        )
        .then((cities) => {
            res.status(200).json({
                message: 'Success'
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}