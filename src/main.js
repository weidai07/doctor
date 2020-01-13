import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findDoctors } from './scripts';


$(document).ready(function() {

  $("#submit").click(function() {

    $("#results").empty();  

    let userInput = $("#userInput").val();
    

    findDoctors(userInput)
      .then((response) => {

        let doctors = response.data;  

        if (doctors.length === 0){
          $(".display-name").append(`<h4>There are no Doctors that meet this criteria.</h4>`);
        }

        for (let i = 0; i < doctors.length; i++) {
          $("#results").append(`<li>${doctors[i].practices[0].name}</li>
          <li>${doctors[i].practices[0].visit_address.street}</li>
          <li>${doctors[i].practices[0].visit_address.city}</li>
          <li>${doctors[i].practices[0].visit_address.state}</li>
          <li>${doctors[i].practices[0].visit_address.zip}</li>
          <li>${doctors[i].practices[0].phones[0].number}</li>
          <li>Accepting new paitents: ${doctors[i].practices[0].accepts_new_patients}</li><br>`);
        }  
      }, function(error) {
        $("#results").append(`${error.message}`);
      });

  });
});
