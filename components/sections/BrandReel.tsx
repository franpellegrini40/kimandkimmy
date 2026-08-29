export default function BrandReel() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'var(--navy)' }}>
      <video
        className="block h-[56vh] w-full object-cover md:h-[82vh]"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/vivra-brand-reel-poster.jpg"
      >
        <source src="/videos/vivra-brand-reel.webm" type="video/webm" />
        <source src="/videos/vivra-brand-reel.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
