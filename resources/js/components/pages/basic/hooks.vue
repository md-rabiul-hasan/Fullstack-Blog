<template>
    <div>
        <h1 ref="hello">hello world</h1>
        <p>My name is {{ name }}</p>
    </div>
</template>

<script>
export default {
    data(){
        var obj = {
            "name" : "Rabiul Hasan"
        }
        return obj;
    },
    created(){
        console.log("my name is", this.name);
    },
    mounted(){
        console.log(this.$refs.hello);
    }
}
</script>