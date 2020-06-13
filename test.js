/*var assert = require("assert");

describe("Numbers",function(){
  it('should add two numbers',function(){
    assert.equal(5, 3 + 2);
  })
});*/

var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should add two number",function(done){

    //calling ADD api
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