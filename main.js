let app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        description: 'warm and cozy',
        image: './resources/vmSocks-green.jpg',
        link: 'https://velog.io/@cocokaribou',
        inventory: 100,
        onSale: true,
        details:["80% cotton", "20% polyster", "Gender-neutral "],
        variants:[
            {
                variantId:2234,
                variantColor: "green",
                variantImage: './resources/vmSocks-green.jpg'
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage: './resources/vmSocks-blue.jpg'
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
    methods:{
        addToCart: function(){
            this.cart += 1
        },
        removeFromCart: function(){
            this.cart -= 1
            if(this.cart <= 0) {
                this.cart = 0
            } 
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        },
        //updateProduct(variantImage){... }  not all browsers support this feature
        ohhey(){

        }
    }
})