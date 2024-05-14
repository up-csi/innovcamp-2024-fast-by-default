<script>
    import AlertWorker from './AlertWorker?worker';
    import { loop } from './Loop';
    import { onMount } from 'svelte';

    let count = 0;

    onMount(() => {
        const id = setInterval(() => ++count, 100);
        return () => clearInterval(id);
    });

    /**
     * @param {HTMLButtonElement} butt
     * @param {number} n
     */
    function spawnWorker(butt, n) {
        butt.disabled = true;
        const worker = new AlertWorker({ name: n.toString() });
        worker.addEventListener('message', () => (butt.disabled = false), { once: true });
    }
</script>

<p>Counter: <code>{count}</code></p>
<button
    type="button"
    class="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    on:click={() => loop(1e8)}>Alert from Main Thread</button
>
<button
    type="button"
    class="mb-2 me-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:cursor-not-allowed dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    on:click={({ currentTarget }) => spawnWorker(currentTarget, 1e8)}>Alert from Worker Thread</button
>
