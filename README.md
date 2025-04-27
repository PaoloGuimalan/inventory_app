This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

# Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Main Functionalities](#main-functionalities)
- [API URL / IP Address Configuration (Local Development)](#api-url--ip-address-configuration-local-development)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)

---

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

Metro is the JavaScript build tool for React Native.

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and Run Your App

With Metro running, open a new terminal and use one of the following commands:

### Android

```sh
npm run android
# OR
yarn android
```

### iOS

For iOS, install CocoaPods dependencies first:

```sh
bundle install
bundle exec pod install
```

Then run:

```sh
npm run ios
# OR
yarn ios
```

If everything is set up correctly, you should see your app running in the Android Emulator, iOS Simulator, or your device.

## Step 3: Modify your app

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

To forcefully reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

---

# Project Structure

```
app/
├── src/
│   ├── layouts/           # Layout components (e.g., Home, Layout)
│   ├── redux/             # Redux store, actions, reducers, types
│   ├── services/
│   │   └── https/         # HTTP requests (API calls)
│   ├── types/             # TypeScript types/interfaces for navigation, state, etc.
│   ├── views/             # Main screen components (LandingView, Profile, Settings, ProductListing)
│   ├── widgets/           # Reusable UI widgets (e.g., HomeNavigations, SearchHeader)
│   └── constants/         # App-wide constants (e.g., API URLs)
├── App.tsx                # App entry point, navigation setup
├── README.md              # This file
└── ...
```

---

# Main Functionalities

- **Navigation:** Uses React Navigation with a stack navigator for Home, Profile, Settings, and ProductListing screens.
- **Redux State Management:** Handles authentication and other app state using Redux.
- **Product Listing:**
  - Displays a list of products.
  - Supports searching and filtering by context or category.
  - Fetches data from a backend API.
- **Search:**
  - Search bar with live editing and submit.
  - Handles empty search with user feedback.
- **Reusable Components:**
  - `HomeNavigations`: Navigation bar with icons.
  - `SearchHeader`: Search input with back button.
- **API Integration:**
  - All API requests are made using Axios (or fetch) from the `services/https/requests` directory.
  - API base URL is configurable for local or production use.
- **TypeScript:**
  - Strong typing for navigation, state, and API data.

---

# API URL / IP Address Configuration (Local Development)

When running the app locally, you may need to change the API base URL or IP address so your mobile app can communicate with your backend server.

## Where to Change the API URL

The API base URL is typically defined in a configuration file, such as:

- `app/src/config/config.ts`
- Or directly in your API request files

**Example:**

```js
// Example: app/src/config/config.ts
export const API_BASE_URL = 'http://192.168.1.100:3000/api'; // Change this to your local IP and port
```

## How to Find Your Local IP Address

- **Windows:** Run `ipconfig` in Command Prompt and look for your IPv4 address.
- **Mac/Linux:** Run `ifconfig` or `ip a` in Terminal.

## Why?

- **Emulators/Simulators:** Use your machine's local IP address (not `localhost` or `127.0.0.1`) so the app can reach your backend server.
- **Physical Devices:** Make sure your device is on the same network as your computer.

## Example

If your computer's IP is `192.168.1.100` and your backend runs on port `3000`, set:

```js
export const API_BASE_URL = 'http://192.168.1.100:3000/api';
```

---

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

---

# Learn More

- [React Native Website](https://reactnative.dev)
- [Getting Started](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [Blog](https://reactnative.dev/blog)
- [`@facebook/react-native`](https://github.com/facebook/react-native)

---

# Building a Production APK (Android)

To generate a production-ready APK for Android, you can usually run:

```sh
cd android
./gradlew assembleRelease
```

- The APK will be in `android/app/build/outputs/apk/release/app-release.apk`

For many development setups (especially if you are just testing or using the debug keystore), **this may work directly without any extra configuration**.

---

**If you see errors about signing configs or want to upload your app to the Play Store:**

1. **Generate a Keystore (only once):**

   ```sh
   keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

   - Save the `my-release-key.keystore` file in your `android/app` directory.

2. **Configure the Keystore in `android/gradle.properties`:**

   ```properties
   MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
   MYAPP_RELEASE_KEY_ALIAS=my-key-alias
   MYAPP_RELEASE_STORE_PASSWORD=*****
   MYAPP_RELEASE_KEY_PASSWORD=*****
   ```

3. **Edit `android/app/build.gradle`:**
   Make sure the `signingConfigs` and `release` sections use the above variables.

4. **Build the APK again:**

   ```sh
   ./gradlew assembleRelease
   ```

5. **Test the APK on a real device before publishing.**

For more details, see the [official React Native docs](https://reactnative.dev/docs/signed-apk-android).

---

**For further details, see comments in the codebase or reach out to the project maintainer.**
