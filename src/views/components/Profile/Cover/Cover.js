import { shape, string, number } from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { logout, postCoverImage } from "../../../../state/ducks/profile/actions";
import { getUserID, getUserLevel, getUsername, getUserCoverImageUrl } from "../../../../state/ducks/profile/selectors";

import SecondaryText from "../../../styled/SecondaryText";
import { LogoutButton } from "../../../styled/Button";

import CoverContainer from "./styled/CoverContainer";
import ChangeCover from "./styled/ChangeCover";
import ProfileHeader from "./styled/ProfileHeader";
import HeaderContent from "./styled/HeaderContent";

Cover.propTypes = {
    user: shape({
        name: string,
        level: number,
        id: string
    })
}

Cover.defaultProps = {
    user: {
        name: "Your name",
        level: 0,
        id: "SG0"
    }
}

export function Cover({onChangeCover, onLogout, id, name, level, coverImageUrl}){

    const navigate = useNavigate()

    function handleOnLogout(e){
        onLogout()
        document.location.reload()
    }

    function handleOnChangeCover(e){
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0]
            const url = URL.createObjectURL(img)
            onChangeCover(url)
        }
    }

    return (
        <CoverContainer>
            <img src={coverImageUrl ? coverImageUrl : "/assets/dummycover.svg"} alt="User's Cover" />
            <ChangeCover htmlFor="cover-image">
                <input type="file" id="cover-image" onChange={handleOnChangeCover} hidden />
                <img src="/assets/camera.svg" alt="Camera" />
                <p>Change cover</p>
            </ChangeCover>
            <ProfileHeader>
                <HeaderContent>
                    <div>
                        <h1>{name}</h1>
                        <SecondaryText>Level {level} - #{id}</SecondaryText>
                    </div>
                    <LogoutButton onClick={handleOnLogout}>Logout</LogoutButton>
                </HeaderContent>
            </ProfileHeader>
        </CoverContainer>
    )
}

const mapStateToProps = state => {
    return {
        id: getUserID(state),
        name: getUsername(state),
        level: getUserLevel(state),
        coverImageUrl: getUserCoverImageUrl(state)
    }
}

const mapDispatchToProps = {
    onLogout: logout,
    onChangeCover: postCoverImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover)