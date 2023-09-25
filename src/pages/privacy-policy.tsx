import Head from "next/head";

function PrivacyPolicy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <div className="min-h-screen  bg-beenhere_gray flex items-center justify-center">
                <div className="text-left md:mx-20 mt-20 space-y-4 p-4">
                    <h1 className="text-4xl font-bold ">Privacy Policy</h1>

                    <h1 className="text-l ">Welcome to BeenHere&apos;s Privacy Policy. Your privacy is crucial to us, and this document is intended to help you understand what information we collect, how we use it, and what choices you have regarding your data.
                    </h1>

                    <h1 className="text-l ">1. Information Collection:
                        We collect information you provide directly to us when you create an account, communicate with us, and interact with our platform. This may include your name, email address, photographs, and any other information you choose to provide.
                    </h1 >

                    <h1 className="text-l ">2. Use of Information:
                        We may use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect BeenHere and our users.
                    </h1 >

                    <h1 className="text-l ">3. Sharing of Information:
                        We may share the information we collect with third-party vendors, service providers, and other organizations we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.
                    </h1 >

                    <h1 className="text-l ">4. Security:
                        We care about the security of your information and use various safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction.
                    </h1 >

                    <h1 className="text-l ">5. Your Choices:
                        You may update, correct, or delete information about you at any time by logging into your online BeenHere account and modifying your information or by emailing us at support@beenhere.com.
                    </h1 >

                    <h1 className="text-l ">6. Changes to this Privacy Policy:
                        We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.
                    </h1 >

                    <p>Your continued use of BeenHere will indicate your acknowledgement and acceptance of the changes to this Privacy Policy.</p>
                    <p>For any further queries regarding our privacy practices, feel free to contact us at <span>   <a className="underline hover:text-blue-300" href="mailto:privacy@beenhere.live">privacy@beenhere.com</a></span>.</p>


                    <p>Warm regards,</p>
                    <p>BeenHere Team :D</p>

                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
