import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

export const Center = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-size: 30px;
`

export const Nav = styled.nav`
    width: 340px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-size: 13px;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 15px;
    }
    span {
        margin-left: 3px;
    }
`