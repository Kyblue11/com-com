import Link from 'next/link'
import { getTickets } from '../services/tickets'

export default async function TicketList() {
  const tickets = await getTickets()
  // console.log("tickets are: ", tickets)
  
  return (
    <div className="ticket-grid">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 52)}...</p>
            {Array.isArray(ticket.commission_pics.urls) && ticket.commission_pics.urls.map((url, index) => (
              <img key={index} src={url} alt="Commission" className="commission-pic" />
            ))}
            <div className="artist-info">
              {ticket.artists.profile_picture && (
                <img src={ticket.artists.profile_picture} alt="Artist" className="artist-pic" />
              )}
              <p>{ticket.artists.name}</p>
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no commissions available OwO</p>
      )}
    </div>
  )
}