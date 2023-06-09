'use client';

import { createData } from './_action';

export default function Form() {
  return (
    <form action={createData}>
      <label htmlFor="data">Data</label>
      <input type="text" name="data" id="data" />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
