<script>
	import { enhance } from '$app/forms';
	import ListItem from './ListItem.svelte';
	import TodoSection from './TodoSection.svelte';

    export let data;
</script>
<h1>Progressive Todos</h1>
<h2>Add Todo</h2>
<form action="?/addTodo" method="post" use:enhance>
    <input type="text" name="newTodo">
    <button type="submit">Add Todo</button>
</form>
<section class="row">
    <TodoSection items={data.items} />
    <TodoSection items={data.items} checked />
</section>

<style>
    button {
        font-size: 2rem;
    }
</style>