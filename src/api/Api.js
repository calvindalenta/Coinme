import { mockProfile } from "./mockProfile";

class Api {
    constructor(domain) {
        this.domain = domain;
    }

    login(phoneNumber, password) {
        return Promise.resolve({
            access_token: phoneNumber + password,
            token_type: "bearer"
        })
    }

    register(phoneNumber, password) {
        return Promise.resolve({
            success: true
        })
    }

    getProfile(token) {
        if (!token) throw Error("Missing required parameter 'token'");
        return Promise.resolve(mockProfile)
    }

    postProfile(token, name, gender, birthday, hometown, bio) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...mockProfile,
            name,
            gender,
            birthday,
            hometown,
            bio 
        }
        return Promise.resolve(newProfile)
    }

    postProfilePicture(token, imageUrl) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...mockProfile,
            user_picture: imageUrl
        }
        return Promise.resolve(newProfile)
    }

    postCoverImage(token, imageUrl) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...mockProfile,
            cover_picture: {
                url: imageUrl
            }
        }
        return Promise.resolve(newProfile)
    }

    postCareer(token, companyName, startingFrom, endingIn) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...mockProfile,
            career: {
                company_name: companyName,
                starting_from: startingFrom,
                ending_in: endingIn
            }
        }
        return Promise.resolve(newProfile)
    }

    postEducation(token, schoolName, graduationTime) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...mockProfile,
            education: {
                school_name: schoolName,
                graduation_time: graduationTime,
            }
        }
        return Promise.resolve(newProfile)
    }
}

export default Api;
