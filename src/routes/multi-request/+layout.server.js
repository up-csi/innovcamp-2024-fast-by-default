// src/routes/multi-request/+layout.server.js
import { setTimeout } from 'node:timers/promises';

export async function load() {
    const root = await setTimeout(1000, Math.random());
    return { root };
}
