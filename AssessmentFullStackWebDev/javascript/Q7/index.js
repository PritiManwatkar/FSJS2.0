function DisplayResult()
{
    //promise is created
    let myPromise = new Promise(
        function(myResolve, myReject) 
        {
            let req = new XMLHttpRequest();
            let filename= document.querySelector( 'input[name="rThing"]:checked').value;
            //trying to open a file
            req.open('GET', filename);
            req.onload = function() 
            {
                if (req.status == 200) //if the file is opened successfully
                {
                    myResolve(req.response);//resolve the promise
                } 
                else //if unable to open file
                {
                    myReject("File not Found");//reject the promise
                }
            };
            req.send();
        }
    );
    myPromise.then(
        function(value) //if resolved
        {
            myDisplayer(value);//display value
        },
        function(error) //if rejected
        {
            myDisplayer(error);//display error
        }
    );
}
function myDisplayer(some) 
{
    document.getElementById("demo").innerHTML = some;
}