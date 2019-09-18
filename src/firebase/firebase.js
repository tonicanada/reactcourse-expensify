import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {

//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)

// })




// database.ref('expenses').push({
//     description: 'comprar en cornershop',
//     note: '',
//     amount: '53400',
//     createdAt: 10
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })



// database.ref('notes/-Lp0sr-ixTi6gC2ka7WC').remove()

// database.ref('notes').push({
//     title: 'course topics',
//     body: 'React Native, Angular'
// })

// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e    )
//     })

// database.ref().set({
//     name: 'Antonio Cañada',
//     age: 33,
//     stressLevel: 6,
//     job: {
//         title: 'civil engineer',
//         company: 'Tecton'
//     },
//     location: {
//         city: 'Santiago',
//         country: 'Chile'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


// const isSingleRef = database.ref()
// isSingleRef
//     .remove()
//     .then(() => {
//         console.log('data is removed')
//     }).catch((e) => {
//         console.log(e)
//     })

