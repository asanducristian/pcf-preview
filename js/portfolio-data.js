// Portfolio data: clients in grid order (v2 spec, pct. 5) and their transactions.
// Rows marked "pcf.ro" are kept from the old site (PCF answer of 26.10.2026, pct. 2 and 4);
// all other rows come from the v2 transaction list (Word EN + RO).
// amount is in millions of the given currency; null when the value is not published.
window.PCF_PORTFOLIO = [
  { id: 'rodbun', name: 'Rodbun Group', logo: 'rodbun.png', transactions: [
    { year: '2025–2026', cur: 'EUR', amount: 40, en: 'Syndicated Green Loan — Afforestation', ro: 'Credit sindicalizat verde — împădurire' },
    { year: '2025', cur: 'EUR', amount: 17.5, en: 'Syndicated Loan — Working Capital Facility', ro: 'Credit sindicalizat — facilitate de capital de lucru' },
    { year: '2024', cur: 'EUR', amount: 3.3, en: 'Frontier Invest Group — Farm Acquisition Financing', ro: 'Frontier Invest Group — finanțarea achiziției unei ferme' },
    { year: '2024', cur: 'EUR', amount: 101.5, en: 'Syndicated Loan (coordonat de BCR)', ro: 'Credit sindicalizat (coordonat de BCR)' },
    { year: '2022', cur: 'EUR', amount: 65, en: 'Syndicated Facility — RON/EUR Conversion', ro: 'Facilitate sindicalizată — conversie RON/EUR' },
    { year: '2021', cur: 'RON', amount: 278, en: 'Syndicated Loan', ro: 'Credit sindicalizat' },
    { year: '2021', cur: 'RON', amount: 84.5, en: 'Syndicated Loan (Exim)', ro: 'Credit sindicalizat (Exim)' },
    { year: '2021', cur: 'RON', amount: 68, en: 'Syndicated Loan Top-Up Facility', ro: 'Majorare credit sindicalizat (top-up)' },
    { year: '2019', cur: 'EUR', amount: 5.5, en: 'Syndication Top-Up Facility', ro: 'Facilitate sindicalizată de top-up', src: 'pcf.ro' },
    { year: '2018', cur: 'EUR', amount: 54, en: 'Syndicated Loan', ro: 'Împrumut sindicalizat', src: 'pcf.ro' }
  ] },
  { id: 'carmistin', name: 'Carmistin Group', logo: 'carmistin.png', transactions: [
    { year: '2024', cur: 'EUR', amount: 81, en: 'Syndicated Loan — pig slaughterhouse project', ro: 'Credit sindicalizat — proiect abator de porci' },
    { year: '2024', cur: 'EUR', amount: 13.8, en: 'Project Finance — Pigtim (Banca Transilvania)', ro: 'Finanțare de proiect — Pigtim (Banca Transilvania)' },
    { year: '2022', cur: 'RON', amount: 836, en: 'Syndicated Loan', ro: 'Credit sindicalizat' },
    { year: '2021', cur: 'RON', amount: 209, en: 'Syndicated Loan Top-Up Facility', ro: 'Majorare credit sindicalizat (top-up)' },
    { year: '2021', cur: 'RON', amount: 11, en: 'APIA Subsidies Financing', ro: 'Finanțarea subvențiilor APIA' },
    { year: '2017–2021', cur: 'EUR', amount: 21, en: 'Investment Loan Facilities, Working Capital Facilities, Project Finance', ro: 'Facilități de capital de lucru, finanțarea proiectelor, împrumuturi pentru investiții', src: 'pcf.ro' },
    { year: '2020', cur: 'RON', amount: 427, en: 'Syndicated Loan', ro: 'Credit sindicalizat' },
    { year: '2017–2020', cur: 'EUR', amount: null, en: 'Non-Recourse Discounting Facility for APIA Subsidies', ro: 'Facilitate de scontare fără recurs pentru subvențiile APIA', src: 'pcf.ro' },
    { year: '2019', cur: 'EUR', amount: 21, en: 'Refinancing of Corporate Bonds', ro: 'Refinanțare de obligațiuni corporative', src: 'pcf.ro' }
  ] },
  { id: 'mg-tec', name: 'MG Tec Group', logo: 'mg_tec_industry.png', transactions: [
    { year: '2026', cur: 'EUR', amount: 50, en: 'Multi-Purpose Loan', ro: 'Credit multi-scop' },
    { year: '2024', cur: 'EUR', amount: 7.5, en: 'Working Capital Facility (Garanti BBVA)', ro: 'Facilitate de capital de lucru (Garanti BBVA)' },
    { year: '2021', cur: 'EUR', amount: 10, en: 'Working Capital Facility', ro: 'Facilitate de capital de lucru' },
    { year: '2020', cur: 'EUR', amount: 5, en: 'Working Capital Facility', ro: 'Facilitate de capital de lucru' },
    { year: '2019', cur: 'EUR', amount: 48, en: 'New Tissue Paper Factory Development Loan', ro: 'Credit de investiții pentru dezvoltarea unei noi fabrici de hârtie', src: 'pcf.ro' }
  ] },
  { id: 'globalworth', name: 'Globalworth', logo: 'globalworth.svg', transactions: [
    { year: '2024', cur: 'EUR', amount: 95, en: 'Globalworth Campus Financing (Erste Bank)', ro: 'Finanțare Globalworth Campus (Erste Bank)' }
  ] },
  { id: 'pet-star', name: 'Pet Star Holding', logo: 'pet_star.png', transactions: [
    { year: '2025', cur: 'EUR', amount: 50, en: 'Multi-Purpose Loan (UniCredit)', ro: 'Credit multi-scop (UniCredit)' }
  ] },
  { id: 'vox', name: 'Vox Property Group', logo: 'vox_property_group.png', transactions: [
    { year: '2021–2022', cur: 'EUR', amount: 14.5, en: 'Project Finance Facility — Vox Vertical Village', ro: 'Facilitate de finanțare de proiect — Vox Vertical Village' },
    { year: '2021', cur: 'EUR', amount: 10.5, en: 'Project Finance Facility — Vox Vertical Village', ro: 'Facilitate de finanțare de proiect — Vox Vertical Village' },
    { year: '2021', cur: 'EUR', amount: 8.5, en: 'Equity Refinancing', ro: 'Refinanțare capital propriu' },
    { year: '2021', cur: 'EUR', amount: 4, en: 'Equity Refinancing', ro: 'Refinanțare capital propriu' },
    { year: '2020', cur: 'EUR', amount: 4.7, en: 'Non-Cash Facility — Performance Bond for PORR', ro: 'Facilitate non-cash — scrisoare de garanție de bună execuție pentru PORR' }
  ] },
  { id: 'sarmis', name: 'Sarmis Capital', logo: 'sarmis_capital.svg', transactions: [
    { year: '2024', cur: 'EUR', amount: 40, en: 'Private Equity Buy Side — acquisition of a majority stake in MG Tec Group', ro: 'Private equity buy-side — achiziția unui pachet majoritar în MG Tec Group' }
  ] },
  { id: 'urgent-cargus', name: 'Urgent Cargus', logo: 'urgent_cargus.png', transactions: [
    { year: '2017', cur: 'EUR', amount: 27.6, en: 'Term Loan Facility', ro: 'Facilitate de credit la termen', src: 'pcf.ro' },
    { year: '2017', cur: 'EUR', amount: 4, en: 'Medium Term Cash Loan', ro: 'Medium Term Cash Loan', src: 'pcf.ro' }
  ] },
  { id: 'podisul-transilvaniei', name: 'Coop. Agricolă Podișul Transilvaniei', logo: 'podisul_transilvaniei.png', transactions: [
    { year: '2026', cur: 'EUR', amount: 30, en: 'Multipurpose Financing Facility (investment loan EUR 17.0M, bridge loan EUR 9.75M, VAT facility RON 15.0M)', ro: 'Facilitate de finanțare multi-scop (credit de investiții 17,0 mil. EUR, credit punte 9,75 mil. EUR, facilitate TVA 15,0 mil. RON)' }
  ] },
  { id: 'liebrecht-wood', name: 'Liebrecht & wooD', logo: 'liebrecht_wood.png', transactions: [
    { year: '2020', cur: 'EUR', amount: 16.7, en: 'Equity Refinancing — Fashion House 1 Militari (Hypo NOE)', ro: 'Refinanțare capital propriu — Fashion House 1 Militari (Hypo NOE)' },
    { year: '2020', cur: 'EUR', amount: 7.5, en: 'Project Finance — Fashion House 2 Cernica (CEC Bank)', ro: 'Finanțare de proiect — Fashion House 2 Cernica (CEC Bank)' }
  ] },
  { id: 'samus-tec', name: 'Samus Tec, Metalicplas Activ & Izotec', logo: 'samus_tec.png', transactions: [
    { year: '2019', cur: 'EUR', amount: 13.4, en: 'Multipurpose Financing Facility', ro: 'Facilități de finanțare multiprodus', src: 'pcf.ro' }
  ] },
  { id: 'aaylex', name: 'Cocorico / Aaylex Group', logo: 'aaylex_cocorico.png', transactions: [
    { year: '2025', cur: 'EUR', amount: 37, en: 'INVESTALIM State-Aid Loan', ro: 'Credit cu ajutor de stat INVESTALIM' },
    { year: '2025', cur: 'EUR', amount: 14.5, en: 'Investment & Working Capital Facility', ro: 'Facilitate de investiții și capital de lucru' },
    { year: '2024', cur: 'EUR', amount: 28, en: '„5 x APIA” Subsidies Financing', ro: 'Finanțarea subvențiilor „5 x APIA”' },
    { year: '2024', cur: 'EUR', amount: 20, en: 'Club Loan — Working Capital Facility (CEC, Alpha Bank)', ro: 'Credit de tip club — facilitate de capital de lucru (CEC, Alpha Bank)' },
    { year: '2022', cur: 'EUR', amount: 87.1, en: 'Syndicated Loan', ro: 'Credit sindicalizat' },
    { year: '2021', cur: 'EUR', amount: 20.3, en: 'M&A — Buy Side', ro: 'M&A — buy-side (cumpărare)' },
    { year: '2021', cur: 'EUR', amount: 20, en: 'Acquisition Finance & Working Capital', ro: 'Finanțare de achiziție și capital de lucru' },
    { year: '2021', cur: 'RON', amount: 53, en: 'Working Capital with Covid-19 Exim Guarantee', ro: 'Capital de lucru cu garanție Exim Covid-19' },
    { year: '2021', cur: 'RON', amount: 28, en: 'APIA Subsidies Financing', ro: 'Finanțarea subvențiilor APIA' },
    { year: '2020', cur: 'RON', amount: 30, en: 'APIA Subsidies Financing', ro: 'Finanțarea subvențiilor APIA' },
    { year: '2020', cur: 'RON', amount: 30, en: 'Refinancing & New Working Capital Facility (Aaylex Agro Cooperativa)', ro: 'Refinanțare și nouă facilitate de capital de lucru (Aaylex Agro Cooperativa)' },
    { year: '2015–2020', cur: 'EUR', amount: 36, en: 'Non-Recourse Discounting Facility for APIA Subsidies', ro: 'Facilitate de scontare fără recurs pentru subvențiile APIA', src: 'pcf.ro' },
    // TODO PCF: value not on pcf.ro as a separate entry (shown on the back of the APIA card).
    { year: '2015–2020', cur: 'EUR', amount: null, en: 'Working Capital Facilities, Project Finance, Investment Loans', ro: 'Facilități de capital de lucru, finanțarea proiectelor, împrumuturi pentru investiții', src: 'pcf.ro' },
    // TODO PCF: v1 spec lists EUR 38M, the pcf.ro card shows EUR 25M.
    { year: '2019', cur: 'EUR', amount: 38, en: 'Refinancing of Corporate Bonds', ro: 'Refinanțare de obligațiuni corporative', src: 'pcf.ro' },
    { year: '2018', cur: 'EUR', amount: 38, en: 'Refinancing & Additional Debt Facility — Hybrid Club Loan', ro: 'Împrumut de tip club — refinanțare și suplimentare facilități existente', src: 'pcf.ro' }
  ] },
  { id: 'diana', name: 'Diana Group', logo: 'diana.png', transactions: [
    { year: '2024', cur: 'EUR', amount: 10, en: 'M&A — Buy Side (Univers S.A.)', ro: 'M&A — buy-side (Univers S.A.)' }
  ] },
  { id: 'gates-air', name: 'Gates Air', logo: 'gates_air.png', transactions: [
    { year: '2019', cur: 'EUR', amount: 10, en: 'Telecom Project Finance Facility', ro: 'Facilitate de finanțare proiect telco', src: 'pcf.ro' },
    { year: '2019', cur: 'EUR', amount: 0.6, en: 'Romanian Digitalization Project Finance Facility', ro: 'Facilitate de finanțare de proiect de digitalizare', src: 'pcf.ro' }
  ] },
  { id: 'fcc-azvi', name: 'FCC & Azvi', logo: 'fcc_azvi.png', transactions: [
    { year: '2014–2016', cur: 'EUR', amount: 8.5, en: 'Non-Recourse Factoring Facility & Reverse Factoring Facility', ro: 'Facilitate de factoring fără recurs & facilitate de reverse factoring', detailEn: 'CFR Subsidiary', detailRo: 'Subsidiară CFR', src: 'pcf.ro' }
  ] },
  { id: 'versus-pharma', name: 'Versus Pharma Group', logo: 'versus_pharma.png', transactions: [
    { year: '2025', cur: 'EUR', amount: 8, en: 'Cash & Non-Cash Working Capital Facilities', ro: 'Facilități cash și non-cash de capital de lucru' }
  ] },
  { id: 'frizon', name: 'Frizon Group', logo: 'frizon.svg', transactions: [
    { year: '2025', cur: 'EUR', amount: 7.5, en: 'Loans Rearranging', ro: 'Reorganizarea creditelor' },
    { year: '2024', cur: 'EUR', amount: 7, en: 'Working Capital Facility — Farmer Loan Product (CEC Bank)', ro: 'Facilitate de capital de lucru — produs de creditare pentru fermieri (CEC Bank)' }
  ] },
  { id: 'alpenside', name: 'Alpenside', logo: 'alpenside.png', transactions: [
    { year: '2020', cur: 'RON', amount: 17, en: 'Advance Payment Guarantee & Direct Factoring — Iași–Suceava road project', ro: 'Scrisoare de garanție pentru avans și factoring direct — proiectul rutier Iași–Suceava' },
    { year: '2020', cur: 'RON', amount: 13, en: 'Non-Recourse Factoring Facility', ro: 'Facilitate de factoring fără regres' },
    { year: '2019', cur: 'EUR', amount: 6.2, en: 'Non-Recourse Factoring Facility & Advance Payment Guarantee', ro: 'Facilitate de factoring fără recurs și scrisoare de garanție bancară de restituire a avansului', detailEn: 'C.N.A.I.R., Bucharest – Brasov Highway, Comarnic – Brasov Section 2', detailRo: 'C.N.A.I.R., Autostrada București - Brașov, Secțiunea 2: Comarnic - Brașov', src: 'pcf.ro' }
  ] },
  { id: 'gm-group', name: 'G&M Group', logo: 'g_m_grup.png', transactions: [
    { year: '2020', cur: 'RON', amount: 26.8, en: 'Refinancing Facilities & New Short-Term Loan (CEC Bank)', ro: 'Refinanțarea facilităților și nou credit pe termen scurt (CEC Bank)' },
    { year: '2020', cur: 'RON', amount: 5, en: 'IMM Invest Working Capital Facility', ro: 'Facilitate de capital de lucru IMM Invest' }
  ] },
  { id: 'biharia-office', name: 'Biharia Office', logo: 'biharia_office.svg', transactions: [
    { year: '2025', cur: 'EUR', amount: 5, en: 'Equity Refinancing', ro: 'Refinanțare capital propriu' },
    { year: '2024', cur: 'EUR', amount: 4, en: 'Equity Refinancing (Garanti BBVA)', ro: 'Refinanțare capital propriu (Garanti BBVA)' }
  ] },
  { id: 'aktor', name: 'Aktor (Ellaktor)', logo: 'aktor.png', transactions: [
    { year: '2017', cur: 'EUR', amount: 3, en: 'Reverse Factoring Facility — Corporate Risk of Aktor', ro: 'Facilitate de reverse factoring', detailEn: 'C.N.A.I.R., Bucharest – Brasov Highway', detailRo: 'C.N.A.I.R., Autostrada București - Brașov', src: 'pcf.ro' },
    { year: '2016', cur: 'EUR', amount: 5, en: 'Non-Recourse Factoring Facility', ro: 'Facilitate de factoring fără recurs', detailEn: 'Baia Mare – Sighetul Marmatiei National Road & Highway Bucharest – Brasov, Belt Bucharest', detailRo: 'Drumul Național Baia Mare - Sighetul Marmației & Autostrada București - Brașov, Centura București', src: 'pcf.ro' }
  ] },
  { id: 'campeador', name: 'Campeador', logo: 'campeador.png', transactions: [
    { year: '2021', cur: 'RON', amount: 24, en: 'Project Finance Facility — Campeador City Residence (CEC Bank)', ro: 'Facilitate de finanțare de proiect — Campeador City Residence (CEC Bank)' },
    { year: '2021', cur: 'RON', amount: 10, en: 'Working Capital with Covid-19 Exim Guarantee', ro: 'Capital de lucru cu garanție Exim Covid-19' },
    { year: '2020', cur: 'RON', amount: 7.7, en: 'Project Finance Facilities — Campeador Residence (CEC Bank)', ro: 'Facilități de finanțare de proiect — Campeador Residence (CEC Bank)' }
  ] },
  { id: 'sels-agro', name: 'Sels Agro', logo: 'sels_agro.svg', transactions: [
    { year: '2025', cur: 'EUR', amount: 5, en: 'Working Capital with EXIM guarantee', ro: 'Capital de lucru cu garanție EXIM' },
    { year: '2021', cur: 'RON', amount: 15, en: 'Multiproduct Facility for Working Capital', ro: 'Facilitate multi-produs pentru capital de lucru' },
    { year: '2020', cur: 'RON', amount: 5, en: 'IMM Invest Working Capital Facility', ro: 'Facilitate de capital de lucru IMM Invest' }
  ] }
];
