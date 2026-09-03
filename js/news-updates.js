(function () {
  var root = document.querySelector('.c-expertise.exp.news.w-container');
  if (!root) return;

  var isRomanian = /(^|\/)stiri\.html$/i.test(window.location.pathname);
  var articles = [
    {
      date: '14 October 2025', source: 'Bursa',
      en: 'Frizon Group secures strategic financing from CEC Bank to expand its operations',
      ro: 'Grupul Frizon obține o finanțare strategică de la CEC Bank pentru extinderea operațiunilor',
      url: 'https://www.bursa.ro/grupul-frizon-obtine-o-finantare-strategica-de-la-cec-bank-pentru-extinderea-operatiunilor-03672750'
    },
    {
      date: '22 July 2025', source: 'Bursa',
      en: 'Rodbun Group, together with exclusive advisor PCF Investment Banking, coordinated a EUR 17.3 million syndicated loan',
      ro: 'Rodbun Grup, împreună cu consultantul exclusiv PCF Investment Banking, a coordonat aranjarea unui credit sindicalizat de 17,3 milioane de euro',
      url: 'https://www.bursa.ro/rodbun-grup-impreuna-cu-consultantul-exclusiv-pcf-investment-banking-au-coordonat-aranjarea-unui-credit-sindicalizat-de-17-3-milioane-de-euro-88393654'
    },
    {
      date: '1 July 2025', source: 'Economedia',
      en: 'PetStar Group obtains EUR 50 million financing from UniCredit Bank, with PCF Investment Banking as financial advisor',
      ro: 'Grupul PetStar obține o finanțare de 50 de milioane de euro de la UniCredit Bank. PCF Investment Banking, consultant financiar',
      url: 'https://economedia.ro/grupul-petstar-reciclator-si-producator-de-sticle-pet-obtine-o-finantare-de-50-de-milioane-de-euro-de-la-unicredit-bank-pcf-investment-banking-consultant-financiar.html'
    },
    {
      date: '26 May 2025', source: 'Ziarul Financiar',
      en: 'AAylex Group, producer of Cocorico poultry, takes a EUR 14.1 million loan from CEC Bank and Exim Banca Românească',
      ro: 'Grupul AAylex, producătorul cărnii de pasăre Cocorico, a luat un credit de 14,1 milioane de euro de la CEC Bank și Exim Banca Românească',
      url: 'https://www.zf.ro/companii/retail-agrobusiness/grupul-aaylex-producatorul-carnii-pasare-cocorico-luat-credit-14-1-22817857'
    },
    {
      date: '4 December 2024', source: 'Ziarul Financiar',
      en: 'CEC Bank finances the acquisition of a foreign investor’s shares in Tu Agrar, part of Rodbun Group, with EUR 3.3 million',
      ro: 'CEC Bank finanțează cu 3,3 mil. euro ferma Tu Agrar, parte a grupului Rodbun, pentru achiziția părților sociale ale unui investitor străin',
      url: 'https://www.zf.ro/banci-si-asigurari/cec-bank-finanteaza-3-3-mil-euro-ferma-agrar-parte-grupului-rodbun-22591527'
    },
    {
      date: '5 March 2024', source: 'Ziarul Financiar',
      en: 'Rodbun Group contracts a EUR 101.5 million syndicated loan coordinated by BCR for working capital and business expansion',
      ro: 'Rodbun Grup contractează un credit sindicalizat de 101,5 mil. euro, coordonat de BCR, pentru capital de lucru și extinderea businessului',
      url: 'https://www.zf.ro/companii/retail-agrobusiness/rodbun-grup-una-dintre-cele-mai-mari-afaceri-din-agricultura-22287093'
    },
    {
      date: '27 February 2024', source: 'Profit.ro',
      en: 'Carmistin Group obtains an EUR 81 million syndicated credit facility for the construction of Romania’s largest pig slaughterhouse',
      ro: 'Grupul Carmistin obține, cu sprijinul PCF Investment Banking, o facilitate de credit sindicalizată de 81 mil. euro pentru construcția celui mai mare abator de porci din România',
      url: 'https://www.profit.ro/povesti-cu-profit/grupul-carmistin-obtine-cu-sprijinul-pcf-investment-banking-o-facilitate-de-credit-sindicalizata-pentru-constructia-celui-mai-mare-abator-de-porci-din-romania-21501275'
    },
    {
      date: '9 January 2023', source: 'Profit.ro',
      en: 'PCF Investment Banking assisted Carmistin Group with the partial euro conversion and RON 218 million increase of its syndicated loan',
      ro: 'PCF Investment Banking a asistat Grupul Carmistin în conversia parțială în euro și majorarea cu 218 mil. lei a creditului sindicalizat',
      url: 'https://www.profit.ro/povesti-cu-profit/financiar/pcf-investment-banking-a-asistat-grupul-carmistin-in-conversia-partiala-in-euro-si-majorarea-cu-218-milioane-de-lei-a-creditului-sindicalizat-existent-cu-o-valoare-totala-de-846-milioane-de-lei-20975996'
    },
    {
      date: '25 October 2022', source: 'Ziarul Financiar',
      en: 'PCF Investment Banking assists Rodbun with the full euro conversion of its RON 340 million syndicated loan',
      ro: 'PCF Investment Banking asistă Rodbun în reconversia integrală în euro a creditului sindicalizat de 340 milioane de lei',
      url: 'https://www.zf.ro/info/p-pcf-investment-banking-asista-rodbun-procesul-securizare-impotriva-21268423'
    },
    {
      date: '4 May 2022', source: 'Financial Intelligence',
      en: 'PCF Investment Banking closes an EUR 8.5 million private debt transaction for Marcos Provit',
      ro: 'PCF Investment Banking încheie o tranzacție de tip private debt de 8,5 milioane de euro pentru Marcos Provit',
      url: 'https://financialintelligence.ro/pcf-investment-banking-incheie-o-noua-tranzactie-de-tip-private-debt-de-85-milioane-de-euro/'
    },
    {
      date: '7 March 2022', source: 'Bursa',
      en: 'AAylex ONE announces a RON 431 million syndicated credit facility coordinated by a five-bank syndicate',
      ro: 'AAylex ONE anunță semnarea unei facilități de credit sindicalizat în valoare de 431 milioane RON, coordonată de un sindicat format din cinci bănci',
      url: 'https://www.bursa.ro/aaylex-one-anunta-semnarea-unei-facilitati-de-credit-sindicalizat-in-valoare-de-431-milioane-ron-coordonata-de-un-sindicat-format-din-cinci-banci-09868540'
    },
    {
      date: '31 January 2022', source: 'Profit.ro',
      en: 'PCF Investment Banking strengthens its team and recruits two top managers from Cerealcom and TC Capital',
      ro: 'PCF Investment Banking își consolidează echipa și recrutează doi manageri de top de la Cerealcom și TC Capital',
      url: 'https://www.profit.ro/povesti-cu-profit/pcf-investment-banking-isi-consolideaza-echipa-si-recruteaza-doi-manageri-de-top-de-la-cerealcom-si-tc-capital-20558483'
    }
  ];

  Array.prototype.slice.call(root.querySelectorAll('section')).forEach(function (section) {
    var title = section.querySelector('h1');
    if (title && /Mihai Murgu/i.test(title.textContent)) section.remove();
  });

  function addArticle(article, index) {
    var dark = index % 2 === 1;
    var wrapper = document.createElement('div');
    wrapper.className = dark ? 'ex-content-big nws' : 'ex-content-big _1 nws';

    var section = document.createElement('section');
    section.id = 'pcf-news-' + (index + 1);
    section.className = dark ? 'ex-content-1 mrg' : 'ex-content-1 exp';

    var source = document.createElement('div');
    source.className = dark ? 'public' : 'public black';
    source.textContent = article.source + ' · ' + article.date;

    var title = document.createElement('h1');
    title.className = dark ? 'ex-content-heading mrg nws' : 'ex-content-heading mrg nws black';
    title.textContent = isRomanian ? article.ro : article.en;

    var content = document.createElement('div');
    content.className = 'ex-crp-fin-1 nws';
    var columns = document.createElement('div');
    columns.className = dark ? 'ex-colums mrg exp nws' : 'ex-colums exp nws _40';
    var text = document.createElement('div');
    text.className = dark ? 'ex-content-text mrg nws' : 'ex-content-text nws _225';
    text.textContent = isRomanian ? article.ro : article.en;
    columns.appendChild(text);
    content.appendChild(columns);

    var line = document.createElement('div');
    line.className = dark ? 'line h _2 nws white' : 'line h _2 nws';
    var link = document.createElement('a');
    link.className = dark ? 'h_black ex _2 nws white' : 'h_black ex _2 nws';
    link.href = article.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = isRomanian ? 'CITEȘTE' : 'READ ARTICLE';
    line.appendChild(link);

    section.appendChild(source);
    section.appendChild(title);
    section.appendChild(content);
    section.appendChild(line);
    wrapper.appendChild(section);
    root.insertBefore(wrapper, root.firstElementChild);
  }

  articles.slice().reverse().forEach(function (article, index) {
    addArticle(article, articles.length - index - 1);
  });
})();
