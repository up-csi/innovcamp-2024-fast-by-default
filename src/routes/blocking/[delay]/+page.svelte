<script>
    // eslint-disable-next-line init-declarations
    export let data;
    $: ({ value } = data);
</script>

<h1>Hello {value}!</h1>
