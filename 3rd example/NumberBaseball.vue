<template>
  <div>
      <h1>test</h1>
      <form @submit.prevent="onSubmitForm">
          <input ref="answer" minlength="4" maxlength="4" v-model="value" />
          <button type="submit">입력</button>
      </form>
      <div>시도:{{attempts.length}}</div>
      <ul>
          <li v-for="attempt in attempts">
              <div>{{attempt.count}}</div>
              <div>{{attempt.result}}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            attempts:[], //입력한번 할때마다 push
            value:'',
            result: '',
        }
    },
    methods: {
        onSubmitForm(){
            this.attempts.push({
                count: this.value,
                result: 'home run!',
            });
            this.value ='';
        }
    },
}
</script>

<style>

</style>