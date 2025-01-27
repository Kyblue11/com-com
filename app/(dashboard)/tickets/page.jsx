import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

export const metadata = {
  title: 'Com com | Tickets'
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>All Commissions</h2>
          <p><small>Check out our commission tickets by human artists!</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket (Artists)</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}