import * as Mutations from '../graphql/mutations';
import {API, Amplify} from 'aws-amplify';

import awsExports from '../aws-exports';
// import Amplify from 'aws-amplify';
Amplify.configure(awsExports);
export const createNewInfo  = async (infoData) => {
    
    try{
        const addInfo = await API.graphql({query:Mutations.createInstruction,variables:{input:infoData}})
        console.log("the information has been added",addInfo.data.createInstruction);
    }
    catch(error){
     console.log("error info:",error);
    }
}

    export const updateInfo =async(infoData) => {
        try{
            const upInfo=await API.graphql({query:Mutations.updateInstruction,variables:{input:infoData}})
            console.log("the updated info is: ",upInfo.data.updateInstruction);
        }
    
    catch(error){
        console.log("error info:",error);
    }
}

export const deleteInfo=async(infoData) => {
    try{
        console.log("xyz:",infoData);
        const  delInfo =await API.graphql({query:Mutations.deleteInstruction,variable:{input:infoData.name}})
        console.log(delInfo);
        console.log("the deleted info is:",delInfo.data.deleteInstruction); 
        // console.log("xyz:",infoData);
    }
    catch(error){
        console.log("the error info:",error);
    }
}

 