// WebGL Template Configuration
// Tất cả config được tập trung tại đây để dễ quản lý
// 
// Cách sử dụng:
// - LIFF config: window.GameConfig.liff
// - Firebase config: window.GameConfig.firebase  
// - Game info: window.GameConfig.game
// - Build paths: window.GameConfig.build
//
// Để thay đổi config, chỉ cần sửa file này và không cần rebuild Unity
window.GameConfig = {
    liff: {
        liffId: "2007739328-AXQNennQ",
        withLoginOnExternalBrowser: true
    },
    firebase: {
        apiKey: "AIzaSyBlmSTnWXmJ7AM62x6GrXS6JOQTyC8agDM",
        authDomain: "tadogami-7f67a.firebaseapp.com",
        projectId: "tadogami-7f67a",
        storageBucket: "tadogami-7f67a.firebasestorage.app",
        messagingSenderId: "498552618046",
        appId: "1:498552618046:web:a6289460f773df389d256f",
        measurementId: "G-Y3KSRPFPBM"
    },
    game: {
        productName: "AutoRPGAdventure",
        companyName: "DefaultCompany"
    },
    build: {
        dataUrl: "Build/Tadokami_Build.data",
        frameworkUrl: "Build/Tadokami_Build.framework.js",
        codeUrl: "Build/Tadokami_Build.wasm",
        streamingAssetsUrl: "StreamingAssets"
    }
}; 
