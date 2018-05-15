import DB from '../models'

export default {
    list(req, res) {
        DB.Companies.findAll()
        .then(function(data) {
          res.status(200).send(data);
        })
        .catch(function(error) {
          res.status(400).send(error);
        })
    },
    find(req, res) {
        DB.Companies.findById(req.params.id)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    create(req, res) {
       return DB.Companies.create({
        res,
        name: req.body.name,
        information: req.body.information,
        phone: req.body.phone,
        street_adress: req.body.street_adress,
        postal_code: req.body.postal_code,
        logo_url: req.body.logo_url,
        website: req.body.website,
        country_id: req.body.country_id,
        city_id: req.body.city_id,
        user_id: req.body.user_id
        })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    update(req, res) {
        DB.Companies.update(
            {   res,
                name: req.body.name,
                information: req.body.information,
                phone: req.body.phone,
                street_adress: req.body.street_adress,
                postal_code: req.body.postal_code,
                logo_url: req.body.logo_url,
                website: req.body.website,
                country_id: req.body.country_id,
                city_id: req.body.city_id,
                user_id: req.body.user_id
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
        DB.Companies.destroy(
            {where: {id:req.params.id}}
        )
        .then((Companies) => {
            res.status(200).json({
                message: 'Success'
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}