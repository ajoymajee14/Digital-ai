import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Sparkles, CheckCircle2, ArrowLeft, Lock } from 'lucide-react';
import { mockCoupons } from '../data/mockData';

interface CheckoutViewProps {
  itemTitle: string;
  itemPrice: number;
  setCurrentView: (v: string) => void;
  onPaymentSuccess: () => void;
}

export function CheckoutView({ itemTitle, itemPrice, setCurrentView, onPaymentSuccess }: CheckoutViewProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Net Banking'>('UPI');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockCoupons.find(c => c.code.toLowerCase() === couponCode.trim().toLowerCase() && c.isActive);
    if (found) {
      if (found.discountPercentage > 0) {
        setAppliedDiscount((itemPrice * found.discountPercentage) / 100);
      } else {
        setAppliedDiscount(found.fixedDiscount);
      }
      alert(`Coupon "${found.code}" applied successfully!`);
    } else {
      alert('Invalid or expired coupon code.');
    }
  };

  const finalAmount = Math.max(0, itemPrice - appliedDiscount);

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onPaymentSuccess();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#0D1321] border border-emerald-500/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Payment Successful!</h2>
          <p className="text-xs text-slate-300">Welcome to Digital AI Class! Your order has been securely verified and access is now fully unlocked.</p>
          
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
          >
            Go To My Dashboard →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <button 
          onClick={() => setCurrentView('pricing')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Secure Checkout
          </span>
          <h1 className="text-3xl font-extrabold text-white">Complete Your Order</h1>
          <p className="text-xs text-slate-400">Encrypted 256-bit SSL secure payment gateway</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Order Summary */}
          <div className="lg:col-span-5 bg-[#0D1321] border border-white/10 rounded-3xl p-6 space-y-6 shadow-xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Order Summary</h3>
            
            <div className="space-y-3 pb-6 border-b border-white/10 text-sm">
              <div className="flex justify-between font-semibold text-white">
                <span>{itemTitle}</span>
                <span>₹{itemPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-400">Lifetime access with future updates & verified certificate.</p>
            </div>

            {/* Coupon Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Promo code (e.g. AIFUTURE20)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 bg-[#070B14] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none"
              />
              <button type="submit" className="bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-xl text-xs font-semibold">
                Apply
              </button>
            </form>

            {appliedDiscount > 0 && (
              <div className="flex justify-between text-xs text-emerald-400 font-semibold bg-emerald-500/10 p-3 rounded-xl">
                <span>Discount Applied:</span>
                <span>-₹{appliedDiscount.toLocaleString()}</span>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-lg font-extrabold text-white">
              <span>Total Amount:</span>
              <span className="text-cyan-400">₹{finalAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Right: Payment Method & Form */}
          <div className="lg:col-span-7 bg-[#0D1321] border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Select Payment Method</h3>

            <div className="grid grid-cols-3 gap-3">
              <button 
                type="button"
                onClick={() => setPaymentMethod('UPI')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold transition-all ${paymentMethod === 'UPI' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-[#070B14] border-white/10 text-slate-400'}`}
              >
                ⚡ UPI / QR
              </button>
              <button 
                type="button"
                onClick={() => setPaymentMethod('Card')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold transition-all ${paymentMethod === 'Card' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-[#070B14] border-white/10 text-slate-400'}`}
              >
                💳 Credit / Debit Card
              </button>
              <button 
                type="button"
                onClick={() => setPaymentMethod('Net Banking')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold transition-all ${paymentMethod === 'Net Banking' ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-[#070B14] border-white/10 text-slate-400'}`}
              >
                🏦 Net Banking
              </button>
            </div>

            <form onSubmit={handleProcessPayment} className="space-y-4 pt-2">
              {paymentMethod === 'UPI' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">UPI ID / VPA</label>
                  <input 
                    type="text" 
                    required
                    placeholder="username@okhdfcbank"
                    className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              )}

              {paymentMethod === 'Card' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Card Number</label>
                    <input 
                      type="text" 
                      required
                      placeholder="4433 2211 5566 7788"
                      className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Expiry Date</label>
                      <input type="text" required placeholder="MM/YY" className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">CVV</label>
                      <input type="password" required placeholder="123" className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'Net Banking' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Select Bank</label>
                  <select className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isProcessing ? (
                  <span>Processing secure payment...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Pay ₹{finalAmount.toLocaleString()} Now
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Razorpay & Stripe secure tokenized processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
