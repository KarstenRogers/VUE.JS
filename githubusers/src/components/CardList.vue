<template>
    <div>
        <Card v-for="(card, index) in cards" :key="index" :avatar_url=card.avatar_url :name=card.name :blog=card.blog />
    </div>
</template>

<script>
    import Card from './Card.vue'

    export default {
        name: 'CardList',
        props: {
            cards: Array
        },
        components: {
            Card
        }
    }
</script>