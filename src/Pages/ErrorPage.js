import React from 'react'

function ErrorPage() {
    return (
        <div>
            <section class="fullscreen-banner p-0">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-12 text-center h-100 d-flex align-items-center">
                            <div class="w-100"><img class="img-fluid d-inline mb-5" src="assets/images/404.png" alt="" />
                                <h2>Oops! Page Not Found</h2>
                                <div class="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <h6>You’re either misspelling the URL
                                        or requesting a page that's no longer here.</h6>
                                    <a class="btn btn-primary btn-animated" href="index.html">Back To Home Page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage