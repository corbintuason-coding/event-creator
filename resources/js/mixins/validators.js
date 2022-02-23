import { store } from '../store';
export default {
    data(){
        return{
          commonMessages: {
            required: 'Required Field',
          }
        }
    },

    methods: {
        validateName(field, name) {
          const errors = [];
          if(!name){
            errors.push(this.commonMessages.required);
          }

          if(errors.length > 0){
            store.commit("UPDATE_EVENT_FORM_BY_FIELD_ERRORS", {field, errors});
          }
            return errors.length === 0;
          },
      
          validateDate(field, date, referenceDate = null) {
            const errors = [];
            let validBasedOnStartDate = true
            if(!date){
              errors.push(this.commonMessages.required);
            }

            if(referenceDate){
              validBasedOnStartDate = date >= referenceDate
            }
            if(!validBasedOnStartDate){
              const readableReferenceDate = new Date(referenceDate);
              errors.push(`Date must be greater than or equal to ${readableReferenceDate.toDateString()}!`)
            }

            if(errors.length > 0){
              store.commit("UPDATE_EVENT_FORM_BY_FIELD_ERRORS", {field, errors});
            }
            
            return errors.length === 0;
          },
      
          validateDays(field, days) {
            const errors = [];
            if(days.length === 0){
              errors.push(this.commonMessages.required);
            }

            if(errors.length > 0){
              store.commit("UPDATE_EVENT_FORM_BY_FIELD_ERRORS", {field, errors});
            }
              return errors.length === 0;
          },
    }
}