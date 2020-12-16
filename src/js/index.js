import { doc } from "prettier";
import "../sass/styles.scss";

const countrySelect = document.querySelector(".country");
const form = document.getElementById("form");
const button = document.getElementById("button-submit");
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const validate = {
  username: (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (usernameRegex.test(username)) return true;
    return false;
  },
  email: (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) return true;
    return false;
  },
  zipcode: (zipcode) => {
    if (zipcode !== '') return true;
    return false;
  },
  password: (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    if (passwordRegex.test(password)) return true;
    return false;
  },
  confirmpassword: (confirmedPassword) => {
    if (confirmedPassword === form.password.value) return true;
    return false;
  },
  country: (country) => {
    if (country !== undefined) return true;
    return false;
  },
};

const validateStatus = {
  username: false,
  email: false,
  country: true,
  zipcode: false,
  password: false,
  confirmpassword: false,
};

form.addEventListener("change", (e) => {
  if (validate[e.target.name](e.target.value)) {
    e.target.parentElement.classList.add("good");
    e.target.parentElement.classList.remove("bad");
    e.target.parentElement.lastChild.classList.remove("show");
    validateStatus[e.target.name] = true;
  } else {
    e.target.parentElement.classList.add("bad");
    e.target.parentElement.classList.remove("good");
    e.target.parentElement.lastChild.classList.add("show");
    validateStatus[e.target.name] = false;
  }
});

addEventListener("load", () => {
  const fragment = document.createDocumentFragment();
  countryList.forEach((country) => {
    const countryOption = document.createElement("option");
    countryOption.setAttribute("value", `${country.toLowerCase()}`);
    countryOption.textContent = country;
    if (country === "Spain") countryOption.setAttribute("selected", true);
    fragment.appendChild(countryOption);
  });
  countrySelect.appendChild(fragment);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      validateStatus.username === true &&
      validateStatus.email === true &&
      validateStatus.country === true &&
      validateStatus.zipcode === true &&
      validateStatus.password === true &&
      validateStatus.confirmpassword === true
    ) {
      e.target.parentElement.lastChild.classList.add("show");
      e.target.nextElementSibling.classList.remove("show");
    } else {
      e.target.parentElement.lastChild.classList.remove('show');
      e.target.nextElementSibling.classList.add('show');
    }
  });
});
