import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Who am I?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Power and Process Engineer [Embedded Systems/IoT].
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Passionate about IoT, computer programming and the world of software dev.
            </div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              My name is Tawaliou ALAO and I am a young engineer in energy and process engineering
              focused on embedded systems and IoT. I am currently an intern at YoupiLab and I live
              in Benin. I love computer programming and I explore the world of software development
              to discover ... maybe aliens
              <span role="img" aria-label="smile">
                🤣
              </span>
              .
            </p>
            <p>
              Writing code allows me to express myself, to think and to see, to realize what crosses
              my mind. I can test my ideas, change my outlook. But above all, computer programming
              for me is like an adventure to reach the pantheon of innovative developers, having
              changed the course of history is a key objective ...{' '}
              <span role="img" aria-label="look at">
                🧐
              </span>
              . Using it in the field of energy or any other is just my vision.
            </p>
            <p>
              I am a fan of the C ++ language that I use in embedded systems (programming
              microcontrollers, IoT, ...) and whose uses I explore. I am currently appropriating
              Kotlin to be able to develop robust and reliable IoT (Android) mobiles applications. I
              like and use JavaScript a lot. Because it allows me to be fullstack but also to be
              independent and quickly realize my ideas for cross-platform web and mobile
              applications through React (my favorite JS framework), ReactNative and the eternal
              NodeJS (it's so cool this runtime) that I use for setting up web server. So I can
              think of a complete IoT architecture: from the hardware to the web platform via the
              mobile application.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
