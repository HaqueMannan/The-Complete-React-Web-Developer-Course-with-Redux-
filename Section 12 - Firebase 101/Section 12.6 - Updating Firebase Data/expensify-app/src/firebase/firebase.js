// https://firebase.google.com/docs/
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

// To Add data to the firebase database.
database.ref().set({
   name: 'John Doe',
   age: 27,
   isSingle: true,
   stressLevel: 5,
   job: {
      title: 'Print Designer',
      company: 'We Print It'
   },
   location: {
      city: 'Coventry',
      country: 'UK'
   }
}).then(() => {
   console.log('Data is saved');
}).catch((err) => {
   console.log('This failed', err);
});

// To Update the firebase database. Update takes in an object which allows multiple data within the database to be updated. This is more efficient than running multiple .set() methods to update the database.
// Update allows us to also add/set new data as well as delete data by setting them to null.
// The update object only actually updates at the root level and will not update within nested elements. It will update the whole root element to the new object value and will lose all other properties stored on the object i.e. if we omitted country, this would have been lost.
database.ref()
   .update({
      job: 'Marketing Officer',
      isSingle: null,
      location: {
         city: 'Derby',
         country: 'UK'
      }
   })
   .then(() => {
      console.log('Data was updated');
   })
   .catch((err) => {
      console.log('Did not update data', err);
   });

// The syntax to correct the above - this is not going to be used a lot - is to use the forward slash, however, the key must now also be wrapped in quotes otherwise this will no be a valid JavaScript syntax:
database.ref()
   .update({
      stressLevel: 9,
      'job/title': 'Marketing Manager',
      'job/company': 'ASDA Georges',
      'location/city': 'Nottingham'
   })
   .then(() => {
      console.log('Data was updated');
   })
   .catch((err) => {
      console.log('Did not update data', err);
   });


// // To Delete the whole database.
// database.ref().
//    remove()
//    .then(() => {
//       console.log('Data was removed');
//    })
//    .catch((err) => {
//       console.log('Did not remove data', err);
//    });