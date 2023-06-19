/**
 * @type {Object<string, boolean>}
 */
const hyperSecureDB = {};
export function load() {
    return { items: hyperSecureDB };
}

export const actions = {
    addTodo: async ({ request }) => {
        const data = await request.formData();
        const newTodo = data.get('newTodo');
        if (typeof newTodo === 'string') hyperSecureDB[newTodo] = false;
        return {
            success: true
        }
    },
    checkTodo: async ({ request }) => {
        const data = await request.formData();
        const todo = data.get('todo');
        if (typeof todo === 'string') {
            hyperSecureDB[todo] = !hyperSecureDB[todo]
        }
        return {
            success: true
        }
    },
    deleteTodo: async ({ request }) => {
        const data = await request.formData();
        const todo = data.get('todo');
        if (typeof todo === 'string') {
           delete hyperSecureDB[todo]
        }
        return {
            success: true
        }
    },
}