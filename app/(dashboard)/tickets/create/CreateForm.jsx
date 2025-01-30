import SubmitButton from "@/app/components/SubmitButton"
import { addTicket } from "../actions"

// TODO: prob dont need this file
export default function CreateForm() {
  return (
    <form action={addTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" name="title" />
      </label>
      <label>
        <span>Body:</span>
        <textarea required name="body" />
      </label>
      <SubmitButton />
    </form>
  )
}