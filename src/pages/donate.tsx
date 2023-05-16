import Head from 'next/head';
import ImgButton from '@/components/donate/ImgButton';
import { FormInput, FormSelect } from '@/components/donate/Forms';
import { StandardButton, ButtonGroup } from '@/components/shared/Button';
import Slider from '@/components/shared/Slider';
import { countries } from '@/data/countries';

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
    className:
      'border-2 bg-gray-100 rounded-md border-gray-300 focus:outline-blue-400 p-1'
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

const donationDurationButtonGroup = [
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

const donationOptionButtonGroup = [
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
        <meta name="description" content="Donate to support Gunn communities" />
      </Head>
      <div className="box-border px-4 py-4 md:px-24 md:py-10 lg:px-48 lg:py-10 flex flex-col gap-y-4 justify-center items-center">
        <div className="w-full box-border rounded-xl">
          <h1 className="font-bold text-xl">Donation Options</h1>
          <div className="w-full box-border grid items-stretch gap-2 mt-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            <ButtonGroup buttons={donationOptionButtonGroup} />
          </div>
        </div>
        <div className="flex flex-col box-border grow gap-y-2 mt-4 rounded-xl shadow-xl px-4 md:px-8 py-8 w-full lg:px-16">
          <form className="flex w-full">
            <div className="w-full box-border flex flex-col gap-y-4 items-center">
              <div className="flex w-full justify-center items-center flex-col">
                <div className="text-xl">I want to donate: </div>
                <div className="grid grid-cols-3 mt-4 md:w-96 sm:w-64 gap-x-2">
                  <ButtonGroup buttons={donationDurationButtonGroup} />
                </div>
                <Slider
                  className="w-full h-12 mt-2"
                  defaultValue={10}
                  marks={10}
                  step={10}
                  min={0}
                  max={100}
                  isInputVisible={true}
                />
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
