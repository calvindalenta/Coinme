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

    postProfile(currentProfile, token, name, gender, birthday, hometown, bio) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            name,
            gender,
            birthday,
            hometown,
            bio 
        }
        return Promise.resolve(newProfile)
    }

    postProfilePicture(currentProfile, token, imageUrl) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            user_picture: imageUrl
        }
        return Promise.resolve(newProfile)
    }

    postUserPicture(currentProfile, token, imageUrl) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            user_pictures: [...currentProfile.user_pictures, imageUrl]
        }
        return Promise.resolve(newProfile)
    }

    postCoverImage(currentProfile, token, imageUrl) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            cover_picture: {
                url: imageUrl
            }
        }
        return Promise.resolve(newProfile)
    }

    postCareer(currentProfile, token, companyName, startingFrom, endingIn) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            career: {
                company_name: companyName,
                starting_from: startingFrom,
                ending_in: endingIn
            }
        }
        return Promise.resolve(newProfile)
    }

    postEducation(currentProfile, token, schoolName, graduationTime) {
        if (!token) throw Error("Missing required parameter 'token'");
        const newProfile = { 
            ...currentProfile,
            education: {
                school_name: schoolName,
                graduation_time: graduationTime,
            }
        }
        return Promise.resolve(newProfile)
    }
}

export default Api;
