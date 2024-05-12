<script>
    // src/prerender/+page.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ random } = data);
</script>

<code>{random}</code>
