// app/api/braintree/getClientToken.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import gateway from '../../../../lib/braintreeClient';

// Assuming you want to use a GET request to fetch the client token
async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request for Braintree client token received');
  try {
    const response = await gateway.clientToken.generate({});

    return new Response(response.clientToken);
    // res.status(200).json({ clientToken: response.clientToken });
  } catch (error) {
    console.error('Error generating Braintree client token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
