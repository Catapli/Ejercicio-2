<template>
<div>
 <header>
         <h1>Almacén central de productos - ACME SL</h1>
    </header>
     <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/"  data-show="almacen">Ver productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="form" data-show="new-prod">Nuevo producto</router-link>
                    </li>
                     <li class="nav-item">
                         <router-link class="nav-link active" aria-current="page" to="aboutUs" data-show="new-prod">Acerca de nosotros...</router-link>
                    </li>
                            
                </ul>
            </div>
        </div>
    </nav>
</div>
   
</template>

<script>
export default {
    name:"app-nav"
}
</script>