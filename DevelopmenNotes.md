- Created with npx create-expo-app@latest
  - Expo is a framework for react native
- Signed up for apple developer acct
- Followed the expo set up steps here: https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build

  - Can use IOS command to go through Xcode or can scan the qr code and go through the expo app

  Next Steps:
  - Setup SupaBase DB and Auth
  - Figure out how styling options - try out react native elements, Native Base, others
    - Might just be easier to use claude. Start with a theme and go from there
  - Notifications
  - Desing mobile screens for MVP and journey from sign on, connect, create workout, update workout numbers, sign out, others?
    - Login
    - Profile that lets you log out
    - Home with current day's 250 club and everyone's numbers
    - Connect - connect with others by email
      - I guess they might need to accept it?
    - History - partition by week and load more on scroll

    Inserted dummy data into schema for 3 users listed in .env file. Should now be able to start pulling in data