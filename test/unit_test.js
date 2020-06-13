var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = 'localhost:4000';

describe("Sample Unit Testing", function() {
    describe("Get User Data", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(app)
            .post('/retoibm/sumar/15/18')
            .end(function (err, res) {
                expect(res.EmpId).to.equal("1111");               
                done();
            });
        });

    });
});