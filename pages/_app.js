import '../styles/global.css'

// グローバルCSSは_app.js内でしかimportできない
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

//グローバル CSS を追加するから

