<template>
    <div>
        <span class="red" v-text="message"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "成功啦"
        }
    }
}
</script>

<style >
    .red {
        color: #ff0000;
    }
</style>