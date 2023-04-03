# TaxiPool

## Setup Android Studio & Emulator Device

1. Download & configure Android Studio [here](https://developer.android.com/studio) (Dolphin or later)
1. Navigate to `Virtual Device Manager` in Android Studio
1. Select `Create Device` in the Device Manager popup
1. Select the `Phone` category and select `Pixel 6 Pro`
1. Select `Next`
1. In the "System Image" menu, select release name `S`
   1.  If you see a `Download` icon beside the release name, you must click it to install it first
1. Select `Next`
1. Configure to the following:
    1.  **Startup orientation**: Portrait
    1.  **Emulated performance**: Automatic (or Hardware if you have a graphics card)
    1.  **Device Frame**: Yes
1. Select `Finish`

## Setup React Native
Visit [this setup guide](https://reactnative.dev/docs/environment-setup) and follow the instructions for `React Native CLI Quickstart` for your OS.

## Running the App
1. Ensure that you have the Android emulator running
1. Run `npm install` to install all dependencies
1. Run `npm run start` to start the app
1. When prompted, press `a` in the terminal to run the app on the Android emulator

## Creating a New Branch

```
git checkout -b "feature/my-description-here"
git push -u origin "feature/my-description-here"
```

### Branch Naming Conventions

- `feature/` - for new features
- `fix/` - for bug fixes
- `refactor/` - for refactoring code
- `docs/` - for documentation changes

## Merging a Branch

1. Rebase your branch onto `main` and resolve any conflicts

    ```bash
    git checkout main
    git pull --rebase origin main
    ```

1. Create a pull request on GitHub
1. Ensure that the pull request has been approved by at least one other developer
1. Merge the pull request into `main` on GitHub
