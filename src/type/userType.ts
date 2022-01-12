export interface UserType {
    _id : string,
    email: string,
    name: string,
    address: string,
    phone_number: string,
    profilePicture: string,
    coverPicture: string,
    followers: string[],
    followings: string[],
    desc: string,
    gender: string,
}