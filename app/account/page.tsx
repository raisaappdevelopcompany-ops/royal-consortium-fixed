'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Package, MapPin, Heart, Settings, LogOut, Package2 } from 'lucide-react';
import Link from 'next/link';

// Mock user data
const mockUser = {
  name: 'Guest User',
  email: 'guest@example.com',
  phone: '01612825273',
};

const mockOrders = [
  {
    id: '1',
    order_number: 'RC1234567890',
    date: '2024-01-15',
    status: 'delivered',
    total: 8500,
    items: 2,
  },
  {
    id: '2',
    order_number: 'RC1234567891',
    date: '2024-01-20',
    status: 'shipped',
    total: 4500,
    items: 1,
  },
  {
    id: '3',
    order_number: 'RC1234567892',
    date: '2024-01-22',
    status: 'processing',
    total: 12000,
    items: 3,
  },
];

const mockAddresses = [
  {
    id: '1',
    full_name: 'Guest User',
    phone: '01612825273',
    address: 'House 123, Road 45, Dhanmondi, Dhaka - 1209',
    is_default: true,
  },
  {
    id: '2',
    full_name: 'Guest User',
    phone: '01612825273',
    address: 'Plot 67, Sector 11, Uttara, Dhaka - 1230',
    is_default: false,
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'shipped':
      return 'bg-blue-100 text-blue-800';
    case 'processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="overview">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="orders">
                <Package className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="addresses">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Addresses</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist">
                <Heart className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Name</div>
                      <div className="font-medium">{mockUser.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">{mockUser.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">{mockUser.phone}</div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">Edit Profile</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Package className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Total Orders</div>
                          <div className="text-sm text-muted-foreground">All time</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold">{mockOrders.length}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Package2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold">Completed</div>
                          <div className="text-sm text-muted-foreground">Successfully delivered</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold">
                        {mockOrders.filter((o) => o.status === 'delivered').length}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your last 3 orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                        <div>
                          <div className="font-semibold">{order.order_number}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(order.date).toLocaleDateString()} • {order.items} items
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <div className="text-sm font-semibold mt-1">৳{order.total.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                    <Link href="/account/orders">View All Orders</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>Track and manage your orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <Card key={order.id}>
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="space-y-2">
                              <div>
                                <div className="font-semibold">{order.order_number}</div>
                                <div className="text-sm text-muted-foreground">
                                  Placed on {new Date(order.date).toLocaleDateString()}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {order.items} items
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground">Total</div>
                                <div className="text-lg font-bold">৳{order.total.toLocaleString()}</div>
                              </div>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Saved Addresses</h2>
                  <p className="text-sm text-muted-foreground">Manage your delivery addresses</p>
                </div>
                <Button>Add New Address</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {mockAddresses.map((address) => (
                  <Card key={address.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-semibold">{address.full_name}</div>
                        {address.is_default && (
                          <Badge variant="secondary" className="text-xs">Default</Badge>
                        )}
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>{address.phone}</div>
                        <div>{address.address}</div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">Delete</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-4">
                    Save your favorite items to buy them later
                  </p>
                  <Button asChild>
                    <Link href="/wishlist">Go to Wishlist</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <div className="font-semibold">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">
                        Receive order updates and promotions
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <div className="font-semibold">Change Password</div>
                      <div className="text-sm text-muted-foreground">
                        Update your password regularly
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-semibold text-destructive">Delete Account</div>
                      <div className="text-sm text-muted-foreground">
                        Permanently delete your account
                      </div>
                    </div>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" className="w-full bg-transparent" size="lg">
                <LogOut className="mr-2 h-5 w-5" />
                Log Out
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
