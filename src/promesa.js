export const promesa = (producto) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 1000)
    })
}