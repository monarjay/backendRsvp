<template>
  <div>
    <h2 class="mb-4">RSVP List</h2>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Attending</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rsvp in rsvps" :key="rsvp.id">
          <td>{{ rsvp.name }}</td>
          <td>{{ rsvp.email }}</td>
          <td>{{ rsvp.attending }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rsvps: []
    };
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/api/rsvps');
    const data = await res.json();
    this.rsvps = data;
  }
};
</script>
