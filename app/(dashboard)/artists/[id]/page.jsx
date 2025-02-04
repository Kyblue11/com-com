import { notFound } from 'next/navigation'
import { getArtist, getArtistWorks } from '../../services/artists'
import { getServerComponentClient } from '../../supabaseClient'
import ProductCard from '../../../components/ProductCard'
import NewsletterForm from '../../../components/NewsletterForm'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = getServerComponentClient()

  const { data: artist } = await supabase.from('artists')
    .select()
    .eq('artist_id', params.id)
    .single()

  return {
    title: `ComCom | ${artist?.name || 'Artist not Found'}`
  }
}

// TODO: modularize this later
export default async function ArtistProfile({ params }) {
  const artist = await getArtist(params.id)
  const works = await getArtistWorks(params.id)
  
  const supabase = getServerComponentClient()
  const { data } = await supabase.auth.getSession()

  return (
    <div className="flex overflow-hidden flex-col pt-24 bg-white max-md:pt-24">
      <div className="flex flex-col ml-8 max-w-full w-[591px]">
        <div className="flex items-center">
          <h1 className="text-8xl tracking-tight text-black max-md:max-w-full@ max-md:text-4xl">
            {artist.name}
          </h1>
          {artist.profile_picture && (
            <img
              src={artist.profile_picture}
              alt={`Profile picture of ${artist.name}`}
              className="ml-4 w-24 h-24 rounded-full object-cover"
            />
          )}
        </div>
        <p className="mt-4 text-lg font-medium text-stone-900 text-opacity-50">
          {artist.bio || 'No bio available'}
        </p>
      </div>

      <div className="flex overflow-hidden flex-col items-start px-12 py-14 mt-6 max-w-full text-black bg-white w-[756px] max-md:px-5">
        <h2 className="text-2xl font-medium">
          About the Artist
        </h2>
        <div className="mt-10 text-base font-[250] max-md:mt-10">
          <p>Gender: {artist.gender}</p>
          <p>Socials:</p>
          <ul>
            {artist.socials.insta && (
              <li>
                <a href={artist.socials.insta} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Instagram
                </a>
              </li>
            )}
            {artist.socials.email && (
              <li>
                <a href={`mailto:${artist.socials.email}`} className="text-primary underline">
                  Email
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <section className="flex flex-col pl-12 mt-28 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-xl font-medium text-black tracking-[2px]">
          ARTIST'S WORK
        </div>
        <h2 className="mt-9 text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">
          Here are some of the best works
          from {artist.name}
        </h2>
        <button className="flex justify-center gap-5 px-7 py-4 mt-9 text-base font-medium text-center text-white bg-black rounded-[40px] max-md:px-5">
          See all
        </button>

        <div className="grid grid-cols-3 gap-5 mt-14 max-md:grid-cols-1">
          {works.slice(0, 3).map((work, index) => (
            <ProductCard
              ticket = { work }
            />
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-10 items-start mt-40 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full px-5 pl-10">
        <div className="flex flex-col items-start mt-4 text-black">
          <h2 className="text-xl font-medium tracking-[2px]">REVIEWS</h2>
          <div className="self-stretch mt-7 text-base font-[250]">
            Read what others have to say about {artist.name}'s work.
          </div>
          <div className="flex gap-4 mt-3.5">
            <div className="flex flex-col text-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/caa0fab17ad04eae8822654d11ffb6b0/b5a323ca4db6f919b32f8140f3c41a7818f84d23fe3b94b318b60e7a3fb7faf5?apiKey=caa0fab17ad04eae8822654d11ffb6b0&"
                alt="5 star rating"
                className="object-contain aspect-[5.95] w-[149px]"
              />
              <div className="self-start mt-4">2,479 reviews</div>
            </div>
            <div className="self-start text-base font-bold">5/5</div>
          </div>
        </div>
      
        <blockquote className="grow shrink self-stretch text-4xl font-medium text-black w-[660px] max-md:max-w-full">
          {artist.bio || 'No reviews available'}
        </blockquote>
      </section>

      <section className="flex flex-col items-start self-center px-20 pt-20 mt-12 max-w-full w-[1339px] max-md:px-5">
        <div className="flex flex-col items-start max-w-full w-[401px]">
          <h2 className="self-stretch text-5xl font-medium max-md:text-4xl">
           Get inspired from {artist.gender === 'male' ? 'his' : 'her'}
            <br />
             Instagram
          </h2>
          <p className="mt-2.5 text-base font-[250]">
            If you use the hashtag #comcom on Instagram,
            <br />
            we'll spotlight you.
          </p>
          <button className="flex gap-10 mt-2.5 text-xl items-center">
            Check it out
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/caa0fab17ad04eae8822654d11ffb6b0/e334b5cf55cd22e0f35033da6910cb5cf519176828008932f9d4ec3d626ad3a8?apiKey=caa0fab17ad04eae8822654d11ffb6b0&"
              alt=""
              className="object-contain w-6 aspect-square"
            />
          </button>
        </div>
      </section>

      <section className="self-center mt-12 w-full max-w-[1298px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full pl-10">
            <h2 className="text-5xl font-medium text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Stay updated with
              <br />
              special offers,
              <br/>
              news and more
              <br />
              from {artist.name}!
              <br/>
              <small>ㅤ</small>
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}