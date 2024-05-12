// src/prerender/+page.server.js
export const prerender = true;

export function load() {
    return { random: Math.random() };
}
