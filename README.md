# kissfft-js
Javascript port of KissFFT via Emscripten.

Thanks to [Chris Cannam](https://code.soundsoftware.ac.uk/projects/js-dsp-test) 
for transpiling KissFFT and his [benchmarks]
(http://all-day-breakfast.com/js-dsp-test/fft/) of the various FFT 
algorithms available.  FFTW may perhaps be the fastest C algorithm, however,
KissFFT is the clear winner for Javascript in terms of both size and 
execution speed.

Example usage for `kissfft-js` can be found in the test directory 
though only the real valued transform / inverse are checked.

The original KissFFT docs are also [here](./src/README.md).
 
