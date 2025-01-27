import CreateForm from './CreateForm'

export default async function CreateTicket() {
  return (
    <main>
      <h2 className="text-center">Upload your new commission!</h2>
      <CreateForm />
    </main>
  )
}