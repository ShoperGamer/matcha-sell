<script setup>
import { blogs } from '../data'
</script>

<template>
  <div class="blog-page">
    <header class="page-header">
      <h1>บทความน่ารู้</h1>
      <p>เรื่องราวเกี่ยวกับมัทฉะและสุขภาพ</p>
    </header>

    <div class="blog-grid">
      <div v-for="blog in blogs" :key="blog.id" class="blog-card">
        <div class="blog-img">
          <img :src="blog.img" :alt="blog.title">
        </div>
        <div class="blog-content">
          <h2>{{ blog.title }}</h2>
          <p class="desc">{{ blog.desc }}</p>
          <a :href="blog.link" target="_blank" class="read-more">อ่านเพิ่มเติม &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-page { background: #f4f4f4; min-height: 100vh; padding-bottom: 80px; }

.page-header {
  text-align: center; padding: 50px 20px; background: white;
  margin-bottom: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.page-header h1 { color: var(--dark-green); margin: 0; }

.blog-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px; max-width: 1200px; margin: 0 auto; padding: 0 20px;
}

.blog-card {
  background: white; border-radius: 15px; overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s; display: flex; flex-direction: column;
}
.blog-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }

.blog-img { height: 200px; overflow: hidden; }
.blog-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-img img { transform: scale(1.05); }

.blog-content { padding: 25px; flex: 1; display: flex; flex-direction: column; }
.blog-content h2 { font-size: 1.2rem; color: #333; margin-bottom: 10px; line-height: 1.4; }
.desc { color: #666; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; flex: 1; }

.read-more {
  align-self: flex-start; color: var(--main-green); font-weight: bold;
  font-size: 0.9rem; transition: padding 0.3s;
}
.read-more:hover { padding-left: 5px; color: var(--dark-green); }

@media (max-width: 600px) {
  .blog-grid { grid-template-columns: 1fr; }
}
</style>