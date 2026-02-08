'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/rc-autocore-logo.jpg" 
                alt="RC AUTOCORE BD" 
                width={40} 
                height={40} 
                className="rounded-lg"
              />
              <div>
                <div className="font-bold text-lg leading-none">RC AUTOCORE BD</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.returns')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-muted-foreground hover:text-primary">
                  {t('nav.home')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.policies')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t('footer.returns')}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary">
                  {t('nav.shop')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">01612-825273</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground break-all">raisaappdevelopcompany@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </li>
            </ul>

            <h4 className="font-semibold mb-2 text-sm">{t('landing.newsletter')}</h4>
            <p className="text-xs text-muted-foreground mb-2">{t('landing.newsletterDesc')}</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 text-sm">পেমেন্ট পদ্ধতি</h4>
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">bKash</div>
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Nagad</div>
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Rocket</div>
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Cash on Delivery</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2 text-sm">ডেলিভারি পার্টনার</h4>
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Sundarban</div>
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Pathao</div>
                <div className="px-3 py-1.5 bg-background border rounded text-xs font-medium">Redx</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RC AUTOCORE BD. {t('footer.copyright')}. Developed by Raisa App Develop Company</p>
        </div>
      </div>
    </footer>
  );
}
