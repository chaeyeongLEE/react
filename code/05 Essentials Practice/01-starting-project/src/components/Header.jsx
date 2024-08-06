import headerLogo from '../assets/investment-calculator-logo.png'

export default function Header({message}) {
    return (
        <header id="header">
            <img src={headerLogo} alt="logoImg" />
            <h1>{message}</h1>
        </header>
    )
}