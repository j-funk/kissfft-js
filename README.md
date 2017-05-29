# kissfft-js
Javascript port of KissFFT via Emscripten.

Install: `npm install kissfft-js`

FFTW may perhaps be the fastest C algorithm, however, KissFFT appears to be 
the winner for Javascript in terms of both size and execution speed.

I've added new benchmarks against other popular Javascript algorithms 
[here](https://github.com/j-funk/js-dsp-test/).  

Thanks to [Chris Cannam](https://code.soundsoftware.ac.uk/projects/js-dsp-test)
for the original benchmark tool and for transpiling KissFFT.

Example usage for `kissfft-js` can be found in the test directory. 
The examples are only of the real valued transform / inverse, however complex 
to complex is also available.

The original KissFFT docs are also 
[here](https://github.com/j-funk/kissfft-js/blob/master/src/README).
