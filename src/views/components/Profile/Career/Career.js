import moment from "moment";
import { useState } from "react";
import { connect } from "react-redux";

import FormInputDate from "../../../styled/forms/FormInputDate";
import { FormActions } from "../../../styled/forms/FormActions";
import { FormBody } from "../../../styled/forms/FormBody";
import { FormItemRow } from "../../../styled/forms/FormItemRow";
import { FormLabel } from "../../../styled/forms/FormLabels";
import { FormHeaderNoSpacing } from "../../../styled/forms/FormHeaders";
import { FormInput } from "../../../styled/forms/FormInputs";
import { SecondaryTextNoSpacing } from "../../../styled/SecondaryText";
import { ClickableImage, PrimaryButton, SecondaryButton } from "../../../styled/Button";

import { postCareer } from "../../../../state/ducks/profile/actions";
import { getUserCareer } from "../../../../state/ducks/profile/selectors";

import CareerHeader from "./styled/CareerHeader";
import Careers from "./styled/Careers";

export function Career({onSubmit, career}){

    const [isDisabled, setIsDisabled] = useState(true)
    const [companyName, setCompanyName] = useState("")
    const [starting, setStarting] = useState("")
    const [ending, setEnding] = useState("")

    const startingFormatted = moment(career.starting_from).format("MMM D, YYYY")
    const endingFormatted = moment(career.ending_in).format("MMM D, YYYY")

    const anyCareer = career.starting_from && career.ending_in

    async function handleOnSubmit(e) {
        e.preventDefault()
        onSubmit(companyName, starting, ending)
        setIsDisabled(true)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <FormBody>
                <CareerHeader>
                    <div>
                        <FormHeaderNoSpacing>Career Information</FormHeaderNoSpacing>
                        <SecondaryTextNoSpacing>Information about your career</SecondaryTextNoSpacing>
                    </div>
                    <ClickableImage src="/assets/plus.svg" alt="Edit" onClick={() => setIsDisabled(!isDisabled)}/>
                </CareerHeader>
                {!isDisabled &&
                <>
                <FormItemRow>
                    <FormLabel htmlFor="name">Company Name</FormLabel>
                    <FormInput type="text" id="name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                </FormItemRow>
                <FormItemRow>
                    <FormLabel htmlFor="start">Start From</FormLabel>
                    <FormInputDate type="date" id="start" value={starting} onChange={(e) => setStarting(e.target.value)}/>
                </FormItemRow>
                <FormItemRow>
                    <FormLabel htmlFor="end">Ending In</FormLabel>
                    <FormInputDate type="date" id="end" value={ending} onChange={(e) => setEnding(e.target.value)}/>
                </FormItemRow>
                <FormActions>
                    <PrimaryButton type="reset" onClick={() => setIsDisabled(true)}>Discard</PrimaryButton>
                    <SecondaryButton type="submit">Add Career</SecondaryButton>
                </FormActions>
                </>
                }
                {anyCareer 
                ?
                <Careers>
                    <p>{career.company_name}</p>
                    <p>{startingFormatted} - {endingFormatted}</p>
                </Careers>
                : <SecondaryTextNoSpacing>Let's add your career information!</SecondaryTextNoSpacing>
                }
            </FormBody>
        </form>
    )
}

const mapStateToProps = state => ({career: getUserCareer(state)})

const mapDispatchToProps = {
    onSubmit: postCareer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Career)