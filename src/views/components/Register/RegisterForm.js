import { useState } from "react";
import { createNotification } from "../../../utilities/helpers";
import InputPassword from "../../UI/InputPassword/InputPassword";
import { minLength2 } from "../../utilities/validate";

export default function RegisterForm({ submit }){

    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState({code: "", name: ""})

    async function handleOnSubmitForm(e) {
        e.preventDefault();

        const checkPhone = minLength2(phoneNumber)
        const checkPassword = minLength2(password)

        if (!country.code) {
            createNotification("error", "Country field is required")
            return
        }
        if (checkPhone) {
            createNotification("error", checkPhone)
            return
        }
        if (checkPassword) {
            createNotification("error", checkPassword)
            return
        }

        submit(phoneNumber, password, country)
    }

    function onChangePhone(e){
        setPhoneNumber(e.target.value);
    }

    function onChangePassword(e){
        setPassword(e.target.value);
    }

    function handleOnChangeCountry(e){
        const countryName = e.target.options[e.target.selectedIndex].getAttribute('data-country')
        setCountry({code: e.target.value, name: countryName})
    }

    return (
        <form onSubmit={handleOnSubmitForm}>
            <div className="form-body">
                <h2 className="form-header no-space">Create New Account</h2>
                <p className="secondary-text">Before you can invest here, please create new account</p>
                <h2 className="form-header mt-2">Account Detail</h2>
                <div className="form-item">
                    <label htmlFor="countryCode" className="form-label">Select Country</label>
                    <select 
                        className="form-select" 
                        name="countryCode" 
                        id="countryCode" 
                        value={country.code ? country.code : ""}
                        onChange={handleOnChangeCountry}
                    >
                        {countries}
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                        className="form-input" 
                        type="number" 
                        id="phone" 
                        name="phone" 
                        placeholder="Including your country code"
                        onChange={onChangePhone}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password" className="form-label">Password</label>
                    <InputPassword 
                        className="form-input" 
                        id="password" 
                        name="password"
                        onChange={onChangePassword}
                    />
                </div>
            </div>
            <div className="link">
                <img src="/assets/download.svg" alt="Terms and Conditions icon" />
                <p className="link-text">Terms and Conditions</p>
            </div>
            <div className="form-action">
                <button className="btn primary-btn" type="reset">Reset</button>
                <button className="btn secondary-btn" type="submit">Register</button>
            </div>
        </form>
    );
}

