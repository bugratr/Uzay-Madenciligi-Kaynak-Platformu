const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Maden Route Testleri', () => {
    it('Tüm madenleri getir', done => {
        chai.request(server)
            .get('/api/madenler')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    // Diğer testler...
});
