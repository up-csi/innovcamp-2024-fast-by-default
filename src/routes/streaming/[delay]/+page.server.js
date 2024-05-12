// src/streaming/[delay]/+page.svelte
import { setTimeout } from 'node:timers/promises';

export function load({ params: { delay } }) {
    const timeout = parseInt(delay, 10);
    return { value: setTimeout(timeout, 'World') };
}
