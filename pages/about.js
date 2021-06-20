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
            Qui suis je?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Ingénieur en énergie et procédés [systèmes embarqués].</div>
            <div className="text-gray-500 dark:text-gray-400">Passionné de l'IoT, de la programmation informatique et de l'univers du dev logiciel.</div>
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
              Je m'appelle Tawaliou ALAO et je suis un jeune ingénieur en génie énergétique et procédés orienté systèmes embarqués et IoT.
              Je suis actuellement stagiaire à YoupiLab et je réside au Bénin. 
              J'aime la programmation informatique et j'explore l'univers du développement logiciel pour y découvir...peut être des extra-terrestres🤣.
            </p>
            <p>
              Ecrire du code me permet de m'exprimer, de réflchir et de voir, de réaliser ce qui me traverse l'esprit. 
              Je peux tester mes idées, changer ma façon de voir. 
              Mais au delà de tout, la programmation informatique pour moi est comme une aventure où atteindre le panthéon des développeurs innovateurs,
              ayant changés le cours de l'histoire est un objectif clé... 🧐. 
              L'utiliser dans le domaine de l'énergie ou tout autre d'autre n'est que ma vision.
            </p>
            <p>
              Je suis un fan du language C++ que j'utilise en dans les systèmes embarqués (programmation des microcontrôleurs, IoT,...)
              et dont j'explore les utilisations. Je m'approprie actuellement Kotlin pour pouvoir développer des applications
              mobiles IoT (Android) robustes et fiables. 
              J'aime et j'utilise beaucoup le JavaScript. Parce qu'il me permet d'être fullstack mais aussi d'être indépendant
              et de concrétiser rapidement mes idées d'applications web et mobile multiplateforme à travers React 
              (mon framework JS préféré), ReactNative et l'éternel NodeJS (c'est trop cool ce runtime) 
              que j'utilise pour la mise en place de serveur web. 
              De ce fait je peux penser une architecture IoT complète: depuis le matériel jusqu'à la plateforme web en passant par l'application mobile.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
