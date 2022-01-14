import { FollowingsType } from "../type/folloingType";

export const setFollowing = (data: FollowingsType[]) => ({
    type: 'SET_FOLLOWING',
    payload : data,
});