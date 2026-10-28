// All business-card facts require office confirmation before launch.
export const practice = {
  confirmedForLaunch: false,
  name: 'Vijay B. Gopal', credentials: 'M.D., F.A.C.P.',
  credentialLine: 'Diplomate, Internal Medicine', specialty: 'Internal Medicine',
  address: '216 Willis (Mineola) Avenue, Suite 101, Roslyn Heights, NY 11577',
  locality: 'Roslyn Heights, NY', phone: '(516) 484-1333', phoneHref: '+15164841333',
  fax: '(516) 621-7158', email: 'vijaybgopalmd@gmail.com',
  // Only approved HTTPS patient-facing URLs. Leave blank until verified.
  portal: { home: '', appointment: '', payment: '', balance: '', refill: '', message: '' },
  photo: { src: '', alt: 'Vijay B. Gopal, M.D., F.A.C.P.' }
};
export function approvedUrl(value) {
  if (!value) return null;
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
}
