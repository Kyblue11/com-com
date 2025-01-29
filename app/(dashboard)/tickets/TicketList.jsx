import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

async function getTickets() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('tickets')
    .select()

  if (error) {
    console.log(error.message)
  }

  return data
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <div className="ticket-grid">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 52)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
            {ticket.commission_pic && (
              <img src={ticket.commission_pic} alt="Commission" className="commission-pic" />
            )}
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </div>
  )
}