// import {handle}
import { microServiceInstance } from "../utils/micro-service-instance-utils";
import { microServicesNames } from "../constants/microservices-names";

const microServicesName = microServicesNames.pimsServices;

export const getAppointmentDetails = async(
    id:number,
) => {
   try {
    const {data} = await microServiceInstance.get(
        `${microServicesName}/api/appointment/${id}`
    );
    // console.log("Services data: ===========>",data);
    if(data){
        return data;
    }
   } catch (error) {
     console.log(error);
   }
}



export const getAllAppointmentDetails = async(
    payload:any,
) => {
   try {
    console.log("Service Payload:===========>", payload);
    // const data1 = {
    //     limit: 5,
    //     offset: 0,
    //     keyword: "Wish",
    //     filters: {
    //         assignedDoctor: [
    //             1,
    //             2
    //         ]
    //     }
    // }
    const {data} = await microServiceInstance.post(
        `${microServicesName}/api/appointment/all-details`,
        payload
    );
    console.log("Services data: ===========>",data);
    if(data.count){
        return data;
    }else{
        return{
            rows: [],
            count:0
        }
    }
   } catch (error) {
     console.log(error);
   }
}

export const createAppointment = async(
    payload:any,
) => {
   try {
    console.log("Service Payload:===========>", payload);
    
    const {data} = await microServiceInstance.post(
        `${microServicesName}/api/appointment`,
        payload
    );
    console.log("Services data: ===========>",data);
    if(data){
        return data;
    }
   } catch (error) {
     console.log(error);
   }
}


export const updateAppointmentById = async(
    payload:any,
) => {
   try {
    console.log("Service Payload:===========>", payload);
    
    const {data} = await microServiceInstance.put(
        `${microServicesName}/api/appointment`,
        payload
    );
    console.log("Services data: ===========>",data);
    if(data){
        return data;
    }
   } catch (error) {
     console.log(error);
   }
}