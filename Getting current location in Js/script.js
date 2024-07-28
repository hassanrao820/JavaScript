/** @format */

const getLocation = document.getElementById("get-location-button");

function gotLocation(gotLocation) {
  console.log(gotLocation);
}
function failedLocation() {
  console.log("Some Issue");
}
getLocation.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedLocation);
});
