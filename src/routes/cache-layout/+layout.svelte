<script>
    // src/cache-layout/+layout.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ random } = data);
</script>

<p>+layout.server.js = <code>{random}</code></p>
<hr />
<slot />
