import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "../components/portfoliocard";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="flex justify-center items-center py-6 px-4">
          <div className="flex gap-3 text-sm bg-gray-200 p-1 rounded-4xl items-center">
            <div className="px-4 py-2 text-gray-900 font-medium bg-white rounded-4xl">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </div>
            <div className="px-4 py-2 text-gray-900 font-medium rounded-4xl">
              <Link
                href="/profile"
                className="hover:text-gray-900 transition-colors"
              >
                Profile
              </Link>
            </div>
            <div className="px-4 py-2 text-gray-900 font-medium rounded-4xl">
              <Link
                href="/contact"
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-center font-medium text-5xl md:text-7xl leading-tight tracking-tight text-black max-w-3xl mx-auto">
            A brand and product <br />
            designer working with clients globally
          </h1>

          <div className="flex justify-center flex-wrap gap-2 mt-12 text-sm text-gray-500">
            <span>Expertise</span>
            <span className="px-4 py-1 rounded-full bg-gray-200">Branding</span>
            <span className="px-4 py-1 rounded-full bg-gray-200">Product</span>
            <span className="px-4 py-1 rounded-full bg-gray-200">
              Design Systems
            </span>
          </div>
        </section>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <PortfolioCard image="/pics/pic1.jpg" />
            <PortfolioCard image="/pics/pic2.jpeg" />
          </div>
        </div>

        {/* Contact Section */}
        <section className="text-center py-40 px-4 bg-white">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Let's work together.
          </h2>
          <Link
            href="/contact"
            className="inline-block text-3xl font-medium text-gray-500 hover:text-gray-900 transition-colors border-gray-300 hover:border-gray-900"
          >
            Get in touch.
          </Link>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-white border-t">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span>
                <Image
                  src={"/icons/flower-solid-standard.svg"}
                  alt="flower"
                  width={32}
                  height={32}
                />
              </span>
              <span>© OHStudio 2025</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Mail
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
