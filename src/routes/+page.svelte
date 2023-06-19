<script>
	import { enhance } from '$app/forms';

    export let data;
</script>
<h1>Progressive Todos</h1>
<h2>Add Todo</h2>
<form action="?/addTodo" method="post" use:enhance>
    <input type="text" name="newTodo">
    <button type="submit">Add</button>
</form>
<h2>Open Todos</h2>
<ul>
    {#each Object.entries(data.items).filter(([name, checked]) => !checked) as [name]}
    <li>
        form
        {name}
    </li>
    {:else}
    <h3>No todos</h3>
    {/each}
</ul>
<h2>Done Todos</h2>
<ul>
    {#each Object.entries(data.items).filter(([name, checked]) => checked) as [name]}
    <li>{name}</li>
    {:else}
    <h3>No todos</h3>
    {/each}
</ul>