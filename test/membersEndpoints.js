const chai = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');
const chaiHttp = require('chai-http');
const {tokenSign} = require('../helpers/generateToken');
const MemberController = require('../controllers/memberController');

const expect = chai.expect;
const sandbox = sinon.createSandbox();
chai.use(chaiHttp);

const adminToken = tokenSign({id:1, roleId:1});
const regularToken = tokenSign({id:2, roleId:2});

describe('Members Endpoints', function(){
  describe('Middlewares CheckRole', function(){
    it('Should return 401 and a message', function(done){
      app = rewire('../app');
      chai.request(app)
        .get('/members')
        .set('Authorization', `Bearer ${regularToken}`)
        .end(function(err, res){
          expect(res.status).to.equal(401);
          expect(res.body.msg).to.equal('Access denied, you do not have authorization to enter');
          done();
        });
    });
    it('Should return a 400 and a message', function(done){
      app = rewire('../app');
      chai.request(app)
        .get('/members')
        .end(function(err, res){
          expect(res.status).to.equal(400);
          expect(res.body.msg).to.equal('Access denied, token expire or incorrect');
          done(); 
        });
    });
  });

  describe('GET /members', function(){
    getAllMembersFake = function(req,res){
      res.status(200).json([
        {name: 'Name Test 1', description: 'Description Test 1'},
        {name: 'Name Test 2', description: 'Description Test 2'},
        {name: 'Name Test 3', description: 'Description Test 3'}
      ]);
    }
    sandbox.stub(MemberController, 'getAllMembers').callsFake(getAllMembersFake);
    
    it('should return 200 and all members', function(done){
      app = rewire('../app');
      chai.request(app)
        .get('/members')
        .set('Authorization', `Bearer ${adminToken}`)
        .end(function(err, res){
          console.log(res.body);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(3);
          done();
        });
    });
  });

  describe('GET /members/:id', function(){
    afterEach(function(){
      sandbox.restore();
      app = rewire('../app');
    })

    
    it('should return 200 and a member', function(done){
      getMemberFake = function(req,res){
        res.status(200).json({
          name: 'Name Test 1',
          description: 'Description Test 1'
        });
      };
      sandbox.stub(MemberController, 'getMember').callsFake(getMemberFake);
      
      app = rewire('../app');
      chai.request(app)
        .get('/members/1')
        .set('Authorization', `Bearer ${adminToken}`)
        .end(function(err, res){
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.equal('Name Test 1');
          done();
        });
    });

    
    it('should return 404 and a message', function(done){
      notFoundMemberFake = function(){
        res.status(404).json({
          msg: 'Member not found'
        });
      };
      sandbox.stub(MemberController, 'getMember').callsFake(notFoundMemberFake);
      app = rewire('../app');
      chai.request(app)
        .get('/members/4')
        .set('Authorization', `Bearer ${adminToken}`)
        .end(function(err, res){
          expect(res.status).to.equal(404);
          expect(res.body.msg).to.equal('Member not found');
          done();
        });
    });    
  });
});