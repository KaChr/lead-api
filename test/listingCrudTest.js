const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const baseUrl = 'http://localhost:7770';

describe('listingController', () => {
   describe('createListing', () => {
       it('should return a 200 response if listing is created', (done) => {
           const options = {
               url: baseUrl + '/listings',
               method: 'POST',
               json: {
                "title": "comp",
                "pub_date": new Date(),
                "information_listing": "important text here",
                "intern_amount": 4,
                "company_id": 2
               }
           };
           request(options, (error, httpResponse, body) => {
               expect(httpResponse.statusCode).to.equal(200);
               done();
           });
       });
   });

   describe('readListing', () => {
        it('should return a 200 response if one listing is read', (done) => {
            const options = {
                url: baseUrl + '/listings/3',
                method: 'GET'
            };
            request(options, (error, httpResponse, body) => {
                expect(httpResponse.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('readAllListing', () => {
        it('should return a 200 response if all listings are read', (done) => {
            const options = {
                url: baseUrl + '/listings',
                method: 'GET'
            };
            request(options, (error, httpResponse, body) => {
                expect(httpResponse.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('updateListing', () => {
        it('should return a 200 response if listing is updated', (done) => {
            const options = {
                url: baseUrl + '/listings/2',
                method: 'PUT',
                json: {
                    "title": "comp2",
                    "pub_date": new Date(),
                    "information_listing": "important text here2",
                    "intern_amount": 2,
                    "company_id": 1
                }
            };
            request(options, (error, httpResponse, body) => {
                expect(httpResponse.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('deleteListing', () => {
        it('should return a 200 response if listing is deleted', (done) => {
            const options = {
                url: baseUrl + '/listings/2',
                method: 'DELETE'
            };
            request(options, (error, httpResponse, body) => {
                expect(httpResponse.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('readCompanyListing', () => {
        it('should return a 200 response if company-listing is read', (done) => {
            const options = {
                url: baseUrl + '/company-listings/2',
                method: 'GET'
            };
            request(options, (error, httpResponse, body) => {
                expect(httpResponse.statusCode).to.equal(200);
                done();
            });
        });
    });
});
