import chai  from "chai"
import chaiHttp  from "chai-http"
let should = chai.should();
chai.use(chaiHttp);
import app from '../server'


describe("Home", () => {
    describe("/GET Home", () => {
        it("it should GET all the Home success message", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a("object");
                    (res.body.message.should).should.be.a("string");
                    done();
                });
        });
    })
})



describe('Shorten Url', () => {
  describe('/POST url', () => {
    it('it should shorten URL in reequest', (done) => {
      chai
        .request(app)
        .post('/shortenUrl')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.should.be.a('string');
          done();
        });
    });
  });
});

