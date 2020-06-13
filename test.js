
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:4000");

describe("SAMPLE unit test",function(){
  it("sumar",function(done){
    server
    .post('/retoibm/sumar/45/4')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(30);
      done();
    });
  });
});