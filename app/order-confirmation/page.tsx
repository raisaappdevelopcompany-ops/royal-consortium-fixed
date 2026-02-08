'use client';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || 'N/A';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <div className="h-24 w-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>

            {/* Success Message */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
              <p className="text-lg text-muted-foreground">
                Thank you for your order. We&apos;ll send you a confirmation shortly.
              </p>
            </div>

            {/* Order Number */}
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Order Number</div>
                <div className="text-2xl font-bold text-primary">{orderNumber}</div>
              </CardContent>
            </Card>

            {/* Order Steps */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Order Confirmation</div>
                      <div className="text-sm text-muted-foreground">
                        You&apos;ll receive a confirmation email with your order details
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Order Processing</div>
                      <div className="text-sm text-muted-foreground">
                        We&apos;re preparing your order for shipment
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Truck className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Delivery</div>
                      <div className="text-sm text-muted-foreground">
                        Your order will be delivered within 3-5 business days
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <Button size="lg" asChild>
                <Link href="/account/orders">
                  View Order Details
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="mt-8">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Need help with your order?{' '}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    Contact Us
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Call: <a href="tel:01612825273" className="text-primary hover:underline">01612-825273</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
