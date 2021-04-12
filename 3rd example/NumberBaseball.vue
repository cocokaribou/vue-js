<template>
  <div>
      <h1>test</h1>
      <form @submit.prevent="onSubmitForm">
          <input ref="answer" minlength="4" maxlength="4" v-model="value" />
          <button type="submit">입력</button>
      </form>
      <div>시도:{{attempts.length}}</div>
      <ul>
          <li v-for="attempt in attempts" :key="attempts.indexOf(attempt)">
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
            answer: getNumbers(),
            attempts:[], //입력한번 할때마다 push
            value:'',
            result: '',
        }
    },
    methods: {
        onSubmitForm(){
            if(this.value === this.answer.join('')){ //자료형 비교 주의!
            //Array.prototype.join()
            //배열의 요소를 문자열로 리턴
                this.attempts.push({
                    count: this.value,
                    result: 'home run!',
                });
                alert('restart the game');
                this.value ='';
                this.attempts = [];
            }else{
                this.value ='';
                this.value ='';
            
                
            }
        },
    },
}

const getNumbers = () =>{
    console.error('will this be called')
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4; i++){
        const chosen = candidates.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        array.push(chosen);

        //Array.prototype.splice()
        //배열의 기존 요소 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
    }
    return array;
};
</script>

<style>

</style>