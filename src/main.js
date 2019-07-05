import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import {DoctorService} from './../Doctor-interface.js'


$(document).ready(function() {
  $('#doctorButton').click(function() {
      let name = $('#enteredName').val();
      $('#enteredName').val("");

      // getDoctorByMedicalIssue(medicalIssue) {
      //   return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          const url = `https://CORS-anywhere.herokuapp.com/https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&skip=0&limit=10&user_key=34853a487b63d7e734401c6341ae74f8`;
          request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.response);
        getElements(response);
        }
      }
          request.open("GET", url, true);
          request.send();

          const getElements = function(response) {
      if(name == "") {
        $('.showDoctors').text("No doctors were a match. Please try again.")
      }
        $('.showDoctors').append(`"${response.data.profile}"`);
      // $('.showShiny').html(`<img src="${response.sprites.front_shiny}">`);
      //   });
    }

});
});


// `https://CORS-anywhere.herokuapp.com/https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=WA%2098198&sort=best-match-asc&skip=0&limit=10&user_key=34853a487b63d7e734401c6341ae74f8`;
