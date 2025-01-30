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
      <label>
        <span>Artist ID:</span>
        <input required type="number" name="artist_id" />
      </label>
      <label>
        <span>Commission Picture(s) URL: TODO: Automate Bucket insertion</span>
        <input required type="text" name="commission_pic" />
      </label>
      <label>
        <span>Price:</span>
        <input required type="number" name="price" step="0.01" />
      </label>
      <SubmitButton />
    </form>
  )
}