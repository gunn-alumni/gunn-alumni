import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import capstone from '@/../public/images/capstone.jpg';
import Timeline_of_Gunn from '@/../public/images/Timeline_of_Gunn.jpg';
import Oracle_logo from '@/../public/images/Oracle_logo.jpeg';
import PDFViewer from '@/../src/components/history/PDFViewer';


/* TODO:
Each item should be a section and dropdown menu from "history" in the
  nav bar should lead to the section, not a new page
 - Timeline of Gunn
 - Embedded oracles
 - Reunion photos
 - Sports awards
 - Digital yearbooks?
 */
const Math_and_Art = '/Users/maryyu/Documents/GitHub/gunn-alumni/public/Math_and_Art.pdf';
export default function History() {

  return (
    <>
      <Head>
        <title>Gunn Alumni | History</title>
        <meta name="description" content="Get to know Gunn's history" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="box-border px-4 py-4 md:px-24 md:py-10 lg:px-60 lg:py-10 flex flex-col gap-y-4">
        <div className="border-b-2 border-dotted">
          <h1 className="text-5xl font-black"> History of Gunn </h1>
          <div className="p-5">
            <p className="prose prose-xl mb-8 text-gray-500 px-0">
              Since its establishment in 1964, Henry M. Gunn High School in Palo Alto, California, has built a legacy of excellence and community spirit that continues to flourish today. The glory of Gunn’s history is vividly captured through the pages of student newspapers, which have diligently recorded the life and times of the school, providing a rich archive of its evolution. Reunion photos, cherished by alumni, reflect the enduring bonds formed within these halls and the school's lasting impact on its students. Over the years, Gunn’s athletic prowess has been showcased through numerous sports awards and the proud display of athletic suits, celebrating the achievements of its talented athletes. This blend of academic rigor, extracurricular excellence, and a tight-knit community makes Gunn High School a beacon of success and a cherished alma mater for its graduates.
              {/* Tuned chatGPT introduction paragraph */}
            </p>
            <h1 className="font-bold text-xl">Features</h1> {/* need a better name */}
            <ul className="list-disc px-10 py-3">
              {/* features to be included on this page  */}
              <li>
                Timeline of Gunn{' '} {/* Each should be a href link to the section later */}
              </li>
              <li>
                Past Oracles  {' '}
              </li>
              <li>
                Sports awards
              </li>
            </ul>
          </div>
        </div>
        {/* Insert timeline here  */}
        <div className="flex justify-center px-32">
          <Image
            src={Timeline_of_Gunn}
            alt="photo of clowns"
            className="shadow-lg rounded-md"
          />
        </div>

        {/* ORACLE SECTION */}
        <div>
          <hr className="my-4 border-gray-300" />
          <h1 className="text-3xl font-bold">The Oracle</h1>

          <div className="font-bold flex items-center">
            {/* Logo and heading */}
            <div className="flex items-center mr-4">
              <Image
                src={Oracle_logo}
                alt="photo of clowns"
                className="shadow-lg rounded-md mr-4"
              />
            </div>
            {/* Description */}
            <p className="prose prose-xl mb-8 text-gray-800 px-0">
              The Oracle is a newspaper publication produced by and for the students of Henry M. Gunn High School in Palo Alto, California. The newspaper publishes eight issues annually. To see newest articles from The Oracle, see their&#160;
              <Link
                className="underline text-primary"
                href="https://gunnoracle.com"
              >
                website
              </Link>
              .
            </p>
          </div>


          {/*Embed oracles here
            Left is single page newest issue, right is click to expand to view past issues. */}
          <div className="shadow-lg rounded-md">
            <PDFViewer fileUrl={Math_and_Art} />
          </div>
        </div>


        {/* Team Names */}

        <div className="flex flex-row  justify-around gap-10 pb-10">
          {/* main leads */}
          <div className=" py-3 bg-gray-100 border-dashed border-2 shadow-lg w-56 text-center">
            <p className="font-bold">Main Student Leads</p>
            <p>Dylan Lu</p>
            <p>Julia Kang</p>
            <br></br>
            <p>Sammy Lesner</p>
          </div>

          {/* connections */}
          <div className="py-3 w-56 bg-gray-100 shadow-lg text-center border-dashed border-2">
            <p className="font-bold">Connections</p>
            <p>Ethan Zhang</p>

            <br></br>
            <p>Ian Chen</p>
            <p>Vincent Huai</p>
            <p>Hubert Liu</p>
            <p>Mary Yu</p>
          </div>

          {/* Frontend */}

          <div className="py-3 text-center bg-gray-100 w-56 shadow-lg border-dashed border-2">
            <p className="font-bold">Frontend</p>
            <p>Basil Lera</p>
            <p>Lily Bedichek</p>
            <br></br>
            <p>Patrick Chi</p>
            <p>Albert Lee</p>
            <p>Michael Wu</p>
            <p>Tunan Zhuang</p>
            <p>Veer Ruparel</p>
          </div>

          {/* Backend */}

          <div className="py-3 text-center bg-gray-100 w-56 shadow-lg border-dashed border-2">
            <p className="font-bold">Backend</p>
            <p>Sarah Dou</p>
            <br></br>
            <p>Matthew Grupenhoff</p>
            <p>David Li</p>
            <p>Zephan Sanghani</p>
          </div>
        </div>

        <div className=" flex flex-col mb-20">
          <h1 className="text-xl font-bold p-2">Contact Us:</h1>
          <p>All feedbacks are greatly appreciated!</p>
          <iframe
            className="h-96 rounded-3xl m-4 shadow-lg"
            src="https://forms.gle/o9bmzkr5rjCiduLs5"
            title="Contact Form"
          ></iframe>
          <Link
            href="https://forms.gle/o9bmzkr5rjCiduLs5"
            className="text-primary hover:text-black underline"
          >
            https://forms.gle/o9bmzkr5rjCiduLs5
          </Link>
        </div>
      </div>
    </>
  );
}
