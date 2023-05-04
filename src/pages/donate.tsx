import Head from 'next/head';
import ImgButton from '@/components/donate/ImageButton/ImgButton';
import { FormInput, FormSelect } from '@/components/donate/Forms';
import { StandardButton, ButtonGroup } from '@/components/shared/Button';
import Slider from '@/components/shared/Slider';

/* TODO:
 * Page Structure:
 *  - complete rest of donate form
 *  - find an alternative to FormSelect? Current implementation is ugly.
 * CSS:
 *  - polish up & mobile compatibility
 * Backend:
 *  - Form functionality (sending info) <<<<< I don't think ButtonGroup components will send any info on submit currently.
 *                                             Might need to change HTML structure of component.
 */

const countries = [
  // move this to the backend maybe?
  { name: 'Afghanistan', value: 'AF' },
  { name: 'Åland Islands', value: 'AX' },
  { name: 'Albania', value: 'AL' },
  { name: 'Algeria', value: 'DZ' },
  { name: 'American Samoa', value: 'AS' },
  { name: 'Andorra', value: 'AD' },
  { name: 'Angola', value: 'AO' },
  { name: 'Anguilla', value: 'AI' },
  { name: 'Antarctica', value: 'AQ' },
  { name: 'Antigua & Barbuda', value: 'AG' },
  { name: 'Argentina', value: 'AR' },
  { name: 'Armenia', value: 'AM' },
  { name: 'Aruba', value: 'AW' },
  { name: 'Australia', value: 'AU' },
  { name: 'Austria', value: 'AT' },
  { name: 'Azerbaijan', value: 'AZ' },
  { name: 'Bahamas', value: 'BS' },
  { name: 'Bahrain', value: 'BH' },
  { name: 'Bangladesh', value: 'BD' },
  { name: 'Barbados', value: 'BB' },
  { name: 'Belarus', value: 'BY' },
  { name: 'Belgium', value: 'BE' },
  { name: 'Belize', value: 'BZ' },
  { name: 'Benin', value: 'BJ' },
  { name: 'Bermuda', value: 'BM' },
  { name: 'Bhutan', value: 'BT' },
  { name: 'Bolivia', value: 'BO' },
  { name: 'Caribbean Netherlands', value: 'BQ' },
  { name: 'Bosnia & Herzegovina', value: 'BA' },
  { name: 'Botswana', value: 'BW' },
  { name: 'Bouvet Island', value: 'BV' },
  { name: 'Brazil', value: 'BR' },
  { name: 'British Indian Ocean Territory', value: 'IO' },
  { name: 'Brunei', value: 'BN' },
  { name: 'Bulgaria', value: 'BG' },
  { name: 'Burkina Faso', value: 'BF' },
  { name: 'Burundi', value: 'BI' },
  { name: 'Cambodia', value: 'KH' },
  { name: 'Cameroon', value: 'CM' },
  { name: 'Canada', value: 'CA' },
  { name: 'Cape Verde', value: 'CV' },
  { name: 'Cayman Islands', value: 'KY' },
  { name: 'Central African Republic', value: 'CF' },
  { name: 'Chad', value: 'TD' },
  { name: 'Chile', value: 'CL' },
  { name: 'China', value: 'CN' },
  { name: 'Christmas Island', value: 'CX' },
  { name: 'Cocos (Keeling) Islands', value: 'CC' },
  { name: 'Colombia', value: 'CO' },
  { name: 'Comoros', value: 'KM' },
  { name: 'Congo - Brazzaville', value: 'CG' },
  { name: 'Congo - Kinshasa', value: 'CD' },
  { name: 'Cook Islands', value: 'CK' },
  { name: 'Costa Rica', value: 'CR' },
  { name: 'Côte d’Ivoire', value: 'CI' },
  { name: 'Croatia', value: 'HR' },
  { name: 'Cuba', value: 'CU' },
  { name: 'Curaçao', value: 'CW' },
  { name: 'Cyprus', value: 'CY' },
  { name: 'Czechia', value: 'CZ' },
  { name: 'Denmark', value: 'DK' },
  { name: 'Djibouti', value: 'DJ' },
  { name: 'Dominica', value: 'DM' },
  { name: 'Dominican Republic', value: 'DO' },
  { name: 'Ecuador', value: 'EC' },
  { name: 'Egypt', value: 'EG' },
  { name: 'El Salvador', value: 'SV' },
  { name: 'Equatorial Guinea', value: 'GQ' },
  { name: 'Eritrea', value: 'ER' },
  { name: 'Estonia', value: 'EE' },
  { name: 'Ethiopia', value: 'ET' },
  { name: 'Falkland Islands (Islas Malvinas)', value: 'FK' },
  { name: 'Faroe Islands', value: 'FO' },
  { name: 'Fiji', value: 'FJ' },
  { name: 'Finland', value: 'FI' },
  { name: 'France', value: 'FR' },
  { name: 'French Guiana', value: 'GF' },
  { name: 'French Polynesia', value: 'PF' },
  { name: 'French Southern Territories', value: 'TF' },
  { name: 'Gabon', value: 'GA' },
  { name: 'Gambia', value: 'GM' },
  { name: 'Georgia', value: 'GE' },
  { name: 'Germany', value: 'DE' },
  { name: 'Ghana', value: 'GH' },
  { name: 'Gibraltar', value: 'GI' },
  { name: 'Greece', value: 'GR' },
  { name: 'Greenland', value: 'GL' },
  { name: 'Grenada', value: 'GD' },
  { name: 'Guadeloupe', value: 'GP' },
  { name: 'Guam', value: 'GU' },
  { name: 'Guatemala', value: 'GT' },
  { name: 'Guernsey', value: 'GG' },
  { name: 'Guinea', value: 'GN' },
  { name: 'Guinea-Bissau', value: 'GW' },
  { name: 'Guyana', value: 'GY' },
  { name: 'Haiti', value: 'HT' },
  { name: 'Heard & McDonald Islands', value: 'HM' },
  { name: 'Vatican City', value: 'VA' },
  { name: 'Honduras', value: 'HN' },
  { name: 'Hong Kong', value: 'HK' },
  { name: 'Hungary', value: 'HU' },
  { name: 'Iceland', value: 'IS' },
  { name: 'India', value: 'IN' },
  { name: 'Indonesia', value: 'ID' },
  { name: 'Iran', value: 'IR' },
  { name: 'Iraq', value: 'IQ' },
  { name: 'Ireland', value: 'IE' },
  { name: 'Isle of Man', value: 'IM' },
  { name: 'Israel', value: 'IL' },
  { name: 'Italy', value: 'IT' },
  { name: 'Jamaica', value: 'JM' },
  { name: 'Japan', value: 'JP' },
  { name: 'Jersey', value: 'JE' },
  { name: 'Jordan', value: 'JO' },
  { name: 'Kazakhstan', value: 'KZ' },
  { name: 'Kenya', value: 'KE' },
  { name: 'Kiribati', value: 'KI' },
  { name: 'North Korea', value: 'KP' },
  { name: 'South Korea', value: 'KR' },
  { name: 'Kosovo', value: 'XK' },
  { name: 'Kuwait', value: 'KW' },
  { name: 'Kyrgyzstan', value: 'KG' },
  { name: 'Laos', value: 'LA' },
  { name: 'Latvia', value: 'LV' },
  { name: 'Lebanon', value: 'LB' },
  { name: 'Lesotho', value: 'LS' },
  { name: 'Liberia', value: 'LR' },
  { name: 'Libya', value: 'LY' },
  { name: 'Liechtenstein', value: 'LI' },
  { name: 'Lithuania', value: 'LT' },
  { name: 'Luxembourg', value: 'LU' },
  { name: 'Macao', value: 'MO' },
  { name: 'North Macedonia', value: 'MK' },
  { name: 'Madagascar', value: 'MG' },
  { name: 'Malawi', value: 'MW' },
  { name: 'Malaysia', value: 'MY' },
  { name: 'Maldives', value: 'MV' },
  { name: 'Mali', value: 'ML' },
  { name: 'Malta', value: 'MT' },
  { name: 'Marshall Islands', value: 'MH' },
  { name: 'Martinique', value: 'MQ' },
  { name: 'Mauritania', value: 'MR' },
  { name: 'Mauritius', value: 'MU' },
  { name: 'Mayotte', value: 'YT' },
  { name: 'Mexico', value: 'MX' },
  { name: 'Micronesia', value: 'FM' },
  { name: 'Moldova', value: 'MD' },
  { name: 'Monaco', value: 'MC' },
  { name: 'Mongolia', value: 'MN' },
  { name: 'Montenegro', value: 'ME' },
  { name: 'Montserrat', value: 'MS' },
  { name: 'Morocco', value: 'MA' },
  { name: 'Mozambique', value: 'MZ' },
  { name: 'Myanmar (Burma)', value: 'MM' },
  { name: 'Namibia', value: 'NA' },
  { name: 'Nauru', value: 'NR' },
  { name: 'Nepal', value: 'NP' },
  { name: 'Netherlands', value: 'NL' },
  { name: 'Curaçao', value: 'AN' },
  { name: 'New Caledonia', value: 'NC' },
  { name: 'New Zealand', value: 'NZ' },
  { name: 'Nicaragua', value: 'NI' },
  { name: 'Niger', value: 'NE' },
  { name: 'Nigeria', value: 'NG' },
  { name: 'Niue', value: 'NU' },
  { name: 'Norfolk Island', value: 'NF' },
  { name: 'Northern Mariana Islands', value: 'MP' },
  { name: 'Norway', value: 'NO' },
  { name: 'Oman', value: 'OM' },
  { name: 'Pakistan', value: 'PK' },
  { name: 'Palau', value: 'PW' },
  { name: 'Palestine', value: 'PS' },
  { name: 'Panama', value: 'PA' },
  { name: 'Papua New Guinea', value: 'PG' },
  { name: 'Paraguay', value: 'PY' },
  { name: 'Peru', value: 'PE' },
  { name: 'Philippines', value: 'PH' },
  { name: 'Pitcairn Islands', value: 'PN' },
  { name: 'Poland', value: 'PL' },
  { name: 'Portugal', value: 'PT' },
  { name: 'Puerto Rico', value: 'PR' },
  { name: 'Qatar', value: 'QA' },
  { name: 'Réunion', value: 'RE' },
  { name: 'Romania', value: 'RO' },
  { name: 'Russia', value: 'RU' },
  { name: 'Rwanda', value: 'RW' },
  { name: 'St. Barthélemy', value: 'BL' },
  { name: 'St. Helena', value: 'SH' },
  { name: 'St. Kitts & Nevis', value: 'KN' },
  { name: 'St. Lucia', value: 'LC' },
  { name: 'St. Martin', value: 'MF' },
  { name: 'St. Pierre & Miquelon', value: 'PM' },
  { name: 'St. Vincent & Grenadines', value: 'VC' },
  { name: 'Samoa', value: 'WS' },
  { name: 'San Marino', value: 'SM' },
  { name: 'São Tomé & Príncipe', value: 'ST' },
  { name: 'Saudi Arabia', value: 'SA' },
  { name: 'Senegal', value: 'SN' },
  { name: 'Serbia', value: 'RS' },
  { name: 'Serbia', value: 'CS' },
  { name: 'Seychelles', value: 'SC' },
  { name: 'Sierra Leone', value: 'SL' },
  { name: 'Singapore', value: 'SG' },
  { name: 'Sint Maarten', value: 'SX' },
  { name: 'Slovakia', value: 'SK' },
  { name: 'Slovenia', value: 'SI' },
  { name: 'Solomon Islands', value: 'SB' },
  { name: 'Somalia', value: 'SO' },
  { name: 'South Africa', value: 'ZA' },
  { name: 'South Georgia & South Sandwich Islands', value: 'GS' },
  { name: 'South Sudan', value: 'SS' },
  { name: 'Spain', value: 'ES' },
  { name: 'Sri Lanka', value: 'LK' },
  { name: 'Sudan', value: 'SD' },
  { name: 'Suriname', value: 'SR' },
  { name: 'Svalbard & Jan Mayen', value: 'SJ' },
  { name: 'Eswatini', value: 'SZ' },
  { name: 'Sweden', value: 'SE' },
  { name: 'Switzerland', value: 'CH' },
  { name: 'Syria', value: 'SY' },
  { name: 'Taiwan', value: 'TW' },
  { name: 'Tajikistan', value: 'TJ' },
  { name: 'Tanzania', value: 'TZ' },
  { name: 'Thailand', value: 'TH' },
  { name: 'Timor-Leste', value: 'TL' },
  { name: 'Togo', value: 'TG' },
  { name: 'Tokelau', value: 'TK' },
  { name: 'Tonga', value: 'TO' },
  { name: 'Trinidad & Tobago', value: 'TT' },
  { name: 'Tunisia', value: 'TN' },
  { name: 'Turkey', value: 'TR' },
  { name: 'Turkmenistan', value: 'TM' },
  { name: 'Turks & Caicos Islands', value: 'TC' },
  { name: 'Tuvalu', value: 'TV' },
  { name: 'Uganda', value: 'UG' },
  { name: 'Ukraine', value: 'UA' },
  { name: 'United Arab Emirates', value: 'AE' },
  { name: 'United Kingdom', value: 'GB' },
  { name: 'United States', value: 'US' },
  { name: 'U.S. Outlying Islands', value: 'UM' },
  { name: 'Uruguay', value: 'UY' },
  { name: 'Uzbekistan', value: 'UZ' },
  { name: 'Vanuatu', value: 'VU' },
  { name: 'Venezuela', value: 'VE' },
  { name: 'Vietnam', value: 'VN' },
  { name: 'British Virgin Islands', value: 'VG' },
  { name: 'U.S. Virgin Islands', value: 'VI' },
  { name: 'Wallis & Futuna', value: 'WF' },
  { name: 'Western Sahara', value: 'EH' },
  { name: 'Yemen', value: 'YE' },
  { name: 'Zambia', value: 'ZM' },
  { name: 'Zimbabwe', value: 'ZW' }
];

