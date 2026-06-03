// ─── TRANSLATIONS ─────────────────────────────────────
const translations = {
  en: {
    // Login
    welcomeBack: 'Welcome back',
    signInSubtitle: 'Sign in to track your solar project',
    emailLabel: 'Email address',
    passwordLabel: 'Password',
    showPassword: 'Show',
    hidePassword: 'Hide',
    forgotPassword: 'Forgot password?',
    signIn: 'Sign In',
    newCustomer: 'New customer?',
    createAccount: 'Create your account',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    // Dashboard
    welcomeBackDash: 'Welcome back',
    currentStage: 'Current stage',
    systemSize: 'System size',
    projectTimeline: 'Project timeline',
    viewAll: 'View all',
    documents: 'Documents',
    filesReady: 'files ready',
    payments: 'Payments',
    loanActive: 'Loan active',
    messages: 'Messages',
    viewUpdates: 'View updates',
    incentiveDiscount: 'Incentive Discount',
    signOut: 'Sign Out',
    // Timeline
    progress: 'Progress',
    complete: 'Complete',
    inProgress: 'In progress',
    upcoming: 'Upcoming',
    dateToBeConfirmed: 'Date to be confirmed',
    awaitingMunicipality: 'Awaiting municipality',
    permitUnderReview: 'Your permit is under review by the city. We will notify you when approved.',
    // Documents
    myDocuments: 'My documents',
    contractAgreements: 'Contract & Agreements',
    permitsApprovals: 'Permits & Approvals',
    inspectionWarranty: 'Inspection & Warranty',
    signed: 'Signed',
    inReview: 'In review',
    pending: 'Pending',
    // Payments
    paymentsFinancing: 'Payments & financing',
    activeSince: 'Active since',
    financedAmount: 'Financed amount',
    monthlyPayment: 'Monthly payment',
    loanTerm: 'Loan term',
    payment: 'Payment',
    makePayment: 'Make a Payment',
    paymentSummary: 'Payment Summary',
    achFee: 'ACH processing fee',
    total: 'Total',
    selectPaymentMethod: 'SELECT PAYMENT METHOD',
    achTransfer: 'ACH Bank Transfer',
    creditDebit: 'Credit / Debit Card',
    venmo: 'Venmo',
    cancel: 'Cancel',
    financingDocuments: 'FINANCING DOCUMENTS',
    // Messages
    supportTeam: 'Thryve Home support team',
    typeMessage: 'Type a message...',
    // Incentive Discount
    yourProjectIncentives: 'Your project incentives',
    comingSoon: 'Coming Soon',
    incentiveComingSoonText: 'Your incentive discount details will appear here once your project is underway.',
    // Nav
    navHome: 'Home',
    navTimeline: 'Timeline',
    navDocs: 'Docs',
    navPayments: 'Payments',
    navMessages: 'Messages',
  },
  es: {
    // Login
    welcomeBack: 'Bienvenido',
    signInSubtitle: 'Inicia sesión para rastrear tu proyecto solar',
    emailLabel: 'Correo electrónico',
    passwordLabel: 'Contraseña',
    showPassword: 'Mostrar',
    hidePassword: 'Ocultar',
    forgotPassword: '¿Olvidaste tu contraseña?',
    signIn: 'Iniciar sesión',
    newCustomer: '¿Eres nuevo cliente?',
    createAccount: 'Crea tu cuenta',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    // Dashboard
    welcomeBackDash: 'Bienvenido de vuelta',
    currentStage: 'Etapa actual',
    systemSize: 'Tamaño del sistema',
    projectTimeline: 'Cronograma del proyecto',
    viewAll: 'Ver todo',
    documents: 'Documentos',
    filesReady: 'archivos listos',
    payments: 'Pagos',
    loanActive: 'Préstamo activo',
    messages: 'Mensajes',
    viewUpdates: 'Ver actualizaciones',
    incentiveDiscount: 'Descuento de incentivo',
    signOut: 'Cerrar sesión',
    // Timeline
    progress: 'Progreso',
    complete: 'Completado',
    inProgress: 'En progreso',
    upcoming: 'Próximamente',
    dateToBeConfirmed: 'Fecha por confirmar',
    awaitingMunicipality: 'Esperando municipio',
    permitUnderReview: 'Tu permiso está siendo revisado por la ciudad. Te notificaremos cuando sea aprobado.',
    // Documents
    myDocuments: 'Mis documentos',
    contractAgreements: 'Contrato y acuerdos',
    permitsApprovals: 'Permisos y aprobaciones',
    inspectionWarranty: 'Inspección y garantía',
    signed: 'Firmado',
    inReview: 'En revisión',
    pending: 'Pendiente',
    // Payments
    paymentsFinancing: 'Pagos y financiamiento',
    activeSince: 'Activo desde',
    financedAmount: 'Monto financiado',
    monthlyPayment: 'Pago mensual',
    loanTerm: 'Plazo del préstamo',
    payment: 'Pago',
    makePayment: 'Realizar un pago',
    paymentSummary: 'Resumen de pago',
    achFee: 'Cargo por procesamiento ACH',
    total: 'Total',
    selectPaymentMethod: 'SELECCIONAR MÉTODO DE PAGO',
    achTransfer: 'Transferencia bancaria ACH',
    creditDebit: 'Tarjeta de crédito / débito',
    venmo: 'Venmo',
    cancel: 'Cancelar',
    financingDocuments: 'DOCUMENTOS DE FINANCIAMIENTO',
    // Messages
    supportTeam: 'Equipo de soporte Thryve Home',
    typeMessage: 'Escribe un mensaje...',
    // Incentive Discount
    yourProjectIncentives: 'Tus incentivos del proyecto',
    comingSoon: 'Próximamente',
    incentiveComingSoonText: 'Los detalles de tu descuento de incentivo aparecerán aquí cuando tu proyecto esté en marcha.',
    // Nav
    navHome: 'Inicio',
    navTimeline: 'Cronograma',
    navDocs: 'Docs',
    navPayments: 'Pagos',
    navMessages: 'Mensajes',
  }
};

