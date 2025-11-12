import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Laptop, Cpu, Mouse, HardDrive, Monitor, Router, Wrench, Mail, PhoneCall, Sparkles } from 'lucide-react'

const products = [
  {
    name: 'Laptop Productivity 14',
    price: 'Rp 8.499.000',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    icon: Laptop,
  },
  {
    name: 'Gaming Mouse RGB',
    price: 'Rp 399.000',
    image: 'https://images.unsplash.com/photo-1616296425622-4560a2ad83de?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYW1pbmclMjBNb3VzZSUyMFJHQnxlbnwwfDB8fHwxNzYyOTE3MzE2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: Mouse,
  },
  {
    name: 'SSD NVMe 1TB',
    price: 'Rp 1.299.000',
    image: 'https://images.unsplash.com/photo-1661112176771-591411832406?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI5MTczMTZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: HardDrive,
  },
  {
    name: 'Monitor 27" 144Hz',
    price: 'Rp 3.599.000',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop',
    icon: Monitor,
  },
  {
    name: 'Wi‑Fi 6 Router',
    price: 'Rp 1.099.000',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaSVFMiU4MCU5MUZpJTIwNiUyMFJvdXRlcnxlbnwwfDB8fHwxNzYyOTE3MzE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    icon: Router,
  },
  {
    name: 'CPU Ryzen 7 Series',
    price: 'Rp 4.599.000',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop',
    icon: Cpu,
  },
]

const services = [
  { name: 'Install Ulang OS', price: 'Rp 150.000', desc: 'Install Windows/macOS + driver + update' },
  { name: 'Cleaning & Thermal Paste', price: 'Rp 200.000', desc: 'Bongkar, bersih total, ganti pasta' },
  { name: 'Upgrade RAM/SSD', price: 'Rp 100.000', desc: 'Jasa pasang + optimasi sistem' },
  { name: 'Troubleshooting Hardware', price: 'Rp 150.000 - 350.000', desc: 'Diagnosa & perbaikan ringan' },
  { name: 'Service Laptop/PC', price: 'Mulai Rp 200.000', desc: 'Perbaikan menyeluruh sesuai kerusakan' },
]

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 flex items-center justify-center ring-1 ring-white/40">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">aftertechgenius</span>
    </div>
  )
}

function Header() {
  const menus = useMemo(() => [
    { label: 'Beranda', href: '#home' },
    { label: 'Produk', href: '#produk' },
    { label: 'Service', href: '#service' },
    { label: 'Kontak', href: '#kontak' },
  ], [])
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/10">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              {menus.map(m => (
                <a key={m.href} href={m.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {m.label}
                </a>
              ))}
            </nav>
            <a href="#kontak" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-4 py-2 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:opacity-95 transition">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_35%),linear-gradient(120deg,#0f172a_0%,#0b1220_40%,#0a0f1d_100%)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Solusi Elektronik & Service Komputer Terpercaya
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Modern tech for everyday brilliance
          </h1>
          <p className="mt-4 text-lg text-white/80">
            aftertechgenius menghadirkan perangkat elektronik terkini dan layanan service profesional untuk kebutuhan personal maupun bisnis Anda.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#produk" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:opacity-95 transition">Lihat Produk</a>
            <a href="#service" className="inline-flex justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur hover:bg-white/20 transition">Layanan Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ item }) {
  const Icon = item.icon
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl hover:bg-white/10 transition overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Icon className="h-5 w-5 text-cyan-400" />
            <h3 className="font-semibold">{item.name}</h3>
          </div>
          <p className="mt-1 text-sm text-white/60">Ready stock • Garansi resmi</p>
        </div>
        <span className="rounded-lg bg-gradient-to-r from-cyan-400/20 to-indigo-600/20 px-3 py-1 text-sm font-semibold text-cyan-300 ring-1 ring-white/10">
          {item.price}
        </span>
      </div>
      <button className="mt-3 w-full rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 transition">
        Detail & Pemesanan
      </button>
    </div>
  )
}

function Products() {
  return (
    <section id="produk" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pilihan Produk</h2>
          <p className="mt-3 text-white/70">Teknologi terkini dengan harga bersahabat untuk menunjang produktivitas dan hiburan Anda.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} item={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ s }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:bg-white/10 transition">
      <div className="flex items-start gap-3">
        <Wrench className="h-5 w-5 text-indigo-300 mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{s.name}</h3>
            <span className="text-sm font-medium text-cyan-300">{s.price}</span>
          </div>
          <p className="mt-1 text-sm text-white/70">{s.desc}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="service" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_70%_90%,rgba(168,85,247,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Layanan Service Komputer</h2>
            <p className="mt-3 text-white/70">Tim teknisi berpengalaman siap menangani berbagai kebutuhan perbaikan dan upgrade perangkat Anda dengan cepat dan terpercaya.</p>
            <div className="mt-6 space-y-4">
              {services.map((s) => (
                <ServiceCard key={s.name} s={s} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6 backdrop-blur-xl shadow-2xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="Service" className="h-full w-full object-cover" />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/80">
              <li className="rounded-xl bg-white/5 p-3">Diagnosa awal gratis*</li>
              <li className="rounded-xl bg-white/5 p-3">Garansi service 30 hari</li>
              <li className="rounded-xl bg-white/5 p-3">Sparepart original</li>
              <li className="rounded-xl bg-white/5 p-3">Antar jemput (opsional)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="kontak" className="relative mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Logo />
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                <a href="mailto:hello@aftertechgenius.id" className="hover:text-white transition">hello@aftertechgenius.id</a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-emerald-300" />
                <a href="https://wa.me/6285141073123" target="_blank" rel="noreferrer" className="hover:text-white transition">+62-851-4107-3123</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">
            © {new Date().getFullYear()} aftertechgenius • Elektronik & Service Komputer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="fixed inset-0 -z-10 bg-[conic-gradient(at_10%_10%,#0b1220,45%,#0c1224,60%,#0a0f1d)]" />
      <Header />
      <Hero />
      <Products />
      <Services />
      <Footer />
    </div>
  )
}
