console.log('Loading function');
        
import {S3Client, GetObjectCommand} from '@aws-sdk/client-s3';
const s3 = new S3Client({region: 'us-east-1'});


export const handler = async (event, context) => {

    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    console.log(`bucket is ${bucket} and key is ${key}`)
    const params = {
        Bucket: bucket,
        Key: key,
    }; 
    try {
        const response = await s3.send(new GetObjectCommand(params));
        const responseStr = await response.Body.transformToString();
        console.log(`responseStr , ${responseStr}`);
        const responseJson = JSON.parse(responseStr); 
        const hasKey = 'password' in responseJson;
        console.log(`hasKey  ${hasKey}`);
        if(hasKey) {
            console.log(`WARNING WARNING :::: THE FILE, ${key}, CONTAINS SENSITIVE DATA`);
        }
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};