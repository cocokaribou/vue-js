### webpack dev dependencies
- 배포를 위한 보조 도구, 개발된 소스를 웹팩으로 배포하는 것

#### webpack.config.js

```javascript
const path = require('path'); 
//node module, absolute path

module.exports = {
    entry: {
        합쳐질이름: path.join(__dirname, 'main.js'), //기준이 되는 메인 스크립트 파일
    },
    output: {
        filename: '합쳐질이름.js',
        //path: './build'; <--output directory as absolute path
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [{
            test: /\.vue$/  //.vue로 끝나는 파일들
        }],//script 파일들을 어떻게 합칠지를 정함
    }, 
    //웹팩의 핵심
    plugins: [

    ],
    //후처리기, output 나오기 전에 한번 더 가공
    mode: 'development', 
    //배포시엔 'production'
    devtool: 'eval', 
    //배포시엔 'hidden-source-map'
    resolve: {
        extensions:['.js'],
    }
    //등록한 확장자는 생략 가능
```
이제 스크립트 적을 때 vue cdn 입력 안해도 된다!

#### index.html
```html
<body>
    <script src = "/build/합쳐질이름.js"></script>
</body>
```
#### package.json
```javascript
{
    "scripts" :{
        "build" : "webpack"
    }
    //npm run 명령어의 인자
}
```