let currentLang = localStorage.getItem('thryve_lang') || 'en';

// ─── CUSTOMER DATA ───────────────────────────────────────
const customers = {
    sarah: {
        name: 'Sarah Johnson',
        initials: 'SJ',
        project: 'Project #THR-2024-0847',
        stage: 'Permits submitted',
        system: '8.4 kW',
        address: '142 Maple Street, Providence, RI 02903',
        email: 'sarah.johnson@email.com',
        phone: '(401) 555-0192',
        timeline: [
            { label: 'Financing approved',         date: 'January 22, 2025',        status: 'complete', note: null },
            { label: 'Contract signed',             date: 'January 14, 2025',        status: 'complete', note: null },
            { label: 'Site survey scheduled',       date: 'February 8, 2025',        status: 'complete', note: null },
            { label: 'Permit application submitted',date: 'March 2, 2025',           status: 'complete', note: null },
            { label: 'Application submitted',       date: 'Awaiting municipality',   status: 'active',   note: 'Your permit is under review by the city. We will notify you when approved.' },
            { label: 'Installation scheduled',      date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Installation complete',       date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'PTO approved',                date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'System turned on',            date: 'Date to be confirmed',    status: 'upcoming', note: null },
        ],
        documents: [
            { category: 'CONTRACT & AGREEMENTS', name: 'Solar installation contract', meta: 'Signed · Jan 14, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
            { category: null, name: 'Signed proposal', meta: 'Signed · Jan 12, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
            { category: 'PERMITS & APPROVALS', name: 'Building permit application', meta: 'Submitted · Mar 2, 2025 · PDF', badge: 'In review', badgeClass: 'badge-review', available: true },
            { category: null, name: 'Electrical permit', meta: 'Pending · Not yet available', badge: 'Pending', badgeClass: 'badge-pending', available: false },
            { category: 'INSPECTION & WARRANTY', name: 'Inspection report', meta: 'Available after inspection', badge: 'Upcoming', badgeClass: 'badge-upcoming', available: false },
            { category: null, name: '25-year product warranty', meta: 'Active · SunPower warranty', badge: 'Active', badgeClass: 'badge-active', available: true },
        ],
       payments: {
            financingType: 'GoodLeap',
            lender: 'GoodLeap',
            financedAmount: '$19,880',
            monthlyPayment: '$138',
            loanTerm: '25 years',
            totalPayments: 300,
            currentPayment: 1,
            autopay: false,
            financingDate: 'January 22, 2025',
        },
        messages: [
            { sender: 'thryve', text: 'Hi Sarah! Just letting you know we submitted your building permit to the city today. We will keep you updated as soon as we hear back.', time: 'Thryve Home · Mar 2 · 10:14 AM', type: 'normal' },
            { sender: 'customer', text: 'Thank you! How long does the permit approval usually take?', time: 'Sarah · Mar 2 · 11:32 AM', type: 'normal' },
            { sender: 'thryve', text: 'Typically 2 to 4 weeks depending on your municipality. We will notify you the moment it is approved and schedule your installation right away.', time: 'Thryve Home · Mar 2 · 11:45 AM', type: 'normal' },
            { sender: 'thryve', text: 'Good news Sarah! Your permit is still under review but everything looks on track. We expect to hear back within the next 1 to 2 weeks.', time: 'Thryve Home · Today · 9:02 AM', type: 'update', label: 'PROJECT UPDATE' },
        ]
    },
   
};

// ─── APP STATE ───────────────────────────────────────────
let currentUser = null;
let currentCustomer = null;

// ─── SCREEN SWITCHING ────────────────────────────────────
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    document.getElementById('screen-' + screenName).classList.add('active');
    window.scrollTo(0, 0);
    if (screenName === 'timeline')   renderTimeline();
    if (screenName === 'documents')  renderDocuments();
    if (screenName === 'payments')   renderPayments();
    if (screenName === 'messages')   renderMessages();

    // Show nav bar on all screens except login
    const navBar = document.getElementById('nav-bar');
    navBar.style.display = screenName === 'login' ? 'none' : 'flex';

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navMap = {
        dashboard: 'nav-home',
        timeline: 'nav-timeline',
        documents: 'nav-documents',
        payments: 'nav-payments',
        messages: 'nav-messages'
    };
    if (navMap[screenName]) {
        document.getElementById(navMap[screenName]).classList.add('active');
    }
}
// ─── LOGIN ───────────────────────────────────────────────
async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await db.auth.signInWithPassword({ email, password });

    if (error) {
        document.getElementById('login-error').textContent = 'Incorrect email or password. Please try again.';
        return;
    }

    const userId = data.user.id;
    const { data: customerData, error: customerError } = await db
        .from('customers')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (customerError || !customerData) {
        document.getElementById('login-error').textContent = 'Account found but no project data exists yet.';
        return;
    }

    currentCustomer = customerData;
    loadDashboard();
}

function loadDashboard() {
    const c = currentCustomer;
    const t = translations[currentLang];

    document.getElementById('dash-name').textContent = c.name;
    document.getElementById('dash-project').textContent = c.project_number;
    document.getElementById('dash-avatar').textContent = c.name.split(' ').map(n => n[0]).join('');
    document.getElementById('dash-stage').textContent = c.stage;
    document.getElementById('dash-system').textContent = c.system;
    document.getElementById('dash-permit-status').textContent = c.stage;

    document.getElementById('dash-timeline').innerHTML = '';

    // Apply translations to dashboard
    const setT = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    };

    setT('.header-greeting', t.welcomeBackDash);
    setT('#dash-current-stage-label', t.currentStage);
    setT('#dash-system-size-label', t.systemSize);
    setT('#dash-timeline-label', t.projectTimeline);
    setT('#dash-view-all', t.viewAll);
    setT('[onclick="showScreen(\'timeline\')"] .card-title', t.projectTimeline);
    setT('[onclick="showScreen(\'timeline\')"] .card-link', t.viewAll);
    setT('[onclick="showScreen(\'documents\')"] .quick-title', t.documents);
    setT('[onclick="showScreen(\'payments\')"] .quick-title', t.payments);
    setT('[onclick="showScreen(\'payments\')"] .quick-sub', t.loanActive);
    setT('[onclick="showScreen(\'messages\')"] .quick-title', t.messages);
    setT('[onclick="showScreen(\'messages\')"] .quick-sub', t.viewUpdates);
    setT('[onclick="showScreen(\'incentive\')"] .quick-title', t.incentiveDiscount);
    setT('.btn-signout', t.signOut);

    showScreen('dashboard');
}

