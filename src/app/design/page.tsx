import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RoomDesigner from '@/components/RoomDesigner'

export const metadata = {
  title: 'Design Your Room | Dwell',
  description: 'Preview all 64 Dwell colors on a real room before you buy. Tap a color and see it on the wall instantly.',
}

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-wider text-accent mb-2">Design Studio</p>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-4">
              See it on your wall <span className="font-medium">before you buy.</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Tap any color to paint the room. Browse all 64 shades, find the one that fits your space, then order it in minutes.
            </p>
          </div>
          <RoomDesigner />
        </div>
      </main>
      <Footer />
    </div>
  )
}
