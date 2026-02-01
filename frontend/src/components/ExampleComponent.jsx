// Example component
function ExampleComponent({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default ExampleComponent
