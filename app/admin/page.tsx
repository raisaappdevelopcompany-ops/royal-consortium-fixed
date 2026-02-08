'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  Package2,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Eye,
  Star,
  AlertTriangle,
  Truck,
  MapPin,
  Phone,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

// Enhanced mock data
const stats = {
  totalOrders: 1247,
  pendingOrders: 23,
  totalRevenue: 2547000,
  totalCustomers: 892,
  todayOrders: 15,
  todayRevenue: 45000,
  monthlyGrowth: 12.5,
  activeProducts: 485,
  lowStockItems: 15,
  avgOrderValue: 3850,
};

const recentOrders = [
  {
    id: '1',
    order_number: 'RC1234567890',
    customer: 'Karim Rahman',
    phone: '01712345678',
    location: 'Dhaka, Mirpur',
    total: 8500,
    status: 'pending',
    date: '2024-01-23 10:30 AM',
    items: 3,
  },
  {
    id: '2',
    order_number: 'RC1234567891',
    customer: 'Rahim Ahmed',
    phone: '01812345678',
    location: 'Chittagong, Agrabad',
    total: 4500,
    status: 'processing',
    date: '2024-01-23 09:15 AM',
    items: 2,
  },
  {
    id: '3',
    order_number: 'RC1234567892',
    customer: 'Fatima Begum',
    phone: '01912345678',
    location: 'Dhaka, Dhanmondi',
    total: 12000,
    status: 'shipped',
    date: '2024-01-22 04:20 PM',
    items: 5,
  },
  {
    id: '4',
    order_number: 'RC1234567893',
    customer: 'Hassan Ali',
    phone: '01612345678',
    location: 'Sylhet, Zindabazar',
    total: 6500,
    status: 'delivered',
    date: '2024-01-22 02:10 PM',
    items: 1,
  },
  {
    id: '5',
    order_number: 'RC1234567894',
    customer: 'Nusrat Jahan',
    phone: '01512345678',
    location: 'Dhaka, Uttara',
    total: 9800,
    status: 'processing',
    date: '2024-01-23 11:45 AM',
    items: 4,
  },
];

const lowStockProducts = [
  { 
    id: '1', 
    name: 'LS2 FF320 Full Face Helmet', 
    stock: 5, 
    sku: 'LS2-FF320-BLK',
    price: 7500,
    sales: 89,
  },
  { 
    id: '2', 
    name: 'Racing Exhaust Pipe', 
    stock: 3, 
    sku: 'EXH-RAC-SS',
    price: 3800,
    sales: 67,
  },
  { 
    id: '3', 
    name: 'Riding Gloves Pro', 
    stock: 8, 
    sku: 'GLV-PRO-BLK-L',
    price: 1200,
    sales: 92,
  },
  { 
    id: '4', 
    name: 'GPS Navigator Motorcycle', 
    stock: 8, 
    sku: 'GPS-MOTO-5',
    price: 13999,
    sales: 34,
  },
];

const topProducts = [
  { name: 'Mobile Phone Holder', sales: 298, revenue: 104300, trend: '+23%' },
  { name: 'LED Headlight Bulb H4', sales: 234, revenue: 233766, trend: '+18%' },
  { name: 'Shell Advance AX7 10W40', sales: 289, revenue: 245650, trend: '+15%' },
  { name: 'Balaclava Face Mask', sales: 312, revenue: 109200, trend: '+28%' },
  { name: 'Chain Lubricant Spray', sales: 234, revenue: 128700, trend: '+12%' },
];

