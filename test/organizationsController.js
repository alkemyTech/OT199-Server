const {Organization} = require('../models');
const OrganizationController = require('../controllers/organizationController');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const orgConstant = require('../constants/organizationConstant');

describe ('Organization Tests', function() {
  const wherename = orgConstant.getOrganizationName();
  let status, json, res;
  before( function() {
    status = sinon.stub();
    json = sinon.spy();
    res = {json, status};
    status.returns(res);
  });
  
  describe ('Get Public Data', function() {
    let findOneStub;
    before(function(){
      findOneStub = sinon.stub(Organization, 'findOne');
    });

    afterEach(function(){
    status = sinon.stub();
    json = sinon.spy();
    res = {json, status};
    status.returns(res);
    });

    it('return 200 and organization data', async function(){
    const req = {query: {name: wherename}};
    findOneStub.resolves({name:'test', image: 'image', phone:'phone', address:'address', facebookUrl:'facebookUrl', instagramUrl:'instagramUrl',linkedinUrl:'linkedinUrl'});
    await OrganizationController.getPublicData(req,res);
    expect(status.args[0][0]).be.equal(200);
    })
    
    it('returns 500 and an Internal server error message', async function(){
    const req = {query: {name: ''}};  
    findOneStub.rejects();
    await OrganizationController.getPublicData(req,res);
    expect(status.args[0][0]).be.equal(500);
    expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    })
  });

  describe('update public data by ID', () => {
    let updateStub;
    before(function(){
      updateStub = sinon.stub(Organization, 'update'); 
    });

    afterEach(function(){
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });
    
    it('returns 200 and a Public Data update message', async function(){
      const req = {query: {name: wherename}, body: {name:'test', image: 'image', phone:'phone', address:'address', facebookUrl:'facebookUrl', instagramUrl:'instagramUrl',linkedinUrl:'linkedinUrl'}};
      updateStub.resolves([true]);
      await OrganizationController.updatePublicData(req,res);
      expect(status.args[0][0]).be.equal(200);
      expect(json.args[0][0].msg).be.equal('Public Data was updated successfully');
    });

    it('returns 404 and a not found public data organization message', async function(){
      const req = {params: {id:2}, body: {name:'test', image: 'image', phone:'phone', address:'address', facebookUrl:'facebookUrl', instagramUrl:'instagramUrl',linkedinUrl:'linkedinUrl'}};
      updateStub.resolves([]);
      await OrganizationController.updatePublicData(req,res);
      expect(status.args[0][0]).be.equal(404);
      expect(json.args[0][0].msg).be.equal('Public Data was not found');
    });

    it('returns 500 and an Internal server error message', async function(){
      const req = {params: {id:1000}, body: {name:'test', image: 'image', phone:'phone', address:'address', facebookUrl:'facebookUrl', instagramUrl:'instagramUrl',linkedinUrl:'linkedinUrl'}};
      updateStub.rejects();
      await OrganizationController.updatePublicData(req,res);
      expect(status.args[0][0]).be.equal(500);
      expect(json.args[0][0].msg).be.equal('Something went wrong, the server was unable to complete your request');
    });
  })

})