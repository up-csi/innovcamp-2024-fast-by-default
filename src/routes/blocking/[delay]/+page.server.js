import { setTimeout } from 'node:timers/promises';

export async function load({ params: { delay } }) {
    const timeout = parseInt(delay, 10);
    const value = await setTimeout(timeout, 'World');
    return { value };
}
