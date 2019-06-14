<template>
    <div class="card-container">
        <img alt="avatar" v-bind:src="avatar_url" />
        <div>
            <div class="name">{{ name }}</div>
            <div>{{ blog }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            blog: String,
            name: String,
            avatar_url: String
        }
    }
</script>

<style scoped>
    .card-container {
        margin: 20px;
    }
    .card-container img {
        width: 70px;
    }
    .card-container .name {
        font-weight: bold;
    }
</style>