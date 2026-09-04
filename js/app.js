/* FMIS demo - light front-end helpers only.
   UI design exercise for CSI1241 - no backend, buttons are placeholders. */

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
      var msg = form.getAttribute('data-demo-message') || 'Saved.';
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

  // Cancel maintenance call confirmation step.
  var cancelCallBtn = document.getElementById('cancel-call-btn');
  if (cancelCallBtn) {
    cancelCallBtn.addEventListener('click', function () {
      document.getElementById('cancel-call-confirm').hidden = false;
    });
  }
  var cancelCallConfirmBtn = document.getElementById('cancel-call-confirm-btn');
  if (cancelCallConfirmBtn) {
    cancelCallConfirmBtn.addEventListener('click', function () {
      document.getElementById('cancel-call-confirm').hidden = true;
      var pill = document.getElementById('call-status-pill');
      if (pill) { pill.textContent = 'Cancelled'; pill.className = 'pill cancelled'; }
      var done = document.getElementById('cancel-call-done');
      if (done) { done.hidden = false; }
      cancelCallBtn.disabled = true;
    });
  }
  var cancelCallKeepBtn = document.getElementById('cancel-call-keep-btn');
  if (cancelCallKeepBtn) {
    cancelCallKeepBtn.addEventListener('click', function () {
      document.getElementById('cancel-call-confirm').hidden = true;
    });
  }
});
