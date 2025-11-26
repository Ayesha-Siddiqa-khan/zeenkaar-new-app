import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

function Footer() {
  const socials = [
    { href: 'https://instagram.com', Icon: FaInstagram, label: 'Instagram', className: 'text-[#e1306c]' },
    { href: 'https://facebook.com', Icon: FaFacebookF, label: 'Facebook', className: 'text-[#1877f2]' },
    { href: 'https://twitter.com', Icon: FaTwitter, label: 'Twitter', className: 'text-[#1da1f2]' },
    { href: 'https://tiktok.com', Icon: SiTiktok, label: 'TikTok', className: 'text-[#111111]' },
    { href: 'https://youtube.com', Icon: FaYoutube, label: 'YouTube', className: 'text-[#ff0000]' },
    { href: 'https://pinterest.com', Icon: FaPinterestP, label: 'Pinterest', className: 'text-[#e60023]' },
  ]

  return (
    <footer className="mt-12 bg-gradient-to-r from-[#1c1038] via-[#2b1f4f] to-[#f6d8e8] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div className="space-y-3">
          <p className="text-2xl font-bold tracking-tight text-white">Zeenkaar</p>
          <p className="text-sm text-white/80">
            Minimal, modern fashion inspired by premium houses—soft blush tones, tailored fits, effortless elegance.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 pl-4 text-sm text-white/80 list-disc">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
            Follow
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {socials.map(({ href, Icon, label, className }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
              >
                <Icon size={18} className={className} />
              </a>
            ))}
          </div>
          <p className="mt-3 text-sm text-white/80">Follow Zeenkaar on social media</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
