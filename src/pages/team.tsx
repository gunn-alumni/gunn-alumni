import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import capstone from '@/../public/images/capstone.jpg';

/* TODO:
 *
 */

export default function Team() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Team</title>
        <meta name="description" content="Get to know our development team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="box-border px-4 py-4 md:px-24 md:py-10 lg:px-60 lg:py-10 flex flex-col gap-y-4">
        <div className="border-b-2 border-dotted">
          <h1 className="text-2xl font-bold"> About the Team </h1>
          <div className="p-5">
            <p>
              We are a group of students in Mr. Paley&apos;s 4th period CS
              Capstone class who are building a website to connect Gunn alumni.
              We hope to give our graduates an accessible way to:
            </p>
            <ul className="list-disc px-10 py-3">
              <li>
                Connect with and celebrate each other, current students and
                teachers{' '}
              </li>
              <li>
                Support their school and community through donations, events,
                etc.
              </li>
              <li>
                {' '}
                and for administrators to get feedback from alumni for students
                to communicate with recent graduates
              </li>
            </ul>

            <p>
              To learn more about us, see our&#160;
              <Link
                className="underline text-primary"
                href="https://blog.gunnhigh.school/"
              >
                blog
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex justify-center px-32">
          <Image
            src={capstone}
            alt="photo of clowns"
            className="shadow-lg rounded-md"
          />
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
          <p>All feedback is greatly appreciated!</p>
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
