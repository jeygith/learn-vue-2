Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            console.log('component says:   applied');
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
            console.log('parent says: coupon applied');
            this.couponApplied = true;
        }
    }
});

