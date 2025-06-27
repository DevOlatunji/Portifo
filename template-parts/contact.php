<section class="contact-section" id="contact-section">
            <div class="container-fluid">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-lg-8 col-md-8 col-sm-12 justify-content-start mb-3" data-aos="zoom-out">
                        <div class="card with-border p-5 bg-primary rounded shadow">
                            <h6 class="mb-3 text-center ">Contact</h6>
                            <h2 class="fb-bold h2 text-white mb-3 text-center   ">Message Me For A Quick <span class="text-accent">Response</span></h2>
                            <p class="mb-3 text-center  ">Get a response within an hour when you send me a message through the form below</p>

                            <?php
                            $form_shortcode = get_theme_mod('contact_form_shortcode');
                            if (function_exists('do_shortcode') && !empty($form_shortcode)) {
                                echo do_shortcode($form_shortcode);
                            } else {
                                ?>
                                <form id="contact-form" name="contact-form" class="form">
                                    <div class="form-group">
                                        <label>Name <span class="text-accent">*</span></label>
                                        <input type="text" name="name" id="name" placeholder="Your Fullname" class="form-control input-area" required title="Please enter your fullname">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone </label>
                                        <input type="tel" name="phone" id="phone" placeholder="+111111111111" class="form-control input-area" required title="Please enter your phone number">
                                    </div>
                                    <div class="form-group">
                                        <label>Email <span class="text-accent">*</span></label>
                                        <input type="email" name="email" id="email" placeholder="You@example.com" class="form-control input-area" required title="Please enter your email address">
                                    </div>
                                    <div class="form-group">
                                        <label>Company Size</label>
                                        <select name="companySize" id="companySize" class="form-control form-select input-area" title="What is your company size?">
                                            <option> -- Choose Company Size -- </option>
                                            <option value="0-10">0 - 10</option>
                                            <option value="11-50">11 - 50</option>
                                            <option value="51-200">51 - 200</option>
                                            <option value="201-1000">201 - 1000+</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Most Prefered Contact Option</label>
                                        <select name="contactOption" id="contactOption" class="form-control form-select input-area" title="How would you like me to contact you or send responses?">
                                            <option> -- Choose Contact Option -- </option>
                                            <option value="phone">Phone Call</option>
                                            <option value="whatsapp">Whatsapp</option>
                                            <!-- <option value="in-house">Visit Your Office</option> -->
                                            <option value="Email">Email</option>
                                            <option value="sms">Text Message</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Company Location</label>
                                        <input type="text" name="address" id="address" placeholder="Company Location" class="form-control input-area" title="Please enter your fullname">
                                    </div>
                                    <div class="form-group">
                                        <label>Subject <span class="text-accent">*</span></label>
                                        <input type="text" name="subject" id="subject" placeholder="Subject" class="form-control" required title="Please enter your fullname">
                                    </div>
                                    <div class="form-group">
                                        <label>Message <span class="text-accent">*</span></label>
                                        <textarea name="message" rows="5" cols="5" id="message" placeholder="Your message here" class="form-control input-area" required title="Please enter your message here"></textarea>
                                    </div>
                                    <div class="right">
                                        <button type="submit" class="btn btn-neutral btn-lg mt-2 disabled" name="send-contact" id="send-contact">Send <i class="fa fa-paper-plane"></i></button>
                                    </div>
                                </form>
                                <?php
                            }
                            ?>

                        </div>
                    </div>
                </div>
            </div>
        </section>