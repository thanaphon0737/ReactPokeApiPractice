function Footer() {
    const getDate = new Date()
    const year = getDate.getFullYear()
  return (
    <footer className="flex justify-center mt-auto">
        <p>Made by Thanaphon ❤️👌 {year}</p>
    </footer>
  )
}
export default Footer