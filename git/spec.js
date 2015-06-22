var ProtractorPerf = require('protractor-perf');
describe('angularjs homepage todo list', function() {
    var perf = new ProtractorPerf(protractor,browser); // Initialize the perf runner
     it('should add a todo', function() {
		
       browser.driver.sleep(5000);
	    perf.start();
       browser.get('http://www.angularjs.org');
       // Start measuring the metrics
      	    
        perf.stop(); // Stop measuring the metrics 

        if (perf.isEnabled) { // Is perf measuring enabled ?
            // Check for perf regressions, just like you check for functional regressions
            expect(perf.getStats('meanFrameTime')).toBeLessThan(30); 
        };

       
    });
});