// ─── RENDER TIMELINE ─────────────────────────────────────
function renderTimeline() {
    const c = currentCustomer;
    const t = translations[currentLang];

    // Summary card
    document.getElementById('tl-name').textContent = c.name;
    document.getElementById('tl-project').textContent = c.project_number;

    const stages = [
        { labelKey: 'Financing approved',          status: 'complete', date: 'January 22, 2025',      note: null },
        { labelKey: 'Contract signed',              status: 'complete', date: 'January 14, 2025',      note: null },
        { labelKey: 'Site survey scheduled',        status: 'complete', date: 'February 8, 2025',      note: null },
        { labelKey: 'Permit application submitted', status: 'complete', date: 'March 2, 2025',         note: null },
        { labelKey: 'Application submitted',        status: 'active',   date: t.awaitingMunicipality,  note: t.permitUnderReview },
        { labelKey: 'Installation scheduled',       status: 'upcoming', date: t.dateToBeConfirmed,     note: null },
        { labelKey: 'Installation complete',        status: 'upcoming', date: t.dateToBeConfirmed,     note: null },
        { labelKey: 'PTO approved',                 status: 'upcoming', date: t.dateToBeConfirmed,     note: null },
        { labelKey: 'System turned on',             status: 'upcoming', date: t.dateToBeConfirmed,     note: null },
    ];

    const stageNames = {
        en: {
            'Financing approved': 'Financing approved',
            'Contract signed': 'Contract signed',
            'Site survey scheduled': 'Site survey scheduled',
            'Permit application submitted': 'Permit application submitted',
            'Application submitted': 'Application submitted',
            'Installation scheduled': 'Installation scheduled',
            'Installation complete': 'Installation complete',
            'PTO approved': 'PTO approved',
            'System turned on': 'System turned on',
        },
        es: {
            'Financing approved': 'Financiamiento aprobado',
            'Contract signed': 'Contrato firmado',
            'Site survey scheduled': 'Inspección del sitio programada',
            'Permit application submitted': 'Solicitud de permiso enviada',
            'Application submitted': 'Solicitud enviada',
            'Installation scheduled': 'Instalación programada',
            'Installation complete': 'Instalación completa',
            'PTO approved': 'PTO aprobado',
            'System turned on': 'Sistema encendido',
        }
    };

    // Progress count
    const completed = stages.filter(s => s.status === 'complete').length;
    const total = stages.length;
    document.getElementById('tl-progress').textContent = completed + ' of ' + total + ' ' + t.complete;

    // Progress bar width
    const pct = Math.round((completed / total) * 100);
    document.getElementById('tl-progress-bar').style.width = pct + '%';

    // Build stage rows
    const stagesEl = document.getElementById('tl-stages');
    stagesEl.innerHTML = stages.map(stage => {
        const isUpcoming = stage.status === 'upcoming';
        const label = stageNames[currentLang][stage.labelKey];
        const badge = stage.status === 'complete' ? t.complete : stage.status === 'active' ? t.inProgress : t.upcoming;
        return `
            <div class="tl-stage-row">
                <div class="tl-circle tl-circle-${stage.status}">
                    ${stage.status === 'complete' ? '✓' : stage.status === 'active' ? '●' : '○'}
                </div>
                <div class="tl-card ${stage.status === 'active' ? 'tl-card-active' : ''}">
                    <div class="tl-card-header">
                        <span class="tl-stage-name ${isUpcoming ? 'tl-stage-name-upcoming' : ''}">${label}</span>
                        <span class="tl-badge tl-badge-${stage.status}">${badge}</span>
                    </div>
                    <p class="tl-stage-date">${stage.date}</p>
                    ${stage.note ? `<div class="tl-note">${stage.note}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ─── RENDER DOCUMENTS ────────────────────────────────────
function renderDocuments() {
    const c = currentCustomer;
    const t = translations[currentLang];
    document.getElementById('docs-subtitle').textContent = c.name + ' · ' + c.project_number;

    const documents = [
        { category: t.contractAgreements, name: 'Solar installation contract', meta: 'Signed · Jan 14, 2025 · PDF', badge: t.signed, badgeClass: 'badge-signed', available: true },
        { category: null, name: 'Signed proposal', meta: 'Signed · Jan 12, 2025 · PDF', badge: t.signed, badgeClass: 'badge-signed', available: true },
        { category: t.permitsApprovals, name: 'Building permit application', meta: 'Submitted · Mar 2, 2025 · PDF', badge: t.inReview, badgeClass: 'badge-review', available: true },
        { category: null, name: 'Electrical permit', meta: 'Pending · Not yet available', badge: t.pending, badgeClass: 'badge-pending', available: false },
        { category: t.inspectionWarranty, name: 'Inspection report', meta: 'Available after inspection', badge: t.upcoming, badgeClass: 'badge-upcoming', available: false },
    ];

    let html = '';
    let lastCategory = null;

    documents.forEach(doc => {
        if (doc.category && doc.category !== lastCategory) {
            html += `<p class="doc-category">${doc.category}</p>`;
            lastCategory = doc.category;
        }
        html += `
            <div class="doc-row">
                <div class="doc-icon">${doc.available ? '📄' : '📋'}</div>
                <div class="doc-info">
                    <p class="doc-name ${!doc.available ? 'doc-name-pending' : ''}">${doc.name}</p>
                    <p class="doc-meta">${doc.meta}</p>
                </div>
                <span class="doc-badge ${doc.badgeClass}">${doc.badge}</span>
            </div>
        `;
    });

    document.getElementById('docs-list').innerHTML = html;
}

// ─── RENDER PAYMENTS ─────────────────────────────────────
function renderPayments() {
    const c = currentCustomer;
    const t = translations[currentLang];

    const financingType = c.financing_type || 'GoodLeap';
    const monthlyPayment = c.monthly_payment || '138';
    const financedAmount = '$19,880';
    const loanTerm = '25 years';
    const totalPayments = 300;
    const currentPayment = 1;
    const autopay = false;
    const lender = financingType;
    const financingDate = 'January 22, 2025';

    document.getElementById('payments-content').innerHTML = `
        <div class="financing-header">
            <p class="financing-type-label">${financingType} Financing</p>
            <p class="financing-date">${t.activeSince} ${financingDate}</p>
        </div>

        <div class="payment-grid">
            <div class="payment-stat">
                <p class="payment-stat-label">${t.financedAmount}</p>
                <p class="payment-stat-value">${financedAmount}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">${t.monthlyPayment}</p>
                <p class="payment-stat-value">$${monthlyPayment}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">${t.loanTerm}</p>
                <p class="payment-stat-value">${loanTerm}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">${t.payment}</p>
                <p class="payment-stat-value">${currentPayment} of ${totalPayments}</p>
            </div>
        </div>

        ${!autopay ? `
        <button class="make-payment-btn" onclick="showPaymentFlow()">
            ${t.makePayment}
        </button>
        ` : `
        <div class="autopay-badge">✓ Autopay is active</div>
        `}

        <div id="payment-flow" style="display:none;">
            <div class="payment-flow-card">
                <p class="payment-flow-title">${t.paymentSummary}</p>
                <div class="payment-flow-row">
                    <span>${t.monthlyPayment}</span>
                    <span>$${monthlyPayment}</span>
                </div>
                <div class="payment-flow-row">
                    <span>${t.achFee}</span>
                    <span>$10.00</span>
                </div>
                <div class="payment-flow-row payment-flow-total">
                    <span>${t.total}</span>
                    <span>$${(parseFloat(monthlyPayment) + 10).toFixed(2)}</span>
                </div>
                <p class="payment-flow-label">${t.selectPaymentMethod}</p>
                <div class="payment-methods">
                    <button class="payment-method-btn">${t.achTransfer}</button>
                    <button class="payment-method-btn">${t.creditDebit}</button>
                    <button class="payment-method-btn">${t.venmo}</button>
                </div>
                <button class="payment-flow-cancel" onclick="hidePaymentFlow()">${t.cancel}</button>
            </div>
        </div>

        <p class="section-label">${t.financingDocuments}</p>
        <div class="doc-row">
            <div class="doc-icon">📄</div>
            <div class="doc-info">
                <p class="doc-name">Loan agreement</p>
                <p class="doc-meta">${lender}</p>
            </div>
            <span style="color:#8a9ab5; font-size:18px;">›</span>
        </div>
        <div class="doc-row">
            <div class="doc-icon">📄</div>
            <div class="doc-info">
                <p class="doc-name">Federal tax credit guide</p>
                <p class="doc-meta">30% ITC · How to claim your credit</p>
            </div>
            <span style="color:#8a9ab5; font-size:18px;">›</span>
        </div>
    `;
}

function showPaymentFlow() {
    document.getElementById('payment-flow').style.display = 'block';
}

function hidePaymentFlow() {
    document.getElementById('payment-flow').style.display = 'none';
}

// ─── RENDER MESSAGES ─────────────────────────────────────
const sessionMessages = [
    { sender: 'thryve', text: 'Welcome to Thryve Home! Your solar project is underway. Feel free to message us anytime.', time: 'January 22, 2025', type: 'normal' },
    { type: 'update', label: 'PROJECT UPDATE', text: 'Your permit application has been submitted to the municipality.', time: 'March 2, 2025' },
    { sender: 'customer', text: 'How long does the permit usually take?', time: 'March 3, 2025', type: 'normal' },
    { sender: 'thryve', text: 'Typically 2-4 weeks depending on the municipality. We will notify you as soon as it is approved!', time: 'March 3, 2025', type: 'normal' },
];

function renderMessages() {
    const html = sessionMessages.map(msg => {
        if (msg.type === 'update') {
            return `
                <div class="message-group">
                    <div class="bubble-update">
                        <p class="bubble-update-label">${msg.label}</p>
                        ${msg.text}
                    </div>
                    <p class="msg-meta">${msg.time}</p>
                </div>
            `;
        } else if (msg.sender === 'thryve') {
            return `
                <div class="message-group">
                    <div class="bubble-thryve">${msg.text}</div>
                    <p class="msg-meta">${msg.time}</p>
                </div>
            `;
        } else {
            return `
                <div class="message-group" style="align-items:flex-end;">
                    <div class="bubble-customer">${msg.text}</div>
                    <p class="msg-meta msg-meta-right">${msg.time}</p>
                </div>
            `;
        }
    }).join('');

    const body = document.getElementById('messages-body');
    body.innerHTML = html;
    body.scrollTop = body.scrollHeight;
}

// ─── SEND MESSAGE ─────────────────────────────────────────
function sendMessage() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();
    if (!text) return;

    sessionMessages.push({
        sender: 'customer',
        text: text,
        time: 'Just now',
        type: 'normal'
    });

 input.value = '';
    renderMessages();

    setTimeout(() => {
        sessionMessages.push({
            sender: 'thryve',
            text: 'Thanks for reaching out! A member of our team will respond within 1 business day.',
            time: 'Just now',
            type: 'normal'
        });
        renderMessages();
    }, 1000);
}

// ─── LOGOUT ──────────────────────────────────────────────
async function logout() {
    await db.auth.signOut();
    currentUser = null;
    currentCustomer = null;
    showScreen('login');
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('thryve_lang', lang);
  const t = translations[lang];

  // Login
  document.querySelector('#screen-login h2').textContent = t.welcomeBack;
  document.querySelector('#screen-login .subtitle').textContent = t.signInSubtitle;
  document.querySelector('#screen-login label').textContent = t.emailLabel;
  document.querySelectorAll('#screen-login label')[1].textContent = t.passwordLabel;
  document.querySelector('#screen-login .btn-primary').textContent = t.signIn;
  document.querySelector('#screen-login .btn-secondary').textContent = t.createAccount;
  document.querySelector('#screen-login [onclick="forgotPassword()"]').textContent = t.forgotPassword;
  document.querySelector('#screen-login p[style*="New customer"]') !== null;
  const newCustP = [...document.querySelectorAll('#screen-login p')].find(p => p.textContent.includes('New customer') || p.textContent.includes('nuevo cliente'));
  if (newCustP) newCustP.textContent = t.newCustomer;
  const privacyLink = document.querySelector('#screen-login a[href="#"]:first-of-type');

  // Nav bar
  document.querySelector('#nav-home .nav-label').textContent = t.navHome;
  document.querySelector('#nav-timeline .nav-label').textContent = t.navTimeline;
  document.querySelector('#nav-documents .nav-label').textContent = t.navDocs;
  document.querySelector('#nav-payments .nav-label').textContent = t.navPayments;
  document.querySelector('#nav-messages .nav-label').textContent = t.navMessages;

  // Dashboard static labels
  const dashGreeting = document.querySelector('#screen-dashboard .header-greeting');
  if (dashGreeting) dashGreeting.textContent = t.welcomeBackDash;

  // Incentive Discount screen
  document.querySelector('#screen-incentive .header-title').textContent = t.incentiveDiscount;
  document.querySelector('#screen-incentive .header-subtitle').textContent = t.yourProjectIncentives;
  const comingSoonP = document.querySelectorAll('#screen-incentive .scroll-content p');
  if (comingSoonP[1]) comingSoonP[1].textContent = t.comingSoon;
  if (comingSoonP[2]) comingSoonP[2].textContent = t.incentiveComingSoonText;

  // Messages screen
  document.querySelector('#screen-messages .header-subtitle').textContent = t.supportTeam;
  document.querySelector('#screen-messages .header-title').textContent = t.messages;
  document.querySelector('#message-input').placeholder = t.typeMessage;

  // Documents screen
  document.querySelector('#screen-documents .header-title').textContent = t.myDocuments;

  // Payments screen
  document.querySelector('#screen-payments .header-title').textContent = t.paymentsFinancing;

  // Timeline screen
  document.querySelector('#screen-timeline .header-title').textContent = t.projectTimeline;

  // Update flag buttons
  document.getElementById('lang-en').style.opacity = lang === 'en' ? '1' : '0.4';
  document.getElementById('lang-es').style.opacity = lang === 'es' ? '1' : '0.4';
}

// ─── TOGGLE PASSWORD VISIBILITY ───────────────────────────
function togglePassword() {
  const input = document.getElementById('login-password');
  const btn = document.querySelector('#screen-login button[onclick="togglePassword()"]');
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = 'Hide';
  } else {
    input.type = 'password';
    btn.textContent = 'Show';
  }
}

// ─── FORGOT PASSWORD ──────────────────────────────────────
async function forgotPassword() {
    const email = document.getElementById('login-email').value;
    if (!email) {
        document.getElementById('login-error').textContent = 'Please enter your email address first.';
        return;
    }
    const { error } = await db.auth.resetPasswordForEmail(email);
    if (error) {
        document.getElementById('login-error').textContent = 'Something went wrong. Please try again.';
    } else {
        document.getElementById('login-error').style.color = 'green';
        document.getElementById('login-error').textContent = 'Password reset email sent! Check your inbox.';
    }
}

// ─── APP INIT ─────────────────────────────────────────────
function initLanguage() {
  const savedLang = localStorage.getItem('thryve_lang') || 'en';
  setLanguage(savedLang);
}

initLanguage();