<template>
    <form @submit.prevent="addUser">
        <input
                type="text"
                v-model="username"
                placeholder="GitHub username"
                required
        />
        <button type="submit">Add card</button>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Form',
        data: function() {
            return {
                username: ''
            }
        },
        methods: {
            addUser: function() {
                axios.get(`https://api.github.com/users/${this.username}`).then(resp => {
                    return {
                       
                    }
                })
            }
        }
    }
</script>

<style>
    button {
        height: 40px;
    }
    input {
        width: 300px;
        height: 34px;
    }
</style>