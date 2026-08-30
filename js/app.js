/* FMIS demo - light front-end helpers only.
   This is a UI design exercise, so nothing is saved and buttons are placeholders. */

document.addEventListener('DOMContentLoaded', function () {

  // Mark the current page in the main nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mainnav a').forEach(function (a) {
    if (a.getAttribute('href') === here) { a.classList.add('active'); }
  });

  // Stop placeholder forms from actually submitting, show a short message.
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.getAttribute('data-demo-message') || 'Saved. This is a demo screen, so no data is stored.';
      var box = form.querySelector('.demo-result');
      if (box) { box.textContent = msg; box.hidden = false; }
    });
  });

  // "Print label" placeholder.
  var printBtn = document.getElementById('print-label');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      var box = document.getElementById('label-preview');
      if (box) { box.hidden = !box.hidden; }
    });
  }

  // Report building/floor picker - swaps the drawing name text only.
  var reportForm = document.getElementById('report-picker');
  if (reportForm) {
    reportForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('report-output').hidden = false;
      document.getElementById('report-output').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Cancel move confirmation step.
  var cancelBtn = document.getElementById('cancel-move-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      document.getElementById('cancel-confirm').hidden = false;
    });
  }
  var cancelConfirmBtn = document.getElementById('cancel-confirm-btn');
  if (cancelConfirmBtn) {
    cancelConfirmBtn.addEventListener('click', function () {
      document.getElementById('cancel-confirm').hidden = true;
      var status = document.getElementById('move-status-pill');
      if (status) { status.textContent = 'Cancelled'; status.className = 'pill cancelled'; }
      var done = document.getElementById('cancel-done');
      if (done) { done.hidden = false; }
      cancelBtn.disabled = true;
    });
  }
  var cancelKeepBtn = document.getElementById('cancel-keep-btn');
  if (cancelKeepBtn) {
    cancelKeepBtn.addEventListener('click', function () {
      document.getElementById('cancel-confirm').hidden = true;
    });
  }
});