const formInputSettings = [
  {
    title: 'Name',
    type: 'text',
    placeholder: 'First Last'
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'name@email.com'
  },
  {
    title: 'Phone Number',
    type: 'tel',
    placeholder: '555-555-5555',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'
  },
  {
    title: 'Address',
    type: 'text',
    placeholder: 'Enter your address'
  },
  {
    title: 'Address Line 2',
    type: 'text',
    isRequired: false
  },
  {
    title: 'City',
    type: 'text',
    className: 'border-2 bg-gray-100 rounded-md border-gray-300 focus:outline-blue-400 p-1'
  }
];

const formSelectSettings = [
  {
    title: 'Country',
    placeholder: 'Select a Country...',
    options: countries,
    id: 'countrySelect'
  }
];

const donationOptionSettings = [
  {
    text: 'Gunn Alumni Website',
    imageURL: "bg-[url('/images/GunnAlumniSite_logo.png')]"
  },
  {
    text: 'Gunn Foundation',
    imageURL: "bg-[url('/images/GunnFoundation_logo.png')]"
  },
  {
    text: 'Gunn PTSA',
    imageURL: "bg-[url('/images/GunnPTSA_logo.png')]"
  }
];

const donationDuration_ButtonGroup = [
  {
    value: 'Monthly',
    classNameInactive: 'bg-transparent text-black opacity-60',
    className: 'px-4 py-2'
  },
  {
    value: 'Yearly',
    classNameInactive: 'bg-transparent text-black opacity-60',
    className: 'px-4 py-2'
  },
  {
    value: 'Once',
    classNameInactive: 'bg-transparent text-black opacity-60',
    className: 'px-4 py-2'
  }
];

