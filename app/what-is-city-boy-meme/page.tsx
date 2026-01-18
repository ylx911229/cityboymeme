import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://cityboymeme.com";
const pageUrl = `${siteUrl}/what-is-city-boy-meme`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "What is the City Boy Meme? Origin, Meaning & Why It's Viral in 2026",
  description: "Discover the City Boy meme phenomenon - from its Gravity Falls origins to becoming a viral sensation in 2026. Learn the meaning, slang origins, and why millions are sharing this iconic reaction meme.",
  keywords: [
    "city boy meme",
    "what is city boy meme",
    "city boy meaning",
    "gravity falls city boy",
    "city boy slang",
    "city boy summer",
    "city boy meme explained",
    "why city boy meme viral 2026",
    "city boy tiktok meme",
    "megan thee stallion city boy"
  ],
  openGraph: {
    type: "article",
    locale: "en_US",
    url: pageUrl,
    siteName: "City Boy Meme Generator",
    title: "What is the City Boy Meme? Origin, Meaning & Why It's Viral in 2026",
    description: "Discover the City Boy meme phenomenon - from its Gravity Falls origins to becoming a viral sensation in 2026. Learn the meaning, slang origins, and why millions are sharing this iconic reaction meme.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "City Boy Meme Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is the City Boy Meme? Origin, Meaning & Why It's Viral in 2026",
    description: "Discover the City Boy meme phenomenon - from its Gravity Falls origins to becoming a viral sensation in 2026.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function WhatIsCityBoyMeme() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="City Boy Meme Logo" width={50} height={50} className="rounded-lg" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                City Boy Meme
              </span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/#generator" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Generator
              </Link>
              <Link href="/#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/what-is-city-boy-meme" className="text-blue-600 font-medium">
                About the Meme
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What is the City Boy Meme? Origin, Meaning & Why It's Going Viral in 2026
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know about this internet phenomenon - from Gravity Falls clip to viral TikTok sensation
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Viral Trend</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">TikTok</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Gravity Falls</span>
          </div>
        </header>

        {/* Quick Summary */}
        <section className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Summary</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Uses a clip from the 2012 Gravity Falls episode "Headhunters"</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>The slang "City Boy" originated from the 2019 "City Boy Summer" trend</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Went viral on TikTok in 2022 and resurfaced in January 2026</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Satirizes dismissive male behavior and toxic masculinity</span>
            </li>
          </ul>
        </section>

        {/* Main Image/Meme Example */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <Image
            src="/logo.png"
            alt="City Boy Meme Template Example"
            width={600}
            height={600}
            className="w-full rounded-lg"
          />
          <p className="text-center text-sm text-gray-500 mt-4">
            The iconic template - <Link href="/" className="text-blue-600 hover:underline">Create your own version</Link>
          </p>
        </div>

        {/* Origin Section */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Origin Story: Where Did This Meme Come From?</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Gravity Falls Connection</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This viral format originates from a memorable scene in the <strong>Gravity Falls</strong> animated series. Specifically,
            it comes from the episode titled <strong>"Headhunters"</strong> which first aired in <strong>June 2012</strong>. In this scene,
            Deputy Durland mockingly shouts at the show's protagonist Dipper, dismissing him for being from the city.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The character's exaggerated expression and dismissive tone created the perfect template for a
            reaction meme. The clip sat relatively dormant for years until TikTokers rediscovered it and gave it new life
            in the meme ecosystem.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Slang Origin: City Boy Summer</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The term "city boy" as slang has a different origin story. It emerged in <strong>mid-2019</strong> as a response to
            <strong> Megan Thee Stallion's viral "Hot Girl Summer"</strong> campaign. Men on social media created their own
            counterpart called <strong>"City Boy Summer"</strong>, which was defined as:
          </p>
          <blockquote className="border-l-4 border-purple-600 pl-4 py-2 my-6 bg-purple-50 rounded-r-lg italic text-gray-700">
            "A male who is living his very best life and feeling good, without letting Hot Girls or any woman
            get in the way of his success and goals."
          </blockquote>
          <p className="text-gray-700 leading-relaxed mb-4">
            This slang term describes dismissive behavior toward women in pursuit of personal success and independence.
            It became part of AAVE (African American Vernacular English) and spread across social media platforms,
            particularly Twitter and Instagram.
          </p>
        </section>

        {/* Why It Went Viral */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Did This Go Viral in 2022 & 2026?</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The 2022 TikTok Explosion</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            By <strong>June 2022</strong>, TikTok creators began repurposing the Gravity Falls clip as a reaction format.
            It was paired with scenarios showing men behaving antagonistically toward women or displaying dismissive
            attitudes. The format resonated because it:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-700">✓ Satirized toxic masculinity in a humorous way</li>
            <li className="text-gray-700">✓ Provided perfect commentary on modern dating culture</li>
            <li className="text-gray-700">✓ Combined nostalgic Gravity Falls content with current slang</li>
            <li className="text-gray-700">✓ Was easily adaptable to countless relationship scenarios</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Mysterious 2026 Resurgence</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            After lying relatively dormant since its 2022 peak, this meme experienced an <strong>unexpected revival
            in early January 2026</strong>. Social media users and internet culture analysts expressed surprise at the sudden return
            four years after the initial viral moment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Popular accounts documenting the resurgence noted that videos using this format were gaining hundreds of thousands
            of views and likes within days. The exact reason for the 2026 revival remains somewhat mysterious, but theories include:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-700">• Nostalgia cycles bringing back 2022 trends</li>
            <li className="text-gray-700">• New generations discovering the format</li>
            <li className="text-gray-700">• Continued relevance of dating discourse</li>
            <li className="text-gray-700">• Algorithm changes pushing older viral content</li>
            <li className="text-gray-700">• Fresh takes on the classic format by new creators</li>
          </ul>
        </section>

        {/* Cultural Meaning */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Does This Meme Actually Mean?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            This viral format serves multiple cultural functions in online spaces:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Satire of Toxic Masculinity</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            It primarily functions as <strong>satirical commentary on dismissive male behavior</strong> in dating
            and relationships. The format mocks men who pride themselves on being emotionally unavailable or treating romantic
            partners poorly as a badge of honor.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Reaction Format for Dating Drama</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            This template is perfect for reacting to scenarios where women are "shown up by a man" or where male characters
            display exaggerated indifference. It's become shorthand for calling out problematic dating behaviors while
            maintaining a humorous tone.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Gen Z Commentary on Modern Relationships</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For Gen Z users, this format represents a way to discuss and critique modern dating culture, situationships,
            and the complexities of relationships in the digital age. It provides a humorous lens through which to examine
            serious social issues.
          </p>
        </section>

        {/* How to Use */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 md:p-8 mb-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Create Your Own</h2>

          <p className="text-blue-50 leading-relaxed mb-6">
            Ready to join the viral trend? Creating your own is easy with our free online generator:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <h3 className="font-bold mb-2">Visit Our Generator</h3>
                <p className="text-blue-50">Head to our <Link href="/" className="underline hover:text-blue-200">free meme generator</Link> to get started</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <h3 className="font-bold mb-2">Add Your Text</h3>
                <p className="text-blue-50">Type your hilarious caption or reaction text directly onto the template</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <h3 className="font-bold mb-2">Customize Style</h3>
                <p className="text-blue-50">Choose fonts, colors, and text positions to match your creative vision</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <h3 className="font-bold mb-2">Download & Share</h3>
                <p className="text-blue-50">Save your creation and share it across TikTok, Twitter, Instagram, and Reddit</p>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Creating Now →
          </Link>
        </section>

        {/* Examples & Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Popular Formats & Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎭 The Classic Dismissal</h3>
              <p className="text-gray-700 mb-2">Format: Showing a man ignoring or dismissing romantic gestures</p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600 italic">
                "When she says 'we need to talk' but you're a city boy"
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">💬 Dating App Scenarios</h3>
              <p className="text-gray-700 mb-2">Format: Reactions to modern dating situations</p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600 italic">
                "POV: She asked where this is going but you're living that city boy summer"
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Relationship Priorities</h3>
              <p className="text-gray-700 mb-2">Format: Choosing personal goals over relationships</p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-600 italic">
                "Her: 'Do you even care about us?' / Me: *city boy stare*"
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">😤 Satirical Self-Awareness</h3>
              <p className="text-gray-700 mb-2">Format: Ironically embracing the persona</p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600 italic">
                "Me explaining why commitment is a social construct [city boy image]"
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-3">💡 Pro Tips for Going Viral:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Keep text concise and punchy for maximum impact</li>
              <li>✓ Use relatable dating situations that Gen Z will recognize</li>
              <li>✓ Balance humor with self-awareness to avoid seeming genuinely toxic</li>
              <li>✓ Pair with trending sounds on TikTok for extra visibility</li>
              <li>✓ Time your posts when your audience is most active</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Where does the City Boy meme come from?</h3>
              <p className="text-gray-700">
                The viral clip originates from the Gravity Falls episode "Headhunters" (Season 1, Episode 3)
                which aired in June 2012. The character Deputy Durland dismissively calls Dipper a "city boy" in the scene,
                creating the perfect reaction template.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What does "city boy" mean as slang?</h3>
              <p className="text-gray-700">
                As slang, "city boy" refers to a man who prioritizes his own success and independence over romantic
                relationships, often displaying dismissive attitudes toward women. It originated from the 2019
                "City Boy Summer" trend as a male counterpart to "Hot Girl Summer."
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">When did this meme go viral?</h3>
              <p className="text-gray-700">
                The format first went viral on TikTok in June 2022, then mysteriously resurfaced and gained renewed
                popularity in January 2026, accumulating hundreds of thousands of likes and shares.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is this meme serious or satirical?</h3>
              <p className="text-gray-700">
                It's primarily <strong>satirical</strong>. While it references real "city boy" behavior,
                most users employ it ironically to mock toxic masculinity and dismissive dating attitudes rather than
                genuinely endorsing them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I create my own for free?</h3>
              <p className="text-gray-700">
                Yes! You can create unlimited versions completely free using our <Link href="/" className="text-blue-600 hover:underline font-medium">
                City Boy meme generator</Link>. No watermarks, no signup required, just instant creation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Own?</h2>
          <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join thousands of creators making viral content with our free, easy-to-use generator.
            No signup required, no watermarks, just pure meme-making fun.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Creating Now - It's Free! →
          </Link>
        </section>

        {/* Related Content */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/#generator" className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">🎨 Meme Generator</h3>
              <p className="text-sm text-gray-600">Create custom city boy memes in seconds with our free online tool</p>
            </Link>
            <Link href="/#examples" className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">📚 Examples Gallery</h3>
              <p className="text-sm text-gray-600">Browse trending examples for inspiration</p>
            </Link>
            <Link href="/#faq" className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-2">❓ Making FAQ</h3>
              <p className="text-sm text-gray-600">Learn tips and tricks for creating viral content</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-2">🔥 Trending Now</h3>
              <p className="text-sm text-gray-600">This format continues to dominate TikTok in 2026</p>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <Image src="/logo.png" alt="City Boy Meme" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">City Boy Meme</span>
              </Link>
              <p className="text-gray-400 text-sm md:text-base">
                The best free online meme generator. Create, customize, and share hilarious viral content in seconds.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#generator" className="hover:text-white transition-colors">Generator</Link></li>
                <li><Link href="/what-is-city-boy-meme" className="hover:text-white transition-colors">About the Meme</Link></li>
                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['city boy meme', 'gravity falls', 'viral 2026', 'tiktok trend'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>© 2026 City Boy Meme Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What is the City Boy Meme? Origin, Meaning & Why It\'s Viral in 2026',
            description: 'Discover the City Boy meme phenomenon - from its Gravity Falls origins to becoming a viral sensation in 2026. Learn the meaning, slang origins, and cultural impact.',
            image: `${siteUrl}/logo.png`,
            author: {
              '@type': 'Organization',
              name: 'City Boy Meme Generator'
            },
            publisher: {
              '@type': 'Organization',
              name: 'City Boy Meme Generator',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`
              }
            },
            datePublished: '2026-01-18',
            dateModified: '2026-01-18',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': pageUrl
            },
            keywords: 'city boy meme, what is city boy meme, gravity falls, city boy summer, viral meme 2026, tiktok meme',
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where does the City Boy meme come from?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The viral clip originates from the Gravity Falls episode "Headhunters" (Season 1, Episode 3) which aired in June 2012. The character Deputy Durland dismissively calls Dipper a "city boy" in the scene.'
                }
              },
              {
                '@type': 'Question',
                name: 'What does "city boy" mean as slang?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'As slang, "city boy" refers to a man who prioritizes his own success and independence over romantic relationships, often displaying dismissive attitudes toward women. It originated from the 2019 "City Boy Summer" trend.'
                }
              },
              {
                '@type': 'Question',
                name: 'When did this meme go viral?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The format first went viral on TikTok in June 2022, then mysteriously resurfaced and gained renewed popularity in January 2026.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I create my own for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! You can create unlimited versions completely free using the City Boy meme generator. No watermarks, no signup required.'
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'What is City Boy Meme',
                item: pageUrl
              }
            ]
          })
        }}
      />
    </div>
  );
}
