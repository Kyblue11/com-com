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
          <p>Check out our commission tickets by human artists!</p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}