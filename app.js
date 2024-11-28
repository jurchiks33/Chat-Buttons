const app = Vue.createApp({
    data() {
        return {
            name: 'Your name',
            age: 'Your age'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        }
    }
});

app.mount('#assignment')