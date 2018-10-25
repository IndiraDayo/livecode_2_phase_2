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
                        
                        <a  href="JavaScript:Void(0);" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Login + {{isLogin}}</a>
                        <a  href="JavaScript:Void(0);" class="btn btn-danger">Register</a>
                        <a href="JavaScript:Void(0);" class="btn btn-danger">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['isLogin', 'isRegister']
}
</script>
