export default function AboutUs() {
    return (
        <main className="my-14">
            <h1 className="text-3xl font-bold text-emerald-950 text-center">About Us</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center-safe justify-items-center-safe w-5/6 mx-auto my-10">
                <img src="https://images.pexels.com/photos/129743/pexels-photo-129743.jpeg" alt="banner" className="w-auto mx-auto h-[50vh] object-cover rounded-3xl shadow" />
                <div className="space-y-2 text-sm font-medium text-gray-800">
                    <h3 className="text-2xl font-semibold text-gray-900">Where Your Home Grows Greener</h3>
                    <p>Welcome to GreenNest, your trusted partner in transforming living spaces into thriving, personal sanctuaries. We believe that every home deserves a breath of fresh air, a touch of nature's serenity, and the joy that comes from nurturing life.</p>
                    <p>More than just a plant store, GreenNest is a movement towards greener, healthier, and more mindful living. We connect you with the perfect green companions and empower you with the knowledge and support to help them flourish.</p>
                </div>
            </section>
            <article className="text-center w-5/6 mx-auto space-y-4 my-14">
                <h3 className="text-2xl font-semibold">Our Story: From a Single Seedling</h3>
                <p>GreenNest began with a simple observation: plants make people happy. Our founder, a lifelong plant enthusiast, started by helping friends pick the right plant for a dim apartment corner or a sunny balcony. The question was never just "What's beautiful?" but "What will thrive in your life?"</p>
                <p>We saw a need for a destination that went beyond the transaction—a place that offered curated plants, clear, practical guidance, and ongoing support. From that seed of an idea, GreenNest has grown into a vibrant community of new plant parents and seasoned plant lovers, all united by a shared love for bringing the outdoors in.</p>
            </article>
            <section className="text-center w-5/6 mx-auto space-y-4 my-20">
                <h3 className="text-2xl font-semibold">Our Philosophy: The GreenNest Promise</h3>
                <p>At our heart are three core promises we make to you:</p>
                <article>
                    <dl className="w-full text-start space-y-3">
                        <dt className="font-bold capitalize text-gray-700">• Right Plant, Right Place:</dt>
                        <dd className="text-gray-600 text-sm font-medium ml-4">
                            We meticulously curate our collection of houseplants, air-purifying wonders, and decorative trees. Each plant on our site comes with a detailed guide on its light, water, and care needs, so you can match a plant to your exact home environment and lifestyle.
                        </dd>
                        <dt className="font-bold capitalize text-gray-700">• Empowerment Through Knowledge:</dt>
                        <dd className="text-gray-600 text-sm font-medium ml-4">
                            A plant is a living being, and we believe you should never have to guess how to care for it. Our comprehensive Planting & Caring Guides are written in simple, jargon-free language to turn uncertainty into confidence.
                        </dd>
                        <dt className="font-bold capitalize text-gray-700">• Support Every Step of the Way:</dt>
                        <dd className="text-gray-600 text-sm font-medium ml-4">
                            Your journey doesn’t end at checkout. With our Expert Consultation services, you have direct access to our team of botanists and horticulturists. Have a question? Notice a yellow leaf? We’re here to help.
                        </dd>
                    </dl>
                </article>
            </section>
            <article className="my-16 w-5/6 mx-auto space-y-4">
                <h3 className="text-2xl font-semibold">Meet Our Green Experts</h3>
                <p>Our team is a passionate group of plant scientists, landscape designers, and horticulture nerds. They are the ones writing your care guides, answering your consultation questions, and personally selecting the plants for our store. They live and breathe this stuff, so you don’t have to be an expert yourself.</p>
            </article>
            <article className="w-5/6 mx-auto space-y-4">
                <h3 className="text-2xl font-semibold">Join Our Community</h3>
                <p>We are so grateful you’re here. Whether you’re looking for a resilient snake plant for your first foray into plant parenting or a majestic fiddle-leaf fig to become the centerpiece of your room, GreenNest is here for you.</p>
            </article>
        </main>
    )
}