<template>
<div>
<app-nav></app-nav>
    <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
                <table class="table table-striped table-hover">
                    <thead class="thead-dark bg-light">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Uds.</th>
                            <th>Precio/u</th>
                            <th>Importe</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <app-new-row v-for="product in products" :key="product.id" :product="product"></app-new-row>
                        <!-- Aquí insertaremos los productos-->
                    </tbody>
                    <tfoot>
                        <th colspan="4">Importe total del almacén:</th>
                        <th id="total">{{getTotal().toFixed(2) +' €'}}</th>
                        <th></th>
                    </tfoot>
                </table>
            </div>
        </div>
</div>
</template>
<script>
import AppNav from '../components/AppNav.vue'
import AppNewRow from '../components/AppNewRow.vue'
import Api from '../services/Api.js'
export default {
  components: { AppNewRow, AppNav},
    name: "appTable",
    data(){
        return{
            products: []
        }
    },
    methods:{
        async getData(){
          let response = await Api.products.getAll()
          this.products = response.data  
        },
        getTotal(){
            var total = 0;
            this.products.forEach(element => {
                let importe = element.price * element.units
                total = total + importe
            });
            return total;
        }
    },
    mounted(){
        this.getData();
    }
}
</script>