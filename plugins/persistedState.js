import createPersistedState from "vuex-persistedstate"; 

export default ({store}) => {
    createPersistedState({
      paths: ["example", "todos"], 
    })(store)
}
// 쿠키 사용 소스
// import * as Cookies from "js-cookie"; 
// import cookie from "cookie"; 
// export default ({ store, req }) => { 
//     createPersistedState({ 
//         paths: ["example"], 
//         storage: { 
//             getItem: (key) => { 
//                 console.log("**********************");
//                 console.log(store);
//                 console.log("**********************");
//                 // See https://nuxtjs.org/guide/plugins/#using-process-flags 
//                 if (process.server) {
//                     console.log("===================="); 
//                     console.log(req.headers.cookie); 
//                     console.log("====================");
//                     const parsedCookies = cookie.parse(req.headers.cookie); 
//                     return parsedCookies[key]; 
//                 } else { 
//                     return Cookies.get(key); 
//                 } 
//             }, 
//             // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON. 
//             setItem: (key, value) => 
//                 Cookies.set(key, value, { expires: 365, secure: false })
//             , removeItem: (key) => Cookies.remove(key) 
//         } 
//     })(store); 
// };