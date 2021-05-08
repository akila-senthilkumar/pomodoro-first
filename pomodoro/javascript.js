var session_seconds = "00";
var session_minutes = 25;

function template()
{
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer()
{
    
    session_minutes = 24;
    session_seconds = 59;

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    var minutes_int = setInterval(min_timer, 60000);
    var seconds_int = setInterval(sec_timer, 1000);

    function min_timer()
    {
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }
    function sec_timer()
    {
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;
        if(session_seconds<=0)
        {
            if(session_minutes<=0)
            {
                clearInterval(min_timer);
                clearInterval(sec_timer);
                document.getElementById("done").innerHTML = "SESSION COMPLETED SUCCESSFULLY!!";
                document.getElementById("done").classList.add("show_message");
            }
            else
            {
                session_seconds = 60;
            }
        }
    }

}