const courierStats = [
  { name: 'Sundarban Courier', orders: 450, pending: 23, delivered: 420, rating: 4.5 },
  { name: 'Pathao', orders: 380, pending: 15, delivered: 360, rating: 4.7 },
  { name: 'Redx', orders: 290, pending: 12, delivered: 275, rating: 4.6 },
  { name: 'SA Paribahan', orders: 127, pending: 8, delivered: 115, rating: 4.3 },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'delivered':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'shipped':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'processing':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
    case 'pending':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
    case 'cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Admin Header with Neon Accent */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-primary/20 sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                RC
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <div className="font-bold text-lg leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Admin Dashboard
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">RC AUTOCORE BD</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent" asChild>
                <Link href="/">
                  <Eye className="h-4 w-4 mr-2" />
                  View Store
                </Link>
              </Button>
              <Button variant="ghost" className="text-muted-foreground">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              Dashboard Overview
            </h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Today: {new Date().toLocaleDateString('en-BD', { dateStyle: 'full' })}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-primary/30 bg-transparent">
              <BarChart3 className="h-4 w-4 mr-2" />
              Reports
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/30">
              Export Data
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Grid with Neon Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <DollarSign className="h-5 w-5 text-primary-foreground" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-foreground">৳{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+৳{stats.todayRevenue.toLocaleString()}</span> 
                <span className="ml-1">today</span>
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                Avg Order: ৳{stats.avgOrderValue.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-accent/20 bg-gradient-to-br from-card to-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Orders
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/30">
                <ShoppingCart className="h-5 w-5 text-accent-foreground" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-foreground">{stats.totalOrders}</div>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+{stats.todayOrders}</span>
                <span className="ml-1">new today</span>
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                Growth: +{stats.monthlyGrowth}% this month
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-orange-500/20 bg-gradient-to-br from-card to-orange-500/5 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Orders
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-foreground">{stats.pendingOrders}</div>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Requires immediate attention
              </p>
              <Button size="sm" variant="outline" className="mt-3 w-full border-orange-500/30 hover:bg-orange-500/10 bg-transparent">
                Process Now
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-secondary/5 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Customers
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg shadow-secondary/30">
                <Users className="h-5 w-5 text-secondary-foreground" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-foreground">{stats.totalCustomers}</div>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+24</span>
                <span className="ml-1">this month</span>
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                Registered users
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-card/50 backdrop-blur border border-primary/10">
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Recent Orders
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Products
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Top Products
            </TabsTrigger>
            <TabsTrigger value="courier" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Courier Management
            </TabsTrigger>
          </TabsList>

          {/* Recent Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader className="border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    Recent Orders
                  </CardTitle>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                    <Link href="/admin/orders">View All Orders</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {recentOrders.map((order, index) => (
                    <div
                      key={order.id}
                      className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary">
                          #{index + 1}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="font-semibold text-lg">{order.order_number}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Users className="h-3 w-3" />
                            {order.customer}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {order.phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {order.location}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" />
                            {order.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 lg:justify-end">
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">Items</div>
                          <Badge variant="outline" className="border-primary/30">{order.items}</Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">Status</div>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-right min-w-[100px]">
                          <div className="text-xs text-muted-foreground mb-1">Amount</div>
                          <div className="font-bold text-lg text-primary">৳{order.total.toLocaleString()}</div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alert */}
            <Card className="border-orange-500/30 bg-gradient-to-br from-card to-orange-500/5">
              <CardHeader className="border-b border-orange-500/20">
                <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <AlertTriangle className="h-5 w-5" />
                  Low Stock Alert - Immediate Action Required
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-orange-500/20">
                  {lowStockProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 hover:bg-orange-500/10 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">{product.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-4">
                          <span>SKU: {product.sku}</span>
                          <span className="text-primary">৳{product.price.toLocaleString()}</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                            {product.sales} sold
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">Stock</div>
                          <Badge variant="destructive" className="text-base px-3 py-1 animate-pulse">
                            {product.stock} left
                          </Badge>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90">
                          Restock Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader className="border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Product Management
                  </CardTitle>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                    <Link href="/admin/products/new">
                      <Package2 className="h-4 w-4 mr-2" />
                      Add New Product
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                        <Package className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold mb-1">44</div>
                      <div className="text-sm text-muted-foreground">Total Products</div>
                    </CardContent>
                  </Card>
                  <Card className="border-emerald-500/20 bg-gradient-to-br from-card to-emerald-500/5">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stats.activeProducts}</div>
                      <div className="text-sm text-muted-foreground">In Stock</div>
                    </CardContent>
                  </Card>
                  <Card className="border-red-500/20 bg-gradient-to-br from-card to-red-500/5">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
                        <XCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stats.lowStockItems}</div>
                      <div className="text-sm text-muted-foreground">Low Stock</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="border-primary/30 bg-transparent hover:bg-primary/10 h-12" asChild>
                    <Link href="/admin/products">
                      <Package className="h-4 w-4 mr-2" />
                      Manage Products
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-primary/30 bg-transparent hover:bg-primary/10 h-12" asChild>
                    <Link href="/admin/categories">
                      <Package2 className="h-4 w-4 mr-2" />
                      Manage Categories
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Products Tab */}
          <TabsContent value="customers">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader className="border-b border-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Top Selling Products
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-xl text-primary">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{product.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1">
                              <ShoppingCart className="h-3 w-3" />
                              {product.sales} sales
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              ৳{product.revenue.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-base px-3 py-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {product.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courier Management Tab */}
          <TabsContent value="courier">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader className="border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Courier Service Management
                  </CardTitle>
                  <Button variant="outline" className="border-primary/30 bg-transparent">
                    <Package2 className="h-4 w-4 mr-2" />
                    Assign Courier
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {courierStats.map((courier, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <Truck className="h-7 w-7 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-xl">{courier.name}</div>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(courier.rating)
                                      ? 'text-amber-500 fill-amber-500'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">
                                {courier.rating} rating
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-primary/30 bg-transparent">
                          View Details
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 rounded-lg bg-primary/5">
                          <div className="text-2xl font-bold text-primary">{courier.orders}</div>
                          <div className="text-xs text-muted-foreground mt-1">Total Orders</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-orange-500/10">
                          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{courier.pending}</div>
                          <div className="text-xs text-muted-foreground mt-1">Pending</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-emerald-500/10">
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{courier.delivered}</div>
                          <div className="text-xs text-muted-foreground mt-1">Delivered</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
