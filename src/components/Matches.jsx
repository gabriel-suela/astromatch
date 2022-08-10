import React, { useEffect, useState } from "react";
import axios from "axios";
import {Title, ResetButton2, Matches, MatchesContainer, MatchesInfo} from "../../style"

function matches () {
    const [matches, setMatches] = useState([])


    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-suela-barros/matches'

    useEffect(()=>{
        getMatches()
    },[])

    const getMatches = () =>{
        axios.get(url).then((res) =>{
            setMatches(res.data.matches)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    
    const allMatches = matches.map ((user)=>{
        return (
            <MatchesContainer key={user.id}>
            <Matches src={user.photo} />
            <MatchesInfo>{user.name}</MatchesInfo>
            </MatchesContainer>
        )
    })

    const clearProfile = () => {
        axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-suela-barros/clear"
          )
          .then((res) => {
            alert("Perfis resetados");
            getMatches();
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
    
    return (

        <div>
            <Title>Matches</Title>
           
                {allMatches}
            
        <ResetButton2 onClick={() => {
          clearProfile();
        }}>Limpar</ResetButton2>
        </div>

    )
}


export default matches