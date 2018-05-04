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
      }
}