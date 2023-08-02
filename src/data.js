import navLocationIcon from "./assets/search-nav/nav-location-icon.svg";
import navBikeIcon from "./assets/search-nav/nav-bike-icon.svg";
import navCalendarIcon from "./assets/search-nav/nav-calendar-icon.svg";
import navGroupIcon from "./assets/search-nav/nav-group-icon.svg";

import bigSurImg from "./assets/destinations/big-sur.svg";
import prescottImg from "./assets/destinations/prescott.svg";
import fortMayersImg from "./assets/destinations/fort-mayers.svg";
import tucsonImg from "./assets/destinations/tucson.svg";
import stJosephImg from "./assets/destinations/st-joseph.svg";

import monasteroImg from "./assets/hotels-restaurants/monastero.svg";
import grandHotelImg from "./assets/hotels-restaurants/grand-hotel.svg";
import oberoiImg from "./assets/hotels-restaurants/oberoi.svg";
import beverlyHillsImg from "./assets/hotels-restaurants/beverly-hills.svg";
import ratingThree from "./assets/hotels-restaurants/rating-3.svg";
import ratingFour from "./assets/hotels-restaurants/rating-4.svg";
import ratingFive from "./assets/hotels-restaurants/rating-5.svg";

import eastVillageImg from "./assets/travel/east-village.svg";
import brooklynImg from "./assets/travel/brooklyn.svg";

import sailingImg from "./assets/activities/sailing.svg";
import climbingImg from "./assets/activities/climbing.svg";
import skiingImg from "./assets/activities/skiing.svg";
import hikingImg from "./assets/activities/hiking.svg";

export const navItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Hotels",
  },
  {
    id: 3,
    name: "Restaurants",
  },
  {
    id: 4,
    name: "Tours",
  },
  {
    id: 5,
    name: "Destionations",
  },
  {
    id: 6,
    name: "Activities",
  },
  {
    id: 7,
    name: "Contact",
  },
];

export const searchNavItems = [
  {
    id: 1,
    normalText: "Location",
    boldText: "Explore nearby destinations",
    icon: navLocationIcon,
  },
  {
    id: 2,
    normalText: "Activity",
    boldText: "All activities",
    icon: navBikeIcon,
  },
  {
    id: 3,
    normalText: "When",
    boldText: "Choose a Date",
    icon: navCalendarIcon,
  },
  {
    id: 4,
    normalText: "Guests",
    boldText: "1 guest",
    icon: navGroupIcon,
  },
];

export const destinations = [
  {
    id: 1,
    name: "Bkay",
    location: "Kerry, Ireland",
    image: bigSurImg,
  },
  {
    id: 2,
    name: "Prescott",
    location: "Arizona, USA",
    image: prescottImg,
  },
  {
    id: 3,
    name: "Fenine",
    location: "Havana, Cuba",
    image: fortMayersImg,
  },
  {
    id: 4,
    name: "Miya",
    location: "Vancouver, Canada",
    image: tucsonImg,
  },
  {
    id: 5,
    name: "St. Peter",
    location: "Moscow, Russia",
    image: stJosephImg,
  },
];

export const hotelsRestaurants = [
  {
    id: 1,
    name: "Noma",
    location: "Copenhagen, Denmark",
    image: monasteroImg,
    ratingImage: ratingFive,
  },
  {
    id: 2,
    name: "Celler de Can Roca",
    location: "Girona, Spain",
    image: grandHotelImg,
    ratingImage: ratingThree,
  },
  {
    id: 3,
    name: "Osteria Francescana",
    location: "Modena, Italy",
    image: oberoiImg,
    ratingImage: ratingFour,
  },
  {
    id: 4,
    name: "Eleven Madison Park",
    location: "New York City, USA",
    image: beverlyHillsImg,
    ratingImage: ratingFour,
  },
];

export const travelItems = [
  {
    id: 1,
    image: eastVillageImg,
    location: "Tips",
    text: "Plan and Research: Before you embark on your trip, spend time researching your destination. Learn about its culture, local customs, weather conditions, and any specific safety concerns. Planning ahead will help you make the most of your time and avoid potential pitfalls.",
    calendarText: "Today",
    userText: "Maria Morake",
    commentsText: "55",
  },
  {
    id: 2,
    image: brooklynImg,
    location: "Advice",
    text: "Pack Smartly: Pack light and bring only the essentials. Check the weather forecast and pack appropriate clothing. Don't forget important documents like your passport, travel insurance, and any necessary visas. Consider using packing cubes to stay organized and save space in your luggage",
    calendarText: "Yesterday",
    userText: "James Madisson",
    commentsText: "290",
  },
];

export const activities = [
  {
    id: 1,
    name: "Sailing",
    image: sailingImg,
  },
  {
    id: 2,
    name: "Climbing",
    image: climbingImg,
  },
  {
    id: 3,
    name: "Skiing",
    image: skiingImg,
  },
  {
    id: 4,
    name: "Hiking",
    image: hikingImg,
  },
];

export const footerNav = [
  {
    id: 1,
    title: "About",
    links: ["About Us", "Features", "News", "Menu"],
  },
  {
    id: 2,
    title: "Company",
    links: ["Why Travela", "Partner With Us", "FAQ", "Blog"],
  },
  {
    id: 3,
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Contact Us"],
  },
];
