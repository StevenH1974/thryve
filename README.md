# Thryve Home — Solar Customer Portal

A full-stack web application built for a solar installation company. 
Thryve Home gives customers a real-time window into their solar project 
— from financing approval to system activation — while giving contractors 
a portal to manage documents, update project stages, and communicate with customers.

## Live Demo

🔗 [thryve-v2.netlify.app](https://thryve-v2.netlify.app)

**Customer login:** sarah@test.com / Thryve2025!  
**Contractor login:** contractor@test.com / Thryve2025!

## Screenshots

### Customer Portal
![Login](screenshots/login-screen.PNG)
![Dashboard](screenshots/dashboard.PNG)
![Timeline](screenshots/timeline-1.PNG)
![Timeline](screenshots/timeline-2.PNG)
![Documents](screenshots/documents.PNG)
![Payments](screenshots/payments-1.PNG)
![Payments](screenshots/payments-2.PNG)
![Messages](screenshots/messages.PNG)
![Incentive Discount](screenshots/incentive-discount.PNG)

### Contractor Portal
![Contractor Dashboard](screenshots/contractor-dashboard.PNG)
![Contractor Detail](screenshots/contractor-customer-detail.PNG)

## Features

### Customer Portal
- Secure login with email and password
- Dashboard showing current project stage and system size
- 9-stage project timeline with real-time progress tracking
- Document viewer for contracts, permits, and inspection reports
- Payments and financing overview with payment flow
- In-app messaging with the Thryve support team
- Incentive discount screen
- Full English / Spanish language toggle with persistent preference
- New customer registration linked to project number

### Contractor Portal
- Role-based login — contractors see a different dashboard than customers
- View all customers and their current project stages
- Update customer project stages in real time
- Upload documents directly to customer accounts
- Reply to customer messages

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend/Database:** Supabase (PostgreSQL, Authentication, Storage)
- **Deployment:** Netlify
- **Version Control:** Git / GitHub

## Project Background

This app was built as a client project for a solar installation company. 
It is a single-page application with role-based authentication, 
a bilingual interface, and real-time data from a cloud database. 
Built from scratch over several months while simultaneously learning 
web development through The Odin Project and freeCodeCamp.

## Author

Steven Hullings  
[GitHub](https://github.com/StevenH1974)
