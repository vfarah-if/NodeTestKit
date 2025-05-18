# Most efficient way to start a Node kata
Help do node Katas with minimul effort, lots of centralised documents on katas and the latest recomendations. Here is a set of recommendations.

- Fork this and then you just need to branch and code away

  ![Keep Your Code Base Clean with Regular Refactoring | TechWell](https://www.techwell.com/sites/default/files/shared/2018-12-12%20DheerendraM%20Keep%20Your%20Code%20Base%20Clean%20with%20Regular%20Refactoring%20image.png)

- Setup with node latest, installing `pnpm` with with Jest and a basic sample to run, NVM and install 'pnpm'

- When you hit the refactoring phase, check code for [code smells](https://refactoring.guru/refactoring/smells)

- If you are pairing with people, make sure to discuss before hand the [pairing etiquette](https://www.thoughtworks.com/insights/blog/seven-principles-pair-programming-etiquette) of what will happen

- Create a folder with README.md and keep your changes short and sweet

- Make sure you use a timer https://cuckoo.team/ to ping pong between you

- Make sure the code formatter and dev environment is working consistently before starting as this will just spoil the flow if it is not setup in a ping pong kinda way

- Make sure as you as developing that follow [Beck's design](https://martinfowler.com/bliki/BeckDesignRules.html) rules:

  - Passes the tests
  - Reveals intention
  - No duplication
  - Fewest elements

- **Environment** has only `pnpm test` and `pnpm watch`

  ```shell
  # Test to check environment is working for all parties and a quick way of getting into things
   PASS  sum/sum.should.test.ts
    sum should
      ✓ sum two numbers (2 ms)
      ✓ sum two numbers with negative
      ✓ sum two numbers with zero
      ✓ sum two numbers with decimal
      ✓ sum [1, 2] to equal 3 (1 ms)
      ✓ sum [-1, -2] to equal -3
      ✓ sum [0, 0] to equal 0
      ✓ sum [1.5, 2.5] to equal 4
      ✓ sum [1, 2, 3] to equal 6
      ✓ sum [1, 2, 3, 4, 5] to equal 15
      ✓ sum [-1, -2, -3, -4, -5] to equal -15
      ✓ sum [-1, 2, -3, 4, -5] to equal -3
  
  Test Suites: 1 passed, 1 total
  Tests:       12 passed, 12 total
  Snapshots:   0 total
  Time:        0.864 s
  Ran all test suites.
  
  Watch Usage
   › Press f to run only failed tests.
   › Press o to only run tests related to changed files.
   › Press p to filter by a filename regex pattern.
   › Press t to filter by a test name regex pattern.
   › Press q to quit watch mode.
   › Press Enter to trigger a test run.
  
  ```

- There should be a vscode for setting vscode with prettier, add extension

- This is how I set this up this project ready for you to hit the ground running

  - `pnpm` is fast and disk-efficient

  - What do I need to get it working?

    - Install the latest node using nvm

    - Install via `corepack` (Recommended for Node.js ≥16.13)

      ```bash
      ❯ corepack enable
      ❯ corepack prepare pnpm@latest --activate
      Preparing pnpm@latest for immediate activation...
      ❯ pnpm --version
      10.10.0
      ❯ node --v
      node: bad option: --v
      ❯ node -v
      v22.14.0
      ```

    - Initialise a new project using `pnpm`:

      ```bash
      mkdir test-pnpm && cd test-pnpm
      pnpm init
      ```

    - Install dev dependencies

      ```bash
      # Install jest and tyescript as this will always be my base from here on
      pnpm add -D jest ts-jest @types/jest typescript
      ```

    - Initialise the `ts-jest` config:

      ```
      ❯ npx ts-jest config:init
      ❯ pnpm add -D jest @types/jest
      ❯ npx jest --init
      ```

    - Create the sum kata to setup the environment ready to start:

      ```bash
      ❯ pnpm test
      ❯ pnpm watch
       PASS  sum/sum.test.ts
        sum
          ✓ should sum two numbers (1 ms)
          ✓ should sum two numbers with negative
          ✓ should sum two numbers with zero
          ✓ should sum two numbers with decimal
      
      Test Suites: 1 passed, 1 total
      Tests:       4 passed, 4 total
      Snapshots:   0 total
      Time:        0.554 s
      Ran all test suites.
      
      Watch Usage: Press w to show more.
      ```

    - Install ESLint and Prettier:

      ```bash
      ❯ pnpm add -D eslint prettier
      ```

    - Initialise ESLint for TypeScript:

      ```bash
      ❯ pnpx eslint --init
      ```

    - Add Prettier Compatibility:

      ```bash
      ❯ pnpm add -D eslint-config-prettier eslint-plugin-prettier
      ```

    - Format Prettier on save via vscode settings for the moment:

      ```json
      {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
      }
      ```
