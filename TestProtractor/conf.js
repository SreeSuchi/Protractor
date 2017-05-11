// An example configuration file. 
exports.config = {
    // The address of a running selenium server. 
    seleniumAddress: 'http://localhost:4444/wd/hub', 
	rootElement: '[ng-app]',

    // Capabilities to be passed to the webdriver instance. 
    capabilities: {
        'browserName': 'firefox',
		'chromeOptions': {
            'args': ['disable-infobars']
        }
    }, 
    
    // Spec patterns are relative to the current working directly when 
    // protractor is called. 
    specs: ['klmSearchFlightsPageSpec.js'], 
    
   onPrepare:function(){
       browser.ignoreSynchronization = true;
   	   browser.manage().window().maximize();
	  
   }

  
};