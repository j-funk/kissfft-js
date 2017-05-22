var chai = require('chai');

var KissFFT = require('../src/FFT');
var A2_1024 = require('./audioBuffer.js');

var SIZE = A2_1024.length;


var scaleTransform = function(trans) {
    var i = 0,
        bSi = 1.0 / SIZE,
        x = trans;
    while(i < x.length) {
        x[i] *= bSi; i++;
    }
    return x;
};

describe('kissfft-js', function() {

    it('should successfully transform and invert real valued input buffer', function() {
        var fftr = new KissFFT.FFTR(SIZE);
        var transform = fftr.forward(A2_1024);
        var transScaled = scaleTransform(transform);
        var a2_again = fftr.inverse(transScaled);

        // Just to show how you can clean up after you're done ;)
        fftr.dispose();  // fftr is now no longer usable for FFTs

        for(var i = 0; i < SIZE; i++) {
            chai.expect(A2_1024[i]).to.be.closeTo(a2_again[i], 0.0000005);
        }
    });
});