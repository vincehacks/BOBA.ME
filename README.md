# BOBAME
Created by Vince Chang </br>
ReactJS web app that is a Boba Tea bay area directory!


My personal ReactJS web app that connects Boba Enthusiasts with a list
of Boba shops around the Bay Area!


#### Getting Started
	1. Create-React-App: node module of the app makes the configuration

	2. React-Router:
	- node module that mimicks routes with multiple HTML pages, but puts it in one
  page
	- makes the app into a single page app
	- make one HTML, but react will have all the “pages” aka routes

	3. Creating Components:
	- `class componentName extends React.Component{}`
	- This is the ES6 class way of creating components
	- Do NOT use the `createClass` way to create componenets because


#### Landing Page
![](https://github.com/vincehacks/BOBAME/blob/master/bobame/src/Images/backdrop.png?raw=true)


#### File Directory
- ***public/index.html*** : this is just a basic index.html, react will be
injected into here by using the `<div id="root"></div>` tag
- ***src/data*** : stores all the boba shop information in both .json and .js
- ***src/App.js*** : stores all the routes
- ***src/index.css*** : is one monster file that stores all css
- ***src/index.js*** : this is the entry point, anything type of imports that I
want in all of my app will be entered here


#### Routes
- ****Home.js**** : This is the landing page