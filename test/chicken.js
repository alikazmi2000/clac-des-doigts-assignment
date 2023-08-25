process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'MyUltraSecurePassWordIWontForgetToChange';

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const Chicken = require('../app/models/chicken');
chai.use(chaiHttp);
// const helper = require('../helpers/tests');
const should = chai.should();
const apiName = '/chicken';
const chickenProp = {
  name: faker.random.words(),
  weight: 50,
  steps: 20,
  birthday: "2022-08-21",
  isRunning: true,
};
const updateChickenProp = {
  name: faker.random.words(),
  weight: 20,
  steps: 10,
  birthday: "2022-08-21",
  isRunning: true,
};

const createdID = [];
/*
 * Test Cases for chickens
 */
describe('*********** CHICKEN ***********', () => {

  describe('/GET /', () => {
    it('it should GET home API url', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET /404url', () => {
    it('it should GET 404 url', done => {
      chai
        .request(server)
        .get('/404url')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          done();
        });
    });
  });

  describe('/POST Create', () => {
    it('it should create a Chicken object', done => {
      chai
        .request(server)
        .post(apiName)
        .send(chickenProp)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('data');
            res.body.data.should.have.property('_id');
            createdID.push(res.body.data._id);
            done();
          }
        });
    });
  });

  describe('/GET Read', () => {
    it('it should read a Chicken object', done => {
      chai
        .request(server)
        .get(`${apiName}/${createdID[0]}`)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('data');
            res.body.data.should.have.property('_id');
            chai.expect(res.body.data._id).equals(createdID[0]);
            done();
          }
        });
    });
  });
  describe('/PUT Update', () => {
    it('it should update a Chicken object', done => {
      chai
        .request(server)
        .put(`${apiName}`)
        .send({
          ...updateChickenProp,
          _id: createdID[0]
        })
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('data');
            res.body.data.should.have.property('_id');
            chai.expect(res.body.data._id).equals(createdID[0]);
            done();
          }
        });
    });
  });
  describe('/PATCH Patch', () => {
    it('it should patch a Chicken object', done => {
      chai
        .request(server)
        .put(`${apiName}`)
        .send({
          ...updateChickenProp,
          _id: createdID[0]
        })
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('data');
            res.body.data.should.have.property('_id');
            chai.expect(res.body.data._id).equals(createdID[0]);
            done();
          }
        });
    });
  });

  describe('/DELETE delete', () => {
    it('it should delete a Chicken object', done => {
      chai
        .request(server)
        .delete(`${apiName}/${createdID[0]}`)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('data');
            res.body.data.should.have.property('_id');
            chai.expect(res.body.data._id).equals(createdID[0]);
            done();
          }
        });
    });
  });
})