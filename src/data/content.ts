export const BUSINESS = {
  name: 'Damar DAC',
  fullName: 'DAMAR DAC INTERIOR & CONTRACTOR',
  tagline: 'Building Spaces, Creating Value.',
  phone: '+62 851-4308-9583',
  whatsappUrl: 'https://wa.me/6285143089583',
  whatsappDisplay: '+62 851-4308-9583',
  email: 'info@damardac.com',

  // Alamat workshop dan kantor
  address: 'Kesiman Kertalangu, Denpasar, Bali',
  hq: 'Denpasar (HQ)',
  hqDetail: 'Workshop & Office — Kesiman Kertalangu, Denpasar, Bali',

  // Google Maps
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.13453563653!2d115.26028297432084!3d-8.652571688019838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24116e56b5841%3A0xfcf97ce9b01e8d2c!2sDAMARDAC%20(General%20Contractor%20%26%20Interior%20Custom)!5e1!3m2!1sid!2sid!4v1792469612380!5m2!1sid!2sid',

  area: 'Melayani seluruh Bali',
  hours: 'Senin–Sabtu, 08:00–17:00 WITA',

  socials: {
    facebook: 'https://www.facebook.com/DamarDAC',
    tiktok: 'https://www.tiktok.com/@damardac',
    instagram: 'https://www.instagram.com/damar_dac',
  },
}

export interface WorkFlowStep {
  number: string
  title: string
  description: string
}

export const workFlowSteps: WorkFlowStep[] = [
  { number: '01', title: 'Mari Berkenalan!', description: 'Kami mengunjungi lokasi Anda, mendengarkan kebutuhan, dan memberikan konsultasi gratis untuk memahami visi Anda.' },
  { number: '02', title: 'Pengajuan Proposal Desain Arsitektur', description: 'Tim arsitek kami menyusun konsep dan proposal desain arsitektur yang disesuaikan dengan karakter dan lahan Anda.' },
  { number: '03', title: 'Mulai Pengerjaan Secara Detail', description: 'Kami mengembangkan gambar kerja detail, perhitungan struktur, dan rencana anggaran biaya yang transparan.' },
  { number: '04', title: 'Pengajuan Proposal Desain Interior', description: 'Tim interior merancang 3D rendering, mood board, dan material selection untuk setiap ruang.' },
  { number: '05', title: 'Pengerjaan Projek Menyeluruh', description: 'Tim konstruksi dan workshop furniture kami mengeksekusi proyek dengan pengawasan ketat dan jadwal terstruktur.' },
  { number: '06', title: 'Pengiriman Dokumen', description: 'Serah terima kunci, dokumen kelengkapan, dan garansi pekerjaan untuk ketenangan Anda.' },
]

export interface ProjectSpec {
  label: string
  value: string
  icon: 'land' | 'bathroom' | 'floor' | 'carport' | 'bedroom' | 'pool'
}

export interface PortfolioProject {
  name: string
  category: string
  location: string
  image: string
  alt: string
  description: string
  specs: ProjectSpec[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Villa Nusa Dua',
    category: 'Villa Hunian',
    location: 'Nusa Dua, Bali — Owner: Mahendra',
    image: '/WhatsApp_Image_2026-07-25_at_16.05.12_(1).jpeg',
    alt: 'Area outdoor villa dengan kolam renang di Nusa Dua Bali — proyek Damar DAC General Contractor & Interior',
    description: 'Hunian tropis dengan courtyard, kolam renang, dan landscape yang menyatukan ruang dalam dengan suasana Bali.',
    specs: [
      { label: 'Lokasi', value: 'Nusa Dua', icon: 'land' },
      { label: 'Konsep', value: 'Tropis', icon: 'floor' },
      { label: 'Kolam', value: 'Ya', icon: 'pool' },
      { label: 'Car Port', value: 'Ya', icon: 'carport' },
      { label: 'Desain', value: 'Custom', icon: 'bedroom' },
      { label: 'Status', value: 'Terbangun', icon: 'bathroom' },
    ],
  },
  {
    name: 'Hasamdong Cafe',
    category: 'Commercial Interior',
    location: 'Ubud, Bali — Owner: Lee Hyengchul',
    image: '/WhatsApp_Image_2026-07-25_at_16.05.13.jpeg',
    alt: 'Interior Hasamdong Cafe di Ubud Bali milik Lee Hyengchul — proyek interior Damar DAC',
    description: 'Interior café yang hangat dan nyaman dengan layout efisien, custom counter, pencahayaan lembut, serta furniture untuk pengalaman tamu yang berkesan.',
    specs: [
      { label: 'Pemilik', value: 'Lee Hyengchul', icon: 'bedroom' },
      { label: 'Lokasi', value: 'Ubud', icon: 'land' },
      { label: 'Tipe', value: 'Cafe', icon: 'floor' },
      { label: 'Konsep', value: 'Custom', icon: 'bathroom' },
      { label: 'Interior', value: 'Full', icon: 'pool' },
      { label: 'Status', value: 'Terbangun', icon: 'carport' },
    ],
  },
  {
    name: 'Walk In-closet',
    category: 'Residance Interior',
    location: 'Kerobokan, Bali — Owner: Andrew de jong',
    image: 'WhatsApp_Image_2026-10-20_at_11.41.46.jpeg',
    alt: 'Interior Hasamdong Cafe di Ubud Bali milik Lee Hyengchul — proyek interior Damar DAC',
    description: 'Interior walk in-closet yang luxury dan multifungsi dengan layout efisien, custom sesuai keinginan, pencahayaan aesthetic, serta pengalaman ketika masuk ruangan yang berkesan.',
    specs: [
      { label: 'Pemilik', value: 'Andrew de jong', icon: 'bedroom' },
      { label: 'Lokasi', value: 'Kerobokan', icon: 'land' },
      { label: 'Tipe', value: 'Walk in-closet', icon: 'floor' },
      { label: 'Konsep', value: 'Custom', icon: 'bathroom' },
      { label: 'Interior', value: 'Full', icon: 'pool' },
      { label: 'Status', value: 'Terbangun', icon: 'carport' },
    ],
  },
  {
    name: 'Ibu Jero Residence',
    category: 'Custom Interior',
    location: 'Jimbaran, Bali — Owner: Ibu Jero',
    image: '/WhatsApp_Image_2026-07-25_at_16.09.27.jpeg',
    alt: 'Custom interior kamar dengan vanity dan wardrobe built-in di Jimbaran Bali — proyek Damar DAC untuk Ibu Jero',
    description: 'Interior kamar dengan wardrobe built-in, vanity custom, dan permainan lighting yang menghadirkan suasana tenang sekaligus fungsional.',
    specs: [
      { label: 'Pemilik', value: 'Ibu Jero', icon: 'bedroom' },
      { label: 'Lokasi', value: 'Jimbaran', icon: 'land' },
      { label: 'Tipe', value: 'Interior', icon: 'floor' },
      { label: 'Wardrobe', value: 'Custom', icon: 'carport' },
      { label: 'Lighting', value: 'Ambient', icon: 'pool' },
      { label: 'Status', value: 'Terbangun', icon: 'bathroom' },
    ],
  },
]

