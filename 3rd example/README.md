### webpack dev dependencies
- 배포를 위한 보조 도구, 개발된 소스를 웹팩으로 배포하는 것
<br/>
<br/>
### webpack.config.js
- 네 개의 주요설정
```json
const path = require('path'); //node module, absolute path

module.exports = {
    entry: {
        합쳐질이름: path.join(__dirname, 'main.js') //기준이 되는 메인 스크립트 파일
    },
    output: {
        filename: '합쳐질이름.js',
        //path: './build'; <--output directory as absolute path
        path: path.join(__dirname, 'build'),
    },
    ...
```
이제 스크립트 적을 때 vue cdn 입력 안해도 된다!

```html
...
<body>
    <script src = "/build/합쳐질이름.js"></script>
</body>
...
```

```json
...    
    module: {
        rules[{
            ...
        }],//script 파일들을 어떻게 합칠지를 정함
    }, //웹팩의 핵심
    plugins: [
        ...
    ],
```
package.json
```json
{
    ...
    "scripts" :{
        "build" : "webpack"
    }//npm run 명령어의 인자
}
```