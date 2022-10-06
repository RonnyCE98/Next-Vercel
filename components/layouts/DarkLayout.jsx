export const DarkLayout = ({children}) => {
  return (
    <div style={
        {
            backgroundColor: "gray",
            padding: '10px',
            borderRadius: '5px',

        }
    }>
        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
