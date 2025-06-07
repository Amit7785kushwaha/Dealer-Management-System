
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  UserCheck, 
  BarChart3,
  Building2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeService: string;
  setActiveService: (service: string) => void;
}

const Sidebar = ({ activeService, setActiveService }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'dealers', label: 'Dealer Management', icon: Building2 },
    { id: 'inventory', label: 'Inventory Service', icon: Package },
    { id: 'orders', label: 'Order Management', icon: ShoppingCart },
    { id: 'customers', label: 'Customer Service', icon: UserCheck },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">DealerMS</h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">Microservices Architecture</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveService(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors",
                activeService === item.id
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
