import DB from '../models'


export default {
    list(req, res) {
        DB.User.findAll({
            attributes: [
                'userId',
                'email'
            ],
            include: [{
                attributes: [
                    'id',
                    'name',
                    'information',
                    'phone',
                    'street_adress',
                    'postal_code',
                    'logo_url',
                    'website',
                    'country_id',
                    'city_id',
                    'user_id'
                ],
                model: DB.Companies,
                include: [{
                    attributes: [
                        'id',
                        'title',
                        'pub_date',
                        'information_listing',
                        'intern_amount',
                        'company_id'
                    ],
                    model: DB.Listings
                }]
            }]
        })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },
    find(req, res) {
        DB.Listings.findById(req.params.id)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    create(req, res) {
       return DB.Listings.create({
        res,
        title: req.body.title,
        pub_date: req.body.pub_date,
        information: req.body.information,
        intern_amount: req.body.intern_amount,
        company_id: req.body.company_id
        })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    },
    update(req, res) {
        DB.Listings.update(
            {   title: req.body.title,
                pub_date: req.body.pub_date,
                information: req.body.information,
                intern_amount: req.body.intern_amount,
                company_id: req.body.company_id
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
        DB.Listings.destroy(
            {where: {id:req.params.id}}
        )
        .then((listings) => {
            res.status(200).json({
                message: 'Success'
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}