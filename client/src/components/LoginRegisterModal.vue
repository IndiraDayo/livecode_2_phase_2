<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="loginispressed" class="modal-title" id="exampleModalLabel">Login</h5>
                    <h5 v-if="!loginispressed" class="modal-title" id="exampleModalLabel">Register</h5>
                </div>
                <div class="modal-body">

                    <input 
                    v-if="!loginispressed"
                    v-model="user.username"

                    type="text"
                    class="form-control"
                    placeholder="name"
                    aria-label="name"
                    aria-describedby="go-button-addon"
                    auto-complete="off"
                    autofocus>

                    <input
                    v-model="user.email"

                    type="text"
                    class="form-control"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="go-button-addon"
                    auto-complete="off"
                    autofocus>

                    <input
                    v-model="user.password"

                    type="text"
                    class="form-control"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="go-button-addon"
                    auto-complete="off"
                    autofocus>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button v-if="loginispressed" v-on:click="userlogin" type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
                    <button v-if="!loginispressed" v-on:click="adduser" type="button" class="btn btn-primary" data-dismiss="modal">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    name: 'LoginRegisterModal',
    props: ['loginispressed'],
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods : {
        adduser() {
            let self = this
            axios({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    username: self.user.username,
                    email: self.user.email,
                    password: self.user.password
                }
            })
                .then( response => {
                    console.log('berhasil register', response);
                })
                .catch(err => {
                    console.log('gagal register', err);
                })
        },
        userlogin() {
            let self = this
            axios({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    email: self.user.email,
                    password: self.user.password
                }
            })
                .then( response => {
                    console.log('berhasil login', response.data);
                    localStorage.setItem('token', response.data.token)
                    this.$emit('isloggingin', false)
                })
                .catch(err => {
                    console.log('gagal login', err);
                    
                })
        }
    }
}
</script>
