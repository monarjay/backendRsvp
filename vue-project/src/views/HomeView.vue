<template>
  <div>
    <h2 class="mb-4">Submit Your RSVP</h2>
    <form @submit.prevent="submitRSVP">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Attendance</label>
        <select v-model="attending" class="form-select" required>
          <option value="" disabled>Select one</option>
          <option value="Yes">Yes, I’ll be there</option>
          <option value="No">Sorry, I can’t make it</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success">Submit RSVP</button>
    </form>

    <div v-if="message" class="alert alert-info mt-4">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      attending: '',
      message: ''
    };
  },
  methods: {
    async submitRSVP() {
      try {
        const res = await fetch('http://localhost:3000/api/rsvps', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            attending: this.attending
          })
        });
        if (res.ok) {
          this.message = 'Thank you for your RSVP!';
          this.name = '';
          this.email = '';
          this.attending = '';
        } else {
          this.message = 'Something went wrong. Please try again.';
        }
      } catch (error) {
        this.message = 'Server error. Please try again later.';
      }
    }
  }
};
</script>
