import styled from "styled-components";
import { color } from "../../../style";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, .5);
  position: fixed;
`

export const Modal = styled.div`
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 450px;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
`

export const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    img {
        cursor: pointer;
    }
`

export const ProjectName = styled.div`
    font-size: 18px;
    text-align: center;
    margin: 15px 0;
`

export const ViewButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin: 10px;
        width: 250px;
        height: 40px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid ${color.border};
        color: ${color.main};
        font-size: 15px;
    }
`

export const Etc = styled.div`
    width: 350px;
    height: 130px;
    margin: 0 auto;
    padding: 15px 25px;
`

export const EtcButton = styled.div`
    width: 300px;
    height: 80px;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    button {
        width: 55px;
        height: 70px;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: white;
        border: 1px solid ${color.border};
        border-radius: 10px;
    }
    span {
        font-size: 7px;
    }
`
