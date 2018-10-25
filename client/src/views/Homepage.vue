<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7">
                <div class="mt-4">

                    <!-- Search Form -->
                    <form>
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search videos across YouTube..."
                                aria-label="Search videos across YouTube..."
                                aria-describedby="go-button-addon"
                                auto-complete="off"
                                autofocus>
                            <div class="input-group-append">
                                <button
                                class="btn btn-outline-secondary"
                                type="button"
                                id="go-button-addon">
                                Go!
                                </button>
                            </div>
                        </div>
                    </form>

                <!-- Video List -->
                <ul class="list-unstyled">
                    <a href="JavaScript:Void(0);" class="video-link">
                    <li class="media my-4">
                        <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">Video Title</h5>
                                Video Description
                            <br />
                        </div>
                    </li>
                    </a>
                    <a href="JavaScript:Void(0);" class="video-link">
                    <li class="media my-4">
                        <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                        <div class="media-body">
                        <h5 class="mt-0 mb-1">Video Title</h5>
                        Video Description
                        <br />
                        </div>
                    </li>
                    </a>
                    <a href="JavaScript:Void(0);" class="video-link">
                    <li class="media my-4">
                        <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                        <div class="media-body">
                        <h5 class="mt-0 mb-1">Video Title</h5>
                        Video Description
                        <br />
                        </div>
                    </li>
                    </a>
                </ul>
                </div>
            </div>

            <div class="col-xl-5">

                <!-- Player and Detail -->
                <div class="mt-4">
                <div class="card mb-2" style="width: 100%;">
                    <div class="card-body">
                    <h5 class="card-title">YouTube Player goes here</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </p>
                    </div>
                </div>
                <strong>Video Title</strong>&nbsp;
                <button class="btn btn-sm btn-primary">Like this Video!</button><br />
                <br />
                <pre class="card">Video description goes here, you can add
        newline too!</pre>
                <br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Homepage'
}
</script>
