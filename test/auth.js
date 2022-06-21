const httpStatus = require('../helpers/httpStatus');
const {
  User
} = require("../models");
const sinon = require("sinon");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe("Auth", () => {
  process.env.JWT_SECRET = "hola";
  const tokenNOT_ACCEPTABLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NDBhJzhuZAoJBjJa3wTmmPHGRCo0hLF_lhy9mrheobY";
  const tokenUser1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iyV9O460Luh6OOicwWu97s06YLTW2oY83ePicx5EdaY";
  const tokenUser5 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IlVzZXI1IiwiaWF0IjoxNTE2MjM5MDIyfQ._WsLJVzLDZyFKyupzdomaiU8YVwr8gQnDlDvfvBxqMU";
  const bodyOk = {
    firstName: "firstname1",
    lastName: "lastname1",
    email: "email1@mail.com",
    password: "Password1",
  };

  describe("/GET me", () => {
    // reemplaza acceso a DB por PK con 1 argumento posible
    // con id = 1
    sinon
      .stub(User, "findByPk")
      .withArgs(1)
      .callsFake(() => {
        return {
          id: 1,
          name: "user1"
        };
      });

    it("it should GET an object for id=1", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .set({
          Authorization: `Bearer ${tokenUser1}`
        })
        .end((err, res) => {
          res.should.have.status(httpStatus.OK);
          expect(res.body).to.have.property('id').to.be.equal(1);
          expect(res.body).to.have.property('name').to.be.equal('user1');
          done();
        });
    });

    it("it should GET an error:NOT_ACCEPTABLE", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .set({
          Authorization: `Bearer ${tokenNOT_ACCEPTABLE}`
        })
        .end((err, res) => {
          res.should.have.status(httpStatus.NOT_ACCEPTABLE);
          done();
        });
    });

    it("it should GET an error:UNAUTHORIZED", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .end((err, res) => {
          res.should.have.status(httpStatus.UNAUTHORIZED);
          done();
        });
    });

    it("it should GET an error:NOT_FOUND", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .set({
          Authorization: `Bearer ${tokenUser5}`
        })
        .end((err, res) => {
          res.should.have.status(httpStatus.NOT_FOUND);
          done();
        });
    });
  });

  describe("/POST register", () => {
    // reemplaza acceso a DB para crear registro 
    sinon
      .stub(User, "build")
      .callsFake(() => {
        return {};
      });
    sinon
      .stub(User.prototype, "save")
      .callsFake(() => {
        return {
          id: 1,
          name: "user1"
        };
      });

    it("it should Register an object", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send(bodyOk)
        .end((err, res) => {
          res.should.have.status(httpStatus.OK);
          expect(res.body).to.have.property('firstName').to.be.equal(firstname1);
          done();
        });
    });
  });
});