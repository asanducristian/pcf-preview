(function () {
  'use strict';

  // Tab switching for the M&A section on expertise.html / expertiza.html.
  // Replaces the Webflow interaction, which only knew about the first two tabs,
  // and reproduces its active/inactive styles.
  function init() {
    var tabs = document.querySelectorAll('[data-ma-tab]');
    var panels = document.querySelectorAll('[data-ma-panel]');
    if (!tabs.length) return;

    function activate(index) {
      Array.prototype.forEach.call(tabs, function (tab) {
        var active = tab.getAttribute('data-ma-tab') === index;
        var arrow = tab.querySelector('.selector');
        var title = tab.querySelector('.ex-selector-title');
        var line = tab.querySelector('.ex-selector-line');
        if (arrow) arrow.style.opacity = active ? '1' : '0';
        if (title) title.style.color = active ? 'rgb(48, 48, 48)' : 'rgba(48, 48, 48, 0.24)';
        if (line) {
          line.style.width = active ? '325px' : '200px';
          line.style.height = active ? '2px' : '1px';
          line.style.backgroundColor = active ? 'rgb(48, 48, 48)' : 'rgb(197, 190, 189)';
        }
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      Array.prototype.forEach.call(panels, function (panel) {
        panel.style.display = panel.getAttribute('data-ma-panel') === index ? 'block' : 'none';
      });
    }

    Array.prototype.forEach.call(tabs, function (tab) {
      var row = tab.querySelector('.selector-row') || tab;
      row.style.cursor = 'pointer';
      row.addEventListener('click', function () {
        activate(tab.getAttribute('data-ma-tab'));
      });
    });

    activate('0');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
