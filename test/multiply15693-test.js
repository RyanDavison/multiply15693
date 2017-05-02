const expect = require('chai').expect;
const multiply15693 = require('../index.js');

describe('multiply15693.by()', function(){
    it('returns a number equal to the input multiplied by 15693', function(){
        expect(multiply15693.by(3)).to.equal(47079);
    });
    it('returns a number equal to the input multiplied by 15693', function(){
        expect(multiply15693.by(-3)).to.equal(-47079);
    });
});