export interface Deliverable {
  title: string
}

export const deliverables: Deliverable[] = [
  { title: 'Gambar Kerja Perencanaan' },
  { title: 'Rencana Anggaran Biaya' },
  { title: 'Desain dan 3D Interior' },
  { title: '3D Eksterior' },
  { title: 'Perhitungan Struktur' },
  { title: 'Animasi Video' },
  { title: 'Katalog Desain 3D' },
  { title: 'Hasil Cetak Print Out A3 Berwarna' },
  { title: 'Soft File Dokumen Perencanaan' },
]

export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  { title: 'Kontraktor Villa & Rumah', description: 'Desain dan pembangunan villa tropis, rumah pribadi, dan hunian modern di Bali dari konsep hingga serah terima kunci.' },
  { title: 'Custom Interior Design', description: 'Perancangan interior custom untuk hunian, villa, dan commercial space — dari mood board, 3D rendering, hingga eksekusi.' },
  { title: 'Desain & Build Café & Restaurant', description: 'Membangun café, restaurant, dan commercial space dengan konsep unik yang menarik pelanggan.' },
  { title: 'Custom Furniture Production', description: 'Workshop kami memproduksi furniture custom — kabinet, meja, kursi, door, hingga built-in storage dengan kualitas presisi.' },
]

export interface Testimonial {
  name: string
  role: string
  text: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Komang Ayu',
    role: 'Pemilik Villa — Ketewel',
    text: 'Damar DAC membangun villa kami dengan detail yang luar biasa. Setiap sudut punya cerita dan kualitasnya premium. Tim sangat profesional dari awal hingga serah terima.',
    image: 'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Lee Hyengchul',
    role: 'Pemilik Hasamdong Café — Ubud',
    text: 'Café kami yang dibangun Damar DAC langsung ramai pelanggan karena interiornya yang Instagramable. Pengerjaan tepat waktu dan sesuai desain 3D yang dikirim.',
    image: '1212112.jpg',
  },
  {
    name: 'Mr.Andrew',
    role: 'Pemilik Rumah — Kerobokan',
    text: 'Saya sangat puas dengan custom furniture dari workshop Damar DAC. Kualitas material dan finishingnya premium. Komunikasi sepanjang proyek sangat jelas.',
    image: 'WhatsApp_Image_2026-10-20_at_11.32.40.jpeg',
  },
  {
    name: 'Kadek Wirawan',
    role: 'Investor Property — Seminyak',
    text: 'Sudah tiga proyek villa saya serahkan ke Damar DAC. Hasilnya selalu memuaskan, nilai jual properti meningkat, dan garansi after-sales benar-benar ditepati.',
    image: 'https://images.pexels.com/photos/34081654/pexels-photo-34081654.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
]

export const stats = [
  { number: '5+', label: 'Tahun Pengalaman' },
  { number: '200+', label: 'Proyek Selesai' },
  { number: '8.6K+', label: 'Pengikut Instagram' },
  { number: '100%', label: 'Kepuasan Klien' },
]
