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


// // Making the firebase data format the way our Redux Store requires the data.
// // Using the forEach we can ge a childSnapshot (this can be called anything) and we can push this into our array object. Firebase has a .key method which allows us to retrieve the unique id property from the database which we can assign to id. The below will fetch the data in the format for our React-Redux app.
// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });

//       console.log(expenses);
//    });

// // Fetching data through subscription. Every time the data changes we will retrieve the data back in the format required by our React-Redux application:
// database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];

//    snapshot.forEach((childSnapshot) => {
//       expenses.push({
//          id: childSnapshot.key,
//          ...childSnapshot.val()
//       });
//    });

//    console.log(expenses);
// });

// // Firebase Subscription Child Events:
// // child_removed - callback when a child data gets removed, displaying the removed data.
// database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });

// // child_changed - callback when a child data gets updated, displaying the changed data.
// database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });

// // child_added - callback when a child data gets added, displaying the added data.
// // This is going to fire one time for all existing data already at that ref location. It will then rerun for all new expenses added to the database.
// database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });


//-------------------------------------
// FIREBASE CRUD COMMAND EXAMPLES:
//-------------------------------------
// // Firebase does not support Arrays. We have to structure the data as objects.
// // The keys on the object is going to be the id. The array properties will be within the object.
// // The push method allows firebase to automatically create a new property on our reference and give it a random value (i.e. a random id/key). Everything we pass into the .push() method will be added to the property object.
// database.ref('expenses').push({
//    description: 'Rent',
//    note: '',
//    amount: 109500,
//    createdAt: 976123498763
// });


// // To Read data from the firebase database.
// // First method is to fetch the data a single time.
// database.ref()
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    })
//    .catch((err) => {
//       console.log('Error fetching data', err);
//    });

// // Second method is to subscribe to data. Subscribing allows us to get notified of changes to the data.
// // The on method takes in two arguments, the second being a callback function. We cannot use promises because they can only resolve or reject once whereas we want to run this over and over again when the data changes hence using the callback pattern.
// // We can pass in a third argument which is a callback function for the error.
// const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
// }, (err) => {
//    console.log('Error with data fetching', err);
// });

// // This should rerun the .on() callback function above when the data changes to fetch the new data.
// setTimeout(() => {
//    database.ref('age').set(29);
// }, 3500);

// // Cancel subscription using the .off() method. We can unsubscribe to specific functions by passing in the function name as an argument else we can leave this empty to unsubscribe to everything.
// setTimeout(() => {
//    database.ref().off('value', onValueChange);
// }, 7000);

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// // To Add data to the firebase database.
// database.ref().set({
//    name: 'John Doe',
//    age: 27,
//    isSingle: true,
//    stressLevel: 5,
//    job: {
//       title: 'Print Designer',
//       company: 'We Print It'
//    },
//    location: {
//       city: 'Coventry',
//       country: 'UK'
//    }
// }).then(() => {
//    console.log('Data is saved');
// }).catch((err) => {
//    console.log('This failed', err);
// });


// // To Update the firebase database.
// database.ref()
//    .update({
//       job: 'Marketing Officer',
//       isSingle: null,
//       'location/city': 'Derby',
//       'job/title': 'Marketing Manager'
//    })
//    .then(() => {
//       console.log('Data was updated');
//    })
//    .catch((err) => {
//       console.log('Did not update data', err);
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