const countries = 
<>
    <option value="" hidden>Choose a country</option>
    <option data-countrycode="DZ" data-country="Algeria" value="213">Algeria (+213)</option>
    <option data-countrycode="AD" data-country="Andorra" value="376">Andorra (+376)</option>
    <option data-countrycode="AO" data-country="Angola" value="244">Angola (+244)</option>
    <option data-countrycode="AI" data-country="Anguilla" value="1264">Anguilla (+1264)</option>
    <option data-countrycode="AG" data-country="Antigua & Barbuda" value="1268">Antigua &amp; Barbuda (+1268)</option>
    <option data-countrycode="AR" data-country="Argentina" value="54">Argentina (+54)</option>
    <option data-countrycode="AM" data-country="Armenia" value="374">Armenia (+374)</option>
    <option data-countrycode="AW" data-country="Aruba" value="297">Aruba (+297)</option>
    <option data-countrycode="AU" data-country="Australia" value="61">Australia (+61)</option>
    <option data-countrycode="AT" data-country="Austria" value="43">Austria (+43)</option>
    <option data-countrycode="AZ" data-country="Azerbaijan" value="994">Azerbaijan (+994)</option>
    <option data-countrycode="BS" data-country="Bahamas" value="1242">Bahamas (+1242)</option>
    <option data-countrycode="BH" data-country="Bahrain" value="973">Bahrain (+973)</option>
    <option data-countrycode="BD" data-country="Bangladesh" value="880">Bangladesh (+880)</option>
    <option data-countrycode="BB" data-country="Barbados" value="1246">Barbados (+1246)</option>
    <option data-countrycode="BY" data-country="Belarus" value="375">Belarus (+375)</option>
    <option data-countrycode="BE" data-country="Belgium" value="32">Belgium (+32)</option>
    <option data-countrycode="BZ" data-country="Belize" value="501">Belize (+501)</option>
    <option data-countrycode="BJ" data-country="Benin" value="229">Benin (+229)</option>
    <option data-countrycode="BM" data-country="Bermuda" value="1441">Bermuda (+1441)</option>
    <option data-countrycode="BT" data-country="Bhutan" value="975">Bhutan (+975)</option>
    <option data-countrycode="BO" data-country="Bolivia" value="591">Bolivia (+591)</option>
    <option data-countrycode="BA" data-country="Bosnia Herzegovina" value="387">Bosnia Herzegovina (+387)</option>
    <option data-countrycode="BW" data-country="Botswana" value="267">Botswana (+267)</option>
    <option data-countrycode="BR" data-country="Brazil" value="55">Brazil (+55)</option>
    <option data-countrycode="BN" data-country="Brunei" value="673">Brunei (+673)</option>
    <option data-countrycode="BG" data-country="Bulgaria" value="359">Bulgaria (+359)</option>
    <option data-countrycode="BF" data-country="Burkina Faso" value="226">Burkina Faso (+226)</option>
    <option data-countrycode="BI" data-country="Burundi" value="257">Burundi (+257)</option>
    <option data-countrycode="KH" data-country="Cambodia" value="855">Cambodia (+855)</option>
    <option data-countrycode="CM" data-country="Cameroon" value="237">Cameroon (+237)</option>
    <option data-countrycode="CA" data-country="Canada" value="1">Canada (+1)</option>
    <option data-countrycode="CV" data-country="Cape Verde Islands" value="238">Cape Verde Islands (+238)</option>
    <option data-countrycode="KY" data-country="Cayman Islands" value="1345">Cayman Islands (+1345)</option>
    <option data-countrycode="CF" data-country="Central African Republic" value="236">Central African Republic (+236)</option>
    <option data-countrycode="CL" data-country="Chile" value="56">Chile (+56)</option>
    <option data-countrycode="CN" data-country="China" value="86">China (+86)</option>
    <option data-countrycode="CO" data-country="Colombia" value="57">Colombia (+57)</option>
    <option data-countrycode="KM" data-country="Comoros" value="269">Comoros (+269)</option>
    <option data-countrycode="CG" data-country="Congo" value="242">Congo (+242)</option>
    <option data-countrycode="CK" data-country="Cook Islands" value="682">Cook Islands (+682)</option>
    <option data-countrycode="CR" data-country="Costa Rica" value="506">Costa Rica (+506)</option>
    <option data-countrycode="HR" data-country="Croatia" value="385">Croatia (+385)</option>
    <option data-countrycode="CU" data-country="Cuba" value="53">Cuba (+53)</option>
    <option data-countrycode="CY" data-country="Cyprus North" value="90392">Cyprus North (+90392)</option>
    <option data-countrycode="CY" data-country="Cyprus South" value="357">Cyprus South (+357)</option>
    <option data-countrycode="CZ" data-country="Czech Republic" value="42">Czech Republic (+42)</option>
    <option data-countrycode="DK" data-country="Denmark" value="45">Denmark (+45)</option>
    <option data-countrycode="DJ" data-country="Djibouti" value="253">Djibouti (+253)</option>
    <option data-countrycode="DM" data-country="Dominica" value="1809">Dominica (+1809)</option>
    <option data-countrycode="DO" data-country="Dominican Republic" value="1809">Dominican Republic (+1809)</option>
    <option data-countrycode="EC" data-country="Ecuador" value="593">Ecuador (+593)</option>
    <option data-countrycode="EG" data-country="Egypt" value="20">Egypt (+20)</option>
    <option data-countrycode="SV" data-country="El Salvador" value="503">El Salvador (+503)</option>
    <option data-countrycode="GQ" data-country="Equatorial Guinea" value="240">Equatorial Guinea (+240)</option>
    <option data-countrycode="ER" data-country="Eritrea" value="291">Eritrea (+291)</option>
    <option data-countrycode="EE" data-country="Estonia" value="372">Estonia (+372)</option>
    <option data-countrycode="ET" data-country="Ethiopia" value="251">Ethiopia (+251)</option>
    <option data-countrycode="FK" data-country="Falkland Islands" value="500">Falkland Islands (+500)</option>
    <option data-countrycode="FO" data-country="Faroe Islands" value="298">Faroe Islands (+298)</option>
    <option data-countrycode="FJ" data-country="Fiji" value="679">Fiji (+679)</option>
    <option data-countrycode="FI" data-country="Finland" value="358">Finland (+358)</option>
    <option data-countrycode="FR" data-country="France" value="33">France (+33)</option>
    <option data-countrycode="GF" data-country="French Guiana" value="594">French Guiana (+594)</option>
    <option data-countrycode="PF" data-country="French Polynesia" value="689">French Polynesia (+689)</option>
    <option data-countrycode="GA" data-country="Gabon" value="241">Gabon (+241)</option>
    <option data-countrycode="GM" data-country="Gambia" value="220">Gambia (+220)</option>
    <option data-countrycode="GE" data-country="Georgia" value="7880">Georgia (+7880)</option>
    <option data-countrycode="DE" data-country="Germany" value="49">Germany (+49)</option>
    <option data-countrycode="GH" data-country="Ghana" value="233">Ghana (+233)</option>
    <option data-countrycode="GI" data-country="Gibraltar" value="350">Gibraltar (+350)</option>
    <option data-countrycode="GR" data-country="Greece" value="30">Greece (+30)</option>
    <option data-countrycode="GL" data-country="Greenland" value="299">Greenland (+299)</option>
    <option data-countrycode="GD" data-country="Grenada" value="1473">Grenada (+1473)</option>
    <option data-countrycode="GP" data-country="Guadeloupe" value="590">Guadeloupe (+590)</option>
    <option data-countrycode="GU" data-country="Guam" value="671">Guam (+671)</option>
    <option data-countrycode="GT" data-country="Guatemala" value="502">Guatemala (+502)</option>
    <option data-countrycode="GN" data-country="Guinea" value="224">Guinea (+224)</option>
    <option data-countrycode="GW" data-country="Guinea - Bissau" value="245">Guinea - Bissau (+245)</option>
    <option data-countrycode="GY" data-country="Guyana" value="592">Guyana (+592)</option>
    <option data-countrycode="HT" data-country="Haiti" value="509">Haiti (+509)</option>
    <option data-countrycode="HN" data-country="Honduras" value="504">Honduras (+504)</option>
    <option data-countrycode="HK" data-country="Hong Kong" value="852">Hong Kong (+852)</option>
    <option data-countrycode="HU" data-country="Hungary" value="36">Hungary (+36)</option>
    <option data-countrycode="IS" data-country="Iceland" value="354">Iceland (+354)</option>
    <option data-countrycode="IN" data-country="India" value="91">India (+91)</option>
    <option data-countrycode="ID" data-country="Indonesia" value="62">Indonesia (+62)</option>
    <option data-countrycode="IR" data-country="Iran" value="98">Iran (+98)</option>
    <option data-countrycode="IQ" data-country="Iraq" value="964">Iraq (+964)</option>
    <option data-countrycode="IE" data-country="Ireland" value="353">Ireland (+353)</option>
    <option data-countrycode="IL" data-country="Israel" value="972">Israel (+972)</option>
    <option data-countrycode="IT" data-country="Italy" value="39">Italy (+39)</option>
    <option data-countrycode="JM" data-country="Jamaica" value="1876">Jamaica (+1876)</option>
    <option data-countrycode="JP" data-country="Japan" value="81">Japan (+81)</option>
    <option data-countrycode="JO" data-country="Jordan" value="962">Jordan (+962)</option>
    <option data-countrycode="KZ" data-country="Kazakhstan" value="7">Kazakhstan (+7)</option>
    <option data-countrycode="KE" data-country="Kenya" value="254">Kenya (+254)</option>
    <option data-countrycode="KI" data-country="Kiribati" value="686">Kiribati (+686)</option>
    <option data-countrycode="KP" data-country="Korea North" value="850">Korea North (+850)</option>
    <option data-countrycode="KR" data-country="Korea South" value="82">Korea South (+82)</option>
    <option data-countrycode="KW" data-country="Kuwait" value="965">Kuwait (+965)</option>
    <option data-countrycode="KG" data-country="Kyrgyzstan" value="996">Kyrgyzstan (+996)</option>
    <option data-countrycode="LA" data-country="Laos" value="856">Laos (+856)</option>
    <option data-countrycode="LV" data-country="Latvia" value="371">Latvia (+371)</option>
    <option data-countrycode="LB" data-country="Lebanon" value="961">Lebanon (+961)</option>
    <option data-countrycode="LS" data-country="Lesotho" value="266">Lesotho (+266)</option>
    <option data-countrycode="LR" data-country="Liberia" value="231">Liberia (+231)</option>
    <option data-countrycode="LY" data-country="Libya" value="218">Libya (+218)</option>
    <option data-countrycode="LI" data-country="Liechtenstein" value="417">Liechtenstein (+417)</option>
    <option data-countrycode="LT" data-country="Lithuania" value="370">Lithuania (+370)</option>
    <option data-countrycode="LU" data-country="Luxembourg" value="352">Luxembourg (+352)</option>
    <option data-countrycode="MO" data-country="Macao" value="853">Macao (+853)</option>
    <option data-countrycode="MK" data-country="Macedonia" value="389">Macedonia (+389)</option>
    <option data-countrycode="MG" data-country="Madagascar" value="261">Madagascar (+261)</option>
    <option data-countrycode="MW" data-country="Malawi" value="265">Malawi (+265)</option>
    <option data-countrycode="MY" data-country="Malaysia" value="60">Malaysia (+60)</option>
    <option data-countrycode="MV" data-country="Maldives" value="960">Maldives (+960)</option>
    <option data-countrycode="ML" data-country="Mali" value="223">Mali (+223)</option>
    <option data-countrycode="MT" data-country="Malta" value="356">Malta (+356)</option>
    <option data-countrycode="MH" data-country="Marshall Islands" value="692">Marshall Islands (+692)</option>
    <option data-countrycode="MQ" data-country="Martinique" value="596">Martinique (+596)</option>
    <option data-countrycode="MR" data-country="Mauritania" value="222">Mauritania (+222)</option>
    <option data-countrycode="YT" data-country="Mayotte" value="269">Mayotte (+269)</option>
    <option data-countrycode="MX" data-country="Mexico" value="52">Mexico (+52)</option>
    <option data-countrycode="FM" data-country="Micronesia" value="691">Micronesia (+691)</option>
    <option data-countrycode="MD" data-country="Moldova" value="373">Moldova (+373)</option>
    <option data-countrycode="MC" data-country="Monaco" value="377">Monaco (+377)</option>
    <option data-countrycode="MN" data-country="Mongolia" value="976">Mongolia (+976)</option>
    <option data-countrycode="MS" data-country="Montserrat" value="1664">Montserrat (+1664)</option>
    <option data-countrycode="MA" data-country="Morocco" value="212">Morocco (+212)</option>
    <option data-countrycode="MZ" data-country="Mozambique" value="258">Mozambique (+258)</option>
    <option data-countrycode="MN" data-country="Myanmar" value="95">Myanmar (+95)</option>
    <option data-countrycode="NA" data-country="Namibia" value="264">Namibia (+264)</option>
    <option data-countrycode="NR" data-country="Nauru" value="674">Nauru (+674)</option>
    <option data-countrycode="NP" data-country="Nepal" value="977">Nepal (+977)</option>
    <option data-countrycode="NL" data-country="Netherlands" value="31">Netherlands (+31)</option>
    <option data-countrycode="NC" data-country="New Caledonia" value="687">New Caledonia (+687)</option>
    <option data-countrycode="NZ" data-country="New Zealand" value="64">New Zealand (+64)</option>
    <option data-countrycode="NI" data-country="Nicaragua" value="505">Nicaragua (+505)</option>
    <option data-countrycode="NE" data-country="Niger" value="227">Niger (+227)</option>
    <option data-countrycode="NG" data-country="Nigeria" value="234">Nigeria (+234)</option>
    <option data-countrycode="NU" data-country="Niue" value="683">Niue (+683)</option>
    <option data-countrycode="NF" data-country="Norfolk Islands" value="672">Norfolk Islands (+672)</option>
    <option data-countrycode="NP" data-country="Northern Marianas" value="670">Northern Marianas (+670)</option>
    <option data-countrycode="NO" data-country="Norway" value="47">Norway (+47)</option>
    <option data-countrycode="OM" data-country="Oman" value="968">Oman (+968)</option>
    <option data-countrycode="PW" data-country="Palau" value="680">Palau (+680)</option>
    <option data-countrycode="PA" data-country="Panama" value="507">Panama (+507)</option>
    <option data-countrycode="PG" data-country="Papua New Guinea" value="675">Papua New Guinea (+675)</option>
    <option data-countrycode="PY" data-country="Paraguay" value="595">Paraguay (+595)</option>
    <option data-countrycode="PE" data-country="Peru" value="51">Peru (+51)</option>
    <option data-countrycode="PH" data-country="Philippines" value="63">Philippines (+63)</option>
    <option data-countrycode="PL" data-country="Poland" value="48">Poland (+48)</option>
    <option data-countrycode="PT" data-country="Portugal" value="351">Portugal (+351)</option>
    <option data-countrycode="PR" data-country="Puerto" value="1787">Puerto Rico (+1787)</option>
    <option data-countrycode="QA" data-country="Qatar" value="974">Qatar (+974)</option>
    <option data-countrycode="RE" data-country="Reunion" value="262">Reunion (+262)</option>
    <option data-countrycode="RO" data-country="Romania" value="40">Romania (+40)</option>
    <option data-countrycode="RU" data-country="Russia" value="7">Russia (+7)</option>
    <option data-countrycode="RW" data-country="Rwanda" value="250">Rwanda (+250)</option>
    <option data-countrycode="SM" data-country="San Marino" value="378">San Marino (+378)</option>
    <option data-countrycode="ST" data-country="Sao Tome & Principe" value="239">Sao Tome &amp; Principe (+239)</option>
    <option data-countrycode="SA" data-country="Saudi Arabia" value="966">Saudi Arabia (+966)</option>
    <option data-countrycode="SN" data-country="Senegal" value="221">Senegal (+221)</option>
    <option data-countrycode="CS" data-country="Serbia" value="381">Serbia (+381)</option>
    <option data-countrycode="SC" data-country="Seychelles" value="248">Seychelles (+248)</option>
    <option data-countrycode="SL" data-country="Sierra Leone" value="232">Sierra Leone (+232)</option>
    <option data-countrycode="SG" data-country="Singapore" value="65">Singapore (+65)</option>
    <option data-countrycode="SK" data-country="Slovak Republic" value="421">Slovak Republic (+421)</option>
    <option data-countrycode="SI" data-country="Slovenia" value="386">Slovenia (+386)</option>
    <option data-countrycode="SB" data-country="Solomon Islands" value="677">Solomon Islands (+677)</option>
    <option data-countrycode="SO" data-country="Somalia" value="252">Somalia (+252)</option>
    <option data-countrycode="ZA" data-country="South Africa" value="27">South Africa (+27)</option>
    <option data-countrycode="ES" data-country="Spain" value="34">Spain (+34)</option>
    <option data-countrycode="LK" data-country="Sri Lanka" value="94">Sri Lanka (+94)</option>
    <option data-countrycode="SH" data-country="St. Helena" value="290">St. Helena (+290)</option>
    <option data-countrycode="KN" data-country="St. Kitts" value="1869">St. Kitts (+1869)</option>
    <option data-countrycode="SC" data-country="St. Lucia" value="1758">St. Lucia (+1758)</option>
    <option data-countrycode="SD" data-country="Sudan" value="249">Sudan (+249)</option>
    <option data-countrycode="SR" data-country="Suriname" value="597">Suriname (+597)</option>
    <option data-countrycode="SZ" data-country="Swaziland" value="268">Swaziland (+268)</option>
    <option data-countrycode="SE" data-country="Sweden" value="46">Sweden (+46)</option>
    <option data-countrycode="CH" data-country="Switzerland" value="41">Switzerland (+41)</option>
    <option data-countrycode="SI" data-country="Syria" value="963">Syria (+963)</option>
    <option data-countrycode="TW" data-country="Taiwan" value="886">Taiwan (+886)</option>
    <option data-countrycode="TJ" data-country="Tajikstan" value="7">Tajikstan (+7)</option>
    <option data-countrycode="TH" data-country="Thailand" value="66">Thailand (+66)</option>
    <option data-countrycode="TG" data-country="Togo" value="228">Togo (+228)</option>
    <option data-countrycode="TO" data-country="Tonga" value="676">Tonga (+676)</option>
    <option data-countrycode="TT" data-country="Trinidad & Tobago" value="1868">Trinidad &amp; Tobago (+1868)</option>
    <option data-countrycode="TN" data-country="Tunisia" value="216">Tunisia (+216)</option>
    <option data-countrycode="TR" data-country="Turkey" value="90">Turkey (+90)</option>
    <option data-countrycode="TM" data-country="Turkmenistan" value="7">Turkmenistan (+7)</option>
    <option data-countrycode="TM" data-country="Turkmenistan" value="993">Turkmenistan (+993)</option>
    <option data-countrycode="TC" data-country="Turks Islands" value="1649">Turks &amp; Caicos Islands (+1649)</option>
    <option data-countrycode="TV" data-country="Tuvalu" value="688">Tuvalu (+688)</option>
    <option data-countrycode="UG" data-country="Uganda" value="256">Uganda (+256)</option>
    <option data-countrycode="GB" data-country="UK" value="44">UK (+44)</option>
    <option data-countrycode="UA" data-country="Ukraine" value="380">Ukraine (+380)</option>
    <option data-countrycode="AE" data-country="United Arab Emirates" value="971">United Arab Emirates (+971)</option>
    <option data-countrycode="UY" data-country="Uruguay" value="598">Uruguay (+598)</option>
    <option data-countrycode="US" data-country="USA" value="1">USA (+1)</option>
    <option data-countrycode="UZ" data-country="Uzbekistan" value="7">Uzbekistan (+7)</option>
    <option data-countrycode="VU" data-country="Vanuatu" value="678">Vanuatu (+678)</option>
    <option data-countrycode="VA" data-country="Vatican" value="379">Vatican City (+379)</option>
    <option data-countrycode="VE" data-country="Venezuela" value="58">Venezuela (+58)</option>
    <option data-countrycode="VN" data-country="Vietnam" value="84">Vietnam (+84)</option>
    <option data-countrycode="VG" data-country="Virgin Islands - British" value="84">Virgin Islands - British (+1284)</option>
    <option data-countrycode="VI" data-country="Virgin Islands - US" value="84">Virgin Islands - US (+1340)</option>
    <option data-countrycode="WF" data-country="Wallis" value="681">Wallis &amp; Futuna (+681)</option>
    <option data-countrycode="YE" data-country="Yemen (North)" value="969">Yemen (North)(+969)</option>
    <option data-countrycode="YE" data-country="Yemen (South)" value="967">Yemen (South)(+967)</option>
    <option data-countrycode="ZM" data-country="Zambia" value="260">Zambia (+260)</option>
    <option data-countrycode="ZW" data-country="Zimbabwe" value="263">Zimbabwe (+263)</option>
</>
