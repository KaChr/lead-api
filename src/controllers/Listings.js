// import * as Lists from '../lib/Lists'
import DB from '../models'

//export default {
    /*list(req, res) {
        res.status(200).json({
            data: res
        })
    }*/

/*module.exports = Listings.findAll()
.then(function(listings) {
    console.log(listings);
    //res.send({error:false,message:'users list',data:users});
})
.catch(function(err) {
    console.log('Oops! something went wrong, : ', err);
})*/
//}

/*module.export = function list(req, res, next) {
    Listings.findAll()
    .then( function(userResponse) {
        res.status(200).json({
            data: userResponse
        })
    })
    .catch(function(error) {
        res.status(400).json({
            message:error
        })
    })
}*/

export default {
    list(req, res) {
        DB.Listings.findAll()
        .then(function(data) {
            data.map((list) => {
                DB.Companies.find(
                    {where: {
                        company_id: list.company_id
                    }}
                )
            })
          res.status(200).send(data);
        })
        .catch(function(error) {
          res.status(400).send(error);
        })
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