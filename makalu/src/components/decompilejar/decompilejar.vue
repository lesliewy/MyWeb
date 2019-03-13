<template>
  <div id = "decompilejar">
    <h2>反编译指定的jar</h2>
    <div>
      <label for="source">jar或者jar所在目录:</label>
      <input type="text" size="50" v-model="source" id="source"/>
      <label for="dest">反编译输出目录:</label>
      <input type="text" size="50" v-model="dest" id = "dest"/>
      <button v-on:click="execute">开始反编译</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      source: '',
      dest: ''
    }
  },
  methods: {
    execute: function(event){
      alert("source: " + this.source + "; dest: " + this.dest);
      this.$axios.get('/api/decompilejar',{source: this.source, dest: this.dest})
      .then(response =>{
        console.log(response.data);
      })
      .catch(error =>{
        console.log('error');
      })
    }
  }
}
</script>

<style lang="scss">
</style>
