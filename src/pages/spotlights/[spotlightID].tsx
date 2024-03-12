import Image from 'next/image';

import Container from '@/components/shared/Container';

export default function SpotlightData() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center mt-12 mb-24">
      <div className="max-w-2xl">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-max relative mx-auto group rounded-full overflow-hidden">
            <div className="relative w-48 h-48">
              <Image
                src={
                  'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
                }
                alt="Profile Image"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="text-4xl font-bold text-neutral-700">
            Elizabeth Chang-Davidson
          </div>
        </div>
        <div className="w-full flex flex-col items-start text-neutral-500 space-y-2 mt-6 text-justify">
          <p>
            Elizabeth Chang-Davidson, a 2015 graduate, was deeply involved in
            Gunn High Schools community. She was a member of seven clubs,
            including serving as the president of the garden club. Additionally,
            Elizabeth was actively engaged in the math club, eventually becoming
            its secretary, and participated in the Junior State of America.
            Academically, she pursued a rigorous curriculum, particularly
            excelling in math, and also took automotive classes, finding
            enjoyment in the subject. Elizabeth also explored computer science
            with Mr. Paley, an experience she found rewarding. Her
            extracurricular activities extended to robotics, where she was part
            of the Space Cookies team.
          </p>
          <p>
            In college, Elizabeth continued her diverse interests. She worked on
            an electric race car project and later shifted focus to musical
            theater, contributing to set building, costume design, and other
            aspects. She was also a member of the marching band. Academically,
            Elizabeth majored in math and mechanical engineering, further
            highlighting her commitment to both STEM fields and the arts, the
            latter evidenced by her concentration in theater and coursework in
            that area.
          </p>
          <p>
            Professionally, Elizabeth pursued higher education, culminating in a
            PhD, which she completed last year. She also completed a postdoc at
            Northeastern University, focusing on metal 3D printing, before
            moving to Carnegie Mellon University.
          </p>
          <p>
            Reflecting on her time at Gunn, Elizabeth emphasizes the importance
            of being organized and managing time effectively, skills she
            continues to find invaluable. Her advice to Gunn students is to
            prioritize work-life balance, drawing from her own experiences of
            feeling stressed and the wisdom she gained from others, like Mr.
            O’Connell, who stressed the importance of finding a personal balance
            between effort and personal well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
