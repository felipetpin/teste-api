/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the test endpoints:', () => {
  it('It should create a test', (done) => {
    const test = {
      title: 'First Awesome test',
      price: '$9.99',
      description: 'This is the awesome test'
    };
    chai.request(app)
      .post('/api/v1/tests')
      .set('Accept', 'application/json')
      .send(test)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          title: test.title,
          price: test.price,
          description: test.description
        });
        done();
      });
  });

  it('It should not create a test with incomplete parameters', (done) => {
    const test = {
      price: '$9.99',
      description: 'This is the awesome test'
    };
    chai.request(app)
      .post('/api/v1/tests')
      .set('Accept', 'application/json')
      .send(test)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all tests', (done) => {
    chai.request(app)
      .get('/api/v1/tests')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('price');
        res.body.data[0].should.have.property('description');
        done();
      });
  });

  it('It should get a particular test', (done) => {
    const testId = 1;
    chai.request(app)
      .get(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('price');
        res.body.data.should.have.property('description');
        done();
      });
  });

  it('It should not get a particular test with invalid id', (done) => {
    const testId = 8888;
    chai.request(app)
      .get(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
          .eql(`Cannot find Test with the id ${testId}`);
        done();
      });
  });

  it('It should not get a particular test with non-numeric id', (done) => {
    const testId = 'aaa';
    chai.request(app)
      .get(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a test', (done) => {
    const testId = 1;
    const updatedtest = {
      id: testId,
      title: 'Updated Awesome test',
      price: '$10.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .send(updatedtest)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedtest.id);
        expect(res.body.data.title).equal(updatedtest.title);
        expect(res.body.data.price).equal(updatedtest.price);
        expect(res.body.data.description).equal(updatedtest.description);
        done();
      });
  });

  it('It should not update a test with invalid id', (done) => {
    const testId = '9999';
    const updatedtest = {
      id: testId,
      title: 'Updated Awesome test again',
      price: '$11.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .send(updatedtest)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
          .eql(`Cannot find Test with the id: ${testId}`);
        done();
      });
  });

  it('It should not update a test with non-numeric id value', (done) => {
    const testId = 'ggg';
    const updatedtest = {
      id: testId,
      title: 'Updated Awesome test again',
      price: '$11.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .send(updatedtest)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a test', (done) => {
    const testId = 1;
    chai.request(app)
      .delete(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a test with invalid id', (done) => {
    const testId = 777;
    chai.request(app)
      .delete(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
          .eql(`Test with the id ${testId} cannot be found`);
        done();
      });
  });

  it('It should not delete a test with non-numeric id', (done) => {
    const testId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/tests/${testId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});
