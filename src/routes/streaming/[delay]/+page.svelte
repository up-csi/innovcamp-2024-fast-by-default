<script>
    // src/streaming/[delay]/+page.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ value } = data);
</script>

{#await value}
    <p>Loading...</p>
{:then resolved}
    <h1>Hello {resolved}!</h1>
{/await}
