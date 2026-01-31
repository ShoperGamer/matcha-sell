<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide, onMounted } from 'vue'
import Cart from './components/Cart.vue'

const cartCount = ref(0)
const isCartOpen = ref(false)

const updateCartCount = async () => {
  try {
    const res = await fetch('/api/get_cart')
    const data = await res.json()
    if (data.cart_items) {
      cartCount.value = data.cart_items.reduce((sum, item) => sum + item.quantity, 0)
    }
  } catch (err) {
    console.error("Failed to fetch cart:", err)
  }
}

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
}

provide('cart', { updateCartCount, toggleCart })

onMounted(() => {
  updateCartCount()
})
</script>

<template>
  <div class="app-container">
    <header>
      <div class="logo">Matcha</div>
      <nav>
        <RouterLink to="/blog">Blog</RouterLink>
        <a href="#" @click.prevent="toggleCart" class="cart-link">
          ตะกร้า <span class="badge" v-if="cartCount > 0">{{ cartCount }}</span>
        </a>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <Cart v-if="isCartOpen" @close="isCartOpen = false" @updated="updateCartCount" />

    <footer>
      <p>© 2025 Matcha.co.th</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #7CB342;
  padding: 15px 5%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: white; /* ปรับสีโลโก้ */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  color: black;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

nav a:hover, nav a.router-link-active {
  color: white;
}

.cart-link {
  position: relative;
}

.badge {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -10px;
}

main {
  flex: 1;
}

footer {
  background: #7CB342;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  color: white;
}
</style>