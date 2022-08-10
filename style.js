import styled from "styled-components";


export const CardInfo = styled.img`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 600px;
  width: 650px;
  margin: 0 auto;
  margin: 20px;
  filter: brightness(0.5) opacity(1);
  border: none;
  
`;

export const LikeArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
 
`;

export const BotaoLike = styled.button`
  text-align: center;
  width: 90px;
  border-radius: 50%;
  height: 90px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const BotaoDislike = styled.button`
  text-align: center;
  width: 90px;
  border-radius: 50%;
  height: 90px;
  cursor: pointer;
  border: 1px solid red;
  border: none;
  font-size: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const InfoPerson = styled.p`
  padding: 20px;
  font-size: 2rem;
  color:white;
  margin-left: 20px;
  position: absolute;
  margin-top: -150px;
`;

export const BioPerson = styled.p`
  padding-left: 20px;
  padding-top: 10px;
  font-size: 1.1rem;
  margin-left: 20px;
  color: white;
  height: 100%;
  position: absolute;
  margin-top: -100px;
  height: 80px;
  width: 500px;
`;

export const Reset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  & h4{
    font-size: 1.5rem;
    padding: 20px;
  }
`

export const ResetButton = styled.button`
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`


export const MatchesContainer = styled.div `
    display: flex;
    align-items: center;
    
`
export const Matches = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 20px;
`

export const MatchesInfo = styled.span`
    text-align: center;
    font-weight: bold;
    margin: 20px 20px 0px;
`
export const Title = styled.h2 `
    margin-left: 20px;
    padding-top: 10px;
`

export const ResetButton2 = styled.button`

  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 20px;
  padding: 10px 12px;
  text-align: center;

`