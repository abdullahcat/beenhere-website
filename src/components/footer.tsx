import Link from "next/link";


function Footer() {
    return (
        <div className="container mx-auto flex flex-wrap justify-center items-center p-2">
            <Link href="/help" className="m-2 text-white hover:text-gray-400 transition duration-300">Help</Link>
            <Link href="http://jobs.beenhere.live" className="m-2 text-white hover:text-gray-400 transition duration-300">Jobs</Link>
            <Link href="/privacy-policy" className="m-2 text-white hover:text-gray-400 transition duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="m-2 text-white hover:text-gray-400 transition duration-300">Terms of Service</Link>
            <Link href="/press" className="m-2 text-white hover:text-gray-400 transition duration-300">Press</Link>
        </div>
    )
}

export default Footer;
