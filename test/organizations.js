let chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const rewire = require('rewire');
const chaiHttp = require('chai-http');
const {Organization} = require('../models');
const OrganizationController = require('../controllers/organizationController');
const {tokenSign} = require('../helpers/generateToken');
const { get } = require('../routes/organizations');
const { getPublicData } = require('../controllers/organizationController');
chai.use(chaiHttp);

const sandbox = sinon.createSandbox();

const adminToken = tokenSign({id:1, roleId:1});
const regularToken = tokenSign({id:2, roleId:2});


describe('Organization test endpoints', () => {
describe('Get public organization data', () => {
  beforeEach(()=>{
    getPublicDataFake = (req,res) => {
    res.status(200).json({
      Organization: [
        {fakeName: 'test 1', fakeDescription: 'description 1'},
        {fakeName: 'test 2', fakeDescription: 'description 2'},
        {fakeName: 'test 3', fakeDescription: 'description 3'},
        
      ]
    })
    };

    getPublicDataStub = sandbox.stub()

    app = rewire('../app');
});
})
})