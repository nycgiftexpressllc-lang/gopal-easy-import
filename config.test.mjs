import test from 'node:test';
import assert from 'node:assert/strict';
import { practice, approvedUrl } from './practice-config.js';
test('unconfigured patient services do not imply live access', () => { for (const value of Object.values(practice.portal)) assert.equal(approvedUrl(value), null); assert.equal(practice.confirmedForLaunch, false); });
test('only HTTPS links without embedded credentials are permitted', () => { for (const value of ['', 'javascript:alert(1)', 'http://example.com', 'https://user:secret@example.com', '/portal']) assert.equal(approvedUrl(value), null); assert.equal(approvedUrl('https://example.com/portal'), 'https://example.com/portal'); });
