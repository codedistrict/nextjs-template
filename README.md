## Coding Guidelines

### File Naming

When we create components, make sure that the component file name starts with a capital. Also, it is preferable that the component to have its own folder where other related files can sit next to it (unit tests, styling, etc.)

### Component Coding

In the approach of organizing code, please follow these rules:

- Destructre Props: we can destructure props at function parameter level if we are going to use these props repeatedly within the code. Otherwise keep props destructured. Alternatively, start the function body with destructuring.\
  ```js
  function Modal(props: ModalProps) {
    const { show, onClose, children, title } = props;
  ```
- Initialize State Variables — (if we have state)
- Create Refs — (if we need refs)
- Initialize hooks - (if there are other hooks)
- Write all useEffects - (if we need useEffect)
- Create const/var/let specific to Component
- Call functions — (if we have functions)

## Internationalization

The library used is [next-translate](https://github.com/vinissimus/next-translate)

- The texts are located in:<br>`/locales/${LANG}/${module}.js` <br>exp: `/locales/en/dashboard.js`
- Put the texts inside the files organized with nesting like this:

  ```js
  {
      page1:{
          title: ...
          something_0: "There is nothing"
          something_one: "There is one thing",
          something_other: "There are {{count}} things",
      },
      page2: ...
  }
  ```

- Then use them in components this:

  ```jsx
  import useTranslation from "next-translate/useTranslation";

  export default function DashboardPage() {
    const { t } = useTranslation("dashboard");

    return (
      <div>
        <h1>{t("page1.title")}</h1>
        <p>{t("page1.something", { count: 2 })}</p>

        {/* text from other module (exp: common) */}
        <button>{t("common:submit")}</button>
      </div>
    );
  }
  ```

- **IMPORTANT**: When you add a module make sure to make it accessible to the designated pages in `i18n.json`
  for Example: dashboard.js file should be accessible from all pages under `https://2global.com/dashboard/*`

  ```json
    "pages": {
      "*": ["common"],
      "rgx:^/dashboard/":["dashboard"]
    }
  ```

ℹ️ For more infomation check the [Docs](https://github.com/vinissimus/next-translate)

## Testing

The libraries used are [Jest](https://github.com/facebook/jest) and [React testing library](https://github.com/testing-library/react-testing-library)

### <h1>Testing a function: </ins>

```js
import { distance } from "utils";
// describe the test
describe("Distance Function", () => {
  it("Calculates the distance between two points", () => {
    // make your tests
    let pointA = { x: 0, y: 0 };
    let pointB = { x: 42, y: 0 };
    expect(distance(pointA, pointB)).toBe(42);
  });
});
```

### <h1>Testing a component: </ins>

```js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// describe the test
describe("Login", () => {
  it("Renders a disabled login button", () => {
    // render the component
    const login = render(<Login />);
    // select a target
    const button = screen.getByRole("Button", { name: "login" });
    // make your tests
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
```

### <h1>Snapshot test: </ins>

```js
  let target = /* Component or Object */;
  expect(target).toMatchSnapshot();
```

On the first run, Jest will create a snapshot of the target and save it to `./__snapshots__`

Snapshots should be kept in git history, and should be updated when the target changes.

To update all snapshots run `npm run snapshot`

### <h1>Coverage test: </ins>

To do coverage test run `npm run coverage`

### <h1>Mock functions: </ins>

To avoid running the actual function, mock the result as follow:

```js
const distance = jest.fn();
distance.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValue(99); // >> 10 then 20, 99, 99 ...
// Or if you want some custom results
let i = 1;
distance.mockImplementation(() => i++); // >> 1 then 2, 3, 4 ...
// Or if the function returns a promise
distance.mockResolveValueOnce(10).mockResolveValueOnce(20).mockResolveValue(99);
```

We can also mock modules:

```js
import axios from "axios";
import { getFilteredUsers } from "users";

jest.mock("axios");
const users = [user1, user2, user3];
const filteredUsers = [user1, user3];

describe("getFilteredUsers", () => {
  it("Gets a filtered list of users", () => {
    axios.get.mockResolvedValue(users);
    // do your tests
    expect(getFilteredUsers()).toEqual(filteredUsers);
  });
});
```

ℹ️ For more infomation check the [Jest Docs](https://jestjs.io/docs/getting-started) and [React testing library Docs](https://testing-library.com/docs/queries/about/#screen)

## Braintree Payment Gateway Integration

Payment integration is carried out by using the custom component BraintreePayment. It's in charge of communicating with the local server and Braintree server to perform transactions (payments or subscription to plans). For a quick reference of the steps followed to perform these transactions, here is a [quick overview](https://developer.paypal.com/braintree/docs/start/hello-client).

```
<BraintreePayment
  ref={paymentRef}
  customerId={props.customerId ?? ""}
  amount={(plan?.price ?? 0) * 12}
  subscribeToPlan={plan?.type}
/>
```

- ref is used (with the help of the useRef hook) to access the submitForm function within the component. The component doesn't show a submit button. At the moment of writing, registration had payment gateway form included with another form. For this reason, the registration button is making the call for actual payment. This payment returns a promise with the success or failure result.
- customerId is needed for adding a customer to a plan. This customerId was fetched from Braintree at registration after email verification stage.
- amount is a required field to provide the transaction amount.
- subscribeToPlan is an optional field. If used, the component will add the customer to a subscription plan on Braintree. If absent, the component will issue a normal payment transaction.

### Env Variables

In addition to enviornment variables mentioned in **Braintree Configuration** section there are more variable mentioned in .env.example which needs to be set to make the app work


```
SD_URL
CLASSIFICATION_URL

```
### Testing

In order to test the payment gateway page, here is [a page](https://developer.paypal.com/braintree/docs/reference/general/testing#test-value-4000111111111115) that gives you many cards to test.

### Braintree Configuration

In order to provide braintree with its configuration, create a local root file `.env.local` with the following keys that you get from Braintree console:

```
MERCHANT_ID
PRIVATE_KEY
PUBLIC_KEY
```

---

## Amplify Setup

- Install the Amplify CLI globally

```
npm install -g @aws-amplify/cli
```

- Run: `amplify pull --appId $APP_ID --envName dev` to pull environment set on backend

**_Note_**: $APP_ID should be taken from AWS Amplify Studio backend environment

In some point, it will ask you for the next information:

```console
? What javascript framework are you using: react
? Source Directory Path:  .
? Distribution Directory Path: .next
? Build Command:  npm run build
? Start Command: npm run start
```

After successful pull

- Run: `amplify pull` to pull everything from Amplify backend and generate aws-exports file

Once done, you should find aws-exports.js containing the config at the root of the project.
