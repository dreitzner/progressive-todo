<script>
	import { enhance } from '$app/forms';
	import ListItem from './ListItem.svelte';

    export let data;
</script>
<h1>Progressive Todos</h1>
<h2>Add Todo</h2>
<form action="?/addTodo" method="post" use:enhance>
    <input type="text" name="newTodo">
    <button type="submit">Add Todo</button>
</form>
<section class="row">
    <div class="columns six">
        <h2>Open Todos</h2>
        <ul>
            {#each Object.entries(data.items).filter(([name, checked]) => !checked) as [name]}
            <ListItem {name} />
            {:else}
            <h3>No todos</h3>
            {/each}
        </ul>
    </div>
    <div class="columns six">
        <h2>Done Todos</h2>
        <ul>
            {#each Object.entries(data.items).filter(([name, checked]) => checked) as [name]}
            <ListItem {name} checked />
            {:else}
            <h3>No todos</h3>
            {/each}
        </ul>
    </div>
</section>

<style>
    ul {
        list-style: none;
    }
    button {
        font-size: 2rem;
    }
</style>