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

export interface StateUserType {
    user: UserType
}

export interface Forgot {
    statusForgot: string
}

export interface UpdateInforType {
    msg : string,
    token : string,
    user : UserType
}
