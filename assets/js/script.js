var heroTime = $("#"); // NEED ID

var formName = $("#");
var formSkill = $("#");
var formDate = $("#");

// Displays time on hero image
heroTime.text(
  setInterval(function () {
    console.log(dayjs().format("MMM D, YYYY at hh:mm:ss a")); // Set to return when HTML doc is ready
  }, 1000)
);

// Get input from form
$("#formName").submit(function () {
  var $inputs = $("formName : input");
});
