
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Search, 
  Plus,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const InventoryService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const inventory = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      sku: 'WBH-001',
      category: 'Electronics',
      stock: 156,
      minStock: 50,
      price: 89.99,
      status: 'in-stock'
    },
    {
      id: 2,
      name: 'Smart Phone Case',
      sku: 'SPC-002',
      category: 'Accessories',
      stock: 23,
      minStock: 25,
      price: 24.99,
      status: 'low-stock'
    },
    {
      id: 3,
      name: 'USB-C Charging Cable',
      sku: 'UCC-003',
      category: 'Cables',
      stock: 0,
      minStock: 100,
      price: 12.99,
      status: 'out-of-stock'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      sku: 'LS-004',
      category: 'Accessories',
      stock: 89,
      minStock: 30,
      price: 45.99,
      status: 'in-stock'
    }
  ];

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-stock':
        return <Badge variant="default" className="bg-green-500">In Stock</Badge>;
      case 'low-stock':
        return <Badge variant="destructive" className="bg-yellow-500">Low Stock</Badge>;
      case 'out-of-stock':
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const stats = [
    { title: 'Total Items', value: '2,841', icon: Package, trend: 'up' },
    { title: 'Low Stock Alerts', value: '12', icon: AlertTriangle, trend: 'down' },
    { title: 'Out of Stock', value: '3', icon: TrendingDown, trend: 'neutral' },
    { title: 'Total Value', value: '$156,789', icon: TrendingUp, trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-2">Track and manage your product inventory</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add New Item</span>
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search inventory..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
          <CardDescription>Manage your product inventory and stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Product</th>
                  <th className="text-left p-2 font-semibold">SKU</th>
                  <th className="text-left p-2 font-semibold">Category</th>
                  <th className="text-left p-2 font-semibold">Stock</th>
                  <th className="text-left p-2 font-semibold">Price</th>
                  <th className="text-left p-2 font-semibold">Status</th>
                  <th className="text-left p-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded">
                          <Package className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-2 text-gray-600">{item.sku}</td>
                    <td className="p-2 text-gray-600">{item.category}</td>
                    <td className="p-2">
                      <span className={item.stock <= item.minStock ? 'text-red-600 font-semibold' : ''}>
                        {item.stock}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">
                        (min: {item.minStock})
                      </span>
                    </td>
                    <td className="p-2 font-semibold">${item.price}</td>
                    <td className="p-2">{getStatusBadge(item.status)}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">View</Button>
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

export default InventoryService;
