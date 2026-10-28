import { practice, approvedUrl } from './practice-config.js';
for (const el of document.querySelectorAll('[data-practice]')) el.textContent = practice[el.dataset.practice];
for (const el of document.querySelectorAll('[data-phone]')) {
 el.href = `tel:${practice.phoneHref}`;
 if (!el.textContent.trim()) el.textContent = practice.phone;
}
document.title = `${practice.name}, ${practice.credentials} | ${practice.specialty}`;
document.querySelector('meta[name="description"]').content = `${practice.name}, ${practice.credentials}. ${practice.specialty} in ${practice.locality}. Contact the office and find patient resources.`;
document.querySelector('#year').textContent = new Date().getFullYear();
const email = document.querySelector('#email'); email.textContent = practice.email; email.href = `mailto:${practice.email}`;
document.querySelector('#directions').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(practice.address)}`;
if (practice.confirmedForLaunch) document.querySelector('#review-status').remove();
// Allow the bundled local portrait or an approved HTTPS photograph.
const photoUrl = practice.photo.src === 'doctor-photo.jpg' ? './doctor-photo.jpg' : approvedUrl(practice.photo.src);
if (photoUrl) { const img = new Image(); img.src = photoUrl; img.alt = practice.photo.alt; img.onload = () => document.querySelector('.portrait').replaceChildren(img); }
const toggle = document.querySelector('.menu-toggle'), navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
for (const link of navigation.querySelectorAll('a')) link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); });
const dialog = document.querySelector('dialog'); let opener;
function show(title, body, extra, href, label) {
 opener = document.activeElement;
 document.querySelector('#dialog-title').textContent = title;
 document.querySelector('#dialog-body').textContent = body;
 document.querySelector('#dialog-extra').textContent = extra;
 const link = document.querySelector('#dialog-link'); link.href = href; link.textContent = label;
 if (href.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent += ' ↗ (new tab)'; } else { link.removeAttribute('target'); link.removeAttribute('rel'); }
 dialog.showModal();
}
const titles = { home:'Patient Portal', appointment:'Request an Appointment', payment:'Pay a Bill', balance:'Account Balance', refill:'Medication Refills', message:'Secure Messages' };
for (const button of document.querySelectorAll('[data-action]')) button.addEventListener('click', () => {
 const key = button.dataset.action;
 const url = approvedUrl(practice.portal[key]) || (key !== 'home' ? approvedUrl(practice.portal.home) : null);
 if (url) show(titles[key], 'Continue to the practice’s approved patient service. You may need to sign in.', key === 'appointment' ? 'Requests are not confirmed appointments. The office must confirm your visit.' : 'Do not use online services for emergencies. For a medical emergency, call 911.', url, 'Continue to Patient Service');
 else show(titles[key], 'This online service is not connected yet. Please call the office for assistance.', key === 'refill' ? 'Call the office for refill instructions. Do not enter medication details on this public website.' : key === 'message' ? 'Please call for instructions on secure communication. Do not send medical information by ordinary email.' : key === 'appointment' ? 'Call to request a visit. Your appointment is confirmed only after the office confirms it.' : key === 'payment' || key === 'balance' ? 'Please call for billing assistance. This website does not process payments or display account balances.' : 'The office can provide portal access instructions once the approved service is available.', `tel:${practice.phoneHref}`, `Call ${practice.phone}`);
});
for (const button of document.querySelectorAll('[data-policy]')) button.addEventListener('click', () => {
 const privacy = button.dataset.policy === 'privacy';
 show(privacy ? 'Website Privacy' : 'Accessibility', privacy ? 'This public site has no patient intake forms, accounts, advertising trackers, or payment processing. It does not store medical information in your browser.' : 'This website is designed for keyboard navigation, readable text, and use on phones and computers. If you have difficulty accessing information, call the office for assistance.', privacy ? 'Email is not a secure patient messaging channel. Maps and connected patient services are third-party sites with their own privacy policies. The hosting provider may maintain technical access logs. A practice-approved Notice of Privacy Practices must be supplied separately before launch.' : 'You can increase text size using your browser’s zoom controls. Online services are optional; contact the office for help.', `tel:${practice.phoneHref}`, `Call ${practice.phone}`);
});
function close() { dialog.close(); }
document.querySelector('.close').addEventListener('click', close);
document.querySelector('.close-secondary').addEventListener('click', close);
dialog.addEventListener('close', () => opener?.focus());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } });
