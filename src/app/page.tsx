import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import './globals.css'; // Import global styles

// Prevent FontAwesome from auto-adding CSS to the DOM
config.autoAddCss = false;

import Hero from "./components/Hero";
import FeaturedRooms from "./components/FeaturedRooms";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";

const Home = () => (
  <>
    <Hero />
    <FeaturedRooms />
    <Amenities />
    <Contact />
  </>
);

export default Home;