const donationOption_ButtonGroup = [
  {
    value: (
      <ImgButton
        text={donationOptionSettings[0].text}
        imageURL={donationOptionSettings[0].imageURL}
      />
    ),
    classNameActive: 'opacity-100',
    classNameInactive: 'opacity-50'
  },
  {
    value: (
      <ImgButton
        text={donationOptionSettings[1].text}
        imageURL={donationOptionSettings[1].imageURL}
      />
    ),
    classNameActive: 'opacity-100',
    classNameInactive: 'opacity-50'
  },
  {
    value: (
      <ImgButton
        text={donationOptionSettings[2].text}
        imageURL={donationOptionSettings[2].imageURL}
      />
    ),
    classNameActive: 'opacity-100',
    classNameInactive: 'opacity-50'
  }
];

export default function Donate() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Donate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dylan.png" />
      </Head>
      <div className="box-border px-4 py-4 md:px-24 md:py-10 lg:px-48 lg:py-10 flex flex-col gap-y-4 justify-center items-center">
        <div className="w-full box-border rounded-xl">
          <h1 className="font-bold text-xl">Donation Options</h1>
          <div className="w-full box-border grid items-stretch gap-2 mt-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            <ButtonGroup buttons={donationOption_ButtonGroup}/>
          </div>
        </div>
        <div className="flex flex-col box-border grow gap-y-2 mt-4 rounded-xl shadow-xl px-4 md:px-8 py-8 w-full lg:px-16">
          <form className="flex w-full">
            <div className="w-full box-border flex flex-col gap-y-4 items-center">
              <div className="flex w-full justify-center items-center flex-col">
                <div className="text-xl">I want to donate: </div>
                <div className="grid grid-cols-3 mt-4 md:w-96 sm:w-64 gap-x-2">
                  <ButtonGroup buttons={donationDuration_ButtonGroup} />
                </div>
                <Slider className="w-full h-12 mt-2" defaultValue={10} marks={10} step={10} min={0} max={100} inputBox={true}/>
              </div>
              <h1 className="font-bold text-xl mt-4">Your Information</h1>
              <div className="w-full grid grid-cols-1 gap-x-4 gap-y-2">
                {formInputSettings.slice(0, 3).map((data, i) => (
                  <FormInput
                    key={i}
                    title={data.title}
                    type={data.type}
                    placeholder={data.placeholder}
                    pattern={data.pattern}
                  />
                ))}
              </div>
              <h1 className="font-bold text-xl mt-4">Billing Information</h1>
              <div className="w-full grid grid-cols-1 gap-x-4 gap-y-2">
                {formInputSettings.slice(3, 5).map((data, i) => (
                  <FormInput
                    key={i}
                    title={data.title}
                    type={data.type}
                    placeholder={data.placeholder}
                    isRequired={data.isRequired}
                  />
                ))}
                {formSelectSettings.map((data, i) => (
                  <FormSelect
                    key={i}
                    title={data.title}
                    placeholder={data.placeholder}
                    options={data.options}
                    id={data.id}
                  />
                ))}
                {formInputSettings.slice(5).map((data, i) => (
                  <FormInput
                    key={i}
                    title={data.title}
                    type={data.type}
                    placeholder={data.placeholder}
                    className={data.className}
                  />
                ))}
              </div>
              <div className="flex justify-center w-24">
                <StandardButton color="bg-primary" className="">
                  Submit
                </StandardButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
