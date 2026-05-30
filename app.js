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
            { label: 'Contract signed',        date: 'January 14, 2025',        status: 'complete', note: null },
            { label: 'Financing approved',      date: 'January 22, 2025',        status: 'complete', note: null },
            { label: 'Site survey',             date: 'February 8, 2025',        status: 'complete', note: null },
            { label: 'Permits submitted',       date: 'March 2, 2025',           status: 'complete', note: null },
            { label: 'Permits approved',        date: 'Awaiting municipality',    status: 'active',   note: 'Your permit is under review by the city. We will notify you when approved.' },
            { label: 'Installation scheduled',  date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Installation complete',   date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Inspection',              date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'System activated',        date: 'Date to be confirmed',    status: 'upcoming', note: null },
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
            loanStatus: 'Active',
            financedAmount: '$19,880',
            monthlyPayment: '$138 / mo',
            loanTerm: '25 years',
            lender: 'Mosaic Solar Loans',
            financingDate: 'January 22, 2025',
        },
        messages: [
            { sender: 'thryve', text: 'Hi Sarah! Just letting you know we submitted your building permit to the city today. We will keep you updated as soon as we hear back.', time: 'Thryve Home · Mar 2 · 10:14 AM', type: 'normal' },
            { sender: 'customer', text: 'Thank you! How long does the permit approval usually take?', time: 'Sarah · Mar 2 · 11:32 AM', type: 'normal' },
            { sender: 'thryve', text: 'Typically 2 to 4 weeks depending on your municipality. We will notify you the moment it is approved and schedule your installation right away.', time: 'Thryve Home · Mar 2 · 11:45 AM', type: 'normal' },
            { sender: 'thryve', text: 'Good news Sarah! Your permit is still under review but everything looks on track. We expect to hear back within the next 1 to 2 weeks.', time: 'Thryve Home · Today · 9:02 AM', type: 'update', label: 'PROJECT UPDATE' },
        ]
    },
    michael: {
        name: 'Michael Torres',
        initials: 'MT',
        project: 'Project #THR-2025-0124',
        stage: 'Financing approved',
        system: '11.2 kW',
        address: '87 Riverside Drive, Cranston, RI 02910',
        email: 'michael.torres@email.com',
        phone: '(401) 555-0347',
        timeline: [
            { label: 'Contract signed',        date: 'March 10, 2025',          status: 'complete', note: null },
            { label: 'Financing approved',      date: 'March 18, 2025',          status: 'active',   note: 'Your financing has been approved. We will begin scheduling your site survey.' },
            { label: 'Site survey',             date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Permits submitted',       date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Permits approved',        date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Installation scheduled',  date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Installation complete',   date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'Inspection',              date: 'Date to be confirmed',    status: 'upcoming', note: null },
            { label: 'System activated',        date: 'Date to be confirmed',    status: 'upcoming', note: null },
        ],
        documents: [
            { category: 'CONTRACT & AGREEMENTS', name: 'Solar installation contract', meta: 'Signed · Mar 10, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
            { category: null, name: 'Signed proposal', meta: 'Signed · Mar 8, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
            { category: 'FINANCING', name: 'Loan agreement', meta: 'Signed · Mar 18, 2025 · PDF', badge: 'Signed', badgeClass: 'badge-signed', available: true },
            { category: null, name: 'Federal tax credit guide', meta: '30% ITC · How to claim your credit', badge: 'Active', badgeClass: 'badge-active', available: true },
            { category: 'PERMITS & APPROVALS', name: 'Building permit application', meta: 'Not yet submitted', badge: 'Upcoming', badgeClass: 'badge-upcoming', available: false },
        ],
        payments: {
            loanStatus: 'Active',
            financedAmount: '$28,450',
            monthlyPayment: '$198 / mo',
            loanTerm: '25 years',
            lender: 'Mosaic Solar Loans',
            financingDate: 'March 18, 2025',
        },
        messages: [
            { sender: 'thryve', text: 'Welcome Michael! Your contract has been signed and your financing is approved. We are excited to get started on your solar installation!', time: 'Thryve Home · Mar 18 · 2:00 PM', type: 'normal' },
            { sender: 'customer', text: 'Great! When will you schedule the site survey?', time: 'Michael · Mar 18 · 2:45 PM', type: 'normal' },
            { sender: 'thryve', text: 'We will reach out within the next few business days to schedule your site survey. It typically takes about an hour.', time: 'Thryve Home · Mar 18 · 3:10 PM', type: 'normal' },
        ]
    }
};

// ─── APP STATE ───────────────────────────────────────────
let currentUser = null;

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
function login(userKey) {
    currentUser = userKey;
    const c = customers[userKey];

    // Header
    document.getElementById('dash-name').textContent = c.name;
    document.getElementById('dash-project').textContent = c.project;
    document.getElementById('dash-avatar').textContent = c.initials;

    // Info bar
    document.getElementById('dash-stage').textContent = c.stage;
    document.getElementById('dash-system').textContent = c.system;

    // Timeline preview — first 5 stages from customer data
    const timelineEl = document.getElementById('dash-timeline');
    timelineEl.innerHTML = c.timeline.slice(0, 5).map(s => `
        <div class="timeline-row">
            <div class="timeline-left">
                <div class="timeline-dot dot-${s.status}"></div>
                <span class="timeline-label">${s.label}</span>
            </div>
            ${s.status !== 'upcoming' ? `
                <span class="timeline-badge badge-${s.status}">
                    ${s.status === 'complete' ? 'Complete' : 'In progress'}
                </span>` : ''}
        </div>
    `).join('');
document.getElementById('dash-permit-status').textContent = c.stage;
    showScreen('dashboard');
}

// ─── RENDER TIMELINE ─────────────────────────────────────
function renderTimeline() {
    const c = customers[currentUser];

    // Summary card
    document.getElementById('tl-name').textContent = c.name;
    document.getElementById('tl-project').textContent = c.project;

    // Progress count
    const completed = c.timeline.filter(s => s.status === 'complete').length;
    const total = c.timeline.length;
    document.getElementById('tl-progress').textContent = completed + ' of ' + total + ' complete';

    // Progress bar width
    const pct = Math.round((completed / total) * 100);
    document.getElementById('tl-progress-bar').style.width = pct + '%';

    // Build stage rows
    const stagesEl = document.getElementById('tl-stages');
    stagesEl.innerHTML = c.timeline.map(stage => {
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
    const c = customers[currentUser];
    document.getElementById('docs-subtitle').textContent = c.name + ' · ' + c.project;

    let html = '';
    let lastCategory = null;

    c.documents.forEach(doc => {
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
    const c = customers[currentUser];
    const p = c.payments;

    document.getElementById('payments-content').innerHTML = `
        <div class="payment-grid">
            <div class="payment-stat">
                <p class="payment-stat-label">Loan status</p>
                <p class="payment-stat-value">${p.loanStatus}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Financed amount</p>
                <p class="payment-stat-value">${p.financedAmount}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Monthly payment</p>
                <p class="payment-stat-value">${p.monthlyPayment}</p>
            </div>
            <div class="payment-stat">
                <p class="payment-stat-label">Loan term</p>
                <p class="payment-stat-value">${p.loanTerm}</p>
            </div>
        </div>

        <div class="financing-status-card">
            <span style="font-size:20px;">✓</span>
            <div>
                <p class="financing-status-text">Financing status</p>
                <p class="financing-status-sub">${p.lender} · ${p.financingDate}</p>
            </div>
        </div>

        <p class="section-label">LOAN DOCUMENTS</p>
        <div class="doc-row">
            <div class="doc-icon">📄</div>
            <div class="doc-info">
                <p class="doc-name">Loan agreement</p>
                <p class="doc-meta">${p.lender}</p>
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

        <div class="payment-note">
            <span style="font-size:16px;">ℹ️</span>
            <p class="payment-note-text">Payment amounts and lender details will pull from the live financing platform in the real app.</p>
        </div>
    `;
}

// ─── RENDER MESSAGES ─────────────────────────────────────
function renderMessages() {
    const c = customers[currentUser];

    const html = c.messages.map(msg => {
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

    const c = customers[currentUser];
    c.messages.push({
        sender: 'customer',
        text: text,
        time: 'Just now',
        type: 'normal'
    });

    input.value = '';
    renderMessages();
}

// ─── LOGOUT ──────────────────────────────────────────────
function logout() {
    currentUser = null;
    showScreen('login');
}
