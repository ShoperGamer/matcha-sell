<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  if(!username.value || !password.value) return alert('กรุณากรอกข้อมูลให้ครบ')
  
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    const data = await res.json()
    if (data.success) {
      router.push('/')
    } else {
      alert(data.message)
    }
  } catch(e) { alert('Login Failed') }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="icon-header">🔐</div>
      <h2>เข้าสู่ระบบ</h2>
      <p>ยินดีต้อนรับกลับมา! กรุณาล็อคอินเพื่อดำเนินการต่อ</p>
      
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Admin">
      </div>
      
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="••••••••" @keyup.enter="login">
      </div>

      <button @click="login" class="login-btn">LOGIN</button>
      <p class="hint">Hint: admin / admin1234</p>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  min-height: 80vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.login-card {
  background: white; padding: 40px; border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1); width: 100%; max-width: 400px;
  text-align: center;
}

.icon-header { font-size: 3rem; margin-bottom: 10px; }
h2 { margin: 0 0 10px; color: #333; }
p { color: #888; margin-bottom: 30px; font-size: 0.9rem; }

.form-group { text-align: left; margin-bottom: 20px; }
.form-group label { display: block; margin-bottom: 5px; font-weight: bold; font-size: 0.9rem; color: #555; }
.form-group input {
  width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px;
  font-family: inherit; transition: border-color 0.3s;
  box-sizing: border-box; /* ป้องกัน Input ล้น */
}
.form-group input:focus { outline: none; border-color: var(--main-green); }

.login-btn {
  width: 100%; background: var(--main-green); color: white;
  padding: 12px; border: none; border-radius: 8px;
  font-size: 1rem; font-weight: bold; cursor: pointer;
  transition: background 0.3s;
}
.login-btn:hover { background: var(--dark-green); }

.hint { margin-top: 20px; font-size: 0.8rem; color: #aaa; }
</style>