import moment from "moment";
import { useState } from "react";

import FormInputDate from "../../../styled/forms/FormInputDate";
import { FormActions } from "../../../styled/forms/FormActions";
import { FormBody } from "../../../styled/forms/FormBody";
import { FormItemRow } from "../../../styled/forms/FormItemRow";
import { FormLabel } from "../../../styled/forms/FormLabels";
import { FormHeaderNoSpacing } from "../../../styled/forms/FormHeaders";
import { FormInput } from "../../../styled/forms/FormInputs";
import { SecondaryTextNoSpacing } from "../../../styled/SecondaryText";
import { ClickableImage, PrimaryButton, SecondaryButton } from "../../../styled/Button";
import { getUserEducation } from "../../../../state/ducks/profile/selectors";
import { connect } from "react-redux";
import { postEducation } from "../../../../state/ducks/profile/actions";

import Educations from "./styled/Educations";
import EducationHeader from "./styled/EducationHeader";

export function Education({onSubmit, education}){

    const [isDisabled, setIsDisabled] = useState(true)
    const [schoolName, setSchoolName] = useState("")
    const [graduationTime, setGraduationTime] = useState("")

    const graduatinTimeFormatted = moment(education.graduation_time).format("MMM D, YYYY")

    const anyEducation = education.school_name && education.graduation_time

    async function handleOnSubmit(e) {
        e.preventDefault()
        onSubmit(schoolName, graduationTime)
        setIsDisabled(true)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <FormBody>
                <EducationHeader>
                    <div>
                        <FormHeaderNoSpacing>Education Information</FormHeaderNoSpacing>
                        <SecondaryTextNoSpacing>Information about your education</SecondaryTextNoSpacing>
                    </div>
                    <ClickableImage src="/assets/plus.svg" alt="Edit" onClick={() => setIsDisabled(!isDisabled)}/>
                </EducationHeader>
                {!isDisabled &&
                <>
                <FormItemRow>
                    <FormLabel htmlFor="name">School Name</FormLabel>
                    <FormInput type="text" id="name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                </FormItemRow>
                <FormItemRow>
                    <FormLabel htmlFor="start">Graduation Time</FormLabel>
                    <FormInputDate type="date" id="start" value={graduationTime} onChange={(e) => setGraduationTime(e.target.value)}/>
                </FormItemRow>
                <FormActions>
                    <PrimaryButton type="reset" onClick={() => setIsDisabled(true)}>Discard</PrimaryButton>
                    <SecondaryButton type="submit">Add Education</SecondaryButton>
                </FormActions>
                </>
                }
                {anyEducation 
                ?
                <Educations>
                    <p>{education.school_name}</p>
                    <p>Graduated at {graduatinTimeFormatted}</p>
                </Educations>
                : <SecondaryTextNoSpacing>Let's add some education!</SecondaryTextNoSpacing>
                }
                
            </FormBody>
        </form>
    )
}

const mapStateToProps = state => ({education: getUserEducation(state)})

const mapDispatchToProps = {
    onSubmit: postEducation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Education)