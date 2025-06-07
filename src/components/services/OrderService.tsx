
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Search, 
  Plus,
  Eye,
  Truck,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const OrderService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const orders = [
    {
      id: 'ORD-001',
      dealer: 'TechZone Electronics',
      customer: 'John Smith',
      items: 3,
      total: 299.97,
      status: 'processing',
      date: '2024-01-15',
      deliveryDate: '2024-01-20'
    },
    {
      id: 'ORD-002',
      dealer: 'Digital Solutions Hub',
      customer: 'Sarah Johnson',
      items: 1,
      total: 89.99,
      status: 'shipped',
      date: '2024-01-14',
      deliveryDate: '2024-01-18'
    },
    {
      id: 'ORD-003',
      dealer: 'Metro Electronics',
      customer: 'Mike Davis',
      items: 2,
      total: 124.98,
      status: 'delivered',
      date: '2024-01-13',
      deliveryDate: '2024-01-17'
    },
    {
      id: 'ORD-004',
      dealer: 'TechZone Electronics',
      customer: 'Emily Wilson',
      items: 5,
      total: 449.95,
      status: 'pending',
      date: '2024-01-16',
      deliveryDate: '2024-01-22'
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.dealer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>Pending</span>
          </Badge>
        );
      case 'processing':
        return (
          <Badge variant="default" className="flex items-center space-x-1 bg-blue-500">
            <ShoppingCart className="h-3 w-3" />
            <span>Processing</span>
          </Badge>
        );
      case 'shipped':
        return (
          <Badge variant="default" className="flex items-center space-x-1 bg-orange-500">
            <Truck className="h-3 w-3" />
            <span>Shipped</span>
          </Badge>
        );
      case 'delivered':
        return (
          <Badge variant="default" className="flex items-center space-x-1 bg-green-500">
            <CheckCircle className="h-3 w-3" />
            <span>Delivered</span>
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge variant="destructive" className="flex items-center space-x-1">
            <XCircle className="h-3 w-3" />
            <span>Cancelled</span>
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const stats = [
    { title: 'Total Orders', value: '1,247', status: 'all' },
    { title: 'Pending', value: '23', status: 'pending' },
    { title: 'Processing', value: '45', status: 'processing' },
    { title: 'Shipped', value: '89', status: 'shipped' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600 mt-2">Track and manage all dealer orders</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Order</span>
        </Button>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search orders..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Manage and track all dealer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Order ID</th>
                  <th className="text-left p-2 font-semibold">Dealer</th>
                  <th className="text-left p-2 font-semibold">Customer</th>
                  <th className="text-left p-2 font-semibold">Items</th>
                  <th className="text-left p-2 font-semibold">Total</th>
                  <th className="text-left p-2 font-semibold">Status</th>
                  <th className="text-left p-2 font-semibold">Order Date</th>
                  <th className="text-left p-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium text-blue-600">{order.id}</td>
                    <td className="p-2">{order.dealer}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2 text-gray-600">{order.items} items</td>
                    <td className="p-2 font-semibold">${order.total}</td>
                    <td className="p-2">{getStatusBadge(order.status)}</td>
                    <td className="p-2 text-gray-600">{order.date}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderService;
