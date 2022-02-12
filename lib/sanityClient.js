import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'o3ic5nt4',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skhcMkmAjUT0VvFMx9sbI5V8gocGHB2FsekEXgy99OD9dOzQf1LJ1LBsJwPAy77oWiRnXpYISc3gkWGKx1B7Kg3pM9cxvAlWhS9jgNtUKtIZKjADbkabAVTQrjZK9AFKQdDjqu07EalaWIGwgWbzOOIJJ6ErSXIN6N76oylWtdeez45Fywgr',
  useCdn: false,
})