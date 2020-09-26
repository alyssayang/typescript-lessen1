// Import stylesheets
import "./style.css";

import $ from "jquery";

$(() => {
  $("button").click(() => {
    alert($("input").val() + " : " + $("select option:selected").text());
  });
});
