<template>
    <div>
        <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
            <g-icon v-if="icon" :name="icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    </div>

</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        font-size: var(--font-size);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0em;
                margin-left: .3em;
            }

            > .content {
                order: 1;
            }

        }
    }
</style>