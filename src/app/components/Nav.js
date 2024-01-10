import github from "@/app/assets/icon/github-icon.svg";
import linkedin from "@/app/assets/icon/linkedin-icon.svg";
import Image from "next/image";
export default function Nav() {
    const ln_linkedin = "https://www.linkedin.com/in/istianto-ilham-756bb3218/";
    const ln_github = "https://github.com/IstiantoIlham";
    return (
        <div className="bg-white p-6 sticky top-0 shadow-xl">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl">Fetch Api</div>
                <div className="flex gap-2">
                    <div className="flex gap-4">
                        <a href={ln_github}>
                            <Image className="hover:animate-bounce" alt="Icon" src={github} width={30} height={30} />
                        </a>
                        <a href={ln_linkedin}>
                            <Image className="hover:animate-bounce" alt="Icon" src={linkedin} width={30} height={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}