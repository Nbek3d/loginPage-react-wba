import styled, { css } from "styled-components";

export const PageCard=styled.div`
padding:0;
margin:0;
box-sizing: border-box;
width:100%;
height:100vh;
background-color:#6d9ac4;
display: flex;
align-items: center;
justify-content:center;

`;

export const LogCard= styled.div`
padding:0;
margin:0;
box-sizing: border-box;
width: 600px;
height: 500px;
background: #fff;
border-radius: 5px;
`;

export const Container = styled.div`
width:80%;
margin: 0 auto;
`;
export const HeadText = styled.h2`
color:#494F55;
font-size:1.5rem;
padding:10px 0;
`;

export const Context = styled.p`
color: #B6B6B4;
font-size: 1rem;
`;
export const Form = styled.form`
margin-bottom: 20px;
`;
export const Input = styled.input`
width: 400px;
height: 30px;
border: 1px solid #B6B6B4;
border-radius: 5px;
outline: none;
`;
export const Button= styled.button`
width: 400px;
height: 30px;
background-color:#f45385;
color: #fff;
font-size: .8rem;
border-radius: 5px;
border:none;
margin-top: 20px;
`;
export const Wrapper=styled.div`
margin-top: 20px;
width: 100%;
display:flex;
gap: 20px;
justify-content: center;
`;
export const Avatar=styled.div`
border: 2px solid ${(props)=>props.color};
padding: 5px 6px ;
border-radius:50%;
color:${(props)=>props.color} ;
`;


