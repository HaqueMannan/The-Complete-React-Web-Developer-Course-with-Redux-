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

// To delete from the database using the .set() method. Using Null is equivalent to calling remove.
// database.ref('isSingle')
//    .set(null)
//    .then(() => {
//       console.log('Data was removed');
//    })
//    .catch((err) => {
//       console.log('Did not remove data', err);
//    });

// // To Delete a property entirely from the database.
// database.ref('isSingle').
//    remove()
//    .then(() => {
//       console.log('Data was removed');
//    })
//    .catch((err) => {
//       console.log('Did not remove data', err);
//    });

// // To Delete the whole database.
// database.ref().
//    remove()
//    .then(() => {
//       console.log('Data was removed');
//    })
//    .catch((err) => {
//       console.log('Did not remove data', err);
//    });