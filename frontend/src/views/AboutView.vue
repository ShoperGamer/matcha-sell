<script setup>
// ข้อมูลสมาชิก (แก้ไขข้อมูลตรงนี้ได้เลย)
const teamMembers = [
  {
    id: 1,
    studentId: '67141977',
    name: 'นาย วรกันต์ รื่นพิทักษ์',
    contact: 'Line @charifkub1122',
    role: 'หน้าที่',
    image: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/404396776_1868994070218053_8125433832572033148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4fx6fm_iyYFkrqRuXPVCgRGqcTHEykspEapxMcTKSypEuwaTZyWX1m9R7TaItq8L4vxUUM0x3qtibzO8ULHzd&_nc_ohc=HpI8g0GVFrgQ7kNvgGrGGZC&_nc_oc=Adie63-302pInk6ETL8R2ck1ioQMv0bt3Qa0kQ7hbDbigO9YgsMu0eGHeR5LjOU2RQi1-NB9FllHfuuf0UvHPqBR&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=WTjE4HXb_ewiqJZ6x_PtFw&oh=00_AYGYRbBLsxRG0fmow799rB6wnUpL2xD3kQsKAptRueXfxg&oe=67DACA55'
  },
  // ถ้ามีสมาชิกเพิ่ม สามารถ copy object ข้างบนมาวางต่อได้เลย
  {
    id: 2,
    studentId: '67141977',
    name: 'นาย วรกันต์ รื่นพิทักษ์ (Placeholder)',
    contact: 'Line ...',
    role: 'หน้าที่',
    image: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/404396776_1868994070218053_8125433832572033148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4fx6fm_iyYFkrqRuXPVCgRGqcTHEykspEapxMcTKSypEuwaTZyWX1m9R7TaItq8L4vxUUM0x3qtibzO8ULHzd&_nc_ohc=HpI8g0GVFrgQ7kNvgGrGGZC&_nc_oc=Adie63-302pInk6ETL8R2ck1ioQMv0bt3Qa0kQ7hbDbigO9YgsMu0eGHeR5LjOU2RQi1-NB9FllHfuuf0UvHPqBR&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=WTjE4HXb_ewiqJZ6x_PtFw&oh=00_AYGYRbBLsxRG0fmow799rB6wnUpL2xD3kQsKAptRueXfxg&oe=67DACA55'
  },
   {
    id: 3,
    studentId: '67141977',
    name: 'นาย วรกันต์ รื่นพิทักษ์ (Placeholder)',
    contact: 'Line ...',
    role: 'หน้าที่',
    image: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/404396776_1868994070218053_8125433832572033148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4fx6fm_iyYFkrqRuXPVCgRGqcTHEykspEapxMcTKSypEuwaTZyWX1m9R7TaItq8L4vxUUM0x3qtibzO8ULHzd&_nc_ohc=HpI8g0GVFrgQ7kNvgGrGGZC&_nc_oc=Adie63-302pInk6ETL8R2ck1ioQMv0bt3Qa0kQ7hbDbigO9YgsMu0eGHeR5LjOU2RQi1-NB9FllHfuuf0UvHPqBR&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=WTjE4HXb_ewiqJZ6x_PtFw&oh=00_AYGYRbBLsxRG0fmow799rB6wnUpL2xD3kQsKAptRueXfxg&oe=67DACA55'
  }
]
</script>

<template>
  <div class="about-page">
    <header class="sourcecode-header">
      <h1>About Us</h1>
    </header>

    <div v-for="member in teamMembers" :key="member.id" class="blogs-wrapper">
      <div class="container">
        <div class="image-grid">
          <img :src="member.image" :alt="member.name">
        </div>
        <div class="grid-item">
          <p><b>รหัสนักศึกษา:</b> {{ member.studentId }}</p>
          <p><b>ชื่อ:</b> {{ member.name }}</p>
          <p><b>ช่องทางติดต่อ:</b> {{ member.contact }}</p>
          <p><b>หน้าที่:</b> {{ member.role }}</p>
        </div>
      </div>
      <br>
    </div>

    <header class="sourcecode-header">
      <h1>Source Code</h1>
    </header>

    <div class="blogs-wrapper">
      <div class="codecontainer">
        <div class="code">
          <p>แนะนำให้ Login บัญชี Github ก่อนเข้ารับชม</p>
          <a href="https://github.com/superworgurn/matcha-sell" target="_blank" class="buy">Source Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* นำมาจาก about.css เดิม */
.about-page {
  padding-bottom: 50px;
}

.sourcecode-header {
  align-items: center;
  background: #ffffff;
  padding: 15px 5%;
  text-align: center;
  margin-bottom: 20px;
}

.blogs-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  display: flex;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  align-items: flex-start;
}

.image-grid {
  width: 30%;
  margin-right: 20px;
}

.image-grid img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}

.grid-item {
  flex: 1;
}

.grid-item p {
  padding: 5px;
  margin: 0;
  font-weight: bold;
  color: #555;
  margin-bottom: 0.5rem;
}

.codecontainer {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 50%; /* ปรับให้สวยงามขึ้น */
  max-width: 800px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: center;
}

.buy {
  background: #5a8f5a;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  margin-top: 10px;
  transition: transform 0.3s ease;
}

.buy:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>