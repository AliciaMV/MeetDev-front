import axios from 'axios';
import { INSCRIPTION_RECRUITER } from '../actions/middleware';

const inscriptionRecruiterApi = (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_RECRUITER: {
      const state = store.getState();
      const {
        // status,
        lastname,
        firstname,
        city,
        email,
        phone,
        password,
        firms,
        website,
        department,
        zipCode,
        profilePicture,
        description,
      } = state.formRegisterRecruiter.register;
      // const { status } = state.formRegisterRecruiter.register;
      // const { lastname } = state.formRegisterRecruiter.register;
      // const { firstname } = state.formRegisterRecruiter.register;
      // const { city } = state.formRegisterRecruiter.register;
      // const { email } = state.formRegisterRecruiter.register;
      // const { phone } = state.formRegisterRecruiter.register;
      // const { password } = state.formRegisterRecruiter.register;
      // const { firms } = state.formRegisterRecruiter.register;
      // const { website } = state.formRegisterRecruiter.register;
      // const { department } = state.formRegisterRecruiter.register;
      // const { profilePicture } = state.formRegisterRecruiter.register;
      // const { description } = state.formRegisterRecruiter.register;

      axios.post(
        'https://aliciamv-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/recruiters',
        // ou url: 'http://localhost/api/users:8000',
        {
          lastname: lastname,
          firstname: firstname,
          city: city,
          zip_code: zipCode,
          department: department,
          email_address: email,
          phone: phone,
          password: password,
          subscribe_to_push_notif: 0, // non dynamique pour le moment
          profile_picture: profilePicture,
          needs_description: description,
          // status: status,
          company_name: firms,
          web_site_link: website,
          available_for_recruiters: 1, // non dynamique pour le moment
          available_for_developers: 1, // non dynamique pour le moment
          minimum_salary_requested: 40000, // non dynamique pour le moment
        },
      )
        .then((response) => {
          console.log(response.data);
          console.log('formulaire envoyé');
        }).catch((error) => {
          console.log(error.response.data);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default inscriptionRecruiterApi;
