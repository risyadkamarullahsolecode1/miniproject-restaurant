import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS if needed

const Footer = () => {
  return (
    <footer class="bg-danger py-4 mt-auto fixed-bottom">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Restaurant Website 2024</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="https://www.facebook.com">Facebook</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="https://www.instagram.com">Instagram</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="https://www.twitter.com">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;