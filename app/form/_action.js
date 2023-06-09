'use server';

export async function createData(formData) {
  const data = Object.fromEntries(formData.entries());
  throw new Error('Not implemented');
}
