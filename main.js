var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        description: 'warm and cozy',
        image: './resources/img.jpg',
        link: 'https://www.naver.com',
        inventory: 100,
        onSale: true,
        details:["80% cotton", "20% polyster", "Gender-neutral "],
        variants:[
            {
                variantId:2234,
                variantColor: "green"
            },
            {
                variantId:2235,
                variantColor: "blue"
            }
        ],
        sizeArr:[
            {
                size: "S",
                length: 240
            },
            {
                size: "M",
                length: 260
            },
            {
                size: "L",
                length: 280
            }
        ],
        cart: 0
    },
    functions:{
        sayhello(){}
    }
})