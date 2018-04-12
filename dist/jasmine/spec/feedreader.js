/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements. This ensures 
 * they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in the application.
    */
    describe('RSS Feeds', () => {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('contain URLs', () => {
            for (let feed of allFeeds) {
                expect(Object.keys(feed)).toContain('url');
                expect(feed.url.length).not.toBe(0);
            }
        }); 


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('contain names', () => {
           allFeeds.forEach((feed) => {
                expect(Object.keys(feed)).toContain('name');
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* "The menu" test suite*/
    describe('The menu', () => {
        let body = document.querySelector('body');
        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', () => {
            expect(body).toHaveClass('menu-hidden');
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it ('displays when clicked and hides when clicked again', () => {
            $('.menu-icon-link').trigger('click'); 
            expect(body).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').trigger('click'); 
            expect(body).toHaveClass('menu-hidden');
        });

    });
    /* "Initial Entries" test suite*/

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        describe('loadFeed()', () => {
            
            beforeEach((done) => {
                loadFeed(0, () => {
                    done();    
                });                    
            });

            it('successfully loads initial feeds', (done) => {
                let entry = $('.feed .entry');
                expect(entry.length).not.toBe(0);
                done();
            });    
              
        });

    /* "New Feed Selection" test suite*/

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
        describe('New loadFeed()', () => {
            let initFeeds;
            beforeEach((done) => {
                loadFeed(0, () => {
                    initFeeds = $('.feed').html();
                    loadFeed(1||2||3, () => {
                    done();
                    });  
                });
                      
            });

            it('successfully loads new feeds', (done) => {
                let nowFeeds = $('.feed').html();
                expect(nowFeeds).not.toEqual(initFeeds);
                done();
            });

        });

}());
