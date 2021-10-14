
export const updatePassword = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve({
      succes: Math.random() < 0.5
    }), Math.random * 1000)
  })
}