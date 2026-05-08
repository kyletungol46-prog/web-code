
(function () {
  var btn = document.querySelector('.nav-toggle');
  var list = document.getElementById('primary-nav');
  if (!btn || !list) return;
  btn.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

(function () {
  var demos = document.querySelectorAll('.size-demo');
  demos.forEach(function (demo) {
    var slider = demo.querySelector('input[type=range]');
    var label = demo.querySelector('.scale-value');
    if (!slider) return;
    var targetId = slider.getAttribute('data-target');
    var target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    function update() {
      var v = parseFloat(slider.value);
      target.style.transform = 'scale(' + v + ')';
      if (label) label.textContent = v + '×';
    }
    slider.addEventListener('input', update);
    update();
  });
})();
