'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import {
  CheckCircle2,
  Zap,
  Users,
  Award,
  ShoppingCart,
  Truck,
  Lock,
  Star,
} from 'lucide-react';

export default function MarketingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <span className="text-sm font-semibold">{t('landing.subtitle')}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t('landing.title')}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('home.heroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    {t('landing.getStarted')}
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    {t('home.why')}
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">{t('landing.testimonials')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Brands</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <ShoppingCart className="h-32 w-32 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Premium Motorcycle Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background/50 backdrop-blur-sm border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('home.why')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বাংলাদেশের সেরা মোটরসাইকেল আনুষাঙ্গিক অনলাইন স্টোর
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
              <div className="relative">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('landing.feature1')}</h3>
                <p className="text-sm text-muted-foreground">{t('landing.feature1Desc')}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
              <div className="relative">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('landing.feature2')}</h3>
                <p className="text-sm text-muted-foreground">{t('landing.feature2Desc')}</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
              <div className="relative">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('landing.feature3')}</h3>
                <p className="text-sm text-muted-foreground">{t('landing.feature3Desc')}</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
              <div className="relative">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('landing.feature4')}</h3>
                <p className="text-sm text-muted-foreground">{t('landing.feature4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">{t('landing.testimonials')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'রহিম খান',
                role: 'Dhaka Rider',
                content: 'অসাধারণ গুণমান এবং দ্রুত ডেলিভারি। সবসময় RC AUTOCORE BD থেকেই কিনি।',
                rating: 5,
              },
              {
                name: 'সালমান আহমেদ',
                role: 'Chittagong Rider',
                content: 'সেরা ব্র্যান্ড এবং প্রতিযোগিতামূলক দাম। খুবই সন্তুষ্ট!',
                rating: 5,
              },
              {
                name: 'আবদুল করিম',
                role: 'Sylhet Rider',
                content: 'আন্তর্জাতিক মানের পণ্য এবং চমৎকার সেবা। সবাইকে সুপারিশ করি।',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('landing.joinCommunity')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                সারাদেশের হাজার হাজার সন্তুষ্ট রাইডারদের সাথে যোগ দিন এবং আপনার রাইডিং অভিজ্ঞতা উন্নত করুন।
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">বিশেষ অফার</h4>
                    <p className="text-muted-foreground">নতুন গ্রাহকদের জন্য ২০% পর্যন্ত ছাড়</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">নিরাপদ পেমেন্ট</h4>
                    <p className="text-muted-foreground">bKash, Nagad এবং COD সুবিধা সহ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">ঝুঁকিমুক্ত রিটার্ন</h4>
                    <p className="text-muted-foreground">৭ দিনের মানি-ব্যাক গ্যারান্টি</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-2xl font-bold mb-2">{t('landing.newsletter')}</h3>
                <p className="text-muted-foreground mb-6">{t('landing.newsletterDesc')}</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full gap-2">
                    {t('landing.subscribe')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">আজই কেনাকাটা শুরু করুন</h2>
          <p className="text-lg text-muted-foreground mb-8">
            বাংলাদেশের সেরা মোটরসাইকেল আনুষাঙ্গিক পান সাশ্রয়ী মূল্যে
          </p>
          <Link href="/shop">
            <Button size="lg" className="gap-2">
              <ShoppingCart className="h-5 w-5" />
              এখনই কিনুন
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
