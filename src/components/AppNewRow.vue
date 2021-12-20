<template>
    <tr>
                        <td>{{product.id}}</td>
                       <td>{{product.name}}</td>
                       <td>{{product.units}}</td>
                       <td>{{product.price}}</td>
                       <td>{{product.price * product.units.toFixed(2)+' €'}}</td>
                       <td>
                            <button class="btn btn-secondary up"  @click.prevent="upOne" >
                            <span class="material-icons">arrow_drop_up</span>
                            </button>
                            <button class="btn btn-secondary down " @click.prevent="downOne">
                            <span class="material-icons">arrow_drop_down</span>
                            </button>
                            <button class="btn btn-secondary edit" @click.prevent="edit">
                            <span class="material-icons">edit</span>
                            </button>
                            <button class="btn btn-secondary delete" @click.prevent="deleteProduct">
                            <span class="material-icons">delete</span>
                            </button>
                       </td>
    </tr>
</template>

<script>
import Api from '../services/Api.js'
export default {
    name: "newRow",
    props:['product'],
    computed:{
        productImport(){
            return this.product.price * this.product.units
        }
    },
    methods:{
        deleteProduct(){
            Api.products.delete(this.product.id)
        },
        async upOne(){
            let nuevoProducto = {
                id: this.product.id,
                name: this.product.name,
                units: this.product.units+1,
                price: this.product.price
            }
            await Api.products.modify(nuevoProducto)
        },
        async downOne(){
            let units = this.product.units-1;
            if(units <= 0){
                this.deleteProduct()
            }else{
                let nuevoProducto = {
                id: this.product.id,
                name: this.product.name,
                units: units,
                price: this.product.price
            }
            await Api.products.modify(nuevoProducto)
            }
        },
        edit(){
            this.$router.push({
                name:'Edit',
                params: {id: this.product.id}
            })
        }
    }
}
</script>