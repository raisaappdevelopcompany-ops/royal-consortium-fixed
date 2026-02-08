'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/lib/mock-data';
import { Shield, Truck, Headset, RotateCcw, ChevronRight, Sparkles, Zap, Star, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function HomePage() {
  const { t } = useLanguage();
  const featuredProducts = products.filter((p) => p.is_featured).slice(0, 6);
  const bestSellers = products.sort((a, b) => b.sales_count - a.sales_count).slice(0, 8);
  const newArrivals = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Neon Glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
                <Badge className="w-fit bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Welcome to RC AUTOCORE BD
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-balance">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    Premium Motorcycle
                  </span>
                  <br />
                  <span className="text-foreground">Accessories</span>
                  <br />
                  <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl">in Bangladesh</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                  Discover top-quality helmets, parts, riding gear, and accessories trusted by{' '}
                  <span className="text-primary font-semibold">thousands of riders</span> across Bangladesh. 
                  Genuine products, best prices, fast delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/30 text-lg h-14 px-8" asChild>
                    <Link href="#featured">
                      <Zap className="h-5 w-5 mr-2" />
                      Shop Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg h-14 px-8 bg-transparent" asChild>
                    <Link href="/categories">Browse Categories</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      5000+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      44
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Products</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right duration-700">
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
                  <div className="text-[200px] font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent opacity-20">
                    RC
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-primary/20">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                        <Award className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Premium Quality</div>
                        <div className="text-sm text-muted-foreground">100% Authentic Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features with Neon Accents */}
        <section className="py-12 border-y bg-card/50 backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-primary/5 transition-colors group">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">On orders over ৳2000</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-accent/5 transition-colors group">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">100% Genuine</h3>
                  <p className="text-sm text-muted-foreground">Authentic products only</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-primary/5 transition-colors group">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <RotateCcw className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">7 days return policy</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-accent/5 transition-colors group">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                  <Headset className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Shop by Category
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Explore Our Collections
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find everything you need for your motorcycle in our carefully curated categories
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categories.slice(0, 7).map((category, index) => (
                <Link key={category.id} href={`/category/${category.slug}`}>
                  <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-300"></div>
                    <CardContent className="p-6 text-center relative">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl font-bold text-primary group-hover:scale-110 transition-transform shadow-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{category.name_bn}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {category.description}
                      </p>
                      <ChevronRight className="h-5 w-5 mx-auto mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured" className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured Products
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Top Picks for You
                  </span>
                </h2>
              </div>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent" asChild>
                <Link href="/products">
                  View All
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-accent to-primary text-accent-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Best Sellers
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Most Popular Products
                  </span>
                </h2>
                <p className="text-muted-foreground mt-2">Loved by thousands of bikers in Bangladesh</p>
              </div>
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10 bg-transparent" asChild>
                <Link href="/products">
                  View All
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter/CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Zap className="h-12 w-12" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Upgrade Your Ride?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-pretty">
                Join thousands of satisfied bikers who trust RC AUTOCORE BD for their motorcycle needs. 
                Get exclusive deals and latest updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl h-14" asChild>
                  <Link href="/products">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Shopping
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-14 bg-transparent" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">5K+</div>
                  <div className="text-sm text-primary-foreground/80">Orders Delivered</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">4.8★</div>
                  <div className="text-sm text-primary-foreground/80">Customer Rating</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-primary-foreground/80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
