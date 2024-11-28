const app = Vue.createApp({
    data() {
        return {
            name: 'Infinity',
            age: '999'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        }, 
        calculateRandom() {
            return Math.random()
        }
    }
});

app.mount('#assignment')