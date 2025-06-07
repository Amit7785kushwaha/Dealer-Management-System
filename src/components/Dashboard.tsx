
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardProps {
  setActiveService: (service: string) => void;
}

const Dashboard = ({ setActiveService }: DashboardProps) => {
  const stats = [
    { title: 'Total Dealers', value: '127', icon: Building2, color: 'text-blue-600', change: '+12%' },
    { title: 'Inventory Items', value: '2,841', icon: Package, color: 'text-green-600', change: '+8%' },
    { title: 'Active Orders', value: '89', icon: ShoppingCart, color: 'text-orange-600', change: '+23%' },
    { title: 'Customers', value: '1,456', icon: Users, color: 'text-purple-600', change: '+15%' },
  ];

  const services = [
    {
      id: 'dealers',
      title: 'Dealer Management',
      description: 'Manage dealer profiles, registration, and dealer network',
      icon: Building2,
      color: 'bg-blue-500',
    },
    {
      id: 'inventory',
      title: 'Inventory Service',
      description: 'Track products, stock levels, and inventory management',
      icon: Package,
      color: 'bg-green-500',
    },
    {
      id: 'orders',
      title: 'Order Management',
      description: 'Process orders, track deliveries, and manage transactions',
      icon: ShoppingCart,
      color: 'bg-orange-500',
    },
    {
      id: 'customers',
      title: 'Customer Service',
      description: 'Manage customer relationships and support interactions',
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dealer Management System</h1>
        <p className="text-gray-600 mt-2">Microservices-based dealer management platform</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>{stat.change} from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Microservices Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Microservices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${service.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => setActiveService(service.id)}
                    className="w-full group-hover:bg-primary/90 transition-colors"
                  >
                    Access Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" onClick={() => setActiveService('dealers')}>
              Add New Dealer
            </Button>
            <Button variant="outline" onClick={() => setActiveService('orders')}>
              Process Orders
            </Button>
            <Button variant="outline" onClick={() => setActiveService('analytics')}>
              View Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
