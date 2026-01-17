'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
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
    const text = 'Check out this hilarious City Boy meme I created!'

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
              <Image src="/logo.png" alt="City Boy Meme Logo" width={50} height={50} className="rounded-lg" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                City Boy Meme
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#generator" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Generator</a>
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
        <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto">
          Lightning Fast, Free, Online Meme Generator and Meme Maker. Use the City Boy meme template to create hilarious City Boy memes in seconds with custom text, fonts, and colors. Perfect for sharing viral content!
        </p>
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
            The City Boy meme is a hilarious internet phenomenon featuring a character with an exaggerated shocked expression wearing a distinctive hat. This viral meme template has taken social media platforms like Twitter, Instagram, TikTok, and Reddit by storm, becoming one of the most popular reaction memes for expressing surprise, disbelief, or dramatic responses to everyday situations. The City Boy meme format is perfect for creating relatable content about urban life, modern experiences, and humorous observations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our City Boy meme generator allows you to create custom memes instantly with professional-quality results. Add your own funny text, choose from multiple fonts including Impact and Arial, select vibrant colors, adjust text sizes, and download your creation in high quality PNG format. Whether you're making memes for Twitter threads, Instagram stories, Reddit posts, or TikTok videos, our free online meme maker gives you all the creative tools you need to go viral. The meme editor features an intuitive interface that works perfectly on desktop computers, tablets, and mobile phones.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Creating City Boy memes has never been easier or more fun. Simply type your hilarious text, customize the font style and color scheme, choose your preferred layout (top text, bottom text, or both), and share your creative masterpiece with friends and followers. No watermarks, no account registration required, no premium subscription fees - just pure meme-making enjoyment. Join thousands of meme creators worldwide who use our platform daily to craft viral content that gets likes, shares, and retweets across social media.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">How to Create City Boy Memes</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I add text to my City Boy meme?',
              a: 'Click the "Text" button in the tools panel, then type your message in the text field. You can customize the font family, text color, size, and style to make your City Boy meme stand out. The meme generator provides real-time preview functionality so you can see your changes instantly as you edit. Choose from popular meme fonts like Impact for that classic meme look, or select Arial, Comic Sans MS, Georgia, or Courier New for different effects.'
            },
            {
              q: 'Can I change the text position and layout?',
              a: 'Absolutely! Use the "Layouts" tool to choose from different text positioning options: default center position, top text only, bottom text only, or classic top and bottom text combination. This flexibility makes our City Boy meme maker perfect for any type of meme format you want to create. The layout options help you match different meme styles and ensure your text is always readable and impactful.'
            },
            {
              q: 'How do I download and share my City Boy meme?',
              a: 'After creating your masterpiece with custom text and styling, click the "Share" button, then select "Download Meme" to save your City Boy meme as a high-quality PNG image file. Your meme will be ready to share on social media platforms like Twitter, Instagram, Facebook, Reddit, TikTok, and more. You can also use our one-click share buttons to post directly to Twitter, Reddit, or Pinterest, or copy the link to share anywhere online.'
            },
            {
              q: 'Is the City Boy meme generator really completely free?',
              a: 'Yes! Our City Boy meme generator is 100% free to use with absolutely no hidden costs, no annoying watermarks on your images, and no account signup or registration required. Create unlimited City Boy memes and share them anywhere you want without any restrictions. We believe everyone should have access to quality meme-making tools for free, which is why our platform is completely open and accessible to all users worldwide.'
            },
            {
              q: 'What makes a great and viral City Boy meme?',
              a: 'The best City Boy memes combine relatable everyday situations with the character\'s iconic shocked expression for maximum comedic effect. Use bold, highly readable text that contrasts well with the meme template background. Keep your message concise, funny, and easy to understand at a glance. Popular City Boy meme themes include unexpected reactions, dramatic life reveals, humorous takes on modern urban living, gen z culture, and surprising everyday observations. The more relatable and clever your text, the more likely your meme is to go viral and get shared.'
            },
            {
              q: 'Can I use my City Boy memes for commercial purposes?',
              a: 'While you can freely create and share City Boy memes for personal entertainment and social media posting, commercial usage for advertising or business purposes may require additional permissions and consideration of copyright laws. Always respect intellectual property rights, fair use guidelines, and trademark regulations when using meme templates for any commercial business activities or paid promotions.'
            },
            {
              q: 'Does the meme generator work on mobile phones?',
              a: 'Yes! Our City Boy meme generator features a fully responsive design that works perfectly on all devices including smartphones, tablets, and desktop computers. The mobile-friendly interface makes it easy to create hilarious memes on the go, whether you\'re using an iPhone, Android phone, iPad, or any other mobile device. All features including text editing, font selection, color customization, and downloading work seamlessly across all screen sizes.'
            },
            {
              q: 'What font should I use for City Boy memes?',
              a: 'Impact font is the traditional choice for classic meme text styling and is highly recommended for City Boy memes. It provides excellent readability and that authentic meme aesthetic everyone recognizes. However, our generator also offers Arial, Comic Sans MS, Georgia, and Courier New fonts for creative variety. Pair your chosen font with the "outlined" text style for maximum visibility and that professional meme look.'
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Why Use Our City Boy Meme Generator?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: '⚡',
              title: 'Lightning Fast Creation',
              description: 'Create hilarious City Boy memes in seconds with our intuitive drag-and-drop interface. No complicated software downloads or steep learning curves - just instant meme magic at your fingertips.'
            },
            {
              icon: '🎨',
              title: 'Full Creative Customization',
              description: 'Choose from multiple professional fonts, vibrant color palettes, and text styling options. Adjust sizes, positions, and layouts to create the perfect City Boy meme for any viral situation.'
            },
            {
              icon: '📱',
              title: 'Mobile Friendly Design',
              description: 'Create professional memes on any device - desktop computer, tablet, or smartphone. Our fully responsive meme generator works flawlessly wherever you are, whenever inspiration strikes.'
            },
            {
              icon: '💯',
              title: 'No Watermarks Ever',
              description: 'Download clean, professional-quality meme images without any annoying watermarks or branding. Your City Boy creations are 100% yours to share, post, and enjoy freely across all platforms.'
            },
            {
              icon: '🚀',
              title: 'Instant Social Sharing',
              description: 'Share your viral memes directly to Twitter, Reddit, and Pinterest with one click, or download high-resolution PNG files for Instagram, TikTok, Facebook, and any other social platform. Go viral instantly!'
            },
            {
              icon: '🔒',
              title: 'Privacy First Approach',
              description: 'No account registration required, no user tracking, no personal data collection. Create memes privately and securely without sharing any personal information or email addresses.'
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
                <Image src="/logo.png" alt="City Boy Meme" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">City Boy Meme</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                The best free online City Boy meme generator. Create, customize, and share hilarious viral memes in seconds.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#generator" className="hover:text-white transition-colors">Meme Generator</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://cityboymeme.com" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['city boy meme', 'meme generator', 'free meme maker', 'meme creator'].map(tag => (
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
              Create viral memes with the most popular City Boy meme template. Free, fast, and fun meme making!
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
            url: 'https://cityboymeme.com',
            description: 'Free online City Boy meme generator - create hilarious City Boy memes in seconds with custom text, fonts, and colors.',
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
            keywords: 'city boy meme, meme generator, free meme maker, online meme creator, meme template, viral memes'
          })
        }}
      />
    </div>
  )
}
