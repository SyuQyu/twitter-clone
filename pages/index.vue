<script setup>
    const loading = ref(false)
</script>
<template>
    <div>
        <MainSection title="Home" :loading="loading">
            HomePage
        </MainSection>
    </div>
</template>