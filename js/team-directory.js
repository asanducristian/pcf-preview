(function () {
  'use strict';

  document.querySelectorAll('[data-team-directory]').forEach(function (directory) {
    directory.querySelectorAll('[data-team-group]').forEach(function (group) {
      var selectors = Array.from(group.querySelectorAll('[data-team-selector]'));
      var profiles = Array.from(group.querySelectorAll('[data-team-profile]'));

      function activate(id) {
        selectors.forEach(function (selector) {
          var active = selector.getAttribute('data-team-selector') === id;
          selector.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        profiles.forEach(function (profile) {
          var active = profile.getAttribute('data-team-profile') === id;
          profile.classList.toggle('is-active', active);
          profile.hidden = !active;
        });
      }

      selectors.forEach(function (selector) {
        selector.addEventListener('click', function () {
          activate(selector.getAttribute('data-team-selector'));
        });
      });

      group.querySelectorAll('[data-team-toggle]').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
          var fullBio = toggle.parentElement.querySelector('[data-team-full]');
          var expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          toggle.textContent = expanded ? toggle.getAttribute('data-more') : toggle.getAttribute('data-less');
          fullBio.hidden = expanded;
        });
      });

      if (selectors.length) {
        activate(selectors[0].getAttribute('data-team-selector'));
      }
    });
  });
})();
