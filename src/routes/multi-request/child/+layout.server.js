// src/routes/multi-request/child/+layout.server.js
import { setTimeout } from 'node:timers/promises';

export function load() {
    return { child: setTimeout(2000, Math.random()) };
}
