const activityQr = document.getElementById('activity');

const activityCl = document.getElementById('activityCl');

activityCl.addEventListener('click', findActivity);

findActivity();
function findActivity() {
  fetch('http://www.boredapi.com/api/activity/')
    .then((res) => res.json())
    .then((data) => {
      activityQr.innerHTML = data.activity;
    });
}
