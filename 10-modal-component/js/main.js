Vue.component('modal', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: ` <div class="modal is-active">
        <div class="modal-background"></div>

        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
`,
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
})

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});
