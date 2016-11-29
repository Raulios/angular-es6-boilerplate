# angular-es6-boilerplate
> Boilerplate for AngularJS applications using ES6, Gulp and SASS

## Disclaimer

**If you want to use this boilerplate as a starting point for your application you can use the [Angular ES6 Generator](https://github.com/Raulios/angular-es6-generator#installation)**

This boilerplate is based on this [Thinkster article](https://thinkster.io/angularjs-es6-tutorial), which focus on building Angular1 apps that can be upgraded easily to Angular2.

## Project structure

```
app/
	assets/
		sass/
		vendor/
		fonts/
		...
	components/
	config/
		app.config.js
		app.constants.js
		app.run.js
		app.templates.js
	home/
	layout/
	services/
	app.js
dist/
	index.html
	yourApp.min.css
	yourApp.min.js
gulpfile.js
index.html
package.json
```

A bit of explanation:

### app/assets/
> Here goes all the files non related with AngularJS such as `sass`, `css`, `fonts`, `images`, `vendor`, ...

### app/components/
> This is the place for the [Angular components](https://docs.angularjs.org/guide/component) that are used across several modules of your application. 

> **NOTE: If a component only belongs to a certain module it should be inside that module folder**

### app/config/
> Here you put all the configuration files for your application such as `config`, `constants`, `run`... It also holds the generated `templates` by [templateCache](https://www.npmjs.com/package/gulp-angular-templatecache).

### app/home/
> This is a mockup module that can be used as a starting point

### app/layout/
> This is the base module that have shared components like `header`, `footer`... and the `ui-view` where the rest of the application is built on.

### app/services/
> Here is where your services live. It makes sense to have them in their own folder because they can be used across several modules.

### dist/
> This is the generated folder when you run the `gulp build` command. This will contain the production `index.html` and the concatenated and minified css and js files.