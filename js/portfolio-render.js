(function () {
  'use strict';

  // Builds the Portfolio logo grid and transaction panes from window.PCF_PORTFOLIO
  // (js/portfolio-data.js), on the Portfolio pages and in the Home Portfolio block.
  // Must run before js/webflow.js so the Webflow tabs widget initialises with the
  // generated tabs.
  var clients = window.PCF_PORTFOLIO;
  if (!clients) return;

  // Home shows these clients, in this order, with their latest transactions.
  var HOME_CLIENTS = ['rodbun', 'mg-tec', 'pet-star', 'carmistin'];
  var HOME_TRANSACTIONS = 3;

  var lang = /portofoliu|acasa/.test(window.location.pathname) ? 'ro' : 'en';
  var labels = {
    en: { value: 'VALUE', details: 'DETAILS', beneficiary: 'beneficiary' },
    ro: { value: 'VALOARE', details: 'DETALII', beneficiary: 'Beneficiar' }
  }[lang];

  function esc(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Years can be ranges ("2017–2021"): newest end year first, then newest start year.
  function years(year) {
    var parts = String(year).split(/[–-]/).map(Number);
    return { start: parts[0], end: parts[parts.length - 1] };
  }

  function sortNewestFirst(transactions) {
    return transactions
      .map(function (t, i) { return { t: t, i: i, y: years(t.year) }; })
      .sort(function (a, b) { return (b.y.end - a.y.end) || (b.y.start - a.y.start) || (a.i - b.i); })
      .map(function (x) { return x.t; });
  }

  // Original currency + amount, e.g. "EUR 101.5M", "RON 836M" (PCF answer, pct. 5).
  function valueMarkup(t) {
    if (t.amount === null || t.amount === undefined) return '<div class="nr-big">—</div>';
    return '<div class="nr-big light">' + t.cur + '</div><div class="nr-big">' + String(t.amount) + 'M</div>';
  }

  function cardMarkup(t) {
    var text = esc(lang === 'ro' ? t.ro : t.en);
    var detail = lang === 'ro' ? t.detailRo : t.detailEn;
    var detailMarkup = detail
      ? '<div class="rand s"></div><h5 class="tit-crt">' + labels.beneficiary + '</h5><div class="rand"><div class="txt-p-info c">' + esc(detail) + '</div></div>'
      : '';
    return '<div class="project"><div class="carton">' +
      '<div class="nr-big year">' + esc(t.year) + '</div>' +
      '<div class="txt-p-info c">' + text + '</div>' +
      (detail ? '<div class="portfolio-beneficiary"><h5 class="tit-crt">' + labels.beneficiary + '</h5><div class="txt-p-info c">' + esc(detail) + '</div></div>' : '') +
      '<div class="stanga"><div class="rand d"><h5 class="tit-crt">' + labels.value + '</h5></div><div class="rand s special-hide"></div><div class="big-nr">' + valueMarkup(t) + '</div></div>' +
      '<div class="dreapta"><div class="rand"><h5 class="tit-crt">' + labels.details + '</h5></div><div class="rand s special-hide"></div><div class="rand s"><div class="an">' + esc(t.year) + '</div></div><div class="rand double"><div class="txt-p-info c">' + text + '</div></div>' + detailMarkup + '</div>' +
      '</div></div>';
  }

  var divider = '<div class="line-desktop"></div><div class="linie-mobil"><div class="line-prt-mobil"></div></div>';

  function portfolioContent(transactions) {
    return '<div class="client-content">' + transactions.map(cardMarkup).join(divider) + '</div>';
  }

  // Home layout from the original markup: two cards on the first row, the third on its own row.
  var mobileDivider = '<div class="linie-mobil"><div class="line-prt-mobil"></div></div>';

  function homeContent(transactions) {
    // A single card goes on the centred row.
    if (transactions.length === 1) return '<div class="client-content-2 single nph2">' + cardMarkup(transactions[0]) + '</div>';
    var rest = transactions.slice(2);
    return '<div class="client-content nph1">' + transactions.slice(0, 2).map(cardMarkup).join(divider) + (rest.length ? mobileDivider : '') + '</div>' +
      (rest.length ? '<div class="client-content-2 single nph2">' + rest.map(cardMarkup).join(divider) + '</div>' : '');
  }

  function render(menu, content, list, maxTransactions, contentMarkup) {
    if (!menu || !content) return;

    menu.innerHTML = list.map(function (c, i) {
      return '<a data-w-tab="' + esc(c.id) + '" class="tab w-inline-block w-tab-link portfolio-added-tab' + (i === 0 ? ' w--current' : '') + '" aria-label="' + esc(c.name) + '">' +
        '<img class="portfolio-added-logo" src="livrabil/logo_companii/' + esc(c.logo) + '" alt="' + esc(c.name) + '"></a>';
    }).join('');

    content.innerHTML = list.map(function (c, i) {
      return '<div data-w-tab="' + esc(c.id) + '" class="w-tab-pane' + (i === 0 ? ' w--tab-active' : '') + '">' +
        '<div class="client-title"><div class="big-heading middle">' + esc(c.name) + '</div><div class="client-separator"></div></div>' +
        contentMarkup(sortNewestFirst(c.transactions).slice(0, maxTransactions)) +
        '</div>';
    }).join('');
  }

  render(document.querySelector('.tabs-2 .tabs-menu'), document.querySelector('.tabs-2 .tabs-content-2'),
    clients, undefined, portfolioContent);
  render(document.querySelector('.portfolio-home .tabs-menu'), document.querySelector('.portfolio-home .tabs-content'),
    HOME_CLIENTS.map(function (id) { return clients.filter(function (c) { return c.id === id; })[0]; }).filter(Boolean),
    HOME_TRANSACTIONS, homeContent);
})();
