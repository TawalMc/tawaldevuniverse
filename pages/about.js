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
            <div className="text-gray-500 dark:text-gray-400">Power and Process Engineer.</div>
            <div className="text-gray-500 dark:text-gray-400">
              Passionate about web dev, computer engineering and soccer.
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
              from Benin. I love computer programming and I explore the world of software
              engineering to discover ... maybe aliens. And
              <span role="img" aria-label="smile">
                🤣
              </span>
              .
            </p>
            <p>
              Writing code allows me to express myself, to think and to see what crosses my mind. I
              can test my ideas, change my outlook. Using it in the field of energy or any other
              field is just my vision.
            </p>
            <p>
              And here I talk about my discoveries in web development as well as in the embedded
              world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
