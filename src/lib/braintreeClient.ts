import braintree from 'braintree';

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // or Production
  merchantId: 'znsjtjdm8tfqxwrq',
  publicKey: 'fbf5fh7qqj26mq7s',
  privateKey: '8b818d2b79338d2ba8180976c5f84ad0',
});

export default gateway;
