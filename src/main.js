import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyDlFQmbshbz32CxUn8mFHfGm7opw5UhUZg",
  authDomain: "tinkering-6f440.firebaseapp.com",
  databaseURL: "https://tinkering-6f440.firebaseio.com",
  projectId: "tinkering-6f440",
  storageBucket: "tinkering-6f440.appspot.com",
  messagingSenderId: "966393702974"
};

firebase.initializeApp(config);

window.firebase=firebase;

  if(!app){
    app= new Vue({
      el: '#app',
      render: h => h(App), // This is necessary
      components: { App },
      template: '<App/>'
    });
  }
