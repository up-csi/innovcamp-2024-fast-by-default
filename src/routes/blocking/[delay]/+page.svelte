<script>
    // src/blocking/[delay]/+page.svelte
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ value } = data);
</script>

<h1>Hello {value}!</h1>
