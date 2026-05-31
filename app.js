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

    document.getElementById('dash-name').textContent = c.name;
    document.getElementById('dash-project').textContent = c.project_number;
    document.getElementById('dash-avatar').textContent = c.name.split(' ').map(n => n[0]).join('');
    document.getElementById('dash-stage').textContent = c.stage;
    document.getElementById('dash-system').textContent = c.system;
    document.getElementById('dash-permit-status').textContent = c.stage;

    document.getElementById('dash-timeline').innerHTML = '';

    showScreen('dashboard');
}

// ─── RENDER TIMELINE ─────────────────────────────────────
function renderTimeline() {
    const c = currentCustomer;

    // Summary card
    document.getElementById('tl-name').textContent = c.name;
    document.getElementById('tl-project').textContent = c.project_number;

    // Use hardcoded stages but determine active stage from database
    const stages = [
        { label: 'Financing approved',          status: 'complete', date: 'January 22, 2025',      note: null },
        { label: 'Contract signed',              status: 'complete', date: 'January 14, 2025',      note: null },
        { label: 'Site survey scheduled',        status: 'complete', date: 'February 8, 2025',      note: null },
        { label: 'Permit application submitted', status: 'complete', date: 'March 2, 2025',         note: null },
        { label: 'Application submitted',        status: 'active',   date: 'Awaiting municipality', note: 'Your permit is under review by the city. We will notify you when approved.' },
        { label: 'Installation scheduled',       status: 'upcoming', date: 'Date to be confirmed',  note: null },
        { label: 'Installation complete',        status: 'upcoming', date: 'Date to be confirmed',  note: null },
        { label: 'PTO approved',                 status: 'upcoming', date: 'Date to be confirmed',  note: null },
        { label: 'System turned on',             status: 'upcoming', date: 'Date to be confirmed',  note: null },
    ];

    // Progress count
    const completed = stages.filter(s => s.status === 'complete').length;
    const total = stages.length;
    document.getElementById('tl-progress').textContent = completed + ' of ' + total + ' complete';

    // Progress bar width
    const pct = Math.round((completed / total) * 100);
    document.getElementById('tl-progress-bar').style.width = pct + '%';

    // Build stage rows
    const stagesEl = document.getElementById('tl-stages');
    stagesEl.innerHTML = stages.map(stage => {
        const isUpcoming = stage.status === 'upcoming';
        return `
            <div class="tl-stage-row">
                <div class="tl-circle tl-circle-${stage.status}">
                    ${stage.status === 'complete' ? '✓' : stage.status === 'active' ? '●' : '○'}
                </div>
                <div class="tl-card ${stage.status === 'active' ? 'tl-card-active' : ''}">
                    <div class="tl-card-header">
                        <span class="tl-stage-name ${isUpcoming ? 'tl-stage-name-upcoming' : ''}">${stage.label}</span>
                        <span class="tl-badge tl-badge-${stage.status}">
                            ${stage.status === 'complete' ? 'Complete' : stage.status === 'active' ? 'In progress' : 'Upcoming'}
                        </span>
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
    document.getElementById('docs-subtitle').textContent = c.name + ' · ' + c.project_number;

    const documents = [
        { category: 'CONTRACT & AGREEMENTS', name: 'Solar installation contract', meta: 'Signed · Jan 14, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
        { category: null, name: 'Signed proposal', meta: 'Signed · Jan 12, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
        { category: 'PERMITS & APPROVALS', name: 'Building permit application', meta: 'Submitted · Mar 2, 2025 · PDF', badge: 'In review', badgeClass: 'badge-review', available: true },
        { category: null, name: 'Electrical permit', meta: 'Pending · Not yet available', badge: 'Pending', badgeClass: 'badge-pending', available: false },
        { category: 'INSPECTION & WARRANTY', name: 'Inspection report', meta: 'Available after inspection', badge: 'Upcoming', badgeClass: 'badge-upcoming', available: false },
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
            <p class="financing-date">Active since ${financingDate}</p>
        </div>

        <div class="payment-grid">
            <div class="payment-stat">
                <p class="payment-stat-label">Financed amount</p>
                <p class="payment-stat-value">${financedAmount}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Monthly payment</p>
                <p class="payment-stat-value">$${monthlyPayment}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Loan term</p>
                <p class="payment-stat-value">${loanTerm}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Payment</p>
                <p class="payment-stat-value">${currentPayment} of ${totalPayments}</p>
            </div>
        </div>

        ${!autopay ? `
        <button class="make-payment-btn" onclick="showPaymentFlow()">
            Make a Payment
        </button>
        ` : `
        <div class="autopay-badge">✓ Autopay is active</div>
        `}

        <div id="payment-flow" style="display:none;">
            <div class="payment-flow-card">
                <p class="payment-flow-title">Payment Summary</p>
                <div class="payment-flow-row">
                    <span>Monthly payment</span>
                    <span>$${monthlyPayment}</span>
                </div>
                <div class="payment-flow-row">
                    <span>ACH processing fee</span>
                    <span>$10.00</span>
                </div>
                <div class="payment-flow-row payment-flow-total">
                    <span>Total</span>
                    <span>$${(parseFloat(monthlyPayment) + 10).toFixed(2)}</span>
                </div>
                <p class="payment-flow-label">Select payment method</p>
                <div class="payment-methods">
                    <button class="payment-method-btn">ACH Bank Transfer</button>
                    <button class="payment-method-btn">Credit / Debit Card</button>
                    <button class="payment-method-btn">Venmo</button>
                </div>
                <button class="payment-flow-cancel" onclick="hidePaymentFlow()">Cancel</button>
            </div>
        </div>

        <p class="section-label">FINANCING DOCUMENTS</p>
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

// ─── TOGGLE PASSWORD VISIBILITY ───────────────────────────
function togglePassword() {
    const input = document.getElementById('login-password');
    input.type = input.type === 'password' ? 'text' : 'password';
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