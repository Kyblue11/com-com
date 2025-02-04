import Link from 'next/link';
import Carousel from './Carousel';

export default function ProductCard({ ticket }) {
  return (
    <div key={ticket.id} className="card my-5">
      <Link href={`/tickets/${ticket.id}`}>
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0, 52)}...</p>
        {Array.isArray(ticket.commission_pics.urls) && (
          <Carousel images={ticket.commission_pics.urls} />
        )}
        <div className="artist-info">
          {ticket.artists.profile_picture && (
            <img src={ticket.artists.profile_picture} alt="Artist" className="artist-pic" />
          )}
          <p>{ticket.artists.name}</p>
        </div>
      </Link>
    </div>
  );
}