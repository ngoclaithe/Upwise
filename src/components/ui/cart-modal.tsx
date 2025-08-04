"use client"

import { Button } from "./button"

interface Course {
  id: string
  title: string
  price: number
  color: string
}

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Course[]
  onRemoveFromCart: (courseId: string) => void
  onCheckout: () => void
}

export function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart, onCheckout }: CartModalProps) {
  if (!isOpen) return null

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Giỏ hàng</h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-600 dark:text-slate-400 mb-4">Giỏ hàng trống</p>
            <Button onClick={onClose} variant="outline">
              Tiếp tục mua sắm
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className={`text-lg font-bold ${item.color}`}>
                      {item.price.toLocaleString()}K
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Tổng cộng:</span>
                <span className="text-2xl font-bold text-indigo-600">
                  {total.toLocaleString()}K
                </span>
              </div>
              
              <Button 
                onClick={onCheckout} 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Thanh toán ngay
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
