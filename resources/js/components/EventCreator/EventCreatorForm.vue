<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label class="label">Event Name</label>
      <input
        type="text"
        class="form-control"
        v-model="form.name"
        placeholder="Enter Event Name..."
      />

      <div class="errors">
        <p
          v-for="(error, index) in eventFormErrors.name"
          :key="index"
          class="error"
        >
          {{ error }}
        </p>
      </div>
    </div>

    <div class="form-group">
      <label class="label">From</label>
      <date-picker
        v-model="dateFrom"
        :enableTimePicker="false"
        placeholder="Date From..."
      ></date-picker>

      <div class="errors">
        <p
          v-for="(error, index) in eventFormErrors.dateFrom"
          :key="index"
          class="error"
        >
          {{ error }}
        </p>
      </div>
    </div>

    <div class="form-group">
      <label class="label">To</label>
      <date-picker
        v-model="dateTo"
        :enableTimePicker="false"
        placeholder="Date To..."
        :minDate="dateFrom"
      ></date-picker>
      <div class="errors">
        <p
          v-for="(error, index) in eventFormErrors.dateTo"
          :key="index"
          class="error"
        >
          {{ error }}
        </p>
      </div>
    </div>
    <div class="form-group">
      <p class="label">Select Days</p>
      <div
        class="form-check-inline"
        v-for="(day, index) in calendarDays"
        :key="index"
      >
        <input
          class="checkbox"
          type="checkbox"
          v-model="eventDays"
          @change="updateEventFormDays"
          :value="day.value"
        />

        <label class="form-check-label">
          {{ day.name }}
        </label>
      </div>
      <div class="errors">
        <p
          v-for="(error, index) in eventFormErrors.days"
          :key="index"
          class="error"
        >
          {{ error }}
        </p>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-outline-dark btn-block submit"
      :disabled="isEventSubmissionOnGoing"
    >
      <div v-if="isEventSubmissionOnGoing">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <span v-else>Create Event</span>
    </button>
  </form>
</template>

<style scoped>
.error {
  font-style: italic;
  color: rgb(182, 50, 50);
  font-size: 10px;
}
.checkbox {
  margin-right: 5px;
}
.label {
  font-weight: bold;
}
.submit {
  margin-bottom: 50px;
}
</style>
<script>
import validators from '../../mixins/validators'

export default {
  data() {
    return {
      eventDays: [],
    }
  },

  mixins: [validators],
  computed: {
    eventFormErrors() {
      return this.$store.getters.getEventFormErrors
    },
    isEventSubmissionOnGoing() {
      return this.$store.getters.getIsEventSubmissionOnGoing
    },

    form() {
      return this.$store.getters.getEventForm
    },
    calendarDays() {
      return this.$store.getters.getCalendarDays
    },
    dateFrom: {
      get() {
        return this.$store.getters.getEventForm.dateFrom
      },
      set(date) {
        this.$store.commit('UPDATE_EVENT_DATE_FROM', date)
      },
    },
    dateTo: {
      get() {
        return this.$store.getters.getEventForm.dateTo
      },
      set(date) {
        this.$store.commit('UPDATE_EVENT_DATE_TO', date)
      },
    },
  },

  methods: {
    updateEventName(name) {
      this.$store.commit('UPDATE_EVENT_NAME', name)
    },
    updateEventFormDays() {
      this.$store.commit('UPDATE_EVENT_DAYS', this.eventDays)
    },

    onSubmit(e) {
      const isEventFormValid = this.validateEventForm()
      if (isEventFormValid) this.$store.dispatch('createEvent')

      e.preventDefault()
    },

    validateEventForm() {
      this.$store.commit('RESET_EVENT_FORM_ERRORS')
      const validName = this.validateName('name', this.form.name)
      const validDateFrom = this.validateDate('dateFrom', this.form.dateFrom)
      const validDateTo = this.validateDate(
        'dateTo',
        this.form.dateTo,
        this.form.dateFrom
      )
      const validateDays = this.validateDays('days', this.form.days)

      return validName && validDateFrom && validDateTo && validateDays
    },
  },
}
</script>
