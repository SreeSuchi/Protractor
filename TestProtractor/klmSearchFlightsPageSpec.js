	describe('Testing Homepage', function () {
    
    beforeEach(function () {
	
       
		browser.waitForAngular();
    });

	 
    
    it('should have a title', function () {
	    browser.get('https://www.klm.com/home/in/en');
        expect(browser.getTitle()).toEqual('KLM Royal Dutch Airlines - Book cheap flights online');

    });

	  it('Should add Source and destination', function () {

			element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/form/div/div[1]/label[1]/input')).sendKeys('Chennai - Chennai International Airport (MAA), India');
			element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/form/div/div[1]/label[2]/input')).sendKeys('Mumbai/Bombay - Chhatrapati Shivaji (BOM), India');
			
			
		});

		it('Should add departure and return date', function()
		{
		    browser.waitForAngular();
			var picker = element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/form/div/div[1]/label[3]/input')).click();
			picker.sendKeys('1 May 2017');

			console.log("-From date entered");
		    var picker = element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/form/div/div[1]/label[3]/input')).click();
			picker.sendKeys('12 May 2017');

			console.log("-To date entered");
    });

	 it('Should add members', function () {
		
			element(by.xpath('//*[@id="g-select-form5"]/input')).click();
			element(by.xpath('//*[@id="g-pax-selector-g-select-form5"]/div[2]/div/div[3]/div/button[2]')).click();
			element(by.xpath('//*[@id="g-pax-selector-g-select-form5"]/div[2]/div/button')).click();
		
		});

			 it('Should work', function () {
			var selectDropdownElement= element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/form/label[2]/select'));
			selectDropdownElement.all(by.tagName('option')).then(function (options) {
			options[0].click();
		 });
		});   

		 it('Should click submit', function () {
		 element(by.xpath('//*[@id="est-search-homepage"]/div[2]/div[2]/div/div/div/button')).click();
        
        browser.waitForAngular();
		});

			}); 	
		
