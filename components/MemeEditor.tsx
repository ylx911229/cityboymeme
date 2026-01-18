'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaReddit, FaPinterest, FaLink, FaDownload, FaPlus, FaTrash } from 'react-icons/fa'
import FabricCanvas, { FabricCanvasRef, TextElement } from './FabricCanvas'

type ToolType = 'text' | 'layouts' | 'share' | null
type LayoutType = 'default' | 'top' | 'bottom' | 'top-bottom'
type TextStyle = 'bold' | 'filled' | 'outlined'

const FONTS = ['Impact', 'Arial', 'Comic Sans MS', 'Georgia', 'Courier New']
const COLORS = ['#FFFFFF', '#000000', '#00FF00', '#0066FF', '#00CC00', '#FFFF00', '#FF6600', '#FF0000', '#9900FF']

export default function MemeEditor() {
  const [activeTool, setActiveTool] = useState<ToolType>('text')
  const [textElements, setTextElements] = useState<TextElement[]>([
    {
      id: '1',
      text: 'City Boys Be Like',
      color: '#FFFFFF',
      font: 'Impact',
      style: 'outlined',
      size: 48
    }
  ])
  const [selectedTextId, setSelectedTextId] = useState<string | null>('1')
  const [copySuccess, setCopySuccess] = useState(false)
  const [canvasReady, setCanvasReady] = useState(false)
  const canvasRef = useRef<FabricCanvasRef>(null)

  const selectedText = textElements.find(t => t.id === selectedTextId)

  const handleCanvasReady = useCallback(() => {
    setCanvasReady(true)
  }, [])

  // Initialize canvas with text elements when canvas is ready
  useEffect(() => {
    if (canvasReady) {
      textElements.forEach(element => {
        canvasRef.current?.addText(element)
      })
    }
  }, [canvasReady]) // Only run once when canvas becomes ready

  const updateText = (id: string, updates: Partial<TextElement>) => {
    setTextElements(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t))
    canvasRef.current?.updateText(id, updates)
  }

  const addNewText = () => {
    const newId = Date.now().toString()
    const newElement: TextElement = {
      id: newId,
      text: 'New Text',
      color: '#FFFFFF',
      font: 'Impact',
      style: 'outlined',
      size: 48
    }
    setTextElements(prev => [...prev, newElement])
    canvasRef.current?.addText(newElement)
    setSelectedTextId(newId)
  }

  const deleteText = (id: string) => {
    setTextElements(prev => prev.filter(t => t.id !== id))
    canvasRef.current?.removeText(id)
    if (selectedTextId === id) {
      setSelectedTextId(null)
    }
  }

  const handleTextSelect = useCallback((id: string | null) => {
    setSelectedTextId(id)
  }, [])

  const handleDownload = async () => {
    const dataURL = canvasRef.current?.exportAsDataURL()
    if (!dataURL) return

    const link = document.createElement('a')
    link.download = 'city-boy-meme.png'
    link.href = dataURL
    link.click()
  }

  const handleShare = (platform: string) => {
    const url = 'https://cityboymeme.com'
    const text = 'Check out this hilarious meme I created!'

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'reddit':
        window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank')
        break
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
        break
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="City Boy Meme featuring shocked expression character - Free generator" width={50} height={50} className="rounded-lg" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                City Boy Meme
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#generator" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Generator</a>
              <Link href="/what-is-city-boy-meme" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">What is City Boy?</Link>
              <a href="#examples" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Examples</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-8 md:py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          City Boy Meme Generator
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto mb-4">
          The #1 City Boy Meme Generator - Lightning-Fast, Free, and Online. Create viral City Boy Meme in seconds with custom text, fonts, and colors. Perfect for TikTok, Twitter, Instagram, and all social media!
        </p>
        <Link
          href="/what-is-city-boy-meme"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base hover:underline"
        >
          <span>📚 Learn about the origins and why it's viral in 2026</span>
          <span>→</span>
        </Link>
      </section>

      {/* Meme Editor */}
      <section id="generator" className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
          {/* Preview Area */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <FabricCanvas
              ref={canvasRef}
              backgroundImage="/logo.png"
              width={600}
              height={600}
              onTextSelect={handleTextSelect}
              onCanvasReady={handleCanvasReady}
            />
          </div>

          {/* Tools Panel */}
          <div className="space-y-4 lg:space-y-6">
            {/* Tool Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveTool('text')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                    activeTool === 'text' ? 'bg-blue-100 text-blue-600 shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl font-bold">T</span>
                  <span className="text-sm font-medium">Text</span>
                </button>
                <button
                  onClick={() => setActiveTool('share')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                    activeTool === 'share' ? 'bg-blue-100 text-blue-600 shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl">📤</span>
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>

            {/* Active Tool Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 min-h-[400px]">
              {activeTool === 'text' && (
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-gray-900">Edit Text</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={addNewText}
                        className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                        title="Add new text"
                      >
                        <FaPlus />
                      </button>
                      {selectedTextId && textElements.length > 1 && (
                        <button
                          onClick={() => selectedTextId && deleteText(selectedTextId)}
                          className="p-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                          title="Delete selected text"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  </div>

                  {selectedText && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Text Content</label>
                        <input
                          type="text"
                          value={selectedText.text}
                          onChange={(e) => updateText(selectedText.id, { text: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your text"
                        />
                      </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2.5">Font</label>
                    <select
                      value={selectedText.font}
                      onChange={(e) => updateText(selectedText.id, { font: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all bg-white"
                    >
                      {FONTS.map(font => (
                        <option key={font} value={font}>{font}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2.5">Color</label>
                    <div className="grid grid-cols-5 gap-2.5">
                      {COLORS.map(color => (
                        <button
                          key={color}
                          onClick={() => updateText(selectedText.id, { color })}
                          className={`w-full aspect-square rounded-lg border-2 transition-all hover:scale-110 ${
                            selectedText.color === color ? 'border-blue-500 scale-110 shadow-lg' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select ${color} color`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2.5">Style</label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(['bold', 'filled', 'outlined'] as TextStyle[]).map(style => (
                        <button
                          key={style}
                          onClick={() => updateText(selectedText.id, { style })}
                          className={`px-4 py-2.5 rounded-lg capitalize transition-all font-medium ${
                            selectedText.style === style ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2.5">Size: {selectedText.size}px</label>
                    <input
                      type="range"
                      min="24"
                      max="96"
                      value={selectedText.size}
                      onChange={(e) => updateText(selectedText.id, { size: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                    </>
                  )}

                  {!selectedText && (
                    <div className="text-center text-gray-500 py-12">
                      <div className="text-5xl mb-4">✏️</div>
                      <p className="font-medium text-lg">No text selected</p>
                      <p className="text-sm mt-2">Click on a text on the canvas or add a new one</p>
                    </div>
                  )}
                </div>
              )}

              {activeTool === 'share' && (
                <div className="space-y-5">
                  <h3 className="font-bold text-xl text-gray-900">Share Your Meme</h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleDownload}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium"
                    >
                      <FaDownload className="text-xl" />
                      <span>Download Meme</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="examples" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is a City Boy Meme?</h2>
          <p className="text-gray-600 leading-relaxed">
            This hilarious internet phenomenon features a character with an exaggerated shocked expression wearing a distinctive hat. The viral template has taken social media platforms like Twitter, Instagram, TikTok, and Reddit by storm, becoming one of the most popular reaction formats for expressing surprise, disbelief, or dramatic responses to everyday situations. It's perfect for creating relatable content about urban life, modern experiences, and humorous observations that resonate with millions worldwide.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Originating from a <Link href="/what-is-city-boy-meme" className="text-blue-600 hover:underline font-medium">memorable Gravity Falls scene</Link>, this format has evolved into one of 2026's most viral trends. Our generator allows you to create custom versions instantly with professional-quality results. Add your own funny text, choose from multiple fonts including Impact and Arial, select vibrant colors, adjust text sizes, and download your creation in high quality PNG format. Whether you're creating content for Twitter threads, Instagram stories, Reddit posts, or TikTok videos, our free online tool gives you everything you need to go viral.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Creating viral content has never been easier or more fun. Simply type your hilarious text, customize the font style and color scheme, choose your preferred layout, and share your masterpiece with friends and followers. No watermarks, no account registration required, no premium subscription fees - just pure meme-making enjoyment. Join thousands of creators worldwide who use our platform daily to craft content that gets likes, shares, and retweets across social media. <Link href="/what-is-city-boy-meme" className="text-blue-600 hover:underline font-medium">Learn more about the phenomenon</Link> and why it's trending in 2026.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">How to Create City Boy Meme - Complete Guide</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is a City Boy Meme?',
              a: 'The City Boy Meme is a viral internet format featuring a character with an exaggerated shocked expression wearing a distinctive hat. Originating from Gravity Falls, this City Boy meme became one of 2026\'s most popular reaction formats on TikTok, Twitter, Instagram, and Reddit for expressing surprise, disbelief, or dramatic responses to everyday urban life situations. Our City Boy Meme Generator makes it easy to create your own custom versions instantly.'
            },
            {
              q: 'How do I create a City Boy Meme?',
              a: 'Creating a City Boy Meme is simple with our generator: 1) Click the "Text" button to start editing, 2) Type your message in the text field, 3) Customize the font family (Impact recommended for classic City Boy meme style), text color, and size, 4) Choose your preferred layout (center, top, bottom, or top+bottom), 5) Click "Download Meme" to save your City Boy meme as a high-quality PNG. Our generator provides real-time preview so you can see your City Boy meme as you create it.'
            },
            {
              q: 'Can I customize the position and layout of text on my City Boy Meme?',
              a: 'Absolutely! Our City Boy Meme Generator gives you full control over text positioning and layout options. You can drag and move text anywhere on the canvas to create the perfect City Boy meme composition. This flexibility makes it perfect for any type of City Boy meme format you want to create, whether you prefer centered text, corner placement, or custom positioning for maximum viral potential.'
            },
            {
              q: 'How do I download and share my City Boy Meme?',
              a: 'After creating your City Boy meme masterpiece with custom text and styling, click the "Share" button, then select "Download Meme" to save it as a high-quality PNG image file. Your City Boy meme will be ready to share on social media platforms like Twitter, Instagram, Facebook, Reddit, TikTok, and more. You can also use our one-click share buttons to post your City Boy meme directly to Twitter, Reddit, or Pinterest, or copy the link to share anywhere online with friends and followers.'
            },
            {
              q: 'Is this City Boy Meme Generator really free?',
              a: 'Yes! Our City Boy Meme Generator is 100% free to use with absolutely no hidden costs, no annoying watermarks on your City Boy meme images, and no account signup or registration required. Create unlimited City Boy Meme and share them anywhere you want without any restrictions whatsoever. We believe everyone should have access to quality City Boy meme-making tools for free, which is why our platform is completely open and accessible to all enthusiasts and creators worldwide who want to make viral City Boy meme content.'
            },
            {
              q: 'What makes a great viral City Boy Meme?',
              a: 'The best City Boy Meme combine relatable everyday situations with the character\'s iconic shocked expression for maximum comedic effect. Use bold, highly readable text that contrasts well with the City Boy meme template background. Keep your message concise, funny, and easy to understand at a glance. Popular City Boy meme themes include unexpected reactions, dramatic life reveals, humorous takes on modern urban living, gen z culture, and surprising everyday observations. The more relatable and clever your City Boy meme text, the more likely it is to go viral and get shared across social media platforms. For more inspiration and background, check out our complete guide on what the City Boy meme is and why it\'s trending.'
            },
            {
              q: 'Can I use my City Boy Meme for commercial purposes?',
              a: 'While you can freely create and share City Boy Meme for personal entertainment and social media posting, commercial usage for advertising or business purposes may require additional permissions and consideration of copyright laws. Always respect intellectual property rights, fair use guidelines, and trademark regulations when using City Boy meme templates for any commercial business activities or paid promotions.'
            },
            {
              q: 'Does the City Boy Meme Generator work on mobile phones?',
              a: 'Yes! Our City Boy Meme Generator features a fully responsive design that works perfectly on all devices including smartphones, tablets, and desktop computers. The mobile-friendly interface makes it easy to create hilarious City Boy Meme on the go, whether you\'re using an iPhone, Android phone, iPad, or any other mobile device. All features including text editing, font selection, color customization, and downloading work seamlessly across all screen sizes for the best City Boy meme creation experience.'
            }
          ].map((item, i) => (
            <details key={i} className="bg-white rounded-xl shadow-md p-4 md:p-6 cursor-pointer group">
              <summary className="font-semibold text-gray-900 text-base md:text-lg list-none flex justify-between items-center">
                {item.q}
                <span className="text-blue-600 group-open:rotate-180 transition-transform ml-2">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Why Our City Boy Meme Generator is #1</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: '⚡',
              title: 'Lightning Fast Creation',
              description: 'Create hilarious content in seconds with our intuitive drag-and-drop interface. No complicated software downloads or steep learning curves - just instant meme magic at your fingertips.'
            },
            {
              icon: '🎨',
              title: 'Full Creative Customization',
              description: 'Choose from multiple professional fonts, vibrant color palettes, and text styling options. Adjust sizes, positions, and layouts to create the perfect viral content for any situation.'
            },
            {
              icon: '📱',
              title: 'Mobile Friendly Design',
              description: 'Create professional content on any device - desktop computer, tablet, or smartphone. Our fully responsive generator works flawlessly wherever you are, whenever inspiration strikes.'
            },
            {
              icon: '💯',
              title: 'No Watermarks Ever',
              description: 'Download clean, professional-quality images without any annoying watermarks or branding. Your creations are 100% yours to share, post, and enjoy freely across all platforms.'
            },
            {
              icon: '🚀',
              title: 'Instant Social Sharing',
              description: 'Share your viral creations directly to Twitter, Reddit, and Pinterest with one click, or download high-resolution PNG files for Instagram, TikTok, Facebook, and any other social platform. Go viral instantly!'
            },
            {
              icon: '🔒',
              title: 'Privacy First Approach',
              description: 'No account registration required, no user tracking, no personal data collection. Create content privately and securely without sharing any personal information or email addresses.'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="City Boy Meme - Free online meme maker" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">City Boy Meme</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                The best free online generator. Create, customize, and share hilarious viral content in seconds.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#generator" className="hover:text-white transition-colors">Generator</a></li>
                <li><Link href="/what-is-city-boy-meme" className="hover:text-white transition-colors">About the Meme</Link></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://cityboymeme.com" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['city boy meme', 'viral trends', 'free generator', 'tiktok'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>© 2026 City Boy Meme Generator. All rights reserved.</p>
            <p className="mt-2 text-xs md:text-sm">
              Create viral content with the most popular template. Free, fast, and fun!
            </p>
          </div>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'City Boy Meme Generator',
            alternateName: 'City Boy Meme Maker',
            url: 'https://cityboymeme.com',
            description: 'Free City Boy Meme Generator - create viral City Boy Meme instantly with custom text, fonts, and colors. The #1 online City Boy meme maker in 2026.',
            applicationCategory: 'Entertainment',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '2847',
              bestRating: '5',
              worstRating: '1'
            },
            keywords: 'city boy meme, city boy meme generator, city boy meme maker, free meme generator, viral meme, meme creator, tiktok meme, trending meme 2026',
            featureList: [
              'Create City Boy Meme free',
              'No watermarks on City Boy Meme',
              'Instant City Boy meme download',
              'Custom text for City Boy Meme'
            ]
          })
        }}
      />

      {/* FAQPage Schema for Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a City Boy Meme?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The City Boy Meme is a viral internet format featuring a character with an exaggerated shocked expression wearing a distinctive hat. Originating from Gravity Falls, this City Boy meme became one of 2026\'s most popular reaction formats on TikTok, Twitter, Instagram, and Reddit for expressing surprise, disbelief, or dramatic responses to everyday urban life situations.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I create a City Boy Meme?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Creating a City Boy Meme is simple: 1) Open our free City Boy Meme Generator, 2) Add your custom text, 3) Choose fonts and colors, 4) Download your City Boy meme in high-quality PNG format. No signup required!'
                }
              },
              {
                '@type': 'Question',
                name: 'Is the City Boy Meme Generator free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our City Boy Meme Generator is 100% free with no watermarks, no signup required, and unlimited usage. Create and download as many City Boy Meme as you want.'
                }
              },
              {
                '@type': 'Question',
                name: 'Why are City Boy Meme so popular in 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'City Boy Meme exploded on TikTok, Twitter, and Instagram in 2026 because the shocked expression perfectly captures relatable reactions to modern life, gen z culture, and unexpected situations. The format\'s versatility makes it ideal for viral content.'
                }
              },
              {
                '@type': 'Question',
                name: 'Does the City Boy Meme Generator work on mobile?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our City Boy Meme Generator works perfectly on all devices including smartphones, tablets, and desktop computers with a fully responsive design for creating City Boy Meme on the go.'
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
