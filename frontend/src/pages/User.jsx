export default function User(){
    const handleClick = async()=>{
        const users = await fetch("/api/users")
        console.log('users',users)

    }
    return(
        <div>
           <h1>user page</h1>
           <button onClick={handleClick}>ClickMe</button>

        </div>
    )
}