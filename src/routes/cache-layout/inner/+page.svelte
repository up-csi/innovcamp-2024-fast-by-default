<script>
    // src/cache-layout/inner/+page.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ random, value } = data);
</script>

<p>+layout.server.js = <code>{random}</code></p>
<p>+page.server.js = <code>{value}</code></p>
