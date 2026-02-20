import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">DWELL</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Premium designer paint delivered to your door. Transform your space with colors curated by interior design professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <div className="space-y-2 text-sm">
              <Link href="/shop/bundles" className="block text-white/70 hover:text-white">Paint Bundles</Link>
              <Link href="/shop/supplies" className="block text-white/70 hover:text-white">Supplies</Link>
              <Link href="/colors" className="block text-white/70 hover:text-white">All Colors</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Inspiration</h4>
            <div className="space-y-2 text-sm">
              <Link href="/inspiration" className="block text-white/70 hover:text-white">Blog</Link>
              <Link href="/gallery" className="block text-white/70 hover:text-white">Gallery</Link>
              <Link href="/about" className="block text-white/70 hover:text-white">Our Story</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <Link href="/faq" className="block text-white/70 hover:text-white">FAQ</Link>
              <Link href="/contact" className="block text-white/70 hover:text-white">Contact</Link>
              <button className="text-white/70 hover:text-white">Chat with us</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-white/70 text-sm">© 2026 Dwell. All rights reserved.</p>
            <a 
              href="https://gullstack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gullstack-credit text-white/50 hover:text-white/80 transition-colors text-sm"
            >
              Website by GullStack
            </a>
          </div>
          <div className="flex gap-6 text-sm text-white/70 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}