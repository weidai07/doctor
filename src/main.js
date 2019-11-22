import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#submit-button').click(function() {

  let city = $("#city-input-field").val();
  let miles = $("#miles-input-field").val();

    let request = new XMLHttpRequest();
    const url = `https://cors-anywhere.herokuapp.com/https://developer.betterdoctor.com/?API_KEY=40b1529ebd6af1e603feb3e6b4b724ad`;

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

      $(".display-para").show();
      $('#display-answer').empty().text(docInfo);
      $("#distance-result").empty().text(miles);
    }

  });
});


// App name
// Epicodus's App
// Key
// 40b1529ebd6af1e603feb3e6b4b724ad
// Add this as a user_key parameter to your API calls to authenticate.
// API_KEY = 40b1529ebd6af1e603feb3e6b4b724ad
