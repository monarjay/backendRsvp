<template>
  <div class="app-bg text-white min-vh-100">
    <div class="container py-5 text-center bg-glass rounded">
      <h1 class="display-4 mb-3">💍 Mon & Shara's Wedding</h1>
      <p class="lead mb-4">We’re so excited to celebrate with you! Please RSVP below.</p>

      <div class="d-flex justify-content-center gap-3 mb-5">
        <router-link to="/" class="btn btn-light btn-lg">Submit RSVP</router-link>
        <router-link to="/rsvps" class="btn btn-outline-light btn-lg">View RSVPs</router-link>
      </div>

      <div class="card bg-white bg-opacity-75 text-dark mx-auto shadow p-4" style="max-width: 700px;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-bg {
  background-image: url('https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.bg-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
}
</style>
