import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button text = 'Add' onClick={onClick} />
        </header>
    )
}

// const headingStyle = {
//     color: 'red' , 
//     backgroundColor:'black',
// }

export default Header
