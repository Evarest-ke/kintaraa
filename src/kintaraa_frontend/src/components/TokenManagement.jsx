import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { AuthService } from '../services/authService';

const TokenManagement = () => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTokenData();
  }, []);

  const loadTokenData = async () => {
    try {
      if (!AuthService.isAuthenticated()) {
        throw new Error('User not authenticated');
      }
      
      const principal = await AuthService.getPrincipal();
      const [balanceData, txHistory] = await Promise.all([
        api.getTokenBalance(principal),
        api.getTransactionHistory(principal)
      ]);
      console.log("====balanceData====: ", balanceData.Ok);
      console.log("====txHistory====: ", txHistory);
      setBalance(balanceData.Ok);
      setTransactions(txHistory);
    } catch (error) {
      console.error('Error loading token data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '-';
    const milliseconds = Number(timestamp) / 1_000_000;
    return new Date(milliseconds).toLocaleString();
  };

  const formatBigInt = (value) => {
    return value ? Number(value).toString() : '0';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Token Balance Card */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg opacity-90">Available Balance</h3>
            <p className="text-3xl font-bold">{formatBigInt(balance?.balance)} KINT</p>
            <p className="text-sm opacity-70">Last Updated: {formatTimestamp(balance?.last_updated)}</p>
          </div>
          <div className="text-right">
            <p className="opacity-90">Total Earned: {formatBigInt(balance?.total_earned)}</p>
            <p className="opacity-90">Total Spent: {formatBigInt(balance?.total_spent)}</p>
          </div>
        </div>
      </div>

      {/* Ways to Earn */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Ways to Earn KINT</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-medium">Daily Engagement</h4>
            <p className="text-sm text-gray-600">10 KINT daily for active participation</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-medium">Report Submission</h4>
            <p className="text-sm text-gray-600">50 KINT per verified report</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-medium">Community Posts</h4>
            <p className="text-sm text-gray-600">5 KINT per helpful community post</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={Number(tx.id)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatTimestamp(tx.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tx.description}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    Number(tx.amount) > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {Number(tx.amount) > 0 ? '+' : ''}{formatBigInt(tx.amount)} KINT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Array.isArray(tx.service_type) && tx.service_type.length > 0 ? tx.service_type.join(', ') : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TokenManagement;