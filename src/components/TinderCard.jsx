import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardInfo, InfoPerson, BioPerson, LikeArea, BotaoLike, BotaoDislike, ResetButton, Reset  } from "../../style";


function tinderCard() {
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-suela-barros/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const choosePerson = (profileId, choice) => {
    const body = {
      id: profileId,
      choice: choice,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-suela-barros/choose-person",
        body
      )
      .then((res) => {
        if (body.choice && res.data.isMatch) alert("Deu Match");
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const clearProfile = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-suela-barros/clear"
      )
      .then((res) => {
        alert("Perfis resetados");
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const profileCard = profile ? (
    <div>
      <div>
      <CardInfo src={profile.photo} />
      <InfoPerson>
        {profile.name}, {profile.age}
      </InfoPerson>
      <BioPerson>{profile.bio}.</BioPerson>
      </div>
      <LikeArea>
        <BotaoLike
          onClick={() => {
            choosePerson(profile.id, true);
          }}
        >
          💚
        </BotaoLike>
        <BotaoDislike
          onClick={() => {
            choosePerson(profile.id, true);
          }}
        >
          ❌
        </BotaoDislike>
      </LikeArea>
    </div>
  ) : (
    <Reset>
      <h4>Acabaram os perfis</h4>
      <ResetButton
        onClick={() => {
          clearProfile();
        }}
      >
        Resetar
      </ResetButton>
    </Reset>
  );

  return <div>{profileCard}</div>;
}

export default tinderCard;
