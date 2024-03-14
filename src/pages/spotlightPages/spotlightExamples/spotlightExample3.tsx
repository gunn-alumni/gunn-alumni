import Head from 'next/head';
import Container from '@/components/shared/Container';
export default function spotlightExample3() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Spotlights</title>
        <meta
          name="description"
          content="Example Profile Page - Caroline Liu"
        />
      </Head>
      <Container>
        <div className="my-4">
          <h1 className="mb-8 text-4xl font-bold md:text-3xl">
            {' '}
            Caroline Liu, 2019
          </h1>
          <p className="prose prose-xl mb-8 text-gray-500 px-0">
            Caroline Liu, a graduate of the class of 2019, exemplifies the spirit of versatility and determination at Gunn High School and beyond. During her time at Gunn, Caroline delved into various pursuits, including Robotics (although not affiliated with GRT), involvement with the Space Cookies, and a passion for dance. Her academic journey was marked by a keen interest in engineering and STEM fields, evident through her enrollment in physics and computer science courses, as well as her active participation in the yearbook staff. Transitioning to college, Caroline continued her engagement in Robotics and dance, all while majoring in electrical and computer engineering, immersing herself in coursework that aligned with her passion. Additionally, she briefly explored Greek life, adding another dimension to her collegiate experience.
            <br /><br />
            Upon graduating from Carnegie Mellon University in 2023, Caroline embarked on her professional career as an electrical engineer, where her background in time management and prioritization, honed through her experiences in both high school and college, continues to serve her well. Caroline&apos;s journey underscores the importance of maintaining balance between academic pursuits and personal well-being. Her advice to fellow alumni emphasizes the significance of not being too hard on oneself amidst challenges, recognizing that there is more to life than solely academic achievements. Caroline&apos;s story serves as an inspiration to current and future Gunn alumni, demonstrating the value of perseverance, time management, and embracing a holistic approach to life&apos;s endeavors.
          </p>
        </div>
      </Container>
    </>
  );
}
