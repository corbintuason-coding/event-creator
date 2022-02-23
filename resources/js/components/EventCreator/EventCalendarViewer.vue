<template>
  <div>
    <FullCalendar
      id="calendar"
      :options="{
        ...calendarOptions,
        events,
      }"
    />
    <div class="meta-data">
      <span class="description">
        Total Number of Events: <strong> {{ events.length }}</strong>
      </span>
    </div>
  </div>
</template>

<style scoped>
.description {
  color: darkblue;
  font-style: italic;
  font-size: 10px;
  float: right;
}
</style>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [bootstrap5Plugin, dayGridPlugin],
        initialView: 'dayGridMonth',
        themeSystem: 'bootstrap5',
        eventColor: 'black',
        eventBorderColor: 'black',
        eventTextColor: 'white',
      },
    }
  },
  computed: {
    events() {
      return this.$store.getters.getEvents
    },
  },

  mounted() {},
}
</script>
