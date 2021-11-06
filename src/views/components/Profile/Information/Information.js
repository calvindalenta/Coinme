import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "../../../../state/ducks/profile/selectors";
import { postProfile, postProfilePicture } from "../../../../state/ducks/profile/actions";

import FormInputDate from "../../../styled/forms/FormInputDate";
import { FormActions } from "../../../styled/forms/FormActions";
import { FormBody } from "../../../styled/forms/FormBody";
import { FormItemRow } from "../../../styled/forms/FormItemRow";
import { FormLabel } from "../../../styled/forms/FormLabels";
import { FormHeaderNoSpacing, FormHeader } from "../../../styled/forms/FormHeaders";
import { FormInput, FormSelect, TextArea } from "../../../styled/forms/FormInputs";
import { AccentLabel, ClickableImage, PrimaryButton, SecondaryButton } from "../../../styled/Button";
import SecondaryText, { SecondaryTextNoSpacing } from "../../../styled/SecondaryText";

import InformationGrid from "./styled/InformationGrid";
import InformationHeader from "./styled/InformationHeader";
import MediaContainer from "./styled/MediaContainer";

export function Information({onSubmit, onImageChange, user}){

    const [isDisabled, setIsDisabled] = useState(true)
    const [form, setForm] = useState(user)

    useEffect(() => { 
          setForm({...user}) 
    }, [user])

    function handleOnImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0]
            const url = URL.createObjectURL(img)
            onImageChange(url)
        }
    }

    function handleOnInputChange(e) {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function handleOnReset(e) {
        setIsDisabled(true)
    }

    async function handleOnSubmit(e) {
        e.preventDefault()
        onSubmit(form.name, form.gender, form.birthday, form.hometown, form.bio)
        setIsDisabled(true)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <FormBody>
                <InformationHeader>
                    <div>
                        <FormHeaderNoSpacing>Profile Information</FormHeaderNoSpacing>
                        <SecondaryTextNoSpacing>Your personal data</SecondaryTextNoSpacing>
                    </div>
                    <ClickableImage src="/assets/edit.svg" alt="Edit" onClick={() => setIsDisabled(!isDisabled)}/>
                </InformationHeader>
                <InformationGrid>
                    <div className="left">
                        <FormHeader>Product Detail</FormHeader>
                        <FormItemRow>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormInput 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={form.name ? form.name : ""} 
                                onChange={handleOnInputChange} 
                                disabled={isDisabled}
                            />
                        </FormItemRow>
                        <FormItemRow>
                            <FormLabel htmlFor="gender">Gender</FormLabel>
                            <FormSelect 
                                id="gender" 
                                name="gender" 
                                value={form.gender ? form.gender : ""} 
                                onChange={handleOnInputChange} 
                                disabled={isDisabled}
                            >
                                <option value="" hidden>Choose a gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </FormSelect>
                        </FormItemRow>
                        <FormItemRow>
                            <FormLabel htmlFor="birthday">Date of Birth</FormLabel>
                            <FormInputDate 
                                type="date" 
                                id="birthday" 
                                name="birthday" 
                                value={form.birthday ? form.birthday : ""} 
                                onChange={handleOnInputChange} 
                                disabled={isDisabled}
                            />
                        </FormItemRow>
                        <FormItemRow>
                            <FormLabel htmlFor="wethon">Wethon</FormLabel>
                            <FormSelect id="wethon" name="wethon" value={form.zodiac ? form.zodiac : "Aquaman"} disabled={isDisabled}>
                                <option value="" hidden>Choose one</option>
                                <option value="Aquaman">Aquaman</option>
                                <option value={form.zodiac}>{form.zodiac}</option>
                            </FormSelect>
                        </FormItemRow>
                        <FormItemRow>
                            <FormLabel htmlFor="bio">Bio</FormLabel>
                            <TextArea 
                                placeholder="Write your bio here" 
                                name="bio" id="bio" rows="5" 
                                value={form.bio ? form.bio : ""} 
                                onChange={handleOnInputChange} 
                                disabled={isDisabled}
                            />
                        </FormItemRow>
                    </div>
                    <div className="right">
                        <MediaContainer>
                            <FormHeader>Profile Picture</FormHeader>
                            <img src={user.user_picture ? user.user_picture : "/assets/dummyprofile.svg"} alt="Profile"/>
                            {!isDisabled &&
                            <>
                            <input type="file" id="image-upload" hidden onChange={handleOnImageChange}/>
                            <AccentLabel htmlFor="image-upload">Upload Media</AccentLabel>
                            <SecondaryText>PNG, JPG or MP4 up to 50MB</SecondaryText>
                            </>
                            }
                        </MediaContainer>
                        <FormItemRow>
                            <FormLabel htmlFor="hometown">Address</FormLabel>
                            <TextArea 
                                placeholder="Your address" 
                                name="hometown" 
                                id="hometown" rows="5" 
                                value={form.hometown ? form.hometown : ""} 
                                onChange={handleOnInputChange}  
                                disabled={isDisabled}
                            />      
                        </FormItemRow>
                    </div>
                </InformationGrid>
                <FormActions>
                    {!isDisabled &&
                    <>
                    <PrimaryButton type="reset" onClick={handleOnReset}>Discard</PrimaryButton>
                    <SecondaryButton type="submit">Update</SecondaryButton>
                    </>
                    }
                </FormActions>
            </FormBody>
        </form>
    )
}

const mapStateToProps = state => ({user: getUserProfile(state)})

const mapDispatchToProps = {
    onSubmit: postProfile,
    onImageChange: postProfilePicture
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)