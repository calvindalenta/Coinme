import WelcomeContainer from "../../styled/WelcomeContainer";

export default function Header(){
    return (
        <WelcomeContainer>
            <div className="logo">
                <img src="/assets/coinprivy.svg" width="20px" height="20px" alt="Coinme Logo" />
                <p>COINME</p>
            </div>
            <div className="welcome">
                <h1>Welcome to Coinme</h1>
                <p>
                    is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA
                </p>
            </div>
        </WelcomeContainer>
    );
}
