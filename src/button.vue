<template>

    <button class="g-button">按钮</button>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        font-size: var(--font-size);

        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-bg);
        }
        &:focus{
            outline: none;
        }
    }
</style>