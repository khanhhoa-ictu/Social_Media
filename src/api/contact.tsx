import axios, { AxiosResponse } from "axios";

export function updateInfor(email : string, name : string, address : string, phone_number : string,gender : string): Promise<any> {
    return axios.post('http://localhost:8080/user/updateinfor', {
        email : email, 
        name : name, 
        coverPicture : '',
        address : address, 
        phone_number : phone_number,
        gender : gender
    })
    .then((response : AxiosResponse<any>) => response.data)
  }
  