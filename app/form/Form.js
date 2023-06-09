'use client';

export default function Form() {
  return (
    <form>
    <label htmlFor="data">Data</label>
      <input type="text" name="data" id="data" />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
