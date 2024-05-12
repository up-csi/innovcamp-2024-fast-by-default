// src/routes/multi-request/child/nested/+layout.server.js
import { setTimeout } from 'node:timers/promises';

export function load() {
    return { nested: setTimeout(3000, Math.random()) };
}
