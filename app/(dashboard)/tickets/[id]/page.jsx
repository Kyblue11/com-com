import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTicket } from '../../services/tickets'
import { getServerComponentClient } from '../../supabaseClient'

// components
import DeleteIcon from './DeleteIcon'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = getServerComponentClient()

  const { data: ticket } = await supabase.from('tickets')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `ComCom | ${ticket?.title || 'Ticket not Found'}`
  }
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  const supabase = getServerComponentClient()
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Commission Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteIcon id={ticket.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small></small>
        <p>{ticket.body}</p>
        {ticket.commission_pic && (
          <img src={ticket.commission_pic} alt="Commission" className="commission-pic" />
        )}
        <p>Artist: <Link href={`/artists/${ticket.artist_id}`}>{ticket.artists.name}</Link></p>
        <p>Additional attributes:</p>
        <ul>
          <li>Attribute 1: {ticket.attribute1}</li>
          <li>Attribute 2: {ticket.attribute2}</li>
          {/*TODO: add more attributes as needed */}
        </ul>
      </div>
    </main>
  )
}