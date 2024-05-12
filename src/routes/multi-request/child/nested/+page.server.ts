// src/routes/multi-request/child/nested/+page.server.ts
import type { PageServerParentData } from './$types';
import { setTimeout } from 'node:timers/promises';

async function inner(parent: () => Promise<PageServerParentData>) {
    const { root, child, nested } = await parent();
    const [a, b] = await Promise.all([child, nested]);
    return await setTimeout(1000, root * a * b);
}

export function load({ parent }) {
    return { leaf: inner(parent) };
}
