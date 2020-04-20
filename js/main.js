const firebaseConfig = {
    apiKey: "AIzaSyBd0_hRfwHfnrsriVqUJjMvS7kfCwTLuM4",
    authDomain: "gali-proj.firebaseapp.com",
    databaseURL: "https://gali-proj.firebaseio.com",
    projectId: "gali-proj",
    storageBucket: "gali-proj.appspot.com",
    messagingSenderId: "759730916200",
    appId: "1:759730916200:web:1e38c16a0e490881f8a4dd"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const user= 'Gali'

var userUpdated = firebase.database().ref('users');
userUpdated.on('value', function (snapshot) {
    const user = snapshot.val();
    console.log('User updated', user);
    document.querySelector('h2').innerText = (user.isOn)? 'On' : 'Off'
});

function onGo() {
    const isAgree = document.querySelector('.agree').checked
    writeUserData(isAgree)
    console.log('DONE UPDATE', isAgree);
}



function writeUserData(isOn) {
    firebase.database().ref('users/' + user).set({
        isOn,
    });
}



