const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            tasksList: [],
            newtasks: {
                text: "",
                done: false

            },

        }
    },
    methods: {
        fetchTasks() {
            axios.get("api/tasks.php").then((resp) => {
                this.tasksList = resp.data;
            });
        },
        formSubmit() {

            axios.post("api/newtask.php", this.newtasks, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((resp) => {

                this.fetchTasks();
            }).catch((error) => { console.warn(error) });


        },


    },
    mounted() {
        this.fetchTasks();
    },


}).mount("#app");