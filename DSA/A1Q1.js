const nums1 = [3,3];
const target1 = 6;
let Output1=[];
Output1=getsum(nums1,target1);
console.log(Output1);
function getsum(nums,target)
{
    let Output=[];
    const map=new Map ();
    map.set(nums[0],[0]);
    for(let i=1;i<nums.length;i++)
    {
        if(map.has(nums[i]))
        {
            let arr=map.get(nums[i]);
            map.delete(nums[i]);
            arr.push(i);
            map.set(nums[i],arr);
        }
        else
        {
            map.set(nums[i],[i]);
        }
    }
    for(let i=0;i<nums.length;i++)
    {
        const reqnum=target-nums[i];
        if( map.has(reqnum))
        {      
            index1=map.get(reqnum)[0]; 
            if(map.get(reqnum).length>1)
            {            
                index2=map.get(reqnum)[1];
                if(index1!=i)
                {
                    Output=[i,index1];
                    return Output;
                }
                else if(index2!=i)
                {
                    Output=[i,index2];
                    return Output;
                }
            }
            else if(index1!=i)
            {
                Output=[i,index1];
                return Output;
            }
       
        }  
    }
}
