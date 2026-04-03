<template>
    <footer>
        <p>
            Made with ❤️ by Susana Salazar, {{ year }}.
        </p>
    </footer>
</template>   
<script setup>
const year = new Date().getFullYear();
</script>