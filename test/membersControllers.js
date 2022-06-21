const { Member } = require('../models');
const MemberController = require('../controllers/memberController');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('Members Controller Tests', function(){
  let status, json, res;
  before(function (){
    status = sinon.stub();
    json = sinon.spy();
    res = { json, status };
    status.returns(res);
  });

  describe('Get member', function(){
    let findOneStub;
    before(function(){
      findOneStub = sinon.stub(Member, 'findOne'); 
    });

    afterEach(function(){
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    })

    it('returns 200 and the member found', async function(){
      const req = {params: {id:1}};
      findOneStub.resolves({name: 'test', image: null});
      await MemberController.getMember(req,res);
      expect(status.args[0][0]).be.equal(200);
    });

    it('returns 404 and a Not Found message', async function(){
      const req = {params: {id:1000}};
      findOneStub.resolves(null);
      await MemberController.getMember(req,res);
      expect(status.args[0][0]).be.equal(404);
      expect(json.args[0][0].msg).be.equal('member was not found');
    });

    it('returns 500 and an Internal server error message', async function(){
      const req = {params: {id:1000}};
      findOneStub.rejects();
      await MemberController.getMember(req,res);
      expect(status.args[0][0]).be.equal(500);
      expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    });
  });

  describe('Get all members', function(){
    let findAndCountAllStub;

    before(function(){
      findAndCountAllStub = sinon.stub(Member, 'findAndCountAll'); 
    });

    afterEach(function(){
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    })

    it('returns 200 and a array of members', async function(){
      const req = {query: {}};
      findAndCountAllStub.resolves([
        {name: 'NameTest1', description: 'DescriptionTest1'},
        {name: 'NameTest2', description: 'DescriptionTest2'},
        {name: 'NameTest3', description: 'DescriptionTest3'},
        {name: 'NameTest4', description: 'DescriptionTest4'},
      ]);
      await MemberController.getAllMembers(req,res);
      expect(status.args[0][0]).be.equal(200);
    });

    it('returns 500 and an Internal server error message', async function(){
      const req = {query: {}};
      findAndCountAllStub.rejects();
      await MemberController.getAllMembers(req,res);
      expect(status.args[0][0]).be.equal(500);
      expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    });
  });

  describe('Create member', function(){
    //The tests cannot be done because a stub for 'Save' cannot be performed
  });

  describe('Delete member by ID', function(){
    let destroyStub;
    before(function(){
      destroyStub = sinon.stub(Member, 'destroy'); 
    });

    afterEach(function(){
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    })

    it('returns 200 and a member deleted message', async function(){
      const req = {params: {id: 1}};
      destroyStub.resolves({member: 'deleted'});
      await MemberController.deleteMember(req,res);
      expect(status.args[0][0]).be.equal(200);
      expect(json.args[0][0].msg).be.equal('Member was deleted successfully');
    });

    it('returns 404 and a member not found message', async function(){
      const req = {params: {id: 1000}};
      destroyStub.resolves(null);
      await MemberController.deleteMember(req,res);
      expect(status.args[0][0]).be.equal(404);
      expect(json.args[0][0].msg).be.equal('Member does not exist');
    });
    
    it('returns 500 and an Internal server error message', async function(){
      const req = {params: {id: 1}};
      destroyStub.rejects();
      await MemberController.deleteMember(req,res);
      expect(status.args[0][0]).be.equal(500);
      expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    });
  });

  describe('Update member by ID', function(){
    let updateStub;
    before(function(){
      updateStub = sinon.stub(Member, 'update'); 
    });

    afterEach(function(){
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });

    it('returns 200 and a member update message', async function(){
      const req = {params: {id: 1}, body: {name: "NameTest", image: "ImageTest"}};
      updateStub.resolves([true]);
      await MemberController.updateMembers(req,res);
      expect(status.args[0][0]).be.equal(200);
      expect(json.args[0][0].msg).be.equal('Member was updated successfully');
    });

    it('returns 404 and a not found member message', async function(){
      const req = {params: {id: 1000}, body: {name: "NameTest", image: "ImageTest"}};
      updateStub.resolves([]);
      await MemberController.updateMembers(req,res);
      expect(status.args[0][0]).be.equal(404);
      expect(json.args[0][0].msg).be.equal('Member was not found');
    });

    it('returns 500 and an Internal server error message', async function(){
      const req = {params: {id: 1000}, body: {name: "NameTest", image: "ImageTest"}};
      updateStub.rejects();
      await MemberController.updateMembers(req,res);
      expect(status.args[0][0]).be.equal(500);
      expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    });
  });
});