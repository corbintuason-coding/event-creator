<template>
  <div class="app">
    <!-- App Header  -->
    <app-header></app-header>
    <!-- App Body -->
    <div class="event-creator">
      <div class="row">
        <div class="col-md-5">
          <event-creator-form />
        </div>
        <div class="col-md-7">
          <event-calendar-viewer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-creator {
  min-height: 900px;
  background-color: white;
  padding-top: 50px;
  padding: 50px;
  margin: 15px;
}
</style>
<script>
import AppHeader from '../components/navigation/AppHeader.vue'
import EventCreatorForm from '../components/EventCreator/EventCreatorForm.vue'
import EventCalendarViewer from '../components/EventCreator/EventCalendarViewer.vue'

export default {
  components: {
    AppHeader,
    EventCreatorForm,
    EventCalendarViewer,
  },

  mounted() {
    this.$store.dispatch('getEvents')
  },
}
</script>
