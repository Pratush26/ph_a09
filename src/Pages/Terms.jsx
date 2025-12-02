import { Link } from "react-router"

export default function TermsCondition() {
    const terms = [
        { title: "Acceptance of Terms", desc: "By creating an account, placing an order, or browsing the Website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our Privacy Policy." },
        { title: "Eligibility", desc: "You must be at least 18 years of age and possess the legal authority to enter into a binding contract to use our Service and make purchases." },
        { title: "Account Registration", desc: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify us immediately of any unauthorized use." },
        { title: "Product Information & Purchase Terms", desc: "Product Descriptions: We strive for accuracy in product images and descriptions (size, variety, care needs). However, slight variations may occur as plants are living organisms. The pot shown may be for illustration only." },
        { title: "Intellectual Property", desc: "All content on this Website (text, graphics, logos, icons, images, guides, software) is the property of GreenNest or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission." },
        { title: "Third-Party Links", desc: "Our Service may contain links to third-party websites. We have no control over and assume no responsibility for their content, privacy policies, or practices." },
        { title: "Limitation of Liability", desc: "To the maximum extent permitted by law, GreenNest, its directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service, including but not limited to plant loss, even if we have been advised of the possibility of such damages." },
        { title: "Indemnification", desc: "You agree to indemnify and hold harmless GreenNest from any claim or demand, including reasonable attorneys' fees, made by any third party due to your breach of these Terms or your violation of any law or the rights of a third party." },
        { title: "Modifications to Terms", desc: "We reserve the right to modify or replace these Terms at any time. The most current version will be posted on the Website. Your continued use after changes constitutes acceptance of the new Terms." },
        { title: "Governing Law & Dispute Resolution", desc: "These Terms shall be governed by the laws of Bangladesh . Any disputes shall be resolved in the courts located in Dhaka, Bangladesh." }
    ]
    return (
        <main className="my-12">
            <h1 className="text-3xl font-bold text-emerald-950 text-center mb-10">Terms & Conditions</h1>
            <dl className="w-5/6 mx-auto text-start space-y-3">
                {
                    terms.map((e, i) => (
                        <div key={i} className="space-y-3 my-5">
                            <dt className="font-bold text-xl capitalize text-emerald-950">• {e.title}:</dt>
                            <dd className="text-gray-800 text-sm font-medium ml-4">{e.desc}</dd>
                        </div>
                    ))
                }
                        <div className="space-y-3 my-5">
                            <dt className="font-bold text-xl capitalize text-emerald-950">• Contact Us:</dt>
                            <dd className="text-gray-800 text-sm font-medium ml-4">
                                <p>If you have any questions about these Terms, please contact us at:</p>
                                <Link to="/contact" className="text-blue-600 hover:underline" >Help Center</Link>
                            </dd>
                        </div>
            </dl>
        </main>
    )
}