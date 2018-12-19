# Project Overview

This project includes a series of tests for a web-based application that reads RSS feeds. 


## Prerequisites
This project uses [Jasmine](http://jasmine.github.io/) for testing and [Gulp](https://gulpjs.com/) for build.

You need to have Node.js(Node) installed before you can install Gulp. 


## How to start?
To successfully run the project, please follow these steps to install Gulp and plugins used in the project:
1. Install Gulp into the project by using command:
	$ npm install gulp --save -dev

2. Install plugin gulp-sass
	$ npm install gulp-sass --save -dev

3. Install plugin browser-sync
	$ npm install browser-sync --save -dev

4. Install plugin gulp-uglify
	$ npm install gulp-uglify --save -dev

5. To host the app locally on localhost, cd to the root folder of the project and run command:
	$ gulp serve


## Running tests
There are four test suits:
1. RSS Feeds - it tests to make sure that the allFeeds variable has been defined and that it is not empty.

2. The Menu - it ensures the menu element is hidden by default and the menu changes visibility when the menu icon is clicked.

3. loadFeed() - it ensures when the loadFeed function is called and completed its work, there is at least a single .entry element within the .feed container.

4. New loadFeed() - it ensures when a new feed is loaded by the loadFeed function the content actually changes.

