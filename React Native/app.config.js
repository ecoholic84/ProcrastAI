import 'dotenv/config';

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;
const MEASUREMENT_ID = process.env.MEASUREMENT_ID;
const GOOGLE_SERVICES_JSON = process.env.GOOGLE_SERVICES_JSON;
const GOOGLE_SERVICES_INFO = process.env.GOOGLE_SERVICES_INFO;

export default {
    expo: {
        name: "ProcastAI",
        slug: "procastai",
        scheme: "procastai",
        version: "1.0.0", //increment by 0.0.1 in every release
        runtimeVersion: {
            policy: "sdkVersion"
        },
        orientation: "portrait",
        userInterfaceStyle: "light",
        platforms: [
            "ios",
            "android"
        ],
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#FFFFFF"
        },
        notification: {
            icon: "./assets/icon.png",
            androidMode: "collapse",
            androidCollapsedTitle: "ProcastAI",
            color: "#FFFFFF"
        },
        assetBundlePatterns: [
            "**/*"
        ],
        ios: {
            icon: "./assets/icon.png",
            bundleIdentifier: "com.nividaCorps.ProcastAI",
            buildNumber: "1", //increment in every ios release
            backgroundColor: "#FFFFFF",
            supportsTablet: false,
            googleServicesFile: GOOGLE_SERVICES_INFO,
            config: {
                "usesNonExemptEncryption": false
            },
            entitlements: {
                "com.apple.developer.networking.wifi-info": true
            },
            associatedDomains: ["applinks:notegpt.com"],
            infoPlist: {},
        },
        android: {
            package: "com.nividaCorps.ProcastAI",
            backgroundColor: "#FFFFFF",
            versionCode: 1, //increment in every android release
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#FFFFFF"
            },
            googleServicesFile: GOOGLE_SERVICES_JSON,
            permissions: [
                "android.permission.RECORD_AUDIO",
                "android.permission.ACCESS_COARSE_LOCATION",
                "android.permission.ACCESS_FINE_LOCATION",
                "android.permission.FOREGROUND_SERVICE"
            ],
            intentFilters: [
                {
                    action: "VIEW",
                    autoVerify: true,
                    data: [
                        {
                            scheme: "https",
                            host: "procastai.com",
                            pathPrefix: "/"
                        },
                        {
                            scheme: "http",
                            host: "procastai.com",
                            pathPrefix: "/"
                        }
                    ],
                    category: ["BROWSABLE", "DEFAULT"]
                }
            ]
        },
        plugins: [
            [
                "expo-build-properties",
                {
                    android: {
                        compileSdkVersion: 33,
                        targetSdkVersion: 33,
                        buildToolsVersion: "33.0.0",
                        enableProguardInReleaseBuilds: true,
                        enableShrinkResourcesInReleaseBuilds: true,
                        extraProguardRules: "-keep public class com.horcrux.svg.** {*;}",
                        allowBackup: false,
                    },
                    ios: {
                        deploymentTarget: "13.4",
                        useFrameworks: "static"
                    }
                }
            ],
        ],
        extra: {
            eas: {
                projectId: "3f81e6cb-50ad-4f30-9713-efb05ad31f0d"
            },
            FIREBASE_API_KEY: FIREBASE_API_KEY,
            AUTH_DOMAIN: AUTH_DOMAIN,
            PROJECT_ID: PROJECT_ID,
            STORAGE_BUCKET: STORAGE_BUCKET,
            MESSAGING_SENDER_ID: MESSAGING_SENDER_ID,
            APP_ID: APP_ID,
            MEASUREMENT_ID: MEASUREMENT_ID,
        },
        owner: "nivida_corps"
    }
};