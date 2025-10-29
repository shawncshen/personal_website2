'use client'

export default function Navigation() {
  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Work Experiences', href: '#work' },
    { label: 'My Social Media Journey', href: '#social' },
    { label: 'Friends & Family', href: '#friends' },
    { label: 'Expand My Journey', href: '#expand' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-base md:text-lg text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
