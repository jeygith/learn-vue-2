Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            console.log('applied');
            this.$emit('applied')
        }
    }
})


new Vue({
    el: '#root',
    data:{
      couponApplied : false
    },
    methods: {
        onCouponApplied() {
            console.log('coupon applied');
            this.couponApplied = true;
        }
    }
});

