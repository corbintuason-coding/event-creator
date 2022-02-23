import axios from 'axios';
import { store } from '../store'
import Swal from 'sweetalert2'
import { fireToast } from '../helpers/alert'
export default function setup() {
    axios.interceptors.response.use(function (response) {
        return response;
    },
    (err) => {
        const title = "Please resolve the errors before creating an event.";
        fireToast(title, 'error');
        store.commit('UPDATE_EVENT_FORM_ERRORS', err.response.data.errors);
        throw Promise.reject(err);
    })
}