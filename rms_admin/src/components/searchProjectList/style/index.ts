import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Center = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchArea = styled.section`
    height: 80px;
    display: flex;
    align-items: flex-end;
    input {
        padding: 2px 10px;
        margin-left: 10px;
        border-radius: 30px;
        border: 1px solid #E5E5E5;
        width: 190px;
        height: 30px;
    }
    form {
        width: 525px;
        display: flex;
        justify-content: space-between;
    }
`

export const SearchList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const Item = styled.button`
    width: 526px;
    height: 110px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 4px 5px #E5E5E5;
    display: flex;
    flex-direction: column;
    padding: 12px 30px;
    border: none;
    justify-content: space-between;
    margin: 10px;
`

export const Type = styled.span`
    font-size: 12px;
`

export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
`

export const Team = styled.span`
    font-size: 12px;
`

export const TagArea = styled.div`
    display: flex;
`

export const Tag = styled.div`
    font-size: 12px;
    color: #386BEE;
    padding: 2px 10px;
    border: 1px solid #386BEE;
    border-radius: 12px;
    & + & {
        margin-left: 5px;
    }
`

export const SearchResult = styled.h3`
    margin: 80px;
    text-align: center;
`