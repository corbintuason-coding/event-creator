import { createStore  } from 'vuex'
import axios from 'axios';
import { fireToast } from '../helpers/alert'
export const store = createStore({
    state: {
        areEventsLoading: false,
        calendarDays: [
            {
                name: 'Sun',
                value: 0,
            },
            {
                name: 'Mon',
                value: 1,
            },
            {
                name: 'Tue',
                value: 2,
            },
            {
                name: 'Wed',
                value: 3,
            },
            {
                name: 'Thurs',
                value: 4,
            },
            {
                name: 'Fri',
                value: 5,
            },
            {
                name: 'Sat',
                value: 6,
            },
        ],
        isEventSubmissionOnGoing: false,
        eventForm: {
            name: '',
            dateFrom: '',
            dateTo: '',
            days: []
        },
        events: [],
        eventFormErrors: {
            name: [],
            dateFrom: [],
            dateTo: [],
            days: []
        }
    },

    getters: {
        getCalendarDays: state => state.calendarDays,
        getEvents: state => state.events,
        getEventFormErrors: state => state.eventFormErrors,
        getEventDays: state => state.days,
        getEventForm : state => state.eventForm,
        getIsEventSubmissionOnGoing: state => state.isEventSubmissionOnGoing,
    },
    mutations: {
        RESET_EVENT_FORM_ERRORS: (state) => state.eventFormErrors = {
            name: [],
            dateFrom: [],
            dateTo: [],
            days: []
        },
        UPDATE_EVENTS: (state, events) => state.events = events,
        UPDATE_EVENT_NAME: (state, name) => state.eventForm.name = name,
        UPDATE_EVENT_DATE_FROM: (state, date) => state.eventForm.dateFrom = date,
        UPDATE_EVENT_DATE_TO: (state, date) => state.eventForm.dateTo = date,
        UPDATE_EVENT_DAYS: (state, days) => state.eventForm.days = days,
        UPDATE_IS_EVENT_SUBMISSION_ON_GOING: (state, onGoing) => state.isEventSubmissionOnGoing = onGoing,
        UPDATE_EVENT_FORM_BY_FIELD_ERRORS: (state, { field, errors }) => state.eventFormErrors[field] = errors,
        UPDATE_EVENT_FORM_ERRORS: (state, eventFormErrors) => state.eventFormErrors = eventFormErrors

    },
    actions: {
        getEvents({ commit }) {
            axios.get('/api/events').then(response => {
                let events = response.data.data;
                events = events.map(event => {
                    return {
                        title: event.name,
                        start: event.date
                    }
                })
                commit('UPDATE_EVENTS', events)
            });
        },

        createEvent( { state, commit, dispatch }){
            commit('UPDATE_IS_EVENT_SUBMISSION_ON_GOING', true);
            axios.post('/api/event', state.eventForm).then((response) => {
                const events = response.data;
                if(events > 0){
                    let eventWording = events > 1 ? 'Events' : 'Event'
                    const title = `Successfully Created ${events} ${eventWording}!`;
                    fireToast(title, 'success');
                    dispatch('getEvents');
                }else{
                    const title = "No Events have been made!"
                    fireToast(title, 'warning');
                    dispatch('getEvents');   
                }
            })
            .finally(() => commit('UPDATE_IS_EVENT_SUBMISSION_ON_GOING', false))
        }
    }
});

