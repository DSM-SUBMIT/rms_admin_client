import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Center = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-between;
`

export const CategoryArea = styled.div`
    width: 190px;
    height: 233px;
    background-color: white;
    margin-top: 125px;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    padding: 20px 22px;
`

export const Category = styled.form`
    margin-top: 15px;
    div {
        margin: 6px 0;
    }
    label {
        padding-left: 10px;
        font-size: 15px;
    }
`

export const ProjectArea = styled.div`
    display: flex;
    flex-direction: column;
`

export const SearchArea = styled.section`
    margin-left: 15px;
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

export const ProjectList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const Item = styled.li`
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
    margin: 12px;
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

export const Footer = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
`