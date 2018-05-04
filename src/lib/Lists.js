import _ from 'lodash'
import BCrypt from 'bcryptjs'
import DB from '../models'
import * as Paths from '../lib/Paths'
import { filters, pageCount, orderBy } from '../helpers/Data'
import { rand } from '../helpers/Math'

/*const FILTER_OPTIONS = {
  userId: { type: 'integer' },
  dateFrom: { col: 'createdAt', type: 'minDate' },
  dateTo: { col: 'createdAt', type: 'maxDate' }
}
const INCLUDE_PATHS = [{
  model: DB.Path,
  as: 'Paths'
}]*/

export function list() {
  const { res, query, returnData, jsonData } = options
  //const { filtered, sorted, limit, page } = query

  return DB.listings
    .findAll()
    .then(listings => {
        console.log(listings);
        //return listings;
      const data = jsonData ? jsonUsers(Users) : Users

      if (returnData) return data

      return res.status(data ? 200 : 404).send(data)
    })
    .catch(error => {
        console.log(error);
        return error;
        //return returnData ? error : res.status(400).send(error)
    })
}