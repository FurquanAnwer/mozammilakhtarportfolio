import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Publications", href: "/publications" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Email", href: "mailto:sarah.chen@university.edu", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Dr. Sarah Chen</h3>
            <p className="text-sm text-muted-foreground">
              Researcher, educator, and environmental advocate dedicated to creating sustainable solutions for our
              planet.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Sarah Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
