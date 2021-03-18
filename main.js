Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">
    <div class="product-image">
        <a :href="link">
            <img :src="image">
        </a>
    </div>
    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{outOfStock : !inStock}">Out of stock</p>
        <p v-show="premium">User is premium</p>
        
        <ul>
            <li v-for="detail in details">{{detail}} </li>
        </ul>

        <table border="1" style="border-collapse: collapse">
            <tr>
                <td v-for="size in sizeArr">{{size.size}}</td>
            </tr>
            <tr>
                <td v-for="size in sizeArr" :key="sizeArr.size">{{size.length}}</td>
            </tr>
        </table>
        
        <div v-for="(variant, index) in variants"
            class="color-box"
            :key ="variant.variantId" 
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"> 
        </div>

        <button @click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}">Add to Cart</button>
        <button @click="removeFromCart">Remove</button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>

    </div>
</div>
    `,
    data(){
        return{
            product: 'Socks',
            description: 'warm and cozy',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            link: 'https://velog.io/@cocokaribou',
            inventory: 1,
            onSale: true,
            details:["80% cotton", "20% polyster", "Gender-neutral "],
            variants:[
                {
                    variantId:2234,
                    variantColor: "green",
                    variantImage: './resources/vmSocks-green.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId:2235,
                    variantColor: "blue",
                    variantImage: './resources/vmSocks-blue.jpg',
                    variantQuantity: 0,
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
            cart: 0,
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
            if(this.cart <= 0) {
                this.cart = 0
            } 
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
        //updateProduct(variantImage){... }  not all browsers support this feature
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }

})

Vue.component('product details'{
    template:`
        
    `,
    data(){
        return{
        }
    }
})

let app = new Vue({
    el: '#app',
    data:{
        premium: true
    }
    
})