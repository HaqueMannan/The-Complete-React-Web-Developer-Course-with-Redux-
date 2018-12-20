This is a generic React App Boilerplate with a simple login and dashboard page.

This requires a firebase database already created and both files updated with the firebase API keys:
.env.development
.env.test

Important note make sure that the above two files are never uploaded to a public directory as you would want to keep these private and so update the .gitignore file to ignore the two files below. These should be kept in a variable and the web hosting site should be able to set these up as variables so that they are never served to the client for security.

Once this is setup you should be able to run the following commands:

Install all Node packages from package.json for the boilerplate to work:
$ npm run

Run the development server on localhost/8080:
$ npm run dev-server

Run the Jest testing suite:
$ npm test -- --watch

Run webpack build files for both development and production - this will generate the public/dist files for the application:
$ npm run build:prod
$ npm run build:dev