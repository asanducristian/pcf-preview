(function () {
  'use strict';

  var rows = function (value) {
    return value.split('\n').map(function (row) {
      var parts = row.split('|');
      return { year: parts[0], value: parts[1], description: parts[2], status: parts[3] || 'existing' };
    });
  };

  var companies = [
    ['Aaylex Group (Cocorico)', 'aaylex_cocorico.png', 'aaylex', '2025|EUR 37,000,000|Aaylex / Investalim INVESTALIM State-Aid Loan|add\n2025|EUR 14,500,000|Syndicated Loan — Investment & Working Capital Facility [PCF: data needed]|hold\n2024|EUR 28,000,000|5 x APIA Subsidies Financing|add\n2024|EUR 20,000,000|Club Loan — Working Capital Facility|add\n2022|RON 431,000,000 (≈ EUR 87,100,000)|Aaylex ONE Syndicated Loan|add\n2022|EUR 17,000,000|Multipurpose Facility|add\n2021|RON 53,000,000|Working Capital — State Guarantee (Covid-19)|add\n2021|RON 28,000,000|APIA Subsidies Financing|add\n2021|EUR 20,300,000|M&A — Buy Side|add\n2021|EUR 20,000,000|Acquisition Finance + Working Capital|add\n2021|EUR 36,000,000|Leveraged Buy-Out — Club Loan|existing\n2021|EUR 38,000,000|Banvit Acquisition — M&A Exclusive Transaction Advisor|existing\n2021|EUR 25,000,000|COVID-19 State Guaranteed Syndicated Loans|existing\n2015–2020|EUR 36,000,000|Non-Recourse Discounting Facility for APIA Subsidies|existing\n2019|EUR 38,000,000|Refinancing of Corporate Bonds|existing\n2018|EUR 38,000,000|Refinancing & Additional Debt Facility — Hybrid Club Loan|existing'],
    ['Rodbun', 'rodbun.png', 'rodbun', '2025|EUR 40,000,000|Syndicated Green Loan — Afforestation [PCF: data needed]|hold\n2025|EUR 17,500,000|Syndicated Loan — Working Capital, State Guarantee [PCF: data needed]|hold\n2024|EUR 3,300,000|TU Agrar (Grupul Rodbun) Frontier Invest Group Farm Acquisition Financing|add\n2023|EUR 101,500,000|Rodbun Group Syndicated Loan|add\n2022|EUR 65,000,000|Syndicated Facility — RON/EUR Conversion|add\n2021|RON 278,000,000|Syndicated Loan|add\n2021|RON 84,500,000|Syndicated Loan — State Guarantee|add\n2021|RON 68,000,000|Syndicated Loan Top-Up Facility|add\n2021|EUR 5,500,000|Syndicated Loan|existing\n2020|EUR 54,000,000|COVID-19 State Guaranteed Syndicated Loan|existing\n2019|EUR 5,500,000|Syndication Top-Up Facility|existing\n2018|EUR 54,000,000|Syndicated Loan|existing'],
    ['Carmistin Group', 'carmistin.png', 'carmistin', '2022|RON 836,000,000 (≈ EUR 170,000,000)|Syndicated Loan|add\n2021|RON 209,000,000|Syndicated Loan Top-Up Facility|add\n2017–2021|EUR 21,000,000|Investment Loan Facilities, Working Capital Facilities, Project Finance|existing\n2021|EUR 90,000,000|Syndicated Loan Facilities 2|existing\n2020|EUR 90,000,000|Syndicated Loan Facilities 1|existing\n2017–2020|—|Non-Recourse Discounting Facility for APIA Subsidies|existing\n2019|EUR 21,000,000|Refinancing of Corporate Bonds|existing'],
    ['Vox Property Group', 'vox_property_group.png', 'vox', '2022|EUR 14,500,000|Project Finance — Vox Vertical Village|add\n2021|EUR 10,500,000|Project Finance — Vox Vertical Village|add\n2021|EUR 8,500,000|Equity Refinancing|add\n2021|EUR 36,000,000|Project Finance Residential|existing\n2021|EUR 4,700,000|Equity Refinance|existing\n2020|EUR 4,700,000|Real Estate Non-Cash Facility — Performance Bond|existing'],
    ['Campeador', 'campeador.png', 'campeador', '2021|RON 24,000,000|Investment Facility|add\n2021|RON 9,000,000|Working Capital — State Guarantee|add\n2021|EUR 2,000,000|Residential Development Loan Facility 2|existing\n2021|EUR 2,000,000|COVID-19 State Guaranteed Syndicated Loan|existing\n2020|EUR 2,000,000|Residential Development Loan Facility 1|existing'],
    ['MG Tec', 'mg_tec_industry.png', 'mg-tec', '2025|EUR 50,000,000|MG Tec Industry Development Loan Facility — investment loan + working capital|add\n2024|EUR 7,500,000|MG Tec Grup Working Capital Facility|add\n2021|EUR 10,000,000|Working Capital Facility|add\n2019|EUR 48,000,000|New Tissue Paper Factory Development Loan|existing'],
    ['Aktor S.A. (Ellaktor Group)', 'aktor.png', 'aktor', '[PCF: data needed]|RON 206,000,000|Refinancing Credit Facility — Sebeș-Turda Highway Lot 2, syndicated structure|hold\n2017|EUR 3,000,000|Reverse Factoring Facility — corporate risk of Aktor (beneficiar C.N.A.I.R., autostrada București–Brașov)|existing\n2016|EUR 5,000,000|Non-Recourse Factoring Facility (beneficiar C.N.A.I.R.)|existing'],
    ['Alpenside', 'alpenside.png', 'alpenside', '2020|EUR 5,200,000|Non-Recourse Factoring Facility (beneficiar Primăria Sector 4)|existing\n2020|EUR 3,500,000|Non-Recourse Factoring Facility & Advance Payment Guarantee (beneficiar CJ Iași)|existing\n2019|EUR 6,200,000|Non-Recourse Factoring Facility & Advance Payment Guarantee (beneficiar C.N.A.I.R.)|existing'],
    ['Evofarm', 'evofarm.png', 'evofarm', '2021|RON 16,500,000|Working Capital — State Guarantee (Covid-19)|add\n2021|EUR 2,500,000|COVID-19 State Guaranteed Loan|existing\n2019|EUR 2,500,000|Working capital refinancing and new financing|existing'],
    ['Sels Agro', '', 'sels-agro', '2025|EUR 5,000,000|Working Capital — State Guarantee|add\n2022|RON 14,600,000|Working Capital Facility|add\n2021|RON 15,000,000|Multiproduct Working Capital Facility|add'],
    ['Biharia Office', '', 'biharia-office', '2025|EUR 5,000,000|Equity Refinancing [PCF: data needed]|hold\n2024|EUR 4,000,000|Equity Refinancing [PCF: data needed]|hold'],
    ['Frizon Group', '', 'frizon-group', '2025|EUR 7,500,000|Loans Rearranging — maturity 7 years|add\n2024|EUR 7,000,000|Working Capital Facility (Farmer Loan Product)|add'],
    ['Gates Air', 'gates_air.png', 'gates-air', '2019|EUR 600,000|Romanian Digitalization Project Finance Facility|existing\n2019|EUR 10,000,000|Telecom Project Finance Facility|existing'],
    ['Liebrecht & wooD', 'liebrecht_wood.png', 'liebrecht-wood', '2020|EUR 16,000,000|Long Term Loan for Equity Refinancing|existing\n2020|EUR 7,500,000|Project Finance|existing'],
    ['Romco System', 'romco_system.png', 'romco', '2015–2016|—|Multipurpose Financing Facility|existing\n2007|Nepublicable|M&A Sell Side Advisory|existing'],
    ['Romelectro', 'romelectro.png', 'romelectro', '2013–2018|—|Multipurpose Financing Facility|existing\n2007|Nepublicable|M&A Sell Side Advisory (vânzător Romprest)|existing'],
    ['Urgent Cargus', 'urgent_cargus.png', 'urgent-cargus', '2017|EUR 4,000,000|Medium Term Cash Loan|existing\n2017|EUR 27,600,000|Term Loan Facility|existing'],
    ['Urgent Curier Post', 'urgent_curier.png', 'urgent-curier', '2018|EUR 5,200,000|Long Term Loan for Equity Refinancing — Phase 2|existing\n2016|EUR 2,500,000|Long Term Loan for Equity Refinancing — Phase 1|existing'],
    ['AgranoLand', 'agranoland.png', 'agranoland', '2026|EUR 4,000,000|[PCF: data needed] — Debt Restructuring|hold'],
    ['Bio Danubius', 'bio_danubius.png', 'bio-danubius', '2019|EUR 2,500,000|Working Capital Facilities & Commodity Trade Financing|existing'],
    ['Chimcomplex', 'chimcomplex.png', 'chimcomplex', '2018|Nepublicable|Transaction Documentation Independent Review|existing'],
    ['Cluster Power', 'cluster_power.png', 'cluster-power', '2021|RON 175,000,000|New Data Centre — State Aid Investment Project Financing|add'],
    ['Cooperativa Agricolă Podișul Transilvaniei', 'podisul_transilvaniei.png', 'podisul', '2026|EUR 30,000,000|Multipurpose Financing Facility — EUR 17.0M investment loan, EUR 9.75M bridge loan, RON 15.0M VAT facility|add'],
    ['Diana Group', 'diana.png', 'diana-group', '2024|EUR 10,000,000|M&A — Buy Side (Univers S.A.)|add'],
    ['FCC & Azvi', 'fcc_azvi.png', 'fcc-azvi', '2014–2016|EUR 8,500,000|Non-Recourse Factoring Facility & Reverse Factoring Facility (beneficiar subsidiară CFR)|existing'],
    ['Frontera Trading', 'frontera.png', 'frontera', '2020|EUR 2,680,000|Refinancing & New Loan Facilities — Working Capital & Investment Loan|existing'],
    ['G&M Grup', 'g_m_grup.png', 'gm-grup', '2019–2020|EUR 12,600,000|Working Capital Refinancing and New Financing, EU Funds Investment Projects|existing'],
    ['Noodle Pack', '', 'noodle-pack', '2021|RON 5,000,000|Working Capital — State Guarantee|add'],
    ['Pet Star Holding', 'pet_star.png', 'pet-star', '2025|EUR 50,000,000|Multi-Purpose Facility|add'],
    ['Pharmnet Plus', 'pharmnet_plus.png', 'pharmnet-plus', '2019|EUR 2,500,000|Working capital refinancing and new financing|existing'],
    ['Pigtim', '', 'pigtim', '2024|EUR 13,800,000|Project Finance|add'],
    ['Prutul Agri Trade', 'prutul_agri_trade.png', 'prutul', '2013|EUR 2,500,000|Commodity Trade Financing|existing'],
    ['Romkatel', 'romkatel.png', 'romkatel', '2014|EUR 3,500,000|Promissory Notes Discounting|existing'],
    ['Samus Tec, Metalicplas Activ & Izotec', 'samus_tec.png', 'samus-tec', '2019|EUR 13,400,000|Multipurpose Financing Facility|existing'],
    ['Shapir Engineering and Industry', 'shapir_engineering.png', 'shapir', '[PCF: data needed]|EUR 70,000,000|Refinancing Credit Facility — medium and short term, municipalities and social housing projects|hold'],
    ['Sigerom', 'sigerom.png', 'sigerom', '2019|Nepublicable|M&A Sell Side Advisory (cumpărător Oryx Partner, Franța)|existing'],
    ['V&G Oil', '', 'vg-oil', '2025|EUR 17,000,000|Restructuring|add'],
    ['Versus Pharma Group', 'versus_pharma.png', 'versus-pharma', '2025|EUR 8,000,000|Versus Pharma Group (PI Pharma M&D) Working Capital Facility — cash & non-cash|add']
  ].map(function (item) {
    return { name: item[0], logo: item[1], id: item[2], transactions: rows(item[3]) };
  });

  var labels = {
    en: { title: 'Clients', transactions: 'Transactions', added: 'Added', existing: 'Already on site', hold: 'HOLD — [PCF: data needed]', missingLogo: '[PCF: data needed] Logo', details: 'Details', close: 'Close details' },
    ro: { title: 'Clienți', transactions: 'Tranzacții', added: 'De adăugat', existing: 'Există deja', hold: 'HOLD — [PCF: data needed]', missingLogo: '[PCF: data needed] Logo', details: 'Detalii', close: 'Închide detaliile' }
  };

  function valueParts(value) {
    var match = value.match(/(?:EUR|RON)\s+([\d,.]+)/);
    if (!match) return { amount: value === '—' || value === 'Nepublicable' ? 'ND' : value, unit: '' };

    var amount = parseFloat(match[1].replace(/,/g, '')) / 1000000;
    return { amount: String(amount).replace(/\.0$/, ''), unit: 'mil' };
  }

  var existingTabNames = {
    aaylex: 'Cocorico', rodbun: 'Rodbun', carmistin: 'Carmistin', vox: 'VOX',
    'mg-tec': 'MG Tec', aktor: 'Aktor', alpenside: 'Alpenside', evofarm: 'EvoFarm',
    'gates-air': 'Gates Air', 'liebrecht-wood': 'L&W', romco: 'Romco',
    romelectro: 'RomElectro', 'urgent-cargus': 'UC', 'urgent-curier': 'UC Post',
    prutul: 'Prutul', 'bio-danubius': 'Biodanubius', 'samus-tec': 'Samus Tec',
    campeador: 'Campeador', 'fcc-azvi': 'FCC', frontera: 'Frontera',
    'gm-grup': 'GM Group', 'pharmnet-plus': 'Pharmnet Plus', romkatel: 'Romkatel',
    sigerom: 'Sigerom', chimcomplex: 'Chimocomplex'
  };

  function transactionMarkup(transaction) {
    var value = valueParts(transaction.value);
    return '<div class="project portfolio-added-transaction"><div class="carton"><div class="nr-big year">' + transaction.year + '</div><div class="txt-p-info c">' + transaction.description + '</div><div class="stanga"><div class="rand d"><h5 class="tit-crt">VALUE €</h5></div><div class="rand s special-hide"></div><div class="big-nr"><div class="nr-big">' + value.amount + '</div>' + (value.unit ? '<div class="nr-big light">' + value.unit + '</div>' : '') + '</div></div><div class="dreapta"><div class="rand"><h5 class="tit-crt">DETAILS</h5></div><div class="rand s"></div><div class="rand"><div class="an">' + transaction.year + '<br></div></div><div class="rand double"><div class="txt-p-info c">' + transaction.description + '</div></div></div></div></div>';
  }

  function appendTransactions(pane, transactions) {
    var content = pane.querySelector(':scope > .portfolio-added-transactions');
    if (!content) {
      content = document.createElement('div');
      content.className = 'client-content portfolio-added-transactions';
      pane.appendChild(content);
    }
    transactions.forEach(function (transaction) {
      content.insertAdjacentHTML('beforeend', transactionMarkup(transaction));
    });
  }

  function mergeTransactionRows(pane) {
    var rows = Array.prototype.slice.call(pane.querySelectorAll(':scope > .client-content:not(.single)'));
    if (rows.length < 2) return;

    var first = rows[0];
    rows.slice(1).forEach(function (row) {
      Array.prototype.slice.call(row.querySelectorAll(':scope > .project')).forEach(function (project) {
        first.appendChild(project);
      });
      row.remove();
    });
  }

  function addCompanyTab(menu, content, company, language) {
    var tab = document.createElement('a');
    tab.className = 'tab w-inline-block w-tab-link portfolio-added-tab';
    tab.setAttribute('data-w-tab', company.name);
    tab.setAttribute('aria-label', company.name);
    tab.innerHTML = company.logo ? '<img class="portfolio-added-logo" src="livrabil/logo_companii/' + company.logo + '" alt="' + company.name + '">' : '<span class="portfolio-missing-logo">' + labels[language].missingLogo + '<br>' + company.name + '</span>';
    menu.appendChild(tab);

    var pane = document.createElement('div');
    pane.className = 'w-tab-pane';
    pane.setAttribute('data-w-tab', company.name);
    pane.innerHTML = '<div class="client-title"><div class="big-heading middle">' + company.name + '</div><div class="client-separator"></div></div>';
    appendTransactions(pane, company.transactions.filter(function (transaction) { return transaction.status === 'add'; }));
    content.appendChild(pane);
  }

  function enhancePortfolio(page) {
    var language = page.indexOf('portofoliu') !== -1 ? 'ro' : 'en';
    var tabs = document.querySelector('.tabs-2');
    if (!tabs) return;
    var menu = tabs.querySelector('.tabs-menu');
    var content = tabs.querySelector('.tabs-content-2');
    if (!menu || !content) return;

    companies.forEach(function (company) {
      var tabName = existingTabNames[company.id];
      var pane = tabName && content.querySelector('[data-w-tab="' + tabName + '"]');
      if (pane) {
        appendTransactions(pane, company.transactions.filter(function (transaction) { return transaction.status === 'add'; }));
      } else {
        addCompanyTab(menu, content, company, language);
      }
    });

    content.querySelectorAll(':scope > .w-tab-pane').forEach(mergeTransactionRows);

    document.querySelectorAll('.tabs-content-2 .carton').forEach(function (carton) {
      var value = carton.querySelector(':scope > .stanga');
      var type = carton.querySelector(':scope > .txt-p-info.c');
      if (value && type) type.insertAdjacentElement('afterend', value);
    });
  }

  enhancePortfolio(window.location.pathname);
})();
