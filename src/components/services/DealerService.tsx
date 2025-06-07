
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  MapPin, 
  Phone, 
  Mail,
  Building2,
  Edit,
  Trash2
} from 'lucide-react';

const DealerService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const dealers = [
    {
      id: 1,
      name: 'TechZone Electronics',
      location: 'Delhi, India',
      phone: '+91 11 2345-6789',
      email: 'contact@techzone.com',
      status: 'active',
      joinDate: '2023-01-15',
      totalOrders: 156
    },
    {
      id: 2,
      name: 'Digital Solutions Hub',
      location: 'Hyderabad, India',
      phone: '+91 40 2345-6789',
      email: 'info@digitalhub.com',
      status: 'active',
      joinDate: '2023-03-22',
      totalOrders: 89
    },
    {
      id: 3,
      name: 'Metro Electronics',
      location: 'Kochi, India',
      phone: '+91 484 234-5678',
      email: 'sales@metroelec.com',
      status: 'pending',
      joinDate: '2024-01-10',
      totalOrders: 23
    },
    {
      id: 4,
      name: 'Smart Tech Solutions',
      location: 'Chandigarh, India',
      phone: '+91 172 234-5678',
      email: 'info@smarttech.com',
      status: 'active',
      joinDate: '2023-08-12',
      totalOrders: 67
    },
    {
      id: 5,
      name: 'Digital Innovation Center',
      location: 'Lucknow, India',
      phone: '+91 522 234-5678',
      email: 'contact@digitalinnovation.com',
      status: 'active',
      joinDate: '2023-11-05',
      totalOrders: 45
    }
  ];

  const filteredDealers = dealers.filter(dealer =>
    dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dealer Management</h1>
          <p className="text-gray-600 mt-2">Manage your dealer network and partnerships</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add New Dealer</span>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search dealers..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Dealers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDealers.map((dealer) => (
          <Card key={dealer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{dealer.name}</CardTitle>
                    <Badge 
                      variant={dealer.status === 'active' ? 'default' : 'secondary'}
                      className="mt-1"
                    >
                      {dealer.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{dealer.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{dealer.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{dealer.email}</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Orders:</span>
                    <span className="font-semibold">{dealer.totalOrders}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-600">Join Date:</span>
                    <span className="font-semibold">{dealer.joinDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealerService;
