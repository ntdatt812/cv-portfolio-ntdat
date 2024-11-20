import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

interface IProps {
    tiktok: string;
    instagram: string;
    facebook: string;
    github: string;
    gmail: string;
}

const SocialMedia = (props: IProps) => {
    const { tiktok, instagram, facebook, github, gmail } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Nguyễn Thành Đạt">
                <FaTiktok size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Instagram Nguyễn Thành Đạt">
                <FaInstagram size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Nguyễn Thành Đạt">
                <FaFacebook size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="Github Nguyễn Thành Đạt">
                <SiGithub size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Gmail Nguyễn Thành Đạt">
                <SiGmail size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;