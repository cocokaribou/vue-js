import Vue from 'vue'; //ES2015 모듈시스템, package.json에서 가져옴
import NumberBaseball from './NumberBaseball'; //webpack.config.js에서 resolve.extensions 에서 설정된 확장자는 생략가능

new Vue(NumberBaseball).$mount('#root'); //$mount가 뭘까...
//vue 인스턴스 생성자 인자로 메인 component 넘겨주기

