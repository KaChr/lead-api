import DB from '../models'

export default {
    list(req, res) {
        DB.Countries.findAll()
        .then(function(data) {
          res.status(200).send(data);
        })
        .catch(function(error) {
          res.status(400).send(error);
        })
    },
    find(req, res) {
        DB.Countries.findById(req.params.id)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    create(req, res) {
       return DB.Countries.create({
        res,
        country_name: req.body.country_name

        
        })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    update(req, res) {
        DB.Countries.update(
            {   res,
                country_name: req.body.country_name
                
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
        DB.Countries.destroy(
            {where: {id:req.params.id}}
        )
        .then((Countries) => {
            res.status(200).json({
                message: 'Success'
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}