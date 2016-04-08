var expect = chai.expect;

it("A basic test", function () {
    expect(true).to.be.ok;
    var value = "hello";
    expect(value).to.equal("hello");
});