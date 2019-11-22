import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#submit-button').click(function() {

  let doctor = $("#doctor").val();
  let name = $("#name").val();
  let name = $("#firstName").val();
  let name = $("#lastName").val();

    let request = new XMLHttpRequest();
    const url = `https://cors-anywhere.herokuapp.com/https://api.betterdoctor.com/2016-03-01/doctors?first_name=${name}&last_name=${name}&specialty_uid=${doctor}&location=Portland&fields=${name}&limit=50&user_key=40b1529ebd6af1e603feb3e6b4b724ad`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      let docInfo = response.doc.length;

      $(".display-name").show();

    }

  });
});


// App name
// Epicodus's App
// Key
// 40b1529ebd6af1e603feb3e6b4b724ad
// Add this as a user_key parameter to your API calls to authenticate.
// API_KEY = 40b1529ebd6af1e603feb3e6b4b724ad
// ${doctor}
