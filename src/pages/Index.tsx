
import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import DealerService from '../components/services/DealerService';
import InventoryService from '../components/services/InventoryService';
import OrderService from '../components/services/OrderService';
import CustomerService from '../components/services/CustomerService';
import AnalyticsService from '../components/services/AnalyticsService';

const Index = () => {
  const [activeService, setActiveService] = useState('dashboard');

  const renderActiveService = () => {
    switch (activeService) {
      case 'dashboard':
        return <Dashboard setActiveService={setActiveService} />;
      case 'dealers':
        return <DealerService />;
      case 'inventory':
        return <InventoryService />;
      case 'orders':
        return <OrderService />;
      case 'customers':
        return <CustomerService />;
      case 'analytics':
        return <AnalyticsService />;
      default:
        return <Dashboard setActiveService={setActiveService} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeService={activeService} setActiveService={setActiveService} />
      <main className="flex-1 p-6">
        {renderActiveService()}
      </main>
    </div>
  );
};

export default Index;
