import Button from './Button'

const Header = ({onAdd, showAdd}) => {


    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {showAdd ? <Button text = 'Close' onClick = {onAdd} color='red'/> 
            : <Button text = 'Add' onClick = {onAdd} />}
        </header>
    )
}

// const headingStyle = {
//     color: 'red' , 
//     backgroundColor:'black',
// }

export default Header
