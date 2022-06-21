let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.use(chaiHttp)
const url= 'http://localhost:3000';
const token406 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NDBhJzhuZAoJBjJa3wTmmPHGRCo0hLF_lhy9mrheobY";
const tokenOk = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6MSwiaWF0IjoxNjU1Nzc1Njk5LCJleHAiOjE2NTU3NzkyOTl9.eh5tv3S9u_juGKB25LeqheDGaVqJEZbQ11qKS4v2ApU";

let idParams = 3
let idDel = 1
describe('Test get Testimonial', () => {
    it('should get all testimonial', (done) => {
        chai.request(url)
			.get('/testimonials/all')
			.end(function(err,res){
				expect(res).to.have.status(200);
				done();
			});
    });

    it('should get one Testimonial', (done) => {
        chai.request(url)
            .get(`/testimonials/${idParams}`)
            .set({ Authorization: `Bearer ${tokenOk}` })
            .end((err, res)=>{
                expect(res).to.have.status(200);
                done()
            })
    });

    it(`update the testimonials with ${idParams}`, (done) => {
        chai.request(url)
            .put(`/testimonials/${idParams}`)
            .set({ Authorization: `Bearer ${tokenOk}` })
            .send({ name : "Cambio"})
            .end((err, res)=>{
                expect(res.body.data).to.have.property('name').to.be.equal('Cambio');
                expect(res).to.have.status(200);
                done();
            })
    });

    it('created the testimonials', (done) => {
        chai.request(url)
        .post('/testimonials')
        .set({ Authorization: `Bearer ${tokenOk}` })
        .send({ name : "Preuba test", content : "prueba"})
        .end((err, res)=>{
            expect(res).to.have.status(201)
        })
        done()  
    });
    

    it(`delete the testimonial with id : ${idDel} `, (done) => {
        chai.request(url)
        .delete(`/testimonials/${idDel}`)
        .set({ Authorization: `Bearer ${tokenOk}` })
        .end((err, res)=>{
            expect(res).to.have.status(200)
        })
        done() 

    });
    
    
    
    
});
