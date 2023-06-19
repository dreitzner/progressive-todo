<script>
	import { enhance } from '$app/forms';

    /**
     * @type {string}
     */
    export let name;
    /**
     * @type {boolean}
     */
    export let checked = false;
</script>
<li>
    <form method="post" use:enhance>
        <p>{name}</p>
        <div>
            <input type="hidden" name="todo" value={name}>
            <button formaction="?/checkTodo">
            {#if checked}
            uncheck
            {:else}
            #done
            {/if}
            </button>
            <button formaction="?/deleteTodo">🗑</button>
        </div>
    </form>
</li>

<style>
    button {
        font-size: 2rem;
    }
    form {
        display: flex;
        justify-content: space-between;
    }
</style>