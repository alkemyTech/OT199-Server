const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const should = chai.should();

const token406 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NDBhJzhuZAoJBjJa3wTmmPHGRCo0hLF_lhy9mrheobY";

describe("Auth", () => {
  describe("/GET me", () => {
    it("it should GET an error:NOT_ACCEPTABLE", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .set({ Authorization: `Bearer ${token406}` })
        .end((err, res) => {
          res.should.have.status(406);
          done();
        });
    });
    it("it should GET an error:UNAUTHORIZED", (done) => {
      chai
        .request(app)
        .get("/auth/me")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});

// router.post('/register', [
//     check('firstName', 'First name is required').not().isEmpty(),
//     check('lastName', 'Last name is required').not().isEmpty(),
//     check('email', 'Email is not valid').isEmail(),
//     check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({ minSymbols: 0 }),
//     Validator.validateFields
// ], UserController.register);

// router.post('/login', [
//     check('email', 'Email is not valid').not().isEmpty().isEmail(),
//     check('password', 'Password is not valid').not().isEmpty().isString(),
//     Validator.validateFields
// ], UserController.logIn)

// router.get('/me',UserController.getProfile)
