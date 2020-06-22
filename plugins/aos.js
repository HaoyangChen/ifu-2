/* eslint-disable */
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
    app.AOS = new AOS.init({
        delay: 0,
        duration: 800,
    });
};
