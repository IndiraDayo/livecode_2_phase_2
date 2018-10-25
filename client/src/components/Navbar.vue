<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vuedio</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- use .active on .nav-item if you want to highlight current link -->
                    <li class="nav-item">
                        <a href="JavaScript:Void(0);" class="nav-link">
                            Trending
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="JavaScript:Void(0);" class="nav-link">
                            Liked Videos <span class="badge badge-info">13</span>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a v-if="notloggedin" v-on:click="loginpressed" href="JavaScript:Void(0);" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Login</a>
                        <a v-if="notloggedin" v-on:click="registerpressed" href="JavaScript:Void(0);" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Register</a>
                        <a v-if="!notloggedin" v-on:click="loggingout" href="JavaScript:Void(0);" class="btn btn-danger">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['notloggedin'],
    methods: {
        loginpressed() {
            console.log('kepencet login');  
            this.$emit('loginispressed', true);
        },
        registerpressed() {
            console.log('kepencet register');       
            this.$emit('loginispressed', false);
        },
        loggingout() {
            localStorage.removeItem('token')
            this.$emit('notloggingin', true)
        }
    }
}
</script>


<style>
.btn-danger {
 margin-left: 10px;
}
</style>

