//Require the dependencies

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('videos', () => {
    beforeEach((done) => { 
        //Before each test we empty the DB
        Videos.remove({}, (err) => {
           done();
        });
    });

/*
* Test for the GET route
*/
 describe('/GET videos', () => {
    it('it should GET all the videos', (done) => {
      chai.request(server)
          .get('/api/videos')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});

});