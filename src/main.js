import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorService} from './Doctor-interface.js'


$(document).ready(function() {
  $('#doctorButton').click(function(event) {
    event.preventDefault();
      let name = $('#enteredName').val();
      $('#enteredName').val("");

        let doctorSearch = new DoctorService();

        let promise = doctorSearch.getDoctorByName(name);
        promise.then(function(response) {

        let doctorProfile = JSON.parse(response);

        console.log(doctorProfile);
      });
    });
  });
