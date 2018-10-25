<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                </div>
                <div class="modal-body">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="go-button-addon"
                    auto-complete="off"
                    autofocus>
                    <input
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
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginRegisterModal'
}
</script>
