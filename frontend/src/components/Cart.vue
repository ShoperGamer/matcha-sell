<script setup>
import { ref, onMounted } from 'vue'

defineEmits(['close'])
const cartItems = ref([])
const totalPrice = ref(0)

const fetchCart = async () => {
  const res = await fetch('/api/get_cart')
  const data = await res.json()
  if (!data.error) {
    cartItems.value = data.cart_items || []
    totalPrice.value = data.total_price || 0
  }
}

onMounted(() => fetchCart())
</script>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="cart-modal">
      <div class="cart-header">
        <h2>🛒 ตะกร้าสินค้า</h2>
        <button class="close-btn" @click="$emit('close')">&times;</button>
      </div>
      
      <div class="cart-body">
        <div v-if="cartItems.length === 0" class="empty-state">
          <p>ไม่มีสินค้าในตะกร้า</p>
        </div>
        
        <div v-else class="item-list">
          <div v-for="item in cartItems" :key="item.product_id" class="cart-item">
            <div class="item-info">
              <h4>{{ item.product_name }}</h4>
              <span class="qty">x{{ item.quantity }}</span>
            </div>
            <div class="item-price">{{ (item.price * item.quantity).toFixed(2) }} ฿</div>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="total-row">
          <span>รวมทั้งหมด</span>
          <span class="total-price">{{ totalPrice.toFixed(2) }} ฿</span>
        </div>
        <button class="checkout-btn">ชำระเงิน</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 999;
  display: flex; justify-content: flex-end; /* ชิดขวาเหมือน Sidebar */
  animation: fadeIn 0.3s;
}

.cart-modal {
  background: white; width: 100%; max-width: 400px;
  height: 100%; display: flex; flex-direction: column;
  box-shadow: -5px 0 20px rgba(0,0,0,0.2);
  animation: slideIn 0.3s;
}

.cart-header {
  padding: 20px; border-bottom: 1px solid #eee;
  display: flex; justify-content: space-between; align-items: center;
  background: var(--main-green); color: white;
}
.cart-header h2 { margin: 0; font-size: 1.2rem; }
.close-btn { background: none; border: none; color: white; font-size: 2rem; cursor: pointer; line-height: 1; }

.cart-body { flex: 1; overflow-y: auto; padding: 20px; }
.empty-state { text-align: center; color: #999; margin-top: 50px; }

.cart-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 15px 0; border-bottom: 1px dashed #eee;
}
.item-info h4 { margin: 0 0 5px; font-size: 1rem; color: #333; }
.qty { font-size: 0.85rem; color: #777; background: #eee; padding: 2px 8px; border-radius: 4px; }
.item-price { font-weight: bold; color: var(--dark-green); }

.cart-footer { padding: 25px; background: #f9f9f9; border-top: 1px solid #eee; }
.total-row { display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; margin-bottom: 20px; }
.total-price { color: var(--main-green); }

.checkout-btn {
  width: 100%; padding: 15px; background: #333; color: white;
  border: none; border-radius: 10px; font-size: 1.1rem; font-weight: bold;
  cursor: pointer; transition: background 0.3s;
}
.checkout-btn:hover { background: var(--main-green); }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
</style>