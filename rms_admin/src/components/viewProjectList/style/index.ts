import styled, {css} from 'styled-components';
import { color } from '../../../style';

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
    width: 205px;
    height: 233px;
    background-color: white;
    margin-top: 105px;
    border-radius: 10px;
    border: 1px solid ${color.border};
    padding: 20px 22px;
`

export const Category = styled.form`
    margin-top: 15px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
        display: flex;
        align-items: center;
        label {
            padding-left: 10px;
            font-size: 15px;
        }
    }
`

export const CheckDiv = styled.div<{
    isClick: boolean;
}>`
    width: 12px;
    height: 12px;
    cursor: pointer;
    ${({ isClick }) => css`
    background-color: ${isClick ? color.main : color.border};
  `}
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
        border: 1px solid ${color.border};
        width: 190px;
        height: 30px;
        font-size: 12px;
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
    box-shadow: 3px 4px 5px ${color.border};
    display: flex;
    flex-direction: column;
    padding: 12px 30px;
    border: none;
    justify-content: space-between;
    margin: 12px;
    cursor: pointer;
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
    align-items: center;
`

export const Tag = styled.div`
    height: 18px;
    font-size: 12px;
    color: ${color.main};
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    border: 1px solid ${color.main};
    border-radius: 12px;
    & + & {
        margin-left: 5px;
    }
`

export const Footer = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    button {
        width: 23px;
        margin: 0 6px;
    }
`

export const Page = styled.div`
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 2px;
`
