export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: (msg) => `Hello ! voici le message : ${msg}! `
        }
    }
})