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

export interface UserSuggestion{
    _id:string,
     name:string,
      profilePicture :string,
}