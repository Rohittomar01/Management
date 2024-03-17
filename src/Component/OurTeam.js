import { Avatar } from "@mui/material"
import "../StyleSheets/OurTeamCss.css"



export default function OurTeam() {
    return (
        <div class="responsive-container-block outer-container">
            <div class="responsive-container-block inner-container">
                <p class="text-blk section-head-text">
                    Meet Our Web Developer's
                </p>
                <p class="text-blk section-subhead-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div class="responsive-container-block" style={{ display: "flex", padding: "5%", marginTop: "-6%" }}>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                        <div class="team-card">
                            <div class="img-wrapper">
                                {/* <img  class="team-img rounded-circle Img-fluid" src="R1 pic.jpg" style={{height:"50vh"}}/> */}
                                <Avatar
                                    alt="Remy Sharp"
                                    src="R pic.jpg"
                                    sx={{ width: 270, height: 270 }}
                                />
                            </div>
                            <p class="text-blk name mt-3">
                                Rohit Tomar
                            </p>
                            <p class="text-blk position">
                                Web Developer
                            </p>
                            <div class="social-media-links">
                                <a href="http://www.twitter.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                </a>
                                <a href="http://www.facebook.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                </a>
                                <a href="http://www.instagram.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                </a>
                                <a href="http://www.gmail.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                        <div class="team-card">
                            <div class="img-wrapper">
                            <Avatar
                                    alt="Remy Sharp"
                                    src="R pic.jpg"
                                    sx={{ width: 270, height: 270 }}
                                />
                            </div>
                            <p class="text-blk name mt-3">
                                Deepak Tomar
                            </p>
                            <p class="text-blk position">
                                Web Developer
                            </p>
                            <div class="social-media-links">
                                <a href="http://www.twitter.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                </a>
                                <a href="http://www.facebook.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                </a>
                                <a href="http://www.instagram.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                </a>
                                <a href="http://www.gmail.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                        <div class="team-card">
                            <div class="img-wrapper">
                            <Avatar
                             
                                    alt="Remy Sharp"
                                    src="R pic.jpg"
                                    sx={{ width: 270, height: 270 }}
                                />
                            </div>
                            <p class="text-blk name mt-3">
                                Apurv Sharma
                            </p>
                            <p class="text-blk position ">
                                Web Developer
                            </p>
                            <div class="social-media-links mb-4">
                                <a href="http://www.twitter.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                </a>
                                <a href="http://www.facebook.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                </a>
                                <a href="http://www.instagram.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                </a>
                                <a href="http://www.gmail.com/" target="_blank">
                                    <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container" />
                    {/* <div class="team-card">
                        <div class="img-wrapper">
                            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png" />
                        </div>
                        <p class="text-blk name">
                            Maxwell Doe
                        </p>
                        <p class="text-blk position">
                            Instructor
                        </p>
                        <div class="social-media-links">
                            <a href="http://www.twitter.com/" target="_blank">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                            </a>
                            <a href="http://www.facebook.com/" target="_blank">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                            </a>
                            <a href="http://www.instagram.com/" target="_blank">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                            </a>
                            <a href="http://www.gmail.com/" target="_blank">
                                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}