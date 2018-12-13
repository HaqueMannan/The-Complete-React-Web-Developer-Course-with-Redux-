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


// To Read data from the firebase database.
// First method is to fetch the data a single time.
// If we leave .ref() empty this will return the all the objects within root i.e. everything, whereas if we specify a property within .ref('location') or .ref('job/title') this will return an object/string for that property only.
// This will either resolve, reject -> but if the data changes we would not be notified and will need to make another single fetch request for the updated data.
database.ref()
   .once('value')
   .then((snapshot) => {
      const val = snapshot.val();
      console.log(val);
   })
   .catch((err) => {
      console.log('Error fetching data', err);
   });

// Second method is to subscribe to data. Subscribing allows us to get notified of changes to the data.
// The on method takes in two arguments, the second being a callback function. We cannot use promises because they can only resolve or reject once whereas we want to run this over and over again when the data changes hence using the callback pattern.
// We can pass in a third argument which is a callback function for the error.
const onValueChange = database.ref().on('value', (snapshot) => {
   console.log(snapshot.val());
}, (err) => {
   console.log('Error with data fetching', err);
});

// The above is an inline version - we could have split the callback function as its own variable and passed that in as the second argument e.g.
// const onValueChange = (snapshot) => console.log(snapshot.val());
// database.ref().on('value', onValueChange);

// This should rerun the .on() callback function above when the data changes to fetch the new data.
setTimeout(() => {
   database.ref('age').set(29);
}, 3500);

// Cancel subscription using the .off() method. We should not see the last change printed to the console.
// We can unsubscribe to specific functions by passing in the function name as an argument else we can leave this empty to unsubscribe to everything.
setTimeout(() => {
   database.ref().off('value', onValueChange);
}, 7000);
setTimeout(() => {
   database.ref('age').set(30);
}, 10500);

database.ref().on('value', (snapshot) => {
   const val = snapshot.val();
   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});


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