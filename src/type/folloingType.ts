export interface FollowingsType {
    _id : string, 
    name : string, 
    profilePicture : string
}

export interface SateFollowingsType {
    followings : FollowingsType[]
}