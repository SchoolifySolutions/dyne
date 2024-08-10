import Navbar from "../Components/Nav";
import Select from "react-select";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

export default function Bootcamp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  const [linkedin, setLinkedin] = useState("");
  const [experience, setExperience] = useState(0);
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [where, setWhere] = useState("");

  const formSubmission = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://schoolifys.pythonanywhere.com/bootcampreg/`,
      {
        name: fullName,
        email: email,
        age: age,
        phone_number: phoneNumber,
        linkedin: linkedin,
        experience: experience,
        school: school,
        country: country,
        where: where,
      }
    );
    console.log({
      name: fullName,
      email: email,
      age: age,
      phone_number: phoneNumber,
      linkedin: linkedin,
      experience: experience,
      school: school,
      country: country,
      where: where,
    });
    setFullName("");
    setEmail("");
    setAge(null); // or 0, depending on your preference
    setPhoneNumber("");
    setLinkedin("");
    setExperience(0);
    setSchool("");
    setCountry("");
    setWhere("");
    console.log(response);
  };

  return (
    <>
      <Navbar />
      <div className="w-[70vw] mx-auto mt-[23vh] pb-5 min-h-screen relative">
        <h1 className="text-white font-normal text-[6vh] text-center">
          Learn{" "}
          <span className="text-blue-500 font-normal text-[6vh] text-center">
            Full-Stack Web Development
          </span>{" "}
          from experienced Individuals
        </h1>
        <h2 className="mx-auto w-fit text-neutral-200 font-normal text-lg mt-4">
          A course designed to bring you from 0 to up to speed on the latest web
          development trends.
        </h2>
        <h1 className="text-white font-normal mt-2 w-fit mx-auto">
          No prior experience required, Next session starts on{" "}
          <span className="underline font-normal text-blue-500">
            August 26th
          </span>
          .
        </h1>
        <div className="w-fit mx-auto mt-10">
          <a
            href="mailto:dynereserach@gmail.com"
            className=" bg-white hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-white border-white border-2 hover:shadow-md hover:shadow-white transition-all text-black px-[1vw] py-[1vh] rounded-xl block font-normal text-lg w-fit mt-20 mx-auto"
          >
            Get Course Overview
          </a>
          <div className="absolute bottom-36 left-[50%] w-fit h-fit">
            <div className="relative -left-[50%] w-[60vw] max-h-[30vh] bg-[#121212] rounded-xl px-[2vw] py-[3vh]">
              <h1 className="text-white font-normal text-2xl ">
                Want to learn more about our bootcamp?
              </h1>
              <div className="flex mt-4">
                <h2 className="text-neutral-300 font-normal text-md  w-[60%]">
                  Curious about transforming your career with our Full Stack Web
                  Development Bootcamp? Join an info session to explore our
                  comprehensive curriculum and get your questions answered by
                  our experienced instructors. Take the first step towards a
                  rewarding career in tech today!
                </h2>
                <a
                  href="mailto:dynereserach@gmail.com"
                  className="bg-white hover:scale-110 hover:bg-transparent ease-out duration-500 h-fit mx-auto hover:text-white border-white border-2 hover:shadow-md hover:shadow-white transition-all text-black px-[1vw] py-[1vh] rounded-xl block font-normal text-lg w-fit "
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mx-auto pb-5 bg-[#121212] min-h-[92vh]">
        <div className="w-[70vw] mx-auto">
          <h1 className="text-neutral-100 font-normal text-[6vh] text-center pt-20">
            What to Expect?
          </h1>
          <div className="flex justify-between mt-10">
            <div className="w-1/3 mx-4  ">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://www.digitaltrends.com/wp-content/uploads/2022/04/zoom-active-speaker-meeting-scaled-1.jpg?fit=720%2C480&p=1"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Small Group Instructions
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Learn in small groups for a personalized experience.
              </p>
            </div>
            <div className="w-1/3 mx-4">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Learn Real-World CS & Tools
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Gain experience by building production-level apps and mastering
                the tools involved.
              </p>
            </div>
            <div className="w-1/3 mx-4 ">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://images.collegexpress.com/article/Importance-of-Career-Prep-How-to-Plan-for-Your-Dream-Job.jpg"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Career Prep & Introduction
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Receive guidance to prepare for your career journey.
              </p>
            </div>
          </div>
          <h3 className="w-fit text-white font-normal mx-auto text-2xl mt-14">
            Want more information?
          </h3>
          <div className="flex w-fit mx-auto mt-7">
            <a
              href="mailto:dynereserach@gmail.com"
              className="bg-white hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-white border-white border-2 hover:shadow-md hover:shadow-white transition-all text-black px-[1vw] py-[1vh] rounded-xl block font-normal text-xl w-fit my-auto"
            >
              Get Course Overview
            </a>
            <h1 className="text-white  my-auto mx-4">OR</h1>
            <a
              href="mailto:dynereserach@gmail.com"
              className="bg-white hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-white border-white border-2 hover:shadow-md hover:shadow-white transition-all text-black px-[1vw] py-[1vh] rounded-xl block font-normal text-xl w-fit my-auto"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 w-[40vw] mx-auto">
        <h1 className="text-white w-fit mx-auto text-3xl mb-1">
          Course Sign Up
        </h1>
        <h4 className=" w-fit mx-auto text-neutral-200">
          <span className="text-red-600 text-xl ">*</span> are required fields.
        </h4>
        <form onSubmit={formSubmission} className="my-5 font-normal pb-12">
          <label className="text-white text-lg">
            Full Name<span className="text-red-600 text-xl ">*</span>
          </label>
          <input
            type="text"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
          <label className="text-white text-lg ">
            Email<span className="text-red-600 text-xl ">*</span>
          </label>
          <input
            type="email"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label className="text-white text-lg ">
            Age<span className="text-red-600 text-xl ">*</span>
          </label>
          <input
            type="number"
            min="10"
            max="100"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            required
          />
          <label className="text-white text-lg ">Phone Number</label>
          <input
            type="tel"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <label className="text-white text-lg ">Linkedin</label>
          <input
            type="url"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your Linkedin Profile Page"
            onChange={(e) => setLinkedin(e.target.value)}
            value={linkedin}
          />
          <label className="text-white text-lg ">
            Experience<span className="text-red-600 text-xl ">*</span>
          </label>
          <input
            type="number"
            min="0"
            max="10"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="# of Years of Experience"
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            required
          />
          <label className="text-white text-lg ">
            School<span className="text-red-600 text-xl ">*</span>
          </label>
          <input
            type="text"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            placeholder="Your School's Name"
            onChange={(e) => setSchool(e.target.value)}
            value={school}
            required
          />
          <label className="text-white text-lg ">
            Country<span className="text-red-600 text-xl ">*</span>
          </label>
          <select
            id="country"
            name="country"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            required
          >
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">
              Congo, The Democratic Republic of The
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">
              Falkland Islands (Malvinas)
            </option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">
              French Southern Territories
            </option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">
              Heard Island and Mcdonald Islands
            </option>
            <option value="Holy See (Vatican City State)">
              Holy See (Vatican City State)
            </option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">
              Iran, Islamic Republic of
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People's Republic of
            </option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People's Democratic Republic
            </option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">
              Libyan Arab Jamahiriya
            </option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">
              Macedonia, The Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">
              Northern Mariana Islands
            </option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">
              Palestinian Territory, Occupied
            </option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">
              Saint Pierre and Miquelon
            </option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">
              South Georgia and The South Sandwich Islands
            </option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">
              Svalbard and Jan Mayen
            </option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">
              Tanzania, United Republic of
            </option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">
              United States Minor Outlying Islands
            </option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">
              Virgin Islands, British
            </option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <label className="text-white text-lg ">
            How Did You Find Us?
            <span className="text-red-600 text-xl ">*</span>
          </label>
          <select
            id="media-select"
            name="media"
            className="bg-black border-[0.5px] border-gray-500 rounded-lg px-[1vw] py-[1vh] mb-5 mt-1 w-full text-white"
            onChange={(e) => setWhere(e.target.value)}
            value={where}
            required
          >
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="website">Company Website</option>
            <option value="others">Other</option>
          </select>
          <div className="w-fit mx-auto font-normal mt-4">
            <button
              type="submit"
              className="bg-white px-[3vw]  py-[0.5vh] text-lg text-black w-fit mx-auto rounded-lg hover:bg-gray-100 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
