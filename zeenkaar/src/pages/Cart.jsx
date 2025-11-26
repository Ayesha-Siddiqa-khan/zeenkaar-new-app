import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

function Cart() {
  const { items, updateQuantity, removeFromCart, total } = useCart()
  const hasItems = items.length > 0

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow ring-1 ring-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
          Cart
        </p>
        <h1 className="text-3xl font-bold text-[#111111]">Your selection</h1>
        <p className="mt-2 text-sm text-slate-600">
          Review your Zeenkaar picks—minimal, modern, and pastel-inspired.
        </p>
      </div>

      {!hasItems && (
        <div className="rounded-3xl bg-white p-8 text-center shadow ring-1 ring-slate-200">
          <p className="text-lg font-semibold text-[#111111]">
            Your cart is empty.
          </p>
          <Link
            to="/shop"
            className="mt-4 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#111111]/90"
          >
            Explore the shop
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.15em] text-rose-500">
                      {item.category}
                    </p>
                    <p className="text-lg font-semibold text-[#111111]">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-600">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  <div className="mt-2 flex items-center gap-3">
                    <label className="text-sm text-slate-600" htmlFor={`qty-${item.id}`}>
                      Qty
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                      }
                      className="w-16 rounded-lg border border-slate-300 px-2 py-1 text-sm focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-slate-300"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#f6f6f6]"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow">
            <p className="text-lg font-bold text-[#111111]">Order summary</p>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Shipping</span>
              <span className="text-rose-500">Calculated at checkout</span>
            </div>
            <div className="border-t border-slate-200 pt-3">
              <div className="flex items-center justify-between text-base font-semibold text-[#111111]">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
            <button
              className="w-full rounded-full bg-black px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#111111]/90"
            >
              Proceed to checkout
            </button>
            <p className="text-xs text-slate-500">
              We’ll confirm stitching and delivery details at checkout. Need
              help? Call us anytime.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
