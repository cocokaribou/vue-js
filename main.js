Vue.component('product-details',{
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            message:"warm and cozy"
        }
    },
    template:`
    <p>Production description: {{message}}</p>`
})

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
        <p>Shipping: {{shipping}}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{outOfStock : !inStock}">Out of stock</p>
        <p v-show="premium">User is premium</p>
        <product-details :details="details"></product-details>
        <ul>
            <li v-for="detail in details">{{detail}} </li>
        </ul>

        <!--
        <table border="1" style="border-collapse: collapse">
            <tr>
                <td v-for="size in sizeArr">{{size.size}}</td>
            </tr>
            <tr>
                <td v-for="size in sizeArr" :key="sizeArr.size">{{size.length}}</td>
            </tr>
        </table>
        -->

        <table border="1" style="border-collapse: collapse">
        <tr>
            <td v-for="s in sizeArr.size">{{s}}</td>
        </tr>
        <tr>
            <td v-for="l in sizeArr.length">{{l}}</td>
        </tr>
        </table>
        
        <div v-for="(variant, index) in variants"
            :key ="variant.variantId" 
            class="color-box"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"> 
        </div>

        <button @click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}">Add to Cart</button>
        <button @click="removeFromCart">Remove</button>

    </div>
</div>
    `,
    data(){
        return{
            product: 'Socks',
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
            sizeArr:{
                size: ["S", "M", "L"],
                length: [240, 260, 280]
            }
        }
    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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
        },
        shipping(){
            if(this.premium){
                return "Free"
            }else{
                return 2.99
            }
        }
    }

})


let app = new Vue({
    el: '#app',
    data:{
        premium: true,
        cart: []
    },methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            for(let i=this.cart.length-1; i>=0; i--){
                if(this.cart[i] === id){
                    this.cart.splice(i,1);
                }
            }
        }

    }
})