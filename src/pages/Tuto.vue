<script setup>
import { ref, computed } from 'vue'
const header = ref('Shopping List App')
const items = ref([
    {
        id: 1,
        label: 'party hats',
        quantity: 10,
        purchased: true,
        highPriority: false,
    },
    {
        id: 2,
        label: 'board games',
        quantity: 2,
        purchased: true,
        highPriority: false,
    },
    {
        id: 3,
        label: 'cups',
        quantity: 20,
        purchased: false,
        highPriority: true,
    },
    {
        id: 4,
        label: 'candies',
        quantity: 55,
        purchased: true,
        highPriority: false,
    },
])
const newItem = ref('')
const newItemHighPriority = ref(false)
const editing = ref(false)
const reversedItems = computed(() => [...items.value].reverse())
const saveItem = () => {
    items.value.push({
        id: items.value.length + 1,
        label: newItem.value,
        quantity: items.value.length * 2,
        highPriority: newItemHighPriority.value,
    })
    newItem.value = ''
    newItemHighPriority.value = false
}
const doEdit = () => {
    editing.value = !editing.value
    newItem.value = ''
    newItemHighPriority.value = false
}
const togglePurchased = (item) => {
    item.purchased = !item.purchased
}
</script>

<template>
    <div class="header">
        <h1>{{ header }}</h1>
        <button class="btn" v-if="editing" @click="doEdit">Cancel</button>
        <button class="btn btn-primary" v-else @click="doEdit">Show</button>
    </div>
    <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
        <input type="text" placeholder="add an item" v-model="newItem" />
        <label for="high-priority">
            <input type="checkbox" v-model.trim="newItemHighPriority" />
            High priority
        </label>
        <button :disabled="newItem.length < 3" class="btn btn-primary">
            Save Item
        </button>
    </form>
    <ul>
        <li
            v-for="(item, index) in reversedItems"
            @click="togglePurchased(item)"
            :key="item.id"
            :class="{ strikeout: item.purchased, priority: item.highPriority }"
        >
            {{ item.quantity }} {{ item.label }}
        </li>
    </ul>
    <p v-if="!items.length">Please fill me !</p>
</template>
