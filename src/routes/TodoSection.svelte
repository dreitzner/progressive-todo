<script>
	import ListItem from './ListItem.svelte';

    /**
     * @type {Object<string,boolean>}
     */
    export let items;
    /**
     * @type {boolean}
     */
    export let checked = false;
</script>
<div class="columns six">
    <h2>
        {#if checked}
            Done Todos
        {:else}
            Open Todos
        {/if}
    </h2>
    <ul>
        {#each Object.entries(items).filter(([_name, item_checked]) => item_checked === checked) as [name]}
        <ListItem {name} {checked} />
        {:else}
        <h3>No todos</h3>
        {/each}
    </ul>
</div>
<style>
    ul {
        list-style: none;
    }
</style>