import { FormBody } from "../../../styled/forms/FormBody";
import { FormHeaderNoSpacing } from "../../../styled/forms/FormHeaders";
import { SecondaryTextNoSpacing } from "../../../styled/SecondaryText";
import { ClickableImage } from "../../../styled/Button";
import { getUserPictures } from "../../../../state/ducks/profile/selectors";
import { connect } from "react-redux";
import { postUserPicture } from "../../../../state/ducks/profile/actions";

import GalleryHeader from "./styled/GalleryHeader";
import ImagesContainer from "./styled/ImagesContainer";

export function Gallery({addPicture, user_pictures}){

    const images = user_pictures.map((item, index) => {
        const url = item
        return <img key={item} src={url} alt={`Gallery ${index}`}/>
    })

    function handleOnChangeGallery(e){
        if (!e.target.files) return

        Array.from(e.target.files).forEach(file => {
            const url = URL.createObjectURL(file)
            addPicture(url)
        });
    }

    return (
        <FormBody>
            <GalleryHeader>
                <div>
                    <FormHeaderNoSpacing>Gallery</FormHeaderNoSpacing>
                    <SecondaryTextNoSpacing>Upload your special moment</SecondaryTextNoSpacing>
                </div>
                <label htmlFor="gallery-upload">
                    <input type="file" id="gallery-upload" multiple hidden onChange={handleOnChangeGallery}/>
                    <ClickableImage src="/assets/plus.svg" alt="Edit"/>
                </label>
            </GalleryHeader>
            {images.length
            ? 
            <ImagesContainer>
                {images}
            </ImagesContainer>
            :
            <SecondaryTextNoSpacing>No moments to show. Let's add some!</SecondaryTextNoSpacing>
            }
        </FormBody>
    )
}

const mapStateToProps = state => ({user_pictures: getUserPictures(state)})

const mapDispatchToProps = {
    addPicture: postUserPicture
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)