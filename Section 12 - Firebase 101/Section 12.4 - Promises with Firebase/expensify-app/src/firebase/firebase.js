import * as firebase from 'firebase';


const config = {
   apiKey: "AIzaSyCXsXbfWnMKwnMecYxu-nTl8_03gX4UQVc",
   authDomain: "expensify-d0d23.firebaseapp.com",
   databaseURL: "https://expensify-d0d23.firebaseio.com",
   projectId: "expensify-d0d23",
   storageBucket: "expensify-d0d23.appspot.com",
   messagingSenderId: "495654368115"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
   name: 'John Doe',
   age: 27,
   isSingle: true,
   location: {
      city: 'Coventry',
      country: 'UK'
   }
}).then(() => {
   console.log('Data is saved');
}).catch((err) => {
   console.log('This failed', err);
});

// The ref() with no arguments relates to the root of the database. The .set() command overrides the whole root database with whatever is passed in and this can be an object, string, number, boolean etc.
// database.ref().set('This is my database');

// Updates only the age property value within the database.
// database.ref('age').set(28);
// Updates only the city by going down the location object.
// database.ref('location/city').set('Derby');

// Adding new attributes properties to the existing object.
database.ref('attributes').set({
   height: 5.11,
   weight: 150
}).then(() => {
   console.log('Data is saved')
}).catch((err) => {
   console.log('This failed', err);
});


//-------------------------------------
// Firebase Documents on how to use API:
//-------------------------------------
// https://firebase.google.com/docs/
// Guides Page covers the basics of using firebase on the platform.
// The Reference Page covers provides detailed information on each class/methods in the firebase SDK for the specific platform.