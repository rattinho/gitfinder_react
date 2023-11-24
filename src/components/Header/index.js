import styled from 'styled-components';

const Header = (props) => {
    return (
        <Head>
            <h1>GitFind</h1>
        </Head>
    );
}

export default Header;

const Head = styled.header`
    width: 100%;
    height: 55px;
    background-color: #2d333b;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0.1em;
        text-align: left;
    }
`;
