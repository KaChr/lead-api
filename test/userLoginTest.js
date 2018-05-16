const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const baseUrl = 'http://localhost:7770';

describe('UsersController', () => {
    let tokenStudent = '';
    let tokenCompany = '';
    let tokenSchool = '';
    let studentId = '';
    let companyId = '';
    let schoolId = '';

    describe('registerAction', () => {
        describe('student', () => {
            it('should return a 200 response if the student registered', (done) => {
                const options = {
                    url: baseUrl + '/register-student',
                    method: 'POST',
                    json: {
                        "first_name": "Student",
                        "last_name": "One",
                        "email": "student@one.com",
                        "password": "student1",
                        "phone": "070-654324",
                        "street_adress": "Firstvagen 3",
                        "social_security_number": "561209-0923",
                        "country_id": 1,
                        "city_id": 1
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });

        describe('company', () => {
            it('should return a 200 response if the company registered', (done) => {
                const options = {
                    url: baseUrl + '/register-company',
                    method: 'POST',
                    json: {
                        "name": "Company 1",
                        "email": "company@one.com",
                        "password": "company1",
                        "information": "Text text text.",
                        "phone": "070-654324",
                        "street_adress": "Firstvagen 3",
                        "postal_code": 12354,
                        "logo_url": "http://something.com",
                        "website": "http://somewebsite.com",
                        "country_id": 1,
                        "city_id": 1
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });

        describe('school', () => {
            it('should return a 200 response if the school registered', (done) => {
                const options = {
                    url: baseUrl + '/register-school',
                    method: 'POST',
                    json: {
                        "name": "School 1",
                        "email": "school@one.com",
                        "password": "school1",
                        "phone": "070-654324",
                        "street_adress": "Firstvagen 3",
                        "country_id": 1,
                        "city_id": 1
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });
    });

    describe('loginAction', () => {
        /*before(() => {
            // locally "global" setup
            console.log('before');
        });
    
        beforeEach(() => {
            console.log('beforeEach');
        });
    
        afterEach(() => {
            console.log('afterEach');
        });
    
        after(() => {
            // locally "global" teardown
            console.log('after');
        });*/

        describe('student', () => {
            it('should return a 200 response if the student logged in', (done) => {
                const options = {
                    url: baseUrl + '/login',
                    method: 'POST',
                    json: {
                        "email": "student@one.com",
                        "password": "student1"
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    tokenStudent = body.token;
                    done();
                });
            });

            it('Verify if token created from student returns 200 response', (done) => {
                const options = {
                    url: baseUrl + '/verify-token',
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + tokenStudent
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(JSON.parse(body));
                    const bodyObj = JSON.parse(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    studentId = bodyObj.userId;
                    done();
                });
            });
        });

        describe('company', () => {
            it('should return a 200 response if the company logged in', (done) => {
                const options = {
                    url: baseUrl + '/login',
                    method: 'POST',
                    json: {
                        "email": "company@one.com",
                        "password": "company1"
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    tokenCompany = body.token;
                    done();
                });
            });

            it('Verify if token created from company returns 200 response', (done) => {
                const options = {
                    url: baseUrl + '/verify-token',
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + tokenCompany
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(JSON.parse(body));
                    const bodyObj = JSON.parse(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    companyId = bodyObj.userId;
                    done();
                });
            });
        });

        describe('school', () => {
            it('should return a 200 response if the school logged in', (done) => {
                const options = {
                    url: baseUrl + '/login',
                    method: 'POST',
                    json: {
                        "email": "school@one.com",
                        "password": "school1"
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    tokenSchool = body.token;
                    done();
                });
            });

            it('Verify if token created from school returns 200 response', (done) => {
                const options = {
                    url: baseUrl + '/verify-token',
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + tokenSchool
                    }
                };

                request(options, (error, httpResponse, body) => {
                    // console.log(JSON.parse(body));
                    const bodyObj = JSON.parse(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    schoolId = bodyObj.userId;
                    done();
                });
            });
        });
    });

    describe('deleteAction', () => {
        describe('student', () => {
            it('should return a 200 response if the student was deleted', (done) => {
                const options = {
                    url: baseUrl + '/delete-user/' + studentId,
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Bearer ' + tokenStudent
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });

        describe('company', () => {
            it('should return a 200 response if the company was deleted', (done) => {
                const options = {
                    url: baseUrl + '/delete-user/' + companyId,
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Bearer ' + tokenCompany
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });

        describe('school', () => {
            it('should return a 200 response if the school was deleted', (done) => {
                const options = {
                    url: baseUrl + '/delete-user/' + schoolId,
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Bearer ' + tokenSchool
                    }
                };
                
                request(options, (error, httpResponse, body) => {
                    // console.log(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    done();
                });
            });
        });
    });
});