import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "@/components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {

    const { i18n } = useTranslation()

    return (
        <>
            <Row>
                <Col md={6} xs={12}>

                    <h3 className="text-center mb-md-5 mb-2">{i18n.resolvedLanguage === "en" ? <>Know Who</> : <> Thông tin về</>} {i18n.resolvedLanguage === "en" ? <span className="brand-red">I'M</span> : <span className="brand-red"> tôi</span>} </h3>
                    <div>
                        <div>
                            <p>{i18n.resolvedLanguage === "en" ? <>Hello everyone, I'm Nguyen Thanh Dat from Thanh Hoa, Vietnam.</> : <>Xin chào mọi người, tôi là Nguyễn Thanh Đạt đến từ Thanh Hóa, Việt Nam.</>}</p>

                            <p>{i18n.resolvedLanguage === "en" ? <>I'm currently a senior student and working as a freelance developer.</> : <>Hiện tại tôi là sinh viên năm cuối và đang làm việc như một lập trình viên tự do.</>}</p>

                            <p>{i18n.resolvedLanguage === "en" ? <>I am studying Bachelor of Software Engineering at Hong Duc University (HDU).</> : <>Tôi đang học Cử nhân Kỹ thuật phần mềm tại Đại học Hồng Đức (HDU).</>}</p>
                        </div>
                    </div>
                    <div>
                        <p>{i18n.resolvedLanguage === "en" ? <>Besides programming, I also enjoy doing some other activities!</> : <>Bên cạnh việc lập trình, tôi cũng thích làm một số hoạt động khác!</>}

                        </p>
                        <ul>
                            <li>{i18n.resolvedLanguage === "en" ? <>Listening to music</> : <>Nghe nhạc</>}</li>
                            <li>{i18n.resolvedLanguage === "en" ? <>Learning about technology</> : <>Tìm hiểu về công nghệ</>}</li>
                            <li>{i18n.resolvedLanguage === "en" ? <>Traveling</> : <>Du lịch</>}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">{i18n.resolvedLanguage === "en" ? <>"You are rewarded in public for what you practice in private."</> : <>"Bạn được khen thưởng ở nơi công cộng cho những gì bạn thực hành ở nơi riêng tư."</>}</p>
                        <p className="text-center brand-red">--Tony Robbins</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{i18n.resolvedLanguage === "en" ? <>Education</> : <>Học vấn</>}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>{i18n.resolvedLanguage === "en" ? <>2021 - Present(anticipate 2025)</> : <>2021 - Hiện tại (dự kiến ​​2025)</>}</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{i18n.resolvedLanguage === "en" ? <>Softwaren Engineer</> : <>Kỹ sư phần mềm</>} </p>
                                                <p className="company">{i18n.resolvedLanguage === "en" ? <>Hong Duc University (HDU)</> : <>Trường Đại học Hồng Đức (HDU)</>} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        instagram={APP_DATA.INSTAGRAM_URL}
                        gmail={APP_DATA.GMAIL_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;