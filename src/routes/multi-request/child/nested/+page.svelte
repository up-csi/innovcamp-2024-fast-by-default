<script>
    // src/routes/multi-request/child/nested/+page.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ root, child, nested, leaf } = data);
</script>

<p>Root = <code>{root}</code></p>

{#await child}
    <p>Child...</p>
{:then child}
    <p>Child = <code>{child}</code></p>
{/await}

{#await nested}
    <p>Nested...</p>
{:then nested}
    <p>Nested = <code>{nested}</code></p>
{/await}

{#await leaf}
    <p>Leaf...</p>
{:then leaf}
    <p>Leaf = <code>{leaf}</code></p>
{/await}
