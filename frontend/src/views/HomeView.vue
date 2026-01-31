<script setup>
import { inject } from 'vue'
import { products } from '../data' // Import ข้อมูล

const { updateCartCount, toggleCart } = inject('cart')

const addToCart = async (productId) => {
  const formData = new FormData()
  formData.append('product_id', productId)
  try {
    const res = await fetch('/api/add_to_cart', { method: 'POST', body: formData })
    const data = await res.json()
    if (!data.error) {
      updateCartCount()
      toggleCart()
    } else {
      alert(data.error)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="home-page">
    <div class="banner">
      <div class="overlay"></div>
      <div class="banner-content">
        <h1>Matcha Lover</h1>
        <p>สัมผัสรสชาติชาเขียวแท้ เกรดพรีเมียมจากธรรมชาติ</p>
        <button class="cta-button" @click="$el.querySelector('.menu-section').scrollIntoView({ behavior: 'smooth' })">
          สั่งเลย
        </button>
      </div>
    </div>

    <section class="menu-section">
      <div class="section-header">
        <h2>เมนูแนะนำ</h2>
        <div class="divider"></div>
      </div>
      
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="image-wrapper">
             <img :src="product.image" :alt="product.name">
          </div>
          <div class="card-body">
            <h3>{{ product.name }}</h3>
            <p>{{ product.desc }}</p>
            <div class="card-footer">
              <span class="price">{{ product.price }}.-</span>
              <button class="add-btn" @click="addToCart(product.id)">ใส่ตะกร้า</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page { padding-bottom: 80px; }

/* Banner */
.banner {
  background-image: url('/picture/Matcha Lover.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.4);
}
.banner-content { position: relative; z-index: 1; padding: 20px; }
.banner h1 { font-size: 3.5rem; margin-bottom: 10px; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
.banner p { font-size: 1.2rem; margin-bottom: 25px; text-shadow: 1px 1px 5px rgba(0,0,0,0.5); }

.cta-button {
  background: var(--main-green); color: white;
  padding: 12px 30px; font-size: 1.1rem; border: none; border-radius: 50px;
  cursor: pointer; transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(124, 179, 66, 0.4);
}
.cta-button:hover { transform: translateY(-3px); background: var(--dark-green); }

/* Menu Section */
.menu-section { padding: 60px 5%; max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 50px; }
.section-header h2 { font-size: 2.5rem; color: var(--dark-green); margin-bottom: 10px; }
.divider { width: 60px; height: 4px; background: var(--main-green); margin: 0 auto; border-radius: 2px; }

/* Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

/* Card */
.product-card {
  background: white; border-radius: 20px; overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex; flex-direction: column;
}
.product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }

.image-wrapper { height: 220px; overflow: hidden; }
.image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.product-card:hover .image-wrapper img { transform: scale(1.1); }

.card-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
.card-body h3 { font-size: 1.2rem; margin-bottom: 10px; color: #333; }
.card-body p { font-size: 0.9rem; color: #777; line-height: 1.5; margin-bottom: 20px; flex: 1; }

.card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.price { font-size: 1.3rem; font-weight: bold; color: var(--main-green); }
.add-btn {
  background: #333; color: white; border: none; padding: 8px 20px;
  border-radius: 20px; cursor: pointer; transition: background 0.3s;
}
.add-btn:hover { background: var(--main-green); }

/* Mobile */
@media (max-width: 768px) {
  .banner h1 { font-size: 2.5rem; }
  .menu-section { padding: 40px 20px; }
  .product-grid { grid-template-columns: 1fr; } /* 1 Column on Mobile */
}
</style>